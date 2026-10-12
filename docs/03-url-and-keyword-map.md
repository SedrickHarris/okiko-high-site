# 03 — URL and Keyword Map

**File:** `docs/03-url-and-keyword-map.md`

## Purpose

Assign each planned page a clear URL, target keyword, and search purpose. Use the map to prevent overlapping pages and keep the site architecture organized as the project grows.

## URL conventions

- Use lowercase, hyphen-separated words.
- Keep slugs concise, descriptive, and stable.
- Organize pages under `/services/`, `/industries/`, and `/resources/`.
- Use one primary URL for each page and set the canonical URL consistently.
- Redirect URLs if they need to change after publication.
- Do not create city, state, country, or regional landing pages by default. The agency serves clients worldwide and is not targeting Las Vegas, Nevada.
- Do not create a URL simply to target a keyword if the page cannot offer distinct, useful content.

## Proposed core page URLs

| Page | Proposed URL | Target keyword |
|---|---|---|
| Home | `/` | TBD |
| About | `/about/` | TBD |
| Services hub | `/services/` | digital marketing services for local businesses (page built; see keyword map entry below) |
| Industries hub | `/industries/` | TBD (page built: cards for the three audience pages with currently served or planned labels, no FAQ) |
| Case Studies | `/case-studies/` | TBD |
| Resources | `/resources/` | TBD |
| Contact | `/contact/` | TBD |
| Privacy Policy | `/privacy-policy/` | Not a search-target page |
| Terms of Service | `/terms-of-service/` | Not a search-target page |

Choose target keywords after confirming page focus and reviewing search intent. Do not force a keyword onto a page where it doesn’t fit.

## Proposed service URLs

These pages are candidates until the owner confirms current service availability.

| Service | Proposed URL | Target keyword |
|---|---|---|
| Website Design and Development | `/services/website-design/` | website design for local businesses |
| AI Chatbots | `/services/ai-chatbots/` | AI chatbot for small business website (page built; owner approved indexing 2026-10-11, indexable and in sitemap) |
| AI Receptionist (inbound calls) | `/services/ai-receptionist/` | AI receptionist for small business (page built; owner approved indexing 2026-10-11, indexable and in sitemap) |
| AI Voice Agents (broader than inbound reception) | `/services/ai-voice-agents/` | TBD (only if it has a distinct scope and search intent; otherwise fold into the AI Receptionist page) |
| Reputation Management | `/services/reputation-management/` | review management services (page built; owner approved indexing 2026-10-11, indexable and in sitemap) |
| Google Business Profile Optimization and Management | `/services/google-business-profile-optimization/` | Google Business Profile management (page built; owner approved publishing, indexable and in sitemap) |
| Google Business Profile Automation | `/services/google-business-profile-automation/` | TBD (automation is covered on the optimization and management page; a separate page is only warranted if it has a distinct scope and search intent) |
| SMS and Email Automation | `/services/sms-email-automation/` | text and email automation for customer follow-up (page built; owner approved indexing 2026-10-11, indexable and in sitemap) |
| Lead Follow-Up Automation | `/services/lead-follow-up-automation/` | TBD |

Confirm whether GBP optimization and GBP automation are distinct offers with distinct search intent. If not, consider covering them on one service page to avoid overlap.

### Keyword map entries

#### Services Hub

