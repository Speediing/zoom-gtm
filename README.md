# Zoom x SpaceXAI

This password-protected Next.js site shows three Grok Bot scenes for Zoom GTM. Each scene follows an agent from a work trigger to a draft that the seller reviews.

## Stack

- Next.js 15.5 App Router
- React 19
- Geist
- vgpu
- Tailwind CSS 4
- TypeScript

The app lives in `src/`. Keep the route groups and the interactive playback structure when changing customer content.

## Run the site

Copy the environment template and set the shared site password.

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Brand source

`src/components/BrandLockup.tsx` loads the official Zoom wordmark from the CDN used by [zoom.com](https://www.zoom.com). The SpaceXAI mark lives in `public/brand/spacexai.svg`.

## Deploy

Use the `jasonwiker` Vercel scope and set `SITE_PASSWORD` in the project environment. The production alias is `zoom-grokbot.vercel.app`.
