'use client';

import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { PlatformIconLoop } from '@/components/ui/PlatformIconLoop';
import { IMAGES } from '@/lib/constants';
import { Icon } from '@iconify/react';

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
                                    <PlatformIconLoop className="bg-white/10 w-9 h-9 rounded-full ml-4 shrink-0" iconClassName="text-base text-white" />
                                </Button>
                            </div>
                        </div>
                        <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-800/80 leading-relaxed max-w-2xl mt-8 lg:mt-12">
                            Ich helfe Hamburger Unternehmen, von KI empfohlen zu werden – nicht nur gefunden.
                        </p>
                        <div className="xl:hidden mt-6 lg:mt-8">
                            <Button
                                href="/contact"
                                primary
                                text="KI-Sichtbarkeit prüfen"
                                className="w-full sm:w-auto justify-center !text-base lg:!text-lg !py-4 shadow-xl"
                            >
                                <PlatformIconLoop className="bg-white/10 w-8 h-8 rounded-full shrink-0" iconClassName="text-sm text-white" />
                            </Button>
                        </div>
                    </FadeIn>
                </div>

                {/* Mobile: Lightweight Proof Block */}
                <div className="block xl:hidden">
                    <FadeIn delay={100}>
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-sm mx-auto">
                            {/* Screenshot */}
                            <div className="mb-4 rounded-xl overflow-hidden border border-gray-100">
                                <img
                                    src="/image/kinderAlbum/proof4-kinderAlbum-perplexity.webp"
                                    alt="KinderAlbum Perplexity Empfehlung"
                                    className="w-full h-auto"
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
                                    „Spezialisierte, DSGVO-konforme Foto-Plattform für Schulen."
                                </p>
                                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                                    <span>Quelle:</span>
                                    <div className="flex items-center gap-1">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                        </svg>
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
                                <p className="text-xs lg:text-sm font-medium mt-1 tracking-tight leading-snug opacity-90">
                                    Umsatz fließt bis 2028 über KI-Suche.
                                </p>
                            </div>

                            {/* Middle: Additional Stats */}
                            <div className="space-y-2 lg:space-y-3 py-3 lg:py-4">
                                <div className="bg-white/10 rounded-lg p-2 lg:p-3">
                                    <p className="text-[10px] lg:text-xs font-medium leading-snug">
                                        <span className="text-white font-bold">Höhere Abschlussquote</span> durch KI-Empfehlungen
                                    </p>
                                    <a href="https://www.amsive.com/insights/seo/does-llm-traffic-convert-better-than-organic-a-new-data-backed-study/" target="_blank" rel="noopener noreferrer" className="text-[8px] lg:text-[9px] opacity-60 hover:opacity-100 underline">Amsive 2025</a>
                                </div>
                                <div className="bg-white/10 rounded-lg p-2 lg:p-3">
                                    <p className="text-[10px] lg:text-xs font-medium leading-snug">
                                        <span className="text-white font-bold">20-50%</span> weniger Traffic ohne GEO-Optimierung
                                    </p>
                                    <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/new-front-door-to-the-internet-winning-in-the-age-of-ai-search" target="_blank" rel="noopener noreferrer" className="text-[8px] lg:text-[9px] opacity-60 hover:opacity-100 underline">McKinsey 2025</a>
                                </div>
                            </div>

                            {/* Bottom: Icons & Main Source */}
                            <div>
                                <div className="flex items-center gap-2 lg:gap-3 mb-2">
                                    <Icon icon="simple-icons:openai" className="w-3 h-3 lg:w-4 lg:h-4 opacity-80" />
                                    <Icon icon="simple-icons:perplexity" className="w-3 h-3 lg:w-4 lg:h-4 opacity-80" />
                                    <Icon icon="simple-icons:google" className="w-3 h-3 lg:w-4 lg:h-4 opacity-80" />
                                </div>
                                <a
                                    href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/new-front-door-to-the-internet-winning-in-the-age-of-ai-search"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[8px] lg:text-[9px] font-medium opacity-60 hover:opacity-100 transition-opacity underline"
                                >
                                    Hauptquelle: McKinsey & Company
                                </a>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Card 2: ChatGPT Image - Offset Down */}
                    <div className="w-full bg-white rounded-card overflow-hidden aspect-[3/4] translate-y-12 transform rotate-1 hover:rotate-0 hover:scale-[1.25] hover:z-50 transition-all duration-500 shadow-2xl border border-gray-100 p-1 group">
                        <div className="w-full h-full rounded-[12px] overflow-hidden bg-black">
                            <FadeIn delay={200} className="h-full w-full flex items-center justify-center relative">
                                <img
                                    src="/images/ChatGPT visits.webp"
                                    alt="ChatGPT Traffic Analytics"
                                    className="w-full h-full object-contain"
                                />
                                {/* Overlay to indicate focus on hover */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
                            </FadeIn>
                        </div>
                    </div>

                    {/* Card 3: Zitate/Quellen - Offset Up */}
                    <div className="w-full bg-[#2ec88e] rounded-card text-brand-dark aspect-[3/4] -translate-y-8 transform -rotate-1 hover:rotate-0 hover:scale-[1.25] hover:z-50 transition-all duration-500 shadow-xl relative z-2 overflow-hidden flex flex-col justify-between group">
                        <div className="p-6 lg:p-8 xl:p-10 pb-0">
                            <span className="text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-semibold tracking-tighter leading-none block">Zitate</span>
                            <p className="text-base lg:text-lg xl:text-xl font-semibold mt-3 lg:mt-4 mb-2 tracking-tight leading-snug">
                                KI nennt keine Websites – sie nennt Quellen.
                            </p>
                            <p className="text-xs lg:text-sm text-brand-dark/70 font-medium leading-tight">
                                Wir sorgen dafür, dass dein Unternehmen diese Quelle ist.
                            </p>
                        </div>

                        {/* Proof Image Integration */}
                        <div className="px-4 lg:px-6 pb-4 lg:pb-6">
                            <div className="bg-black/5 rounded-xl overflow-hidden border border-black/10 p-2 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                                <img
                                    src="/image/kinderAlbum/proof3.webp"
                                    alt="Proof Example"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 4: AI Search Results Image - Offset Down */}
                    <div className="w-full bg-white rounded-card overflow-hidden aspect-[3/4] translate-y-20 transform rotate-1 hover:rotate-0 hover:scale-[1.25] hover:z-50 transition-all duration-500 shadow-2xl border border-gray-100 p-1 group">
                        <div className="w-full h-full rounded-[12px] overflow-hidden bg-black">
                            <FadeIn delay={400} className="h-full w-full flex items-center justify-center relative">
                                <img
                                    src="/image/proof/Blitz-ChatGPTProof.webp"
                                    alt="AI Search Results Proof"
                                    className="w-full h-full object-contain"
                                />
                                {/* Overlay to indicate focus on hover */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
                            </FadeIn>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