| Field | Entry |
|---|---|
| Page name | Services hub |
| URL | `/services/` |
| Page type | Core (hub) |
| Target keyword | digital marketing services for local businesses |
| Search intent | Commercial investigation: a local or service-based business owner comparing what OKIKO HIGH offers and deciding which service to look at first |
| Supporting keyword clusters | marketing automation for local businesses; local business marketing services; website design and Google Business Profile services; AI chatbot and AI receptionist services; text and email follow-up automation; review management services. Question clusters: which service to start with; whether the services work together; whether prices are published; whether rankings or leads are guaranteed |
| Parent page | `/` |
| Internal links | Links out to all six service pages (`/services/website-design/`, `/services/google-business-profile-optimization/`, `/services/reputation-management/`, `/services/ai-chatbots/`, `/services/ai-receptionist/`, `/services/sms-email-automation/`), `/contact/`, `/privacy-policy/`. Each service page already links back to `/services/`. |
| Status | Built (indexable, already in sitemap) |
| Notes | Keyword is an intent-based recommendation, not a validated search-volume finding; confirm before treating it as final. Card copy and FAQ answers restate the service pages and `docs/01`; no prices, timelines, results, or partnerships are stated. The cards show all six services, and all six pages are now indexable and in the sitemap (owner approved indexing 2026-10-11), although `docs/01` still lists availability for four of them as TBD. Per `docs/07`, the page's `ItemList` structured data names the published services (`published` flag in `src/content/services/hub.ts`, now true for all six). The FAQ "What kinds of businesses are these services for?" relies on Home Services being listed as currently served in `docs/01`. Sections: hero, six service cards, situation-to-service guide, example service combinations (not packages), links to the fictional samples already on five service pages plus the Google Business Profile review checklist (not client proof; the GBP proof section is still placeholders), a short "what to expect" section limited to what the service pages already state, FAQs, and a closing CTA. Deliberately left out until the owner confirms the facts: commercial model (one-time vs recurring, ongoing support), ownership and cancellation terms, software and usage charges, client proof or case studies, and a strategy-call form. |

#### Website Design and Development

| Field | Entry |
|---|---|
| Page name | Website Design and Development |
| URL | `/services/website-design/` (the earlier proposed slug `/services/website-design-development/` was replaced by the page brief) |
| Page type | Service |
| Target keyword | website design for local businesses |
| Search intent | Commercial investigation: a local or service-based business owner looking for a suitable website provider |
| Supporting keyword clusters | small business website design; local business web design services; service business website design; custom small business websites; conversion-focused web design; website redesign services; SEO-friendly website design; small business website cost |
| Parent page | `/services/` |
| Internal links | Links out to `/services/`, `/privacy-policy/`, `/contact/`. Add links to GBP optimization, reputation management, AI chatbot, AI receptionist, SMS and email automation, and audience pages when those pages are published and substantive. |
| Status | Built |
| Notes | Keywords are intent-based recommendations, not validated search-volume findings. Agency pricing, delivery range, ownership terms, platform stack, review offer, and proof are unconfirmed, so the page makes no claims about them. `docs/01` still lists website design availability as TBD. |

#### Reputation Management

| Field | Entry |
|---|---|
| Page name | Reputation Management (review management) |
| URL | `/services/reputation-management/` |
| Page type | Service |
| Target keyword | review management services |
| Search intent | Commercial investigation: a local or service-based business owner deciding how to request reviews, keep track of them, and reply, and whether to do it themselves or use a managed service |
| Supporting keyword clusters | online review management; reputation management for small business; Google review management services; review generation services; automated review requests; Google review monitoring; review response service; SMS review requests; customer review management; reputation management for contractors. Question clusters: how to get more Google reviews; whether review gating is allowed; whether a discount for a review is allowed; whether a bad Google review can be removed; how many reviews a business needs; what to say to an angry reviewer; whether Google reviews help local rankings; SMS versus email review requests; review management cost |
| Parent page | `/services/` |
| Internal links | Links out to `/services/`, `/services/website-design/`, `/privacy-policy/`, `/contact/`. Add links to GBP optimization, SMS and email automation, AI chatbot, and AI voice agent pages when those pages are published and substantive. Add a link from the website design page once this page is published. |
| Status | Built (owner approved indexing 2026-10-11; indexable, in sitemap) |
| Notes | Keywords are intent-based recommendations, not validated search-volume findings. `docs/01` still lists reputation management availability as TBD, so the page emits no `Service` schema. Indexing was approved by the owner on 2026-10-11 (`robots` removed, route added to `src/app/sitemap.ts`); still confirm availability and scope, approve the "what we will not do" list, and confirm the contact path. Agency pricing, response-time targets, supported platforms, results, testimonials, ratings, and vendor partnership are unconfirmed, so the page makes no claims about them. Primary keyword is distinct from the Google Business Profile pages: this page covers reviews, not listing setup. No `Review` or `AggregateRating` markup. |

