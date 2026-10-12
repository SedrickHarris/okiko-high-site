// Content for /industries/property-management-real-estate.
// Source: the Property Management and Real Estate research pack and the updated
// "Audience Page - Property Management and Real Estate" brief. Publication gate:
// docs/01 lists Professional Services (which includes real estate) as a FUTURE
// opportunity, not a current client category, and all six services named here are
// still TBD or only partly confirmed. No pricing, delivery scope, tested
// integrations, property or real estate experience, demonstration, or client proof
// exists yet. The page therefore describes a proposed approach, not a package, and
// makes no availability, pricing, results, compatibility, or specialist-experience
// claims. This page is the audience hub: it recognizes the visitor's business type
// and routes them onward. Open items live in the brief's "Proof gaps" section.

import type { IconName } from "@/components/ui/icons";
import type { Faq, SourceLink } from "../services/website-design";

export const propertyRealEstatePage = {
  path: "/industries/property-management-real-estate",
  // The root layout appends " | OKIKO HIGH".
  title: "Property & Real Estate Marketing",
  description:
    "Explore marketing and automation options for property managers, rental operators, and real estate teams, with clear workflows and human handoffs.",
  h1: "Marketing and Automation for Property Management and Real Estate",
  // Primary contact action is TBD in docs/01. Point every CTA here so it can change
  // in one place once the owner confirms the contact path.
  primaryCta: { label: "Discuss Your Inquiry Workflow", href: "/contact" },
  secondaryCta: { label: "Find Your Workflow", href: "#business-types" },
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
  guestyInbox: {
    label: "Guesty, unified inbox",
    href: "https://www.guesty.com/features/unified-inbox/",
  },
  followUpBoss: {
    label: "Follow Up Boss, lead engagement integrations",
    href: "https://www.followupboss.com/integrations?tag=Lead+Engagement",
  },
  operatorDiscussion: {
    label: "Reddit r/PropertyManagement, property manager calls (operator discussion)",
    href: "https://www.reddit.com/r/PropertyManagement/comments/13zl3o0/property_manager_calls/",
  },
  hudFairHousing: {
    label: "HUD, Fair Housing Act overview",
    href: "https://www.hud.gov/helping-americans/fair-housing-act-overview",
  },
  texasPropertyCode92: {
    label: "Texas Property Code, chapter 92 (example of a state landlord-tenant statute)",
    href: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm",
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

// Section 1: the introduction. Three working principles from the brief.
export const introPoints: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "integrations",
    title: "Connect marketing to follow-through",
    body: "Digital marketing only helps when an inquiry is captured, routed to a person, and followed up. The approach connects those steps.",
  },
  {
    icon: "swap",
    title: "Different readers, different paths",
    body: "Property managers, rental operators, and real estate teams handle first contact differently, so each gets its own path.",
  },
  {
    icon: "clipboard",
    title: "Practical tasks, not promised growth",
    body: "The focus is everyday customer management. No ranking, occupancy, or revenue outcome is promised.",
  },
];

export const introNote = {
  lead: "Connected marketing and follow-up is an established category.",
  detail:
    "Property-management marketing providers such as Upkeep Media already present marketing and follow-up as one service. That shows the category exists. It is not an OKIKO HIGH result, and no approved OKIKO HIGH proof is available yet.",
  source: sources.upkeepMedia,
};

// Section 2: business types. Links go only to pages that exist today.
export type BusinessType = {
  icon: IconName;
  title: string;
  needs: string;
  links: ReadonlyArray<{ label: string; href: string }>;
};

