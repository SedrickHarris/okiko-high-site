import type { ChartGroup, DataTable, PhoneWireframeData, StatGroup } from "@/content/combos/types";

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
