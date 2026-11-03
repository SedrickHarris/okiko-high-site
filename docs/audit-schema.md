# Audit: structured data (JSON-LD)

**Date:** 2026-11-03. **Scope:** all 22 built HTML documents from `npm run build` (`out/`). **Mode:** read-only; no source edits. `git status` was clean at the start.

Method: production build, then a script parsed every `<script type="application/ld+json">` in `out/**/*.html` and compared it with each page's canonical tag, robots meta, visible text, and visible breadcrumb. The scripts live in the session scratchpad, not the repo.

## 1. Summary

**Counts:** 7 FAIL (combo Service missing, Organization shapes, WebSite coverage, `isPartOf`, `logo`, noindex pages with schema, home `@id` slash). Every other check in section 4 is PASS, N/A, or informational.

**What works:** all 22 documents parse. There are no unresolved `@id` references, no non-apex URLs, no em or en dashes, and no forbidden types or properties (no `LocalBusiness`, `address`, hours, `Review`, `AggregateRating`, `Offer`, price, `Person`, `Event`, case study). FAQ text matches the visible text on all 20 pages that carry `FAQPage`. Every schema `url` equals its canonical tag. Breadcrumbs match the visible trail.

**Top issues by severity**

| # | Severity | Issue |
|---|---|---|
| 1 | High | Audience + service combo pages have no `Service` node (so no `provider`/`audience`). Expected: WebPage + Service. |
| 2 | Medium | `Organization` is not one consistent entity: it is redefined on every page in three different shapes (bare, +email/phone, +foundingDate/email/phone). |
| 3 | Medium | `WebSite` exists only on the home page. No other page references `/#website` (`isPartOf` missing on all pages). |
| 4 | Medium | Organization has no `logo`, although an approved logo pack exists in `public/images/brand/logos/`. |
| 5 | Low | `/case-studies` and `/resources` are noindex but carry schema (empty CollectionPage). |
| 6 | Low | Home-page `@id`s lack the slash (`https://okikohigh.com#webpage`, `#faq`) while the Organization uses `/#organization`. |
| 7 | Low | Service names differ between the services-hub ItemList and the Service nodes. |
| 8 | Low | `docs/07` says service IDs look like `/services/{slug}/#service`; output is `/services/{slug}#service`. Doc and code disagree. |

## 2. Where the schema comes from (Phase 1)

- **Builders:** one file, [src/lib/schema/index.ts](../src/lib/schema/index.ts): `organizationNode`, `websiteNode`, `pageNode`, `serviceNode`, `breadcrumbListNode`, `faqPageNode`, `graph`. Output is one `@graph` per page in one script tag.
- **Renderer:** [src/components/seo/JsonLd.tsx](../src/components/seo/JsonLd.tsx) (native `<script>`, `<` escaped to `<`).
- **Base URL:** single constant, `siteConfig.url` in [src/data/site.ts:8](../src/data/site.ts) (`process.env.NEXT_PUBLIC_SITE_URL ?? "https://okikohigh.com"`), trimmed to `base` in `schema/index.ts:5`. Nothing is hard-coded elsewhere. **Risk:** if `NEXT_PUBLIC_SITE_URL` is set to a `pages.dev` value in a Cloudflare environment, that build's schema and canonicals use it. Not verifiable from the repo; the production environment value should be confirmed.
- **`@id` definitions:** `organizationId`/`websiteId` in `schema/index.ts:8-9`; page/service/breadcrumb/faq IDs are `${pageUrl}#webpage|#service|#breadcrumb|#faq`.
- **Callers:** 20 route files plus `ComboPage.tsx`. Pages: home, about, contact, faq, services hub, six service pages, industries hub, four audience pages, privacy-policy, terms-of-service, case-studies, resources, and the combo template (`ComboPage.tsx:41-50`).
- **Dates:** `dateModified` appears only on privacy and terms, from `lastUpdated` in `src/content/privacy-policy.ts:54` (a content value, also shown visibly). No build-time dates.

## 3. Page-by-page table (Phase 2)

All pages parse OK (one block each). "Org" = full Organization node on every page. `BC` = BreadcrumbList, `FAQ` = FAQPage. IDs are shown relative to `https://okikohigh.com`.

