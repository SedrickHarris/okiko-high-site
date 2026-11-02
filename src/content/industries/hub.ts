// Content for /industries (the industries hub) and the "other industries" strips on
// the audience pages and the services hub.
// The audience pages describe a proposed approach, not client work or results.
// Nothing here adds a fact that is still TBD in docs/01.

import type { IconName } from "@/components/ui/icons";

export type IndustryAudience = {
  path: string;
  title: string;
  icon: IconName;
  description: string;
  buttonLabel: string;
};

export const hubPage = {
  path: "/industries",
  // The root layout appends " | OKIKO HIGH".
  title: "Industries We Help",
  description:
    "See how OKIKO HIGH marketing and automation services fit home services, professional services, and property management and real estate businesses.",
  h1: "Industries We Help",
} as const;

export const audiences: ReadonlyArray<IndustryAudience> = [
  {
    path: "/industries/home-services",
    title: "Home Services",
    icon: "call",
    description:
      "HVAC, plumbing, landscaping, general contracting, cleaning, and related businesses. How calls and quote requests turn into booked jobs, with clear handoffs.",
    buttonLabel: "Explore Home Services",
  },
  {
    path: "/industries/professional-services",
    title: "Professional Services",
    icon: "file",
    description:
      "Law, accounting, consulting, financial advice, and similar firms of about 1 to 25 people. A credible website, discreet intake, and dependable follow-up.",
    buttonLabel: "Explore Professional Services",
  },
  {
    path: "/industries/property-management-real-estate",
    title: "Property Management and Real Estate",
    icon: "key",
    description:
      "Property managers, landlords, rental operators, and real estate teams. Separate paths for owners, renters, and buyers, with human handoffs.",
    buttonLabel: "Explore Property Management and Real Estate",
  },
  {
    path: "/industries/healthcare",
    title: "Healthcare, Dental and Med Spa",
    icon: "shield",
    description:
      "Healthcare, dental, and med spa practices of about 1 to 10 providers. Clearer contact paths and administrative follow-up, with clinical questions staying with your team.",
    buttonLabel: "Explore Healthcare, Dental and Med Spa",
  },
];

export const approachNote =
  "These pages describe a proposed approach, not client work or results, and the scope of each service is confirmed before any implementation.";
