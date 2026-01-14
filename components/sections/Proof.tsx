'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
    {
        id: 'blitz',
        toolName: "ChatGPT",
        imageSrc: "/image/kinderAlbum/proof5-blitz-short.png",
        result: "Blitz Hamburg wird als Top-Anbieter für Entrümpelung empfohlen.",
        relevance: "Keine Rankings, sondern Fokus auf Klarheit & Struktur.",
        iconData: "M239.184 106.203a64.72 64.72 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.72 64.72 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.67 64.67 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.77 64.77 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483m-97.56 136.338a48.4 48.4 0 0 1-31.105-11.255l1.535-.87l51.67-29.825a8.6 8.6 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601M37.158 197.93a48.35 48.35 0 0 1-5.781-32.589l1.534.921l51.722 29.826a8.34 8.34 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803M23.549 85.38a48.5 48.5 0 0 1 25.58-21.333v61.39a8.29 8.29 0 0 0 4.195 7.316l62.874 36.272l-21.845 12.636a.82.82 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405zm179.466 41.695l-63.08-36.63L161.73 77.86a.82.82 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.54 8.54 0 0 0-4.4-7.213m21.742-32.69l-1.535-.922l-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.72.72 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391zM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87l-51.67 29.825a8.6 8.6 0 0 0-4.246 7.367zm11.868-25.58L128.067 97.3l28.188 16.218v32.434l-28.086 16.218l-28.188-16.218z",
        colorClass: "bg-white",
        textClass: "text-[#10A37F]"
    },
    {
        id: 'kinderalbum',
        toolName: "Perplexity",
        imageSrc: "/image/kinderAlbum/proof4-kinderAlbum-perplexity.png",
        result: "Spezialisierte, DSGVO-konforme Foto-Plattform für Schulen.",
        relevance: "Korrekte Zielgruppe & Compliance - nicht nur der Name.",
        iconData: "m34.831 0l84.689 78.028V.18h16.486v78.197L221.074 0v88.964H256v128.322h-34.819v79.218l-85.175-74.833v75.692H119.52v-74.459l-84.593 74.508v-80.126H0V88.964h34.831zm72.26 105.248H16.487v95.753h18.42v-30.204zm-55.68 72.775v83.052l68.109-59.988v-84.926zm85.069 22.27v-84.212l68.128 61.865v39.34h.088v42.94zm84.701.708h18.333v-95.753h-89.93l71.597 64.87zM204.588 88.964V37.457l-55.904 51.507zm-97.368 0H51.317V37.457z",
        colorClass: "bg-white",
        textClass: "text-[#3f7e8b]"
    },
    {
        id: 'solovei',
        toolName: "ChatGPT",
        imageSrc: "/image/kinderAlbum/proof7-solovei.png",
        result: "Expertin mit präziser Standort- und Leistungsbeschreibung gelistet.",
        relevance: "Detaillierte Services stärken die lokale Autorität immens.",
        iconData: "M239.184 106.203a64.72 64.72 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.72 64.72 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.67 64.67 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.77 64.77 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483m-97.56 136.338a48.4 48.4 0 0 1-31.105-11.255l1.535-.87l51.67-29.825a8.6 8.6 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601M37.158 197.93a48.35 48.35 0 0 1-5.781-32.589l1.534.921l51.722 29.826a8.34 8.34 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803M23.549 85.38a48.5 48.5 0 0 1 25.58-21.333v61.39a8.29 8.29 0 0 0 4.195 7.316l62.874 36.272l-21.845 12.636a.82.82 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405zm179.466 41.695l-63.08-36.63L161.73 77.86a.82.82 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.54 8.54 0 0 0-4.4-7.213m21.742-32.69l-1.535-.922l-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.72.72 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391zM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87l-51.67 29.825a8.6 8.6 0 0 0-4.246 7.367zm11.868-25.58L128.067 97.3l28.188 16.218v32.434l-28.086 16.218l-28.188-16.218z",
        colorClass: "bg-white",
        textClass: "text-[#10A37F]"
    },
];

