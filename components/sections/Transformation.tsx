import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export const Transformation: React.FC = () => (
    <section className="py-40 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto">
        <div className="max-w-4xl mb-32">
            <FadeIn>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-black mb-10 tracking-[-0.05em] leading-[1.0]">
                    Die <br />
                    <span className="text-gray-300">Wandlung.</span>
                </h2>
            </FadeIn>
        </div>

        <div className="space-y-4">
            {[
                { from: "Unsichtbar in KI", to: "Genannt bei Fragen" },
                { from: "Nur Google", to: "KI-Sichtbarkeit" },
                { from: "Streuverlust", to: "Anfragen mit Kontext" },
                { from: "Unsicherheit", to: "Klare Messung" }
            ].map((item, i) => (
                <FadeIn key={i} delay={i * 100}>
                    <div className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 px-8 rounded-card hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-50 text-center md:text-left">
                        <div className="text-2xl md:text-4xl font-semibold text-gray-200 line-through decoration-gray-100 mb-4 md:mb-0">
                            {item.from}
                        </div>
                        <div className="hidden md:block text-3xl text-gray-300 transform group-hover:scale-110 transition-transform">
                            →
                        </div>
                        <div className="text-2xl md:text-4xl font-semibold text-black opacity-40 group-hover:opacity-100 transition-opacity">
                            {item.to}
                        </div>
                    </div>
                </FadeIn>
            ))}
        </div>
    </section>
);

