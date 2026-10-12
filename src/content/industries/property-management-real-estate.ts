// Content for /industries/property-management-real-estate.
// Source: the Property Management and Real Estate research pack and the Property
// Management Marketing and Automation page brief. Publication gate: docs/01 lists
// Professional Services (which includes real estate) as a FUTURE opportunity, not a
// current client category, and all six services named here are still TBD or only
// partly confirmed. No pricing, delivery scope, tested integrations, property or
// real estate experience, demonstration, or client proof exists yet. The page
// therefore describes a proposed approach, not a package, and makes no
// availability, pricing, results, compatibility, or specialist-experience claims.
// Open items live in the brief's "Proof gaps" section.

import type { IconName } from "@/components/ui/icons";
import type { Faq, SourceLink } from "../services/website-design";

export const propertyRealEstatePage = {
  path: "/industries/property-management-real-estate",
  // The root layout appends " | OKIKO HIGH".
  title: "Property Management & Real Estate Marketing",
  description:
    "Explore website, inquiry routing, review, and follow-up options for property managers, rental operators, and real estate teams, with clear human handoffs.",
  h1: "Marketing and Automation for Property Management and Real Estate",
  // Primary contact action is TBD in docs/01. Point every CTA here so it can change
  // in one place once the owner confirms the contact path.
  primaryCta: { label: "Discuss Your Inquiry Workflow", href: "/contact" },
} as const;

export const sources = {
  upkeepMedia: {
    label: "Upkeep Media, property management marketing agency homepage",
    href: "https://www.upkeepmedia.com/",
  },
  yardiChatIq: {
    label: "Yardi, Chat IQ",
    href: "https://www.yardi.com/product/chat-iq/",
  },
  hudFairHousing: {
    label: "HUD, Fair Housing Act overview",
    href: "https://www.hud.gov/helping-americans/fair-housing-act-overview",
  },
  googleGbpEligibility: {
    label: "Google, Business Profile eligibility",
    href: "https://support.google.com/business/answer/13763036?hl=en",
  },
  googleReviewPolicy: {
    label: "Google, Prohibited and restricted content for reviews",
    href: "https://support.google.com/contributionpolicy/answer/7400114?hl=en",
  },
} satisfies Record<string, SourceLink>;

// Section B.
export const problems: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "swap",
    title: "Different contacts, one inbox",
    body: "Owners weighing a management company, rental prospects, residents, and guests all need different answers. When they share one path, each one waits for the wrong person.",
  },
  {
    icon: "call",
    title: "Calls with no next step",
    body: "After hours, or when the office is busy, a caller who reaches voicemail may have no clear next step and no one assigned to follow up.",
  },
  {
    icon: "clipboard",
    title: "Follow-up without an owner",
    body: "Tour requests, application questions, and owner consultations can stall when no one is responsible for the next action.",
  },
  {
    icon: "clock",
    title: "Repetitive questions",
    body: "Routine questions about listings, applications, and office hours can take staff time away from the work that needs a person.",
  },
];

export const problemsNote = {
  lead: "Owner acquisition and leasing need different paths.",
  detail:
    "Property-management marketing providers such as Upkeep Media separate owner leads from tenant contacts on their own pages. That shows the category distinction. It is not an OKIKO HIGH result.",
  source: sources.upkeepMedia,
};

// Section C: the six candidate services. Every card links to its own service page.
// `layer` carries the "Foundation / Conditional support / Optional AI" grouping in
// text, so the grouping never depends on color.
export type PropertyServiceCard = {
  slug: string;
  path: string;
  title: string;
  icon: IconName;
  layer: "Foundation" | "Conditional support" | "Optional AI";
  description: string;
  buttonLabel: string;
};