| URL | Index | Types (besides Organization) | Page `@id` | FAQ | BC | Parse |
|---|---|---|---|---|---|---|
| `/` | index | WebSite, WebPage | `#webpage` (no slash) | yes (8) | n/a (home) | OK |
| `/about` | index | AboutPage | `/about#webpage` | yes (10) | yes | OK |
| `/contact` | index | ContactPage | `/contact#webpage` | yes (6) | yes | OK |
| `/faq` | index | WebPage | `/faq#webpage` | yes (37) | yes | OK |
| `/services` | index | CollectionPage, ItemList (6) | `/services#webpage`, `/services#services` | yes (11) | yes | OK |
| `/services/website-design` | index | WebPage, Service | `…#webpage`, `…#service` | yes (10) | yes | OK |
| `/services/google-business-profile-optimization` | index | WebPage, Service | same pattern | yes (10) | yes | OK |
| `/services/reputation-management` | index | WebPage, Service | same pattern | yes (13) | yes | OK |
| `/services/ai-chatbots` | index | WebPage, Service | same pattern | yes (10) | yes | OK |
| `/services/ai-receptionist` | index | WebPage, Service | same pattern | yes (10) | yes | OK |
| `/services/sms-email-automation` | index | WebPage, Service | same pattern | yes (10) | yes | OK |
| `/industries` | index | CollectionPage, ItemList (4) | `/industries#webpage` | yes (9) | yes | OK |
| `/industries/home-services` | index | WebPage | `…#webpage` | yes (11) | yes | OK |
| `/industries/professional-services` | index | WebPage | `…#webpage` | yes (10) | yes | OK |
| `/industries/property-management-real-estate` | index | WebPage | `…#webpage` | yes (12) | yes | OK |
| `/industries/healthcare` | index | WebPage | `…#webpage` | yes (10) | yes | OK |
| `/industries/home-services/website-design` | index | WebPage | `…#webpage` | yes (10) | yes (4 levels) | OK |
| `/industries/home-services/ai-receptionist` | index | WebPage | `…#webpage` | yes (10) | yes (4 levels) | OK |
| `/privacy-policy` | index | WebPage (+dateModified) | `…#webpage` | yes (7) | yes | OK |
| `/terms-of-service` | index | WebPage (+dateModified) | `…#webpage` | yes (12) | yes | OK |
| `/case-studies` | **noindex** | CollectionPage | `…#webpage` | no | yes | OK |
| `/resources` | **noindex** | CollectionPage | `…#webpage` | no | yes | OK |
| `/404`, `/_not-found` | noindex | none | n/a | no | no | n/a |

All Organization nodes use `@id` `https://okikohigh.com/#organization`; the only WebSite is `https://okikohigh.com/#website` (home).

## 4. Findings (Phase 3)

### Coverage

| Check | Result | Evidence |
|---|---|---|
| Every indexable page has schema | PASS | All 20 indexable pages carry a graph (table above). |
| Noindex pages carry no schema | FAIL (low) | `/case-studies`, `/resources` emit CollectionPage + BreadcrumbList. `src/app/case-studies/page.tsx:19`, `src/app/resources/page.tsx:19`. 404 correctly has none. |
| Organization + WebSite site-wide | FAIL | Organization is on every page. WebSite only on `/` (`src/app/page.tsx:41`). |
| Home = WebPage | PASS | `/` index.html. |
| About = AboutPage | PASS | `/about`. |
| Contact = ContactPage | PASS | `/contact`. |
| Services hub = CollectionPage + ItemList of six | PASS | `/services`: six ListItems, all real routes. |
| Service pages = WebPage + Service | PASS | Six pages; `WebPage.mainEntity` points to the Service. |
| Audience pages = WebPage (+Service with `audience` where genuine) | PASS (WebPage), N/A (Service) | Four audience pages are WebPage only. `Service` is optional and none is emitted. See Gaps. |
| Combo pages = WebPage + Service with `provider` + `audience` | FAIL | `ComboPage.tsx:41-50` builds Organization, WebPage, BreadcrumbList, FAQPage only. No Service. |
| Legal pages = WebPage | PASS | Both are WebPage (plus FAQPage; see below). |
| Non-home pages have BreadcrumbList | PASS | 19 of 19 indexable non-home pages. Home correctly has none (doc 07). |
| Pages with visible FAQ have FAQPage | PASS | 20 of 20 pages with FAQs. |
| Forbidden types/properties absent | PASS | Key scan over all graphs found only: @type, @id, name, url, foundingDate, email, telephone, description, breadcrumb, mainEntity, itemListElement, position, item, acceptedAnswer, text, publisher, dateModified, serviceType, provider. Types: Organization, AboutPage, BreadcrumbList, ListItem, FAQPage, Question, Answer, CollectionPage, ContactPage, WebPage, WebSite, ItemList, Service. |
| No GoHighLevel reference in schema | Informational | Appears only inside FAQ answer text that is also visible: `/industries/healthcare` ("Is GoHighLevel HIPAA compliant?"), `/privacy-policy` (CRM named), `/industries/home-services/ai-receptionist` ("HighLevel's documentation…"). No logo or relationship claim in markup. Confirm the owner is fine with the product name in FAQ text. |

