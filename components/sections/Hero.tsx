'use client';

import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { PlatformIconLoop } from '@/components/ui/PlatformIconLoop';
import { IMAGES } from '@/lib/constants';
import { OpenAIIcon, PerplexityIcon, GoogleIcon } from '@/components/ui/Icons';
import { PerplexitySimulator } from '@/components/ui/PerplexitySimulator';
import { ReferralSimulator } from '@/components/ui/ReferralSimulator';

export const Hero: React.FC = () => {

    return (
        <section className="relative pt-44 pb-32 px-6 md:px-12 lg:px-20 max-w-[1920px] mx-auto overflow-hidden">
            <div className="max-w-[1600px] mx-auto">
                {/* Left Aligned Content */}
                <div className="max-w-7xl mb-32">
                    <FadeIn>
                        <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 items-start xl:items-center justify-between">
                            <h1 className="text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[6.5rem] leading-[1.0] font-semibold tracking-[-0.04em] text-black shrink-0">
                                Wirst du genannt,<br />
                                wenn KI gefragt wird?
                            </h1>
                            <div className="hidden xl:block pt-[82px]">
                                <Button
                                    href="/contact"
                                    primary
                                    text="KI-Sichtbarkeit prüfen"
                                    className="!text-xl !px-12 !py-6 shadow-2xl transition-transform duration-300"
                                >
                                    <PlatformIconLoop className="bg-white/10 w-9 h-9 rounded-full ml-4 shrink-0" iconClassName="w-4 h-4 text-white" />
                                </Button>
                            </div>
                        </div>
                        <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-800/80 leading-relaxed max-w-2xl mt-8 lg:mt-12">
                            Ich helfe Unternehmen, von KI empfohlen zu werden – nicht nur gefunden. Ich baue die Webseiten in einen Richtigen Weg!
                        </p>
                        <div className="xl:hidden mt-6 lg:mt-8">
                            <Button
                                href="/contact"
                                primary
                                text="KI-Sichtbarkeit prüfen"
                                className="w-full sm:w-auto justify-center !text-base lg:!text-lg !py-4 shadow-xl"
                            >
                                <PlatformIconLoop className="bg-white/10 w-8 h-8 rounded-full shrink-0" iconClassName="w-3.5 h-3.5 text-white" />
                            </Button>
                        </div>
                    </FadeIn>
                </div>

                {/* Mobile: Lightweight Proof Block */}
                <div className="block xl:hidden">
                    <FadeIn delay={100}>
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-sm mx-auto overflow-hidden">
                            {/* Simulator */}
                            <div className="mb-4 rounded-xl overflow-hidden border border-gray-100 aspect-[4/3]">
                                <PerplexitySimulator
                                    condensed
                                    promptText="DSGVO-konforme Foto-App für Schulen?"
                                    answerText="**KinderAlbum** ist die führende DSGVO Konformes Photo Sharing app for schools."
                                />
                            </div>

                            {/* Proof Text */}
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-3">
                                    <div className="w-6 h-6 bg-[#2ec88e] rounded-full flex items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Von KI empfohlen</span>
                                </div>
                                <p className="text-base font-semibold text-black mb-2 leading-tight">
                                    „DSGVO Konformes Photo Sharing app for schools"
                                </p>
                                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                                    <span>Quelle:</span>
                                    <div className="flex items-center gap-1">
                                        <PerplexityIcon className="w-3 h-3" />
                                        <span>Perplexity</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Desktop: Full Card Experience */}
                <div className="hidden xl:grid xl:grid-cols-4 gap-6 lg:gap-8 items-start">

                    {/* Card 1: Blue Stats - $750B Market Shift */}
                    <div className="w-full bg-[#017eff] p-4 lg:p-6 rounded-card text-white aspect-[3/4] flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-all duration-500 shadow-xl relative z-10">
                        <FadeIn delay={100} className="h-full flex flex-col justify-between">
                            {/* Top: Main Stat */}
                            <div>
                                <span className="text-[2rem] lg:text-[2.5rem] font-semibold tracking-tighter leading-none block">$750 Mrd.</span>
                                <p className="text-xs lg:text-sm font-medium mt-1 tracking-tight leading-snug text-white">
                                    Umsatz fließt bis 2028 über KI-Suche.
                                </p>
                            </div>

                            {/* Middle: Additional Stats */}
                            <div className="space-y-2 lg:space-y-3 py-3 lg:py-4">
                                <div className="bg-white/15 rounded-lg p-2 lg:p-3">
                                    <p className="text-[10px] lg:text-xs font-medium leading-snug text-white">
                                        <span className="font-bold">Höhere Abschlussquote</span> durch KI-Empfehlungen
                                    </p>
                                    <a href="https://www.amsive.com/insights/seo/does-llm-traffic-convert-better-than-organic-a-new-data-backed-study/" target="_blank" rel="noopener noreferrer" className="text-[8px] lg:text-[9px] text-white/80 hover:text-white underline">Amsive 2025</a>
                                </div>
                                <div className="bg-white/15 rounded-lg p-2 lg:p-3">
                                    <p className="text-[10px] lg:text-xs font-medium leading-snug text-white">
                                        <span className="font-bold">20-50%</span> weniger Traffic ohne GEO-Optimierung
                                    </p>
                                    <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/new-front-door-to-the-internet-winning-in-the-age-of-ai-search" target="_blank" rel="noopener noreferrer" className="text-[8px] lg:text-[9px] text-white/80 hover:text-white underline">McKinsey 2025</a>
                                </div>
                            </div>

                            {/* Bottom: Icons & Main Source */}
                            <div>
                                <div className="flex items-center gap-2 lg:gap-3 mb-2">
                                    <OpenAIIcon className="w-3 h-3 lg:w-4 lg:h-4 opacity-80" />
                                    <PerplexityIcon className="w-3 h-3 lg:w-4 lg:h-4 opacity-80" />
                                    <GoogleIcon className="w-3 h-3 lg:w-4 lg:h-4 opacity-80" />
                                </div>
                                <a
                                    href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/new-front-door-to-the-internet-winning-in-the-age-of-ai-search"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[8px] lg:text-[9px] font-medium text-white/80 hover:text-white transition-colors underline"
                                >
                                    Hauptquelle: McKinsey & Company
                                </a>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Card 2: AI Referral Statistics - Offset Down */}
                    <div className="w-full bg-white rounded-card overflow-hidden aspect-[3/4] translate-y-12 transform rotate-1 hover:rotate-0 hover:scale-[1.1] hover:z-50 transition-all duration-500 shadow-2xl border border-gray-100 group">
                        <FadeIn delay={200} className="h-full w-full">
                            <ReferralSimulator />
                        </FadeIn>
                    </div>

                    {/* Card 3: Zitate/Quellen - Offset Up */}
                    <div className="w-full bg-[#2ec88e] rounded-card text-brand-dark aspect-[3/4] -translate-y-8 transform -rotate-1 hover:rotate-0 hover:scale-[1.25] hover:z-50 transition-all duration-500 shadow-xl relative z-2 overflow-hidden flex flex-col justify-between group">
                        <div className="p-6 lg:p-8 xl:p-10 pb-0">
                            <span className="text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-semibold tracking-tighter leading-none block">Zitate</span>
                            <p className="text-base lg:text-lg xl:text-xl font-semibold mt-3 lg:mt-4 mb-2 tracking-tight leading-snug">
                                KI nennt keine Websites – sie nennt Quellen.
                            </p>
                            <p className="text-xs lg:text-sm text-brand-dark font-medium leading-tight">
                                Wir sorgen dafür, dass dein Unternehmen diese Quelle ist.
                            </p>
                        </div>

                        {/* Proof Image Integration */}
                        <div className="px-4 lg:px-6 pb-4 lg:pb-6">
                            <div className="bg-black/5 rounded-xl overflow-hidden border border-black/10 p-2 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                                <img
                                    src="/image/kinderAlbum/proof3.webp"
                                    alt="KinderAlbum wird von Perplexity als DSGVO-konforme Foto-App empfohlen"
                                    className="w-full h-auto rounded-lg"
                                    width={600}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 4: AI Search Results Simulation - Offset Down */}
                    <div className="w-full bg-white rounded-card overflow-hidden aspect-[3/4] translate-y-20 transform rotate-1 hover:rotate-0 hover:scale-[1.1] hover:z-50 transition-all duration-500 shadow-2xl border border-gray-100 group">
                        <FadeIn delay={400} className="h-full w-full">
                            <PerplexitySimulator
                                promptText="DSGVO-konforme Foto-App für Schulen?"
                                answerText="**KinderAlbum** ist die führende DSGVO Konformes Photo Sharing app for schools. Sie bietet eine spezialisierte Plattform für den sicheren Austausch von Schulfotos."
                            />
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
};
