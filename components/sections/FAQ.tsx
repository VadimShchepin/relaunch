import React, { useState } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Icon } from '@iconify/react';

interface FAQItem {
    q: string;
    a: string;
}

const FAQS: FAQItem[] = [
    {
        q: "Was kostet das?",
        a: "Der AI-Check ist kostenlos. Alles Weitere nur, wenn es für dich Sinn ergibt."
    },
    {
        q: "Wie lange dauert es bis zu Ergebnissen?",
        a: "Abhängig von Branche und Ausgangslage. Erste Veränderungen oft nach Wochen, solide Effekte typischerweise in 3–6 Monaten."
    },
    {
        q: "Funktioniert das auch für kleine Unternehmen?",
        a: "Oft besonders gut – KI-Systeme bevorzugen Klarheit und Kontext, nicht nur große Marken."
    },
    {
        q: "Ist das nur 'ChatGPT-SEO'?",
        a: "Nein. Es geht um Sichtbarkeit in KI-Systemen (AEO/GEO) zusätzlich zu klassischer SEO."
    },
    {
        q: "Woran erkenne ich, ob es funktioniert?",
        a: "An konkreten Nennungen/Quellen + messbaren Signalen (Anfragen mit Kontext, Tracking-Muster, wiederholbare Tests)."
    }
];

const FAQItem: React.FC<{ item: FAQItem; isOpen: boolean; onToggle: () => void }> = ({ item, isOpen, onToggle }) => (
    <div className="border-b border-gray-100 last:border-b-0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
        <button
            onClick={onToggle}
            className="w-full py-8 flex justify-between items-center text-left group"
            aria-expanded={isOpen}
        >
            <h3 className="text-lg md:text-xl font-semibold text-black tracking-tight pr-8 group-hover:text-brand-accent transition-colors" itemProp="name">
                {item.q}
            </h3>
            <Icon
                icon={isOpen ? "meteor-icons:minus" : "meteor-icons:plus"}
                className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? 'text-brand-accent' : 'text-gray-300 group-hover:text-brand-accent'}`}
            />
        </button>
        <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-8' : 'max-h-0'}`}
            itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
        >
            <p className="text-gray-500 text-base leading-relaxed font-medium pr-12" itemProp="text">{item.a}</p>
        </div>
    </div>
);

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    // Generate JSON-LD schema for FAQPage
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };

    return (
        <section className="py-40 px-6 md:px-12 lg:px-20 max-w-[1000px] mx-auto" itemScope itemType="https://schema.org/FAQPage">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <FadeIn>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-16 tracking-[-0.04em] text-center">
                    Häufige <br />
                    <span className="text-gray-300">Fragen.</span>
                </h2>
                <div className="bg-white rounded-card border border-gray-100 px-10">
                    {FAQS.map((item, i) => (
                        <FAQItem
                            key={i}
                            item={item}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                        />
                    ))}
                </div>
            </FadeIn>
        </section>
    );
};
