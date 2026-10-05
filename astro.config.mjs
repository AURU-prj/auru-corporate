import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.AURU_SITE_URL ?? 'https://auru.co.jp';
const base = process.env.AURU_BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'never'
});
