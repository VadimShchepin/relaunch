'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin outside component to ensure it's ready
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const CARDS = [
    {
        id: 'kinderalbum',
        aiToolName: "Perplexity",
        clientLogo: "/image/proof/KinderAlbum-logo.webp",
        clientName: "KinderAlbum",
        imageSrc: "/image/kinderAlbum/proof4-kinderAlbum-perplexity.webp",
        resultLabel: "ERGEBNIS",
        resultHeadline: "Spezialisierte, DSGVO-konforme Foto-Plattform für Schulen.",
        relevanceLabel: "RELEVANZ",
        relevanceText: "Korrekte Zielgruppe & Compliance - nicht nur der Name.",
        triggerLabel: "AUSLÖSER",
        triggerText: "klare Zielgruppensignale + DSGVO-Autorität",
        iconData: "m34.831 0l84.689 78.028V.18h16.486v78.197L221.074 0v88.964H256v128.322h-34.819v79.218l-85.175-74.833v75.692H119.52v-74.459l-84.593 74.508v-80.126H0V88.964h34.831zm72.26 105.248H16.487v95.753h18.42v-30.204zm-55.68 72.775v83.052l68.109-59.988v-84.926zm85.069 22.27v-84.212l68.128 61.865v39.34h.088v42.94zm84.701.708h18.333v-95.753h-89.93l71.597 64.87zM204.588 88.964V37.457l-55.904 51.507zm-97.368 0H51.317V37.457z",
        textClass: "text-[#3f7e8b]",
        bgColor: "rgb(155, 201, 221)",
        bgImage: "/image/proof/kinderalbum bg.webp"
    },
    {
        id: 'blitz',
        aiToolName: "ChatGPT",
        clientLogo: "/image/proof/blitz-logo.webp",
        clientName: "Blitz Hamburg",
        imageSrc: "/image/kinderAlbum/proof5-blitz-short.webp",
        resultLabel: "ERGEBNIS",
        resultHeadline: "Blitz Hamburg wird als Top-Anbieter für Entrümpelung empfohlen.",
        relevanceLabel: "RELEVANZ",
        relevanceText: "Keine Rankings, sondern Fokus auf Klarheit & Struktur.",
        iconData: "M239.184 106.203a64.72 64.72 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.72 64.72 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.67 64.67 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.77 64.77 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483m-97.56 136.338a48.4 48.4 0 0 1-31.105-11.255l1.535-.87l51.67-29.825a8.6 8.6 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601M37.158 197.93a48.35 48.35 0 0 1-5.781-32.589l1.534.921l51.722 29.826a8.34 8.34 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803M23.549 85.38a48.5 48.5 0 0 1 25.58-21.333v61.39a8.29 8.29 0 0 0 4.195 7.316l62.874 36.272l-21.845 12.636a.82.82 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405zm179.466 41.695l-63.08-36.63L161.73 77.86a.82.82 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.54 8.54 0 0 0-4.4-7.213m21.742-32.69l-1.535-.922l-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.72.72 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391zM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87l-51.67 29.825a8.6 8.6 0 0 0-4.246 7.367zm11.868-25.58L128.067 97.3l28.188 16.218v32.434l-28.086 16.218l-28.188-16.218z",
        textClass: "text-[#10A37F]",
        bgColor: "rgb(78, 129, 238)",
        bgImage: null
    },
    {
        id: 'solovei',
        aiToolName: "ChatGPT",
        clientLogo: "/image/proof/solovei-logo.avif",
        clientName: "Solovei Beauty",
        imageSrc: "/image/kinderAlbum/proof7-solovei.webp",
        resultLabel: "ERGEBNIS",
        resultHeadline: "Expertin mit präziser Standort- und Leistungsbeschreibung.",
        relevanceLabel: "RELEVANZ",
        relevanceText: "Detaillierte Services stärken die lokale Autorität immens.",
        iconData: "M239.184 106.203a64.72 64.72 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.72 64.72 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.67 64.67 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.77 64.77 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483m-97.56 136.338a48.4 48.4 0 0 1-31.105-11.255l1.535-.87l51.67-29.825a8.6 8.6 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601M37.158 197.93a48.35 48.35 0 0 1-5.781-32.589l1.534.921l51.722 29.826a8.34 8.34 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803M23.549 85.38a48.5 48.5 0 0 1 25.58-21.333v61.39a8.29 8.29 0 0 0 4.195 7.316l62.874 36.272l-21.845 12.636a.82.82 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405zm179.466 41.695l-63.08-36.63L161.73 77.86a.82.82 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.54 8.54 0 0 0-4.4-7.213m21.742-32.69l-1.535-.922l-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.72.72 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391zM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87l-51.67 29.825a8.6 8.6 0 0 0-4.246 7.367zm11.868-25.58L128.067 97.3l28.188 16.218v32.434l-28.086 16.218l-28.188-16.218z",
        textClass: "text-[#10A37F]",
        bgColor: "rgb(21, 46, 40)",
        bgImage: null
    },
];

