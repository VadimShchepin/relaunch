import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { DataChart } from "@/components/ui/DataChart";
import { FaqToc, type TocGroup } from "./FaqToc";

/* ==================================================================== *
 *  /faq
 *  --------------------------------------------------------------------
 *  The page was thirteen 100-word paragraphs in a single ink, stacked in
 *  a 900px column with no index. Reading it was the only way to find an
 *  answer, which is the one thing an FAQ must not require.
 *
 *  Three changes, all structural:
 *
 *  1. Every answer now opens with a `lead`: one sentence that answers the
 *     question outright, set in brand-text. The reasoning follows in
 *     brand-muted. Nothing was cut, the sentences were re-ordered so the
 *     answer comes before the argument. That is also the shape an AI
 *     engine can quote, which is what this site sells.
 *  2. The thirteen questions are grouped into five themes with a numbered
 *     hierarchy (1., then 1.1 / 1.2), and a sticky rail indexes the
 *     themes with a live active state.
 *  3. One honest chart. "Wie lange dauert es" used to answer in adverbs
 *     ("oft", "realistisch"); it now shows the first three months of this
 *     site's own Copilot citations, exported from the Bing Webmaster
 *     Tools. First-party data, no dashboard screenshot.
 *
 *  The FAQPage JSON-LD is generated from `lead + body`, so the structured
 *  answer stays the full answer even though the page displays it in two
 *  inks. Do not let those two drift apart.
 * ==================================================================== */

type FAQItem = {
  id: string;
  q: string;
  /** The answer itself, one sentence, before any reasoning. */
  lead: string;
  /** The reasoning, one string per paragraph. */
  body: string[];
  /** Rendered after the body. Never part of the JSON-LD answer text. */
  extra?: React.ReactNode;
};

type FAQGroup = {
  id: string;
  label: string;
  /** Why this group exists, one line, in the rail's ink. */
  note: string;
  items: FAQItem[];
};

const CITATION_RAMP = (
  <DataChart
    variant="column"
    title="Erste drei Monate: KI-Zitate von aiseo.hamburg"
    headingLevel="p"
    axis={{ title: "Zitate pro Monat" }}
    highlight="last"
    points={[
      { label: "März 2026", short: "März", value: 4 },
      { label: "April 2026", short: "April", value: 34 },
      { label: "Mai 2026", short: "Mai", value: 382, note: "bis 28.05." },
    ]}
    stats={[
      { label: "Erstes Zitat", value: "7. März 2026" },
      { label: "Sprung", value: "Mai 2026" },
      { label: "Meistzitierte Seite", value: "KI-Sichtbarkeit messen" },
    ]}
    table={{ label: "Zahlen als Tabelle", heads: ["Monat", "Zitate"], sum: ["Summe", "420"] }}
    caption="Eigene Website, Zitate durch Microsoft Copilot. Quelle: AI-Performance-Bericht der Bing Webmaster Tools, Export vom 30.05.2026. Der Mai-Wert endet am 28.05., dem letzten Tag im Export."
  />
);

