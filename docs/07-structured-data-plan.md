# 07 — Structured Data Plan

**File:** `docs/07-structured-data-plan.md`

## Purpose

Define how structured data will describe Okiko High and the site’s pages. Structured data is a core implementation component: it should clarify entities and page relationships for search engines and other systems, using only information visible on the page and verified by the owner.

Use JSON-LD unless the implementation has a clear reason to use another format. Schema.org vocabulary can describe more than Google displays as search features; markup does not guarantee a rich result, ranking improvement, knowledge panel, or AI citation.

## Entity identity

Stable identifiers use the confirmed canonical domain, the apex `okikohigh.com`:

- **Organization:** `https://{canonical-domain}/#organization`
- **Website:** `https://{canonical-domain}/#website`
- **Web pages:** each page’s canonical URL, optionally with a fragment such as `#webpage`
- **Services:** the canonical page URL plus `#service`, with no extra slash (the site uses no trailing slashes), such as `https://{canonical-domain}/services/{slug}#service`. Combo pages follow the same rule: `https://{canonical-domain}/industries/{audience}/{service}#service`.
- **Home page nodes:** the home URL has no trailing slash, so its fragment IDs are written `https://{canonical-domain}/#webpage` and `/#faq`, matching `/#organization` and `/#website`.

Use the same organization identifier when referencing Okiko High as a publisher, provider, or page subject.

**Conventions (implemented in `src/lib/schema/index.ts`):**

- `graph()` adds the `Organization` and `WebSite` nodes to every page, so callers never add them. Because the site is a static export, each page document carries both, and the `Organization` is identical on every page (name, url, `logo`), built from `siteConfig` in `src/data/site.ts`. The same `@id` never carries different properties.
- `WebSite` (`/#website`) has the Organization as `publisher`, and every page node (`WebPage`, `AboutPage`, `ContactPage`, `CollectionPage`) has `isPartOf` pointing to it.
- The home `WebPage` has `about` pointing to `/#organization`.
- Noindex pages carry no JSON-LD. Re-add it when a page becomes indexable.

The canonical domain is the apex, `https://okikohigh.com`, confirmed by the owner (`www` redirects to it). For example, the organization `@id` is `https://okikohigh.com/#organization`.

## Schema by page type

| Page type | Recommended types | Implementation notes |
|---|---|---|
| Homepage | `Organization`, `WebSite`, `WebPage` | Identify the official agency, website, logo, and page. Include only verified profile links and contact information. |
| About page | `AboutPage`, `Organization` reference | Describe the agency’s public identity and mission. Do not invent a named founder or team member. |
| Services hub | `CollectionPage` or `WebPage`, `ItemList` where useful | List only service pages and offers that are actually published and currently available. |
| Individual service page | `Service`, `WebPage`, `BreadcrumbList` | Connect the service to the agency using the stable organization ID. Include accurate service type and description. |
| Industries hub | `CollectionPage` or `WebPage`, `ItemList` where useful | List published audience pages. Represent future audiences accurately and do not imply current expertise. |
| Audience page | `WebPage`, `BreadcrumbList` | Identify the page topic and parent relationship. Avoid inventing customer types, results, or service fit. |
| Sub-audience page | `WebPage`, `BreadcrumbList` | Use only when the page has distinct, substantive content and is published. |
| Case study | `Article` or `CreativeWork`, `BreadcrumbList` | Publish only with approval and permission to identify clients. Use accurate author and date information. |
| Resource article | `Article` or `BlogPosting`, `BreadcrumbList` | Use the agency as author/publisher if that matches the byline. Add dates and images only when accurate. |
| Contact page | `ContactPage`, `Organization` reference | Contact details must match visible page content and confirmed business information. |
| Privacy and terms pages | `WebPage` | Legal pages generally need basic page markup; avoid unnecessary schema. |

## Organization properties

Add suitable properties only when confirmed and accurate:

