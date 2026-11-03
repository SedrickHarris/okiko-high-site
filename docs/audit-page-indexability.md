# Page Indexability Audit

**Date:** 2026-11-02
**Scope:** every route in `src/app/`, read-only. No source files were changed.
**Method:** source read of all `page.tsx`, `layout.tsx`, `robots.ts`, `sitemap.ts`, `public/_headers`, `next.config.ts`, plus the combo registry; docs 01-08 and `CLAUDE.md` read for intent; the existing static export in `out/` parsed to see the rendered tags.

**Caveat on `out/`:** the export is older than 10 source files (about, contact, faq, industries hub, four audience pages, home, ai-chatbots). For About I used the source, because `out/about.html` is missing its FAQ, FAQPage node, and unique description. Other rows match the source for every field I cross-checked, but re-run `npm run build` and re-check before relying on this for launch. `git status` was clean at the start (no uncommitted changes).

## 1. Summary

| Measure | Count |
|---|---|
| Total pages (rendered HTML documents) | 23 |
| Indexable | 18 |
| Noindex | 5 (404 page and the four placeholder pages) |
| Blocked by robots.txt | 0 |
| Conflicting signals | None. The four placeholder pages are noindex and out of the sitemap; the earlier combo noindex + canonical note no longer applies because that combo is now published. |
| Unintentional noindex | 0 |
| Unclear noindex | 0 |

The 23 pages are: 20 core pages listed in `src/app/sitemap.ts`, 2 combo pages (one published, one unpublished), and the 404 page.

Both noindex pages are intentional. No search-target, service, audience, core, or article page is noindex or blocked. The larger risk is the opposite direction: four placeholder pages are indexable and in the sitemap.

## 2. Infrastructure checked

| Source | Finding |
|---|---|
| Layouts | Only `src/app/layout.tsx`. It sets no `robots` field and no manual robots meta, so nothing is inherited by children. No route groups, no nested layouts. |
| Manual meta tags / shared helpers | None. Grep for `robots`, `noindex`, `googlebot`, `X-Robots` finds only the combo route, the registry comments, and `robots.ts`. `src/lib/schema/index.ts` only builds JSON-LD. |
| Environment-based logic | None for robots. `NEXT_PUBLIC_SITE_URL` (in `src/data/site.ts`) only changes the host used in canonicals, sitemap, and schema IDs; it does not toggle indexing. No `.env` files in the repo. |
| `next.config.ts` | `output: "export"`, no `headers()`. |
| Middleware / Worker / wrangler | None exist. |
| `public/_headers` | `X-Robots-Tag: noindex` for `https://:project.pages.dev/*` and `https://:version.:project.pages.dev/*` only. Copied to `out/_headers`. Does not name `okikohigh.com`. Intentional per docs 06 and 08. Whether Cloudflare applies the host-scoped syntax as intended is not verifiable from the repo (see Open questions). |
| `src/app/robots.ts` | `User-Agent: *`, `Allow: /`, sitemap line. No Disallow rules. `public/robots.txt` does not exist. Rendered output in `out/robots.txt` matches. |
| `src/app/sitemap.ts` | 20 static routes plus `publishedCombos()`. Rendered `out/sitemap.xml` lists 21 URLs. |
| Custom 404 / error | No `not-found.tsx`, `error.tsx`, or route handlers. The default Next 404 renders with `robots: noindex` (seen in `out/404.html` and `out/_not-found.html`). |
| Dev/staging guard that could carry to production | Only the `_headers` pages.dev rules. They are host-scoped, so they should not carry over. Verify on the live apex response headers (already on the docs/08 checklist). |

## 3. All pages

Legend: Sitemap Y/N. Title/desc unique: Y, or the problem. JSON-LD abbreviations: Org = Organization, BC = BreadcrumbList, FAQ = FAQPage. Canonical is built from `siteConfig.url`, default `https://okikohigh.com` (the apex, confirmed in docs 06/07/08, decided 2026-10-18). Every canonical is a path resolved against `metadataBase`; no hardcoded www.