#### Google Business Profile Optimization and Management

| Field | Entry |
|---|---|
| Page name | Google Business Profile Optimization and Management |
| URL | `/services/google-business-profile-optimization/` |
| Page type | Service |
| Target keyword | Google Business Profile management |
| Search intent | Commercial investigation: a local or service-based business owner deciding whether to manage the profile in-house or hire help, and diagnosing why the business is missing from the map pack |
| Supporting keyword clusters | Google Business Profile optimization; Google Business Profile management services; Google Business Profile automation; GBP post scheduling; Google map pack ranking; Google Business Profile suspension and verification; service-area business address; Google Business Profile reporting. Question clusters: why a business is not in the map pack; whether the profile is free; whether to manage it yourself; whether automated posts are safe; whether posting frequency affects rankings; what to do after a suspension; whether a service-area business shows its address; how to tell whether the profile generates leads; whether a negative review can be removed |
| Parent page | `/services/` |
| Internal links | Links out to `/services/`, `/services/website-design/`, `/services/ai-chatbots/`, `/services/ai-receptionist/`, `/services/sms-email-automation/`, `/contact/`, `/privacy-policy/`. Add a link to reputation management and from the other service pages (they currently mention the profile without linking) once this page is published. |
| Status | Published-ready (owner approved availability and scope; indexable, in sitemap, `Service` schema included) |
| Notes | Keywords are intent-based recommendations, not validated search-volume findings. Scope, pricing, client-ownership and exit policy, suspension and verification assistance, proof assets, and the form destination are unconfirmed, so the page makes no claims about them and shows `[OWNER TO CONFIRM]`, `[PRICING PENDING]`, and `[PROOF PENDING]` placeholders. The HighLevel documentation link describes what that platform documents, not a tested OKIKO HIGH configuration; no HighLevel logos or partnership language. The page publishes no ranking, lead, or review-removal guarantees and no performance figures. No `LocalBusiness` markup, Plano address, or hours. Distinct from reputation management (reviews) and SMS and email automation (follow-up). |

#### AI Receptionist

| Field | Entry |
|---|---|
| Page name | AI Receptionist for Inbound Calls |
| URL | `/services/ai-receptionist/` (replaces the earlier combined `/services/ai-voice-agents/` slug for the receptionist offer, per the page brief) |
| Page type | Service |
| Target keyword | AI receptionist for small business |
| Search intent | Commercial investigation: a small-business owner or operations manager, mainly in home services, weighing a way to handle routine, missed, overflow, or after-hours calls |
| Supporting keyword clusters | AI answering service; AI phone receptionist; inbound AI voice agent; after-hours answering service; AI call answering service; AI receptionist with human transfer; automated appointment booking by phone |
| Parent page | `/services/` |
| Internal links | Links out to `/services/`, `/services/website-design/`, `/contact/`, `/privacy-policy/`. Add links to AI chatbots, SMS and email automation, Google Business Profile, reputation management, the Home Services audience page, and any HVAC or plumbing page when those are published and substantive. |
| Status | Built (owner approved indexing 2026-10-11; indexable, in sitemap) |
| Notes | Keywords are intent-based recommendations, not validated search-volume findings. `docs/01` still lists availability as TBD, so the page emits no `Service` schema. Indexing was approved by the owner on 2026-10-11 (`robots` removed, route added to `src/app/sitemap.ts`); still confirm availability and scope, then add the `Service` node. Delivery scope, pricing, supported systems, human-backup arrangement, escalation flow, recording settings, and proof are unconfirmed, so the page makes no claims about them. The page shows an illustrative script, not a recording, and publishes no performance figures. Do not build HVAC, plumbing, cleaning, or landscaping variants unless each shows materially different intake, scheduling, urgency, and escalation workflows. |

## Proposed audience URLs

These pages reflect the identified audience groups. Their launch status should match the agency’s current service experience.

