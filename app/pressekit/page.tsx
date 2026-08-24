import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { DataChart } from "@/components/ui/DataChart";

/* ==================================================================== *
 *  /pressekit
 *  --------------------------------------------------------------------
 *  A press kit is a reference document, so it is built like one: one rail
 *  x for the whole page, an eyebrow per section, and every block short
 *  enough to be copied into a piece without editing.
 *
 *  What the old version was missing, and what a desk actually asks for:
 *   - a date. Nothing on the page said when any of it was true.
 *   - a portrait. The press kit was the one page without one, while the
 *     press photo it should be handing out sat unlinked in public/.
 *   - a number. "Mehrere seiner eigenen Plattformen werden nachweislich
 *     von KI-Systemen als Quelle genannt" is a claim no editor can print.
 *     It is now the three domains with their citation counts, the report
 *     they come from, and the period, drawn with the shared DataChart.
 *   - the wordmark's colour values, which is the first thing a layouter
 *     needs and the one thing only we can supply.
 *
 *  The three-domain totals are charted here and nowhere else on the site:
 *  /ergebnisse plots the weekly curve and the per-page split instead, so
 *  no dataset is drawn twice.
 * ==================================================================== */

const STAND = "August 2026";

const LOGO_COLOURS = [
  { name: "Schwarz", hex: "#111111", use: "Wortmarke", swatch: "bg-brand-text" },
  { name: "Grün", hex: "#4FAF8C", use: "Punkt", swatch: "bg-brand-accent" },
  { name: "Creme", hex: "#FBF9F7", use: "Hintergrund", swatch: "bg-brand-bg" },
];

const LEISTUNGEN = [
  "Analyse, wie KI-Systeme ein Unternehmen aktuell beschreiben",
  "Strukturierung von Websites, Inhalten und Entitäten",
  "Aufbau klarer Angebots- und Themenautorität",
  "Technische und inhaltliche Anpassungen für KI-Lesbarkeit",
  "Messung von Nennungen, Zitierungen und KI-basierter Sichtbarkeit",
];

const ABGRENZUNG = [
  "Fokus auf Nennungen statt Rankings",
  "Keine Templates, keine Massenbetreuung",
  "Keine Garantien, sondern überprüfbare Ergebnisse",
  "Arbeit an Struktur und Verständlichkeit, nicht an Schlagwörtern",
];

const EINSATZBEREICHE = [
  "Lokale und regionale Unternehmen",
  "B2B-Angebote mit erklärungsbedürftigen Leistungen",
  "Produkte und Services, bei denen Vertrauen entscheidend ist",
  "Unternehmen, die Kontrolle über ihre Darstellung in KI-Antworten wollen",
];

const HINWEISE = [
  "Alle Aussagen basieren auf praktischer Umsetzung und eigenen Projekten",
  "Keine bezahlten Rankings oder Sponsoring-Modelle",
  "Zahlen und Beispiele können auf Anfrage belegt werden",
  "Zitate dürfen gekürzt werden, sofern der Sinn erhalten bleibt",
];

const KONTAKT = [
  { k: "E-Mail", v: "hello@aiseo.hamburg", href: "mailto:hello@aiseo.hamburg" },
  { k: "Website", v: "aiseo.hamburg", href: "https://aiseo.hamburg" },
  { k: "Standort", v: "Hamburg, Deutschland" },
  { k: "Rechtliches", v: "Impressum", href: "/impressum" },
];

const RAIL = "sm:pl-[10.5rem]";

/** Eyebrow in the rail, heading on the reading column. One x, all page. */
const Head: React.FC<{ no: string; eyebrow: string; children: React.ReactNode }> = ({
  no,
  eyebrow,
  children,
}) => (
  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
    <p className="flex shrink-0 items-center gap-2 text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle sm:w-[9.5rem]">
      <span className="tabular-nums text-brand-accent-ink">{no}</span>
      <span>{eyebrow}</span>
    </p>
    <h2 className="text-subheading md:text-heading font-semibold text-brand-text">{children}</h2>
  </div>
);

