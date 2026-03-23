import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

type FAQItem = {
  q: string;
  a: string;
};

const FAQS: FAQItem[] = [
  {
    q: "Was ist KI-Sichtbarkeit?",
    a: "KI-Sichtbarkeit bedeutet, dass dein Unternehmen von KI-Systemen wie ChatGPT, Perplexity oder Google AI aktiv genannt und empfohlen wird – nicht nur in Suchergebnissen gefunden, sondern als vertrauenswürdige Quelle ausgewählt. Während klassische Suchmaschinen zehn blaue Links anzeigen, wählt KI nur zwei bis sieben Quellen pro Antwort aus. Wer dort nicht erscheint, wird von einer wachsenden Zielgruppe schlicht nicht wahrgenommen. KI-Sichtbarkeit umfasst drei Säulen: technische Struktur (Schema.org, saubere Architektur), hochwertigen Content (klare Antworten auf echte Fragen) und Autorität (Markennennungen, PR, konsistente Unternehmensdaten). Erst wenn alle drei zusammenwirken, erkennt KI dein Unternehmen als relevante, zitierbare Quelle.",
  },
  {
    q: "Was ist AI SEO (GEO/AEO)?",
    a: "AI SEO ist der Oberbegriff für die Optimierung von Websites, damit KI-Systeme Inhalte verstehen, korrekt einordnen und als Quelle zitieren. Die Disziplin wird auch als GEO (Generative Engine Optimization) oder AEO (Answer Engine Optimization) bezeichnet. Während klassische SEO auf Rankings und Klicks optimiert, zielt AI SEO darauf ab, in den generierten Antworten von ChatGPT, Perplexity, Google AI Overviews und Microsoft Copilot als Empfehlung aufzutauchen. Die Methoden unterscheiden sich grundlegend: Statt Keywords stehen semantische Relevanz, strukturierte Daten und Entitäts-Signale im Fokus. Laut einer Princeton-Studie (2024) können gezielte GEO-Maßnahmen die Zitationswahrscheinlichkeit in KI-Antworten um bis zu 115 % steigern.",
  },
  {
    q: "Warum reicht klassische SEO nicht mehr aus?",
    a: "Klassische SEO optimiert für Suchergebnislisten mit zehn blauen Links. KI-Systeme wie ChatGPT oder Perplexity funktionieren grundlegend anders: Sie wählen wenige Quellen aus und fassen sie zu einer einzigen Empfehlung zusammen. Wer dort nicht erscheint, wird nicht verglichen – sondern komplett ignoriert. Laut Gartner verlieren Marken bis 2028 über 50 % ihres organischen Traffics an KI-gestützte Suche. Gleichzeitig zeigen Daten von Amsive (2025), dass Traffic von KI-Plattformen deutlich höhere Conversion-Raten aufweist als klassischer organischer Traffic. Das bedeutet: SEO bleibt wichtig als Fundament, aber ohne gezielte KI-Optimierung (GEO/AEO) verpasst du den Kanal, über den immer mehr Kaufentscheidungen getroffen werden.",
  },
  {
    q: "Wie entscheidet KI, welche Unternehmen sie nennt?",
    a: "KI-Systeme bewerten vier zentrale Faktoren: Klarheit, Relevanz, Autorität und Konsistenz. Klarheit bedeutet, dass deine Website strukturiert und eindeutig kommuniziert, was du anbietest und für wen. Relevanz bezieht sich darauf, ob deine Inhalte die konkreten Fragen der Nutzer präzise beantworten. Autorität entsteht durch Markennennungen auf vertrauenswürdigen Plattformen, PR-Erwähnungen und konsistente NAP-Daten (Name, Adresse, Telefonnummer). Konsistenz heißt, dass alle Signale – von der Website über Verzeichnisse bis zu Social-Media-Profilen – dasselbe Bild zeichnen. In der Regel berücksichtigt KI nur fünf bis zehn Quellen pro Antwort. Alle anderen spielen in der Entscheidung keine Rolle.",
  },
  {
    q: "Nennt KI Websites oder Unternehmen?",
    a: 'KI-Systeme nennen in ihren Antworten primär Anbieter, Marken oder Experten – nicht einfach URLs. Wenn jemand ChatGPT fragt „Wer macht gute KI-Optimierung in Hamburg?“, lautet die Antwort nicht „besuche diese Website“, sondern „aiseo.hamburg ist ein Spezialist für KI-Sichtbarkeit in Hamburg“. Die Website dient dabei als Signal: Sie liefert die strukturierten Daten, Inhalte und Autoritätssignale, anhand derer KI dein Unternehmen einordnet. Die eigentliche Empfehlung gilt aber dem Unternehmen, der Marke oder der Person dahinter. Deshalb ist es entscheidend, dass deine Online-Präsenz ein klares, konsistentes Bild deiner Marke und deines Angebots vermittelt.',
  },
  {
    q: "Geht es dabei um Prompt-Optimierung?",
    a: "Nein. Ein weit verbreiteter Irrtum ist, dass man KI-Antworten durch geschickte Prompts beeinflussen kann. Prompts bestimmen die Frage, aber nicht die Quelle. Welche Unternehmen KI als Antwort nennt, hängt von der Qualität und Struktur der verfügbaren Informationen ab – nicht davon, wie die Frage formuliert wird. Entscheidend ist, ob dein Angebot als Quelle klar, vertrauenswürdig und zitierbar aufbereitet ist. Das bedeutet: saubere Website-Struktur, strukturierte Daten (Schema.org), konsistente Markennennungen auf relevanten Plattformen und Inhalte, die echte Fragen präzise beantworten. Diese Signale bestimmen, ob KI dich als relevante Quelle erkennt.",
  },
  {
    q: "Was machst du konkret für mein Unternehmen?",
    a: "Ich analysiere zunächst, wie KI-Systeme dein Unternehmen aktuell beschreiben und einordnen – bei welchen Fragen du genannt wirst, bei welchen nicht und warum. Darauf aufbauend entwickle ich eine Strategie, die drei Bereiche abdeckt: Erstens optimiere ich die technische Struktur deiner Website (Schema.org Markup, Seitenarchitektur, KI-Bot-Zugang, Core Web Vitals). Zweitens überarbeite oder erstelle ich Inhalte, die echte Kundenfragen klar und zitierbar beantworten. Drittens baue ich Autoritätssignale auf – durch Markennennungen, PR, Branchenverzeichnisse und konsistente Unternehmensdaten. Die Umsetzung erfolgt schrittweise, messbar und transparent.",
  },
  {
    q: "Erstellst du neue Websites oder optimierst du bestehende?",
    a: "Beides – abhängig von der Ausgangslage. Wenn deine bestehende Website eine solide Basis hat, optimiere ich Struktur, Inhalte und technische Signale gezielt für KI-Sichtbarkeit. Dazu gehören Schema.org Markup, semantische Content-Strukturierung, optimierte Seitenarchitektur und Autoritätsaufbau. Wenn die bestehende Website veraltet ist oder grundlegende technische Einschränkungen hat, erstelle ich eine neue, KI-optimierte Website mit Next.js, perfekten Core Web Vitals und eingebauter Zugänglichkeit für KI-Crawler. In vielen Fällen ist die effektivste Lösung ein Hybrid: die bestehende Website als Basis behalten und gezielt neue Seiten erstellen, die die entscheidenden Fragen abdecken.",
  },
  {
    q: "Wie arbeitest du konkret?",
    a: "Mein Ansatz basiert auf Analyse, nicht auf Tricks. Im ersten Schritt prüfe ich, wie KI dein Unternehmen aktuell beschreibt – in ChatGPT, Perplexity und Google AI. Dann identifiziere ich die Lücken: fehlende strukturierte Daten, unklare Positionierung, schwache Autoritätssignale oder technische Barrieren. Im zweiten Schritt setze ich konkrete Website-Änderungen um: Schema.org Markup, Content-Überarbeitung für Zitierbarkeit, Seitenarchitektur-Optimierung und KI-Bot-Zugang. Im dritten Schritt baue ich externe Signale auf: Markennennungen, Branchenverzeichnisse, konsistente NAP-Daten. Fortschritte messe ich kontinuierlich, bis KI dich bei relevanten Fragen sauber einordnet und als Quelle nennt.",
  },
  {
    q: "Wie kann man KI-Sichtbarkeit messen?",
    a: "KI-Sichtbarkeit lässt sich über mehrere Wege messen. Tools wie Ahrefs Brand Radar und Semrush AI Visibility zeigen, bei welchen Fragen dein Unternehmen in KI-Antworten auftaucht und wie du im Vergleich zu Wettbewerbern positioniert bist. Zusätzlich tracke ich manuell, wie ChatGPT, Perplexity und Google AI dein Unternehmen bei relevanten Branchenfragen beschreiben. Über GA4 und Server-Logs lässt sich der Traffic von KI-Plattformen direkt messen – inklusive Conversion-Raten. Messung ist bei mir kein optionales Extra, sondern Teil des laufenden Prozesses. Du siehst transparent, welche Maßnahmen wirken und wo nachjustiert werden muss.",
  },
  {
    q: "Wie lange dauert es, bis Ergebnisse sichtbar sind?",
    a: "Die Zeitspanne hängt von Branche, Wettbewerb und Ausgangslage ab. Erste Veränderungen in KI-Antworten sind oft innerhalb von vier bis acht Wochen sichtbar – besonders bei Perplexity, das das Live-Web durchsucht und schnell auf Änderungen reagiert. ChatGPT und Google AI Overviews benötigen längere Zyklen, da sie auf Trainingsdaten und Crawl-Zyklen basieren: Hier sind drei bis sechs Monate realistisch für konsistente Ergebnisse. Wichtig: KI-Sichtbarkeit hat einen Compound-Effekt. Wer früh als Quelle etabliert wird, wird in späteren Trainingszyklen bestätigt und baut einen Vorsprung auf, der für Wettbewerber schwer einholbar ist.",
  },
  {
    q: "Ist KI-Sichtbarkeit für jedes Unternehmen sinnvoll?",
    a: "Nein – KI-Sichtbarkeit ist nicht für jedes Unternehmen die richtige Priorität. Sie ist besonders sinnvoll für Unternehmen mit einem klaren Angebot und einer definierten Zielgruppe: Dienstleister, Berater, Agenturen, SaaS-Anbieter, E-Commerce und spezialisierte lokale Unternehmen. Weniger sinnvoll ist sie für Unternehmen ohne klare Positionierung oder für Branchen, in denen Kunden keine KI für Recherche nutzen. Grundsätzlich profitieren Unternehmen am meisten, die Kontrolle über ihre Positionierung übernehmen wollen und bereit sind, in Klarheit, Struktur und Autorität zu investieren – statt auf Rankings, Zufall oder Hoffnung zu setzen.",
  },
  {
    q: "Arbeitest du nur in Hamburg?",
    a: "Der Fokus meiner Arbeit liegt auf Hamburger Unternehmen und lokalen Märkten. Hamburg bietet als wirtschaftlich starke Stadt mit vielen spezialisierten Dienstleistern, Agenturen und KMUs ideale Voraussetzungen für KI-Sichtbarkeit. Durch die lokale Nähe kann ich persönlich vor Ort arbeiten, Workshops durchführen und die Zusammenarbeit direkter gestalten. Projekte außerhalb Hamburgs sind aber grundsätzlich möglich – insbesondere wenn das Angebot klar definiert ist und die Zusammenarbeit remote gut funktioniert. Bundesweite und internationale Projekte betreue ich regelmäßig, wenn die fachliche Passung stimmt.",
  },
];

