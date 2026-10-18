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
| AI Chatbots | `/services/ai-chatbots/` | AI chatbot for small business website (page built; owner confirmed availability 2026-10-11; indexable and in sitemap) |
| AI Receptionist (inbound calls) | `/services/ai-receptionist/` | AI receptionist for small business (page built; owner confirmed availability 2026-10-11; indexable and in sitemap) |
| AI Voice Agents (broader than inbound reception) | `/services/ai-voice-agents/` | TBD (only if it has a distinct scope and search intent; otherwise fold into the AI Receptionist page) |
| Reputation Management | `/services/reputation-management/` | review management services (page built; owner confirmed availability 2026-10-11; indexable and in sitemap) |
| Google Business Profile Optimization and Management | `/services/google-business-profile-optimization/` | Google Business Profile management (page built; owner approved publishing, indexable and in sitemap) |
| Google Business Profile Automation | `/services/google-business-profile-automation/` | TBD (automation is covered on the optimization and management page; a separate page is only warranted if it has a distinct scope and search intent) |
| SMS and Email Automation | `/services/sms-email-automation/` | text and email automation for customer follow-up (page built; owner confirmed availability 2026-10-11; indexable and in sitemap) |
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
| Status | Published-ready (indexable, in sitemap; all six services listed in the `ItemList`) |
| Notes | Keyword is an intent-based recommendation, not a validated search-volume finding; confirm before treating it as final. Card copy and FAQ answers restate the service pages and `docs/01`; no prices, timelines, results, or partnerships are stated. The cards show all six services, and the owner confirmed all six pages on 2026-10-11, so every `published` flag in `src/content/services/hub.ts` is true and the page's `ItemList` structured data names all six (`docs/07`). Pricing, ownership and exit terms, and tested integrations remain unconfirmed and are not stated. The FAQ "What kinds of businesses are these services for?" relies on Home Services being listed as currently served in `docs/01`. Sections: hero, six service cards, situation-to-service guide, example service combinations (not packages), links to the fictional samples already on five service pages plus the Google Business Profile review checklist (not client proof; the GBP proof section is still placeholders), a short "what to expect" section limited to what the service pages already state, FAQs, and a closing CTA. Deliberately left out until the owner confirms the facts: commercial model (one-time vs recurring, ongoing support), ownership and cancellation terms, software and usage charges, client proof or case studies, and a strategy-call form. |

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
| Status | Published-ready (owner confirmed availability 2026-10-11; indexable, in sitemap, `Service` schema included where the page is a service) |
| Notes | Keywords are intent-based recommendations, not validated search-volume findings. The owner confirmed availability on 2026-10-11, so the page is indexable, listed in `src/app/sitemap.ts`, and emits `Service` schema. The "what we will not do" list is treated as approved with the page. Agency pricing, response-time targets, supported platforms, results, testimonials, ratings, and vendor partnership are unconfirmed, so the page makes no claims about them. Primary keyword is distinct from the Google Business Profile pages: this page covers reviews, not listing setup. No `Review` or `AggregateRating` markup. |

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
| Status | Published-ready (owner confirmed availability 2026-10-11; indexable, in sitemap, `Service` schema included where the page is a service) |
| Notes | Keywords are intent-based recommendations, not validated search-volume findings. The owner confirmed availability on 2026-10-11, so the page is indexable, listed in `src/app/sitemap.ts`, and emits `Service` schema. Delivery scope, pricing, supported systems, human-backup arrangement, escalation flow, recording settings, and proof are unconfirmed, so the page makes no claims about them. The page shows an illustrative script, not a recording, and publishes no performance figures. Do not build HVAC, plumbing, cleaning, or landscaping variants unless each shows materially different intake, scheduling, urgency, and escalation workflows. |

## Proposed audience URLs

These pages reflect the identified audience groups. Their launch status should match the agency’s current service experience.

