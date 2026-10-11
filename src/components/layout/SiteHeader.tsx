import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          {siteConfig.shortName}
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap gap-5 text-sm">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
