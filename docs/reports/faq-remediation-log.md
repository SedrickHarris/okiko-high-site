# FAQ Remediation Log

Date: 2026-11-03. Source: `docs/reports/faq-audit.md`. Owner decision applied: all legal and compliance FAQ answers are cut. Nothing was committed, pushed or deployed.

## 1. Summary

Q&As before: **234**. Removed: **52**. Rewritten: **29**. Unchanged: **153**. Q&As after: **182**.

| Page | Before | Removed | Rewritten | Unchanged | After |
|---|---|---|---|---|---|
| `/` | 8 | 2 | 2 | 4 | 6 |
| `/about` | 10 | 4 | 0 | 6 | 6 |
| `/services` | 11 | 4 | 2 | 5 | 7 |
| `/services/website-design` | 10 | 2 | 0 | 8 | 8 |
| `/services/google-business-profile-optimization` | 10 | 1 | 1 | 8 | 9 |
| `/services/reputation-management` | 13 | 1 | 4 | 8 | 12 |
| `/services/ai-chatbots` | 10 | 0 | 1 | 9 | 10 |
| `/services/ai-receptionist` | 10 | 3 | 2 | 5 | 7 |
| `/services/sms-email-automation` | 10 | 3 | 0 | 7 | 7 |
| `/industries` | 9 | 2 | 2 | 5 | 7 |
| `/industries/home-services` | 11 | 4 | 0 | 7 | 7 |
| `/industries/professional-services` | 10 | 0 | 3 | 7 | 10 |
| `/industries/property-management-real-estate` | 12 | 1 | 0 | 11 | 11 |
| `/industries/healthcare` | 10 | 2 | 0 | 8 | 8 |
| `/industries/home-services/website-design` | 10 | 1 | 0 | 9 | 9 |
| `/industries/home-services/ai-receptionist` | 10 | 3 | 1 | 6 | 7 |
| `/faq` | 37 | 4 | 9 | 24 | 33 |
| `/contact` | 6 | 2 | 0 | 4 | 4 |
| `/privacy-policy` | 7 | 1 | 1 | 5 | 6 |
| `/terms-of-service` | 12 | 4 | 1 | 7 | 8 |
| `/404 (not-found)` | 8 | 8 | 0 | 0 | 0 |
| **Total** | 234 | 52 | 29 | 153 | 182 |

Of the removals, 8 are the whole 404 page FAQ; the rest split between legal/compliance cuts, duplicate cuts, and items beyond docs/01 (see section 2). `/faq` kept 33 items; no page was left unusable, but the pages with the smallest FAQs are `/contact` (4), `/` (6), `/about` (6), `/privacy-policy` (6) and `/services/ai-receptionist` (7). They were left as is, not padded.

**Rule used to decide remove versus edit.** An item whose subject is a law, regulation, consent rule or compliance standard was removed. Where a legal mention was only one sentence inside an otherwise ordinary answer, only that sentence was deleted (listed under Rewritten). No softer legal wording was added.

## 2. Removed items

