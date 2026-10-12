// Content for /industries/healthcare.
// Source: the Healthcare, Dental and Med Spa research pack and the "Audience Page -
// Healthcare, Dental & Med Spa Practices" brief. Publication gate: docs/01 lists
// Healthcare and Wellness as a FUTURE opportunity, not a current client category, and
// all six services named here are still TBD or only partly confirmed. No pricing,
// delivery scope, tested integrations, healthcare experience, BAA readiness,
// demonstration, or client proof exists yet. The page therefore describes a proposed
// approach, not a package, and makes no availability, pricing, results, compatibility,
// HIPAA-compliance, or specialist-experience claims. The page is built but not indexed
// and not yet linked from the industries hub until the owner approves it. This page is
// the audience hub: it recognizes the visitor's practice type and routes them onward.
// Open items live in the brief's "Proof gaps" section.

import type { IconName } from "@/components/ui/icons";
import type { Faq, SourceLink } from "../services/website-design";

export const healthcarePage = {
  path: "/industries/healthcare",
  // The root layout appends " | OKIKO HIGH".
  title: "Healthcare Marketing & Automation",
  description:
    "Explore proposed marketing and automation workflows for healthcare, dental and med spa practices, with clear limits and existing-software checks.",
  h1: "Healthcare Marketing and Automation, Built Around Your Practice",
  // Primary contact action is TBD in docs/01. Point every CTA here so it can change
  // in one place once the owner confirms the contact path.
  primaryCta: { label: "Discuss Your Practice's Workflow", href: "/contact" },
  // The brief's secondary CTA ("See an Administrative Workflow Example") needs a
  // labeled example that does not exist yet, so the brief's fallback jump link is used.
  secondaryCta: { label: "Explore the Proposed Workflows", href: "#services" },
} as const;

export const sources = {
  hhsPrivacyRule: {
    label: "HHS, HIPAA Privacy Rule summary",
    href: "https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html",
  },
  hhsBusinessAssociates: {
    label: "HHS, Business Associates guidance",
    href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html",
  },
  hhsAppointmentReminders: {
    label: "HHS, appointment reminders under HIPAA (FAQ)",
    href: "https://www.hhs.gov/hipaa/for-professionals/faq/are-appointment-reminders-allowed-under-hipaa-without-authorization/index.html",
  },
  hhsNewVision: {
    label: "HHS OCR, New Vision Dental settlement (2022)",
    href: "https://www.hhs.gov/hipaa/for-professionals/compliance-enforcement/agreements/new-vision/index.html",
  },
  highLevelHipaa: {
    label: "HighLevel Support, HIPAA compliance with HighLevel",
    href: "https://help.gohighlevel.com/support/solutions/articles/48000983084-hipaa-compliance-with-highlevel",
  },
  fccAiVoices: {
    label: "FCC, TCPA and AI-generated human voices",
    href: "https://www.fcc.gov/document/fcc-confirms-tcpa-applies-ai-technologies-generate-human-voices",
  },
  cochraneReminders: {
    label: "Cochrane review, appointment reminder systems (2013)",
    href: "https://pubmed.ncbi.nlm.nih.gov/24310741/",
  },
  reminderTrial: {
    label: "Randomized study, targeted text reminders in primary care (2022)",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9126539/",
  },
  openDentalApi: {
    label: "Open Dental, API specification",
    href: "https://www.opendental.com/site/apispecification.html",
  },
  janePartners: {
    label: "Jane, integrations program and partners (2026)",
    href: "https://jane.app/blog/jane-integrations-our-program-our-partners-and-how-to-work-with-us",
  },
  dentistryDiscussion: {
    label: "Reddit r/Dentistry, front desk scheduling discussion (public, role unverified)",
    href: "https://www.reddit.com/r/Dentistry/comments/1pscb7g/front_desk_scheduling_feels_like_constant_chaos/",
  },
  ptDiscussion: {
    label: "Reddit r/physicaltherapy, front desk workload discussion (public, role unverified)",
    href: "https://www.reddit.com/r/physicaltherapy/comments/1rvqjem/i_hate_front_desk_workload/",
  },
} satisfies Record<string, SourceLink>;

