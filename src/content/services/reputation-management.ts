// Content for /services/reputation-management.
// Source: page brief and research pack for "Review Management for Local Businesses".
// Service availability for reputation management is TBD in docs/01. Until the owner
// confirms it, the page is noindex and left out of the sitemap, and no Service schema
// is emitted. Also intentionally not stated here: agency pricing, response-time
// targets as commitments, platform coverage as confirmed, results, testimonials,
// ratings or review totals, client names, vendor prices, and any vendor partnership.
// The "what we will not do" list is a proposed policy that needs owner approval
// before the page is indexed.

import type { Faq, SourceLink } from "./website-design";

export const reputationManagementPage = {
  path: "/services/reputation-management",
  title: "Review Management Services for Local Businesses",
  description:
    "Review management for local businesses: honest review requests, monitoring, and thoughtful replies, with clear platform-policy limits and no guarantees.",
  h1: "Review Management for Local Businesses",
  // Primary contact action is TBD in docs/01. Point the CTA at one place so it
  // can change once the owner confirms the contact path. The secondary CTA jumps
  // to the on-page sample workflow, so it does not promise a separate demo.
  primaryCta: { label: "Discuss your review workflow", href: "/contact" },
  secondaryCta: { label: "See a sample workflow", href: "#sample-workflow" },
} as const;

export const sources = {
  brightLocal: {
    label: "BrightLocal Local Consumer Review Survey 2026",
    href: "https://www.brightlocal.com/research/local-consumer-review-survey/",
  },
  googleRanking: {
    label: "Google Business Profile Help: tips to improve your local ranking",
    href: "https://support.google.com/business/answer/7091",
  },
  googlePolicy: {
    label: "Google Maps prohibited and restricted content policy",
    href: "https://support.google.com/contributionpolicy/answer/7400114",
  },
  googleReport: {
    label: "Google Business Profile Help: report inappropriate reviews",
    href: "https://support.google.com/business/answer/4596773",
  },
  yelp: {
    label: "Yelp for Business: don't ask for reviews",
    href: "https://biz.yelp.com/support-center/Reviews/Best_Practices/Don-t-Ask-for-Reviews/en-US",
  },
  angiAsk: {
    label: "Angi: how to ask customers for reviews",
    href: "https://www.angi.com/articles/how-to-ask-for-reviews.htm",
  },
  angiFaq: {
    label: "Angi frequently asked questions",
    href: "https://www.angi.com/landing/faq",
  },
  ftcRule: {
    label: "FTC Consumer Reviews and Testimonials Rule: questions and answers",
    href: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers",
  },
  fcc: {
    label: "FCC guide: stop unwanted robocalls and texts",
    href: "https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts",
  },
  canSpam: {
    label: "FTC CAN-SPAM Act compliance guide for business",
    href: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business",
  },
  highLevelRequests: {
    label: "HighLevel documentation on multi-channel review requests",
    href: "https://help.gohighlevel.com/support/solutions/articles/155000004803-multi-channel-review-requests",
  },
  highLevelCustomize: {
    label: "HighLevel documentation on customizing review request messages",
    href: "https://help.gohighlevel.com/support/solutions/articles/48000980328-how-to-customize-the-review-request-messages-sms-email-",
  },
  adaReviews: {
    label: "American Dental Association guidance on responding to online reviews",
    href: "https://www.ada.org/resources/practice/legal-and-regulatory/managing-dental-practice-online-reviews",
  },
} satisfies Record<string, SourceLink>;

// The three questions owners ask most, written as the section's way in.
export const ownerQuestions = [
  {
    icon: "mail",
    title: "How do we ask consistently?",
    body: "Asking is hard to keep up when it depends on someone remembering. A workflow ties one neutral request to a clear event, such as a completed job.",
  },
  {
    icon: "headset",
    title: "Who handles difficult replies?",
    body: "A reply to a hard review needs a calm tone, accurate facts, and a decision about what not to say in public. We agree who drafts, who approves, and who sensitive cases go to before any reply is published.",
  },
  {
    icon: "flag",
    title: "What can actually be removed?",
    body: "Only the platform decides, and only under its own policies. A review you disagree with is not automatically removable. We report documented policy violations and do not guarantee the outcome.",
  },
] as const;

