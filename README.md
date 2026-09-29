# Pure Linemark — purelinemark-au.com

Professional line marking services across Australia — car parks, warehouses, roads and sports courts. Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**.

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production

```bash
npm run build      # static-friendly build
npm start
```

### Deploy (Vercel)

1. Push this repo to GitHub
2. Import it in [vercel.com](https://vercel.com) — no config needed
3. Add the custom domain `purelinemark-au.com` under **Project → Settings → Domains**

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero, services, why-us, stats, process, testimonials, projects, FAQ, quote form |
| `/about` | Company story, commitments, stats |
| `/services` | Six detailed service sections with anchors (e.g. `/services#car-park-line-marking`) |
| `/projects` | Project case studies |
| `/contact` | Quote form, contact details, service areas |

## SEO

- Keyword-optimised metadata for **"Pure Linemark"** on every page (`app/layout.tsx`, per-page `metadata` exports)
- `PaintingContractor` JSON-LD structured data in the root layout
- `sitemap.xml` and `robots.txt` (generated from `app/sitemap.ts` / `app/robots.ts`)
- Custom favicon (`app/icon.svg`), Open Graph tags, canonical URLs at `https://purelinemark-au.com`

## Editing Content

All business content lives in one place — [`components/data.ts`](components/data.ts):
services, values, process steps, stats, FAQs, testimonials, projects, service areas, phone and email. Update the placeholder phone number (`1300 787 356`) and email (`info@purelinemark-au.com`) there before going live.
