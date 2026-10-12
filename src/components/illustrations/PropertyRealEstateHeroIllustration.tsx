// Original illustration for /industries/property-management-real-estate: one
// incoming inquiry is sorted by type, and each type goes to a different next step,
// with a named person owning each handoff. Illustrative only: no client data,
// results, vendor logos, or real software screens. Brand fills use the logo blue,
// green, and yellow with dark ink strokes; meaning is carried by shapes and labels,
// never by color alone (docs/05).

const ink = "var(--color-brand-ink)";
const blue = "var(--color-brand-blue)";
const green = "var(--color-brand-green)";
const yellow = "var(--color-brand-yellow)";

const rows = [
  { y: 150, fill: blue, title: "Owner inquiry", detail: "Management consultation", glyph: "house" },
  { y: 226, fill: yellow, title: "Rental prospect", detail: "Listing, tour, application steps", glyph: "key" },
  { y: 302, fill: green, title: "Resident request", detail: "Approved support routes", glyph: "person" },
] as const;

function Glyph({ kind, cx, cy }: { kind: (typeof rows)[number]["glyph"]; cx: number; cy: number }) {
  const common = { fill: "#fff", stroke: ink, strokeWidth: 1.8, strokeLinejoin: "round" as const };
  if (kind === "house") {
    return <path d={`M${cx - 9} ${cy + 1} L${cx} ${cy - 8} L${cx + 9} ${cy + 1} V${cy + 10} H${cx - 9} Z`} {...common} />;
  }
  if (kind === "key") {
    return (
      <g>
        <circle cx={cx - 4} cy={cy - 2} r="5.5" {...common} />
        <path d={`M${cx} ${cy + 2} L${cx + 9} ${cy + 11} M${cx + 5} ${cy + 7} L${cx + 9} ${cy + 3}`} fill="none" stroke={ink} strokeWidth="1.8" strokeLinecap="round" />
      </g>
    );
  }
  return (
    <g>
      <circle cx={cx} cy={cy - 4} r="6" {...common} />
      <path d={`M${cx - 10} ${cy + 11} C${cx - 10} ${cy + 1} ${cx + 10} ${cy + 1} ${cx + 10} ${cy + 11}`} fill="#fff" stroke={ink} strokeWidth="1.8" strokeLinecap="round" />
    </g>
  );
}

export function PropertyRealEstateHeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 440"
      role="img"
      aria-labelledby="pre-hero-title pre-hero-desc"
      className="h-auto w-full"
      style={{ fontFamily: "var(--font-heading), ui-sans-serif, system-ui, sans-serif" }}
    >
      <title id="pre-hero-title">One inquiry, sorted into separate paths</title>
      <desc id="pre-hero-desc">
        A new inquiry from the website or a phone call is sorted by type. An owner
        inquiry goes to a management consultation, a rental prospect goes to listing,
        tour, and application steps, and a resident request goes to approved support
        routes. A named person owns each handoff.
      </desc>
      <defs>
        <marker
          id="pre-hero-arrow"
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

      {/* 1. New inquiry */}
      <g>
        <rect x="60" y="8" width="280" height="62" rx="12" fill="#fff" stroke={ink} strokeWidth="2.5" />
        <circle cx="96" cy="39" r="19" fill={blue} stroke={ink} strokeWidth="2" />
        <path
          d="M86 32 H106 A3 3 0 0 1 109 35 V43 A3 3 0 0 1 106 46 H98 L92 51 V46 H86 A3 3 0 0 1 83 43 V35 A3 3 0 0 1 86 32 Z"
          fill="#fff"
          stroke={ink}
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <text x="126" y="35" fontSize="15" fontWeight="700" fill={ink}>
          New inquiry
        </text>
        <text x="126" y="54" fontSize="12" fontWeight="500" fill={ink}>
          Website form or phone call
        </text>
      </g>

      <path d="M200 72 V92" fill="none" stroke={ink} strokeWidth="2.5" markerEnd="url(#pre-hero-arrow)" />

      {/* 2. Sort by type */}
      <g>
        <rect x="30" y="96" width="340" height="40" rx="10" fill="#fff" stroke={ink} strokeWidth="2.5" />
        <text x="200" y="121" textAnchor="middle" fontSize="14" fontWeight="700" fill={ink}>
          Sort by inquiry type
        </text>
      </g>

      {/* 3. Spine and three paths */}
      <path d="M44 138 V333" fill="none" stroke={ink} strokeWidth="2.5" strokeLinecap="round" />
      {rows.map((row) => (
        <g key={row.title}>
          <path d={`M44 ${row.y + 31} H58`} fill="none" stroke={ink} strokeWidth="2.5" markerEnd="url(#pre-hero-arrow)" />
          <rect x="62" y={row.y} width="308" height="62" rx="12" fill="#fff" stroke={ink} strokeWidth="2.5" />
          <circle cx="98" cy={row.y + 31} r="20" fill={row.fill} stroke={ink} strokeWidth="2" />
          <Glyph kind={row.glyph} cx={98} cy={row.y + 31} />
          <text x="130" y={row.y + 28} fontSize="15" fontWeight="700" fill={ink}>
            {row.title}
          </text>
          <text x="130" y={row.y + 47} fontSize="12" fontWeight="500" fill={ink}>
            {row.detail}
          </text>
        </g>
      ))}

      {/* 4. Named person */}
      <g>
        <rect x="30" y="378" width="340" height="56" rx="12" fill={yellow} stroke={ink} strokeWidth="2.5" />
        <circle cx="66" cy="400" r="9" fill="#fff" stroke={ink} strokeWidth="2" />
        <path d="M52 424 C52 410 80 410 80 424" fill="#fff" stroke={ink} strokeWidth="2" strokeLinecap="round" />
        <text x="96" y="403" fontSize="15" fontWeight="700" fill={ink}>
          A named person owns
        </text>
        <text x="96" y="422" fontSize="15" fontWeight="700" fill={ink}>
          each handoff
        </text>
      </g>
    </svg>
  );
}
