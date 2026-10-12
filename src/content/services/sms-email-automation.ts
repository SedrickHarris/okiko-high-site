// Content for /services/sms-email-automation.
// Source: page brief and research pack for "Text and Email Automation for Customer Follow-Up".
// Availability confirmed by the owner (2026-10-11): the page is indexable, listed in the
// sitemap, and emits Service schema. Intentionally not stated here: agency pricing,
// ownership/export terms, reply coverage, results, testimonials, integrations as
// confirmed capabilities, and any vendor partnership. Sample messages use a fictional
// business and are not client results.

import type { IconName } from "@/components/ui/icons";
import type { Faq, SourceLink } from "./website-design";

export const smsEmailPage = {
  path: "/services/sms-email-automation",
  title: "Text and Email Automation Services",
  description:
    "Explore text and email automation for inquiries, quotes, and appointments, with stopping rules, opt-out handling, human reply routing, and clear limits.",
  h1: "Text and Email Automation for Customer Follow-Up",
  serviceType: "SMS and email automation",
  // Primary contact action is TBD in docs/01. Point the CTA at one place so it
  // can change once the owner confirms the contact path.
  primaryCta: { label: "Discuss your follow-up workflow", href: "/contact" },
} as const;

export const sources = {
  missedCall: {
    label: "HighLevel missed-call text-back documentation",
    href: "https://help.gohighlevel.com/support/solutions/articles/48001239140-where-and-how-to-configure-the-missed-call-text-back-feature",
  },
  googleReviewPolicy: {
    label: "Google review content policy",
    href: "https://support.google.com/contributionpolicy/answer/7400114?hl=en",
  },
  reddit: {
    label: "Public small-business discussion on client follow-ups, 2026",
    href: "https://www.reddit.com/r/smallbusiness/comments/1q73y0k/struggling_with_client_followups_in_my_small/",
  },
  klaviyo: {
    label: "Klaviyo documentation on SMS metrics",
    href: "https://help.klaviyo.com/hc/en-us/articles/360035345572",
  },
  mailchimpPrivacy: {
    label: "Mailchimp on Apple Mail Privacy Protection",
    href: "https://mailchimp.com/help/apple-privacy-faq/",
  },
  mailchimpJourneys: {
    label: "Mailchimp on automated customer journeys",
    href: "https://mailchimp.com/help/about-customer-journeys/",
  },
  cochrane: {
    label: "Cochrane review of mobile phone text message reminders for attendance, 2013",
    href: "https://pubmed.ncbi.nlm.nih.gov/24310741/",
  },
  twilio: {
    label: "Twilio A2P 10DLC guidance",
    href: "https://www.twilio.com/docs/messaging/compliance/a2p-10dlc",
  },
  ctia: {
    label: "CTIA Messaging Principles and Best Practices, 2023",
    href: "https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf",
  },
  canSpam: {
    label: "FTC CAN-SPAM guide",
    href: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business",
  },
  googleSender: {
    label: "Google email sender guidelines",
    href: "https://support.google.com/mail/answer/81126?hl=en",
  },
  cfr: {
    label: "47 CFR 64.1200",
    href: "https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200",
  },
} satisfies Record<string, SourceLink>;

export const journeySteps = [
  { icon: "clipboard", tone: "default", title: "Inquiry", body: "A form, call, or message arrives" },
  { icon: "mail", tone: "included", title: "Follow-up", body: "An approved text or email goes out" },
  { icon: "headset", tone: "optional", title: "Conversation", body: "A reply goes to a person" },
  { icon: "calendar", tone: "default", title: "Next action", body: "A booking, quote decision, or reminder" },
] as const;