| ID (audit numbering) | Page | Question | File | Reason |
|---|---|---|---|---|
| faq#20 | `/faq` | How are permission, communication preferences, and opt-outs handled? | `src/content/faq.ts` | Legal: consent, jurisdiction and counsel guidance for messaging. |
| faq#25 | `/faq` | Can we stay in touch with past customers when appropriate and permitted? | `src/content/faq.ts` | Legal: consent/permission to send promotional texts and emails (same subject as the removed texting-permission items). |
| faq#28 | `/faq` | Which service should I start with, and do I need all six? | `src/content/faq.ts` | Duplicate: 'Do I need all six?' is answered on the home page and the services hub; 'which service first' is answered on the services hub (D7). Also a two-part question. |
| faq#29 | `/faq` | Does OKIKO HIGH work with businesses outside one city or country? | `src/content/faq.ts` | Duplicate: worldwide coverage is answered on home, industries, services hub and contact (D1). |
| about#2 | `/about` | What services does OKIKO HIGH offer? | `src/content/about.ts` | Duplicate: six-service list repeated from the services hub and home (D4). |
| about#5 | `/about` | Who does OKIKO HIGH work with? | `src/content/about.ts` | Duplicate: four-audience list repeated from home and the industries hub (D5). |
| about#6 | `/about` | Does OKIKO HIGH work with clients outside the United States? | `src/content/about.ts` | Duplicate: worldwide coverage, repeated from home (D1). Also carried a consent-rules reference. |
| about#9 | `/about` | Does OKIKO HIGH guarantee search rankings or results? | `src/content/about.ts` | Duplicate: guarantee answer kept on /faq (D2). |
| home#6 | `/` | Does OKIKO HIGH publish prices? | `src/content/home.ts` | Duplicate: pricing answer kept on /faq and on each service and audience page (D3). |
| home#7 | `/` | Does OKIKO HIGH guarantee rankings or leads? | `src/content/home.ts` | Duplicate: guarantee answer kept on /faq (D2). |
| contact#2 | `/contact` | Does OKIKO HIGH work with clients outside the US? | `src/content/contact.ts` | Duplicate: worldwide coverage, answered on home (D1). |
| contact#6 | `/contact` | Which industries does OKIKO HIGH serve? | `src/content/contact.ts` | Duplicate: audiences are answered on the industries hub and home (D5). |
| services#6 | `/services` | How much do OKIKO HIGH's services cost? | `src/content/services/hub.ts` | Duplicate: pricing answer kept on /faq (D3). |
| services#7 | `/services` | Can OKIKO HIGH guarantee rankings, leads, or review removal? | `src/content/services/hub.ts` | Duplicate: guarantee answer kept on /faq (D2). |
| services#10 | `/services` | What kinds of businesses are these services for? | `src/content/services/hub.ts` | Duplicate: audiences are answered on the industries hub and home (D5). |
| services#11 | `/services` | How do I get started? | `src/content/services/hub.ts` | Duplicate: word-for-word the same 'get started' answer as home (D6). |
| industries#8 | `/industries` | How much do these services cost? | `src/content/industries/hub.ts` | Duplicate: pricing answer kept on /faq (D3). |
| industries#9 | `/industries` | Can OKIKO HIGH guarantee rankings, leads, or review outcomes? | `src/content/industries/hub.ts` | Duplicate: guarantee answer kept on /faq (D2); the results question stays on this page. |
| terms#5 | `/terms-of-service` | Can OKIKO HIGH guarantee rankings, leads, bookings, or review removal? | `src/content/terms-of-service.ts` | Duplicate: guarantee answer kept on /faq (D2). |
| terms#6 | `/terms-of-service` | Who is responsible for permission to text, email, or call my customers? | `src/content/terms-of-service.ts` | Legal: allocates consent responsibility and interprets consent rules by country, state and industry. Also stated product behavior (opt-out stops all workflows) that docs/01 does not support. |
| terms#10 | `/terms-of-service` | Can I send sensitive information when I contact OKIKO HIGH? | `src/content/terms-of-service.ts` | Duplicate: sensitive-information warning kept on /contact and /privacy-policy (D8). |
| terms#11 | `/terms-of-service` | Does OKIKO HIGH serve clients worldwide, and do local laws still apply? | `src/content/terms-of-service.ts` | Legal: says local laws and consent rules still apply. |
| healthcare#4 | `/industries/healthcare` | Is GoHighLevel HIPAA compliant? | `src/content/industries/healthcare.ts` | Legal/compliance: HIPAA, BAA statements and GoHighLevel named in the question. |
| healthcare#9 | `/industries/healthcare` | How should a practice respond to negative reviews? | `src/content/industries/healthcare.ts` | Legal/compliance: states patient-privacy obligations (HHS OCR settlement source). |
| property#9 | `/industries/property-management-real-estate` | Can rental prospects receive automated text follow-up? | `src/content/industries/property-management-real-estate.ts` | Legal: consent and compliance process for automated texts. |
| combo-ai#4 | `/industries/home-services/ai-receptionist` | Do I have to tell callers they are talking to an AI? | `src/content/combos/home-services/ai-receptionist.ts` | Legal: AI-disclosure law (Maine, Utah, 'no federal rule found'). Also research-process wording. |
| combo-ai#5 | `/industries/home-services/ai-receptionist` | Is it legal to record calls an AI receptionist answers? | `src/content/combos/home-services/ai-receptionist.ts` | Legal: call-recording consent law, all-party-consent states. |
| combo-ai#6 | `/industries/home-services/ai-receptionist` | Can an AI receptionist text customers after a call? | `src/content/combos/home-services/ai-receptionist.ts` | Legal: TCPA timing, FCC 2024 ruling, A2P 10DLC registration. |
| combo-web#7 | `/industries/home-services/website-design` | Does my website need to follow accessibility standards? | `src/content/combos/home-services/website-design.ts` | Legal: ADA and WCAG accessibility obligations. |
| receptionist#1 | `/services/ai-receptionist` | Will callers know they are speaking with AI? | `src/content/services/ai-receptionist.ts` | Legal: states EU AI transparency rules. |
| receptionist#4 | `/services/ai-receptionist` | Is recording customer calls legal? | `src/content/services/ai-receptionist.ts` | Legal: call-recording consent law. |
| receptionist#8 | `/services/ai-receptionist` | Can it send a text after the call? | `src/content/services/ai-receptionist.ts` | Legal: texting consent, opt-out handling and sender registration. |
| reputation#5 | `/services/reputation-management` | Can I offer a discount for a review? | `src/content/services/reputation-management.ts` | Legal: FTC consumer reviews rule. |
| sms#2 | `/services/sms-email-automation` | Is texting customers legal? | `src/content/services/sms-email-automation.ts` | Legal: whether texting is legal; consent, jurisdiction and carrier rules. |
| sms#6 | `/services/sms-email-automation` | What do I need to register to send texts? | `src/content/services/sms-email-automation.ts` | Compliance: 10DLC brand and campaign registration requirements. |
| sms#10 | `/services/sms-email-automation` | Can I send reactivation messages to former customers? | `src/content/services/sms-email-automation.ts` | Legal: permission to message former customers (same subject as the removed texting-permission items). |
| website-design#1 | `/services/website-design` | How much should a business website cost? | `src/content/services/website-design.ts` | Beyond docs/01: published a third-party dollar range ($4,000-$15,000) while OKIKO HIGH pricing is TBD; source not verified. |
| website-design#8 | `/services/website-design` | Does my website need to be accessible? | `src/content/services/website-design.ts` | Legal: ADA and WCAG accessibility obligations. |
| gbp#5 | `/services/google-business-profile-optimization` | Is automating Google Business Profile posts safe? | `src/content/services/google-business-profile.ts` | Service TBD in docs/01 (Google Business Profile automation). |
| home-services#5 | `/industries/home-services` | What happens when a customer replies? | `src/content/industries/home-services.ts` | Duplicate: exact question also on the text and email automation page (D10). |
| home-services#7 | `/industries/home-services` | Is it legal to text customers about appointments or services? | `src/content/industries/home-services.ts` | Legal: whether texting is legal; consent and jurisdiction. |
| home-services#8 | `/industries/home-services` | Can we reconnect with past customers? | `src/content/industries/home-services.ts` | Legal: permission to message past customers (same subject as the removed texting-permission items). |
| home-services#11 | `/industries/home-services` | What does it cost, and what happens if I leave? | `src/content/industries/home-services.ts` | Duplicate pricing/exit answer (D3), two questions in one, and 'have not been finalized' status wording. |
| privacy#7 | `/privacy-policy` | How do I ask OKIKO HIGH to access, correct, or delete my information? | `src/content/privacy-policy.ts` | Legal: states data-subject rights 'depending on where you live' and response duties 'as applicable law requires'. Decided during implementation as part of the legal cut; owner may reinstate. |
| notfound#1 | `/404 (not-found)` | Why am I seeing a Page not found message? | `src/content/not-found.ts, src/app/not-found.tsx` | Owner decision: FAQ section removed from the 404 page. Six of the eight copied hub content (D13). |
| notfound#2 | `/404 (not-found)` | Has the page I was looking for been removed? | `src/content/not-found.ts, src/app/not-found.tsx` | Owner decision: FAQ section removed from the 404 page. Six of the eight copied hub content (D13). |
| notfound#3 | `/404 (not-found)` | What does OKIKO HIGH do? | `src/content/not-found.ts, src/app/not-found.tsx` | Owner decision: FAQ section removed from the 404 page. Six of the eight copied hub content (D13). |
| notfound#4 | `/404 (not-found)` | Which service should I look at first? | `src/content/not-found.ts, src/app/not-found.tsx` | Owner decision: FAQ section removed from the 404 page. Six of the eight copied hub content (D13). |
| notfound#5 | `/404 (not-found)` | Which kinds of businesses does OKIKO HIGH work with? | `src/content/not-found.ts, src/app/not-found.tsx` | Owner decision: FAQ section removed from the 404 page. Six of the eight copied hub content (D13). |
| notfound#6 | `/404 (not-found)` | How do I reach OKIKO HIGH about a broken link or a question? | `src/content/not-found.ts, src/app/not-found.tsx` | Owner decision: FAQ section removed from the 404 page. Six of the eight copied hub content (D13). |
| notfound#7 | `/404 (not-found)` | Does OKIKO HIGH work with businesses outside one city or country? | `src/content/not-found.ts, src/app/not-found.tsx` | Owner decision: FAQ section removed from the 404 page. Six of the eight copied hub content (D13). |
| notfound#8 | `/404 (not-found)` | How much do OKIKO HIGH's services cost? | `src/content/not-found.ts, src/app/not-found.tsx` | Owner decision: FAQ section removed from the 404 page. Six of the eight copied hub content (D13). |

## 3. Rewritten items

### home#1 - `/`

- **File:** `src/content/home.ts`
- **Reason:** Dropped 'for local and service-based businesses' (docs/01 states worldwide coverage and does not call the audience local).
- **Question (unchanged):** What does OKIKO HIGH Digital Marketing Agency do?
- **Before:** OKIKO HIGH provides digital marketing, marketing automation, and software-as-a-service solutions for local and service-based businesses. The work is organized into six services: website design, Google Business Profile management, review management, AI website chatbots, an AI receptionist for inbound calls, and text and email automation. Each has its own page explaining scope and limits.
- **After:** OKIKO HIGH provides digital marketing, marketing automation, and software-as-a-service solutions. The work is organized into six services: website design, Google Business Profile management, review management, AI website chatbots, an AI receptionist for inbound calls, and text and email automation. Each has its own page explaining scope and limits.

### home#3 - `/`

- **File:** `src/content/home.ts`
- **Reason:** Removed the reference to consent rules for calls and texts (legal); now distinct from the other worldwide answers.
- **Question (unchanged):** Does OKIKO HIGH work with businesses outside the United States?
- **Before:** OKIKO HIGH states that it serves clients worldwide. How a service works can still depend on your region, such as which platform features are available and which consent rules apply to calls and texts, so those points are checked when your project is scoped.
- **After:** OKIKO HIGH states that it serves clients worldwide. How a service works can depend on which platform features are available in your region, so that is checked when your project is scoped.

