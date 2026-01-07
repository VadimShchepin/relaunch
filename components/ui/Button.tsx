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
      relative px-8 py-5 rounded-full text-base font-medium transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-3
      ${primary
                ? 'bg-brand-accent text-white shadow-xl shadow-brand-accent/20 hover:bg-[#439678]'
                : 'bg-black text-white hover:bg-gray-800'}
      ${className}
    `}
    >
        {text}
        {primary && (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
        )}
    </button>
);
