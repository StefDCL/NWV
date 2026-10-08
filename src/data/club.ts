/** Clubgegevens: kalender, tarieven, bestuur, vloot. Pas jaarlijks aan. */

export type Activiteit = { datum: string; uur?: string; titel: string; type: 'wedstrijd' | 'evenement' | 'kamp' };

/** Activiteitenkalender 2026 (bron: nwv-nd.be). */
export const kalender: Activiteit[] = [
  { datum: '2026-01-25', titel: 'Nieuwjaarsbrunch', type: 'evenement' },
  { datum: '2026-04-06', uur: '11u', titel: 'Openingswedstrijd', type: 'wedstrijd' },
  { datum: '2026-04-19', uur: '11u', titel: 'Voorjaarswedstrijd', type: 'wedstrijd' },
  { datum: '2026-05-24', uur: '11u', titel: 'Beker NWV', type: 'wedstrijd' },
  { datum: '2026-06-07', uur: '10u', titel: 'OBK Q Benjamins', type: 'wedstrijd' },
  { datum: '2026-06-28', uur: '11u', titel: 'Zomerwedstrijd', type: 'wedstrijd' },
  { datum: '2026-07-18', uur: '13u30', titel: 'Zomerhappening', type: 'evenement' },
  { datum: '2026-08-29', titel: 'Familienamiddag', type: 'evenement' },
  { datum: '2026-08-30', titel: 'Startdag NWV Berlare', type: 'evenement' },
  { datum: '2026-09-06', uur: '11u', titel: 'Starterswedstrijd', type: 'wedstrijd' },
  { datum: '2026-09-20', uur: '11u', titel: 'Septemberwedstrijd', type: 'wedstrijd' },
  { datum: '2026-10-04', uur: '11u', titel: 'Herfstwedstrijd', type: 'wedstrijd' },
  { datum: '2026-10-18', uur: '11u', titel: 'Beker van de voorzitter', type: 'wedstrijd' },
];

export const lidgeld = {
  jaar: 2026,
  varend: [
    { label: 'Individueel lidmaatschap t.e.m. 25 jaar', prijs: 80 },
    { label: 'Individueel lidmaatschap vanaf 26 jaar', prijs: 105 },
    { label: 'Gezinslidmaatschap', prijs: 145 },
  ],
  inbegrepen: [
    'Vaarlicentie WWSV (Wind en Watersport Vlaanderen)',
    'Gebruik van de clubaccommodatie',
    'Huren van clubmateriaal',
    'Voorrang bij cursussen',
    'Uitnodiging tot onze activiteiten',
  ],
  steunend: { label: 'Niet-varend, steunend lid', prijs: 60, inbegrepen: ['Uitnodiging tot onze activiteiten'] },
  effectief: { label: 'Effectief lid (ongeacht de sport)', prijs: 145 },
};

export const voordelen = [
  'Opleiding in surfen en zeilen, met als doel het behalen van Sport Vlaanderen-brevetten.',
  'Cursussen voor jeugd en volwassenen.',
  'Vervolmaking en training met gemotiveerde monitoren.',
  'Gebruik van clubboten en -planken.',
  'Clubactiviteiten voor alle bootklassen en windsurfplanken.',
  'Nationale wedstrijden voor Spirou en Europe.',
  'Verzekering tijdens de activiteiten.',
  'Een gezellig clubleven.',
  'Abonnement op het watersportblad Varen.',
  '5% korting bij Optiteam op vertoon van je NWV-lidkaart.',
];

export const vloot = [
  { aantal: 21, naam: 'Optimist', info: 'Populaire éénmansboot voor kinderen.' },
  { aantal: 5, naam: 'Laser', info: 'Éénmansboot bij uitstek, de klasse waarin Emma Plasschaert in 2018 wereldkampioen werd.' },
  { aantal: 2, naam: 'Splash', info: 'Éénmansboot voor de jeugd die de Optimist ontgroeid is.' },
  { aantal: 3, naam: 'RS Tera', info: 'Levendige, sportieve éénmansboot voor de jeugd.' },
  { aantal: 1, naam: 'Laser Bahia', info: 'Tweemansboot met gennaker voor vervolmakingscursussen.' },
  { aantal: 2, naam: '420', info: 'Bekende tweemansboot, ideaal voor de gevorderde jeugd.' },
  { aantal: 1, naam: 'Flying Arrow', info: 'Tweemansboot.' },
  { aantal: 12, naam: 'Windsurfplanken', info: 'Voor beginners en gevorderden.' },
  { aantal: 3, naam: 'Motorboten', info: 'Voor begeleiding en redding.' },
];

