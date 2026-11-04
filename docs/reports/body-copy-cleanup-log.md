# Body-Copy Legal Cleanup Log

Date: 2026-11-03. Follows `docs/reports/faq-remediation-log.md`. Nothing was committed, pushed or deployed. The earlier FAQ remediation edits are still uncommitted and were preserved.

## 1. Summary

- Claims and elements removed from body copy: **165** (147 legal or compliance claims, 18 unconfirmed professional-services claims).
- Pages changed: **14** marketing pages (listed below). The services hub, about, contact, /faq, blog, resources, case-studies, and the shared layout, footer, schema helpers, site data and metadata needed no legal edits.
- Privacy Policy FAQ reinstated (1 item). Docs FAQ counts refreshed in `docs/03`.
- FAQ total is now **183** (182 after the previous remediation plus the reinstated item).

| Page | Legal claims removed | Professional-services claims removed |
|---|---|---|
| `/` | 1 | 0 |
| `/industries` | 0 | 2 |
| `/industries/healthcare` | 31 | 0 |
| `/industries/home-services` | 10 | 0 |
| `/industries/home-services/ai-receptionist` | 26 | 0 |
| `/industries/home-services/website-design` | 5 | 0 |
| `/industries/professional-services` | 19 | 16 |
| `/industries/property-management-real-estate` | 8 | 0 |
| `/services/ai-chatbots` | 2 | 0 |
| `/services/ai-receptionist` | 7 | 0 |
| `/services/google-business-profile-optimization` | 2 | 0 |
| `/services/reputation-management` | 16 | 0 |
| `/services/sms-email-automation` | 12 | 0 |
| `/services/website-design` | 8 | 0 |
| **Total** | **147** | **18** |

An 'item' is a sentence, clause, card, bullet, list entry, section, or unused source citation. Line numbers refer to each file as it stood **before** this step's edits (after the FAQ remediation). Removed source constants and links that only supported removed claims are included as items where the agents logged them; small deletions of unused imports and code comments are not.

**Method.** Five parallel passes over disjoint file sets edited the pages. I then ran the project checks and a rendered-HTML scan (see section 8). Where only part of a paragraph made the claim, only that sentence or clause was deleted. Where a paragraph, bullet, card or section held nothing else, the element was removed, along with headings left empty. Nothing was softened or rephrased; the only substitutions are `home.ts` ('Approved messages go out where consent allows.' now reads 'Approved messages go out.') and the reputation-management step 3 `clientInput` field, which is required and rendered (section 6).

## 2. Removed claims

Each entry: `file:line` and the removed text, verbatim (long entries are cut at 400 characters; the full text is in `git diff`).

### /

- `src/content/home.ts:52` - body: "Approved messages go out where consent allows.",

### /industries

- `src/content/industries/hub.ts:41` [professional-services] - of about 1 to 25 people
- `src/content/industries/hub.ts:57` [professional-services] - of about 1 to 10 providers

### /industries/healthcare