export const Proof: React.FC = () => {
    const container = useRef<HTMLDivElement>(null);
    const bgLayer = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!container.current || !bgLayer.current || !wrapper.current) return;

        const cards = Array.from(wrapper.current.children);
        const totalCards = cards.length;

        // Container scroll length = 100vh per card for scrub feeling
        // This timeline pins the container and animates cards one by one
        gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: `+=${totalCards * 100}%`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

        // Independent Timelines for better control
        // For each card after the first one, we create a scroll trigger

        cards.forEach((card, i) => {
            if (i === 0) {
                // First card stays put or could have a slight scale out if you want
                // But let's keep it simple: it stays as the base.
                return;
            }

            // We want Card 2 to start entering when we've scrolled past Card 1
            // So we need to map the scroll progress to these animations.
            // A clearer way with one timeline:

        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: `+=${totalCards * 100}%`,
                scrub: 1,
            }
        });

        // 1. Initial: Card 1 is visible.

        // 2. Animate Card 2 In
        // BG turns Slate
        tl.to(bgLayer.current, { backgroundColor: '#7D8C9E', duration: 1 }, 1)
            .fromTo(cards[1],
                { yPercent: 120, rotation: 10, xPercent: 5, autoAlpha: 1, scale: 0.95 },
                { yPercent: 0, rotation: 0, xPercent: 0, autoAlpha: 1, scale: 1, duration: 1, ease: "power2.out" },
                1
            );

        // 3. Animate Card 3 In
        // BG turns Orange
        tl.to(bgLayer.current, { backgroundColor: '#FF5E3A', duration: 1 }, 2)
            .fromTo(cards[2],
                { yPercent: 120, rotation: 10, xPercent: 5, autoAlpha: 1, scale: 0.95 },
                { yPercent: 0, rotation: 0, xPercent: 0, autoAlpha: 1, scale: 1, duration: 1, ease: "power2.out" },
                2
            );

        // Make sure cards obscure previous ones (z-index is handled in CSS)

    }, { scope: container });

    return (
        <section ref={container} className="relative w-full h-screen bg-brand-olive overflow-hidden">
            {/* Background Layer */}
            <div ref={bgLayer} className="absolute inset-0 bg-brand-olive -z-20 transition-colors will-change-[background-color]" />

            {/* Header / Title - Pinned at top/safe area */}
            <div className="absolute top-6 left-6 md:top-12 md:left-12 z-20">
                <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full inline-flex items-center border border-white/10 mb-4">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">Proof</span>
                </div>
            </div>

            {/* Cards Wrapper */}
            <div ref={wrapper} className="relative w-full h-full max-w-[1600px] mx-auto flex items-center justify-center p-4 md:p-12">

                {CARDS.map((card, index) => (
                    <div
                        key={card.id}
                        className="absolute w-full max-w-6xl aspect-[4/5] md:aspect-[2.5/1] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row will-change-transform z-10"
                        style={{ zIndex: index + 10 }}
                    >
                        {/* Left: Content (Text) */}
                        <div className="w-full md:w-2/5 p-8 md:p-16 flex flex-col justify-center bg-white order-2 md:order-1 relative z-10">

                            <div className="flex items-center gap-4 mb-8">
                                <div className={`w-12 h-12 md:w-16 md:h-16 flex-shrink-0 ${card.textClass}`}>
                                    <svg viewBox="0 0 256 260" fill="currentColor" className="w-full h-full">
                                        <path d={card.iconData} />
                                    </svg>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">{card.toolName}</h2>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <span className="text-brand-accent font-bold uppercase tracking-widest text-xs md:text-sm block mb-3">Ergebnis</span>
                                    <p className="text-2xl md:text-3xl font-bold text-black leading-tight">
                                        {card.result}
                                    </p>
                                </div>

                                <div className="w-full h-px bg-gray-100" />

                                <div>
                                    <span className="text-gray-400 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3">Relevanz</span>
                                    <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
                                        {card.relevance}
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Right: Image (Mockup) */}
                        <div className="w-full md:w-3/5 h-[40vh] md:h-full bg-gray-50 relative order-1 md:order-2">
                            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                                <div className="relative w-full h-full drop-shadow-2xl">
                                    <Image
                                        src={card.imageSrc}
                                        alt={card.toolName}
                                        fill
                                        className="object-contain"
                                        priority={index === 0}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Scroll Indicator (Optional) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 opacity-50 mix-blend-overlay text-white">
                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
                <div className="w-px h-8 bg-white/50" />
            </div>

        </section>
    );
};
