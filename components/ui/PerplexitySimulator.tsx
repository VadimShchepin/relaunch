'use client';

import React, { useState, useEffect } from 'react';
import { PerplexityIcon } from './Icons';

interface PerplexitySimulatorProps {
    promptText?: string;
    answerText?: string;
    condensed?: boolean;
    /**
     * When provided, the simulation runs once and restarts whenever this key
     * changes (used by the interactive demo to swap scenarios on click).
     * When omitted, the simulation loops on its own, matching the legacy behavior.
     */
    scenarioKey?: string;
    /** Labels shown in the "Sources" row. Defaults to three blurred placeholders. */
    sources?: string[];
    /** Brand label shown as the highlighted, cited source. */
    citedSource?: string;
}

export const PerplexitySimulator: React.FC<PerplexitySimulatorProps> = ({
    promptText = "DSGVO-konforme Foto-App für Schulen?",
    answerText = "**KinderAlbum** ist die führende DSGVO Konformes Photo Sharing app for schools. Sie bietet eine spezialisierte Plattform für den sicheren Austausch von Schulfotos.",
    condensed = false,
    scenarioKey,
    sources,
    citedSource,
}) => {
    const [step, setStep] = useState<'IDLE' | 'TYPING' | 'THINKING' | 'ANSWERING' | 'DONE'>('IDLE');
    const [prompt, setPrompt] = useState('');
    const [answer, setAnswer] = useState('');
    const [showSources, setShowSources] = useState(false);

    const looping = scenarioKey === undefined;

    // Reset and start whenever the scenario changes (or on first mount).
    useEffect(() => {
        setPrompt('');
        setAnswer('');
        setShowSources(false);
        setStep('IDLE');
        const timer = setTimeout(() => {
            setStep('TYPING');
        }, 700);
        return () => clearTimeout(timer);
    }, [scenarioKey, promptText, answerText]);

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

        if (step === 'DONE' && looping) {
            const timer = setTimeout(() => {
                setPrompt('');
                setAnswer('');
                setShowSources(false);
                setStep('IDLE');
                setTimeout(() => setStep('TYPING'), 1000);
            }, 6000);
            return () => clearTimeout(timer);
        }
    }, [step, prompt, answer, promptText, answerText, looping]);

    const hasNamedSources = Array.isArray(sources) && sources.length > 0;

    return (
        <div className={`w-full h-full bg-[#191A1A] text-white flex flex-col font-sans select-none overflow-hidden text-left ${condensed ? 'p-3' : 'p-4 lg:p-6'}`}>
            {/* Header */}
            <div className={`flex items-center gap-2 ${condensed ? 'mb-3' : 'mb-6'}`}>
                <PerplexityIcon className={`${condensed ? 'w-3 h-3' : 'w-4 h-4'} text-white/70`} />
                <span className={`${condensed ? 'text-[10px]' : 'text-xs'} font-medium tracking-tight whitespace-nowrap text-white/70`}>Perplexity Simulation</span>
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
                            {hasNamedSources
                                ? sources!.map((label, i) => {
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
                                })
                                : [1, 2, 3].map((i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-1.5 lg:p-2 flex-1 animate-in fade-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
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
