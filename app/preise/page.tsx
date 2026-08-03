import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";

const PLANS = [
  {
    name: "Kurzanalyse",
    price: "0 €",
    cadence: "15 Minuten",
    tagline: "Dein Einstieg",
    description:
      "Ein kurzer Videocall. Wir schauen live nach, ob du in ChatGPT, Perplexity und Google AI Overviews genannt wirst, und du bekommst die drei wichtigsten Hebel direkt im Gespräch.",
    features: [
      "KI-Status: Wirst du aktuell genannt?",
      "Konkurrenz-Check: Wer wird stattdessen empfohlen?",
      "3 priorisierte Maßnahmen, direkt im Call",
      "Kein schriftlicher Report, keine Verpflichtung",
    ],
    cta: { label: "Kostenlosen Call buchen", href: "/termin" },
    highlight: false,
  },
  {
    name: "Umsetzungs-Sprint",
    price: "Auf Anfrage",
    cadence: "projektbasiert",
    tagline: "Projektbasiert",
    description:
      "Wir setzen die wichtigsten Maßnahmen aus dem Call um: Inhalte, Struktur und technische Grundlagen für KI-Sichtbarkeit.",
    features: [
      "Content- und Seitenstruktur für AI-Engines",
      "Schema, llms.txt und technische Basis",
      "Optimierung deiner wichtigsten Seiten",
      "Messung mit Prompt-Tests vorher/nachher",
    ],
    cta: { label: "Kostenlosen Call buchen", href: "/termin" },
    highlight: false,
  },
  {
    name: "Laufende Betreuung",
    price: "Auf Anfrage",
    cadence: "monatlich kündbar",
    tagline: "Empfohlen",
    description:
      "Kontinuierliche Arbeit an deiner KI-Sichtbarkeit: neue Inhalte, laufendes Monitoring und Reaktion auf Veränderungen der AI-Engines.",
    features: [
      "Monatliches Monitoring in allen AI-Engines",
      "Laufende Inhalte und Optimierungen",
      "Reporting zu Nennungen und Zitaten",
      "Direkter Draht, kein Agentur-Pipeline",
    ],
    cta: { label: "Kostenlosen Call buchen", href: "/termin" },
    highlight: true,
  },
];

export default function PreisePage() {
  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="min-h-screen bg-[#F7F5F2]">
        {/* Hero */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-[1100px] mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-black mb-6">
              Preise
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Der Einstieg ist ein kostenloser 15-Minuten-Call. Erst danach reden wir über Umsetzung, und du bekommst einen Festpreis, bevor irgendetwas beginnt.
            </p>
          </FadeIn>
        </section>

        {/* Pricing cards */}
        <section className="px-6 md:px-12 lg:px-20 pb-16 max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {PLANS.map((plan, i) => (
              <FadeIn key={plan.name} delay={100 + i * 100}>
                <div
                  className={`h-full flex flex-col rounded-card border p-8 ${
                    plan.highlight
                      ? "bg-[#121212] text-white border-transparent shadow-2xl"
                      : "bg-white text-black border-gray-100"
                  }`}
                >
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-[0.2em] mb-6 block ${
                      plan.highlight ? "text-brand-accent" : "text-gray-400"
                    }`}
                  >
                    {plan.tagline}
                  </span>
                  <h2 className="text-2xl font-semibold tracking-tight mb-3">
                    {plan.name}
                  </h2>
                  <div className="mb-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-3xl md:text-4xl font-semibold tracking-tight">
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {plan.cadence}
                    </span>
                  </div>
                  <p
                    className={`text-sm leading-relaxed mb-8 ${
                      plan.highlight ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex gap-3 items-start text-sm ${
                          plan.highlight ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        <CheckIcon className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link href={plan.cta.href}>
                      <Button
                        text={plan.cta.label}
                        primary={plan.highlight}
                        className="w-full justify-center"
                      />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <p className="text-center text-sm text-gray-500 mt-10 max-w-2xl mx-auto">
              Warum hier keine Zahlen stehen: Der Aufwand hängt von Branche, Wettbewerb und Ausgangslage ab, und eine erfundene &bdquo;ab&ldquo;-Zahl hilft dir bei der Entscheidung nicht. Nach dem kostenlosen Call bekommst du einen Festpreis (zzgl. USt.), an den wir uns halten.
            </p>
          </FadeIn>
        </section>

        {/* Closing CTA */}
        <section className="px-6 md:px-12 lg:px-20 py-16 border-t border-black/10">
          <div className="max-w-[900px] mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4">
                Unsicher, welches Paket passt?
              </h2>
              <p className="text-gray-700 mb-8 max-w-xl mx-auto">
                Starte mit dem kostenlosen 15-Minuten-Call. Danach entscheidest du in Ruhe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/termin">
                  <Button text="Kostenlosen Call buchen" primary={true} className="justify-center" />
                </Link>
                <Link href="/contact">
                  <Button text="Lieber schreiben" primary={false} className="justify-center" />
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
