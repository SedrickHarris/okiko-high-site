import { fillAt } from "@/lib/brand";
import { NamedIcon, type IconName } from "../ui/icons";

// "Jump to a topic" card for the hero. Numbered chips rotate through the logo
// colors; the number and label carry the meaning, never color alone. An item with
// an `icon` shows that icon in its chip instead of a number.
export function HeroJumpCard({
  title = "Jump to a topic",
  items,
  variant = "card",
}: {
  title?: string;
  items: ReadonlyArray<{ href: string; label: string; icon?: IconName }>;
  // "card" is a vertical list for a hero's side column. "row" is a compact wrapping
  // row of pills that sits under a hero whose side column already holds an illustration.
  variant?: "card" | "row";
}) {
  if (variant === "row") {
    return (
      <nav aria-label={title} className="border-t border-brand-blue/20 pt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600">{title}</p>
        <ol className="mt-3 flex flex-wrap gap-2">
          {items.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-neutral-200 bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-neutral-900 hover:border-brand-blue-strong hover:text-brand-blue-strong"
              >
                <span
                  aria-hidden="true"
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-heading text-xs font-bold ${fillAt(index)}`}
                >
                  {index + 1}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    );
  }
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-lg">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-600">{title}</p>
      <ol className="divide-y divide-neutral-200">
        {items.map((item, index) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="group flex min-h-11 items-center gap-3 py-2 font-semibold text-neutral-900 hover:text-brand-blue-strong"
            >
              <span
                aria-hidden="true"
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md font-heading text-sm font-bold ${fillAt(index)}`}
              >
                {item.icon ? <NamedIcon name={item.icon} className="h-5 w-5" /> : index + 1}
              </span>
              <span className="flex-1">{item.label}</span>
              <span
                aria-hidden="true"
                className="text-brand-blue-strong motion-safe:transition-transform motion-safe:duration-150 group-hover:translate-y-0.5"
              >
                &darr;
              </span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
