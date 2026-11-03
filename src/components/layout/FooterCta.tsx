"use client";

import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { footerCta } from "@/data/footer-links";

// The footer lives in the root layout, so the pathname check hides the strip on /contact.
export function FooterCta() {
  const pathname = usePathname();
  if (pathname === footerCta.href) return null;

  return (
    <div className="bg-surface-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-brand-ink">{footerCta.heading}</h2>
          <p className="mt-1 text-neutral-700">{footerCta.text}</p>
        </div>
        <div className="shrink-0">
          <ButtonLink href={footerCta.href}>{footerCta.label}</ButtonLink>
        </div>
      </div>
    </div>
  );
}
