# Alff Werkbon Systeem

Nederlandstalige mobile-first MVP voor werkbonnen, CO-keur, montagekoffers en bestellingen bij ketelinstallaties.

## Lokaal draaien

```bash
npm install
npm run dev
```

Open daarna `http://localhost:4173`.

Zonder npm kan de lokale server ook direct worden gestart:

```bash
node server.js
```

## Build

```bash
npm run build
```

De static build komt in `dist/`. Vercel gebruikt dezelfde build via `vercel.json`.

## Vercel deploy

Bij import van de GitHub repository `mitchymitchy/werkbon-systeem`:

- Root Directory: `je-bent-een-senior-full-stack`
- Build Command: `npm run build`
- Output Directory: `dist`
- Production Branch: `main`
- Auto deploy: aan

Koppel nog geen productiedomein. Gebruik eerst alleen de tijdelijke Vercel test-URL.

## Inbegrepen

- Nieuw project aanmaken
- M001, M004 of beide koffers kiezen
- Gebruikte onderdelen registreren met plus/min en handmatige invoer
- Zoekfunctie en kofferfilter
- Automatische berekening van resterend, aan te vullen en materiaalkosten
- Project afronden
- Admin-dashboard voor projecten, bestellingen en kosten
- Bestelstatusflow: Niet besteld, Besteld, Ontvangen, Aangevuld
- Artikelbeheer met prijzen, artikelnummers, artikelnummers en actief/inactief
- CSV-export
- PDF-export via browser print/PDF

Locatiecodes zijn bewust volledig weggelaten.