| Audience | Proposed URL | Target keyword |
|---|---|---|
| Home Services | `/industries/home-services/` | digital marketing for home-service businesses (page rebuilt from the updated brief; indexable and in sitemap) |
| Professional Services | `/industries/professional-services/` | professional services marketing agency (page built; rewritten to audience brief; owner approved indexing 2026-10-11, indexable and in sitemap) |
| Property Management and Real Estate | `/industries/property-management-real-estate/` | property management marketing services (page built; owner approved indexing 2026-10-11, indexable and in sitemap) |
| Education | `/industries/education/` | TBD |
| Healthcare, Dental and Med Spa | `/industries/healthcare/` | healthcare marketing automation (page built; owner approved publication 2026-10-12, indexable and in sitemap) |
| Healthcare and Wellness | `/industries/healthcare-wellness/` | TBD (broader wellness audience; not built) |

Home Services is currently served. The other audience groups are future opportunities; do not frame them as current clients or expertise unless confirmed.

### Audience keyword map entries

#### Home Services

| Field | Entry |
|---|---|
| Page name | Home Services audience page |
| URL | `/industries/home-services/` |
| Page type | Audience |
| Target keyword | digital marketing for home-service businesses |
| Search intent | Commercial investigation: an owner-operator or operations manager at a home-service business evaluating how marketing connects to quotes, appointments, and follow-up, without replacing existing job-management software |
| Supporting keyword clusters | marketing automation for home services (body copy only, reserved as the combo page target); home-service customer follow-up; quote follow-up; appointment reminders; missed-call text-back; reactivation of past customers; honest review requests; AI receptionist for home services. Question clusters: whether existing scheduling or CRM software must be replaced; how quickly to follow up; whether automated texts annoy customers; what happens when a customer replies; urgent requests and emergency dispatch; texting legality and permission; reconnecting with past customers; automated review requests; measuring whether a workflow helps; cost and exit terms |
| Parent page | `/industries/` |
| Internal links | Links out to `/services/website-design/`, `/services/google-business-profile-optimization/`, `/services/reputation-management/`, `/services/sms-email-automation/`, `/services/ai-receptionist/`, `/services/ai-chatbots/`, `/contact/`, `/privacy-policy/`, `/industries/` (breadcrumb). Add links to the Home Services + AI Receptionist, + Follow-Up, and + Website combo pages only after they are built and substantive. Link plumbing/HVAC, roofing, or recurring-service audience pages only after separate research and approved scope. |
| Status | Published-ready (owner confirmed availability 2026-10-11; indexable, in sitemap, `Service` schema included where the page is a service) |
| Notes | Keywords are intent-based recommendations, not validated search-volume findings. Home Services is a currently served audience per `docs/01`. Title is "Digital Marketing for Home-Service Businesses" and the H1 is "Digital Marketing and Automation for Home-Service Businesses", both distinct from the planned combo page `/industries/home-services/marketing-automation/` (keeps "Home Services Marketing & Automation"). The page presents proposed workflow applications, not a package or past client work, and states no pricing, ownership or exit terms, tested integrations, results, trade experience, or vendor partnership. Examples are labeled "Example workflow" and covered by a single visible "Scope and Limits" block. Sources cited: HighLevel missed-call text-back documentation, Google review policy, Twilio A2P 10DLC compliance. Not cited: the Reddit thread (research only), Jobber survey figures (dropped from the rebuild), and the Mailchimp and CTIA sources (no URLs supplied). No numeric follow-up-speed target is published. Schema is `Organization`, `WebPage`, `BreadcrumbList`, and `FAQPage` matching the 11 visible FAQs; no `Service` node, prices, ratings, or `LocalBusiness`. The inquiry form is not built (contact path and consent wording are TBD), so CTAs point to `/contact/`. |

#### Professional Services

