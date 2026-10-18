// Content for /services/google-business-profile-optimization.
// Source: research pack and page brief for "Google Business Profile Optimization and Management".
// The owner approved publishing this page (availability and scope confirmed), so it is
// indexable, in the sitemap, and carries Service schema. Still intentionally not stated here: agency pricing, scope as a commitment,
// ownership/exit terms, suspension assistance, results, testimonials, client proof, and
// any vendor partnership. The HighLevel link documents what that platform describes,
// not a tested OKIKO HIGH configuration.

import type { IconName } from "@/components/ui/icons";
import type { Faq, SourceLink } from "../shared";

export const gbpPage = {
  path: "/services/google-business-profile-optimization",
  title: "Google Business Profile Optimization and Management",
  description:
    "Understand what Google Business Profile management includes, why a business may miss the map pack, and how profile actions are measured, with clear limits and approvals.",
  h1: "Google Business Profile Optimization and Management",
  serviceType: "Google Business Profile optimization and management",
  // Primary contact action is TBD in docs/01. Point the CTA at one place so it
  // can change once the owner confirms the contact path.
  primaryCta: { label: "Discuss Your Google Business Profile", href: "/contact" },
} as const;

export const sources = {
  overview: {
    label: "Google Business Profile overview",
    href: "https://business.google.com/us/business-profile/",
  },
  ranking: {
    label: "Google local ranking guidance",
    href: "https://support.google.com/business/answer/7091?hl=en",
  },
  guidelines: {
    label: "Google guidelines for representing your business",
    href: "https://support.google.com/business/answer/3038177?hl=en",
  },
  guidelinesShort: {
    label: "Google guidelines",
    href: "https://support.google.com/business/answer/3038177?hl=en",
  },
  contactGuidelines: {
    label: "Google guidelines on business-controlled contact information",
    href: "https://support.google.com/business/answer/3038177?hl=en",
  },
  mapsContent: {
    label: "Google Maps content policy",
    href: "https://support.google.com/contributionpolicy/answer/7400114?hl=en",
  },
  whitespark: {
    label: "Whitespark Local Search Ranking Factors",
    href: "https://whitespark.ca/local-search-ranking-factors/",
  },
  serviceArea: {
    label: "Google service-area guidance",
    href: "https://support.google.com/business/answer/9157481?hl=en",
  },
  eligibility: {
    label: "Google business eligibility guidance",
    href: "https://support.google.com/business/answer/13763036?hl=en",
  },
  categories: {
    label: "categories",
    href: "https://support.google.com/business/answer/7249669?hl=en",
  },
  services: {
    label: "services",
    href: "https://support.google.com/business/answer/9455399?hl=en",
  },
  attributes: {
    label: "attributes",
    href: "https://support.google.com/business/answer/9049526?hl=en",
  },
  photos: {
    label: "photos and videos",
    href: "https://support.google.com/business/answer/6103862?hl=en",
  },
  posts: {
    label: "posts",
    href: "https://support.google.com/business/answer/7342169?hl=en",
  },
  chatCall: {
    label: "chat and call history changes",
    href: "https://support.google.com/business/answer/14919056?hl=en",
  },
  apiPolicies: {
    label: "Google Business Profile API policies",
    href: "https://developers.google.com/my-business/content/policies",
  },
  qandaChangeLog: {
    label: "Google Q&A API change log",
    href: "https://developers.google.com/my-business/content/qanda/change-log",
  },
  highLevelPosts: {
    label: "HighLevel documentation on GBP post scheduling",
    href: "https://help.gohighlevel.com/support/solutions/articles/155000007212-google-business-profile-gbp-post-scheduler-in-highlevel",
  },
  metrics: {
    label: "Google profile performance metrics",
    href: "https://support.google.com/business/answer/9918094?hl=en",
  },
  suspended: {
    label: "Google guidance on suspended profiles",
    href: "https://support.google.com/business/answer/4569145?hl=en",
  },
  video: {
    label: "Google video verification guidance",
    href: "https://support.google.com/business/answer/14271705?hl=en",
  },
} satisfies Record<string, SourceLink>;

