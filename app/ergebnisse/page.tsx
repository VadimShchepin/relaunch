import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { DataChart } from "@/components/ui/DataChart";
import { PROOF_ROWS } from "@/components/sections/ProofLedger";

/* ==================================================================== *
 *  /ergebnisse
 *  --------------------------------------------------------------------
 *  The page claims "Ergebnisse, die du selbst nachprüfen kannst" and then
 *  presented its evidence in three forms that cannot be checked at all:
 *
 *  1. Three Bing Webmaster Tools screenshots, 2144 x 1148, rendered into a
 *     320px card in a three-column grid. That is a 0,15 scale: the axis
 *     labels landed at about two pixels and the whole point of the chart
 *     ("starts near zero, then climbs") was invisible. The numbers are now
 *     drawn with the shared DataChart primitive, from the CSV export the
 *     screenshots were taken from, and the screenshot itself stays one
 *     click away for anyone who wants to audit the source.
 *  2. CitationGrowthVisual, an SVG captioned "typischer Verlauf" with six
 *     invented monthly points and 10px text inside a 460-unit viewBox
 *     (about 8px on a phone). Invented data on the proof page. Replaced by
 *     twelve real calendar weeks.
 *  3. The animated <Proof /> band and the HeroDemo widget, both of which drew
 *     a simulated Perplexity answer with hand-written source lists
 *     ("branchenbuch.de", "beauty-hamburg.de", "treatwell.de"). Fabricated
 *     citations, on the page whose first sentence promises the opposite.
 *     The six client claims they carried survive verbatim in a static
 *     ledger, read from the single source in components/sections/
 *     ProofLedger.tsx rather than copied; the fake source lists do not. As a side effect the page lost
 *     a 6.300px pin-spacer that held six headlines, which is why density
 *     went from 94 to over 200 words per 1000px.
 *
 *  Data sources, both first-party and both dated in the captions:
 *   - docs/bing_export_ai_sichtbarkeit_300526/*.csv (daily citations and
 *     per-page citations, export of 30.05.2026)
 *   - the 3-month totals shown in the AI Performance report of the Bing
 *     Webmaster Tools for the three domains (15.03. to 13.06.2026)
 *
 *  Why two different totals for one metric, checked line by line in round 3:
 *   - the daily CSV runs 28.02. to 28.05.2026 and sums to exactly 420, first
 *     citation on 07.03., 382 of the 420 in May alone
 *   - the AI Page Stats CSV of the same export distributes 415 of those 420
 *     over ten pages, 248 on one. It is therefore NOT a 30-day window: the
 *     last 30 days of the daily series only hold 382 citations. Every page
 *     that called the 415 a 30-day figure was corrected.
 *   - the screenshot public/image/proof/citations-aiseo-hamburg.webp shows the
 *     same report two weeks later, 3M selected, Total Citations 800; the July
 *     screenshot aiseo-citations-3m.png shows 919 for the following window.
 *     So 800 is a real reading of a later window, not a rounded-up 420.
 *   Both stands are used with their date, and they are never added together.
 * ==================================================================== */

const HEADLINE_STATS = [
  { value: "800", label: "KI-Zitate in 3 Monaten", note: "aiseo.hamburg, Copilot, 15.03. bis 13.06.2026" },
  { value: "+847 %", label: "KI-Traffic", note: "KinderAlbum, dokumentiert" },
  { value: "+55 %", label: "Klicks in 30 Tagen", note: "Handwerksbetrieb, Search Console" },
];

/* Twelve complete calendar weeks from the daily export. The partial week
   that begins on 25.05. is left out on purpose: plotting four days next to
   eleven full weeks would draw a decline that did not happen. */
const WEEKLY_CITATIONS = [
  { label: "Woche ab 02.03.2026", short: "02.03.", value: 1 },
  { label: "Woche ab 09.03.2026", short: "09.03.", value: 0 },
  { label: "Woche ab 16.03.2026", short: "16.03.", value: 1 },
  { label: "Woche ab 23.03.2026", short: "23.03.", value: 0 },
  { label: "Woche ab 30.03.2026", short: "30.03.", value: 2 },
  { label: "Woche ab 06.04.2026", short: "06.04.", value: 0 },
  { label: "Woche ab 13.04.2026", short: "13.04.", value: 3 },
  { label: "Woche ab 20.04.2026", short: "20.04.", value: 31 },
  { label: "Woche ab 27.04.2026", short: "27.04.", value: 6 },
  { label: "Woche ab 04.05.2026", short: "04.05.", value: 28 },
  { label: "Woche ab 11.05.2026", short: "11.05.", value: 46 },
  { label: "Woche ab 18.05.2026", short: "18.05.", value: 197 },
];

