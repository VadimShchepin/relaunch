import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Tag } from '@/components/ui/Tag';
import { IMAGES } from '@/lib/constants';

export const Differentiation: React.FC = () => (
    <section className="py-40 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left: Content */}
            <div className="lg:col-span-6">
                <FadeIn>
                    <Tag text="Differenzierung" />
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-[1.0] text-black tracking-[-0.05em] mb-16">
                        Agentur-Masse <br />
                        <span className="text-gray-300">vs. Echtheit.</span>
                    </h2>
                    <div className="space-y-6">

                        {[
                            {
                                title: "Verständnis statt Texte",
                                agency: "Typische Agentur: nutzt KI für Texte",
                                me: "Ich optimiere dafür, von KI verstanden zu werden"
                            },
                            {
                                title: "Nennungen statt Rankings",
                                agency: "Typische Agentur: verkauft Rankings",
                                me: "Ich arbeite auf Nennungen + messbare Anfragen hin"
                            },
                            {
                                title: "Fokus statt Masse",
                                agency: "Typische Agentur: Templates für viele Kunden",
                                me: "Ich fokussiere auf wenige Projekte pro Quartal"
                            }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 100}>
                                <div className="bg-white p-10 rounded-card border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="text-base font-semibold text-gray-400 mb-4 line-through decoration-gray-300 decoration-1">{item.agency}</h4>
                                    <p className="text-black text-xl font-semibold leading-tight">{item.me}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </FadeIn>
            </div>

            {/* Right: Persona & Image Cluster */}
            <div className="lg:col-span-6 sticky top-32">
                <FadeIn delay={400}>
                    <div className="relative">
                        <div className="rounded-[24px] overflow-hidden aspect-[4/5] shadow-2xl relative group bg-white p-3">
                            <div className="w-full h-full rounded-[16px] overflow-hidden relative">
                                <img src={IMAGES.hero_person} alt="Vadim Shchepin" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            </div>
                            <div className="absolute bottom-10 left-10 right-10 text-white">
                                <p className="font-semibold text-2xl mb-2 tracking-tight">Echte Ergebnisse.</p>
                                <p className="text-white/80 text-base font-medium leading-tight">Viele schreiben „KI“. Wenige können zeigen, dass sie in KI-Antworten auftauchen.</p>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-accent rounded-[24px] -z-10 rotate-12 opacity-10"></div>
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
);





