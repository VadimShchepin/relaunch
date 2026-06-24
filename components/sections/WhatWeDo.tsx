import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowRightIcon } from '@/components/ui/Icons';

const STEPS = [
    {
        num: '01',
        title: 'Prüfen',
        body: 'Wir fragen ChatGPT, Perplexity, Gemini, Claude und Google AI Overviews mit den Formulierungen deiner Kunden. Du siehst schwarz auf weiß, ob du genannt wirst und wer stattdessen empfohlen wird.',
    },
    {
        num: '02',
        title: 'Aufbauen',
        body: 'Wir machen deine Website für KI zur Quelle: zitierbare Inhalte auf echte Fragen, klare Struktur, Schema und eine technische Basis, die KI-Crawler sauber einlesen. Dazu Autoritätssignale von außen.',
    },
    {
        num: '03',
        title: 'Messen',
        body: 'Wir testen vorher und nachher mit echten Prompts und tracken Nennungen, Zitate und KI-Traffic. Kein Blackbox-Report, sondern nachprüfbare Belege aus deinen eigenen Konten.',
    },
];

export const WhatWeDo: React.FC = () => (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 max-w-[1200px] mx-auto">
        <FadeIn>
            <div className="text-center mb-12 md:mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-accent font-semibold mb-4">
                    So wirst du zur Quelle
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-black mb-5">
                    Drei Schritte, keine Blackbox.
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Ich baue und optimiere Websites so, dass KI-Systeme sie als verlässliche Quelle erkennen, nennen und empfehlen. Datengetrieben und messbar, direkt mit dem Gründer.
                </p>
            </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {STEPS.map((step, i) => (
                <FadeIn key={step.num} delay={i * 120}>
                    <div className="h-full bg-white rounded-card border border-gray-100 p-8 hover:border-brand-accent hover:shadow-lg transition-all">
                        <span className="text-sm font-bold tracking-widest text-brand-accent">{step.num}</span>
                        <h3 className="text-2xl font-semibold text-black tracking-tight mt-3 mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.body}</p>
                    </div>
                </FadeIn>
            ))}
        </div>

        <FadeIn delay={400}>
            <div className="text-center mt-12">
                <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-brand-accent transition-colors group"
                >
                    Der Check: deine KI-Sichtbarkeit kostenlos prüfen
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </FadeIn>
    </section>
);