export const businessTypes: ReadonlyArray<BusinessType> = [
  {
    icon: "clipboard",
    title: "Residential managers and leasing offices",
    needs:
      "Separate paths for owner acquisition and for renters and residents, with after-hours calls and routine questions handled by approved steps.",
    links: [
      { label: "website design for property businesses", href: "/services/website-design" },
      { label: "after-hours AI call handling", href: "/services/ai-receptionist" },
      { label: "Google Business Profile support", href: "/services/google-business-profile-optimization" },
    ],
  },
  {
    icon: "key",
    title: "Landlords",
    needs:
      "A scope that fits your staffing and portfolio size: a clear website, dependable acknowledgment, and a named person for each inquiry.",
    links: [
      { label: "website design for property businesses", href: "/services/website-design" },
      { label: "inquiry follow-up automation", href: "/services/sms-email-automation" },
    ],
  },
  {
    icon: "calendar",
    title: "Short and midterm rental operators",
    needs:
      "Guest and reservation-centered communication that works through the booking platforms and property management system you already use.",
    links: [
      { label: "AI website chat", href: "/services/ai-chatbots" },
      { label: "inquiry follow-up automation", href: "/services/sms-email-automation" },
    ],
  },
  {
    icon: "lead",
    title: "Agents and brokerages",
    needs:
      "Buyer and seller lead assignment and appointment follow-up, usually inside the CRM you already have. Another CRM is not assumed.",
    links: [
      { label: "inquiry follow-up automation", href: "/services/sms-email-automation" },
      { label: "website design for property businesses", href: "/services/website-design" },
    ],
  },
];

export const businessTypesNote = {
  scopeLabel: "Scope being confirmed",
  body: "These are the business types this page is written for. Property management and real estate are planned audiences, and OKIKO HIGH confirms which workflows it can responsibly offer before any implementation. Existing page links are shown only for services that have their own page.",
};

export const businessTypesQuickAnswer = {
  lead: "Owner leads and tenant inquiries are different journeys, and so are guests and brokerage leads.",
  detail:
    "Upkeep Media separates owner leads from tenant inquiries on its own pages. Guesty documents a guest inbox and Follow Up Boss documents brokerage lead engagement, which shows that guest and brokerage software contexts differ. Neither is an OKIKO HIGH integration.",
  sources: [sources.upkeepMedia, sources.guestyInbox, sources.followUpBoss],
};

// Section 3: shared problems, different consequences.
export const problems: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "call",
    title: "Repeated calls, no next step",
    body: "Repeated calls and unanswered inquiries compete with staff's existing workload. A caller who reaches voicemail may have no assigned follow-up.",
  },
  {
    icon: "swap",
    title: "Different contacts, one inbox",
    body: "Owners, rental prospects, residents, and guests all need different answers. When they share one path, each waits for the wrong person.",
  },
  {
    icon: "flag",
    title: "Follow-up without an owner",
    body: "Tour requests, application questions, and owner consultations stall when no one is responsible for the next action.",
  },
  {
    icon: "clock",
    title: "Repetitive questions",
    body: "Routine questions about listings, applications, and office hours take staff time away from the work that needs a person.",
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
    icon: "key",
    type: "Property owner",
    response: "Service information and a consultation follow-up, not a leasing script.",
    person: "A named owner-acquisition contact",
  },
  {
    icon: "search",
    type: "Rental prospect",
    response: "Listing, tour, and application steps drawn from the authoritative listing.",
    person: "A leasing contact or a monitored callback task",
  },
  {
    icon: "bell",
    type: "Resident",
    response: "An approved support route. Maintenance follows your escalation instructions.",
    person: "Resident services or the maintenance coordinator",
  },
  {
    icon: "calendar",
    type: "Short or midterm rental guest",
    response: "Reservation-specific answers through the existing property or guest system.",
    person: "A named guest-communication contact",
  },
  {
    icon: "lead",
    type: "Buyer or seller lead",
    response: "Assignment and appointment follow-up, usually inside the existing CRM.",
    person: "The assigned agent or team lead",
  },
];

export const gapNotes: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "bell",
    title: "After-hours maintenance is not a leasing inquiry",
    body: "A leasing question can wait for a callback or an approved answer. A maintenance emergency needs your approved escalation instructions and a staffed backup, so the two should never share one script.",
  },
  {
    icon: "analytics",
    title: "Vacancy, seasonality, and listing channels need their own measures",
    body: "Vacancy exposure, seasonal demand, and dependence on listing channels differ by business. Measure against your own baseline. No audience-wide cost or seasonality figure is cited here.",
  },
];

export const problemsNote = {
  lead: "Operators describe repeated calls, application help, and after-hours maintenance worries.",
  detail:
    "This comes from an operator discussion, which is anecdotal. It is not an industry statistic or an OKIKO HIGH result.",
  source: sources.operatorDiscussion,
};

