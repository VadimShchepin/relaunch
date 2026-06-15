import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/Icons";

const VALUES = [
  {
    title: "Ergebnis vor Ego",
    description:
      "Wir optimieren nicht, damit ein Report gut aussieht. Wir arbeiten, bis du in den KI-Antworten auftauchst. Jede Empfehlung kommt aus Daten, nicht aus dem Bauchgefühl.",
  },
  {
    title: "Dranbleiben statt abliefern",
    description:
      "Ein Audit ist kein Endprodukt. Wir testen, messen und justieren über Wochen nach, weil KI-Systeme sich laufend verändern und einmalige Maßnahmen schnell verpuffen.",
  },
  {
    title: "Ehrlich statt diplomatisch",
    description:
      "Wenn KI-Sichtbarkeit für dein Geschäft gerade nicht der richtige Hebel ist, sagen wir das. Kein Upselling, kein Buzzword-Bingo, keine Pakete, die du nicht brauchst.",
  },
  {
    title: "Persönlich statt skaliert",
    description:
      "Du arbeitest direkt mit dem Gründer. Keine Agentur-Pipeline, kein Junior, der dein Projekt nach dem Kickoff übernimmt. Eine Ansprechperson, von der Analyse bis zur Messung.",
  },
];

const PROCESS = [
  {
    title: "Analyse",
    description:
      "Wir prüfen, wie ChatGPT, Perplexity, Claude, Gemini und Google AI Overviews dein Unternehmen heute beschreiben, bei welchen Fragen du genannt wirst und wer stattdessen empfohlen wird.",
  },
  {
    title: "Umsetzung",
    description:
      "Wir bauen die Grundlagen: zitierbare Inhalte auf echte Kundenfragen, saubere Seitenstruktur, Schema und die technische Basis, damit KI-Crawler deine Seite verstehen.",
  },
  {
    title: "Messung",
    description:
      "Wir testen vorher und nachher mit echten Prompts und tracken Nennungen, Zitate und KI-Traffic. Du siehst schwarz auf weiß, was sich bewegt, statt auf Versprechen zu vertrauen.",
  },
  {
    title: "Laufende Betreuung",
    description:
      "KI-Sichtbarkeit ist kein Projekt mit Enddatum. Wir bleiben dran, ergänzen Inhalte und reagieren auf Veränderungen der KI-Systeme, damit dein Vorsprung bestehen bleibt.",
  },
];

const CASES = [
  {
    metric: "+55 %",
    label: "Klicks in 30 Tagen",
    description:
      "blitz-hamburg.de: plus 55 % Klicks und plus 61 % Impressionen in 30 Tagen laut Google Search Console, dazu reale Anrufe und WhatsApp-Anfragen.",
    href: "/wissen/ki-sichtbarkeit-messen",
    cta: "Wie wir messen",
  },
  {
    metric: "+847 %",
    label: "KI-Traffic dokumentiert",
    description:
      "KinderAlbum: plus 847 % KI-Traffic, dokumentiert über einen 90-Tage-Relaunch. Sichtbarkeit, die vorher schlicht nicht da war.",
    href: "/wissen/ki-sichtbarkeit-messen",
    cta: "Fallstudie ansehen",
  },
  {
    metric: "Nr. 1",
    label: "in Bing und Copilot zitiert",
    description:
      "Unsere Seite zur Messung von KI-Sichtbarkeit ist der meistzitierte Beitrag in den KI-Antworten von Bing und Copilot. Die Methode dahinter wenden wir auch für dich an.",
    href: "/wissen/ki-sichtbarkeit-messen",
    cta: "Quelle lesen",
  },
];

