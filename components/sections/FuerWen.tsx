'use client';

import React from 'react';
import Link from 'next/link';

export const FuerWen: React.FC = () => {
    return (
        <section className="relative w-full bg-[#F8F7F4] py-32 md:py-40">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                {/* Two-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

                    {/* Left column - Text content */}
                    <div className="flex flex-col justify-end order-2 md:order-1">

                        {/* Paragraph */}
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12 max-w-md">
                            KI-Systeme fassen zusammen, ordnen ein und empfehlen – längst auch dein Unternehmen.
                            Nicht hinzuschauen heißt, anderen die Kontrolle zu überlassen.
                        </p>

                        {/* Hairline divider */}
                        <div className="w-full h-px bg-gray-200 mb-10" />

                        {/* Disqualifiers */}
                        <div className="space-y-4 mb-16">
                            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                                Du willst nicht wissen, ob KI falsche Dinge über dich behauptet.
                            </p>
                            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                                Du findest es okay, wenn Kunden nur die KI-Antwort sehen – ohne deine Website.
                            </p>
                            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                                Du glaubst, dass SEO 2026 noch allein reicht.
                            </p>
                        </div>

                        {/* CTA - subtle text link */}
                        <Link
                            href="#contact"
                            className="text-sm text-gray-400 hover:text-gray-600 transition-colors duration-200 tracking-wide"
                        >
                            AI-Check anfordern →
                        </Link>

                    </div>

                    {/* Right column - Oversized headline */}
                    <div className="flex items-start order-1 md:order-2">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-text leading-[0.95] tracking-tight">
                            Nicht für<br />jeden.
                        </h2>
                    </div>

                </div>

            </div>
        </section>
    );
};