| Field | Entry |
|---|---|
| Page name | Professional Services audience page (leads with the buyer journey and profession differences; routes to six service pages) |
| URL | `/industries/professional-services/` (the brief proposed `/professional-services-marketing-automation/`; the architecture in `docs/02` and the URL conventions here place audience pages under `/industries/`, so the brief's slug was not used) |
| Page type | Audience |
| Target keyword | professional services marketing agency |
| Search intent | Commercial investigation: an owner, managing partner, or operations lead at a 1-25 person professional firm (law, accounting and bookkeeping, HR and consulting, financial advice, insurance, architecture, engineering) weighing a more credible website and more dependable intake and follow-up |
| Supporting keyword clusters | professional services digital marketing; professional services website design; marketing automation for professional services; client intake automation; law firm intake automation; accounting firm website design; consulting firm marketing agency; financial advisor marketing automation. Question clusters: whether referral-based firms need a good website; whether existing practice-management software is replaced; whether it connects to Clio, Lawmatics, or HubSpot; whether an AI receptionist can give professional advice; what happens when AI cannot answer; how confidential information is handled; whether review requests and Google Business Profile updates can be automated; cost |
| Parent page | `/industries/` |
| Internal links | Links out to `/services/` (hub), `/services/website-design/`, `/services/sms-email-automation/`, `/services/reputation-management/`, `/services/google-business-profile-optimization/`, `/services/ai-chatbots/`, `/services/ai-receptionist/`, `/contact/`, `/privacy-policy/`, `/industries/` (breadcrumb). Add links to law, accounting and bookkeeping, HR and consulting, financial-advisor, insurance, and architecture/engineering combo pages only after they are built and substantive. The shared "Explore Other Industries" strip links to the Property Management and Real Estate page and Home Services; do not add real estate or property management copy to this page. |
| Status | Built (owner approved indexing 2026-10-11; indexable, in sitemap) |
| Notes | Keywords are intent-based recommendations, not validated search-volume findings; the sector-specific terms are used only where the content supports them. `docs/01` lists Professional Services as a **future opportunity**, and all six services are TBD or only partly confirmed, so the page presents a proposed approach, not a package, and states no availability, pricing, tested integrations, results, or professional-services experience. The five scenarios are labeled illustrative, not client stories. Published on owner approval (2026-10-11): `robots` removed from the page metadata and `/industries/professional-services` added to `src/app/sitemap.ts`. All six service pages it links to are now indexable (owner approved 2026-10-11), and the industries hub (`/industries/`) now links to this page. Schema is `Organization`, `WebPage`, `BreadcrumbList`, and `FAQPage` matching the visible FAQ; no `Service` node, prices, ratings, or `LocalBusiness`. FAQ markup is not expected to produce a rich result. Rewritten 2026-10-11 to the Audience Page brief (H1 "Marketing for Professional Services Firms"; title "Professional Services Marketing Agency"). Sections: hero with four-step journey graphic and a no-experience-in-every-profession statement; buyer journey (buyer-question map, Hinge labeled 2014 research); four problem cards with a labeled US law-firm statistic (Clio, 2024); six profession cards (needs plus illustrative workflow; insurance shows needs only; no links because no dedicated pages exist); five expandable illustrative scenarios; need-to-service cards linking to each service page; existing-systems flow and checks; administrative support versus professional decisions; discovery checklist and a number-free measurement framework; two-column FAQ (10 questions); related industries; closing inquiry section. The inquiry form is layout only (fields disabled, not wired) until a destination and consent wording are chosen; CTAs point to `/contact/`. The secondary CTA (example inquiry-to-consultation workflow) is omitted until that asset exists. A combination page for the connected workflow is deferred; if built it goes at `/industries/professional-services/marketing-automation/` and is linked only once it exists. No dedicated profession pages are planned until each has distinct, substantive content. Legal and advisor copy needs state-specific and registration-specific review before publication. |

#### Property Management and Real Estate

| Field | Entry |
|---|---|
| Page name | Property Management and Real Estate audience page (audience plus six-service stack) |
| URL | `/industries/property-management-real-estate/` (the research pack suggested a distinct audience hub alongside Professional Services; the combined audience plus service brief proposes `/industries/property-management-marketing-automation/`, which is a separate page) |
| Page type | Audience |
| Target keyword | property management marketing services (assigned by the updated audience brief; the combined property management marketing and automation page must target "property management marketing automation" instead) |
| Search intent | Commercial investigation: an owner or operator of a property management company, a landlord, a short or midterm rental operator, or a real estate agent or brokerage weighing a clearer website and more dependable inquiry routing and follow-up |
| Supporting keyword clusters | property management marketing automation; property management website design; property management lead follow-up; owner lead generation for property managers; leasing inquiry automation; vacation rental marketing automation; real estate lead follow-up automation. Question clusters: whether existing software already covers the gap; whether AI can answer after-hours calls; whether each rental can have a Google Business Profile; whether tenants and owners can both be asked for reviews; whether automated texting is allowed; whether a brokerage needs another CRM; how rental-operator workflows differ |
| Parent page | `/industries/` |
| Internal links | Links out to `/services/` (hub), `/services/website-design/`, `/services/sms-email-automation/`, `/services/reputation-management/`, `/services/google-business-profile-optimization/`, `/services/ai-chatbots/`, `/services/ai-receptionist/`, `/contact/`, `/privacy-policy/`, `/industries/` (breadcrumb). Also links to `/industries/home-services/` and `/industries/professional-services/` through the shared "Explore Other Industries" strip. Linked from `/industries/` (hub cards), `/services/` ("See How the Services Fit Your Industry" strip), and the other two audience pages. Add links to the combined property management marketing and automation page, and to rental-operator and brokerage pages, only after they are built and substantive. |
| Status | Built (owner approved indexing 2026-10-11; indexable, in sitemap) |
| Notes | Keywords are intent-based recommendations, not validated search-volume findings. `docs/01` lists Professional Services, which includes real estate, as a **future opportunity**, and all six services are TBD or only partly confirmed, so the page presents a proposed approach, not a package, and states no availability, pricing, tested integrations, results, or property or real estate experience. Overlap to resolve: `docs/02` and the Professional Services entry treat real estate as part of Professional Services, so decide whether this page stays a standalone audience or becomes the `/industries/professional-services/real-estate/` sub-audience (it is now indexable as a standalone page). The primary keyword "property management marketing services" belongs to this audience hub; the combined property management marketing and automation page takes "property management marketing automation" so the two do not compete. Software names (AppFolio, Buildium, Yardi, Guesty, Hostaway, Follow Up Boss, kvCORE/BoldTrail) appear as "to assess", never as supported integrations, and there is no GoHighLevel mention or branding. The five scenarios are labeled illustrative, not client stories, and the research pack's cost-of-inaction estimates are left out. Schema is `Organization`, `WebPage`, `BreadcrumbList`, and `FAQPage` matching the visible FAQ; no `Service` node, prices, ratings, or `LocalBusiness`. Updated to the revised audience brief (2026-10-11). Meta title "Property & Real Estate Marketing" uses the site's " | OKIKO HIGH" template. Sections: hero with a four-stage journey illustration (Get found, Make an inquiry, Reach the right person, Receive follow-up) and primary and secondary CTAs; introduction; four business-type cards with common needs and links to existing service pages; four shared-gap cards, an inquiry type, needed response, and responsible person matrix, and after-hours and seasonality notes; six service cards grouped as foundation, presence, and inquiry assistance; five cards labeled "Illustrative scenario"; existing-software examples with an "Assess existing capabilities first" note; can-assist versus a-person-must-decide boundaries with Fair Housing and state-notice notes (no vendor terms cited); a five-step Map, Audit, Test, Pilot, Review strip with operational and business measures and exclusions; two-column FAQ of twelve questions (the rent and availability question was dropped; the texting and reviews questions were kept); and a closing CTA listing what to include. Left out until the facts exist: any demonstration, client proof, the brief's inquiry form (contact path and consent wording are TBD, so a "what to include" list and CTAs point to `/contact/`), the HighLevel AI-disclosure citation, and links to the residential, rental, brokerage, combo, and process pages that are not built. Indexing approved by the owner on 2026-10-11: `robots` removed from the page metadata and `/industries/property-management-real-estate` added to `src/app/sitemap.ts`. Fair Housing, texting, recording, and notice rules still need jurisdiction-specific review. |

#### Healthcare, Dental and Med Spa

| Field | Entry |
|---|---|
| Page name | Healthcare, Dental and Med Spa audience page (audience plus six-service stack) |
| URL | `/industries/healthcare/` (the audience brief's slug, kept because it names this page's scope; `/industries/healthcare-wellness/` stays reserved for a broader wellness audience that is not planned yet) |
| Page type | Audience |
| Target keyword | healthcare marketing automation |
| Search intent | Mixed commercial investigation and informational: an owner or office manager of a 1 to 10 provider healthcare, dental, or med spa practice weighing better inquiry handling, a clearer website, and less repetitive administrative work |
| Supporting keyword clusters | healthcare marketing agency; dental marketing automation; med spa marketing automation; medical practice website design; healthcare reputation management; patient follow-up automation; AI receptionist for medical practice |
| Parent page | `/industries/` |
| Internal links | Links out to `/services/` (hub), `/services/website-design/`, `/services/google-business-profile-optimization/`, `/services/sms-email-automation/`, `/services/reputation-management/`, `/services/ai-chatbots/`, `/services/ai-receptionist/`, `/contact/`, `/privacy-policy/`, `/industries/` (breadcrumb). Also links to the other three audience pages through the shared "Explore Other Industries" strip. Linked from `/industries/` (hub card) and from the other audience pages through the shared strip. Add links to dental, med spa, and PT/chiropractic audience pages and to the dental + AI receptionist, med spa + follow-up, and healthcare + reputation combo pages only after they are built and substantive. |
| Status | Built (owner approved publication 2026-10-12; indexable, in sitemap, listed on the industries hub) |
| Notes | Keywords are intent-based recommendations, not validated search-volume findings. `docs/01` lists Healthcare and Wellness as a **future opportunity**, and all six services are TBD or only partly confirmed, so the page presents a proposed approach, not a package, and states no availability, pricing, tested integrations, results, BAA readiness, HIPAA compliance, or healthcare experience. Title "Healthcare Marketing & Automation" uses the site's " | OKIKO HIGH" template. Sections: hero with a four-stage journey illustration and primary and secondary CTAs (the secondary is the brief's "Explore the Proposed Workflows" jump link, because the labeled workflow example does not exist); opening with three principles and a "Scope and limits" block carrying the brief's five required disclosures; six practice-type cards (dental, med spa, PT/chiropractic, primary care, vision, mental health) with common needs and links to existing service pages; four gap cards, an inquiry type, needed response, and responsible person matrix, and two notes; six service cards in three groups (foundation, follow-up and trust, inquiry assistance), each titled, described, labeled "Scope to confirm", and linked to its service page; an administrative workflow versus human or clinical team comparison with an insurance example; existing-software examples (Dentrix, Eaglesoft, Open Dental, athenahealth, Jane, Mindbody, Boulevard) shown as "to evaluate", never as integrations; five cards labeled "Illustrative scenario"; a six-step implementation grid with the HighLevel HIPAA note, operational and business measures, and exclusions; privacy and public-communication rules; a two-column FAQ of ten questions; related industries; and a closing CTA listing what to include with the brief's patient-information warning. Schema is `Organization`, `WebPage`, `BreadcrumbList`, and `FAQPage` matching the visible FAQ; no `Service` node, medical-provider schema, prices, ratings, or `LocalBusiness`. Left out until the facts exist: any demonstration, client proof, the brief's inquiry form (contact path and consent wording are TBD, so a "what to include" list and CTAs point to `/contact/`), the competitor scan, and the research pack's dollar estimates. Published on owner approval (2026-10-12): `robots` removed, path added to `src/app/sitemap.ts`, card added to the hub. The brief's proof gaps (offering status, scope, BAA readiness, integrations, pricing) are still open, so the page keeps its proposed-approach wording. HIPAA, TCPA, recording, advertising, and AI disclosure copy needs legal review before publication. |