const GROUPS: FAQGroup[] = [
  {
    id: "grundlagen",
    label: "Grundlagen",
    note: "Was die Begriffe bedeuten und warum SEO allein nicht mehr genügt.",
    items: [
      {
        id: "was-ist-ki-sichtbarkeit",
        q: "Was ist KI-Sichtbarkeit?",
        lead:
          "KI-Sichtbarkeit heißt: ChatGPT, Perplexity und Google AI nennen dein Unternehmen aktiv als Quelle, nicht nur als Link in einer Ergebnisliste.",
        body: [
          "Klassische Suchmaschinen zeigen zehn blaue Links. KI wählt zwei bis sieben Quellen pro Antwort aus. Wer dort nicht erscheint, wird von einer wachsenden Zielgruppe schlicht nicht wahrgenommen.",
          "KI-Sichtbarkeit umfasst drei Säulen: technische Struktur (Schema.org, saubere Architektur), hochwertigen Content (klare Antworten auf echte Fragen) und Autorität (Markennennungen, PR, konsistente Unternehmensdaten). Erst wenn alle drei zusammenwirken, erkennt KI dein Unternehmen als relevante, zitierbare Quelle.",
        ],
      },
      {
        id: "was-ist-ai-seo",
        q: "Was ist AI SEO (GEO/AEO)?",
        lead:
          "AI SEO ist der Oberbegriff für Optimierung, damit KI-Systeme Inhalte verstehen, korrekt einordnen und als Quelle zitieren.",
        body: [
          "Die Disziplin heißt auch GEO (Generative Engine Optimization) oder AEO (Answer Engine Optimization). Klassische SEO optimiert auf Rankings und Klicks. AI SEO zielt darauf, in den generierten Antworten von ChatGPT, Perplexity, Google AI Overviews und Microsoft Copilot als Empfehlung aufzutauchen.",
          "Die Methoden unterscheiden sich grundlegend: Statt Keywords stehen semantische Relevanz, strukturierte Daten und Entitäts-Signale im Fokus. In der Princeton-Studie zu GEO (arXiv 2311.09735, KDD 2024) brachten aufbereitete Inhalte bis zu 40 % mehr Sichtbarkeit in generativen Antworten, am stärksten wirkten Zitate, Statistiken und klare Quellenangaben.",
        ],
      },
      {
        id: "warum-seo-nicht-reicht",
        q: "Warum reicht klassische SEO nicht mehr aus?",
        lead:
          "Weil KI keine Liste ausgibt, sondern eine Empfehlung. Wer dort fehlt, wird nicht verglichen, sondern ignoriert.",
        body: [
          "Klassische SEO optimiert für Suchergebnislisten mit zehn blauen Links. ChatGPT und Perplexity wählen wenige Quellen aus und fassen sie zu einer einzigen Antwort zusammen.",
          "Laut Gartner verlieren Marken bis 2028 über 50 % ihres organischen Traffics an KI-gestützte Suche. Semrush hat im Juni 2025 gemessen, dass Besucher aus KI-Suchen im Schnitt 4,4-mal besser konvertieren als organische Suchbesucher. Eine strenger gerechnete Gegenprobe von Amsive über 54 Websites fand allerdings keinen signifikanten Unterschied. SEO bleibt das Fundament, aber ohne gezielte KI-Optimierung (GEO/AEO) fehlt dir der Kanal, über den immer mehr Kaufentscheidungen getroffen werden.",
        ],
      },
    ],
  },
  {
    id: "auswahl",
    label: "Wie KI auswählt",
    note: "Welche Signale über eine Nennung entscheiden, und welche nicht.",
    items: [
      {
        id: "wie-entscheidet-ki",
        q: "Wie entscheidet KI, welche Unternehmen sie nennt?",
        lead:
          "Über vier Faktoren: Klarheit, Relevanz, Autorität und Konsistenz. Fünf bis zehn Quellen pro Antwort überleben diese Auswahl.",
        body: [
          "Klarheit heißt, deine Website kommuniziert strukturiert und eindeutig, was du anbietest und für wen. Relevanz heißt, deine Inhalte beantworten die konkreten Fragen der Nutzer präzise.",
          "Autorität entsteht durch Markennennungen auf vertrauenswürdigen Plattformen, PR-Erwähnungen und konsistente NAP-Daten (Name, Adresse, Telefonnummer). Konsistenz heißt, alle Signale zeichnen dasselbe Bild, von der Website über Verzeichnisse bis zu Social-Media-Profilen. Alle anderen Quellen spielen in der Entscheidung keine Rolle.",
        ],
      },
      {
        id: "websites-oder-unternehmen",
        q: "Nennt KI Websites oder Unternehmen?",
        lead:
          "Unternehmen, Marken und Personen. Die Website ist das Signal, nicht die Empfehlung.",
        body: [
          "Fragt jemand ChatGPT, wer gute KI-Optimierung in Hamburg macht, lautet die Antwort nicht: besuche diese Website. Sie nennt aiseo.hamburg als Spezialist für KI-Sichtbarkeit in Hamburg.",
          "Die Website liefert die strukturierten Daten, Inhalte und Autoritätssignale, anhand derer KI dein Unternehmen einordnet. Die Empfehlung selbst gilt dem Unternehmen, der Marke oder der Person dahinter. Deshalb muss deine Online-Präsenz ein klares, konsistentes Bild deiner Marke und deines Angebots vermitteln.",
        ],
      },
      {
        id: "prompt-optimierung",
        q: "Geht es dabei um Prompt-Optimierung?",
        lead: "Nein. Prompts bestimmen die Frage, nicht die Quelle.",
        body: [
          "Ein verbreiteter Irrtum ist, dass man KI-Antworten durch geschickte Prompts beeinflussen kann. Welche Unternehmen KI als Antwort nennt, hängt von der Qualität und Struktur der verfügbaren Informationen ab, nicht davon, wie die Frage formuliert wird.",
          "Entscheidend ist, ob dein Angebot als Quelle klar, vertrauenswürdig und zitierbar aufbereitet ist: saubere Website-Struktur, strukturierte Daten (Schema.org), konsistente Markennennungen auf relevanten Plattformen und Inhalte, die echte Fragen präzise beantworten. Diese Signale bestimmen, ob KI dich als relevante Quelle erkennt.",
        ],
      },
    ],
  },
  {
    id: "zusammenarbeit",
    label: "Zusammenarbeit",
    note: "Was ich mache, in welcher Reihenfolge, und was du dafür brauchst.",
    items: [
      {
        id: "was-machst-du-konkret",
        q: "Was machst du konkret für mein Unternehmen?",
        lead:
          "Erst messen, wie KI dich heute beschreibt, dann Technik, Inhalte und Autorität in dieser Reihenfolge nachziehen.",
        body: [
          "Ich analysiere zunächst, bei welchen Fragen du genannt wirst, bei welchen nicht und warum.",
          "Darauf baue ich drei Bereiche auf: die technische Struktur deiner Website (Schema.org Markup, Seitenarchitektur, KI-Bot-Zugang, Core Web Vitals), Inhalte, die echte Kundenfragen klar und zitierbar beantworten, und Autoritätssignale durch Markennennungen, PR, Branchenverzeichnisse und konsistente Unternehmensdaten. Die Umsetzung erfolgt schrittweise, messbar und transparent.",
        ],
      },
      {
        id: "neue-website-oder-optimierung",
        q: "Erstellst du neue Websites oder optimierst du bestehende?",
        lead: "Beides. Was sinnvoll ist, entscheidet der Zustand deiner bestehenden Seite.",
        body: [
          "Hat deine Website eine solide Basis, optimiere ich Struktur, Inhalte und technische Signale gezielt für KI-Sichtbarkeit: Schema.org Markup, semantische Content-Strukturierung, optimierte Seitenarchitektur und Autoritätsaufbau.",
          "Ist die Seite veraltet oder technisch grundlegend eingeschränkt, baue ich eine neue, KI-optimierte Website mit Next.js, sauberen Core Web Vitals und eingebauter Zugänglichkeit für KI-Crawler. Oft ist ein Hybrid am effektivsten: die bestehende Website als Basis behalten und gezielt neue Seiten ergänzen, die die entscheidenden Fragen abdecken.",
        ],
      },
      {
        id: "wie-arbeitest-du",
        q: "Wie arbeitest du konkret?",
        lead:
          "In drei Schritten: Analyse, Umsetzung an deinen Seiten, externe Signale. Nach jedem Schritt wird gemessen.",
        body: [
          "Zuerst prüfe ich, wie KI dein Unternehmen aktuell beschreibt, in ChatGPT, Perplexity und Google AI, und identifiziere die Lücken: fehlende strukturierte Daten, unklare Positionierung, schwache Autoritätssignale oder technische Barrieren.",
          "Dann setze ich die Website-Änderungen um: Schema.org Markup, Content-Überarbeitung für Zitierbarkeit, Seitenarchitektur, KI-Bot-Zugang. Danach folgen die externen Signale: Markennennungen, Branchenverzeichnisse, konsistente NAP-Daten. Fortschritte messe ich laufend, bis KI dich bei relevanten Fragen sauber einordnet und als Quelle nennt.",
        ],
      },
    ],
  },
  {
    id: "messung",
    label: "Messung und Zeitraum",
    note: "Womit sich Nennungen belegen lassen und wann sie auftauchen.",
    items: [
      {
        id: "ki-sichtbarkeit-messen",
        q: "Wie kann man KI-Sichtbarkeit messen?",
        lead:
          "Über Tools wie Ahrefs Brand Radar und Semrush AI Visibility, über manuelle Prompt-Tests und über den AI-Performance-Bericht der Bing Webmaster Tools.",
        body: [
          "Die Tools zeigen, bei welchen Fragen dein Unternehmen in KI-Antworten auftaucht und wie du im Vergleich zu Wettbewerbern positioniert bist. Zusätzlich tracke ich manuell, wie ChatGPT, Perplexity und Google AI dein Unternehmen bei relevanten Branchenfragen beschreiben.",
          "Über GA4 und Server-Logs lässt sich der Traffic von KI-Plattformen direkt messen, inklusive Conversion-Raten. Messung ist bei mir kein optionales Extra, sondern Teil des laufenden Prozesses. Du siehst transparent, welche Maßnahmen wirken und wo nachjustiert werden muss.",
        ],
        extra: (
          <p className="mt-flow text-meta text-brand-subtle">
            Die vollständige Methode steht offen im Guide{" "}
            <Link
              href="/wissen/ki-sichtbarkeit-messen"
              className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
            >
              KI-Sichtbarkeit messen
            </Link>
            . Belegte Zahlen aus laufenden Projekten stehen auf{" "}
            <Link
              href="/ergebnisse"
              className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
            >
              Ergebnisse
            </Link>
            .
          </p>
        ),
      },
      {
        id: "wie-lange-dauert-es",
        q: "Wie lange dauert es, bis Ergebnisse sichtbar sind?",
        lead:
          "Bei Perplexity oft vier bis acht Wochen, bei ChatGPT und Google AI Overviews drei bis sechs Monate.",
        body: [
          "Perplexity durchsucht das Live-Web und reagiert schnell auf Änderungen. ChatGPT und Google AI Overviews brauchen längere Zyklen, weil sie auf Trainingsdaten und Crawl-Rhythmen aufsetzen. Branche, Wettbewerb und Ausgangslage verschieben den Zeitraum in beide Richtungen.",
          "So sah der Anlauf auf dieser Website aus. Zwei Monate mit einstelligen Werten, dann der Sprung, sobald genug zitierfähige Seiten indexiert waren.",
        ],
        extra: (
          <>
            {CITATION_RAMP}
            <p className="mt-flow text-body text-brand-muted">
              KI-Sichtbarkeit hat einen Compound-Effekt: Wer früh als Quelle etabliert ist,
              wird in späteren Zyklen bestätigt und baut einen Vorsprung auf, der für
              Wettbewerber schwer einholbar ist.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "passung",
    label: "Passung",
    note: "Wann sich der Aufwand lohnt, und wann nicht.",
    items: [
      {
        id: "fuer-jedes-unternehmen",
        q: "Ist KI-Sichtbarkeit für jedes Unternehmen sinnvoll?",
        lead:
          "Nein. Ohne klare Positionierung oder ohne eine Zielgruppe, die KI zur Recherche nutzt, lohnt sie sich nicht.",
        body: [
          "Sinnvoll ist sie für Unternehmen mit klarem Angebot und definierter Zielgruppe: Dienstleister, Berater, Agenturen, SaaS-Anbieter, E-Commerce und spezialisierte lokale Unternehmen.",
          "Am meisten profitieren die Unternehmen, die Kontrolle über ihre Positionierung übernehmen wollen und bereit sind, in Klarheit, Struktur und Autorität zu investieren, statt auf Rankings, Zufall oder Hoffnung zu setzen.",
        ],
      },
      {
        id: "nur-hamburg",
        q: "Arbeitest du nur in Hamburg?",
        lead:
          "Der Fokus liegt auf Hamburg, aber bundesweite und internationale Projekte betreue ich regelmäßig.",
        body: [
          "Hamburg bietet als wirtschaftlich starke Stadt mit vielen spezialisierten Dienstleistern, Agenturen und KMUs gute Voraussetzungen für KI-Sichtbarkeit. Die lokale Nähe erlaubt Arbeit vor Ort, Workshops und eine direktere Zusammenarbeit.",
          "Projekte außerhalb Hamburgs sind möglich, insbesondere wenn das Angebot klar definiert ist und die Zusammenarbeit remote gut funktioniert. Entscheidend ist die fachliche Passung, nicht die Postleitzahl.",
        ],
      },
    ],
  },
];

const ALL_ITEMS = GROUPS.flatMap((g) => g.items);

const TOC: TocGroup[] = GROUPS.map((g, i) => ({
  id: g.id,
  no: i + 1,
  label: g.label,
  count: g.items.length,
}));

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: [item.lead, ...item.body].join(" "),
    },
  })),
};

