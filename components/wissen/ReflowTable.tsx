import React from 'react';

/* ---------------------------------------------------------------------------
   One comparison table, two shapes.

   Every dense table on this site used to be `min-w-[640px]` (or 720px) inside
   an `overflow-x-auto` box. Measured at 390px, the card gives the table 300px,
   so the shape was structurally unable to show itself:

     /wissen/seo-vs-ai-seo        column "AI SEO" started at x=360, off screen
     /wissen/ki-sichtbarkeit      "KI-Sichtbarkeit (GEO)" x=366, "Konsequenz" x=568
     /wissen/technische-...       5 columns, the last two at x=402 and x=527
     /wissen/ki-sichtbarkeit      table 2: 2 of 4 columns unreachable

   The payload was behind a horizontal swipe with no affordance. One page tried
   to fix that with a sentence in the caption ("Auf schmalen Bildschirmen laesst
   sich die Tabelle seitlich scrollen"), which is a caption, not an affordance.
   The scroll box also forced ragged row heights, because a 640px grid squeezed
   into 300px wraps every prose cell to four or five lines.

   From lg this is a real <table> with automatic column widths that bleeds into
   the 28px card padding, exactly as before.

   Below lg every row becomes a labelled definition block: the row header is the
   block heading, then one labelled line per remaining column. The column head is
   carried in `data-label` and printed by the cell itself through ::before, so no
   header text is duplicated in the DOM and the <thead> markup (and with it the
   header text a crawler reads) stays untouched.

   The explicit ARIA roles are the price of the reflow: `display: block` strips
   the native table semantics, so without them a screen reader loses the grid
   below lg.
--------------------------------------------------------------------------- */

export type ReflowColumn = {
  /**
   * Column head. Printed in the <thead> from lg, and below lg as the label
   * line above each cell. Must be plain text: it goes into `data-label`.
   */
  label: string;
  /** Optional richer head for lg only. Falls back to `label`. */
  head?: React.ReactNode;
  /** The emphasised column: accent head, surface band from lg, dark ink. */
  emphasis?: boolean;
  /** lg-only width hint, e.g. `lg:w-[24%]`. */
  width?: string;
};

export const ReflowTable: React.FC<{
  columns: ReflowColumn[];
  rows: React.ReactNode[][];
  /** Stable keys, one per row. Falls back to the row index. */
  rowKeys?: string[];
  /** Screen-reader-only <caption>. */
  srCaption?: string;
  /** Lining figures, for tables whose cells are mostly numbers. */
  tabularNums?: boolean;
}> = ({ columns, rows, rowKeys, srCaption, tabularNums }) => (
  <div className="lg:-mx-7">
    <table
      role="table"
      className={`block w-full border-collapse text-left align-top text-micro lg:table ${
        tabularNums ? 'tabular-nums' : ''
      }`}
    >
      {srCaption ? <caption className="sr-only">{srCaption}</caption> : null}
      <thead role="rowgroup" className="hidden lg:table-header-group">
        <tr role="row" className="border-b border-brand-edge">
          {columns.map((col, colIndex) => (
            <th
              key={col.label}
              role="columnheader"
              scope="col"
              className={`px-4 pb-3 align-bottom font-semibold ${col.width ?? ''} ${
                colIndex === 0 ? 'lg:pl-7' : ''
              } ${colIndex === columns.length - 1 ? 'lg:pr-7' : ''} ${
                col.emphasis ? 'bg-brand-surface text-brand-accent-ink' : 'text-brand-text'
              }`}
            >
              {col.head ?? col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody role="rowgroup" className="block lg:table-row-group">
        {rows.map((row, rowIndex) => (
          <tr
            key={rowKeys?.[rowIndex] ?? rowIndex}
            role="row"
            className="block border-t border-brand-line pt-flow first:border-t-0 first:pt-0 lg:table-row lg:border-t-0 lg:border-b lg:border-brand-hairline lg:last:border-b-0"
          >
            {row.map((cell, cellIndex) => {
              const col = columns[cellIndex];
              const last = cellIndex === row.length - 1;
              const edge = `${cellIndex === 0 ? 'lg:pl-7' : ''} ${last ? 'lg:pr-7' : ''}`;
              const gap = last ? '' : 'mb-2.5 lg:mb-0';

              /* Cell 0 is the row header, so below lg it IS the heading of the
                 block and must not carry a label of its own. */
              if (cellIndex === 0) {
                return (
                  <th
                    key={cellIndex}
                    role="rowheader"
                    scope="row"
                    className={`block text-meta font-semibold text-brand-text lg:table-cell lg:px-4 lg:py-3 lg:align-top lg:text-micro ${gap} ${edge} ${
                      col?.emphasis ? 'lg:bg-brand-surface' : ''
                    }`}
                  >
                    {cell}
                  </th>
                );
              }

              return (
                <td
                  key={cellIndex}
                  role="cell"
                  data-label={col?.label ?? ''}
                  className={`block leading-snug before:mb-0.5 before:block before:text-micro before:font-semibold before:uppercase before:tracking-eyebrow before:content-[attr(data-label)] lg:table-cell lg:px-4 lg:py-3 lg:align-top lg:before:content-none ${gap} ${edge} ${
                    col?.emphasis
                      ? 'font-medium text-brand-text before:text-brand-accent-ink lg:bg-brand-surface'
                      : 'text-brand-muted before:text-brand-subtle'
                  }`}
                >
                  {cell}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
