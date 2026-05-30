# Multi-tenant rollen en RLS-voorbereiding

Doel: een platform waarop meerdere installatiebedrijven dezelfde applicatie gebruiken zonder elkaars data te kunnen zien.

## Rollen

- `mechanic`: ziet alleen eigen werkbonnen/projecten binnen eigen `company_id`.
- `company_admin`: beheert alleen gebruikers, projecten, voorraad, bestellingen, checklist templates en instellingen binnen eigen `company_id`.
- `platform_admin`: beheert tenants/companies en platformconfiguratie. Deze rol is niet bedoeld voor dagelijks werkbongebruik.

Legacy rol `office_admin` wordt in de frontend genormaliseerd naar `company_admin`.

## Verplichte tenantkolom

Elke tenantgebonden tabel krijgt verplicht `company_id uuid not null references companies(id)`:

- `users`
- `projects`
- `workorders`
- `items`
- `kits`
- `inventory`
- `garage_box`
- `warehouse_stock`
- `orders`
- `order_lines`
- `photos`
- `signatures`
- `prices`
- `quotes`
- `quote_lines`
- `hourly_rates`
- `profit_snapshots`
- `maintenance_contracts`
- `planning_events`
- `checklist_templates`
- `settings`

Platformtabellen zoals `companies` en audit-/billingtabellen kunnen door `platform_admin` worden beheerd, maar operationele data blijft altijd aan een company gekoppeld.

## Supabase datamodel-richting

```sql
create type app_role as enum ('mechanic', 'company_admin', 'platform_admin');

create table companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  logo text,
  primary_color text,
  secondary_color text,
  active boolean not null default true,
  subscription_status text not null default 'trial',
  branding jsonb not null default '{}',
  settings jsonb not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table users (
  id uuid primary key references auth.users(id) on delete cascade,
  company_id uuid references companies(id),
  name text not null,
  email text not null unique,
  role app_role not null default 'mechanic',
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table projects (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id),
  project_name text not null,
  customer_name text not null,
  address text,
  mechanic_id uuid not null references users(id),
  created_by uuid not null references users(id),
  status text not null default 'open',
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create table workorders (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id),
  project_id uuid not null references projects(id) on delete cascade,
  mechanic_id uuid not null references users(id),
  checklist_answers jsonb not null default '{}',
  hours jsonb not null default '{}',
  measurements jsonb not null default '{}',
  notes text,
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create table inventory (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id),
  kit_id text not null,
  description text not null,
  supplier_article_number text,
  current_stock integer not null default 0,
  minimum_stock integer not null default 0,
  purchase_price numeric(10,2),
  active boolean not null default true
);

create table garage_box_items (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id),
  description text not null,
  supplier_article_number text,
  current_stock integer not null default 0,
  minimum_stock integer not null default 0,
  purchase_price numeric(10,2),
  active boolean not null default true
);

create table orders (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id),
  item_id uuid not null,
  project_ids uuid[] not null default '{}',
  mechanic_ids uuid[] not null default '{}',
  quantity_to_order integer not null default 0,
  status text not null default 'Niet besteld',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table photos (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id),
  workorder_id uuid not null references workorders(id) on delete cascade,
  storage_path text not null,
  photo_type text,
  created_by uuid not null references users(id),
  created_at timestamptz not null default now()
);

create table checklist_templates (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id),
  label text not null,
  required boolean not null default false,
  active boolean not null default true
);

create table settings (
  company_id uuid primary key references companies(id) on delete cascade,
  min_required_photos integer not null default 1,
  mechanic_signature_required boolean not null default false,
  co_template_required boolean not null default true,
  required_hours boolean not null default true,
  branding jsonb not null default '{}'
);
```

Commerciële modules:

