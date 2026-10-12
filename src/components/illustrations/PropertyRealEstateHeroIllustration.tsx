// Original illustration for /industries/property-management-real-estate: the four
// stage journey from the page brief (Get found, Make an inquiry, Reach the right
// person, Receive follow-up), with a named person owning the handoff. Illustrative
// only: no client data, results, vendor logos, or real software screens. Brand fills
// use the logo blue, green, and yellow with dark ink strokes; meaning is carried by
// shapes and labels, never by color alone (docs/05).

const ink = "var(--color-brand-ink)";
const blue = "var(--color-brand-blue)";
const green = "var(--color-brand-green)";
const yellow = "var(--color-brand-yellow)";

const steps = [
  { y: 8, fill: blue, title: "Get found", detail: "Website, profiles, and listings", glyph: "search" },
  { y: 116, fill: yellow, title: "Make an inquiry", detail: "Form, call, text, or chat", glyph: "chat" },
  { y: 224, fill: green, title: "Reach the right person", detail: "A named person owns the handoff", glyph: "person" },
  { y: 332, fill: blue, title: "Receive follow-up", detail: "An approved next step, or a person", glyph: "check" },
] as const;

function Glyph({ kind, cx, cy }: { kind: (typeof steps)[number]["glyph"]; cx: number; cy: number }) {
  const common = { fill: "#fff", stroke: ink, strokeWidth: 1.8, strokeLinejoin: "round" as const };
  if (kind === "search") {
    return (
      <g>
        <circle cx={cx - 2} cy={cy - 2} r="7" {...common} />
        <path d={`M${cx + 3} ${cy + 3} L${cx + 10} ${cy + 10}`} fill="none" stroke={ink} strokeWidth="2.2" strokeLinecap="round" />
      </g>
    );
  }
  if (kind === "chat") {
    return (
      <path
        d={`M${cx - 10} ${cy - 8} H${cx + 10} A2.5 2.5 0 0 1 ${cx + 12.5} ${cy - 5.5} V${cy + 3} A2.5 2.5 0 0 1 ${cx + 10} ${cy + 5.5} H${cx - 1} L${cx - 7} ${cy + 11} V${cy + 5.5} H${cx - 10} A2.5 2.5 0 0 1 ${cx - 12.5} ${cy + 3} V${cy - 5.5} A2.5 2.5 0 0 1 ${cx - 10} ${cy - 8} Z`}
        {...common}
      />
    );
  }
  if (kind === "person") {
    return (
      <g>
        <circle cx={cx} cy={cy - 4} r="6" {...common} />
        <path d={`M${cx - 10} ${cy + 11} C${cx - 10} ${cy + 1} ${cx + 10} ${cy + 1} ${cx + 10} ${cy + 11}`} fill="#fff" stroke={ink} strokeWidth="1.8" strokeLinecap="round" />
      </g>
    );
  }
  return <path d={`M${cx - 9} ${cy} L${cx - 3} ${cy + 7} L${cx + 10} ${cy - 8}`} fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />;
}

export function PropertyRealEstateHeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 420"
      role="img"
      aria-labelledby="pre-hero-title pre-hero-desc"
      className="h-auto w-full"
      style={{ fontFamily: "var(--font-heading), ui-sans-serif, system-ui, sans-serif" }}
    >
      <title id="pre-hero-title">From being found to receiving follow-up</title>
      <desc id="pre-hero-desc">
        A four-step journey. A customer gets found through a website, profile, or
        listing; makes an inquiry by form, call, text, or chat; reaches the right
        person, with a named person owning the handoff; and receives an approved next
        step or a person.
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

      {steps.map((step, index) => (
        <g key={step.title}>
          <rect x="20" y={step.y} width="360" height="80" rx="12" fill="#fff" stroke={ink} strokeWidth="2.5" />
          <circle cx="66" cy={step.y + 40} r="24" fill={step.fill} stroke={ink} strokeWidth="2" />
          <Glyph kind={step.glyph} cx={66} cy={step.y + 40} />
          <text x="106" y={step.y + 36} fontSize="16" fontWeight="700" fill={ink}>
            {index + 1}. {step.title}
          </text>
          <text x="106" y={step.y + 57} fontSize="12.5" fontWeight="500" fill={ink}>
            {step.detail}
          </text>
          {index < steps.length - 1 && (
            <path
              d={`M200 ${step.y + 82} V${step.y + 106}`}
              fill="none"
              stroke={ink}
              strokeWidth="2.5"
              markerEnd="url(#pre-hero-arrow)"
            />
          )}
        </g>
      ))}
    </svg>
  );
}
