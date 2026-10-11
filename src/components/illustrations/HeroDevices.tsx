// Original abstract illustration: a generic service-business website on a
// laptop and a phone. Interface details are deliberately unreadable blocks. No
// client names, logos, reviews, or metrics. Not a client project.
export function HeroDevices() {
  return (
    <svg
      viewBox="0 0 480 300"
      role="img"
      aria-label="Abstract illustration of a generic service-business website shown on a laptop and a phone"
      className="h-auto w-full max-w-md"
    >
      <circle cx="240" cy="150" r="140" className="fill-surface-muted" />
      {/* laptop */}
      <rect x="40" y="38" width="300" height="190" rx="12" className="fill-white stroke-neutral-800" strokeWidth="3" />
      <rect x="40" y="38" width="300" height="22" rx="12" className="fill-neutral-100" />
      <circle cx="56" cy="49" r="3" className="fill-brand-yellow" />
      <circle cx="67" cy="49" r="3" className="fill-brand-green" />
      <circle cx="78" cy="49" r="3" className="fill-brand-blue" />
      <rect x="62" y="76" width="140" height="12" rx="3" className="fill-neutral-800" />
      <rect x="62" y="96" width="100" height="12" rx="3" className="fill-neutral-800" />
      <rect x="62" y="118" width="170" height="6" rx="3" className="fill-neutral-300" />
      <rect x="62" y="130" width="150" height="6" rx="3" className="fill-neutral-300" />
      <rect x="62" y="148" width="70" height="22" rx="5" className="fill-brand-blue" />
      <rect x="140" y="148" width="58" height="22" rx="5" className="fill-white stroke-brand-blue-strong" strokeWidth="2" />
      <rect x="248" y="76" width="70" height="94" rx="6" className="fill-neutral-100" />
      <rect x="62" y="184" width="76" height="30" rx="5" className="fill-neutral-100" />
      <rect x="146" y="184" width="76" height="30" rx="5" className="fill-neutral-100" />
      <rect x="230" y="184" width="88" height="30" rx="5" className="fill-neutral-100" />
      <rect x="62" y="184" width="76" height="4" rx="2" className="fill-brand-yellow" />
      <rect x="146" y="184" width="76" height="4" rx="2" className="fill-brand-green" />
      <rect x="230" y="184" width="88" height="4" rx="2" className="fill-brand-blue" />
      <rect x="18" y="228" width="344" height="14" rx="7" className="fill-neutral-200 stroke-neutral-800" strokeWidth="3" />
      {/* phone */}
      <rect x="352" y="96" width="96" height="176" rx="16" className="fill-white stroke-neutral-800" strokeWidth="3" />
      <rect x="368" y="116" width="64" height="9" rx="3" className="fill-neutral-800" />
      <rect x="368" y="131" width="46" height="9" rx="3" className="fill-neutral-800" />
      <rect x="368" y="150" width="64" height="5" rx="2.5" className="fill-neutral-300" />
      <rect x="368" y="160" width="54" height="5" rx="2.5" className="fill-neutral-300" />
      <rect x="368" y="178" width="64" height="22" rx="5" className="fill-brand-blue" />
      <rect x="368" y="206" width="64" height="22" rx="5" className="fill-brand-green" />
      <rect x="368" y="236" width="64" height="20" rx="4" className="fill-neutral-100" />
    </svg>
  );
}
