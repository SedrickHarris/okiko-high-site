import { fillAt } from "@/lib/brand";

// "Step n" label for numbered step cards. The fill rotates blue, lime, yellow with the
// step, and pairs with the card's top border (see `accents` in src/lib/brand.ts). The
// step number is in the text, so color is never the only cue. `label` lets a page say
// "Stage" where its copy uses that word.
export function StepBadge({
  index,
  label = "Step",
  className = "mb-3",
}: {
  index: number;
  label?: string;
  className?: string;
}) {
  return (
    <p
      className={`inline-block rounded-full px-2.5 py-0.5 font-heading text-xs font-bold ${fillAt(index)} ${className}`.trim()}
    >
      {label} {index + 1}
    </p>
  );
}