/* Per-page citations from the same export. Page titles instead of URLs,
   because a row label of 60 characters of path is unreadable. */
const PAGE_CITATIONS = [
  { label: "Guide: KI-Sichtbarkeit messen", value: 248 },
  { label: "Pillar: KI-Sichtbarkeit", value: 63 },
  { label: "KI-Sichtbarkeit für E-Commerce", value: 45 },
  { label: "Sichtbarkeit in ChatGPT", value: 17 },
  { label: "Technische KI-Sichtbarkeit", value: 11 },
  { label: "AI-Content-Strategie", value: 10 },
  { label: "KI-Sichtbarkeit für Anwälte", value: 7 },
  { label: "KI-Sichtbarkeit für Ärzte", value: 5 },
  { label: "Startseite", value: 5 },
  { label: "AEO: Answer Engine Optimization", value: 4 },
];

type Project = {
  site: string;
  href: string;
  total: string;
  description: string;
  /** The unscaled report screenshot, linked instead of embedded. */
  report: string;
};

const PROJECTS: Project[] = [
  {
    site: "aiseo.hamburg",
    href: "https://aiseo.hamburg",
    total: "800",
    description:
      "Unsere eigene Website. Aus dem Stand auf 800 Zitate in drei Monaten, mit den stärksten Wochen zuletzt.",
    report: "/image/proof/citations-aiseo-hamburg.webp",
  },
  {
    site: "dsgvoschulfotos.de",
    href: "https://dsgvoschulfotos.de",
    total: "281",
    description:
      "DSGVO-konforme Schulfotografie. Von nahezu null auf 281 Zitate, seit Beginn der Zusammenarbeit klar steigend.",
    report: "/image/proof/citations-dsgvoschulfotos.webp",
  },
  {
    site: "dybeauty.de",
    href: "https://dybeauty.de",
    total: "225",
    description:
      "K-Beauty Online-Shop. 225 Zitate in drei Monaten, ein neuer Kanal, der vorher gar nicht existierte.",
    report: "/image/proof/citations-dybeauty.webp",
  },
];

