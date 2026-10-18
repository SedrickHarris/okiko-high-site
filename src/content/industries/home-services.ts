// Content for /industries/home-services.
// Source: the updated Home-Service Businesses audience page brief (2026-10-11).
// Home services is a currently served audience (docs/01) and the owner confirmed
// the six service pages on 2026-10-11. Still unconfirmed, so intentionally not
// stated here: pricing, ownership and exit terms, tested integrations, specific
// trade experience, results, testimonials, and any vendor partnership. Workflow
// examples are proposed applications, not records of client work.
//
// Decisions agreed with the owner while rebuilding:
// - Title and H1 are distinct from the planned combo page
//   (/industries/home-services/marketing-automation/).
// - The brief's Reddit thread is research only and is not cited on the page.
// - No numeric follow-up-speed target is published (no source).
// - Examples are labeled "Example workflow" and covered by the page-level limits
//   block, not by repeated captions.

import type { IconName } from "@/components/ui/icons";
import type { Faq, SourceLink } from "../shared";

export const homeServicesPage = {
  path: "/industries/home-services",
  // The root layout appends " | OKIKO HIGH".
  title: "Digital Marketing for Home-Service Businesses",
  description:
    "Explore marketing and automation for home-service businesses, connecting inquiries, quotes, appointments, and customer follow-up with OKIKO HIGH.",
  h1: "Digital Marketing and Automation for Home-Service Businesses",
  // Primary contact action is TBD in docs/01. Point every CTA here so it can change
  // in one place once the owner confirms the contact path.
  primaryCta: { label: "Discuss Your Customer Follow-Up Workflow", href: "/contact" },
  secondaryCta: { label: "See a Home-Service Workflow Example", href: "#workflows" },
} as const;

export const sources = {
  highlevelTextBack: {
    label: "HighLevel Support, Missed-call text-back",
    href: "https://help.gohighlevel.com/support/solutions/articles/48001239140-where-and-how-to-configure-the-missed-call-text-back-feature",
  },
  googleReviewPolicy: {
    label: "Google, Prohibited and restricted content for reviews",
    href: "https://support.google.com/contributionpolicy/answer/7400114?hl=en",
  },
  twilioCompliance: {
    label: "Twilio, SMS compliance and A2P 10DLC in the US",
    href: "https://help.twilio.com/articles/4408675845019-SMS-Compliance-and-A2P-10DLC-in-the-US",
  },
} satisfies Record<string, SourceLink>;

// A. Hero journey strip.
export const heroJourney: ReadonlyArray<{ icon: IconName; label: string }> = [
  { icon: "message", label: "Inquiry" },
  { icon: "headset", label: "Conversation" },
  { icon: "clipboard", label: "Quote or appointment" },
  { icon: "check", label: "Completed service" },
  { icon: "repeat", label: "Appropriate follow-up" },
];

// B. Operational problems, each paired with a proposed workflow response.
export const problems: ReadonlyArray<{
  icon: IconName;
  title: string;
  body: string;
  response: string;
}> = [
  {
    icon: "clock",
    title: "Inquiries wait",
    body: "Inquiries can wait while staff handle other work.",
    response: "Acknowledge promptly and route each inquiry to a named person.",
  },
  {
    icon: "clipboard",
    title: "Quotes go quiet",
    body: "Quotes can go quiet without a defined next step.",
    response: "Follow up on a schedule that changes after a reply or a decision.",
  },
  {
    icon: "message",
    title: "Replies get scattered",
    body: "Responses can become scattered across channels.",
    response: "Agree where replies are handled and who owns them.",
  },
  {
    icon: "bell",
    title: "Reminders repeat or vanish",
    body: "Manual reminders can be forgotten or duplicated.",
    response: "Run each reminder once, with rules that prevent repeats.",
  },
];

// C. Trade groups. Proposed workflow applications until delivery experience is verified.
export type TradeGroup = {
  icon: IconName;
  title: string;
  focus: string;
  journey: ReadonlyArray<string>;
  stops: ReadonlyArray<string>;
};