const AUDIENCES = [
  {
    title: "B2B und Dienstleister",
    description:
      "Berater, Kanzleien, Agenturen und Software-Anbieter, deren Kunden ihre Recherche längst in ChatGPT und Perplexity starten.",
  },
  {
    title: "Lokale Anbieter",
    description:
      "Handwerk, Sanierung, Gastronomie und Services, die bei Fragen wie „Wer macht das gut in Hamburg?\" genannt werden wollen.",
  },
  {
    title: "Online-Shops",
    description:
      "E-Commerce-Marken, die in Produktempfehlungen und Vergleichen der KI-Systeme auftauchen wollen, statt nur in der klassischen Suche.",
  },
  {
    title: "Ärzte und Praxen",
    description:
      "Praxen und Gesundheitsanbieter, für die Vertrauen, korrekte Daten und konsistente Signale über die Empfehlung entscheiden.",
  },
];

type FAQItem = { q: string; a: string };

const FAQS: FAQItem[] = [
  {
    q: "Was ist GEO (Generative Engine Optimization)?",
    a: "GEO, kurz für Generative Engine Optimization, ist die Disziplin, mit der dein Unternehmen in den Antworten generativer KI-Systeme genannt und zitiert wird, etwa in ChatGPT, Perplexity, Claude, Gemini und Google AI Overviews. Wo klassische SEO auf Platzierungen in der Trefferliste zielt, zielt GEO auf die Empfehlung selbst. Eng verwandt sind die Begriffe AEO (Answer Engine Optimization) und AI SEO. Wir behandeln sie als eine Disziplin, weil dieselben Hebel wirken: zitierbare Inhalte, klare Struktur, strukturierte Daten und Autoritätssignale. Auch Googles eigene Entwicklung mit AI Overviews und AI Mode zeigt, dass dieser Kanal kein Nebenschauplatz mehr ist.",
  },
  {
    q: "Welche Agentur hilft bei KI-Sichtbarkeit?",
    a: "Eine spezialisierte AI SEO Agentur hilft dir dabei, in den Antworten von ChatGPT, Perplexity, Claude, Gemini und Google AI Overviews genannt zu werden. Wir aus Hamburg haben uns genau darauf konzentriert: KI-Sichtbarkeit als eigene Disziplin, nicht als Beiwerk zur klassischen SEO. Du arbeitest direkt mit dem Gründer, jede Maßnahme ist datengetrieben und über echte Prompt-Tests messbar. Wer eine Agentur für KI-Sichtbarkeit sucht, sollte auf drei Dinge achten: dokumentierte Ergebnisse, eine klare Messmethode und eine Ansprechperson, die das Thema technisch versteht.",
  },
  {
    q: "Was kostet eine AI SEO Agentur?",
    a: "Das hängt von Branche, Wettbewerb und Ausgangslage ab. Die Erstanalyse ist bei uns kostenlos: Du erfährst, ob du aktuell in KI-Antworten genannt wirst und welche drei Hebel am meisten bringen. Danach gibt es einen projektbasierten Umsetzungs-Sprint und eine laufende Betreuung pro Monat. Konkrete Preise und Pakete findest du auf der Preise-Seite, einen festen Preis nennen wir im Erstgespräch. Keine versteckten Stunden, keine Überraschungen.",
  },
  {
    q: "Wie unterscheidet sich AI SEO von klassischer SEO?",
    a: "Klassische SEO optimiert für die Trefferliste mit zehn blauen Links. KI-Systeme wählen dagegen nur wenige Quellen aus und fassen sie zu einer Empfehlung zusammen. Wer dort nicht erscheint, wird nicht verglichen, sondern übergangen. AI SEO (auch GEO oder AEO genannt) setzt deshalb auf semantische Klarheit, strukturierte Daten und Autoritätssignale statt auf Keyword-Dichte. SEO bleibt das Fundament, aber ohne gezielte KI-Optimierung verpasst du den Kanal, über den immer mehr Kaufentscheidungen beginnen. Den Unterschied erklären wir ausführlich im Beitrag SEO-Agentur vs. AI SEO.",
  },
  {
    q: "Wie messt ihr Ergebnisse?",
    a: "Messung ist bei uns kein Extra, sondern Teil des Prozesses. Wir testen vor und nach der Umsetzung mit echten Prompts in den großen KI-Systemen und dokumentieren, ob und wie dein Unternehmen genannt wird. Zusätzlich tracken wir KI-Traffic über GA4 und Server-Logs sowie Rankings und Klicks in der Google Search Console. Wie genau das funktioniert, zeigen wir transparent in unserem meistzitierten Beitrag zur Messung von KI-Sichtbarkeit.",
  },
  {
    q: "Arbeitet ihr nur in Hamburg?",
    a: "Unser Fokus liegt auf Hamburg, weil die persönliche Zusammenarbeit hier am direktesten ist. Für lokale Anliegen gibt es eine eigene Seite zur AI SEO Agentur in Hamburg. Projekte außerhalb Hamburgs betreuen wir regelmäßig remote, solange das Angebot klar definiert ist und die fachliche Passung stimmt. Bundesweite Zusammenarbeit ist also kein Problem.",
  },
  {
    q: "Warum mit euch statt mit einer großen Agentur?",
    a: "Weil du direkt mit dem Gründer arbeitest, ohne Übergabe an ein Junior-Team und ohne Agentur-Pipeline. Vadim Shchepin ist Senior Engineer und KI-Sichtbarkeit Berater aus Hamburg, kommt also aus der Technik und versteht nicht nur, was optimiert werden muss, sondern auch wie es sauber umgesetzt wird. Ergebnisse stehen vor Ego, und wenn etwas keinen Sinn ergibt, sagen wir das offen.",
  },
];

