// Page map that mirrors the planned structure in docs/02: home, then About,
// Services, Industries and Contact, with individual service pages under Services.
export function SiteMapDiagram() {
  const box = "fill-white stroke-neutral-800";
  const label = "fill-neutral-900 text-[13px] font-semibold";
  const line = "stroke-brand-blue-strong";
  return (
    <svg
      viewBox="0 0 560 230"
      role="img"
      aria-label="Site map: the homepage links to About, Services, Industries and Contact, and Services links to individual service pages"
      className="h-auto w-full max-w-xl"
    >
      {/* connectors */}
      <path d="M280 52v22M70 74h420M70 74v22M210 74v22M350 74v22M490 74v22M210 130v34" fill="none" strokeWidth="2" className={line} />
      {/* home */}
      <rect x="220" y="14" width="120" height="38" rx="8" className="fill-brand-blue stroke-neutral-800" strokeWidth="2" />
      <text x="280" y="38" textAnchor="middle" className="fill-neutral-900 text-[13px] font-bold">Home</text>
      {/* second level */}
      {[
        { x: 20, t: "About" },
        { x: 160, t: "Services" },
        { x: 300, t: "Industries" },
        { x: 440, t: "Contact" },
      ].map(({ x, t }) => (
        <g key={t}>
          <rect x={x} y="96" width="100" height="34" rx="8" className={box} strokeWidth="2" />
          <text x={x + 50} y="118" textAnchor="middle" className={label}>{t}</text>
        </g>
      ))}
      {/* service pages */}
      <rect x="130" y="164" width="160" height="38" rx="8" className="fill-surface-muted stroke-brand-blue-strong" strokeWidth="2" />
      <text x="210" y="188" textAnchor="middle" className={label}>Service pages</text>
    </svg>
  );
}