| Audience | Proposed URL | Target keyword |
|---|---|---|
| Home Services | `/industries/home-services/` | home services marketing agency (page built; owner approved indexing 2026-10-11, indexable and in sitemap) |
| Professional Services | `/industries/professional-services/` | professional services marketing agency (page built; owner approved indexing 2026-10-11, indexable and in sitemap) |
| Property Management and Real Estate | `/industries/property-management-real-estate/` | real estate and property management marketing agency (page built; owner approved indexing 2026-10-11, indexable and in sitemap) |
| Education | `/industries/education/` | TBD |
| Healthcare and Wellness | `/industries/healthcare-wellness/` | TBD |

Home Services is currently served. The other audience groups are future opportunities; do not frame them as current clients or expertise unless confirmed.

### Audience keyword map entries

#### Home Services

| Field | Entry |
|---|---|
| Page name | Home Services audience page |
| URL | `/industries/home-services/` |
| Page type | Audience |
| Target keyword | home services marketing agency |
| Search intent | Commercial investigation: an owner-operator or operations manager at a home-service business (about 2-15 employees) comparing marketing providers and deciding where better follow-through would help, without replacing existing job-management software |
| Supporting keyword clusters | home services digital marketing; marketing automation for home services; contractor website design; AI receptionist for home services; contractor reputation management; Google Business Profile management for contractors; estimate follow up automation. Question clusters: whether all six services are needed; whether existing field-service software is replaced; whether it connects to ServiceTitan, Jobber, Housecall Pro, or FieldEdge; whether an AI receptionist can book jobs; what happens to emergency calls; whether automated follow-up annoys customers; whether rankings or reviews are guaranteed; cost and exit terms |
| Parent page | `/industries/` |
| Internal links | Links out to `/services/website-design/`, `/services/google-business-profile-optimization/`, `/services/reputation-management/`, `/services/sms-email-automation/`, `/services/ai-receptionist/`, `/services/ai-chatbots/`, `/contact/`, `/privacy-policy/`, `/industries/` (breadcrumb). Add links to the Home Services + AI Receptionist, + Follow-Up, and + Website combo pages only after they are built and substantive. Link plumbing/HVAC, roofing, or recurring-service audience pages only after separate research and approved scope. |
| Status | Built (owner approved indexing 2026-10-11; indexable, in sitemap) |
| Notes | Keywords are intent-based recommendations, not validated search-volume findings. Home Services is a currently served audience per `docs/01`, but all six services the page describes are TBD or only partly confirmed, so the page presents a proposed approach, not a package, and states no availability, pricing, ownership or exit terms, tested integrations, results, or trade experience. Indexing approved by the owner on 2026-10-11: `robots` removed from the page metadata and `/industries/home-services` added to `src/app/sitemap.ts`. Schema is `Organization`, `WebPage`, `BreadcrumbList`, and `FAQPage` matching the visible FAQ; no `Service` node, prices, ratings, or `LocalBusiness`. Left out until the facts exist: the sample inquiry-to-booking demonstration and its secondary CTA, any client proof, and the brief's inquiry form (contact path and consent wording are TBD, so the CTAs point to `/contact/`). The Jobber figures (40%, 37%, 43%, 65%, 34%, 20%) are owner-reported survey findings, cited to the source and not presented as OKIKO HIGH results. The combo page `/industries/home-services/marketing-automation/` is a separate brief; it currently shares this page's H1 and much of its outline, so differentiate it before building to avoid cannibalization. |

#### Professional Services

