import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export const Differentiation: React.FC = () => {
    return (
        <section className="py-16 md:py-20 lg:py-24 xl:py-32 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto bg-[#FBF9F7] rounded-section my-12 lg:my-20">
            <div className="max-w-[1600px] mx-auto w-full">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-24 items-start lg:items-center">
                    {/* Headline (Right on Desktop, Top on Mobile) */}
                    <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1 order-1 lg:order-2">
                        <FadeIn>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[10rem] font-bold tracking-tighter leading-[0.85] text-brand-text mb-6 lg:mb-8">
                                Für Profis.
                            </h2>
                            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-brand-accent tracking-tight leading-[0.9] mb-12 lg:mb-16">
                                Nicht für alle.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Text Content (Left on Desktop, Bottom on Mobile) */}
                    <div className="lg:col-span-4 lg:row-start-1 order-2 lg:order-1">
                        <FadeIn delay={200}>
                            <div className="mb-12 lg:mb-16">
                                <p className="text-xl md:text-2xl font-medium leading-[1.4] tracking-tight text-brand-text">
                                    KI-Systeme treffen Vorentscheidungen über Vertrauen.
                                    Wer dort nicht präzise erscheint, wird ersetzt.
                                </p>
                            </div>

                            <p className="text-lg md:text-xl font-medium text-brand-text/70 mb-8">Nicht für dich, wenn …</p>
                            <div className="space-y-6 mb-10">
                                <p className="text-lg md:text-xl font-semibold text-black leading-tight">du <span className="underline decoration-2 decoration-brand-accent underline-offset-4">Kontrolle abgibst</span>, statt sie zu übernehmen.</p>
                                <p className="text-lg md:text-xl font-semibold text-black leading-tight">es dir <span className="underline decoration-2 decoration-brand-accent underline-offset-4">egal ist</span>, wie KI dein Unternehmen beschreibt.</p>
                                <p className="text-lg md:text-xl font-semibold text-black leading-tight">du Sichtbarkeit <span className="underline decoration-2 decoration-brand-accent underline-offset-4">dem Zufall überlässt</span>.</p>
                            </div>

                            {/* CTA Button - More prominent and clearly clickable */}
                            <div className="pt-4">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full font-semibold text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                                >
                                    <span>KI-Sichtbarkeit prüfen</span>
                                    <div className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14m-7-7 7 7-7 7" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};
