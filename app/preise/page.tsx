import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

type Plan = {
  name: string;
  price: string;
  unit: string;
  /* The eyebrow is the commitment unit, not a mixed taxonomy: it is the one
     axis on which the three offers actually differ. */
  unitLabel: string;
  /* Suffix for the compact hero summary, where there is no room for the full
     unit line but "600" must not read as a one-off next to "1.500". */
  summarySuffix?: string;
  fit: string;
  highlight: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Kurzanalyse",
    price: "0 €",
    unit: "15 Minuten, unverbindlich",
    unitLabel: "Kostenlos",
    fit: "Du willst wissen, wo du stehst.",
    highlight: false,
  },
  {
    name: "Umsetzungs-Sprint",
    price: "ab 1.500 €",
    unit: "einmalig, keine Bindung",
    unitLabel: "Einmalig",
    summarySuffix: "einmalig",
    fit: "Du willst es einmal richtig aufsetzen.",
    highlight: false,
  },
  {
    name: "Laufende Betreuung",
    price: "ab 600 €",
    unit: "pro Monat, monatlich kündbar",
    unitLabel: "Monatlich",
    summarySuffix: "pro Monat",
    fit: "Du willst dauerhaft genannt werden, nicht einmal.",
    highlight: true,
  },
];

/* Kurzanalyse is no longer a matrix column, it is the band above the matrix.
   Measured reason: with three plan columns the table needed 962px, so on a
   390px screen the 104px sticky label column left exactly 286px, which is one
   plan column. Visible plan pixels were 286/0/0, then 0/286/0, then 0/0/286:
   no two plans were ever on screen together, which is the whole point of a
   comparison table. The free call is also not a third product, it is the way
   in, and four of its five answers were the absence of something ("nein",
   "keins", "live im Call", "15 Minuten"). So its five answers move into this
   one line, and the two paid plans now sit side by side with no horizontal
   scrolling at any width. */
const FREE = PLANS[0];
const PAID = [PLANS[1], PLANS[2]] as const;

/* Verbatim from the old column 01: Enthalten, Umsetzung (nein), Messung (live
   im Call), Reporting (keins), Ergebnis (15 Minuten). Nothing dropped. */
const FREE_ROW_ANSWERS =
  "KI-Status, Konkurrenz-Check und 3 Maßnahmen, live im Call gemessen. Keine Umsetzung, kein Reporting, Ergebnis nach 15 Minuten.";

/* One row per attribute, one cell per paid plan, cells kept to a few words so
   the two columns can be compared in a single eye movement. Order of cells
   matches PAID.

   label = the one word that survives on a 390px screen, where the label
   column is 104px wide. labelRest = the qualifier that only appears from md
   up, in a lighter weight, so the label column carries two ink levels instead
   of one flat block of bold. */
const ROWS: {
  label: string;
  labelRest?: string;
  /* Bolds the first comma-separated item, which gives the matrix a third
     typographic level between the plan H2s and the plain values. */
  emphasizeLead?: boolean;
  cells: [string, string];
}[] = [
  {
    label: "Enthalten",
    emphasizeLead: true,
    cells: [
      "Seitenstruktur, Schema, llms.txt",
      "Inhalte, Monitoring, Reaktion",
    ],
  },
  {
    label: "Umsetzung",
    labelRest: " an deinen Seiten",
    cells: ["einmalig, wichtigste Seiten", "laufend, jeden Monat"],
  },
  {
    label: "Messung",
    labelRest: " in ChatGPT, Perplexity, Gemini",
    cells: ["vorher und nachher", "jeden Monat"],
  },
  {
    label: "Reporting",
    labelRest: " zu Nennungen",
    cells: ["Ergebnisbericht", "monatlich, schriftlich"],
  },
  {
    label: "Ergebnis",
    labelRest: " nach",
    cells: ["10 bis 14 Tagen", "fortlaufend"],
  },
];

