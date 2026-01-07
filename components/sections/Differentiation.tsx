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
                    <Tag text="Warum du?" />
                    <h2 className="text-4xl md:text-6xl font-semibold leading-[0.95] mb-12 text-black tracking-tight">
                        Websites für Menschen <br /><span className="text-gray-400 font-normal">und</span> KI gleichzeitig.
                    </h2>
                    <div className="space-y-12">
                        <div className="flex gap-8 items-start group">
                            <span className="text-6xl font-semibold text-gray-200 leading-none group-hover:text-brand-accent transition-colors">01</span>
                            <div>
                                <h4 className="text-2xl font-bold text-black mb-2">Kein Bullshit-Bingo.</h4>
                                <p className="text-gray-600 text-lg font-medium leading-relaxed">Wir optimieren auf Semantik, not auf Hacks. Das hält auch dem nächsten Update stand.</p>
                            </div>
                        </div>
                        <div className="flex gap-8 items-start group">
                            <span className="text-6xl font-semibold text-gray-200 leading-none group-hover:text-brand-accent transition-colors">02</span>
                            <div>
                                <h4 className="text-2xl font-bold text-black mb-2">Nachhaltig.</h4>
                                <p className="text-gray-600 text-lg font-medium leading-relaxed">Was für KI gut ist (Klarheit, Struktur), ist meistens auch für deine menschlichen Nutzer besser.</p>
                            </div>
                        </div>
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
                            <p className="font-bold text-xl text-black mb-1">Expertise zählt.</p>
                            <p className="text-base text-gray-600 font-medium">Kein Outsourcing. Du sprichst mit dem, der den Code schreibt.</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
);
