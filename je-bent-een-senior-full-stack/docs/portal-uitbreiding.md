# Montagekoffer-app als intern Alff Installaties portaal

## 1. Functionele specificatie

De bestaande marketingwebsite blijft publiek op `alffinstallaties.nl`. De montagekoffer-app wordt een beveiligd intern portaal op `app.alffinstallaties.nl`.

Publieke routing:

- `alffinstallaties.nl`: marketingwebsite
- `alffinstallaties.nl/login`: redirect naar `https://app.alffinstallaties.nl/login`
- `app.alffinstallaties.nl`: beveiligde webapp
- `app.alffinstallaties.nl/login`: loginpagina

Loginregels:

- Niet ingelogd: altijd loginpagina tonen.
- Ingelogde monteur: naar monteursdashboard.
- Ingelogde admin/kantoor: naar kantoordashboard.

Rollen:

- Monteur: project starten, koffer kiezen, gebruik registreren, project afronden, eigen projecten bekijken.
- Kantoor/Admin: alle projecten, koffers, Garage Box, voorraad, bestellingen, kosten, gebruikers en beheer.

Voorraadstructuur:

- Montagekoffers: M001 en M004.
- Centraal magazijn: Garage Box.
- Geen locatiecodes, stellingen, vakken of magazijnlocaties.

## 2. Database schema

Entiteiten:

- `users`: appgebruikers met rol.
- `warehouses`: centrale magazijnen, start met Garage Box.
- `items`: unieke artikelmaster.
- `kits`: montagekoffers.
- `kit_stock`: actuele voorraad per artikel per koffer.
- `warehouse_stock`: actuele voorraad per artikel in Garage Box.
- `projects`: projectkop.
- `project_usage`: vaste projectverbruiksregels met prijs op moment van gebruik.
- `stock_movements`: volledige voorraadmutatie-audit.
- `orders`: bestellingkop.
- `order_lines`: bestelregels met bestemming Garage Box of koffer.

Belangrijke keuze: artikelgegevens staan in `items`; voorraad per koffer staat in `kit_stock`; voorraad Garage Box staat in `warehouse_stock`.

## 3. Nieuwe app-flow

Login:

1. Gebruiker opent `app.alffinstallaties.nl`.
2. App controleert sessie.
3. Geen sessie: toon login.
4. Sessie met rol `mechanic`: toon monteursdashboard.
5. Sessie met rol `admin`: toon kantoordashboard.

Monteur:

1. Nieuw project.
2. Klant/projectgegevens invullen.
3. Koffer kiezen: M001, M004 of beide.
4. Gebruikte onderdelen registreren.
5. Project afronden.
6. App schrijft `project_usage`, verlaagt `kit_stock`, schrijft `stock_movements`.

Kantoor:

1. Bekijkt tekorten per koffer.
2. App controleert Garage Box voorraad.
3. Genoeg voorraad: aanvullen vanuit Garage Box.
4. Te weinig voorraad: bestelregel aanmaken.
5. Ontvangen bestelling boeken naar Garage Box of direct naar koffer.

## 4. UX-schermen

Login:

- Alff-logo/monogram
- E-mail
- Wachtwoord
- Login-knop goud
- Wachtwoord vergeten
- Donker navy, premium uitstraling

Dashboard Monteur:

- Nieuw project
- Lopende projecten
- Afgeronde projecten
- Eigen recente projecten

Dashboard Kantoor:

- Projecten
- Koffers
- Garage Box
- Bestellingen
- Kosten
- Gebruikers

Garage Box:

- Artikelomschrijving
- Actuele voorraad
- Minimumvoorraad
- Bestelpunt
- Artikelnummer
- Artikelnummer
- Inkoopprijs
- Totale voorraadwaarde
- Status: voldoende, laag, op, bestellen
- Acties: bijboeken, afboeken, handmatig aanpassen, artikel toevoegen, CSV-export, besteladvies genereren

Kofferstatus:

- Koffer ID
- Artikel
- Standaard aantal
- Huidige voorraad
- Mist aantal
- Minimumvoorraad
- Aanvullen vanuit Garage Box: ja/nee
- Bestellen nodig: ja/nee

Bestellingen:

- Bestellen voor Garage Box
- Aanvullen naar koffers
- Openstaande bestellingen
- Ontvangen artikelen
- Afgeronde aanvullingen

## 5. Voorraadlogica

Projectgebruik:

- Verlaagt `kit_stock.current_stock`.
- Schrijft regel in `project_usage`.
- Schrijft movement met `movement_type = project_usage`.
- Projectkosten worden vastgezet met `purchase_price` uit `items` op dat moment.
- Latere prijswijzigingen wijzigen oude projectkosten niet.

Aanvulbehoefte koffer:

- `missing_quantity = standard_quantity - current_stock`
- Als `current_stock < standard_quantity`: koffer mist voorraad.
- Als `current_stock <= minimum_stock`: waarschuwing/kritisch.

