'use client';

import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export const Newsletter: React.FC = () => {
    return (
        <section className="py-32 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto bg-brand-bg">
            <div className="max-w-4xl mx-auto text-center">
                <FadeIn>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
                        KI-Sichtbarkeit verstehen.
                    </h2>
                </FadeIn>

                <FadeIn delay={100}>
                    <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed mb-16">
                        Newsletter kommt bald. Updates zu KI-Auswahl und Website-Optimierung.
                    </p>
                </FadeIn>

                <FadeIn delay={200}>
                    <div className="bg-gray-100 rounded-full px-8 py-4 inline-block">
                        <span className="text-gray-600 font-medium">Coming Soon</span>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};