### Entity integrity

| Check | Result | Evidence |
|---|---|---|
| Stable Organization/WebSite IDs | PASS | `/#organization`, `/#website`. |
| Organization defined once, referenced by `@id` | FAIL (medium) | Static export: each page is its own document, so each must define the Organization (acceptable). But it is defined in **three different shapes**: bare (most pages); +email/telephone (`/contact`, `/privacy-policy`, `/terms-of-service`); +foundingDate/email/telephone (`/about`). Same `@id` with different properties across pages can be treated as conflicting. |
| References resolve | PASS | Script found 0 unresolved `@id` refs on all 20 graphs. `provider`, `publisher`, `breadcrumb`, `mainEntity` all resolve in-graph. |
| `about` / `isPartOf` references | FAIL (medium) | No `isPartOf` anywhere, so non-home pages never link to `/#website`. `about` is not used (acceptable). |
| No duplicate/conflicting entities on a page | PASS | 0 duplicate IDs per graph. |
| `logo` is a valid ImageObject that resolves | FAIL (medium) | No `logo` on Organization (`schema/index.ts:28-44`). Doc 07 lists it as an open item; the logo pack exists (`public/images/brand/logos/web/`, e.g. `okiko-high-primary-on-white-no-tagline.svg`). An owner choice of file is needed. |
| `sameAs` verified only | PASS | No `sameAs` emitted. Profiles are TBD in doc 01. |
| `telephone`/`email` match visible values | PASS | `info@okikohigh.com` and `(469) 421-9832` are visible on all four pages that emit them (checked in page text). |
| Telephone format vs doc 07 | Informational | Output `+1-469-421-9832` (`schema/index.ts:40`). Doc 07 shows `(469) 421-9832`. Hyphenated international is valid and conventional; strict E.164 would be `+14694219832`. Owner/doc decision. |
| Contact on pages where both are visible | PASS | `withContact` pages all show both values. Home and footer-only pages do not emit them. |

### URL consistency

| Check | Result | Evidence |
|---|---|---|
| All URLs absolute on apex | PASS | URL scan found no `www`, `pages.dev`, localhost, or relative URLs in any graph. |
| Schema `url` equals canonical | PASS | 20 of 20 indexable pages equal their canonical tag. No trailing slashes anywhere; sitemap also has none. |
| Home `@id` consistency | FAIL (low) | `https://okikohigh.com#webpage` and `#faq` (no slash) vs `https://okikohigh.com/#organization`. Valid but inconsistent; caused by `absoluteUrl("/")` returning the bare base (`schema/index.ts:11-13`). |
| Breadcrumb items match visible trail and routes | PASS | Spot-checked `/services/ai-chatbots` (Home / Services / AI Chatbots), `/industries/home-services/ai-receptionist` (Home / Industries / Home Services / AI Receptionist), `/about`. Items equal the sitemap routes. |
| Sitemap vs schema coverage | PASS | 20 sitemap URLs equal the 20 indexable pages; noindex pages excluded. |

### Content accuracy

