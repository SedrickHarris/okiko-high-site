# Audit: FAQ Internal Links, Clickable Phone Numbers, Clickable Emails

**Date:** 2026-11-03
**Method:** read of `CLAUDE.md` and docs 01, 02, 03, 07; source inventory under `src/`; all 234 FAQ question/answer pairs extracted from `src/content/**` and read; fresh `npm run build`, then a scripted pass over all 24 built pages in `out/` (visible FAQ text vs FAQPage JSON-LD, every `tel:`/`mailto:` anchor, plain-text contact scan outside anchors, FAQ link resolution). Nothing was committed, pushed, or deployed. No dependencies added.

## 1. Inventory

### Live routes (24 built pages)

| URL | Topic | Type |
|---|---|---|
| `/` | Agency overview | Core |
| `/about` | Agency, approach, founded 2026-05-03 | Core |
| `/contact` | Contact form, phone, email | Core |
| `/faq` | Grouped FAQ (6 groups) | Core |
| `/services` | Services hub | Service hub |
| `/services/website-design` | Website design | Service |
| `/services/google-business-profile-optimization` | GBP management | Service |
| `/services/reputation-management` | Review management | Service |
| `/services/ai-chatbots` | AI website chatbots | Service |
| `/services/ai-receptionist` | AI receptionist | Service |
| `/services/sms-email-automation` | Text and email automation | Service |
| `/industries` | Industries hub | Audience hub |
| `/industries/home-services`, `/professional-services`, `/property-management-real-estate`, `/healthcare` | Four audiences | Audience |
| `/industries/home-services/website-design`, `/ai-receptionist` | Audience x service combos | Combo |
| `/privacy-policy`, `/terms-of-service` | Legal (indexed, commit a6607c8) | Legal |
| `/case-studies`, `/resources` | Placeholders (noindex) | Utility |
| `/404` | Not found | Utility |

### FAQ data

- Data lives in `src/content/*.ts` as `Faq[]` (type in `src/content/shared.ts`): `{ question, answer: string, sources? }`. 234 pairs across 20 content files. Rendered by `src/components/sections/FaqSection.tsx` (native `<details>`); also used by `ComboPage.tsx`, `/faq` (six groups, `allFaqs`), `/contact`, `/privacy-policy`, `/terms-of-service`, and the 404 page.
- FAQPage JSON-LD comes from `faqPageNode()` in `src/lib/schema/index.ts`, which reads `faq.answer` directly. Before this work the answer was plain text only, so nothing could be linked.

### Phone and email (before changes)

| Where | State |
|---|---|
| `src/data/site.ts` (`siteConfig.phone` `(469) 421-9832`, `.email` `info@okikohigh.com`) | Single data source, matches docs/01 (confirmed public details) |
| Home, `/faq`, `/industries` contact CTAs; `ContactActions.tsx`; `ContactForm.tsx` failure message | Already linked (`tel:+14694219832`, `mailto:`), but each re-derived the `tel:` string locally (5 copies) |
| `src/app/privacy-policy/page.tsx:353-356` ("Reach out" step) | Email linked, **phone plain text** |
| `src/content/contact.ts:84-85` (FAQ "How can I contact OKIKO HIGH?") | **Phone and email plain text** (both form variants) |
| `src/content/privacy-policy.ts` FAQ "What information does OKIKO HIGH collect..." and "How do I ask OKIKO HIGH to access, correct, or delete...?" | **Phone and email plain text** |
| `src/content/privacy-policy.ts:257` (step body) | Plain text, but the page overrides it for step 0 (unused) |
| JSON-LD (`organizationNode({ withContact: true })` on `/about`, `/contact`, `/privacy-policy`, `/terms-of-service`) | `email: "info@okikohigh.com"`, `telephone: "+1-469-421-9832"` plain strings |
| Header, footer, 404, mobile bar | No phone or email (no sticky/mobile bar exists) |
| Placeholders `[phone number]`, `[caller number]` in `combos/home-services/*.ts` | Sample text inside illustrative mockups, not business contact details. Left alone |

## 2. Findings

### A. FAQ internal linking

**Done:** links added to 34 answers (table below, plus the phone and email links in 3 answers), across 18 content files. Links render through the existing `LinkedText` helper (first occurrence of a phrase becomes a `next/link`). The visible answer text is unchanged, and JSON-LD still reads `faq.answer`.

Rules applied: max 3 links per answer; no link to the answer's own page; each target at most once within one FAQ section (on `/faq`, per group); only existing, indexable routes; no claim added or expanded.