// Section 4: the six candidate services. Every card links to its own service page.
// `layer` is the group heading and also shows in text, so the grouping never depends
// on color.
export type ServiceLayer = "Foundation" | "Presence" | "Inquiry assistance";

export type PropertyServiceCard = {
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
    summary: "Capture the inquiry, assign it, and make the next step clear.",
  },
  {
    layer: "Presence",
    summary: "Keep how you are found and reviewed accurate and consistent.",
  },
  {
    layer: "Inquiry assistance",
    summary: "Optional AI for approved questions, with tested human escalation.",
  },
];

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
    layer: "Presence",
    description:
      "Neutral review requests for owners and residents, and careful replies. Requests follow platform rules, with no gating, incentives, or promises about ratings.",
    buttonLabel: "Explore Reputation Management",
  },
  {
    slug: "google-business-profile-optimization",
    path: "/services/google-business-profile-optimization",
    title: "Google Business Profile Optimization",
    icon: "pin",
    layer: "Presence",
    description:
      "Accurate listing information for a management or leasing office that meets Google's eligibility rules. Eligibility is checked first, because individual rental properties do not qualify.",
    buttonLabel: "Explore Google Business Profile Optimization",
  },
  {
    slug: "ai-chatbots",
    path: "/services/ai-chatbots",
    title: "AI Chatbots",
    icon: "message",
    layer: "Inquiry assistance",
    description:
      "A website assistant that starts with approved FAQs and inquiry capture. It is identified as AI, sends unsupported questions to staff, and offers a route to a person.",
    buttonLabel: "Explore AI Chatbots",
  },
  {
    slug: "ai-receptionist",
    path: "/services/ai-receptionist",
    title: "AI Receptionist and Voice Agents",
    icon: "headset",
    layer: "Inquiry assistance",
    description:
      "A pilot option where call volume and tested human escalation justify the added risk. It needs tested information, routing, and escalation, and it does not handle emergencies or screening decisions.",
    buttonLabel: "Explore the AI Receptionist",
  },
];

export const stackNote = {
  scopeLabel: "Confirm scope",
  scopeNote:
    "Availability and scope of each service are being confirmed. This grouping is a proposed way to prioritize, not a package or a delivery order, and no prices or tiers are set. A busy leasing office may need call coverage before a redesign, and a small landlord may need only a clear website and dependable follow-up.",
  lead: "Google lists rental and for-sale properties as ineligible for a Business Profile.",
  detail:
    "A qualifying management or leasing office can be eligible, subject to the full requirements. Profiles are not created per rental unit.",
  source: sources.googleGbpEligibility,
};

// Section 5: illustrative scenarios (brief section 5). Hypothetical examples from
// the research pack, not client stories. Nothing here claims experience with any
// property type, and no outcomes or benchmarks appear.
export type Scenario = {
  icon: IconName;
  title: string;
  gap: string;
  next: string;
  measure: string;
};

export const scenarios: ReadonlyArray<Scenario> = [
  {
    icon: "key",
    title: "20-unit landlord",
    gap: "Inquiries arrive by phone, email, and the website, with no single place or person assigned.",
    next: "Clear website paths, approved acknowledgment and follow-up, and maintenance requests routed to a person.",
    measure: "Missed contacts, handoff completion, and staff handling time.",
  },
  {
    icon: "clipboard",
    title: "75-unit residential manager",
    gap: "Owner inquiries and renter inquiries share one path and one follow-up.",
    next: "Separate owner and renter forms with their own follow-up, and neutral review requests under the same rules.",
    measure: "Owner consultations and tours, reported separately.",
  },
  {
    icon: "headset",
    title: "250-unit leasing team",
    gap: "After-hours calls and repeated routine questions reach the same staff.",
    next: "Test after-hours intake and escalation beside the existing work-order process. Screening stays with people.",
    measure: "Transfer success, answer accuracy, and tour requests.",
  },
  {
    icon: "calendar",
    title: "40-rental operator",
    gap: "Direct inquiries and guest questions are spread across channels.",
    next: "A website and permitted direct-inquiry follow-up, plus guest-centered workflows through the existing system. Booking platform terms are checked first.",
    measure: "Response times, exceptions, and correction work.",
  },
  {
    icon: "lead",
    title: "Small brokerage",
    gap: "Buyer and seller leads are assigned and followed up unevenly.",
    next: "Improve assignment and follow-up inside the CRM already in use, without automatically adding another one.",
    measure: "Contact attempts, conversations, appointments, and duplicate campaigns.",
  },
];

