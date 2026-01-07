import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Tag } from '@/components/ui/Tag';

export const Proof: React.FC = () => (
    <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto bg-gray-50 rounded-[40px] my-12">
        <div className="max-w-4xl mx-auto mb-16 text-center">
            <FadeIn>
                <Tag text="Proof" />
                <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight">
                    Warum ich weiß, dass das funktioniert
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Ich arbeite nicht aus Theorie. Ich teste Strategien zuerst an eigenen Projekten und dokumentiere, was in KI-Antworten tatsächlich auftaucht.
                </p>
            </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proof 1 */}
            <FadeIn delay={100} className="h-full">
                <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-[#10A37F] rounded-full flex items-center justify-center text-white">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4V7" /></svg>
                        </div>
                        <span className="font-bold text-gray-900">ChatGPT</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl mb-6 text-sm font-mono text-gray-600">
                        „... in Hamburg“
                    </div>
                    <div className="mt-auto">
                        <span className="text-brand-accent font-bold block mb-1">Ergebnis:</span>
                        <p className="text-gray-900 font-medium">Projekt X wird genannt</p>
                        <p className="text-xs text-gray-400 mt-2">Stand: Aktuell</p>
                    </div>
                </div>
            </FadeIn>

            {/* Proof 2 */}
            <FadeIn delay={200} className="h-full">
                <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-[#238fa9] rounded-full flex items-center justify-center text-white">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
                        </div>
                        <span className="font-bold text-gray-900">Perplexity</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl mb-6 text-sm font-mono text-gray-600">
                        „... Empfehlung“
                    </div>
                    <div className="mt-auto">
                        <span className="text-brand-accent font-bold block mb-1">Ergebnis:</span>
                        <p className="text-gray-900 font-medium">Projekt Y als Quelle zitiert</p>
                        <p className="text-xs text-gray-400 mt-2">Stand: Aktuell</p>
                    </div>
                </div>
            </FadeIn>

            {/* Text Card */}
            <FadeIn delay={300} className="h-full">
                <div className="bg-gray-900 p-8 rounded-[32px] text-white h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">Was das bedeutet:</h3>
                    <ul className="space-y-4 text-gray-300 font-medium">
                        <li className="flex gap-3">
                            <span className="text-brand-accent">✓</span>
                            Nur validierte Strategien
                        </li>
                        <li className="flex gap-3">
                            <span className="text-brand-accent">✓</span>
                            Kein Template-SEO
                        </li>
                        <li className="flex gap-3">
                            <span className="text-brand-accent">✓</span>
                            Messbare Wirkung
                        </li>
                    </ul>
                </div>
            </FadeIn>
        </div>
    </section>
);
