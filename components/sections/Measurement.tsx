import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Tag } from '@/components/ui/Tag';

export const Measurement: React.FC = () => (
    <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <div className="bg-gray-50 rounded-[48px] p-8 md:p-20 border border-gray-100/50">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <FadeIn>
                        <Tag text="Messbarkeit" />
                        <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight">
                            Wie wir KI-Anfragen messbar machen
                        </h2>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed mb-8">
                            Perfektes Tracking gibt es nicht – aber klare Signale. So siehst du nicht nur „Sichtbarkeit“, sondern ob daraus echte Gespräche entstehen.
                        </p>
                    </FadeIn>
                </div>

                <div>
                    <FadeIn delay={200}>
                        <div className="space-y-6">
                            {[
                                {
                                    id: "01",
                                    title: "Landingpage- / UTM-Tracking",
                                    desc: "Wir messen Traffic-Quellen, wo es technisch möglich ist."
                                },
                                {
                                    id: "02",
                                    title: "Qualitative Abfrage",
                                    desc: "Ein einfaches Feld im Formular: „Wie hast du uns gefunden?“ liefert oft die besten Daten."
                                },
                                {
                                    id: "03",
                                    title: "Prompt- & SERP-Monitoring",
                                    desc: "Wir überwachen regelmäßig, wie sich Antworten auf deine Keywords verändern."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 flex gap-6 items-start">
                                    <span className="text-2xl font-bold text-gray-200">{item.id}</span>
                                    <div>
                                        <h4 className="text-lg font-bold text-black mb-1">{item.title}</h4>
                                        <p className="text-gray-600 font-medium">{item.desc}</p>
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
