import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { BeforeAfterVisual } from '@/components/ui/DemoVisuals';

export const BeforeAfter: React.FC = () => (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 max-w-[1100px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
                <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-accent font-semibold mb-4">
                        Der Unterschied
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
                        KI nennt Quellen, keine Linklisten.
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                        Eine KI-Antwort enthält zwei bis sieben Namen, nicht zehn blaue Links. Wer dort fehlt, wird nicht verglichen, sondern übergangen.
                    </p>
                    <p className="text-lg text-gray-700 font-semibold leading-relaxed">
                        Meine Arbeit verschiebt dich von der unsichtbaren Alternative zur genannten Empfehlung.
                    </p>
                </div>
            </FadeIn>

            <FadeIn delay={150}>
                <div className="rounded-card border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                    <BeforeAfterVisual className="w-full" />
                </div>
            </FadeIn>
        </div>
    </section>
);
