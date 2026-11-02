import type { ReactNode } from "react";

export function PageSection({
  id,
  heading,
  intro,
  className = "",
  children,
}: {
  id: string;
  heading: string;
  intro?: ReactNode;
  // Extra classes for the section element, e.g. to widen one section on large screens.
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className={`py-2 ${className}`.trim()}
    >
      <span aria-hidden="true" className="mb-3 block h-1 w-12 rounded bg-brand-yellow" />
      <h2 id={id} className="text-2xl font-bold tracking-tight sm:text-3xl">
        {heading}
      </h2>
      {intro && (
        <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-neutral-700">
          {intro}
        </div>
      )}
      {children && <div className="mt-8">{children}</div>}
    </section>
  );
}
