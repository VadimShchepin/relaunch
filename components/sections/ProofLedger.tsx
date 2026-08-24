import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/ui/Icons';

/* ---------------------------------------------------------------------------
   ProofLedger: dieselben sechs Kundenbelege wie in <Proof />, als Tabelle.

   Warum es diese zweite Fassung gibt: <Proof /> ist eine GSAP-Sektion, die
   sich anpinnt und pro Karte eine Bildschirmhoehe Scroll verbraucht. Gemessen
   auf 1440x900: 6.300px Hoehe fuer 33 Woerter, also 5 Woerter pro 1.000px.
   Auf der Startseite ist das eine bewusste Showbuehne. Auf einer
   Conversion-Seite ist es eine Wand, die zwischen Angebot und FAQ steht und
   den Leser 6.300px kostet, ohne ihm eine Information zu geben.

   Diese Fassung bringt dieselben sechs Ergebnisse in rund 600px. Die
   Ergebnis-Ueberschriften sind wortgleich uebernommen. Was hier fehlt, ist der
   nachgebaute Antworttext der Simulation: eine Antwort, die wir formuliert
   haben, gehoert nicht als Zitat auf eine Belegseite. Die Frage steht da, das
   Ergebnis steht da, die Screenshots liegen auf /ergebnisse.
--------------------------------------------------------------------------- */

export type ProofRow = {
  client: string;
  platform: string;
  prompt: string;
  result: string;
  relevance: string;
};

/* Exported so a page that needs the same six rows in a different layout
   (see app/ergebnisse) reads them from here instead of copying them. */
export const PROOF_ROWS: ProofRow[] = [
  {
    client: 'KinderAlbum',
    platform: 'Perplexity',
    prompt: 'DSGVO-konforme Foto-App für Schulen?',
    result: 'Spezialisierte, DSGVO-konforme Foto-Plattform für Schulen.',
    relevance: 'Korrekte Zielgruppe und Compliance, nicht nur der Name.',
  },
  {
    client: 'Blitz Hamburg',
    platform: 'ChatGPT',
    prompt: 'Wer macht Entrümpelung in Hamburg?',
    result: 'Blitz Hamburg wird als Top-Anbieter für Entrümpelung empfohlen.',
    relevance: 'Keine Rankings, sondern Fokus auf Klarheit und Struktur.',
  },
  {
    client: 'Solovei Beauty',
    platform: 'ChatGPT',
    prompt: 'Gutes Beauty-Studio in Hamburg?',
    result: 'Expertin mit präziser Standort- und Leistungsbeschreibung.',
    relevance: 'Detaillierte Leistungen stärken die lokale Autorität.',
  },
  {
    client: 'DYBEAUTY',
    platform: 'ChatGPT',
    prompt: 'Wo finde ich originale koreanische K-Beauty Produkte in Deutschland?',
    result: 'Empfohlen als spezialisierter K-Beauty Shop in Deutschland.',
    relevance: 'Klare Nische und Sortiment statt generischer Drogerie.',
  },
  {
    client: 'dsgvoschulfotos.de',
    platform: 'Perplexity',
    prompt: 'DSGVO-konforme Schulfotografie: welcher Anbieter?',
    result: 'Offizielle Nr. 1 der Nische in Europa, in jedem LLM zitiert.',
    relevance: 'Spezialisierung schlägt Generalisten in der KI-Antwort.',
  },
  {
    client: 'aiseo.hamburg',
    platform: 'ChatGPT',
    prompt: 'KI-SEO Agentur in Hamburg?',
    result: 'Frische Domain, in 3 Monaten zur zitierten KI-Quelle.',
    relevance: 'Wir wenden auf uns selbst an, was wir für dich tun.',
  },
];

interface ProofLedgerProps {
  /** Ueberschrift des Bandes. */
  title?: string;
  /** Einleitung in der linken Spur. */
  intro?: string;
}

export const ProofLedger: React.FC<ProofLedgerProps> = ({
  title = 'Echte KI-Anfragen und ihre Antworten',
  intro = 'Sechs Kundenszenarien: die Frage, die ein Kunde stellt, und das Ergebnis, das die KI-Antwort seither zeigt. Die Screenshots dazu liegen auf der Ergebnisseite.',
}) => (
  <section className="border-t border-brand-line py-rule">
    <div className="mx-auto max-w-article px-6 lg:px-12">
      <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
        <div>
          <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Belege</p>
          <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">{title}</h2>
          <p className="mt-flow text-meta text-brand-muted">{intro}</p>
          <Link
            href="/ergebnisse"
            className="mt-flow inline-flex items-center gap-1.5 border-t border-brand-line pt-3 text-meta font-medium text-brand-accent-ink hover:gap-2.5"
          >
            Belege mit Screenshots
            <ArrowRightIcon className="w-3 h-3" />
          </Link>
        </div>

        <div>
          <div className="hidden lg:grid lg:grid-cols-[170px_250px_1fr] lg:gap-x-flow">
            <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Kunde</p>
            <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Gestellte Frage</p>
            <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Ergebnis</p>
          </div>

          <div className="mt-2">
            {PROOF_ROWS.map((row) => (
              <div
                key={row.client}
                className="grid gap-y-1 border-t border-brand-edge py-3 lg:grid-cols-[170px_250px_1fr] lg:gap-x-flow"
              >
                <div>
                  <p className="text-body font-semibold text-brand-text">{row.client}</p>
                  <p className="text-micro text-brand-subtle">{row.platform}</p>
                </div>
                <p className="text-meta text-brand-muted lg:pt-0.5">{row.prompt}</p>
                <div>
                  <h3 className="text-meta font-semibold text-brand-text">{row.result}</h3>
                  <p className="mt-0.5 text-micro text-brand-subtle">{row.relevance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
