// Illustrative layout only. It is not a client project and shows no results.
// Decorative graphic: the numbered annotations next to it carry the meaning.
export function PhoneWireframe() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-56 shrink-0 rounded-[2rem] border-4 border-neutral-900 bg-white p-3 shadow-sm"
    >
      <div className="space-y-3">
        <div className="h-3 w-24 rounded bg-neutral-300" />
        <div className="space-y-1.5">
          <div className="h-4 w-full rounded bg-neutral-800" />
          <div className="h-4 w-3/4 rounded bg-neutral-800" />
        </div>
        <div className="relative">
          <div className="flex h-9 items-center justify-center rounded-md bg-brand-blue text-xs font-semibold text-brand-ink">
            Call now
          </div>
          <Marker n={1} />
        </div>
        <div className="relative space-y-2 rounded-md border border-neutral-300 p-2">
          <div className="h-2 w-16 rounded bg-neutral-300" />
          <div className="h-5 rounded border border-neutral-300" />
          <div className="h-5 rounded border border-neutral-300" />
          <div className="flex h-6 items-center justify-center rounded bg-brand-green text-[10px] font-semibold text-brand-ink">
            Request a quote
          </div>
          <Marker n={2} />
        </div>
        <div className="relative space-y-1.5">
          <div className="h-2 w-full rounded bg-neutral-200" />
          <div className="h-2 w-5/6 rounded bg-neutral-200" />
          <div className="h-2 w-4/6 rounded bg-neutral-200" />
          <Marker n={3} />
        </div>
        <div className="relative flex gap-2">
          <div className="h-8 flex-1 rounded border border-dashed border-neutral-400" />
          <div className="h-8 flex-1 rounded border border-dashed border-neutral-400" />
          <Marker n={4} />
        </div>
      </div>
    </div>
  );
}

function Marker({ n }: { n: number }) {
  return (
    <span className="absolute -right-8 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-strong text-xs font-bold text-white">
      {n}
    </span>
  );
}
