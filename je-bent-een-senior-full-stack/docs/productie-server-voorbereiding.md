# Productie- en servervoorbereiding

Deze standalone app blijft werken met `localStorage`, maar is voorbereid op een serverarchitectuur met PostgreSQL en externe object storage.

## Tenant-isolatie

Alle bedrijfsdata moet een `companyId` hebben. Voor backwards compatibility schrijft de app momenteel ook `company_id`.

Belangrijke collecties:

- `users`
- `customers`
- `projects` / `workorders`
- `quotes` / `quoteLines`
- `payments` / `invoices`
- `planningEvents`
- `appliances`
- `articles` / `warehouseStock`
- `vanVehicles` / `vanStockItems` / `vanStockMovements`
- `files` / `photos` / `pdfs` / `documents`
- `settings`
- `auditLogs`

`platform_admin` heeft `companyId = null`. Company Admin en Monteur mogen alleen records gebruiken met hun eigen `companyId`.

## Storage abstraction

Bestanden worden via metadata geregistreerd in `state.files`. De payload staat in development in `state.fileStorageObjects`, zodat de entiteit zelf niet afhankelijk is van inline bestanden.

Padstructuur:

```text
companyId/module/entityId/bestandsnaam
```

Metadata velden:

- `companyId`
- `module`
- `entityId`
- `filename`
- `fileType`
- `mimeType`
- `storageProvider`
- `storagePath`
- `publicUrl`
- `privateUrl`
- `uploadedBy`
- `createdAt`

Voorbereide providers:

- `local`
- `supabase`
- `azure_blob`
- `onedrive_graph`

## PostgreSQL / Supabase

Aanbevolen basis:

- elke tenant-tabel krijgt `company_id uuid not null`, behalve platformtabellen;
- `platform_admin` beheert tenants via platformtabellen;
- Row Level Security afdwingen op `company_id`;
- file payloads niet in PostgreSQL opslaan, alleen metadata;
- storage buckets/containers per provider koppelen via `storagePath`.

Voorbeeld RLS-denkrichting:

```sql
company_id = auth.jwt() ->> 'company_id'
or auth.jwt() ->> 'role' = 'platform_admin'
```

## Backups en auditlog

Voor productie zijn configuraties voorbereid in `productionConfig`:

- dagelijkse backups met retentie;
- auditlog voor storage, deletes en platformacties;
- destructieve datareset alleen via Platform Admin;
- soft delete als standaardbeleid voor bedrijfsrecords met historie.

