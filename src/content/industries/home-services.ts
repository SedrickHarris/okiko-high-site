// Content for /industries/home-services.
// Source: the Home Services audience page brief. Publication gate: docs/01 lists Home
// Services as a currently served audience, but every service named here is still
// TBD or only partly confirmed, and no pricing, ownership or exit terms, integrations,
// demonstration, or client proof has been supplied. The page therefore describes a
// proposed approach, not a package, and makes no availability, pricing, results,
// compatibility, or experience-in-a-trade claims. Open items live in the brief's
// "Proof gaps" section.

import type { IconName } from "@/components/ui/icons";
import type { Faq, SourceLink } from "../services/website-design";

export const homeServicesPage = {
  path: "/industries/home-services",
  // The root layout appends " | OKIKO HIGH".
  title: "Home Services Marketing Agency",
  description:
    "Connect your website, customer inquiries, estimates, and follow-up. Explore a practical marketing approach for your home-service business.",
  h1: "Home Services Marketing and Automation Built Around Your Workflow",
  // Primary contact action is TBD in docs/01. Point every CTA here so it can change
  // in one place once the owner confirms the contact path.
  primaryCta: { label: "Talk Through Your Current Workflow", href: "/contact" },
} as const;

export const sources = {
  jobberReport: {
    label: "Jobber, Home Service Trends Report",
    href: "https://www.getjobber.com/home-service-trends-report/",
  },
  highlevelJobber: {
    label: "HighLevel Support, How to integrate Jobber with HighLevel",
    href: "https://help.gohighlevel.com/support/solutions/articles/155000005429-how-to-integrate-jobber-with-highlevel",
  },
  googleReviewPolicy: {
    label: "Google, Prohibited and restricted content for reviews",
    href: "https://support.google.com/contributionpolicy/answer/7400114?hl=en",
  },
} satisfies Record<string, SourceLink>;

// Hero workflow strip.
export const workflowStrip: ReadonlyArray<{ icon: IconName; label: string }> = [
  { icon: "search", label: "Website and Google" },
  { icon: "message", label: "Inquiry" },
  { icon: "repeat", label: "Follow-up" },
  { icon: "calendar", label: "Booking or request" },
  { icon: "check", label: "Completed job" },
];

// Section B.
export const problems: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "call",
    title: "Missed calls",
    body: "Calls arrive while your team is on a job or driving, and no one is free to pick up.",
  },
  {
    icon: "clipboard",
    title: "Open estimates",
    body: "An estimate goes out and then sits, with no clear next step or person who owns the follow-up.",
  },
  {
    icon: "calendar",
    title: "Schedule gaps",
    body: "Cancellations leave holes in the schedule that someone has to notice and fill.",
  },
  {
    icon: "star",
    title: "Review requests",
    body: "Asking for reviews is inconsistent, so it depends on who remembers after a job.",
  },
];

export const problemsStat = {
  body: "In Jobber's survey of home-service owners, customer communication and quoting were named as major time drains by 40% and 37% of respondents. These are owner-reported figures from a mixed-trade survey, not measured savings from automation.",
  source: sources.jobberReport,
};

// Section C.
export const workflowSteps: ReadonlyArray<{
  icon: IconName;
  title: string;
  body: string;
  owner: string;
}> = [
  {
    icon: "clipboard",
    title: "Capture the inquiry",
    body: "Record who reached out, how, and the job details your team needs to respond.",
    owner: "System captures; your team defines which details matter",
  },
  {
    icon: "flag",
    title: "Assign the next step",
    body: "Each inquiry goes to a named person or to an approved automated action, so nothing waits on an unclear owner.",
    owner: "Your team names the owner; the system routes",
  },
  {
    icon: "repeat",
    title: "Follow up under defined rules",
    body: "Messages go out only where permitted, at a limited frequency, and stop when the customer books, declines, or opts out.",
    owner: "System sends within rules you approve",
  },
  {
    icon: "analytics",
    title: "Track what becomes a booking",
    body: "Keep requests, valid bookings, and completed jobs separate, so activity is not mistaken for results.",
    owner: "Shared: the system records; your team confirms",
  },
];

export const workflowNote =
  "Connected marketing and intake is not unique on its own, since other home-service marketing providers describe similar approaches. What matters is who owns each step in your business and how the rules are set.";

// Section D: service priorities. Links go only to pages that exist.
export type StackLayer = {
  icon: IconName;
  title: string;
  intro: string;
  items: ReadonlyArray<{ label: string; href: string; note: string }>;
};

