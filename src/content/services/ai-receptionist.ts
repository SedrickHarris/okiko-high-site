// Content for /services/ai-receptionist.
// Source: page brief and research pack for "AI Receptionist for Inbound Calls".
// Availability confirmed by the owner (2026-10-11): the page is indexable, listed in the
// sitemap, and emits Service schema. Intentionally not stated here: pricing, results,
// supported-system, or human-backup claims. Open items live in the page brief's
// "Proof gaps" section.

import type { Faq, SourceLink } from "./website-design";

export const aiReceptionistPage = {
  path: "/services/ai-receptionist",
  title: "AI Receptionist for Small Business",
  description:
    "Explore AI call answering, calendar booking, human routing, and after-hours workflows. Discuss your call-handling needs with OKIKO HIGH.",
  h1: "AI Receptionist for Inbound Calls, Booking, and Routing",
  serviceType: "AI receptionist and inbound call handling",
  // Primary contact action is TBD in docs/01. Point the CTA at one place so it
  // can change once the owner confirms the contact path.
  primaryCta: { label: "Discuss Your Call-Handling Workflow", href: "/contact" },
} as const;

export const sources = {
  highlevelVoice: {
    label: "HighLevel Support, How to Create Voice AI Agents",
    href: "https://help.gohighlevel.com/support/solutions/articles/155000004107-how-to-create-voice-ai-agents",
  },
  highlevelBooking: {
    label: "HighLevel Support, Appointment Booking in Voice AI",
    href: "https://help.gohighlevel.com/support/solutions/articles/155000005293-appointment-booking-in-voice-ai",
  },
  highlevelPricing: {
    label: "HighLevel Support, AI product pricing",
    href: "https://help.gohighlevel.com/support/solutions/articles/155000006652-ai-product-pricing",
  },
  invocaReport: {
    label: "Invoca, Home Services Lead Conversion Benchmarks Report (2026)",
    href: "https://www.invoca.com/reports/the-invoca-home-services-lead-conversion-benchmarks-report-2026",
  },
  euAiTransparency: {
    label: "European Commission, Guidelines on AI transparency obligations",
    href: "https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations",
  },
  rcfp: {
    label: "Reporters Committee, Introduction to the reporter's recording guide",
    href: "https://www.rcfp.org/introduction-to-reporters-recording-guide/",
  },
  fccRuling: {
    label: "FCC, Declaratory Ruling FCC 24-17 (2024)",
    href: "https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf",
  },
  smithPricing: {
    label: "Smith.ai, live receptionist pricing",
    href: "https://smith.ai/pricing/receptionists",
  },
  rubyPricing: {
    label: "Ruby, plans and pricing",
    href: "https://www.ruby.com/plans-and-pricing/",
  },
} satisfies Record<string, SourceLink>;

// Section 1: what the service covers.
export const capabilities = [
  {
    icon: "call",
    title: "Answer inbound calls",
    body: "Pick up calls on the schedule you set: every call, overflow when your line is busy, or after hours.",
  },
  {
    icon: "clipboard",
    title: "Collect intake details",
    body: "Capture the caller's name, contact details, and the specifics your team needs before calling back.",
  },
  {
    icon: "calendar",
    title: "Book eligible appointments",
    body: "Check availability in a connected calendar and book only the appointment types you approve.",
  },
  {
    icon: "transfer",
    title: "Route to a person",
    body: "Transfer to an approved phone number, or record a callback request when no one picks up.",
  },
  {
    icon: "clock",
    title: "Cover overflow and after hours",
    body: "Give callers a clear next step when your team is busy or the office is closed.",
  },
  {
    icon: "mail",
    title: "Trigger follow-up",
    body: "Save the call outcome and send permitted notifications or follow-up to your team.",
  },
] as const;

export const notAssumed = [
  "A staffed answering service or guaranteed human availability",
  "Outbound calling campaigns",
  "Emergency response, diagnosis, or guaranteed dispatch",
  "Professional advice, such as legal, financial, or medical guidance",
  "Integrations that have not been tested with your systems",
  "Coverage in every language or country",
] as const;