// BrightLocal 2026 survey of 1,002 US adults. Stated attitudes, not outcomes.
export const surveyFindings = [
  {
    stat: "47%",
    text: "said they would not use a business with fewer than 20 reviews.",
  },
  {
    stat: "74%",
    text: "said they look for reviews written within the last three months.",
  },
  {
    stat: "68%",
    text: "said they require a rating of at least four stars. 31% require at least 4.5.",
  },
  {
    stat: "80%",
    text: "said they are more likely to use a business that replies to all of its reviews.",
  },
  {
    stat: "42%",
    text: "said they are unlikely to use a business that never replies to reviews.",
  },
  {
    stat: "50%",
    text: "said generic replies deter them.",
  },
] as const;

export const loopStages = [
  { icon: "mail", label: "Request" },
  { icon: "bell", label: "Monitor" },
  { icon: "message", label: "Respond" },
  { icon: "improve", label: "Improve" },
] as const;

export const workflowSteps = [
  {
    title: "Audit your profiles and data",
    body: "Review your review profiles, permissions, existing reviews, customer data, and consent records.",
    clientInput: "Access to your review profiles and a view of how jobs are recorded.",
  },
  {
    title: "Define who is eligible",
    body: "Set an objective rule, such as a completed job, instead of a satisfaction score.",
    clientInput: "How you know a job is complete.",
  },
  {
    title: "Send a neutral request",
    body: "Trigger one request through a permitted platform and an approved channel, with wording that leaves the rating and the words to the customer.",
    clientInput: "Which channels you have consent to use.",
  },
  {
    title: "Monitor and route",
    body: "Bring new reviews to the right person and send sensitive feedback to an accountable owner.",
    clientInput: "A named person for sensitive and urgent cases.",
  },
  {
    title: "Reply and report",
    body: "Draft, approve, and publish replies as agreed, and report documented policy violations to the platform.",
    clientInput: "Your approval rules for replies.",
  },
  {
    title: "Review the numbers monthly",
    body: "Look at requests, new reviews, reply coverage, and recurring complaint themes together.",
    clientInput: "A conversation about the service issues the reviews point to.",
  },
] as const;

export const scopeColumns = [
  {
    icon: "check",
    tone: "included",
    heading: "Candidate scope",
    note: "Confirmed with you in your written scope.",
    items: [
      "Workflow setup and testing",
      "SMS and email request templates",
      "Review monitoring",
      "Reply drafting or publishing, as agreed",
      "Policy-violation reporting",
      "Performance reporting",
    ],
  },
  {
    icon: "plus",
    tone: "optional",
    heading: "What we need from you",
    note: "The workflow is only as good as what it is given.",
    items: [
      "Access to your review profiles",
      "A way to tell when a job is complete",
      "Documented consent for the channels used",
      "A named person for threats, safety concerns, legal allegations, and urgent complaints",
      "Rules for which replies need your approval",
    ],
  },
  {
    icon: "minus",
    tone: "negative",
    heading: "Not included",
    note: "Not assumed unless your scope says so.",
    items: [
      "Crisis communications",
      "Legal representation",
      "Comprehensive search-result suppression",
      "Every review platform",
      "Round-the-clock monitoring",
      "Guaranteed review removal",
    ],
  },
] as const;

export const costFactors = [
  {
    title: "Messaging and software usage",
    icon: "mail",
    body: "Depends on how many requests you send and which tools are involved.",
  },
  {
    title: "Locations and platforms",
    icon: "pin",
    body: "More locations or review platforms mean more to set up, watch, and answer.",
  },
  {
    title: "Integrations",
    icon: "integrations",
    body: "Connecting to the system where your completed jobs are recorded.",
  },
  {
    title: "Reply responsibilities",
    icon: "message",
    body: "Who drafts, approves, and publishes replies, and how quickly.",
  },
] as const;

// Proposed policy. Owner approval is required before the page is indexed.
export const willNotDo = [
  "Buy, fabricate, or impersonate customer reviews",
  "Offer rewards for reviews or for changing a review",
  "Send only satisfied customers to public platforms",
  "Set a rating target or supply review text",
  "Pressure customers or set staff review-count quotas",
  "Threaten, intimidate, or make unsupported accusations",
  "Guarantee removal, ratings, rankings, or revenue",
] as const;

