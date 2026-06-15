import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/Icons";

const HEADLINE_STATS = [
  {
    value: "+55%",
    label: "Klicks in 30 Tagen",
    note: "Handwerksbetrieb, Google Search Console",
  },
  {
    value: "+847%",
    label: "KI-Traffic",
    note: "KinderAlbum, dokumentiert",
  },
  {
    value: "Platz 1",
    label: "meistzitiert in Bing & Copilot",
    note: "unser Mess-Guide als KI-Quelle",
  },
];

type CaseStudy = {
  name: string;
  client: string;
  ausgangslage: string;
  getan: string;
  numbers: string[];
  href: string;
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
      "+55% Klicks in 30 Tagen (55 Klicks, Google Search Console)",
      "+61% Impressionen in 30 Tagen (6.660 Impressionen)",
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
    name: "KinderAlbum",
    client: "Digitalprodukt",
    ausgangslage:
      "Klassische Suche brachte stabile, aber begrenzte Reichweite. Über KI-Assistenten war die Marke kaum auffindbar.",
    getan:
      "Wir haben Inhalte so aufbereitet, dass ChatGPT, Perplexity und Co. die Marke als Quelle erkennen und in ihren Antworten nennen.",
    numbers: ["+847% KI-Traffic, dokumentiert"],
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

const FAQS = [
  {
    q: "Sind diese Ergebnisse garantiert?",
    a: "Nein, und jeder, der das verspricht, sollte dich skeptisch machen. Branche, Wettbewerb und Ausgangslage entscheiden mit. Wir senken dein Risiko anders: Die Erstanalyse ist kostenlos, du siehst vorher, wo du stehst, und erst danach reden wir über Umsetzung. Du gehst keine Verpflichtung ein, bevor klar ist, dass sich die Arbeit lohnt.",
  },
  {
    q: "Kann ich die Zahlen selbst prüfen?",
    a: "Ja, das ist der Punkt. Performance-Scores kannst du mit Lighthouse direkt im Browser nachmessen. Such-Daten liegen in deiner eigenen Google Search Console. Und ob ChatGPT oder Perplexity dich nennen, kannst du in Echtzeit selbst ausprobieren. Wir arbeiten mit Quellen, die du kontrollierst, nicht mit geglätteten Grafiken.",
  },
  {
    q: "Wie lange dauert es bis zu Ergebnissen?",
    a: "Bei der Suche zeigen sich erste Bewegungen oft innerhalb der ersten Wochen, wie der Handwerksbetrieb mit +55% Klicks in 30 Tagen. KI-Präsenz braucht meist länger, weil Systeme wie ChatGPT in Zyklen lernen. Realistisch sind hier mehrere Wochen bis Monate. Wir messen laufend, damit du den Fortschritt nicht erraten musst.",
  },
  {
    q: "Bekomme ich Referenzen zum Sprechen?",
    a: "Im Erstgespräch oder bei konkretem Interesse stellen wir den Kontakt zu passenden Referenzen her, sofern die jeweiligen Kunden einverstanden sind. Die Case Studies auf dieser Seite zeigen die Zahlen, ein Gespräch mit einem bestehenden Kunden zeigt dir die Zusammenarbeit dahinter.",
  },
  {
    q: "Was kostet die Zusammenarbeit?",
    a: "Die Erstanalyse ist kostenlos. Danach hängt der Preis von Aufwand und Ausgangslage ab. Auf unserer Preisseite findest du die ab-Beträge für Umsetzung und laufende Betreuung, und im Erstgespräch nennen wir dir einen festen Preis ohne Überraschungen.",
  },
];

export default function ErgebnissePage() {
  const itemListJsonLd = {
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-[#F7F5F2]">
        {/* Hero */}
        <section className="px-6 md:px-12 lg:px-20 pt-32 pb-16 md:pt-40 md:pb-20 max-w-[1100px] mx-auto text-center">
          <FadeIn>
            <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-4">
              Ergebnisse
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
              Ergebnisse, die du selbst nachprüfen kannst
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10">
              Echte Ergebnisse aus unserer Arbeit an SEO und Generative Engine Optimization (GEO). Keine geglätteten Vanity-Grafiken: jede Zahl auf dieser Seite stammt aus einer Quelle, die du selbst öffnen, nachmessen oder in Echtzeit testen kannst.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-sichtbarkeit-now">
                <Button text="Kostenlose Analyse anfragen" primary={true} className="justify-center" />
              </Link>
              <Link href="/termin">
                <Button text="Erstgespräch vereinbaren" primary={false} className="justify-center" />
              </Link>
            </div>
          </FadeIn>

          {/* Stat row */}
          <FadeIn delay={150}>
            <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mt-14 text-left">
              {HEADLINE_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-card border border-gray-100 p-6"
                >
                  <div className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-black mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500">{stat.note}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Why most agency numbers are worthless */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-white">
          <div className="max-w-[800px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-6">
                Warum die meisten Agentur-Zahlen wertlos sind
              </h2>
            </FadeIn>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <FadeIn delay={100}>
                <p>
                  Eine Steigerung um 600 Prozent klingt beeindruckend, bis du fragst, was der Ausgangswert war. Von drei Besuchern auf einundzwanzig ist auch eine Versechsfachung. Genau solche Grafiken findest du auf dieser Seite nicht.
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <p>
                  Unsere Zahlen sind nachprüfbar. Performance-Scores kannst du selbst testen. Daten aus der Google Search Console liegen in deinem eigenen Konto und lügen nicht. Und ob ChatGPT dich nennt, kannst du in dem Moment verifizieren, in dem du die Frage stellst.
                </p>
              </FadeIn>
              <FadeIn delay={300}>
                <p className="font-semibold text-black">
                  Wir zeigen lieber ehrliche, kleinere Zahlen aus echten Quellen als große Zahlen, die niemand kontrollieren kann.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 max-w-[1100px] mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl">
              Drei Projekte, drei Ausgangslagen, drei nachprüfbare Ergebnisse. Jede Fallstudie liegt in voller Länge im Wissen-Bereich.
            </p>
          </FadeIn>

          <div className="space-y-6 md:space-y-8">
            {CASE_STUDIES.map((cs, i) => (
              <FadeIn key={cs.name} delay={100 + i * 100}>
                <div className="bg-white rounded-card border border-gray-100 p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
                    <h3 className="text-2xl font-semibold tracking-tight text-black">
                      {cs.name}
                    </h3>
                    <span className="text-sm text-gray-500">{cs.client}</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div className="space-y-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 mb-2">
                          Ausgangslage
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {cs.ausgangslage}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 mb-2">
                          Was wir getan haben
                        </p>
                        <p className="text-gray-700 leading-relaxed">{cs.getan}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 mb-3">
                        Die Zahlen
                      </p>
                      <ul className="space-y-3">
                        {cs.numbers.map((n) => (
                          <li
                            key={n}
                            className="flex gap-3 items-start text-sm text-gray-700"
                          >
                            <CheckIcon className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                            {n}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-black/5">
                    <Link
                      href={cs.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-brand-accent transition-colors group"
                    >
                      Vollständige Fallstudie lesen
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* How we measure */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4">
                Wie wir messen
              </h2>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl">
                Für Generative Engine Optimization (GEO) reicht ein Ranking-Report nicht. Wir arbeiten auf drei Ebenen. Auf jeder kommen Werkzeuge zum Einsatz, deren Ergebnisse du selbst kontrollieren kannst.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {MEASUREMENT.map((m, i) => (
                <FadeIn key={m.title} delay={i * 100}>
                  <div className="bg-[#F7F5F2] rounded-xl p-6 md:p-8 h-full">
                    <h3 className="text-lg font-bold text-black mb-3">{m.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-5">
                      {m.description}
                    </p>
                    <ul className="space-y-2">
                      {m.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-2 items-center text-sm text-gray-700"
                        >
                          <CheckIcon className="w-4 h-4 text-brand-accent flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={300}>
              <p className="text-gray-600 mt-10 max-w-2xl">
                Die gleichen Prompts vor und nach der Arbeit zeigen schwarz auf weiß, was sich in den KI-Antworten verändert hat. Wie das im Detail funktioniert, beschreiben wir im Guide{" "}
                <Link
                  href="/wissen/ki-sichtbarkeit-messen"
                  className="text-brand-accent font-semibold underline underline-offset-2 hover:text-black transition-colors"
                >
                  KI-Sichtbarkeit messen
                </Link>
                . Genau dieser Inhalt ist der meistzitierte unserer Website in den KI-Antworten von Bing und Copilot.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Founder credibility */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 max-w-[900px] mx-auto">
          <FadeIn>
            <div className="bg-white rounded-card border border-gray-100 p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-8">
              <img
                src="/vadim_shchepin_2.jpeg"
                alt="Vadim Shchepin"
                className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover shadow-md flex-shrink-0"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-semibold tracking-tight text-black mb-1">
                  Vadim Shchepin
                </h2>
                <p className="text-sm font-semibold text-brand-accent mb-4">
                  Senior Engineer & KI-Sichtbarkeit Berater, Hamburg
                </p>
                <p className="text-gray-700 leading-relaxed mb-5">
                  Ich arbeite an deinen Daten, bis die Zahlen stimmen, und ich nenne dir nur Werte, die du selbst überprüfen kannst.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                  <Link
                    href="/ueber-mich"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-brand-accent transition-colors group"
                  >
                    Mehr über mich
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="https://www.linkedin.com/in/vadim-shchepin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-black transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* FAQ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-white">
          <div className="max-w-[800px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-10">
                Häufige Fragen zu unseren Ergebnissen
              </h2>
            </FadeIn>

            <div className="space-y-10">
              {FAQS.map((item, idx) => (
                <FadeIn key={item.q} delay={idx * 60}>
                  <article className="border-b border-black/10 pb-10 last:border-b-0 last:pb-0">
                    <h3 className="text-lg md:text-xl font-semibold text-black tracking-tight">
                      {item.q}
                    </h3>
                    <p className="mt-3 text-gray-700 text-base leading-relaxed">
                      {item.a}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Explore more */}
        <section className="px-6 md:px-12 lg:px-20 py-12 max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center text-sm">
              <Link href="/preise" className="font-medium text-gray-700 hover:text-black transition-colors">
                Preise und Pakete
              </Link>
              <Link href="/ai-seo-agentur" className="font-medium text-gray-700 hover:text-black transition-colors">
                AI SEO Agentur
              </Link>
              <Link href="/ueber-mich" className="font-medium text-gray-700 hover:text-black transition-colors">
                Über mich
              </Link>
              <Link href="/wissen" className="font-medium text-gray-700 hover:text-black transition-colors">
                Alle Guides
              </Link>
            </div>
          </FadeIn>
        </section>

        {/* Final CTA */}
        <section className="px-6 md:px-12 lg:px-20 py-16 border-t border-black/10">
          <div className="max-w-[900px] mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4">
                Sieh dir deine eigenen Zahlen an
              </h2>
              <p className="text-gray-700 mb-8 max-w-xl mx-auto">
                In der kostenlosen Analyse prüfen wir, wo du heute in Suche und KI-Antworten stehst. Danach entscheidest du in Ruhe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ai-sichtbarkeit-now">
                  <Button text="Kostenlose Analyse anfragen" primary={true} className="justify-center" />
                </Link>
                <Link href="/termin">
                  <Button text="Erstgespräch vereinbaren" primary={false} className="justify-center" />
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