### industries#6 - `/industries`

- **File:** `src/content/industries/hub.ts`
- **Reason:** Made audience-specific and removed the consent-rules reference (docs/01: same worldwide coverage applies to each audience).
- **Question before:** Does OKIKO HIGH work with businesses outside one city or country?
- **Question after:** Does the same worldwide coverage apply to every industry?
- **Before:** OKIKO HIGH states that it serves clients worldwide. How a service works can still depend on your region, for example which platform features are available and which consent rules apply to calls and texts, so those points are checked when your project is scoped.
- **After:** Yes. OKIKO HIGH states that it serves clients worldwide, and the same coverage applies to each of the four industries. The industry pages do not describe different regions.

### industries#2 - `/industries`

- **File:** `src/content/industries/hub.ts`
- **Reason:** Removed firm-size ranges ('1 to 25 people', '1 to 10 providers') that are not in docs/01.
- **Question (unchanged):** Which businesses are included in each industry?
- **Before:** Home services covers HVAC, plumbing, landscaping, general contracting, cleaning, and related businesses. Professional services covers law, accounting, consulting, financial advice, and similar firms of about 1 to 25 people. Property management and real estate covers property managers, landlords, rental operators, and real estate teams. Healthcare, dental and med spa covers practices of about 1 to 10 providers.
- **After:** Home services covers HVAC, plumbing, landscaping, general contracting, cleaning, and related businesses. Professional services covers law, accounting, consulting, financial advice, and similar firms. Property management and real estate covers property managers, landlords, rental operators, and real estate teams. Healthcare, dental and med spa covers healthcare, dental, and med spa practices.

### services#9 - `/services`

- **File:** `src/content/services/hub.ts`
- **Reason:** Made service-specific and removed the consent-rules reference.
- **Question before:** Does OKIKO HIGH work with businesses outside one city or country?
- **Question after:** Are all six services available outside one city or country?
- **Before:** OKIKO HIGH states that it serves clients worldwide. How a service works can still depend on your region, for example which platform features are available and which consent rules apply to calls and texts, so those points are checked when your project is scoped.
- **After:** OKIKO HIGH states that it serves clients worldwide. Whether a particular service fits your project, including which platform features are available in your region, is confirmed when your project is scoped.

### services#4 - `/services`

- **File:** `src/content/services/hub.ts`
- **Reason:** Removed 'and applicable consent rules' (legal mention).
- **Question (unchanged):** Can these services work together?
- **Before:** Yes. They can connect along the customer path: a Google Business Profile helps customers find you, your website explains the offer, a chatbot can answer questions before an inquiry, an AI receptionist can handle calls, and text and email workflows follow up. These connections are optional, scoped separately, and depend on platform compatibility and applicable consent rules.
- **After:** Yes. They can connect along the customer path: a Google Business Profile helps customers find you, your website explains the offer, a chatbot can answer questions before an inquiry, an AI receptionist can handle calls, and text and email workflows follow up. These connections are optional, scoped separately, and depend on platform compatibility.

### faq#26 - `/faq`

- **File:** `src/content/faq.ts`
- **Reason:** Replaced a near-copy of the About answer with a short answer and descriptive links (D4).
- **Question (unchanged):** What does OKIKO HIGH do?
- **Before:** OKIKO HIGH combines digital marketing strategy with automation to help businesses connect with customers and simplify marketing and customer-management tasks.
- **After:** OKIKO HIGH is a digital marketing agency with six services, described on the services page. The About page explains the agency's approach and mission.

### faq#27 - `/faq`

- **File:** `src/content/faq.ts`
- **Reason:** Replaced a near-copy of the home answer with a short answer and a link to the industries page (D5).
- **Question (unchanged):** What types of businesses does OKIKO HIGH work with?
- **Before:** OKIKO HIGH currently serves four kinds of business: home-service businesses, such as HVAC, plumbing, landscaping, general contracting, and cleaning companies; professional services firms; property management and real estate businesses; and healthcare, dental, and med spa practices. Each has its own industry page, and those pages describe a proposed approach, not client work or results. Other industries are evaluated separately.
- **After:** OKIKO HIGH currently serves four kinds of business. The industries page describes each one and how the services apply, as a proposed approach and not client work or results.

### faq#2 - `/faq`

- **File:** `src/content/faq.ts`
- **Reason:** Replaced a near-copy of the website design answer with a short answer and a link (D9).
- **Question (unchanged):** Do we need a new website, or can we improve the one we have?
- **Before:** Start with an audit of your existing website and requirements. A redesign makes sense when the current platform can meet your goals. Rebuilding may be more practical when its structure or capabilities cannot. A rebuild also needs care, because a poorly managed one can disrupt search visibility.
- **After:** Start with an audit of your existing website and requirements. Whether to improve the current site or rebuild it depends on what the platform can do. The website design page explains how to decide.

### faq#4 - `/faq`

- **File:** `src/content/faq.ts`
- **Reason:** Replaced a near-copy of the Google Business Profile answer with a short answer and a link (D9).
- **Question (unchanged):** What does Google Business Profile optimization include?
- **Before:** It commonly includes maintaining business information, optimizing categories and services, publishing approved content, monitoring the profile, and reporting customer actions. Website work, citations, review-request campaigns, call tracking, and suspension assistance may be separate, so the agreed scope should list them explicitly.
- **After:** It commonly includes maintaining business information, categories and services, approved posts, monitoring, and reporting. The Google Business Profile management page lists what is included and what may be separate.

### faq#21 - `/faq`

- **File:** `src/content/faq.ts`
- **Reason:** Replaced a near-copy of the review management answer with a short answer and a link (D9). Dropped the Google/Yelp rules detail.
- **Question (unchanged):** How can we request honest customer feedback and reviews?
- **Before:** Ask eligible customers for honest feedback after an agreed completion event, without rewards, pressure, or prescribed wording. Follow each platform's rules, because they differ: Google permits neutral requests, while Yelp says not to ask. Incentives for reviews are not allowed.
- **After:** Ask eligible customers for honest feedback after an agreed completion event, without rewards, pressure, or prescribed wording. The review management page explains how to do it and where each platform's rules differ.

### faq#31 - `/faq`

- **File:** `src/content/faq.ts`
- **Reason:** Removed 'No standard setup time has been confirmed' (internal status wording).
- **Question (unchanged):** How long does setup take?
- **Before:** A timeline is set after the scope, system access, integrations, content approvals, and testing needs are understood. No standard setup time has been confirmed, so none is published.
- **After:** A timeline is set after the scope, system access, integrations, content approvals, and testing needs are understood. OKIKO HIGH does not publish a standard setup time.

### faq#33 - `/faq`

- **File:** `src/content/faq.ts`
- **Reason:** Removed 'have not been confirmed' (internal status wording).
- **Question (unchanged):** What support does OKIKO HIGH provide after launch?
- **Before:** Ongoing support is defined in your written scope. Support hours and response commitments have not been confirmed or published, so confirm them in the scope before you agree to work.
- **After:** Ongoing support is defined in your written scope. OKIKO HIGH does not publish support hours or response commitments on this site, so confirm them in the scope before you agree to work.

### faq#34 - `/faq`

- **File:** `src/content/faq.ts`
- **Reason:** Reused the ownership wording already on the Terms of Service page; removed 'have not been finalized or published yet'.
- **Question (unchanged):** Who owns our websites, accounts, phone numbers, and data?
- **Before:** Ownership depends on the agreement and the platform. OKIKO HIGH's ownership terms have not been finalized or published yet, so confirm domain and account control, content and code rights, phone number ownership, and data export before you agree to a project.
- **After:** OKIKO HIGH has not published ownership or exit terms on this site. Who owns your website, accounts, content, phone numbers, and data, and what can be exported if you leave, are settled in writing when the project is scoped. Ask before you agree to a project.

