# 02 — Site Architecture and Page List

**File:** `docs/02-site-architecture-and-page-list.md`

## Purpose

Define the planned pages, their roles, and how they relate. This is a working build list, not a requirement to publish every proposed page. Create pages when their content is useful and can be supported by confirmed business information.

## Site structure

```text
/
├── about/
├── services/
│   └── {service}/
├── industries/
│   ├── home-services/
│   ├── professional-services/
│   ├── property-management-real-estate/
│   ├── healthcare/
│   ├── education/
│   ├── healthcare-wellness/   (reserved for a broader wellness audience; not planned)
│   ├── {audience}/{service}/  (combo pages: two published)
│   └── {parent}/{sub-audience}/
├── case-studies/
│   └── {case-study}/
├── resources/
├── faq/
│   └── {article}/
├── contact/
├── privacy-policy/
└── terms-of-service/
```

There is no default city, state, country, or regional page hierarchy. Okiko High serves clients worldwide and is not targeting Las Vegas, Nevada.

## Core pages

| Page | Purpose | Notes |
|---|---|---|
| Home | Introduce the agency, clarify its value, and guide visitors to services or contact. | Base claims on confirmed services and proof. |
| About | Explain the agency’s approach, mission, and business identity. | **Built.** Uses agency identity; no individual owner/team profile is planned. Shows the mission, approach, six service cards, audience cards, and a two-column FAQ. |
| Services | Summarize confirmed offerings and direct visitors to service pages. | Publish only services confirmed as currently available. |
| Industries / Who We Help | Introduce the audience groups. | Clearly distinguish currently served audiences from future opportunities. |
| Case Studies | Present approved client work and outcomes. | Launch when approved examples are available; do not invent or anonymize as if verified. |
| Resources | Publish useful educational material supporting services and audiences. | Include articles only when they provide substantive value. |
| FAQ | Answer common questions in customer-journey order (getting found, inquiries, qualifying and booking, follow-up, feedback) plus a "Working With OKIKO HIGH" group for pricing, setup, support, ownership, privacy, and cancellation. | Links each group to the service pages that hold the full answers. Describes how workflows can be designed, not a promise that every service or integration fits every project. |
| Contact | Give visitors clear ways to inquire. | **Built.** Shows the confirmed phone and email. A two-step contact form (service, then contact details) is built but appears only when `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` is set (see `docs/06`). The primary contact action and booking link are TBD, so there is no booking link. |
| Privacy Policy | Explain data collection and use. | **Built (draft; needs legal review before launch).** Content is in `src/content/privacy-policy.ts`. Reflects the site as it is: no analytics, pixels, or advertising cookies, and the contact form on `/contact` (saved to GoHighLevel, described in "Information you give us", sharing, and the FAQs). Separates OKIKO HIGH's own use of information from information it handles for clients. Shows six service cards (reusing `ServiceCard` with privacy-focused copy) and a two-column FAQ. Update the file and its "Last updated" date whenever a form, analytics tool, or integration is added. |
| Terms of Service | Publish applicable terms. | **Built (draft; needs owner and legal review before launch).** Content is in `src/content/terms-of-service.ts`. Covers website use, per-service terms (six service cards reusing `ServiceCard`), how a project is scoped, client responsibilities, notes for the Professional Services, Home Services, and Property Management audiences, third-party platforms, and no-guarantee language, with a two-column FAQ. Does not state pricing, payment, refund, ownership, exit, liability cap, governing law, or the legal entity name, because those are TBD in `docs/01`. Update the file and its "Last updated" date when any of them is confirmed. |

## Service pages

Individual service pages are planned for confirmed offerings:

- Website Design and Development
- AI Chatbots
- AI Voice Agents and AI Receptionists
- Reputation Management
- Google Business Profile Optimization
- Google Business Profile Automation
- SMS and Email Automation
- Lead Follow-Up Automation

The owner confirmed availability for the six built service pages on 2026-10-11. For any other service, do not build an active offer page until availability and scope are confirmed. Merge closely related items only if they represent one actual service and one search intent.

## Audience pages

Four primary audience groups are built and currently served (owner confirmed 2026-11-02). Education is not built:

| Audience page | Current status | Planning notes |
|---|---|---|
| Home Services | Currently served | Includes HVAC, plumbing, landscaping, general contracting, cleaning, and related businesses. |
| Professional Services | Currently served | Built. Law, accounting, consulting, financial advice, and similar firms. |
| Property Management and Real Estate | Currently served | Built. Property managers, landlords, rental operators, and real estate teams. |
| Healthcare, Dental and Med Spa | Currently served | Built. Healthcare, dental, and med spa practices. A broader Healthcare and Wellness audience is not built. |
| Education | Not built; TBD | Clarify what “people and pet care” means before defining sub-audiences. Do not position as currently served unless confirmed. |

Audience pages should explain the relevant business needs and how confirmed Okiko High services address them. Avoid presenting future audiences as current clients or areas of expertise.

## Sub-audience pages

Sub-audience pages are optional. Potential candidates include HVAC or plumbing under Home Services, and legal or real estate under Professional Services. These are not approved page commitments.

Create a separate sub-audience page only when it can provide distinct, useful material, such as:

- Industry-specific inquiry and follow-up workflows
- Relevant service combinations
- Unique customer questions or decision factors
- Approved examples, process details, or proof
- FAQs that are genuinely specific to that sub-audience

If the content would mostly repeat the parent page with an industry name swapped in, keep it as a section on the parent page.

## Audience x service combination pages

A documented pattern: `/industries/{audience}/{service}` pairs one built audience page with one built service page. It is for combinations with materially different workflows, intake, and questions, never for swapping a keyword. The code, registry, and rules are in `src/content/combos/` and `CLAUDE.md`. A new combo page stays `noindex`, out of the sitemap, and out of every cross-link until the owner approves it. Two combo pages are live and published, both indexable, in the sitemap, and cross-linked: `/industries/home-services/ai-receptionist` (owner approved 2026-10-18) and `/industries/home-services/website-design` (owner approved 2026-11-02). Both are listed in `03-url-and-keyword-map.md`.

## Case studies and resources

- Case studies require owner approval and client permission before publication.
- Resources should support real questions about the agency’s confirmed services and audiences.
- Avoid generating articles solely to fill a page count or repeat existing content.

## Page relationships and navigation

- The Home page links to Services, Industries, About, and Contact.
- The Services hub links to each published service page.
- The Industries hub links to substantive audience pages.
- Audience pages link to relevant confirmed services.
- Sub-audience pages, when created, link to their parent audience page.
- Case studies and resources link to relevant service or audience pages where useful.
- Breadcrumbs should reflect the actual hierarchy.

## Lightweight page status tracking

Use these labels to communicate progress without blocking implementation:

- **Proposed** — candidate page, not yet prioritized.
- **Ready** — scope and required business information are available.
- **Built** — page exists in the site.
- **Published** — page is live.

These labels are informational. They are not approval gates.
