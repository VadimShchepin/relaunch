'use client';

import React, { useState, useEffect } from 'react';
import { OpenAIIcon, PerplexityIcon, GoogleIcon } from './Icons';

interface Referrer {
    name: string;
    domain: string;
    vistors: number;
    percentage: number;
    icon: React.ReactNode;
}

export const ReferralSimulator: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    const referrers: Referrer[] = [
        {
            name: 'ChatGPT',
            domain: 'chatgpt.com',
            vistors: 142,
            percentage: 42,
            icon: <OpenAIIcon className="w-4 h-4 text-black/70" />
        },
        {
            name: 'Perplexity',
            domain: 'perplexity.ai',
            vistors: 89,
            percentage: 26,
            icon: <PerplexityIcon className="w-4 h-4 text-black/70" />
        },
        {
            name: 'Gemini',
            domain: 'gemini.google.com',
            vistors: 64,
            percentage: 19,
            icon: <GoogleIcon className="w-4 h-4 text-[#4285F4]" />
        },
        {
            name: 'Google',
            domain: 'google.com',
            vistors: 31,
            percentage: 9,
            icon: <GoogleIcon className="w-4 h-4 text-[#FBBC05]" />
        },
        {
            name: 'Andere',
            domain: 'others',
            vistors: 14,
            percentage: 4,
            icon: <div className="w-4 h-4 rounded-full bg-gray-200" />
        },
    ];

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="w-full h-full bg-white p-4 lg:p-6 flex flex-col font-sans select-none overflow-hidden text-left">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Referrers</span>
                    <h3 className="text-sm font-semibold text-gray-900">Traffic Sources</h3>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Visitors</span>
                    <h3 className="text-sm font-semibold text-gray-900">Total: 340</h3>
                </div>
            </div>

            {/* List */}
            <div className="flex-1 flex flex-col gap-4">
                {referrers.map((ref, i) => (
                    <div key={ref.domain} className="group relative">
                        <div className="flex justify-between items-center mb-1 relative z-10">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-gray-50 rounded-md">
                                    {ref.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-semibold text-gray-900 leading-none mb-0.5">{ref.domain}</span>
                                    <div className="flex items-center gap-1.5">
                                        {i < 3 && (
                                            <span className="text-[8px] px-1 bg-green-100 text-green-700 rounded font-bold uppercase tracking-tighter">AI Source</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-gray-900">{ref.vistors}</span>
                                <span className="text-[10px] font-medium text-gray-400 w-8 text-right">{ref.percentage}%</span>
                            </div>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="h-4 w-full bg-gray-50 rounded-sm overflow-hidden relative">
                            {/* The "Umami" style light blue bar */}
                            <div
                                className="h-full bg-[#017eff]/10 transition-all duration-1000 ease-out absolute left-0 top-0"
                                style={{
                                    width: isMounted ? `${ref.percentage}%` : '0%',
                                    transitionDelay: `${i * 100}ms`
                                }}
                            />
                            {/* Subtle dark indicator at the end */}
                            <div
                                className="h-full w-0.5 bg-[#017eff]/40 transition-all duration-1000 ease-out absolute top-0"
                                style={{
                                    left: isMounted ? `${ref.percentage}%` : '0%',
                                    transitionDelay: `${i * 100}ms`
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-[10px] text-gray-400 font-medium italic">Live update simulation active</span>
                <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[9px] font-bold text-green-600 uppercase tracking-tight">Real-time</span>
                </div>
            </div>
        </div>
    );
};