const OFFER_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Preise und Pakete von aiseo.hamburg",
  description:
    "Preise für KI-Sichtbarkeit: kostenlose Kurzanalyse, Umsetzungs-Sprint ab 1.500 Euro einmalig, laufende Betreuung ab 600 Euro pro Monat.",
  url: "https://aiseo.hamburg/preise",
  provider: { "@id": "https://aiseo.hamburg/#organization" },
  itemListElement: [
    {
      "@type": "Offer",
      name: "Kurzanalyse",
      description:
        "Kostenloser 15-Minuten-Videocall: KI-Status, Konkurrenz-Check und drei priorisierte Maßnahmen.",
      price: "0",
      priceCurrency: "EUR",
      url: "https://aiseo.hamburg/termin",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Kurzanalyse der KI-Sichtbarkeit",
        provider: { "@id": "https://aiseo.hamburg/#organization" },
        areaServed: { "@type": "City", name: "Hamburg" },
      },
    },
    {
      "@type": "Offer",
      name: "Umsetzungs-Sprint",
      description:
        "Einmalige Umsetzung: Seitenstruktur, Schema und technische Basis für KI-Sichtbarkeit, Ergebnis in 10 bis 14 Tagen.",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 1500,
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      url: "https://aiseo.hamburg/termin",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Umsetzung von KI-Sichtbarkeit",
        provider: { "@id": "https://aiseo.hamburg/#organization" },
        areaServed: { "@type": "City", name: "Hamburg" },
      },
    },
    {
      "@type": "Offer",
      name: "Laufende Betreuung",
      description:
        "Monatliche Betreuung: neue Inhalte, Monitoring in ChatGPT, Perplexity und Gemini, schriftliches Reporting, monatlich kündbar.",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        minPrice: 600,
        priceCurrency: "EUR",
        unitCode: "MON",
        unitText: "pro Monat",
        valueAddedTaxIncluded: false,
      },
      url: "https://aiseo.hamburg/termin",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Laufende Betreuung der KI-Sichtbarkeit",
        provider: { "@id": "https://aiseo.hamburg/#organization" },
        areaServed: { "@type": "City", name: "Hamburg" },
      },
    },
  ],
};