export const problems = [
  {
    icon: "clock",
    title: "Inquiries wait while staff handle other work",
    body: "A new inquiry arrives while the team is on a job or on another call, and the customer hears nothing for hours.",
    pair: "Inquiry acknowledgment and missed-call text-back",
    anchor: "#wf-respond",
  },
  {
    icon: "tag",
    title: "Quotes go quiet without a clear next step",
    body: "A quote is sent, the customer goes silent, and nobody is sure whether to follow up again or let it go.",
    pair: "Quote follow-up",
    anchor: "#wf-progress",
  },
  {
    icon: "integrations",
    title: "Staff lose track of responses across channels",
    body: "Replies land in different inboxes and phones, so it is hard to see who has responded and who was already contacted.",
    pair: "One customer record with reply routing",
    anchor: "#channels",
  },
  {
    icon: "bell",
    title: "Manual reminders consume time",
    body: "Sending confirmations and reminders one by one takes staff time away from conversations that need a person.",
    pair: "Appointment confirmation and reminders",
    anchor: "#wf-progress",
  },
] as const;

export type Workflow = {
  icon: IconName;
  title: string;
  trigger: string;
  purpose: string;
  owner: string;
  exit: string;
  // Optional internal link. Only used where the destination page exists.
  related?: { label: string; href: string };
  relatedText?: string;
};

export const workflowGroups: ReadonlyArray<{ id?: string; title: string; items: ReadonlyArray<Workflow> }> = [
  {
    id: "wf-respond",
    title: "Respond",
    items: [
      {
        icon: "launch",
        title: "Inquiry acknowledgment",
        trigger: "A new form submission or message arrives.",
        purpose: "Confirm receipt and set expectations for what happens next.",
        owner: "A named staff member is alerted to the inquiry.",
        exit: "A person replies, the status changes, or the customer opts out.",
        related: { label: "connect website inquiries to follow-up", href: "/services/ai-chatbots" },
      },
      {
        icon: "call",
        title: "Missed-call text-back",
        trigger: "A call goes unanswered.",
        purpose: "Name the business and offer a simple way to reach you.",
        owner: "The person who handles call-backs.",
        exit: "A call-back, a reply, or an opt-out. Repeated calls from the same number must not send repeated texts.",
        related: { label: "connect call handling with customer follow-up", href: "/services/ai-receptionist" },
      },
    ],
  },
  {
    id: "wf-progress",
    title: "Progress",
    items: [
      {
        icon: "tag",
        title: "Quote follow-up",
        trigger: "A quote is sent.",
        purpose: "Check the quote arrived, answer questions, then close the loop courteously.",
        owner: "The estimator or sales contact who owns the quote.",
        exit: "The quote is accepted, rejected, answered, or expires, or the customer opts out.",
      },
      {
        icon: "calendar",
        title: "Appointment confirmation and reminders",
        trigger: "A booking is created.",
        purpose: "Confirm the visit, share preparation details, remind, and offer a way to reschedule.",
        owner: "The scheduler who handles changes.",
        exit: "The appointment changes, cancels, or is completed. Messages update or stop when it does.",
      },
    ],
  },
  {
    title: "Reconnect",
    items: [
      {
        icon: "repeat",
        title: "Eligible reactivation",
        trigger: "A past customer reaches a defined dormant stage and has suitable permission.",
        purpose: "Share a relevant service reminder.",
        owner: "The office manager who reviews replies.",
        exit: "A reply, a booking, a wrong-number flag, or an opt-out. Prior opt-outs are suppressed.",
      },
      {
        icon: "bell",
        title: "Seasonal campaigns",
        trigger: "A season and a real service relevance line up.",
        purpose: "Share maintenance or availability information that fits the time of year.",
        owner: "The marketing contact who approves the copy.",
        exit: "Engagement, a status change, or an opt-out.",
      },
      {
        icon: "mail",
        title: "Nurture",
        trigger: "An inquiry is still open after the first follow-up.",
        purpose: "Answer common purchase questions over the real buying cycle.",
        owner: "The sales contact who handles replies.",
        exit: "A booking, a decision, a change in cadence, or an opt-out.",
      },
    ],
  },
  {
    title: "Invite",
    items: [
      {
        icon: "star",
        title: "Honest review requests",
        trigger: "A job is marked complete.",
        purpose: "Ask for genuine feedback after real, finished work.",
        owner: "The owner or manager who replies to reviews.",
        exit: "A review is left, a reply arrives, or the customer opts out. No incentives and no filtering out unhappy customers.",
        related: { label: "build an honest review-request process", href: "/services/reputation-management" },
      },
      {
        icon: "lead",
        title: "Voluntary referral sharing",
        trigger: "A completed job with a positive response.",
        purpose: "Invite the customer to share a link or contact details if they wish.",
        owner: "The customer-service contact.",
        exit: "The link is shared or the customer does not respond. A referred person is not automatically enrolled in marketing.",
      },
    ],
  },
];