// Section 2: illustrative script. Fictional business and caller. Not a recording
// and not a client result.
export const sampleCall = [
  {
    speaker: "Assistant",
    line: "You're speaking with an AI assistant for [business name]. How can I help?",
    note: "Disclosure comes first. Any recording notice is added only where your approved setup requires it.",
  },
  {
    speaker: "Caller",
    line: "My kitchen sink is leaking under the cabinet. It's at 123 Main Street. Actually, sorry, 132 Main Street.",
    note: "A caller interrupts and corrects a detail.",
  },
  {
    speaker: "Assistant",
    line: "Thanks. I have 132 Main Street. Is that right?",
    note: "The assistant confirms the corrected detail back to the caller.",
  },
  {
    speaker: "Caller",
    line: "Yes. How much will this cost?",
    note: "A question outside the approved answers.",
  },
  {
    speaker: "Assistant",
    line: "I can't quote a price over the phone. I can have a team member confirm it, or I can request a visit time for you.",
    note: "The assistant does not guess. It offers an approved next step.",
  },
  {
    speaker: "Caller",
    line: "Can I just talk to a person?",
    note: "A request for a human.",
  },
  {
    speaker: "Assistant",
    line: "I'll try to connect you now. ... No one is available right now. I've recorded your request and a team member will call you back. I can't promise a time.",
    note: "The transfer fails, and the assistant says so plainly instead of implying someone accepted the request.",
  },
] as const;

export const sampleOutcome = {
  heading: "Resulting call summary (illustrative)",
  rows: [
    { icon: "clipboard", label: "Request", value: "Service request: leak under kitchen sink" },
    { icon: "pin", label: "Address", value: "132 Main Street (corrected during the call)" },
    { icon: "calendar", label: "Booking", value: "Not confirmed: visit time requested, awaiting your confirmation" },
    { icon: "transfer", label: "Transfer", value: "Attempted, unanswered" },
    { icon: "flag", label: "Next step", value: "Callback task assigned to a named person" },
  ],
} as const;

// Section 3: sourced stat and the different fixes.
export const callProblems = [
  {
    icon: "call",
    heading: "Unanswered calls",
    body: "Fix with coverage: overflow or after-hours answering, and tested forwarding.",
  },
  {
    icon: "clipboard",
    heading: "Incomplete intake",
    body: "Fix with required fields and a clear standard for what a usable record contains.",
  },
  {
    icon: "clock",
    heading: "Delayed callbacks",
    body: "Fix with notifications and one named owner for every follow-up.",
  },
  {
    icon: "transfer",
    heading: "Failed handoffs",
    body: "Fix with transfer testing and an honest fallback when no one answers.",
  },
] as const;

// Section 4: setup workflow.
export const processSteps = [
  {
    icon: "clipboard",
    title: "Define the call flow",
    body: "Decide which calls the assistant may handle, the answers it may give, the intake fields to collect, booking rules, and escalation conditions.",
    clientInput: "Which calls to handle, approved answers, and urgency rules.",
  },
  {
    icon: "phone",
    title: "Choose coverage",
    body: "Connect an eligible phone number and set direct answering, backup answering, or scheduled coverage.",
    clientInput: "Phone provider details and when you want coverage.",
  },
  {
    icon: "integrations",
    title: "Connect your systems",
    body: "Connect business information, calendars, contact fields, workflows, and transfer destinations.",
    clientInput: "Calendar and system access, plus who receives transfers.",
  },
  {
    icon: "shield",
    title: "Set the actions",
    body: "Configure the AI disclosure, intake questions, and each approved action, plus the notifications that follow a call.",
    clientInput: "Approval of wording and follow-up messages.",
  },
  {
    icon: "call",
    title: "Test the full phone path",
    body: "Place real phone calls and check answering, transfers, booking results, and failed actions. A browser test cannot validate a human transfer.",
    clientInput: "Test calls and your sign-off before coverage expands.",
  },
  {
    icon: "repeat",
    title: "Review and adjust",
    body: "Review failures, adjust the workflow, and agree who reviews and maintains it.",
    clientInput: "Review of flagged calls and agreed maintenance responsibilities.",
  },
] as const;

export const routingWarning =
  "Routing settings, working hours, voicemail, and fallback configuration all affect whether the assistant answers, which is why the whole call path gets tested.";

// Section 5: booking.
export const bookingChecks = [
  { icon: "calendar", text: "Appointment types you want booked by phone" },
  { icon: "globe", text: "Time zones for the business and the caller" },
  { icon: "clock", text: "Availability rules and real capacity" },
  { icon: "mail", text: "The confirmation message the caller receives" },
  { icon: "clipboard", text: "Which contact and CRM fields get updated" },
] as const;