export const platformRows = [
  {
    platform: "Google",
    rule: "Neutral requests are allowed. Incentives, asking only happy customers, pressuring customers to review while they are at your business, prescribed review content (including naming staff), and staff review-count quotas are not.",
    handling: "We ask eligible customers and leave the rating and the words to them.",
  },
  {
    platform: "Yelp",
    rule: "Yelp tells businesses not to ask customers for reviews, and prohibits incentives and staff competitions.",
    handling: "Monitor and reply only. Yelp is left out of request campaigns.",
  },
  {
    platform: "Angi",
    rule: "Supports asking for feedback after a project and prohibits biased or self-affiliated reviews.",
    handling: "Genuine requests only, with no incentives and no aggressive follow-ups.",
  },
  {
    platform: "Facebook and others",
    rule: "Rules differ by platform and change over time.",
    handling: "We check each platform's current rules before enabling requests, and use no incentives.",
  },
] as const;

export const messagingNotes = [
  {
    title: "Text messages (US)",
    body: "Consent rules depend on the purpose of the message and the technology used. We look for documented consent, honor opt-outs, and do not treat a phone number on file as unlimited permission to send marketing messages. Your counsel should approve the exact workflow.",
  },
  {
    title: "Email (US)",
    body: "Commercial email needs truthful sender details, an opt-out, and a valid postal address. Whether a review request counts as commercial has to be assessed, so we do not assume it is exempt.",
  },
  {
    title: "Worldwide does not mean everywhere",
    body: "OKIKO HIGH serves clients worldwide, but messaging, privacy, and review rules differ by country. Each channel is checked per project before launch.",
  },
] as const;

export const reportSteps = [
  "Save the review, its link, the date, and any relevant evidence.",
  "Identify the specific policy provision it breaks, not just why you disagree with it.",
  "Report it through the Business Profile review interface.",
  "Track the decision through Google's review-management process.",
  "If it is rejected, use the appeal route with relevant evidence.",
  "Keep handling the customer relationship, without paying for a revision or removal.",
] as const;

export const replyPrinciples = [
  {
    icon: "message",
    title: "Thank, do not pitch",
    body: "For positive reviews, a brief thank-you that acknowledges what the reviewer said works better than repeated sales language.",
  },
  {
    icon: "headset",
    title: "Stay calm and specific",
    body: "For critical reviews, acknowledge the experience, offer a direct way to reach a person, and avoid a public argument.",
  },
  {
    icon: "shield",
    title: "Protect privacy",
    body: "Do not disclose private details, even if the reviewer shared them first. Regulated sectors need a separate privacy review.",
  },
  {
    icon: "flag",
    title: "Do not accuse publicly",
    body: "Not matching a name to a customer record is not proof a review is fake. Keep evidence and report the specific suspected violation.",
  },
] as const;

export const sampleReply =
  "I'm sorry to hear you were disappointed. Please contact [name or contact] so we can understand your concerns and discuss next steps.";

export const escalationList = [
  "Threats and safety concerns",
  "Legal allegations",
  "Urgent complaints",
  "Anything involving private or regulated personal information",
] as const;

export const homeServiceCases = [
  {
    icon: "gauge",
    title: "Urgent repair",
    body: "Ask once the work is actually complete and handed off, while the experience is fresh.",
  },
  {
    icon: "calendar",
    title: "Longer project",
    body: "Ask after a meaningful milestone or at final delivery, when the customer can judge the work.",
  },
  {
    icon: "improve",
    title: "Recurring service",
    body: "Ask after enough visits for an informed opinion, and suppress duplicates so one customer is not asked repeatedly.",
  },
] as const;

export const timingRules = [
  "One request and at most one restrained reminder",
  "Every eligible customer gets the same opportunity. Private support never decides who receives the link.",
  "The customer's preferred channel, only where you have consent",
  "Timing is a starting recommendation, tested against your own results",
] as const;

