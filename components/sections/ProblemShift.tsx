import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Tag } from '@/components/ui/Tag';
import { IMAGES } from '@/lib/constants';

export const ProblemShift: React.FC = () => (
    <section className="py-32 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
                <FadeIn>
                    <Tag text="Reality Check" />
                    <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] mb-12 text-black tracking-tight">
                        Kaufentscheidungen starten immer öfter in KI-Systemen.
                        <span className="text-gray-400 block mt-2 font-normal">Reicht Google SEO nicht mehr? Nein.</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed text-gray-700 font-medium">
                        <p>
                            Während klassische Suche Listen liefert, liefern LLMs Antworten.
                            Wer dort nicht auftaucht, wird nicht empfohlen.
                        </p>
                        <p>
                            Die Sichtbarkeit verlagert sich von 10 blauen Links zu einer einzigen, synthetisierten Wahrheit.
                            <strong className="block mt-4 text-black font-bold">Entweder man ist die Antwort, oder man existiert nicht.</strong>
                        </p>
                    </div>
                </FadeIn>
            </div>
            <div className="lg:col-span-5 relative">
                <FadeIn delay={200}>
                    <div className="rounded-[32px] overflow-hidden shadow-2xl aspect-square relative group bg-white border border-gray-100 p-3 rotate-2 hover:rotate-0 transition-all duration-500">
                        <div className="w-full h-full rounded-[24px] overflow-hidden relative">
                            <img
                                src={IMAGES.problem}
                                alt="Shift to AI"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
);
