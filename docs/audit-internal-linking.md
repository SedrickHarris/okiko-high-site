# Internal Linking Audit

**Date:** 2026-11-02
**Scope:** the 18 indexable pages from `docs/audit-page-indexability.md` (section 9). Read-only: no source files were changed.
**Method:** fresh `npm run build`, then every `<a href>` in `out/*.html` was extracted and classified by where it sits (header, footer, breadcrumb, or body/main). "Contextual" means a link inside `<main>` that is not a breadcrumb: body copy, CTAs, cards, related blocks, FAQ intros. "Sitewide" means the header and footer. Anchors, sections, and sentences below come from the rendered HTML and were matched back to source files. The uncommitted changes in the working tree (placeholder-page noindex, combo published, docs edits) were left alone.

**Excluded as link targets:** `/404`, `/_not-found`, and the four noindex placeholders (`/case-studies`, `/resources`, `/privacy-policy`, `/terms-of-service`). Footer links to the placeholders are reported as sitewide only. No recommendation below links to a noindex or unpublished page.

## 1. Summary

| Measure | Result |
|---|---|
| Indexable pages | 18 |
| Contextual internal links on the 18 pages | 322 (201 unique page-to-page pairs). 18 of the 322 go to `/privacy-policy`, a noindex page (see Problem 4) |
| Same-page `#anchor` links in body | 79 (excluded from the counts above) |
| External links in body | 218 (mostly source citations on service, audience, and combo pages) |
| Orphans (no contextual inbound, nav/footer only) | 1: `/about` (the home page has none by nature: it is reached by the logo and breadcrumbs) |
| Under-linked (fewer than 3 contextual inbound pages) | 1: `/about` (0). Both combo pages sit at exactly 3, the floor |
| Dead ends (no outbound contextual links) | 0 indexable. The 4 placeholders have none, and are exempt |
| Broken, redirecting, trailing-slash, or absolute-host links | 0. All internal hrefs are relative with no trailing slash, and each resolves to a built page |
| Links to unpublished pages | 0. Links to noindex pages: 4 footer links (expected) and 18 body links to `/privacy-policy` |
| Docs/render mismatches | 8 (section 3, Problem 7), plus trailing-slash notation across doc 03 |
| Recommendations | 17: 4 high, 10 medium, 3 low |

## 2. Page-by-page table

Inbound contextual = number of distinct indexable pages that link to it from the body (link count in brackets). Inbound sitewide = reached from the header (H) or footer (F). Outbound contextual = total body links to other internal pages (distinct destinations in brackets), including one link to `/privacy-policy` on every page that has the shared contact CTA. Every page carries the same 11 sitewide links (5 header: logo plus Services, Industries, About, Contact; 6 footer: logo plus Case Studies, Resources, FAQ, Privacy Policy, Terms of Service).

| URL | Inbound contextual | Inbound sitewide | Outbound contextual | Outbound sitewide | Notes |
|---|---|---|---|---|---|
| `/` | 0 (17 via breadcrumb "Home") | H, F (logo) | 16 (15) | 11 | Expected for the home page. No body link to `/about`. |
| `/about` | **0** | H only | 15 (14) | 11 | **Orphan.** No link to `/industries` hub or `/` in body. |
| `/services` | 12 [16] | H | 53 (14) | 11 | 53 body links, many repeated (for example each service 5-9 times). |
| `/services/website-design` | 17 [37] | none | 11 (7) | 11 | Links to GBP, chatbots, FAQ, combo; not to receptionist, reputation, SMS, or any audience page except the combo. |
| `/services/google-business-profile-optimization` | 14 [24] | none | 12 (8) | 11 | No link to hub, audiences, or combos. |
| `/services/ai-chatbots` | 15 [28] | none | 8 (5) | 11 | Fewest distinct destinations of any service page. |
| `/services/ai-receptionist` | 15 [25] | none | 11 (8) | 11 | Links to its combo. No audience link besides the combo. |
| `/services/reputation-management` | 14 [26] | none | 10 (7) | 11 | 33 external citation links vs 7 distinct internal destinations. |
| `/services/sms-email-automation` | 15 [32] | none | 12 (7) | 11 | No link to GBP, hub, or audiences. |
| `/industries` | 7 [8] | H | 16 (14) | 11 | Links to all four audiences and all six services. |
| `/industries/healthcare` | 8 [8] | none | 32 (14) | 11 | |
| `/industries/home-services` | 10 [12] | none | 18 (16) | 11 | Links to both combos ("Home-Service Guides by Service"). |
| `/industries/professional-services` | 8 [8] | none | 21 (14) | 11 | |
| `/industries/property-management-real-estate` | 8 [8] | none | 26 (14) | 11 | |
| `/faq` | 17 [17] | H none, F yes | 25 (14) | 11 | |
| `/contact` | 17 [49] | H | 9 (9) | 11 | No link to any audience page or `/industries`. |
| `/industries/home-services/ai-receptionist` | 3 [3] | none | 14 (11) | 11 | Inbound only from the audience page, its service page, and the sibling combo. |
| `/industries/home-services/website-design` | 3 [3] | none | 13 (10) | 11 | Same pattern as the sibling combo. |

