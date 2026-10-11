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
- **Production domain:** `www.okikohigh.com` is supplied; canonical host and Cloudflare configuration are TBD.

Confirm the Cloudflare deployment method and build settings before configuring production. Do not assume static export or a specific Cloudflare adapter until the deployment approach is selected.

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
- Set the canonical host after the owner confirms `www` versus apex.
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
- **Form provider and submission endpoint:** TBD.
- **Analytics and consent requirements:** TBD.

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
- Redirect rules: TBD

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

- Canonical host: `www` or apex
- Cloudflare deployment product and Next.js compatibility approach
- Build and output settings
- Primary contact action, form provider, and submission endpoint
- Booking integration
- Analytics and consent setup
- Repository conventions and production branch
