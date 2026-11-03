import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ContactForm } from "@/components/forms/ContactForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageSection } from "@/components/sections/PageSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ContactActions } from "@/components/ui/ContactActions";
import {
  contactForm,
  contactPage as page,
  contactServices,
  doNotSend,
  faqs,
  includeItems,
} from "@/content/contact";
import { audiences } from "@/content/industries/hub";
import { hubServices } from "@/content/services/hub";
import { siteConfig } from "@/data/site";
import { accents } from "@/lib/brand";
import { contactFormEndpoint } from "@/lib/contact-form";
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

        {/* Rendered only when a submission endpoint is configured (src/lib/contact-form.ts),
            so the site never shows a form that cannot submit. Two columns on large screens:
            the form on the left, phone, email, and what to include on the right. When the
            form is on, the sidebar replaces the two standalone sections below. */}
        {contactFormEndpoint ? (
          <PageSection
            id={contactForm.id}
            heading={contactForm.heading}
            intro={<p>{contactForm.intro}</p>}
          >
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
              <ContactForm
                endpoint={contactFormEndpoint}
                services={contactServices.map((service) => service.name)}
              />

              <aside aria-label="Other ways to reach us and what to include" className="space-y-6">
                <div className="rounded-xl border border-brand-blue/30 bg-surface-muted p-6">
                  <h3 className="text-lg font-semibold">Prefer to call or email?</h3>
                  <p className="mt-2 text-neutral-800">
                    Use the details below. OKIKO HIGH serves clients worldwide.
                    You can also read{" "}
                    <Link href="/about" className={linkClass}>
                      about OKIKO HIGH and how it works
                    </Link>
                    .
                  </p>
                  <ContactActions />
                </div>

                <div className="rounded-xl border border-t-4 border-neutral-200 border-t-brand-green bg-white p-6">
                  <h3 className="text-lg font-semibold">What to include</h3>
                  <ul className="mt-4 space-y-4">
                    {includeItems.map((item) => (
                      <li key={item.title}>
                        <p className="font-semibold">{item.title}</p>
                        <p className="mt-1 text-neutral-800">{item.body}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </PageSection>
        ) : (
          <>
            <PageSection
              id="ways-to-reach-us"
              heading="Ways to Reach Us"
              intro={
                <p>
                  Call or email using the details below. OKIKO HIGH serves clients worldwide.
                  You can also read{" "}
                  <Link href="/about" className={linkClass}>
                    about OKIKO HIGH and how it works
                  </Link>
                  .
                </p>
              }
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
          </>
        )}

        <PageSection
          id="what-not-to-send"
          heading="What Not to Send"
          intro={
            <p>
              Please keep these out of{" "}
              {contactFormEndpoint ? "calls, emails, and the contact form" : "calls and emails"}.
              We use what you send to respond to your inquiry; see our{" "}
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
          <ul aria-label="Services" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hubServices.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </ul>

          <h3 id="industries-we-serve" className="mt-12 text-xl font-bold tracking-tight">
            Industries We Serve
          </h3>
          <p className="mt-2 text-neutral-700">See how these services apply to your industry.</p>

          <ul aria-labelledby="industries-we-serve" className="mt-6 grid gap-6 md:grid-cols-2">
            {audiences.map((item, index) => (
              <li
                key={item.path}
                style={{ "--reveal-i": index % 3 } as CSSProperties}
                className={`card-lift reveal-on-scroll flex flex-col rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={item.icon} title={item.title} />
                <p className="mt-4 text-neutral-700">{item.description}</p>
                <div className="mt-auto pt-6">
                  <ButtonLink href={item.path} variant="secondary">
                    {item.buttonLabel}
                  </ButtonLink>
                </div>
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
