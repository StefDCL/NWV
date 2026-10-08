const tz = 'Europe/Brussels';

export const datumLang = (iso: string) =>
  new Intl.DateTimeFormat('nl-BE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: tz }).format(new Date(iso + 'T12:00:00'));

export const datumKort = (iso: string) =>
  new Intl.DateTimeFormat('nl-BE', { day: 'numeric', month: 'short', timeZone: tz }).format(new Date(iso + 'T12:00:00'));

export const dagNaam = (iso: string) =>
  new Intl.DateTimeFormat('nl-BE', { weekday: 'short', timeZone: tz }).format(new Date(iso + 'T12:00:00'));

export const dagNr = (iso: string) => Number(iso.slice(8, 10));

export const maandKort = (iso: string) =>
  new Intl.DateTimeFormat('nl-BE', { month: 'short', timeZone: tz }).format(new Date(iso + 'T12:00:00')).replace('.', '');

/** "1 – 3 juli" of "28 aug – 1 sep" */
export const periode = (van: string, tot: string) => {
  const m = (iso: string) => new Intl.DateTimeFormat('nl-BE', { month: 'long', timeZone: tz }).format(new Date(iso + 'T12:00:00'));
  return van.slice(5, 7) === tot.slice(5, 7)
    ? `${dagNr(van)} – ${dagNr(tot)} ${m(tot)}`
    : `${dagNr(van)} ${m(van)} – ${dagNr(tot)} ${m(tot)}`;
};

export const euro = (n: number) =>
  new Intl.NumberFormat('nl-BE', { style: 'currency', currency: 'EUR', minimumFractionDigits: n % 1 ? 2 : 0 }).format(n);

/** Datum van de build (YYYY-MM-DD), gebruikt om voorbije activiteiten te markeren. */
export const vandaag = () => new Date().toLocaleDateString('sv-SE', { timeZone: tz });
