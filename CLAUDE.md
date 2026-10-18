# CLAUDE.md

Guidance for working on the OKIKO HIGH Digital Marketing Agency website.

## Stack

Next.js App Router, TypeScript, Tailwind CSS v4, `src/` directory, `@/*` import alias. Deploys to Cloudflare; source on GitHub. Read `AGENTS.md` first: this Next.js version has breaking changes, so check `node_modules/next/dist/docs/` before writing framework code.

Commands: `npm run dev`, `npm run lint`, `npm run build`, `npm run check:combos`.

## Source of truth

- Business facts: `docs/01-business-source-of-truth.md`. Do not state anything marked **TBD** as fact.
- Pages and URLs: `docs/02-site-architecture-and-page-list.md`, `docs/03-url-and-keyword-map.md`.
- Other docs in `docs/` cover SEO standards, design, deployment, structured data, and launch.

## Rules

- Light theme, white foundation; brand colors are recorded in `docs/05` and defined as tokens in `src/app/globals.css`. Use brand fills with `brand-ink` text, never as text on white. No dark mode.
- Never use GoHighLevel logos or imply an official relationship.
- Serves clients worldwide. Do not create city, state, country, or regional pages (no Las Vegas).
- Never publish information belonging to Okiko High Landscaping.
- Do not invent service availability, address/hours, results, testimonials, ratings, or profile URLs.
- Each page gets its own target keyword and unique metadata. Avoid thin or duplicated pages.
- Structured data must match visible content and verified facts.
- Keep docs lightweight; page status labels (Proposed/Ready/Built/Published) are informational, not gates.
- Do not add dependencies unless required.
- Do not add the caption "Illustrative handoff, not a client project." to any page or illustration, now or in future builds (owner instruction, 2026-10-11).

## Audience x service combo pages

- Types, registry, and content live in `src/content/combos/` (`types.ts`, `registry.ts`, `{audience}/{service}.ts`). Content files use `import type` only. The template is `src/components/combos/ComboPage.tsx`.
- URLs are `/industries/{audience}/{service}` (no trailing slash, matching the rest of the site). The route is parked in `src/app/industries/_combos/` until the first combo exists; `registry.ts` explains how to enable it.
- `published: false` builds the page as noindex and keeps it out of the sitemap and all cross-links. Set it to `true` only after owner approval.
- Run `npm run check:combos` before committing combo copy. It fails on duplicate titles, descriptions, H1s, keywords, or FAQ questions, em dashes in copy, and the banned caption.
