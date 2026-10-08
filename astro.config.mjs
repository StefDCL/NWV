// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkBreaks from 'remark-breaks';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Pas aan naar het definitieve domein zodra de site live gaat.
  site: 'https://www.nwv-nd.be',
  trailingSlash: 'always',
  markdown: {
    // De overgezette berichten gebruiken enkele regeleinden; remark-breaks behoudt die.
    processor: unified({ remarkPlugins: [remarkBreaks] }),
  },
});
