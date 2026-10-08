import { getCollection, type CollectionEntry } from 'astro:content';

export type Bericht = CollectionEntry<'nieuws'>;

export const jaarVan = (b: Bericht) => b.data.datum?.getFullYear() ?? b.data.jaar ?? 0;

/** Nieuwste eerst: op datum, anders op jaar + volgorde zoals op de oude site. */
export async function alleBerichten(): Promise<Bericht[]> {
  const items = await getCollection('nieuws');
  return items.sort((a, b) => {
    const ja = jaarVan(a), jb = jaarVan(b);
    if (ja !== jb) return jb - ja;
    const da = a.data.datum?.getTime(), db = b.data.datum?.getTime();
    if (da && db) return db - da;
    if (da) return -1;
    if (db) return 1;
    return (a.data.volgorde ?? 0) - (b.data.volgorde ?? 0);
  });
}

export function samenvatting(b: Bericht, max = 170): string {
  if (b.data.samenvatting) return b.data.samenvatting;
  const tekst = (b.body ?? '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_#>`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return tekst.length > max ? tekst.slice(0, max).replace(/\s+\S*$/, '') + '…' : tekst;
}

export const datumLabel = (b: Bericht) =>
  b.data.datum
    ? new Intl.DateTimeFormat('nl-BE', { day: 'numeric', month: 'long', year: 'numeric' }).format(b.data.datum)
    : String(jaarVan(b));