| URL | File | Effective status | Noindex source | Intended per docs | Sitemap | Canonical | Title/desc unique | H1 | FAQ | JSON-LD |
|---|---|---|---|---|---|---|---|---|---|---|
| `/` | `src/app/page.tsx` | Indexable | none | yes | Y | `https://okikohigh.com` | Y | 1 | Y (8) | Org, WebSite, WebPage, FAQ |
| `/about` | `src/app/about/page.tsx` | Indexable | none | yes | Y | `/about` | Y (source) | 1 | Y (source; stale `out/` lacks it) | Org, AboutPage, BC, FAQ (source) |
| `/services` | `src/app/services/page.tsx` | Indexable | none | yes | Y | `/services` | Y | 1 | Y (11) | Org, CollectionPage, ItemList, BC, FAQ |
| `/services/website-design` | `.../website-design/page.tsx` | Indexable | none | yes | Y | self | Y | 1 | Y (10) | Org, WebPage, Service, BC, FAQ |
| `/services/google-business-profile-optimization` | `.../google-business-profile-optimization/page.tsx` | Indexable | none | yes | Y | self | Y | 1 | Y (10) | Org, WebPage, Service, BC, FAQ |
| `/services/ai-chatbots` | `.../ai-chatbots/page.tsx` | Indexable | none | yes | Y | self | Y | 1 | Y (10) | Org, WebPage, Service, BC, FAQ |
| `/services/ai-receptionist` | `.../ai-receptionist/page.tsx` | Indexable | none | yes | Y | self | Y | 1 | Y (10) | Org, WebPage, Service, BC, FAQ |
| `/services/reputation-management` | `.../reputation-management/page.tsx` | Indexable | none | yes | Y | self | Y | 1 | Y (13) | Org, WebPage, Service, BC, FAQ |
| `/services/sms-email-automation` | `.../sms-email-automation/page.tsx` | Indexable | none | yes | Y | self | Y | 1 | Y (10) | Org, WebPage, Service, BC, FAQ |
| `/industries` | `src/app/industries/page.tsx` | Indexable | none | yes | Y | `/industries` | Y | 1 | Y (10) | Org, CollectionPage, ItemList, BC, FAQ |
| `/industries/home-services` | `.../home-services/page.tsx` | Indexable | none | yes | Y | self | Y | 1 | Y (11) | Org, WebPage, BC, FAQ |
| `/industries/professional-services` | `.../professional-services/page.tsx` | Indexable | none | yes | Y | self | Y | 1 | Y (10) | Org, WebPage, BC, FAQ |
| `/industries/property-management-real-estate` | `.../property-management-real-estate/page.tsx` | Indexable | none | yes | Y | self | Y | 1 | Y (12) | Org, WebPage, BC, FAQ |
| `/industries/healthcare` | `.../healthcare/page.tsx` | Indexable | none | yes | Y | self | Y | 1 | Y (10) | Org, WebPage, BC, FAQ |
| `/industries/home-services/ai-receptionist` | `src/app/industries/[audience]/[service]/page.tsx` (registry `published: true`) | Indexable | none | yes (owner approved 2026-10-18, doc 03) | Y | self | Y | 1 | Y (10) | Org, WebPage, BC, FAQ |
| `/industries/home-services/website-design` | `src/app/industries/[audience]/[service]/page.tsx` (registry `published: true`) | Indexable | none | yes (owner approved, docs/03) | Y | self | Y | 1 | Y (10) | Org, WebPage, BC, FAQ |
| `/case-studies` | `src/app/case-studies/page.tsx` | **Noindex** (`noindex, follow`) | `src/data/placeholder-pages.ts` (`published: false`) via the page `metadata` | yes (noindex until content is approved, docs/03) | N | `/case-studies` | **Description missing, falls back to site default (shared with 3 other pages)** | 1 | N | Org, CollectionPage, BC |
| `/resources` | `src/app/resources/page.tsx` | **Noindex** (`noindex, follow`) | `src/data/placeholder-pages.ts` (`published: false`) via the page `metadata` | yes (noindex until content is approved, docs/03) | N | `/resources` | **Description missing, site default** | 1 | N | Org, CollectionPage, BC |
| `/faq` | `src/app/faq/page.tsx` | Indexable | none | yes | Y | `/faq` | Y | 1 | Y (37, is the FAQ page) | Org, WebPage, BC, FAQ |
| `/contact` | `src/app/contact/page.tsx` | Indexable | none | yes | Y | `/contact` | Y | 1 | Y (5) | Org, ContactPage, BC, FAQ |
| `/privacy-policy` | `src/app/privacy-policy/page.tsx` | **Noindex** (`noindex, follow`) | `src/data/placeholder-pages.ts` (`published: false`) via the page `metadata` | yes (noindex until content is approved, docs/03) | N | `/privacy-policy` | **Description missing, site default** | 1 | N (exempt) | Org, WebPage, BC |
| `/terms-of-service` | `src/app/terms-of-service/page.tsx` | **Noindex** (`noindex, follow`) | `src/data/placeholder-pages.ts` (`published: false`) via the page `metadata` | yes (noindex until content is approved, docs/03) | N | `/terms-of-service` | **Description missing, site default** | 1 | N (exempt) | Org, WebPage, BC |
| 404 (`/_not-found`, `404.html`) | none, Next default | **Noindex** | Next.js built-in not-found behavior (`<meta name="robots" content="noindex">` in `out/404.html`) | yes (standard, not listed in docs) | N | none | uses site default title and description (not a search target) | 1 | N | none |