type CaseStudy = {
  name: string;
  client: string;
  ausgangslage: string;
  getan: string;
  numbers: string[];
  href: string;
  ctaLabel?: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    name: "blitz-hamburg.de",
    client: "Hamburger Handwerksbetrieb",
    ausgangslage:
      "Eine neue Website ohne nennenswerte Sichtbarkeit. Anrufe und Anfragen kamen fast ausschließlich über Empfehlungen, nicht über die Suche.",
    getan:
      "Wir haben Seitenstruktur, lokale Signale und Inhalte für Suche und KI-Antworten aufgebaut und das Conversion-Tracking sauber eingerichtet, damit jede Kontaktaktion messbar wird.",
    numbers: [
      "+55 % Klicks in 30 Tagen (55 Klicks, Google Search Console)",
      "+61 % Impressionen in 30 Tagen (6.660 Impressionen)",
      "20 Anrufe, 9 WhatsApp-Kontakte direkt aus der Suche",
      "14 Klicks auf Google-Bewertungen, 4 abgeschickte Kostenrechner",
    ],
    href: "/wissen/case-study-blitz-hamburg",
  },
  {
    name: "90-Tage-Relaunch",
    client: "Bestandsseite mit technischem Altbestand",
    ausgangslage:
      "Lighthouse-Performance bei 35 von 100, SEO-Score bei 43 von 100. Der Altbestand war technisch so marode, dass ein Relaunch günstiger war als die Reparatur.",
    getan:
      "Wir haben die Seite neu gebaut: schnelle Ladezeiten, saubere Struktur und ein Fundament, das Suchmaschinen und KI-Systeme zuverlässig lesen können.",
    numbers: [
      "Ausgangslage: Lighthouse-Performance 35/100",
      "Ausgangslage: SEO-Score 43/100",
      "Relaunch in 90 Tagen statt teurer Reparatur am Altbestand",
    ],
    href: "/wissen/fallstudie-ki-sichtbarkeit-90-tage",
  },
  {
    name: "Google Ads, zwei Konten im Vergleich",
    client: "Gartenbau und Handwerk, Hamburg",
    ausgangslage:
      "Zwei Kunden, fast identisches Werbebudget, gleicher Zeitraum (6. April bis 3. August 2026). Wir zeigen beide Konten nebeneinander, weil ein einzelner guter Wert für dich nichts aussagt.",
    getan:
      "Kampagnenstruktur, Suchbegriffe und Anzeigentexte auf echte Anfragen ausgerichtet und das Conversion-Tracking so gesetzt, dass jede Anfrage über Formular oder Anruf gezählt wird.",
    numbers: [
      "Konto A: 4.511 € Budget, 603 Anfragen, 7,48 € pro Anfrage",
      "Konto A: 29.226 Impressionen, 2.934 Klicks, 20,6 % Conversion-Rate",
      "Konto B: 4.639 € Budget, 65 Anfragen, 71,37 € pro Anfrage",
      "Konto B: 130.929 Impressionen, 3.177 Klicks, 2,0 % Conversion-Rate",
      "Faktor 9,5 Unterschied bei gleichem Budget, allein durch Branche und Wettbewerb",
    ],
    href: "/termin",
    ctaLabel: "Deine Zahlen im 15-Min-Call einordnen",
  },
  {
    name: "KinderAlbum",
    client: "Digitalprodukt",
    ausgangslage:
      "Klassische Suche brachte stabile, aber begrenzte Reichweite. Über KI-Assistenten war die Marke kaum auffindbar.",
    getan:
      "Wir haben Inhalte so aufbereitet, dass ChatGPT, Perplexity und Co. die Marke als Quelle erkennen und in ihren Antworten nennen.",
    numbers: ["+847 % KI-Traffic, dokumentiert"],
    href: "/wissen/case-study-kinderalbum",
  },
];

const MEASUREMENT = [
  {
    title: "Technische Performance",
    description:
      "Lighthouse und Core Web Vitals zeigen, wie schnell und sauber eine Seite wirklich lädt. Diese Werte kannst du jederzeit selbst nachmessen.",
    points: ["Lighthouse-Scores", "Core Web Vitals", "vorher und nachher"],
  },
  {
    title: "Suchsichtbarkeit",
    description:
      "Google Search Console liefert die harten Zahlen: Klicks, Impressionen und Rankings. Daten aus deinem eigenen Konto, nicht aus unseren Folien.",
    points: ["Klicks und Impressionen", "Ranking-Entwicklung", "echte Kontaktaktionen"],
  },
  {
    title: "KI-Präsenz",
    description:
      "Wir testen mit den gleichen Prompts vor und nach der Arbeit in ChatGPT, Perplexity, Claude und Gemini, ob und wie du genannt wirst.",
    points: ["manuelle Prompt-Tests", "vier KI-Systeme", "Nennungen und Zitate"],
  },
];

/* Answer first, reasoning second, same split as /faq. The JSON-LD below
   joins the two back together, so the structured answer stays complete. */