## Audience x service combo pages

| Field | Value |
|---|---|
| URL | `/industries/home-services/website-design` |
| Primary keyword | home service website design |
| Title | Home Service Website Design |
| H1 | Website Design for Home-Service Businesses |
| Search intent | Commercial investigation: a home-service owner deciding what a site should include so customers can find services and areas and call or request a quote |
| Parent pages | `/industries/home-services/` and `/services/website-design/` |
| Related links | `/services/google-business-profile-optimization/`, `/services/reputation-management/`, `/services/ai-receptionist/`, `/services/sms-email-automation/` |
| Inbound links | Built behind the published flag: `/industries/home-services/` ("Home-Service Guides by Service") and `/services/website-design/` ("Website Design by Industry"). Both render nothing until the combo is published. |
| Status | Built, `published: false` (noindex, not in sitemap, not cross-linked) until owner approval |
| Notes | "contractor website design" was removed from the Home Services audience cluster so the two pages do not compete. Evidence: Jobber 2026 survey (vendor data, n=1,050), LocaliQ 2025 (n=100), web.dev, Google guidance, WCAG 2.2. Verify before launch: the ADA lawsuit count cited from an event listing, and the Google FAQ rich-result change. Schema: Organization, WebPage, BreadcrumbList, FAQPage matching the 10 visible FAQs; no Service node, ratings, prices, or LocalBusiness. |

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
