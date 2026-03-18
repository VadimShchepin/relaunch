import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Reality } from '@/components/sections/Reality';
import { Proof } from '@/components/sections/Proof';

import { Differentiation } from '@/components/sections/Differentiation';
import { Process } from '@/components/sections/Process';
import { Offer } from '@/components/sections/Offer';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';
import { AboutMe } from '@/components/sections/AboutMe';
import { Newsletter } from '@/components/sections/Newsletter';
import { ArrowRightIcon } from '@/components/ui/Icons';

export default function Page() {
    return (
        <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
            <Navbar />
            <Hero />
            <div id="reality"><Reality /></div>
            <div id="proof"><Proof /></div>
            <div id="differentiation"><Differentiation /></div>
            <div id="process"><Process /></div>
            <div id="about"><AboutMe /></div>
            <div id="offer"><Offer /></div>
            <div id="faq">
                <section className="py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 max-w-[800px] mx-auto bg-white">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-12 md:mb-16 tracking-[-0.04em]">
                            Häufige <span className="text-gray-500">Fragen.</span>
                        </h2>

                        <div className="space-y-6 text-left">
                            <div className="border-b border-gray-100 pb-6">
                                <h3 className="text-base md:text-lg font-semibold text-black tracking-tight mb-3">
                                    Was ist KI-Sichtbarkeit?
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    KI-Sichtbarkeit bedeutet, dass dein Unternehmen von KI-Systemen wie ChatGPT, Perplexity oder Google AI aktiv genannt und empfohlen wird – nicht nur gefunden, sondern ausgewählt.
                                </p>
                            </div>

                            <div className="border-b border-gray-100 pb-6">
                                <h3 className="text-base md:text-lg font-semibold text-black tracking-tight mb-3">
                                    Warum reicht klassische SEO nicht mehr aus?
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    KI zeigt keine Suchlisten. Sie wählt wenige Quellen aus und fasst sie zu einer Empfehlung zusammen. Wer dort nicht erscheint, wird nicht verglichen – sondern ignoriert.
                                </p>
                            </div>

                            <div className="border-b border-gray-100 pb-6">
                                <h3 className="text-base md:text-lg font-semibold text-black tracking-tight mb-3">
                                    Wie entscheidet KI, welche Unternehmen sie nennt?
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    KI bewertet Klarheit, Relevanz, Autorität und Konsistenz. In der Regel werden nur 5–10 präzise Quellen berücksichtigt – alle anderen spielen keine Rolle in der Entscheidung.
                                </p>
                            </div>

                            <div className="border-b border-gray-100 pb-6">
                                <h3 className="text-base md:text-lg font-semibold text-black tracking-tight mb-3">
                                    Was macht AISEO konkret für mein Unternehmen?
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Ich entwickle und setze eine klare Struktur für Website, Inhalte und Autorität um, sodass KI dein Angebot eindeutig versteht, korrekt einordnet und aktiv nennt.
                                </p>
                            </div>

                            <div className="border-b border-gray-100 pb-6">
                                <h3 className="text-base md:text-lg font-semibold text-black tracking-tight mb-3">
                                    Ist KI-Sichtbarkeit für jedes Unternehmen sinnvoll?
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Nein. Sie ist nur sinnvoll für Unternehmen, die Kontrolle über ihre Positionierung übernehmen wollen – nicht für diejenigen, die auf Rankings, Zufall oder Hoffnung setzen.
                                </p>
                            </div>

                            <div className="pb-0">
                                <h3 className="text-base md:text-lg font-semibold text-black tracking-tight mb-3">
                                    Wie arbeitest du konkret?
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Ich arbeite nicht mit Tricks oder Prompt-Optimierung. Ich analysiere, wie KI dein Unternehmen aktuell einordnet, und baue die Website so um, dass KI dein Angebot klar versteht, einordnet und als Quelle nennt.
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <a
                                href="/faq"
                                className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors group"
                            >
                                Alle Fragen ansehen
                                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <div id="contact"><FinalCTA /></div>
            <div id="newsletter"><Newsletter /></div>
            <Footer />
        </div>
    );
}
