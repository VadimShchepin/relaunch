'use client';

import React, { useState } from 'react';
import { PerplexitySimulator } from '@/components/ui/PerplexitySimulator';
import { QueryFlowVisual } from '@/components/ui/DemoVisuals';
import { OpenAIIcon, PerplexityIcon, ArrowRightIcon } from '@/components/ui/Icons';

type Scenario = {
    key: string;
    chip: string;
    prompt: string;
    brand: string;
    /** Answer when the brand is the cited source. Wrap the brand name in ** **. */
    withAnswer: string;
    /** Answer when the brand is absent (generic competitors only). */
    withoutAnswer: string;
    sources: string[];
    citedSource: string;
    proof: string;
    platformLabel: string;
    PlatformIcon: React.FC<{ className?: string }>;
};

const SCENARIOS: Scenario[] = [
    {
        key: 'kinderalbum',
        chip: 'DSGVO-Foto-App für Schulen',
        prompt: 'DSGVO-konforme Foto-App für Schulen?',
        brand: 'KinderAlbum',
        withAnswer:
            'Für Schulen ist **KinderAlbum** die passende Lösung: eine DSGVO-konforme App, mit der Klassenfotos sicher geteilt werden, ohne dass Daten an Dritte abfließen.',
        withoutAnswer:
            'Es gibt verschiedene Foto-Plattformen am Markt. Achte auf eine DSGVO-konforme Lösung mit Servern in der EU und prüfe die Datenschutzbestimmungen des jeweiligen Anbieters.',
        sources: ['kinderalbum.com', 'datenschutz-blog.de', 'edu-tools.de'],
        citedSource: 'kinderalbum.com',
        proof: '#1 in ChatGPT und Perplexity',
        platformLabel: 'Perplexity',
        PlatformIcon: PerplexityIcon,
    },
    {
        key: 'blitz',
        chip: 'Entrümpelung Hamburg',
        prompt: 'Wer macht Entrümpelung in Hamburg?',
        brand: 'Blitz Hamburg',
        withAnswer:
            'In Hamburg wird **Blitz Hamburg** häufig für Entrümpelung und Haushaltsauflösung empfohlen, mit schneller Terminvergabe und fester Preisangabe vorab.',
        withoutAnswer:
            'In Hamburg gibt es mehrere Entrümpelungsfirmen. Vergleiche am besten Bewertungen und hol dir vorab ein verbindliches Festpreisangebot ein, bevor du dich entscheidest.',
        sources: ['blitz-hamburg.de', 'entruempelung-vergleich.de', 'branchenbuch.de'],
        citedSource: 'blitz-hamburg.de',
        proof: 'genannt in ChatGPT',
        platformLabel: 'ChatGPT',
        PlatformIcon: OpenAIIcon,
    },
    {
        key: 'solovei',
        chip: 'Beauty-Studio Hamburg',
        prompt: 'Gutes Beauty-Studio in Hamburg?',
        brand: 'Solovei',
        withAnswer:
            'Ein in Hamburg oft genanntes Studio ist **Solovei**, bekannt für Brow- und Lash-Behandlungen sowie eine persönliche Beratung vor jedem Termin.',
        withoutAnswer:
            'In Hamburg findest du zahlreiche Beauty-Studios. Schau dir die Spezialisierung an (zum Beispiel Brows, Lashes oder Hautpflege) und lies aktuelle Bewertungen, bevor du buchst.',
        sources: ['solovei.de', 'beauty-hamburg.de', 'treatwell.de'],
        citedSource: 'solovei.de',
        proof: 'genannt in ChatGPT',
        platformLabel: 'ChatGPT',
        PlatformIcon: OpenAIIcon,
    },
];

