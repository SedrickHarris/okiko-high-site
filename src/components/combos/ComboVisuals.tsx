import type { ChartGroup, DataTable, StatGroup } from "@/content/combos/types";

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