export const scopeColumns = [
  {
    icon: "clipboard",
    tone: "default",
    title: "Initial work",
    items: [
      "Check of eligibility, ownership, duplicates, and verification status",
      "Baseline of current information, customer actions, and website attribution",
      "Correction and optimization of categories, services, hours, attributes, description, photos, and eligible links",
    ],
  },
  {
    icon: "repeat",
    tone: "included",
    title: "Ongoing work",
    items: [
      "Publishing of posts you have approved",
      "Monitoring for rejected content, unexpected edits, and connection failures",
      "Holiday and special-hours updates and business changes",
      "Reporting and coordination with your team",
    ],
  },
  {
    icon: "package",
    tone: "optional",
    title: "Separate scope",
    items: [
      "Citation cleanup",
      "Website improvements, such as website design and development",
      "Call tracking",
      "Review-request campaigns, covered under reputation management",
      "Suspension and verification assistance",
      "Work across multiple locations",
    ],
  },
] as const satisfies ReadonlyArray<{
  icon: IconName;
  tone: "default" | "included" | "optional";
  title: string;
  items: ReadonlyArray<string>;
}>;

export const rankingFactors = [
  {
    icon: "search",
    tone: "default",
    title: "Relevance",
    body: "How well your profile matches what someone searched for. Accurate categories, services, and details all feed this.",
  },
  {
    icon: "pin",
    tone: "included",
    title: "Distance",
    body: "How far your business is from the searcher or from the location named in the search. This is the factor optimization cannot change.",
  },
  {
    icon: "star",
    tone: "optional",
    title: "Prominence",
    body: "How well known your business is. Genuine reviews and ratings can help, and so can a website that clearly matches your profile.",
  },
] as const satisfies ReadonlyArray<{
  icon: IconName;
  tone: "default" | "included" | "optional";
  title: string;
  body: string;
}>;

export const canInfluence = [
  { icon: "shield", text: "Eligibility and verification status" },
  { icon: "tag", text: "The primary category and the services you list" },
  { icon: "clock", text: "Correct hours and contact details" },
  { icon: "star", text: "Genuine customer reviews and timely replies" },
  {
    icon: "website",
    text: "A website that matches what your profile says, which is where website design and development helps",
  },
] as const satisfies ReadonlyArray<{ icon: IconName; text: string }>;

export const cannotControl = [
  { icon: "pin", text: "Where the searcher is" },
  { icon: "globe", text: "How many strong competitors are nearby" },
  { icon: "flag", text: "Google's ranking, verification, and appeal decisions" },
  { icon: "star", text: "Whether Google removes a particular review" },
] as const satisfies ReadonlyArray<{ icon: IconName; text: string }>;

export const setupTypes = [
  {
    icon: "call",
    tone: "default",
    title: "Service-area business",
    body: "You travel to customers, as a home-service business typically does. If customers are not served at your address, Google directs you to hide it, and a genuine operating location is used for verification.",
  },
  {
    icon: "pin",
    tone: "included",
    title: "Storefront or hybrid",
    body: "Customers visit you. A public address needs real-world presence, appropriate signage and staffing, and customer access.",
  },
] as const satisfies ReadonlyArray<{
  icon: IconName;
  tone: "default" | "included" | "optional";
  title: string;
  body: string;
}>;

export const specialCases = [
  "Service areas: Google permits up to 20 entries and generally advises an overall boundary within about two hours' driving time, with exceptions. They are not radius settings.",
  "Practitioners: eligible public-facing practitioners may qualify for individual profiles, but support staff cannot.",
  "Leasing offices and property managers: individual rental or for-sale properties are not eligible, while a qualifying leasing or sales office may be. Each entity is assessed separately.",
] as const;

export type ChecklistItem = { icon: IconName; title: string; body: string };

