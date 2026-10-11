import Link from "next/link";
import type { ReactNode } from "react";

// Neutral styling until the logo colors are confirmed (docs/05).
const base =
  "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900";

const variants = {
  primary: "bg-neutral-900 text-white hover:bg-neutral-700",
  secondary: "border border-neutral-900 bg-white text-neutral-900 hover:bg-neutral-100",
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