| Check | Result | Evidence |
|---|---|---|
| Every property visible on the page | PASS | foundingDate is shown on `/about` (doc 01); `dateModified` shown as "Last updated" on privacy/terms. |
| FAQ text matches visible text exactly | PASS | 20 of 20 pages, 220 Q/As (ignoring whitespace). No HTML or entity artifacts. |
| Duplicate FAQ questions across pages | Informational | 5 of 220 questions repeat on more than one page (the combined `/faq` page re-lists page FAQs by design). |
| FAQPage on legal and About pages | Informational | Doc 07 expects WebPage for legal pages; FAQPage also present because the FAQs are visible. Allowed by doc 07's FAQ rule. Google's FAQ rich results are restricted, so no rich-result benefit is implied. |
| Service `name`/`serviceType`/`description` | PASS with note | Names, types and descriptions reuse page meta copy; no invented claims. Note the naming mismatch: hub ItemList says "AI Website Chatbots", "Review Management", "Text and Email Automation"; Service nodes say "AI chatbots for small business websites", "Review management for local businesses", "Text and email automation for customer follow-up". Doc 01 names are "AI chatbots", "Reputation management", "SMS and email automation". |
| Service `description` = meta description | Informational | Identical to `description` on the WebPage node (e.g. `ai-chatbots`). Fine, but adds no distinct information. |
| Build-time dates | PASS | None. `dateModified` comes from content (`2026-11-03`). |
| `areaServed` | N/A | Not present on any node. Doc 01 allows a plain worldwide statement; see Open questions. |
| No em/en dashes in schema strings | PASS | Scan of all graphs found none. |

### Validity

| Check | Result | Evidence |
|---|---|---|
| Required/recommended properties per type | Mostly PASS | `Service` lacks recommended `areaServed`/`audience`; `Organization` lacks `logo`; `WebPage` nodes lack `isPartOf`/`inLanguage`. No required property is missing for Google features used. |
| Unsupported or misspelled properties | PASS | All keys listed above are valid schema.org for their types. |
| Properties implying guarantees | PASS | 22 distinct FAQ sentences contain "guarantee/rank/citation/rich result". All are negations or qualified statements (for example "No provider can responsibly guarantee…"). No guarantee in any non-text property. |
| `BreadcrumbList` position/URLs | PASS | Positions 1..n, `item` is an absolute URL. |

## 5. Gaps against the expected schema list

| Page type | Expected | Present | Gap |
|---|---|---|---|
| Site-wide | Organization, WebSite | Organization (3 shapes), WebSite on home only | WebSite not referenced elsewhere; Organization inconsistent; no `logo` |
| Home | WebPage | Organization, WebSite, WebPage, FAQPage | OK; `@id` slash inconsistency |
| About | AboutPage | AboutPage + FAQPage | OK |
| Contact | ContactPage | ContactPage + FAQPage | OK (`contactPoint` not emitted; see Open questions) |
| Services hub | CollectionPage + ItemList(6) | present | OK |
| Service pages | WebPage + Service | present | No `areaServed`/`audience` (optional) |
| Audience pages | WebPage (+Service w/ audience if genuine) | WebPage | No Service (judgment call) |
| Combo pages | WebPage + Service (provider, audience) | WebPage only | **Missing Service, provider, audience** |
| Legal | WebPage | WebPage + dateModified + FAQPage | OK |
| Non-home | BreadcrumbList | present | OK |
| Case studies / resources | none (noindex) | CollectionPage + BreadcrumbList | Should be removed or accepted as harmless |

## 6. Prioritized fix list

