import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function SiteLogo({ className = "h-20 w-auto" }: { className?: string }) {
  return (
    <Link href="/" className="inline-block">
      <Image
        src="/images/brand/logos/source/okiko-high-primary-on-white.svg"
        alt={siteConfig.name}
        width={480}
        height={260}
        priority
        className={className}
      />
    </Link>
  );
}
