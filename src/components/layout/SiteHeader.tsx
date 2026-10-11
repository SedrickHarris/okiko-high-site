import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="font-heading text-lg font-extrabold tracking-tight">
          {siteConfig.shortName}
        </Link>
        <nav aria-label="Primary" className="font-heading flex flex-wrap gap-5 text-sm font-semibold">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:text-brand-blue-strong hover:decoration-current motion-reduce:transition-none"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
