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
            <div id="disziplinen">
                <section className="py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto bg-brand-bg">
                    <div className="text-center mb-12 md:mb-16">
                        <p className="text-xs uppercase tracking-[0.2em] text-brand-accent font-semibold mb-4">Drei Disziplinen, eine Frage</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black tracking-[-0.04em] mb-6">
                            AI SEO. AEO. GEO.
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Drei sich überlappende, aber technisch unterschiedliche Disziplinen — mit einer gemeinsamen Frage: Wie wird dein Unternehmen 2026 von KI-Systemen empfohlen?
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        <a
                            href="/wissen/ai-seo-agentur"
                            className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-accent hover:shadow-lg transition-all"
                        >
                            <div className="text-xs uppercase tracking-[0.15em] font-semibold text-brand-accent mb-3">AI SEO</div>
                            <h3 className="text-2xl font-semibold text-black mb-3 tracking-tight leading-tight">
                                Search Optimization für KI-Engines
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed mb-6">
                                SEO angepasst an die Welt von ChatGPT, Perplexity und Gemini. Nicht „Platz 1 auf Google", sondern die zitierte Quelle in der KI-Antwort.
                            </p>
                            <span className="text-sm font-semibold text-black inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                Was AI SEO leistet
                                <ArrowRightIcon className="w-4 h-4" />
                            </span>
                        </a>

                        <a
                            href="/wissen/aeo-answer-engine-optimization"
                            className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-accent hover:shadow-lg transition-all"
                        >
                            <div className="text-xs uppercase tracking-[0.15em] font-semibold text-brand-accent mb-3">AEO</div>
                            <h3 className="text-2xl font-semibold text-black mb-3 tracking-tight leading-tight">
                                Answer Engine Optimization
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed mb-6">
                                Inhalte so strukturieren, dass KI-Antwort-Systeme sie direkt als Antwort verwenden. Frage rein, deine Marke raus — ohne Umweg über die Klick-Liste.
                            </p>
                            <span className="text-sm font-semibold text-black inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                AEO-Guide lesen
                                <ArrowRightIcon className="w-4 h-4" />
                            </span>
                        </a>

                        <a
                            href="/wissen/was-ist-geo"
                            className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-accent hover:shadow-lg transition-all"
                        >
                            <div className="text-xs uppercase tracking-[0.15em] font-semibold text-brand-accent mb-3">GEO</div>
                            <h3 className="text-2xl font-semibold text-black mb-3 tracking-tight leading-tight">
                                Generative Engine Optimization
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed mb-6">
                                Optimierung für generative KI: Wie Claude, Gemini und ChatGPT deine Inhalte abrufen und in eigene Antworten einbauen — und wie du dort zur Quelle wirst.
                            </p>
                            <span className="text-sm font-semibold text-black inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                GEO verstehen
                                <ArrowRightIcon className="w-4 h-4" />
                            </span>
                        </a>
                    </div>

                    <div className="text-center mt-12 md:mt-16">
                        <a
                            href="/wissen/ki-sichtbarkeit-agenturen-hamburg-2026"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors group"
                        >
                            Neu: Welche Hamburger Agentur wird in welcher KI zitiert? — Unser 4-KI-Test
                            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </section>
            </div>
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
                                    KI-Sichtbarkeit bedeutet, dass dein Unternehmen von KI-Systemen wie ChatGPT, Perplexity oder Google AI aktiv genannt und empfohlen wird – nicht nur in Suchergebnissen gefunden, sondern als vertrauenswürdige Quelle ausgewählt. Während klassische Suchmaschinen zehn blaue Links anzeigen, wählt KI nur zwei bis sieben Quellen pro Antwort. Wer dort nicht erscheint, wird von einer wachsenden Zielgruppe nicht wahrgenommen.
                                </p>
                            </div>

                            <div className="border-b border-gray-100 pb-6">
                                <h3 className="text-base md:text-lg font-semibold text-black tracking-tight mb-3">
                                    Warum reicht klassische SEO nicht mehr aus?
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    KI zeigt keine Suchlisten. Sie wählt wenige Quellen aus und fasst sie zu einer einzigen Empfehlung zusammen. Wer dort nicht erscheint, wird nicht verglichen – sondern komplett ignoriert. Laut Gartner verlieren Marken bis 2028 über 50 % ihres organischen Traffics an KI-gestützte Suche. SEO bleibt wichtig als Fundament, aber ohne gezielte KI-Optimierung verpasst du den Kanal, über den immer mehr Kaufentscheidungen getroffen werden.
                                </p>
                            </div>

                            <div className="border-b border-gray-100 pb-6">
                                <h3 className="text-base md:text-lg font-semibold text-black tracking-tight mb-3">
                                    Wie entscheidet KI, welche Unternehmen sie nennt?
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    KI-Systeme bewerten vier zentrale Faktoren: Klarheit, Relevanz, Autorität und Konsistenz. Klarheit heißt, deine Website kommuniziert eindeutig, was du anbietest. Autorität entsteht durch Markennennungen auf vertrauenswürdigen Plattformen und konsistente Unternehmensdaten. In der Regel berücksichtigt KI nur fünf bis zehn Quellen pro Antwort – alle anderen spielen keine Rolle.
                                </p>
                            </div>

                            <div className="border-b border-gray-100 pb-6">
                                <h3 className="text-base md:text-lg font-semibold text-black tracking-tight mb-3">
                                    Was macht AISEO konkret für mein Unternehmen?
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Ich analysiere, wie KI dein Unternehmen aktuell beschreibt, und entwickle eine Strategie in drei Bereichen: technische Website-Struktur (Schema.org, Architektur, KI-Bot-Zugang), Content-Optimierung (klare, zitierbare Antworten auf echte Kundenfragen) und Autoritätsaufbau (Markennennungen, PR, konsistente Unternehmensdaten). Die Umsetzung erfolgt schrittweise und messbar.
                                </p>
                            </div>

                            <div className="border-b border-gray-100 pb-6">
                                <h3 className="text-base md:text-lg font-semibold text-black tracking-tight mb-3">
                                    Ist KI-Sichtbarkeit für jedes Unternehmen sinnvoll?
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Nein. Sie ist besonders sinnvoll für Unternehmen mit klarem Angebot und definierter Zielgruppe: Dienstleister, Berater, Agenturen, SaaS-Anbieter und spezialisierte lokale Unternehmen. Am meisten profitieren Unternehmen, die Kontrolle über ihre Positionierung übernehmen wollen – nicht diejenigen, die auf Rankings, Zufall oder Hoffnung setzen.
                                </p>
                            </div>

                            <div className="pb-0">
                                <h3 className="text-base md:text-lg font-semibold text-black tracking-tight mb-3">
                                    Wie arbeitest du konkret?
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Ich arbeite nicht mit Tricks oder Prompt-Optimierung. Zuerst prüfe ich, wie KI dein Unternehmen aktuell beschreibt – in ChatGPT, Perplexity und Google AI. Dann identifiziere ich Lücken und setze konkrete Änderungen um: Schema.org Markup, Content-Überarbeitung, Seitenarchitektur und externe Signale. Fortschritte werden kontinuierlich gemessen.
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