export const checklistGroups: ReadonlyArray<{
  icon: IconName;
  tone: "default" | "included" | "optional";
  title: string;
  items: ReadonlyArray<ChecklistItem>;
}> = [
  {
    icon: "clipboard",
    tone: "default",
    title: "Information",
    items: [
      { icon: "tag", title: "Name and address", body: "Your real-world business name, with no promotional keywords. No fake offices or mailbox addresses. Address visibility follows your business model." },
      { icon: "phone", title: "Phone and website", body: "Contact details your business controls, and a website that represents the actual business or location." },
      { icon: "flag", title: "Categories", body: "The most accurate specific primary category, plus only relevant additional ones. Category changes can trigger re-verification." },
      { icon: "clock", title: "Hours", body: "Actual customer-facing hours, special hours, and holiday hours. An AI answering service alone is not a reason to list misleading 24-hour availability." },
      { icon: "globe", title: "Service areas", body: "Places you actually serve, up to 20 areas, generally within about two hours' driving time. They are not radius settings." },
    ],
  },
  {
    icon: "lead",
    tone: "included",
    title: "Customer actions",
    items: [
      { icon: "package", title: "Services", body: "Actual suggested and custom services, with useful descriptions and approved prices where available. Availability depends on the category." },
      { icon: "check", title: "Attributes", body: "Truthful selectable attributes. Some attributes come from customer input rather than owner control." },
      { icon: "calendar", title: "Booking and contact options", body: "We check which website, booking, and contact fields exist on your actual profile. Booking buttons are not available on every profile, and text or WhatsApp options are documented only for selected regions and profiles. Google retired its native chat and call history in 2024, so we do not plan work around them." },
      { icon: "analytics", title: "Website link tracking", body: "Consistent UTM parameters on eligible website links, validated before any reporting so profile visits are classified correctly." },
    ],
  },
  {
    icon: "image",
    tone: "optional",
    title: "Content",
    items: [
      { icon: "pen", title: "Business description", body: "A plain explanation of the business and its services. No links, and no focus on promotions, prices, or sales." },
      { icon: "image", title: "Photos and video", body: "Accurate photos of the business, team, work, and location, with the permissions needed. Image metadata is not sold as a ranking tactic." },
      { icon: "bell", title: "Posts", body: "Relevant Updates, Offers, and Events with verified contact details and an appropriate button. Unverified contact information can cause a post to be rejected." },
    ],
  },
];

export const automationSteps = [
  { icon: "pen", tone: "default", title: "Draft", body: "Content is prepared from information you have supplied." },
  { icon: "check", tone: "included", title: "Approval", body: "You give specific approval before an automated workflow is enabled, and content follows an agreed approval process." },
  { icon: "calendar", tone: "optional", title: "Scheduled action", body: "Approved posts publish through a supported integration." },
  { icon: "search", tone: "default", title: "Monitoring", body: "Rejected posts, unexpected edits, and connection failures are logged." },
  { icon: "headset", tone: "included", title: "Escalation", body: "Sensitive edits, review replies, and failures go to a person." },
] as const satisfies ReadonlyArray<{
  icon: IconName;
  tone: "default" | "included" | "optional";
  title: string;
  body: string;
}>;

export const automationCan = [
  "Schedule posts you have approved",
  "Assist with agreed administrative workflows",
  "Flag failures, rejections, and unexpected changes for review",
] as const;

export const automationCannot = [
  "Bypass verification or start it without your direct request",
  "Guarantee that a post is accepted, published, or ranked",
  "Automatically reverse changes that Google makes",
  "Manage Google Q&A through the API, which Google ended on November 3, 2025",
] as const;

export const measureLevels = [
  { icon: "analytics", tone: "default", title: "Click", body: "Call-button clicks, website clicks, and direction requests, as Google defines them." },
  { icon: "integrations", tone: "included", title: "Connected inquiry", body: "A website visit or call that website attribution or business-controlled call tracking can connect to the profile." },
  { icon: "lead", tone: "optional", title: "Qualified lead", body: "An inquiry your records show was a real prospect for the service you offer." },
  { icon: "calendar", tone: "included", title: "Booking", body: "An appointment or job recorded in your customer records." },
] as const satisfies ReadonlyArray<{
  icon: IconName;
  tone: "default" | "included" | "optional";
  title: string;
  body: string;
}>;

export const attributionSetup = [
  "Consistent UTM parameters on eligible website links, for example utm_source=google&utm_medium=organic&utm_campaign=gbp",
  "Links, analytics classification, and booking-form capture are validated before anything is reported",
  "A tracking number stays business-controlled and connected to your actual business, with your stable main number kept in the profile",
  "Call clicks, connected calls, qualified calls, appointments, and sales are reported separately",
] as const;

export const reportsAccountFor = [
  "Seasonality, advertising, and website changes",
  "Changes to opening hours and to tracking",
  "A fixed set of queries, locations, and search times when visibility is compared to a baseline",
] as const;