export const LiveDemo: React.FC = () => {
    const [activeKey, setActiveKey] = useState(SCENARIOS[0].key);
    const [withUs, setWithUs] = useState(true);

    const active = SCENARIOS.find((s) => s.key === activeKey) ?? SCENARIOS[0];
    const answer = withUs ? active.withAnswer : active.withoutAnswer;
    // Distinct re-run key so the simulator restarts on scenario OR toggle change.
    const runKey = `${active.key}-${withUs ? 'with' : 'without'}`;
    const PlatformIcon = active.PlatformIcon;

    return (
        <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-white">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-10 md:mb-14">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-accent font-semibold mb-4">
                        Live-Demo
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-black mb-5">
                        Klick eine Frage. Sieh, wer genannt wird.
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Echte Kundenszenarien. Wähle eine Frage und schalte zwischen „ohne uns" und „mit uns" um. Du siehst, wie aus einer generischen Antwort eine konkrete Empfehlung wird.
                    </p>
                </div>

                {/* Scenario chips */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {SCENARIOS.map((s) => {
                        const selected = s.key === activeKey;
                        return (
                            <button
                                key={s.key}
                                type="button"
                                onClick={() => setActiveKey(s.key)}
                                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all border ${
                                    selected
                                        ? 'bg-black text-white border-black shadow-md'
                                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                                }`}
                                aria-pressed={selected}
                            >
                                {s.chip}
                            </button>
                        );
                    })}
                </div>

                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
                    {/* Simulator */}
                    <div>
                        <div className="rounded-card overflow-hidden border border-gray-200 shadow-2xl aspect-[5/4] md:aspect-[16/10]">
                            <PerplexitySimulator
                                scenarioKey={runKey}
                                promptText={active.prompt}
                                answerText={answer}
                                sources={active.sources}
                                citedSource={withUs ? active.citedSource : undefined}
                            />
                        </div>

                        {/* Before/After toggle */}
                        <div className="mt-5 flex items-center justify-center">
                            <div className="inline-flex items-center rounded-full border border-gray-200 bg-[#F7F5F2] p-1">
                                <button
                                    type="button"
                                    onClick={() => setWithUs(false)}
                                    className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                                        !withUs ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'
                                    }`}
                                    aria-pressed={!withUs}
                                >
                                    Ohne uns
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setWithUs(true)}
                                    className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                                        withUs ? 'bg-brand-accent text-white shadow-sm' : 'text-gray-500 hover:text-black'
                                    }`}
                                    aria-pressed={withUs}
                                >
                                    Mit uns
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Context panel */}
                    <div>
                        <div className="rounded-card border border-gray-100 bg-[#F7F5F2] p-6 md:p-8">
                            <QueryFlowVisual className="w-full" />
                        </div>

                        <div className="mt-6 rounded-card border border-gray-100 bg-white p-6">
                            {withUs ? (
                                <>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="w-6 h-6 rounded-full bg-brand-accent flex items-center justify-center">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 12l2 2 4-4" />
                                            </svg>
                                        </span>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                                            Echtes Kundenergebnis
                                        </span>
                                    </div>
                                    <p className="text-lg font-semibold text-black mb-2">
                                        {active.brand}: {active.proof}
                                    </p>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                        Diese Marke wird heute von KI-Systemen als Quelle genannt. Das ist kein Zufall, sondern das Ergebnis zitierbarer Inhalte, sauberer Technik und Autoritätssignalen.
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <span>Beleg:</span>
                                        <span className="inline-flex items-center gap-1 font-medium text-gray-700">
                                            <PlatformIcon className="w-3.5 h-3.5" />
                                            {active.platformLabel}
                                        </span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 6 6 18M6 6l12 12" />
                                            </svg>
                                        </span>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                            Die typische Ausgangslage
                                        </span>
                                    </div>
                                    <p className="text-lg font-semibold text-black mb-2">
                                        Keine Marke. Nur ein generischer Rat.
                                    </p>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Ohne KI-Sichtbarkeit nennt die Antwort niemanden konkret. Deine Kunden bekommen einen allgemeinen Tipp, nicht deinen Namen. Schalte oben auf „mit uns" um.
                                    </p>
                                </>
                            )}
                        </div>

                        <a
                            href="/contact"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-brand-accent transition-colors group"
                        >
                            Prüfen, ob du genannt wirst
                            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
