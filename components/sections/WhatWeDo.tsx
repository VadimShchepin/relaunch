import React from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

const STEPS = [
    {
        num: '01',
        title: 'Prüfen',
        image: '/image/whatwedo/step-1.webp',
        alt: 'Person am Laptop prüft KI-Antworten und Auswertungen am Schreibtisch',
        body: 'Wir fragen ChatGPT, Perplexity, Gemini, Claude und Google AI Overviews mit den Formulierungen deiner Kunden. Du siehst schwarz auf weiß, ob du genannt wirst und wer stattdessen empfohlen wird.',
    },
    {
        num: '02',
        title: 'Aufbauen',
        image: '/image/whatwedo/step-2.webp',
        alt: 'Zwei Kollegen arbeiten gemeinsam an Inhalten und Struktur einer Website',
        body: 'Wir machen deine Website für KI zur Quelle: zitierbare Inhalte auf echte Fragen, klare Struktur, Schema und eine technische Basis, die KI-Crawler sauber einlesen. Dazu Autoritätssignale von außen.',
    },
    {
        num: '03',
        title: 'Messen',
        image: '/image/whatwedo/step-3.webp',
        alt: 'Laptop mit Dashboard aus Kurven und Diagrammen neben ausgedruckten Reports',
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
                    Wir bauen und optimieren Websites so, dass KI-Systeme sie als verlässliche Quelle erkennen, nennen und empfehlen. Datengetrieben und messbar, im direkten Draht zu einem kleinen Hamburger Team.
                </p>
            </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {STEPS.map((step, i) => (
                <FadeIn key={step.num} delay={i * 120}>
                    <div className="h-full bg-white rounded-card border border-gray-100 overflow-hidden hover:border-brand-accent hover:shadow-lg transition-all flex flex-col">
                        <div className="relative aspect-[16/10] w-full">
                            <Image
                                src={step.image}
                                alt={step.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                            />
                            <span className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-xs font-bold tracking-wide text-brand-accent shadow-sm">
                                {step.num}
                            </span>
                        </div>
                        <div className="p-7 md:p-8 flex flex-col flex-1">
                            <h3 className="text-2xl font-semibold text-black tracking-tight mb-3">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.body}</p>
                        </div>
                    </div>
                </FadeIn>
            ))}
        </div>

        <FadeIn delay={400}>
            <div className="flex flex-col items-center text-center mt-12 md:mt-16 gap-4">
                <Button
                    primary
                    href="/contact"
                    text="Kostenlose KI-Sichtbarkeitsanalyse anfragen"
                />
                <p className="text-sm text-gray-500">
                    Konkrete Prompts, echte Antworten, kein Verkaufsgespräch. Direkt mit dem Team.
                </p>
            </div>
        </FadeIn>
    </section>
);