// Labeled samples with a fictional business. Not client results.
export const sampleTimeline = [
  { icon: "check", title: "Job marked complete", body: "The completed job is the trigger, not a satisfaction score." },
  { icon: "mail", title: "One neutral request", body: "Sent by an approved channel, with the opt-out included." },
  { icon: "bell", title: "New review noticed", body: "It reaches the right person, and sensitive ones go to a named owner." },
  { icon: "message", title: "Reply approved and posted", body: "Posted under your approval rules." },
] as const;

export const sampleSms =
  "Hi [first name], this is [business]. Thank you for choosing us. Would you share an honest review of your experience? [review link] It's optional, and we welcome all feedback. Reply STOP to opt out.";

export const sampleEmail =
  "Thank you for choosing [business]. If you'd like, please share an honest review of your experience: [review link]. If you need assistance, you can also contact [support contact].";

export const metricRows = [
  {
    metric: "Request coverage",
    icon: "mail",
    how: "Eligible customers compared with requests delivered",
    boundary: "No staff review-count quotas. Google prohibits them.",
  },
  {
    metric: "Published reviews",
    icon: "star",
    how: "New reviews compared with requests delivered, by channel and platform",
    boundary: "No universal conversion rate exists, so none is promised.",
  },
  {
    metric: "Freshness",
    icon: "calendar",
    how: "Days since the latest review, and reviews added each month",
    boundary: "Buyers value recent reviews. There is no required posting rate.",
  },
  {
    metric: "Reply coverage and speed",
    icon: "gauge",
    how: "Share of reviews answered, and median time to reply",
    boundary: "Reply targets are agreed in your scope. They are not an industry guarantee.",
  },
  {
    metric: "Complaint themes",
    icon: "flag",
    how: "Recurring issues, who owns each, and how long they take to resolve",
    boundary: "Public ratings do not replace fixing the cause.",
  },
  {
    metric: "Staff time",
    icon: "clock",
    how: "Minutes your team spends before and after setup",
    boundary: "Time savings are claimed only after they are measured.",
  },
  {
    metric: "Inquiries and bookings",
    icon: "analytics",
    how: "Tracked alongside reviews and local visibility",
    boundary: "Other marketing and operations also move these numbers, so attribution is limited.",
  },
] as const;

export const realisticAims = [
  "More consistent review requests",
  "Feedback that is easier to manage",
  "Replies that are timely and thoughtful",
  "Recurring complaints that reach someone who can fix them",
] as const;

export const notPromised = [
  "Guaranteed five-star reviews",
  "Removal of any unfavorable review",
  "A first-place ranking",
  "Doubled revenue",
  "A fixed number of new reviews",
] as const;

export const alternativeRows = [
  {
    option: "Do it yourself",
    fits: "You have few reviews, a simple customer journey, and an owner who is comfortable replying.",
    limit: "Consistency depends on the owner's time.",
  },
  {
    option: "In-house administrator",
    fits: "Your team can own requests, replies, and escalation.",
    limit: "Needs training, backup, and accountability.",
  },
  {
    option: "Your CRM or field-service software",
    fits: "Job-completion data already lives in a usable system.",
    limit: "Integrations, consent, and duplicate suppression still need to be confirmed.",
  },
  {
    option: "Review software on its own",
    fits: "You want straightforward request automation and review display.",
    limit: "Policy-sensitive settings and human oversight still need attention.",
  },
  {
    option: "Managed review management",
    fits: "You want setup, monitoring, replies, and reporting handled together.",
    limit: "Scope, platforms, approvals, and full cost need to be confirmed.",
  },
] as const;

export const likelyUseful = [
  "Jobs are completed regularly, but nobody asks for reviews consistently",
  "Reviews arrive faster than anyone can answer them",
  "Difficult replies sit because nobody owns them",
  "The same complaints keep appearing and nobody reviews the pattern",
] as const;

export const simplerMayDo = [
  "You have few reviews and a simple customer journey",
  "You are comfortable replying yourself",
  "Your team can own requests, replies, and escalation",
  "Your existing software already handles review requests",
] as const;

