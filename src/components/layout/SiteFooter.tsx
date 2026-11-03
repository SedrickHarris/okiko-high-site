import Image from "next/image";
import Link from "next/link";
import {
  footerColumns,
  footerContact,
  footerDescription,
  footerLegalLinks,
} from "@/data/footer-links";
import { siteConfig } from "@/data/site";
import { FooterCta } from "./FooterCta";

const linkClass =
  "inline-flex min-h-11 items-center text-neutral-700 underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:text-brand-blue-strong hover:decoration-current motion-reduce:transition-none";

const headingClass = "font-heading text-xs font-bold uppercase tracking-[0.15em] text-brand-ink";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { email, phone } = footerContact;

  return (
    <footer className="mt-auto border-t border-neutral-200 bg-white text-sm">
      <FooterCta />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/brand/logos/web/okiko-high-primary-on-white-no-tagline.svg"
                alt={siteConfig.name}
                width={480}
                height={224}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-3 max-w-xs text-neutral-700">{footerDescription}</p>
          </div>
          <nav
            aria-label="Footer"
            className="grid gap-8 sm:grid-cols-3 lg:col-span-2"
          >
            {footerColumns.map((column, index) => (
              <div key={column.heading}>
                <h2 className={headingClass}>{column.heading}</h2>
                <ul className="mt-2">
                  {column.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className={linkClass}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                {index === footerColumns.length - 1 && (
                  <div className="mt-6">
                    <h2 className={headingClass}>{footerContact.heading}</h2>
                    <ul className="mt-2">
                      <li>
                        <Link href={footerContact.link.href} className={linkClass}>
                          {footerContact.link.label}
                        </Link>
                      </li>
                      {email && (
                        <li>
                          <a href={`mailto:${email}`} className={linkClass}>
                            {email}
                          </a>
                        </li>
                      )}
                      {phone && (
                        <li>
                          <a href={`tel:${phone.tel}`} className={linkClass}>
                            {phone.display}
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-neutral-200 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-neutral-700">
            &copy; {year} {siteConfig.name}
          </p>
          <ul className="flex flex-wrap gap-x-5">
            {footerLegalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
