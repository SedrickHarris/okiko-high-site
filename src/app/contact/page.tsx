import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageSection } from "@/components/sections/PageSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactActions } from "@/components/ui/ContactActions";
import {
  contactPage as page,
  contactServices,
  doNotSend,
  faqs,
  includeItems,
} from "@/content/contact";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  organizationNode,
  pageNode,
} from "@/lib/schema";
import { PageHero } from "@/components/sections/PageHero";

const pageUrl = absoluteUrl(page.path);

// Setting openGraph on a page replaces the root layout's openGraph object, so the
// site name, type, and image are repeated here.
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
  openGraph: {
    title: `${page.title} | ${siteConfig.shortName}`,
    description: page.description,
    url: pageUrl,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/images/brand/logos/web/okiko-high-primary-on-white.webp",
        width: 1600,
        height: 867,
        alt: siteConfig.name,
      },
    ],
  },
};

// Verified facts only (docs/07): the email and phone added to the Organization node
// are shown on this page. No LocalBusiness, address, hours, ContactPoint hours,
// areaServed, ratings, or reviews. The FAQ node matches the visible FAQ section.
const structuredData = graph([
  organizationNode({ withContact: true }),
  pageNode(pageUrl, { type: "ContactPage", name: page.h1, description: page.description }),
  breadcrumbListNode(pageUrl, [
    { name: "Home", path: "/" },
    { name: "Contact", path: page.path },
  ]),
  faqPageNode(pageUrl, faqs),
]);

const linkClass = "text-brand-blue-strong underline underline-offset-2";

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />

      <div className="mt-8 space-y-16">
        <PageHero layout="">
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{page.h1}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-700">{page.intro}</p>
        </PageHero>

        <PageSection
          id="ways-to-reach-us"
          heading="Ways to Reach Us"
          intro={<p>Call or email using the details below. OKIKO HIGH serves clients worldwide.</p>}
        >
          <ContactActions />
        </PageSection>

        <PageSection
          id="what-to-include"
          heading="What to Include in Your Message"
          muted
          intro={<p>A few details help us understand your situation from the first message.</p>}
        >
          <div className="grid gap-6 md:grid-cols-3">
            {includeItems.map((item) => (
              <div key={item.title} className="rounded-lg border border-neutral-200 bg-white p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-neutral-800">{item.body}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <PageSection
          id="what-not-to-send"
          heading="What Not to Send"
          intro={
            <p>
              Please keep these out of calls and emails. We use what you send to
              respond to your inquiry; see our{" "}
              <Link href="/privacy-policy" className={linkClass}>
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          }
        >
          <ul className="list-disc space-y-2 pl-5 text-neutral-800">
            {doNotSend.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </PageSection>

        <PageSection
          id="services"
          heading="Services You Can Ask About"
          intro={
            <p>
              Each service has its own page. You can also compare them all on our{" "}
              <Link href="/services" className={linkClass}>
                digital marketing services for local businesses
              </Link>{" "}
              page.
            </p>
          }
        >
          <ul className="grid gap-3 sm:grid-cols-2">
            {contactServices.map((service) => (
              <li key={service.path}>
                <Link href={service.path} className={`${linkClass} font-semibold`}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </PageSection>

        <FaqSection
          id="faq"
          heading="Questions Before You Reach Out"
          intro={
            <p>
              Want more answers? See{" "}
              <Link href="/faq" className={linkClass}>
                all frequently asked questions
              </Link>
              , grouped by the customer journey.
            </p>
          }
          faqs={faqs}
        />
      </div>
    </>
  );
}