/** Bullet list without the literal middle dots the old page typed by hand. */
const Bullets: React.FC<{ items: string[] }> = ({ items }) => (
  /* Two columns from md up. A four-item reference list stacked in one
     column costs 180px of page for 20 words; side by side it costs 90px
     and still fits the longest item (70 characters) on two lines in a
     352px column. */
  <ul className="mt-flow max-w-measure border-t border-brand-line md:grid md:grid-cols-2 md:gap-x-block">
    {items.map((item) => (
      <li
        key={item}
        className="border-b border-brand-hairline py-2 text-meta text-brand-muted"
      >
        {item}
      </li>
    ))}
  </ul>
);

export default function PressekitPage() {
  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="min-h-screen bg-brand-surface">
        {/* Hero */}
        <section className="px-6 pt-navbar pb-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto grid items-start gap-stack lg:grid-cols-12 lg:gap-block">
            <FadeIn className="lg:col-span-7">
              <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                Für Presse und Redaktionen
              </p>
              <h1 className="mt-3 text-title md:text-display font-semibold text-brand-text">
                Pressekit
              </h1>
              <p className="mt-flow max-w-measure text-lead text-brand-muted">
                Ich helfe Hamburger Unternehmen, von KI empfohlen zu werden, nicht nur
                gefunden. Alles auf dieser Seite darf ohne Rückfrage zitiert werden.
              </p>
              <p className="mt-4 max-w-measure text-body text-brand-subtle">
                Stand: {STAND}. Wenn du eine Zahl oder ein Zitat brauchst, das hier nicht
                steht, schreib mir, ich liefere den Beleg dazu.
              </p>
            </FadeIn>

            <FadeIn delay={120} className="lg:col-span-5">
              <div className="rounded-card border border-brand-line bg-white px-4 py-6 md:p-6">
                <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                  Medienkontakt
                </p>
                <dl className="mt-4">
                  {KONTAKT.map((row) => (
                    <div
                      key={row.k}
                      className="flex items-baseline justify-between gap-4 border-t border-brand-hairline py-2.5"
                    >
                      <dt className="text-micro uppercase tracking-eyebrow text-brand-subtle">
                        {row.k}
                      </dt>
                      <dd className="text-meta font-medium text-brand-text">
                        {row.href ? (
                          <a
                            href={row.href}
                            className="text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                          >
                            {row.v}
                          </a>
                        ) : (
                          row.v
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 border-t border-brand-hairline pt-4 text-micro text-brand-subtle">
                  Interviews, Hintergrundgespräche und Fachstatements auf Anfrage.
                  Antwort in der Regel am selben Werktag.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 01 Kurzprofil */}
        <section className="border-t border-brand-line bg-brand-bg px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="01" eyebrow="Boilerplate">
                Kurzprofil
              </Head>
              <div className={`mt-flow max-w-measure ${RAIL}`}>
                <p className="text-body font-medium text-brand-text">
                  aiseo.hamburg ist ein unabhängiger Beratungs- und Umsetzungsservice für
                  KI-Sichtbarkeit (AI SEO, GEO, AEO). Der Fokus liegt darauf, Unternehmen
                  so zu positionieren, dass sie von KI-Systemen wie ChatGPT, Perplexity und
                  Google AI Overviews verstanden, korrekt eingeordnet und als Quelle
                  genannt werden.
                </p>
                <p className="mt-4 text-body text-brand-muted">
                  Der Sitz ist Hamburg, die Arbeit richtet sich primär an den
                  deutschsprachigen Markt. Gegründet und geführt von Vadim Shchepin.
                </p>
                <p className="mt-4 text-micro text-brand-subtle">
                  Die beiden Absätze oben sind als Boilerplate freigegeben und können
                  unverändert übernommen werden.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 02 Logo */}
        <section className="border-t border-brand-line px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="02" eyebrow="Wortmarke">
                Logo
              </Head>
            </FadeIn>

            <FadeIn delay={60}>
              <div className={`mt-flow grid gap-4 md:grid-cols-2 ${RAIL}`}>
                <figure className="rounded-card border border-brand-line bg-white px-6 py-10 text-center">
                  <div className="text-5xl font-bold uppercase leading-none tracking-tighter text-brand-text md:text-6xl">
                    aiseo<span className="text-brand-accent">.</span>
                  </div>
                  <figcaption className="mt-4 text-micro text-brand-subtle">
                    Version 1, kurz. Für Favicons, Avatare und enge Platzierungen.
                  </figcaption>
                </figure>
                <figure className="rounded-card border border-brand-line bg-white px-6 py-10 text-center">
                  <div className="text-3xl font-bold uppercase leading-none tracking-tighter text-brand-text md:text-4xl">
                    aiseo<span className="text-brand-accent">.</span>hamburg
                  </div>
                  <figcaption className="mt-4 text-micro text-brand-subtle">
                    Version 2, vollständig. Die Vorgabe für Fließtext und Bildunterschriften.
                  </figcaption>
                </figure>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className={`mt-flow ${RAIL}`}>
                <dl className="grid max-w-measure gap-x-6 border-t border-brand-line sm:grid-cols-3">
                  {LOGO_COLOURS.map((colour) => (
                    <div key={colour.hex} className="border-b border-brand-hairline py-3">
                      <dt className="flex items-center gap-2 text-meta font-medium text-brand-text">
                        <span
                          aria-hidden="true"
                          className={`h-3.5 w-3.5 rounded-full border border-brand-edge ${colour.swatch}`}
                        />
                        {colour.name}
                      </dt>
                      <dd className="mt-1 pl-5.5 text-micro tabular-nums text-brand-subtle">
                        {colour.hex}, {colour.use}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 max-w-measure text-micro text-brand-subtle">
                  Die Wortmarke wird klein geschrieben, der Punkt bleibt grün. Bitte nicht
                  dehnen, nicht umfärben und nicht auf unruhigen Fotos platzieren. Als
                  Schutzraum genügt die Höhe eines Kleinbuchstabens.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 03 Kontext */}
        <section className="border-t border-brand-line bg-brand-bg px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="03" eyebrow="Marktlage">
                Hintergrund &amp; Kontext
              </Head>
              <div className={`mt-flow max-w-measure ${RAIL}`}>
                <p className="text-body font-medium text-brand-text">
                  KI-Systeme ersetzen zunehmend klassische Suchergebnisse durch kuratierte
                  Antworten. Statt Rankings entscheiden heute wenige, strukturierte Quellen
                  darüber, welche Unternehmen empfohlen werden.
                </p>
                <p className="mt-4 text-body text-brand-muted">
                  aiseo.hamburg adressiert genau diese Verschiebung: nicht Optimierung für
                  Klicks, sondern Optimierung für die Auswahl durch KI-Systeme. Laut
                  Gartner verlieren Marken bis 2028 über 50 % ihres organischen Traffics an
                  KI-gestützte Suche. Die Princeton-Studie zu GEO (arXiv 2311.09735, KDD 2024)
                  zeigt zugleich, dass aufbereitete Inhalte bis zu 40 % mehr Sichtbarkeit in
                  generativen Antworten erreichen, am stärksten durch Zitate, Statistiken und
                  klare Quellenangaben.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 04 Zahlen */}
        <section className="border-t border-brand-line px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="04" eyebrow="Belegbar">
                Zahlen für Redaktionen
              </Head>
              <p className={`mt-flow max-w-measure text-body text-brand-muted ${RAIL}`}>
                Drei Domains, derselbe Bericht, derselbe Zeitraum. Ein Zitat bedeutet: ein
                Microsoft Copilot hat die Seite in einer Antwort als Quelle genannt. Der
                Bericht liegt als Export vor und kann auf Anfrage eingesehen werden.
              </p>
            </FadeIn>
            <FadeIn delay={80}>
              <div className={RAIL}>
                <DataChart
                  variant="column"
                  title="KI-Zitate in drei Monaten, drei Domains"
                  subject="15.03. bis 13.06.2026"
                  axis={{ title: "Zitate" }}
                  highlight="peak"
                  points={[
                    { label: "aiseo.hamburg", short: "aiseo", value: 800, note: "eigene Seite" },
                    { label: "dsgvoschulfotos.de", short: "dsgvo", value: 281, note: "Kunde" },
                    { label: "dybeauty.de", short: "dybeauty", value: 225, note: "Kunde" },
                  ]}
                  stats={[
                    { label: "Quelle", value: "Bing Webmaster Tools" },
                    { label: "Bericht", value: "AI Performance" },
                    { label: "Zitatgeber", value: "Microsoft Copilots and Partners" },
                  ]}
                  table={{ label: "Zahlen als Tabelle", heads: ["Domain", "Zitate"], sum: ["Summe", "1.306"] }}
                  caption="Alle drei Domains starteten den Zeitraum nahe null."
                />
                <p className="mt-flow max-w-measure text-meta text-brand-subtle">
                  Weitere belegte Zahlen, inklusive Wochenverlauf und der Verteilung auf
                  einzelne Seiten, stehen auf{" "}
                  <Link
                    href="/ergebnisse"
                    className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                  >
                    Ergebnisse
                  </Link>
                  .
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 05 Leistungen */}
        <section className="border-t border-brand-line bg-brand-bg px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="05" eyebrow="Angebot">
                Leistungen
              </Head>
              <div className={RAIL}>
                <p className="mt-flow max-w-measure text-body text-brand-muted">
                  aiseo.hamburg bietet keine klassischen SEO-Pakete und keine
                  Prompt-Optimierung an. Die Arbeit umfasst:
                </p>
                <Bullets items={LEISTUNGEN} />
                <p className="mt-flow max-w-measure text-body text-brand-muted">
                  Ziel ist, dass KI-Systeme Unternehmen präzise, konsistent und kontextuell
                  korrekt darstellen. Der Leistungsumfang steht öffentlich unter{" "}
                  <Link
                    href="/leistungen"
                    className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                  >
                    Leistungen
                  </Link>{" "}
                  und{" "}
                  <Link
                    href="/preise"
                    className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                  >
                    Preise
                  </Link>
                  .
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 06 Gründer */}
        <section className="border-t border-brand-line px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="06" eyebrow="Person">
                Gründer
              </Head>
            </FadeIn>
            <FadeIn delay={60}>
              <div className={`mt-flow grid gap-stack sm:grid-cols-[10rem_minmax(0,1fr)] ${RAIL}`}>
                <div>
                  {/* 640 x 800 WebP at 160px display, 36 kB. The 337 kB JPEG
                      stays linked below as the press photo. */}
                  <img
                    src="/image/agentur/vadim-shchepin-640.webp"
                    width={640}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    alt="Vadim Shchepin, Gründer von aiseo.hamburg"
                    className="w-40 rounded-card border border-brand-line object-cover"
                  />
                  <p className="mt-2 w-40 text-micro text-brand-subtle">
                    <a
                      href="/vadim_shchepin_2.jpeg"
                      className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                    >
                      Pressefoto laden
                    </a>{" "}
                    (JPEG, 1920 x 2560, honorarfrei bei Nennung)
                  </p>
                </div>
                <div className="max-w-measure">
                  <p className="text-body font-semibold text-brand-text">Vadim Shchepin</p>
                  <p className="mt-0.5 text-meta text-brand-subtle">
                    Software Engineer und Berater für KI-Sichtbarkeit, Hamburg
                  </p>
                  <p className="mt-flow text-body text-brand-muted">
                    Vadim Shchepin arbeitet seit über zehn Jahren in der Software- und
                    Webentwicklung. Er kombiniert technische Architektur, strukturierte
                    Inhalte und praktische Tests an eigenen Projekten.
                  </p>
                  <p className="mt-4 text-body text-brand-muted">
                    Mehrere seiner eigenen Plattformen werden von KI-Systemen als Quelle
                    genannt. Die Zahlen dazu stehen in Abschnitt 04 dieser Seite, die
                    ausführliche Version unter{" "}
                    <Link
                      href="/ueber-mich"
                      className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                    >
                      Über mich
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 07 Abgrenzung */}
        <section className="border-t border-brand-line bg-brand-bg px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="07" eyebrow="Einordnung">
                Abgrenzung
              </Head>
              <div className={RAIL}>
                <p className="mt-flow max-w-measure text-body font-medium text-brand-text">
                  aiseo.hamburg ist keine klassische SEO-Agentur. Die Unterschiede:
                </p>
                <Bullets items={ABGRENZUNG} />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 08 Einsatzbereiche */}
        <section className="border-t border-brand-line px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="08" eyebrow="Zielgruppe">
                Typische Einsatzbereiche
              </Head>
              <div className={RAIL}>
                <Bullets items={EINSATZBEREICHE} />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 09 Begriffsdefinition, the block that exists to be quoted */}
        <section className="border-t border-brand-line bg-brand-bg px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="09" eyebrow="Zitierfähig">
                Begriffsdefinition
              </Head>
              <div className={`mt-flow ${RAIL}`}>
                <div className="max-w-measure rounded-card border border-brand-line bg-white p-5 md:p-6">
                  <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                    Was ist AI SEO / GEO?
                  </p>
                  <p className="mt-3 text-body text-brand-text">
                    AI SEO (auch GEO oder AEO) bezeichnet die Optimierung von Websites und
                    Inhalten mit dem Ziel, von KI-Systemen wie ChatGPT, Perplexity oder
                    Google AI Overviews verstanden, korrekt eingeordnet und als Quelle
                    genannt zu werden.
                  </p>
                  <p className="mt-3 text-micro text-brand-subtle">
                    Freigegeben zur wörtlichen Übernahme. Quellenangabe: aiseo.hamburg.
                    Ausführlich im{" "}
                    <Link
                      href="/wissen/was-ist-geo"
                      className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                    >
                      Guide zu GEO
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 10 Medienkontakt */}
        <section className="border-t border-brand-line px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="10" eyebrow="Anfragen">
                Medienkontakt
              </Head>
              <div className={`mt-flow max-w-measure ${RAIL}`}>
                <p className="text-body text-brand-muted">
                  Schreib direkt an{" "}
                  <a
                    href="mailto:hello@aiseo.hamburg"
                    className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                  >
                    hello@aiseo.hamburg
                  </a>
                  . Für ein Gespräch mit Termin geht es über{" "}
                  <Link
                    href="/termin"
                    className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                  >
                    Termin
                  </Link>
                  , für alles Schriftliche über{" "}
                  <Link
                    href="/contact"
                    className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                  >
                    Kontakt
                  </Link>
                  . Interviews, Hintergrundgespräche und Fachstatements sind möglich, auch
                  kurzfristig.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 11 Hinweise */}
        <section className="border-t border-brand-line bg-brand-bg px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="11" eyebrow="Redaktionell">
                Hinweise für Redaktionen
              </Head>
              <div className={RAIL}>
                <Bullets items={HINWEISE} />
                <p className="mt-flow max-w-measure text-micro text-brand-subtle">
                  Stand dieser Seite: {STAND}. Zahlen mit Exportdatum bleiben so stehen,
                  wie sie erhoben wurden, und werden nicht rückwirkend geglättet.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
