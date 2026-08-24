import React from 'react';

/* ==================================================================== *
 *  DataChart                                                           *
 *  --------------------------------------------------------------------*
 *  One chart primitive for the whole site, drawn in HTML and CSS.       *
 *                                                                      *
 *  WHY NOT SVG: an <svg> with a viewBox scales its text with the box,   *
 *  so a chart that is comfortable at 1440px renders its axis labels at  *
 *  5 to 6px on a 390px phone. That is the exact bug the bar (Stripe's   *
 *  German payment-methods guide) ships in its pie charts, and it is why *
 *  /wissen/ki-sichtbarkeit drew its figures by hand in CSS and won its  *
 *  comparison. This component keeps that decision and makes it          *
 *  reusable: every label here is ordinary HTML text at text-micro       *
 *  (13px) or larger, so it can never compute below about 11px, at any   *
 *  viewport, at any zoom level.                                         *
 *                                                                      *
 *  SVG is still used for one thing, the connecting line of a time       *
 *  series, because that is pure geometry with no text in it. The stroke  *
 *  carries vectorEffect="non-scaling-stroke" so a squashed viewBox       *
 *  cannot thin it out.                                                  *
 *                                                                      *
 *  SERVER COMPONENT. No hooks, no browser APIs, no 'use client'. The     *
 *  expandable data table is a native <details>, so the numbers are      *
 *  reachable with JavaScript switched off and by a crawler.             *
 *                                                                      *
 *  Tokens only: brand-accent-deep and brand-accent-ink carry the data,  *
 *  brand-line and brand-hairline the rules, brand-subtle the labels,    *
 *  brand-bg and brand-surface the ground. No hex values live here.      *
 * ==================================================================== */

/** One bar, or one vertex of a time series. */
export type ChartPoint = {
  /** Full human label. Used in the data table and the hover title. */
  label: string;
  /** Compact axis caption, four characters or fewer reads best. Falls back to `label`. */
  short?: string;
  value: number;
  /** Draw as a projection: dashed outline instead of a solid fill. */
  forecast?: boolean;
  /** Small source or qualifier line under the axis caption. */
  note?: string;
};

export type ChartAxis = {
  /**
   * Bottom of the value axis. Defaults to 0 and is ignored for `column` and
   * `row`: a bar chart with a cut-off baseline misstates its own ratios.
   */
  min?: number;
  /** Top of the value axis. Derived with about 12 percent headroom if omitted. */
  max?: number;
  /** Gridline interval. Derived as a quarter of the range if omitted. */
  step?: number;
  /** Appended to every number, including the leading space: ' %', ' Zitate'. */
  unit?: string;
  /** Eyebrow above the plot naming the measured quantity. */
  title?: string;
};

export type ChartStat = { label: string; value: string };

export type ChartTable = {
  /** Summary line of the <details>. */
  label?: string;
  heads?: [string, string];
  /** Optional total row. */
  sum?: [string, string];
  /** Ship the table expanded. Default is collapsed. */
  open?: boolean;
};

type DataChartCommon = {
  /** Names what is plotted. Rendered as the chart's own heading. */
  title: string;
  /** Heading level, so the chart fits the page outline. Default h4. */
  headingLevel?: 'h2' | 'h3' | 'h4' | 'p';
  /** Right-hand note on the title line, normally the measured property. */
  subject?: string;
  points: ChartPoint[];
  axis?: ChartAxis;
  /** Which point gets the darker accent. Default: none, every point equal. */
  highlight?: 'peak' | 'last' | 'none' | number;
  /** Decimal places. Derived: 0 when every value is a whole number, else 1. */
  decimals?: number;
  /** Hard numbers under the plot. Replaces a borrowed dashboard's KPI tiles. */
  stats?: ChartStat[];
  /** Set to false only if the surrounding page already prints the same table. */
  table?: ChartTable | false;
  caption?: React.ReactNode;
  source?: { href: string; label: string };
  /** Caption of the projection band. Default 'Prognose'. */
  forecastLabel?: string;
  /** Draw the card and figcaption. Set false when dropping into an existing <figure>. */
  frame?: boolean;
  className?: string;
};

export type DataChartProps =
  | (DataChartCommon & { variant: 'column' | 'row' })
  | (DataChartCommon & {
      variant: 'line' | 'area';
      /** Default 'endpoints': first, last and peak. */
      valueLabels?: 'endpoints' | 'all' | 'none';
      /** Print every n-th axis caption. Every point stays in the table. */
      labelEvery?: number;
    });

/* -------------------------------------------------------------------- */
/*  Pure helpers. Deterministic, so server and client markup agree.      */
/* -------------------------------------------------------------------- */