export const tradeGroups: ReadonlyArray<TradeGroup> = [
  {
    icon: "call",
    title: "HVAC and plumbing",
    focus: "Urgent inquiries, missed calls, service windows, and maintenance reminders.",
    journey: [
      "An inquiry or missed call arrives and is acknowledged.",
      "A named person takes the request and confirms a service window.",
      "A reminder goes out before the visit.",
      "A maintenance reminder follows later, where it is appropriate.",
    ],
    stops: [
      "Staff reply, or the customer books or declines.",
      "The customer opts out.",
      "Urgent requests go to a person under agreed rules. This is not emergency dispatch.",
    ],
  },
  {
    icon: "repeat",
    title: "Landscaping and cleaning",
    focus: "Recurring schedules, seasonal communication, and eligible reactivation.",
    journey: [
      "An inquiry arrives and a quote or schedule is agreed.",
      "Visits are confirmed and reminded on the recurring schedule.",
      "Seasonal updates go to customers who have agreed to receive them.",
      "Past customers are contacted only where permission and relevance are confirmed.",
    ],
    stops: [
      "The customer pauses or cancels service.",
      "The customer opts out.",
      "There is no permission on record for the message.",
    ],
  },
  {
    icon: "clipboard",
    title: "General contracting and remodeling",
    focus: "Longer quote cycles and decision-stage follow-up.",
    journey: [
      "An inquiry arrives and a visit or quote is arranged.",
      "Follow-up after the quote changes once the customer replies.",
      "A decision-stage check-in goes out only if the quote is still open.",
      "A later check-in happens only if it is appropriate.",
    ],
    stops: [
      "The quote is accepted or declined.",
      "The customer replies, and the thread moves to a person.",
      "The customer opts out, or an agreed limit is reached.",
    ],
  },
];

// D. Connected service areas. Links go only to pages that exist. Anchor text per brief.
export type JourneyStage = {
  icon: IconName;
  title: string;
  intro: string;
  links: ReadonlyArray<{ label: string; href: string }>;
  plain?: string;
};

export const journeyStages: ReadonlyArray<JourneyStage> = [
  {
    icon: "search",
    title: "Capture the inquiry",
    intro: "Where customers first reach out, and what gets recorded.",
    links: [
      { label: "connect website inquiries to the next step", href: "/services/website-design" },
      { label: "collect inquiry details through website chat", href: "/services/ai-chatbots" },
      { label: "connect Google Business Profile inquiries", href: "/services/google-business-profile-optimization" },
    ],
  },
  {
    icon: "call",
    title: "Handle the call",
    intro: "Missed, overflow, or after-hours calls, with a way to reach a person.",
    links: [
      { label: "connect call handling with customer follow-up", href: "/services/ai-receptionist" },
    ],
  },
  {
    icon: "mail",
    title: "Follow up on quotes and appointments",
    intro: "Text and email for quotes, appointments, and appropriate ongoing communication.",
    links: [],
    plain: "Text and email automation",
  },
  {
    icon: "star",
    title: "Ask for honest reviews",
    intro: "A neutral review-request process after completed work.",
    links: [],
    plain: "Reputation management",
  },
];

export const textBackFact = {
  lead: "Platform features show what is possible, not what OKIKO HIGH delivers.",
  detail:
    "HighLevel documents a missed-call text-back feature. That establishes a platform capability. The scope of any work for your business is agreed separately.",
  sources: [sources.highlevelTextBack],
};

// E. Practical workflows: expandable cards with trigger, purpose, owner, exit.
export type WorkflowCard = {
  icon: IconName;
  title: string;
  summary: string;
  trigger: string;
  purpose: string;
  owner: string;
  exit: string;
  link?: { label: string; href: string };
};

export const workflowCards: ReadonlyArray<WorkflowCard> = [
  {
    icon: "bell",
    title: "Prompt acknowledgment",
    summary: "Confirm receipt and set clear staff-response expectations.",
    trigger: "A new inquiry or a missed call.",
    purpose: "Confirm the inquiry arrived and say when a person will respond.",
    owner: "The person your team names to own new inquiries.",
    exit: "A staff reply, the customer books, or the customer opts out.",
  },
  {
    icon: "clipboard",
    title: "Quote follow-up",
    summary: "Follow up in a way that changes after a reply or a decision.",
    trigger: "A quote is sent.",
    purpose: "Check whether the customer has questions, and change course once they respond or decide.",
    owner: "The estimator or office lead who owns the quote.",
    exit: "The quote is accepted or declined, the customer replies, they opt out, or an agreed limit is reached.",
    link: { label: "automate appropriate customer follow-up", href: "/services/sms-email-automation" },
  },
  {
    icon: "calendar",
    title: "Appointment confirmation and reminders",
    summary: "Confirmation, preparation details, and reminders.",
    trigger: "An appointment is scheduled.",
    purpose: "Confirm the visit, share any preparation details, and remind the customer.",
    owner: "Whoever manages your schedule.",
    exit: "The visit is completed, rescheduled, or cancelled, or the customer opts out.",
  },
  {
    icon: "repeat",
    title: "Eligible reactivation and seasonal communication",
    summary: "Relevant check-ins, only where permission is confirmed.",
    trigger: "Seasonal timing, or a past-customer group with confirmed permission.",
    purpose: "Send a relevant, useful message to customers who can appropriately receive it.",
    owner: "The owner or operations manager who approves the list and the message.",
    exit: "The customer replies or books, opts out, or has no permission on record.",
  },
  {
    icon: "star",
    title: "Honest review requests",
    summary: "The same invitation to every eligible customer.",
    trigger: "A job is completed.",
    purpose: "Invite genuine feedback without incentives and without filtering for happy customers.",
    owner: "The person who owns reviews and difficult replies.",
    exit: "A review is left, the customer declines or opts out, or an agreed limit is reached.",
    link: { label: "build an honest review-request process", href: "/services/reputation-management" },
  },
];

