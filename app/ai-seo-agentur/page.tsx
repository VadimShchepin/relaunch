import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { ProofLedger } from "@/components/sections/ProofLedger";

/* Drei Zahlen, dieselben wie auf /leistungen, /ergebnisse und /ai-sichtbarkeit.
   Quellen: AI-Performance-Report der Bing Webmaster Tools (Drei-Monats-Fenster
   15.03. bis 13.06.2026, Screenshot unter /image/proof/citations-aiseo-hamburg.webp),
   Projekt-Analytics, Google Search Console. Stand August 2026. */
const FACTS = [
  { value: "800", label: "KI-Zitate in 3 Monaten", note: "aiseo.hamburg, Copilot, 15.03. bis 13.06.2026" },
  { value: "+847 %", label: "KI-Traffic", note: "KinderAlbum, dokumentiert" },
  { value: "+55 %", label: "Klicks in 30 Tagen", note: "Handwerksbetrieb, Search Console" },
];

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
    out: "Prompt-Liste und Befund",
  },
  {
    title: "Umsetzung",
    description:
      "Wir bauen die Grundlagen: zitierbare Inhalte auf echte Kundenfragen, saubere Seitenstruktur, Schema und die technische Basis, damit KI-Crawler deine Seite verstehen.",
    out: "Antwortseiten, Schema, Technik",
  },
  {
    title: "Messung",
    description:
      "Wir testen vorher und nachher mit echten Prompts und tracken Nennungen, Zitate und KI-Traffic. Du siehst schwarz auf weiß, was sich bewegt, statt auf Versprechen zu vertrauen.",
    out: "Vorher-nachher-Vergleich",
  },
  {
    title: "Laufende Betreuung",
    description:
      "KI-Sichtbarkeit ist kein Projekt mit Enddatum. Wir bleiben dran, ergänzen Inhalte und reagieren auf Veränderungen der KI-Systeme, damit dein Vorsprung bestehen bleibt.",
    out: "Monatliche Messroutine",
  },
];

