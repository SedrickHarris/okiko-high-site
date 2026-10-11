export const siteConfig = {
  name: "OKIKO HIGH Digital Marketing Agency",
  shortName: "OKIKO HIGH",
  // Canonical host format (www vs apex) is TBD; override with NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.okikohigh.com",
  description:
    "OKIKO HIGH Digital Marketing Agency provides digital marketing, marketing automation, and SaaS solutions powered by GoHighLevel and its ecosystem.",
  email: "okikohigh@gmail.com",
  phone: "(469) 421-9832",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
