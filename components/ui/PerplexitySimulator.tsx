'use client';

import React, { useState, useEffect } from 'react';
import { PerplexityIcon } from './Icons';

type IconComponent = React.FC<{ className?: string }>;

/*
 * Nachbau einer KI-Antwortoberflaeche fuer die Startseite. Drei Regeln, die aus
 * einem Integritaetsbefund stammen:
 *
 *  1. `promptText` und `answerText` sind Pflicht. Vorher standen hier als
 *     Default eine erfundene Perplexity-Antwort ueber KinderAlbum. Ein Default,
 *     der eine Aussage behauptet, wird irgendwann unbeabsichtigt gerendert.
 *  2. `sources` darf nur Domains enthalten, die in der jeweiligen Antwort
 *     wirklich zitiert wurden. Erfundene Quell-Domains sind auf einer Website,
 *     die Citation-Messung verkauft, der teuerste denkbare Fehler. Die
 *     Konversionsseiten (/ai-seo-agentur, /chatgpt-sichtbarkeit,
 *     /ai-sichtbarkeit-now, /ergebnisse) zeigen diesen Nachbau deshalb nicht
 *     mehr, sie zeigen datierte Exportzahlen.
 *  3. Die Sources-Zeile hat immer drei Kacheln, aber nur die belegten Domains
 *     werden benannt. Der Rest bleibt eine unbeschriftete Platzhalter-Kachel.
 *     Vorher wurden die freien Plaetze mit plausibel klingenden Domains
 *     aufgefuellt (datenschutz-blog.de, branchenbuch.de, treatwell.de, ...),
 *     gemischt mit echten Kundendomains. Genau diese Mischung liess die
 *     erfundenen echt wirken. Nie wieder auffuellen: eine Kachel ohne Text
 *     behauptet nichts, eine Kachel mit erfundener Domain behauptet etwas
 *     Falsches.
 */

/** Kacheln in der Sources-Zeile. Nur belegte Domains werden beschriftet. */
const SOURCE_SLOTS = 3;

interface PerplexitySimulatorProps {
    promptText: string;
    answerText: string;
    condensed?: boolean;
    /**
     * When provided, the simulation runs once and restarts whenever this key
     * changes (used by the interactive demo to swap scenarios on click).
     * When omitted, the simulation loops on its own, matching the legacy behavior.
     */
    scenarioKey?: string;
    /**
     * Labels shown in the "Sources" row. Only real, verifiable domains whose
     * citation is documented in this repo belong here (client domains from
     * ProofStrip / the ledger on /ergebnisse). Fewer than three entries is the
     * normal case: the remaining slots render as unlabeled placeholders.
     * Omit the prop entirely to get three placeholders.
     */
    sources?: string[];
    /** Brand label shown as the highlighted, cited source. */
    citedSource?: string;
    /** Engine name shown in the header (e.g. "ChatGPT"). Defaults to "Perplexity". */
    engineLabel?: string;
    /** Engine icon shown in the header. Defaults to the Perplexity mark. */
    EngineIcon?: IconComponent;
    /**
     * Controlled play state. When set, the simulation only runs while `active`
     * is true and resets to idle when false (used by the scroll-driven Proof
     * cards so only the visible card types out). When omitted, behavior is
     * unchanged (loops, or runs once per scenarioKey).
     */
    active?: boolean;
}