const CASES = [
  {
    metric: "800",
    label: "KI-Zitate in 3 Monaten",
    description:
      "aiseo.hamburg wurde laut Bing Webmaster Tools zwischen 15.03. und 13.06.2026 800-mal in Copilot-Antworten zitiert, aus dem Stand. Dieselbe Methode wenden wir für Kundenprojekte an.",
    href: "/ergebnisse",
    cta: "Zitate ansehen",
  },
  {
    metric: "+847 %",
    label: "KI-Traffic dokumentiert",
    description:
      "KinderAlbum: plus 847 Prozent KI-Traffic, dokumentiert über einen 90-Tage-Relaunch. Sichtbarkeit, die vorher schlicht nicht da war.",
    href: "/ergebnisse",
    cta: "Fallstudie ansehen",
  },
  {
    metric: "+55 %",
    label: "Klicks in 30 Tagen",
    description:
      "blitz-hamburg.de: plus 55 Prozent Klicks und plus 61 Prozent Impressionen in 30 Tagen laut Google Search Console, dazu reale Anrufe und WhatsApp-Anfragen.",
    href: "/ergebnisse",
    cta: "Wie wir messen",
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
      "Handwerk, Sanierung, Gastronomie und Services, die bei der Frage nach dem besten Anbieter in Hamburg genannt werden wollen.",
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
    a: "GEO, kurz für Generative Engine Optimization, ist die Disziplin, mit der dein Unternehmen in den Antworten generativer KI-Systeme genannt und zitiert wird, etwa in ChatGPT, Perplexity, Claude, Gemini und Google AI Overviews. Wo klassische SEO auf Platzierungen in der Trefferliste zielt, zielt GEO auf die Empfehlung selbst. Eng verwandt sind AEO (Answer Engine Optimization) und AI SEO. Wir behandeln sie als eine Disziplin, weil dieselben Hebel wirken: zitierbare Inhalte, klare Struktur, strukturierte Daten und Autoritätssignale.",
  },
  {
    q: "Welche Agentur hilft bei KI-Sichtbarkeit?",
    a: "Eine spezialisierte AI SEO Agentur hilft dir dabei, in den Antworten von ChatGPT, Perplexity, Claude, Gemini und Google AI Overviews genannt zu werden. Wir aus Hamburg haben uns genau darauf konzentriert: KI-Sichtbarkeit als eigene Disziplin, nicht als Beiwerk zur klassischen SEO. Wer eine Agentur für KI-Sichtbarkeit sucht, sollte auf drei Dinge achten: dokumentierte Ergebnisse, eine klare Messmethode und eine Ansprechperson, die das Thema technisch versteht.",
  },
  {
    q: "Was kostet eine AI SEO Agentur?",
    a: "Das hängt von Branche, Wettbewerb und Ausgangslage ab. Der Einstieg ist ein kostenloser 15-Minuten-Call: Du erfährst, ob du aktuell in KI-Antworten genannt wirst und welche drei Hebel am meisten bringen. Danach gibt es einen projektbasierten Umsetzungs-Sprint und eine laufende Betreuung pro Monat. Die Pakete findest du auf der Preise-Seite, den festen Preis für deinen Fall nennen wir nach dem Call.",
  },
  {
    q: "Wie unterscheidet sich AI SEO von klassischer SEO?",
    a: "Klassische SEO optimiert für die Trefferliste mit zehn blauen Links. KI-Systeme wählen dagegen nur wenige Quellen aus und fassen sie zu einer Empfehlung zusammen. Wer dort nicht erscheint, wird nicht verglichen, sondern übergangen. AI SEO setzt deshalb auf semantische Klarheit, strukturierte Daten und Autoritätssignale statt auf Keyword-Dichte. SEO bleibt das Fundament, aber ohne gezielte KI-Optimierung verpasst du den Kanal, über den immer mehr Kaufentscheidungen beginnen.",
  },
  {
    q: "Wie messt ihr Ergebnisse?",
    a: "Messung ist bei uns kein Extra, sondern Teil des Prozesses. Wir testen vor und nach der Umsetzung mit echten Prompts in den großen KI-Systemen und dokumentieren, ob und wie dein Unternehmen genannt wird. Zusätzlich tracken wir KI-Traffic über GA4 und Server-Logs sowie Rankings und Klicks in der Google Search Console. Wie das funktioniert, zeigen wir offen in unserem meistzitierten Beitrag zur Messung von KI-Sichtbarkeit.",
  },
  {
    q: "Arbeitet ihr nur in Hamburg?",
    a: "Unser Fokus liegt auf Hamburg, weil die persönliche Zusammenarbeit hier am direktesten ist. Projekte außerhalb Hamburgs betreuen wir regelmäßig remote, solange das Angebot klar definiert ist und die fachliche Passung stimmt. Bundesweite Zusammenarbeit ist also kein Problem.",
  },
  {
    q: "Warum mit euch statt mit einer großen Agentur?",
    a: "Weil du direkt mit dem Gründer arbeitest, ohne Übergabe an ein Junior-Team und ohne Agentur-Pipeline. Vadim Shchepin ist Senior Engineer und KI-Sichtbarkeit Berater aus Hamburg, kommt also aus der Technik und versteht nicht nur, was optimiert werden muss, sondern auch, wie es sauber umgesetzt wird. Ergebnisse stehen vor Ego, und wenn etwas keinen Sinn ergibt, sagen wir das offen.",
  },
];

