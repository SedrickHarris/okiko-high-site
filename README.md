# OKIKO HIGH Website

Website for **OKIKO HIGH Digital Marketing Agency** — digital marketing, marketing automation, and SaaS solutions powered by GoHighLevel and its ecosystem. Serves clients worldwide.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Source control: GitHub
- Deployment target: Cloudflare (settings TBD, see `docs/06-technical-architecture-and-deployment.md`)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

Optional: set `NEXT_PUBLIC_SITE_URL` to override the site URL used for canonical URLs, the sitemap, and robots.

## Project docs

Planning and business facts live in [`docs/`](docs/). Start with `00-project-overview.md`; `01-business-source-of-truth.md` is the reference for all business facts. Anything marked **TBD** must not be published as a claim.

## Layout

- `src/app/` — routes (App Router), `robots.ts`, `sitemap.ts`
- `src/components/` — `layout`, `sections`, `cards`, `forms`, `seo`, `ui`
- `src/content/` — `services`, `industries`, `resources`, `case-studies`
- `src/data/` — site-wide data (`site.ts`)
- `src/lib/schema/` — structured data helpers
- `public/images/brand/` — logos (`source`, `web`, `social`) and icons