Aanvullen vanuit Garage Box:

- Alleen mogelijk als `warehouse_stock.current_stock >= missing_quantity`.
- Verlaagt `warehouse_stock.current_stock`.
- Verhoogt `kit_stock.current_stock`.
- Schrijft movement met `movement_type = replenish_kit_from_garage_box`.
- Status wordt `aangevuld`.

Bestellen:

- Als Garage Box onvoldoende voorraad heeft, komt artikel op bestellijst.
- Bestemming kan zijn:
  - `warehouse`: aanvullen Garage Box
  - `kit`: direct aanvullen naar koffer

Ontvangen bestelling:

- Bij bestemming `warehouse`: verhoog `warehouse_stock`.
- Bij bestemming `kit`: verhoog `kit_stock`.
- Schrijf movement met `movement_type = purchase_received`.

## 6. Bestel- en aanvulflow

Voorbeeld M001 mist 3x sok 22:

1. Kantoor opent Kofferstatus.
2. App toont M001, sok 22, mist 3.
3. App controleert Garage Box.
4. Garage Box heeft 8:
   - knop `Aanvullen vanuit Garage Box`
   - M001 voorraad +3
   - Garage Box voorraad -3
   - status `aangevuld`
5. Garage Box heeft 1:
   - status `bestellen nodig`
   - orderregel voor 2 of 3 stuks afhankelijk van beleid
   - advies: Garage Box eerst aanvullen, of direct naar koffer bestellen

Adviesregel:

- Voor koffer: bestel minimaal `standard_quantity - current_stock`.
- Voor Garage Box: bestel minimaal `reorder_point - current_stock`, afgerond naar gewenste bestelhoeveelheid.

## 7. SQL-tabellen voor Supabase

```sql
create type user_role as enum ('mechanic', 'admin');
create type warehouse_type as enum ('central_storage');
create type project_status as enum ('open', 'completed');
create type order_status as enum ('niet_besteld', 'besteld', 'ontvangen', 'aangevuld');
create type destination_type as enum ('warehouse', 'kit');
create type stock_owner_type as enum ('warehouse', 'kit', 'project', 'supplier', 'manual');
create type movement_type as enum (
  'project_usage',
  'replenish_kit_from_garage_box',
  'purchase_received',
  'manual_adjustment',
  'stock_count_correction'
);

create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text not null,
  role user_role not null default 'mechanic',
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table warehouses (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  type warehouse_type not null default 'central_storage',
  active boolean not null default true,
  created_at timestamptz not null default now()
);

insert into warehouses (name, type, active)
values ('Garage Box', 'central_storage', true);

create table items (
  id uuid primary key default gen_random_uuid(),
  description text not null,
  category text,
  supplier text,
  supplier_article_number text,
  purchase_price numeric(10,2) not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table kits (
  id text primary key,
  name text not null,
  description text,
  active boolean not null default true
);

insert into kits (id, name, description, active)
values
  ('M001', 'M001', 'Koppelingen / appendages', true),
  ('M004', 'M004', 'Rookgas / condensmateriaal', true);

create table kit_stock (
  id uuid primary key default gen_random_uuid(),
  kit_id text not null references kits(id),
  item_id uuid not null references items(id),
  standard_quantity integer not null default 0,
  current_stock integer not null default 0,
  minimum_stock integer not null default 0,
  updated_at timestamptz not null default now(),
  unique (kit_id, item_id)
);

create table warehouse_stock (
  id uuid primary key default gen_random_uuid(),
  warehouse_id uuid not null references warehouses(id),
  item_id uuid not null references items(id),
  current_stock integer not null default 0,
  minimum_stock integer not null default 0,
  reorder_point integer not null default 0,
  last_counted_at timestamptz,
  updated_at timestamptz not null default now(),
  unique (warehouse_id, item_id)
);

create table projects (
  id uuid primary key default gen_random_uuid(),
  project_name text not null,
  customer_name text not null,
  address text,
  mechanic_id uuid references profiles(id),
  status project_status not null default 'open',
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create table project_usage (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  kit_id text not null references kits(id),
  item_id uuid not null references items(id),
  used_quantity integer not null check (used_quantity >= 0),
  purchase_price numeric(10,2) not null,
  total_price numeric(10,2) generated always as (used_quantity * purchase_price) stored,
  created_at timestamptz not null default now()
);

create table stock_movements (
  id uuid primary key default gen_random_uuid(),
  item_id uuid not null references items(id),
  from_type stock_owner_type,
  from_id text,
  to_type stock_owner_type,
  to_id text,
  quantity integer not null check (quantity > 0),
  movement_type movement_type not null,
  reason text,
  project_id uuid references projects(id),
  created_by uuid references profiles(id),
  created_at timestamptz not null default now()
);

create table orders (
  id uuid primary key default gen_random_uuid(),
  supplier text not null,
  status order_status not null default 'niet_besteld',
  total_amount numeric(10,2) not null default 0,
  created_at timestamptz not null default now(),
  ordered_at timestamptz,
  received_at timestamptz
);

create table order_lines (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id) on delete cascade,
  item_id uuid not null references items(id),
  quantity integer not null check (quantity > 0),
  purchase_price numeric(10,2) not null,
  total_price numeric(10,2) generated always as (quantity * purchase_price) stored,
  destination_type destination_type not null,
  destination_id text not null,
  status order_status not null default 'niet_besteld'
);
```

