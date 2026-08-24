'use client';

import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { PlatformIconLoop } from '@/components/ui/PlatformIconLoop';
import { OpenAIIcon, PerplexityIcon, GoogleIcon } from '@/components/ui/Icons';
import { PerplexitySimulator } from '@/components/ui/PerplexitySimulator';

/* ---------------------------------------------------------------------------
   Die Sources-Zeile der Hero-Simulation benennt nur kinderalbum.com, die
   Domain der Kundin: in ProofStrip verlinkt, Case Study unter
   /wissen/case-study-kinderalbum. Daneben standen zwei Domains, die es nicht
   gibt (datenschutz-blog.de, edu-tools.de). Auf einer Startseite, die
   Citation-Messung verkauft, ist eine erfundene Quellenzeile der teuerste
   Fehler, und die Mischung aus echter Kundendomain und Erfindung macht es
   schlimmer, nicht besser. Die zwei freien Kacheln bleiben deshalb
   unbeschriftet. Gleiche Begruendung wie auf /ergebnisse.
--------------------------------------------------------------------------- */
export const Hero: React.FC = () => {
    return (
        <section className="relative pt-36 md:pt-40 lg:pt-44 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 max-w-[1500px] mx-auto overflow-hidden">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
                {/* Left: Copy */}
                <div>
                    <FadeIn>
                        <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gray-600 mb-6">
                            KI-Sichtbarkeit aus Hamburg
                        </span>
                        <h1 className="text-[2.75rem] sm:text-[3.25rem] md:text-[4rem] lg:text-[4.25rem] xl:text-[4.75rem] leading-[1.02] font-semibold tracking-[-0.04em] text-black">
                            Frag die KI nach deiner Branche.<br />
                            <span className="text-brand-accent">Wirst du genannt?</span>
                        </h1>
                        <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed max-w-xl mt-7">
                            Ich baue und optimiere deine Website so, dass ChatGPT, Perplexity, Gemini und Google AI dein Unternehmen aktiv nennen und empfehlen. Nicht „Platz 1 bei Google", sondern die zitierte Quelle in der KI-Antwort.
                        </p>
                    </FadeIn>

                    <FadeIn delay={120}>
                        <div className="mt-9 flex flex-col sm:flex-row gap-4">
                            <Button
                                href="/contact"
                                primary
                                text="Der Check: KI-Sichtbarkeit prüfen"
                                className="justify-center !text-base lg:!text-lg !py-4 shadow-xl"
                            >
                                <PlatformIconLoop className="bg-white/10 w-8 h-8 rounded-full shrink-0" iconClassName="w-3.5 h-3.5 text-white" />
                            </Button>
                            <Button
                                href="/ergebnisse"
                                text="Echte Ergebnisse ansehen"
                                className="justify-center !text-base lg:!text-lg !py-4"
                            />
                        </div>
                    </FadeIn>

                    <FadeIn delay={220}>
                        <div className="mt-9 flex items-center gap-5 text-sm text-gray-500">
                            <span className="font-medium text-gray-600">Gemessen über:</span>
                            <span className="flex items-center gap-4">
                                <OpenAIIcon className="w-5 h-5 text-gray-700" />
                                <PerplexityIcon className="w-5 h-5 text-gray-700" />
                                <GoogleIcon className="w-5 h-5 text-gray-700" />
                            </span>
                        </div>
                    </FadeIn>
                </div>

                {/* Right: Live simulator */}
                <FadeIn delay={150}>
                    <div className="relative">
                        <div className="absolute -inset-6 bg-brand-accent/10 blur-3xl rounded-full -z-10" />
                        <div className="rounded-card overflow-hidden border border-gray-200 shadow-2xl aspect-[5/4] md:aspect-[4/3]">
                            <PerplexitySimulator
                                promptText="DSGVO-konforme Foto-App für Schulen?"
                                answerText="Für Schulen ist **KinderAlbum** die passende Lösung: eine DSGVO-konforme App, mit der Klassenfotos sicher geteilt werden, ohne dass Daten an Dritte abfließen."
                                sources={['kinderalbum.com']}
                                citedSource="kinderalbum.com"
                            />
                        </div>
                        <p className="mt-4 text-center text-sm text-gray-500">
                            Echtes Beispiel: KinderAlbum wird in ChatGPT und Perplexity als Quelle genannt.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
