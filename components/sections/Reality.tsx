import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Tag } from '@/components/ui/Tag';
import { IMAGES } from '@/lib/constants';

export const Reality: React.FC = () => (
    <section className="py-40 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto bg-white rounded-section my-20 shadow-sm border border-gray-50">
        <div className="max-w-7xl mx-auto">
            <FadeIn>
                <div className="flex flex-col lg:flex-row gap-20 items-end mb-24">
                    <div className="lg:w-1/2">
                        <Tag text="Realität" />
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-[1.0] text-black tracking-[-0.05em] mb-12">
                            Das Internet <br />
                            <span className="text-gray-300">schaltet um.</span>
                        </h2>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-xl md:text-2xl font-medium text-gray-500 leading-tight">
                            KI-Antworten werden zum neuen Einstieg in Entscheidungen. Statt zehn Links lesen viele Nutzer eine direkte Empfehlung.
                        </p>
                    </div>
                </div>
            </FadeIn>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4 space-y-12">
                    <FadeIn delay={200}>
                        <div className="bg-brand-bg p-12 rounded-card">
                            <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                Nutzer fragen direkt: „Bester Steuerberater für Freelancer in Hamburg?“. Die KI liefert eine kurze Liste. Viele entscheiden direkt hier.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={300}>
                        <div className="p-8">
                            <strong className="text-xl text-black font-semibold leading-tight">
                                Es geht nicht darum, ob KI-Suche kommt. <br />
                                Sie ist bereits da.
                            </strong>
                        </div>
                    </FadeIn>
                </div>
                <div className="lg:col-span-8">
                    <FadeIn delay={400}>
                        <div className="rounded-[24px] overflow-hidden aspect-[16/10] relative shadow-2xl group">
                            <img
                                src={IMAGES.problem}
                                alt="Shift to AI"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    </section>
);

