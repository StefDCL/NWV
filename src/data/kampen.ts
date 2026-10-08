/**
 * Zomeraanbod van de zeilschool.
 * Bron: zeilkampen.be (zomer 2026) en de PDF "zomeraanbod 2026".
 * Voor een nieuw seizoen: pas `seizoen`, de weken (data, kampcodes en prijzen) aan.
 */
export const seizoen = 2026;
export const startdag = { datum: '2026-08-30', titel: 'Startdag NWV Berlare' };

export type Week = { code: string; van: string; tot: string; prijs: number; dagen: number };
export type Kamp = {
  slug: string;
  naam: string;
  kort: string;
  type: 'extern' | 'intern';
  leeftijd: string;
  minLeeftijd: number;
  maxLeeftijd: number;
  niveau: string;
  afbeelding: string;
  intro: string;
  troeven: string[];
  voorwaarden: string[];
  praktisch: string[];
  weken: Week[];
  extra?: { titel: string; tekst: string }[];
};

const w = (code: string, van: string, tot: string, prijs: number): Week => {
  const dagen = (Date.parse(tot) - Date.parse(van)) / 86400000 + 1;
  return { code, van, tot, prijs, dagen };
};

export const kampen: Kamp[] = [
  {
    slug: 'piratenkamp',
    naam: 'Piratenkamp',
    kort: 'Aangename introductie van het zeilen, op maat van de allerjongsten.',
    type: 'extern',
    leeftijd: '6 – 9 jaar',
    minLeeftijd: 6,
    maxLeeftijd: 9,
    niveau: 'Initiatie zeilen',
    afbeelding: '/media/site/kamp-piraten.webp',
    intro:
      'Ahoy piraten! Tijdens het piratenkamp leren de jongste zeilers stap voor stap een zeilschip besturen. Elke dag verdienen we piratenmunten waarmee we stukjes van de schatkaart kopen. Hopelijk vinden we de schat! 🏴‍☠️',
    troeven: [
      'Je wordt kapitein en leert stap voor stap een zeilschip besturen.',
      'Uitdagende opdrachten en spelletjes in piratenthema.',
      'Je leert enkele belangrijke zeilknopen.',
      'Gediplomeerde monitoren (Vlaamse Trainersschool).',
      'Prachtige foto’s, die we na het kamp doorsturen via WhatsApp.',
    ],
    voorwaarden: ['Ik ben 9 jaar of jonger (6 – 9 jaar).', 'Ik kan 50 m zwemmen.'],
    praktisch: ['Extern zomerkamp op de Nieuwdonk, dagelijks van 10u tot 17u.', 'Opvang mogelijk.'],
    weken: [
      w('PI0026', '2026-07-01', '2026-07-03', 114),
      w('PI1026', '2026-07-06', '2026-07-10', 190),
      w('PI2026', '2026-07-13', '2026-07-17', 190),
      w('PI3026', '2026-07-20', '2026-07-24', 190),
      w('PI7026', '2026-08-17', '2026-08-21', 190),
      w('PI8026', '2026-08-24', '2026-08-28', 190),
    ],
  },
  {
    slug: 'sail-and-play',
    naam: 'Sail & Play',
    kort: 'Leren zeilen voor 10 t/m 12-jarigen: fun à volonté.',
    type: 'extern',
    leeftijd: '10 – 12 jaar',
    minLeeftijd: 10,
    maxLeeftijd: 12,
    niveau: 'Initiatie zeilen',
    afbeelding: '/media/site/kamp-sailplay.webp',
    intro:
      'Het ideale evenwicht tussen zeilinitiatie en uitdagende activiteiten. We leren je de basis van het zeilen en houden het elke dag spannend met opdrachten op en rond het water.',
    troeven: [
      'We leren je de basis van het zeilen.',
      'Toffe opdrachten en spelletjes op en rond het water.',
      'Je leert zelfstandig kapseizen.',
      'Maak kennis met verschillende zeemansknopen.',
      'Een fijne verrassing voor elke deelnemer.',
    ],
    voorwaarden: ['10 t/m 12 jaar (jonger? kies het Piratenkamp).', 'Zwembrevet van minstens 50 m.'],
    praktisch: ['Extern zomerkamp op de Nieuwdonk, dagelijks van 10u tot 17u.', 'Opvang mogelijk: WhatsApp Jelle (0479 37 32 31).'],
    weken: [
      w('SP0026', '2026-07-01', '2026-07-03', 114),
      w('SP1026', '2026-07-06', '2026-07-10', 190),
      w('SP2026', '2026-07-13', '2026-07-17', 190),
      w('SP3026', '2026-07-20', '2026-07-24', 190),
      w('SP7026', '2026-08-17', '2026-08-21', 190),
      w('SP8026', '2026-08-24', '2026-08-28', 190),
    ],
  },
  {
    slug: 'tous-ensemble',
    naam: 'Tous Ensemble',
    kort: 'Samen leren zeilen in duo’s, in een RS Feva.',
    type: 'extern',
    leeftijd: '10 – 15 jaar',
    minLeeftijd: 10,
    maxLeeftijd: 15,
    niveau: 'Initiatie tweemansboot',
    afbeelding: '/media/site/kamp-tous.webp',
    intro:
      'Samen zeilen: fun in een RS Feva voor jongeren van 10 tot 15 jaar! Je amuseert je in duo’s in een van onze meermansboten en leert de basis van het zeilen.',
    troeven: [
      'We leren je de basis van het zeilen.',
      'Amuseer je in duo’s in een van onze meermansboten.',
      'Je leert zelfstandig kapseizen.',
      'Maak kennis met verschillende zeemansknopen.',
    ],
    voorwaarden: ['10 t/m 15 jaar.', 'Zwembrevet van minstens 50 m.', 'Inschrijven per twee.'],
    praktisch: ['Extern zomerkamp op de Nieuwdonk, dagelijks van 10u tot 17u.', 'Opvang mogelijk op aanvraag.'],
    weken: [
      w('TE0026', '2026-07-01', '2026-07-03', 114),
      w('TE1026', '2026-07-06', '2026-07-10', 210),
      w('TE7026', '2026-08-17', '2026-08-21', 210),
      w('TE8026', '2026-08-24', '2026-08-28', 210),
    ],
  },
  {
    slug: 'junior-sailing',
    naam: 'Junior Sailing',
    kort: 'Voor gemotiveerde zeilers met ervaring die graag bijleren.',
    type: 'extern',
    leeftijd: '10 – 15 jaar',
    minLeeftijd: 10,
    maxLeeftijd: 15,
    niveau: 'Gevorderden',
    afbeelding: '/media/site/kamp-junior.webp',
    intro:
      'We leiden je op tot een gevorderde zeiler. Ideaal voor kinderen en tieners die al wat zeilervaring hebben en nog heel wat willen bijleren.',
    troeven: [
      'Module EVO1 & EVO2 in het zeilpaspoort.',
      'Deelname in Optimist, RS Tera, Splash, Laser of je eigen boot.',
      'Je leert zelfstandig kapseizen in een groter boottype.',
      'Maak kennis met nieuwe, uitdagende zeilknopen.',
      'Mogelijkheid tot deelname aan de jeugdtrainingen in het najaar.',
    ],
    voorwaarden: ['Je bent 10 tot 15 jaar oud.', 'Minstens 2 weken zeilervaring.'],
    praktisch: ['Extern zomerkamp op de Nieuwdonk, maandag tot vrijdag van 10u tot 17u.'],
    weken: [
      w('JS0026', '2026-07-01', '2026-07-03', 126),
      w('JS1026', '2026-07-06', '2026-07-10', 210),
      w('JS2026', '2026-07-13', '2026-07-17', 210),
      w('JS7026', '2026-08-17', '2026-08-21', 210),
      w('JS8026', '2026-08-24', '2026-08-28', 210),
    ],
  },
  {
    slug: 'surf-en-sup-adventure',
    naam: 'Surf & SUP Adventure',
    kort: 'Leer de basisvaardigheden van het windsurfen en suppen.',
    type: 'extern',
    leeftijd: '12 – 15 jaar',
    minLeeftijd: 12,
    maxLeeftijd: 15,
    niveau: 'Initiatie windsurfen',
    afbeelding: '/media/site/kamp-surf.webp',
    intro:
      'Wij leren jou de basisvaardigheden van het windsurfen! Onder begeleiding van een gebrevetteerde monitor, met de mogelijkheid om een erkend surfbrevet te behalen.',
    troeven: [
      'Surfplank optuigen.',
      'Basisvaardigheden: overstag gaan en gijpen, oploeven en afvallen.',
      'Evenwichtsgames en SUP-initiatie.',
      'Waterestafette en fotozoektocht aan de oevers van de Nieuwdonk.',
      'Behalen van een surfbrevet, surfles door gediplomeerde monitoren.',
    ],
    voorwaarden: ['Je bent tussen 12 en 15 jaar oud.', 'Je bent minstens 1,50 m groot.', 'Houder van het zwembrevet 50 m of meer.'],
    praktisch: ['Extern kamp op de Nieuwdonk, dagelijks van 10u tot 17u (ook op feestdagen).', 'Opvang mogelijk op aanvraag.'],
    weken: [
      w('SS0026', '2026-07-01', '2026-07-03', 126),
      w('SS1026', '2026-07-06', '2026-07-10', 210),
      w('SS8026', '2026-08-24', '2026-08-28', 210),
    ],
  },
  {
    slug: 'interne-zeilkampen',
    naam: 'Interne zeilkampen',
    kort: 'Vijf dagen zeilavontuur met overnachting, aan zee of in Zeeland.',
    type: 'intern',
    leeftijd: '8 – 12 jaar',
    minLeeftijd: 8,
    maxLeeftijd: 12,
    niveau: 'Alle niveaus',
    afbeelding: '/media/site/kamp-intern.webp',
    intro:
      'Ben je tussen 8 en 12 jaar en zie je een geweldig zeilavontuur wel zitten? Je monitoren leren je in 5 dagen de kneepjes van het vak, en ’s avonds is het genieten in ons vakantiehuisje.',
    troeven: [
      'Meer dan zeilen alleen: tropisch zwembad, plezier aan zee en samen buiten ravotten na de zeildag.',
      'Gezellig samen in een bungalow: samen eten, gezelschapsspelletjes, filmavond.',
      'Carpool naar de kampplaats en terug is inbegrepen (zelf brengen en halen mag ook).',
      'Dagelijks updates en foto’s via een WhatsApp-groep.',
      'Groepen van 7 tot 21 kinderen, altijd 1 begeleider per 7 kinderen.',
    ],
    voorwaarden: ['8 – 12 jaar.', 'Zwembrevet van minstens 50 m.'],
    praktisch: [
      'We verblijven in een gehuurd huisje; je kind logeert op een kamer voor 2 tot 4 personen.',
      'All-in kostprijs (verblijf, maaltijden, begeleiding en vervoer).',
      'Vragen? Neem contact op met Jelle via jellevets@hotmail.com of +32 479 37 32 31.',
    ],
    weken: [
      w('PA2026', '2026-04-13', '2026-04-17', 425),
      w('VM2026', '2026-07-13', '2026-07-17', 450),
      w('GM8026', '2026-08-24', '2026-08-28', 450),
    ],
    extra: [
      { titel: 'Paaskamp – Spuikom Oostende 🇧🇪', tekst: 'Van maandag 13 t.e.m. vrijdag 17 april 2026. All-in €425.' },
      { titel: 'Julikamp – Veerse Meer, Veere 🇳🇱', tekst: 'Van maandag 13 t.e.m. vrijdag 17 juli 2026. All-in €450.' },
      { titel: 'Augustuskamp – Grevelingenmeer 🇳🇱', tekst: 'Van maandag 24 t.e.m. vrijdag 28 augustus 2026. All-in €450.' },
    ],
  },
];

export const internLocaties: Record<string, string> = {
  PA2026: 'Spuikom Oostende',
  VM2026: 'Veerse Meer',
  GM8026: 'Grevelingenmeer',
};

/** Alle weken van alle kampen, gesorteerd op datum (voor het overzicht en het inschrijvingsformulier). */
export const alleWeken = kampen
  .flatMap((k) => k.weken.map((wk) => ({ ...wk, kamp: k })))
  .sort((a, b) => a.van.localeCompare(b.van) || a.kamp.minLeeftijd - b.kamp.minLeeftijd);
