-- WerkbonSysteem.nl Supabase bootstrap
-- Eerste fase plus instellingen: businessdata en settings centraal opslaan.

create extension if not exists pgcrypto;

create or replace function public.create_werkbonsysteem_entity_table(table_name text)
returns void
language plpgsql
as $$
begin
  execute format(
    'create table if not exists public.%I (
      id text primary key,
      company_id text,
      payload jsonb not null default ''{}''::jsonb,
      updated_at timestamptz not null default now()
    )',
    table_name
  );

  execute format('create index if not exists %I on public.%I (company_id)', table_name || '_company_id_idx', table_name);
  execute format('alter table public.%I enable row level security', table_name);

  execute format('drop policy if exists %I on public.%I', table_name || '_read', table_name);
  execute format(
    'create policy %I on public.%I for select to anon, authenticated using (true)',
    table_name || '_read',
    table_name
  );

  execute format('drop policy if exists %I on public.%I', table_name || '_insert', table_name);
  execute format(
    'create policy %I on public.%I for insert to anon, authenticated with check (true)',
    table_name || '_insert',
    table_name
  );

  execute format('drop policy if exists %I on public.%I', table_name || '_update', table_name);
  execute format(
    'create policy %I on public.%I for update to anon, authenticated using (true) with check (true)',
    table_name || '_update',
    table_name
  );

  execute format('drop policy if exists %I on public.%I', table_name || '_delete', table_name);
  execute format(
    'create policy %I on public.%I for delete to anon, authenticated using (true)',
    table_name || '_delete',
    table_name
  );
end;
$$;

select public.create_werkbonsysteem_entity_table('companies');
select public.create_werkbonsysteem_entity_table('users');
select public.create_werkbonsysteem_entity_table('customers');
select public.create_werkbonsysteem_entity_table('workorders');
select public.create_werkbonsysteem_entity_table('quotes');
select public.create_werkbonsysteem_entity_table('invoices');
select public.create_werkbonsysteem_entity_table('company_settings');
select public.create_werkbonsysteem_entity_table('modules');
select public.create_werkbonsysteem_entity_table('permissions');
select public.create_werkbonsysteem_entity_table('branding');
select public.create_werkbonsysteem_entity_table('menu_layout');
select public.create_werkbonsysteem_entity_table('notification_settings');

-- Productie-hardening:
-- Vervang deze brede anon policies later door Supabase Auth + RLS op company_id.