Non-indexable pages for reference: `/case-studies`, `/resources`, `/terms-of-service` have no contextual inbound or outbound links (footer only); `/privacy-policy` has 18 contextual inbound links from the shared CTA text.

## 3. Structural problems

1. **Orphan: `/about`.** Reached only from the header nav (`src/data/site.ts` `navLinks`). No page links to it in body copy, and the home page, services pages, FAQ, and contact page do not mention it. Doc 03 says About is "Linked from the header navigation", so this matches the docs but not the stated standard in doc 04 ("descriptive internal links").
2. **Service pages never link to the audience pages.** None of the six service pages links to `/industries` or to any of the four audience pages. The only audience-side links are the combo links on `/services/website-design` and `/services/ai-receptionist` (`PublishedComboLinks`, `src/app/services/website-design/page.tsx:639`, `src/app/services/ai-receptionist/page.tsx:649`). The hub-and-spoke is one-directional: audiences link down to services, services do not link back up to audiences.
3. **Uneven service-to-service links.** From the link matrix (body links only):
   - `/services/ai-chatbots` links only to website design, AI receptionist, FAQ, and contact. It does not link to GBP, text and email automation, or reputation management, although its own copy names Google Business Profile and SMS (`src/content/services/ai-chatbots.ts:241`, `:251`).
   - `/services/sms-email-automation` does not link to GBP even though a sentence names it (`src/app/services/sms-email-automation/page.tsx:568`).
   - `/services/website-design` does not link to reputation management, AI receptionist, or text and email automation, although copy names all three (`src/app/services/website-design/page.tsx:616`, `src/content/services/website-design.ts:383`).
   - `/services/reputation-management` does not link to AI chatbots or AI receptionist.
4. **Links to a noindex page from body copy.** Eighteen pages link to `/privacy-policy` from a shared contact/privacy line (for example "Ready to Connect Your Marketing? / Privacy Policy" on the home page, "Still Have a Question? / Privacy Policy" on the FAQ page, "What Not to Send / Privacy Policy" on the contact page). The target is noindex until content is approved. This is not an error (a privacy notice link is expected near a contact path), but the page currently says "Content coming soon". Open question 3.
5. **Combo pages sit at the minimum inbound count (3).** Each is reached from only its audience page, its service page, and the sibling combo. That is exactly what the `published` flag logic produces (`PublishedComboLinks` filters `publishedCombos()`; `ComboPage` `Related` adds parent and sibling links). Both flags are `true`, both pages render in the sitemap, and nothing links to any unpublished combo (there are none). Confirmed.
6. **Breadcrumbs.** For all 18 indexable pages the visible breadcrumb matches its `BreadcrumbList` JSON-LD item for item. Combo pages show Home > Industries > Home Services > page, which reflects the audience hierarchy only; the parent service is linked in the related block, not the breadcrumb (consistent with doc 02: "Sub-audience pages link to their parent audience page"). The four placeholder pages emit a `BreadcrumbList` in JSON-LD but show no visible breadcrumb (noindex pages, low impact). The home page has none, as doc 07 specifies.
7. **Docs vs rendered pages (doc 03 "Internal links" rows).** Links present in pages but not in the docs, or docs saying "add" for links that now exist:
   - `/contact` renders a link to `/faq`; the doc 03 row lists only the six services, `/services/`, and `/privacy-policy/`.
   - `/services/website-design` renders links to GBP, AI chatbots, FAQ, and the home-services combo; the row lists only `/services/`, `/privacy-policy/`, `/contact/` and says to add the others.
   - `/services/reputation-management` renders links to GBP, SMS, and FAQ; the row says to add them.
   - `/services/ai-receptionist` renders links to chatbots, SMS, FAQ, and its combo; the row says to add them.
   - `/services/google-business-profile-optimization` renders a link to reputation management and FAQ; the row says to add reputation management.
   - `/industries/home-services` renders both combos; the row says "after they are built".
   - Combo rows: `/industries/home-services/website-design` also links to `/faq` and to the sibling combo, which are not in its "Related links" row; `/industries/home-services/ai-receptionist` the same.
   - Home page row omits `/faq`, which the page links to.
   - No page links to a page that does not exist, and no doc row lists a link that is absent from the render.
