// Content for /blog (the blog hub). The intro uses only the business description and
// mission in docs/01. No posts, authors, or dates are stated here; the post list comes
// from src/data/blog.ts. The target keyword is proposed in docs/03, not yet validated.

export const blogPage = {
  path: "/blog",
  // The root layout appends " | OKIKO HIGH".
  title: "Digital Marketing and Automation Blog",
  description:
    "Articles from OKIKO HIGH Digital Marketing Agency on digital marketing, marketing automation, and SaaS solutions. New articles will be listed here as they are published.",
  h1: "Digital Marketing and Automation Blog",
  intro: [
    "OKIKO HIGH Digital Marketing Agency provides digital marketing, marketing automation, and Software as a Service (SaaS) solutions. Our mission is to make marketing smarter, business operations easier, and growth more achievable.",
    "This is where articles on those topics will be listed as they are published.",
  ],
} as const;

export const emptyState = {
  heading: "No articles yet",
  text: "We have not published any articles yet. In the meantime, these pages explain what we do and who we help.",
  links: [
    { href: "/services", label: "Browse our services" },
    { href: "/industries", label: "See the industries we help" },
    { href: "/resources", label: "Visit Resources" },
    { href: "/contact", label: "Contact OKIKO HIGH" },
  ],
} as const;