export const suspensionSteps = [
  "Read the decision, then check your eligibility and information against Google's guidelines. Correct any issue you can identify.",
  "Keep the notice, the profile ID, the account details, and the edit history.",
  "Prepare business and operational evidence that matches the profile, such as registration, licensing, tax, and utility records.",
  "Submit Google's appeal once, with the evidence the current interface asks for, and track it rather than resubmitting.",
  "If the appeal is denied, use Google's additional-review route with new evidence where it is offered.",
] as const;

export const suspensionAvoid = [
  "Creating a replacement profile during an appeal",
  "Submitting the same appeal repeatedly",
] as const;

export const proofSlots = [
  { title: "Redacted audit or information correction", body: "Before and after, with what changed, why, when, and who approved it." },
  { title: "Approval and monitoring workflow", body: "An example of the path from approval to publication to failure monitoring." },
  { title: "Approved case study", body: "Business model, baseline, work done, period, outcome, and confounding factors." },
] as const;

export const tellUs = [
  "Your business model: service-area, storefront or hybrid, or multiple locations",
  "Your profile status: active, unverified, suspended, or none yet",
  "How many locations you have",
  "The main problem you want solved",
] as const;

// Single source for the visible FAQ section and the FAQPage JSON-LD.
export const faqs: Faq[] = [
  {
    question: "What does Google Business Profile management include?",
    answer:
      "Management commonly includes maintaining business information, optimizing categories and services, publishing approved content, monitoring the profile, and reporting customer actions. Website work, citations, review-request campaigns, call tracking, and suspension assistance may be separate, so the agreed scope should list them explicitly.",
  },
  {
    question: "Why am I not appearing in the Google map pack?",
    answer:
      "Google principally considers relevance, distance, and prominence when showing local results. An assessment should check eligibility, verification, accurate information, categories, reviews, and website relevance, while recognizing that optimization cannot remove geographic constraints.",
    sources: [sources.ranking],
  },
  {
    question: "Is Google Business Profile free?",
    answer:
      "Yes, Google provides eligible businesses with a free Business Profile. A management provider charges for agreed services and tools, not a mandatory Google listing fee.",
    sources: [sources.overview],
  },
  {
    question: "Can I manage my profile myself?",
    answer:
      "Yes, managing the profile directly through Google is an option. A management service is worth considering when updates, monitoring, approved publishing, or reporting are repeatedly neglected or require more time than your team can give them.",
  },
  {
    question: "Is automating Google Business Profile posts safe?",
    answer:
      "Scheduling through a supported integration can be appropriate when the owner specifically authorizes the workflow and the content follows Google's policies. Automation does not guarantee publication or rankings, so rejected posts and connection problems still need monitoring.",
    sources: [sources.apiPolicies],
  },
  {
    question: "Do regular posts improve local rankings?",
    answer:
      "Posts can help customers find current information, offers, and events. The research did not establish a universal ranking improvement from posting on a particular schedule, so posting frequency should not be sold as a ranking guarantee.",
  },
  {
    question: "My profile has been suspended. What should I do?",
    answer:
      "Review Google's decision and guidelines, correct identifiable issues, and prepare evidence that supports the business's eligibility and information. Use the official appeal process rather than creating a replacement profile or repeatedly submitting the same appeal; reinstatement is not guaranteed.",
    sources: [sources.suspended],
  },
  {
    question: "Should a service-area business show its address?",
    answer:
      "If customers are not served at the address, Google directs service-area businesses to hide it. Serving additional cities does not automatically make the business eligible for additional profiles in those cities.",
    sources: [sources.guidelines],
  },
  {
    question: "How can I tell whether my profile generates leads?",
    answer:
      "Google reports interactions such as call-button clicks and website clicks, but those figures do not establish qualified leads or sales. Where properly configured, website attribution, business-controlled call tracking, and customer records can help connect interactions to inquiries and bookings.",
    sources: [sources.metrics],
  },
  {
    question: "Can a provider remove a negative review or guarantee rankings?",
    answer:
      "Only Google decides whether a review violates its policies and should be removed; an unfavorable opinion alone is not a valid removal promise. No provider can responsibly guarantee map-pack placement for every query or searcher, because Google controls ranking and considers factors such as distance.",
    sources: [sources.mapsContent, sources.ranking],
  },
];
