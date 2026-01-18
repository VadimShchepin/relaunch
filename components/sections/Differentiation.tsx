import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export const Differentiation: React.FC = () => {
    return (
        <section className="min-h-screen lg:h-screen flex items-center px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto bg-[#FBF9F7] rounded-section my-20">
            <div className="max-w-[1600px] mx-auto w-full py-20 lg:py-0">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    {/* Headline (Right on Desktop, Top on Mobile) */}
                    <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1 order-1 lg:order-2">
                        <FadeIn>
                            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-brand-text mb-6 lg:mb-8">
                                Für Profis.
                            </h2>
                            <p className="text-5xl md:text-7xl lg:text-8xl font-bold text-brand-accent tracking-tight leading-[0.9] mb-12 lg:mb-16">
                                Nicht für alle.
                            </p>
                            <div>
                                <a
                                    href="#audit"
                                    className="inline-flex items-center text-lg font-bold tracking-tight text-brand-text hover:text-brand-accent transition-colors group"
                                >
                                    AI-Check anfordern
                                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
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
                            <div className="space-y-6">
                                <p className="text-lg md:text-xl font-semibold text-black leading-tight">du <span className="underline decoration-2 decoration-brand-accent underline-offset-4">Kontrolle abgibst</span>, statt sie zu übernehmen.</p>
                                <p className="text-lg md:text-xl font-semibold text-black leading-tight">es dir <span className="underline decoration-2 decoration-brand-accent underline-offset-4">egal ist</span>, wie KI dein Unternehmen beschreibt.</p>
                                <p className="text-lg md:text-xl font-semibold text-black leading-tight">du Sichtbarkeit <span className="underline decoration-2 decoration-brand-accent underline-offset-4">dem Zufall überlässt</span>.</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};
