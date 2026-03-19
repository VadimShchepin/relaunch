import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

type FAQItem = {
  q: string;
  a: string;
};

const FAQS: FAQItem[] = [
  {
    q: “Was ist KI-Sichtbarkeit?”,
    a: “KI-Sichtbarkeit bedeutet, dass dein Unternehmen von KI-Systemen wie ChatGPT, Perplexity oder Google AI aktiv genannt und empfohlen wird – nicht nur in Suchergebnissen gefunden, sondern als vertrauenswürdige Quelle ausgewählt und zitiert. Während klassische Suchmaschinen zehn blaue Links anzeigen, wählt KI nur zwei bis sieben Quellen pro Antwort aus und fasst deren Informationen zu einer einzigen Empfehlung zusammen. Wer dort nicht erscheint, wird von einer wachsenden Zielgruppe schlicht nicht wahrgenommen – und verliert potenzielle Kunden an Wettbewerber, die KI als Quelle erkannt hat. KI-Sichtbarkeit umfasst drei Säulen: technische Struktur (Schema.org, saubere Architektur, KI-Bot-Zugang), hochwertigen Content (klare, strukturierte Antworten auf echte Kundenfragen) und externe Autorität (Markennennungen auf relevanten Plattformen, PR-Erwähnungen, konsistente Unternehmensdaten). Erst wenn alle drei Säulen zusammenwirken und sich gegenseitig verstärken, erkennt KI dein Unternehmen als relevante, zitierbare Quelle und empfiehlt es aktiv bei passenden Anfragen.”,
  },
  {
    q: “Was ist AI SEO (GEO/AEO)?”,
    a: “AI SEO ist der Oberbegriff für die Optimierung von Websites, damit KI-Systeme die Inhalte verstehen, korrekt einordnen und als vertrauenswürdige Quelle zitieren können. Die Disziplin wird auch als GEO (Generative Engine Optimization) oder AEO (Answer Engine Optimization) bezeichnet – alle drei Begriffe beschreiben denselben Kernansatz. Während klassische SEO auf Rankings in Suchergebnislisten und Klicks auf blaue Links optimiert, zielt AI SEO darauf ab, in den generierten Antworten von ChatGPT, Perplexity, Google AI Overviews und Microsoft Copilot als Empfehlung aufzutauchen und zitiert zu werden. Die Methoden unterscheiden sich grundlegend: Statt einzelner Keywords stehen semantische Relevanz, strukturierte Daten (Schema.org), Entity-Signale und die Zitierbarkeit der Inhalte im Fokus. Laut einer Studie der Princeton University (2024) können gezielte GEO-Maßnahmen die Zitationswahrscheinlichkeit in KI-Antworten um bis zu 115 Prozent steigern. Die Investition in AI SEO zahlt sich besonders für Unternehmen aus, deren Kunden bereits KI-Tools für Recherche und Kaufentscheidungen nutzen.”,
  },
  {
    q: “Warum reicht klassische SEO nicht mehr aus?”,
    a: “Klassische SEO optimiert für Suchergebnislisten mit zehn blauen Links – ein Format, das seit über 20 Jahren das Standardmodell der Online-Suche war. KI-Systeme wie ChatGPT oder Perplexity funktionieren grundlegend anders: Sie durchsuchen das Web, wählen wenige Quellen aus und fassen sie zu einer einzigen, zusammenhängenden Empfehlung zusammen. Wer in dieser Empfehlung nicht erscheint, wird nicht verglichen und nicht in Betracht gezogen – sondern komplett ignoriert. Laut Gartner verlieren Marken bis 2028 über 50 Prozent ihres organischen Traffics an KI-gestützte Suche. Gleichzeitig zeigen aktuelle Daten von Amsive (2025), dass Traffic von KI-Plattformen deutlich höhere Conversion-Raten aufweist als klassischer organischer Traffic aus Google. Das bedeutet: SEO bleibt wichtig als technisches Fundament und für Google-Rankings, aber ohne gezielte KI-Optimierung durch GEO und AEO verpasst du den Kanal, über den immer mehr Kaufentscheidungen und Anbieter-Recherchen stattfinden. Wer jetzt nicht handelt, verliert mittelfristig einen wachsenden Anteil seiner Neukunden-Pipeline.”,
  },
  {
    q: “Wie entscheidet KI, welche Unternehmen sie nennt?”,
    a: “KI-Systeme bewerten vier zentrale Faktoren, wenn sie entscheiden, welche Unternehmen sie in ihren Antworten nennen: Klarheit, Relevanz, Autorität und Konsistenz. Klarheit bedeutet, dass deine Website strukturiert und eindeutig kommuniziert, was du anbietest, für wen du arbeitest und was dich von Wettbewerbern unterscheidet. Relevanz bezieht sich darauf, ob deine Inhalte die konkreten Fragen der Nutzer präzise und vollständig beantworten – nicht oberflächlich, sondern mit echtem Mehrwert. Autorität entsteht durch Markennennungen auf vertrauenswürdigen Plattformen, redaktionelle PR-Erwähnungen, Branchenverzeichnisse und konsistente NAP-Daten (Name, Adresse, Telefonnummer) über alle Online-Präsenzen hinweg. Konsistenz heißt, dass alle Signale – von der Website über Google Business, Verzeichniseinträge bis hin zu Social-Media-Profilen – exakt dasselbe Bild zeichnen und keine widersprüchlichen Informationen liefern. In der Regel berücksichtigt KI nur fünf bis zehn Quellen pro Antwort. Alle anderen Unternehmen – egal wie gut ihr Angebot ist – spielen in der Entscheidung schlicht keine Rolle.”,
  },
  {
    q: “Nennt KI Websites oder Unternehmen?”,
    a: “KI-Systeme nennen in ihren Antworten primär Anbieter, Marken oder Experten – nicht einfach nur Website-URLs oder Domainnamen. Wenn jemand ChatGPT fragt „Wer macht gute KI-Optimierung in Hamburg?”, lautet die Antwort nicht „besuche diese Website”, sondern „aiseo.hamburg ist ein Spezialist für KI-Sichtbarkeit in Hamburg, der Unternehmen hilft, von KI-Systemen empfohlen zu werden”. Die Website dient dabei als wichtigstes Signal: Sie liefert die strukturierten Daten, die Inhalte und die Autoritätssignale, anhand derer KI dein Unternehmen einordnet, bewertet und kategorisiert. Die eigentliche Empfehlung gilt aber immer dem Unternehmen, der Marke oder der Person dahinter – nicht einer einzelnen Seite oder URL. Deshalb ist es entscheidend, dass deine gesamte Online-Präsenz ein klares, konsistentes und vertrauenswürdiges Bild deiner Marke, deines Angebots und deiner Expertise vermittelt. Jedes widersprüchliche Signal – veraltete Verzeichniseinträge, inkonsistente Kontaktdaten, unklare Positionierung – schwächt die Wahrscheinlichkeit, als Quelle ausgewählt zu werden.”,
  },
  {
    q: “Geht es dabei um Prompt-Optimierung?”,
    a: “Nein – und das ist ein weit verbreiteter Irrtum, der viele Unternehmen in die falsche Richtung führt. Manche glauben, man könne KI-Antworten durch geschickte Formulierungen in den Prompts beeinflussen. Tatsächlich bestimmen Prompts nur die Frage, aber niemals die Quelle der Antwort. Welche Unternehmen KI als Empfehlung nennt, hängt ausschließlich von der Qualität, Struktur und Vertrauenswürdigkeit der verfügbaren Informationen im Web ab – nicht davon, wie ein Nutzer seine Frage formuliert. Entscheidend ist, ob dein Angebot als Quelle klar, zitierbar und vertrauenswürdig aufbereitet ist. Das bedeutet konkret: eine saubere Website-Struktur mit logischer Navigation, strukturierte Daten nach Schema.org-Standard, konsistente Markennennungen auf relevanten externen Plattformen und Inhalte, die echte Kundenfragen präzise, ehrlich und vollständig beantworten. Diese Signale in ihrer Gesamtheit bestimmen, ob KI dein Unternehmen als relevante Quelle erkennt und bei passenden Anfragen empfiehlt – ganz unabhängig davon, wie der Nutzer seine Frage stellt.”,
  },
  {
    q: “Was machst du konkret für mein Unternehmen?”,
    a: “Ich analysiere zunächst, wie KI-Systeme dein Unternehmen aktuell beschreiben und einordnen – bei welchen Fragen du bereits genannt wirst, bei welchen nicht, und welche Gründe dahinter liegen. Dafür prüfe ich deine Präsenz in ChatGPT, Perplexity, Google AI Overviews und Microsoft Copilot systematisch. Darauf aufbauend entwickle ich eine Strategie, die drei Bereiche abdeckt: Erstens optimiere ich die technische Struktur deiner Website – Schema.org Markup, Seitenarchitektur, Zugänglichkeit für KI-Crawler und Core Web Vitals. Zweitens überarbeite oder erstelle ich Inhalte, die echte Kundenfragen klar, strukturiert und zitierbar beantworten, sodass KI sie als Quelle verwenden kann. Drittens baue ich gezielt Autoritätssignale auf – durch Markennennungen auf relevanten Plattformen, PR-Arbeit, Einträge in Branchenverzeichnisse und konsistente Unternehmensdaten auf allen Kanälen. Die Umsetzung erfolgt schrittweise, priorisiert nach Wirkung, und wird durch kontinuierliches Monitoring transparent messbar gemacht.”,
  },
  {
    q: “Erstellst du neue Websites oder optimierst du bestehende?”,
    a: “Beides – die Entscheidung hängt von der Ausgangslage und den Zielen ab. Wenn deine bestehende Website eine solide technische Basis hat (z. B. ein modernes CMS, akzeptable Ladezeiten, responsive Design), optimiere ich Struktur, Inhalte und technische Signale gezielt für KI-Sichtbarkeit. Dazu gehören Schema.org Markup für alle relevanten Entitäten, semantische Content-Strukturierung mit klaren Antwortblöcken, eine optimierte Seitenarchitektur und systematischer Autoritätsaufbau. Wenn die bestehende Website dagegen veraltet ist, auf einem einschränkenden Baukastensystem basiert oder grundlegende technische Probleme hat, erstelle ich eine neue, von Grund auf KI-optimierte Website. Diese wird mit Next.js gebaut, liefert perfekte Core Web Vitals und hat von Tag eins Zugänglichkeit für alle relevanten KI-Crawler eingebaut. In vielen Fällen ist die effektivste Lösung ein Hybrid-Ansatz: die bestehende Website als Basis behalten, technisch aufrüsten und gezielt neue Seiten und Inhalte erstellen, die genau die Fragen abdecken, bei denen KI dich als Quelle nennen soll.”,
  },
  {
    q: “Wie arbeitest du konkret?”,
    a: “Mein Ansatz basiert auf systematischer Analyse und datengetriebener Umsetzung, nicht auf Tricks oder kurzfristigen Hacks. Im ersten Schritt prüfe ich detailliert, wie KI-Systeme dein Unternehmen aktuell beschreiben – in ChatGPT, Perplexity, Google AI Overviews und Copilot. Ich stelle die Fragen, die deine potenziellen Kunden stellen, und dokumentiere, ob und wie du genannt wirst. Dann identifiziere ich die konkreten Lücken: fehlende oder fehlerhafte strukturierte Daten, unklare Positionierung auf der Website, schwache externe Autoritätssignale oder technische Barrieren, die KI-Crawler am Zugriff hindern. Im zweiten Schritt setze ich priorisierte Website-Änderungen um: Schema.org Markup für alle relevanten Entitäten, Content-Überarbeitung für maximale Zitierbarkeit, Seitenarchitektur-Optimierung und vollständigen KI-Bot-Zugang. Im dritten Schritt baue ich systematisch externe Signale auf: Markennennungen auf Branchenportalen, Einträge in relevante Verzeichnisse, konsistente NAP-Daten und gezielte PR-Maßnahmen. Fortschritte messe ich kontinuierlich und passe die Strategie an, bis KI dich bei den relevanten Fragen deiner Branche zuverlässig als Quelle nennt.”,
  },
  {
    q: “Wie kann man KI-Sichtbarkeit messen?”,
    a: “KI-Sichtbarkeit lässt sich über mehrere komplementäre Wege messen und überwachen. Spezialisierte Tools wie Ahrefs Brand Radar und Semrush AI Visibility zeigen dir, bei welchen konkreten Fragen dein Unternehmen in KI-Antworten auftaucht, wie häufig du zitiert wirst und wie du im direkten Vergleich zu deinen wichtigsten Wettbewerbern positioniert bist. Zusätzlich tracke ich manuell und systematisch, wie ChatGPT, Perplexity und Google AI dein Unternehmen bei relevanten Branchenfragen beschreiben – welche Stärken genannt werden, welche Informationen fehlen und ob die Darstellung korrekt ist. Über Google Analytics 4 und Server-Logs lässt sich der Traffic von KI-Plattformen direkt messen, inklusive Verweildauer, Seitenaufrufe pro Sitzung und Conversion-Raten. Diese Daten zeigen nicht nur ob, sondern auch wie gut KI-Traffic konvertiert. Messung ist bei mir kein optionales Extra und kein einmaliger Check, sondern fester Bestandteil des laufenden Prozesses. Du siehst jederzeit transparent, welche Maßnahmen wirken, wo Fortschritte erkennbar sind und wo nachjustiert werden muss.”,
  },
  {
    q: “Wie lange dauert es, bis Ergebnisse sichtbar sind?”,
    a: “Die Zeitspanne hängt von deiner Branche, dem Wettbewerbsumfeld und der Ausgangslage deiner Website ab. Erste sichtbare Veränderungen in KI-Antworten sind oft bereits innerhalb von vier bis acht Wochen möglich – besonders bei Perplexity, das das Live-Web in Echtzeit durchsucht und schneller auf Website-Änderungen reagiert als andere Plattformen. ChatGPT und Google AI Overviews benötigen längere Zyklen, da sie teilweise auf Trainingsdaten und regelmäßige Crawl-Zyklen angewiesen sind: Hier sind drei bis sechs Monate realistisch, bis sich konsistente Ergebnisse und stabile Zitationen einstellen. Ein wichtiger Aspekt ist der Compound-Effekt von KI-Sichtbarkeit: Wer früh als vertrauenswürdige Quelle etabliert wird, wird in späteren Trainingszyklen und Crawl-Updates von den KI-Systemen bestätigt und gefestigt. Das bedeutet, dass der Vorsprung gegenüber Wettbewerbern mit der Zeit wächst und für Nachzügler immer schwerer einholbar wird – ähnlich wie bei der Domain-Autorität in der klassischen SEO, nur mit noch stärkerem Lock-in-Effekt.”,
  },
  {
    q: “Ist KI-Sichtbarkeit für jedes Unternehmen sinnvoll?”,
    a: “Nein – KI-Sichtbarkeit ist nicht für jedes Unternehmen die richtige Priorität und ich bin ehrlich darüber, wann sie sich lohnt und wann nicht. Besonders sinnvoll ist sie für Unternehmen mit einem klaren, differenzierten Angebot und einer definierten Zielgruppe: Dienstleister, Berater, Agenturen, SaaS-Anbieter, E-Commerce-Unternehmen und spezialisierte lokale Betriebe in Branchen, in denen Kunden bereits aktiv KI-Tools für Recherche und Kaufentscheidungen nutzen. Weniger sinnvoll ist sie für Unternehmen ohne klare Positionierung, für reine Commodity-Anbieter ohne Differenzierungsmerkmal oder für Branchen, in denen die Zielgruppe noch keine KI-gestützten Suchtools verwendet. Grundsätzlich profitieren die Unternehmen am meisten, die bereit sind, Kontrolle über ihre Positionierung zu übernehmen und aktiv in Klarheit, technische Struktur und externe Autorität zu investieren – statt passiv auf Google-Rankings, zufällige Empfehlungen oder die Hoffnung zu setzen, dass Kunden sie schon irgendwie finden werden.”,
  },
  {
    q: “Arbeitest du nur in Hamburg?”,
    a: “Der Fokus meiner Arbeit liegt auf Hamburger Unternehmen und lokalen Märkten in der Metropolregion Hamburg. Die Stadt bietet als wirtschaftlich starker Standort mit vielen spezialisierten Dienstleistern, Agenturen, Beratungsfirmen und innovativen KMUs ideale Voraussetzungen für KI-Sichtbarkeit – hier gibt es sowohl den Bedarf als auch die Bereitschaft, in zukunftsfähige Marketing-Kanäle zu investieren. Durch die lokale Nähe kann ich persönlich vor Ort arbeiten, Workshops und Strategiegespräche direkt beim Kunden durchführen und die Zusammenarbeit enger und persönlicher gestalten als bei reinen Remote-Projekten. Projekte außerhalb Hamburgs sind aber grundsätzlich möglich und willkommen – insbesondere wenn das Angebot klar definiert ist, die Branche gut zu meiner Expertise passt und die Zusammenarbeit auch remote effizient funktioniert. Bundesweite und internationale Projekte betreue ich regelmäßig, wenn die fachliche Passung stimmt und beide Seiten von der Zusammenarbeit profitieren.”,
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