### faq#36 - `/faq`

- **File:** `src/content/faq.ts`
- **Reason:** Reused the exit wording already on the Terms of Service page; removed 'have not been finalized'.
- **Question (unchanged):** What happens if I stop working with OKIKO HIGH?
- **Before:** Exit terms have not been finalized or published yet. Before agreeing to work, confirm what happens to your website, accounts, and phone numbers, who keeps access to each, and what data can be exported.
- **After:** Cancellation and exit terms are not stated on this website. They are confirmed in writing when your project is scoped, so ask what happens to your website, accounts, phone numbers, and data if you stop.

### gbp#6 - `/services/google-business-profile-optimization`

- **File:** `src/content/services/google-business-profile.ts`
- **Reason:** Removed 'The research did not establish...' and rewrote from the Google-controls-ranking statement already on the page.
- **Question (unchanged):** Do regular posts improve local rankings?
- **Before:** Posts can help customers find current information, offers, and events. The research did not establish a universal ranking improvement from posting on a particular schedule, so posting frequency should not be sold as a ranking guarantee.
- **After:** Posts can help customers find current information, offers, and events. Posting on a schedule should not be sold as a ranking guarantee, because Google controls local rankings.

### reputation#4 - `/services/reputation-management`

- **File:** `src/content/services/reputation-management.ts`
- **Reason:** Removed the sentence about privacy-reviewed approaches for healthcare or legal matters (legal/compliance).
- **Question (unchanged):** What should I say to an angry reviewer?
- **Before:** For an ordinary service business, try something like: "I'm sorry to hear you were disappointed. Please contact [name or contact] so we can understand your concerns and discuss next steps." Keep it calm, avoid public argument, and refer to what the reviewer actually said. Use a privacy-reviewed approach for healthcare or legal matters.
- **After:** For an ordinary service business, try something like: "I'm sorry to hear you were disappointed. Please contact [name or contact] so we can understand your concerns and discuss next steps." Keep it calm, avoid public argument, and refer to what the reviewer actually said.

### reputation#8 - `/services/reputation-management`

- **File:** `src/content/services/reputation-management.ts`
- **Reason:** Removed 'in our research' and 'legally appropriate'.
- **Question (unchanged):** Is SMS or email better for review requests?
- **Before:** No universal published-review conversion advantage was verified in our research. Choose a legally appropriate channel based on customer preference, and track delivery, clicks, published reviews, and opt-outs separately. Review tools commonly support both channels.
- **After:** Choose the channel based on customer preference, and track delivery, clicks, published reviews, and opt-outs separately. Review tools commonly support both channels.

### reputation#10 - `/services/reputation-management`

- **File:** `src/content/services/reputation-management.ts`
- **Reason:** Removed the sentence that healthcare providers 'must avoid confirming patient status' (privacy compliance).
- **Question (unchanged):** Should I respond to positive reviews?
- **Before:** Yes, where an appropriate reply is possible: briefly thank the reviewer and acknowledge the feedback without repetitive sales language. Healthcare providers must avoid confirming patient status, even in positive replies.
- **After:** Yes, where an appropriate reply is possible: briefly thank the reviewer and acknowledge the feedback without repetitive sales language.

### reputation#12 - `/services/reputation-management`

- **File:** `src/content/services/reputation-management.ts`
- **Reason:** Removed the patient-information and legal-client confidentiality sentence and its American Dental Association source.
- **Question (unchanged):** Can AI write our review responses?
- **Before:** AI can produce a draft, but a person should check accuracy, tone, privacy, and sensitive allegations before it is published. Automated replies are particularly risky where patient information or legal-client confidentiality is involved.
- **After:** AI can produce a draft, but a person should check accuracy, tone, privacy, and sensitive allegations before it is published.

### chatbots#8 - `/services/ai-chatbots`

- **File:** `src/content/services/ai-chatbots.ts`
- **Reason:** Removed 'applicable legal and provider requirements' (legal mention).
- **Question (unchanged):** Can a website conversation continue by text?
- **Before:** Supported systems can route follow-up into messaging workflows. Customer permission, message purpose, and applicable legal and provider requirements must be checked before sending.
- **After:** Supported systems can route follow-up into messaging workflows. The message purpose and the customer's permission need to be agreed before anything is sent.

### professional-services#1 - `/industries/professional-services`

- **File:** `src/content/industries/professional-services.ts`
- **Reason:** Restricted to the professions in docs/01 (law, accounting, consulting, financial advice, similar firms); removed bookkeeping, HR, insurance, architecture and engineering.
- **Question (unchanged):** Which professional firms is this page for?
- **Before:** This page addresses the needs of law, accounting and bookkeeping, HR and consulting, financial-advisory, insurance, architecture, and engineering firms. Inclusion here does not establish that OKIKO HIGH has served every profession; relevant experience and service fit should be confirmed directly.
- **After:** This page addresses the needs of law, accounting, consulting, and financial-advisory firms, and similar professional services firms. Inclusion here does not establish that OKIKO HIGH has served every profession; relevant experience and service fit should be confirmed directly.

### professional-services#9 - `/industries/professional-services`

- **File:** `src/content/industries/professional-services.ts`
- **Reason:** Removed 'professional rules may add further restrictions' (legal/compliance).
- **Question (unchanged):** Can every firm use Google Business Profile and automated review requests?
- **Before:** No. Google excludes online-only businesses from Business Profile eligibility and prohibits selectively requesting positive reviews; professional rules may add further restrictions.
- **After:** No. Google excludes online-only businesses from Business Profile eligibility and prohibits selectively requesting positive reviews.

### professional-services#10 - `/industries/professional-services`

- **File:** `src/content/industries/professional-services.ts`
- **Reason:** Replaced 'pricing model is TBD' with the existing pricing wording used on other pages.
- **Question (unchanged):** What does support from OKIKO HIGH cost?
- **Before:** OKIKO HIGH's pricing model is TBD. Before approval, a proposal should identify the selected scope and any implementation, software, usage, integration, or ongoing-support costs.
- **After:** OKIKO HIGH does not publish prices on this site. Any proposal should identify the selected scope and any implementation, software, usage, integration, or ongoing-support costs.

### terms#12 - `/terms-of-service`

- **File:** `src/content/terms-of-service.ts`
- **Reason:** Removed 'or the law change' (legal mention).
- **Question (unchanged):** How will I know if these terms change?
- **Before:** We update this page and the date near the top shows when it was last updated. We may change these terms as our services or the law change. A signed agreement for your project is not rewritten by a change to this page.
- **After:** We update this page and the date near the top shows when it was last updated. We may change these terms as our services change. A signed agreement for your project is not rewritten by a change to this page.

### privacy#1 - `/privacy-policy`

- **File:** `src/content/privacy-policy.ts`
- **Reason:** Removed 'where the law requires it, ask for your consent first' (legal mention).
- **Question (unchanged):** Does the OKIKO HIGH website use cookies or tracking tools?
- **Before:** At the time of this update, the OKIKO HIGH website does not use analytics tools, advertising pixels, or advertising cookies. Our hosting provider may still process standard technical information, such as an IP address, to deliver the site and keep it secure. If we add analytics or advertising tools, we will update this policy and, where the law requires it, ask for your consent first.
- **After:** At the time of this update, the OKIKO HIGH website does not use analytics tools, advertising pixels, or advertising cookies. Our hosting provider may still process standard technical information, such as an IP address, to deliver the site and keep it secure. If we add analytics or advertising tools, we will update this policy.

