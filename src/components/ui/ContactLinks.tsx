import { emailHref, phoneHref, siteConfig } from "@/data/site";

const defaultClass = "font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink";

/** Inline phone link: tel: href in E.164, display text exactly as in siteConfig (docs/01). */
export function PhoneLink({ className = defaultClass }: { className?: string }) {
  return (
    <a href={phoneHref} className={className}>
      {siteConfig.phone}
    </a>
  );
}

/** Inline email link: mailto: href, with the address as the visible text. */
export function EmailLink({ className = defaultClass }: { className?: string }) {
  return (
    <a href={emailHref} className={className}>
      {siteConfig.email}
    </a>
  );
}
