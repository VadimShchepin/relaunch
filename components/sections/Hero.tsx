'use client';

import React, { useEffect, useRef } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { PlatformIconLoop } from '@/components/ui/PlatformIconLoop';
import { IMAGES } from '@/lib/constants';
import { Icon } from '@iconify/react';

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
                <div className="max-w-7xl mb-32">
                    <FadeIn>
                        <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center justify-between">
                            <h1 className="text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[1.0] font-semibold tracking-[-0.04em] text-black shrink-0">
                                Wirst du genannt,<br />
                                wenn KI gefragt wird?
                            </h1>
                            <div className="hidden lg:block pt-[82px]">
                                <Button
                                    primary
                                    text="KI-Sichtbarkeit prüfen"
                                    className="!text-xl !px-12 !py-6 shadow-2xl transition-transform duration-300"
                                >
                                    <PlatformIconLoop className="bg-white/10 w-9 h-9 rounded-full ml-4 shrink-0" iconClassName="text-base text-white" />
                                </Button>
                            </div>
                        </div>
                        <p className="text-xl md:text-2xl font-medium text-gray-800/80 leading-relaxed max-w-2xl mt-12">
                            Ich helfe Hamburger Unternehmen dabei, in ChatGPT, Perplexity und Google AI sichtbar zu werden – und messe, ob daraus echte Anfragen entstehen.
                        </p>
                        <div className="lg:hidden mt-8">
                            <Button
                                primary
                                text="KI-Sichtbarkeit prüfen"
                                className="w-full justify-center !text-lg !py-4 shadow-xl"
                            >
                                <PlatformIconLoop className="bg-white/10 w-8 h-8 rounded-full shrink-0" iconClassName="text-sm text-white" />
                            </Button>
                        </div>
                    </FadeIn>
                </div>

                {/* Staggered Card Row - Matching Reference Style */}
                <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center -mx-4 lg:-mx-0">

                    {/* Card 1: Blue Stats */}
                    <div className="w-full lg:w-1/4 bg-[#017eff] p-10 rounded-card text-white aspect-[3/4] flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-all duration-500 shadow-xl relative z-10">
                        <FadeIn delay={100} className="h-full flex flex-col justify-between">
                            <span className="text-[4rem] font-semibold tracking-tighter leading-none block">90 %</span>
                            <div>
                                <p className="text-xl font-semibold mb-4 tracking-tight leading-snug">
                                    der ersten Anbieter, die KI nennt, bekommen die Anfrage.
                                </p>
                                <div className="h-px w-full bg-white/20 mb-6"></div>
                                <div className="flex items-center gap-4 mb-3">
                                    <Icon icon="simple-icons:openai" className="w-5 h-5 opacity-80" />
                                    <Icon icon="simple-icons:perplexity" className="w-5 h-5 opacity-80" />
                                    <Icon icon="simple-icons:google" className="w-5 h-5 opacity-80" />
                                </div>
                                <p className="text-xs font-medium opacity-60 tracking-wider">
                                    ChatGPT · Perplexity · Google AI
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Card 2: ChatGPT Video - Offset Down */}
                    <div className="w-full lg:w-1/4 bg-white rounded-card overflow-hidden aspect-[3/4] lg:translate-y-12 transform rotate-1 hover:rotate-0 hover:scale-[1.25] hover:z-50 transition-all duration-500 shadow-2xl border border-gray-100 p-1 group">
                        <div className="w-full h-full rounded-[12px] overflow-hidden bg-black">
                            <FadeIn delay={200} className="h-full w-full flex items-center justify-center relative">
                                <video
                                    ref={video1Ref}
                                    src="/video/chatgpt.mov"
                                    autoPlay muted loop playsInline
                                    className="w-full h-full object-contain"
                                />
                                {/* Overlay to indicate focus on hover */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
                            </FadeIn>
                        </div>
                    </div>

                    {/* Card 3: Zitate/Quellen - Offset Up */}
                    <div className="w-full lg:w-1/4 bg-[#2ec88e] rounded-card text-brand-dark aspect-[3/4] lg:-translate-y-8 transform -rotate-1 hover:rotate-0 hover:scale-[1.25] hover:z-50 transition-all duration-500 shadow-xl relative z-2 overflow-hidden flex flex-col justify-between group">
                        <div className="p-10 pb-0">
                            <span className="text-[3.5rem] font-semibold tracking-tighter leading-none block">Zitate</span>
                            <p className="text-xl font-semibold mt-4 mb-2 tracking-tight leading-snug">
                                KI nennt keine Websites – sie nennt Quellen.
                            </p>
                            <p className="text-sm text-brand-dark/70 font-medium leading-tight">
                                Wir sorgen dafür, dass dein Unternehmen diese Quelle ist.
                            </p>
                        </div>

                        {/* Proof Image Integration */}
                        <div className="px-6 pb-6">
                            <div className="bg-black/5 rounded-xl overflow-hidden border border-black/10 p-2 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                                <img
                                    src="/image/kinderAlbum/proof3.png"
                                    alt="Proof Example"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Gemini Video - Offset Down */}
                    <div className="w-full lg:w-1/4 bg-white rounded-card overflow-hidden aspect-[3/4] lg:translate-y-20 transform rotate-1 hover:rotate-0 hover:scale-[1.25] hover:z-50 transition-all duration-500 shadow-2xl border border-gray-100 p-1 group">
                        <div className="w-full h-full rounded-[12px] overflow-hidden bg-black">
                            <FadeIn delay={400} className="h-full w-full flex items-center justify-center relative">
                                <video
                                    ref={video2Ref}
                                    src="/video/gemini.mov"
                                    autoPlay muted loop playsInline
                                    className="w-full h-full object-contain"
                                />
                                {/* Overlay to indicate focus on hover */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
                            </FadeIn>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
