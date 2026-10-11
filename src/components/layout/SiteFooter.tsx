import Link from "next/link";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-sm text-neutral-600">
        <p>
          &copy; {siteConfig.name}
        </p>
        <nav aria-label="Legal" className="flex gap-5">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
