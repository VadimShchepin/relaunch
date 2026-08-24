import React from 'react';

/** One bar of the series. `label` is the full human date range (used in the
 *  table fallback and the tooltip), `short` the compact axis caption. */
export type CitationChartBar = {
  label: string;
  short: string;
  value: number;
};

/** A single-series column chart drawn in the site's own palette.
 *
 *  Deliberately one series and one axis: the source dashboard plots citations
 *  and cited pages on two different y-scales, which is the classic dual-axis
 *  distortion. The second number is a constant here (1 cited page per answer),
 *  so it belongs in the stat row, not in the plot. Every bar carries its own
 *  value, so the chart needs no hover to be readable and no legend box.
 *
 *  Pick `yMax` so the tallest bar stays at or below about 90 percent: the value
 *  label sits above the bar and needs that headroom. */
export type CitationChartData = {
  /** Names what is plotted. */
  title: string;
  /** Right-hand label above the plot, normally the measured property. */
  subject?: string;
  bars: CitationChartBar[];
  /** Top of the value axis. Gridlines are drawn every `yStep`. */
  yMax: number;
  yStep: number;
  /** Appended to the axis title, e.g. "Zitate". */
  unit: string;
  /** Hard numbers under the plot, replacing the dashboard's KPI tiles. */
  stats: { label: string; value: string }[];
  caption: string;
  href?: string;
  linkLabel?: string;
  /** Column heads of the table fallback inside the details element. */
  tableHeads: [string, string];
  tableLabel: string;
  /** Optional sum row of the table fallback. */
  tableSum?: [string, string];
};

export function CitationChart({ data }: { data: CitationChartData }) {
  const { bars, yMax, yStep, unit, stats } = data;
  const yPct = (v: number) => 100 - (v / yMax) * 100;

  const gridLines: number[] = [];
  for (let v = yMax; v > 0; v -= yStep) gridLines.push(v);

  const peakIndex = bars.reduce((best, b, i) => (b.value > bars[best].value ? i : best), 0);

  return (
    <figure className="mt-flow">
      <div className="rounded-card border border-brand-line bg-brand-bg p-4 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h4 className="text-meta font-semibold text-brand-text">{data.title}</h4>
          {data.subject ? <p className="text-micro text-brand-subtle">{data.subject}</p> : null}
        </div>

        {/* The axis title sits outside the gutter so it lines up with the card
            edge and the value labels below it, not with the plot. */}
        <p className="mt-stack text-micro uppercase tracking-eyebrow text-brand-subtle">{unit}</p>

        {/* pl reserves the value-axis gutter, so the plot box itself starts at 0
            and every position inside it is a plain percentage. */}
        <div className="mt-2 pl-9 sm:pl-10">
          <div className="relative h-[168px] border-b border-brand-edge sm:h-[212px]">
            {gridLines.map((v) => (
              <div
                key={v}
                aria-hidden="true"
                className="absolute inset-x-0 border-t border-brand-hairline"
                style={{ top: `${yPct(v)}%` }}
              >
                <span className="absolute -left-9 w-7 -translate-y-1/2 text-right text-micro tabular-nums text-brand-subtle sm:-left-10 sm:w-8">
                  {v}
                </span>
              </div>
            ))}
            <span
              aria-hidden="true"
              className="absolute -left-9 bottom-0 w-7 translate-y-1/2 text-right text-micro tabular-nums text-brand-subtle sm:-left-10 sm:w-8"
            >
              0
            </span>

            <div className="absolute inset-0 flex items-end gap-2 sm:gap-4">
              {bars.map((bar, i) => (
                <div key={bar.label} className="flex h-full min-w-0 flex-1 flex-col justify-end">
                  <span className="mb-1 text-center text-micro font-semibold tabular-nums text-brand-text">
                    {bar.value}
                  </span>
                  {/* max() keeps a near-zero bar visible as a 3px stub instead
                      of vanishing, without touching the axis. */}
                  <div
                    title={`${bar.label}: ${bar.value}`}
                    className={`w-full rounded-t-[3px] ${
                      i === peakIndex ? 'bg-brand-accent-deep' : 'bg-brand-accent'
                    }`}
                    style={{ height: `max(3px, ${((bar.value / yMax) * 100).toFixed(2)}%)` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2.5 flex gap-2 text-micro tabular-nums text-brand-subtle sm:gap-4">
            {bars.map((bar) => (
              <span key={bar.short} className="min-w-0 flex-1 text-center">
                {bar.short}
              </span>
            ))}
          </div>
        </div>

        <dl className="mt-flow grid gap-4 border-t border-brand-line pt-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-micro uppercase tracking-eyebrow text-brand-subtle">
                {stat.label}
              </dt>
              <dd className="mt-1 text-meta font-medium text-brand-text">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <details className="mt-4 border-t border-brand-hairline pt-4">
          <summary className="cursor-pointer text-micro text-brand-accent-ink">
            {data.tableLabel}
          </summary>
          <table className="mt-3 w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-brand-line">
                <th
                  scope="col"
                  className="pb-2 pr-4 text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle"
                >
                  {data.tableHeads[0]}
                </th>
                <th
                  scope="col"
                  className="pb-2 text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle"
                >
                  {data.tableHeads[1]}
                </th>
              </tr>
            </thead>
            <tbody>
              {bars.map((bar) => (
                <tr key={bar.label} className="border-b border-brand-hairline">
                  <td className="py-1.5 pr-4 text-micro text-brand-muted">{bar.label}</td>
                  <td className="py-1.5 text-micro tabular-nums text-brand-text">{bar.value}</td>
                </tr>
              ))}
            </tbody>
            {data.tableSum ? (
              <tfoot>
                <tr>
                  <td className="py-1.5 pr-4 text-micro font-semibold text-brand-text">
                    {data.tableSum[0]}
                  </td>
                  <td className="py-1.5 text-micro font-semibold tabular-nums text-brand-text">
                    {data.tableSum[1]}
                  </td>
                </tr>
              </tfoot>
            ) : null}
          </table>
        </details>
      </div>

      <figcaption className="mt-3 text-micro text-brand-subtle">
        {data.caption}
        {data.href && data.linkLabel ? (
          <>
            {' '}
            <a
              href={data.href}
              className="text-brand-accent-ink underline decoration-1 underline-offset-4"
            >
              {data.linkLabel}
            </a>
          </>
        ) : null}
      </figcaption>
    </figure>
  );
}