export const sampleText = {
  business: "Sample Home Services",
  turns: [
    { from: "business", text: "Reminder: Sample Home Services visits tomorrow at 9:00 AM. Reply C to confirm or R to reschedule. Reply STOP to opt out." },
    { from: "customer", text: "C" },
    { from: "business", text: "Confirmed. See you tomorrow." },
  ],
  note: "It names the business, offers a way to reschedule, and includes an opt-out. Once the customer confirms, nothing more is sent for this visit.",
} as const;

export const sampleEmail = {
  business: "Sample Home Services",
  subject: "Your visit tomorrow: what to expect",
  greeting: "Hi Dana, here is what to know before our visit tomorrow at 9:00 AM.",
  items: [
    "Please keep a clear path to the work area.",
    "Tell us about pets or gate codes in a reply.",
    "Need to change the time? Reply to this email or use the reschedule link.",
  ],
  footer: "Sample Home Services, [business mailing address]. Unsubscribe",
  note: "Commercial email shows who sent it, a mailing address, and a working unsubscribe.",
} as const;

export const sampleSequence = [
  { icon: "message", tone: "default", label: "Step 1 - Text", body: "Confirm the quote arrived and invite questions." },
  { icon: "mail", tone: "included", label: "Step 2 - Email", body: "Send the details and answers to common questions." },
  { icon: "message", tone: "optional", label: "Step 3 - Text", body: "A short, courteous check-in." },
  { icon: "check", tone: "default", label: "Step 4 - Close", body: "A polite close that leaves the door open." },
] as const;

export const channelNotes = [
  {
    icon: "integrations",
    tone: "included",
    title: "One record, one next action",
    body: "When text and email share a customer record, a booking stops the quote messages and a reply pauses the sequence. That is what prevents duplicates and awkward follow-ups.",
  },
] as const;

export const buildStages = [
  {
    icon: "integrations",
    tone: "default",
    title: "Map the journey",
    body: "Map the customer journey, the permissions that apply, and the tools you already use.",
    clientInput: "How inquiries reach you and what happens next.",
  },
  {
    icon: "plug",
    tone: "included",
    title: "Connect your records",
    body: "Connect approved records, forms, calendars, phone numbers, and sending domains.",
    clientInput: "Access to those tools and to the numbers and domains involved.",
  },
  {
    icon: "clipboard",
    tone: "optional",
    title: "Build the sequences",
    body: "Write approved messages and set delays, frequency limits, and stopping rules.",
    clientInput: "Approval of every message before it can send.",
  },
  {
    icon: "rocket",
    tone: "default",
    title: "Test, then monitor",
    body: "Test delivery, replies, routing, and exceptions before launch, then monitor results.",
    clientInput: "Review of the test results and someone who handles replies.",
  },
] as const;

export const stopBranches = [
  { icon: "headset", tone: "default", label: "Reply", action: "The sequence pauses and a task is created for the assigned person." },
  { icon: "calendar", tone: "included", label: "Booked", action: "Quote messages end and confirmation and reminders begin." },
  { icon: "minus", tone: "negative", label: "Not interested", action: "The sequence closes with no further nudges." },
  { icon: "exit", tone: "optional", label: "Opt-out", action: "The contact is suppressed across every workflow." },
] as const;

