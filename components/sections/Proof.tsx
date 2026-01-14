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
        aiToolName: "ChatGPT",
        clientLogo: "/image/proof/blitz-logo.png",
        clientName: "Blitz Hamburg",
        imageSrc: "/image/kinderAlbum/proof5-blitz-short.png",
        resultLabel: "ERGEBNIS",
        resultHeadline: "Blitz Hamburg wird als Top-Anbieter für Entrümpelung empfohlen.",
        relevanceLabel: "RELEVANZ",
        relevanceText: "Keine Rankings, sondern Fokus auf Klarheit & Struktur.",
        iconData: "M239.184 106.203a64.72 64.72 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.72 64.72 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.67 64.67 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.77 64.77 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483m-97.56 136.338a48.4 48.4 0 0 1-31.105-11.255l1.535-.87l51.67-29.825a8.6 8.6 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601M37.158 197.93a48.35 48.35 0 0 1-5.781-32.589l1.534.921l51.722 29.826a8.34 8.34 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803M23.549 85.38a48.5 48.5 0 0 1 25.58-21.333v61.39a8.29 8.29 0 0 0 4.195 7.316l62.874 36.272l-21.845 12.636a.82.82 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405zm179.466 41.695l-63.08-36.63L161.73 77.86a.82.82 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.54 8.54 0 0 0-4.4-7.213m21.742-32.69l-1.535-.922l-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.72.72 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391zM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87l-51.67 29.825a8.6 8.6 0 0 0-4.246 7.367zm11.868-25.58L128.067 97.3l28.188 16.218v32.434l-28.086 16.218l-28.188-16.218z",
        colorClass: "bg-white",
        textClass: "text-[#10A37F]"
    },
    {
        id: 'kinderalbum',
        aiToolName: "Perplexity",
        clientLogo: "/image/proof/KinderAlbum-logo.png",
        clientName: "KinderAlbum",
        imageSrc: "/image/kinderAlbum/proof4-kinderAlbum-perplexity.png",
        resultLabel: "ERGEBNIS",
        resultHeadline: "Spezialisierte, DSGVO-konforme Foto-Plattform für Schulen.",
        relevanceLabel: "RELEVANZ",
        relevanceText: "Korrekte Zielgruppe & Compliance - nicht nur der Name.",
        iconData: "m34.831 0l84.689 78.028V.18h16.486v78.197L221.074 0v88.964H256v128.322h-34.819v79.218l-85.175-74.833v75.692H119.52v-74.459l-84.593 74.508v-80.126H0V88.964h34.831zm72.26 105.248H16.487v95.753h18.42v-30.204zm-55.68 72.775v83.052l68.109-59.988v-84.926zm85.069 22.27v-84.212l68.128 61.865v39.34h.088v42.94zm84.701.708h18.333v-95.753h-89.93l71.597 64.87zM204.588 88.964V37.457l-55.904 51.507zm-97.368 0H51.317V37.457z",
        colorClass: "bg-white",
        textClass: "text-[#3f7e8b]"
    },
    {
        id: 'solovei',
        aiToolName: "ChatGPT",
        clientLogo: "/image/proof/solovei-logo.avif",
        clientName: "Solovei Beauty",
        imageSrc: "/image/kinderAlbum/proof7-solovei.png",
        resultLabel: "ERGEBNIS",
        resultHeadline: "Expertin mit präziser Standort- und Leistungsbeschreibung.",
        relevanceLabel: "RELEVANZ",
        relevanceText: "Detaillierte Services stärken die lokale Autorität immens.",
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

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: `+=${totalCards * 100}%`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

        // Loop through cards to animate them appearing
        cards.forEach((card, i) => {
            if (i === 0) return; // First card is static (underneath)

            const isLast = i === totalCards - 1;
            const bgColor = isLast ? '#FF5E3A' : '#7D8C9E';

            // Sync BG change with Card entry
            tl.to(bgLayer.current, {
                backgroundColor: bgColor,
                duration: 1,
                ease: "power1.inOut"
            }, ">-0.5");

            tl.fromTo(card,
                {
                    yPercent: 120, // Enters from bottom
                    rotation: 12,  // Slight tilt
                    xPercent: 10,
                    opacity: 0,
                    scale: 0.9
                },
                {
                    yPercent: 0,
                    rotation: 0,
                    xPercent: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out"
                },
                "<" // Occurs during BG change
            );
        });

    }, { scope: container });

    return (
        <section ref={container} className="relative w-full h-screen bg-brand-olive overflow-hidden">
            {/* Background Layer */}
            <div ref={bgLayer} className="absolute inset-0 bg-brand-olive -z-20 transition-colors will-change-[background-color]" />

            {/* Header / Title */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
                <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full inline-flex items-center border border-white/10 mb-4 shadow-lg">
                    <span className="text-white text-xs font-bold uppercase tracking-wider text-shadow-sm">Proof</span>
                </div>
            </div>

            {/* Cards Wrapper */}
            <div ref={wrapper} className="relative w-full h-full max-w-[1400px] mx-auto flex items-center justify-center p-4">

                {CARDS.map((card, index) => (
                    <div
                        key={card.id}
                        className="absolute w-full max-w-4xl h-[85vh] md:h-[80vh] flex flex-col items-center justify-start will-change-transform z-10"
                        style={{ zIndex: index + 10 }}
                    >
                        {/* 1. Text Card (White) */}
                        <div className="w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8 relative z-20">

                            {/* Client Logo Row */}
                            <div className="flex items-center gap-5 mb-8">
                                <div className="relative h-10 w-32">
                                    <Image
                                        src={card.clientLogo}
                                        alt={card.clientName}
                                        fill
                                        className="object-contain object-left"
                                    />
                                </div>
                            </div>

                            {/* Result Section */}
                            <div className="mb-8">
                                <span className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-3 block ${card.textClass}`}>
                                    {card.resultLabel}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-brand-text leading-[1.15] max-w-2xl">
                                    {card.resultHeadline}
                                </h3>
                            </div>

                            <div className="w-12 h-0.5 bg-gray-100 mb-8" />

                            {/* Relevance Section */}
                            <div>
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">
                                    {card.relevanceLabel}
                                </span>
                                <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed max-w-2xl">
                                    {card.relevanceText}
                                </p>
                            </div>
                        </div>

                        {/* 2. Screenshot (Raw Image) */}
                        <div className="relative w-full flex-grow flex items-start justify-center mt-4">

                            {/* The Screenshot - Raw, no container styling */}
                            <div className="relative w-full h-full">
                                <Image
                                    src={card.imageSrc}
                                    alt={`${card.clientName} Proof`}
                                    fill
                                    className="object-contain object-top drop-shadow-2xl"
                                    priority={index === 0}
                                />
                            </div>

                            {/* LLM Logo Overlay - Bottom Right */}
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-white/50 flex items-center gap-2">
                                <div className={`w-5 h-5 ${card.textClass}`}>
                                    <svg viewBox="0 0 256 260" fill="currentColor" className="w-full h-full">
                                        <path d={card.iconData} />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold text-gray-700 tracking-tight">{card.aiToolName}</span>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 opacity-60 mix-blend-overlay text-white pointer-events-none">
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Scroll</span>
                <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
            </div>

        </section>
    );
};