RLS advies:

- Monteur mag eigen projecten lezen/schrijven.
- Monteur mag item/kit/stock alleen lezen.
- Admin mag alles beheren.
- Service-role of database functions gebruiken voor voorraadmutaties, zodat voorraadregels atomair blijven.

## 8. React componentstructuur

```txt
src/
  app/
    App.tsx
    router.tsx
    authGuard.tsx

  lib/
    supabase.ts
    roles.ts
    money.ts

  types/
    database.ts
    domain.ts

  features/auth/
    LoginPage.tsx
    ForgotPasswordPage.tsx

  features/mechanic/
    MechanicDashboard.tsx
    ProjectForm.tsx
    ProjectUsageScreen.tsx
    MyProjects.tsx

  features/office/
    OfficeDashboard.tsx
    ProjectsPage.tsx
    KitsPage.tsx
    KitStatusPage.tsx
    GarageBoxPage.tsx
    OrdersPage.tsx
    CostsPage.tsx
    UsersPage.tsx

  features/inventory/
    StockStatusBadge.tsx
    StockMovementTable.tsx
    ReplenishFromGarageBoxButton.tsx
    ManualAdjustmentDialog.tsx
    ReorderAdvicePanel.tsx

  features/exports/
    csv.ts
    pdf.ts

  components/
    AppShell.tsx
    TopBar.tsx
    BottomNav.tsx
    StatCard.tsx
    DataTable.tsx
    FilterBar.tsx
    EmptyState.tsx
```

## 9. Migratieplan vanaf huidige localStorage app

Stap 1: Datamodel normaliseren in de huidige app.

- Huidige `articles` splitsen naar `items`, `kit_stock` en `warehouse_stock`.
- Huidige `projects` behouden als `projects`.
- Huidige `usages` migreren naar `project_usage`.
- Huidige `orderLines` migreren naar `orders` en `order_lines`.

Stap 2: Exportfunctie maken.

- Voeg knop toe: `Export migratie JSON`.
- JSON bevat: kits, items, kit_stock, warehouse_stock, projects, project_usage, orders, order_lines.

Stap 3: Supabase import.

- Eerst `items`.
- Dan `kits`, `warehouses`.
- Dan `kit_stock`, `warehouse_stock`.
- Dan `projects`, `project_usage`, `orders`, `order_lines`, `stock_movements`.

Stap 4: Auth koppelen.

- Supabase Auth aanzetten.
- Admingebruiker aanmaken.
- Monteurs als users/profiles toevoegen.
- Oude monteurtekstvelden koppelen aan `mechanic_id` waar mogelijk.

Stap 5: LocalStorage uitfaseren.

- LocalStorage alleen nog gebruiken voor UI-state zoals filters.
- Operationele data uit Supabase lezen.

## 10. Deploymentplan voor app.alffinstallaties.nl

Aanbevolen stack:

- Frontend: Vercel of Netlify
- Auth/database: Supabase
- Domein: `app.alffinstallaties.nl`

DNS:

1. Maak project aan op Vercel/Netlify.
2. Voeg custom domain toe: `app.alffinstallaties.nl`.
3. Voeg bij DNS-provider van `alffinstallaties.nl` een CNAME toe:
   - naam: `app`
   - type: `CNAME`
   - waarde: Vercel/Netlify target
4. Wacht op SSL-provisioning.

Website-integratie:

1. Voeg menu-item `Login` toe op `alffinstallaties.nl`.
2. Laat dit linken naar `https://app.alffinstallaties.nl/login`.
3. Optioneel: maak `alffinstallaties.nl/login` als redirect naar dezelfde URL.

Security:

- Alleen HTTPS.
- Supabase Auth met e-mail/wachtwoord.
- RLS op alle tabellen.
- Adminschermen achter role-check.
- Voorraadmutaties via database functions of transacties.

Omgevingsvariabelen:

```txt
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_APP_BASE_URL=https://app.alffinstallaties.nl
```

Minimale releasevolgorde:

1. Supabase schema aanmaken.
2. RLS policies toevoegen.
3. Eerste admingebruiker maken.
4. Seeddata M001, M004 en Garage Box importeren.
5. Frontend deployen.
6. DNS CNAME instellen.
7. Loginlink op hoofdwebsite plaatsen.
8. Testen met monteur en adminaccount.