| Pri | File | Change | Alters JSON-LD? |
|---|---|---|---|
| 1 | `src/components/combos/ComboPage.tsx:41-50` | Add a `serviceNode` for the combo with `provider` (already supported) and an `audience` property (`Audience` with `audienceType` from the combo audience name). Needs an `audience` option in `serviceNode` and an unmistakable page-level `mainEntity`. Content must match visible copy and avoid worldwide-by-audience claims (doc 01). | Yes |
| 2 | `src/lib/schema/index.ts:28-44` plus `src/app/page.tsx`, `about`, `contact`, privacy, terms | Make one Organization shape: either emit the same full node (name, url, logo, email, telephone, foundingDate) on every page, or keep it minimal on all pages and put contact details on a `contactPoint`/ContactPage only. Remove the `withContact`/`foundingDate` variation. | Yes |
| 3 | `src/lib/schema/index.ts` (`pageNode`) | Add `isPartOf: { "@id": websiteId }` to every page node. Define a minimal WebSite node on every page (same shape as home) so the reference resolves per document. | Yes |
| 4 | `src/lib/schema/index.ts` | Add `logo` as an `ImageObject` with an absolute `url` to the approved file (owner picks which). | Yes |
| 5 | `src/app/case-studies/page.tsx`, `src/app/resources/page.tsx` | Remove the `JsonLd` (noindex placeholders), or accept and record the exception. | Yes (removes output) |
| 6 | `src/lib/schema/index.ts:11-13` | Use `${base}/` for the home `@id`s (or document the no-slash convention) so home IDs match `/#organization`. | Yes (home `@id`s only) |
| 7 | Service pages and `src/app/services/page.tsx` | Align Service `name` with the hub ItemList names and with doc 01 naming. | Yes |
| 8 | `docs/07-structured-data-plan.md` | Update the service `@id` example to the no-trailing-slash form actually emitted, and the telephone note once decided. | No |
| 9 | Cloudflare env | Confirm `NEXT_PUBLIC_SITE_URL` is unset or the apex in production and in any preview used for indexing. | No (config check) |

## 7. Open questions for the owner

1. **Telephone format:** keep `+1-469-421-9832`, switch to E.164 `+14694219832`, or match the visible format? Doc 07 and doc 01 show `(469) 421-9832`.
2. **`sameAs`:** none emitted. Provide the official Facebook, Instagram, LinkedIn, YouTube URLs (doc 01 TBD) before adding.
3. **`areaServed`:** add a plain "Worldwide" statement to Service nodes, or leave it out? A list of countries is not recommended.
4. **`contactPoint`:** add one (phone, email, `contactType`) on the Organization or ContactPage? Requires the primary contact action (doc 01 TBD).
5. **Logo file:** which approved file should be used as `logo` (square or horizontal, SVG or WebP)? Google prefers a raster/SVG at least 112x112.
6. **Audience Service nodes:** should the four audience pages carry a `Service` with `audience`, or stay WebPage only?
7. **Product naming in FAQ text:** is naming GoHighLevel/HighLevel in FAQ answers (and so in FAQPage markup) acceptable, given the "no implied relationship" rule?
8. **FAQPage on legal and About pages:** keep (visible FAQs) or drop to plain WebPage per doc 07?

## 8. Recommended additions to `npm run check:combos` (not implemented)

1. Parse every `application/ld+json` block in `out/` and fail on invalid JSON.
2. Exactly one `Organization` and at most one `WebSite` per `@graph`, and identical Organization JSON across all pages.
3. Every `{"@id": …}` reference resolves to a node in the same graph; no duplicate `@id` within a graph.
4. FAQPage question and answer text equals the visible FAQ text (normalize whitespace).
5. Schema `url` equals the canonical tag; every URL starts with the configured apex; no `www`, `pages.dev`, localhost, or relative URLs.
6. Indexable pages have a graph; noindex pages have none.
7. Forbidden keys: `address`, `openingHours`, `aggregateRating`, `review`, `offers`, `priceRange`, `LocalBusiness`/`ProfessionalService` types, and em or en dashes in any string.
8. Combo pages contain a `Service` with `provider` and `audience`.

## 9. Resolved (2026-11-03)

Schema fixes were implemented after this audit. A before and after diff of the JSON-LD on all 22 built pages shows only the changes below.

| Finding | Status | What changed |
|---|---|---|
| Combo pages missing `Service` | Fixed | `ComboPage.tsx` adds a `Service` (`@id` = page URL + `#service`, `name` = the page's own h1, `serviceType` from the service page data, `description` = the page's own description, `provider`, `audience` = audience name). WebPage `mainEntity` points to it. |
| Organization in three shapes | Fixed | One `organizationNode()` fed by `siteConfig`; `graph()` adds it to every page. Identical on all 20 indexable pages (check enforces byte equality). |
| No `logo` | Fixed | `ImageObject` using `/images/brand/logos/web/okiko-high-primary-on-white.webp`, 1600x867, unchanged file. |
| WebSite only on home | Fixed | `graph()` adds `WebSite` to every page; every page node has `isPartOf` to `/#website`. |
| Noindex pages carried schema | Fixed | Removed from `/case-studies` and `/resources`, with a comment describing how to restore it. |
| Home `@id` slash | Fixed | Home IDs are now `https://okikohigh.com/#webpage` and `/#faq` (`entityId()`). |
| Service names differed | Fixed | Service nodes and the hub ItemList read the name from `hubServices` (`hubServiceName()`). Service node names are now the short hub titles. |
| docs/07 ID pattern | Fixed | Updated, plus Organization and WebSite conventions. |

