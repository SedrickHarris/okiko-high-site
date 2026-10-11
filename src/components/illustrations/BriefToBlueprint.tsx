// Illustrative graphic only: it is not a client project and shows no results.
// Decorative: the section heading and copy carry the meaning, so it is aria-hidden.
const heading = { fontFamily: "var(--font-heading), system-ui, sans-serif" };

const cards = [
  { y: 24, label: "Business type", chip: "fill-brand-blue" },
  { y: 100, label: "Current site", chip: "fill-brand-green" },
  { y: 176, label: "Goal", chip: "fill-brand-yellow" },
] as const;

export function BriefToBlueprint({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 290"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Input cards */}
      {cards.map((c) => (
        <g key={c.label}>
          <rect x="6" y={c.y} width="172" height="64" rx="10" className="fill-white stroke-brand-ink" strokeWidth="1.75" />
          <rect x="18" y={c.y + 14} width="36" height="36" rx="8" className={`${c.chip} stroke-brand-ink`} strokeWidth="1.5" />
          <text x="66" y={c.y + 38} fontSize="15" fontWeight="700" className="fill-brand-ink" style={heading}>
            {c.label}
          </text>
        </g>
      ))}

      {/* Chip icons, 20px glyphs centred in each chip */}
      <g className="stroke-brand-ink" strokeWidth="1.6">
        {/* Business type: storefront */}
        <path d="M27 53l2-6h14l2 6M27 53h18v12H27zM33 65v-6h6v6" />
        {/* Current site: browser window */}
        <rect x="26" y="124" width="20" height="16" rx="2" />
        <path d="M26 130h20" />
        {/* Goal: target */}
        <circle cx="36" cy="208" r="9" />
        <circle cx="36" cy="208" r="4.5" />
        <path d="M36 208l7-7" />
      </g>

      {/* Arrows converge on the page */}
      <g className="stroke-brand-blue-strong" strokeWidth="2" strokeDasharray="5 5">
        <path d="M178 56C220 56 226 132 262 132" />
        <path d="M178 132H262" />
        <path d="M178 208C220 208 226 132 262 132" />
      </g>
      <path d="M255 125l9 7-9 7" className="stroke-brand-blue-strong" strokeWidth="2" />

      {/* Browser-window wireframe */}
      <rect x="272" y="20" width="204" height="250" rx="12" className="fill-white stroke-brand-ink" strokeWidth="1.75" />
      <path d="M272 48h204" className="stroke-brand-ink" strokeWidth="1.75" />
      <circle cx="288" cy="34" r="3.5" className="fill-brand-yellow" />
      <circle cx="302" cy="34" r="3.5" className="fill-brand-green" />
      <circle cx="316" cy="34" r="3.5" className="fill-brand-blue" />
      <rect x="288" y="62" width="172" height="62" rx="8" className="fill-brand-blue" />
      <rect x="302" y="76" width="96" height="8" rx="4" className="fill-white" />
      <rect x="302" y="92" width="64" height="8" rx="4" className="fill-white" />
      <rect x="302" y="106" width="40" height="10" rx="5" className="fill-brand-yellow" />
      <rect x="288" y="138" width="80" height="48" rx="6" className="fill-surface-muted stroke-brand-ink" strokeWidth="1.25" />
      <rect x="380" y="138" width="80" height="48" rx="6" className="fill-surface-muted stroke-brand-ink" strokeWidth="1.25" />
      <path d="M298 152h40M298 162h28M390 152h40M390 162h28" className="stroke-neutral-400" strokeWidth="3" />
      <rect x="288" y="200" width="172" height="52" rx="8" className="fill-surface-muted stroke-brand-ink" strokeWidth="1.25" />
      <rect x="298" y="210" width="72" height="12" rx="3" className="fill-white stroke-neutral-400" strokeWidth="1" />
      <rect x="298" y="228" width="72" height="12" rx="3" className="fill-white stroke-neutral-400" strokeWidth="1" />
      <rect x="382" y="216" width="68" height="20" rx="6" className="fill-brand-green stroke-brand-ink" strokeWidth="1.25" />
    </svg>
  );
}
