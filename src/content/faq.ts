// Content for /faq (the site-wide FAQ page).
// The FAQs follow the customer journey: getting found, capturing inquiries,
// qualifying and booking, following up, and gathering feedback. Questions that
// apply across all five stages (pricing, onboarding, support, ownership,
// privacy, cancellation) sit in a separate "Working With OKIKO HIGH" group.
// Answers are condensed from the six service pages, the Services and Industries
// hubs, and the home services page. They describe how a workflow can be designed,
// not a guarantee that every service or integration is available for every
// project. Nothing here adds a fact that is still TBD in docs/01: no prices,
// timelines, results, partnerships, or tested integrations.

import type { Faq } from "./shared";

export const faqPage = {
  path: "/faq",
  // The root layout appends " | OKIKO HIGH".
  title: "Digital Marketing and Automation FAQs",
  description:
    "Answers about how OKIKO HIGH marketing and automation fits the customer journey, from getting found and answering inquiries to follow-up, reviews, and working together.",
  h1: "Frequently Asked Questions About OKIKO HIGH Services",
  primaryCta: { label: "Ask Us a Question", href: "/contact" },
  secondaryCta: { label: "Browse the questions", href: "#faq-getting-found" },
} as const;

export type FaqGroup = {
  id: string;
  // Short label for the jump-to-topic list in the hero.
  label: string;
  heading: string;
  intro: string;
  // Pages that hold the full answers and sources for this group.
  more: ReadonlyArray<{ href: string; label: string }>;
  faqs: Faq[];
};