export default function PreisePage() {
  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="min-h-screen bg-brand-surface">
        {/* Hero: asymmetric, so the price summary sits in the gutter and costs
            no vertical height. All three prices are visible before any scroll. */}
        <section className="px-6 md:px-12 lg:px-20 pt-navbar pb-stack md:pb-block">
          <div className="max-w-article mx-auto grid lg:grid-cols-12 gap-stack lg:gap-block items-start">
            <FadeIn className="lg:col-span-7">
              {/* The "Preisstand" eyebrow that used to sit here now lives in the
                  comparison table's top-left header cell, which was an empty
                  250x258px hole. Same fact, one line less page. */}
              <h1 className="text-title md:text-display font-semibold text-brand-text mb-flow">
                Preise für KI-Sichtbarkeit
              </h1>
              <p className="text-lead text-brand-muted max-w-measure">
                Der Einstieg ist ein kostenloser 15-Minuten-Call. Erst danach reden
                wir über Umsetzung, und du bekommst einen Festpreis, bevor
                irgendetwas beginnt.
              </p>
              {/* Fits in the whitespace the taller summary box already leaves,
                  so it names the fourth engine at no cost in page height. */}
              <p className="mt-4 text-body text-brand-subtle max-w-measure">
                Wir messen in ChatGPT, Perplexity und Google AI Overviews.
              </p>
            </FadeIn>

            <FadeIn delay={120} className="lg:col-span-5">
              {/* px-4 on mobile, not px-6: the plan names need 138px and the
                  narrower inset is what keeps them on one line. */}
              <div className="rounded-card border border-brand-line bg-white px-4 py-6 md:p-6">
                <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                  Auf einen Blick
                </p>
                {/* One grid for the whole list, not one per row: grid columns
                    are only shared between siblings, so per-row grids would
                    let every euro sign land on a different x. */}
                <dl className="mt-4 grid grid-cols-[1fr_auto_auto] items-baseline">
                  {PLANS.map((plan) => (
                    <React.Fragment key={plan.name}>
                      {/* The rule is its own spanning row: baseline-aligned
                          cells have unequal heights, so three border-tops
                          would land on three different y positions. */}
                      <div
                        aria-hidden="true"
                        className="col-span-3 h-px bg-brand-hairline"
                      />
                      <dt className="pt-3 pb-3 pr-2 text-meta text-brand-muted">
                        {plan.name}
                      </dt>
                      <dd className="pt-3 pb-3 text-body font-semibold text-brand-text text-right whitespace-nowrap">
                        {plan.price}
                      </dd>
                      <dd className="pt-3 pb-3 pl-2 text-micro text-brand-subtle whitespace-nowrap">
                        {plan.summarySuffix ?? ""}
                      </dd>
                    </React.Fragment>
                  ))}
                </dl>
                <div className="mt-5 border-t border-brand-hairline pt-5">
                  <Button
                    href="/termin"
                    text="Kostenlosen Call buchen"
                    primary={true}
                    className="w-full justify-center"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* The free tier as a band, the two paid tiers as a matrix: same
            information as the old three prose cards, one shared axis, and both
            comparable offers on screen together on a 390px phone. */}
        <section className="px-0 md:px-12 lg:px-20 pb-block">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <div className="md:rounded-section border-y md:border border-brand-line bg-white shadow-card overflow-hidden">
                {/* The demoted free tier. Same rail geometry as the note under
                    the table (156px at md, 212px at lg plus the card's own
                    px-6), so its vertical rule lands exactly on the label
                    column's rule at 180px and 236px. */}
                <div
                  id="kurzanalyse-strip"
                  className="border-b border-brand-line bg-brand-surface px-3 py-4 md:px-6 md:py-5 flex flex-col gap-2 md:flex-row md:items-baseline md:gap-0"
                >
                  {/* Eyebrow and name share one line on the phone (235px of the
                      366px available) and only stack from md, so the demoted
                      tier costs one line of height, not two. */}
                  <div className="flex items-center gap-3 md:block md:w-[156px] lg:w-[212px] md:shrink-0 md:pr-6">
                    <span className="flex items-center gap-2">
                      <span className="text-micro font-semibold tabular-nums text-brand-subtle">
                        01
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-3 w-px bg-brand-line"
                      />
                      <span className="text-micro font-semibold uppercase tracking-normal md:tracking-eyebrow text-brand-subtle">
                        {FREE.unitLabel}
                      </span>
                    </span>
                    <h2 className="md:mt-2 text-body md:text-subheading font-semibold text-brand-text">
                      {FREE.name}
                    </h2>
                  </div>
                  <div className="md:flex-1 md:border-l md:border-brand-hairline md:pl-6">
                    <p className="text-meta text-brand-muted">
                      <strong className="font-semibold text-brand-text">
                        {FREE.price}
                      </strong>
                      {`, ${FREE.unit}. ${FREE.fit}`}
                    </p>
                    <p className="mt-1 text-micro text-brand-subtle">
                      {FREE_ROW_ANSWERS}
                    </p>
                  </div>
                </div>
                {/* Kept as a scroll container only as a safety net below 360px,
                    where two 128px columns still fit but the longest German
                    value word does not. From 360px up nothing overflows, so
                    there is nothing to swipe and no swipe hint. */}
                <div
                  id="paketvergleich-scroll"
                  className="overflow-x-auto"
                  role="region"
                  aria-label="Paketvergleich der beiden kostenpflichtigen Pakete"
                  tabIndex={0}
                >
                  {/* No min-width from 360px up: two plan columns plus the 104px
                      label column are exactly 390px on the reference phone, so
                      both plans are fully on screen at scroll position 0 and
                      there is no scroll position at all. 360px is the floor
                      where the widest value word ("Seitenstruktur,", 109px)
                      still fits a 128px column. */}
                  <table className="w-full min-w-[360px] table-fixed border-separate border-spacing-0 text-left">
                    <caption className="sr-only">
                      Vergleich der beiden kostenpflichtigen Pakete
                      Umsetzungs-Sprint und laufende Betreuung nach Preis,
                      Leistungsumfang, Umsetzung, Messung, Reporting und Dauer.
                      Die kostenlose Kurzanalyse steht über der Tabelle.
                    </caption>
                    {/* 236px at lg is exactly 3 of the 12 grid columns
                        (3 x 46,67 + 2 x gap-block), so the label column's right
                        rule sits on a real grid line instead of a stray 23%. */}
                    <colgroup>
                      <col className="w-[104px] md:w-[180px] lg:w-[236px]" />
                      <col />
                      <col />
                    </colgroup>
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="sticky left-0 z-10 bg-brand-surface border-r border-brand-hairline align-top p-0"
                        >
                          {/* h-full does NOT resolve inside a table cell: Chrome
                              measured the inner span at 89px inside a 274px cell,
                              which is why this corner still read as a void. But
                              position:sticky already makes the cell a containing
                              block, so an inset-0 child gets a definite height and
                              justify-between really does span it: axis label at the
                              top, orientation in the middle, price truth at the
                              bottom, on the page surface so the corner reads as the
                              matrix axis and not as a missing value. */}
                          <span className="absolute inset-0 flex flex-col justify-between gap-4 px-3 py-4 md:px-6 md:py-5">
                            <span className="text-micro font-semibold uppercase tracking-normal md:tracking-eyebrow text-brand-subtle">
                              Im Vergleich
                            </span>
                            {/* Two versions of the same fact. Measured, not
                                guessed: at 104px (phone) the sentence sets two
                                words per line, at 180px (tablet) it sets six ragged
                                lines, so the full sentence only appears from lg,
                                where the column is 188px of inner width. */}
                            {/* font-normal on every tier below the eyebrow: a
                                thead th inherits bold, which put the footnote at
                                the same weight as the plan names. */}
                            <span className="lg:hidden text-micro font-normal text-brand-muted">
                              5 Zeilen, 2 Pakete.
                            </span>
                            <span className="hidden lg:block text-meta font-normal text-brand-muted">
                              Gleiche fünf Zeilen für jedes Paket, damit du direkt
                              vergleichen kannst.
                            </span>
                            <span className="block font-normal">
                              <span
                                aria-hidden="true"
                                className="mb-2 block h-px w-6 bg-brand-edge"
                              />
                              <span className="block text-micro text-brand-subtle">
                                <span className="hidden md:inline">Alle Preise </span>
                                zzgl. USt.
                              </span>
                              <span className="block text-micro text-brand-subtle">
                                <span className="md:hidden">Stand: 08/2026</span>
                                <span className="hidden md:inline">
                                  Preisstand: August 2026
                                </span>
                              </span>
                            </span>
                          </span>
                        </th>
                        {PAID.map((plan, planIndex) => (
                          <th
                            key={plan.name}
                            scope="col"
                            className={`align-top break-words px-3 py-4 md:px-6 md:py-5 ${
                              plan.highlight
                                ? "bg-brand-night text-white"
                                : "bg-white"
                            }`}
                          >
                            <span className="flex flex-wrap items-center gap-2">
                              {/* 02/03 continues the numbering that now starts at
                                  01 on the Kurzanalyse band above, so the eye gets
                                  an order instead of equal offers. */}
                              <span
                                className={`text-micro font-semibold tabular-nums ${
                                  plan.highlight
                                    ? "text-white/60"
                                    : "text-brand-subtle"
                                }`}
                              >
                                {`0${planIndex + 2}`}
                              </span>
                              <span
                                aria-hidden="true"
                                className={`h-3 w-px ${
                                  plan.highlight ? "bg-white/30" : "bg-brand-line"
                                }`}
                              />
                              <span
                                className={`text-micro font-semibold uppercase tracking-eyebrow ${
                                  plan.highlight
                                    ? "text-brand-accent"
                                    : "text-brand-subtle"
                                }`}
                              >
                                {plan.unitLabel}
                              </span>
                              {plan.highlight && (
                                /* tracking-normal on the phone: with 0.2em the
                                   pill measures 123px and the column's inner
                                   width is 119px. */
                                <span className="rounded-full bg-brand-accent/20 px-2 py-[3px] text-micro font-semibold uppercase tracking-normal md:tracking-eyebrow text-brand-accent">
                                  Empfohlen
                                </span>
                              )}
                            </span>
                            {/* Two columns instead of three means 143px of
                                column on a 390px screen, so the phone sizes
                                step down one token: "Umsetzungs-" sets 154px at
                                text-subheading and 116px at text-body, and
                                "ab 1.500 €" sets 111px at 24px and 92px at 20px,
                                against 119px of inner width. From md up the
                                original sizes return. */}
                            <h2
                              className={`mt-4 text-body md:text-subheading font-semibold ${
                                plan.highlight ? "text-white" : "text-brand-text"
                              }`}
                            >
                              {plan.name}
                            </h2>
                            <span className="mt-2 block text-lead md:text-heading font-semibold whitespace-nowrap">
                              {plan.price}
                            </span>
                            <span
                              className={`block text-micro font-normal ${
                                plan.highlight
                                  ? "text-white/70"
                                  : "text-brand-subtle"
                              }`}
                            >
                              {plan.unit}
                            </span>
                            {/* text-micro on the phone: at 15px this sentence
                                sets four lines in a 143px column and it is the
                                single biggest reason the header row got taller
                                when the columns got narrower. */}
                            <span
                              className={`mt-3 md:mt-4 block text-micro md:text-meta font-normal ${
                                plan.highlight
                                  ? "text-white/80"
                                  : "text-brand-muted"
                              }`}
                            >
                              {plan.fit}
                            </span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {ROWS.map((row) => (
                        <tr key={row.label}>
                          <th
                            scope="row"
                            /* text-micro on the phone, not text-meta: the widest
                               label, "Umsetzung", sets 83px at 15px and 74px at
                               13px, and 104px of column minus px-3 leaves 80px.
                               The label stays semibold, so it still reads as the
                               axis against the 15px values. */
                            className="sticky left-0 z-10 bg-white border-r border-t border-brand-hairline align-top break-words px-3 md:px-6 py-3 text-micro md:text-meta font-semibold text-brand-text"
                          >
                            {row.label}
                            {row.labelRest && (
                              <span className="hidden md:inline font-normal text-brand-subtle">
                                {row.labelRest}
                              </span>
                            )}
                          </th>
                          {row.cells.map((cell, i) => {
                            const [lead, ...tail] = cell.split(", ");
                            return (
                              <td
                                key={PAID[i].name}
                                className={`border-t border-brand-hairline align-top break-words px-3 md:px-6 py-3 text-meta ${
                                  PAID[i].highlight
                                    ? "bg-brand-accent/[0.09] font-medium text-brand-text"
                                    : "text-brand-muted"
                                }`}
                              >
                                {row.emphasizeLead ? (
                                  <>
                                    <strong className="font-semibold text-brand-text">
                                      {lead}
                                    </strong>
                                    {tail.length > 0 && `, ${tail.join(", ")}`}
                                  </>
                                ) : (
                                  cell
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* One action for the whole table. The note hangs left into the
                    gutter behind a 1px tick mark and the prose starts on the
                    same rule as the table's label column, so the vertical rail
                    continues below the table at zero cost in height. */}
                <div className="border-t border-brand-line bg-white p-5 md:px-6 md:py-5 flex flex-col-reverse gap-flow md:flex-row md:items-start md:gap-0">
                  <div className="hidden md:block shrink-0 md:w-[156px] lg:w-[212px] pr-6">
                    <span
                      aria-hidden="true"
                      className="mb-2 block h-px w-6 bg-brand-edge"
                    />
                    <p className="text-micro font-semibold text-brand-text">
                      Festpreis vor dem Start
                    </p>
                  </div>
                  <div className="md:flex-1 md:border-l md:border-brand-hairline md:pl-6 md:pr-6">
                    <p className="text-meta text-brand-muted">
                      Einstiegspreise, keine Pauschalen: der Aufwand hängt von
                      Branche, Wettbewerb und Ausgangslage ab. Direkter Draht,
                      keine Agentur-Pipeline.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Button
                      href="/termin"
                      text="Kostenlosen Call buchen"
                      primary={true}
                    />
                  </div>
                </div>
              </div>
              {/* The inline script that jump-scrolled the table to the
                  recommended column is gone with the scrolling: both paid
                  plans start on screen, so moving the scroll position would
                  only push plan 02 half out of view. */}
            </FadeIn>
          </div>
        </section>

        {/* Closing */}
        <section className="px-6 md:px-12 lg:px-20 py-block border-t border-brand-line">
          <div className="max-w-article mx-auto">
            <FadeIn>
              {/* Same gap token as the hero grid, so both right rails land on
                  x=839 instead of 839 and 831. */}
              <div className="grid lg:grid-cols-12 gap-stack lg:gap-block items-start">
                <div className="lg:col-span-7">
                  <h2 className="text-heading font-semibold text-brand-text mb-4">
                    Unsicher, welches Paket passt?
                  </h2>
                  <p className="text-lead text-brand-muted max-w-measure">
                    Starte mit dem kostenlosen 15-Minuten-Call. Danach
                    entscheidest du in Ruhe.
                  </p>
                </div>
                {/* The rail was only ever implied by a content edge, so it was
                    not legible as a rail. Drawn as a hairline at x=839 it is the
                    same line the hero summary card's left border sits on, and
                    lg:pl-6 puts this column's text at x=864, which is exactly
                    where the hero card's inner text starts. */}
                <div className="lg:col-span-5 lg:pt-2 lg:border-l lg:border-brand-line lg:pl-6">
                  <Button
                    href="/termin"
                    text="Kostenlosen Call buchen"
                    primary={true}
                  />
                  <p className="mt-4 text-meta text-brand-muted">
                    Lieber schreiben? Dann per{" "}
                    <Link
                      href="/contact"
                      className="font-medium text-brand-accent-ink underline underline-offset-2 hover:text-brand-text transition-colors"
                    >
                      Kontaktformular
                    </Link>
                    .
                  </p>
                  <p className="mt-3 text-meta text-brand-subtle">
                    Was genau dahinter steckt:{" "}
                    <Link
                      href="/leistungen"
                      className="underline underline-offset-2 hover:text-brand-text transition-colors"
                    >
                      Leistungen
                    </Link>{" "}
                    und{" "}
                    <Link
                      href="/faq"
                      className="underline underline-offset-2 hover:text-brand-text transition-colors"
                    >
                      häufige Fragen
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(OFFER_SCHEMA) }}
      />
    </div>
  );
}
