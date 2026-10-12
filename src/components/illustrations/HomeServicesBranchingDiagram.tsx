// Original diagram for /industries/home-services: what happens next when a customer
// responds to an automated message. Labels come from the same data as the visible
// list beside it, so the two cannot drift. Illustrative only: no client data or
// results. Brand fills use the logo blue, green, and yellow with dark ink strokes;
// meaning is carried by the labels, never by color alone (docs/05).

const ink = "var(--color-brand-ink)";
const fills = [
  "var(--color-brand-green)",
  "var(--color-brand-blue)",
  "var(--color-brand-yellow)",
  "var(--color-brand-green)",
  "var(--color-brand-blue)",
] as const;

const boxW = 290;
const boxH = 58;
const gap = 14;
const rootW = 124;
const rootX = 6;
const boxX = 196;

export function HomeServicesBranchingDiagram({
  paths,
}: {
  paths: ReadonlyArray<{ label: string; outcome: string }>;
}) {
  const n = paths.length;
  const height = n * boxH + (n - 1) * gap + 12;
  const rootH = 84;
  const rootY = height / 2 - rootH / 2;
  const rootCy = height / 2;
  const summary = paths.map((p) => `${p.label}: ${p.outcome}`).join(". ");

  return (
    <svg
      viewBox={`0 0 ${boxX + boxW + 6} ${height}`}
      role="img"
      aria-labelledby="hs-branch-title hs-branch-desc"
      className="h-auto w-full"
      style={{ fontFamily: "var(--font-heading), ui-sans-serif, system-ui, sans-serif" }}
    >
      <title id="hs-branch-title">What happens after an automated message</title>
      <desc id="hs-branch-desc">{summary}.</desc>
      <defs>
        <marker
          id="hs-branch-arrow"
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

      <rect x={rootX} y={rootY} width={rootW} height={rootH} rx="12" fill="#fff" stroke={ink} strokeWidth="2" />
      <text x={rootX + rootW / 2} y={rootCy - 6} textAnchor="middle" fontSize="15" fontWeight="700" fill={ink}>
        Automated
      </text>
      <text x={rootX + rootW / 2} y={rootCy + 14} textAnchor="middle" fontSize="15" fontWeight="700" fill={ink}>
        message sent
      </text>

      {paths.map((path, i) => {
        const y = 6 + i * (boxH + gap);
        const cy = y + boxH / 2;
        return (
          <g key={path.label}>
            <path
              d={`M${rootX + rootW} ${rootCy} C${rootX + rootW + 32} ${rootCy} ${boxX - 36} ${cy} ${boxX - 2} ${cy}`}
              fill="none"
              stroke={ink}
              strokeWidth="2.5"
              markerEnd="url(#hs-branch-arrow)"
            />
            <rect x={boxX} y={y} width={boxW} height={boxH} rx="10" fill="#fff" stroke={ink} strokeWidth="2" />
            <rect x={boxX} y={y} width="14" height={boxH} rx="7" fill={fills[i % fills.length]} stroke={ink} strokeWidth="2" />
            <text x={boxX + 28} y={y + 24} fontSize="15" fontWeight="700" fill={ink}>
              {path.label}
            </text>
            <text x={boxX + 28} y={y + 45} fontSize="13" fontWeight="500" fill={ink}>
              {path.outcome}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
