import React, { useEffect, useRef } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { IMAGES } from '@/lib/constants';

export const Hero: React.FC = () => {
    const video1Ref = useRef<HTMLVideoElement>(null);
    const video2Ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const playVideo = (video: HTMLVideoElement | null) => {
            if (video) {
                video.muted = true;
                video.play().catch(err => console.error("Video play failed", err));
            }
        };

        playVideo(video1Ref.current);
        playVideo(video2Ref.current);
    }, []);

    return (
        <section className="relative pt-44 pb-20 px-4 md:px-8 lg:px-12 max-w-[1920px] mx-auto overflow-hidden">
            <div className="max-w-[1600px] mx-auto">
                {/* Top Text Content */}
                <div className="max-w-5xl mb-32">
                    <FadeIn>
                        <div className="inline-block px-4 py-1.5 mb-8 border border-gray-200 bg-white/50 backdrop-blur-sm rounded-full shadow-sm">
                            <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">Für KMU mit klarem Angebot (Dienstleistung/B2B)</span>
                        </div>
                        <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.95] font-semibold tracking-tight text-black mb-10">
                            Wenn Kunden ChatGPT fragen, zählt eine Sache: <br />
                            wirst du genannt?
                        </h1>
                        <p className="text-xl md:text-2xl font-normal text-gray-600 leading-relaxed max-w-3xl mb-12">
                            Ich helfe Hamburger Unternehmen dabei, in ChatGPT, Perplexity und Google AI (AI Overviews) sichtbar zu werden – und messe, ob daraus echte Anfragen entstehen.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 items-center">
                            <Button
                                text="AI-Sichtbarkeits-Check anfordern"
                                primary={true}
                                onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
                            />
                            <a href="#newsletter" className="text-sm font-semibold text-black hover:text-brand-accent transition-colors flex items-center gap-2">
                                KI-Sichtbarkeits-Newsletter <span className="text-xl">→</span>
                            </a>
                        </div>
                        <p className="mt-6 text-sm text-gray-400 font-medium">Kein Verkaufsgespräch. Eine klare Einschätzung – auch wenn sie „Nein“ lautet.</p>
                    </FadeIn>
                </div>

                {/* Hero Cards - Angled Row */}
                <div className="flex flex-col md:flex-row gap-6 lg:gap-8 w-full relative">
                    {/* Card 1: Blue Stats - Angled Left */}
                    <div className="flex-1 min-h-[420px] bg-[#2563EB] rounded-[32px] p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden group hover:z-20 transition-transform duration-500 transform -rotate-2 hover:rotate-0 origin-bottom-right hover:scale-105 shadow-xl">
                        <FadeIn delay={100} className="h-full flex flex-col justify-between relative z-10">
                            <div>
                                <span className="font-bold text-sm tracking-widest opacity-70 uppercase">Eigene Projekte</span>
                            </div>
                            <div>
                                <span className="text-[3.5rem] lg:text-[4.5rem] leading-none font-semibold tracking-tighter block mb-4">Rankings</span>
                                <p className="text-xl font-medium leading-tight opacity-90">Erscheinen in KI-Antworten.</p>
                            </div>
                        </FadeIn>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[60px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
                    </div>

                    {/* Card 2: Video - ChatGPT - Angled Right */}
                    <div className="flex-1 min-h-[420px] bg-black rounded-[32px] overflow-hidden relative group hover:z-20 transition-transform duration-500 transform rotate-1 translate-y-8 hover:translate-y-0 hover:rotate-0 origin-bottom-left hover:scale-105 shadow-xl">
                        <FadeIn delay={200} className="h-full w-full flex items-center justify-center">
                            <video
                                ref={video1Ref}
                                src="/video/chatgpt.mov"
                                key="chatgpt"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                        </FadeIn>
                    </div>

                    {/* Card 3: Green Stats - Angled Left */}
                    <div className="flex-1 min-h-[420px] bg-[#10B981] rounded-[32px] p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden group hover:z-20 transition-transform duration-500 transform -rotate-1 translate-y-4 hover:translate-y-0 hover:rotate-0 origin-top-right hover:scale-105 shadow-xl">
                        <FadeIn delay={300} className="h-full flex flex-col justify-between relative z-10">
                            <div>
                                <span className="font-bold text-sm tracking-widest opacity-70 uppercase">Dokumentiert</span>
                            </div>
                            <div>
                                <span className="text-[3.5rem] lg:text-[4.5rem] leading-none font-semibold tracking-tighter block mb-4">Proof</span>
                                <p className="text-xl font-medium leading-tight opacity-90">Screenshots mit Datum.</p>
                            </div>
                        </FadeIn>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300/20 blur-[60px] rounded-full pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>
                    </div>

                    {/* Card 4: Video - Gemini - Angled Right */}
                    <div className="flex-1 min-h-[420px] bg-black rounded-[32px] overflow-hidden relative group hover:z-20 transition-transform duration-500 transform rotate-3 hover:rotate-0 origin-top-left hover:scale-105 shadow-xl">
                        <FadeIn delay={400} className="h-full w-full flex items-center justify-center">
                            <video
                                ref={video2Ref}
                                src="/video/gemini.mov"
                                key="gemini"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg pointer-events-none">
                                <span className="text-black font-bold uppercase tracking-wide text-xs">Original is een</span>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};