export const serviceCards: ReadonlyArray<PropertyServiceCard> = [
  {
    slug: "website-design",
    path: "/services/website-design",
    title: "Website Design and Development",
    icon: "website",
    layer: "Foundation",
    description:
      "Separate paths for owners and for renters, so each visitor sees the right next step: a management consultation, listing information, or how to reach the office.",
    buttonLabel: "Explore Website Design",
  },
  {
    slug: "sms-email-automation",
    path: "/services/sms-email-automation",
    title: "Text and Email Automation",
    icon: "mail",
    layer: "Foundation",
    description:
      "Inquiry assignment, permitted acknowledgment, tour reminders, and follow-up that does not depend on someone remembering. Messages go out only under consent rules you have approved.",
    buttonLabel: "Explore Text and Email Automation",
  },
  {
    slug: "reputation-management",
    path: "/services/reputation-management",
    title: "Reputation Management",
    icon: "star",
    layer: "Conditional support",
    description:
      "Neutral review requests for owners and residents, and careful replies. Requests follow platform rules, with no gating, incentives, or promises about ratings.",
    buttonLabel: "Explore Reputation Management",
  },
  {
    slug: "google-business-profile-optimization",
    path: "/services/google-business-profile-optimization",
    title: "Google Business Profile Optimization",
    icon: "pin",
    layer: "Conditional support",
    description:
      "Accurate listing information for a management or leasing office that meets Google's eligibility rules. Eligibility is checked first, because individual rental properties do not qualify.",
    buttonLabel: "Explore Google Business Profile Optimization",
  },
  {
    slug: "ai-chatbots",
    path: "/services/ai-chatbots",
    title: "AI Chatbots",
    icon: "message",
    layer: "Optional AI",
    description:
      "A website assistant that starts with approved FAQs and inquiry capture. It is identified as AI, sends unsupported questions to staff, and offers a route to a person.",
    buttonLabel: "Explore AI Chatbots",
  },
  {
    slug: "ai-receptionist",
    path: "/services/ai-receptionist",
    title: "AI Receptionist and Voice Agents",
    icon: "headset",
    layer: "Optional AI",
    description:
      "A pilot option where call volume and tested human escalation justify the added risk. It handles approved questions and inquiry capture, not emergencies or screening decisions.",
    buttonLabel: "Explore the AI Receptionist",
  },
];

export const stackNote = {
  scopeLabel: "Confirm scope",
  scopeNote:
    "Availability and scope of each service are being confirmed. This is a proposed way to prioritize, not a package, and not a delivery order. A busy leasing office may need call coverage before a redesign, and a small landlord may need only a clear website and dependable follow-up.",
  lead: "Google lists rental and for-sale properties as ineligible for a Business Profile.",
  detail:
    "A qualifying management or leasing office can be eligible, subject to the full requirements. Profiles are not created per rental unit.",
  source: sources.googleGbpEligibility,
};

// Section D: inquiry paths. Each contact type needs its own destination.
export const inquiryPaths: ReadonlyArray<{
  icon: IconName;
  title: string;
  body: string;
}> = [
  {
    icon: "key",
    title: "Property owners",
    body: "Owners evaluating a management company need service information and a consultation follow-up, not a leasing script.",
  },
  {
    icon: "search",
    title: "Rental prospects",
    body: "Prospects need listing information and clear tour or application directions drawn from the authoritative listing.",
  },
  {
    icon: "bell",
    title: "Residents",
    body: "Residents need support routes and approved maintenance escalation, handled apart from sales and leasing follow-up.",
  },
  {
    icon: "calendar",
    title: "Short and midterm rental guests",
    body: "Guest communication revolves around reservations and stays, so it needs its own workflow and respects each booking platform's rules.",
  },
  {
    icon: "lead",
    title: "Buyer and seller leads",
    body: "Real estate teams need buyer and seller inquiries assigned and followed up, usually inside the CRM they already use.",
  },
];

// Section E: illustrative scenarios (brief section 4). Labeled as examples, not
// client stories. Nothing here claims experience with any property type.
export type Scenario = {
  icon: IconName;
  title: string;
  summary: string;
  body: string;
};

export const scenarios: ReadonlyArray<Scenario> = [
  {
    icon: "key",
    title: "20-unit landlord",
    summary: "Small portfolio: capture and handoffs",
    body: "Website and portal links send visitors to the right place. Approved email or text follow-up acknowledges inquiries, and maintenance requests are routed to a person. Measure missed contacts, handoff completion, and staff handling time.",
  },
  {
    icon: "clipboard",
    title: "75-unit residential manager",
    summary: "Owners and renters kept separate",
    body: "Separate owner and renter forms feed follow-up for each audience, and neutral review requests go to owners and residents under the same rules. Owner consultations and tours are reported separately.",
  },
  {
    icon: "headset",
    title: "250-unit leasing operation",
    summary: "After-hours calls and approved FAQs",
    body: "An after-hours AI voice pilot and approved FAQ chat sit alongside the existing work-order escalation. Measure transfer success, answer accuracy, and tour requests. Screening stays with people.",
  },
  {
    icon: "calendar",
    title: "40 short and midterm rentals",
    summary: "Direct inquiries and guest FAQs",
    body: "A website and permitted direct-inquiry follow-up work alongside guest FAQ support through the existing property management system. Booking platform terms are checked first. Measure response times, exceptions, and correction work.",
  },
  {
    icon: "lead",
    title: "Small brokerage",
    summary: "Real estate: lead assignment and follow-up",
    body: "A website conversion review plus lead assignment and follow-up, inside or alongside the CRM the brokerage already uses. Measure contact attempts, conversations, appointments, and duplicate campaigns.",
  },
];

