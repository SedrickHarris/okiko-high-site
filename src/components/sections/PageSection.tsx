import type { ReactNode } from "react";

export function PageSection({
  id,
  heading,
  intro,
  muted = false,
  children,
}: {
  id: string;
  heading: string;
  intro?: ReactNode;
  muted?: boolean;
  children?: ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className={
        muted
          ? "rounded-xl border border-brand-blue/30 bg-surface-muted p-6 sm:p-10"
          : "py-2"
      }
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
