import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { Icon } from '@iconify/react';



export const Offer: React.FC = () => (
    <section id="audit" className="py-40 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto">
        <FadeIn>
            <div className="bg-[#121212] text-white rounded-section p-16 md:p-24 lg:p-28 relative overflow-hidden">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-start">
                    <div>
                        <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[10px] mb-8 block">Kostenlos</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-10 tracking-[-0.04em] leading-[1.0]">
                            Dein Einstieg: <br />
                            <span className="text-gray-500">Der Check.</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 leading-tight max-w-lg font-medium">
                            Bevor wir über Umsetzung reden, schauen wir uns an, <strong className="text-white">wo du stehst</strong>.
                        </p>

                        <ul className="space-y-5 mb-12">
                            {[
                                "KI-Status: Was sagen ChatGPT/Perplexity aktuell?",
                                "Konkurrenz-Check: Wer wird stattdessen genannt?",
                                "Potenzial: Lohnt sich KI-Sichtbarkeit für dich?",
                                "3 Prioritäten: Die wichtigsten Hebel"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-center text-lg text-gray-300 font-medium">
                                    <Icon icon="meteor-icons:check" className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="text-sm text-gray-500 font-medium space-y-2 mb-16">
                            <span className="block italic">Format: 5–10 Min. Loom-Video oder 1 Seite Summary.</span>
                            <span className="block italic">Innerhalb von 48h. Keine Verpflichtung.</span>
                        </div>

                        {/* Process Steps - Inline */}

                    </div>

                    <div className="bg-white p-12 md:p-16 rounded-card shadow-2xl text-center flex flex-col items-center sticky top-32">
                        <h3 className="text-2xl font-semibold mb-4 text-black tracking-tight">Jetzt anfragen</h3>
                        <p className="text-gray-500 text-base mb-10 font-medium">Finde heraus, ob du in KI-Antworten stattfindest.</p>
                        <Button text="Check anfordern" primary={true} className="w-full justify-center py-5 text-lg" />
                        <p className="mt-8 text-[10px] text-gray-400 font-semibold tracking-wide uppercase">100% kostenlos & unverbindlich.</p>
                    </div>
                </div>
            </div>
        </FadeIn>
    </section>
);