8. **Trailing slash and host.** Rendered hrefs, canonicals, and `sitemap.xml` all use no trailing slash and the apex (`https://okikohigh.com`). Doc 03 writes every URL with a trailing slash (for example `/about/`, `/services/website-design/`) in the core, service, audience, and "Internal links" rows; CLAUDE.md says no trailing slash, matching the rest of the site. This is a notation mismatch in the docs, not a link bug. The host comes from `siteConfig.url` (`NEXT_PUBLIC_SITE_URL`, default apex); `docs/08` still has that item unchecked, so canonicals and sitemap URLs would follow whatever value Cloudflare supplies. Whether Cloudflare redirects `/about/` to `/about` was not verified.
9. **Anchor text.** No "click here", "read more", "learn more", or bare-URL anchors were found, and no identical anchor text points to different destinations. Observed patterns:
   - Identical card/button labels repeat for the same destination across up to 8 pages (for example "Explore Home Services" x8, "Explore Website Design" x7, "Explore Healthcare, Dental and Med Spa" x8). Consistent and descriptive, but uniform.
   - Several anchors end with an arrow character ("Website Design →") or include the card description in the link text ("Website design service the general service this page builds on."), which makes those anchors long when read by assistive tech. Low priority.
   - Mixed names for one destination are normal and varied: `/faq` is "FAQ page" (12) and "all frequently asked questions" (5); `/services` is "all services", "services overview", "explore marketing and automation services", and others.
   - No exact-match over-optimization: the highest-use exact-match anchor is "website design" (9 of 37 links to that page).
10. **Dilution and boilerplate.** `/services` has 53 contextual links (14 distinct); `/industries/healthcare` has 32. Service pages carry 13 to 33 external citation links against 5 to 8 distinct internal destinations. The combo link blocks sit late on their parent pages (home services page near the end, source line 547 of 592; AI receptionist service line 649 of 687; website design service line 639 of 676), before the FAQ. They are real body blocks, not boilerplate.
11. **Sitewide navigation.** Header: Services, Industries, About, Contact. Footer: Case Studies, Resources, FAQ, Privacy Policy, Terms of Service. The footer does not repeat the header pages, and neither carries the six service pages or four audience pages. Case Studies and Resources are linked from the footer only, as expected.

## 4. Recommended links

Only links to the 18 indexable pages. Anchors use plain hyphens. "Block" means a new reusable component or data entry; "sentence" means an edit to existing copy. Where an FAQ answer is involved, see the sync note in section 7.

