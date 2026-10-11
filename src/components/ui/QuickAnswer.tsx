import type { SourceLink } from "@/content/services/website-design";
import { NamedIcon } from "./icons";
import { SourceLinks } from "./SourceLinks";

// "Quick fact" callout: a labeled card with a bold direct answer first, the
// supporting detail next, and the source last. The logo blue is a fill and a
// left accent with brand-ink glyphs (docs/05); the label text and icon carry the
// meaning, never color alone.
export function QuickAnswer({
  lead,
  detail,
  source,
}: {
  lead: string;
  detail: string;
  source?: SourceLink;
}) {
  return (
    <aside
      aria-label="Quick fact"
      className="mt-6 max-w-3xl rounded-lg border border-brand-blue/30 border-l-4 border-l-brand-blue bg-surface-muted p-5"
    >
      <p className="flex items-center gap-2.5 font-heading text-xs font-bold uppercase tracking-wider text-neutral-800">
        <span
          aria-hidden="true"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-blue text-brand-ink"
        >
          <NamedIcon name="message" className="h-5 w-5" />
        </span>
        Quick fact
      </p>
      <p className="mt-3 text-lg font-semibold leading-snug text-neutral-900">{lead}</p>
      <p className="mt-2 text-neutral-700">{detail}</p>
      {source && <SourceLinks sources={[source]} />}
    </aside>
  );
}