export const faqGroups: ReadonlyArray<FaqGroup> = [
  {
    id: "faq-getting-found",
    label: "Getting found and first impressions",
    heading: "Getting Found and Making a Strong First Impression",
    intro:
      "How prospective customers discover a business and understand what it offers, through its website and its Google Business Profile.",
    more: [
      { href: "/services/website-design", label: "Website Design" },
      {
        href: "/services/google-business-profile-optimization",
        label: "Google Business Profile Management",
      },
    ],
    faqs: [
      {
        question: "How can you help customers find and understand our business online?",
        answer:
          "Two services work on this step. A website explains what you do and how to get in touch, and a Google Business Profile keeps the details customers see on Google Search and Maps accurate. Which one to start with depends on where customers drop off today. Neither guarantees rankings or leads.",
      },
      {
        question: "Do we need a new website, or can we improve the one we have?",
        answer:
          "Start with an audit of your existing website and requirements. A redesign makes sense when the current platform can meet your goals. Rebuilding may be more practical when its structure or capabilities cannot. A rebuild also needs care, because a poorly managed one can disrupt search visibility.",
      },
      {
        question: "What should our website help visitors do?",
        answer:
          "It should make the next step easy to find and complete, such as calling, requesting a quote, or booking. The scope defines which of those actions matters most for your business, so the layout and copy are organized around it. Foundational SEO should be named in the scope and not assumed.",
      },
      {
        question: "What does Google Business Profile optimization include?",
        answer:
          "It commonly includes maintaining business information, optimizing categories and services, publishing approved content, monitoring the profile, and reporting customer actions. Website work, citations, review-request campaigns, call tracking, and suspension assistance may be separate, so the agreed scope should list them explicitly.",
      },
      {
        question: "Does our business qualify for a Google Business Profile?",
        answer:
          "Eligibility depends on how the business actually operates. Google's guidelines focus on businesses that serve customers at a physical location or travel to customers, require an accurate real-world representation, exclude online-only businesses, and restrict virtual-office listings. Service-area businesses may need to hide their address.",
      },
    ],
  },
  {
    id: "faq-inquiries",
    label: "Capturing inquiries and responding",
    heading: "Capturing Inquiries and Responding to Customers",
    intro:
      "What happens when someone calls, submits a form, or starts a chat, and how the inquiry reaches the right place.",
    more: [
      { href: "/services/ai-chatbots", label: "AI Website Chatbots" },
      { href: "/services/ai-receptionist", label: "AI Receptionist" },
    ],
    faqs: [
      {
        question: "How can customer inquiries be collected and organized?",
        answer:
          "A workflow can be designed to collect the request from a form, chat, or call, acknowledge receipt, and route the details to the right person or system. The acknowledgment should make the next step clear. Receiving a request is not the same as confirming an appointment, dispatching a technician, or accepting a job.",
      },
      {
        question: "Can an AI assistant answer common questions or take a message?",
        answer:
          "It can be suitable for clearly defined questions, such as business hours, service areas, or how to request an appointment, and it can collect a caller's or visitor's details. Its information and responsibilities are approved before launch, it should disclose that it is an AI assistant, and it can still misunderstand a question, so testing and a route to a person matter.",
      },
      {
        question: "What happens to inquiries outside business hours?",
        answer:
          "Depending on the approved setup, an after-hours workflow can collect contact details, record the reason for the inquiry, and explain when or how the customer should expect a response. After-hours handling should not be presented as emergency service or guaranteed dispatch.",
      },
      {
        question: "Can we keep our existing business phone number?",
        answer:
          "Possibly. Forwarding an existing number is one way calls can reach an AI receptionist, but compatibility depends on your carrier, phone setup, and routing. The full call path, including voicemail and timeouts, is tested before launch and not assumed.",
      },
      {
        question: "What happens when the assistant cannot answer a question or someone wants a person?",
        answer:
          "It should say it cannot confirm the answer and offer a route to a person, such as a call transfer, a notification to a team member, or collecting details for a callback. Who is available, and when, needs to be confirmed before the workflow goes live, so no one is left thinking a request was accepted when it was not.",
      },
    ],
  },
  {
    id: "faq-qualifying-booking",
    label: "Qualifying requests and booking",
    heading: "Qualifying Requests and Booking the Next Step",
    intro:
      "How an initial inquiry becomes an appointment, an estimate request, or a staff handoff.",
    more: [
      { href: "/services/ai-chatbots", label: "AI Website Chatbots" },
      { href: "/services/ai-receptionist", label: "AI Receptionist" },
    ],
    faqs: [
      {
        question: "Can the system collect the information our team needs before responding?",
        answer:
          "A request workflow can be designed to ask for relevant details, such as contact information, location, service type, and a short description. The aim is to give your team useful context without making the customer complete a long intake process.",
      },
      {
        question: "Can it check service areas or other basic fit requirements?",
        answer:
          "Basic questions can help identify whether a request falls within your service area or the types of work you accept. Your team defines those rules. Unclear requests and exceptions need a review path and not an automatic decision based on incomplete information.",
      },
      {
        question: "Can customers book directly, or does our team approve requests?",
        answer:
          "That depends on your scheduling system and operating rules. Some businesses suit direct booking, while others need staff to review the job, availability, travel, or required skills first. The workflow should clearly distinguish a requested time from a confirmed appointment.",
      },
      {
        question: "Can it work with our existing calendar or scheduling software?",
        answer:
          "Possibly. Compatibility depends on the systems, plans, and permissions involved, so it is checked when your project is scoped and tested before it is promised. A connection that passes along contact details may not also support live scheduling, dispatch, estimates, or job-status updates.",
      },
      {
        question: "How are urgent, sensitive, or unsupported requests handled?",
        answer:
          "They follow an approved escalation flow, not an improvised answer. Urgent requests can be routed to an agreed contact, and immediate danger or a medical emergency calls for an instruction to contact the appropriate emergency service. Technical diagnoses, safety concerns, and exceptions to company policy go to a person.",
      },
    ],
  },
  {
    id: "faq-follow-up",
    label: "Following up and staying informed",
    heading: "Following Up and Keeping Customers Informed",
    intro:
      "How communication continues after the first interaction without becoming repetitive or unwanted.",
    more: [
      { href: "/services/sms-email-automation", label: "Text and Email Automation" },
    ],
    faqs: [
      {
        question: "Which follow-up messages can be automated?",
        answer:
          "Depending on the agreed scope, a workflow can acknowledge a new inquiry, remind a customer about a confirmed appointment, follow up on an estimate, or share an approved next-step message. Each workflow needs a clear trigger, approved wording, and rules for when it stops.",
      },
      {
        question: "Can we approve the wording and timing before launch?",
        answer:
          "Message approval should be part of the agreed project process. Your team confirms that the wording, timing, service details, and next steps reflect how your business works. Messages should not promise availability, pricing, or response times your team has not authorized.",
      },
      {
        question: "Does automation stop when someone replies, books, or opts out?",
        answer:
          "It should. A well-designed workflow pauses, branches, or stops after a reply, a booking, a cancellation, or an opt-out, and routes replies to the right person. Those scenarios are tested before launch so follow-up does not continue after a customer's status changes.",
      },
      {
        question: "Can different customers receive different follow-up sequences?",
        answer:
          "Yes, a workflow can branch by the customer's stage, such as a new inquiry, a sent estimate, or a booked appointment. Which branches are used depends on the systems connected and the rules approved for your project.",
      },
      {
        question: "How are permission, communication preferences, and opt-outs handled?",
        answer:
          "Consent rules depend on the message purpose, the technology, and the jurisdiction. A responsible setup looks for documented permission, honors opt-outs across workflows, and does not treat a phone number or an inbound call as blanket permission for marketing texts. Commercial email has its own sender and opt-out requirements. Your counsel should review the consent language.",
      },
    ],
  },
  {
    id: "faq-feedback",
    label: "Feedback and customer relationships",
    heading: "Gathering Feedback and Maintaining Customer Relationships",
    intro:
      "What happens after the service: requesting honest feedback, responding appropriately, and keeping in touch where permitted.",
    more: [
      { href: "/services/reputation-management", label: "Review Management" },
      { href: "/services/sms-email-automation", label: "Text and Email Automation" },
    ],
    faqs: [
      {
        question: "How can we request honest customer feedback and reviews?",
        answer:
          "Ask eligible customers for honest feedback after an agreed completion event, without rewards, pressure, or prescribed wording. Follow each platform's rules, because they differ: Google permits neutral requests, while Yelp says not to ask. Incentives for reviews are not allowed.",
      },
      {
        question: "Which customers receive review requests?",
        answer:
          "The project defines the trigger and the audience, such as customers with a completed job. The rules must be neutral. Google prohibits selectively soliciting positive reviews, so a satisfaction screen should not decide who receives the review link.",
      },
      {
        question: "Can our team approve review responses?",
        answer:
          "Yes. We agree who drafts, who approves, and who publishes replies before anything goes out. AI can produce a draft, but a person should check accuracy, tone, and privacy before it is published.",
      },
      {
        question: "How are complaints or sensitive feedback routed to a person?",
        answer:
          "The workflow routes them to a named person who is responsible for reviewing and responding. Automation can organize the handoff, but it should not stand in for a thoughtful response to a disputed job, a safety concern, or a private customer issue. Private details should not be disclosed in a public reply.",
      },
      {
        question: "Can we stay in touch with past customers when appropriate and permitted?",
        answer:
          "Potentially, after checking permissions, suppression records, data quality, and the relevance of the message. An old customer record is not automatic permission for every promotional text or email.",
      },
    ],
  },
  {
    id: "faq-working-together",
    label: "Working with OKIKO HIGH",
    heading: "Working With OKIKO HIGH",
    intro:
      "These questions apply across all five stages: scope, pricing, setup, support, ownership, privacy, and what happens if you stop.",
    more: [
      { href: "/services", label: "All services" },
      { href: "/industries", label: "Industries" },
    ],
    faqs: [
      {
        question: "What does OKIKO HIGH do?",
        answer:
          "OKIKO HIGH combines digital marketing strategy with automation to help businesses connect with customers and simplify marketing and customer-management tasks.",
      },
      {
        question: "What types of businesses does OKIKO HIGH work with?",
        answer:
          "OKIKO HIGH currently serves four kinds of business: home-service businesses, such as HVAC, plumbing, landscaping, general contracting, and cleaning companies; professional services firms; property management and real estate businesses; and healthcare, dental, and med spa practices. Each has its own industry page, and those pages describe a proposed approach, not client work or results. Other industries are evaluated separately.",
      },
      {
        question: "Which service should I start with, and do I need all six?",
        answer:
          "You do not need all six. Start where customers drop off today: Google Business Profile management if they cannot find you, website design if they do not contact you, the AI receptionist if calls are missed, text and email automation if inquiries go quiet, and review management if reviews are thin. One clearly defined workflow is a sound starting point.",
      },
      {
        question: "Does OKIKO HIGH work with businesses outside one city or country?",
        answer:
          "OKIKO HIGH states that it serves clients worldwide. Availability for a particular project depends on the systems, communication channels, languages, and legal requirements involved, such as which consent rules apply to calls and texts.",
      },
      {
        question: "How much do OKIKO HIGH services cost?",
        answer:
          "OKIKO HIGH does not publish prices on this site. Cost depends on scope, such as the number of pages, locations, and platforms involved, which integrations are needed, and any software or usage charges. Request a scoped quote through the contact page.",
      },
      {
        question: "How long does setup take?",
        answer:
          "A timeline is set after the scope, system access, integrations, content approvals, and testing needs are understood. No standard setup time has been confirmed, so none is published.",
      },
      {
        question: "How does getting started work, and what information is needed?",
        answer:
          "Use the contact page to describe the customer-management task you want to improve, how your team handles it today, the website, phone, calendar, and software involved, who approves customer communication, and what should happen when a request needs a person. We use that to define a written scope before any work begins.",
      },
      {
        question: "What support does OKIKO HIGH provide after launch?",
        answer:
          "Ongoing support is defined in your written scope. Support hours and response commitments have not been confirmed or published, so confirm them in the scope before you agree to work.",
      },
      {
        question: "Who owns our websites, accounts, phone numbers, and data?",
        answer:
          "Ownership depends on the agreement and the platform. OKIKO HIGH's ownership terms have not been finalized or published yet, so confirm domain and account control, content and code rights, phone number ownership, and data export before you agree to a project.",
      },
      {
        question: "How is customer and business information handled?",
        answer:
          "A workflow should collect only what it needs, and access, retention, and vendor data use are reviewed when the project is scoped. Sensitive details may need a separate secure channel. See the Privacy Policy for how information sent through this site is used.",
      },
      {
        question: "What happens if I stop working with OKIKO HIGH?",
        answer:
          "Exit terms have not been finalized or published yet. Before agreeing to work, confirm what happens to your website, accounts, and phone numbers, who keeps access to each, and what data can be exported.",
      },
      {
        question: "Can OKIKO HIGH guarantee rankings, leads, or review removal?",
        answer:
          "No. Google and other platforms control search results and decide whether a review is removed, and outcomes also depend on demand, competition, your offer, and how quickly inquiries are answered. Each service page states what it does and does not include.",
      },
    ],
  },
];

// Flat list for the FAQPage JSON-LD. The visible groups and the structured data
// read from the same objects, so they cannot drift apart.
export const allFaqs: Faq[] = faqGroups.flatMap((group) => group.faqs);
