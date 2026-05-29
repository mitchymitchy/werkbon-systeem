# Rollen en RLS-voorbereiding

## Rollen

- `mechanic`: monteursomgeving Start.
- `office_admin`: beveiligde Kantooromgeving.

## Frontendregels

- Mechanic ziet geen Kantoor-tab.
- Mechanic kan `#/office` niet openen.
- Mechanic krijgt melding: `Geen toegang tot kantooromgeving`.
- Mechanic ziet geen inkoopprijzen, materiaalkosten, inkoopprijzen of open bestelbedragen.
- Office admin ziet alle projecten, kosten, voorraad, bestellingen, gebruikersbeheer.

## Datamodel-scheiding

Gebruik in Supabase aparte tabellen voor operationeel gebruik en kosten:

```sql
create type app_role as enum ('mechanic', 'office_admin');

create table users (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  email text not null unique,
  role app_role not null default 'mechanic',
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table projects (
  id uuid primary key default gen_random_uuid(),
  project_name text not null,
  customer_name text not null,
  address text,
  mechanic_id uuid not null references users(id),
  status text not null default 'open',
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create table project_usage (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  kit_id text not null,
  item_id uuid not null,
  used_quantity integer not null,
  created_at timestamptz not null default now()
);

create table project_costs (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  item_id uuid not null,
  used_quantity integer not null,
  purchase_price_at_time numeric(10,2) not null,
  total_price numeric(10,2) not null
);
```

## RLS-richting

```sql
alter table projects enable row level security;
alter table project_usage enable row level security;
alter table project_costs enable row level security;

create policy "mechanic own projects"
on projects for select
using (
  mechanic_id = auth.uid()
  or exists (select 1 from users where users.id = auth.uid() and users.role = 'office_admin')
);

create policy "mechanic own usage"
on project_usage for select
using (
  exists (
    select 1 from projects
    where projects.id = project_usage.project_id
    and projects.mechanic_id = auth.uid()
  )
  or exists (select 1 from users where users.id = auth.uid() and users.role = 'office_admin')
);

create policy "office only costs"
on project_costs for select
using (
  exists (select 1 from users where users.id = auth.uid() and users.role = 'office_admin')
);
```

Belangrijk: `project_costs` nooit direct leesbaar maken voor `mechanic`. Kosten mogen intern worden berekend, maar alleen `office_admin` mag ze opvragen.

