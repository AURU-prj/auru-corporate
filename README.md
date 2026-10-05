# AURU Corporate Website

Production Astro implementation based on the approved V5 design.

## Commands
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Before launch
Edit `src/config/site.ts` to replace the representative name and add final Siu/Filo URLs.
Replace `public/og-default.jpg` if a dedicated OGP image is prepared.
Confirm `site` in `astro.config.mjs` matches the production domain.

## Deploy
Static output is generated to `dist/` and can be deployed to Cloudflare Pages, Vercel, Netlify, etc.
Build command: `npm run build`
Output directory: `dist`