export const scenarioNote =
  "These are illustrative workflows, not OKIKO HIGH case studies, and no client results are implied. A brokerage page would use real-estate-specific wording rather than tenant and maintenance messaging.";

// Section F: existing software. Platform names are discovery inputs only.
export const compatibilityChecks: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Property management software",
    body: "To assess: AppFolio, Buildium, and Yardi. Review their leasing, resident communication, maintenance, website, and API access first. Your existing software may already solve the gap.",
  },
  {
    title: "Rental and guest platforms",
    body: "To assess: Guesty and Hostaway. Check supported channels, permissions, and how messages are ordered before adding another layer.",
  },
  {
    title: "Brokerage CRMs",
    body: "To assess: Follow Up Boss and kvCORE/BoldTrail. Confirm the actual account, plan, and capabilities before adding brokerage automation.",
  },
  {
    title: "What must move between systems",
    body: "List which fields and actions a connection has to handle, such as creating a contact or assigning an inquiry. A product name alone confirms none of these.",
  },
  {
    title: "Permissions, plans, and failures",
    body: "Access depends on your account and plan. Define how duplicate contacts are recognized and who is told when a sync fails.",
  },
  {
    title: "Compatibility assessment required",
    body: "Listed software is a discovery input, not a promised integration. OKIKO HIGH's tested integrations are not yet confirmed.",
  },
];

export const softwareNote = {
  lead: "Replacing your property management software is not the default.",
  detail:
    "Yardi documents multichannel AI communication in its own Chat IQ product, so existing features should be reviewed first. That describes Yardi, not an OKIKO HIGH integration.",
  source: sources.yardiChatIq,
};

// Section G: "Can assist / Must escalate" comparison.
export const canHandle: ReadonlyArray<string> = [
  "Answering a short list of approved questions",
  "Capturing an inquiry and routing it as an owner, prospect, or resident contact",
  "Pointing to tour and application steps from the authoritative listing",
  "Assigning a named person or a monitored callback task",
];

export const mustEscalate: ReadonlyArray<string> = [
  "Maintenance emergencies, which follow your approved instructions and staffed backup",
  "Tenant screening and application decisions",
  "Legal notices, accounting, and trust funds",
  "Accommodation requests and sensitive personal information",
  "Rent or availability questions without a validated information source",
  "Any question with no approved answer",
];

export const failedTransfer = {
  title: "Example: a transfer that fails",
  body: "A caller asks for a person, but the transfer does not connect. The workflow creates a monitored callback task for a named person, so the caller is not left on an unanswered line. An answered call is not the same as a completed human handoff, so this path is tested before launch.",
};

export const handoffNote = {
  lead: "Say when it is AI, and always offer a person.",
  detail:
    "The Fair Housing Act prohibits housing discrimination on listed protected grounds, so scripts for housing contacts should be reviewed for steering and unequal information. This is a US federal baseline, local rules differ, and this page is not legal advice.",
  source: sources.hudFairHousing,
};

// Section H: sample metric definitions. No results are shown or implied.
export const metricDefinitions: ReadonlyArray<{ icon: IconName; metric: string; meaning: string }> = [
  {
    icon: "clock",
    metric: "Acknowledgment and real response",
    meaning: "Time to an automated acknowledgment, and separately the median and slowest time until a person follows up, against a baseline.",
  },
  {
    icon: "flag",
    metric: "Inquiries with an owner",
    meaning: "The share of eligible inquiries assigned to a responsible person with a next action.",
  },
  {
    icon: "transfer",
    metric: "Handoff reliability",
    meaning: "Scripted emergency and transfer tests that reach the approved path before launch, and failed transfers after it.",
  },
  {
    icon: "check",
    metric: "Answer accuracy",
    meaning: "Incorrect answers found and corrected, tracked alongside handling time so savings are real, not assumed.",
  },
  {
    icon: "analytics",
    metric: "Funnel stages",
    meaning: "Owner consultations, tours, applications, leases, and signed management agreements, reported separately.",
  },
  {
    icon: "bell",
    metric: "Opt-outs and complaints",
    meaning: "Opt-outs, duplicate contacts, and customer complaints, reported next to efficiency figures.",
  },
];

