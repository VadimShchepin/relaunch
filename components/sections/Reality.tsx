import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export const Reality: React.FC = () => (
    <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto bg-white">
        <div className="max-w-[1400px] mx-auto">

            {/* Top Section: Headline First on Mobile, Text Left + Headline Right on Desktop */}
            <div className="flex mt-5 flex-col lg:flex-row lg:items-start gap-12 lg:gap-20 mb-16">

                {/* Headline - First on Mobile, Right on Desktop */}
                <div className="w-full lg:w-[62%] lg:flex lg:justify-end order-1 lg:order-2">
                    <FadeIn delay={100}>
                        <h2 className="text-[2.8rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] font-semibold leading-[1.0] tracking-[-0.03em] text-black text-left lg:text-right">
                            KI verändert,<br />
                            wie Kunden<br />
                            entscheiden
                        </h2>
                    </FadeIn>
                </div>

                {/* Text Block - Second on Mobile, Left on Desktop */}
                <div className="w-full lg:w-[38%] lg:max-w-[380px] order-2 lg:order-1">
                    <FadeIn>
                        <p className="text-base text-gray-700 leading-[1.7] mb-4">
                            KI-Systeme zeigen keine Suchlisten.
                            Sie wählen wenige Quellen – oft 5–10 – und nennen diese als Empfehlung.
                        </p>

                        <p className="text-base text-gray-700 leading-[1.7] mb-4">
                            Alles andere wird nicht geprüft,
                            nicht verglichen,
                            nicht gesehen.
                        </p>

                        <p className="text-base text-gray-700 leading-[1.7]">
                            Wenn dein Unternehmen nicht zu diesen Quellen gehört,
                            findet die Entscheidung ohne dich statt.
                        </p>

                        <p className="text-lg font-semibold text-black mt-6 leading-tight">
                            KI vergleicht nicht. Sie entscheidet.
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* Bottom Gallery - Staggered Layout, aligned right */}
            <div className="flex flex-col md:flex-row items-end justify-end gap-4 lg:gap-5">

                {/* Image 1 - Smallest */}
                <FadeIn delay={200} className="w-full md:w-[30%]">
                    <div className="h-[150px] md:h-[190px] lg:h-[200px] rounded-xl overflow-hidden">
                        <img
                            src="/images/reality/Impressions after ai.webp"
                            alt="Website-Impressionen nach KI-Optimierung – Anstieg der Sichtbarkeit"
                            className="w-full h-full object-contain object-left-bottom"
                            width={400}
                            height={200}
                        />
                    </div>
                </FadeIn>

                {/* Image 2 - Medium - Hidden on Mobile */}
                <FadeIn delay={350} className="hidden md:block md:w-[14%]">
                    <div className="h-[190px] lg:h-[260px] rounded-xl overflow-hidden">
                        <img
                            src="/images/reality/growth.webp"
                            alt="Wachstum der KI-Sichtbarkeit – Analytics-Übersicht"
                            className="w-full h-full object-cover"
                            width={200}
                            height={260}
                        />
                    </div>
                </FadeIn>

                {/* Image 3 - Largest with Flag Icon */}
                <FadeIn delay={500} className="w-full md:w-[42%] relative">
                    {/* Blue Flag Decoration */}
                    <div className="absolute -top-3 left-4 z-10">
                        <div className="bg-[#3B82F6] text-white p-2 rounded-xl shadow-lg -rotate-6 hover:rotate-0 transition-transform duration-300">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                                <line x1="4" x2="4" y1="22" y2="15" />
                            </svg>
                        </div>
                    </div>
                    <div className="h-[260px] md:h-[320px] lg:h-[400px] rounded-2xl overflow-hidden">
                        <img
                            src="/images/reality/hamburg.webp"
                            alt="Hamburg – Standort für KI-Sichtbarkeit und AI SEO"
                            className="w-full h-full object-cover"
                            width={600}
                            height={400}
                        />
                    </div>
                </FadeIn>
            </div>

            {/* Bottom Line */}
            <div className="mt-16 h-px bg-gray-100 w-full" />
        </div>
    </section>
);
