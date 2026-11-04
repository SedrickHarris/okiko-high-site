# 06 — Technical Architecture and Deployment

**File:** `docs/06-technical-architecture-and-deployment.md`

## Purpose

Record the technical approach for building, maintaining, and deploying the OKIKO HIGH website. Keep implementation straightforward and aligned with the confirmed stack: Next.js, GitHub, and Cloudflare.

## Technology stack

- **Framework:** Next.js
- **Routing:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Version control:** Git and GitHub
- **Deployment:** Cloudflare
- **Production domain:** `okikohigh.com` (apex) is the canonical host, decided 2026-10-18. Development runs on `*.pages.dev`.
- **Site URL:** `src/data/site.ts` reads `NEXT_PUBLIC_SITE_URL` at build time (fallback `https://okikohigh.com`). It feeds canonical tags, the sitemap, the robots.txt sitemap line, and structured-data identifiers. Set it in each Cloudflare Pages environment and rebuild after changing it.
- **www redirect:** `www.okikohigh.com` must permanently (301) redirect to `https://okikohigh.com`. Cloudflare Pages `_redirects` cannot match on host, so create this as a zone-level Redirect Rule (Rules, Redirect Rules) in the Cloudflare dashboard.
- **Development indexing:** `public/_headers` sends `X-Robots-Tag: noindex` for `*.pages.dev` hosts only, so the development site is not indexed as a duplicate. It does not apply to the launch domain.

Confirm the Cloudflare deployment method and build settings before configuring production. The project uses static export (`output: "export"` in `next.config.ts`): `next build` writes the site to `out/`, and `robots.ts` and `sitemap.ts` use `dynamic = "force-static"`. Do not assume a specific Cloudflare adapter; the Cloudflare product, build settings, and production branch are still to be confirmed below.

## Application structure

Use the following responsibilities as a guide:

- `src/app/` — routes, layouts, page metadata, sitemap, and robots behavior
- `src/components/` — shared layout, navigation, cards, forms, page sections, and interface elements
- `src/content/` — substantive page copy and editorial content, where separating content from JSX is useful
- `src/data/` — confirmed business information, service records, audience records, and navigation
- `src/lib/` — metadata helpers, schema generation, and shared utilities
- `public/` — approved logos, images, fonts, and other static assets
- `docs/` — project decisions, page architecture, SEO rules, schema guidance, and launch notes

Use the actual repository conventions if they differ. Avoid creating abstractions that make a small site harder to maintain.

## Routing and page setup

- Use readable, stable URL paths documented in `03-url-and-keyword-map.md`.
- Keep service and audience routes based on the approved architecture.
- Do not create location routes for Las Vegas or worldwide geographic variants by default.
- Add routes as content is ready; proposed pages do not need to block work on confirmed pages.
- Keep page metadata specific to each route.

## Metadata and indexing

- Define a consistent approach for page titles, descriptions, canonical URLs, Open Graph metadata, and social sharing images.
- Generate a sitemap and robots directives based on the actual published route set.
- Prevent private, preview, or unfinished routes from being accidentally indexed.
- The canonical host is the apex, `https://okikohigh.com`. It is the default in `src/data/site.ts` (override with `NEXT_PUBLIC_SITE_URL`), and canonicals, sitemap URLs, Open Graph URLs, and schema `@id` values are built from it.
- Redirect the alternate host and any retired URLs once domain configuration is known.

## Structured data

Structured data is a core project requirement. Keep JSON-LD generation maintainable and connected to verified business data.

- Use stable entity identifiers for the organization, website, and pages.
- Map schema by page type in `07-structured-data-plan.md`.
- Ensure all markup reflects visible page content and confirmed facts.
- Do not add unsupported address, operating hours, review ratings, service claims, or geographic coverage.
- Use local-business markup only if the Plano location is verified as customer-facing and appropriate to represent publicly.
- Validate generated structured data on representative pages and after significant schema changes.

## Forms and integrations