### combo-ai#7 - `/industries/home-services/ai-receptionist`

- **File:** `src/content/combos/home-services/ai-receptionist.ts`
- **Reason:** Removed the sentence about no sourced share of calls (research-process wording).
- **Question (unchanged):** How do I decide which calls are emergencies and which are scheduled?
- **Before:** You write the rule. Start with danger (a gas smell, smoke, sparking, anyone at risk), then urgent (an active leak, no heat or cooling), then scheduled. No sourced share of home-service calls falls into each group, so test the rule on your own calls and adjust it.
- **After:** You write the rule. Start with danger (a gas smell, smoke, sparking, anyone at risk), then urgent (an active leak, no heat or cooling), then scheduled. Test the rule on your own calls and adjust it.

### receptionist#9 - `/services/ai-receptionist`

- **File:** `src/content/services/ai-receptionist.ts`
- **Reason:** Softened a vendor-capability statement ('Platforms provide...') to what a setup can include, since tested integrations are TBD in docs/01.
- **Question (unchanged):** Will I receive transcripts and call summaries?
- **Before:** Platforms provide call logs with transcripts and summaries. Whether these are enabled, who can access them, and how long they are kept should be defined for the implementation, particularly when calls contain sensitive information.
- **After:** Call logs with transcripts and summaries can be part of a voice AI setup, depending on the platform. Whether they are enabled, who can access them, and how long they are kept should be defined for the implementation, particularly when calls contain sensitive information.

### receptionist#10 - `/services/ai-receptionist`

- **File:** `src/content/services/ai-receptionist.ts`
- **Reason:** Replaced 'Pricing and service packages have not been confirmed yet' with the pricing wording used on the other service pages.
- **Question (unchanged):** How much will OKIKO HIGH's AI receptionist service cost?
- **Before:** Pricing and service packages have not been confirmed yet. Setup, recurring service, usage, telephony, integrations, maintenance, and any human-backup costs need to be defined before pricing is published.
- **After:** OKIKO HIGH does not publish prices for this service on this site. Cost depends on scope, such as setup, recurring service, usage, telephony, integrations, maintenance, and any human-backup needs. Request a scoped quote through the contact page.

## 4. Legal claims remaining outside FAQs

Body copy was not changed. This list comes from a keyword scan (HIPAA, BAA, TCPA, FCC, FTC, ADA, WCAG, CAN-SPAM, GDPR, A2P/10DLC, law/legal, consent, regulat*, complian*, jurisdiction, fair housing, lawyer/attorney, state names tied to statutes, and a few privacy/advertising-rules phrases) over `src/content`, `src/app`, `src/components` and `src/data`, skipping comments, FAQ arrays, and citation `label:` lines. Keyword scans can miss indirect phrasing, so treat it as a floor, not a full inventory. Line numbers are in the files as they stand now. Shared components had no hits.

**124 occurrences.** The privacy policy and terms of service are legal documents by nature; their occurrences are included for completeness.

### /industries/professional-services

- `src/app/industries/professional-services/page.tsx:273` - `"No example is given here. Producer licensing and carrier approvals need their own review first, and financial-advisor compliance language should not be reused."}`
- `src/content/industries/professional-services.ts:70` - `"law, accounting and bookkeeping, HR and consulting, financial advice, insurance, architecture, and engineering";`
- `src/content/industries/professional-services.ts:139` - `lead: "US law-firm research: in Clio's 2024 study of 500 US law firms, 40% answered the call and 33% responded to the email.",`
- `src/content/industries/professional-services.ts:141` - `"This is legal-sector evidence from one study year. It does not describe accounting, consulting, financial, insurance, architecture, or engineering firms, and it does not show how many clients were lost.",`
- `src/content/industries/professional-services.ts:163` - `"Confidentiality, conflict checks, and supervision kept with attorneys",`
- `src/content/industries/professional-services.ts:167` - `"A referred prospect requests a callback through a short form. A named intake lead follows up and the attorney decides next steps.",`
- `src/content/industries/professional-services.ts:231` - `"ABA Formal Opinion 512 addresses confidentiality and supervision for lawyers using AI tools. SEC guidance addresses registration-specific review of adviser testimonials. Neither applies to the other professions listed, which need their own board, insurance...`
- `src/content/industries/professional-services.ts:247` - `title: "Solo estate-planning attorney",`
- `src/content/industries/professional-services.ts:249` - `body: "A referred prospect visits after hours. The site explains fit and process, and a minimal form requests a callback without soliciting a detailed confidential narrative. Attorney advertising, solicitation, and confidentiality rules are set by each stat...`
- `src/content/industries/professional-services.ts:310` - `"Supports permitted follow-up and reminders: inquiry assignment, acknowledgment, and consultation reminders, sent only under rules and consent your firm has approved.",`
- `src/content/industries/professional-services.ts:429` - `"Legal, financial, tax, insurance, architectural, or engineering advice",`
- `src/content/industries/professional-services.ts:433` - `"Regulated content that has not been approved and reviewed",`
- `src/content/industries/professional-services.ts:444` - `"ABA Formal Opinion 512 addresses confidentiality, communication, and supervision when lawyers use AI tools, and HighLevel's voice-agent deployment guidance calls for testing fallback behavior. Identifying an AI assistant and offering a human route is a rec...`
- `src/content/industries/professional-services.ts:455` - `"Map existing software, jurisdictions, and approval requirements",`
- `src/content/industries/professional-services.ts:488` - `"This page does not promise legal compliance, rankings, revenue, or uninterrupted handling. Worldwide service coverage does not mean every workflow is permitted in every country: messaging, calling, recording, and data handling are reviewed for the places y...`

### /services/google-business-profile-optimization

- `src/app/services/google-business-profile-optimization/page.tsx:516` - `service with its own consent requirements, described under{" "}`
- `src/app/services/google-business-profile-optimization/page.tsx:517` - `<Link href="/services/sms-email-automation" className={linkClass}>consent-aware follow-up</Link>.`

### /services/reputation-management

- `src/app/services/reputation-management/page.tsx:389` - `<h3 className="text-lg font-semibold">The FTC review rule</h3>`
- `src/app/services/reputation-management/page.tsx:407` - `<h3 className="text-lg font-semibold">Consent, privacy, and worldwide delivery</h3>`
- `src/app/services/reputation-management/page.tsx:416` - `<SourceLinks sources={[sources.fcc, sources.canSpam]} />`
- `src/content/services/reputation-management.ts:137` - `body: "Review your review profiles, permissions, existing reviews, customer data, and consent records.",`
- `src/content/services/reputation-management.ts:148` - `clientInput: "Which channels you have consent to use.",`
- `src/content/services/reputation-management.ts:190` - `"Documented consent for the channels used",`
- `src/content/services/reputation-management.ts:191` - `"A named person for threats, safety concerns, legal allegations, and urgent complaints",`
- `src/content/services/reputation-management.ts:202` - `"Legal representation",`
- `src/content/services/reputation-management.ts:271` - `body: "Consent rules depend on the purpose of the message and the technology used. We look for documented consent, honor opt-outs, and do not treat a phone number on file as unlimited permission to send marketing messages. Your counsel should approve the ex...`
- `src/content/services/reputation-management.ts:306` - `body: "Do not disclose private details, even if the reviewer shared them first. Regulated sectors need a separate privacy review.",`
- `src/content/services/reputation-management.ts:320` - `"Legal allegations",`
- `src/content/services/reputation-management.ts:322` - `"Anything involving private or regulated personal information",`
- `src/content/services/reputation-management.ts:346` - `"The customer's preferred channel, only where you have consent",`
- `src/content/services/reputation-management.ts:438` - `limit: "Integrations, consent, and duplicate suppression still need to be confirmed.",`

