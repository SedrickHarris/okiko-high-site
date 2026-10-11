import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

type SiteLogoProps = {
  imageClassName?: string;
  taglineClassName?: string;
};

// The logo file has the tagline cropped off; it is rendered as live text below.
export function SiteLogo({
  imageClassName = "h-[4.5rem] w-auto",
  taglineClassName = "text-[8px]",
}: SiteLogoProps) {
  return (
    <Link href="/" className="inline-flex flex-col items-center">
      <Image
        src="/images/brand/logos/web/okiko-high-primary-on-white-no-tagline.svg"
        alt={siteConfig.name}
        width={480}
        height={224}
        priority
        className={imageClassName}
      />
      <span
        className={`font-heading mt-0.5 whitespace-nowrap font-extrabold uppercase tracking-[0.15em] text-brand-ink ${taglineClassName}`}
      >
        Automate &bull; Scale &bull; Grow
      </span>
    </Link>
  );
}
