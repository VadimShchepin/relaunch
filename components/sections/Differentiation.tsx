import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Icon } from '@iconify/react';
import { IMAGES } from '@/lib/constants';

const TARGETS = [
    {
        title: "Spezialisierte Dienstleister",
        desc: "Steuerberater, Fachanwälte, Berater",
        icon: "meteor-icons:scales"
    },
    {
        title: "Lokale Anbieter",
        desc: "Handwerker, Praxen, Agenturen mit klarem Fokus",
        icon: "meteor-icons:pin"
    },
    {
        title: "B2B Unternehmen",
        desc: "Tech, SaaS, Consulting",
        icon: "meteor-icons:rocket"
    },
    {
        title: "Vertrauens-Branchen",
        desc: "Finanzen, Gesundheit, Recht",
        icon: "meteor-icons:users"
    }
];

export const Differentiation: React.FC = () => (
    <section className="py-40 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto bg-[#121212] text-white rounded-section my-20">
        <div className="max-w-7xl mx-auto">
            {/* Target Group Section */}
            <div className="mb-32">
                <div className="max-w-4xl mb-16">
                    <FadeIn>
                        <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[10px] mb-6 block">Für wen</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-10 tracking-[-0.04em] leading-[1.0]">
                            Komplexität braucht <br />
                            <span className="text-gray-500">Kuration.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl leading-relaxed">
                            In diesen Bereichen sind die Fragen komplexer – eine kuratierte KI-Antwort hilft mehr als zehn Links.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {TARGETS.map((item, i) => (
                        <FadeIn key={i} delay={i * 100} className="h-full">
                            <div className="bg-white/5 border border-white/5 p-10 rounded-card h-full hover:bg-white/[0.08] transition-all duration-500 group">
                                <div className="mb-8 transform group-hover:-translate-y-1 transition-transform duration-500">
                                    <Icon icon={item.icon} className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 text-base leading-snug font-medium">{item.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* Differentiation Section */}
            <div className="grid lg:grid-cols-12 gap-16 items-start pt-16 border-t border-white/10">
                <div className="lg:col-span-6">
                    <FadeIn>
                        <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[10px] mb-6 block">Differenzierung</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.0] tracking-[-0.05em] mb-16">
                            Agentur-Masse <br />
                            <span className="text-gray-500">vs. Echtheit.</span>
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    agency: "Typische Agentur: nutzt KI für Texte",
                                    me: "Ich optimiere dafür, von KI verstanden zu werden"
                                },
                                {
                                    agency: "Typische Agentur: verkauft Rankings",
                                    me: "Ich arbeite auf Nennungen + messbare Anfragen hin"
                                },
                                {
                                    agency: "Typische Agentur: Templates für viele Kunden",
                                    me: "Ich fokussiere auf wenige Projekte pro Quartal"
                                }
                            ].map((item, i) => (
                                <FadeIn key={i} delay={i * 100}>
                                    <div className="bg-white/5 p-8 rounded-card border border-white/5 hover:bg-white/[0.08] transition-all">
                                        <p className="text-base text-gray-500 mb-3 line-through decoration-gray-600">{item.agency}</p>
                                        <p className="text-white text-lg font-semibold leading-tight">{item.me}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </FadeIn>
                </div>

                <div className="lg:col-span-6 sticky top-32">
                    <FadeIn delay={400}>
                        <div className="relative">
                            <div className="rounded-[24px] overflow-hidden aspect-[4/5] shadow-2xl relative group bg-white/5 p-3">
                                <div className="w-full h-full rounded-[16px] overflow-hidden relative">
                                    <img src={IMAGES.hero_person} alt="Vadim Shchepin" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>
                                <div className="absolute bottom-10 left-10 right-10 text-white">
                                    <p className="font-semibold text-2xl mb-2 tracking-tight">Echte Ergebnisse.</p>
                                    <p className="text-white/80 text-base font-medium leading-tight">Viele schreiben „KI". Wenige können zeigen, dass sie in KI-Antworten auftauchen.</p>
                                </div>
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-accent rounded-[24px] -z-10 rotate-12 opacity-20"></div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    </section>
);