### /services/website-design

- `src/app/services/website-design/page.tsx:628` - `<SourceLinks sources={[sources.fcc]} />`
- `src/content/services/website-design.ts:152` - `"Legal policy drafting",`
- `src/content/services/website-design.ts:232` - `body: "Testing is defined against WCAG 2.2 AA: keyboard operation, visible focus, forms, contrast, zoom, and target size. Automated scans are paired with manual checks.",`
- `src/content/services/website-design.ts:389` - `body: "Text and email workflows follow up under appropriate consent and communication rules.",`
- `src/content/services/website-design.ts:459` - `"HHS guidance says regulated entities must not use tracking technologies in ways that cause impermissible disclosures of protected health information, and a cookie banner or privacy notice does not replace a HIPAA authorization. No website is \"HIPAA certif...`

### /industries/home-services/ai-receptionist

- `src/content/combos/home-services/ai-receptionist.ts:294` - `body: "Some places require it and some callers will ask. Maine's statute covers chatbots used in trade, including voice, when a reasonable consumer could be misled. Saying so up front is simple and avoids the question.",`
- `src/content/combos/home-services/ai-receptionist.ts:299` - `body: "Federal law needs one party's consent, but several states need every party's. Check the states your callers are in before you record or transcribe.",`
- `src/content/combos/home-services/ai-receptionist.ts:356` - `"The rules below are a summary of the sources cited, not legal advice. They change, and they differ by state. Ask a lawyer what applies to your business.",`
- `src/content/combos/home-services/ai-receptionist.ts:363` - `title: "Recording consent",`
- `src/content/combos/home-services/ai-receptionist.ts:364` - `body: "Federal law needs one party's consent. Justia's survey (reviewed September 2024) labels California, Florida, Maryland, Massachusetts, New Hampshire, Pennsylvania, and Washington as all-party states, and describes Illinois and Montana as generally all...`
- `src/content/combos/home-services/ai-receptionist.ts:365` - `checkWith: "A lawyer, for the states your callers are in",`
- `src/content/combos/home-services/ai-receptionist.ts:371` - `body: "No federal rule was found for AI answering inbound calls. Maine's statute covers chatbots used in trade. Utah requires disclosure when a consumer clearly asks, and proactive disclosure for high-risk uses in regulated occupations. California's bot law...`
- `src/content/combos/home-services/ai-receptionist.ts:372` - `checkWith: "A lawyer, and the current state statutes",`
- `src/content/combos/home-services/ai-receptionist.ts:378` - `body: "The FCC ruled in February 2024 that AI-generated voices count as an artificial voice under the TCPA, so outbound calls need prior express consent (written for telemarketing). The FCC's 2024 proposal on AI call disclosure is aimed at outbound calls, a...`
- `src/content/combos/home-services/ai-receptionist.ts:379` - `checkWith: "A lawyer, before any outbound AI calling",`
- `src/content/combos/home-services/ai-receptionist.ts:385` - `body: "Stop words must be honored and processed within 10 business days. The wider revoke-all rule was delayed to January 31, 2027, as reported by TCPAWorld and Convoso (FCC order DA 26-12). US long-code texting needs A2P 10DLC registration through your pro...`
- `src/content/combos/home-services/ai-receptionist.ts:386` - `checkWith: "Your messaging provider and a lawyer",`
- `src/content/combos/home-services/ai-receptionist.ts:393` - `checkWith: "A lawyer, and your vendor's data terms",`
- `src/content/combos/home-services/ai-receptionist.ts:403` - `note: "Not legal advice. The revoke-all date comes from two trade reports of an FCC order, and some state rules were read from summaries, so confirm them on the official sites before you rely on them.",`

### /industries/home-services/website-design

- `src/content/combos/home-services/website-design.ts:309` - `title: "WCAG 2.2",`
- `src/content/combos/home-services/website-design.ts:310` - `body: "WCAG 2.2 is the current W3C Recommendation, published 12 December 2024. Its new Level AA criteria include Focus Not Obscured (Minimum), Dragging Movements, Target Size (Minimum), and Accessible Authentication (Minimum).",`
- `src/content/combos/home-services/website-design.ts:314` - `title: "Legal exposure varies",`
- `src/content/combos/home-services/website-design.ts:315` - `body: "Web accessibility lawsuits are filed regularly in the US, and one event listing citing UsableNet reports more than 5,000 ADA website lawsuits filed in 2025. Legal obligations vary, so ask a lawyer what applies to your business. This page does not des...`

### /

- `src/content/home.ts:52` - `body: "Approved messages go out where consent allows.",`

### /industries/healthcare

- `src/content/industries/healthcare.ts:127` - `body: "No part of the agency, and no connected feature, is described here as HIPAA compliant. This page primarily addresses U.S. practices, and it is not legal advice.",`
- `src/content/industries/healthcare.ts:132` - `"OKIKO HIGH serves clients worldwide, but worldwide service coverage does not mean every workflow is legally or operationally available in every country. Privacy, communications, and advertising rules are reviewed for the places your practice and patients a...`
- `src/content/industries/healthcare.ts:199` - `"A separate design with stronger privacy and crisis handling. Crisis language triggers your approved emergency instructions and a person, not automated counseling, and general chatbot copy is not reused.",`
- `src/content/industries/healthcare.ts:318` - `summary: "One consent-reviewed administrative workflow, plus careful public communication.",`
- `src/content/industries/healthcare.ts:354` - `"A bounded first workflow: acknowledgments, callback queues, and follow-up that respect the consent rules you approve. Reminders already in your software are used first where they work.",`
- `src/content/industries/healthcare.ts:384` - `"Considered last, as overflow rather than a replacement for staff. It needs tested consent, recording, scheduling, and escalation behavior, and it does not handle clinical questions or emergencies.",`
- `src/content/industries/healthcare.ts:439` - `next: "Requests route to the correct provider and location with privacy-conscious notifications. Crisis language triggers your approved emergency instructions and human escalation, not automated counseling.",`
- `src/content/industries/healthcare.ts:448` - `body: "Examples to evaluate: Dentrix, Eaglesoft, and Open Dental. Confirm the exact edition and authorized access first, and do not treat Dentrix Core and Ascend as the same product. Open Dental documents an API with patient and appointment resources and ad...`
- `src/content/industries/healthcare.ts:460` - `body: "Verify the exact version, permissions, which data has to move, whether the workflow sends an appointment request or books directly, how bookings are reconciled, who is alerted when a sync fails, and which vendors need a BAA.",`
- `src/content/industries/healthcare.ts:472` - `"Open Dental publishes an appointment API and advises developer BAAs, and Jane describes an approval-based partner program that is still evolving. Those describe the products, not an OKIKO HIGH integration. If direct booking cannot be done safely, the workf...`
- `src/content/industries/healthcare.ts:482` - `"Sending approved acknowledgments and reminders under consent rules you have reviewed",`
- `src/content/industries/healthcare.ts:501` - `lead: "Whether HIPAA applies depends on the organization, not on its label.",`
- `src/content/industries/healthcare.ts:503` - `"HIPAA protects identifiable health information held or transmitted by covered entities and business associates. A practice, an agency, and each connected vendor need their own review, and a name alone is not automatically protected health information in ev...`
- `src/content/industries/healthcare.ts:517` - `body: "Determine HIPAA applicability, data flows, business associate agreements, communication consent, and recording rules.",`
- `src/content/industries/healthcare.ts:545` - `lead: "HighLevel says its accounts are not HIPAA compliant by default.",`
- `src/content/industries/healthcare.ts:547` - `"Its documentation describes an optional HIPAA package that requires a signed business associate agreement and location-level enablement. The practice, the agency, and each connected vendor still have their own obligations, so every connected feature is rev...`
- `src/content/industries/healthcare.ts:557` - `"Blanket HIPAA-compliance assurances",`
- `src/content/industries/healthcare.ts:614` - `title: "Consent for contact and messages",`
- `src/content/industries/healthcare.ts:615` - `body: "A request for contact is kept separate from optional promotional text or email consent. Channel-specific consent language and withdrawal handling need legal review.",`
- `src/content/industries/healthcare.ts:620` - `body: "Recording and transcription notices are reviewed by jurisdiction, AI-generated voice calls are reviewed under TCPA, and applicable AI disclosure rules are checked.",`
- `src/content/industries/healthcare.ts:642` - `lead: "HIPAA permission for reminders does not settle every messaging rule.",`
- `src/content/industries/healthcare.ts:644` - `"HHS says appointment reminders can be treatment communications that do not need HIPAA authorization. The FCC applies TCPA restrictions to AI-generated voices, and consent depends on the call, so marketing, reminders, and inbound assistance are reviewed sep...`

