import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://auru.co.jp',
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'never'
});
