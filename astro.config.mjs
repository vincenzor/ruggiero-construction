import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ruggiero-construction.be',
  integrations: [sitemap()],
});
