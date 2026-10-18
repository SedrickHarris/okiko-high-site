import type {
  AccordionItem,
  AnswerExample,
  CallFlowData,
  ChartGroup,
  DataTable,
  PhoneWireframeData,
  StatGroup,
  StructureComparison,
} from "@/content/combos/types";

const barTones = ["bg-brand-blue", "bg-brand-green", "bg-brand-yellow"] as const;

// Bars are decorative. Every value is also printed as text, so the chart reads the
// same without color or sight.
export function BarCharts({ group }: { group: ChartGroup }) {
  return (
    <div className="my-8">
      <div className="grid gap-6 lg:grid-cols-2">
        {group.charts.map((chart, chartIndex) => (
          <figure
            key={chart.title}
            className="rounded-lg border border-neutral-200 bg-white p-5"
          >
            <figcaption className="font-heading text-lg font-bold">{chart.title}</figcaption>
            <ul className="mt-4 space-y-3">
              {chart.rows.map((row) => (
                <li key={row.label} className="grid grid-cols-[8.5rem_1fr] items-center gap-3 sm:grid-cols-[10rem_1fr]">
                  <span className="text-sm text-neutral-800">{row.label}</span>
                  <span className="flex items-center gap-2">
                    <span aria-hidden="true" className="h-4 flex-1 rounded bg-neutral-100">
                      <span
                        className={`block h-4 rounded ${barTones[chartIndex % barTones.length]}`}
                        style={{ width: `${row.value}%` }}
                      />
                    </span>
                    <span className="w-10 shrink-0 text-right text-sm font-semibold">
                      {row.value}%
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </figure>
        ))}
      </div>
      {group.note && <p className="mt-4 max-w-3xl text-sm text-neutral-700">{group.note}</p>}
    </div>
  );
}

export function StatTiles({ group }: { group: StatGroup }) {
  return (
    <div className="my-8">
      <h3 className="font-heading text-lg font-bold">{group.heading}</h3>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {group.items.map((item) => (
          <li
            key={item.label}
            className="rounded-lg border border-neutral-200 border-t-4 border-t-brand-blue bg-white p-5"
          >
            <p className="font-heading text-4xl font-extrabold text-brand-blue-strong">
              {item.value}
            </p>
            <p className="mt-2 text-sm text-neutral-800">{item.label}</p>
          </li>
        ))}
      </ul>
      {group.note && <p className="mt-4 max-w-3xl text-sm text-neutral-700">{group.note}</p>}
    </div>
  );
}

export function DataTableView({ table }: { table: DataTable }) {
  const [, ...headColumns] = table.columns;
  const [firstColumn] = table.columns;
  return (
    <div className="my-8">
      <div className="overflow-x-auto rounded-lg border border-neutral-200 bg-white">
        <table className="w-full min-w-[32rem] text-left text-sm">
          <caption className="sr-only">{table.caption}</caption>
          <thead className="bg-surface-muted">
            <tr>
              <th scope="col" className="px-4 py-3 font-heading font-bold">
                {firstColumn}
              </th>
              {headColumns.map((column) => (
                <th key={column} scope="col" className="px-4 py-3 font-heading font-bold">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map(([head, ...cells]) => (
              <tr key={head} className="border-t border-neutral-200">
                <th scope="row" className="px-4 py-3 font-heading font-bold">
                  {head}
                </th>
                {cells.map((cell) => (
                  <td key={cell} className="px-4 py-3 text-neutral-800">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.note && <p className="mt-3 max-w-3xl text-sm text-neutral-700">{table.note}</p>}
    </div>
  );
}

// A phone-screen wireframe built from divs, so nothing in it is a working control.
// The phone carries one accessible name; the caption and panels are ordinary text.
export function PhoneWireframeFigure({ data }: { data: PhoneWireframeData }) {
  return (
    <div className="my-8 grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
      <figure className="mx-auto flex w-full max-w-xs flex-col items-center gap-4">
        <div
          role="img"
          aria-label={data.label}
          className="w-full overflow-hidden rounded-[2.5rem] border-[10px] border-brand-ink bg-white"
        >
          <div aria-hidden="true" className="text-neutral-900">
            <div className="border-b border-neutral-200 px-4 pb-3 pt-4">
              <p className="font-heading text-lg font-bold leading-tight">{data.businessName}</p>
              <p className="text-xs text-neutral-700">{data.tagline}</p>
            </div>
            <div className="space-y-3 p-4">
              <div className="flex min-h-12 items-center justify-center rounded-md bg-brand-blue px-2 text-center font-heading font-bold text-brand-ink">
                {data.callLabel}
              </div>
              <p className="text-center text-xs leading-snug text-neutral-700">{data.hoursLine}</p>
              <div className="space-y-2.5 border-t border-neutral-200 pt-3">
                <p className="font-heading text-sm font-bold">{data.formTitle}</p>
                {data.fields.map((field) => (
                  <div key={field}>
                    <p className="text-xs font-semibold">{field}</p>
                    <div className="mt-1 h-10 rounded border-2 border-neutral-500 bg-white" />
                  </div>
                ))}
                <div className="flex min-h-12 items-center justify-center rounded-md bg-brand-ink font-heading font-bold text-white">
                  {data.submitLabel}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.trustFacts.map((fact) => (
                  <span
                    key={fact}
                    className="rounded-full bg-brand-yellow px-2.5 py-1 text-[11px] font-bold text-brand-ink"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <figcaption className="text-center text-sm text-neutral-700">{data.caption}</figcaption>
      </figure>

      {data.panels && (
        <div className="space-y-6">
          {data.panels.map((panel) => (
            <div key={panel.title} className="rounded-lg border border-neutral-200 bg-white p-6">
              <h3 className="font-heading text-lg font-bold">{panel.title}</h3>
              {panel.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                  {panel.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {panel.paragraphs?.map((text) => (
                <p key={text} className="mt-3 text-neutral-800">
                  {text}
                </p>
              ))}
              {panel.note && <p className="mt-3 text-sm text-neutral-700">{panel.note}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Connector lines are decorative. The text of every node carries the meaning.
export function StructureCards({ data }: { data: StructureComparison }) {
  const { good, avoid } = data;
  return (
    <div className="my-8 grid gap-6 lg:grid-cols-2">
      <div className="rounded-lg border border-neutral-200 border-t-[6px] border-t-brand-green bg-white p-6">
        <h3 className="font-heading text-lg font-bold">{good.heading}</h3>
        <div className="mt-5 flex flex-col items-center gap-3">
          <p className="rounded-lg bg-brand-ink px-5 py-2.5 font-heading font-bold text-white">
            {good.top}
          </p>
          <span aria-hidden="true" className="h-4 w-0.5 bg-neutral-400" />
          <p className="rounded-lg border-2 border-brand-ink bg-white px-5 py-2.5 font-heading font-bold">
            {good.middle}
          </p>
          <span aria-hidden="true" className="h-4 w-0.5 bg-neutral-400" />
          <ul className="grid w-full gap-3 sm:grid-cols-3">
            {good.children.map((child) => (
              <li
                key={child.title}
                className="rounded-lg border border-neutral-200 bg-surface-muted p-3"
              >
                <p className="font-heading text-[15px] font-bold">{child.title}</p>
                <p className="mt-1.5 text-[13px] leading-snug text-neutral-700">{child.note}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-5 text-neutral-800">{good.caption}</p>
      </div>

      <div className="rounded-lg border border-neutral-200 border-t-[6px] border-t-brand-yellow bg-white p-6">
        <h3 className="font-heading text-lg font-bold">{avoid.heading}</h3>
        <ul className="mt-5 space-y-3">
          {avoid.items.map((item) => (
            <li key={item.title} className="rounded-lg border border-dashed border-neutral-500 p-3.5">
              <p className="font-heading text-[15px] font-bold">{item.title}</p>
              <p className="mt-1.5 text-[13px] leading-snug text-neutral-700">{item.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-neutral-800">{avoid.caption}</p>
      </div>
    </div>
  );
}

const noteAccents = ["border-l-brand-blue", "border-l-brand-green", "border-l-brand-yellow"] as const;

export function AnswerExampleBlock({ data }: { data: AnswerExample }) {
  return (
    <div className="my-8 grid gap-10 lg:grid-cols-2 lg:items-start">
      <div className="space-y-4">
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
          <p className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-700">
            Instead of
          </p>
          <p className="mt-2.5 text-lg leading-snug text-neutral-700">&ldquo;{data.before}&rdquo;</p>
        </div>
        <div className="rounded-lg border border-brand-blue/30 bg-surface-muted p-6">
          <p className="font-heading text-xs font-bold uppercase tracking-wider text-brand-blue-strong">
            Write
          </p>
          <h3 className="mt-2.5 text-xl font-bold">{data.question}</h3>
          <p className="mt-2 text-neutral-800">{data.answer}</p>
        </div>
        <p className="text-sm text-neutral-700">{data.note}</p>
      </div>

      <ul className="space-y-4">
        {data.notes.map((note, index) => (
          <li
            key={note.title}
            className={`border-l-[6px] py-1 pl-5 ${noteAccents[index % noteAccents.length]}`}
          >
            <h3 className="text-lg font-bold">{note.title}</h3>
            <p className="mt-2 text-neutral-800">{note.body}</p>
            {note.source && (
              <p className="mt-2 text-sm text-neutral-700">
                <a
                  href={note.source.href}
                  rel="noopener noreferrer"
                  className="text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink"
                >
                  {note.source.label}
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NumberedList({ items }: { items: ReadonlyArray<string> }) {
  return (
    <ol className="space-y-2.5">
      {items.map((item, index) => (
        <li
          key={item}
          className="flex items-start gap-4 rounded-lg border border-neutral-200 bg-white px-5 py-4"
        >
          <span
            aria-hidden="true"
            className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-brand-blue font-heading font-extrabold text-brand-ink"
          >
            {index + 1}
          </span>
          <span className="leading-snug">{item}</span>
        </li>
      ))}
    </ol>
  );
}

// Native <details>: works without JavaScript and the answers stay in the page text.
export function AccordionList({ items }: { items: ReadonlyArray<AccordionItem> }) {
  return (
    <div className="my-8 space-y-3">
      {items.map((item) => (
        <details key={item.title} className="group rounded-lg border border-neutral-200 bg-white">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
            <span>
              <span className="block font-heading text-xs font-bold uppercase tracking-wider text-brand-blue-strong">
                {item.label}
              </span>
              <span className="mt-1 block font-heading text-lg font-bold leading-snug">
                {item.title}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xl font-bold leading-none text-brand-ink transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="space-y-3 border-t border-neutral-200 p-5 text-neutral-800">
            {item.parts.map((part) => (
              <p key={part.label}>
                <strong>{part.label}.</strong> {part.text}
              </p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}

const laneTones = {
  danger: "border-t-red-700",
  urgent: "border-t-brand-yellow",
  scheduled: "border-t-brand-green",
} as const;

// Arrows and connectors are decorative. Each lane is an ordered list of real text.
export function CallFlowDiagram({ data }: { data: CallFlowData }) {
  return (
    <figure aria-label={data.label} className="my-8">
      <div className="flex flex-col items-center gap-3">
        <p className="rounded-lg bg-brand-ink px-5 py-2.5 font-heading font-bold text-white">
          {data.start}
        </p>
        <span aria-hidden="true" className="h-4 w-0.5 bg-neutral-400" />
        <p className="rounded-lg border-2 border-brand-ink bg-white px-5 py-2.5 text-center font-heading font-bold">
          {data.firstStep}
        </p>
        <span aria-hidden="true" className="h-4 w-0.5 bg-neutral-400" />
        <p className="max-w-2xl rounded-lg border border-brand-blue/30 bg-surface-muted px-5 py-2.5 text-center font-heading font-bold">
          {data.gate}
        </p>
        <span aria-hidden="true" className="h-4 w-0.5 bg-neutral-400" />
      </div>
      <ul className="grid gap-6 lg:grid-cols-3">
        {data.lanes.map((lane) => (
          <li
            key={lane.title}
            className={`rounded-lg border border-neutral-200 border-t-[6px] bg-white p-5 ${laneTones[lane.tone]}`}
          >
            <h3 className="font-heading text-lg font-bold">{lane.title}</h3>
            <p className="mt-1.5 text-sm text-neutral-700">{lane.trigger}</p>
            <ol className="mt-4 space-y-2.5">
              {lane.steps.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-extrabold text-brand-ink"
                  >
                    {index + 1}
                  </span>
                  <span className="leading-snug text-neutral-800">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 rounded-md border border-dashed border-neutral-500 p-3 text-sm text-neutral-800">
              <strong>If that fails.</strong> {lane.fallback}
            </p>
          </li>
        ))}
      </ul>
      <figcaption className="mt-4 max-w-3xl text-sm text-neutral-700">{data.caption}</figcaption>
      {data.note && <p className="mt-2 max-w-3xl text-sm text-neutral-700">{data.note}</p>}
    </figure>
  );
}
