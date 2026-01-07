import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export const Transformation: React.FC = () => (
    <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-semibold text-black mb-12 tracking-tight">
                        Was sich für dich <br />ändern kann
                    </h2>
                </FadeIn>
            </div>
            <div>
                <FadeIn delay={100}>
                    <div className="space-y-8">
                        {[
                            { from: "Unsichtbar in KI", to: "Genannt bei relevanten Fragen" },
                            { from: "Nur Google als Kanal", to: "Zusätzliche Sichtbarkeit in KI-Systemen" },
                            { from: "Streuverlust", to: "Anfragen mit Kontext" },
                            { from: "Unsicherheit", to: "Klare Messung, ob es wirkt" }
                        ].map((item, i) => (
                            <div key={i} className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                                <div className="flex-1 text-right text-gray-400 font-medium line-through decoration-gray-300">
                                    {item.from}
                                </div>
                                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-400">
                                    →
                                </div>
                                <div className="flex-1 text-left font-bold text-gray-900 group-hover:text-brand-accent transition-colors">
                                    {item.to}
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
);