export const measurementNote = {
  body: "Compare results with your own baseline, not a general benchmark. No verified industry-wide figure exists for this combination of services, and no results are shown on this page. Attribution does not prove that automation caused every change, and pricing, demand, inventory, and staff follow-through all affect leasing and owner acquisition.",
};

// Section I: process. Six steps from the research pack.
export const processSteps: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "search",
    title: "Map",
    body: "List the owner, prospect, resident, guest, and brokerage inquiries separately.",
  },
  {
    icon: "clipboard",
    title: "Audit",
    body: "Review your website, profiles, existing software, consent records, and staff handoffs.",
  },
  {
    icon: "flag",
    title: "Select",
    body: "Choose a small first workflow and identify its authoritative data source.",
  },
  {
    icon: "integrations",
    title: "Configure",
    body: "Set up approved content, routing, follow-up, and any permitted integrations.",
  },
  {
    icon: "check",
    title: "Test",
    body: "Try incorrect information, emergencies, opt-outs, duplicate contacts, and failed transfers.",
  },
  {
    icon: "rocket",
    title: "Pilot",
    body: "Measure against the baseline and expand only after the workflow runs reliably.",
  },
];

export const exclusions: ReadonlyArray<string> = [
  "Tenant screening decisions",
  "Rent-setting",
  "Legal notices",
  "Trust accounting",
  "Emergency diagnosis",
  "Autonomous maintenance dispatch",
  "Guaranteed occupancy or rankings",
  "Untested integration promises",
];

export const processNote =
  "Worldwide service coverage does not mean every workflow is permitted in every country. Messaging, calling, recording, and housing rules are reviewed for the places your business and contacts are actually located. Pricing is not published here and is defined in the written proposal.";

// Single source for the visible FAQ section and the FAQPage JSON-LD.
export const faqs: Faq[] = [
  {
    question: "What is property management marketing automation?",
    answer:
      "It connects inquiry capture, assignment, approved responses, and follow-up around a property business's customer journeys. Owner acquisition, leasing, and resident support should use distinct workflows rather than one generic campaign.",
  },
  {
    question: "Does marketing automation replace our property management software?",
    answer:
      "It does not need to. The recommended approach keeps the existing operational system and adds only marketing or communication functions that address a verified gap.",
  },
  {
    question: "Can a workflow connect to AppFolio, Buildium, or Yardi?",
    answer:
      "Compatibility depends on the product, subscription, permissions, and required data flows. Existing capabilities should be reviewed and any proposed connection tested before compatibility is promised.",
    sources: [sources.yardiChatIq],
  },
  {
    question: "Can AI answer after-hours leasing calls?",
    answer:
      "AI can be configured for approved questions, inquiry capture, and handoffs. Reliable operation requires current information, clear AI disclosure, and a fallback when it cannot answer or transfer the call.",
    sources: [sources.yardiChatIq],
  },
  {
    question: "Can AI handle maintenance emergencies?",
    answer:
      "AI should not independently diagnose an emergency or decide that a situation is safe. A proposed intake workflow should follow operator-approved escalation instructions and provide a staffed backup route.",
  },
  {
    question: "Can a chatbot provide current rent and availability?",
    answer:
      "Only a validated information source can support reliable current answers. Without that connection, the chatbot should direct visitors to the authoritative listing or a staff member.",
  },
  {
    question: "Can rental prospects receive automated text follow-up?",
    answer:
      "Automated messaging needs a reviewed consent and compliance process appropriate to the message and technology. Permission should be recorded, opt-outs supported, and marketing separated from operational communication.",
  },
  {
    question: "Can each rental property have a Google Business Profile?",
    answer:
      "Google lists rental and for-sale properties as ineligible. Qualifying sales or leasing offices may be eligible, subject to the full business eligibility requirements.",
    sources: [sources.googleGbpEligibility],
  },
  {
    question: "Can we request reviews from both tenants and owners?",
    answer:
      "Genuine customers can be invited under neutral, consistent rules. Google prohibits incentives and selectively requesting positive reviews, so invitations must not depend on a favorable satisfaction score.",
    sources: [sources.googleReviewPolicy],
  },
  {
    question: "What results should we measure?",
    answer:
      "Start with response times, assignment completion, handoff reliability, answer accuracy, and staff handling time. Then track consultations, tours, applications, leases, or signed management agreements without claiming automation caused every change.",
  },
];