- `name`: OKIKO HIGH Digital Marketing Agency
- `url`: canonical website URL, `https://okikohigh.com`
- `description`: approved business description
- `logo`: absolute URL to the approved logo asset
- `email`: `info@okikohigh.com`, only if visible on every page (currently not emitted; see Open items)
- `telephone`: `(469) 421-9832`, only if visible on every page (currently not emitted; see Open items)
- `sameAs`: verified official social and business profile URLs
- `foundingDate`: `2026-05-03`, only on pages where the date is visible (currently not emitted; see Open items)

Do not set a `LocalBusiness` subtype or publish a street address and hours until the owner confirms the Plano address is a real customer-facing location. Do not use local business markup to imply a location merely because an address was supplied.

## Service properties

For each published service, consider:

- `name`
- `serviceType`
- `description`
- `provider`, referencing the organization entity
- `areaServed`, only when supported by the page and business facts

Do not mark up proposed services as active offers before the owner confirms availability. Worldwide coverage may be represented only in a way that is accurate and consistent with visible site content.

## FAQ structured data

- FAQ content should be tailored to each substantive page and displayed visibly to users.
- Only add FAQ markup when it accurately represents visible question-and-answer content and complies with current search engine guidance.
- Keep the JSON-LD question and answer text synchronized with the on-page FAQ.
- Do not mark up hidden, invented, or duplicated FAQs.
- FAQ markup does not guarantee a search feature.
- FAQ remediation (2026-11-03): FAQ items removed from a page are removed from the same content array that feeds the visible FAQ and `faqPageNode()`, so markup stays in step. The 404 page no longer has an FAQ (it never carried FAQPage markup). All other FAQ pages keep their FAQPage node.

## Reviews and ratings

Do not add `Review` or `AggregateRating` markup for reviews of Okiko High on its own website. Do not publish review totals or ratings until the owner confirms their source and permission to use them. Do not mark up third-party review content in a way that implies a search enhancement the page is not eligible to receive.

## Breadcrumbs

Use `BreadcrumbList` on pages with a meaningful hierarchy. The breadcrumb URLs and labels must match the actual route structure and visible navigation. A typical trail could be:

`Home → Services → AI Chatbots`

Do not add breadcrumbs to the homepage or create artificial hierarchy for pages that do not have a parent.

## Technical implementation

- Generate JSON-LD from shared, typed data or helper functions where practical.
- Avoid conflicting duplicate entities and inconsistent business details across routes.
- Escape or safely serialize JSON-LD in the application.
- Keep schema generation aligned with page metadata and canonical URLs.
- Use stable IDs and link related entities through `@id`.
- Do not add unsupported or hidden properties for keyword targeting.

## Validation checklist

- Confirm the page and its claims are visible and accurate.
- Check that required and recommended properties are valid for the chosen type.
- Confirm canonical URLs and entity IDs use the selected domain.
- Validate JSON-LD syntax and inspect rendered production markup.
- Test eligible rich-result features with Google’s Rich Results Test.
- Check broader Schema.org vocabulary with a Schema Markup Validator.
- Revalidate when changing business facts, page routes, content, or schema code.

## Open items

- Logo: `logo` uses `/images/brand/logos/web/okiko-high-primary-on-white.webp` (1600x867); owner to confirm it is the preferred file
- Verified social profile URLs
- Current availability and page scope for each service
- Email and telephone: visible as text in the body of 18 of 20 indexable pages, but not in the header or footer and not on the two combo pages, so they are not on the shared `Organization` node. Add them back only if the footer shows them on every page; the check fails if they are present on a page that does not show them.
- Founding date: shown on `/about` only, so `foundingDate` is not on the shared `Organization` node (it would be non-visible on every other page). Add it back only if the date becomes visible on every page; `npm run check:combos` fails if `foundingDate` is present on a page that does not show it
- Contact-action and booking details
- Customer-facing status of the Plano location
- Approved ratings, reviews, and case-study permissions
