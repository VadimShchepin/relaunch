import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

export const Reality: React.FC = () => (
    <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto bg-white">
        <div className="max-w-[1400px] mx-auto">

            {/* Top Section: Text Left + Headline Right */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20 mb-16">

                {/* Left Column - Simple Text Block */}
                <div className="w-full lg:w-[38%] lg:max-w-[380px]">
                    <FadeIn>
                        <p className="text-base text-gray-700 leading-[1.7] mb-6">
                            KI-Antworten ersetzen klassische Suchlisten. Statt zehn Links erhalten Nutzer heute eine direkte Empfehlung – besonders bei lokalen und erklärungsbedürftigen Angeboten.
                        </p>

                        <p className="text-base text-gray-700 leading-[1.7] mb-10">
                            Entscheidend ist nicht mehr, ob du gefunden wirst, sondern ob KI dein Angebot eindeutig versteht und nennt.
                        </p>

                        <Button
                            text="Mehr erfahren"
                            className="!bg-black !text-white !border-black hover:!bg-gray-900 !rounded-xl !px-6 !py-3 !text-sm"
                        />
                    </FadeIn>
                </div>

                {/* Right Column - Headline */}
                <div className="w-full lg:w-[62%] lg:flex lg:justify-end">
                    <FadeIn delay={100}>
                        <h2 className="text-[2.8rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] font-semibold leading-[1.0] tracking-[-0.03em] text-black text-left lg:text-right">
                            KI verändert,<br />
                            wie Kunden<br />
                            entscheiden
                        </h2>
                    </FadeIn>
                </div>
            </div>

            {/* Bottom Gallery - Staggered Layout, aligned right */}
            <div className="flex flex-col md:flex-row items-end justify-end gap-4 lg:gap-5">

                {/* Image 1 - Smallest */}
                <FadeIn delay={200} className="w-full md:w-[18%]">
                    <div className="h-[120px] md:h-[140px] lg:h-[180px] rounded-xl overflow-hidden">
                        <img
                            src="/images/reality/growth.png"
                            alt="Growth Analytics"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </FadeIn>

                {/* Image 2 - Medium */}
                <FadeIn delay={350} className="w-full md:w-[26%]">
                    <div className="h-[180px] md:h-[220px] lg:h-[280px] rounded-xl overflow-hidden">
                        <img
                            src="/images/reality/search.png"
                            alt="AI Search Interface"
                            className="w-full h-full object-cover"
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
                            src="/images/reality/hamburg.png"
                            alt="Hamburg Business Meeting"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </FadeIn>
            </div>

            {/* Bottom Line */}
            <div className="mt-16 h-px bg-gray-100 w-full" />
        </div>
    </section>
);