### /industries/home-services

- `src/content/industries/home-services.ts:374` - `"Texting requirements depend on the purpose of the message, consent, jurisdiction, and opt-out handling, and carrier policies apply as well.",`
- `src/content/industries/home-services.ts:383` - `"Messaging requirements vary by purpose and by the recipient's jurisdiction.",`

### /industries

- `src/content/industries/hub.ts:41` - `"Law, accounting, consulting, financial advice, and similar firms of about 1 to 25 people. A credible website, discreet intake, and dependable follow-up.",`

### /industries/property-management-real-estate

- `src/content/industries/property-management-real-estate.ts:288` - `"Inquiry assignment, permitted acknowledgment, tour reminders, and follow-up that does not depend on someone remembering. Messages go out only under consent rules you have approved.",`
- `src/content/industries/property-management-real-estate.ts:439` - `"Legal notices, accounting, and trust funds",`
- `src/content/industries/property-management-real-estate.ts:453` - `"The Fair Housing Act prohibits housing discrimination on listed protected grounds, so scripts and advertising for housing contacts should be reviewed for steering and unequal information. This is a US federal baseline, local rules differ, and this page is ...`
- `src/content/industries/property-management-real-estate.ts:458` - `lead: "Automated messages do not replace legally required landlord-tenant notices.",`
- `src/content/industries/property-management-real-estate.ts:460` - `"Notice, recording, transcription, and consent rules vary by jurisdiction. Texas Property Code chapter 92 is one example of a state statute that governs landlord-tenant duties. Workflows are reviewed against the rules where your business and contacts are lo...`
- `src/content/industries/property-management-real-estate.ts:506` - `body: "Review your website, profiles, existing software, consent records, and staff handoffs.",`
- `src/content/industries/property-management-real-estate.ts:528` - `"Legal notices",`

### /privacy-policy

- `src/content/privacy-policy.ts:95` - `body: "Email or call us to ask about your information. We respond as applicable law requires.",`
- `src/content/privacy-policy.ts:190` - `"Meet legal, tax, and recordkeeping obligations, and protect our rights",`
- `src/content/privacy-policy.ts:199` - `"If we add analytics, advertising, or similar tools, we will update this policy. Where the law requires it, we will ask for your consent before they run.",`
- `src/content/privacy-policy.ts:218` - `"Review requests and replies can involve customer names, contact details, and job records from your systems, sent only through channels where you have documented consent. Private details are not disclosed in public replies, and sensitive cases go to a named...`
- `src/content/privacy-policy.ts:237` - `"Authorities or other parties, when the law requires it or when needed to protect rights, safety, or security.",`
- `src/content/privacy-policy.ts:250` - `body: "We keep information for as long as we need it for the purposes in this policy, such as responding to an inquiry, delivering agreed services, keeping business records, and meeting legal obligations. For information we handle for a client, how long it ...`
- `src/content/privacy-policy.ts:266` - `"Stop certain uses of your information, or withdraw consent you gave",`
- `src/content/privacy-policy.ts:283` - `body: "We may need to confirm your identity first, and we respond as applicable law requires.",`
- `src/content/privacy-policy.ts:304` - `body: "We may update this policy as our practices, our services, or the law change. The date near the top of this page shows when it was last updated, and we will update this page when changes materially affect how we handle your information.",`

### /services/ai-chatbots

- `src/content/services/ai-chatbots.ts:243` - `note: "Needs permission and channel compliance",`
- `src/content/services/ai-chatbots.ts:265` - `body: "OKIKO HIGH serves clients worldwide, but that does not make every channel available or lawful in every country. Channels are confirmed per project.",`

### /services/ai-receptionist

- `src/content/services/ai-receptionist.ts:99` - `"Professional advice, such as legal, financial, or medical guidance",`
- `src/content/services/ai-receptionist.ts:344` - `"Recording and transcription wording, with a consent step where required",`
- `src/content/services/ai-receptionist.ts:346` - `"Consent for any text follow-up",`
- `src/content/services/ai-receptionist.ts:442` - `lead: "The FCC has confirmed that AI-generated voices count as an \"artificial or prerecorded voice\" under the TCPA.",`
- `src/content/services/ai-receptionist.ts:444` - `"Covered calls need the called party's prior express consent. That ruling concerns covered outbound calls and is not a ban on answering inbound calls with AI, but callbacks and other outbound workflows need their own review.",`

### /services/sms-email-automation

- `src/content/services/sms-email-automation.ts:344` - `"Who handles registration, consent wording, and legal review",`
- `src/content/services/sms-email-automation.ts:368` - `"Registration is not consent",`
- `src/content/services/sms-email-automation.ts:415` - `title: "Regulated sectors",`
- `src/content/services/sms-email-automation.ts:416` - `body: "Healthcare privacy rules and housing advertising rules add requirements. We validate them separately before making any sector-specific promise.",`
- `src/content/services/sms-email-automation.ts:421` - `title: "Rules are changing",`
- `src/content/services/sms-email-automation.ts:422` - `body: "Federal consent and opt-out rules have changed recently and may change again. We keep broad, customer-friendly opt-out handling and avoid relying on newly announced permissions until they have been reviewed.",`

### /terms-of-service

