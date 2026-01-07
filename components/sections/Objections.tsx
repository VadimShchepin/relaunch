import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export const Objections: React.FC = () => (
    <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <div className="bg-white rounded-[40px] p-8 md:p-20 border border-gray-100/50 shadow-sm">
            <div className="max-w-4xl mx-auto text-center">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-semibold text-black mb-12 tracking-tight">
                        Das ist nichts für dich, wenn …
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="p-6 bg-[#FEF2F2] rounded-3xl text-left">
                            <span className="text-2xl mb-4 block">❌</span>
                            <p className="font-semibold text-gray-900">Dein Angebot unklar ist</p>
                            <p className="text-sm text-gray-600 mt-2">„Wir machen alles für jeden“ funktioniert bei KI nicht.</p>
                        </div>
                        <div className="p-6 bg-[#FEF2F2] rounded-3xl text-left">
                            <span className="text-2xl mb-4 block">❌</span>
                            <p className="font-semibold text-gray-900">Du nur schnelle Klicks willst</p>
                            <p className="text-sm text-gray-600 mt-2">Dafür sind Google Ads besser geeignet.</p>
                        </div>
                        <div className="p-6 bg-[#FEF2F2] rounded-3xl text-left">
                            <span className="text-2xl mb-4 block">❌</span>
                            <p className="font-semibold text-gray-900">Du nicht in Qualität investierst</p>
                            <p className="text-sm text-gray-600 mt-2">Struktur und Inhalt sind der Schlüssel.</p>
                        </div>
                    </div>

                    <div className="text-xl font-medium text-gray-900">
                        Wenn du aber weißt, <strong className="text-brand-accent">was du anbietest und für wen</strong>:<br />
                        Dann prüfen wir, ob KI-Sichtbarkeit für dich ein echter Hebel ist.
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
);