| Page | Question | Anchor | Target | Reason |
|---|---|---|---|---|
| `/about` | What services does OKIKO HIGH offer? | six services | `/services` | "What do you do" answer; hub lists all six |
| `/about` | Who does OKIKO HIGH work with? | four kinds of business | `/industries` | Audience question; hub covers all four |
| `/about` | How do I get started with OKIKO HIGH? | contact page | `/contact` | Next step |
| `/` | What does OKIKO HIGH Digital Marketing Agency do? | six services | `/services` | Same as above |
| `/` | Who does OKIKO HIGH work with? | four kinds of business | `/industries` | Audience question |
| `/` | Will automation replace my team? | chatbot; AI receptionist; text and email workflows | `/services/ai-chatbots`; `/services/ai-receptionist`; `/services/sms-email-automation` | The answer names exactly these three services |
| `/` | How do I get started with OKIKO HIGH? | contact page | `/contact` | Next step |
| `/contact` | How can I contact OKIKO HIGH? | the phone and email text | `tel:` / `mailto:` | Section C |
| `/contact` | Which services can I ask OKIKO HIGH about? | Each has its own page | `/services` | Hub (six links would break the 3-link cap) |
| `/contact` | Which industries does OKIKO HIGH serve? | Each industry has its own page | `/industries` | Hub (four links would break the cap) |
| `/faq` (getting found) | How can you help customers find and understand our business online? | A website; Google Business Profile | `/services/website-design`; `/services/google-business-profile-optimization` | Answer names these two services |
| `/faq` (inquiries) | Can we keep our existing business phone number? | AI receptionist | `/services/ai-receptionist` | Answer says calls can reach one |
| `/faq` (working) | What types of businesses does OKIKO HIGH work with? | four kinds of business | `/industries` | Audience question |
| `/faq` (working) | Which service should I start with, and do I need all six? | all six | `/services` | Five of six services are named; hub avoids linking some and not others |
| `/faq` (working) | How does getting started work, and what information is needed? | contact page | `/contact` | Next step |
| `/faq` (working) | How is customer and business information handled? | Privacy Policy | `/privacy-policy` | Answer already points there; page is now indexed |
| `/industries` | Are the services different for each industry? | six services | `/services` | Answer lists them |
| `/industries` | What if my industry is not listed? | contact page | `/contact` | Next step |
| `/services` | What kinds of businesses are these services for? | four kinds of business | `/industries` | Audience question |
| `/services` | How do I get started? | contact page | `/contact` | Next step |
| `/services/website-design` | Does website design include SEO? | Google Business Profile management | `/services/google-business-profile-optimization` | Answer says it is not assumed; points to the separate service |
| `/services/google-business-profile-optimization` | What does Google Business Profile management include? | Website work; review-request campaigns | `/services/website-design`; `/services/reputation-management` | Answer lists both as possibly separate scope |
| `/services/reputation-management` | Do Google reviews help local rankings? | local ranking | `/services/google-business-profile-optimization` | Related local-visibility service |
| `/services/ai-chatbots` | Can a website conversation continue by text? | messaging workflows | `/services/sms-email-automation` | Answer is about routing into messaging |
| `/services/ai-receptionist` | Can it send a text after the call? | follow-up workflows | `/services/sms-email-automation` | Answer is about text actions and consent |
| `/industries/healthcare` | What could marketing and automation help our practice manage? | website inquiries; reputation management | `/services/website-design`; `/services/reputation-management` | Answer names both |
| `/industries/home-services` | Can review requests be automated? | review-request workflow | `/services/reputation-management` | Direct service match |
| `/industries/professional-services` | Do we need every service? | clearer website; chatbots; voice AI | `/services/website-design`; `/services/ai-chatbots`; `/services/ai-receptionist` | Answer names these |
| `/industries/professional-services` | Can every firm use Google Business Profile and automated review requests? | Business Profile | `/services/google-business-profile-optimization` | Service match |
| `/industries/property-management-real-estate` | Can rental prospects receive automated text follow-up? | Automated messaging | `/services/sms-email-automation` | Service match |
| `/industries/home-services/ai-receptionist` | Can an AI receptionist text customers after a call? | A2P 10DLC registration | `/services/sms-email-automation` | That service page covers texting registration |
| 404 | What does OKIKO HIGH do? | six service areas | `/services` | Recovery path |
| 404 | Which kinds of businesses does OKIKO HIGH work with? | four kinds of business | `/industries` | Recovery path |
| 404 | How do I reach OKIKO HIGH about a broken link or a question? | contact page | `/contact` | Next step |
| `/terms-of-service` | Can OKIKO HIGH guarantee rankings, leads, bookings, or review removal? | service page | `/services` | Answer says each service page states limits |

**Reviewed, deliberately not linked** (about 200 answers): answers that name no linkable topic, answers whose only candidate target was already used in the same section (for example, "contact page" appears in several `/` and `/faq` answers but is linked once per section), answers where a link would imply a claim (ownership, exit, pricing, and support terms are not published, so no link to `/terms-of-service` was added), answers that list five or six services (a hub link is used instead of a partial set), and the service-by-service questions on pages whose FAQ group intro already links the same services (`/faq` groups for follow-up, feedback, qualifying). Combo website-design FAQs have no natural target.

**Missing pages** (not created, not linked):
- Pricing or "how a quote works" page (docs mark pricing TBD; many answers say "request a quote").
- Process / "what happens after you contact us" page.
- Ownership, exit, and support terms (TBD in docs/01), which several answers reference.
- Combo and sub-audience pages for professional services, property management, and healthcare (not approved).
- Case studies and resources are noindex placeholders, so they are not link targets.

