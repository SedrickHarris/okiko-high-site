import Link from "next/link";
import type { ReactNode } from "react";

// Brand fills use brand-ink text for contrast (docs/05).
const base =
  "font-heading inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-base font-semibold";

const variants = {
  primary: "bg-brand-blue text-brand-ink hover:bg-brand-blue-hover",
  secondary:
    "border-2 border-brand-blue-strong bg-white text-brand-blue-strong hover:bg-surface-muted",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
