import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function SiteLogo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <Link href="/" className="inline-block">
      <Image
        src="/images/brand/logos/source/okiko-high-horizontal.svg"
        alt={siteConfig.name}
        width={600}
        height={180}
        priority
        className={className}
      />
    </Link>
  );
}
