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
    <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto bg-black text-white rounded-[40px] my-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
                <span className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4 block">Für Wen</span>
                <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
                    Für wen KI-Sichtbarkeit besonders gut funktioniert
                </h2>
                <p className="text-xl text-gray-400 font-medium">
                    In diesen Bereichen sind die Fragen komplexer – eine kuratierte Antwort hilft mehr als zehn Links.
                </p>
            </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TARGETS.map((item, i) => (
                <FadeIn key={i} delay={i * 100} className="h-full">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] h-full hover:bg-white/10 transition-colors">
                        <div className="mb-6">
                            <Icon icon={item.icon} className="w-10 h-10 text-brand-accent" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                    </div>
                </FadeIn>
            ))}
        </div>
    </section>
);

