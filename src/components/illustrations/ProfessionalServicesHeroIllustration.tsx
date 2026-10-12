// Original illustration for /industries/professional-services: a prospect's journey
// from a referral or search, to evaluating the firm, to an inquiry, to a next step.
// Illustrative only: no client data, results, vendor logos, or real software
// screens. Brand fills use the logo blue, green, and yellow with dark ink strokes;
// meaning is carried by shapes and labels, never by color alone (docs/05).

const ink = "var(--color-brand-ink)";
const blue = "var(--color-brand-blue)";
const green = "var(--color-brand-green)";
const yellow = "var(--color-brand-yellow)";

const boxes = [
  { y: 8, title: "Referral or search", sub: "A prospect hears of your firm" },
  { y: 112, title: "Firm evaluation", sub: "Services, credentials, next steps" },
  { y: 216, title: "Inquiry", sub: "Minimal details only" },
  { y: 320, title: "Next step", sub: "Consultation or callback" },
] as const;

export function ProfessionalServicesHeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 404"
      role="img"
      aria-labelledby="ps-hero-title ps-hero-desc"
      className="h-auto w-full"
      style={{ fontFamily: "var(--font-heading), ui-sans-serif, system-ui, sans-serif" }}
    >
      <title id="ps-hero-title">A prospective client&apos;s path to your firm</title>
      <desc id="ps-hero-desc">
        Four connected steps: a referral or search, the prospect evaluating the
        firm&apos;s services, credentials, and next steps, an inquiry that shares
        minimal details, and a next step such as a consultation or a callback.
      </desc>
      <defs>
        <marker
          id="ps-hero-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill={ink} />
        </marker>
      </defs>

      {boxes.map((box, i) => (
        <g key={box.title}>
          <rect x="40" y={box.y} width="320" height="76" rx="12" fill="#fff" stroke={ink} strokeWidth="2.5" />
          <text x="124" y={box.y + 34} fontSize="16" fontWeight="700" fill={ink}>
            {box.title}
          </text>
          <text x="124" y={box.y + 54} fontSize="12" fontWeight="500" fill={ink}>
            {box.sub}
          </text>
          {i < boxes.length - 1 && (
            <path
              d={`M200 ${box.y + 78} V${box.y + 102}`}
              fill="none"
              stroke={ink}
              strokeWidth="2.5"
              markerEnd="url(#ps-hero-arrow)"
            />
          )}
        </g>
      ))}

      {/* 1. Referral or search: magnifier */}
      <circle cx="82" cy="46" r="22" fill={blue} stroke={ink} strokeWidth="2" />
      <circle cx="79" cy="43" r="8" fill="#fff" stroke={ink} strokeWidth="2.2" />
      <path d="M85 49 L92 56" stroke={ink} strokeWidth="3" strokeLinecap="round" />

      {/* 2. Firm evaluation: page with checks */}
      <circle cx="82" cy="150" r="22" fill={yellow} stroke={ink} strokeWidth="2" />
      <rect x="71" y="137" width="22" height="26" rx="3" fill="#fff" stroke={ink} strokeWidth="2" />
      <path d="M75 144 L77 146 L81 142 M75 153 L77 155 L81 151" fill="none" stroke={ink} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M84 144 H89 M84 153 H89" stroke={ink} strokeWidth="1.8" strokeLinecap="round" />

      {/* 3. Inquiry: speech bubble */}
      <circle cx="82" cy="254" r="22" fill={blue} stroke={ink} strokeWidth="2" />
      <path
        d="M71 246 H93 A3 3 0 0 1 96 249 V258 A3 3 0 0 1 93 261 H84 L77 267 V261 H71 A3 3 0 0 1 68 258 V249 A3 3 0 0 1 71 246 Z"
        fill="#fff"
        stroke={ink}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* 4. Next step: calendar */}
      <rect x="62" y="338" width="40" height="40" rx="7" fill={green} stroke={ink} strokeWidth="2" />
      <path d="M62 351 H102" stroke={ink} strokeWidth="2" />
      <path d="M74 333 V343 M90 333 V343" stroke={ink} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M73 365 L79 370 L91 358" fill="none" stroke={ink} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