Canonical "self" means the page's own absolute URL via `alternates.canonical` and `metadataBase`. Titles are unique across all 22 content pages (checked from `out/` and `src/content`). Descriptions are unique except the four placeholder pages, which inherit `siteConfig.description`.

## 4. Noindex pages

| Page | Directive source | Intentional? |
|---|---|---|
| `/case-studies`, `/resources`, `/privacy-policy`, `/terms-of-service` | Each page's `metadata` spreads `placeholderRobots(...)` from `src/data/placeholder-pages.ts`, which returns `robots: { index: false, follow: true }` while `published` is false. Removed from the sitemap by `isSitemapPath` in `src/app/sitemap.ts`. Footer links kept. | Yes. Placeholder pages with no approved content; noindex until content is approved (docs/03). |
| 404 page | Default Next.js not-found noindex. Not set anywhere in the repo. | Yes, standard behavior. Not addressed in the docs. |

No page has both a robots.txt block and a noindex tag (robots.txt blocks nothing).

**Conflict note:** none remaining. `/industries/home-services/website-design` was noindex when this audit was first written; it is now published (see section 8), so it is indexable and in the sitemap. No noindex page appears in the sitemap, and no indexable page is missing from it (the 18 sitemap URLs equal the 18 indexable pages).

## 5. Issues to fix (prioritized, not applied)

**Unintentional noindex: none found.**

1. **Four placeholder pages are indexable and in the sitemap with "Content coming soon" and no unique description** (`/case-studies`, `/resources`, `/privacy-policy`, `/terms-of-service`).
   - Why it matters: thin content with a duplicated description across four URLs, against `docs/04` ("Don't create thin or duplicated pages") and `docs/08` ("Confirm each page has a unique, accurate meta title and description"). Doc 02 also says Terms "requires owner/legal review before publication" and Case Studies should launch "when approved examples are available".
   - Recommended change (needs owner decision first, see Open questions): either (a) add `robots: { index: false, follow: true }` to the `metadata` export in each of the four `page.tsx` files and remove their four entries from `routes` in `src/app/sitemap.ts` until real content exists, or (b) keep them indexable but add a unique `description` to each `metadata` export. Option (a) matches how combos are handled. Do not add noindex without the owner's call, since the footer links to all four.