// Section 1: the introduction. Three working principles from the brief.
export const introPoints: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "integrations",
    title: "Connect marketing to the front desk",
    body: "Marketing only helps when an inquiry reaches a person and gets an answer. The approach connects your website, Google presence, and follow-up to who handles what.",
  },
  {
    icon: "swap",
    title: "Different practices, different paths",
    body: "A dental office, a med spa, and a primary-care group do not route requests the same way, so each gets its own workflow.",
  },
  {
    icon: "clipboard",
    title: "Administrative work, not clinical work",
    body: "The focus is inquiries, scheduling requests, follow-up, and reviews. Clinical decisions stay with your clinical team, and no outcome is promised.",
  },
];

// The five disclosures the brief requires on the page, shown once in a single block.
export const scopeAndLimits: ReadonlyArray<{ icon: IconName; label: string; body: string }> = [
  {
    icon: "flag",
    label: "Offering status",
    body: "Healthcare services are being evaluated. Availability, scope, and integrations must be confirmed.",
  },
  {
    icon: "shield",
    label: "Scope boundary",
    body: "Proposed automation is for administrative workflows, not diagnosis, clinical advice, treatment recommendations, or emergency care.",
  },
  {
    icon: "analytics",
    label: "Results boundary",
    body: "Research and examples on this page are not OKIKO HIGH client results or guaranteed outcomes.",
  },
  {
    icon: "plug",
    label: "Compatibility boundary",
    body: "Naming a software product does not establish an existing integration.",
  },
  {
    icon: "file",
    label: "Privacy boundary",
    body: "No part of the agency, and no connected feature, is described here as HIPAA compliant. This page primarily addresses U.S. practices, and it is not legal advice.",
  },
];

export const scopeWorldwideNote =
  "OKIKO HIGH serves clients worldwide, but worldwide service coverage does not mean every workflow is legally or operationally available in every country. Privacy, communications, and advertising rules are reviewed for the places your practice and patients are located.";

// Section 2: practice types. Links go only to pages that exist today.
export type PracticeType = {
  icon: IconName;
  title: string;
  needs: string;
  links: ReadonlyArray<{ label: string; href: string }>;
};

export const practiceTypes: ReadonlyArray<PracticeType> = [
  {
    icon: "calendar",
    title: "Dental practices",
    needs:
      "Provider and operatory scheduling, recall, and insurance questions, with calls at lunch and chairside handled by a callback queue or tested overflow service.",
    links: [
      { label: "website design for dental practices", href: "/services/website-design" },
      { label: "AI voice agents and receptionists", href: "/services/ai-receptionist" },
      { label: "SMS and email follow-up automation", href: "/services/sms-email-automation" },
    ],
  },
  {
    icon: "star",
    title: "Med spas and aesthetics practices",
    needs:
      "Cash-pay consultation requests, treatment-specific inquiries, and repeat visits. Advertising and imagery need extra care, and treatment suitability is never decided by automation.",
    links: [
      { label: "website design and development", href: "/services/website-design" },
      { label: "SMS and email follow-up automation", href: "/services/sms-email-automation" },
      { label: "reputation management", href: "/services/reputation-management" },
    ],
  },
  {
    icon: "repeat",
    title: "Physical therapy and chiropractic practices",
    needs:
      "Repeat scheduling, cancellations, and intake. Existing software often sends reminders already, and automation never selects treatment frequency.",
    links: [
      { label: "SMS and email follow-up automation", href: "/services/sms-email-automation" },
      { label: "Google Business Profile optimization", href: "/services/google-business-profile-optimization" },
    ],
  },
  {
    icon: "clipboard",
    title: "Primary-care practices",
    needs:
      "Administrative inquiries routed by location and purpose. Symptoms, medication questions, and clinical concerns leave the marketing workflow for your approved clinical pathway.",
    links: [
      { label: "website design and development", href: "/services/website-design" },
      { label: "administrative AI chatbots", href: "/services/ai-chatbots" },
    ],
  },
  {
    icon: "search",
    title: "Vision practices",
    needs:
      "Requests routed by provider, appointment type, and insurance inquiry. These needs are researched before any dedicated workflow is proposed.",
    links: [
      { label: "website design and development", href: "/services/website-design" },
      { label: "Google Business Profile optimization", href: "/services/google-business-profile-optimization" },
    ],
  },
  {
    icon: "shield",
    title: "Mental health practices",
    needs:
      "A separate design with stronger privacy and crisis handling. Crisis language triggers your approved emergency instructions and a person, not automated counseling, and general chatbot copy is not reused.",
    links: [
      { label: "website design and development", href: "/services/website-design" },
      { label: "Google Business Profile optimization", href: "/services/google-business-profile-optimization" },
    ],
  },
];

