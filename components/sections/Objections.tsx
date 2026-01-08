import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export const Objections: React.FC = () => (
    <section className="py-40 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto">
        <div className="bg-white rounded-section p-20 md:p-28 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-black mb-24 tracking-[-0.04em] text-center">
                        Nicht für jeden <br />
                        <span className="text-gray-300">gedacht.</span>
                    </h2>
                    <div className="grid lg:grid-cols-3 gap-8 mb-24">
                        <div className="p-10 bg-gray-50 rounded-card text-left border border-gray-100 transition-all hover:bg-white hover:shadow-xl group">
                            <span className="text-3xl mb-8 block grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100">❌</span>
                            <p className="text-xl font-semibold text-black mb-4 tracking-tight">Angebot unklar</p>
                            <p className="text-base text-gray-500 font-medium leading-snug">„Wir machen alles für jeden“ funktioniert bei KI nicht.</p>
                        </div>
                        <div className="p-10 bg-gray-50 rounded-card text-left border border-gray-100 transition-all hover:bg-white hover:shadow-xl group">
                            <span className="text-3xl mb-8 block grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100">❌</span>
                            <p className="text-xl font-semibold text-black mb-4 tracking-tight">Nur schnelle Klicks</p>
                            <p className="text-base text-gray-500 font-medium leading-snug">Dafür sind Google Ads besser geeignet.</p>
                        </div>
                        <div className="p-10 bg-gray-50 rounded-card text-left border border-gray-100 transition-all hover:bg-white hover:shadow-xl group">
                            <span className="text-3xl mb-8 block grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100">❌</span>
                            <p className="text-xl font-semibold text-black mb-4 tracking-tight">Masse statt Qualität</p>
                            <p className="text-base text-gray-500 font-medium leading-snug">Struktur und Tiefe sind bei KI-Systemen der Schlüssel.</p>
                        </div>
                    </div>

                    <div className="text-xl md:text-2xl font-medium text-black max-w-3xl mx-auto text-center leading-relaxed">
                        Wenn du aber weißt, <strong className="text-brand-accent">was du anbietest und für wen</strong>: <br />
                        Dann ist KI-Sichtbarkeit ein massiver Hebel.
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
);


