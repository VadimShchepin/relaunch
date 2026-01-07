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
    <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto">
        <FadeIn>
            <h2 className="text-4xl font-semibold text-black mb-12 tracking-tight text-center">
                Fragen & Antworten
            </h2>
            <div className="space-y-6">
                {FAQS.map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-brand-accent/30 transition-colors">
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{item.q}</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">{item.a}</p>
                    </div>
                ))}
            </div>
        </FadeIn>
    </section>
);