const FAQS = [
  {
    q: "Sind diese Ergebnisse garantiert?",
    lead: "Nein, und jeder, der das verspricht, sollte dich skeptisch machen.",
    body:
      "Branche, Wettbewerb und Ausgangslage entscheiden mit. Wir senken dein Risiko anders: Der Einstieg ist ein kostenloser 15-Minuten-Call, du siehst vorher, wo du stehst, und erst danach reden wir über Umsetzung. Du gehst keine Verpflichtung ein, bevor klar ist, dass sich die Arbeit lohnt.",
  },
  {
    q: "Kann ich die Zahlen selbst prüfen?",
    lead: "Ja, das ist der Punkt.",
    body:
      "Performance-Scores kannst du mit Lighthouse direkt im Browser nachmessen. Such-Daten liegen in deiner eigenen Google Search Console. Und ob ChatGPT oder Perplexity dich nennen, kannst du in Echtzeit selbst ausprobieren. Wir arbeiten mit Quellen, die du kontrollierst, nicht mit geglätteten Grafiken.",
  },
  {
    q: "Wie lange dauert es bis zu Ergebnissen?",
    lead:
      "In der Suche oft schon in den ersten Wochen, in KI-Antworten meist mehrere Wochen bis Monate.",
    body:
      "Der Handwerksbetrieb hatte +55 % Klicks in 30 Tagen. KI-Präsenz braucht länger, weil Systeme wie ChatGPT in Zyklen lernen. Wir messen laufend, damit du den Fortschritt nicht erraten musst.",
  },
  {
    q: "Bekomme ich Referenzen zum Sprechen?",
    lead: "Ja, im Erstgespräch oder bei konkretem Interesse, sofern die Kunden einverstanden sind.",
    body:
      "Die Case Studies auf dieser Seite zeigen die Zahlen, ein Gespräch mit einem bestehenden Kunden zeigt dir die Zusammenarbeit dahinter.",
  },
  {
    q: "Was kostet die Zusammenarbeit?",
    lead: "Der Einstieg ist ein kostenloser 15-Minuten-Call, danach hängt der Preis von Aufwand und Ausgangslage ab.",
    body:
      "Auf unserer Preisseite siehst du, welche Pakete es für Umsetzung und laufende Betreuung gibt, und nach dem Call nennen wir dir einen festen Preis ohne Überraschungen.",
  },
];

const ITEM_LIST_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Case Studies und Ergebnisse von aiseo.hamburg",
  itemListElement: CASE_STUDIES.map((cs, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: cs.name,
    url: `https://aiseo.hamburg${cs.href}`,
  })),
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: `${faq.lead} ${faq.body}` },
  })),
};

/** Section head: eyebrow in the gutter, heading on the reading column. */
const Head: React.FC<{ no?: string; eyebrow: string; children: React.ReactNode }> = ({
  no,
  eyebrow,
  children,
}) => (
  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
    <p className="flex shrink-0 items-center gap-2 text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle sm:w-[9.5rem]">
      {no ? <span className="tabular-nums text-brand-accent-ink">{no}</span> : null}
      <span>{eyebrow}</span>
    </p>
    <h2 className="text-subheading md:text-heading font-semibold text-brand-text">{children}</h2>
  </div>
);

const RAIL = "sm:pl-[10.5rem]";