export const scenarioNote =
  "These are hypothetical workflows, not OKIKO HIGH case studies, and no client results or benchmarks are implied. A brokerage workflow would use real-estate wording rather than tenant and maintenance messaging.";

// Section 6: existing software. Platform names are discovery inputs only.
export const compatibilityChecks: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Property management software",
    body: "Examples to evaluate: AppFolio, Buildium, and Yardi. Review their leasing, resident communication, maintenance, website, and API access before adding overlapping functions.",
  },
  {
    title: "Rental and guest platforms",
    body: "Examples to evaluate: Guesty and Hostaway. Check supported channels, permissions, and how guest messages are ordered before adding another communication layer.",
  },
  {
    title: "Brokerage CRMs",
    body: "Examples to evaluate: Follow Up Boss and kvCORE/BoldTrail. kvCORE has evolved into BoldTrail, so confirm the actual account, plan, and capabilities first.",
  },
  {
    title: "Before compatibility is promised",
    body: "Verify plan access, permissions, which data has to move, how duplicate contacts are recognized, and who is told when a sync fails. A product name alone confirms none of these.",
  },
];

export const existingFirstNote = {
  label: "Assess existing capabilities first",
  body: "Listed software is an example to evaluate, not a supported or tested integration. OKIKO HIGH's tested integrations are not yet confirmed.",
};

export const softwareNote = {
  lead: "Replacing your property management software is not the default.",
  detail:
    "Yardi documents multichannel AI communication in its own Chat IQ product, and Follow Up Boss documents lead engagement features, so existing tools should be reviewed first. That describes those products, not an OKIKO HIGH integration.",
  sources: [sources.yardiChatIq, sources.followUpBoss],
};

// Section 7: "Can assist / Requires a person" comparison.
export const canHandle: ReadonlyArray<string> = [
  "Disclosing that the visitor is talking with AI and offering a route to a person",
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
    "The Fair Housing Act prohibits housing discrimination on listed protected grounds, so scripts and advertising for housing contacts should be reviewed for steering and unequal information. This is a US federal baseline, local rules differ, and this page is not legal advice.",
  source: sources.hudFairHousing,
};

export const noticesNote = {
  lead: "Automated messages do not replace legally required landlord-tenant notices.",
  detail:
    "Notice, recording, transcription, and consent rules vary by jurisdiction. Texas Property Code chapter 92 is one example of a state statute that governs landlord-tenant duties. Workflows are reviewed against the rules where your business and contacts are located.",
  source: sources.texasPropertyCode92,
};

// Section 8: fit and measurement. Recommended evaluation approach only.
export const measureGroups: ReadonlyArray<{
  icon: IconName;
  title: string;
  items: ReadonlyArray<string>;
}> = [
  {
    icon: "gauge",
    title: "Operational measures",
    items: [
      "Time to a real human response, not only an automated acknowledgment",
      "Share of inquiries assigned to a named person",
      "Handoff reliability, including failed transfers",
      "Answer accuracy and correction burden",
      "Opt-outs and complaints",
    ],
  },
  {
    icon: "analytics",
    title: "Business outcomes, tracked separately",
    items: [
      "Owner consultations and signed management agreements",
      "Tours, applications, and leases",
      "Appointments and agreements for real estate teams",
    ],
  },
];

export const measurementNote = {
  body: "Compare results with your own baseline, not a general benchmark. Operational improvements are reported apart from business outcomes, because attribution does not prove that a workflow caused every change. Pricing, demand, inventory, and staff follow-through all affect leasing and owner acquisition. No results are shown on this page.",
};

