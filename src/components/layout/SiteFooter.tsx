import Link from "next/link";
import { footerLinks, siteConfig } from "@/data/site";
import { SiteLogo } from "./SiteLogo";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-sm text-neutral-600">
        <div className="flex flex-col gap-2">
          <SiteLogo className="h-16 w-auto" />
          <p>&copy; {siteConfig.name}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-5">
          {footerLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
