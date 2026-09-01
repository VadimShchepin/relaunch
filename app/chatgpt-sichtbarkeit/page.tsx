import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, OpenAIIcon } from "@/components/ui/Icons";
import { ProofLedger } from "@/components/sections/ProofLedger";
import { DataChart } from "@/components/ui/DataChart";

type FAQItem = {
  q: string;
  a: string;
};

const MECHANISMS = [
  {
    title: "Trainingsdaten",
    body: "Vieles von dem, was ChatGPT kennt, stammt aus dem Material, mit dem das Modell trainiert wurde. Wer dort oft, klar und im richtigen Zusammenhang vorkommt, wird auch ohne Live-Suche genannt. Der langsame, aber stabile Teil.",
    speed: "Monate",
  },
  {
    title: "Live-Websuche (Grounding)",
    body: "Bei aktuellen oder lokalen Fragen sucht ChatGPT im Netz, gestützt auf den Bing-Index, und liest die Treffer aus. Hier zählt, ob deine Seiten gefunden, gecrawlt und sauber verstanden werden.",
    speed: "Wochen",
  },
  {
    title: "Zitierte Quellen",
    body: "Wenn ChatGPT Quellen verlinkt, wählt es Seiten aus, die eine Frage direkt und nachprüfbar beantworten. Definierte Begriffe, benannte Tools und konkrete Zahlen machen eine Seite zitierbar.",
    speed: "Wochen",
  },
];

const STEPS = [
  {
    title: "Zitierbare Inhalte mit klarer Struktur",
    body: "Seiten, die eine Frage in den ersten Sätzen beantworten und nicht erst nach drei Absätzen Einleitung. Klare Überschriften, kurze Definitionen, beantwortbare Abschnitte. So findet ein Modell die Antwort und kann sie übernehmen.",
  },
  {
    title: "Definierte Begriffe, benannte Tools, echte Zahlen",
    body: "Das Rezept hinter unserer meistzitierten Seite. Wer Fachbegriffe sauber erklärt, konkrete Tools nennt und mit Benchmark-Zahlen arbeitet, wird als verlässliche Quelle behandelt. Vage Marketingtexte werden übergangen.",
  },
  {
    title: "Schema und technische Basis",
    body: "Strukturierte Daten, saubere Seitenarchitektur und Zugang für KI-Crawler sorgen dafür, dass Inhalte überhaupt korrekt eingelesen werden. Ohne diese Basis bleibt der beste Text für die Live-Websuche unsichtbar.",
  },
  {
    title: "Autorität von außen",
    body: "ChatGPT bewertet nicht nur deine eigene Website. Nennungen auf Branchenseiten, in Verzeichnissen und in der Presse, dazu konsistente Unternehmensdaten, geben dem Modell das Vertrauen, deine Marke aktiv zu empfehlen.",
  },
];

const STATS = [
  {
    value: "+55 %",
    label: "mehr Klicks bei blitz-hamburg.de in 30 Tagen, dazu +61 % Impressionen.",
    source: "Google Search Console",
    href: "/wissen/chatgpt-seo",
  },
  {
    value: "+847 %",
    label: "KI-Traffic für KinderAlbum, nachdem die Inhalte zitierbar wurden.",
    source: "Projekt-Analytics",
    href: "/wissen/sichtbarkeit-in-chatgpt",
  },
  {
    value: "248",
    label: "Citations auf einer einzigen Seite: unser Leitfaden zum Messen, meistzitierte Quelle der Domain.",
    source: "Bing Webmaster Tools, Export 30.05.2026",
    href: "/wissen/ki-sichtbarkeit-messen",
  },
];

/* AI-Page-Stats-Export der Bing Webmaster Tools fuer aiseo.hamburg, Export vom
   30.05.2026: 415 Citations auf 10 von 42 Seiten. Das ist die Seitenaufteilung
   desselben Exports, dessen Tagesreihe 420 Zitate zwischen 28.02. und
   28.05.2026 zaehlt, also kein 30-Tage-Fenster: in den letzten 30 Tagen des
   Exports liegen nur 382 Zitate. Bing ist relevant, weil das
   Grounding von ChatGPT ueber den Bing-Index laeuft und weil es die einzige
   Plattform ist, die Citations exportiert. Dieselben Werte stehen auf
   /wissen/citation-rate und /wissen/bing-copilot-ki-sichtbarkeit. */
