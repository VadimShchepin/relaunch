import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Tag } from '@/components/ui/Tag';

const MECHANISMS = [
    {
        icon: "✨",
        title: "Verständlichkeit",
        desc: "KI bewertet Kontext und Logik, keine Keywords. Wir optimieren semantische Zusammenhänge.",
        bg: "bg-gray-900",
        text: "text-white",
        subtext: "text-gray-400"
    },
    {
        icon: "🏗️",
        title: "Struktur",
        desc: "Websites müssen für LLMs maschinenlesbar sein. Wir liefern strukturierte Daten.",
        bg: "bg-[#F5F5F4]",
        text: "text-black",
        subtext: "text-gray-600"
    },
    {
        icon: "🏛️",
        title: "Autorität",
        desc: "Informationen müssen zitierfähig sein. Wir sorgen für digitale Reputation.",
        bg: "bg-[#FDF2F8]",
        text: "text-black",
        subtext: "text-gray-600"
    }
];

export const Mechanism: React.FC = () => (
    <section id="mechanism" className="py-24 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto my-12">
        <div className="bg-white rounded-[48px] p-8 md:p-20 shadow-sm border border-gray-100/50">
            <div className="max-w-4xl mb-20">
                <FadeIn>
                    <Tag text="Die Mechanik" />
                    <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight">
                        Was beeinflusst, ob ChatGPT dein Unternehmen nennt?
                    </h2>
                </FadeIn>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {MECHANISMS.map((item, i) => (
                    <FadeIn key={i} delay={i * 100} className="h-full">
                        <div className={`${item.bg} ${item.text} p-10 rounded-[32px] h-full flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300 min-h-[400px] shadow-sm hover:shadow-xl`}>
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-10 text-3xl backdrop-blur-sm shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-3xl font-semibold mb-6 tracking-tight">{item.title}</h3>
                                <p className={`${item.subtext} text-lg leading-relaxed font-medium`}>{item.desc}</p>
                            </div>
                            <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                                <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    </section>
);
