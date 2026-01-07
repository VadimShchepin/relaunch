import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Tag } from '@/components/ui/Tag';

const STEPS = [
    { step: "01", title: "AI-Check (kostenlos)", desc: "Klarer Ist-Stand + Potenzial + 3 Prioritäten." },
    { step: "02", title: "Kurzes Gespräch (15 Min)", desc: "Nur wenn es Sinn macht: Ziel, Scope, realistische Erwartung." },
    { step: "03", title: "Umsetzung", desc: "Struktur, Inhalte, technische Sauberkeit – Updates, messbare Schritte." }
];

export const Process: React.FC = () => (
    <section id="process" className="py-32 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto">
        <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
                <Tag text="Prozess" />
                <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight">So läuft das ab</h2>
                <p className="text-xl text-gray-500 font-medium">Kein Agentur-Sprech. Keine 47-seitigen Reports. Nur das, was wirkt.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {STEPS.map((item, i) => (
                    <div key={i} className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                        <span className="text-[6rem] font-bold text-gray-50 absolute -top-6 -right-6 group-hover:text-brand-accent/10 transition-colors">{item.step}</span>
                        <div className="relative z-10 pt-4">
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-600 text-lg leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </FadeIn>
    </section>
);