export const bookingOutcomes = [
  {
    icon: "calendar",
    heading: "Confirmed appointment",
    body: "Appears on the connected calendar with the agreed appointment type and time zone.",
  },
  {
    icon: "clipboard",
    heading: "Appointment request",
    body: "Captured with the caller's details and held for your team to confirm.",
  },
] as const;

// Section 6: handoff and urgency.
export const handoffPaths = [
  {
    icon: "clipboard",
    situation: "Routine request",
    does: "Collects intake, then books an eligible appointment or captures a request, following your rules.",
    doesNot: "Answer beyond the information you approved.",
  },
  {
    icon: "transfer",
    situation: "Caller asks for a person",
    does: "Tries the approved transfer destination. If no one answers, says so and records a callback request with an owner.",
    doesNot: "Imply someone has accepted the request when no one has.",
  },
  {
    icon: "bell",
    situation: "Urgent service request",
    does: "Collects location and callback details, applies your approved urgency criteria, and attempts the on-call route.",
    doesNot: "Promise dispatch or an arrival time unless it is confirmed.",
  },
  {
    icon: "flag",
    situation: "Immediate danger or medical emergency",
    does: "Gives an approved instruction to contact the applicable emergency service.",
    doesNot: "Diagnose, give improvised safety advice, or act as an emergency service.",
  },
] as const;

// Section 7: comparison.
export const comparisonRows = [
  {
    icon: "mail",
    option: "Voicemail",
    handles: "Records a message. No intake conversation or booking during the call.",
    coverage: "Always on, but the caller waits for a callback.",
    cost: "Usually part of your existing phone plan.",
  },
  {
    icon: "call",
    option: "AI receptionist",
    handles: "Answers, collects intake, books eligible appointments, routes, and records the outcome.",
    coverage: "Runs on the schedule you set. Human backup depends on your setup.",
    cost: "Often a subscription plus usage, with telephony billed separately.",
  },
  {
    icon: "headset",
    option: "Human answering service",
    handles: "A person converses, screens, and escalates. Depth of service varies by provider.",
    coverage: "Staffed coverage supplied by the provider.",
    cost: "Commonly per-call or per-minute plans.",
  },
  {
    icon: "lead",
    option: "In-house receptionist",
    handles: "Calls plus other front-desk duties and knowledge of your business.",
    coverage: "Follows staffing: breaks, absences, and hours.",
    cost: "Wages, benefits, hiring, training, and absence coverage.",
  },
] as const;

export const totalCostItems = [
  { icon: "server", text: "Telephony and software or platform fees" },
  { icon: "repeat", text: "Setup and ongoing maintenance" },
  { icon: "headset", text: "Human backup, where you want it" },
  { icon: "clock", text: "Staff time spent reviewing and correcting calls" },
] as const;

// Section 8: boundaries.
export const boundaryColumns = [
  {
    icon: "check",
    tone: "included",
    heading: "Configured",
    note: "Set in the workflow.",
    items: [
      "A clear AI disclosure at the start of the call",
      "Limits on approved answers, with an instruction not to guess",
      "Answering schedule and routing",
      "Transcript and summary settings",
    ],
  },
  {
    icon: "plus",
    tone: "optional",
    heading: "Tested",
    note: "Checked on real phone connections.",
    items: [
      "Transfers, including when no one answers",
      "Interruptions and corrections",
      "Representative accents and background noise",
      "Unsupported requests",
      "Booking results and failed actions",
    ],
  },
  {
    icon: "minus",
    tone: "muted",
    heading: "Requires approval",
    note: "Reviewed before calls go live.",
    items: [
      "Recording and transcription wording, with a consent step where required",
      "Retention, access, and correction responsibilities",
      "Consent for any text follow-up",
      "Emergency instruction wording",
      "Any use involving health information",
    ],
  },
] as const;

// Section 9: measurement. No figures: no client results are published.
export const measures = [
  {
    icon: "call",
    measure: "Eligible calls handled",
    counted: "Handled calls divided by eligible routed calls, split into AI, voicemail, and human answering.",
  },
  {
    icon: "clipboard",
    measure: "Complete intake",
    counted: "Records with every required field, checked for accuracy by hand.",
  },
  {
    icon: "calendar",
    measure: "Correct bookings",
    counted: "Correct calendar events divided by attempted eligible bookings.",
  },
  {
    icon: "transfer",
    measure: "Transfer and escalation outcomes",
    counted: "Successful transfers and acknowledged alerts divided by attempts, including unavailable staff.",
  },
  {
    icon: "clock",
    measure: "Staff correction time",
    counted: "Minutes spent reviewing, correcting, and calling back, before versus after.",
  },
  {
    icon: "analytics",
    measure: "Total operating cost",
    counted: "Telephony, software, setup, maintenance, and any human backup.",
  },
] as const;

