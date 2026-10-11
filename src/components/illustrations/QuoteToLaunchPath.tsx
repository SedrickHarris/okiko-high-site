// Illustrative graphic only: it is not a client project, and it shows no
// timing, pricing or results. Decorative: the section copy carries the meaning,
// so it is aria-hidden. The stops echo the page's process section.
const heading = { fontFamily: "var(--font-heading), system-ui, sans-serif" };

const stops = [
  { n: 1, x: 44, y: 226, label: "Scope", fill: "fill-brand-blue" },
  { n: 2, x: 128, y: 168, label: "Plan", fill: "fill-brand-green" },
  { n: 3, x: 212, y: 214, label: "Design", fill: "fill-brand-yellow" },
  { n: 4, x: 290, y: 150, label: "Build", fill: "fill-brand-blue" },
] as const;

export function QuoteToLaunchPath({ className }: { className?: string }) {
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
      {/* Path */}
      <path
        d="M44 226C80 226 90 168 128 168S176 214 212 214S254 150 290 150S328 96 352 96"
        className="stroke-brand-blue-strong"
        strokeWidth="2.5"
        strokeDasharray="6 6"
      />

      {/* Stops */}
      {stops.map((s) => (
        <g key={s.label}>
          <circle cx={s.x} cy={s.y} r="19" className={`${s.fill} stroke-brand-ink`} strokeWidth="1.75" />
          <text
            x={s.x}
            y={s.y + 5.5}
            textAnchor="middle"
            fontSize="15"
            fontWeight="800"
            className="fill-brand-ink"
            style={heading}
          >
            {s.n}
          </text>
          <text
            x={s.x}
            y={s.y + 40}
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            className="fill-brand-ink"
            style={heading}
          >
            {s.label}
          </text>
        </g>
      ))}

      {/* Launch: a finished page */}
      <rect x="352" y="22" width="120" height="118" rx="12" className="fill-white stroke-brand-ink" strokeWidth="1.75" />
      <path d="M352 46h120" className="stroke-brand-ink" strokeWidth="1.75" />
      <circle cx="366" cy="34" r="3.5" className="fill-brand-yellow" />
      <circle cx="379" cy="34" r="3.5" className="fill-brand-green" />
      <circle cx="392" cy="34" r="3.5" className="fill-brand-blue" />
      <rect x="364" y="56" width="96" height="36" rx="6" className="fill-brand-blue" />
      <rect x="374" y="65" width="52" height="6" rx="3" className="fill-white" />
      <rect x="374" y="77" width="32" height="6" rx="3" className="fill-white" />
      <rect x="364" y="102" width="44" height="22" rx="5" className="fill-brand-green stroke-brand-ink" strokeWidth="1.25" />
      <rect x="416" y="102" width="44" height="22" rx="5" className="fill-surface-muted stroke-brand-ink" strokeWidth="1.25" />
      <text
        x="412"
        y="166"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        className="fill-brand-ink"
        style={heading}
      >
        Launch
      </text>
    </svg>
  );
}