- `src/content/industries/healthcare.ts:33` - hhsPrivacyRule: { label: "HHS, HIPAA Privacy Rule summary", href: "https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html", },
- `src/content/industries/healthcare.ts:37` - hhsBusinessAssociates: { label: "HHS, Business Associates guidance", href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html", },
- `src/content/industries/healthcare.ts:41` - hhsAppointmentReminders: { label: "HHS, appointment reminders under HIPAA (FAQ)", href: "https://www.hhs.gov/hipaa/for-professionals/faq/are-appointment-reminders-allowed-under-hipaa-without-authorization/index.html", },
- `src/content/industries/healthcare.ts:45` - hhsNewVision: { label: "HHS OCR, New Vision Dental settlement (2022)", href: "https://www.hhs.gov/hipaa/for-professionals/compliance-enforcement/agreements/new-vision/index.html", },
- `src/content/industries/healthcare.ts:49` - highLevelHipaa: { label: "HighLevel Support, HIPAA compliance with HighLevel", href: "https://help.gohighlevel.com/support/solutions/articles/48000983084-hipaa-compliance-with-highlevel", },
- `src/content/industries/healthcare.ts:53` - fccAiVoices: { label: "FCC, TCPA and AI-generated human voices", href: "https://www.fcc.gov/document/fcc-confirms-tcpa-applies-ai-technologies-generate-human-voices", },
- `src/content/industries/healthcare.ts:124` - { icon: "file", label: "Privacy boundary", body: "No part of the agency, and no connected feature, is described here as HIPAA compliant. This page primarily addresses U.S. practices, and it is not legal advice.", },
- `src/content/industries/healthcare.ts:131` - export const scopeWorldwideNote = "OKIKO HIGH serves clients worldwide, but worldwide service coverage does not mean every workflow is legally or operationally available in every country. Privacy, communications, and advertising rules are reviewed for the places your practice and patients are located.";
- `src/content/industries/healthcare.ts:318` - One consent-reviewed administrative workflow (word 'consent-reviewed')
- `src/content/industries/healthcare.ts:354` - that respect the consent rules you approve
- `src/content/industries/healthcare.ts:384` - tested consent, recording
- `src/content/industries/healthcare.ts:448` - and advises developer BAAs
- `src/content/industries/healthcare.ts:460` - and which vendors need a BAA
- `src/content/industries/healthcare.ts:472` - and advises developer BAAs
- `src/content/industries/healthcare.ts:482` - under consent rules you have reviewed
- `src/content/industries/healthcare.ts:500` - export const privacyNote = { lead: "Whether HIPAA applies depends on the organization, not on its label.", detail: "HIPAA protects identifiable health information held or transmitted by covered entities and business associates. A practice, an agency, and each connected vendor need their own review, and a name alone is not automatically protected health information in every context. This page is...
- `src/content/industries/healthcare.ts:514` - { icon: "shield", title: "Review privacy and permissions", body: "Determine HIPAA applicability, data flows, business associate agreements, communication consent, and recording rules.", },
- `src/content/industries/healthcare.ts:544` - export const highLevelNote = { lead: "HighLevel says its accounts are not HIPAA compliant by default.", detail: "Its documentation describes an optional HIPAA package that requires a signed business associate agreement and location-level enablement. The practice, the agency, and each connected vendor still have their own obligations, so every connected feature is reviewed for the actual deploym...
- `src/content/industries/healthcare.ts:557` - "Blanket HIPAA-compliance assurances",
- `src/content/industries/healthcare.ts:612` - { icon: "message", title: "Consent for contact and messages", body: "A request for contact is kept separate from optional promotional text or email consent. Channel-specific consent language and withdrawal handling need legal review.", },
- `src/content/industries/healthcare.ts:617` - { icon: "headset", title: "Calls, recording, and AI disclosure", body: "Recording and transcription notices are reviewed by jurisdiction, AI-generated voice calls are reviewed under TCPA, and applicable AI disclosure rules are checked.", },
- `src/content/industries/healthcare.ts:622` - { icon: "tag", title: "Advertising and health claims", body: "Health claims, testimonials, before-and-after imagery, and med spa advertising need substantiation and a licensing review for the places you operate.", },
- `src/content/industries/healthcare.ts:627` - { icon: "globe", title: "Worldwide is not the same as everywhere", body: "This page primarily addresses U.S. practices. A practice elsewhere needs country-specific privacy, communications, and advertising review first.", },
- `src/content/industries/healthcare.ts:634` - export const reviewReplyNote = { lead: "Replying to a review with patient details has led to a federal settlement.", detail: "In 2022, HHS announced a $23,000 settlement with a dental practice after disclosures in replies to online reviews. That is one enforcement case, not a typical penalty or an expected cost. A reviewer's own disclosure does not permit the practice to confirm it.", source: s...
- `src/content/industries/healthcare.ts:641` - export const remindersLawNote = { lead: "HIPAA permission for reminders does not settle every messaging rule.", detail: "HHS says appointment reminders can be treatment communications that do not need HIPAA authorization. The FCC applies TCPA restrictions to AI-generated voices, and consent depends on the call, so marketing, reminders, and inbound assistance are reviewed separately.", sources: ...
- `src/app/industries/healthcare/page.tsx:484` - <QuickAnswer privacyNote> (HIPAA applicability note)
- `src/app/industries/healthcare/page.tsx:613` - <QuickAnswer highLevelNote> (HighLevel HIPAA/BAA note)
- `src/app/industries/healthcare/page.tsx:688` - <QuickAnswer reviewReplyNote> (HHS settlement note)
- `src/app/industries/healthcare/page.tsx:690` - <QuickAnswer remindersLawNote> (HIPAA/FCC TCPA note)
- `src/app/industries/healthcare/page.tsx:226` - scopeWorldwideNote paragraph
- `src/app/industries/healthcare/page.tsx:670` - They are draft requirements, not a substitute for a legal review of your actual practice, vendors, and the places you operate.

### /industries/home-services

- `src/content/industries/home-services.ts:359` - Match permission to the purpose of the message.
- `src/content/industries/home-services.ts:360` - Check registration, timing, and frequency requirements.
- `src/content/industries/home-services.ts:366` - Review registration, timing, and opt-out requirements for each type of message.
- `src/content/industries/home-services.ts:367` - An old record does not automatically authorize a promotional text.
- `src/content/industries/home-services.ts:372` - Being able to send a message is not the same as having permission to send it.
- `src/content/industries/home-services.ts:374` - Texting requirements depend on the purpose of the message, consent, jurisdiction, and opt-out handling, and carrier policies apply as well.
- `src/content/industries/home-services.ts:383` - Messaging requirements vary by purpose and by the recipient's jurisdiction.
- `src/content/industries/home-services.ts:43` - Twilio, SMS compliance and A2P 10DLC in the US
- `src/app/industries/home-services/page.tsx:482` - Build Customer Permission Into the Process (section removed with its steps, bullets and quick answer; the Permission jump-link was removed too)
- `src/app/industries/home-services/page.tsx:487` - Customer communication works better, and stays safer, when permission (section removed with its steps, bullets and quick answer; the Permission jump-link was removed too)

### /industries/home-services/ai-receptionist

- `src/content/combos/home-services/ai-receptionist.ts:356` - "The rules below are a summary of the sources cited, not legal advice. They change, and they differ by state. Ask a lawyer what applies to your business.",
- `src/content/combos/home-services/ai-receptionist.ts:363` - title: "Recording consent",
- `src/content/combos/home-services/ai-receptionist.ts:364` - body: "Federal law needs one party's consent. Justia's survey (reviewed September 2024) labels California, Florida, Maryland, Massachusetts, New Hampshire, Pennsylvania, and Washington as all-party states, and describes Illinois and Montana as generally all-party. It notes ambiguity or extra conditions in Delaware, Michigan, Nevada, and Connecticut.",
- `src/content/combos/home-services/ai-receptionist.ts:365` - checkWith: "A lawyer, for the states your callers are in",
- `src/content/combos/home-services/ai-receptionist.ts:370` - title: "AI disclosure",
- `src/content/combos/home-services/ai-receptionist.ts:371` - body: "No federal rule was found for AI answering inbound calls. Maine's statute covers chatbots used in trade. Utah requires disclosure when a consumer clearly asks, and proactive disclosure for high-risk uses in regulated occupations. California's bot law is written for online communication and does not mention phone calls.",
- `src/content/combos/home-services/ai-receptionist.ts:372` - checkWith: "A lawyer, and the current state statutes",
- `src/content/combos/home-services/ai-receptionist.ts:377` - title: "AI voice on outbound calls and callbacks",
- `src/content/combos/home-services/ai-receptionist.ts:378` - body: "The FCC ruled in February 2024 that AI-generated voices count as an artificial voice under the TCPA, so outbound calls need prior express consent (written for telemarketing). The FCC's 2024 proposal on AI call disclosure is aimed at outbound calls, and no final rule was found.",
- `src/content/combos/home-services/ai-receptionist.ts:379` - checkWith: "A lawyer, before any outbound AI calling",
- `src/content/combos/home-services/ai-receptionist.ts:384` - title: "Text follow-up",
- `src/content/combos/home-services/ai-receptionist.ts:385` - body: "Stop words must be honored and processed within 10 business days. The wider revoke-all rule was delayed to January 31, 2027, as reported by TCPAWorld and Convoso (FCC order DA 26-12). US long-code texting needs A2P 10DLC registration through your provider.",
- `src/content/combos/home-services/ai-receptionist.ts:386` - checkWith: "Your messaging provider and a lawyer",
- `src/content/combos/home-services/ai-receptionist.ts:391` - title: "Third-party AI vendors",
- `src/content/combos/home-services/ai-receptionist.ts:392` - body: "In Ambriz v. Google (N.D. Cal., February 2025), a motion to dismiss was denied on a wiretap claim about a vendor's AI listening to customer calls. That is a ruling on a motion, not a finding of liability.",
- `src/content/combos/home-services/ai-receptionist.ts:393` - checkWith: "A lawyer, and your vendor's data terms",
- `src/content/combos/home-services/ai-receptionist.ts:398` - title: "Emergencies",
- `src/content/combos/home-services/ai-receptionist.ts:399` - body: "For a gas smell, PHMSA guidance is to leave, call 911 from a safe place, and avoid phones and switches near the leak. An AI receptionist is not an emergency service.",
- `src/content/combos/home-services/ai-receptionist.ts:400` - checkWith: "Your gas utility and local authorities",
- `src/content/combos/home-services/ai-receptionist.ts:403` - note: "Not legal advice. The revoke-all date comes from two trade reports of an FCC order, and some state rules were read from summaries, so confirm them on the official sites before you rely on them.",
- `src/content/combos/home-services/ai-receptionist.ts:294` - body: "Some places require it and some callers will ask. Maine's statute covers chatbots used in trade, including voice, when a reasonable consumer could be misled. Saying so up front is simple and avoids the question.",
- `src/content/combos/home-services/ai-receptionist.ts:299` - body: "Federal law needs one party's consent, but several states need every party's. Check the states your callers are in before you record or transcribe.",
- `src/content/combos/home-services/ai-receptionist.ts:336` - "A link to the recording or transcript, if you keep one and the caller was told",
- `src/content/combos/home-services/ai-receptionist.ts:327` - "[Recording notice given]"
- `src/content/combos/home-services/ai-receptionist.ts:95` - plus the call rules to check
- `src/content/combos/home-services/ai-receptionist.ts:101` - and which call rules to check before you turn it on

### /industries/home-services/website-design

- `src/content/combos/home-services/website-design.ts:310` - body: "WCAG 2.2 is the current W3C Recommendation, published 12 December 2024. Its new Level AA criteria include Focus Not Obscured (Minimum), Dragging Movements, Target Size (Minimum), and Accessible Authentication (Minimum).",
- `src/content/combos/home-services/website-design.ts:315` - body: "Web accessibility lawsuits are filed regularly in the US, and one event listing citing UsableNet reports more than 5,000 ADA website lawsuits filed in 2025. Legal obligations vary, so ask a lawyer what applies to your business. This page does not describe any site as ADA compliant.",
- `src/content/combos/home-services/website-design.ts:309` - title: "WCAG 2.2",
- `src/content/combos/home-services/website-design.ts:314` - title: "Legal exposure varies",
- `src/content/combos/home-services/website-design.ts:293` - and accessibility

### /industries/professional-services

- `src/content/industries/professional-services.ts:49` - secMarketing: { label: "SEC, Investment adviser marketing compliance guide", href: "https://www.sec.gov/resources-small-businesses/small-business-compliance-guides/investment-adviser-marketing", },
- `src/content/industries/professional-services.ts:70` [professional-services] - "law, accounting and bookkeeping, HR and consulting, financial advice, insurance, architecture, and engineering";
- `src/content/industries/professional-services.ts:84` - and permitted
- `src/content/industries/professional-services.ts:84` - and permitted
- `src/content/industries/professional-services.ts:141` [professional-services] - , insurance, architecture, or engineering
- `src/content/industries/professional-services.ts:146` [professional-services] - // are illustrative. Insurance shows needs only: its producer-licensing and carrier // rules need their own review before any example is given. No card links to a // dedicated page, because none exists.
- `src/content/industries/professional-services.ts:163` - "Confidentiality, conflict checks, and supervision kept with attorneys", "State-specific advertising and solicitation review",
- `src/content/industries/professional-services.ts:70` [professional-services] - and bookkeeping
- `src/content/industries/professional-services.ts:179` [professional-services] - Inquiry routing separates ongoing bookkeeping from tax questions and sends an approved next-step message that states what onboarding involves.
- `src/content/industries/professional-services.ts:197` - "Marketing review that depends on the firm's registration", "Controls on testimonials and endorsements",
- `src/content/industries/professional-services.ts:202` - Testimonials are used only after registration-specific review.
- `src/content/industries/professional-services.ts:204` [professional-services] - { icon: "key", title: "Insurance agencies", needs: [ "Producer licensing that varies by person and place", "Carrier approvals for marketing material", "A clear line between quote requests and advice", ], workflow: null, }, { icon: "pen", title: "Architecture and engineering", needs: [ "Portfolios and project examples", "Qualifications and licensing", "RFP and proposal follow-up", "Project-fit i...
- `src/content/industries/professional-services.ts:228` - export const segmentNote = { lead: "Rules differ by profession, and this page does not claim equivalent rules across them.", detail: "ABA Formal Opinion 512 addresses confidentiality and supervision for lawyers using AI tools. SEC guidance addresses registration-specific review of adviser testimonials. Neither applies to the other professions listed, which need their own board, insurance-depart...
- `src/content/industries/professional-services.ts:249` - Attorney advertising, solicitation, and confidentiality rules are set by each state and need review before anything goes live.
- `src/content/industries/professional-services.ts:251` [professional-services] - { icon: "clipboard", title: "Four-person bookkeeping firm", summary: "Inquiry routing and approved follow-up", body: "Inquiry routing separates ongoing bookkeeping from tax questions and sends an approved next-step message. Existing clients receive neutral review invitations after eligible milestones.", },
- `src/content/industries/professional-services.ts:259` [professional-services] - Eight-person HR
- `src/content/industries/professional-services.ts:265` [professional-services] - Twelve-person
- `src/content/industries/professional-services.ts:267` - Testimonials are used only after registration-specific review, because SEC, state, and broker-dealer situations differ.
- `src/content/industries/professional-services.ts:269` [professional-services] - { icon: "pen", title: "Twenty-person architecture and engineering firm", summary: "Credentials and project-fit intake", body: "Prospects review credentials and relevant projects, then submit project type, location, and timing. Qualified opportunities enter a monitored proposal pipeline. Voice AI is optional here, not central.", },
- `src/content/industries/professional-services.ts:0` - permitted ... , sent only under rules and consent your firm has approved
- `src/content/industries/professional-services.ts:320` - , within platform and professional rules
- `src/content/industries/professional-services.ts:360` [professional-services] - , and an RFP-driven practice may gain more from credentials and proposal follow-up than from voice AI.
- `src/content/industries/professional-services.ts:429` [professional-services] - insurance, architectural, or engineering
- `src/content/industries/professional-services.ts:433` - "Regulated content that has not been approved and reviewed",
- `src/content/industries/professional-services.ts:0` - ABA Formal Opinion 512 addresses confidentiality, communication, and supervision when lawyers use AI tools, and ... Identifying an AI assistant and offering a human route is a recommended practice here, not a universal legal requirement.
- `src/content/industries/professional-services.ts:455` - jurisdictions,
- `src/content/industries/professional-services.ts:0` - legal compliance, ; Worldwide service coverage does not mean every workflow is permitted in every country: messaging, calling, recording, and data handling are reviewed for the places your firm and prospects are actually located.
- `src/app/industries/professional-services/page.tsx:132` [professional-services] - of about 1 to 25 people
- `src/app/industries/professional-services/page.tsx:0` [professional-services] - insurance, and engineering
- `src/app/industries/professional-services/page.tsx:247` [professional-services] - lg:grid-cols-3
- `src/app/industries/professional-services/page.tsx:273` - No example is given here. Producer licensing and carrier approvals need their own review first, and financial-advisor compliance language should not be reused.
- `src/app/industries/professional-services/page.tsx:278` - <QuickAnswer lead={segmentNote.lead} detail={segmentNote.detail} sources={[segmentNote.source, segmentNote.extraSource]} />
- `src/app/industries/professional-services/page.tsx:293` [professional-services] - five
- `src/app/industries/professional-services/page.tsx:0` - and regulated content gets the review it needs
- `src/app/industries/professional-services/page.tsx:0` - ABA source link

### /industries/property-management-real-estate

- `src/content/industries/property-management-real-estate.ts:49` - hudFairHousing: { label: "HUD, Fair Housing Act overview", href: "https://www.hud.gov/helping-americans/fair-housing-act-overview", }, texasPropertyCode92: { label: "Texas Property Code, chapter 92 (example of a state landlord-tenant statute)", href: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm", },
- `src/content/industries/property-management-real-estate.ts:0` - permitted ... Messages go out only under consent rules you have approved.
- `src/content/industries/property-management-real-estate.ts:366` - under the same rules
- `src/content/industries/property-management-real-estate.ts:450` - export const handoffNote = { lead: "Say when it is AI, and always offer a person.", detail: "The Fair Housing Act prohibits housing discrimination on listed protected grounds, so scripts and advertising for housing contacts should be reviewed for steering and unequal information. This is a US federal baseline, local rules differ, and this page is not legal advice.", source: sources.hudFairHousi...
- `src/content/industries/property-management-real-estate.ts:506` - consent records,
- `src/content/industries/property-management-real-estate.ts:536` - export const processNote = "Worldwide service coverage does not mean every workflow is permitted or available in every country. Messaging, calling, recording, and housing rules are reviewed for the places your business and contacts are actually located.";
- `src/app/industries/property-management-real-estate/page.tsx:566` - <QuickAnswer lead={handoffNote.lead} detail={handoffNote.detail} source={handoffNote.source} /> <QuickAnswer lead={noticesNote.lead} detail={noticesNote.detail} source={noticesNote.source} icon="file" />
- `src/app/industries/property-management-real-estate/page.tsx:630` - <p className="mt-6 max-w-3xl text-neutral-700">{processNote}</p>

### /services/ai-chatbots

- `src/content/services/ai-chatbots.ts:243` - and channel compliance
- `src/content/services/ai-chatbots.ts:265` - or lawful

### /services/ai-receptionist

- `src/content/services/ai-receptionist.ts:344` - Recording and transcription wording, with a consent step where required
- `src/content/services/ai-receptionist.ts:346` - Consent for any text follow-up
- `src/content/services/ai-receptionist.ts:438` - The FCC has confirmed that AI-generated voices count as an "artificial or prerecorded voice" under the TCPA. Covered calls need the called party's prior express consent. That ruling concerns covered outbound calls and is not a ban on answering inbound calls with AI, but callbacks and other outbound workflows need their own review.
- `src/app/services/ai-receptionist/page.tsx:500` - Recording and transcription are a separate matter with their own consent requirements, and an AI disclosure does not replace recording consent.
- `src/app/services/ai-receptionist/page.tsx:505` - This page does not claim that any workflow is HIPAA compliant.
- `src/app/services/ai-receptionist/page.tsx:526` - Recording rules vary by jurisdiction and by the circumstances of the call. [Source links: EU AI transparency guidelines; Reporters Committee recording guide.] QuickAnswer: The FCC has confirmed that AI-generated voices count as an "artificial or prerecorded voice" under the TCPA ...
- `src/app/services/ai-receptionist/page.tsx:631` - Any text follow-up after a call needs the caller's consent.

### /services/google-business-profile-optimization

- `src/app/services/google-business-profile-optimization/page.tsx:437` - Two kinds of consent: Google requires prior, specific, express consent for automated profile actions. That is separate from consent to send texts or emails or to record calls, which have their own rules.
- `src/app/services/google-business-profile-optimization/page.tsx:515` - Following up on those inquiries by text or email is a separate service with its own consent requirements, described under consent-aware follow-up.

### /services/reputation-management

- `src/content/services/reputation-management.ts:137` - body: "Review your review profiles, permissions, existing reviews, customer data, and consent records."
- `src/content/services/reputation-management.ts:148` - clientInput: "Which channels you have consent to use."
- `src/content/services/reputation-management.ts:190` - "Documented consent for the channels used",
- `src/content/services/reputation-management.ts:305` - Regulated sectors need a separate privacy review.
- `src/content/services/reputation-management.ts:321` - "Anything involving private or regulated personal information",
- `src/content/services/reputation-management.ts:344` - The customer's preferred channel, only where you have consent
- `src/content/services/reputation-management.ts:436` - Integrations, consent, and duplicate suppression still need
- `src/content/services/reputation-management.ts:267` - export const messagingNotes = [ { title: "Text messages (US)", body: "Consent rules depend on the purpose of the message and the technology used. We look for documented consent, honor opt-outs, and do not treat a phone number on file as unlimited permission to send marketing messages. Your counsel should approve the exact workflow.", }, { title: "Email (US)", body: "Commercial email needs truth...
- `src/content/services/reputation-management.ts:54` - ftcRule: { label: "FTC Consumer Reviews and Testimonials Rule: questions and answers", href: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers", },
- `src/content/services/reputation-management.ts:54` - fcc: { label: "FCC guide: stop unwanted robocalls and texts", href: "https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts", },
- `src/content/services/reputation-management.ts:54` - canSpam: { label: "FTC CAN-SPAM Act compliance guide for business", href: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business", },
- `src/content/services/reputation-management.ts:62` - adaReviews: { label: "American Dental Association guidance on responding to online reviews", href: "https://www.ada.org/resources/practice/legal-and-regulatory/managing-dental-practice-online-reviews", },
- `src/app/services/reputation-management/page.tsx:26` - messagingNotes,
- `src/app/services/reputation-management/page.tsx:455` - Automated replies are especially risky where patient information or legal-client confidentiality is involved.
- `src/app/services/reputation-management/page.tsx:456` - <SourceLinks sources={[sources.adaReviews]} />
- `src/app/services/reputation-management/page.tsx:386` - <div className="mt-8 grid gap-6 md:grid-cols-2"> <div className="rounded-lg border border-neutral-200 p-5"> <h3 className="text-lg font-semibold">The FTC review rule</h3> <p className="mt-3 text-neutral-800"> The FTC&apos;s Consumer Reviews and Testimonials Rule took effect on October 21, 2024. It covers fake reviews, incentives tied to positive or negative sentiment, and certain suppression pr...

### /services/sms-email-automation

- `src/content/services/sms-email-automation.ts:350` - export const permissionSteps = [ { icon: "key", tone: "default", title: "Consent", items: [ "Match permission to the purpose of each message", "Keep an inquiry to us separate from enrolling in ongoing promotions", "Check where historical contacts came from", ], }, { icon: "clock", tone: "included", title: "Timing", items: [ "Use the recipient's local time for quiet hours", "Register the sending...
- `src/content/services/sms-email-automation.ts:350` - export const permissionNotes = [ { icon: "star", tone: "included", title: "Review requests", body: "We ask for honest feedback after real, completed work. No incentives, and no filtering out unhappy customers.", }, { icon: "repeat", tone: "optional", title: "Reactivation", body: "An old customer record is not automatic permission for promotional texts. We check permissions and suppression recor...
- `src/content/services/sms-email-automation.ts:344` - "Who handles registration, consent wording, and legal review",
- `src/app/services/sms-email-automation/page.tsx:29` - permissionNotes,
- `src/app/services/sms-email-automation/page.tsx:29` - permissionSteps,
- `src/app/services/sms-email-automation/page.tsx:558` - <div className="rounded-lg border border-neutral-200 p-5"> <IconCardHeading icon="globe" title="Worldwide does not mean everywhere" /> <p className="mt-3 text-neutral-800"> OKIKO HIGH serves clients worldwide, but that does not make every workflow available or lawful in every country. Consent, privacy, sender registration, and number availability are confirmed per project. </p> </div>
- `src/app/services/sms-email-automation/page.tsx:575` - {/* I. Permission and opt-outs */} <PageSection id="permission" heading="Build Permission and Opt-Outs Into the Workflow" muted intro={ <p> This is a US-focused overview, not legal advice and not clearance for any country. Rules depend on the message purpose, the recipient, and the technology, and they change. A program should be reviewed by a lawyer before launch. </p> } > <ol className="grid ...
- `src/content/services/sms-email-automation.ts:53` - twilio: { label: "Twilio A2P 10DLC guidance", href: "https://www.twilio.com/docs/messaging/compliance/a2p-10dlc", },
- `src/content/services/sms-email-automation.ts:53` - ctia: { label: "CTIA Messaging Principles and Best Practices, 2023", href: "https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf", },
- `src/content/services/sms-email-automation.ts:53` - canSpam: { label: "FTC CAN-SPAM guide", href: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business", },
- `src/content/services/sms-email-automation.ts:53` - googleSender: { label: "Google email sender guidelines", href: "https://support.google.com/mail/answer/81126?hl=en", },
- `src/content/services/sms-email-automation.ts:53` - cfr: { label: "47 CFR 64.1200", href: "https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200", },

### /services/website-design

- `src/content/services/website-design.ts:47` - Source links: W3C WCAG 2.2; ADA.gov Guidance on Web Accessibility and the ADA
- `src/content/services/website-design.ts:67` - Source links: FCC TCPA applies to AI technologies that generate human voices (2024); HHS HIPAA and online tracking technologies
- `src/content/services/website-design.ts:232` - Testing is defined against WCAG 2.2 AA: keyboard operation, visible focus, forms, contrast, zoom, and target size.
- `src/content/services/website-design.ts:389` - under appropriate consent and communication rules
- `src/content/services/website-design.ts:455` - A website that handles health information needs a separate privacy review for forms, scheduling tools, chat, and tracking. HHS guidance says regulated entities must not use tracking technologies in ways that cause impermissible disclosures of protected health information, and a cookie banner or privacy notice does not replace a HIPAA authorization. No website is "HIPAA certified" by design.
- `src/app/services/website-design/page.tsx:429` - or legal immunity, and an automated scan or accessibility widget alone does not establish conformance.
- `src/app/services/website-design/page.tsx:437` - SourceLinks: W3C WCAG 2.2
- `src/app/services/website-design/page.tsx:622` - A website inquiry is not blanket permission for automated marketing calls or messages: the FCC has confirmed that AI-generated voices fall under the TCPA's artificial or prerecorded voice rules, so consent, revocation, and recording language need review for each workflow. [FCC source link]. QuickAnswer: A website that handles health information needs a separate privacy review for forms, schedul...

## 3. Reinstated FAQ

- **Question:** How do I ask OKIKO HIGH to access, correct, or delete my information?
- **Page:** `/privacy-policy` (last item of the FAQ section, same position as before).
- **File:** `src/content/privacy-policy.ts`. Restored verbatim from `git show HEAD`, including the `${siteConfig.email}`/`${siteConfig.phone}` template and `contactLinks`. The visible FAQ and the FAQPage JSON-LD both read the same array, and the build comparison shows 7 visible items and 7 JSON-LD items with exact text matches.
- **Cites laws:** it does not name a specific law or statute, but it states legal rights and duties: 'Depending on where you live, you may have rights to access, correct, or delete your information, or to limit how it is used' and 'we respond as applicable law requires'. Review it with the policy.

## 4. Professional-services removals

Removed from the industries hub and `/industries/professional-services` body copy, headings, cards, meta text and structured data (nothing remains in built HTML):

- `src/content/industries/professional-services.ts:70` - "law, accounting and bookkeeping, HR and consulting, financial advice, insurance, architecture, and engineering";
- `src/content/industries/professional-services.ts:141` - , insurance, architecture, or engineering
- `src/content/industries/professional-services.ts:146` - // are illustrative. Insurance shows needs only: its producer-licensing and carrier // rules need their own review before any example is given. No card links to a // dedicated page, because none exists.
- `src/content/industries/professional-services.ts:70` - and bookkeeping
- `src/content/industries/professional-services.ts:179` - Inquiry routing separates ongoing bookkeeping from tax questions and sends an approved next-step message that states what onboarding involves.
- `src/content/industries/professional-services.ts:204` - { icon: "key", title: "Insurance agencies", needs: [ "Producer licensing that varies by person and place", "Carrier approvals for marketing material", "A clear line between quote requests and advice", ], workflow: null, }, { icon: "pen", title: "Architecture and engineering", needs: [ "Portfolios an
- `src/content/industries/professional-services.ts:251` - { icon: "clipboard", title: "Four-person bookkeeping firm", summary: "Inquiry routing and approved follow-up", body: "Inquiry routing separates ongoing bookkeeping from tax questions and sends an approved next-step message. Existing clients receive neutral review invitations after eligible milestone
- `src/content/industries/professional-services.ts:259` - Eight-person HR
- `src/content/industries/professional-services.ts:265` - Twelve-person
- `src/content/industries/professional-services.ts:269` - { icon: "pen", title: "Twenty-person architecture and engineering firm", summary: "Credentials and project-fit intake", body: "Prospects review credentials and relevant projects, then submit project type, location, and timing. Qualified opportunities enter a monitored proposal pipeline. Voice AI is 
- `src/content/industries/professional-services.ts:360` - , and an RFP-driven practice may gain more from credentials and proposal follow-up than from voice AI.
- `src/content/industries/professional-services.ts:429` - insurance, architectural, or engineering
- `src/app/industries/professional-services/page.tsx:132` - of about 1 to 25 people
- `src/app/industries/professional-services/page.tsx:0` - insurance, and engineering
- `src/app/industries/professional-services/page.tsx:247` - lg:grid-cols-3
- `src/app/industries/professional-services/page.tsx:293` - five
- `src/content/industries/hub.ts:41` - of about 1 to 25 people
- `src/content/industries/hub.ts:57` - of about 1 to 10 providers

Also removed: 'of about 1 to 10 providers' from the Healthcare, Dental and Med Spa card on the industries hub (same kind of unconfirmed size claim; not in docs/01). What remains uses docs/01 wording only: 'law, accounting, consulting, financial advice, and similar firms'. The Accounting card on the professional-services page lost its only example workflow (it was bookkeeping-based) and the scenarios section now has three examples. To restore any of this, confirm the professions and firm sizes with the owner first.

## 5. Kept borderline items

Kept as instructed: Terms FAQ #7 (not legal advice disclaimer) and #8 (callers should be told they are speaking with AI), the AI-disclosure mentions that state no law, and the ABA Formal Opinion 512 source links on the two professional-services FAQ answers. The agents also kept the following (none names or interprets a law):

- Neutral review request rules (no incentives, no gating, no patient information in public replies) kept as non-legal practice wording.
- 'Approved secure channels' card kept.
- AI disclosure line in 'Can assist' list ('Disclosing that the visitor is talking with AI') kept; it states no law.
- Code comments mentioning HIPAA/BAA in healthcare.ts and page.tsx are not visitor-facing and were left.
- Sample SMS "Reply STOP to opt out." and "a clear opt-out" / "an opt-out is added" wording on both pages (functional how-it-works copy, no law cited)
- stopBranches / opt-out suppression, "permissions" and "suitable permission" wording on the sms page (no law cited)
- Platform rules (Google, Yelp, Angi) on reputation-management platformRows and "Google prohibits" boundaries (platform policy, not law)
- "Legal allegations" escalation item and "Legal representation" under Not included on reputation-management (service scope, not a legal claim)
- Privacy Policy link in final CTAs
- ai-chatbots: 'disclosureSample' AI-disclosure wording and page text 'Sample disclosure wording. Final wording is reviewed with you' (AI-disclosure mention that states no law).
- ai-receptionist: page sentence 'Callers should be told they are speaking with AI.' and content 'A clear AI disclosure at the start of the call' / 'Configure the AI disclosure' (no law stated).
- ai-receptionist: 'Professional advice, such as legal, financial, or medical guidance' (scope exclusion, not a legal claim) and 'Any use involving health information' / 'Health information needs a separate review of the whole processing chain before it is handled.' (no law or standard named).
- ai-receptionist content line 110: 'Any recording notice is added only where your approved setup requires it.' (no law named).
- website-design: scope exclusions 'Legal policy drafting' and 'A formal accessibility conformance audit'; 'Chat, booking, and form widgets are checked for speed, accessibility, and privacy' (quality practice; no standard named). Services hub and /services page: no legal claims found; unchanged.
- google-business-profile page: 'Not part of this service: advertising, legal advice, ...' and references to 'Google's rules/policies/guidelines' (platform policy, not law); Privacy Policy links.
- Home Services: reviewFact (Google prohibits review incentives and selectively soliciting positive reviews) kept - platform policy, not a law; also in the Home Services FAQ.
- Home Services workflow copy about permission being confirmed before reactivation messages kept - an operational condition, no law cited.
- Property Management: 'Legal notices, accounting, and trust funds' in the escalation list and 'Legal notices' / 'Trust accounting' in exclusions kept - scope exclusions that state nothing about a law.
- Property Management: canHandle line about disclosing that the visitor is talking with AI kept - AI-disclosure mention that states no law.
- Property Management and Professional Services: Google Business Profile eligibility and review-request statements kept (platform policy, not law).
- Professional Services: the ABA Formal Opinion 512 source constant and its FAQ source links kept as instructed; the ABA/SEC body-copy statements were removed.
- Code comments mentioning consent as TBD kept - not visitor-facing.
- Home, about, contact, /faq, blog, resources, case-studies, src/data and shared combo components had no other legal claims outside FAQ arrays.
- Privacy Policy links ('We use what you send to respond to your inquiry; see our Privacy Policy') on home, about, contact, faq, ContactForm and ComboPage are kept; they link to a policy and state no law.
- Both combo pages keep the provider question 'Does it tell callers it is an AI, and can you edit what it says?' and the callFlow step 'says it is an AI' (AI-disclosure mentions that state no law).
- ComboVisuals RuleCardGrid component and the RuleCards type are kept (now unused by content, still valid).
- Wireframe placeholders '[License no.]' and '[Insurance]' and the Jobber 'Safety, checks, licensing' chart row are kept (customer-priority data, not legal claims).
- Scope-exclusion wording in built pages ('legal advice', 'Legal policy drafting', 'Legal notices', 'Legal representation', 'Legal allegations', 'Professional advice, such as legal, financial, or medical guidance') kept: these say what the service does not cover.
- The Clio 2024 law-firm statistic and its 'legal-sector evidence' caveat on the professional-services page, and the audience phrase 'law, accounting, consulting, financial advice, and similar firms' (docs/01 wording), kept.
- Source labels such as 'HighLevel Support' on service pages were not touched in this step.

## 6. Owner decisions needed

1. **Keyword map dependencies on legal terms (docs/03, not edited).** No H1, title or slug depends on a legal term. Two target-keyword cluster entries do: `/services` supporting cluster 'text and email follow-up consent and opt-outs' (docs/03 line 128) and `/industries/home-services` cluster 'texting legality and permission' (line 220). The `/services/reputation-management` question clusters (line 158) include 'whether review gating is allowed' and 'whether a discount for a review is allowed'. The pages no longer carry the matching body copy, so confirm whether to keep or drop those clusters.
2. **docs/03 notes now stale (not edited, outside the count-only scope).** The professional-services row still describes six profession cards, five scenarios, the 1-25 firm size and the segment note; the two combo rows still mention the WCAG/ADA and call-rules sections and 'verify before launch' items for ADA lawsuit counts, Twilio A2P, Maine statute scope and recording rules; the healthcare row describes the HIPAA note and privacy-rule cards; the home-services row describes a permission section. docs/02 had no FAQ counts and needed no edit, but its Terms and Privacy rows still say 'FAQs'.
3. **Facts and approvals needed to restore removed content:** owner-approved legal review for any HIPAA/BAA, TCPA/FCC, A2P, call-recording, AI-disclosure, FTC review-rule, ADA/WCAG, Fair Housing, landlord-tenant and professional-ethics statements (all sections listed in section 2). Whether healthcare coverage is U.S.-only (not stated in docs/01). The profession list and firm-size ranges for professional services.
4. **Replacement wording.** The Home Services page lost its whole 'Build Customer Permission Into the Process' section and jump-link; the sms page lost its 'Build Permission and Opt-Outs Into the Workflow' section (including non-legal cards on review requests, reactivation and email sender authentication); the healthcare page lost a process step (now five steps). Decide whether non-legal replacements are wanted.
5. **Combo pages.** The AI receptionist combo lost its whole call-rules section; the website design combo lost the WCAG and ADA cards, but the section id `speed-and-accessibility` and heading 'Fast, Stable, and Usable by Everyone' remain. Rename or keep?
6. **Layout.** `/services/google-business-profile-optimization` now has one card alone in a two-column row (half width); the Accounting card on professional services has no example workflow. Pick companion content or accept.
7. **Reputation-management step 3 `clientInput`.** Changed from 'Which channels you have consent to use.' to 'Which channels you use to reach customers.' because the field is required and rendered. Confirm the wording.
8. **Research-process wording still in body copy (out of scope here).** The GBP page card 'We did not find a verified, universal ranking improvement from posting...' repeats the wording the FAQ cleanup removed from the FAQ.
9. **Site-wide consistency.** FAQ answers on the Privacy Policy and Terms (borderline kept items above) and the Terms FAQs on legal topics were not changed; the Privacy Policy and Terms pages themselves were out of scope and still contain legal statements by nature (see the previous log, section 4, for their lines).

Agent notes on individual pages:

- /industries/healthcare: the meta description, title and H1 contain no legal term; unchanged. docs/03 keyword targets for this page were not checked against HIPAA terms; check there.
- Removed HIPAA/BAA/HHS/FCC TCPA/consent/recording/AI-disclosure/advertising-licensing content: the 'Privacy boundary' scope item, worldwide-note paragraph, 'Review privacy and permissions' process step (page now has five steps), HighLevel HIPAA note, HHS settlement note, reminders/TCPA note, four privacy-rule cards, and the 'Blanket HIPAA-compliance assurances' exclusion. Restoring needs owner-approved legal review.
- Page now makes no statement about whether the page is for U.S. practices only or about legal-review limits; owner may want a non-legal scope line if healthcare coverage is U.S.-only (not stated in docs/01).
- /services/reputation-management: workflowSteps step 3 clientInput changed from "Which channels you have consent to use." to "Which channels you use to reach customers." (a required rendered field; the consent clause was replaced, not just deleted). Owner may prefer different wording.
- /services/sms-email-automation: the whole "Build Permission and Opt-Outs Into the Workflow" section (id permission) was removed, including non-legal cards (Review requests, Reactivation, Email sender authentication). Owner may want a non-legal version of the opt-out/stopping explanation restored; stopping rules remain in the Stop rules section.
- Both pages: H1, title, description and slugs contain no legal terms; no changes needed.
- /services/ai-receptionist: no H1, title or slug depended on a legal term; none changed.
- /services/google-business-profile-optimization: the 'Two kinds of consent' card was removed, leaving the 'Do weekly posts improve rankings?' card alone in a two-column grid row. Layout is fine but the card sits half-width; owner may want a different companion card.
- /services/google-business-profile-optimization: the 'consent-aware follow-up' link to /services/sms-email-automation was removed with its sentence (sms page is still linked from other places).
- Out of scope but noticed: GBP page card says 'We did not find a verified, universal ranking improvement from posting...' (research-process wording the earlier FAQ cleanup removed from the FAQ, still in body copy).
- Source constants removed as unused: website-design (wcag22, adaGuidance, fcc, hhs), ai-receptionist (euAiTransparency, rcfp, fccRuling). Restore with the content if the claims return.
- No incoming anchor links pointed at removed sections (no sections were removed; only cards, paragraphs and sentences).
- Professional services: docs/01 supports only law, accounting, consulting, financial advice and similar firms. Removed bookkeeping, HR, insurance, architecture and engineering (profession cards, scenarios, hero list, escalation list), the 1-25 size range, and the size labels in scenario titles. Confirm the professions and sizes before restoring.
- Industries hub: also removed 'of about 1 to 10 providers' from the Healthcare, Dental and Med Spa card description (same unconfirmed size-range type; not in docs/01).
- Professional-services page: the Accounting segment card now has no example workflow (its only example was bookkeeping-based; the block is hidden when empty). The scenarios section now has three examples (attorney, consultancy, financial-advisory firm); the intro now says three.
- Professional-services page: the Clio 2024 US law-firm statistic and Hinge 2014 research were kept (statistics, not legal claims); the Clio caveat sentence was trimmed to drop the removed professions. Decide whether the legal-sector statistic should stay.
- docs/02 and docs/03 (professional-services row) still describe six profession cards, five scenarios, the 1-25 firm size and the segment note; they need a refresh (not edited by this agent).
- Home Services page: the whole 'Build Customer Permission Into the Process' section (permission steps, bullets, quick answer) was removed because every element was a consent/registration/jurisdiction statement, and the Permission jump-link too. Confirm whether a non-legal replacement section is wanted.
- No H1, title or keyword on these pages depended on a legal term.
- Both combo pages (/industries/home-services/ai-receptionist and /industries/home-services/website-design): meta description, H1, title, slug and primary keyword do not depend on a legal term, so none were changed. The AI receptionist description lost the clause 'plus the call rules to check'.
- AI receptionist combo: the whole 'Call Rules to Check Before You Turn It On' section was removed (recording consent, AI disclosure, outbound AI calls and TCPA, text follow-up and 10DLC, third-party AI vendor lawsuit, emergencies card) along with the two legal notes under the 'First Ten Seconds' example and the '[Recording notice given]' wireframe placeholder. The emergency guidance (PHMSA, call 911) remains in the routing section and the example notes.
- Website design combo: the WCAG 2.2 card and the 'Legal exposure varies' (ADA lawsuits) card were removed. The section id 'speed-and-accessibility' and heading 'Fast, Stable, and Usable by Everyone' remain; the owner may want to rename them.
- Source constants for removed citations (FCC, Federal Register, TCPAWorld, Justia, ZwillGen, Maine statute, Twilio A2P, Convoso, WCAG, ADA listing) were deleted from the two combo files. To restore any removed content, the owner needs approved legal review of the statements and fresh verification of the sources.
- home.ts: 'Approved messages go out where consent allows.' became 'Approved messages go out.'

## 7. Doc updates

`docs/03-url-and-keyword-map.md` (FAQ counts and FAQ notes only; keyword targets and page lists untouched). Counts are from the code (content arrays, production form variant):

| Row | Before | After |
|---|---|---|
| Industries hub | FAQ of nine questions | seven |
| Terms of Service | twelve | eight |
| About | ten | six |
| Contact | five-question FAQ | four |
| Home | 8 visible FAQs | 6 |
| /faq | 37 visible FAQs; five groups of five; 'Working With' group of twelve | 33; groups of 5, 5, 5, 4 and 4; 'Working With' group of ten |
| Text and email automation | 11 visible FAQs | 7 |
| Property Management | twelve questions (and a note about kept texting/review questions) | eleven; note now says the rent and availability question and the automated-texting consent question were removed |
| Healthcare | ten questions | eight |
| Combo: home services website design | 10 visible FAQs | 9 |
| Combo: home services AI receptionist | 10 visible FAQs | 7 |
| Services hub | note that the FAQ 'What kinds of businesses are these services for?' relies on all four audiences | note deleted (the FAQ was removed) |

Unchanged and correct: Privacy Policy (seven, including the reinstated item) and Professional Services (ten). Rows for the other service pages carry no FAQ counts. `docs/02` carries no counts and was not edited. Earlier in this work `docs/04` and `docs/07` received the FAQ-remediation notes (see the previous log).

## 8. Verification results

1. **Rendered-HTML scan** (after `npm run build`, built pages other than Privacy Policy, Terms and 404; FAQ `<details>` blocks excluded because they were cleaned in the previous step): searched body text, meta description, Open Graph and Twitter text, `<title>`, image alt and aria-label text, and JSON-LD descriptions, names and answers for HIPAA, BAA, business associate, PHI, TCPA, GDPR, CCPA, CAN-SPAM, FCC, FTC, ADA, WCAG, A2P, 10DLC, statute, law(s), legal, lawful, regulat*, complian*, consent, jurisdiction, fair housing, attorney, lawyer, counsel, HHS, certif*, Maine and Utah. Remaining hits are all kept on purpose: the docs/01 audience phrase 'law, accounting, consulting, financial advice, and similar firms' (body, JSON-LD and the rewritten FAQ answers), scope exclusions that use the word 'legal' (see section 5), the professional-services 'Law' and 'attorney' workflow wording (a profession and its role), and the Clio law-firm statistic. The other hits were false positives (the JSON-LD key `mainEntity` contains 'Maine'; 'counseling'; the healthcare FAQ about insurance questions). No hit in metadata or alt text. There is no `llms.txt` in the repo; `robots.txt` and `sitemap.xml` carry no copy.
2. **Professional-services terms:** no bookkeeping, architecture, engineering, insurance (as a profession) or '1 to 25' text remains in `src/content/industries`, `src/app/industries`, the services hub or home content, or in built HTML.
3. **Privacy Policy and Terms pages:** `src/app/privacy-policy` and `src/app/terms-of-service` are untouched. In `src/content`, the Privacy Policy differs from the start of the session only by the sentence edit from the FAQ remediation (privacy#1) and the reinstated FAQ now being present (so the net diff against HEAD is the privacy#1 edit only). Terms differ only by the FAQ remediation edits.
4. **FAQ text versus FAQPage JSON-LD:** needed the build (rendered output). Exact match on all 20 pages that carry FAQPage markup (mismatch 0); privacy shows 7 and 7; the 404 page has no FAQ and no markup. No page has markup without a visible FAQ.
5. **`npm run lint`** and **`npx tsc --noEmit`**: clean. **`npm run check:policy`**: OK. **`npm run check:combos`**: OK (2 combo files, banned caption absent, JSON-LD checked on 20 indexable pages). `npm run build`: succeeded (27 static pages); it rewrote the gitignored `out/` folder.
6. **Em dashes:** none in added or changed lines (checked every added line in `git diff`); one pre-existing em dash remains in `docs/04` line 58 and in doc titles, untouched.
7. **Not done:** no visual check in a browser (grid and layout notes in section 6 come from the code); no live-site or Cloudflare checks.