2. **Missing meta descriptions on the same four pages.** Files: `src/app/case-studies/page.tsx:5`, `src/app/resources/page.tsx:5`, `src/app/privacy-policy/page.tsx:5`, `src/app/terms-of-service/page.tsx:5`. Add a `description` per page (or noindex per item 1). The JSON-LD on these pages also has no description, which is consistent with docs 07.
3. **Stale build output.** `out/` predates 10 source files, so it is not a reliable reflection of the current site. Re-run `npm run build` before launch checks and confirm the About page renders its FAQ (the source does).
4. **Docs drift on combos.** `docs/02-site-architecture-and-page-list.md` says "No combo URL is live" and the structure diagram says "none published", but `registry.ts` has `/industries/home-services/ai-receptionist` at `published: true` (and doc 03 says published 2026-10-18). Update doc 02 to match. Docs only.
5. **Docs drift on deployment method.** `docs/06` says "Do not assume static export" and lists build output as TBD, but `next.config.ts` uses `output: "export"` and `robots.ts` / `sitemap.ts` comment that it is required for Cloudflare Pages. Update doc 06 once the owner confirms the deployment approach.
6. **Live header check.** After launch, confirm the apex response carries no `X-Robots-Tag` and a `*.pages.dev` response does (already unchecked in `docs/08`).

## 6. Placeholder, TBD, and structured-data checks

- **Plano address, hours:** not published in any page or schema. They appear only in comments saying they are excluded (`src/content/about.ts:9`, others). Matches docs 01 and 07.
- **LocalBusiness / address / sameAs / ratings:** no schema node of these kinds anywhere in `src/` (grep); `out/` JSON-LD types contain no `LocalBusiness`.
- **GoHighLevel:** no logo or partnership claim found in code. GoHighLevel appears as cited help-center source links in service, industry, and combo content (for example `src/content/services/ai-receptionist.ts:25`) and as a question in the healthcare FAQ. These are references to vendor documentation, not an official-relationship claim, but a human should confirm the healthcare FAQ wording ("Is GoHighLevel HIPAA compliant?") reads as intended. Not verified beyond a grep.
- **Phone and email:** `(469) 421-9832` and `info@okikohigh.com` are published in schema and visible; docs 01 and 07 list both as confirmed.
- **Canonical host:** every canonical, sitemap URL, and schema ID derives from `siteConfig.url` (`NEXT_PUBLIC_SITE_URL` or default apex). No hardcoded www or apex strings outside that default. The task brief says the canonical host is TBD, but docs 06, 07, and 08 record it as decided (apex, 2026-10-18). The checklist item to set `NEXT_PUBLIC_SITE_URL=https://okikohigh.com` in Cloudflare Pages production is still unchecked; if it is set to a pages.dev or www URL, all canonicals and the sitemap will point there.
- **JSON-LD vs visible content:** FAQ counts in the JSON-LD (from `out/`) are plausible matches to the visible FAQ sections, but I did not diff question text for every page. Page comments state the nodes read from the same objects as the visible FAQ. Spot-check with the Rich Results Test per docs 08.

## 7. Open questions for the owner

1. Should the four placeholder pages (`/case-studies`, `/resources`, `/privacy-policy`, `/terms-of-service`) be indexable while they only say "Content coming soon"? Terms in particular are flagged in doc 02 as needing legal review before publication.
2. Is the `*.pages.dev` site currently the only live host? If so, everything is effectively noindex today by design, and the sitemap points at `okikohigh.com`. Confirm the intended cutover.
3. Has `NEXT_PUBLIC_SITE_URL` been set in the Cloudflare Pages production environment? (Docs/08 item unchecked.)
4. Does Cloudflare Pages apply the host-scoped `_headers` syntax (`https://:project.pages.dev/*`) as intended? Not verifiable from the repo.
5. Resolved: `/industries/home-services/website-design` was approved and published (section 8).
6. Deployment product, build settings, and branch are still TBD in doc 06 even though the code is a static export.
7. The task brief lists the canonical host and the Plano address, hours, and LocalBusiness as TBD. Docs show the host decided; the Plano address, hours, and LocalBusiness remain TBD and are correctly not published.

## 8. Resolved (2026-11-02)

Issues 1, 2, 4, and 5 above are fixed, and the live-header item (issue 6) was added to the launch checklist. Issue 3 (stale `out/`) was resolved by re-running `npm run build`. Nothing was committed, pushed, or deployed, and no dependencies were added.

**Changes**