export type Bestuurslid = { naam: string; rol?: string; foto?: string; telefoon?: string };

/** Bestuur zoals vermeld op nwv-nd.be (privé-adressen bewust weggelaten). */
export const bestuur: Bestuurslid[] = [
  { naam: 'Diane Krekels', rol: 'Voorzitter', foto: '/media/site/bestuur-diane.webp' },
  { naam: 'Rik De Smet', rol: 'Ondervoorzitter', foto: '/media/site/bestuur-rik.webp' },
  { naam: 'Leo Vander Stappen', rol: 'Wedstrijdcommissaris', foto: '/media/site/bestuur-leo.webp' },
  { naam: 'Ignace De Beelde', rol: 'Penningmeester', foto: '/media/site/bestuur-ignace.webp' },
  { naam: 'Jan Muylaert', rol: 'Pers & communicatie', foto: '/media/site/bestuur-jan.webp' },
  { naam: 'Patrick De Planter', rol: 'Webbeheer, ICT', foto: '/media/site/bestuur-patrick.webp' },
  { naam: 'Xavier Bracke', rol: 'Ledenadministratie', foto: '/media/site/bestuur-xavier.webp' },
  { naam: 'Jelle Vets', rol: 'Hoofdmonitor & jeugdtrainer' },
  { naam: 'Stefaan Vets', rol: 'Bestuurslid' },
  { naam: 'Stef De Clercq', rol: 'Bestuurslid' },
  { naam: 'Karel Desplenter', rol: 'Bestuurslid' },
];

/** Aanspreekpersonen Integriteit (API). */
export const integriteit = [
  { naam: 'Mieke Beirens', email: 'Mieke_beirens@hotmail.com', foto: '/media/site/api-mieke.webp' },
  { naam: 'Diane Krekels', gsm: '0468 11 84 00', email: 'diane.krekels@telenet.be' },
  { naam: 'Jelle Vets', gsm: '0479 37 32 31', email: 'jellevets@hotmail.com' },
];

export const partners = [
  {
    naam: 'Optiteam',
    url: 'https://www.optiteam.be',
    logo: '/media/site/optiteam.webp',
    tekst: 'Onze leden krijgen 5% korting op hun aankopen bij Optiteam (zeilwinkel Antwerpen) op vertoon van de NWV-lidkaart.',
  },
];

export const links = [
  {
    groep: 'Federaties',
    items: [
      { naam: 'Wind en Watersport Vlaanderen', url: 'https://www.wwsv.be/' },
      { naam: 'World Sailing', url: 'https://www.sailing.org/' },
      { naam: 'Royal Belgian Sailing Federation', url: 'https://www.belgiansailing.be/' },
      { naam: 'Belgische Optimist klasse', url: 'https://www.optimist.be/' },
      { naam: 'Laser klasse', url: 'https://www.lasergroupbelgium.net/' },
      { naam: 'Spirou klasse', url: 'https://spirouclass.be/' },
      { naam: 'Europe klasse', url: 'https://www.europeclass.be/' },
    ],
  },
  {
    groep: 'Theorie',
    items: [
      { naam: 'Alles over de werking van het zeil', url: 'http://www.zeiltheorie.nl/' },
      { naam: 'Test je kennis van het wedstrijdreglement', url: 'http://www.finckh.org/' },
      { naam: 'Racing Rules of Sailing', url: 'https://www.sailing.org/inside-world-sailing/rules-regulations/racing-rules-of-sailing/' },
    ],
  },
  {
    groep: 'Weer & wind',
    items: [
      { naam: 'Buienradar', url: 'https://www.buienradar.be/' },
      { naam: 'Windfinder – Zele (dichtst bij Nieuwdonk)', url: 'https://nl.windfinder.com/weatherforecast/zele' },
      { naam: 'Windy – Nieuwdonk', url: 'https://www.windy.com/51.036/3.991?wind,51.036,3.991,11' },
    ],
  },
  {
    groep: 'Nog meer links',
    items: [
      { naam: 'Knopen voor zeilers', url: 'https://blog.clickandboat.com/nl/leren-knopen/' },
      { naam: 'Clubracer: zeilen en zeezeilen', url: 'https://www.clubracer.be/' },
      { naam: 'Varen: kleinzeilerij', url: 'https://www.varen.be/category/wedstrijd/kleinzeilerij/' },
      { naam: 'Qkids – zeilen op woensdagnamiddag', url: 'https://www.qkids.be/instappers/' },
    ],
  },
];