export default function ErgebnissePage() {
  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />

      <main className="min-h-screen bg-brand-surface">
        {/* Hero. The three headline numbers move into the gutter card, so
            they are on screen with the H1 instead of a scroll below it. */}
        <section className="px-6 pt-navbar pb-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto grid items-start gap-stack lg:grid-cols-12 lg:gap-block">
            <FadeIn className="lg:col-span-7">
              <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                Ergebnisse
              </p>
              <h1 className="mt-3 text-title md:text-display font-semibold text-brand-text">
                Ergebnisse, die du selbst nachprüfen kannst
              </h1>
              <p className="mt-flow max-w-measure text-lead text-brand-muted">
                Echte Ergebnisse aus unserer Arbeit an SEO und Generative Engine
                Optimization (GEO). Keine geglätteten Vanity-Grafiken: jede Zahl auf
                dieser Seite stammt aus einer Quelle, die du selbst öffnen, nachmessen
                oder in Echtzeit testen kannst.
              </p>
              <p className="mt-4 max-w-measure text-body text-brand-subtle">
                Jede Grafik nennt Werkzeug, Zeitraum und Exportdatum. Wo eine Zahl aus
                einem Kundenkonto stammt, steht das dabei.
              </p>
            </FadeIn>

            <FadeIn delay={120} className="lg:col-span-5">
              <div className="rounded-card border border-brand-line bg-white px-4 py-6 md:p-6">
                <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                  Auf einen Blick
                </p>
                <dl className="mt-4">
                  {HEADLINE_STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-baseline justify-between gap-4 border-t border-brand-hairline py-3"
                    >
                      <dt>
                        <span className="block text-meta font-medium text-brand-text">
                          {stat.label}
                        </span>
                        <span className="block text-micro text-brand-subtle">{stat.note}</span>
                      </dt>
                      <dd className="shrink-0 text-subheading font-semibold tabular-nums text-brand-text">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 flex flex-col gap-3 border-t border-brand-hairline pt-5 sm:flex-row">
                  <Link
                    href="/termin"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-brand-accent-deep px-5 py-3 text-meta font-semibold text-white transition-colors hover:bg-brand-accent-ink"
                  >
                    Kostenlosen Call buchen
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-brand-line px-5 py-3 text-meta font-semibold text-brand-text transition-colors hover:border-brand-edge"
                  >
                    Lieber schreiben
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 01 Context */}
        <section className="border-t border-brand-line bg-brand-bg px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="01" eyebrow="Kontext">
                Warum die meisten Agentur-Zahlen wertlos sind
              </Head>
              <div className={`mt-flow max-w-measure ${RAIL}`}>
                <p className="text-body font-medium text-brand-text">
                  Eine Steigerung um 600 Prozent klingt beeindruckend, bis du fragst, was
                  der Ausgangswert war. Von drei Besuchern auf einundzwanzig ist auch eine
                  Versechsfachung.
                </p>
                <p className="mt-4 text-body text-brand-muted">
                  Unsere Zahlen sind nachprüfbar. Performance-Scores kannst du selbst
                  testen. Daten aus der Google Search Console liegen in deinem eigenen
                  Konto und lügen nicht. Und ob ChatGPT dich nennt, kannst du in dem
                  Moment verifizieren, in dem du die Frage stellst.
                </p>
                <p className="mt-4 text-body text-brand-muted">
                  Deshalb steht auf dieser Seite kein Screenshot eines Dashboards als
                  Beweis. Screenshots sind bei uns die Quelle hinter der Grafik, verlinkt
                  statt eingeklebt: lieber ehrliche, kleinere Zahlen aus echten Quellen
                  als große Zahlen, die niemand kontrollieren kann.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 02 Citations */}
        <section className="border-t border-brand-line px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="02" eyebrow="Daten">
                KI-Zitate: gemessen, nicht behauptet
              </Head>
              <div className={`mt-flow max-w-measure ${RAIL}`}>
                <p className="text-body font-medium text-brand-text">
                  Jedes Mal, wenn Microsoft Copilot eine dieser Seiten als Quelle nennt,
                  zählt es als Zitat.
                </p>
                <p className="mt-4 text-body text-brand-muted">
                  Die Werte stammen aus dem AI-Performance-Bericht der Bing Webmaster
                  Tools (Quelle: Microsoft Copilots and Partners). Auf allen drei
                  Projekten startet die Kurve nahe null und steigt nach Beginn unserer
                  Arbeit deutlich an. Das ist kein langsamer SEO-Effekt über Jahre, sondern
                  ein Kanal, der innerhalb von Wochen entsteht.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={80}>
              <div className={RAIL}>
                <DataChart
                  variant="area"
                  title="Wöchentliche KI-Zitate, aiseo.hamburg"
                  subject="12 Kalenderwochen"
                  axis={{ title: "Zitate pro Woche" }}
                  highlight="peak"
                  points={WEEKLY_CITATIONS}
                  labelEvery={2}
                  stats={[
                    { label: "Erstes Zitat", value: "7. März 2026" },
                    { label: "Stärkste Woche", value: "197 Zitate ab 18.05." },
                    { label: "Summe im Export", value: "420 Zitate" },
                  ]}
                  table={{ label: "Alle 12 Wochen als Tabelle", heads: ["Kalenderwoche", "Zitate"] }}
                  caption="Tageswerte aus dem AI-Performance-Bericht der Bing Webmaster Tools, Export vom 30.05.2026, zu Wochen summiert. Die zwölf gezeigten Wochen tragen 315 der 420 Zitate; die angebrochene Woche ab 25.05. mit den restlichen 105 ist nicht abgebildet, weil vier Tage neben elf vollen Wochen einen Rückgang zeichnen würden, den es nicht gab."
                />
              </div>
            </FadeIn>

            {/* The three projects, with the report screenshot linked rather
                than embedded at a 0,15 scale. */}
            <FadeIn delay={120}>
              <div className={`mt-block ${RAIL}`}>
                <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                  Drei Projekte, gleicher Bericht, Zeitraum 15.03. bis 13.06.2026
                </p>
                <p className="mt-2 max-w-measure text-meta text-brand-muted">
                  Dieselbe Kennzahl, zwei Stände: Das Diagramm oben ist der Tagesexport
                  vom 30.05.2026 und endet am 28.05. bei 420 Zitaten. Die Berichte hier
                  reichen zwei Wochen weiter, bis 13.06., und stehen für aiseo.hamburg bei
                  800. Wir rechnen die beiden nicht zusammen.
                </p>
                <dl className="mt-4 border-t border-brand-line">
                  {PROJECTS.map((project) => (
                    <div
                      key={project.site}
                      className="grid items-baseline gap-x-6 border-b border-brand-hairline py-4 sm:grid-cols-[5.5rem_minmax(0,1fr)]"
                    >
                      <dt className="text-heading font-semibold tabular-nums text-brand-text">
                        {project.total}
                      </dt>
                      <dd>
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-body font-semibold text-brand-text underline decoration-brand-line underline-offset-4 hover:text-brand-accent-ink"
                        >
                          {project.site}
                        </a>
                        <p className="mt-1 text-meta text-brand-muted">{project.description}</p>
                        <p className="mt-1 text-micro text-brand-subtle">
                          <a
                            href={project.report}
                            className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                          >
                            Bericht als Screenshot ansehen
                          </a>{" "}
                          (unskaliert, zum Nachprüfen)
                        </p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </FadeIn>

            <FadeIn delay={160}>
              <div className={`mt-block ${RAIL}`}>
                <DataChart
                  variant="row"
                  title="Welche Seiten zitiert werden"
                  subject="aiseo.hamburg"
                  axis={{ title: "Zitate" }}
                  highlight="peak"
                  points={PAGE_CITATIONS}
                  table={{ label: "Seiten als Tabelle", heads: ["Seite", "Zitate"], sum: ["Top 10", "415"] }}
                  caption="Zehn Seiten tragen 415 der 420 Zitate. Quelle: AI-Page-Stats-Bericht der Bing Webmaster Tools, Export vom 30.05.2026."
                />
                <p className="mt-flow max-w-measure text-body text-brand-muted">
                  Eine einzige Seite trägt 248 der 415 Zitate. Genau diese Methode, die
                  hinter ihr steckt, wenden wir auf Kundenprojekte an, und sie steht offen
                  im{" "}
                  <Link
                    href="/wissen/ki-sichtbarkeit-messen"
                    className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                  >
                    Guide zur Messung von KI-Sichtbarkeit
                  </Link>
                  .
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 03 Case studies */}
        <section className="border-t border-brand-line bg-brand-bg px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="03" eyebrow="Fallstudien">
                Case Studies
              </Head>
              <p className={`mt-flow max-w-measure text-body text-brand-muted ${RAIL}`}>
                Vier Projekte, vier Ausgangslagen, vier nachprüfbare Ergebnisse. Jede
                Fallstudie liegt in voller Länge im Wissen-Bereich.
              </p>
            </FadeIn>

            <div className="mt-flow border-t border-brand-line">
              {CASE_STUDIES.map((cs, i) => (
                <FadeIn key={cs.name} delay={i * 60}>
                  <article className="border-b border-brand-hairline py-stack">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                      <p className="shrink-0 text-micro font-semibold tabular-nums uppercase tracking-eyebrow text-brand-subtle sm:w-[9.5rem]">
                        Fall {i + 1} von 4
                      </p>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-subheading font-semibold text-brand-text">
                          {cs.name}
                        </h3>
                        <p className="text-meta text-brand-subtle">{cs.client}</p>
                      </div>
                    </div>

                    <div
                      className={`mt-flow grid gap-x-block gap-y-flow lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] ${RAIL}`}
                    >
                      <div>
                        <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                          Ausgangslage
                        </p>
                        <p className="mt-1.5 text-meta text-brand-muted">{cs.ausgangslage}</p>
                        <p className="mt-flow text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                          Was wir getan haben
                        </p>
                        <p className="mt-1.5 text-meta text-brand-muted">{cs.getan}</p>
                      </div>

                      <div>
                        <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                          Die Zahlen
                        </p>
                        <ul className="mt-1.5 border-t border-brand-hairline">
                          {cs.numbers.map((n) => (
                            <li
                              key={n}
                              className="border-b border-brand-hairline py-1.5 text-meta text-brand-text"
                            >
                              {n}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={cs.href}
                          className="mt-3 inline-flex items-center gap-1.5 text-meta font-semibold text-brand-accent-ink hover:gap-2.5"
                        >
                          {cs.ctaLabel ?? "Vollständige Fallstudie lesen"}
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 04 Observed mentions. Replaces the 6.300px animated band. */}
        <section className="border-t border-brand-line px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="04" eyebrow="Nennungen">
                Was KI-Systeme über unsere Projekte sagen
              </Head>
              <p className={`mt-flow max-w-measure text-body text-brand-muted ${RAIL}`}>
                Beobachtete Nennungen aus manuellen Prompt-Tests. Die Formulierung der KI
                ändert sich mit jeder Abfrage, die Nennung selbst ist reproduzierbar: gib
                den Prompt ein und sieh nach.
              </p>
            </FadeIn>

            <div className="mt-flow border-t border-brand-line">
              {PROOF_ROWS.map((row, i) => (
                <FadeIn key={row.client} delay={i * 40}>
                  <article className="grid gap-x-4 gap-y-2 border-b border-brand-hairline py-4 sm:grid-cols-[9.5rem_minmax(0,1fr)]">
                    <div className="shrink-0">
                      <p className="text-meta font-semibold text-brand-text">{row.client}</p>
                      <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">
                        {row.platform}
                      </p>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-body font-medium text-brand-text">{row.result}</h3>
                      <p className="mt-1 text-meta text-brand-muted">Prompt: {row.prompt}</p>
                      <p className="mt-1 text-micro text-brand-subtle">{row.relevance}</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 05 Method */}
        <section className="border-t border-brand-line bg-brand-bg px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="05" eyebrow="Methode">
                Wie wir messen
              </Head>
              <p className={`mt-flow max-w-measure text-body text-brand-muted ${RAIL}`}>
                Für Generative Engine Optimization (GEO) reicht ein Ranking-Report nicht.
                Wir arbeiten auf drei Ebenen, und auf jeder kommen Werkzeuge zum Einsatz,
                deren Ergebnisse du selbst kontrollieren kannst.
              </p>
            </FadeIn>

            <div className="mt-flow border-t border-brand-line">
              {MEASUREMENT.map((m, i) => (
                <FadeIn key={m.title} delay={i * 60}>
                  <div className="grid gap-x-4 gap-y-2 border-b border-brand-hairline py-4 sm:grid-cols-[9.5rem_minmax(0,1fr)]">
                    <h3 className="text-meta font-semibold text-brand-text">
                      <span aria-hidden="true" className="tabular-nums text-brand-subtle">
                        05.{i + 1}{" "}
                      </span>
                      {m.title}
                    </h3>
                    <div className="min-w-0">
                      <p className="max-w-measure text-meta text-brand-muted">{m.description}</p>
                      <p className="mt-1 text-micro text-brand-subtle">
                        {m.points.join(" · ")}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={200}>
              <p className={`mt-flow max-w-measure text-body text-brand-muted ${RAIL}`}>
                Die gleichen Prompts vor und nach der Arbeit zeigen schwarz auf weiß, was
                sich in den KI-Antworten verändert hat. Wie das im Detail funktioniert,
                beschreiben wir im Guide{" "}
                <Link
                  href="/wissen/ki-sichtbarkeit-messen"
                  className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                >
                  KI-Sichtbarkeit messen
                </Link>
                . Genau dieser Inhalt ist der meistzitierte unserer Website in den
                KI-Antworten von Bing und Copilot.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Author */}
        <section className="border-t border-brand-line px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <div className="grid items-start gap-stack sm:grid-cols-[10rem_minmax(0,1fr)] lg:gap-block">
                <div>
                  {/* 640 x 800 WebP at a 160px display width, 36 kB. Was the
                      1920 x 2560 JPEG (337 kB) squeezed into 128px. */}
                  <img
                    src="/image/agentur/vadim-shchepin-640.webp"
                    width={640}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    alt="Vadim Shchepin, Berater für KI-Sichtbarkeit aus Hamburg"
                    className="w-40 rounded-card border border-brand-line object-cover"
                  />
                  <p className="mt-2 w-40 text-micro text-brand-subtle">
                    <a
                      href="/vadim_shchepin_2.jpeg"
                      className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                    >
                      Pressefoto
                    </a>{" "}
                    (JPEG, 1920 x 2560)
                  </p>
                </div>
                <div>
                  <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                    Verantwortlich für diese Zahlen
                  </p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-brand-text">
                    Vadim Shchepin
                  </h2>
                  <p className="mt-1 text-meta font-medium text-brand-accent-ink">
                    Senior Engineer und Berater für KI-Sichtbarkeit, Hamburg
                  </p>
                  <p className="mt-flow max-w-measure text-body text-brand-muted">
                    Ich arbeite an deinen Daten, bis die Zahlen stimmen, und ich nenne dir
                    nur Werte, die du selbst überprüfen kannst. Jeder Export auf dieser
                    Seite liegt bei mir mit Datum vor und lässt sich im Call gemeinsam
                    öffnen.
                  </p>
                  <div className="mt-flow flex flex-wrap items-center gap-x-stack gap-y-2 border-t border-brand-line pt-3 text-meta">
                    <Link
                      href="/ueber-mich"
                      className="inline-flex items-center gap-1.5 font-medium text-brand-accent-ink hover:gap-2.5"
                    >
                      Mehr über mich
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                    <a
                      href="https://www.linkedin.com/in/vadim-shchepin/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-brand-muted underline decoration-brand-line underline-offset-4 hover:text-brand-text"
                    >
                      LinkedIn
                    </a>
                    <Link
                      href="/pressekit"
                      className="font-medium text-brand-muted underline decoration-brand-line underline-offset-4 hover:text-brand-text"
                    >
                      Pressekit
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-brand-line bg-brand-bg px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head eyebrow="Fragen">Häufige Fragen zu unseren Ergebnissen</Head>
            </FadeIn>
            {/* On the rail like every other body block: without this the five
                questions started at the eyebrow's x, not the heading's. */}
            <div className={`mt-flow border-t border-brand-line ${RAIL}`}>
              {FAQS.map((item, i) => (
                <FadeIn key={item.q} delay={i * 40}>
                  <article className="border-b border-brand-hairline py-4">
                    <h3 className="text-body font-semibold text-brand-text">{item.q}</h3>
                    <div className="mt-2 max-w-measure">
                      <p className="text-body font-medium text-brand-text">{item.lead}</p>
                      <p className="mt-1.5 text-body text-brand-muted">{item.body}</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA plus the sibling links, in one band instead of two. */}
        <section className="border-t border-brand-line px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <div className="grid items-end gap-stack lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <h2 className="text-subheading md:text-heading font-semibold text-brand-text">
                    Sieh dir deine eigenen Zahlen an
                  </h2>
                  <p className="mt-flow max-w-measure text-body text-brand-muted">
                    In 15 kostenlosen Minuten prüfen wir live, wo du heute in Suche und
                    KI-Antworten stehst. Danach entscheidest du in Ruhe.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
                  <Link
                    href="/termin"
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-accent-deep px-6 py-3 text-meta font-semibold text-white transition-colors hover:bg-brand-accent-ink"
                  >
                    Kostenlosen 15-Min-Call buchen
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-line px-6 py-3 text-meta font-semibold text-brand-text transition-colors hover:border-brand-edge"
                  >
                    Lieber schreiben
                  </Link>
                </div>
              </div>

              <div className="mt-stack flex flex-wrap gap-x-stack gap-y-2 border-t border-brand-line pt-4 text-meta">
                <Link href="/preise" className="text-brand-muted hover:text-brand-text">
                  Preise und Pakete
                </Link>
                <Link href="/ai-seo-agentur" className="text-brand-muted hover:text-brand-text">
                  AI SEO Agentur
                </Link>
                <Link href="/ueber-mich" className="text-brand-muted hover:text-brand-text">
                  Über mich
                </Link>
                <Link href="/wissen" className="text-brand-muted hover:text-brand-text">
                  Alle Guides
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
