import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowRightIcon } from '@/components/ui/Icons';

interface FAQItem {
    q: string;
    a: string;
}

const HOMEPAGE_FAQS: FAQItem[] = [
    {
        q: "Was ist KI-Sichtbarkeit?",
        a: "KI-Sichtbarkeit bedeutet, dass dein Unternehmen von KI-Systemen wie ChatGPT, Perplexity oder Google AI aktiv genannt und empfohlen wird – nicht nur in Suchergebnissen gefunden, sondern als vertrauenswürdige Quelle ausgewählt und zitiert. Während klassische Suchmaschinen zehn blaue Links anzeigen, wählt KI nur zwei bis sieben Quellen pro Antwort aus und fasst deren Informationen zu einer einzigen Empfehlung zusammen. Wer dort nicht erscheint, wird von einer wachsenden Zielgruppe schlicht nicht wahrgenommen. KI-Sichtbarkeit basiert auf drei Säulen: technische Struktur (Schema.org, KI-Bot-Zugang), hochwertiger Content (klare, zitierbare Antworten) und externe Autorität (Markennennungen, konsistente Unternehmensdaten)."
    },
    {
        q: "Warum reicht klassische SEO nicht mehr aus?",
        a: "Klassische SEO optimiert für Suchergebnislisten mit zehn blauen Links – ein Format, das über 20 Jahre Standard war. KI-Systeme wie ChatGPT oder Perplexity funktionieren grundlegend anders: Sie durchsuchen das Web, wählen wenige Quellen aus und fassen sie zu einer einzigen Empfehlung zusammen. Wer in dieser Empfehlung nicht erscheint, wird nicht verglichen und nicht in Betracht gezogen. Laut Gartner verlieren Marken bis 2028 über 50 Prozent ihres organischen Traffics an KI-gestützte Suche. SEO bleibt wichtig als technisches Fundament, aber ohne gezielte KI-Optimierung verpasst du den Kanal, über den immer mehr Kaufentscheidungen stattfinden."
    },
    {
        q: "Wie entscheidet KI, welche Unternehmen sie nennt?",
        a: "KI-Systeme bewerten vier zentrale Faktoren: Klarheit (eindeutige Kommunikation deines Angebots), Relevanz (präzise Antworten auf konkrete Nutzerfragen), Autorität (Markennennungen auf vertrauenswürdigen Plattformen, PR-Erwähnungen, konsistente NAP-Daten) und Konsistenz (alle Signale von Website bis Google Business zeichnen dasselbe Bild). In der Regel berücksichtigt KI nur fünf bis zehn Quellen pro Antwort – alle anderen Unternehmen spielen in der Entscheidung schlicht keine Rolle. Deshalb ist es entscheidend, alle vier Faktoren systematisch aufzubauen."
    },
    {
        q: "Was macht AISEO konkret für mein Unternehmen?",
        a: "Ich analysiere zunächst, wie KI-Systeme dein Unternehmen aktuell beschreiben – bei welchen Fragen du genannt wirst und bei welchen nicht. Darauf aufbauend optimiere ich drei Bereiche: die technische Struktur deiner Website (Schema.org Markup, Seitenarchitektur, KI-Crawler-Zugang), die Inhalte (klare, strukturierte Antworten auf echte Kundenfragen, die KI als Quelle verwenden kann) und externe Autoritätssignale (Markennennungen auf relevanten Plattformen, Branchenverzeichnisse, konsistente Unternehmensdaten). Die Umsetzung erfolgt priorisiert nach Wirkung und wird durch kontinuierliches Monitoring messbar gemacht."
    },
    {
        q: "Ist KI-Sichtbarkeit für jedes Unternehmen sinnvoll?",
        a: "Nein – und ich bin ehrlich darüber. Besonders sinnvoll ist KI-Sichtbarkeit für Unternehmen mit einem klaren, differenzierten Angebot: Dienstleister, Berater, Agenturen, SaaS-Anbieter und spezialisierte lokale Betriebe, deren Kunden bereits KI-Tools für Recherche und Kaufentscheidungen nutzen. Weniger sinnvoll ist sie für reine Commodity-Anbieter ohne Differenzierungsmerkmal oder Branchen, in denen die Zielgruppe noch keine KI-gestützten Suchtools verwendet. Am meisten profitieren Unternehmen, die bereit sind, aktiv in Klarheit, technische Struktur und externe Autorität zu investieren."
    },
    {
        q: "Wie arbeitest du konkret?",
        a: "Mein Ansatz basiert auf systematischer Analyse und datengetriebener Umsetzung. Im ersten Schritt prüfe ich, wie KI-Systeme dein Unternehmen aktuell beschreiben – in ChatGPT, Perplexity, Google AI Overviews und Copilot. Ich stelle die Fragen, die deine potenziellen Kunden stellen, und dokumentiere, ob und wie du genannt wirst. Dann identifiziere ich die konkreten Lücken und setze priorisierte Maßnahmen um: Schema.org Markup, Content-Überarbeitung für maximale Zitierbarkeit, Seitenarchitektur-Optimierung und systematischen Aufbau externer Autoritätssignale. Fortschritte messe ich kontinuierlich und passe die Strategie an."
    }
];

const FAQItem: React.FC<{ item: FAQItem; includeSchema?: boolean }> = ({ item, includeSchema = false }) => (
    <div
        className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0"
        {...(includeSchema && {
            itemScope: true,
            itemProp: "mainEntity",
            itemType: "https://schema.org/Question"
        })}
    >
        <h3
            className="text-base md:text-lg font-semibold text-black tracking-tight mb-3"
            {...(includeSchema && { itemProp: "name" })}
        >
            {item.q}
        </h3>

        <div
            className="text-gray-600 text-sm md:text-base leading-relaxed"
            {...(includeSchema && {
                itemProp: "acceptedAnswer",
                itemScope: true,
                itemType: "https://schema.org/Answer"
            })}
        >
            <p {...(includeSchema && { itemProp: "text" })}>{item.a}</p>
        </div>
    </div>
);

interface FAQProps {
    includeFAQPageSchema?: boolean;
}

export const FAQ: React.FC<FAQProps> = ({ includeFAQPageSchema = false }) => {
    // Generate JSON-LD schema for FAQPage only when explicitly requested
    const faqSchema = includeFAQPageSchema ? {
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
    } : null;

    return (
        <section
            className="py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 max-w-[800px] mx-auto bg-white"
            {...(includeFAQPageSchema && {
                itemScope: true,
                itemType: "https://schema.org/FAQPage"
            })}
        >
            {/* Schema.org JSON-LD - only include when requested */}
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            <FadeIn>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-12 md:mb-16 tracking-[-0.04em] text-center">
                    Häufige <span className="text-gray-300">Fragen.</span>
                </h2>

                {/* SEO: List of FAQs always visible for crawlers */}
                <div className="space-y-6">
                    {HOMEPAGE_FAQS.map((item, index) => (
                        <FAQItem key={index} item={item} includeSchema={includeFAQPageSchema} />
                    ))}
                </div>

                {/* Link to full FAQ page */}
                <div className="text-center mt-12">
                    <a
                        href="/faq"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors group"
                    >
                        Alle Fragen ansehen
                        <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </FadeIn>
        </section>
    );
};