- **Preferred primary contact action:** TBD.
- **Booking URL:** TBD.
- **Form provider and submission endpoint:** GoHighLevel via a Private Integration, called from a Cloudflare Pages Function at `/api/contact` (see Contact form below). Owner chose this on 2026-11-03.
- **Analytics and consent requirements:** TBD.

### Contact form (built, gated on an endpoint)

- **Component:** `src/components/forms/ContactForm.tsx` (client component). Step 1 is service pills (the six confirmed services plus Other, multi-select). Step 2 collects first name (required), last name, phone (required), email, preferred contact method (text, call, or email), and additional information. Email becomes required only if the visitor picks email as the preferred method.
- **Helpers:** `src/lib/contact-form.ts` holds the endpoint, validation, and `buildPayload`. Copy is in `src/content/contact.ts` (`contactForm`).
- **Submission:** the site is a static export, so Next.js has no server route. The form POSTs JSON to the value of `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`, set per Cloudflare Pages environment and applied at build time. Set it to `/api/contact`. The value is public, so it must never be a secret. An absolute https URL for a public webhook is also accepted.
- **Privacy guard:** `npm run check:policy` (also run by `npm run check:combos`) fails if this variable is set (in the environment or an `.env` file) while `privacyDescribesContactForm` in `src/content/privacy-policy.ts` is `false`. The contact form is live in production (the endpoint variable, `GHL_PRIVATE_TOKEN` and `GHL_LOCATION_ID` are set), so the privacy policy describes the form and GoHighLevel storage and the constant is `true`. If the form is ever switched off, change the privacy policy and the constant together with the `/contact` copy. The guard works in both directions in the Cloudflare production build: it also fails when the constant is `true` and the variable is unset while `CF_PAGES_BRANCH` is `main`. Local and preview builds are not checked in that direction. Confirm in the dashboard that the build command runs `npm run check:policy` and that the variable is a production variable. When testing locally in Git Bash, run builds with `MSYS_NO_PATHCONV=1`, or `/api/contact` is rewritten to a Windows path and the form silently stays off. The script needs no build. Recommended Cloudflare build command: `npm run check:policy && npm run build`. The dashboard setting must be confirmed there (it is not verified from the repo), and the variable must be set at build time, because the guard reads it when it runs. `check:combos` stays a local/pre-push check (it needs `out/` for the schema checks). No remote settings were changed.
- **Server side:** `functions/api/contact.ts` is a Cloudflare Pages Function (Pages picks up the root `functions/` folder automatically; it does not run under `next dev`). It validates the submission, rejects cross-origin posts, upserts the contact in GoHighLevel (`POST /contacts/upsert`, tagged `website-contact-form`, source `okikohigh.com contact form`), then adds a note with the services, preferred method, and message. If the note fails after the contact is saved, it logs the status and still reports success so the visitor does not resubmit. It logs only status codes, never submission data.
- **Secrets (Cloudflare Pages, Settings, Variables and Secrets):** `GHL_PRIVATE_TOKEN` (encrypted secret) and `GHL_LOCATION_ID`. Neither uses the `NEXT_PUBLIC_` prefix. Use a `.dev.vars` file (git-ignored) for `wrangler pages dev`. Private Integration scopes: contact write only, plus contact read only if the upsert needs it. Rotate the token if it is ever exposed.
- **Rate limiting:** a Cloudflare WAF rate limiting rule is live (free plan) on `(http.request.uri.path eq "/api/contact" and http.request.method eq "POST")`: 5 requests per 10 seconds per IP, action Block, block duration 10 seconds. Blocked requests get a Cloudflare 429 HTML page, not our JSON. The free plan only allows a 10-second period, so this protects against floods, not slow abuse. If spam appears, Cloudflare Turnstile is the next step.
- **Gating:** `/contact` renders the form only when the endpoint is set, so the site never shows a form that cannot submit. The first contact FAQ answer changes with it.
- **Spam:** a hidden honeypot field; a filled honeypot shows the success message and sends nothing. There is no CAPTCHA and no added dependency.
- **Not decided:** response-time promises (none are shown), confirmation emails, and analytics events.

### Chat widget (third-party script)