const CITATION_PAGES = [
  { label: "/wissen/ki-sichtbarkeit-messen", value: 248 },
  { label: "/wissen/ki-sichtbarkeit", value: 63 },
  { label: "/wissen/ki-sichtbarkeit-ecommerce", value: 45 },
  { label: "/wissen/sichtbarkeit-in-chatgpt", value: 17 },
  { label: "/wissen/technische-ki-sichtbarkeit", value: 11 },
  { label: "restliche zitierte Seiten (5)", value: 31 },
];

const PLATFORMS = ["ChatGPT", "Perplexity", "Claude", "Gemini", "Google AI Overviews"];

const FAQS: FAQItem[] = [
  {
    q: "Wie werde ich von ChatGPT empfohlen?",
    a: "ChatGPT empfiehlt Marken, die als klare, zitierbare Quelle erkennbar sind. Dafür braucht es drei Dinge: Inhalte, die eine Frage direkt beantworten, mit definierten Begriffen, benannten Tools und konkreten Zahlen, eine technische Basis, über die KI-Crawler deine Seiten sauber einlesen können, und Autoritätssignale von außen wie Nennungen und konsistente Unternehmensdaten. Reine Werbetexte ohne nachprüfbare Substanz werden übergangen.",
  },
  {
    q: "Kann man ChatGPT-Rankings beeinflussen?",
    a: "ChatGPT hat keine Ranking-Liste wie Google. Es gibt keine Position 1 bis 10, sondern eine Auswahl von wenigen Quellen pro Antwort. Beeinflussen lässt sich, ob deine Marke zu dieser Auswahl gehört: über Qualität und Struktur der Inhalte, über die technische Erreichbarkeit für die Live-Websuche und über die Autorität deiner Marke im Netz. Was nicht funktioniert: clevere Prompts oder Tricks.",
  },
  {
    q: "Wie lange dauert es, bis ich in ChatGPT auftauche?",
    a: "Das hängt vom Mechanismus ab. Über die Live-Websuche, bei der ChatGPT aktuelle Fragen mit dem Bing-Index beantwortet, sind erste Veränderungen oft in vier bis acht Wochen sichtbar, sobald deine Seiten gecrawlt und verstanden sind. Über die Trainingsdaten dauert es länger, hier reden wir über mehrere Monate, weil Modelle in Zyklen aktualisiert werden. Wer früh als Quelle etabliert ist, wird in späteren Zyklen bestätigt.",
  },
  {
    q: "Ist meine Website aktuell in ChatGPT sichtbar?",
    a: "Das lässt sich testen. Wir fragen ChatGPT, Perplexity, Claude, Gemini und Google AI Overviews mit den Formulierungen, die deine Kunden tatsächlich nutzen, und schauen, ob deine Marke genannt wird, wer stattdessen empfohlen wird und warum. Diese Bestandsaufnahme machen wir live im kostenlosen 15-Minuten-Call.",
  },
  {
    q: "Was kostet das?",
    a: "Der 15-Minuten-Call ist kostenlos. Erst danach reden wir über Umsetzung, und du weißt vorher, woran du bist. Welche Pakete es für Umsetzung und laufende Betreuung gibt, siehst du auf der Preisseite, den Festpreis für deinen Fall nennen wir nach dem Call.",
  },
  {
    q: "Ist ChatGPT-Optimierung dasselbe wie GEO?",
    a: "ChatGPT-Sichtbarkeit ist der sichtbarste Teil einer größeren Disziplin: Generative Engine Optimization (GEO). GEO sorgt dafür, dass eine Marke in den Antworten generativer KI-Systeme genannt und zitiert wird, ChatGPT ist dabei nur eine von mehreren Oberflächen. Verwandt sind AEO (Answer Engine Optimization) und AI SEO. Die Hebel sind dieselben: zitierbare Inhalte, saubere Technik, Autorität.",
  },
  {
    q: "Gilt das auch für Perplexity und Google AI Overviews?",
    a: "Ja. Zitierbare Inhalte, saubere Technik und Autorität wirken auf alle großen KI-Systeme. Perplexity reagiert wegen seiner Live-Suche besonders schnell, Google AI Overviews und ChatGPT folgen den eigenen Crawl- und Trainingszyklen. Wir messen den Fortschritt parallel über alle Plattformen.",
  },
];

export default function ChatGptSichtbarkeitPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ChatGPT Sichtbarkeit / ChatGPT Optimierung",
    serviceType: "Generative Engine Optimization (GEO) / AI SEO",
    areaServed: "DE",
    url: "https://aiseo.hamburg/chatgpt-sichtbarkeit",
    description:
      "Wir machen Unternehmen in ChatGPT sichtbar: zitierbare Inhalte, technische Basis und Autorität, damit deine Marke genannt und empfohlen wird. Erfolg gemessen mit Prompt-Tests in ChatGPT, Perplexity, Claude, Gemini und Google AI Overviews.",
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
        {/* ========== HERO: linksbuendige Lesespalte. Im rechten Kanal lief bis
            Runde 3 eine nachgebaute KI-Antwort mit erfundenen Quell-Domains
            (datenschutz-blog.de, edu-tools.de, treatwell.de). Wer Messung von
            Citations verkauft, darf keine erfundene Quellenzeile zeigen. Die
            echten Citation-Zahlen stehen weiter unten, mit Quelle und
            Exportdatum. ========== */}
        <section className="pt-28 pb-block lg:pt-32">
          <div className="mx-auto grid max-w-article gap-block px-6 lg:grid-cols-12 lg:gap-x-rule lg:px-12">
            <div className="lg:col-span-8">
              <FadeIn>
                <p className="inline-flex items-center gap-2 text-micro uppercase tracking-eyebrow text-brand-accent-ink">
                  <OpenAIIcon className="w-3.5 h-3.5" />
                  ChatGPT Sichtbarkeit
                </p>
                <h1 className="mt-flow text-heading sm:text-title xl:text-display font-semibold text-black">
                  In ChatGPT <span className="text-brand-accent">gefunden werden</span>
                </h1>
                <p className="mt-flow max-w-measure text-lead text-brand-muted">
                  OpenAI nennt für Oktober 2025 rund 800 Millionen Menschen, die ChatGPT wöchentlich nutzen. Wenn sie nach einer Empfehlung fragen, willst du die genannte Antwort sein, nicht die unsichtbare Alternative.
                </p>
                <div className="mt-stack flex flex-col gap-4 sm:flex-row">
                  <Button href="/ai-sichtbarkeit-now" primary text="Wirst du in ChatGPT genannt?" className="!py-4 !px-8" />
                  <Button href="/termin" text="Erstgespräch vereinbaren" className="!py-4 !px-8" />
                </div>
                <p className="mt-flow text-meta text-brand-subtle">
                  Kostenloser 15-Minuten-Call. KI-Sichtbarkeit Berater aus Hamburg. Gemessen mit echten Prompt-Tests.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ========== WARUM: dichte Lesespalte, ein typografischer Anker statt
            des SVG-Schemas, dessen Beschriftung auf 390px bei 7px landete. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Der Kanal</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    Warum ChatGPT-Sichtbarkeit zählt
                  </h2>
                </div>

                <div className="max-w-measure text-body text-brand-muted">
                  <p>
                    Immer mehr Menschen googeln nicht mehr, sie fragen. Statt zehn blauer Links zum Selbstvergleichen bekommen sie von ChatGPT eine fertige Empfehlung mit zwei bis fünf Namen. Wer in dieser kurzen Liste fehlt, kommt im Entscheidungsprozess gar nicht erst vor.
                  </p>
                  <p className="mt-flow">
                    Diese Empfehlungen sind nicht harmlos. Wer ChatGPT fragt, hat oft schon eine konkrete Absicht und handelt nach der Antwort: klickt auf den genannten Anbieter, schreibt ihn an, kauft. Eine Nennung ist deshalb kein Eitelkeitswert, sondern ein Vertriebskanal.
                  </p>
                  <p className="mt-stack border-t border-brand-edge pt-4 text-subheading font-semibold text-brand-text">
                    Die Frage ist nicht mehr, ob deine Kunden KI nutzen. Die Frage ist, ob ChatGPT dich nennt, wenn sie es tun.
                  </p>
                  <p className="mt-flow">
                    Die Disziplin dahinter heißt Generative Engine Optimization (GEO), oft auch Answer Engine Optimization (AEO) oder AI SEO. ChatGPT-Sichtbarkeit ist der sichtbarste Teil davon. Dieselbe Arbeit macht dich auch in Perplexity, Claude, Gemini und Google AI Overviews auffindbar.{' '}
                    <Link href="/geo-optimierung" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      Was GEO umfasst
                    </Link>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== MECHANIK: drei Zeilen mit Wirkzeit, statt drei Karten und
            eines zweiten SVG-Schemas. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Mechanik</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    Wie ChatGPT entscheidet, wen es empfiehlt
                  </h2>
                  <p className="mt-flow text-meta text-brand-muted">
                    Drei Quellen. Wer alle drei bedient, wird zuverlässig genannt.
                  </p>
                </div>

                <div>
                  <div className="hidden lg:grid lg:grid-cols-[1fr_120px] lg:gap-x-flow">
                    <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Quelle</p>
                    <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Wirkt in</p>
                  </div>
                  <div className="mt-2">
                    {MECHANISMS.map((m, i) => (
                      <div key={m.title} className="grid gap-y-1 border-t border-brand-edge py-3 lg:grid-cols-[1fr_120px] lg:gap-x-flow">
                        <div>
                          <h3 className="flex items-baseline gap-2 text-lead font-semibold text-brand-text">
                            <span className="text-micro tabular-nums text-brand-subtle">{`0${i + 1}`}</span>
                            {m.title}
                          </h3>
                          <p className="max-w-measure text-meta text-brand-muted">{m.body}</p>
                        </div>
                        <p className="text-micro text-brand-subtle lg:pt-1.5">{m.speed}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== LEISTUNG: vier Zeilen. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Umsetzung</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    Was wir konkret tun
                  </h2>
                  <p className="mt-flow text-meta text-brand-muted">
                    Vier Bausteine, die aus einer übergangenen Website eine Marke machen, die ChatGPT empfiehlt.
                  </p>
                </div>

                <div>
                  {STEPS.map((step, i) => (
                    <div key={step.title} className="flex gap-flow border-t border-brand-edge py-3">
                      <span className="w-7 shrink-0 pt-1 text-micro tabular-nums text-brand-subtle">{`0${i + 1}`}</span>
                      <div>
                        <h3 className="text-lead font-semibold text-brand-text">{step.title}</h3>
                        <p className="max-w-measure text-meta text-brand-muted">{step.body}</p>
                      </div>
                    </div>
                  ))}
                  <p className="mt-3 max-w-measure text-meta text-brand-subtle">
                    Tiefer einsteigen:{' '}
                    <Link href="/wissen/sichtbarkeit-in-chatgpt" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      Sichtbarkeit in ChatGPT
                    </Link>
                    ,{' '}
                    <Link href="/wissen/chatgpt-seo" className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4">
                      ChatGPT SEO
                    </Link>{' '}
                    oder{' '}
                    <Link href="/hamburg/chatgpt-optimierung" className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4">
                      ChatGPT Optimierung für Hamburg
                    </Link>
                    .
                  </p>
                  <p className="mt-3 max-w-measure text-meta text-brand-subtle">
                    Den Platz unter der Antwort kann man seit dem 31. August 2026 in Deutschland auch kaufen:{' '}
                    <Link href="/chatgpt-ads" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      ChatGPT Ads schalten
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== MESSUNG: Text links, eigene Exportzahlen rechts. Bing ist
            hier kein Umweg: das Grounding von ChatGPT laeuft ueber den
            Bing-Index, und nur Bing exportiert Citations. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-7">
                  <h2 className="text-subheading md:text-heading font-semibold text-black">So messen wir</h2>
                  <p className="mt-flow max-w-measure text-body text-brand-muted">
                    KI-Sichtbarkeit ist messbar, auch ohne Ranking-Tabelle. Wir definieren die Fragen, die deine Kunden wirklich stellen, und stellen sie vor und nach der Umsetzung, über alle großen Plattformen. So siehst du, ob sich deine Nennung verändert und wo du Wettbewerbern den Platz wegnimmst.
                  </p>
                  <ul className="mt-flow flex flex-wrap gap-x-4 gap-y-1.5 border-t border-brand-line pt-3">
                    {PLATFORMS.map((p) => (
                      <li key={p} className="text-meta font-medium text-brand-text">
                        {p}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-flow max-w-measure text-body text-brand-muted">
                    Dazu kommen echte Plattformdaten. Das Grounding von ChatGPT läuft über den Bing-Index, und die Bing Webmaster Tools sind die einzige Konsole, die Citations exportiert. Deshalb ist der Bing-Export unser hartes Zahlenfundament, auch für ChatGPT.
                  </p>
                  <p className="mt-flow text-meta text-brand-subtle">
                    Die Methode liegt offen:{' '}
                    <Link href="/wissen/ki-sichtbarkeit-messen" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      KI-Sichtbarkeit messen
                    </Link>
                    , die meistzitierte Seite, die wir in KI-Antworten haben.
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-card border border-brand-line bg-white p-4 sm:p-5">
                    <DataChart
                      frame={false}
                      variant="row"
                      headingLevel="p"
                      title="Citations pro Seite"
                      subject="aiseo.hamburg"
                      axis={{ title: "Citations" }}
                      highlight="peak"
                      points={CITATION_PAGES}
                      stats={[
                        { label: "Gesamt", value: "415" },
                        { label: "Seiten", value: "10 von 42" },
                        { label: "Top-Seite", value: "59,8 %" },
                      ]}
                      table={false}
                    />
                  </div>
                  <p className="mt-3 border-t border-brand-hairline pt-3 text-meta text-brand-subtle">
                    Keine Glocke, sondern eine steile Kurve: eine Seite trägt fast 60 Prozent aller Citations, 32 weitere Artikel bekamen null. Export vom 30. Mai 2026, AI Page Stats der Bing Webmaster Tools.{' '}
                    <Link href="/wissen/citation-rate" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      Citation Rate berechnen
                    </Link>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== ERGEBNISSE: dunkles Vollband, drei Zeilen mit Quelle. ========== */}
        <section className="bg-brand-night py-rule text-white">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <h2 className="text-subheading md:text-heading font-semibold lg:text-subheading">Ergebnisse</h2>
                  <p className="mt-flow text-meta text-brand-line">Keine Versprechen, sondern Zahlen aus echten Projekten.</p>
                  <Link href="/ergebnisse" className="mt-flow inline-flex items-center gap-1.5 border-t border-white/15 pt-3 text-meta font-medium text-brand-accent hover:gap-2.5">
                    Alle Ergebnisse mit nachprüfbaren Zahlen
                    <ArrowRightIcon className="w-3 h-3" />
                  </Link>
                </div>

                <dl>
                  {STATS.map((stat) => (
                    <div key={stat.value} className="grid gap-y-1 border-t border-white/15 py-3 lg:grid-cols-[120px_1fr] lg:gap-x-flow">
                      <dt className="text-heading font-semibold tabular-nums text-brand-accent">{stat.value}</dt>
                      <dd>
                        <p className="max-w-measure text-meta lg:text-body text-brand-line">{stat.label}</p>
                        <p className="mt-1 flex flex-wrap items-center gap-x-3 text-micro text-white/50">
                          {stat.source}
                          <Link href={stat.href} className="font-medium text-brand-accent hover:underline">
                            Mehr lesen
                          </Link>
                        </p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== BELEGE: dieselben sechs Kundenergebnisse wie in der
            animierten <Proof />-Sektion der Startseite, hier als Tabelle.
            Die GSAP-Fassung brauchte auf dieser Seite 6.300px Scroll fuer 33
            Woerter; diese braucht rund 600px und sagt mehr. ========== */}
        <ProofLedger />

        {/* ========== FAQ: zwei Spalten, Hairlines. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <h2 className="text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                  Häufige Fragen zur ChatGPT-Sichtbarkeit
                </h2>
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
                    Lass uns prüfen, ob ChatGPT dich nennt
                  </h2>
                </div>
                <div className="lg:col-span-6">
                  <p className="max-w-measure text-lead text-brand-muted">
                    Starte mit dem kostenlosen 15-Minuten-Call. Du erfährst, ob du in ChatGPT genannt wirst, wer stattdessen empfohlen wird und welche drei Hebel am meisten bringen.
                  </p>
                  <div className="mt-stack flex flex-col gap-4 sm:flex-row">
                    <Button href="/termin" primary text="Kostenlosen 15-Min-Call buchen" className="!py-4 !px-8" />
                    <Button href="/contact" text="Lieber schreiben" className="!py-4 !px-8" />
                  </div>
                  <p className="mt-stack border-t border-brand-line pt-3 text-meta text-brand-subtle">
                    Pakete und Preise auf der{' '}
                    <Link href="/preise" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      Preisseite
                    </Link>
                    . Wer dahintersteckt, liest du{' '}
                    <Link href="/ueber-mich" className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4">
                      über mich
                    </Link>
                    , und was die{' '}
                    <Link href="/ai-seo-agentur" className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4">
                      AI SEO Agentur
                    </Link>{' '}
                    sonst noch macht.
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