const linkBase =
  "group flex items-baseline justify-between gap-flow border-t border-brand-line py-3 transition-colors hover:bg-brand-surface";

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
    <div className="relative w-full overflow-x-clip bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main>
        {/* ========== HERO: 7/5. Rechts drei belegte Zahlen statt der Demo, weil
            das Versprechen dieser Seite Messbarkeit ist. Die Demo steht eine
            Sektion tiefer, dort wo erklaert wird, was eine Nennung ist. ========== */}
        <section className="pt-28 pb-block lg:pt-32">
          <div className="mx-auto grid max-w-article gap-block px-6 lg:grid-cols-12 lg:gap-x-rule lg:px-12">
            <div className="lg:col-span-7">
              <FadeIn>
                <p className="text-micro uppercase tracking-eyebrow text-brand-accent-ink">AI SEO Agentur</p>
                <h1 className="mt-flow text-heading sm:text-title font-semibold text-black">
                  Die AI SEO Agentur aus Hamburg für <span className="text-brand-accent">echte KI-Sichtbarkeit</span>
                </h1>
                <p className="mt-flow max-w-measure text-lead text-brand-muted">
                  Wir machen dein Unternehmen in ChatGPT, Perplexity, Claude, Gemini und Google AI Overviews sichtbar. Die Disziplin dahinter heißt Generative Engine Optimization (GEO): datengetrieben, direkt mit dem Gründer und messbar an echten Antworten.
                </p>
                <div className="mt-stack flex flex-col gap-4 sm:flex-row">
                  <Button href="/termin" primary text="Kostenlosen 15-Min-Call buchen" className="!py-4 !px-8" />
                  <Button href="/contact" text="Lieber schreiben" className="!py-4 !px-8" />
                </div>
                <p className="mt-flow flex flex-wrap items-center gap-x-4 gap-y-2 text-meta text-brand-subtle">
                  {["Aus Hamburg", "Direkt mit dem Gründer", "Messbare Ergebnisse"].map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-brand-accent-ink" />
                      {item}
                    </span>
                  ))}
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-5 lg:pt-2">
              <FadeIn delay={120}>
                <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Gemessen, nicht behauptet</p>
                <dl className="mt-flow">
                  {FACTS.map((fact) => (
                    <div key={fact.label} className="flex items-baseline gap-flow border-t border-brand-line py-3">
                      <dt className="w-24 shrink-0 text-subheading font-semibold tabular-nums text-brand-text">{fact.value}</dt>
                      <dd className="text-meta text-brand-muted">
                        {fact.label}
                        <span className="block text-micro text-brand-subtle">{fact.note}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
                <Link href="/ergebnisse" className="mt-flow inline-flex items-center gap-1.5 border-t border-brand-line pt-3 text-meta font-medium text-brand-accent-ink hover:gap-2.5">
                  Alle Ergebnisse mit Screenshots
                  <ArrowRightIcon className="w-3 h-3" />
                </Link>
                <p className="mt-2 text-micro text-brand-subtle">Stand: August 2026</p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ========== PROBLEM: reine Lesespalte. Hier stand bis Runde 3 die
            Live-Demo: eine nachgebaute KI-Antwort mit erfundenen Quell-Domains
            (datenschutz-blog.de, edu-tools.de). Auf einer Seite, die Messung
            von Citations verkauft, ist eine erfundene Quellenzeile das falsche
            Bild, egal wie sie beschriftet ist. Belege stehen als Zahl mit
            Quelle und Datum weiter unten. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-8">
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Ausgangslage</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black">
                    Das Problem: Du bist für KI unsichtbar
                  </h2>
                  <div className="mt-stack max-w-measure text-body text-brand-muted">
                    <p>
                      Immer mehr Menschen starten ihre Recherche nicht bei Google, sondern bei ChatGPT, Perplexity oder den AI Overviews. Sie stellen eine Frage und bekommen eine fertige Empfehlung mit wenigen Namen. Die meisten Unternehmen tauchen dort nicht auf.
                    </p>
                    <p className="mt-flow">
                      Das Bittere daran: Es liegt selten am Angebot. Es liegt daran, dass die Website für KI-Systeme nicht klar, nicht zitierbar und nicht autoritativ genug ist. Während du unsichtbar bleibst, wird dein Wettbewerb empfohlen, oft mit dem schwächeren Produkt, aber der besseren Aufbereitung.
                    </p>
                    <p className="mt-stack border-t border-brand-edge pt-4 text-subheading font-semibold text-brand-text">
                      Genau diese Lücke schließen wir. Wir sorgen dafür, dass KI dein Unternehmen als Quelle erkennt und nennt.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== HALTUNG: vier Zeilen statt vier Karten. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Haltung</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    Was eine AI SEO Agentur heute leisten muss
                  </h2>
                  <p className="mt-flow text-meta text-brand-muted">
                    Vier Prinzipien, an denen wir jede Entscheidung messen.
                  </p>
                </div>

                <div>
                  {VALUES.map((value, i) => (
                    <div key={value.title} className="flex gap-flow border-t border-brand-edge py-3">
                      <span className="w-7 shrink-0 pt-1 text-micro tabular-nums text-brand-subtle">{`0${i + 1}`}</span>
                      <div>
                        <h3 className="text-lead font-semibold text-brand-text">{value.title}</h3>
                        <p className="max-w-measure text-meta text-brand-muted">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== ABLAUF: vier Schritte mit Lieferobjekt. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Ablauf</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    So arbeiten wir
                  </h2>
                  <p className="mt-flow text-meta text-brand-muted">
                    Von der ersten Analyse bis zur laufenden Betreuung. Kein Blackbox-Reporting, sondern nachvollziehbare Schritte.
                  </p>
                </div>

                <div>
                  <div className="hidden lg:grid lg:grid-cols-[1fr_190px] lg:gap-x-flow">
                    <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Schritt</p>
                    <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Du bekommst</p>
                  </div>
                  <div className="mt-2">
                    {PROCESS.map((step, i) => (
                      <div key={step.title} className="grid gap-y-1 border-t border-brand-edge py-3 lg:grid-cols-[1fr_190px] lg:gap-x-flow">
                        <div>
                          <h3 className="flex items-baseline gap-2 text-lead font-semibold text-brand-text">
                            <span className="text-micro tabular-nums text-brand-subtle">{`0${i + 1}`}</span>
                            {step.title}
                          </h3>
                          <p className="max-w-measure text-meta text-brand-muted">{step.description}</p>
                        </div>
                        <p className="flex items-start gap-2 text-micro text-brand-subtle lg:pt-1.5">
                          <CheckIcon className="mt-0.5 w-3 h-3 shrink-0 text-brand-accent-ink" />
                          {step.out}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 max-w-measure text-meta text-brand-subtle">
                    Alle Leistungen im Detail auf der{" "}
                    <Link href="/leistungen" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      Leistungsübersicht
                    </Link>
                    . Wer tiefer einsteigen will, liest, was ein{" "}
                    <Link href="/wissen/ki-sichtbarkeit-dienstleister" className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4">
                      KI-Sichtbarkeit-Dienstleister
                    </Link>{" "}
                    wirklich ausmacht.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== ERGEBNISSE: drei Zeilen mit Zahl, Quelle und Beleglink.
            Der schematische SVG-Verlauf ist raus: seine Kurve war gezeichnet,
            nicht gemessen, und genau das ist auf einer Belegseite falsch. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Belege</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    Ergebnisse, keine Versprechen
                  </h2>
                  <p className="mt-flow text-meta text-brand-muted">
                    Dokumentierte Zahlen aus echten Projekten, mit Quelle aus den Bing Webmaster Tools und der Google Search Console.
                  </p>
                </div>

                <div>
                  <dl>
                    {CASES.map((c) => (
                      <div key={c.label} className="grid gap-y-1 border-t border-brand-edge py-3 lg:grid-cols-[120px_1fr] lg:gap-x-flow">
                        <dt>
                          <span className="block text-heading font-semibold tabular-nums text-brand-text">{c.metric}</span>
                          <span className="block text-micro uppercase tracking-eyebrow text-brand-subtle">{c.label}</span>
                        </dt>
                        <dd>
                          <p className="max-w-measure text-meta lg:text-body text-brand-muted">{c.description}</p>
                          <Link href={c.href} className="mt-1 inline-flex items-center gap-1.5 text-micro font-medium text-brand-accent-ink hover:gap-2.5">
                            {c.cta}
                            <ArrowRightIcon className="w-3 h-3" />
                          </Link>
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-stack border-t border-brand-edge pt-4">
                    <h3 className="max-w-measure text-subheading font-semibold text-brand-text">
                      Von nahe null auf rund 800 KI-Zitate
                    </h3>
                    <p className="mt-2 max-w-measure text-meta text-brand-muted">
                      Der Punkt ist nicht der Ausschlag eines einzelnen Tages, sondern dass die Zahl nach Projektbeginn überhaupt entsteht. Zwei datierte Stände aus derselben Konsole: Der Tagesexport vom 30.05.2026 zählt 420 Zitate zwischen 28.02. und 28.05., davon 382 allein im Mai. Der AI-Performance-Bericht für das Fenster 15.03. bis 13.06.2026 steht bei 800.{" "}
                      <Link href="/ergebnisse" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                        Die Dashboards dazu
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== BELEGE: dieselben sechs Kundenergebnisse wie in der
            animierten <Proof />-Sektion der Startseite, hier als Tabelle. Die
            GSAP-Fassung kostet 6.300px Scroll fuer 33 Woerter. ========== */}
        <ProofLedger />

        {/* ========== ZIELGRUPPEN: vier Zeilen, zwei Spalten. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Passung</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    Für wen wir arbeiten
                  </h2>
                  <p className="mt-flow text-meta text-brand-muted">
                    KI-Sichtbarkeit lohnt sich dort, wo es ein klares Angebot und eine definierte Zielgruppe gibt.
                  </p>
                </div>

                <div className="sm:grid sm:grid-cols-2 sm:gap-x-stack">
                  {AUDIENCES.map((a) => (
                    <div key={a.title} className="border-t border-brand-line py-3">
                      <h3 className="text-body font-semibold text-brand-text">{a.title}</h3>
                      <p className="mt-0.5 text-meta text-brand-muted">{a.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== PERSON: 640x800 WebP auf 320px, echtes 2x und 37kb statt
            der 329kb-JPEG-Datei, die vorher auf 128px skaliert wurde. Das
            Original bleibt als Pressefoto verlinkt. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-4">
                  <img
                    src="/image/agentur/vadim-shchepin-640.webp"
                    width={640}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    alt="Vadim Shchepin, KI-Sichtbarkeit Berater aus Hamburg"
                    className="w-48 rounded-card border border-brand-line object-cover sm:w-64 lg:w-80"
                  />
                  <p className="mt-3 text-micro text-brand-subtle">
                    <a href="/vadim_shchepin_2.jpeg" className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4">
                      Pressefoto in voller Auflösung
                    </a>{" "}
                    (JPEG, 1920 x 2560). Weiteres Material im{" "}
                    <Link href="/pressekit" className="underline decoration-brand-line underline-offset-4 hover:text-brand-accent-ink">
                      Pressekit
                    </Link>
                    .
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Direkt mit dem Gründer</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black">Vadim Shchepin</h2>
                  <p className="mt-flow max-w-measure text-body text-brand-muted">
                    Senior Engineer und KI-Sichtbarkeit Berater aus Hamburg. Ich komme aus der Technik und verstehe deshalb nicht nur, was optimiert werden muss, sondern auch, wie es sauber umgesetzt wird. Bei mir gibt es keine Übergabe an ein Junior-Team: Du arbeitest von der Analyse bis zur Messung mit derselben Person.
                  </p>
                  <div className="mt-stack flex flex-wrap items-center gap-x-stack gap-y-2 border-t border-brand-line pt-3 text-meta">
                    <Link href="/ueber-mich" className="inline-flex items-center gap-1.5 font-medium text-brand-accent-ink hover:gap-2.5">
                      Mehr über mich
                      <ArrowRightIcon className="w-3 h-3" />
                    </Link>
                    <a
                      href="https://www.linkedin.com/in/vadim-shchepin/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-brand-subtle hover:text-brand-accent-ink"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <h2 className="text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    Häufige Fragen vor der Zusammenarbeit
                  </h2>
                  <p className="mt-flow text-meta text-brand-muted">
                    Die Fragen, die Interessenten stellen, bevor sie eine Agentur für KI-Sichtbarkeit beauftragen.
                  </p>
                </div>
                <div className="sm:grid sm:grid-cols-2 sm:gap-x-stack">
                  {FAQS.map((item) => (
                    <div key={item.q} className="border-t border-brand-line py-3">
                      <h3 className="text-body font-semibold text-brand-text">{item.q}</h3>
                      <p className="mt-1 text-meta text-brand-muted">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== ABSCHLUSS ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-6">
                  <h2 className="text-subheading md:text-heading lg:text-title font-semibold text-black">
                    Lass uns deine KI-Sichtbarkeit prüfen
                  </h2>
                </div>
                <div className="lg:col-span-6">
                  <p className="max-w-measure text-lead text-brand-muted">
                    15 Minuten, kostenlos, kein Verkaufsdruck. Du weißt danach, woran du bist.
                  </p>
                  <div className="mt-stack flex flex-col gap-4 sm:flex-row">
                    <Button href="/termin" primary text="Kostenlosen 15-Min-Call buchen" className="!py-4 !px-8" />
                    <Button href="/contact" text="Lieber schreiben" className="!py-4 !px-8" />
                  </div>
                  <p className="mt-stack border-t border-brand-line pt-3 text-meta text-brand-subtle">
                    Pakete und Preise auf der{" "}
                    <Link href="/preise" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      Preise-Seite
                    </Link>
                    . Den Unterschied zwischen klassischer SEO und AI SEO erklären wir in{" "}
                    <Link href="/wissen/seo-agentur-vs-ai-seo" className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4">
                      SEO-Agentur vs. AI SEO
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
    </div>
  );
}
