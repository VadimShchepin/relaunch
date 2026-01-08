import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

const FAQS = [
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
        q: "Ist das nur „ChatGPT-SEO“?",
        a: "Nein. Es geht um Sichtbarkeit in KI-Systemen (AEO/GEO) zusätzlich zu klassischer SEO."
    },
    {
        q: "Woran erkenne ich, ob es funktioniert?",
        a: "An konkreten Nennungen/Quellen + messbaren Signalen (Anfragen mit Kontext, Tracking-Muster, wiederholbare Tests)."
    }
];

export const FAQ: React.FC = () => (
    <section className="py-40 px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto">
        <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-20 tracking-[-0.04em] text-center">
                Häufige <br />
                <span className="text-gray-300">Fragen.</span>
            </h2>
            <div className="space-y-4">
                {FAQS.map((item, i) => (
                    <div key={i} className="bg-white p-10 rounded-card border border-gray-100 hover:shadow-xl transition-all duration-500 group">
                        <h3 className="text-xl font-semibold mb-4 text-black tracking-tight flex justify-between items-center text-left">
                            {item.q}
                            <span className="text-gray-200 group-hover:text-brand-accent transition-colors">+</span>
                        </h3>
                        <p className="text-gray-500 text-base leading-relaxed font-medium">{item.a}</p>
                    </div>
                ))}
            </div>
        </FadeIn>
    </section>
);


