import { NamedIcon, type IconName } from "../ui/icons";

// Status tones carry meaning through icon shape and heading text as well,
// never through color alone. Fills use brand-ink for contrast (docs/05).
const tones = {
  default: "bg-surface-muted text-brand-blue-strong",
  included: "bg-brand-green text-brand-ink",
  optional: "bg-brand-blue text-brand-ink",
  muted: "bg-neutral-200 text-neutral-700",
  negative: "bg-red-600 text-white",
} as const;

export function IconCardHeading({
  icon,
  title,
  tone = "default",
  as: Heading = "h3",
}: {
  icon: IconName;
  title: string;
  tone?: keyof typeof tones;
  as?: "h3" | "h4";
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${tones[tone]}`}
      >
        <NamedIcon name={icon} className="h-6 w-6" />
      </span>
      <Heading className="text-lg font-semibold leading-snug">{title}</Heading>
    </div>
  );
}
