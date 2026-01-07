import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { IMAGES } from '@/lib/constants';

export const Hero: React.FC = () => (
    <section className="relative pt-44 pb-20 px-4 md:px-8 lg:px-12 max-w-[1920px] mx-auto overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
            {/* Top Text Content */}
            <div className="max-w-5xl mb-32">
                <FadeIn>
                    <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.95] font-semibold tracking-tight text-black mb-10">
                        Dein Business. <br />
                        Von ChatGPT <br />
                        empfohlen.
                    </h1>
                    <p className="text-xl md:text-2xl font-normal text-gray-600 leading-relaxed max-w-2xl mb-12">
                        Ich mache Unternehmen in ChatGPT & anderen KI-Systemen sichtbar.
                        Kein Marketing-Bla-Bla, sondern messbare Ergebnisse.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 items-start">
                        <Button
                            text="AI-Sichtbarkeit prüfen"
                            primary={true}
                            onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
                        />
                        <div className="flex items-center gap-4 py-3">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#F7F5F2] bg-gray-200 overflow-hidden">
                                        <img src={`https://randomuser.me/api/portraits/men/${i * 12}.jpg`} className="w-full h-full object-cover grayscale opacity-80" />
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm font-medium text-gray-500">20+ Audits diesen Monat</span>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Hero Cards - Angled Row */}
            <div className="flex flex-col md:flex-row gap-6 lg:gap-8 w-full relative">
                {/* Card 1: Blue Stats - Angled Left */}
                <div className="flex-1 min-h-[420px] bg-[#2563EB] rounded-[32px] p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden group hover:z-20 transition-transform duration-500 transform -rotate-2 hover:rotate-0 origin-bottom-right hover:scale-105 shadow-xl">
                    <FadeIn delay={100} className="h-full flex flex-col justify-between relative z-10">
                        <div>
                            <span className="font-bold text-sm tracking-widest opacity-70 uppercase">Organische Views</span>
                        </div>
                        <div>
                            <span className="text-[4rem] lg:text-[5rem] leading-none font-semibold tracking-tighter block mb-2">+400%</span>
                            <p className="text-xl font-medium leading-tight opacity-90">Durch KI-Optimierung.</p>
                        </div>
                    </FadeIn>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[60px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
                </div>

                {/* Card 2: Image - Motion Blur - Angled Right */}
                <div className="flex-1 min-h-[420px] bg-gray-100 rounded-[32px] overflow-hidden relative group hover:z-20 transition-transform duration-500 transform rotate-1 translate-y-8 hover:translate-y-0 hover:rotate-0 origin-bottom-left hover:scale-105 shadow-xl">
                    <FadeIn delay={200} className="h-full w-full">
                        <img
                            src={IMAGES.hero_motion}
                            alt="Motion"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </FadeIn>
                </div>

                {/* Card 3: Green Stats - Angled Left */}
                <div className="flex-1 min-h-[420px] bg-[#10B981] rounded-[32px] p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden group hover:z-20 transition-transform duration-500 transform -rotate-1 translate-y-4 hover:translate-y-0 hover:rotate-0 origin-top-right hover:scale-105 shadow-xl">
                    <FadeIn delay={300} className="h-full flex flex-col justify-between relative z-10">
                        <div>
                            <span className="font-bold text-sm tracking-widest opacity-70 uppercase">Merken Geholfen</span>
                        </div>
                        <div>
                            <span className="text-[4rem] lg:text-[5rem] leading-none font-semibold tracking-tighter block mb-2">30+</span>
                            <p className="text-xl font-medium leading-tight opacity-90">Von Startup bis Corp.</p>
                        </div>
                    </FadeIn>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300/20 blur-[60px] rounded-full pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>
                </div>

                {/* Card 4: Image - Person - Angled Right */}
                <div className="flex-1 min-h-[420px] bg-gray-100 rounded-[32px] overflow-hidden relative group hover:z-20 transition-transform duration-500 transform rotate-3 hover:rotate-0 origin-top-left hover:scale-105 shadow-xl">
                    <FadeIn delay={400} className="h-full w-full">
                        <img
                            src={IMAGES.hero_car}
                            alt="Result"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg">
                            <span className="text-black font-bold uppercase tracking-wide text-xs">Original is een</span>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    </section>
);
