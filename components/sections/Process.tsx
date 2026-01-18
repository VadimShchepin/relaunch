import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

const STEPS = [
    {
        num: "01",
        title: "AI-Check",
        lines: [
            "Analyse, wie KI dein Unternehmen aktuell beschreibt",
            "Identifikation fehlender Signale (Inhalt, Struktur, Autorität)",
            "3 konkrete Website-Hebel, die Relevanz erzeugen"
        ]
    },
    {
        num: "02",
        title: "Strategie",
        lines: [
            "Welche Seiten KI braucht, um dich zu verstehen",
            "Welche Inhalte Vertrauen & Expertise signalisieren",
            "Konkreter Plan für neue Seiten, Updates und Schwerpunkte (keine Templates, keine SEO-Floskeln)"
        ]
    },
    {
        num: "03",
        title: "Umsetzung",
        lines: [
            "Aufbau & Überarbeitung der relevanten Seiten",
            "Strukturierung von Inhalten für KI-Verständnis",
            "Autoritäts-Signale (Verlinkung, Referenzen, Klarheit)",
            "Messung: Wirst du genannt – ja oder nein"
        ]
    }
];

export const Process: React.FC = () => {
    return (
        <section id="process" className="py-32 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto bg-white rounded-section my-20">
            <div className="max-w-7xl mx-auto">
                <FadeIn>
                    <p className="text-lg md:text-xl font-medium text-gray-600 text-center mb-6 leading-relaxed">
                        KI-Sichtbarkeit entsteht nicht durch Tools – sondern durch klare Websites.
                    </p>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-24 text-center">
                        Der Weg zur <span className="text-brand-accent">Relevanz.</span>
                    </h2>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8 group/container items-start">
                    {STEPS.map((step, i) => (
                        <FadeIn key={i} delay={i * 100} className="h-full">
                            <div className="relative h-full p-10 rounded-2xl bg-[#FBF9F7] border border-gray-100 hover:border-brand-accent/50 transition-all duration-500 hover:-translate-y-2 group/card hover:shadow-2xl hover:shadow-brand-accent/5">
                                {/* Number */}
                                <div className="absolute top-8 right-8 text-5xl font-bold text-gray-200 group-hover/card:text-brand-accent/20 transition-colors">
                                    {step.num}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-8 tracking-tight mt-4 group-hover/card:text-brand-accent transition-colors">
                                    {step.title}
                                </h3>

                                {/* Lines */}
                                <div className="space-y-4">
                                    {step.lines.map((line, j) => (
                                        <div key={j} className="flex items-start gap-3 text-base font-medium text-gray-600 group-hover/card:text-gray-900 transition-colors leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/card:bg-brand-accent transition-colors mt-2 shrink-0" />
                                            <span>{line}</span>
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