- `src/content/terms-of-service.ts:55` - `body: "The website is general information about OKIKO HIGH and its services. It is not legal, medical, financial, or other professional advice.",`
- `src/content/terms-of-service.ts:76` - `"By using this website, you agree to these terms. If you do not agree, please do not use the website. Using the website, sending an inquiry, or booking an introductory call is not the same as hiring us: a paid project begins only when we have agreed a scope...`
- `src/content/terms-of-service.ts:101` - `"Use it only for lawful purposes and in line with these terms",`
- `src/content/terms-of-service.ts:113` - `"The website describes how our services can be set up. It is general information, not legal, medical, financial, tax, or other professional advice, and it is not an offer of a specific price, timeline, or result. Pages that mention laws or platform rules ar...`
- `src/content/terms-of-service.ts:138` - `"Review requests are neutral, honest, and sent only through channels where you have documented consent. We do not write fake reviews, offer incentives for reviews, filter who is asked, or promise to remove reviews, and difficult replies go to a named person...`
- `src/content/terms-of-service.ts:144` - `"Messages go only to people who have given suitable permission, and an opt-out stops messages across every workflow. You supply the consent records, and the scope names which triggers and channels apply.",`
- `src/content/terms-of-service.ts:181` - `"Follow the laws, platform rules, and professional or industry rules that apply to your business",`
- `src/content/terms-of-service.ts:185` - `"We build workflows around consent and opt-outs, but the permissions to contact your customers are yours, and agreeing to these terms does not replace the consent your customers need to give. Rules differ by country, state, and industry, so they are checked...`
- `src/content/terms-of-service.ts:197` - `body: "Firms such as law, accounting, and consulting practices have their own confidentiality, advertising, and licensing rules, and those rules vary by state and profession. Automation helps with intake and follow-up, but the professional decides what advi...`
- `src/content/terms-of-service.ts:211` - `body: "Scripts, ads, and messages for housing contacts should be reviewed against fair housing rules and state notices. Messages to tenants, owners, and buyers depend on the permissions you hold for each group.",`
- `src/content/terms-of-service.ts:218` - `"These notes summarize points the industry pages explain. They are not legal advice, and your own adviser should confirm what applies to you.";`
- `src/content/terms-of-service.ts:223` - `"An AI feature is not a professional adviser and is not an emergency service. We do not describe any workflow as HIPAA compliant or as meeting any other legal standard.",`
- `src/content/terms-of-service.ts:251` - `"We do not guarantee that any workflow meets every law or rule that applies to your business",`
- `src/content/terms-of-service.ts:254` - `"This website and its content are provided for general information, as available. To the extent the law allows, we do not promise that the website will always be available, uninterrupted, or free of errors, and we are not responsible for decisions made only...`
- `src/content/terms-of-service.ts:261` - `body: "We may update these terms as our services or the law change. The date near the top of this page shows when they were last updated. If you have a signed agreement for a project, a change here does not rewrite that agreement.",`

## 5. Owner decisions needed

1. **Legal content.** Which legal and compliance statements may return, and who reviews them: HIPAA/BAA (healthcare), AI-disclosure and call-recording law (receptionist and Home Services), texting consent and registration, FTC review rules, accessibility law, privacy-rights wording. Section 4 lists the body-copy occurrences that still carry the same claims (the healthcare, receptionist, reputation, sms and combo pages are the densest). The FAQs were cut but the body pages still say these things, so the site now has less consistency between the two.
2. **Professional services scope.** Confirm the profession list (bookkeeping, HR, insurance, architecture, engineering) and the '1-25 person' firm size. The FAQs now use only docs/01 wording; the body copy on `/industries` (`src/content/industries/hub.ts:41`) and `/industries/professional-services` (`src/content/industries/professional-services.ts:70` and the profession cards) still carries them. The '1 to 10 providers' healthcare size appeared only in the removed FAQ text.
3. **Google Business Profile automation** (removed with gbp#5): what tasks are included, and whether OKIKO HIGH offers it. Suspension assistance (gbp#7 is retained as a general answer) is also TBD in docs/01.
4. **Third-party website price range** (removed with website-design#1): restore only if the owner wants a cited external figure and the source is verified.
5. **HIPAA package/BAA availability** (removed with healthcare#4): whether OKIKO HIGH offers HighLevel's HIPAA package or signs BAAs.
6. **Ownership, exit, support and setup-time terms** are still TBD in docs/01. The /faq answers now use the Terms of Service wording ('not stated ... settled in writing when the project is scoped'). Confirm that wording is acceptable until terms exist.
7. **Duplicates removed** (worldwide, guarantees, pricing, who-we-serve, get-started): confirm you are happy with a single home for each. In particular, home no longer has pricing or guarantee FAQs, and `/about` keeps six items.
8. **Borderline FAQ items kept** (do not state or interpret a law, but touch compliance-adjacent topics; owner may want them cut too): terms#7 (not legal advice disclaimer) and terms#8 (callers should be told they are speaking with AI), /faq AI-assistant disclosure and permission mentions, property#7 (AI needs clear disclosure), professional-services#7 and #8 (source links to ABA Formal Opinion 512), professional-services#9 and the review-request answers that cite Google's review policies, and privacy#3 (contacting us is not marketing-text permission).
9. **Contact page build dependence** (audit item contact#1): the first and third answers still switch on `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`. Not changed here; confirm production always sets it.
10. **Analytics claim** (privacy#1): confirm no Cloudflare dashboard analytics or injected script is active.
11. **404 page.** The FAQ is gone; confirm no replacement help text is wanted.
12. **FAQPage markup policy** stays as is (kept on all pages that had it), per instructions.

**Audit flags not addressed (Low severity, no change made):** website-design#4 and #9 (generic ownership/exit answers), sms#4 response-time target (it already disclaims being a commitment), prof#2 and healthcare#7 (2014 and 2013 sources), about#7 (does not answer the question asked), faq#9 (answer opens with 'Possibly.'), gbp#7, receptionist#2, #5-#8 HighLevel source labels, combo-ai#8, combo-web#5 (rich results vs FAQPage markup, see S1), and the site-wide notes S2-S4. Question-template repeats across audience pages (D11) and the combo/service calendar-booking pair (D12) were left because their answers differ.

## 6. Verification results

1. **Re-scan of every FAQ source** (reloaded with Node after the edits, form endpoint set as in production; 182 items on 20 pages): no match for HIPAA, BAA, PHI, GDPR, CCPA, CAN-SPAM, TCPA, FCC, FTC, ADA, WCAG, statute, 'law'/'laws' (the only 'law' hits are the audience word 'law' on industries#2 and professional-services#1, the product name Lawmatics, and the terms#5 disclaimer), legal (terms#5 only), consent, jurisdiction, counsel, lawyer, A2P, 10DLC, regulation or compliance. Internal markers: no TBD, TODO, placeholder, 'to be confirmed', 'not been finalized/confirmed', 'our research', 'was found' or 'we found'. The only 'pending' and 'was found' hits are the ordinary words 'depending' and 'was founded'. Size ranges and the extra professions are gone from FAQ text.
2. **Visible FAQ text versus FAQPage JSON-LD**: ran `npm run build` (needed to check rendered output; it rewrites the gitignored `out/` folder), then compared every built page. All 20 pages with FAQPage markup show identical question and answer text visibly and in JSON-LD (mismatch 0). No page has markup without a visible FAQ. The 404 page has no `<details>` FAQ and no FAQPage markup. The build used no contact-form endpoint, so `/contact` shows the 'no contact form' variants of two answers in both places, as before.
3. **`npm run lint`** and **`npx tsc --noEmit`**: no errors or warnings.
4. **`npm run check:combos`**: OK (2 combo files, banned caption not found, JSON-LD checked on 20 indexable pages). **`npm run check:policy`**: OK.
5. **Em dashes**: none in the added or changed text (checked all FAQ text, the 404 comment edits and both docs edits).
6. **Not done**: no external statements were re-verified; no live site or Cloudflare checks; `git status` shows only the files listed in section 7 plus this log and the earlier audit report.

## 7. Docs updates

- `docs/04-content-and-seo-standards.md`: added three bullets under FAQ question and answer format (no legal/compliance FAQ answers without owner-approved legal review, no internal status wording in answers, one home per question).
- `docs/07-structured-data-plan.md`: added one bullet under FAQ structured data recording that removed items leave the shared content array and that the 404 page no longer has an FAQ.
- Not edited, now slightly stale: FAQ counts mentioned in `docs/02` and `docs/03` (for example 'ten questions' for audience pages, 'two-column FAQ' descriptions of the 404 page, and the 404 FAQ in docs/02 if listed). Update them when convenient.
- Code files touched: the 20 `src/content` files listed in section 2 and 3, plus `src/app/not-found.tsx` and `src/content/not-found.ts` (FAQ section and data removed; navigation, service cards and industry links kept).