export default function FAQPage() {
  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <main className="min-h-screen bg-brand-surface">
        {/* Hero. Asymmetric, so the orientation card sits in the gutter and
            costs no vertical height above the first question. */}
        <section className="px-6 md:px-12 lg:px-20 pt-navbar pb-stack">
          <div className="max-w-article mx-auto grid items-start gap-stack lg:grid-cols-12 lg:gap-block">
            <div className="lg:col-span-7">
              <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                13 Fragen, 5 Themen
              </p>
              <h1 className="mt-3 mb-flow text-title md:text-display font-semibold text-brand-text">
                FAQ zur KI-Sichtbarkeit
              </h1>
              <p className="max-w-measure text-lead text-brand-muted">
                Jede Antwort beginnt mit der Antwort. Die Begründung steht darunter, in
                hellerer Schrift, damit du sie überspringen kannst.
              </p>
              <p className="mt-4 max-w-measure text-body text-brand-subtle">
                Es geht um AI SEO, auch GEO oder AEO genannt: Nennungen in ChatGPT,
                Perplexity, Google AI Overviews und Microsoft Copilot.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-card border border-brand-line bg-white px-4 py-6 md:p-6">
                <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                  Antwort nicht dabei?
                </p>
                <p className="mt-4 text-meta text-brand-muted">
                  Im kostenlosen 15-Minuten-Call schauen wir live, ob KI dich heute nennt.
                  Ohne Vorbereitung deinerseits, ohne Verkaufsdruck.
                </p>
                <div className="mt-5 border-t border-brand-hairline pt-5">
                  <Link
                    href="/termin"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-brand-accent-deep px-5 py-3 text-meta font-semibold text-white transition-colors hover:bg-brand-accent-ink"
                  >
                    Kostenlosen Call buchen
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <p className="mt-3 text-center text-micro text-brand-subtle">
                    Lieber schreiben?{" "}
                    <Link
                      href="/contact"
                      className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                    >
                      Kontakt
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Body: sticky theme rail + reading column. Same geometry as the
            long-form guides, so the two indexed pages of the site align. */}
        <section className="px-6 md:px-12 lg:px-20 pb-block">
          <div className="max-w-article mx-auto lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-x-8">
            <div>
              <FaqToc groups={TOC} />
            </div>

            <div className="mt-block lg:mt-0 lg:border-l lg:border-brand-hairline lg:pl-10">
              {GROUPS.map((group, groupIndex) => (
                <section
                  key={group.id}
                  className={groupIndex === 0 ? "" : "mt-block border-t border-brand-line pt-stack"}
                >
                  <h2
                    id={group.id}
                    className="flex scroll-mt-navbar gap-4 text-heading font-semibold text-brand-text"
                  >
                    <span aria-hidden="true" className="shrink-0 tabular-nums text-brand-accent-ink">
                      {groupIndex + 1}.
                    </span>
                    <span>{group.label}</span>
                  </h2>
                  <p className="mt-2 max-w-measure pl-0 text-meta text-brand-subtle sm:pl-10">
                    {group.note}
                  </p>

                  <div className="mt-stack space-y-flow">
                    {group.items.map((item, itemIndex) => (
                      <article
                        key={item.id}
                        id={item.id}
                        className="scroll-mt-navbar border-t border-brand-hairline pt-flow first:border-t-0 first:pt-0"
                      >
                        {/* The number hangs in the gutter from sm up. Below
                            that there is no gutter to hang in, so it becomes a
                            label line above the question and the answer stays
                            flush with it. Indenting a 390px column by 40px to
                            keep the hang would cost a third of the measure. */}
                        <h3 className="text-subheading font-semibold text-brand-text sm:flex sm:gap-4">
                          <span
                            aria-hidden="true"
                            className="block tabular-nums text-micro font-medium text-brand-subtle sm:shrink-0 sm:text-meta sm:leading-7"
                          >
                            {groupIndex + 1}.{itemIndex + 1}
                          </span>
                          <span className="mt-1 block sm:mt-0">{item.q}</span>
                        </h3>

                        <div className="mt-4 max-w-measure sm:pl-10">
                          <p className="text-body font-medium text-brand-text">{item.lead}</p>
                          {item.body.map((paragraph) => (
                            <p key={paragraph.slice(0, 24)} className="mt-4 text-body text-brand-muted">
                              {paragraph}
                            </p>
                          ))}
                          {item.extra}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter. The old version of this block ended in a <button> with
            no handler, so the one call to action on it did nothing. */}
        <section className="border-t border-brand-line bg-brand-bg px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto grid items-start gap-stack lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="text-subheading md:text-heading font-semibold text-brand-text">
                Updates zur KI-Sichtbarkeit.
              </h2>
              <p className="mt-flow max-w-measure text-body text-brand-muted">
                Kurze Einblicke, Beispiele und Beobachtungen dazu, wie KI Unternehmen
                auswählt und nennt. Unregelmäßig, ohne Werbung, doppeltes Opt-in.
              </p>
            </div>
            <div className="lg:col-span-5 lg:pt-2">
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-2 text-meta font-semibold text-brand-accent-ink underline decoration-brand-line underline-offset-4 hover:decoration-brand-accent-ink"
              >
                Updates erhalten
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <p className="mt-3 text-micro text-brand-subtle">
                Oder{" "}
                <Link href="/" className="underline decoration-brand-line underline-offset-4">
                  zur Startseite
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
