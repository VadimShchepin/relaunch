import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckIcon, ArrowRightIcon, OpenAIIcon } from "@/components/ui/Icons";
import { Proof } from "@/components/sections/Proof";
import {
  SourceSelectionVisual,
  VisibilityCompareVisual,
  PillarsVisual,
} from "@/components/sections/ConversionVisuals";

type FAQItem = {
  q: string;
  a: string;
};

const MECHANISMS = [
  {
    title: "Trainingsdaten",
    body: "Vieles, was ChatGPT „weiß“, stammt aus dem Material, mit dem das Modell trainiert wurde. Wer dort oft, klar und im richtigen Zusammenhang vorkommt, wird auch ohne Live-Suche genannt. Das ist der langsame, aber stabile Teil: Er baut sich über Monate auf und hält.",
  },
  {
    title: "Live-Websuche (Grounding)",
    body: "Bei aktuellen oder lokalen Fragen sucht ChatGPT im Netz, gestützt auf den Bing-Index, und liest die Treffer aus. Hier zählt, ob deine Seiten gefunden, gecrawlt und sauber verstanden werden. Das ist der schnelle Hebel: Änderungen wirken oft in Wochen, nicht Monaten.",
  },
  {
    title: "Zitierte Quellen",
    body: "Wenn ChatGPT Quellen verlinkt, wählt es Seiten aus, die eine Frage direkt und nachprüfbar beantworten. Definierte Begriffe, benannte Tools und konkrete Zahlen machen eine Seite zitierbar. Genau diese Seiten landen als Beleg unter der Antwort.",
  },
];

const STEPS = [
  {
    title: "Zitierbare Inhalte mit klarer Struktur",
    body: "Wir bauen Seiten, die eine Frage in den ersten Sätzen beantworten und nicht erst nach drei Absätzen Einleitung. Klare Überschriften, kurze Definitionen, beantwortbare Abschnitte. So findet ein Modell die Antwort und kann sie übernehmen.",
  },
  {
    title: "Definierte Begriffe, benannte Tools, echte Zahlen",
    body: "Das ist das Rezept hinter unserer meistzitierten Seite. Wer Fachbegriffe sauber erklärt, konkrete Tools nennt und mit Benchmark-Zahlen arbeitet, wird von ChatGPT als verlässliche Quelle behandelt. Vage Marketingtexte werden übergangen.",
  },
  {
    title: "Schema und technische Basis",
    body: "Strukturierte Daten, saubere Seitenarchitektur und Zugang für KI-Crawler sorgen dafür, dass deine Inhalte überhaupt korrekt eingelesen werden. Ohne diese Basis bleibt der beste Text für die Live-Websuche unsichtbar.",
  },
  {
    title: "Autorität von außen",
    body: "ChatGPT bewertet nicht nur deine eigene Website. Nennungen auf Branchenseiten, Verzeichnissen und in der Presse, dazu konsistente Unternehmensdaten, geben dem Modell das Vertrauen, deine Marke aktiv zu empfehlen.",
  },
];

const STATS = [
  {
    value: "+55 %",
    label: "mehr Klicks bei blitz-hamburg.de in 30 Tagen, dazu +61 % Impressionen.",
    href: "/wissen/chatgpt-seo",
  },
  {
    value: "+847 %",
    label: "KI-Traffic für KinderAlbum, nachdem die Inhalte zitierbar wurden.",
    href: "/wissen/sichtbarkeit-in-chatgpt",
  },
  {
    value: "#1",
    label: "meistzitierte Quelle in Copilot- und Bing-KI-Antworten: unser Leitfaden zum Messen.",
    href: "/wissen/ki-sichtbarkeit-messen",
  },
];

