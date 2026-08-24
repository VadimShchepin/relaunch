import fs from 'node:fs';
import path from 'node:path';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PerplexitySimulator } from '@/components/ui/PerplexitySimulator';

/*
 * Regressionsschutz gegen erfundene Quell-Domains auf der Startseite.
 *
 * Vorgeschichte: Hero, LiveDemo und Proof haben die "Sources"-Zeile der
 * KI-Simulation mit zwoelf Domains gefuellt, die es nicht gibt, jeweils neben
 * einer echten Kundendomain. Auf einer Seite, die Citation-Messung verkauft,
 * ist das der teuerste denkbare Fehler, und es faellt nur in einem echten
 * Browser auf, weil die Zeile erst mitten in der Tipp-Animation erscheint.
 * Deshalb dieser Test: er liest die Quelldateien und laeuft in Millisekunden,
 * statt darauf zu hoffen, dass jemand die Animation lange genug anschaut.
 */

const FORBIDDEN = [
    'datenschutz-blog.de',
    'edu-tools.de',
    'entruempelung-vergleich.de',
    'branchenbuch.de',
    'beauty-hamburg.de',
    'treatwell.de',
    'k-beauty-guide.de',
    'kosmetik-vergleich.de',
    'schulfotograf-vergleich.de',
    'datenschutz-schule.de',
    'ki-agentur-vergleich.de',
    'hamburg-digital.de',
    // Nicht erfunden, aber geparkt: solovei.de leitet auf notavailable.goneo.de.
    // Wer sie nachprueft, landet auf einer Hoster-Platzhalterseite.
    'solovei.de',
];

const CALL_SITES = [
    'components/sections/Hero.tsx',
    'components/sections/LiveDemo.tsx',
    'components/sections/Proof.tsx',
];

const read = (rel: string) =>
    fs.readFileSync(path.join(process.cwd(), rel), 'utf8');

describe('KI-Simulation: keine erfundenen Quell-Domains', () => {
    it.each(CALL_SITES)('%s listet keine erfundene Domain in sources', (rel) => {
        const src = read(rel);
        // Nur die Inhalte der sources-Listen pruefen. Die Begruendung im
        // Kommentar darf die alten Domains nennen, sonst verliert der naechste
        // Leser den Kontext, warum sie weg sind.
        const lists = [...src.matchAll(/sources\s*[:=]\s*\{?\[([^\]]*)\]/g)]
            .map((m) => m[1])
            .join(' ');
        for (const domain of FORBIDDEN) {
            expect(lists, `${rel} nennt ${domain} als Quelle`).not.toContain(domain);
        }
    });

    it('PerplexitySimulator hat keine erfundenen Defaults', () => {
        const src = read('components/ui/PerplexitySimulator.tsx');
        // promptText, answerText und sources hatten fruehere Defaults, die eine
        // KinderAlbum-Antwort samt Quellen behauptet haben. Ein Default, der
        // eine Aussage macht, wird irgendwann unbeabsichtigt gerendert.
        expect(src).not.toMatch(/promptText\s*=\s*["'`]/);
        expect(src).not.toMatch(/answerText\s*=\s*["'`]/);
        expect(src).not.toMatch(/sources\s*=\s*\[/);
    });

    it('freie Source-Kacheln bleiben unbeschriftet', async () => {
        render(
            <PerplexitySimulator
                promptText="Frage?"
                answerText="Antwort mit **Marke**."
                sources={['kinderalbum.com']}
                citedSource="kinderalbum.com"
            />,
        );

        // Die Zeile erscheint erst nach Tippen und "Thinking".
        await waitFor(() => expect(screen.getByText('Sources')).toBeInTheDocument(), {
            timeout: 8000,
        });

        const row = screen.getByText('Sources').closest('div')?.parentElement
            ?.querySelector('.flex.gap-1\\.5') as HTMLElement;
        expect(row).toBeTruthy();
        // Drei Kacheln, genau eine davon mit Text: die belegte Domain.
        expect(row.children).toHaveLength(3);
        const labelled = [...row.children].filter(
            (tile) => (tile.textContent ?? '').trim().length > 0,
        );
        expect(labelled).toHaveLength(1);
        expect(labelled[0].textContent).toBe('kinderalbum.com');
    }, 12000);
});