export const practiceTypesNote = {
  scopeLabel: "Scope being confirmed",
  body: "These are the practice types this page is written for. Healthcare, dental, and med spa practices are a planned audience, and OKIKO HIGH confirms which workflows it can responsibly offer, and for which specialties, before any implementation. Links are shown only for services that have their own page.",
};

// Section 3: shared problems, different consequences.
export const problems: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "call",
    title: "Missed calls at lunch and after hours",
    body: "When the team is chairside or the office is closed, a new inquiry may reach voicemail with no assigned next step.",
  },
  {
    icon: "message",
    title: "Repeated questions and callbacks",
    body: "The same questions about locations, appointment types, and insurance take front-desk time away from work that needs a person.",
  },
  {
    icon: "clock",
    title: "Cancellations and no-shows",
    body: "An unfilled slot is a hole in the day. Reminders may already exist in your software, so the question is what is actually missing.",
  },
  {
    icon: "lead",
    title: "Inquiries that never become appointments",
    body: "Paid and organic inquiries only matter when they become attended appointments, so the follow-up path matters as much as the ad.",
  },
];

// Inquiry type, needed response, responsible person.
export const inquiryMatrix: ReadonlyArray<{
  icon: IconName;
  type: string;
  response: string;
  person: string;
}> = [
  {
    icon: "lead",
    type: "New-patient or consultation request",
    response: "An acknowledgment and an appointment request for staff to confirm, not a promise of a slot.",
    person: "A front-desk or intake contact",
  },
  {
    icon: "calendar",
    type: "Existing-patient scheduling",
    response: "Your existing scheduling tool first. A workflow handles only a gap it does not cover.",
    person: "The scheduling coordinator",
  },
  {
    icon: "tag",
    type: "Insurance question",
    response: "Practice-approved general information or a secure request. Individual coverage is never stated as guaranteed.",
    person: "Billing or insurance staff",
  },
  {
    icon: "bell",
    type: "Symptom, medication, or clinical question",
    response: "No automated answer. The contact is directed to your approved clinical pathway.",
    person: "Your clinical team",
  },
  {
    icon: "star",
    type: "Public review or comment",
    response: "A neutral, approved reply that does not confirm or reveal patient information, with a private contact route.",
    person: "A named reviewer on your team",
  },
];

export const gapNotes: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "check",
    title: "Use the software you already have first",
    body: "Many practice systems already send reminders. Additional automation only makes sense for a gap you can demonstrate, so the first step is reviewing what you already have.",
  },
  {
    icon: "analytics",
    title: "A lead is not an attended patient",
    body: "Track cost per attended new patient, not only cost per lead, with the agreed acquisition expenses and one consistent attribution window. Cash-pay aesthetics, insurance-based care, and recurring care have different economics, so no single benchmark applies.",
  },
];

export const problemsNote = {
  lead: "Practice staff describe missed calls, phone tag, and repeated questions.",
  detail:
    "Public discussions among dental and physical-therapy staff describe missing calls while chairside, playing phone tag, and answering the same questions. These posts are role-unverified and anecdotal. They are not industry statistics, testimonials, or OKIKO HIGH results.",
  sources: [sources.dentistryDiscussion, sources.ptDiscussion],
};

// Section 4: the six candidate services. Every card links to its own service page.
// `layer` is the group heading and also shows in text, so the grouping never depends
// on color. Order follows the brief's service priority (foundation first, AI voice
// last), which is sequencing advice and not confirmation of availability.
export type ServiceLayer = "Foundation" | "Follow-up and trust" | "Inquiry assistance";

export type HealthcareServiceCard = {
  slug: string;
  path: string;
  title: string;
  icon: IconName;
  layer: ServiceLayer;
  description: string;
  buttonLabel: string;
};

export const serviceLayers: ReadonlyArray<{ layer: ServiceLayer; summary: string }> = [
  {
    layer: "Foundation",
    summary: "Make contact paths and practice information clear before adding automation.",
  },
  {
    layer: "Follow-up and trust",
    summary: "One consent-reviewed administrative workflow, plus careful public communication.",
  },
  {
    layer: "Inquiry assistance",
    summary: "Optional AI for approved administrative questions, with tested human escalation.",
  },
];

