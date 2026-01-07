import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { Icon } from '@iconify/react';

export const Offer: React.FC = () => (
    <section id="audit" className="py-24 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <FadeIn>
            <div className="bg-black text-white rounded-[48px] p-12 md:p-24 relative overflow-hidden">
                {/* Background accent */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-black to-black z-0"></div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4 block">Kostenlos</span>
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
                            Dein Einstieg: <br />der AI-Sichtbarkeits-Check
                        </h2>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg font-medium">
                            Bevor wir über Umsetzung reden, schauen wir uns an, <strong className="text-white">wo du stehst</strong>.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "KI-Status: Was sagen ChatGPT/Perplexity aktuell über dich?",
                                "Konkurrenz-Check: Wer wird stattdessen genannt?",
                                "Potenzial: Lohnt sich KI-Sichtbarkeit für dich?",
                                "3 Prioritäten: Die wichtigsten Hebel"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-center text-lg text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-brand-accent">
                                        <Icon icon="meteor-icons:check" className="w-3.5 h-3.5" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="text-sm text-gray-500 font-medium">
                            <span className="block mb-1">Format: 5–10 Min. Loom-Video oder 1 Seite Summary.</span>
                            <span className="block">Innerhalb von 48h. Keine Verpflichtung.</span>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[32px] border border-white/10 w-full max-w-xl mx-auto hover:bg-white/15 transition-colors text-center">
                        <h3 className="text-2xl font-bold mb-4">Jetzt anfragen</h3>
                        <p className="text-gray-400 mb-8 font-medium">Finde heraus, ob du in KI-Antworten stattfindest.</p>
                        <Button text="AI-Sichtbarkeits-Check anfordern" primary={true} className="w-full justify-center text-lg py-5" />
                        <p className="mt-6 text-xs text-gray-500">100% kostenlos & unverbindlich.</p>
                    </div>
                </div>
            </div>
        </FadeIn>
    </section>
);