export const reviewFact = {
  lead: "Review requests cannot be filtered toward happy customers.",
  detail:
    "Google prohibits review incentives and selectively soliciting positive reviews, so a request process needs to invite feedback from every eligible customer.",
  sources: [sources.googleReviewPolicy],
};

// F. Human handoffs and boundaries.
export const controlPoints: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "flag",
    title: "Ownership of replies and exceptions",
    body: "Name who handles each reply and each exception before launch, including who covers when that person is away.",
  },
  {
    icon: "swap",
    title: "Pause or branch on a response",
    body: "When a customer replies or books, the workflow pauses or changes course instead of sending the next scheduled message.",
  },
  {
    icon: "shield",
    title: "No repeated messages",
    body: "Overlapping workflows are checked so one customer does not receive the same message from several of them.",
  },
  {
    icon: "bell",
    title: "Not emergency dispatch",
    body: "Marketing automation is not presented as emergency dispatch. Any urgent-request process needs confirmed routing and staff coverage.",
  },
];

export const branchPaths: ReadonlyArray<{ label: string; outcome: string }> = [
  { label: "Customer replies", outcome: "Pause and route to a named person" },
  { label: "Customer books", outcome: "Stop follow-up and confirm the visit" },
  { label: "Customer declines", outcome: "Stop and close out the quote" },
  { label: "Customer cancels", outcome: "Stop reminders and hand to a person" },
  { label: "Customer opts out", outcome: "Stop marketing texts and record it" },
];

export const dedupeFact = {
  lead: "Repeated missed calls can trigger repeated texts.",
  detail:
    "HighLevel's documentation warns about this, which is why deduplication needs to be designed into any missed-call workflow.",
  sources: [sources.highlevelTextBack],
};

// G. Implementation and compatibility. Nothing is confirmed yet, so every item is "Needs review".
export const compatibilityItems: ReadonlyArray<{
  icon: IconName;
  title: string;
  body: string;
  status: "Confirmed" | "Needs review";
}> = [
  {
    icon: "search",
    title: "Review what you already use",
    body: "Look at your CRM, scheduling, phone, and reminder capabilities before adding anything, so new workflows do not duplicate existing reminders.",
    status: "Needs review",
  },
  {
    icon: "plug",
    title: "Confirm integration requirements",
    body: "Check the actions you need and your account permissions before any compatibility is promised. No universal compatibility is claimed.",
    status: "Needs review",
  },
  {
    icon: "key",
    title: "Define ownership",
    body: "Agree who owns accounts, phone numbers, domains, and customer data. OKIKO HIGH's ownership policy is not published yet, so confirm it before you agree to work.",
    status: "Needs review",
  },
  {
    icon: "clipboard",
    title: "Agree testing, maintenance, and responsibilities",
    body: "Decide how workflows are tested, who maintains them, and what your staff are responsible for.",
    status: "Needs review",
  },
];

// H. Measurement: sample reporting layout, no data.
export const reportTiles: ReadonlyArray<{ icon: IconName; label: string; meaning: string }> = [
  { icon: "headset", label: "Substantive staff responses", meaning: "A person answered, as distinct from an automated acknowledgment." },
  { icon: "message", label: "Conversations", meaning: "Customers who engaged after the first message." },
  { icon: "clipboard", label: "Accepted quotes", meaning: "Quotes the customer agreed to." },
  { icon: "calendar", label: "Appointments", meaning: "Confirmed visits on the schedule." },
  { icon: "check", label: "Completed jobs", meaning: "Work finished, kept apart from revenue." },
  { icon: "clock", label: "Staff workload", meaning: "Time spent managing the workflow and fixing mistakes." },
  { icon: "exit", label: "Opt-outs", meaning: "Customers who asked to stop receiving messages." },
  { icon: "flag", label: "Workflow failures", meaning: "Messages that failed, duplicated, or reached the wrong person." },
];

