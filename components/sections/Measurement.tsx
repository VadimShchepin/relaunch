import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Tag } from '@/components/ui/Tag';

export const Measurement: React.FC = () => (
    <section className="py-40 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto">
        <div className="bg-brand-bg rounded-section p-16 md:p-24 lg:p-28 border border-black/5">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
                <div>
                    <FadeIn>
                        <Tag text="Messbarkeit" />
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-black mb-10 tracking-[-0.04em] leading-[1.0]">
                            Klarheit statt <br />
                            <span className="text-gray-300">Voodoo-SEO.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-500 font-medium leading-tight max-w-lg mb-12">
                            So siehst du nicht nur „Sichtbarkeit“, sondern ob daraus echte Gespräche entstehen.
                        </p>
                    </FadeIn>
                </div>

                <div>
                    <FadeIn delay={200}>
                        <div className="space-y-6">
                            {[
                                {
                                    id: "01",
                                    title: "Qualitative Abfrage",
                                    desc: "Das Feld „Wie hast du uns gefunden?“ liefert oft die ehrlichsten Daten über KI-Anfragen."
                                },
                                {
                                    id: "02",
                                    title: "Prompt-Monitoring",
                                    desc: "Wir überwachen regelmäßig, ob du in Antworten für deine Keywords vorkommst."
                                },
                                {
                                    id: "03",
                                    title: "UTM-Tracking",
                                    desc: "Wir messen Traffic-Quellen dort, wo technische Signale noch möglich sind."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-card border border-gray-100 flex gap-6 items-start hover:shadow-lg transition-all group">
                                    <span className="text-3xl font-semibold text-gray-100 group-hover:text-brand-accent transition-colors">{item.id}</span>
                                    <div>
                                        <h4 className="text-xl font-semibold text-black mb-2 tracking-tight">{item.title}</h4>
                                        <p className="text-gray-500 text-base font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    </section>
);


