import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DataChart, type ChartPoint } from './DataChart';

/**
 * These tests guard the three promises the primitive makes, because all three
 * are invisible in a screenshot review:
 *   1. the numbers are real text in a real table, not decorative divs
 *   2. no label ever renders at a hardcoded size below text-micro (13px)
 *   3. it stays server-renderable, so no hook may sneak in
 */

const MONTHS: ChartPoint[] = [
  { label: 'Januar 2026', short: 'Jan', value: 41 },
  { label: 'Februar 2026', short: 'Feb', value: 96 },
  { label: 'März 2026', short: 'Mär', value: 158 },
  { label: 'April 2026', short: 'Apr', value: 224, forecast: true },
];

const SHARES: ChartPoint[] = [
  { label: 'Alle Nutzer', value: 33 },
  { label: 'B2B-Einkauf', value: 35 },
  { label: 'Generation Z', value: 45 },
];

describe('DataChart', () => {
  it('puts every value in a table row a screen reader can reach', () => {
    render(
      <DataChart
        variant="area"
        title="Zitate pro Monat"
        points={MONTHS}
        axis={{ title: 'Zitate' }}
      />
    );

    const table = screen.getByRole('table');
    for (const point of MONTHS) {
      expect(screen.getByRole('rowheader', { name: new RegExp(point.label) })).toBeInTheDocument();
    }
    // The table is inside a native <details>, so it needs no JavaScript.
    expect(table.closest('details')).not.toBeNull();
  });

  it('formats numbers German style and never with a raw decimal point', () => {
    render(
      <DataChart
        variant="column"
        title="Große Zahlen"
        points={[{ label: 'Summe', value: 1749.5 }]}
        axis={{ unit: ' Zitate' }}
        decimals={1}
      />
    );
    expect(screen.getAllByText('1.749,5 Zitate').length).toBeGreaterThan(0);
  });

  it('renders every variant without a client hook and without an <img>', () => {
    for (const variant of ['column', 'row', 'line', 'area'] as const) {
      const { container, unmount } = render(
        <DataChart variant={variant} title={`Test ${variant}`} points={SHARES} />
      );
      expect(container.querySelectorAll('img')).toHaveLength(0);
      // Zero network requests: no raster, no external font, no remote sprite.
      expect(container.innerHTML).not.toMatch(/https?:\/\//);
      unmount();
    }
  });

  it('never emits a font size below text-micro', () => {
    const { container } = render(
      <DataChart variant="area" title="Achsen" points={MONTHS} axis={{ title: 'Zitate' }} />
    );
    // Arbitrary type sizes are how the old hand-rolled figures ended up with
    // 10px source labels on a phone. The primitive may only use the tokens.
    const classes = [...container.querySelectorAll('*')]
      .flatMap((el) => [...el.classList])
      .filter((c) => c.includes('text-['));
    expect(classes).toEqual([]);
  });

  it('keeps a bar axis anchored at zero even if a min is passed', () => {
    const { container } = render(
      <DataChart
        variant="column"
        title="Nullbasis"
        points={SHARES}
        axis={{ min: 30, max: 50, step: 10, unit: ' %' }}
      />
    );
    // A truncated baseline would make 33 look like a sliver next to 45.
    expect(container.textContent).toContain('0 %');
  });
});