### Page-type map

| Page type | Result | Notes |
|---|---|---|
| Home: WebPage with `about` to `/#organization` | FIXED | `about` added. |
| About: AboutPage, Organization as `mainEntity` | PASS | Unchanged. |
| Contact: ContactPage | PASS | |
| Services hub: CollectionPage + ItemList of six | PASS | |
| Service pages: WebPage + Service (provider, serviceType, description) | PASS | Service description equals the page meta description. |
| Audience pages (4): WebPage + Service with `audience` only where genuine | PASS (no change) | Each audience page describes proposed workflows across several services, not one service for the group, so no Service was added. The service-specific content lives on the combo pages. |
| Combo pages: WebPage + Service with provider and audience | FIXED | See above. |
| Legal pages: WebPage only | PASS, with a note | Page type is WebPage. They also carry FAQPage because they show a visible FAQ, which the "every page with a visible FAQ" rule requires. Remove it from `privacy-policy` and `terms-of-service` if "WebPage only" was meant to exclude FAQPage. |
| Non-home indexable pages: BreadcrumbList | PASS | |
| Indexable pages with a visible FAQ: FAQPage | PASS | |

### Checks added

`npm run check:combos` now also reads `out/` (run `npm run build` first, or pass `--no-schema`) via `scripts/check-schema.mjs`. It checks that JSON-LD parses; one Organization and one WebSite per graph, with an identical Organization on every page; `@id` references resolve; indexable pages have schema and noindex pages do not; URLs are absolute on `https://okikohigh.com` and page `url` equals the canonical tag; no `www`, `pages.dev` or `localhost`; FAQPage text appears in the visible page; and each route type has its required schema types (including combo `Service` with `provider` and `audience`). Negative tests (altered phone, broken `provider` reference, removed `audience`, `www` URL) each failed the check as expected.

### Follow-up (2026-11-03)

`foundingDate` was removed from the shared Organization because the date is visible only on `/about`. The schema check now fails if `foundingDate` appears on a page that does not show the date. The note under "Still open" about `foundingDate` no longer applies.

### Still open

Telephone format, `sameAs`, `areaServed`, `contactPoint`, and the logo file choice remain owner decisions (section 7). The Organization carries `email`, `telephone` and `foundingDate` on every page, but those values are visible only on some pages (`foundingDate` only on `/about`).

### Follow-up 2 (2026-11-03): visibility, GoHighLevel wording, service names

- **`telephone` and `email` removed from the shared Organization.** As visible text (not `tel:`/`mailto:` attributes), both appear on 18 of 20 indexable pages. They are missing on `/industries/home-services/website-design` and `/industries/home-services/ai-receptionist`. Neither header nor footer shows them. No contact details were added to those pages.
- **`foundingDate`** stays out of the Organization (removed earlier); the visible date on `/about` is untouched.
- **GoHighLevel wording:** the default site description no longer names GoHighLevel. `/case-studies` and `/resources` (which used that default) now have their own short descriptions. The "its ecosystem" wording in the privacy policy and terms was changed to "the tools that connect to it". `docs/00` and `docs/01` still say "powered by GoHighLevel" and were not edited.
- **Service names:** only `/services/ai-chatbots` failed the visibility check ("AI Website Chatbots" is a hub card title, not shown on the page). Its Service `name` and the hub ItemList entry now read the page H1 ("AI Chatbots for Small Business Websites") through `hubServiceName()`.
- **New checks in `check:combos`:** Organization email/telephone/foundingDate must be visible text on each page; each Service name must be visible; built pages must not contain "powered by GoHighLevel", "GoHighLevel and its ecosystem", or "ecosystem" near GoHighLevel/HighLevel.