export const serviceCards: ReadonlyArray<HealthcareServiceCard> = [
  {
    slug: "website-design",
    path: "/services/website-design",
    title: "Website Design and Development",
    icon: "website",
    layer: "Foundation",
    description:
      "Clear contact paths, booking links, and approved administrative information for each provider, location, and appointment type, so a visitor sees the right next step.",
    buttonLabel: "Explore Website Design",
  },
  {
    slug: "google-business-profile-optimization",
    path: "/services/google-business-profile-optimization",
    title: "Google Business Profile Optimization",
    icon: "pin",
    layer: "Foundation",
    description:
      "Accurate practice listing information that matches your website and your own approved details, checked against Google's eligibility rules before any changes.",
    buttonLabel: "Explore Google Business Profile Optimization",
  },
  {
    slug: "sms-email-automation",
    path: "/services/sms-email-automation",
    title: "Text and Email Automation",
    icon: "mail",
    layer: "Follow-up and trust",
    description:
      "A bounded first workflow: acknowledgments, callback queues, and follow-up that respect the consent rules you approve. Reminders already in your software are used first where they work.",
    buttonLabel: "Explore Text and Email Automation",
  },
  {
    slug: "reputation-management",
    path: "/services/reputation-management",
    title: "Reputation Management",
    icon: "star",
    layer: "Follow-up and trust",
    description:
      "Neutral review requests and approved public replies that never confirm or reveal patient information. No gating, incentives, or promises about ratings.",
    buttonLabel: "Explore Reputation Management",
  },
  {
    slug: "ai-chatbots",
    path: "/services/ai-chatbots",
    title: "AI Chatbots",
    icon: "message",
    layer: "Inquiry assistance",
    description:
      "A website assistant limited to approved administrative information and appointment requests. It is identified as AI, never gives clinical advice, and always offers a route to a person.",
    buttonLabel: "Explore AI Chatbots",
  },
  {
    slug: "ai-receptionist",
    path: "/services/ai-receptionist",
    title: "AI Receptionist and Voice Agents",
    icon: "headset",
    layer: "Inquiry assistance",
    description:
      "Considered last, as overflow rather than a replacement for staff. It needs tested consent, recording, scheduling, and escalation behavior, and it does not handle clinical questions or emergencies.",
    buttonLabel: "Explore the AI Receptionist",
  },
];

export const stackNote = {
  scopeLabel: "Confirm scope",
  scopeNote:
    "Availability and scope of each service are being confirmed, and every card below is a proposed option. This grouping is a way to prioritize, not a package or a delivery order, and no prices or tiers are set. A practice with strong call volume may need call coverage before a redesign, and a small practice may need only a clear website and one dependable follow-up workflow.",
  cardLabel: "Scope to confirm",
};

// Section 5: illustrative scenarios from the research pack. Hypothetical workflow
// designs, not client stories. No outcomes or benchmarks appear.
export type Scenario = {
  icon: IconName;
  title: string;
  gap: string;
  next: string;
  measure: string;
};

export const scenarios: ReadonlyArray<Scenario> = [
  {
    icon: "calendar",
    title: "Two-provider dental office",
    gap: "Calls at lunch and chairside go unanswered, and insurance questions interrupt the front desk.",
    next: "Lunch calls enter a callback queue or a tested overflow service. Insurance questions go to staff, and any appointment request respects provider, operatory, duration, and scheduling rules.",
    measure: "Callback completion, unresolved inquiries, and staff handling time.",
  },
  {
    icon: "repeat",
    title: "Four-provider PT or chiropractic practice",
    gap: "Cancellations leave open slots, while existing software already sends reminders.",
    next: "The existing software keeps handling reminders. A separate workflow surfaces cancellations and approved waitlist opportunities, and automation never selects treatment frequency.",
    measure: "Filled cancellations, attendance, and correction work.",
  },
  {
    icon: "clipboard",
    title: "Six-provider primary-care practice",
    gap: "Administrative requests and clinical concerns arrive through the same channels.",
    next: "Administrative inquiries route by location and purpose. Symptoms, medication questions, and clinical concerns leave the marketing workflow for your approved clinical pathway.",
    measure: "Correct routing, escalation completion, and response time.",
  },
  {
    icon: "star",
    title: "Three-provider med spa",
    gap: "Consultation inquiries arrive after hours with no one to answer them.",
    next: "After-hours chat supplies approved administrative information and requests consultations. It does not decide treatment suitability, personalize procedural advice, or promise outcomes.",
    measure: "Time to a human response, consultation requests, and attended consultations.",
  },
  {
    icon: "shield",
    title: "Eight-provider vision or mental-health group",
    gap: "Requests need the right provider and location, and some contacts are sensitive.",
    next: "Requests route to the correct provider and location with privacy-conscious notifications. Crisis language triggers your approved emergency instructions and human escalation, not automated counseling.",
    measure: "Routing accuracy, escalation completion, and complaints.",
  },
];

