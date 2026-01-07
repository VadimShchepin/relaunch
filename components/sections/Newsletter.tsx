import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { Icon } from '@iconify/react';

export const Newsletter: React.FC = () => (
    <section id="newsletter" className="py-24 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto text-center">
        <FadeIn>
            <div className="bg-[#1C1917] text-white rounded-[40px] p-12 md:p-24 relative overflow-hidden">
                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">Noch nicht bereit? Kein Problem.</h2>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
                        1–2× pro Monat ein kurzer, konkreter Tipp zur KI-Sichtbarkeit in Deutschland/Hamburg. Kein Spam, keine Agentur-Mails.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
                        {[
                            "Beispiele realer Prompts (DE) + was passiert",
                            "Branchen-Insights (wo KI am stärksten ist)",
                            "Taktiken, die ich selbst teste"
                        ].map((item, i) => (
                            <div key={i} className="flex gap-3 bg-white/5 p-4 rounded-xl">
                                <Icon icon="meteor-icons:check" className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                <span className="text-sm text-gray-300 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Deine E-Mail Adresse"
                            className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:bg-white/15 transition-all"
                        />
                        <Button text="Eintragen" primary={true} className="whitespace-nowrap justify-center" />
                    </form>
                </div>
            </div>
        </FadeIn>
    </section>
);

