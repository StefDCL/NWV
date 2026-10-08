import data from '../data/uitslagen.json';

export type Groep = { klasse: string; rijen: string[][]; notities: string[] };
export type Wedstrijd = { datum: string; naam: string; titel: string; groepen: Groep[] };

export const wedstrijden = (data as Wedstrijd[]).slice().sort((a, b) => b.datum.localeCompare(a.datum));

export const jaren = [...new Set(wedstrijden.map((w) => w.datum.slice(0, 4)))].sort((a, b) => b.localeCompare(a));

/** Splitst "1. Naam" of ["1.", "Naam", "Boot"] in positie + kolommen. */
export function rij(cols: string[]): { pos: string; naam: string; extra: string[] } {
  const [eerste, ...rest] = cols;
  const m = eerste.match(/^(\d+)\s*[.)]\s*(.*)$/);
  if (m) {
    const naam = m[2] || rest.shift() || '';
    return { pos: m[1], naam, extra: rest };
  }
  return { pos: '', naam: eerste, extra: rest };
}

export const isJaarklassement = (w: Wedstrijd) => w.datum.endsWith('-12-31');