export const serviceStack: ReadonlyArray<StackLayer> = [
  {
    icon: "website",
    title: "Foundation",
    intro: "How customers find you and decide whether to trust you.",
    items: [
      {
        label: "website design for clearer customer inquiries",
        href: "/services/website-design",
        note: "Only where the current website does not already do the job.",
      },
      {
        label: "Google Business Profile management",
        href: "/services/google-business-profile-optimization",
        note: "Accurate listing details and routine updates.",
      },
      {
        label: "reputation management and review requests",
        href: "/services/reputation-management",
        note: "Neutral review requests and consistent replies.",
      },
    ],
  },
  {
    icon: "repeat",
    title: "Follow-through",
    intro: "What happens after someone reaches out.",
    items: [
      {
        label: "estimate follow-up and customer reminders",
        href: "/services/sms-email-automation",
        note: "Text and email reminders, estimate follow-up, and repeat-service messages.",
      },
    ],
  },
  {
    icon: "plus",
    title: "Conditional additions",
    intro: "Added only when a specific problem calls for them.",
    items: [
      {
        label: "AI receptionists for customer intake",
        href: "/services/ai-receptionist",
        note: "For missed, overflow, or after-hours calls, with a human option.",
      },
      {
        label: "AI website chatbots",
        href: "/services/ai-chatbots",
        note: "For website questions and intake when your site needs it.",
      },
    ],
  },
];

export const stackNote = {
  body: "An adequate website should not automatically trigger a rebuild. In the same Jobber survey, 43% of businesses lacked clear service areas on their website and 65% lacked business hours. Those gaps are worth checking, but they are not a promise of more inquiries.",
  source: sources.jobberReport,
  scopeLabel: "Confirm scope",
  scopeNote:
    "Availability and scope of each service are being confirmed. This is a proposed way to prioritize, not a package.",
};

// Section E.
export const tradeWorkflows: ReadonlyArray<{
  icon: IconName;
  title: string;
  body: string;
}> = [
  {
    icon: "bell",
    title: "Urgent repairs",
    body: "Urgent jobs need defined human escalation and real coverage. An automated reply cannot replace someone who can actually respond.",
  },
  {
    icon: "clipboard",
    title: "Estimates and projects",
    body: "Roofing and other project work depend on clarifying the estimate and following up while the customer is still deciding.",
  },
  {
    icon: "repeat",
    title: "Recurring service",
    body: "Cleaning, pest control, and maintenance workflows often center on recurring appointments, reminders, and rebooking.",
  },
];

export const restorationCaution =
  "Restoration work is handled separately. It carries its own risk and escalation requirements, which need to be planned before any automated intake is considered.";

export const seasonalityNote = {
  body: "Seasonality matters too: 34% of owners in Jobber's survey reported it as a challenge. A better workflow can help you handle busy periods, but it does not remove seasonal demand cycles.",
  source: sources.jobberReport,
};

// Section F.
export const compatibilityChecks: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Which actions are needed",
    body: "List what the connection must actually do, such as create a contact, read a job status, or pass along a booking request. A software brand name alone does not confirm any of these.",
  },
  {
    title: "Account permissions and plan",
    body: "Access depends on your account, plan, and permissions, and some platforms limit API access.",
  },
  {
    title: "Sync direction",
    body: "Decide which system is the source of truth for each record, and which way changes flow.",
  },
  {
    title: "Duplicate prevention",
    body: "Define how the same customer or job is recognized so it is not created twice.",
  },
  {
    title: "Exceptions",
    body: "Decide who is notified, and what happens, when a sync fails or a request cannot be completed.",
  },
  {
    title: "Requests versus dispatch slots",
    body: "A booking request is not a confirmed dispatch slot. A synchronized calendar does not necessarily show real crew availability.",
  },
];

export const softwareNote = {
  body: "Replacing your field-service software is not part of this approach. Several platforms document integration or API options, and HighLevel documents a Jobber integration. ServiceTitan uses permissioned API access, Housecall Pro has API eligibility requirements, and FieldEdge provides partner API access. None of that confirms OKIKO HIGH compatibility with your account.",
  source: sources.highlevelJobber,
};

// Section G: sample metric definitions. No results are shown or implied.
export const metricDefinitions: ReadonlyArray<{ icon: IconName; metric: string; meaning: string }> = [
  {
    icon: "message",
    metric: "Acknowledged",
    meaning: "An automated reply went out. This is not the same as a person responding.",
  },
  {
    icon: "headset",
    metric: "Human response",
    meaning: "A named person followed up on the inquiry.",
  },
  {
    icon: "lead",
    metric: "Qualified inquiry",
    meaning: "An inquiry for work you actually do, in an area you serve.",
  },
  {
    icon: "calendar",
    metric: "Valid booking",
    meaning: "A confirmed appointment that fits your schedule and capacity, not just a request.",
  },
  {
    icon: "check",
    metric: "Completed job",
    meaning: "Work finished, kept separate from revenue so each can be checked on its own.",
  },
  {
    icon: "clock",
    metric: "Staff time and correction work",
    meaning: "The hours your team spends managing the system and fixing its mistakes.",
  },
];