/** Next round number at or above `v`, so the axis top is not an odd figure. */
function niceCeil(v: number): number {
  if (!Number.isFinite(v) || v <= 0) return 1;
  const magnitude = 10 ** Math.floor(Math.log10(v));
  const n = v / magnitude;
  const steps = [1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10];
  const pick = steps.find((s) => n <= s + 1e-9) ?? 10;
  return pick * magnitude;
}

/**
 * German number formatting without Intl, so the string is byte-identical on
 * the server and in the browser and cannot cause a hydration mismatch.
 */
function formatValue(value: number, decimals: number, unit = ''): string {
  const fixed = Math.abs(value).toFixed(decimals);
  const [whole, fraction] = fixed.split('.');
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const sign = value < 0 ? '−' : '';
  return `${sign}${fraction ? `${grouped},${fraction}` : grouped}${unit}`;
}

function resolveScale(points: ChartPoint[], axis: ChartAxis | undefined, zeroBased: boolean) {
  const values = points.map((p) => p.value);
  const dataMax = Math.max(...values, 0);
  const dataMin = Math.min(...values, 0);

  const min = zeroBased ? 0 : (axis?.min ?? Math.min(0, dataMin));

  // Derive the step first, then snap the top of the axis up to a whole number
  // of steps. Doing it the other way round produces a top tick that does not
  // divide evenly, so the axis prints "120" and "125" on top of each other.
  const step = axis?.step ?? Math.max(niceCeil(Math.max(dataMax - min, 1) / 3.2), 1e-9);
  const max =
    axis?.max ??
    // about 6 percent headroom, then rounded up to the next gridline, so the
    // value label above the tallest bar always has room.
    min + Math.max(1, Math.ceil(((dataMax - min) * 1.06) / step)) * step;

  const span = max - min || 1;

  const ticks: number[] = [];
  for (let t = min; t <= max + span * 1e-6; t += step) ticks.push(Number(t.toFixed(6)));

  return { min, max, span, ticks, pct: (v: number) => ((v - min) / span) * 100 };
}

function resolveHighlight(points: ChartPoint[], highlight: DataChartCommon['highlight']): number {
  if (highlight === undefined || highlight === 'none') return -1;
  if (typeof highlight === 'number') return highlight;
  if (highlight === 'last') return points.length - 1;
  return points.reduce((best, p, i) => (p.value > points[best].value ? i : best), 0);
}

/** Horizontal placement that never lets an edge label clip out of the plot. */
function edgeSafe(percent: number): { style: React.CSSProperties; className: string } {
  if (percent <= 0.01) return { style: { left: 0 }, className: '' };
  if (percent >= 99.99) return { style: { right: 0 }, className: '' };
  return { style: { left: `${percent}%` }, className: '-translate-x-1/2' };
}

/* -------------------------------------------------------------------- */
/*  Shared sub-blocks                                                    */
/* -------------------------------------------------------------------- */

const LABEL = 'text-micro tabular-nums text-brand-subtle';
const VALUE = 'text-micro font-semibold tabular-nums text-brand-text';
/** One height for the plot box and for the value-axis gutter beside it. If
 *  these two ever drift apart, every tick label slides off its gridline. */
const PLOT_H = 'h-44 sm:h-56';

