import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Tag } from '@/components/ui/Tag';

export const Reality: React.FC = () => (
    <section className="py-16 px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
        <div className="max-w-[1400px] mx-auto">
            {/* Top Section: Text Left + Headline Right */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">

                {/* Left Column - Narrow Text Block */}
                <div className="w-full lg:w-[35%] lg:max-w-[340px]">
                    <FadeIn>


                        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-5">
                            KI-Antworten werden zum neuen Einstieg in Entscheidungen. Statt zehn Links lesen viele Nutzer eine direkte Empfehlung – besonders bei lokalen Fragen und erklärungsbedürftigen Angeboten.
                        </p>

                        <ul className="space-y-2 mb-6">
                            <li className="flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-brand-accent mt-2 shrink-0" />
                                <span className="text-xs text-gray-500">Nutzer fragen: „Bester Steuerberater für Freelancer in Hamburg?"</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-brand-accent mt-2 shrink-0" />
                                <span className="text-xs text-gray-500">KI gibt eine kurze Liste mit konkreten Vorschlägen</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-brand-accent mt-2 shrink-0" />
                                <span className="text-xs text-gray-500">Viele Nutzer entscheiden direkt aus dieser Antwort heraus</span>
                            </li>
                        </ul>

                        <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-xs font-semibold text-black mb-1">Kernfrage:</p>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Es geht nicht darum, ob KI-Suche kommt. Sie ist bereits da.<br />
                                <strong className="text-black">Kann die KI dein Angebot eindeutig verstehen – und dich nennen?</strong>
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* Right Column - Headline */}
                <div className="w-full lg:w-[65%] lg:flex lg:justify-end">
                    <FadeIn delay={100}>
                        <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-semibold leading-[0.9] tracking-[-0.04em] text-black text-left lg:text-right">
                            Was sich<br />
                            gerade<br />
                            verändert
                        </h2>
                    </FadeIn>
                </div>
            </div>

            {/* Bottom Gallery - Staggered Layout, aligned right */}
            <div className="flex flex-col md:flex-row items-end justify-end gap-3 lg:gap-4 mt-12 lg:mt-8">

                {/* Image 1 - Smallest */}
                <FadeIn delay={200} className="w-full md:w-[14%]">
                    <div className="h-[100px] md:h-[110px] lg:h-[130px] rounded-xl overflow-hidden shadow-md">
                        <img
                            src="/images/reality/growth.png"
                            alt="Growth Analytics"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </FadeIn>

                {/* Image 2 - Medium */}
                <FadeIn delay={350} className="w-full md:w-[22%]">
                    <div className="h-[140px] md:h-[170px] lg:h-[200px] rounded-xl overflow-hidden shadow-lg">
                        <img
                            src="/images/reality/search.png"
                            alt="AI Search Interface"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </FadeIn>

                {/* Image 3 - Largest with Flag Icon */}
                <FadeIn delay={500} className="w-full md:w-[38%] relative">
                    {/* Blue Flag Decoration */}
                    <div className="absolute -top-2 left-3 z-10">
                        <div className="bg-[#3B82F6] text-white p-1.5 rounded-lg shadow-md -rotate-6 hover:rotate-0 transition-transform duration-300">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                                <line x1="4" x2="4" y1="22" y2="15" />
                            </svg>
                        </div>
                    </div>
                    <div className="h-[210px] md:h-[250px] lg:h-[300px] rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="/images/reality/hamburg.png"
                            alt="Hamburg Business Meeting"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </FadeIn>
            </div>

            {/* Bottom Line */}
            <div className="mt-12 h-px bg-gray-100 w-full" />
        </div>
    </section>
);