export const automated = [
  "Acknowledging an inquiry and sending approved reminders",
  "Pausing or branching after a meaningful reply or status change",
  "Preventing unnecessary duplicate messages",
  "Creating a task for the right person",
] as const;

export const needsPerson = [
  "Answering questions and handling exceptions",
  "Negotiating, pricing, and judgment calls",
  "Sensitive or urgent situations, since automation is not emergency dispatch",
  "Anything the customer asks a person to handle",
] as const;

export const metricTiles = [
  { icon: "headset", tone: "default", title: "First human reply time", body: "Median and 90th percentile, reported separately from automated acknowledgment." },
  { icon: "launch", tone: "included", title: "Automated acknowledgment time", body: "Time from a valid trigger to the first automated message." },
  { icon: "message", tone: "optional", title: "Substantive replies", body: "Unique substantive replies divided by unique delivered recipients." },
  { icon: "tag", tone: "default", title: "Accepted quotes", body: "Accepted quotes divided by eligible quotes, compared with a baseline or holdout." },
  { icon: "calendar", tone: "included", title: "Appointment attendance", body: "Compared with your own baseline." },
  { icon: "check", tone: "optional", title: "Completed jobs", body: "Incremental completed jobs, not only platform-attributed revenue." },
  { icon: "gauge", tone: "default", title: "Staff workload", body: "Minutes per completed follow-up, including setup and exceptions." },
  { icon: "exit", tone: "included", title: "Opt-outs and failures", body: "Opt-outs, wrong numbers, duplicates, and routing failures." },
] as const;

export const trackList = [
  { icon: "clock", tone: "default", text: "Automated acknowledgment and first substantive human response, reported separately" },
  { icon: "message", tone: "included", text: "Substantive replies, accepted quotes, appointment attendance, and completed jobs" },
  { icon: "gauge", tone: "optional", text: "Staff workload, delivery failures, and opt-outs" },
  { icon: "swap", tone: "default", text: "Results compared against a baseline or holdout where practical" },
] as const;

export const compatibilityChecklist = [
  "Review your existing CRM, scheduling, and reminder capabilities",
  "Confirm each integration before promising it will work",
  "Explain who owns accounts, numbers, domains, and customer data",
  "Separate software access from implementation and ongoing management",
  "Check existing reminders so messages are not duplicated",
] as const;

export const needsConfirming = [
  "Which platforms and integrations apply to your setup",
  "Who handles registration, consent wording, and legal review",
  "Who owns accounts, numbers, domains, and exported data if you leave",
  "What maintenance and reporting are included",
  "Which countries a workflow can run in",
] as const;

export const permissionSteps = [
  {
    icon: "key",
    tone: "default",
    title: "Consent",
    items: [
      "Match permission to the purpose of each message",
      "Keep an inquiry to us separate from enrolling in ongoing promotions",
      "Check where historical contacts came from",
    ],
  },
  {
    icon: "clock",
    tone: "included",
    title: "Timing",
    items: [
      "Use the recipient's local time for quiet hours",
      "Register the sending brand and campaign where required",
      "Registration is not consent",
    ],
  },
  {
    icon: "message",
    tone: "optional",
    title: "Message",
    items: [
      "Say who is sending and why",
      "Keep promotional and operational messages distinct",
      "Set up email authentication and unsubscribe handling",
    ],
  },
  {
    icon: "exit",
    tone: "default",
    title: "Reply and opt-out",
    items: [
      "Honor STOP and HELP requests",
      "Suppress opted-out contacts across every workflow",
      "Route replies to a person",
    ],
  },
] as const;

