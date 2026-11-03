// Single source for the site footer. Add a page here and the footer updates.
// Only link to routes that exist under src/app.

export type FooterLink = { href: string; label: string };

export type FooterColumn = { heading: string; links: readonly FooterLink[] };

export const footerCta = {
  heading: "Ready to talk?",
  text: "Tell us about your business and what you want to improve.",
  label: "Contact OKIKO HIGH",
  href: "/contact",
} as const;

// Wording trimmed from the business description in docs/01 (the platform name is omitted).
export const footerDescription = "Digital marketing, marketing automation, and SaaS solutions.";

export const footerColumns: readonly FooterColumn[] = [
  {
    heading: "Services",
    links: [
      { href: "/services", label: "All Services" },
      { href: "/services/website-design", label: "Website Design" },
      { href: "/services/ai-chatbots", label: "AI Chatbots" },
      { href: "/services/ai-receptionist", label: "AI Receptionist" },
      { href: "/services/reputation-management", label: "Reputation Management" },
      { href: "/services/google-business-profile-optimization", label: "Google Business Profile Optimization" },
      { href: "/services/sms-email-automation", label: "SMS and Email Automation" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { href: "/industries", label: "All Industries" },
      { href: "/industries/home-services", label: "Home Services" },
      { href: "/industries/professional-services", label: "Professional Services" },
      { href: "/industries/property-management-real-estate", label: "Property Management and Real Estate" },
      { href: "/industries/healthcare", label: "Healthcare, Dental and Med Spa" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/resources", label: "Resources" },
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

// Email and phone render only when set. Leave unset until the owner confirms them.
// phone.tel must be international format, for example "+15555550123".
export const footerContact: {
  heading: string;
  link: FooterLink;
  email?: string;
  phone?: { display: string; tel: string };
} = {
  heading: "Contact",
  link: { href: "/contact", label: "Contact Us" },
};

export const footerLegalLinks: readonly FooterLink[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];
