import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Tag } from '@/components/ui/Tag';

const STEPS = [
    { step: "01", title: "AI-Check (kostenlos)", desc: "Klarer Ist-Stand + Potenzial + 3 Prioritäten." },
    { step: "02", title: "Kurzes Gespräch (15 Min)", desc: "Nur wenn es Sinn macht: Ziel, Scope, realistische Erwartung." },
    { step: "03", title: "Umsetzung", desc: "Struktur, Inhalte, technische Sauberkeit – Updates, messbare Schritte." }
];

export const Process: React.FC = () => (
    <section id="process" className="py-40 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto">
        <FadeIn>
            <div className="max-w-4xl mb-32">
                <Tag text="Prozess" />
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-black mb-10 tracking-[-0.04em] leading-[1.0]">
                    Klarer Plan. <br />
                    <span className="text-gray-300">Kein Bullshit.</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-500 font-medium leading-tight">Kein Agentur-Sprech. Keine 47-seitigen Reports. Nur das, was wirkt.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {STEPS.map((item, i) => (
                    <div key={i} className={`bg-white p-12 rounded-section border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-2xl transition-all duration-700 ${i === 1 ? 'lg:translate-y-12' : ''}`}>
                        <span className="text-[8rem] font-semibold text-gray-50 absolute -bottom-8 -right-8 group-hover:text-brand-accent/5 transition-all duration-700 leading-none select-none">{item.step}</span>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-semibold mb-6 tracking-tight text-black">{item.title}</h3>
                            <p className="text-gray-500 text-lg leading-snug font-medium">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </FadeIn>
    </section>
);



