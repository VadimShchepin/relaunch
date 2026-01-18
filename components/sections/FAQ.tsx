import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Icon } from '@iconify/react';

interface FAQItem {
    q: string;
    a: string;
}

const HOMEPAGE_FAQS: FAQItem[] = [
    {
        q: "Was ist KI-Sichtbarkeit?",
        a: "KI-Sichtbarkeit bedeutet, dass dein Unternehmen von KI-Systemen wie ChatGPT, Perplexity oder Google AI aktiv genannt und empfohlen wird – nicht nur gefunden, sondern ausgewählt."
    },
    {
        q: "Warum reicht klassische SEO nicht mehr aus?",
        a: "KI zeigt keine Suchlisten. Sie wählt wenige Quellen aus und fasst sie zu einer Empfehlung zusammen. Wer dort nicht erscheint, wird nicht verglichen – sondern ignoriert."
    },
    {
        q: "Wie entscheidet KI, welche Unternehmen sie nennt?",
        a: "KI bewertet Klarheit, Relevanz, Autorität und Konsistenz. In der Regel werden nur 5–10 präzise Quellen berücksichtigt – alle anderen spielen keine Rolle in der Entscheidung."
    },
    {
        q: "Was macht AISEO konkret für mein Unternehmen?",
        a: "Ich entwickle und setze eine klare Struktur für Website, Inhalte und Autorität um, sodass KI dein Angebot eindeutig versteht, korrekt einordnet und aktiv nennt."
    },
    {
        q: "Ist KI-Sichtbarkeit für jedes Unternehmen sinnvoll?",
        a: "Nein. Sie ist nur sinnvoll für Unternehmen, die Kontrolle über ihre Positionierung übernehmen wollen – nicht für diejenigen, die auf Rankings, Zufall oder Hoffnung setzen."
    },
    {
        q: "Wie arbeitest du konkret?",
        a: "Ich arbeite nicht mit Tricks oder Prompt-Optimierung. Ich analysiere, wie KI dein Unternehmen aktuell einordnet, und baue die Website so um, dass KI dein Angebot klar versteht, einordnet und als Quelle nennt."
    }
];

const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => (
    <div
        className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0"
        itemScope
        itemProp="mainEntity"
        itemType="https://schema.org/Question"
    >
        <h3
            className="text-base md:text-lg font-semibold text-black tracking-tight mb-3"
            itemProp="name"
        >
            {item.q}
        </h3>

        <div
            className="text-gray-600 text-sm md:text-base leading-relaxed"
            itemProp="acceptedAnswer"
            itemScope
            itemType="https://schema.org/Answer"
        >
            <p itemProp="text">{item.a}</p>
        </div>
    </div>
);

export const FAQ: React.FC = () => {
    // Generate JSON-LD schema for FAQPage
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": HOMEPAGE_FAQS.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };

    return (
        <section
            className="py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 max-w-[800px] mx-auto bg-white"
            itemScope
            itemType="https://schema.org/FAQPage"
        >
            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <FadeIn>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-12 md:mb-16 tracking-[-0.04em] text-center">
                    Häufige <span className="text-gray-300">Fragen.</span>
                </h2>

                {/* SEO: List of FAQs always visible for crawlers */}
                <div className="space-y-6">
                    {HOMEPAGE_FAQS.map((item, index) => (
                        <FAQItem key={index} item={item} />
                    ))}
                </div>

                {/* Link to full FAQ page */}
                <div className="text-center mt-12">
                    <a
                        href="/faq"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors group"
                    >
                        Alle Fragen ansehen
                        <Icon
                            icon="meteor-icons:arrow-right"
                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        />
                    </a>
                </div>
            </FadeIn>
        </section>
    );
};
