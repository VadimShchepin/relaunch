import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { Icon } from '@iconify/react';

export const Newsletter: React.FC = () => (
    <section id="newsletter" className="py-40 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto text-center">
        <FadeIn>
            <div className="bg-[#121212] text-white rounded-[72px] p-20 md:p-32 relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <span className="text-brand-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-8 block">Immer up-to-date</span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-10 tracking-[-0.04em] leading-[0.9]">
                        Noch nicht bereit? <br />
                        <span className="text-gray-500">Kein Problem.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 mb-16 leading-relaxed font-medium max-w-2xl mx-auto">
                        1–2× pro Monat konkrete Tipps zur KI-Sichtbarkeit. <br />
                        Kein Spam, nur Insights.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center mb-20 flex-wrap">
                        {[
                            "Reale Prompts + Resultate",
                            "Branchen-Insights",
                            "Eigene KI-Tests"
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-center px-6 py-3 bg-white/5 rounded-2xl">
                                <Icon icon="meteor-icons:check" className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                <span className="text-lg text-gray-300 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <form className="max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <div className="bg-white/5 p-2 rounded-[32px] flex flex-col md:flex-row gap-2 border border-white/5">
                            <input
                                type="email"
                                placeholder="Deine E-Mail Adresse"
                                className="flex-1 px-8 py-4 rounded-[24px] bg-transparent text-white placeholder-gray-500 focus:outline-none text-xl"
                            />
                            <Button text="Eintragen" primary={true} className="whitespace-nowrap inline-flex justify-center px-12 py-5" />
                        </div>
                    </form>
                </div>
            </div>
        </FadeIn>
    </section>
);


