import type { ReactNode } from "react";

// Shared page hero: a soft blue-tinted panel that fades to white, with the
// logo-color stripe (blue, lime, yellow) above the content. Decorative only, so
// the stripe is hidden from assistive technology. Pass the page's existing grid
// classes as `layout` so each hero keeps its own column arrangement.
export function PageHero({
  children,
  layout = "grid items-center gap-10 lg:grid-cols-[1fr_auto]",
}: {
  children: ReactNode;
  layout?: string;
}) {
  return (
    <header className="rounded-xl border border-brand-blue/20 bg-linear-to-br from-surface-muted via-white to-white p-6 sm:p-10">
      <div aria-hidden="true" className="mb-5 flex h-1.5 w-28 overflow-hidden rounded-full">
        <span className="flex-1 bg-brand-blue" />
        <span className="flex-1 bg-brand-green" />
        <span className="flex-1 bg-brand-yellow" />
      </div>
      <div className={layout}>{children}</div>
    </header>
  );
}