// Single source for the visible FAQ section and the FAQPage JSON-LD.
export const faqs: Faq[] = [
  {
    question: "How do I get more Google reviews without breaking the rules?",
    answer:
      "Ask objectively eligible customers for honest feedback without rewards, pressure, prescribed wording, or screening by satisfaction. Follow each platform's rules: Google permits neutral requests, while Yelp says not to ask.",
    sources: [sources.googlePolicy, sources.yelp],
  },
  {
    question: "Can you remove a bad Google review?",
    answer:
      "A review can be reported when it violates the platform's policies, but a negative opinion alone is not grounds for removal. Google decides whether to remove it, so no responsible provider should guarantee success.",
    sources: [sources.googleReport],
  },
  {
    question: "How many reviews does my business need?",
    answer:
      "There is no universal number that guarantees credibility or rankings. BrightLocal's 2026 US survey found that 47% of respondents would not use a business with fewer than 20 reviews, but an appropriate plan also considers competitors, transaction volume, rating, and recency.",
    sources: [sources.brightLocal],
  },
  {
    question: "What should I say to an angry reviewer?",
    answer:
      "For an ordinary service business, try something like: \"I'm sorry to hear you were disappointed. Please contact [name or contact] so we can understand your concerns and discuss next steps.\" Keep it calm, avoid public argument, and refer to what the reviewer actually said. Use a privacy-reviewed approach for healthcare or legal matters.",
  },
  {
    question: "Can I offer a discount for a review?",
    answer:
      "Do not offer incentives for Google or Yelp reviews. The FTC also prohibits incentives conditioned on a particular sentiment, and even neutral incentives can raise disclosure and platform-policy issues.",
    sources: [sources.googlePolicy, sources.ftcRule],
  },
  {
    question: "What is review gating, and is it allowed?",
    answer:
      "Review gating filters customers by satisfaction before deciding who receives a public-review opportunity. Google prohibits selectively soliciting positive reviews, so private feedback should not determine who gets the review link.",
    sources: [sources.googlePolicy],
  },
  {
    question: "Do Google reviews help local rankings?",
    answer:
      "Google says more reviews and positive ratings can help local ranking. Reviews are only part of the picture: relevance and distance also matter, and no review count guarantees a position.",
    sources: [sources.googleRanking],
  },
  {
    question: "Is SMS or email better for review requests?",
    answer:
      "No universal published-review conversion advantage was verified in our research. Choose a legally appropriate channel based on customer preference, and track delivery, clicks, published reviews, and opt-outs separately. Review tools commonly support both channels.",
    sources: [sources.highLevelRequests],
  },
  {
    question: "When should I ask for a review?",
    answer:
      "For completed projects, ask while the experience is still fresh and after the customer can meaningfully evaluate the work. Recurring or multi-stage services need their own timing rules.",
    sources: [sources.angiAsk],
  },
  {
    question: "Should I respond to positive reviews?",
    answer:
      "Yes, where an appropriate reply is possible: briefly thank the reviewer and acknowledge the feedback without repetitive sales language. Healthcare providers must avoid confirming patient status, even in positive replies.",
    sources: [sources.brightLocal],
  },
  {
    question: "What if a review looks fake?",
    answer:
      "Preserve evidence and report the specific suspected policy violation. Do not publicly accuse someone just because you cannot match their name to a customer record. Google, not the business, determines removal.",
    sources: [sources.googleReport],
  },
  {
    question: "Can AI write our review responses?",
    answer:
      "AI can produce a draft, but a person should check accuracy, tone, privacy, and sensitive allegations before it is published. Automated replies are particularly risky where patient information or legal-client confidentiality is involved.",
    sources: [sources.adaReviews],
  },
  {
    question: "How much does review management cost?",
    answer:
      "Cost depends on scope: how many locations and platforms are involved, how many requests you send, which integrations are needed, and who drafts, approves, and publishes replies. Software prices are not the same as the cost of a managed service. We do not publish a price on this page; ask for a scoped quote.",
  },
];

// Quick fact at the top of the platform-rules section.
export const reviewRulesNote = {
  lead: "Google does not allow incentives for reviews, or selectively asking only happy customers to post.",
  detail:
    "Its policy bars merchants from offering incentives in exchange for a review or for removing a negative one, and from selectively soliciting positive reviews, a practice known as review gating. Merchants can still encourage genuine reviews with no incentive and no attempt to influence the rating or content.",
  source: sources.googlePolicy,
};
