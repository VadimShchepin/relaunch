import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Tag } from '@/components/ui/Tag';
import { IMAGES } from '@/lib/constants';

export const Differentiation: React.FC = () => (
    <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-7 order-2 lg:order-1">
                <FadeIn delay={200}>
                    <Tag text="Differenzierung" />
                    <h2 className="text-4xl md:text-6xl font-semibold leading-[0.95] mb-12 text-black tracking-tight">
                        Was mich von SEO-Agenturen unterscheidet
                    </h2>
                    <div className="space-y-12">
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
                                me: "Ich fokussiere auf wenige Projekte mit klarer Ausgangslage"
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-8 items-start group">
                                <span className="text-6xl font-semibold text-gray-200 leading-none group-hover:text-brand-accent transition-colors">0{i + 1}</span>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-400 mb-1 line-through decoration-gray-300 decoration-2">{item.agency}</h4>
                                    <p className="text-black text-2xl font-bold leading-relaxed">{item.me}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>

            {/* Right: Image/Persona */}
            <div className="lg:col-span-5 order-1 lg:order-2">
                <FadeIn>
                    <div className="relative rounded-[40px] overflow-hidden aspect-[3/4] rotate-2 hover:rotate-0 transition-all duration-500 shadow-2xl">
                        <img src={IMAGES.hero_person} alt="Expert" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-8 rounded-[30px]">
                            <p className="font-bold text-xl text-black mb-1">Echte Ergebnisse.</p>
                            <p className="text-base text-gray-600 font-medium">Viele schreiben „KI“. Wenige können zeigen, dass sie in KI-Antworten auftauchen.</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
);

