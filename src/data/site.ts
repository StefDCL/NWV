/**
 * Centrale instellingen van de website.
 * Pas hier contactgegevens, links en formulierinstellingen aan:
 * alle pagina's lezen deze waarden uit.
 */
export const site = {
  naam: 'Nievdonckse Watersport Vereniging',
  kort: 'NWV Berlare',
  vzw: 'Nievdonckse Watersport Vereniging vzw',
  slogan: 'Zeilen & surfen op de Nieuwdonk',
  beschrijving:
    'Zeilclub en erkende zeil- en surfschool op het recreatiedomein Nieuwdonk in Berlare. Zomerkampen, jeugdtrainingen, cursussen voor volwassenen en clubwedstrijden.',
  adres: {
    straat: 'Dendermondse Steenweg 13A',
    postcode: '9290',
    gemeente: 'Berlare (Overmere)',
    domein: 'Recreatiedomein Nieuwdonk',
  },
  gps: { lat: 51.033432, lng: 3.970587, tekst: '51°02’00.4″N 3°58’14.1″O' },
  ondernemingsnummer: '0452.859.346',
  iban: 'BE26 9731 4206 5729',
  email: {
    algemeen: 'admin@nwv-nd.be',
    jeugd: 'jellevets@hotmail.com',
    webbeheer: 'webbeheer@nwv-nd.be',
  },
  jeugdverantwoordelijke: {
    naam: 'Jelle Vets',
    rol: 'Hoofdmonitor & jeugdtrainer',
    gsm: '0479 37 32 31',
    gsmLink: '+32479373231',
    email: 'jellevets@hotmail.com',
  },
  social: {
    facebook: 'https://www.facebook.com/NWVberlare/',
    instagram: 'https://www.instagram.com/nwv_berlare/',
    flickr: 'https://www.flickr.com/photos/145574761@N05/albums',
  },
  /**
   * Formulieren.
   * - Laat `endpoint` leeg: het formulier opent dan het e-mailprogramma van de bezoeker
   *   met een ingevulde e-mail naar het juiste adres (werkt zonder extra dienst).
   * - Vul een endpoint in van een formulierdienst (bv. Formspree, Web3Forms, Getform of
   *   Netlify Forms) om formulieren rechtstreeks te laten versturen. Zie README.md.
   */
  formulieren: {
    endpoint: '',
  },
  /** Inschrijvingen voor de zomerkampen. */
  inschrijvingen: {
    open: false,
    melding: 'De inschrijvingen voor de zeilkampen 2027 zijn nog niet geopend. De startdatum wordt later meegedeeld.',
  },
} as const;

export type NavItem = { label: string; href: string; children?: { label: string; href: string; info?: string }[] };

export const navigatie: NavItem[] = [
  {
    label: 'Club',
    href: '/club/',
    children: [
      { label: 'Over de club', href: '/club/', info: 'Nieuwdonk, clubhuis en vloot' },
      { label: 'Nieuws', href: '/nieuws/', info: 'Laatste berichten en archief' },
      { label: 'Lid worden', href: '/club/lid-worden/', info: 'Tarieven en aanvraag' },
      { label: 'Het bestuur', href: '/club/bestuur/' },
      { label: 'Slotcode aanvragen', href: '/club/slotcode/', info: 'Enkel voor leden' },
      { label: 'Handige links', href: '/club/links/' },
    ],
  },
  {
    label: 'Zeilschool',
    href: '/zeilschool/',
    children: [
      { label: 'Zeilschool & jeugdwerking', href: '/zeilschool/', info: 'Overzicht van ons aanbod' },
      { label: 'Zomerkampen 2026', href: '/zeilschool/zomerkampen/', info: 'Alle kampen, data en prijzen' },
      { label: 'Interne zeilkampen', href: '/zeilschool/kampen/interne-zeilkampen/', info: 'Oostende, Veerse Meer, Grevelingen' },
      { label: 'Jeugdtrainingen', href: '/zeilschool/jeugdtrainingen/', info: 'Woensdag & zaterdag' },
      { label: 'Zeilen voor volwassenen', href: '/zeilschool/volwassenen/' },
      { label: 'Inschrijven', href: '/zeilschool/inschrijven/' },
    ],
  },
  {
    label: 'Wedstrijden',
    href: '/wedstrijden/',
    children: [
      { label: 'Kalender', href: '/wedstrijden/', info: 'Clubactiviteiten van dit seizoen' },
      { label: 'Uitslagen', href: '/wedstrijden/uitslagen/', info: 'Alle uitslagen sinds 2013' },
      { label: 'Jeugdklassement', href: '/wedstrijden/jeugdklassement/' },
      { label: 'Q-Cup', href: '/wedstrijden/q-cup/' },
    ],
  },
  { label: 'Media', href: '/media/' },
  {
    label: 'Contact',
    href: '/contact/',
    children: [
      { label: 'Contact', href: '/contact/' },
      { label: 'Route', href: '/contact/route/' },
      { label: 'Aanspreekpersoon Integriteit', href: '/contact/#integriteit' },
    ],
  },
];
