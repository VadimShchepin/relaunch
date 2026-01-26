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
    a: "KI-Sichtbarkeit bedeutet, dass dein Unternehmen von KI-Systemen wie ChatGPT, Perplexity oder Google AI aktiv genannt und empfohlen wird – nicht nur gefunden, sondern ausgewählt.",
  },
  {
    q: "Was ist AI SEO (GEO/AEO)?",
    a: "AI SEO (auch GEO/AEO) optimiert Websites so, dass KI-Systeme Inhalte verstehen, einordnen und als Quelle nennen – besonders bei Fragen, die nach Empfehlungen und Entscheidungshilfe suchen.",
  },
  {
    q: "Warum reicht klassische SEO nicht mehr aus?",
    a: "KI zeigt keine Suchlisten. Sie wählt wenige Quellen aus und fasst sie zu einer Empfehlung zusammen. Wer dort nicht erscheint, wird nicht verglichen – sondern ignoriert.",
  },
  {
    q: "Wie entscheidet KI, welche Unternehmen sie nennt?",
    a: "KI bewertet Klarheit, Relevanz, Autorität und Konsistenz. In der Regel werden nur wenige präzise Quellen berücksichtigt – alle anderen spielen in der Entscheidung keine Rolle.",
  },
  {
    q: "Nennt KI Websites oder Unternehmen?",
    a: "KI nennt meist Anbieter, Marken oder Experten – nicht nur URLs. Die Website ist das Signal, die Empfehlung gilt dem Unternehmen und seiner Einordnung.",
  },
  {
    q: "Geht es dabei um Prompt-Optimierung?",
    a: "Nein. Prompts beeinflussen die Frage, aber nicht die Quelle. Entscheidend ist, ob dein Angebot als Quelle klar, vertrauenswürdig und zitierbar ist.",
  },
  {
    q: "Was machst du konkret für mein Unternehmen?",
    a: "Ich strukturiere und optimiere Website, Inhalte und Autoritäts-Signale so, dass KI dein Angebot eindeutig versteht, korrekt einordnet und dich bei passenden Fragen nennt.",
  },
  {
    q: "Erstellst du neue Websites oder optimierst du bestehende?",
    a: "Beides. Je nach Ausgangslage überarbeite ich bestehende Seiten oder erstelle gezielt neue Seiten, die die entscheidenden Fragen abdecken und KI klare Signale geben.",
  },
  {
    q: "Wie arbeitest du konkret?",
    a: "Ich arbeite nicht mit Tricks. Ich analysiere, wie KI dein Unternehmen aktuell beschreibt, und setze dann Website-Änderungen um (Struktur, Inhalte, Klarheit, Autorität), bis KI dich bei relevanten Fragen sauber einordnet und nennt.",
  },
  {
    q: "Wie kann man KI-Sichtbarkeit messen?",
    a: "Ich prüfe, ob und bei welchen Fragen du genannt wirst, wie du beschrieben wirst und ob daraus reale Anfragen entstehen. Messung ist Teil des Prozesses, nicht ein Extra.",
  },
  {
    q: "Wie lange dauert es, bis Ergebnisse sichtbar sind?",
    a: "Das hängt von Branche, Wettbewerb und Ausgangslage ab. Erste Veränderungen sind oft innerhalb weniger Wochen sichtbar; stabile Relevanz entsteht durch saubere Umsetzung und Konsistenz.",
  },
  {
    q: "Ist KI-Sichtbarkeit für jedes Unternehmen sinnvoll?",
    a: "Nein. Sie ist besonders sinnvoll für Unternehmen mit klarem Angebot, Spezialisierung und Anspruch auf Qualität – und für alle, die Kontrolle über ihre Positionierung übernehmen wollen.",
  },
  {
    q: "Arbeitest du nur in Hamburg?",
    a: "Der Fokus liegt auf Hamburger Unternehmen und lokalen Märkten. Projekte außerhalb Hamburgs sind möglich, wenn das Angebot klar und die Zusammenarbeit passt.",
  },
];

export default function FAQPage() {
  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="min-h-screen bg-[#F7F5F2]">
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-[900px] mx-auto">
          {/* Clean JSON-LD Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Was ist KI-Sichtbarkeit?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "KI-Sichtbarkeit bedeutet, dass dein Unternehmen von KI-Systemen wie ChatGPT, Perplexity oder Google AI aktiv genannt und empfohlen wird – nicht nur gefunden, sondern ausgewählt."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Was ist AI SEO (GEO/AEO)?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "AI SEO (auch GEO/AEO) optimiert Websites so, dass KI-Systeme Inhalte verstehen, einordnen und als Quelle nennen – besonders bei Fragen, die nach Empfehlungen und Entscheidungshilfe suchen."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Warum reicht klassische SEO nicht mehr aus?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "KI zeigt keine Suchlisten. Sie wählt wenige Quellen aus und fasst sie zu einer Empfehlung zusammen. Wer dort nicht erscheint, wird nicht verglichen – sondern ignoriert."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Wie entscheidet KI, welche Unternehmen sie nennt?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "KI bewertet Klarheit, Relevanz, Autorität und Konsistenz. In der Regel werden nur wenige präzise Quellen berücksichtigt – alle anderen spielen in der Entscheidung keine Rolle."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Nennt KI Websites oder Unternehmen?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "KI nennt meist Anbieter, Marken oder Experten – nicht nur URLs. Die Website ist das Signal, die Empfehlung gilt dem Unternehmen und seiner Einordnung."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Geht es dabei um Prompt-Optimierung?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Nein. Prompts beeinflussen die Frage, aber nicht die Quelle. Entscheidend ist, ob dein Angebot als Quelle klar, vertrauenswürdig und zitierbar ist."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Was machst du konkret für mein Unternehmen?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Ich strukturiere und optimiere Website, Inhalte und Autoritäts-Signale so, dass KI dein Angebot eindeutig versteht, korrekt einordnet und dich bei passenden Fragen nennt."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Erstellst du neue Websites oder optimierst du bestehende?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Beides. Je nach Ausgangslage überarbeite ich bestehende Seiten oder erstelle gezielt neue Seiten, die die entscheidenden Fragen abdecken und KI klare Signale geben."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Wie arbeitest du konkret?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Ich arbeite nicht mit Tricks. Ich analysiere, wie KI dein Unternehmen aktuell beschreibt, und setze dann Website-Änderungen um (Struktur, Inhalte, Klarheit, Autorität), bis KI dich bei relevanten Fragen sauber einordnet und nennt."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Wie kann man KI-Sichtbarkeit messen?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Ich prüfe, ob und bei welchen Fragen du genannt wirst, wie du beschrieben wirst und ob daraus reale Anfragen entstehen. Messung ist Teil des Prozesses, nicht ein Extra."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Wie lange dauert es, bis Ergebnisse sichtbar sind?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Das hängt von Branche, Wettbewerb und Ausgangslage ab. Erste Veränderungen sind oft innerhalb weniger Wochen sichtbar; stabile Relevanz entsteht durch saubere Umsetzung und Konsistenz."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Ist KI-Sichtbarkeit für jedes Unternehmen sinnvoll?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Nein. Sie ist besonders sinnvoll für Unternehmen mit klarem Angebot, Spezialisierung und Anspruch auf Qualität – und für alle, die Kontrolle über ihre Positionierung übernehmen wollen."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Arbeitest du nur in Hamburg?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Der Fokus liegt auf Hamburger Unternehmen und lokalen Märkten. Projekte außerhalb Hamburgs sind möglich, wenn das Angebot klar und die Zusammenarbeit passt."
                    }
                  }
                ]
              }`
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