function ValueAxis({
  ticks,
  pct,
  decimals,
  unit,
  width,
}: {
  ticks: number[];
  pct: (v: number) => number;
  decimals: number;
  unit: string;
  width: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative shrink-0 ${PLOT_H}`}
      style={{ width: `${width}px` }}
    >
      {ticks.map((t) => (
        <span
          key={t}
          className={`absolute right-0 translate-y-1/2 text-right ${LABEL}`}
          style={{ bottom: `${pct(t)}%` }}
        >
          {formatValue(t, decimals, unit)}
        </span>
      ))}
    </div>
  );
}

function GridLines({ ticks, pct }: { ticks: number[]; pct: (v: number) => number }) {
  return (
    <>
      {ticks.map((t, i) => (
        <span
          key={t}
          aria-hidden="true"
          className={`absolute inset-x-0 h-px ${i === 0 ? 'bg-brand-line' : 'bg-brand-hairline'}`}
          style={{ bottom: `${pct(t)}%` }}
        />
      ))}
    </>
  );
}

function DataTable({
  points,
  config,
  decimals,
  unit,
  valueHead,
}: {
  points: ChartPoint[];
  config: ChartTable;
  decimals: number;
  unit: string;
  valueHead: string;
}) {
  return (
    <details className="mt-flow border-t border-brand-hairline pt-4" open={config.open}>
      <summary className="cursor-pointer text-micro text-brand-accent-ink">
        {config.label ?? 'Zahlen als Tabelle'}
      </summary>
      <table className="mt-3 w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-brand-line">
            <th
              scope="col"
              className="pb-2 pr-4 text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle"
            >
              {config.heads?.[0] ?? 'Datenpunkt'}
            </th>
            <th
              scope="col"
              className="pb-2 text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle"
            >
              {config.heads?.[1] ?? valueHead}
            </th>
          </tr>
        </thead>
        <tbody>
          {points.map((p, i) => (
            <tr key={`tr-${i}`} className="border-b border-brand-hairline">
              <th
                scope="row"
                className="py-1.5 pr-4 text-left text-micro font-normal text-brand-muted"
              >
                {p.label}
                {p.forecast ? <span className="text-brand-subtle"> (Prognose)</span> : null}
              </th>
              <td className="py-1.5 text-micro tabular-nums text-brand-text">
                {formatValue(p.value, decimals, unit)}
              </td>
            </tr>
          ))}
        </tbody>
        {config.sum ? (
          <tfoot>
            <tr>
              <th scope="row" className="py-1.5 pr-4 text-left text-micro font-semibold text-brand-text">
                {config.sum[0]}
              </th>
              <td className="py-1.5 text-micro font-semibold tabular-nums text-brand-text">
                {config.sum[1]}
              </td>
            </tr>
          </tfoot>
        ) : null}
      </table>
    </details>
  );
}

/* -------------------------------------------------------------------- */
/*  Component                                                            */
/* -------------------------------------------------------------------- */

export function DataChart(props: DataChartProps) {
  const {
    variant,
    title,
    headingLevel = 'h4',
    subject,
    points,
    axis,
    highlight,
    decimals: decimalsProp,
    stats,
    table,
    caption,
    source,
    forecastLabel = 'Prognose',
    frame = true,
    className = '',
  } = props;

  if (points.length === 0) return null;

  const Heading = headingLevel;
  const unit = axis?.unit ?? '';
  const decimals = decimalsProp ?? (points.every((p) => Number.isInteger(p.value)) ? 0 : 1);
  const isBar = variant === 'column' || variant === 'row';
  const { ticks, pct } = resolveScale(points, axis, isBar);
  const peak = resolveHighlight(points, highlight);

  // Gutter wide enough for the longest tick label at 13px tabular General Sans
  // (about 7,4px per glyph). Measured, not guessed, so nothing ever clips.
  const gutter = Math.max(
    26,
    Math.round(Math.max(...ticks.map((t) => formatValue(t, decimals, unit).length)) * 7.4) + 4
  );

  const fill = (i: number, forecast?: boolean) => {
    if (forecast) {
      return 'border-2 border-b-0 border-dashed border-brand-accent-deep bg-brand-accent-deep/10';
    }
    return i === peak ? 'bg-brand-accent-ink' : 'bg-brand-accent-deep';
  };

  /* ---------------- column: categorical, vertical ------------------- */
  const columnPlot = (
    <div className="flex items-start gap-2 pt-4">
      <ValueAxis ticks={ticks} pct={pct} decimals={decimals} unit={unit} width={gutter} />
      <div className="min-w-0 flex-1 overflow-x-auto pb-1">
        {/* Minimum pitch per column, so an axis caption is never squeezed and
            never has to shrink below text-micro. Wide charts scroll instead:
            with more than six categories on a phone, prefer variant="row". */}
        <div style={{ minWidth: `max(100%, ${points.length * 46}px)` }}>
          <div className={`relative ${PLOT_H}`}>
            <GridLines ticks={ticks} pct={pct} />
            <div className="absolute inset-0 flex items-end gap-2 sm:gap-4">
              {points.map((p, i) => (
                <div key={`bar-${i}`} className="flex h-full min-w-0 flex-1 flex-col justify-end">
                  <span className={`mb-1 text-center ${VALUE}`}>
                    {formatValue(p.value, decimals, unit)}
                  </span>
                  {/* max() keeps a near-zero bar visible as a stub rather than
                      letting it vanish, without touching the axis. */}
                  {/* The width cap keeps a three-bar chart in a wide card
                      looking like a chart and not like three slabs. The bar
                      stays centred in its slot, so the caption below still
                      lines up with it. */}
                  <div
                    title={`${p.label}: ${formatValue(p.value, decimals, unit)}`}
                    className={`mx-auto w-full max-w-[112px] rounded-t-[3px] ${fill(i, p.forecast)}`}
                    style={{ height: `max(3px, ${Math.min(100, pct(p.value)).toFixed(2)}%)` }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2.5 flex gap-2 sm:gap-4">
            {points.map((p, i) => (
              <div key={`cap-${i}`} className="min-w-0 flex-1 text-center">
                <p className={`leading-tight ${LABEL}`}>{p.short ?? p.label}</p>
                {p.note ? (
                  <p className="mt-0.5 text-micro leading-tight text-brand-subtle">{p.note}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  /* ---------------- row: categorical, horizontal -------------------- */
  const rowPlot = (
    <div className="pt-2">
      <div aria-hidden="true" className="relative mb-4 h-5 border-b border-brand-line">
        {ticks.map((t) => {
          const place = edgeSafe(pct(t));
          return (
            <span
              key={t}
              className={`absolute bottom-1 ${LABEL} ${place.className}`}
              style={place.style}
            >
              {formatValue(t, decimals, unit)}
            </span>
          );
        })}
      </div>
      <ul className="space-y-5">
        {points.map((p, i) => (
          <li key={`row-${i}`}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-meta font-medium leading-snug text-brand-text">{p.label}</span>
              <span className="shrink-0 text-meta font-semibold tabular-nums text-brand-text">
                {formatValue(p.value, decimals, unit)}
              </span>
            </div>
            <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-brand-hairline">
              <div
                className={`h-full rounded-full ${
                  p.forecast
                    ? 'border border-dashed border-brand-accent-deep bg-brand-accent-deep/25'
                    : i === peak
                      ? 'bg-brand-accent-ink'
                      : 'bg-brand-accent-deep'
                }`}
                style={{ width: `max(3px, ${Math.min(100, pct(p.value)).toFixed(2)}%)` }}
              />
            </div>
            {p.note ? <p className="mt-1.5 text-micro text-brand-subtle">{p.note}</p> : null}
          </li>
        ))}
      </ul>
    </div>
  );

  /* ---------------- line and area: time series ---------------------- */
  let seriesPlot: React.ReactNode = null;
  if (variant === 'line' || variant === 'area') {
    const valueLabels = props.valueLabels ?? 'endpoints';
    const labelEvery = props.labelEvery ?? 1;
    const printed = Math.ceil(points.length / labelEvery);
    // CSS-only caption thinning. A 13px caption needs about 48px of pitch, and
    // a 390px phone offers roughly 300px of plot. Rather than shrink the type
    // (the bar's mistake) or force a scrollbar, drop every second or third
    // caption below the sm breakpoint. The full set stays in the table.
    const narrowStride = printed > 9 ? 3 : printed > 5 ? 2 : 1;
    const last = points.length - 1;

    /** Stride from the first point, but never let the run-in collide with the
     *  last caption: 12 and 13 at a two-step stride would overprint. */
    const captionSet = (stride: number) => {
      const set = new Set<number>();
      for (let i = 0; i <= last; i += stride) set.add(i);
      if (!set.has(last)) {
        const highest = Math.max(...set);
        if (last - highest < stride) set.delete(highest);
        set.add(last);
      }
      return set;
    };
    const wideCaptions = captionSet(labelEvery);
    const narrowCaptions = captionSet(labelEvery * narrowStride);
    const peakIndex = points.reduce((best, p, i) => (p.value > points[best].value ? i : best), 0);
    const x = (i: number) => (last === 0 ? 50 : (i / last) * 100);
    const vertices = points.map((p, i) => ({ ...p, x: x(i), y: 100 - pct(p.value) }));
    const asPoints = (list: typeof vertices) =>
      list.map((v) => `${v.x.toFixed(3)},${v.y.toFixed(3)}`).join(' ');
    const line = asPoints(vertices);
    const firstForecast = points.findIndex((p) => p.forecast);
    // Split the stroke so a projection is never drawn as a measured value. The
    // dashes stay even because non-scaling-stroke dashes in device space, not
    // in the squashed viewBox.
    const solidLine = asPoints(
      firstForecast > 0 ? vertices.slice(0, firstForecast) : vertices
    );
    const dashedLine = firstForecast > 0 ? asPoints(vertices.slice(firstForecast - 1)) : '';

    const showValue = (i: number) =>
      valueLabels === 'all' ||
      (valueLabels === 'endpoints' && (i === 0 || i === last || i === peakIndex));

    seriesPlot = (
      <div className="flex items-start gap-2 pt-4">
        <ValueAxis ticks={ticks} pct={pct} decimals={decimals} unit={unit} width={gutter} />
        <div className="min-w-0 flex-1 overflow-x-auto pb-1">
          <div style={{ minWidth: `max(100%, ${narrowCaptions.size * 48}px)` }}>
            <div className={`relative ${PLOT_H}`}>
              <GridLines ticks={ticks} pct={pct} />

              {firstForecast > 0 ? (
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 border-l border-dashed border-brand-accent-deep/50 bg-brand-accent-deep/5"
                  style={{ left: `${x(firstForecast - 1)}%`, right: 0 }}
                />
              ) : null}

              {/* Geometry only. Every label in this chart is HTML, so nothing
                  here scales its type down on a narrow viewport. */}
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full overflow-visible"
              >
                {variant === 'area' ? (
                  <polygon
                    points={`0,100 ${line} 100,100`}
                    className="fill-brand-accent-deep/10"
                  />
                ) : null}
                <polyline
                  points={solidLine}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  className="text-brand-accent-deep"
                />
                {dashedLine ? (
                  <polyline
                    points={dashedLine}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeDasharray="5 4"
                    strokeLinecap="butt"
                    vectorEffect="non-scaling-stroke"
                    className="text-brand-accent-deep"
                  />
                ) : null}
              </svg>

              {vertices.map((v, i) => (
                <span
                  key={`dot-${i}`}
                  aria-hidden="true"
                  title={`${v.label}: ${formatValue(v.value, decimals, unit)}`}
                  className={`absolute h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full ring-2 ring-brand-bg ${
                    v.forecast ? 'bg-brand-bg ring-brand-accent-deep' : 'bg-brand-accent-ink'
                  }`}
                  style={{ left: `${v.x}%`, bottom: `${100 - v.y}%` }}
                />
              ))}

              {vertices.map((v, i) => {
                if (!showValue(i)) return null;
                const place = edgeSafe(v.x);
                // A point in the top fifth of the plot gets its label below the
                // dot. The scroll container clips vertically (overflow-x: auto
                // forces overflow-y: auto), so a label placed above a near-max
                // point would be cut in half instead of overflowing politely.
                const nearTop = v.y < 18;
                return (
                  <span
                    key={`val-${i}`}
                    className={`absolute ${VALUE} ${place.className}`}
                    style={{
                      ...place.style,
                      ...(nearTop
                        ? { top: `calc(${v.y}% + 0.6rem)` }
                        : { bottom: `calc(${100 - v.y}% + 0.75rem)` }),
                    }}
                  >
                    {formatValue(v.value, decimals, unit)}
                  </span>
                );
              })}
            </div>

            <div className="relative mt-2.5 h-8">
              {vertices.map((v, i) => {
                if (!wideCaptions.has(i)) return null;
                const onNarrow = narrowCaptions.has(i);
                const place = edgeSafe(v.x);
                return (
                  <span
                    key={`xcap-${i}`}
                    className={`absolute top-1.5 whitespace-nowrap leading-tight ${LABEL} ${
                      place.className
                    } ${onNarrow ? '' : 'hidden sm:inline'}`}
                    style={place.style}
                  >
                    {v.short ?? v.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const plot =
    variant === 'column' ? columnPlot : variant === 'row' ? rowPlot : seriesPlot;

  const body = (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <Heading className="text-meta font-semibold text-brand-text">{title}</Heading>
        {subject ? <p className="text-micro text-brand-subtle">{subject}</p> : null}
      </div>

      {axis?.title ? (
        <p className="mt-4 text-micro uppercase tracking-eyebrow text-brand-subtle">{axis.title}</p>
      ) : null}

      {plot}

      {/* The projection legend is a text line rather than a caption inside the
          plot: on a 390px viewport the dashed band is about 40px wide and no
          readable word fits in it. */}
      {points.some((p) => p.forecast) ? (
        <p className="mt-2 text-micro text-brand-subtle">Gestrichelt: {forecastLabel}</p>
      ) : null}

      {stats && stats.length > 0 ? (
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
      ) : null}

      {table === false ? null : (
        <DataTable
          points={points}
          config={table ?? {}}
          decimals={decimals}
          unit={unit}
          valueHead={axis?.title ?? 'Wert'}
        />
      )}
    </>
  );

  if (!frame) return <div className={className}>{body}</div>;

  return (
    <figure className={`mt-flow ${className}`}>
      <div className="rounded-card border border-brand-line bg-brand-bg p-4 sm:p-6">{body}</div>
      {caption || source ? (
        <figcaption className="mt-3 text-micro text-brand-subtle">
          {caption}
          {source ? (
            <>
              {' '}
              <a
                href={source.href}
                className="text-brand-accent-ink underline decoration-1 underline-offset-4"
              >
                {source.label}
              </a>
            </>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default DataChart;
