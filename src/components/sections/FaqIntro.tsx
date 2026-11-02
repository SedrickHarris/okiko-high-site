import Link from "next/link";

const linkClass =
  "font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink";

// Intro line for a page's FAQ section: links to related pages, then to the site-wide
// FAQ. Pass it to FaqSection's `intro`.
export function FaqIntro({
  related,
  relatedLabel = "Related pages:",
}: {
  related?: ReadonlyArray<{ href: string; label: string }>;
  relatedLabel?: string;
}) {
  return (
    <p>
      {related && related.length > 0 && (
        <>
          {relatedLabel}{" "}
          {related.map((link, index) => (
            <span key={link.href}>
              {index > 0 && (index === related.length - 1 ? " and " : ", ")}
              <Link href={link.href} className={linkClass}>
                {link.label}
              </Link>
            </span>
          ))}
          .{" "}
        </>
      )}
      More answers are on the{" "}
      <Link href="/faq" className={linkClass}>
        FAQ page
      </Link>
      , grouped by the customer journey.
    </p>
  );
}