```sql
create table quotes (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id),
  quote_number text not null,
  project_id uuid references projects(id),
  workorder_id uuid references workorders(id),
  customer_id text,
  mechanic_id uuid references users(id),
  status text not null default 'concept',
  subtotal_ex_vat numeric(12,2) not null default 0,
  vat_amount numeric(12,2) not null default 0,
  total_inc_vat numeric(12,2) not null default 0,
  total_cost numeric(12,2) not null default 0,
  gross_profit numeric(12,2) not null default 0,
  margin_percent numeric(8,2) not null default 0,
  intro_text text,
  terms_text text,
  valid_until date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(company_id, quote_number)
);

create table quote_lines (
  id uuid primary key default gen_random_uuid(),
  quote_id uuid not null references quotes(id) on delete cascade,
  type text not null,
  description text not null,
  quantity numeric(12,2) not null default 0,
  unit text,
  cost_price numeric(12,2) not null default 0,
  sell_price numeric(12,2) not null default 0,
  vat_percent numeric(8,2) not null default 21,
  total_cost numeric(12,2) not null default 0,
  total_sell numeric(12,2) not null default 0,
  gross_profit numeric(12,2) not null default 0,
  margin_percent numeric(8,2) not null default 0
);

create table hourly_rates (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id),
  name text not null,
  internal_cost_rate numeric(12,2) not null default 0,
  sell_rate numeric(12,2) not null default 0,
  vat_percent numeric(8,2) not null default 21,
  active boolean not null default true
);

create table profit_snapshots (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id),
  project_id uuid references projects(id),
  workorder_id uuid references workorders(id),
  revenue numeric(12,2) not null default 0,
  material_cost numeric(12,2) not null default 0,
  labor_cost numeric(12,2) not null default 0,
  other_cost numeric(12,2) not null default 0,
  gross_profit numeric(12,2) not null default 0,
  margin_percent numeric(8,2) not null default 0,
  created_at timestamptz not null default now()
);

create table maintenance_contracts (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id),
  contract_number text not null,
  customer_name text not null,
  address text not null,
  phone text,
  email text,
  installation_type text,
  appliance_brand text,
  appliance_type text,
  serial_number text,
  contract_type text not null,
  interval text not null,
  start_date date not null,
  end_date date,
  next_service_date date,
  fixed_price numeric(12,2) not null default 0,
  status text not null default 'actief',
  assigned_mechanic_id uuid references users(id),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table planning_events (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id),
  workorder_id uuid references workorders(id),
  project_id uuid references projects(id),
  mechanic_id uuid references users(id),
  title text not null,
  customer_name text,
  address text,
  start_datetime timestamptz not null,
  end_datetime timestamptz not null,
  status text not null default 'concept',
  priority text not null default 'normaal',
  notes text,
  created_by uuid references users(id),
  updated_at timestamptz not null default now()
);
```

Voor `platform_admin` is `company_id` leeg/null. Voor `mechanic` en `company_admin` is `company_id` functioneel verplicht en moet dit via applicatielogica en database constraints/policies worden afgedwongen.

## RLS basis

Maak helperfuncties zodat policies leesbaar blijven:

```sql
create function current_user_company_id()
returns uuid
language sql
security definer
stable
as $$
  select company_id from users where id = auth.uid() and active = true
$$;

create function current_user_role()
returns app_role
language sql
security definer
stable
as $$
  select role from users where id = auth.uid() and active = true
$$;

create function is_platform_admin()
returns boolean
language sql
security definer
stable
as $$
  select current_user_role() = 'platform_admin'
$$;
```

Company scope policy voor tenanttabellen:

```sql
alter table users enable row level security;
alter table projects enable row level security;
alter table workorders enable row level security;
alter table inventory enable row level security;
alter table garage_box_items enable row level security;
alter table orders enable row level security;
alter table photos enable row level security;
alter table checklist_templates enable row level security;
alter table settings enable row level security;

create policy "mechanic own projects"
on projects for select
using (
  is_platform_admin()
  or (
    company_id = current_user_company_id()
    and (
      current_user_role() = 'company_admin'
      or mechanic_id = auth.uid()
      or created_by = auth.uid()
    )
  )
);
```

Voor alle tenanttabellen geldt hetzelfde principe:

- `platform_admin`: mag platformbreed lezen/beheren.
- `company_admin`: alleen rijen met eigen `company_id`.
- `mechanic`: alleen eigen operationele rijen met eigen `company_id`.

Belangrijk: clientfilters zijn alleen UX. De echte garantie dat bedrijven elkaar niet kunnen zien moet in Supabase RLS zitten.