| Field | Entry |
|---|---|
| Page name | Professional Services audience page (audience plus six-service stack) |
| URL | `/industries/professional-services/` (the brief proposed `/professional-services-marketing-automation/`; the architecture in `docs/02` and the URL conventions here place audience pages under `/industries/`, so the brief's slug was not used) |
| Page type | Audience |
| Target keyword | professional services marketing agency |
| Search intent | Commercial investigation: an owner, managing partner, or operations lead at a 1-25 person professional firm (law, accounting and bookkeeping, HR and consulting, financial advice, insurance, architecture, engineering) weighing a more credible website and more dependable intake and follow-up |
| Supporting keyword clusters | professional services digital marketing; professional services website design; marketing automation for professional services; client intake automation; law firm intake automation; accounting firm website design; consulting firm marketing agency; financial advisor marketing automation. Question clusters: whether referral-based firms need a good website; whether existing practice-management software is replaced; whether it connects to Clio, Lawmatics, or HubSpot; whether an AI receptionist can give professional advice; what happens when AI cannot answer; how confidential information is handled; whether review requests and Google Business Profile updates can be automated; cost |
| Parent page | `/industries/` |
| Internal links | Links out to `/services/` (hub), `/services/website-design/`, `/services/sms-email-automation/`, `/services/reputation-management/`, `/services/google-business-profile-optimization/`, `/services/ai-chatbots/`, `/services/ai-receptionist/`, `/contact/`, `/privacy-policy/`, `/industries/` (breadcrumb). Add links to law, accounting and bookkeeping, HR and consulting, financial-advisor, insurance, and architecture/engineering combo pages only after they are built and substantive. The shared "Explore Other Industries" strip links to the Property Management and Real Estate page and Home Services; do not add real estate or property management copy to this page. |
| Status | Built (owner approved indexing 2026-10-11; indexable, in sitemap) |
| Notes | Keywords are intent-based recommendations, not validated search-volume findings; the sector-specific terms are used only where the content supports them. `docs/01` lists Professional Services as a **future opportunity**, and all six services are TBD or only partly confirmed, so the page presents a proposed approach, not a package, and states no availability, pricing, tested integrations, results, or professional-services experience. The five scenarios are labeled illustrative, not client stories. Published on owner approval (2026-10-11): `robots` removed from the page metadata and `/industries/professional-services` added to `src/app/sitemap.ts`. All six service pages it links to are now indexable (owner approved 2026-10-11), and the industries hub (`/industries/`) now links to this page. Schema is `Organization`, `WebPage`, `BreadcrumbList`, and `FAQPage` matching the visible FAQ; no `Service` node, prices, ratings, or `LocalBusiness`. FAQ markup is not expected to produce a rich result. Sections: hero with journey strip, four problem cards with a labeled US legal-industry statistic (Clio, 2024), six service cards each linking to its service page, five expandable scenarios, existing-software checks, can-handle versus must-escalate boundaries, sample metric definitions (no results), four-step process with exclusions, two-column FAQ, and a closing CTA with the sensitive-information warning. Left out until the facts exist: the sample inquiry-to-consultation workflow and its secondary CTA, any client proof, and the brief's inquiry form (contact path and consent wording are TBD, so CTAs point to `/contact/`). Legal and advisor copy needs state-specific and registration-specific review before publication. |

#### Property Management and Real Estate

| Field | Entry |
|---|---|
| Page name | Property Management and Real Estate audience page (audience plus six-service stack) |
| URL | `/industries/property-management-real-estate/` (the research pack suggested a distinct audience hub alongside Professional Services; the combined audience plus service brief proposes `/industries/property-management-marketing-automation/`, which is a separate page) |
| Page type | Audience |
| Target keyword | real estate and property management marketing agency |
| Search intent | Commercial investigation: an owner or operator of a property management company, a landlord, a short or midterm rental operator, or a real estate agent or brokerage weighing a clearer website and more dependable inquiry routing and follow-up |
| Supporting keyword clusters | property management marketing; real estate marketing automation; property management website design; rental operator marketing; real estate lead follow-up. Question clusters: whether existing software already covers the gap; whether AI can answer after-hours calls; whether each rental can have a Google Business Profile; whether tenants and owners can both be asked for reviews; whether automated texting is allowed |
| Parent page | `/industries/` |
| Internal links | Links out to `/services/` (hub), `/services/website-design/`, `/services/sms-email-automation/`, `/services/reputation-management/`, `/services/google-business-profile-optimization/`, `/services/ai-chatbots/`, `/services/ai-receptionist/`, `/contact/`, `/privacy-policy/`, `/industries/` (breadcrumb). Also links to `/industries/home-services/` and `/industries/professional-services/` through the shared "Explore Other Industries" strip. Linked from `/industries/` (hub cards), `/services/` ("See How the Services Fit Your Industry" strip), and the other two audience pages. Add links to the combined property management marketing and automation page, and to rental-operator and brokerage pages, only after they are built and substantive. |
| Status | Built (owner approved indexing 2026-10-11; indexable, in sitemap) |
| Notes | Keywords are intent-based recommendations, not validated search-volume findings. `docs/01` lists Professional Services, which includes real estate, as a **future opportunity**, and all six services are TBD or only partly confirmed, so the page presents a proposed approach, not a package, and states no availability, pricing, tested integrations, results, or property or real estate experience. Overlap to resolve: `docs/02` and the Professional Services entry treat real estate as part of Professional Services, so decide whether this page stays a standalone audience or becomes the `/industries/professional-services/real-estate/` sub-audience (it is now indexable as a standalone page). Differentiate it from the combined property management marketing and automation page, whose primary keyword is "property management marketing services". Software names (AppFolio, Buildium, Yardi, Guesty, Hostaway, Follow Up Boss, kvCORE/BoldTrail) appear as "to assess", never as supported integrations, and there is no GoHighLevel mention or branding. The five scenarios are labeled illustrative, not client stories, and the research pack's cost-of-inaction estimates are left out. Schema is `Organization`, `WebPage`, `BreadcrumbList`, and `FAQPage` matching the visible FAQ; no `Service` node, prices, ratings, or `LocalBusiness`. Sections: hero with inquiry-routing illustration, four problem cards, six service cards each linking to its service page, five inquiry-path cards, five expandable scenarios, existing-software checks, can-assist versus requires-a-person boundaries, sample metric definitions (no results), six-step process with exclusions, two-column FAQ of ten questions, and a closing CTA with the sensitive-information warning. Left out until the facts exist: any demonstration and its secondary CTA, client proof, and the brief's inquiry form (contact path and consent wording are TBD, so CTAs point to `/contact/`). Indexing approved by the owner on 2026-10-11: `robots` removed from the page metadata and `/industries/property-management-real-estate` added to `src/app/sitemap.ts`. Fair Housing, texting, recording, and notice rules still need jurisdiction-specific review. |

## Optional sub-audience URLs

Examples only. Add to the map when the owner prioritizes the sub-audience and the page can provide distinct content.

| Parent | Example URL | Target keyword |
|---|---|---|
| Home Services | `/industries/home-services/hvac/` | TBD |
| Home Services | `/industries/home-services/plumbing/` | TBD |
| Professional Services | `/industries/professional-services/law-firms/` | TBD |
| Professional Services | `/industries/professional-services/real-estate/` | TBD |

If a sub-audience page would repeat the parent page, keep that topic as a section on the parent instead.

## Keyword map fields

For every search-target page, record:

| Field | What to enter |
|---|---|
| Page name | Clear internal label |
| URL | Proposed or final canonical path |
| Page type | Core, service, audience, sub-audience, case study, or resource |
| Target keyword | One primary query or phrase that best represents page intent |
| Search intent | The visitor’s likely goal |
| Supporting keyword clusters | Related questions, entities, and phrases to cover naturally |
| Parent page | Parent route, if applicable |
| Internal links | Relevant pages this page should link to and receive links from |
| Status | Proposed, ready, built, or published |
| Notes | Overlap, content needs, or fact verification |

## Keyword assignment rules

- Assign one primary target keyword to each search-target page.
- Avoid assigning the same primary keyword and intent to multiple pages.
- Include the target keyword in the meta title, meta description, and H1 when it fits naturally and accurately.
- Use supporting keyword clusters in H2s, H3s, and page copy where relevant; do not force exact-match phrases.
- Match the page to the visitor’s intent instead of creating pages from keyword variations alone.
- Review the map when adding a page to check for cannibalization and internal-link opportunities.

## Case studies and resources

Use descriptive slugs that accurately summarize each approved case study or article:

- `/case-studies/{client-or-project-slug}/`
- `/resources/{article-topic-slug}/`

Do not include client names or identifying details without permission. Avoid publishing thin articles that simply rephrase existing pages.
