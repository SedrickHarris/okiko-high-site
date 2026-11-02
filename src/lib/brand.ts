// Shared brand color helpers (docs/05).
//
// Text color follows the fill, so a rotation can never put dark text on the blue
// fill: blue takes white text (ink on blue is only 3.69:1), lime and yellow take
// brand-ink. Lime and yellow are fills and accents, never text on white.

/** Top-border accents for cards. Decorative, so no text pairing is needed. */
export const accents = ["border-t-brand-blue", "border-t-brand-green", "border-t-brand-yellow"] as const;

/** Filled chips, dots, and pills that carry text or a number, in logo-color order. */
export const fills = [
  "bg-brand-blue text-white",
  "bg-brand-green text-brand-ink",
  "bg-brand-yellow text-brand-ink",
] as const;

/** Pick the fill for the nth item, repeating blue, lime, yellow. */
export function fillAt(index: number): string {
  return fills[index % fills.length];
}