| Item | Change |
|---|---|
| Placeholder pages noindex | `/case-studies`, `/resources`, `/privacy-policy`, `/terms-of-service` now emit `noindex, follow`. Each page has the comment "Noindex until real content is approved. Remove this and restore the sitemap entry when published." No copy was written; footer links are unchanged. |
| One-change publish flag | New `src/data/placeholder-pages.ts` holds a `published` flag per placeholder page. Each page spreads `placeholderRobots(...)` into its `metadata`, and `src/app/sitemap.ts` filters with `isSitemapPath`. Setting a page's flag to `true` restores indexing and its sitemap entry together. |
| Missing descriptions (issue 2) | Not added: the pages are noindex and the task said to write no new copy. Add a unique description for each when it is published. |
| Docs | Doc 02 now says `/industries/home-services/ai-receptionist` is live and `/industries/home-services/website-design` is built but unpublished. Doc 06 records static export (`output: "export"`). Doc 03 marks the four pages "noindex until content is approved". Doc 08 keeps the `NEXT_PUBLIC_SITE_URL` item unchecked and adds the X-Robots-Tag preview/production check plus a placeholder-publish item. |

**Verification (fresh `npm run build`, compiled successfully, 28 static pages)**

- `out/case-studies.html`, `out/resources.html`, `out/privacy-policy.html`, `out/terms-of-service.html` each contain `<meta name="robots" content="noindex, follow">`.
- `out/sitemap.xml` has 17 URLs and none of the four placeholder paths.
- The 17 remaining indexable pages (home, about, services hub and 6 services, industries hub and 4 audiences, faq, contact, ai-receptionist combo) have no robots meta tag, so they index normally, and each is in the sitemap.
- Unchanged: `out/404.html` and `out/_not-found.html` are still `noindex`; the unpublished combo `/industries/home-services/website-design` is still `noindex, follow` and out of the sitemap; `out/robots.txt` is unchanged and `out/_headers` is identical to `public/_headers`.
- `npm run check:combos` passes.

**Updated counts after the fix:** 23 pages total, 17 indexable, 6 noindex (404, the unpublished combo, and the 4 placeholders), 0 blocked by robots.txt. The Summary and table above reflect the state before these fixes. The earlier "21 indexable" figure included the four placeholder pages.

**Still open:** the owner questions in section 7, and the live-header and `NEXT_PUBLIC_SITE_URL` checks, which can only be done against Cloudflare.

## 9. Combo published (2026-11-02)

`/industries/home-services/website-design` was published by setting `published: true` for `homeServicesWebsiteDesign` in `src/content/combos/registry.ts` (owner approved; the two verify-before-launch items in docs/03 were handled). No other source file changed.

**Current counts:** 23 pages total, 18 indexable, 5 noindex (404 plus the four placeholders), 0 blocked by robots.txt, 0 conflicts. The Summary, page table, and Noindex section above were updated to match; sections 8 and earlier narrative describe the state at the time they were written (for example, section 8 says 17 indexable).

**Verification (fresh `npm run build`, 28 static pages; `npm run check:combos` passes)**

- `out/industries/home-services/website-design.html` has no robots meta tag.
- `out/industries/home-services.html` and `out/services/website-design.html` each link to the combo, and the combo links back to its parents. The AI receptionist combo is unchanged (no robots tag, still linked from its parents).
- `out/404.html`, `out/_not-found.html`, and the four placeholder pages are still noindex; none of the four placeholder paths is in `out/sitemap.xml`.
- The combo's FAQPage JSON-LD has 10 questions; each question and answer text was found in the visible page text (0 missing).

**Sitemap (18 URLs):** `/`, `/about`, `/services`, `/services/website-design`, `/services/google-business-profile-optimization`, `/services/ai-chatbots`, `/services/ai-receptionist`, `/services/reputation-management`, `/services/sms-email-automation`, `/industries`, `/industries/healthcare`, `/industries/home-services`, `/industries/professional-services`, `/industries/property-management-real-estate`, `/faq`, `/contact`, `/industries/home-services/ai-receptionist`, `/industries/home-services/website-design`.
