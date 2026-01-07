import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

export const Offer: React.FC = () => (
    <section id="audit" className="py-24 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto text-center">
        <FadeIn>
            <div className="bg-black text-white rounded-[48px] p-12 md:p-32 relative overflow-hidden text-center flex flex-col items-center">
                {/* Background accent */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-black to-black z-0"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-semibold mb-10 tracking-tight">Bereit für die Zukunft der Suche?</h2>
                    <p className="text-xl md:text-3xl text-gray-400 mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
                        Finden wir heraus, ob dein Business in KI-Systemen sichtbar werden kann.
                    </p>

                    <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[32px] border border-white/10 w-full max-w-xl mx-auto hover:bg-white/15 transition-colors">
                        <h3 className="text-3xl font-bold mb-3">AI Visibility Audit</h3>
                        <p className="text-gray-300 mb-10 text-lg font-medium">Analyse Brand-Wahrnehmung in ChatGPT, Claude & Perplexity.</p>
                        <Button text="Kostenloses Audit anfragen" primary={true} className="w-full justify-center text-lg py-6" />
                    </div>
                </div>
            </div>
        </FadeIn>
    </section>
);