// Section 6: existing software. Platform names are discovery inputs only.
export const compatibilityChecks: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Dental practice-management software",
    body: "Examples to evaluate: Dentrix, Eaglesoft, and Open Dental. Confirm the exact edition and authorized access first, and do not treat Dentrix Core and Ascend as the same product. Open Dental documents an API with patient and appointment resources and advises developer BAAs, which describes the product, not an OKIKO HIGH integration.",
  },
  {
    title: "Medical records and scheduling systems",
    body: "Example to evaluate: athenahealth. Official developer resources and an API process exist, but an API existing is not an integration guarantee. Validate access and the exact appointment actions allowed.",
  },
  {
    title: "Therapy and aesthetics booking platforms",
    body: "Examples to evaluate: Jane, Mindbody, and Boulevard. Jane describes an approval-based partner program, so confirm current availability. Mindbody and Boulevard document booking endpoints, so confirm subscription tier, permissions, and permitted data use.",
  },
  {
    title: "Before compatibility is promised",
    body: "Verify the exact version, permissions, which data has to move, whether the workflow sends an appointment request or books directly, how bookings are reconciled, who is alerted when a sync fails, and which vendors need a BAA.",
  },
];

export const existingFirstNote = {
  label: "Assess existing capabilities first",
  body: "Listed software is an example to evaluate, not a supported or tested integration. OKIKO HIGH's tested integrations are not yet confirmed.",
};

export const softwareNote = {
  lead: "Replacing your EHR or practice-management software is not the goal.",
  detail:
    "Open Dental publishes an appointment API and advises developer BAAs, and Jane describes an approval-based partner program that is still evolving. Those describe the products, not an OKIKO HIGH integration. If direct booking cannot be done safely, the workflow collects an appointment request for staff to confirm.",
  sources: [sources.openDentalApi, sources.janePartners],
};

// Section 7: "Can assist / Requires a person" comparison.
export const canHandle: ReadonlyArray<string> = [
  "Disclosing that the visitor is talking with AI and offering a route to a person",
  "Sharing practice-approved administrative information, such as locations and how to reach the office",
  "Capturing an appointment or consultation request for staff to confirm",
  "Routing an inquiry by location, provider, and purpose",
  "Sending approved acknowledgments and reminders under consent rules you have reviewed",
  "Creating a monitored callback task for a named person",
];

export const mustEscalate: ReadonlyArray<string> = [
  "Diagnosis, medication questions, symptoms, and treatment suitability",
  "Emergencies and crisis language, which follow your approved emergency instructions and a person",
  "Individual insurance coverage, eligibility, and payment estimates",
  "Replies to public reviews that touch patient information",
  "Sensitive patient details, which belong in your approved secure channel",
  "Any question with no approved answer",
];

export const insuranceExample = {
  title: "Example: an insurance question",
  body: "A visitor asks what their plan will cover. The workflow shares only practice-approved general information, or collects a secure request for billing staff, and never states what insurance will pay. An answered question is not the same as a verified answer, so this path is tested before launch.",
};

export const privacyNote = {
  lead: "Whether HIPAA applies depends on the organization, not on its label.",
  detail:
    "HIPAA protects identifiable health information held or transmitted by covered entities and business associates. A practice, an agency, and each connected vendor need their own review, and a name alone is not automatically protected health information in every context. This page is not legal advice.",
  source: sources.hhsPrivacyRule,
};

