import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

const STEPS = [
    {
        num: "01",
        title: "AI-Check",
        lines: [
            "Status Quo Analyse",
            "Identifikation der Lücken",
            "3 konkrete Prioritäten"
        ]
    },
    {
        num: "02",
        title: "Strategie",
        lines: [
            "Keine Templates",
            "Maßgeschneiderte Roadmap",
            "Fokus auf Autorität"
        ]
    },
    {
        num: "03",
        title: "Umsetzung",
        lines: [
            "Technische Optimierung",
            "Content-Strukturierung",
            "Messbare Sichtbarkeit"
        ]
    }
];

export const Process: React.FC = () => {
    return (
        <section id="process" className="py-32 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto bg-white rounded-section my-20">
            <div className="max-w-7xl mx-auto">
                <FadeIn>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-24 text-center">
                        Der Weg zur <span className="text-brand-accent">Relevanz.</span>
                    </h2>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8 group/container">
                    {STEPS.map((step, i) => (
                        <FadeIn key={i} delay={i * 100} className="h-full">
                            <div className="relative h-full p-10 rounded-2xl bg-[#FBF9F7] border border-gray-100 hover:border-brand-accent/50 transition-all duration-500 hover:-translate-y-2 group/card hover:shadow-2xl hover:shadow-brand-accent/5">
                                {/* Number */}
                                <div className="absolute top-8 right-8 text-5xl font-bold text-gray-200 group-hover/card:text-brand-accent/20 transition-colors">
                                    {step.num}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-12 tracking-tight mt-4 group-hover/card:text-brand-accent transition-colors">
                                    {step.title}
                                </h3>

                                {/* Lines */}
                                <div className="space-y-4">
                                    {step.lines.map((line, j) => (
                                        <div key={j} className="flex items-center gap-3 text-lg font-medium text-gray-600 group-hover/card:text-gray-900 transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/card:bg-brand-accent transition-colors" />
                                            {line}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