export const measurementNote = {
  body: "Compare results with your own baseline, your capacity, and the total cost, not with a general benchmark. For context only, 20% of owners in Jobber's survey said they respond to inquiries within an hour. That is an external figure, not an OKIKO HIGH promise.",
  source: sources.jobberReport,
};

// Section H: proposed operating boundaries, not confirmed terms.
export const responsibilityRows: ReadonlyArray<{
  icon: IconName;
  topic: string;
  system: string;
  team: string;
  confirm: string;
}> = [
  {
    icon: "call",
    topic: "Callbacks and escalations",
    system: "Routes the request and notifies the named person.",
    team: "Names who calls back and who covers after hours.",
    confirm: "Coverage hours and after-hours arrangements.",
  },
  {
    icon: "message",
    topic: "AI answers and bookings",
    system: "Answers only the questions you approve and collects a request.",
    team: "Approves what the AI may say and which appointment types it may book.",
    confirm: "Booking permissions for each connected system.",
  },
  {
    icon: "repeat",
    topic: "Automated follow-up",
    system: "Stops after a booking, refusal, opt-out, or agreed limit.",
    team: "Approves message content and how often it is sent.",
    confirm: "Consent and opt-out wording.",
  },
  {
    icon: "key",
    topic: "Ownership and exit",
    system: "Nothing is assumed.",
    team: "Keeps its own customer records.",
    confirm: "Ownership of domains, accounts, phone numbers, and data, plus support and exit terms.",
  },
];

export const safeguardsNote = {
  body: "Review requests must stay neutral, with no incentives and no steering only happy customers toward Google. Automated messaging also depends on applicable permission and sending requirements, so marketing-text consent is kept separate from a simple inquiry.",
  source: sources.googleReviewPolicy,
};

// Section J.
export const faqs: Faq[] = [
  {
    question: "What does home-services marketing and automation include?",
    answer:
      "It can connect your website, Google presence, customer inquiries, follow-up, and review processes. OKIKO HIGH's available services and exact deliverables must be confirmed before any package is described as available.",
  },
  {
    question: "Do I need all six services?",
    answer:
      "No. The right starting point depends on whether your main problem is visibility, missed inquiries, inconsistent follow-up, or capacity, so a focused workflow may make more sense than adding every tool.",
  },
  {
    question: "Will this replace my existing job-management software?",
    answer:
      "Replacement is not part of the proposed approach. First assess whether your current software already supports the required workflow and identify where additional connections would genuinely help.",
  },
  {
    question: "Can this connect with ServiceTitan, Jobber, Housecall Pro, or FieldEdge?",
    answer:
      "These platforms have documented integration or API options, but access and supported actions differ. OKIKO HIGH compatibility must be confirmed for your specific account, permissions, and workflow before it is promised.",
    sources: [sources.highlevelJobber],
  },
  {
    question: "Can an AI receptionist book jobs?",
    answer:
      "It may book appointments when the connected system supports the action and your scheduling rules can be enforced. Otherwise, it should collect a booking request for staff confirmation rather than promise a valid dispatch slot.",
  },
  {
    question: "Will customers know they are speaking with AI?",
    answer:
      "The recommended approach is clear disclosure and an accessible human option. The wording and any legal requirements should be checked for the jurisdictions involved.",
  },
  {
    question: "What happens to emergency calls?",
    answer:
      "The workflow should follow approved escalation instructions and connect to an available human where supported. It must not promise emergency attendance, diagnose dangerous situations, or substitute for emergency services.",
  },
  {
    question: "Will automated follow-up annoy customers?",
    answer:
      "Follow-up should be relevant, permitted, and limited in frequency. It should stop after booking, refusal, opt-out, or an agreed limit rather than continue chasing someone who has already responded.",
  },
  {
    question: "Can you guarantee more reviews or a first-place Google Maps ranking?",
    answer:
      "No. Review requests must follow platform rules, and Google rankings depend on factors including relevance, distance, and prominence; neither ratings nor ranking positions should be guaranteed.",
    sources: [sources.googleReviewPolicy],
  },
  {
    question: "What does it cost, and what happens if I leave?",
    answer:
      "OKIKO HIGH's pricing and exit terms are currently TBD. Before agreeing to work, confirm setup and usage costs, support responsibilities, website and account ownership, phone-number portability, and data-export arrangements.",
  },
];