export const Proof: React.FC = () => {
    const container = useRef<HTMLDivElement>(null);
    const bgLayer = useRef<HTMLDivElement>(null);
    const bgImageLayer = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!container.current || !bgLayer.current || !bgImageLayer.current || !wrapper.current) return;

        // Wait for next frame to ensure DOM is painted
        requestAnimationFrame(() => {
            const cards = Array.from(wrapper.current!.children) as HTMLElement[];
            const totalCards = cards.length;

            // Kill any existing ScrollTriggers on this element
            ScrollTrigger.getAll().forEach(st => {
                if (st.trigger === container.current) st.kill();
            });

            // Set initial state: first card visible, others hidden
            cards.forEach((card, i) => {
                if (i === 0) {
                    gsap.set(card, { yPercent: 0, rotation: 0, xPercent: 0, scale: 1, opacity: 1, visibility: 'visible' });
                } else {
                    gsap.set(card, { yPercent: 100, rotation: 6, xPercent: 3, scale: 0.95, opacity: 0, visibility: 'hidden' });
                }
            });

            // Set initial background
            gsap.set(bgLayer.current, { backgroundColor: CARDS[0].bgColor });
            gsap.set(bgImageLayer.current, { opacity: CARDS[0].bgImage ? 1 : 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: `+=${totalCards * 100}%`,
                    scrub: 0.3,
                    pin: true,
                    anticipatePin: 1,
                    snap: {
                        snapTo: 1 / (totalCards - 1),
                        duration: { min: 0.15, max: 0.4 },
                        delay: 0,
                        ease: "power2.inOut"
                    },
                    invalidateOnRefresh: true
                }
            });

            // Animate card transitions
            cards.forEach((card, i) => {
                if (i === 0) return;

                const prevCard = cards[i - 1];
                const bgColor = CARDS[i].bgColor;
                const hasBgImage = CARDS[i].bgImage !== null;

                // Make incoming card visible first
                tl.set(card, { visibility: 'visible' }, i - 1);

                // Previous card exits upward and fades completely
                tl.to(prevCard, {
                    yPercent: -20,
                    scale: 0.9,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.inOut"
                }, i - 1);

                // Hide previous card after animation
                tl.set(prevCard, { visibility: 'hidden' }, i - 0.1);

                // Background color transition
                tl.to(bgLayer.current, {
                    backgroundColor: bgColor,
                    duration: 1,
                    ease: "power1.inOut"
                }, i - 1);

                // Background image transition
                tl.to(bgImageLayer.current, {
                    opacity: hasBgImage ? 1 : 0,
                    duration: 1,
                    ease: "power1.inOut"
                }, i - 1);

                // New card enters from bottom
                tl.to(card, {
                    yPercent: 0,
                    rotation: 0,
                    xPercent: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                }, i - 1);
            });

            // Refresh ScrollTrigger after setup
            ScrollTrigger.refresh();
        });

    }, { scope: container, dependencies: [] });

    return (
        <section ref={container} className="relative w-full h-screen bg-brand-olive overflow-hidden">
            {/* Section Label */}
            <div className="absolute top-24 md:top-28 left-1/2 transform -translate-x-1/2 z-30 px-4">
                <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.15em] md:tracking-[0.2em] text-white bg-black/40 px-3 md:px-4 py-2 rounded-full backdrop-blur-sm whitespace-nowrap">
                    Echte KI-Anfragen & Antworten
                </span>
            </div>

            {/* Background Color Layer */}
            <div ref={bgLayer} className="absolute inset-0 -z-20 will-change-[background-color]" />

            {/* Background Image Layer (for kinderalbum) */}
            <div
                ref={bgImageLayer}
                className="absolute inset-0 -z-10 opacity-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('/image/proof/kinderalbum bg.webp')` }}
            />

            {/* Cards Wrapper - Vertically centered */}
            <div ref={wrapper} className="relative w-full h-full max-w-[1400px] mx-auto flex items-center justify-center px-4 md:px-8">

                {CARDS.map((card, index) => (
                    <div
                        key={card.id}
                        className="absolute w-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 will-change-transform"
                    >
                        {/* Text Card - Left Side */}
                        <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-2xl p-6 md:p-8 flex-shrink-0">
                            {/* Header Row: Client Logo + LLM Badge */}
                            <div className="flex items-center justify-between mb-5">
                                <div className="relative h-7 w-24">
                                    <Image
                                        src={card.clientLogo}
                                        alt={card.clientName}
                                        fill
                                        className="object-contain object-left"
                                    />
                                </div>

                                {/* LLM Badge */}
                                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                                    <div className={`w-4 h-4 ${card.textClass}`}>
                                        <svg viewBox="0 0 256 260" fill="currentColor" className="w-full h-full">
                                            <path d={card.iconData} />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-600">{card.aiToolName}</span>
                                </div>
                            </div>

                            {/* Result Section */}
                            <div className="mb-5">
                                <span className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2 block ${card.textClass}`}>
                                    {card.resultLabel}
                                </span>
                                <h3 className="text-lg md:text-xl font-bold text-brand-text leading-tight">
                                    {card.resultHeadline}
                                </h3>
                            </div>

                            <div className="w-8 h-0.5 bg-gray-100 mb-5" />

                            {/* Relevance Section */}
                            <div>
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-1 block">
                                    {card.relevanceLabel}
                                </span>
                                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                                    {card.relevanceText}
                                </p>
                            </div>

                            {/* Trigger Section - Only for KinderAlbum */}
                            {card.triggerLabel && (
                                <>
                                    <div className="w-8 h-0.5 bg-gray-100 my-5" />
                                    <div>
                                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-1 block">
                                            {card.triggerLabel}
                                        </span>
                                        <p className="text-sm text-gray-600 font-medium leading-relaxed">
                                            {card.triggerText}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Screenshot - Right Side */}
                        <div className="relative w-full lg:w-1/2 h-[280px] md:h-[400px] lg:h-[500px] flex-shrink-0">
                            <Image
                                src={card.imageSrc}
                                alt={`${card.clientName} Proof`}
                                fill
                                className="object-contain object-center drop-shadow-2xl"
                                priority={index === 0}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 text-white pointer-events-none">
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
            </div>

        </section>
    );
};
