import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Nieuwsberichten: één Markdown-bestand per bericht in src/content/nieuws/.
 * - Nieuwe berichten: geef een `datum` (JJJJ-MM-DD) mee.
 * - Overgezette berichten van de oude site hebben enkel `jaar` + `volgorde`
 *   (de oude site vermeldde geen exacte publicatiedatum).
 */
const nieuws = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/nieuws' }),
  schema: z.object({
    titel: z.string(),
    datum: z.coerce.date().optional(),
    jaar: z.number().int().optional(),
    volgorde: z.number().optional(),
    samenvatting: z.string().optional(),
    afbeelding: z.string().optional(),
    extraAfbeeldingen: z.array(z.string()).optional(),
    bron: z.string().optional(),
  }),
});

export const collections = { nieuws };