// Section 8: implementation. Six steps from the brief, no fixed timeline.
export const processSteps: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "search",
    title: "Map the practice",
    body: "List providers, locations, appointment types, capacity, inquiry sources, software, and current communication tools.",
  },
  {
    icon: "shield",
    title: "Review privacy and permissions",
    body: "Determine HIPAA applicability, data flows, business associate agreements, communication consent, and recording rules.",
  },
  {
    icon: "pin",
    title: "Fix the entry points",
    body: "Improve website contact paths, booking links, approved administrative information, and practice listings.",
  },
  {
    icon: "plug",
    title: "Configure selected workflows",
    body: "Set up acknowledgments, callback queues, reminders, follow-up, and neutral review requests, one narrow workflow at a time.",
  },
  {
    icon: "check",
    title: "Test exceptions",
    body: "Try clinical questions, emergencies, wrong-location requests, insurance questions, unavailable appointments, and integration failures.",
  },
  {
    icon: "rocket",
    title: "Pilot and measure",
    body: "Launch a bounded workflow, compare it with the baseline, and expand only after quality and safety checks.",
  },
];

export const proposedInclusions =
  "A proposed engagement could include agreed setup, documented workflows, staff training, monitoring, and reporting. Which of these OKIKO HIGH can deliver is still being confirmed.";

export const highLevelNote = {
  lead: "HighLevel says its accounts are not HIPAA compliant by default.",
  detail:
    "Its documentation describes an optional HIPAA package that requires a signed business associate agreement and location-level enablement. The practice, the agency, and each connected vendor still have their own obligations, so every connected feature is reviewed for the actual deployment. This describes the vendor's documentation, not an OKIKO HIGH assurance.",
  sources: [sources.highLevelHipaa, sources.hhsBusinessAssociates],
};

export const exclusions: ReadonlyArray<string> = [
  "Clinical decision-making, diagnosis, or treatment recommendations",
  "Emergency triage by an unconstrained AI model",
  "Individual insurance coverage guarantees",
  "Guaranteed bookings, rankings, or ratings",
  "Replacing your EHR or practice-management software",
  "Blanket HIPAA-compliance assurances",
  "Unrestricted handling of patient information",
  "Untested integration promises",
];

// Section 9: measurement. Recommended evaluation approach only.
export const measureGroups: ReadonlyArray<{
  icon: IconName;
  title: string;
  items: ReadonlyArray<string>;
}> = [
  {
    icon: "gauge",
    title: "Operational measures",
    items: [
      "Median and 90th-percentile time to an automated acknowledgment, and to a real human response",
      "Unresolved eligible inquiries and callback completion against your baseline",
      "Critical booking-rule violations in a test set, with live audits afterward",
      "Staff handling time, minus monitoring, corrections, and exception work",
      "No patient information in test replies to public reviews",
    ],
  },
  {
    icon: "analytics",
    title: "Business outcomes, tracked separately",
    items: [
      "Inquiries, bookings, and attended appointments, counted separately",
      "Collected revenue over a stated period, by cohort",
      "Cost per attended new patient, not only cost per lead",
    ],
  },
];

export const measurementNote =
  "Use a baseline period, then a comparable pilot period, and record staffing, capacity, seasonality, and any other marketing changes. Pilot targets here are recommendations, not industry benchmarks or promises, and no results are shown on this page.";

export const reminderNote = {
  lead: "Research supports appointment reminders, but results vary.",
  detail:
    "A Cochrane review reported a risk ratio of 1.14 for attendance versus no reminders, drawn from varied studies with low-to-moderate evidence overall. A 2022 randomized study found an additional text reduced no-show risk by 7% relative to the comparison condition in one primary-care system. Both describe other settings and are not OKIKO HIGH results.",
  sources: [sources.cochraneReminders, sources.reminderTrial],
};

// Section 10: privacy and public communication.
export const privacyRules: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "shield",
    title: "Approved secure channels",
    body: "Sensitive details go through your approved secure channel, not routine marketing automation.",
  },
  {
    icon: "star",
    title: "Neutral review requests",
    body: "Invitations must not depend on positive private feedback. No incentives, no selective solicitation of positive reviews, and no patient information in public replies.",
  },
  {
    icon: "message",
    title: "Consent for contact and messages",
    body: "A request for contact is kept separate from optional promotional text or email consent. Channel-specific consent language and withdrawal handling need legal review.",
  },
  {
    icon: "headset",
    title: "Calls, recording, and AI disclosure",
    body: "Recording and transcription notices are reviewed by jurisdiction, AI-generated voice calls are reviewed under TCPA, and applicable AI disclosure rules are checked.",
  },
  {
    icon: "tag",
    title: "Advertising and health claims",
    body: "Health claims, testimonials, before-and-after imagery, and med spa advertising need substantiation and a licensing review for the places you operate.",
  },
  {
    icon: "globe",
    title: "Worldwide is not the same as everywhere",
    body: "This page primarily addresses U.S. practices. A practice elsewhere needs country-specific privacy, communications, and advertising review first.",
  },
];

