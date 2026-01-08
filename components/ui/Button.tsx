import React from 'react';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    primary?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, primary = false, className = "" }) => (
    <button
        onClick={onClick}
        className={`
      relative px-8 py-4 rounded-full text-base font-medium transition-all duration-300 inline-flex items-center gap-2
      ${primary
                ? 'bg-[#111111] text-white hover:bg-black shadow-sm'
                : 'bg-transparent border border-gray-200 text-brand-text hover:bg-gray-50'}
      ${className}
    `}
    >
        {text}
        {primary && (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
        )}
    </button>
);