export const permissionNotes = [
  {
    icon: "star",
    tone: "included",
    title: "Review requests",
    body: "We ask for honest feedback after real, completed work. No incentives, and no filtering out unhappy customers.",
  },
  {
    icon: "repeat",
    tone: "optional",
    title: "Reactivation",
    body: "An old customer record is not automatic permission for promotional texts. We check permissions and suppression records first, and we do not use purchased or shared lists.",
  },
  {
    icon: "mail",
    tone: "default",
    title: "Email",
    body: "We configure sender authentication (SPF, DKIM, DMARC) and unsubscribe handling. Authentication reduces spoofing risk but does not guarantee inbox placement.",
  },
  {
    icon: "shield",
    tone: "default",
    title: "Regulated sectors",
    body: "Healthcare privacy rules and housing advertising rules add requirements. We validate them separately before making any sector-specific promise.",
  },
  {
    icon: "bell",
    tone: "default",
    title: "Rules are changing",
    body: "Federal consent and opt-out rules have changed recently and may change again. We keep broad, customer-friendly opt-out handling and avoid relying on newly announced permissions until they have been reviewed.",
  },
] as const;

// Single source for the visible FAQ section and the FAQPage JSON-LD.
export const faqs: ReadonlyArray<Faq> = [
  { question: "What is text and email automation?", answer: "Text and email automation sends approved messages after a defined action or customer-stage change, such as an inquiry, quote, or appointment booking. The workflow also needs rules for replies, timing, and when messages stop." },
  { question: "Is texting customers legal?", answer: "Businesses can text customers when the program meets applicable consent, opt-out, timing, and other requirements. Rules vary by message purpose, technology, and jurisdiction, and carrier policies apply separately from the law." },
  { question: "Will automated messages annoy my customers?", answer: "They can if they are unwanted, repetitive, poorly timed, or continue after someone responds. A responsible workflow uses appropriate permissions, useful content, frequency limits, and a clear way to stop." },
  { question: "How fast should I follow up with a new lead?", answer: "A practical target is prompt acknowledgment and a substantive human response within five minutes during staffed hours, where feasible. That is an operating recommendation, not a guaranteed conversion result or an OKIKO HIGH service commitment." },
  { question: "How many follow-up messages should I send?", answer: "There is no universal number that fits every service or customer. Start with a short, useful sequence, monitor replies and opt-outs, and stop or change the sequence when the customer's status changes." },
  { question: "What do I need to register to send texts?", answer: "For application-based messaging through US 10-digit local numbers, register the sending brand and messaging campaign, then associate the phone numbers. Registration typically requires business details, message examples, opt-in information, opt-out instructions, and relevant website policies. Other number types use different processes." },
  { question: "Should I use text messages or email?", answer: "Text messages suit brief, time-sensitive interactions, while email provides room for estimates, instructions, and longer explanations. When both are used, coordinate them so a customer's reply or booking prevents unnecessary follow-ups." },
  { question: "What happens when a customer replies?", answer: "A well-designed workflow pauses or branches and routes the reply to the appropriate person. Staff ownership, response expectations, and escalation responsibilities should be agreed before launch." },
  { question: "Can I use my existing CRM and scheduling software?", answer: "Possibly, but compatibility should be checked against the actual systems, permissions, and integration requirements. Existing reminders should also be reviewed so a new workflow does not duplicate messages." },
  { question: "Can I send reactivation messages to former customers?", answer: "Potentially, after checking permissions, suppression records, data quality, and the purpose of the message. An old customer record is not automatic permission for every promotional text." },
];

// Quick fact beside the channel notes (replaces the former "98% open rate" card).
export const openRatesNote = {
  lead: "Open rates are a weak measure of follow-up, so we track replies and completed actions instead.",
  detail:
    "Klaviyo's documentation says it does not track open rates for SMS. Mailchimp explains that Apple Mail Privacy Protection preloads tracking pixels, which can count emails as opened when they were not and inflate open-related metrics.",
  sources: [sources.klaviyo, sources.mailchimpPrivacy],
};
