# 07 — Structured Data Plan

**File:** `docs/07-structured-data-plan.md`

## Purpose

Define how structured data will describe Okiko High and the site’s pages. Structured data is a core implementation component: it should clarify entities and page relationships for search engines and other systems, using only information visible on the page and verified by the owner.

Use JSON-LD unless the implementation has a clear reason to use another format. Schema.org vocabulary can describe more than Google displays as search features; markup does not guarantee a rich result, ranking improvement, knowledge panel, or AI citation.

## Entity identity

Establish stable identifiers once the canonical domain is confirmed:

- **Organization:** `https://{canonical-domain}/#organization`
- **Website:** `https://{canonical-domain}/#website`
- **Web pages:** each page’s canonical URL, optionally with a fragment such as `#webpage`
- **Services:** stable identifiers based on the canonical service page URL, such as `https://{canonical-domain}/services/{slug}/#service`

Use the same organization identifier when referencing Okiko High as a publisher, provider, or page subject.

Canonical domain is still TBD. Do not finalize production identifiers until it is selected.

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
- `url`: canonical website URL after it is confirmed
- `description`: approved business description
- `logo`: absolute URL to the approved logo asset
- `email`: `okikohigh@gmail.com`, if published
- `telephone`: `(469) 421-9832`, if published
- `sameAs`: verified official social and business profile URLs
- `foundingDate`: `2026-05-03`, only if the owner confirms this should be publicly represented

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

- Canonical domain and final entity IDs
- Approved logo asset URL
- Verified social profile URLs
- Current availability and page scope for each service
- Confirmation of founding date for publication
- Contact-action and booking details
- Customer-facing status of the Plano location
- Approved ratings, reviews, and case-study permissions