const FAQS: FAQItem[] = [
  {
    q: "Wie werde ich von ChatGPT empfohlen?",
    a: "ChatGPT empfiehlt Marken, die als klare, zitierbare Quelle erkennbar sind. Dafür braucht es drei Dinge: Inhalte, die eine Frage direkt beantworten (mit definierten Begriffen, benannten Tools und konkreten Zahlen), eine technische Basis, über die KI-Crawler deine Seiten sauber einlesen können, und Autoritätssignale von außen wie Nennungen und konsistente Unternehmensdaten. Reine Werbetexte ohne nachprüfbare Substanz werden übergangen. Wir bauen genau diese Substanz auf und prüfen mit Prompt-Tests, ob ChatGPT dich danach nennt.",
  },
  {
    q: "Kann man ChatGPT-Rankings beeinflussen?",
    a: "ChatGPT hat keine Ranking-Liste wie Google. Es gibt keine Position 1 bis 10, sondern eine Auswahl von wenigen Quellen pro Antwort. Beeinflussen lässt sich, ob deine Marke zu dieser Auswahl gehört. Das geschieht über die Qualität und Struktur deiner Inhalte, über die technische Erreichbarkeit für die Live-Websuche und über die Autorität deiner Marke im Netz. Was nicht funktioniert: clevere Prompts oder Tricks. Die Frage bestimmt nur, was gefragt wird, nicht, welche Quelle ChatGPT als Antwort wählt.",
  },
  {
    q: "Wie lange dauert es, bis ich in ChatGPT auftauche?",
    a: "Das hängt vom Mechanismus ab. Über die Live-Websuche, bei der ChatGPT aktuelle Fragen mit dem Bing-Index beantwortet, sind erste Veränderungen oft in vier bis acht Wochen sichtbar, sobald deine Seiten gecrawlt und verstanden sind. Über die Trainingsdaten dauert es länger, hier reden wir über mehrere Monate, weil Modelle in Zyklen aktualisiert werden. Der Vorteil: Wer früh als Quelle etabliert ist, wird in späteren Zyklen bestätigt und baut einen Vorsprung auf, den Wettbewerber schwer einholen.",
  },
  {
    q: "Ist meine Website aktuell in ChatGPT sichtbar?",
    a: "Das lässt sich testen. Wir fragen ChatGPT (und Perplexity, Claude, Gemini sowie Google AI Overviews) mit den Formulierungen, die deine Kunden tatsächlich nutzen, und schauen, ob deine Marke genannt wird, wer stattdessen empfohlen wird und warum. Diese Bestandsaufnahme ist der erste Schritt und in der kostenlosen Kurzanalyse enthalten.",
  },
  {
    q: "Was kostet das?",
    a: "Die Kurzanalyse ist kostenlos. Erst danach reden wir über Umsetzung, und du weißt vorher, woran du bist. Die transparenten Pakete für Umsetzung und laufende Betreuung findest du auf der Preisseite.",
  },
  {
    q: "Ist ChatGPT-Optimierung dasselbe wie GEO?",
    a: "ChatGPT-Sichtbarkeit ist der sichtbarste Teil einer größeren Disziplin: Generative Engine Optimization (GEO). GEO sorgt dafür, dass eine Marke in den Antworten generativer KI-Systeme genannt und zitiert wird, ChatGPT ist dabei nur eine von mehreren Oberflächen. Verwandt sind die Begriffe AEO (Answer Engine Optimization) und AI SEO. Die Hebel sind dieselben: zitierbare Inhalte, eine saubere technische Basis und Autorität. Wer für ChatGPT richtig aufgestellt ist, wird in Perplexity, Claude, Gemini und Google AI Overviews ebenfalls auffindbar.",
  },
  {
    q: "Gilt das auch für Perplexity und Google AI Overviews?",
    a: "Ja. Die Grundlagen, also zitierbare Inhalte, saubere Technik und Autorität, wirken auf alle großen KI-Systeme. Perplexity reagiert wegen seiner Live-Suche besonders schnell, Google AI Overviews und ChatGPT folgen den eigenen Crawl- und Trainingszyklen. Wir messen den Fortschritt parallel über alle Plattformen, damit du nicht nur in ChatGPT genannt wirst, sondern überall dort, wo deine Kunden fragen.",
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
        <section className="px-6 md:px-12 lg:px-20 pt-32 pb-16 md:pt-40 md:pb-24 max-w-[1000px] mx-auto text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600 mb-6">
              <OpenAIIcon className="w-4 h-4" />
              ChatGPT Sichtbarkeit
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
              In ChatGPT gefunden werden
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Wenn rund 800 Mio. Menschen ChatGPT um eine Empfehlung bitten, willst du die genannte Antwort sein, nicht die unsichtbare Alternative. Wir machen deine Marke zur Quelle, die ChatGPT empfiehlt.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-sichtbarkeit-now">
                <Button text="Wirst du in ChatGPT genannt?" primary={true} className="justify-center" />
              </Link>
              <Link href="/termin">
                <Button text="Erstgespräch vereinbaren" primary={false} className="justify-center" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <p className="mt-8 text-sm text-gray-500">
              Kostenlose Kurzanalyse. KI-Sichtbarkeit Berater aus Hamburg. Gemessen mit echten Prompt-Tests.
            </p>
          </FadeIn>

          <FadeIn delay={350}>
            <div className="mt-12 max-w-[480px] mx-auto rounded-card border border-gray-100 bg-white p-6 md:p-7 shadow-sm">
              <SourceSelectionVisual className="w-full" />
            </div>
          </FadeIn>
        </section>

        {/* Warum ChatGPT-Sichtbarkeit zählt */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-white">
          <div className="max-w-[800px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-8">
                Warum ChatGPT-Sichtbarkeit zählt
              </h2>
            </FadeIn>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <FadeIn delay={100}>
                <p>
                  Immer mehr Menschen googeln nicht mehr, sie fragen. Statt zehn blaue Links und selbst vergleichen, bekommen sie von ChatGPT eine fertige Empfehlung mit zwei bis fünf Namen. Wer in dieser kurzen Liste fehlt, kommt im Entscheidungsprozess gar nicht erst vor.
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <p>
                  Und diese Empfehlungen sind nicht harmlos. Wer ChatGPT fragt, hat oft schon eine konkrete Absicht und handelt nach der Antwort: klickt auf den genannten Anbieter, schreibt ihn an, kauft. Eine Nennung in ChatGPT ist deshalb kein Eitelkeitswert, sondern ein Vertriebskanal.
                </p>
              </FadeIn>
              <FadeIn delay={300}>
                <p className="font-semibold text-black">
                  Die Frage ist nicht mehr, ob deine Kunden KI nutzen. Die Frage ist, ob ChatGPT dich nennt, wenn sie es tun.
                </p>
              </FadeIn>
              <FadeIn delay={400}>
                <p>
                  Die Disziplin dahinter heißt Generative Engine Optimization (GEO), oft auch Answer Engine Optimization (AEO) oder AI SEO genannt. ChatGPT-Sichtbarkeit ist der sichtbarste Teil davon. Dieselbe Arbeit macht dich auch in Perplexity, Claude, Gemini und Google AI Overviews auffindbar.
                </p>
              </FadeIn>
              <FadeIn delay={500}>
                <div className="mt-10 rounded-card border border-gray-100 bg-[#F7F5F2] p-6 md:p-8">
                  <VisibilityCompareVisual className="w-full max-w-[480px] mx-auto" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Wie ChatGPT entscheidet */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="max-w-[1100px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4">
                Wie ChatGPT entscheidet, wen es empfiehlt
              </h2>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl">
                ChatGPT zieht seine Empfehlungen aus drei Quellen. Wer alle drei bedient, wird zuverlässig genannt.
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {MECHANISMS.map((m, i) => (
                <FadeIn key={m.title} delay={100 + i * 100}>
                  <div className="bg-white rounded-card border border-gray-100 p-7 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-9 h-9 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center flex-shrink-0">
                        <CheckIcon className="w-5 h-5" />
                      </span>
                      <h3 className="text-lg font-semibold text-black">{m.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-[15px]">{m.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={400}>
              <div className="mt-10 rounded-card border border-gray-100 bg-[#F7F5F2] p-6 md:p-8 max-w-[640px] mx-auto">
                <PillarsVisual className="w-full" />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Was wir konkret tun */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-white">
          <div className="max-w-[900px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4">
                Was wir konkret tun
              </h2>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl">
                Vier Bausteine, die aus einer übergangenen Website eine Marke machen, die ChatGPT empfiehlt.
              </p>
            </FadeIn>
            <div className="space-y-5">
              {STEPS.map((step, i) => (
                <FadeIn key={step.title} delay={100 + i * 80}>
                  <div className="flex gap-5 bg-[#F7F5F2] rounded-card p-6 md:p-7">
                    <span className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={500}>
              <p className="mt-10 text-base text-gray-600 leading-relaxed">
                Tiefer einsteigen? Lies, wie{" "}
                <Link href="/wissen/sichtbarkeit-in-chatgpt" className="text-brand-accent font-semibold underline underline-offset-2 hover:text-black transition-colors">
                  Sichtbarkeit in ChatGPT
                </Link>{" "}
                entsteht, was hinter{" "}
                <Link href="/wissen/chatgpt-seo" className="text-brand-accent font-semibold underline underline-offset-2 hover:text-black transition-colors">
                  ChatGPT SEO
                </Link>{" "}
                steckt, oder schau dir die{" "}
                <Link href="/hamburg/chatgpt-optimierung" className="text-brand-accent font-semibold underline underline-offset-2 hover:text-black transition-colors">
                  ChatGPT Optimierung für Hamburg
                </Link>{" "}
                an.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* So messen wir */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="max-w-[900px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-6">
                So messen wir
              </h2>
            </FadeIn>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <FadeIn delay={100}>
                <p>
                  KI-Sichtbarkeit ist messbar, auch ohne Ranking-Tabelle. Wir definieren die Fragen, die deine Kunden wirklich stellen, und stellen sie vor und nach der Umsetzung. Über ChatGPT, Perplexity, Claude, Gemini und Google AI Overviews. So siehst du schwarz auf weiß, ob sich deine Nennung verändert und wo du Wettbewerbern den Platz wegnimmst.
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="flex flex-wrap gap-3">
                  {["ChatGPT", "Perplexity", "Claude", "Gemini", "Google AI Overviews"].map((p) => (
                    <span key={p} className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-2 text-sm font-medium text-black">
                      <CheckIcon className="w-4 h-4 text-brand-accent" />
                      {p}
                    </span>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={300}>
                <p>
                  Wie genau wir das aufsetzen, haben wir offengelegt. Die Methode steht in unserem Leitfaden{" "}
                  <Link href="/wissen/ki-sichtbarkeit-messen" className="text-brand-accent font-semibold underline underline-offset-2 hover:text-black transition-colors">
                    KI-Sichtbarkeit messen
                  </Link>
                  , der meistzitierten Seite, die wir in KI-Antworten haben.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Ergebnisse */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-[#121212] text-white">
          <div className="max-w-[1100px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Ergebnisse
              </h2>
              <p className="text-lg text-gray-300 mb-12 max-w-2xl">
                Keine Versprechen, sondern Zahlen aus echten Projekten.
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {STATS.map((stat, i) => (
                <FadeIn key={stat.value} delay={100 + i * 100}>
                  <Link
                    href={stat.href}
                    className="group block h-full rounded-card border border-white/10 bg-white/5 p-7 transition-colors hover:bg-white/10"
                  >
                    <span className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-accent block mb-3">
                      {stat.value}
                    </span>
                    <p className="text-gray-300 leading-relaxed text-[15px]">{stat.label}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white">
                      Mehr lesen
                      <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={400}>
              <div className="mt-10">
                <Link
                  href="/ergebnisse"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-white transition-colors group"
                >
                  Alle Ergebnisse mit nachprüfbaren Zahlen ansehen
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Echte Belege, animiert */}
        <Proof />

        {/* FAQ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="max-w-[900px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-10">
                Häufige Fragen zur ChatGPT-Sichtbarkeit
              </h2>
            </FadeIn>
            <div className="space-y-8">
              {FAQS.map((item, idx) => (
                <FadeIn key={idx} delay={idx * 60}>
                  <article className="border-b border-black/10 pb-8 last:border-b-0 last:pb-0">
                    <h3 className="text-lg md:text-xl font-semibold text-black tracking-tight mb-3">
                      {item.q}
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed">{item.a}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 border-t border-black/10">
          <div className="max-w-[900px] mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4">
                Lass uns prüfen, ob ChatGPT dich nennt
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
                Starte mit der kostenlosen Kurzanalyse. Du erfährst, ob du in ChatGPT genannt wirst, wer stattdessen empfohlen wird und welche drei Hebel am meisten bringen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ai-sichtbarkeit-now">
                  <Button text="Kostenlose Analyse anfragen" primary={true} className="justify-center" />
                </Link>
                <Link href="/termin">
                  <Button text="Erstgespräch vereinbaren" primary={false} className="justify-center" />
                </Link>
              </div>
              <p className="mt-8 text-sm text-gray-500">
                Mehr zu Paketen und Preisen auf der{" "}
                <Link href="/preise" className="text-brand-accent font-semibold underline underline-offset-2 hover:text-black transition-colors">
                  Preisseite
                </Link>
                . Wer dahintersteckt, liest du{" "}
                <Link href="/ueber-mich" className="text-brand-accent font-semibold underline underline-offset-2 hover:text-black transition-colors">
                  über mich
                </Link>
                , und was die{" "}
                <Link href="/ai-seo-agentur" className="text-brand-accent font-semibold underline underline-offset-2 hover:text-black transition-colors">
                  AI SEO Agentur
                </Link>{" "}
                sonst noch macht.
              </p>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
