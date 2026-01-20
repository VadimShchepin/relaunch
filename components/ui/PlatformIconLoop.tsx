'use client';

import React, { useState, useEffect } from 'react';
import { OpenAIIcon, PerplexityIcon, GoogleIcon } from '@/components/ui/Icons';

const ICONS = [
    { Component: OpenAIIcon, key: 'openai' },
    { Component: PerplexityIcon, key: 'perplexity' },
    { Component: GoogleIcon, key: 'google' }
];

interface PlatformIconLoopProps {
    className?: string;
    iconClassName?: string;
}

export const PlatformIconLoop: React.FC<PlatformIconLoopProps> = ({
    className = "bg-white/10 w-7 h-7 rounded-full shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 shrink-0",
    iconClassName = "text-xs text-white"
}) => {
    const [iconIndex, setIconIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIconIndex((prev) => (prev + 1) % ICONS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`flex items-center justify-center overflow-hidden relative ${className}`}>
            {ICONS.map(({ Component, key }, idx) => (
                <div
                    key={key}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${idx === iconIndex
                        ? 'opacity-100 scale-100 rotate-0'
                        : 'opacity-0 scale-50 rotate-90'
                        }`}
                >
                    <Component className={iconClassName} />
                </div>
            ))}
        </div>
    );
};