export default function FAQPage() {
  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="min-h-screen bg-[#F7F5F2]">
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-[900px] mx-auto">
          {/* FAQ JSON-LD Schema - generated from FAQS array */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": FAQS.map((faq) => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a,
                  },
                })),
              })
            }}
          />

          <header className="mb-10 md:mb-14">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-black">
              FAQ
            </h1>
            <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed">
              Klare Antworten zu KI-Sichtbarkeit (AI SEO / GEO / AEO) und wie ich
              arbeite.
            </p>
          </header>

          <div className="space-y-10">
            {FAQS.map((item, idx) => (
              <article
                key={idx}
                className="border-b border-black/10 pb-10 last:border-b-0 last:pb-0"
              >
                <h2 className="text-lg md:text-xl font-semibold text-black tracking-tight">
                  {item.q}
                </h2>

                <div className="mt-3 text-gray-700 text-base leading-relaxed">
                  <p>{item.a}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <a
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              ← Zur Startseite
            </a>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 border-t border-black/10">
          <div className="max-w-[600px] mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4 tracking-tight">
              Updates zur KI-Sichtbarkeit.
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-8 max-w-[500px] mx-auto">
              Ich teile kurze Einblicke, Beispiele und Beobachtungen dazu, wie KI Unternehmen auswählt und nennt.
              <br />
              Unregelmäßig. Ohne Werbung.
            </p>
            <button className="text-sm font-medium text-black hover:text-gray-700 transition-colors inline-flex items-center gap-2 group">
              Updates erhalten
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