export const reviewReplyNote = {
  lead: "Replying to a review with patient details has led to a federal settlement.",
  detail:
    "In 2022, HHS announced a $23,000 settlement with a dental practice after disclosures in replies to online reviews. That is one enforcement case, not a typical penalty or an expected cost. A reviewer's own disclosure does not permit the practice to confirm it.",
  source: sources.hhsNewVision,
};

export const remindersLawNote = {
  lead: "HIPAA permission for reminders does not settle every messaging rule.",
  detail:
    "HHS says appointment reminders can be treatment communications that do not need HIPAA authorization. The FCC applies TCPA restrictions to AI-generated voices, and consent depends on the call, so marketing, reminders, and inbound assistance are reviewed separately.",
  sources: [sources.hhsAppointmentReminders, sources.fccAiVoices],
};

// Final conversion section. The brief's inquiry form is not built (contact path and
// consent wording are TBD in docs/01); this list tells the visitor what to include.
export const inquiryPrompts: ReadonlyArray<string> = [
  "Your practice type or specialty",
  "The number of providers and locations",
  "The software you already use",
  "The main administrative bottleneck you want to look at",
];

// Single source for the visible FAQ section and the FAQPage JSON-LD.
export const faqs: Faq[] = [
  {
    question: "Does OKIKO HIGH currently serve healthcare practices?",
    answer:
      "Healthcare, dental, and med spa practices are being evaluated as a future audience. Service availability, scope, integrations, and support arrangements must be confirmed before an engagement is proposed.",
  },
  {
    question: "What could marketing and automation help our practice manage?",
    answer:
      "The proposed approach could connect website inquiries, administrative follow-up, reputation management, and selected communication workflows. It is intended to support your team, not replace clinical judgment or your practice-management software.",
  },
  {
    question: "Would we need to replace our existing software?",
    answer:
      "Replacement is not the proposed objective. The first step should be reviewing your existing features and confirming whether an additional workflow solves a genuine gap without creating duplicate work.",
  },
  {
    question: "Is GoHighLevel HIPAA compliant?",
    answer:
      "HighLevel says its accounts are not HIPAA compliant by default and offers an optional HIPAA package requiring a BAA and configuration. Your practice, the agency, and connected vendors still have responsibilities that must be reviewed for the actual deployment.",
    sources: [sources.highLevelHipaa, sources.hhsBusinessAssociates],
  },
  {
    question: "Can an AI receptionist or chatbot answer medical questions?",
    answer:
      "Clinical advice, diagnosis, and individualized treatment recommendations are outside the proposed scope. Clinical questions should move to your practice's approved human or clinical communication pathway.",
  },
  {
    question: "Can automation book appointments directly?",
    answer:
      "Direct booking depends on the exact software, permissions, appointment rules, and verified integration. If those requirements cannot be met safely, the workflow should collect a request for staff confirmation instead.",
  },
  {
    question: "Can reminders reduce no-shows?",
    answer:
      "Research supports appointment reminders, but results vary by practice, baseline, and intervention. Your practice should measure its own attendance changes rather than rely on a universal percentage promise.",
    sources: [sources.cochraneReminders],
  },
  {
    question: "Can automation answer insurance questions?",
    answer:
      "It could provide practice-approved general information or route a secure inquiry to staff. Individual eligibility, coverage, and payment responsibility should not be presented as guaranteed.",
  },
  {
    question: "How should a practice respond to negative reviews?",
    answer:
      "Use an approved, neutral response that does not disclose or confirm patient information and provides a private contact route. A reviewer's own disclosure does not remove the practice's privacy obligations.",
    sources: [sources.hhsNewVision],
  },
  {
    question: "How much would this cost?",
    answer:
      "OKIKO HIGH's pricing for this proposed audience is not established. Any future proposal should identify the confirmed scope and applicable implementation, software, usage, and integration costs.",
  },
];