export const keepDistinct = [
  { icon: "call", text: "Answered calls" },
  { icon: "lead", text: "Qualified opportunities" },
  { icon: "check", text: "Completed jobs" },
  { icon: "analytics", text: "Revenue" },
] as const;

// Section 10: single source for the visible FAQ section and the FAQPage JSON-LD.
export const faqs: Faq[] = [
  {
    question: "Will callers know they are speaking with AI?",
    answer:
      "The recommended setup includes a clear opening disclosure that the caller is speaking with an AI assistant. The aim is helpful, transparent call handling, not pretending to be a person. Applicable EU transparency rules also require disclosure in relevant circumstances.",
    sources: [sources.euAiTransparency],
  },
  {
    question: "Can an AI receptionist book into my calendar?",
    answer:
      "Voice AI platform documentation describes appointment booking through a connected calendar. Your calendar, appointment types, availability rules, time zones, and capacity need to be checked and tested before live booking is enabled.",
    sources: [sources.highlevelBooking],
  },
  {
    question: "What happens if someone calls about an emergency?",
    answer:
      "The assistant should follow an approved escalation flow rather than make its own emergency decisions. Urgent service requests can be routed to an agreed contact, while immediate danger or a medical emergency calls for an instruction to contact the appropriate emergency service. The assistant should not promise diagnosis or dispatch.",
  },
  {
    question: "Is recording customer calls legal?",
    answer:
      "Recording can be lawful, but consent requirements depend on the jurisdiction and the circumstances. Recording, transcription, disclosures, and calls that cross state lines should be reviewed before activation instead of being treated as automatically permitted.",
    sources: [sources.rcfp],
  },
  {
    question: "Can it answer only after hours or when we are busy?",
    answer:
      "Voice AI platform documentation describes direct answering, backup answering, and scheduled availability. The complete call path needs testing because forwarding, voicemail, timeouts, and operating-hour settings can affect which system answers.",
    sources: [sources.highlevelVoice],
  },
  {
    question: "Can callers reach a human?",
    answer:
      "Platform documentation describes transfers to a human phone number. The workflow also needs clear availability rules and a fallback when nobody answers, so callers are not left thinking someone has accepted their request when no one has.",
    sources: [sources.highlevelVoice],
  },
  {
    question: "Can it handle interruptions, accents, and background noise?",
    answer:
      "Platforms provide speech-related and interruption settings, but these do not establish reliable performance for every caller. Representative accents, noisy calls, interruptions, and corrections should be part of testing before launch.",
    sources: [sources.highlevelVoice],
  },
  {
    question: "Can it send a text after the call?",
    answer:
      "Platforms support text actions and follow-up workflows. Messages still need appropriate consent, opt-out handling, and any applicable sender registration. An inbound call should not be treated as blanket permission for promotional texts.",
    sources: [sources.highlevelVoice],
  },
  {
    question: "Will I receive transcripts and call summaries?",
    answer:
      "Platforms provide call logs with transcripts and summaries. Whether these are enabled, who can access them, and how long they are kept should be defined for the implementation, particularly when calls contain sensitive information.",
    sources: [sources.highlevelVoice],
  },
  {
    question: "How much will OKIKO HIGH's AI receptionist service cost?",
    answer:
      "Pricing and service packages have not been confirmed yet. Setup, recurring service, usage, telephony, integrations, maintenance, and any human-backup costs need to be defined before pricing is published.",
  },
];

// Quick fact for the boundaries section. The FCC ruling is the source; reading it
// as a limit on outbound calls rather than inbound answering is this page's own scoping.
export const aiVoiceRuleNote = {
  lead: "The FCC has confirmed that AI-generated voices count as an \"artificial or prerecorded voice\" under the TCPA.",
  detail:
    "Covered calls need the called party's prior express consent. That ruling concerns covered outbound calls and is not a ban on answering inbound calls with AI, but callbacks and other outbound workflows need their own review.",
  sources: [sources.fccRuling],
};
