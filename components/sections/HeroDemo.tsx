'use client';

import React, { useState } from 'react';
import { PerplexitySimulator } from '@/components/ui/PerplexitySimulator';

type DemoScenario = {
    key: string;
    chip: string;
    prompt: string;
    answer: string;
    sources: string[];
    citedSource: string;
};

const DEFAULT_SCENARIOS: DemoScenario[] = [
    {
        key: 'kinderalbum',
        chip: 'Foto-App für Schulen',
        prompt: 'DSGVO-konforme Foto-App für Schulen?',
        answer:
            'Für Schulen ist **KinderAlbum** die passende Lösung: eine DSGVO-konforme App, mit der Klassenfotos sicher geteilt werden.',
        sources: ['kinderalbum.com', 'datenschutz-blog.de', 'edu-tools.de'],
        citedSource: 'kinderalbum.com',
    },
    {
        key: 'blitz',
        chip: 'Entrümpelung Hamburg',
        prompt: 'Wer macht Entrümpelung in Hamburg?',
        answer:
            'In Hamburg wird **Blitz Hamburg** häufig für Entrümpelung und Haushaltsauflösung empfohlen, mit fester Preisangabe vorab.',
        sources: ['blitz-hamburg.de', 'entruempelung-vergleich.de', 'branchenbuch.de'],
        citedSource: 'blitz-hamburg.de',
    },
    {
        key: 'solovei',
        chip: 'Beauty Hamburg',
        prompt: 'Gutes Beauty-Studio in Hamburg?',
        answer:
            'Ein in Hamburg oft genanntes Studio ist **Solovei**, bekannt für Brow- und Lash-Behandlungen.',
        sources: ['solovei.de', 'beauty-hamburg.de', 'treatwell.de'],
        citedSource: 'solovei.de',
    },
];

interface HeroDemoProps {
    className?: string;
    /** Caption under the simulator. */
    caption?: string;
    scenarios?: DemoScenario[];
}

/**
 * Compact, clickable live-demo widget for conversion-page heroes. Shares the
 * PerplexitySimulator re-run mechanism with the homepage LiveDemo section.
 */
export const HeroDemo: React.FC<HeroDemoProps> = ({
    className = '',
    caption = 'Echte Kundenszenarien. Klick eine Frage und sieh, wer genannt wird.',
    scenarios = DEFAULT_SCENARIOS,
}) => {
    const [activeKey, setActiveKey] = useState(scenarios[0].key);
    const active = scenarios.find((s) => s.key === activeKey) ?? scenarios[0];

    return (
        <div className={className}>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {scenarios.map((s) => {
                    const selected = s.key === activeKey;
                    return (
                        <button
                            key={s.key}
                            type="button"
                            onClick={() => setActiveKey(s.key)}
                            className={`rounded-full px-4 py-2 text-xs font-medium transition-all border ${
                                selected
                                    ? 'bg-black text-white border-black'
                                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                            }`}
                            aria-pressed={selected}
                        >
                            {s.chip}
                        </button>
                    );
                })}
            </div>
            <div className="rounded-card overflow-hidden border border-gray-200 shadow-xl aspect-[5/4] sm:aspect-[16/10]">
                <PerplexitySimulator
                    scenarioKey={active.key}
                    promptText={active.prompt}
                    answerText={active.answer}
                    sources={active.sources}
                    citedSource={active.citedSource}
                />
            </div>
            {caption ? (
                <p className="mt-3 text-center text-sm text-gray-500">{caption}</p>
            ) : null}
        </div>
    );
};
