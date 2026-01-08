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
        <section className="relative pt-44 pb-32 px-6 md:px-12 lg:px-20 max-w-[1920px] mx-auto overflow-hidden">
            <div className="max-w-[1600px] mx-auto">
                {/* Left Aligned Content */}
                <div className="max-w-5xl mb-32">
                    <FadeIn>
                        <h1 className="text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[1.0] font-semibold tracking-[-0.04em] text-black mb-12">
                            Wirst du genannt,<br />
                            wenn KI gefragt wird?
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-gray-800/80 leading-relaxed max-w-2xl">
                            Ich helfe Hamburger Unternehmen dabei, in ChatGPT, Perplexity und Google AI sichtbar zu werden – und messe, ob daraus echte Anfragen entstehen.
                        </p>
                    </FadeIn>
                </div>

                {/* Staggered Card Row - Matching Reference Style */}
                <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center -mx-4 lg:-mx-0">

                    {/* Card 1: Blue Stats */}
                    <div className="w-full lg:w-1/4 bg-[#017eff] p-10 rounded-card text-white aspect-[3/4] flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-all duration-500 shadow-xl relative z-10">
                        <FadeIn delay={100} className="h-full flex flex-col justify-between">
                            <span className="text-[4rem] font-semibold tracking-tighter leading-none block">90%</span>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 tracking-tight">KI-Sichtbarkeit</h3>
                                <p className="text-base opacity-80 leading-tight">ist die neue SEO.</p>
                                <div className="h-px w-full bg-white/20 mt-4"></div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Card 2: ChatGPT Video - Offset Down */}
                    <div className="w-full lg:w-1/4 bg-white rounded-card overflow-hidden aspect-[3/4] lg:translate-y-12 transform rotate-1 hover:rotate-0 transition-all duration-500 shadow-2xl border border-gray-100 p-1">
                        <div className="w-full h-full rounded-[12px] overflow-hidden bg-black">
                            <FadeIn delay={200} className="h-full w-full flex items-center justify-center relative">
                                <video
                                    ref={video1Ref}
                                    src="/video/chatgpt.mov"
                                    autoPlay muted loop playsInline
                                    className="w-full h-full object-contain"
                                />
                            </FadeIn>
                        </div>
                    </div>

                    {/* Card 3: Green Stats - Offset Up */}
                    <div className="w-full lg:w-1/4 bg-[#2ec88e] p-10 rounded-card text-white aspect-[3/4] lg:-translate-y-8 transform -rotate-1 hover:rotate-0 transition-all duration-500 shadow-xl relative z-2">
                        <FadeIn delay={300} className="h-full flex flex-col justify-between">
                            <span className="text-[3.5rem] font-semibold tracking-tighter leading-none block">Zitate</span>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 tracking-tight">Proof</h3>
                                <p className="text-base opacity-80 leading-tight">Agentische Suche basiert auf Vertrauen.</p>
                                <div className="h-px w-full bg-white/20 mt-4"></div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Card 4: Gemini Video - Offset Down */}
                    <div className="w-full lg:w-1/4 bg-white rounded-card overflow-hidden aspect-[3/4] lg:translate-y-20 transform rotate-1 hover:rotate-0 transition-all duration-500 shadow-2xl border border-gray-100 p-1">
                        <div className="w-full h-full rounded-[12px] overflow-hidden bg-black">
                            <FadeIn delay={400} className="h-full w-full flex items-center justify-center relative">
                                <video
                                    ref={video2Ref}
                                    src="/video/gemini.mov"
                                    autoPlay muted loop playsInline
                                    className="w-full h-full object-contain"
                                />
                            </FadeIn>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
