import type {
  AnswerExample,
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
// The figure carries one accessible name and a visible caption.
export function PhoneWireframeFigure({ data }: { data: PhoneWireframeData }) {
  return (
    <figure className="my-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
      <div
        role="img"
        aria-label={data.label}
        className="w-72 shrink-0 rounded-[2rem] border-4 border-brand-ink bg-white p-4 shadow-sm"
      >
        <div aria-hidden="true" className="space-y-3 text-neutral-900">
          <div>
            <p className="font-heading text-base font-extrabold leading-tight">{data.businessName}</p>
            <p className="text-xs text-neutral-700">{data.tagline}</p>
          </div>
          <div className="flex min-h-11 items-center justify-center rounded-md bg-brand-blue px-2 text-center text-sm font-bold text-brand-ink">
            {data.callLabel}
          </div>
          <p className="text-xs text-neutral-700">{data.hoursLine}</p>
          <div className="space-y-2 rounded-md border border-neutral-300 p-3">
            <p className="font-heading text-sm font-bold">{data.formTitle}</p>
            {data.fields.map((field) => (
              <div key={field}>
                <p className="text-[11px] font-semibold text-neutral-700">{field}</p>
                <div className="mt-0.5 h-6 rounded border border-neutral-300 bg-neutral-50" />
              </div>
            ))}
            <div className="flex min-h-9 items-center justify-center rounded bg-brand-green text-xs font-bold text-brand-ink">
              {data.submitLabel}
            </div>
          </div>
          <div className="flex gap-2">
            {data.trustFacts.map((fact) => (
              <span
                key={fact}
                className="flex-1 rounded border border-dashed border-neutral-400 px-1 py-2 text-center text-[11px] text-neutral-700"
              >
                {fact}
              </span>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="max-w-md text-neutral-800">{data.caption}</figcaption>
    </figure>
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