export default function AiSeoAgenturPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI SEO Agentur aiseo.hamburg",
    serviceType: "Generative Engine Optimization (GEO) / AI SEO / KI-Sichtbarkeit",
    areaServed: "DE",
    url: "https://aiseo.hamburg/ai-seo-agentur",
    description:
      "AI SEO Agentur aus Hamburg für echte KI-Sichtbarkeit. Wir machen Unternehmen in ChatGPT, Perplexity, Claude, Gemini und Google AI Overviews sichtbar, datengetrieben und messbar.",
    provider: {
      "@type": "Organization",
      name: "aiseo.hamburg",
      url: "https://aiseo.hamburg",
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-[#F7F5F2]">
        {/* Hero */}
        <section className="px-6 md:px-12 lg:px-20 pt-32 pb-16 md:pt-40 md:pb-20 max-w-[1000px] mx-auto">
          <FadeIn>
            <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-4">
              AI SEO Agentur
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.04em] text-black mb-6 leading-[1.1]">
              Die AI SEO Agentur aus Hamburg für echte KI-Sichtbarkeit
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-8">
              Du fragst dich, welche Agentur bei KI-Sichtbarkeit wirklich hilft?
              Wir machen dein Unternehmen in ChatGPT, Perplexity, Claude, Gemini
              und Google AI Overviews sichtbar. Die Disziplin dahinter heißt
              Generative Engine Optimization (GEO): datengetrieben, direkt mit
              dem Gründer und messbar an echten Antworten.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/ai-sichtbarkeit-now">
                <Button
                  text="Kostenlose KI-Sichtbarkeitsanalyse"
                  primary={true}
                  className="justify-center"
                />
              </Link>
              <Link href="/termin">
                <Button
                  text="Erstgespräch vereinbaren"
                  primary={false}
                  className="justify-center"
                />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-brand-accent" />
                Aus Hamburg
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-brand-accent" />
                Direkt mit dem Gründer
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-brand-accent" />
                Messbare Ergebnisse
              </span>
            </div>
          </FadeIn>
        </section>

        {/* Das Problem */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-white">
          <div className="max-w-[800px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
                Das Problem: Du bist für KI unsichtbar
              </h2>
            </FadeIn>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <FadeIn delay={100}>
                <p>
                  Immer mehr Menschen starten ihre Recherche nicht bei Google,
                  sondern bei ChatGPT, Perplexity oder den AI Overviews. Sie
                  stellen eine Frage und bekommen eine fertige Empfehlung mit
                  wenigen Namen. Die meisten Unternehmen tauchen dort nicht auf.
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <p>
                  Das Bittere daran: Es liegt selten am Angebot. Es liegt daran,
                  dass die Website für KI-Systeme nicht klar, nicht zitierbar und
                  nicht autoritativ genug ist. Während du unsichtbar bleibst,
                  wird dein Wettbewerb empfohlen, oft mit dem schwächeren
                  Produkt, aber der besseren Aufbereitung.
                </p>
              </FadeIn>
              <FadeIn delay={300}>
                <p className="font-semibold text-black">
                  Genau diese Lücke schließen wir. Wir sorgen dafür, dass KI dein
                  Unternehmen als Quelle erkennt und nennt.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Warum wir anders sind */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="max-w-[1000px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                Was eine AI SEO Agentur heute leisten muss
              </h2>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl">
                Vier Prinzipien, an denen wir jede Entscheidung messen. Sie sind
                der Grund, warum die Zusammenarbeit mit uns sich von der typischen
                Agentur unterscheidet.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              {VALUES.map((value, i) => (
                <FadeIn key={value.title} delay={i * 100}>
                  <div className="bg-white rounded-xl p-6 md:p-8 h-full border border-gray-100">
                    <div className="flex items-start gap-3 mb-3">
                      <CheckIcon className="w-6 h-6 text-brand-accent flex-shrink-0 mt-0.5" />
                      <h3 className="text-lg font-bold text-black">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* So arbeiten wir */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                So arbeiten wir
              </h2>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl">
                Ein klarer Ablauf von der ersten Analyse bis zur laufenden
                Betreuung. Kein Blackbox-Reporting, sondern nachvollziehbare
                Schritte.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              {PROCESS.map((step, i) => (
                <FadeIn key={step.title} delay={i * 100}>
                  <div className="bg-[#F7F5F2] rounded-xl p-6 md:p-8 h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </span>
                      <h3 className="text-lg font-bold text-black">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={400}>
              <p className="mt-10 text-base text-gray-600 max-w-2xl">
                Mehr zu den einzelnen Leistungen findest du auf der{" "}
                <Link
                  href="/leistungen"
                  className="text-brand-accent font-semibold underline underline-offset-2 hover:text-black transition-colors"
                >
                  Leistungsübersicht
                </Link>
                . Wer tiefer einsteigen will, liest, was eine{" "}
                <Link
                  href="/wissen/ki-sichtbarkeit-dienstleister"
                  className="text-brand-accent font-semibold underline underline-offset-2 hover:text-black transition-colors"
                >
                  KI-Sichtbarkeit-Dienstleister
                </Link>{" "}
                wirklich ausmacht.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Ergebnisse */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="max-w-[1100px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                Ergebnisse, keine Versprechen
              </h2>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl">
                Dokumentierte Zahlen aus echten Projekten. Jede Kachel führt zur
                Methode oder Fallstudie dahinter.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {CASES.map((c, i) => (
                <FadeIn key={c.label} delay={i * 100}>
                  <Link
                    href={c.href}
                    className="group block h-full bg-white rounded-xl p-8 border border-gray-100 transition-all hover:shadow-md"
                  >
                    <div className="text-4xl md:text-5xl font-bold tracking-tight text-brand-accent mb-2">
                      {c.metric}
                    </div>
                    <div className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
                      {c.label}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {c.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-black group-hover:text-brand-accent transition-colors">
                      {c.cta}
                      <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Für wen */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                Für wen wir arbeiten
              </h2>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl">
                KI-Sichtbarkeit lohnt sich dort, wo es ein klares Angebot und eine
                definierte Zielgruppe gibt.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-6">
              {AUDIENCES.map((a, i) => (
                <FadeIn key={a.title} delay={i * 80}>
                  <div className="flex gap-4 bg-[#F7F5F2] rounded-xl p-6">
                    <CheckIcon className="w-6 h-6 text-brand-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-black mb-1">
                        {a.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {a.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Person / Trust */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="max-w-[1000px] mx-auto">
            <FadeIn>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 bg-white rounded-2xl p-8 md:p-10 border border-gray-100">
                <img
                  src="/vadim_shchepin_2.jpeg"
                  alt="Vadim Shchepin, KI-Sichtbarkeit Berater aus Hamburg"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg flex-shrink-0"
                />
                <div>
                  <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-2">
                    Direkt mit dem Gründer
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-4">
                    Vadim Shchepin
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Senior Engineer und KI-Sichtbarkeit Berater aus Hamburg. Ich
                    komme aus der Technik und verstehe deshalb nicht nur, was
                    optimiert werden muss, sondern auch, wie es sauber umgesetzt
                    wird. Bei mir gibt es keine Übergabe an ein Junior-Team: Du
                    arbeitest von der Analyse bis zur Messung mit derselben
                    Person.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/ueber-mich"
                      className="text-sm font-semibold text-black hover:text-brand-accent transition-colors inline-flex items-center gap-2"
                    >
                      Mehr über mich
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <a
                      href="https://www.linkedin.com/in/vadim-shchepin/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-600 hover:text-black transition-colors inline-flex items-center gap-2"
                    >
                      LinkedIn
                      <ArrowRightIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-white">
          <div className="max-w-[820px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                Häufige Fragen vor der Zusammenarbeit
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                Die Fragen, die Interessenten uns stellen, bevor sie eine Agentur
                für KI-Sichtbarkeit beauftragen.
              </p>
            </FadeIn>

            <div className="space-y-10">
              {FAQS.map((item, i) => (
                <FadeIn key={item.q} delay={i * 60}>
                  <article className="border-b border-black/10 pb-10 last:border-b-0 last:pb-0">
                    <h3 className="text-lg md:text-xl font-semibold text-black tracking-tight mb-3">
                      {item.q}
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {item.a}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={400}>
              <p className="mt-10 text-base text-gray-600">
                Noch unsicher beim Preis? Auf der{" "}
                <Link
                  href="/preise"
                  className="text-brand-accent font-semibold underline underline-offset-2 hover:text-black transition-colors"
                >
                  Preise-Seite
                </Link>{" "}
                findest du die Pakete im Überblick. Den Unterschied zwischen
                klassischer SEO und AI SEO erklären wir im Beitrag{" "}
                <Link
                  href="/wissen/seo-agentur-vs-ai-seo"
                  className="text-brand-accent font-semibold underline underline-offset-2 hover:text-black transition-colors"
                >
                  SEO-Agentur vs. AI SEO
                </Link>
                . Lokal in Hamburg? Dann ist die{" "}
                <Link
                  href="/hamburg/ai-seo-agentur"
                  className="text-brand-accent font-semibold underline underline-offset-2 hover:text-black transition-colors"
                >
                  AI SEO Agentur Hamburg
                </Link>{" "}
                dein Einstieg.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-6 md:px-12 lg:px-20 py-16 border-t border-black/10">
          <div className="max-w-[900px] mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                Lass uns deine KI-Sichtbarkeit prüfen
              </h2>
              <p className="text-gray-700 mb-8 max-w-xl mx-auto">
                Starte mit der kostenlosen Analyse oder buche direkt ein
                Erstgespräch. Du weißt vorher, woran du bist.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ai-sichtbarkeit-now">
                  <Button
                    text="Kostenlose KI-Sichtbarkeitsanalyse"
                    primary={true}
                    className="justify-center"
                  />
                </Link>
                <Link href="/termin">
                  <Button
                    text="Erstgespräch vereinbaren"
                    primary={false}
                    className="justify-center"
                  />
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