// Five-step strip. No fixed timeline or guaranteed targets.
export const processSteps: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "search",
    title: "Map",
    body: "List audiences, channels, current systems, and who owns each inquiry type.",
  },
  {
    icon: "clipboard",
    title: "Audit",
    body: "Review your website, profiles, existing software, consent records, and staff handoffs.",
  },
  {
    icon: "check",
    title: "Test",
    body: "Try incorrect information, emergencies, opt-outs, duplicate contacts, and failed transfers on one narrow workflow.",
  },
  {
    icon: "rocket",
    title: "Pilot",
    body: "Run the workflow against your baseline and expand only after it works reliably.",
  },
  {
    icon: "analytics",
    title: "Review",
    body: "Compare results with the baseline, then decide what to keep, change, or stop.",
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
  "Worldwide service coverage does not mean every workflow is permitted or available in every country. Messaging, calling, recording, and housing rules are reviewed for the places your business and contacts are actually located.";

// Final conversion section. The brief's inquiry form is not built (contact path and
// consent wording are TBD in docs/01); this list tells the visitor what to include.
export const inquiryPrompts: ReadonlyArray<string> = [
  "Your business type: residential management, landlord, rental operation, or real estate team",
  "The software you already use",
  "Your approximate portfolio size, where relevant",
  "The main place where inquiries or follow-up break down",
];

// Single source for the visible FAQ section and the FAQPage JSON-LD.
export const faqs: Faq[] = [
  {
    question: "What marketing and automation needs do property businesses share?",
    answer:
      "Common needs include a clear online presence, organized inquiry capture, assigned follow-up, and consistent customer communication. The workflow should still distinguish owners, rental prospects, residents, guests, and brokerage clients.",
  },
  {
    question: "Is the same approach suitable for property managers and real estate agents?",
    answer:
      "Not without adapting it. Property managers need owner, leasing, and resident-support paths, while agents and brokerages need buyer and seller lead assignment and appointment follow-up.",
  },
  {
    question: "How do short and midterm rental workflows differ?",
    answer:
      "Rental-operator communication centers on reservations, booking channels, and guest stays rather than long-term applications and resident support. Existing Guesty or Hostaway capabilities should be reviewed before adding another communication layer.",
    sources: [sources.guestyInbox],
  },
  {
    question: "Do we need to replace our existing software?",
    answer:
      "Not necessarily. The recommended approach starts by reviewing current capabilities and adds only functions that address a verified gap, without unnecessary duplication.",
  },
  {
    question: "Can a workflow connect to AppFolio, Buildium, or Yardi?",
    answer:
      "Compatibility depends on the product, subscription, permissions, and required data flows. Any proposed connection should be tested before compatibility is promised.",
    sources: [sources.yardiChatIq],
  },
  {
    question: "Should a brokerage add another CRM if it already uses Follow Up Boss or kvCORE?",
    answer:
      "Not automatically. Review the existing account, native automation, assignment process, and staff adoption first. kvCORE has evolved into BoldTrail, so the actual account capabilities also need confirmation.",
    sources: [sources.followUpBoss],
  },
  {
    question: "Can AI help with after-hours inquiries?",
    answer:
      "AI can be configured for approved questions, inquiry capture, and handoffs. It needs clear disclosure, reliable information, and a human fallback when it cannot answer or transfer.",
    sources: [sources.yardiChatIq],
  },
  {
    question: "Can AI make decisions about maintenance emergencies?",
    answer:
      "AI should not independently diagnose an emergency or decide that a situation is safe. Any proposed intake workflow should follow operator-approved escalation instructions and provide a staffed backup route.",
  },
  {
    question: "Can rental prospects receive automated text follow-up?",
    answer:
      "Automated messaging needs a reviewed consent and compliance process appropriate to the message and technology. Permission should be recorded, opt-outs supported, and marketing separated from operational communication.",
  },
  {
    question: "Can every rental property have a Google Business Profile?",
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
    question: "What should we measure before and after a workflow change?",
    answer:
      "Measure response times, assignment completion, handoff reliability, answer accuracy, staff handling time, and correction work. Track consultations, tours, applications, leases, or agreements separately, without claiming the workflow caused every change.",
  },
];
