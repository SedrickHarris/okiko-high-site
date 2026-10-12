// Original illustration for the closing CTA on /industries/professional-services:
// a written scope sheet that names the services, exclusions, responsibilities, and
// costs before any work begins. Illustrative only: no client data, results, vendor
// logos, or real software screens. The first two rows show a tick and the last two
// an empty box, so status is carried by shape and label, never by color alone
// (docs/05). Brand fills use the logo blue, green, and yellow with dark ink strokes.

const ink = "var(--color-brand-ink)";
const blue = "var(--color-brand-blue)";
const green = "var(--color-brand-green)";
const yellow = "var(--color-brand-yellow)";
const gray = "#d4d4d4";

const rows = [
  { label: "Selected services", y: 78, done: true },
  { label: "Exclusions", y: 132, done: true },
  { label: "Responsibilities", y: 186, done: false },
  { label: "Costs", y: 240, done: false },
] as const;

export function ProfessionalServicesScopeIllustration() {
  return (
    <svg
      viewBox="0 0 400 340"
      role="img"
      aria-labelledby="ps-scope-title ps-scope-desc"
      className="h-auto w-full"
      style={{ fontFamily: "var(--font-heading), ui-sans-serif, system-ui, sans-serif" }}
    >
      <title id="ps-scope-title">A written scope, agreed before work begins</title>
      <desc id="ps-scope-desc">
        A scope sheet with four checklist rows: selected services, exclusions,
        responsibilities, and costs. The first two rows are ticked and the last two
        are still open. A pen rests beside the sheet.
      </desc>

      {/* Sheet */}
      <rect x="40" y="14" width="272" height="306" rx="14" fill="#fff" stroke={ink} strokeWidth="2.5" />
      <path d="M40 28 A14 14 0 0 1 54 14 H298 A14 14 0 0 1 312 28 V50 H40 Z" fill={yellow} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
      <text x="62" y="39" fontSize="16" fontWeight="800" fill={ink}>
        Written scope
      </text>

      {rows.map((row) => (
        <g key={row.label}>
          <rect
            x="62"
            y={row.y}
            width="28"
            height="28"
            rx="7"
            fill={row.done ? green : "#fff"}
            stroke={ink}
            strokeWidth="2.5"
          />
          {row.done && (
            <path
              d={`M69 ${row.y + 14} L75 ${row.y + 20} L85 ${row.y + 8}`}
              fill="none"
              stroke={ink}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          <text x="104" y={row.y + 14} fontSize="15" fontWeight="700" fill={ink}>
            {row.label}
          </text>
          <rect x="104" y={row.y + 22} width={row.done ? 128 : 96} height="6" rx="3" fill={gray} />
        </g>
      ))}

      <path d="M62 284 H290" stroke={gray} strokeWidth="2" />
      <text x="62" y="306" fontSize="12" fontWeight="600" fill={ink}>
        Confirmed before work begins
      </text>

      {/* Pen */}
      <g transform="rotate(32 346 214)">
        <rect x="336" y="140" width="20" height="96" rx="4" fill={blue} stroke={ink} strokeWidth="2.5" />
        <rect x="336" y="140" width="20" height="16" rx="4" fill={yellow} stroke={ink} strokeWidth="2.5" />
        <path d="M336 236 H356 L346 262 Z" fill="#fff" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M343 252 H349 L346 262 Z" fill={ink} />
      </g>
    </svg>
  );
}