### B. Phone numbers

- One number, `(469) 421-9832`, consistent in every file. No TBD or conflicting number exists. Docs 01 and 07 confirm it as public.
- Fixed: plain-text phone on `/privacy-policy` ("Reach out" step), in the `/contact` FAQ answer (both variants), and in two privacy FAQ answers. All now `tel:+14694219832` with display text unchanged.
- Fixed: the `tel:` string was built in five places. It now comes from `phoneHref` in `src/data/site.ts`; inline use goes through `PhoneLink` (`src/components/ui/ContactLinks.tsx`).
- Verified in build: 22 `tel:` anchors, all `tel:+14694219832`, all with visible text `(469) 421-9832`. No plain-text number remains outside anchors and JSON-LD.
- Accessible label: every link's visible text is the number itself, and the surrounding sentence ("call ...") gives context. No extra `aria-label` added (a label that differs from the visible text would fail label-in-name).
- The Plano address and hours (docs/01: customer-facing status TBD) are not published anywhere in `src/`. Confirmed.

### C. Emails

- One address, `info@okikohigh.com`, consistent everywhere.
- Fixed: plain-text email in the `/contact` FAQ and two privacy FAQ answers. Email construction centralized as `emailHref`; inline use via `EmailLink`.
- Verified: 22 `mailto:info@okikohigh.com` anchors with the address as visible text; no plain-text address outside anchors and JSON-LD.

### D. Structured data

- FAQPage answer text equals the visible answer text on every page (scripted comparison of all FAQ entries: 0 mismatches, no markup in JSON-LD). Links change only the rendered markup.
- `application/ld+json` is byte-identical to the pre-change build on all 24 pages.
- Phone and email stay plain strings in JSON-LD (`email: info@okikohigh.com`, `telephone: +1-469-421-9832`).
- **Note (not changed):** doc 07 lists the telephone as `(469) 421-9832`; the code emits `+1-469-421-9832`. The brief accepts E.164 or the documented format, and the value matches the visible number, but it is hyphenated rather than strict E.164 (`+14694219832`). Changing it would alter JSON-LD, so it is left for an owner decision.

### E. Related checks

| Check | Result |
|---|---|
| Hard-coded `www.okikohigh.com` or `pages.dev` | None in `src/`. Host comes from `siteConfig.url` (default apex). Only docs mention them. |
| Em dashes | None in `src/`. New copy has none. |
| "Illustrative handoff, not a client project." | Not present. Only the banned-string check in `scripts/check-combos.mjs` references it (split so it does not match itself). |
| Focus styles | `globals.css` sets `a:focus-visible` globally, so new links get the ring. |
| Contrast | New link text uses `text-brand-blue-strong` (6.86:1 on white). Existing CTA buttons keep `brand-ink` on yellow/lime fills. No lime or yellow text. |

## 3. Changes made

- `src/data/site.ts`: added `phoneHref` (E.164 `tel:`) and `emailHref`, derived from `siteConfig`.
- `src/components/ui/ContactLinks.tsx` (new): `PhoneLink`, `EmailLink`.
- `src/content/shared.ts`: `Faq.links?: { phrase, href }[]` (answer stays a plain string; `FaqLink` type exported).
- `src/components/sections/FaqSection.tsx`: renders the answer through `LinkedText`.
- `src/components/ui/LinkedText.tsx`: `tel:`/`mailto:` hrefs render as plain anchors; paths still use `next/link`.
- Replaced local `tel:`/`mailto:` construction in `src/app/page.tsx`, `src/app/faq/page.tsx`, `src/app/industries/page.tsx`, `ContactActions.tsx`, `ContactForm.tsx`, `privacy-policy/page.tsx`.
- `src/content/contact.ts`, `src/content/privacy-policy.ts`: contact details in FAQ answers now come from `siteConfig` and carry `links`.
- 18 content files: `links` added per the table above.

Docs 02 and 03 were not changed: no page, URL, or keyword changed. This closes recommendation 12 of `docs/audit-internal-linking.md` in part: FAQ answers can now carry links, and 34 answers now carry links.

## 4. Verification

- `npx tsc --noEmit`: clean. `npm run lint`: clean. `npm run check:combos`: OK. `npm run build`: succeeds, 24 pages.
- Built output: 50 links inside FAQ answers (internal paths plus tel/mailto), every internal one resolves to a built route; 0 FAQ/JSON-LD mismatches; JSON-LD unchanged; 0 plain-text contact details.
- Not checked: the rendered pages in a browser (the browser connection was closed), so visual appearance of the new inline links was not eyeballed.

## 5. Flagged, not changed

- JSON-LD `telephone` format (section D).
- `src/content/privacy-policy.ts` `rights.steps[0].body` is overridden in the page and never rendered; it now uses `siteConfig` text but is dead copy.
- docs/01 "Primary website contact action: TBD" remains open. Not touched.
- `FaqSection` links only work when the phrase appears verbatim in the answer; a missing phrase is skipped silently. Consider a check in `check:combos`-style tooling if more links are added.