| # | Priority | Source page | Insertion point | Proposed anchor | Destination | Reason |
|---|---|---|---|---|---|---|
| 1 | High | All six service pages (`src/app/services/*/page.tsx`) | New section after the last content section and before the FAQ (`<FaqSection id="faq">`), for example after "Is a Chatbot the Right Fit for Your Business?" in `ai-chatbots/page.tsx:489`. Reuse `src/components/sections/RelatedIndustries.tsx` with a service-specific `heading` and `intro` (it already links all audiences via `audiences` in `src/content/industries/hub.ts`). | Card titles already in that component, for example "Explore Home Services"; vary the section heading per service, for example "Who Uses AI Receptionists" | `/industries/home-services`, `/industries/professional-services`, `/industries/property-management-real-estate`, `/industries/healthcare` | Hub-and-spoke: service pages currently have zero links to audience pages other than the two combos. Fixes Problem 2. |
| 2 | High | `/` (`src/app/page.tsx`) | Section "How a Project Starts" (`id="how-it-starts"`, line 202), as one new sentence in its intro | "how OKIKO HIGH works and what it will not do" (confirm wording against `src/content/about.ts` before adding) | `/about` | Removes the About orphan; the page explains the agency's approach. No existing sentence quoted because the section copy was not read in full. |
| 3 | High | `/faq` (`src/app/faq/page.tsx`) and `/contact` (`src/app/contact/page.tsx`) | FAQ page: intro of the "Working With OKIKO HIGH" group (`workingGroup`, line 186). Contact page: intro under "Ways to Reach Us" (line 80), after the existing sentence "Call or email using the details below. OKIKO HIGH serves clients worldwide." | "about OKIKO HIGH and how it works" | `/about` | A visitor deciding whether to contact the agency wants to know who it is. Second and third contextual inbound for About. |
| 4 | High | `/about` (`src/app/about/page.tsx`) | Section "Who We Work With" (`id="industries"`, line 243), existing sentence: "OKIKO HIGH currently serves four kinds of business, each with its own page." | link the existing words "four kinds of business" | `/industries` | About links to the four audience cards but not their hub; hub should be reachable from the narrative. |
| 5 | Medium | `/services/website-design` | `src/app/services/website-design/page.tsx:616`, existing sentence: "Reputation management supports the trust your website relies on." | "Reputation management" | `/services/reputation-management` | Sentence names the topic; the page does not link it. Natural next step. |
| 6 | Medium | `/services/website-design` | `src/content/services/website-design.ts:383`, card body: "An AI receptionist can handle calls after a visitor taps to call." | "AI receptionist" | `/services/ai-receptionist` | Names a service with its own page. Needs link support in that card renderer (data is a plain string). |
| 7 | Medium | `/services/sms-email-automation` | `src/app/services/sms-email-automation/page.tsx:568`, existing sentence: "Follow-up works best when every inquiry source feeds it, including your website and your Google Business Profile." | "your website" -> `/services/website-design`; "your Google Business Profile" -> `/services/google-business-profile-optimization` | the two service pages | Two named topics with pages, in JSX so no component change. SMS currently has no link to GBP. |
| 8 | Medium | `/services/ai-chatbots` | `src/content/services/ai-chatbots.ts:251`: "Google's former native profile chat has been discontinued. Eligible SMS or WhatsApp contact options are a different route." and line 241 (card note "SMS or WhatsApp contact options, where eligible") | "Google Business Profile" and "SMS" -> text and email automation | `/services/google-business-profile-optimization`, `/services/sms-email-automation` | Chatbot page has only 5 distinct internal destinations. Data strings; needs link support in the renderer. |
| 9 | Medium | `/services/google-business-profile-optimization` | `src/content/services/google-business-profile.ts:202`: "You travel to customers, as a home-service business typically does." and `:220`: "Leasing offices and property managers: individual rental or for-sale properties are not eligible..." | "home-service business" -> Home Services; "Leasing offices and property managers" -> Property Management and Real Estate | `/industries/home-services`, `/industries/property-management-real-estate` | Audience mentions with real audience pages. Data strings; same renderer note as 6 and 8. |
| 10 | Medium | `/services/reputation-management` | Section "Review Workflows for Home-Service Businesses" (`src/app/services/reputation-management/page.tsx:512`), in its intro. Existing sentence in that section: "These are the three patterns we start from for home-service businesses." | "home-service businesses" | `/industries/home-services` | Section is audience-specific; the audience page exists. |
| 11 | Medium | `/services/sms-email-automation` | `src/app/services/sms-email-automation/page.tsx:224`, existing sentence: "These examples use home-service jobs, where quotes, missed calls, and service visits are common, but the same building blocks apply to other local businesses." | "home-service jobs" | `/industries/home-services` | Same reason as 10. |
| 12 | Medium | `/`, `/about`, `/contact`, `/services`, `/industries` | Overview FAQ answers: `src/content/home.ts:74` "What does OKIKO HIGH Digital Marketing Agency do?", `src/content/about.ts:95` "What services does OKIKO HIGH offer?", `src/content/contact.ts:72` "Which services can I ask OKIKO HIGH about?", `src/content/services/hub.ts:274` "What services does OKIKO HIGH cover?", `src/content/industries/hub.ts:125` "Are the services different for each industry?" | The service names already written in each answer, for example "Google Business Profile management", "AI receptionist" | the matching service pages | Each answer lists service names with no link (rendered FAQ answers contain no internal links on these pages). Requires FAQ link support (section 7). |
| 13 | Medium | Footer (`src/data/site.ts` `footerLinks`, rendered by `src/components/layout/SiteFooter.tsx`) | Add a compact set: Services, Industries, About, Contact, or a short second row with the six services | "Services", "Industries", "About", "Contact" (or each service's name) | `/services`, `/industries`, `/about`, `/contact` (optional: six service pages) | Sitewide navigation only, not contextual signal. It gives deep pages a footer path to key hubs; the header already has these four, so keep this small. |
| 14 | Medium | `/contact` | Section "Services You Can Ask About" (`src/app/contact/page.tsx:125`), as one added line | "marketing and automation for home-service, professional, property, and healthcare businesses" (split into four links) | the four audience pages | Contact has no outbound audience link. A visitor choosing what to write about benefits from the audience pages. |
| 15 | Low | `/services/ai-receptionist` | `src/app/services/ai-receptionist/page.tsx:260`, existing sentence: "of home-services calls were answered by a person in Invoca's 2026 benchmark..." | "home-services calls" | `/industries/home-services/ai-receptionist` | The combo page owns the home-services call rules and this data point. Low because the combo is already linked from this page's "AI Receptionist by Industry" block. |
| 16 | Low | `/industries/home-services/website-design` and `/industries/home-services/ai-receptionist` | `src/content/combos/home-services/*.ts` `related.links` | "AI chatbots for home-service websites" -> chatbots (website combo only); "all services" -> services hub (both) | `/services/ai-chatbots`, `/services` | The receptionist combo links chatbots; the website combo does not. Neither combo links the services hub in body copy. Add only if each link helps the reader. |
| 17 | Low | Hub cards on `/`, `/about`, `/faq`, `/services`, `/industries` | Shared card button labels in `src/content/services/hub.ts` and `src/content/industries/hub.ts` (for example "Explore Website Design" used on up to 7 pages) | Keep on hubs; on non-hub pages vary, for example "see how website design supports the call path" | existing destinations | Reduces uniform anchors without losing clarity. |

Recommendation counts: 4 high, 10 medium, 3 low (17 total).

## 5. Hub and cluster map

Intended hierarchy (docs 02 and 03): Home -> Services hub -> six services; Home -> Industries hub -> four audiences -> combos; combos also under their parent service. Present = rendered body link; breadcrumb up-links noted separately.

**Services cluster**
- Hub `/services` -> all six service pages: present. Each service -> hub: breadcrumb on all six; body link on website design, AI receptionist, and reputation management only.
- Service to service: website design (GBP, chatbots), GBP (chatbots, receptionist, SMS, reputation, website design), chatbots (website design, receptionist), receptionist (website design, chatbots, SMS), reputation (website design, GBP, SMS), SMS (chatbots, receptionist, reputation, website design). **Missing:** chatbots -> GBP, SMS, reputation; SMS -> GBP; website design -> reputation, receptionist, SMS; reputation -> chatbots, receptionist.
- Service -> audiences: **missing on all six** (only combo links on website design and receptionist).

**Industries cluster**
- Hub `/industries` -> four audiences, six services: present. Audience -> hub: breadcrumb on all four; body link on all four (for example "see all industries").
- Audience -> services: all six services from each audience page; present.
- Audience -> audience: present through the shared "Explore Other Industries" strip.
- Audience -> combos: only `/industries/home-services` (the only audience with combos), both present. No other audience has a combo.
- Audience -> About, Home: not linked (Home via breadcrumb only).

**Combo cluster (`/industries/home-services/...`)**
- Parents: each combo links its audience page and its service page, and the two siblings link each other. Parent pages link down to both combos. All present.
- Missing (optional): combos -> services hub (body); website design combo -> chatbots.
- Nothing links to an unpublished page.

**Core pages**
- Home -> hubs, six services, four audiences, FAQ, contact: present. **Missing:** Home -> About.
- About -> six services, four audiences, FAQ, contact: present. **Missing:** About -> `/industries` hub, Home.
- FAQ -> six services, `/industries` hub and four audiences, contact: present.
- Contact -> six services, services hub, FAQ: present. **Missing:** Contact -> audiences, About.

## 6. Possible new pages and open questions

**Possible new pages.** None recommended from this audit. The structural gaps are all fixable with links between existing pages. The docs list further combo pages and sub-audience pages as `TBD` or "not approved page commitments", and doc 02 says to build them only with distinct, substantive value and a confirmed service and audience. No city, state, country, or regional pages are suggested.

**Open questions**
1. Should About get a contextual link from Home, FAQ, and Contact (recommendations 2 and 3), or is a header-only link intended?
2. Should the footer repeat the header pages (recommendation 13), or should it stay a short legal/utility list?
3. Should the 18 body links to `/privacy-policy` stay while that page is noindex with "Content coming soon"? The footer link is expected; the body links were not covered by the instruction to treat footer links as normal.
4. Does Cloudflare Pages redirect `/about/` to `/about`? Doc 03 uses trailing slashes throughout; the site does not. Should doc 03's notation be changed to no trailing slash?
5. `NEXT_PUBLIC_SITE_URL` in the Cloudflare production environment is still unchecked in `docs/08`. Canonicals, sitemap, and JSON-LD IDs all depend on it; relative internal hrefs do not.
6. For recommendation 12, is the owner comfortable with links inside FAQ answers? The visible answer text must remain identical to the FAQPage JSON-LD text.

## 7. Implementation notes

**Can be added through shared components or registries**
- Rec 1: reuse `RelatedIndustries.tsx` (already driven by `audiences` in `src/content/industries/hub.ts`); one block per service page, six one-line page edits.
- Rec 13: `footerLinks` in `src/data/site.ts` feeds `SiteFooter.tsx` for every page.
- Rec 12 (FAQ answers): `Faq.answer` in `src/content/shared.ts` is a plain string used by both `FaqSection` and the `faqPageNode` JSON-LD. Supporting links needs an extra field or markup parsing in `FaqSection`, with the JSON-LD still reading the plain-text version so the two stay in sync. This is a component change plus content edits.
- Recs 6, 8, 9: card and note text lives in `src/content/services/*.ts` as plain strings; links need renderer support (for example a `href` field) or a move of those lines into JSX.
- Combo related links (rec 16) are data in `src/content/combos/home-services/*.ts` (`related.links`); `PublishedComboLinks` and `ComboPage` `Related` already respect the `published` flag.
- `FaqIntro` `related` arrays on each service and audience page (for example `ai-chatbots/page.tsx:533`) are a cheap place to add "Related pages" links without touching FAQ text or JSON-LD.

**Need page-level copy edits (JSX)**
- Recs 2, 3, 4, 5, 7, 10, 11, 14, 15: edit the named section or sentence in the page file.

**Keep in sync**
- If any FAQ answer text changes (rec 12 or otherwise), update the visible FAQ and the FAQPage JSON-LD together; both read the same objects.
- If a link changes copy on a page whose target keyword or title is documented in doc 03, check that no anchor repeats the exact-match keyword on every link to that page.
- After edits, run `npm run build` and `npm run check:combos`, and re-extract links from `out/` to confirm counts.

## 8. Resolved (2026-11-02)

The four high-priority recommendations (1 to 4) are applied. Medium and low items are untouched. Nothing was committed, pushed, or deployed, and no dependencies were added. FAQ answer text, JSON-LD, robots tags, and the sitemap are unchanged.

| Rec | Link applied | Source file | Anchor | Destination |
|---|---|---|---|---|
| 1 | New `RelatedIndustries` block before the FAQ on all six service pages | `src/app/services/{website-design,google-business-profile-optimization,ai-chatbots,ai-receptionist,reputation-management,sms-email-automation}/page.tsx` | "See all industries" plus the four card buttons ("Explore Home Services", "Explore Professional Services", "Explore Property Management and Real Estate", "Explore Healthcare, Dental and Med Spa") | `/industries` and the four audience pages |
| 2 | Home to About | `src/app/page.tsx`, "How a Project Starts" closing paragraph | "OKIKO HIGH's approach and mission" | `/about` |
| 3 | Contact to About | `src/app/contact/page.tsx`, "Ways to Reach Us" intro | "about OKIKO HIGH and how it works" | `/about` |
| 3 | FAQ to About | `src/content/faq.ts`, `more` list of the "Working With OKIKO HIGH" group (rendered by `GroupIntro` in `src/app/faq/page.tsx` as "Full detail: ...") | "About OKIKO HIGH" | `/about` |
| 4 | About to Industries | `src/app/about/page.tsx`, "Who We Work With" intro | "four kinds of business" | `/industries` |

**New counts (distinct indexable pages linking in by body copy / total outbound body links, distinct destinations in brackets)**

| Page | Inbound contextual (before -> after) | Outbound contextual (before -> after) |
|---|---|---|
| `/` | 0 -> 0 | 16 (15) -> 17 (16) |
| `/about` | **0 -> 3** (from `/`, `/contact`, `/faq`) | 15 (14) -> 16 (15) |
| `/contact` | 17 -> 17 | 9 (9) -> 10 (10) |
| `/faq` | 17 -> 17 | 25 (14) -> 26 (15) |
| `/industries` | 7 -> 14 | 16 (14) -> 16 (14) |
| `/industries/home-services` | 10 -> 16 | 18 (16) -> 18 (16) |
| `/industries/professional-services` | 8 -> 14 | 21 (14) -> 21 (14) |
| `/industries/property-management-real-estate` | 8 -> 14 | 26 (14) -> 26 (14) |
| `/industries/healthcare` | 8 -> 14 | 32 (14) -> 32 (14) |
| `/services/website-design` | 17 -> 17 | 11 (7) -> 16 (12) |
| `/services/google-business-profile-optimization` | 14 -> 14 | 12 (8) -> 17 (13) |
| `/services/ai-chatbots` | 15 -> 15 | 8 (5) -> 13 (10) |
| `/services/ai-receptionist` | 15 -> 15 | 11 (8) -> 16 (13) |
| `/services/reputation-management` | 14 -> 14 | 10 (7) -> 15 (12) |
| `/services/sms-email-automation` | 15 -> 15 | 12 (7) -> 17 (12) |

All other pages are unchanged. No page lost a link (compared against the pre-change `out/`). Orphans: 0. Under-linked (fewer than 3 inbound): 0. The combo pages stay at 3 inbound.

**Verification (fresh `npm run build`, `npm run check:combos`, `npm run lint`: all pass)**

- Every new link renders with the intended href and anchor, uses no trailing slash, and points to an indexable page. No new link points to a noindex or unpublished page.
- `application/ld+json` is byte-identical before and after on all 24 built pages; robots meta tags and H1 counts are identical; `sitemap.xml` still lists the same 18 URLs.
- The new "related industries" section appears once per service page (`id="related-industries"` is unique on each).

**Still open:** recommendations 5 to 17 (medium and low), including links inside FAQ answers, which need a component change so the visible answer and the FAQPage JSON-LD stay identical. Doc 03 still writes core, service, and audience URLs with trailing slashes while the site uses none; the Internal links rows edited for this step keep that style.

## 9. Resolved (medium priority) (2026-11-02)

Recommendations 5 to 11, 13, and 14 are applied. Recommendation 12 is deferred (below). Low-priority items (15 to 17) are untouched. FAQ answer text, JSON-LD, robots tags, H1 counts, and the 18-URL sitemap are unchanged (JSON-LD is byte-identical on all 24 built pages against the pre-change build). Nothing was pushed.

| Rec | Link applied | Source file | Anchor | Destination |
|---|---|---|---|---|
| 5 | Website design to reputation management | `src/app/services/website-design/page.tsx` | "Reputation management" (existing sentence) | `/services/reputation-management` |
| 6 | Website design to AI receptionist | `src/content/services/website-design.ts` (`links` on the Reception stage), rendered by the new `LinkedText` | "AI receptionist" (existing words) | `/services/ai-receptionist` |
| 7 | SMS to website design and GBP | `src/app/services/sms-email-automation/page.tsx` | "your website", "your Google Business Profile" (existing words) | `/services/website-design`, `/services/google-business-profile-optimization` |
| 8 | Chatbots to SMS and GBP | `src/content/services/ai-chatbots.ts` (`link` on two connection cards), rendered in `src/app/services/ai-chatbots/page.tsx` | "Text and email automation", "Google Business Profile management" (new link labels) | `/services/sms-email-automation`, `/services/google-business-profile-optimization` |
| 9 | GBP to two audience pages | `src/content/services/google-business-profile.ts` (`links`, `specialCaseLinks`), rendered by `LinkedText` | "home-service business", "Leasing offices and property managers" (existing words) | `/industries/home-services`, `/industries/property-management-real-estate` |
| 10 | Reputation to Home Services | `src/app/services/reputation-management/page.tsx` | "home-service businesses" (existing words) | `/industries/home-services` |
| 11 | SMS to Home Services | `src/app/services/sms-email-automation/page.tsx` | "home-service jobs" (existing words) | `/industries/home-services` |
| 13 | Footer navigation | `src/data/site.ts` `footerLinks` (rendered by `SiteFooter.tsx`) | "Services", "Industries", "About", "Contact" | `/services`, `/industries`, `/about`, `/contact` |
| 14 | Contact to the four audience pages | `src/app/contact/page.tsx`, "Services You Can Ask About" intro, built from `audiences` in `src/content/industries/hub.ts` | the audience titles ("Home Services", "Professional Services", "Property Management and Real Estate", "Healthcare, Dental & Med Spa") | the four audience pages |

A small shared helper, `src/components/ui/LinkedText.tsx`, turns the first occurrence of a phrase in a plain string into a link and leaves the visible text unchanged. It is used for recommendations 6 and 9.

**Deviation from the report:** for recommendation 8 the report named the sentence "Eligible SMS or WhatsApp contact options are a different route" and the card note. Neither contains the words "Google Business Profile", and a bare "SMS" anchor is weak, so the two connection cards on the chatbot page each got a link line that follows the existing pattern on the website design page's journey cards.

**Deferred**

- **Recommendation 12** (links inside the overview FAQ answers on home, About, Contact, Services hub, and Industries hub): `Faq.answer` is one plain string shared by the visible FAQ and the FAQPage JSON-LD. Linking inside it needs a component change so the visible markup and the JSON-LD text stay identical. A separate step.

**New counts (distinct indexable pages linking in by body copy; total body links out, distinct destinations in brackets). Unlisted pages are unchanged.**

| Page | Inbound contextual (before -> after) | Outbound contextual (before -> after) |
|---|---|---|
| `/services/website-design` | 17 -> 17 | 16 (12) -> 18 (14) |
| `/services/google-business-profile-optimization` | 14 -> 16 | 17 (13) -> 19 (13) |
| `/services/ai-chatbots` | 15 -> 15 | 13 (10) -> 15 (12) |
| `/services/ai-receptionist` | 15 -> 16 | 16 (13) -> 16 (13) |
| `/services/reputation-management` | 14 -> 15 | 15 (12) -> 16 (12) |
| `/services/sms-email-automation` | 15 -> 16 | 17 (12) -> 20 (13) |
| `/contact` | 17 -> 17 | 10 (10) -> 14 (14) |
| `/industries/home-services` | 16 -> 17 | 18 (16) -> 18 (16) |
| `/industries/professional-services` | 14 -> 15 | 21 (14) -> 21 (14) |
| `/industries/property-management-real-estate` | 14 -> 15 | 26 (14) -> 26 (14) |
| `/industries/healthcare` | 14 -> 15 | 32 (14) -> 32 (14) |

Sitewide: every page now has 15 header and footer links (the footer gained Services, Industries, About, and Contact). No page lost a link, no new link has a trailing slash, and no new link points to a noindex page.

**New copy added:** one sentence on the contact page ("Industry pages show how the services apply:" followed by the audience links) and two link labels on the chatbot page ("Text and email automation", "Google Business Profile management"). Everything else links existing words.