export const measurementNote =
  "Compare outcomes with a baseline, or with a holdout group where that is practical. An open, a send, or a platform-attributed conversion is activity, not a business result.";

// I. Responsible customer communication.
export const permissionSteps: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  { icon: "shield", title: "Permission", body: "Match permission to the purpose of the message." },
  { icon: "clock", title: "Appropriate timing", body: "Check registration, timing, and frequency requirements." },
  { icon: "message", title: "Useful message", body: "Send something relevant to what the customer asked for." },
  { icon: "exit", title: "Reply or opt-out", body: "Make it easy to respond or to stop." },
];

export const permissionPoints: ReadonlyArray<string> = [
  "Review registration, timing, and opt-out requirements for each type of message.",
  "Check historical customer lists before any reactivation. An old record does not automatically authorize a promotional text.",
  "Request honest reviews without incentives or positive-only filtering.",
];

export const permissionFact = {
  lead: "Being able to send a message is not the same as having permission to send it.",
  detail:
    "Texting requirements depend on the purpose of the message, consent, jurisdiction, and opt-out handling, and carrier policies apply as well.",
  sources: [sources.twilioCompliance],
};

// Page-level limits (visible disclaimers required by the brief).
export const limits: ReadonlyArray<string> = [
  "Specific service scope and integrations require confirmation for your business.",
  "Workflow examples on this page are illustrative unless supported by an approved deployment.",
  "Automation does not guarantee bookings, sales, attendance, or inbox placement.",
  "Messaging requirements vary by purpose and by the recipient's jurisdiction.",
  "OKIKO HIGH serves clients worldwide, but that does not mean every workflow is available in every country.",
];

// J. FAQ.
export const faqs: Faq[] = [
  {
    question: "What does marketing and automation mean for a home-service business?",
    answer:
      "It means connecting customer-facing marketing with the steps that follow an inquiry, such as a conversation, quote, appointment, or appropriate reminder. The goal is to make those steps more organized while keeping clear responsibility for customer questions and exceptions.",
  },
  {
    question: "Do I need to replace my existing scheduling or CRM software?",
    answer:
      "Not necessarily. Review the capabilities already in place before adding another platform, and confirm integrations so new workflows do not duplicate existing reminders.",
  },
  {
    question: "How quickly should we follow up with a new inquiry?",
    answer:
      "As soon as practical. Aim for prompt acknowledgment and a substantive human response as quickly as your staffing allows during working hours. Your team sets its own target, and this is an operating recommendation, not a guaranteed result or an OKIKO HIGH service commitment.",
  },
  {
    question: "Will automated texts and emails annoy customers?",
    answer:
      "They can if they are unwanted, repetitive, poorly timed, or continue after a response. Use appropriate permissions, useful content, sensible frequency limits, and stopping rules that reflect the customer's next action.",
  },
  {
    question: "What happens when a customer replies?",
    answer:
      "The workflow should pause or branch and route the reply to the appropriate person. Staff ownership, response expectations, and escalation responsibilities need to be agreed before launch.",
  },
  {
    question: "Can automation handle urgent service requests?",
    answer:
      "A workflow can acknowledge an inquiry or route it according to approved rules, but it should not be presented as emergency dispatch. Any urgent-request process needs confirmed routing, staff coverage, and clear boundaries.",
  },
  {
    question: "Is it legal to text customers about appointments or services?",
    answer:
      "It can be, but requirements depend on message purpose, technology, consent, jurisdiction, and opt-out handling. Carrier policies also apply, so technical ability to send a message is not the same as permission to send it.",
    sources: [sources.twilioCompliance],
  },
  {
    question: "Can we reconnect with past customers?",
    answer:
      "Potentially, after checking permissions, suppression records, data quality, and the relevance of the message. An old customer record does not automatically authorize every promotional text.",
    sources: [sources.twilioCompliance],
  },
  {
    question: "Can review requests be automated?",
    answer:
      "A review-request workflow can be configured, but it must invite genuine feedback rather than selectively ask only satisfied customers. Google prohibits review incentives and selectively soliciting positive reviews.",
    sources: [sources.googleReviewPolicy],
  },
  {
    question: "How will we know whether the workflow is helping?",
    answer:
      "Measure substantive responses, accepted quotes, appointments, completed jobs, staff workload, and opt-outs. Compare against a baseline where practical rather than treating every message, open, or platform-attributed conversion as a business result.",
  },
  {
    question: "What does it cost, and what happens if I leave?",
    answer:
      "OKIKO HIGH's pricing and exit terms have not been finalized or published yet. Before agreeing to work, confirm setup and usage costs, support responsibilities, ownership of websites, accounts, and phone numbers, and data-export arrangements.",
  },
];