export const PerplexitySimulator: React.FC<PerplexitySimulatorProps> = ({
    promptText,
    answerText,
    condensed = false,
    scenarioKey,
    sources,
    citedSource,
    engineLabel = "Perplexity",
    EngineIcon = PerplexityIcon,
    active,
}) => {
    const [step, setStep] = useState<'IDLE' | 'TYPING' | 'THINKING' | 'ANSWERING' | 'DONE'>('IDLE');
    const [prompt, setPrompt] = useState('');
    const [answer, setAnswer] = useState('');
    const [showSources, setShowSources] = useState(false);

    const controlled = active !== undefined;
    // Loop on its own when uncontrolled and no scenarioKey, or while a
    // controlled card is the active one.
    const shouldLoop = (!controlled && scenarioKey === undefined) || (controlled && active === true);

    // Reset and start whenever the scenario changes, the card becomes active,
    // or on first mount. A controlled card that is not active stays idle.
    useEffect(() => {
        setPrompt('');
        setAnswer('');
        setShowSources(false);
        setStep('IDLE');
        if (controlled && active === false) return;
        const timer = setTimeout(() => {
            setStep('TYPING');
        }, 700);
        return () => clearTimeout(timer);
    }, [scenarioKey, promptText, answerText, controlled, active]);

    useEffect(() => {
        if (step === 'TYPING') {
            if (prompt.length < promptText.length) {
                const timer = setTimeout(() => {
                    setPrompt(promptText.slice(0, prompt.length + 1));
                }, 40);
                return () => clearTimeout(timer);
            } else {
                const timer = setTimeout(() => setStep('THINKING'), 700);
                return () => clearTimeout(timer);
            }
        }

        if (step === 'THINKING') {
            const timer = setTimeout(() => {
                setShowSources(true);
                setStep('ANSWERING');
            }, 1100);
            return () => clearTimeout(timer);
        }

        if (step === 'ANSWERING') {
            if (answer.length < answerText.length) {
                const timer = setTimeout(() => {
                    setAnswer(answerText.slice(0, answer.length + 3));
                }, 20);
                return () => clearTimeout(timer);
            } else {
                setStep('DONE');
            }
        }

        if (step === 'DONE' && shouldLoop) {
            const timer = setTimeout(() => {
                setPrompt('');
                setAnswer('');
                setShowSources(false);
                setStep('IDLE');
                setTimeout(() => setStep('TYPING'), 1000);
            }, 6000);
            return () => clearTimeout(timer);
        }
    }, [step, prompt, answer, promptText, answerText, shouldLoop]);

    // Three slots, but only documented domains get a label. Free slots stay
    // blank instead of being padded with invented domains (see rule 3 above).
    const namedSources = (sources ?? []).filter((label) => label.trim().length > 0);
    const placeholderSlots = Math.max(0, SOURCE_SLOTS - namedSources.length);

    return (
        <div className={`w-full h-full bg-[#191A1A] text-white flex flex-col font-sans select-none overflow-hidden text-left ${condensed ? 'p-3' : 'p-4 lg:p-6'}`}>
            {/* Header */}
            <div className={`flex items-center gap-2 ${condensed ? 'mb-3' : 'mb-6'}`}>
                <EngineIcon className={`${condensed ? 'w-3 h-3' : 'w-4 h-4'} text-white/70`} />
                <span className={`${condensed ? 'text-[10px]' : 'text-xs'} font-medium tracking-tight whitespace-nowrap text-white/70`}>{engineLabel} Simulation</span>
            </div>

            {/* Prompt View */}
            <div className={condensed ? 'mb-3' : 'mb-6'}>
                <div className={`${condensed ? 'text-sm' : 'text-lg lg:text-xl'} font-medium leading-[1.3] text-white/90`}>
                    {prompt}
                    {step === 'TYPING' && <span className={`inline-block bg-white ml-0.5 animate-pulse ${condensed ? 'w-1 h-3.5' : 'w-1.5 h-5'}`} />}
                </div>
            </div>

            {/* Content Area */}
            <div className={`transition-all duration-700 flex flex-col ${condensed ? 'gap-3' : 'gap-6'} ${step === 'IDLE' || step === 'TYPING' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>

                {/* Sources */}
                {showSources && (
                    <div className={condensed ? 'space-y-1.5' : 'space-y-3'}>
                        <div className="flex items-center gap-2 text-white/70">
                            <svg className={condensed ? 'w-3 h-3' : 'w-3.5 h-3.5'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                            <span className={`${condensed ? 'text-[8px]' : 'text-[10px]'} uppercase font-bold tracking-widest`}>Sources</span>
                        </div>
                        <div className="flex gap-1.5 lg:gap-2">
                            {namedSources.map((label, i) => {
                                const isCited = citedSource && label === citedSource;
                                return (
                                    <div
                                        key={`${label}-${i}`}
                                        className={`rounded-lg p-1.5 lg:p-2 flex-1 min-w-0 animate-in fade-in slide-in-from-bottom-2 duration-500 border ${isCited ? 'bg-[#2ec88e]/15 border-[#2ec88e]/60' : 'bg-white/5 border-white/10'}`}
                                        style={{ animationDelay: `${i * 100}ms` }}
                                    >
                                        <span className={`block truncate ${condensed ? 'text-[8px]' : 'text-[9px] lg:text-[10px]'} font-medium ${isCited ? 'text-[#2ec88e]' : 'text-white/50'}`}>
                                            {label}
                                        </span>
                                    </div>
                                );
                            })}
                            {Array.from({ length: placeholderSlots }, (_, i) => (
                                <div
                                    key={`placeholder-${i}`}
                                    aria-hidden="true"
                                    className="bg-white/5 border border-white/10 rounded-lg p-1.5 lg:p-2 flex-1 animate-in fade-in slide-in-from-bottom-2 duration-500"
                                    style={{ animationDelay: `${(namedSources.length + i) * 100}ms` }}
                                >
                                    <div className={`w-full bg-white/20 rounded mb-1.5 lg:mb-2 ${condensed ? 'h-0.5 lg:h-1' : 'h-1'}`} />
                                    <div className={`w-2/3 bg-white/10 rounded ${condensed ? 'h-0.5 lg:h-1' : 'h-1'}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Answer */}
                <div className={condensed ? 'space-y-2' : 'space-y-3'}>
                    <div className="flex items-center gap-2 text-white/70">
                        <svg className={condensed ? 'w-3 h-3' : 'w-3.5 h-3.5'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                        </svg>
                        <span className={`${condensed ? 'text-[8px]' : 'text-[10px]'} uppercase font-bold tracking-widest`}>Answer</span>
                    </div>
                    <div className={`${condensed ? 'text-xs' : 'text-sm lg:text-base'} text-white/80 leading-relaxed font-light`}>
                        {answer.split('**').map((part, i) =>
                            i % 2 === 1 ? <strong key={i} className="text-[#2ec88e] font-semibold">{part}</strong> : part
                        )}
                        {step === 'ANSWERING' && <span className={`inline-block bg-white/30 ml-0.5 animate-pulse ${condensed ? 'w-1 h-3' : 'w-1.5 h-4'}`} />}
                    </div>
                </div>
            </div>

            {/* Thinking Overlay (shimmer) */}
            {step === 'THINKING' && (
                <div className={`${condensed ? 'mt-2' : 'mt-4'} flex flex-col ${condensed ? 'gap-2' : 'gap-4'}`}>
                    <div className={`w-3/4 bg-white/5 animate-pulse rounded ${condensed ? 'h-3' : 'h-4'}`} />
                    <div className={`w-1/2 bg-white/5 animate-pulse rounded ${condensed ? 'h-3' : 'h-4'}`} />
                    <div className={`w-2/3 bg-white/5 animate-pulse rounded ${condensed ? 'h-3' : 'h-4'}`} />
                </div>
            )}
        </div>
    );
};
