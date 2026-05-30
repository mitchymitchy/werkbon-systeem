# Definitieve AI-build prompt Montagekoffer, Werkbon en CO-keur App

Gebruik onderstaande prompt om de definitieve app te laten genereren in Cursor, Claude, Lovable of een vergelijkbare AI-builder.

```txt
Je bent een senior full-stack developer, product designer, workflow architect en security-minded SaaS engineer.

Bouw een Nederlandstalige mobile-first webapp voor Alff Installaties.

De app combineert:
- montagekofferregistratie
- voorraadbeheer
- Garage Box / magazijnvoorraad
- project- en werkbonbeheer
- CO-keur checklistflow
- digitale handtekeningen
- PDF-werkbonnen
- bestellijsten
- kostenbeheer voor admin
- voorbereiding op Wasco API-koppeling

Gebruik de Alff Installaties branding:
- donker navy / premium dark
- goud als primary accent
- wit / lichtgrijs als tekst
- groen voor veilig/goed/afgerond
- oranje voor waarschuwing
- rood voor tekort/onveilig/blokkade
- mobile-first
- grote knoppen
- premium dashboardstijl

TECH STACK MVP
- React
- TypeScript
- Tailwind CSS
- LocalStorage of IndexedDB voor prototype
- Later uitbreidbaar naar Supabase Auth, Supabase Postgres en Storage
- Alles Nederlandstalig

BELANGRIJKE REGELS
- Monteurs mogen nooit prijzen, materiaalkosten, totalen, marges of admininformatie zien.
- Admin ziet alles.
- Leverancier-velden worden niet gebruikt.
- Artikelnummers blijven wel bestaan.
- Admin kan artikelnamen en artikelnummers aanpassen.
- Als artikelnaam of artikelnummer wordt gewijzigd, moet dit overal direct zichtbaar zijn:
  - adminomgeving
  - monteursomgeving
  - koffers
  - projecten / werkbonnen
  - bestellijsten
  - Garage Box
  - PDF’s vanaf dat moment
- Historische projectkosten blijven vastgezet op de prijs op moment van afronden.

ROUTES
- /login
- /start
- /office
- /office/projects
- /office/kits
- /office/garage-box
- /office/orders
- /office/costs
- /office/prices
- /office/users
- /office/checklists
- /workorders/:id

ROLLEN
Gebruik uitsluitend deze rollen:
- monteur
- admin

Loginregels:
- Niet ingelogd: toon loginpagina.
- monteur login: automatisch naar /start.
- admin login: automatisch naar /office.
- Als monteur naar /office probeert te gaan:
  - toon melding: “Geen toegang tot adminomgeving”
  - stuur terug naar /start.

Demo accounts voor standalone test:
- monteur@alffinstallaties.nl / monteur123 / rol monteur
- admin@alffinstallaties.nl / admin123 / rol admin

START = MONTEURSOMGEVING

Monteur ziet:
- toegewezen werkbonnen/projecten
- nieuwe/toegewezen werkbonnen bovenaan
- lopende werkbonnen
- afgeronde eigen werkbonnen
- kofferkeuze M001 / M004
- artikelomschrijving
- artikelnummer
- koffer
- standaard aantal
- gebruikt aantal
- aan te vullen aantal
- werkbonnummer
- checklist
- urenregistratie
- foto-upload
- handtekening klant
- handtekening monteur
- PDF werkbon export indien afgerond

Monteur mag:
- werkbon openen
- status naar “in uitvoering” zetten
- gebruikte materialen registreren
- checklist invullen
- CO-keur meetwaarden invullen
- foto’s toevoegen
- uren invullen
- opmerkingen/oplossing invullen
- handtekening klant vastleggen
- werkbon afronden

Monteur ziet NIET:
- inkoopprijs
- totaalprijs
- projectkosten
- klantkosten
- bestellijsten
- Garage Box voorraadwaarde
- prijsbeheer
- gebruikersbeheer
- admin dashboard

ADMINOMGEVING

Admin ziet en beheert:
- alle projecten/werkbonnen
- alle monteurs
- alle koffers
- Garage Box
- voorraadstatus
- bestellijsten
- artikelbeheer
- artikelnummerbeheer
- prijsbeheer
- kosten per project
- kosten per klant
- kosten per koffer
- open bestelbedragen
- gebruikersbeheer
- checklist templates
- CO-keur instellingen
- PDF-werkbonnen
- Wasco-koppeling/statussen

KANTOOR-TABS WORDEN ADMIN-TABS

Gebruik deze admin tabs:
- Projecten
- Koffers
- Garage Box
- Bestellen
- Kosten
- Prijzen
- Checklist templates
- Gebruikers

PROJECT = WERKBON

Wanneer een project wordt aangemaakt, wordt automatisch ook een werkbon aangemaakt.

Elk project/werkbon bevat:
- uniek project ID
- uniek werkbonnummer
- klantnaam
- projectadres
- postcode + woonplaats
- telefoon
- e-mail
- datum werkzaamheden
- toegewezen monteur
- status
- omschrijving werkzaamheden
- type werkzaamheden
- gebruikte materialen
- checklist
- CO-keur velden
- uitgevoerde oplossing
- advies aan klant
- opmerkingen monteur
- gewerkte uren
- foto’s
- handtekening klant
- handtekening monteur
- PDF-export werkbon
- Wasco conceptbestelling ID indien aanwezig

PROJECT-ID

Elk project krijgt automatisch een unieke project-ID.

Project-ID moet:
- zichtbaar zijn voor admin
- gekoppeld kunnen worden aan Wasco-bestellingen
- gebruikt worden om verbruik, kosten en bestellingen te herleiden
- worden opgeslagen op project, orderregels, voorraadmutaties en PDF

WERKBONNUMMER

Elke werkbon krijgt automatisch een uniek werkbonnummer.

Structuur:
ALFF-YYYY-XXXX

Voorbeelden:
- ALFF-2026-0001
- ALFF-2026-0002

Regels:
- werkbonnummer mag nooit dubbel voorkomen
- werkbonnummer wordt automatisch gegenereerd
- teller loopt per jaar op
- werkbonnummer is zichtbaar voor admin, monteur en PDF

Werkbonnummer blijft gekoppeld aan:
- project
- materialen
- kosten
- Wasco conceptbestelling
- PDF werkbon
- handtekeningen
- status
- monteur
- klant

PROJECTSTATUSSEN

Gebruik:
- aangemaakt
- toegewezen
- in uitvoering
- afgerond

PROJECTFLOW

1. Admin maakt project/werkbon aan.
2. Admin vult klantgegevens en werkbonomschrijving in.
3. Admin kiest checklist-template.
4. Admin wijst werkbon toe aan monteur.
5. Werkbon krijgt:
   - project ID
   - werkbonnummer
   - assigned_mechanic_id
   - status “toegewezen”
6. Monteur ziet werkbon onder Start.
7. Monteur opent werkbon.
8. Monteur zet status naar “in uitvoering”.
9. Monteur registreert:
   - gebruikte materialen
   - checklistpunten
   - CO-keur velden indien verplicht
   - oplossing/uitgevoerde werkzaamheden
   - gewerkte uren
   - opmerkingen
   - foto’s
   - handtekening klant
   - handtekening monteur
10. Monteur rondt werkbon af.
11. App valideert verplichte velden.
12. Status wordt “afgerond”.
13. Materialen gaan automatisch naar:
   - Bestellen
   - Voorraad
   - Projectkosten
   - Garage Box aanvulling
14. Admin ziet afgeronde werkbon inclusief:
   - materialen
   - uren
   - kosten
   - checklist
   - foto’s
   - handtekeningen
   - PDF-export

AFRONDLOGICA

Werkbon afronden mag alleen als:
- project/werkbon bestaat
- toegewezen monteur klopt
- uren zijn ingevuld
- indien materialen gebruikt: gebruikte aantallen zijn opgeslagen
- algemene verplichte checklistvelden zijn ingevuld
- bij gastoestel = ja: CO-keur validatie compleet is
- klant-handtekening aanwezig is
- minimaal 1 foto aanwezig is

Als afronden niet lukt:
- blokkeer afronden
- toon duidelijke foutmelding
- benoem exact welk veld ontbreekt

Voorbeelden:
- “Vul minimaal één foto toe voordat de werkbon kan worden afgesloten.”
- “Handtekening opdrachtgever is verplicht.”
- “CO-keur meetwaarden zijn verplicht voordat de werkbon kan worden afgesloten.”
- “Urenregistratie is verplicht.”

VOORRAAD / ARTIKELBEHEER

Koffers:
- M001
- M004

Garage Box:
- centrale voorraad waarmee koffers kunnen worden aangevuld

Artikelen hebben:
- id
- omschrijving
- artikelnummer
- koffer ID
- standaard aantal in koffer
- actuele voorraad in koffer
- minimumvoorraad koffer
- Garage Box voorraad
- minimumvoorraad Garage Box
- bestelpunt Garage Box
- prijs per stuk
- laatst bijgewerkt
- prijsbron
- actief/inactief

Admin moet kunnen:
- artikelnaam aanpassen
- artikelnummer aanpassen
- standaard aantallen aanpassen
- voorraad aanpassen
- minimumvoorraad aanpassen
- prijs aanpassen
- artikel actief/inactief zetten
- artikel toevoegen

Als artikelnaam of artikelnummer verandert:
- alle views gebruiken direct de actuele artikelmaster
- project_usage verwijst naar item_id
- bestellijsten verwijzen naar item_id
- voorraad verwijst naar item_id
- oude projectkosten blijven gelijk, maar artikelnaam mag actueel getoond worden

MATERIALENREGISTRATIE MONTEUR

Monteur ziet per artikel:
- omschrijving
- artikelnummer
- koffer
- standaard aantal
- gebruikt aantal
- aan te vullen aantal
- status

Monteur gebruikt:
- plus/min knoppen
- handmatige invoer
- zoeken op artikel
- filter op koffer

Monteur ziet geen prijs.

PRIJSBEHEER

Maak admin-tab: Prijzen.

Doel:
Admin kan productprijzen inladen en beheren zodat projectkosten automatisch worden berekend.

Prijsvelden:
- artikel_id
- omschrijving
- koffer
- artikelnummer
- prijs_per_stuk
- laatst_bijgewerkt
- bron

Bronopties:
- handmatig
- CSV import
- website/backend API

Functionaliteit:
- prijzen handmatig aanpassen
- CSV upload/import
- prijzen opslaan in localStorage / later database
- prijzen koppelen aan bestaande artikelen via artikelnummer
- waarschuwing tonen bij artikelen zonder prijs
- knop “Prijzen opnieuw laden”
- knop “CSV export prijzen”

CSV-import formaat:
artikelnummer,omschrijving,prijs_per_stuk

Prijslogica:
- projectkosten worden live berekend met actuele prijs_per_stuk
- bij afronden wordt prijs vastgezet in project_costs
- oude projectkosten veranderen niet bij latere prijswijziging
- nieuwe projecten gebruiken nieuwste prijs

Maak helper/service:
loadPricesFromBackend()

Deze gebruikt nu mockdata, maar is voorbereid op:
- /api/prices
- https://alffinstallaties.nl/app/prices.json
- Wasco of backend API

Voorbeeld JSON:
[
  {
    "articleNumber": "M001-1000",
    "price": 3.45,
    "updatedAt": "2026-05-29"
  }
]

Zorg dat later alleen de URL hoeft te worden aangepast.

BESTELLEN

Admin-tab: Bestellen.

Doel:
Alles wat monteurs gebruiken wordt automatisch opgeteld en verschijnt als bestellijst/aanvullijst.

Bestellen toont:
- alle gebruikte onderdelen uit afgeronde projecten
- gegroepeerd per artikel
- totaal gebruikt aantal
- totaal te bestellen aantal
- gekoppelde projecten
- gekoppelde monteurs
- koffer
- artikelnummer
- prijs per stuk
- totaalprijs
- bestelstatus
- Wasco order ID indien gekoppeld
- Wasco status indien bekend

Kolommen:
- Artikel
- Koffer
- Totaal gebruikt
- Te bestellen
- Project(en)
- Monteur(s)
- Artikelnummer
- Prijs per stuk
- Totaal
- Status
- Wasco order ID
- Wasco status

Statusopties:
- Niet besteld
- Besteld
- Ontvangen
- Aangevuld

Regels:
- monteur ziet deze tab niet
- alleen admin mag Bestellen openen
- na afronden werkbon verschijnen materialen automatisch in Bestellen
- meerdere projecten met hetzelfde artikel worden op één regel opgeteld
- te bestellen aantal = totaal gebruikt dat nog niet is aangevuld
- status “Aangevuld” telt niet meer mee als open te bestellen
- bewaren in localStorage / later database

Functionaliteit:
- zoeken op artikel/project/monteur
- filter op koffer
- filter op status
- knop “Markeer als besteld”
- knop “Markeer als ontvangen”
- knop “Markeer als aangevuld”
- CSV export
- PDF export

ORDER_LINES DATAMODEL

order_lines:
- id
- item_id
- item_name
- kit_id
- kit_name
- total_used_quantity
- quantity_to_order
- project_ids
- mechanic_ids
- article_number
- purchase_price
- total_price
- status
- created_at
- updated_at
- ordered_at
- received_at
- restocked_at
- wasco_order_id
- wasco_order_status
- wasco_delivery_status

Berekening:
total_price = quantity_to_order × purchase_price

Als purchase_price leeg is:
- toon prijs als “Onbekend”
- totaalprijs niet meetellen in open bestelbedrag
- admin kan prijs later invullen

WASCO-KOPPELING VOORBEREIDEN

De app moet voorbereid zijn op een Wasco API-koppeling.

Doelen:
- project- en bestel-ID’s synchroniseren
- Wasco-bestellingen herkennen via API
- conceptbestelling kunnen koppelen aan werkbon/project
- orderstatus en leverstatus kunnen tonen

Velden:
- wasco_order_id
- own_project_id
- work_order_number
- article_number
- ordered_quantity
- order_status
- wasco_order_status
- delivery_status
- received_at

Maak helper/service:
syncWascoOrders()

Voor nu:
- mockdata gebruiken
- code voorbereiden op echte endpoint

Mogelijke endpoint later:
- /api/wasco/orders
- /api/wasco/order-status

Wasco mock JSON:
[
  {
    "wascoOrderId": "WASCO-123456",
    "projectId": "project_abc",
    "workOrderNumber": "ALFF-2026-0001",
    "articleNumber": "M001-1000",
    "orderedQuantity": 3,
    "orderStatus": "Besteld",
    "deliveryStatus": "Onderweg"
  }
]

KOSTEN

Admin-tab: Kosten.

Alleen admin ziet:
- project
- project ID
- werkbonnummer
- klant
- monteur
- datum afgerond
- aantal gebruikte artikelen
- materiaalkosten
- details per artikel

Monteur ziet nooit kosten.

GEBRUIKERS

Admin-tab: Gebruikers.

Admin kan:
- nieuwe gebruiker aanmaken
- naam invullen
- e-mail invullen
- wachtwoord invullen
- rol kiezen:
  - monteur
  - admin
- gebruiker actief/inactief zetten
- gebruiker verwijderen of deactiveren
- bestaande rol aanpassen

Validatie:
- naam verplicht
- e-mail verplicht
- wachtwoord verplicht
- rol verplicht
- dubbele e-mail niet toestaan

Nieuwe gebruiker moet direct lokaal kunnen inloggen.

CHECKLIST / CO-WERKBON

Werkbon krijgt configureerbare checklist.

Admin-tab: Checklist templates.

Template types:
- CV / ketel
- CO-keur
- onderhoud
- storing
- warmtepomp
- vrij template

Admin kan:
- checklistregels toevoegen
- checklistregels verwijderen
- checklistvolgorde wijzigen
- template actief/inactief zetten
- CO-keur template verplicht maken
- minimum aantal verplichte foto’s instellen
- monteur-handtekening verplicht ja/nee instellen

CHECKLIST BLOKKEN

1. Klantgegevens:
- naam opdrachtgever
- adres
- postcode + woonplaats
- telefoon
- e-mail
- datum werkzaamheden

2. Werkzaamheden:
- werkzaamheden omschrijving
- type werkzaamheden
- opmerkingen

3. Installatiegegevens:
- merk toestel
- serie
- type
- serienummer
- bouwjaar
- vermogen
- soort installatie
- locatie installatie
- datum ingebruikstelling

4. Monteurgegevens:
- naam monteur
- bedrijf uitvoerder
- legitimatie/ID optioneel
- klant aanwezig ja/nee

5. Meetwaarden verbranding:
- CO vollast
- CO laaglast
- CO2 vollast
- CO2 laaglast
- O2 vollast
- O2 laaglast
- trekmeting
- gasvoordruk
- werkdruk

6. Koolmonoxide meting:
- CO meting vóór werkzaamheden
- CO meting ná werkzaamheden
- CO opstellingsruimte
- installatie veilig ja/nee

7. Algemene controlepunten:
- gasdichtheid gecontroleerd
- rookgasafvoer gecontroleerd
- luchttoevoer gecontroleerd
- toestel correct aangesloten
- beveiligingen gecontroleerd
- lekkage gecontroleerd
- gebruikersinstructie gegeven
- verbranding gecontroleerd

Admin moet deze checklistpunten kunnen aanpassen.

8. Oplossingen / uitgevoerde werkzaamheden:
Vrij tekstveld met:
- storing opgelost
- vervangen onderdelen
- uitgevoerde oplossing
- advies aan klant
- verbeterpunten

9. Urenregistratie:
- starttijd
- eindtijd
- pauze
- totaal uren

Berekening:
totaal_uren = eindtijd - starttijd - pauze

10. Afronding:
- opdrachtgever geïnformeerd
- verbeterpunten besproken
- gebruikersvoorschriften aanwezig
- offerte gewenst
- installatie veilig bevonden

11. Handtekeningen:
- handtekening klant
- handtekening monteur

Gebruik:
- canvas/signature pad
- opslaan in werkbon
- tonen in PDF

12. Foto’s:
- upload via camera telefoon
- upload via bestand
- meerdere foto’s mogelijk
- preview tonen
- opslaan in werkbon/project

Foto types:
- installatie
- situatie voor
- situatie na
- rookgas / veiligheid
- vrije foto

CO-KEUR VERPLICHTE WORKFLOW

Hoofdvraag verplicht:
“Zijn er werkzaamheden geweest aan een gastoestel?”

Antwoorden:
- Ja
- Nee

Als “Nee”:
- standaard werkbonflow
- CO-meetvelden optioneel of verborgen afhankelijk van template

Als “Ja”:
CO-keur workflow verplicht.

Verplicht:
- CO meting vóór werkzaamheden
- CO meting ná werkzaamheden
- CO vollast
- CO laaglast
- CO2 vollast
- CO2 laaglast
- O2 vollast
- O2 laaglast
- trekmeting
- gasvoordruk
- werkdruk
- veiligheidsvraag “Installatie veilig te gebruiken?”
- handtekening klant
- minimaal 1 foto

Validatie:
- velden mogen niet leeg zijn
- meetwaarden moeten numeriek zijn
- ontbrekende velden blokkeren afronden

Foutmelding:
“CO-keur meetwaarden zijn verplicht voordat de werkbon kan worden afgesloten.”

Veiligheidsvraag:
“Installatie veilig te gebruiken?”

Opties:
- Ja
- Nee

Indien Nee:
- afronden alleen mogelijk met motivatie
- rood veiligheidslabel tonen
- admin ziet waarschuwing

Verplicht tekstveld:
- reden_onveilig

Handtekening:
- klant-handtekening verplicht
- monteur-handtekening optioneel of admin-configureerbaar

Foutmelding zonder klant-handtekening:
“Handtekening opdrachtgever is verplicht.”

Foto’s:
- minimaal 1 foto verplicht
- admin kan minimum verhogen

Foutmelding zonder foto:
“Minimaal 1 foto is verplicht voordat de werkbon kan worden afgesloten.”

PDF WERKBON

Werkbon PDF moet:
- Alff Installaties branding gebruiken
- logo/monogram tonen
- project ID tonen
- werkbonnummer tonen
- klantgegevens tonen
- projectgegevens tonen
- checklist tonen
- CO-keur meetwaarden tonen indien ingevuld
- materialen tonen
- uren tonen
- oplossingen tonen
- foto-overzicht tonen
- handtekeningen tonen
- nette professionele layout hebben

DATAMODEL HOOFDENTITEITEN

users:
- id
- name
- email
- password_hash of demo password lokaal
- role: monteur | admin
- active
- created_at

projects / work_orders:
- id
- project_id
- work_order_number
- customer_name
- address
- postal_code
- city
- phone
- email
- assigned_mechanic_id
- created_by
- status
- work_description
- work_type
- checklist_template_id
- gas_appliance_work
- unsafe_reason
- created_at
- completed_at
- wasco_concept_order_id

items:
- id
- description
- article_number
- kit_id
- active
- updated_at

prices:
- id
- item_id
- article_number
- price_per_unit
- source
- updated_at

project_usage:
- id
- project_id
- work_order_number
- kit_id
- item_id
- used_quantity
- created_at

project_costs:
- id
- project_id
- item_id
- used_quantity
- purchase_price_at_time
- total_price

kit_stock:
- id
- kit_id
- item_id
- standard_quantity
- current_stock
- minimum_stock
- updated_at

garage_box_stock:
- id
- item_id
- current_stock
- minimum_stock
- reorder_point
- updated_at

order_lines:
- id
- item_id
- item_name
- kit_id
- kit_name
- total_used_quantity
- quantity_to_order
- project_ids
- mechanic_ids
- article_number
- purchase_price
- total_price
- status
- wasco_order_id
- wasco_order_status
- wasco_delivery_status
- created_at
- updated_at
- ordered_at
- received_at
- restocked_at

checklist_templates:
- id
- name
- type
- active
- co_required
- min_required_photos
- mechanic_signature_required
- created_at
- updated_at

checklist_template_items:
- id
- template_id
- block
- label
- input_type
- required
- sort_order
- active

work_order_checklist_answers:
- id
- work_order_id
- checklist_item_id
- value
- created_at
- updated_at

work_order_measurements:
- id
- work_order_id
- co_before_ppm
- co_after_ppm
- co_full_load
- co_low_load
- co2_full_load
- co2_low_load
- o2_full_load
- o2_low_load
- draft_measurement
- gas_pre_pressure
- working_pressure
- installation_safe
- unsafe_reason

work_order_hours:
- id
- work_order_id
- start_time
- end_time
- break_minutes
- total_hours

work_order_signatures:
- id
- work_order_id
- signer_type: customer | mechanic
- image_data_url
- created_at

work_order_photos:
- id
- work_order_id
- type
- file_url_or_data_url
- caption
- created_at

SECURITY / RLS VOORBEREIDING

Frontend:
- monteur-routes afschermen
- admin-routes afschermen
- prijsvelden niet renderen voor monteur
- kostenvelden niet renderen voor monteur
- admin-menu alleen tonen voor admin

Database later:
- monteur mag alleen eigen toegewezen werkbonnen lezen/schrijven
- monteur mag geen prices/project_costs lezen
- admin mag alles lezen/beheren
- project_costs alleen leesbaar voor admin
- orders alleen leesbaar voor admin

TESTSCENARIO

1. Login als admin.
2. Ga naar Gebruikers.
3. Maak nieuwe monteur aan.
4. Logout.
5. Login als nieuwe monteur.
6. Controleer dat deze alleen Start ziet.
7. Logout.
8. Login als admin.
9. Maak project/werkbon aan en wijs toe aan monteur.
10. Login als monteur.
11. Open werkbon.
12. Vul gebruikte onderdelen in.
13. Vul uren, foto, checklist en handtekening in.
14. Rond werkbon af.
15. Login als admin.
16. Controleer:
   - werkbon staat op afgerond
   - gebruikte onderdelen staan onder Bestellen
   - kosten zijn zichtbaar onder Kosten
   - geen veld “Leverancier” bestaat
17. Ga naar Prijzen.
18. Pas prijs aan of laad prijzen opnieuw.
19. Maak nieuw project.
20. Controleer:
   - nieuw project gebruikt nieuwe prijs
   - oud afgerond project behoudt oude kosten

Lever een volledig werkende MVP op in React/TypeScript/Tailwind, met localStorage of IndexedDB voor demo, en duidelijke service-lagen zodat Supabase, Wasco API en backend-prijzen later eenvoudig gekoppeld kunnen worden.
```
