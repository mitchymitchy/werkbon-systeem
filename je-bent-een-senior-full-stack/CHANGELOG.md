# Changelog

## 2026-05-30

- WerkbonSysteem.nl voorbereid als multi-company SaaS-platform met tenant/company-structuur, rollen, route guards en company-scope op bedrijfsdata.
- Platform Admin uitgebreid met verticale navigatie, bedrijvenbeheer, gebruikersbeheer, modulebeheer, rechten, facturatie, audit logs en systeeminstellingen.
- Module-systeem toegevoegd waarmee Platform Admin modules per bedrijf kan activeren of blokkeren.
- Company Admin omgeving omgezet naar professionele sidebar-layout met gecentreerde content en module-afhankelijke navigatie.
- Gebruikers- en rechtenbeheer verbeterd met compacte accordion-kaarten, zoekfilters en per-gebruiker permissies.
- Planning uitgebreid met dag/week/maand agenda, monteurplanning, klantkoppeling, selecteren/slepen voor afspraken en monteurrechten voor eigen afspraken.
- Monteurportaal uitgebreid met eigen agenda, meldingen, klant- en afspraakrechten, werkbonkoppeling en beperkte data-isolatie.
- Klantenmodule uitgebreid met klantcards, zoekfilters, toesteldata, onderhoudsherinneringen, communicatiekoppelingen en echte kaartweergave met Leaflet/OpenStreetMap.
- Werkbonflow verbeterd met foto-upload validatie, volledige PDF-export, mailknoppen, klantklare werkbondata en gastoestelregistratie.
- Toestellendatabase toegevoegd voor merken, types, serienummers, onderhoudshistorie en rapportagevoorbereiding.
- Offertemodule uitgebreid met nieuwe offerte-flow, offerte-PDF, mailactie, BTW-keuze, bedrijfsbranding en verwijderde kortinglogica.
- Facturatie uitgebreid met betaalstatussen, betalingscontrole, betalingsmails, betaalprovider-voorbereiding en openstaande bedragen per bedrijf.
- E-mail- en WhatsApp-modules voorbereid met inboxen, templates, klantkoppelingen, auditlog en module-afhankelijke toegang.
- Magazijn, voorraad, busvoorraad en factuurimport voorbereid voor bedrijfsbrede materiaalstromen.
- Bedrijfsbranding toegevoegd met logo, kleuren en bedrijfsgegevens voor portaal, PDF's, e-mails en rapportages.
- Data-opslag voorbereid voor productiegebruik: localStorage is niet langer hoofdopslag voor bedrijfsdata; centrale Supabase/PostgreSQL snapshot-opslag en storage abstraction metadata zijn toegevoegd.
- Supabase/PostgreSQL schema en voorbeeldconfiguratie toegevoegd voor centrale opslag, auditlog, bestanden, modules, rechten en multi-tenant data.
- Supabase-integratie uitgebreid naar bedrijven, klanten, werkbonnen, offertes, facturen en instellingen zoals company settings, modules, rechten, branding, menu-indeling en notificatie-instellingen; na opslaan wordt data direct opnieuw uit Supabase opgehaald.
- Rechtenbeheer aangescherpt: Platform Admin/Gebruikers “Opslaan” schrijft permissies expliciet naar de Supabase `permissions` tabel, laadt daarna opnieuw vanaf de server en toont een foutmelding als serveropslag mislukt.
- Platform Admin wijzigingen worden strikter server-first verwerkt: `users` is toegevoegd aan de Supabase entity-tabellen, login/refresh laadt opnieuw uit Supabase, modules opslaan wacht op serverbevestiging en console-debug toont geladen permissions en databron.
- Opslaan-UX verbeterd voor serveracties: opslaanknoppen tonen tijdelijk “Opslaan...”, worden disabled tijdens Supabase-writes en tonen pas na serverbevestiging een groene succesmelding of rode foutmelding met laatste opslagtijd.
- Monteur dashboard gelijkgetrokken tussen desktop en mobiel: Planning, Werkbonnen, Lopende projecten, Afgeronde projecten, Toestellendatabase, Busvoorraad, Klanten en Meldingen staan nu als expliciete kaarten in dezelfde Start-render.
- Monteur dashboard gecentraliseerd via `MONTEUR_DASHBOARD_ITEMS`; desktop en mobiel gebruiken dezelfde bron en oude dubbele actieve dashboarddefinities zijn geneutraliseerd.
- Supabase tabelcontrole verbeterd: ontbrekende entity-tabellen worden nu gebundeld gerapporteerd in plaats van te stoppen op de eerste 404 zoals `users`; `app_state_snapshots` is toegevoegd aan het bootstrap-schema.
- Opstartcontrole voor verplichte Supabase-tabellen (`users`, `companies`, `appliances`, `permissions`) toont nu een korte melding zoals `Database migratie vereist: appliances` in plaats van technische 404/foutdetails.
- Monteurs met `Werkbonnen aanmaken` recht kunnen nu vanuit Start een nieuwe CV-onderhoudswerkbon maken met klant, adres, toestelregistratie, onderhoudschecklist en Supabase-opslag via `workorders`/`appliances`.
- Werkbon aanmaken vereenvoudigd naar een korte `+ Nieuwe werkbon` flow voor Monteur en Company Admin met klantkeuze, type werkbon, planning, optionele toestelgegevens, concept/open acties en Supabase-opslag.
- Monteur Start toont nu een aparte tegel `Werkbon aanmaken`, los van `Werkbonnen`, gestuurd door het Supabase-permission veld `workorders_create`.
- Company Admin en Platform Admin kunnen nu per monteur de zichtbare dashboardknoppen beheren; deze dashboardrechten worden via de bestaande Supabase `permissions` flow opgeslagen.
- Kritieke resetfuncties verwijderd uit bedrijfsomgevingen en beperkt tot Platform Admin met extra waarschuwingen en auditlog.
