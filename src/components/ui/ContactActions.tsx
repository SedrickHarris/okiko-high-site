import { NamedIcon } from "@/components/ui/icons";
import { siteConfig } from "@/data/site";

// Lime and yellow fills use brand-ink text for contrast (docs/05).
const contactButton =
  "font-heading inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-base font-semibold text-brand-ink hover:brightness-95 hover:shadow-md motion-safe:transition-[transform,box-shadow,filter] motion-safe:duration-150 motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0";

const telHref = `tel:+1${siteConfig.phone.replace(/\D/g, "")}`;

/** Email and phone buttons using the confirmed public contact details (docs/01). */
export function ContactActions() {
  return (
    <div className="mt-3 flex flex-wrap gap-3">
      <a href={`mailto:${siteConfig.email}`} className={`${contactButton} bg-brand-yellow`}>
        <NamedIcon name="mail" className="h-5 w-5" />
        {siteConfig.email}
      </a>
      <a href={telHref} className={`${contactButton} bg-brand-green`}>
        <NamedIcon name="phone" className="h-5 w-5" />
        {siteConfig.phone}
      </a>
    </div>
  );
}
