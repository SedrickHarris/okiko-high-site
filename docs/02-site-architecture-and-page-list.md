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
│   ├── education/
│   ├── healthcare-wellness/
│   └── {parent}/{sub-audience}/
├── case-studies/
│   └── {case-study}/
├── resources/
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
| About | Explain the agency’s approach, mission, and business identity. | Use agency identity; no individual owner/team profile is planned. |
| Services | Summarize confirmed offerings and direct visitors to service pages. | Publish only services confirmed as currently available. |
| Industries / Who We Help | Introduce the planned audience groups. | Clearly distinguish currently served audiences from future opportunities. |
| Case Studies | Present approved client work and outcomes. | Launch when approved examples are available; do not invent or anonymize as if verified. |
| Resources | Publish useful educational material supporting services and audiences. | Include articles only when they provide substantive value. |
| Contact | Give visitors clear ways to inquire. | Primary contact action and booking link are TBD. |
| Privacy Policy | Explain data collection and use. | Must reflect actual forms, analytics, and integrations. |
| Terms of Service | Publish applicable terms. | Content requires owner/legal review before publication. |

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

Four primary audience groups have been identified:

| Audience page | Current status | Planning notes |
|---|---|---|
| Home Services | Currently served | Includes HVAC, plumbing, landscaping, general contracting, cleaning, and related businesses. |
| Professional Services | Future opportunity | Broad page may cover legal, finance, and real estate when there is enough relevant content. |
| Education | Future opportunity | Clarify what “people and pet care” means before defining sub-audiences. |
| Healthcare and Wellness | Future opportunity | Keep planned, but do not position as currently served unless confirmed. |

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
