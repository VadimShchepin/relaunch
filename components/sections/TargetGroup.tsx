import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Icon } from '@iconify/react';

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
        desc: "Tech, SaaS, Consulting, erklärungsbedürftige Produkte",
        icon: "meteor-icons:rocket"
    },
    {
        title: "Vertrauens-Branchen",
        desc: "Finanzen, Gesundheit, Recht",
        icon: "meteor-icons:users"
    }
];


export const TargetGroup: React.FC = () => (
    <section className="py-40 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto bg-[#121212] text-white rounded-section my-20">
        <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mb-24">
                <FadeIn>
                    <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[10px] mb-6 block">Für wen</span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-10 tracking-[-0.04em] leading-[1.0]">
                        Komplexität braucht <br />
                        <span className="text-gray-500">Kuration.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl leading-relaxed">
                        In diesen Bereichen sind die Fragen komplexer – eine kuratierte KI-Antwort hilft dem Nutzer mehr als zehn veraltete Links.
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
    </section>
);



