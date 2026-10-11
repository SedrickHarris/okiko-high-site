// Original abstract illustration: one generic layout adapting from desktop to
// tablet to phone (3 columns, 2 columns, 1 column). Not a client project.
function Screen({
  x,
  y,
  w,
  h,
  cols,
  radius,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  cols: number;
  radius: number;
}) {
  const pad = 10;
  const gap = 6;
  const innerW = w - pad * 2;
  const cardW = (innerW - gap * (cols - 1)) / cols;
  const accents = ["fill-brand-yellow", "fill-brand-green", "fill-brand-blue"];
  const cardH = 26;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={radius} className="fill-white stroke-neutral-800" strokeWidth="3" />
      <rect x={x + pad} y={y + pad + 2} width={innerW * 0.6} height="8" rx="3" className="fill-neutral-800" />
      <rect x={x + pad} y={y + pad + 16} width={innerW * 0.8} height="5" rx="2.5" className="fill-neutral-300" />
      <rect x={x + pad} y={y + pad + 28} width={Math.min(54, innerW * 0.5)} height="16" rx="4" className="fill-brand-blue" />
      {Array.from({ length: 3 }).map((_, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const cx = x + pad + col * (cardW + gap);
        const cy = y + pad + 54 + row * (cardH + gap);
        return (
          <g key={i}>
            <rect x={cx} y={cy} width={cardW} height={cardH} rx="4" className="fill-neutral-100" />
            <rect x={cx} y={cy} width={cardW} height="3" rx="1.5" className={accents[i]} />
          </g>
        );
      })}
    </g>
  );
}

export function ResponsiveDevices() {
  return (
    <svg
      viewBox="0 0 560 232"
      role="img"
      aria-label="Abstract illustration of one generic website layout adapting across a desktop, a tablet, and a phone screen"
      className="h-auto w-full max-w-2xl"
    >
      <Screen x={10} y={14} w={290} h={170} cols={3} radius={10} />
      <rect x={110} y={190} width={90} height={8} rx={4} className="fill-neutral-200 stroke-neutral-800" strokeWidth="2" />
      <Screen x={318} y={44} w={140} h={166} cols={2} radius={12} />
      <Screen x={474} y={44} w={76} h={176} cols={1} radius={14} />
    </svg>
  );
}
