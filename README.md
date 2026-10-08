# Website NWV Berlare

Nieuwe website van de **Nievdonckse Watersport Vereniging vzw** (NWV Berlare). De vroegere clubsite
[nwv-nd.be](https://www.nwv-nd.be) en de jeugdwebsite [zeilkampen.be](https://www.zeilkampen.be) zijn hier samengevoegd tot één site.

Gebouwd met [Astro](https://astro.build): een **statische site** zonder database of server. Dat is snel en veilig, en je kan de site gratis
hosten (zie [Online zetten](#online-zetten)).

## Wat staat er op de site?

| Onderdeel | Pagina's | Bron van de inhoud |
| --- | --- | --- |
| Startpagina | `/` | beide sites |
| Club | `/club/`, `/club/lid-worden/`, `/club/bestuur/`, `/club/slotcode/`, `/club/links/` | nwv-nd.be |
| Nieuws | `/nieuws/` + 73 berichten (2016–2026) | archief nwv-nd.be |
| Zeilschool | `/zeilschool/`, `/zeilschool/zomerkampen/`, 6 kamppagina's, `/zeilschool/jeugdtrainingen/`, `/zeilschool/volwassenen/`, `/zeilschool/inschrijven/` | zeilkampen.be + nwv-nd.be |
| Wedstrijden | `/wedstrijden/` (kalender), `/wedstrijden/uitslagen/` (88 wedstrijden, 2013–2026), `/wedstrijden/jeugdklassement/`, `/wedstrijden/q-cup/` | nwv-nd.be + zeilkampen.be |
| Media | `/media/` + 64 fotoalbums (2012–2026) en 13 aftermovies | beide sites |
| Contact | `/contact/` (incl. Aanspreekpersoon Integriteit), `/contact/route/` | nwv-nd.be |
| Juridisch | `/privacy/` (privacyverklaring 2018), `/cookies/` | nwv-nd.be |

De **Sailshop** van zeilkampen.be is bewust niet overgenomen.

## Lokaal werken

Vereist: [Node.js](https://nodejs.org) 22 of nieuwer.

```bash
npm install        # eenmalig
npm run dev        # ontwikkelserver op http://localhost:4321 (past zich live aan)
npm run build      # bouwt de site naar de map dist/
npm run preview    # bekijk de gebouwde site
```

## Inhoud aanpassen

Bijna alles wat jaarlijks verandert, staat in een paar overzichtelijke bestanden. Je hoeft geen HTML te kennen.

| Wat | Bestand |
| --- | --- |
| Contactgegevens, e-mailadressen, sociale media, menu, inschrijvingen open/dicht | `src/data/site.ts` |
| Zomerkampen: data, kampcodes, prijzen, teksten | `src/data/kampen.ts` |
| Activiteitenkalender, lidgeld, bestuur, vloot, API, links | `src/data/club.ts` |
| Wedstrijduitslagen | `src/data/uitslagen.json` |
| Fotoalbums | `src/data/galerij.json` + foto's in `public/media/galerij/` |
| Video's | `src/data/videos.json` |
| Nieuwsberichten | `src/content/nieuws/*.md` |

### Nieuwsbericht toevoegen

Maak een nieuw bestand in `src/content/nieuws/`, bv. `2027-nieuwjaarsbrunch.md`:

```markdown
---
titel: "Nieuwjaarsbrunch 2027"
datum: 2027-01-31
afbeelding: "/media/nieuws/2027-nieuwjaarsbrunch.webp"
---

Hier komt de tekst van het bericht. Je kan **vet**, *cursief* en [links](/zeilschool/) gebruiken.
```

Zet de foto in `public/media/nieuws/`. Het bericht verschijnt automatisch bovenaan op de nieuwspagina en op de startpagina.

### Nieuw kampseizoen

1. Pas in `src/data/kampen.ts` het `seizoen`, de `startdag` en per kamp de `weken` aan (kampcode, van, tot, prijs).
2. Vervang de PDF in `public/downloads/` en pas de link aan (zoek op `zomeraanbod-2026.pdf`).
3. Zet in `src/data/site.ts` `inschrijvingen.open` op `true` zodra de inschrijvingen starten.

### Uitslag toevoegen

Voeg bovenaan in `src/data/uitslagen.json` een blok toe:

```json
{
  "datum": "2027-04-05",
  "naam": "Openingswedstrijd",
  "titel": "05/04/2027 Openingswedstrijd",
  "groepen": [
    { "klasse": "Zeilboten volgens handicapberekening", "rijen": [["1.", "Naam Voornaam", "Laser"], ["2.", "Naam Voornaam", "RS Aero 7"]], "notities": [] }
  ]
}
```

## Formulieren

Er zijn formulieren voor contact, lid worden, slotcode, inschrijving kamp/cursus en de infomail van de jeugdtrainingen.

- **Standaard** (geen extra dienst nodig): bij verzenden opent het e-mailprogramma van de bezoeker met een volledig ingevulde e-mail naar
  het juiste adres (algemeen: `admin@nwv-nd.be`, jeugd en kampen: Jelle).
- **Beter**: koppel een gratis formulierdienst zoals [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com) of
  [Netlify Forms](https://docs.netlify.com/forms/setup/). Zet het endpoint in `src/data/site.ts` → `formulieren.endpoint`. Dan worden
  formulieren rechtstreeks verstuurd, zonder dat de bezoeker zelf een mail moet versturen.

## Online zetten

De map `dist/` (na `npm run build`) is een volledige website die op elke webhost werkt. Gratis opties met automatische publicatie bij elke
wijziging op GitHub:

- **Cloudflare Pages** of **Netlify**: koppel deze GitHub-repository, buildcommando `npm run build`, publicatiemap `dist`.
- **GitHub Pages**: via GitHub Actions.

Daarna het domein `nwv-nd.be` naar de nieuwe host laten wijzen, en `zeilkampen.be` laten doorverwijzen naar `https://www.nwv-nd.be/zeilschool/`.
Pas eventueel `site` aan in `astro.config.mjs` als het domein anders wordt.

Elke push naar GitHub wordt automatisch getest met een build (`.github/workflows/build.yml`).

## Archief van de oude sites

In `docs/archief-oude-sites/` staat de tekst van alle pagina's van beide oude sites, zoals ze op 8 oktober 2026 online stonden, en een
inventaris van alle bestanden in de WordPress-mediabibliotheek (`wordpress-media-inventaris.json`). Zo kan je nakijken of er niets verloren
is gegaan.

**Foto's:** de fotoalbums op deze site tonen een selectie (8 tot 10 foto's per album, geoptimaliseerd). Neem vóór het opzeggen van de oude
hosting een volledige back-up van `wp-content/uploads/` via de WordPress-beheerder als je alle originele foto's wil bewaren.

## Projectstructuur

```
public/             vaste bestanden (foto's, logo's, PDF's, favicon)
src/
  components/       herbruikbare bouwstenen (header, footer, formulieren, kaarten…)
  content/nieuws/   nieuwsberichten in Markdown
  data/             alle gegevens (kampen, kalender, bestuur, uitslagen, galerij…)
  layouts/          basislayout van elke pagina
  lib/              hulpfuncties (datums, nieuws, uitslagen)
  pages/            de pagina's; de mappenstructuur is de URL-structuur
  styles/           globale stijl (kleuren uit de clubwimpel)
docs/               archief van de oude websites
```