- **What:** the GoHighLevel (LeadConnector) chat widget, loaded from `widgets.leadconnectorhq.com` (`loader.js`, which in turn loads `chat-widget/loader.js` and the widget's own assets from the same host).
- **Where it loads:** once, in the root layout (`src/app/layout.tsx`), as a `next/script` `Script` with `id="leadconnector-chat-widget"`. It is on every public page and does not reload on client navigation. Do not add it to individual pages.
- **Loading strategy:** `lazyOnload` (browser idle time, after the page's resources), so it does not block rendering.
- **Widget ID:** `chatWidget` in `src/data/site.ts`. The default is the owner's widget ID; `NEXT_PUBLIC_CHAT_WIDGET_ID` overrides it at build time, and an empty value turns the widget off. The ID is a public embed value, not a secret.
- **Environments:** there is no dev/preview check, so the widget loads in every environment, including `next dev` and `*.pages.dev` previews. Test chats there land in the live GoHighLevel chat history. To avoid that, set `NEXT_PUBLIC_CHAT_WIDGET_ID` to an empty string in the Cloudflare preview environment.
- **Styling:** colors, name, avatar, and welcome message are set in the GoHighLevel builder, not in code.
- **Headers:** the site has no Content Security Policy or security-headers config (`public/_headers` only sends the `pages.dev` noindex rule), so nothing needed allowing. If a CSP is added later, it must allow the LeadConnector hosts the widget uses.
- **Privacy:** the Privacy Policy says the site uses no third-party scripts or cookies; see the checklist item in `08-launch-checklist.md`.

Keep credentials and private endpoints out of source files. Use environment variables for any secrets or environment-specific settings. Do not create nonfunctional form or booking links.

## GitHub workflow

- Keep the GitHub repository as the version-controlled source of truth.
- Make focused, reviewable commits.
- Do not discard existing user changes or rewrite shared history.
- Keep local configuration, credentials, build artifacts, and other generated files out of version control as appropriate.
- Document repository-specific branch and deployment behavior once confirmed.

## Cloudflare deployment

Document the selected Cloudflare deployment method and its settings here when confirmed:

- Cloudflare product or integration: TBD
- Production branch: TBD
- Build command: TBD
- Build output or deployment settings: TBD
- Environment variables: TBD
- Preview deployment behavior: TBD
- Custom-domain and DNS setup: TBD
- Redirect rules: `www.okikohigh.com` to `https://okikohigh.com` must be a Cloudflare-side setting on the zone (a Redirect Rule or Bulk Redirect). The owner configures this; it is not part of the repository and is not yet verified.
- Non-indexable Pages hosts: `public/_headers` sends `X-Robots-Tag: noindex` for `https://:project.pages.dev/*` and `https://:version.:project.pages.dev/*` (Cloudflare Pages host-scoped syntax). It is copied to `out/_headers` by the build. The rules name only `pages.dev` hosts, so they must not apply to `okikohigh.com`; verify this at launch (see `08-launch-checklist.md`).

Verify that the build succeeds in Cloudflare’s environment and that the configured output matches the selected Next.js deployment approach.

## Performance, accessibility, and reliability

- Optimize images and use appropriate dimensions and formats.
- Minimize client-side JavaScript where server rendering or static output is sufficient.
- Use semantic HTML, accessible labels, keyboard interaction, visible focus states, and sufficient color contrast.
- Test responsive behavior on mobile and desktop.
- Ensure navigation, forms, calls to action, metadata, and internal links work in production.
- Avoid adding dependencies without a clear project need.

## Local development

Document the exact commands after the repository is initialized. Expected workflow:

1. Install dependencies using the package manager and lockfile selected for the repository.
2. Run the local development server.
3. Build the site using the production build command.
4. Resolve build errors and verify key routes before pushing.
5. Push changes to GitHub and verify the resulting Cloudflare deployment.

## Open technical decisions

- Cloudflare deployment product and Next.js compatibility approach
- Build and output settings
- Primary contact action, form provider, and submission endpoint
- Booking integration
- Analytics and consent setup
- Repository conventions and production branch
