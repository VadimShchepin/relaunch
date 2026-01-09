import React from 'react';

interface ButtonProps {
    text?: string;
    onClick?: () => void;
    primary?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, primary = false, className = "", children }) => (
    <button
        onClick={onClick}
        className={`
      relative px-8 py-4 rounded-full text-base font-medium transition-all duration-500 inline-flex items-center gap-2 overflow-hidden group
      ${primary
                ? 'bg-[#111111] text-white border border-brand-accent/30 hover:border-brand-accent shadow-[0_0_20px_rgba(79,175,140,0.25)] hover:shadow-[0_0_35px_rgba(79,175,140,0.4)] hover:scale-[1.03]'
                : 'bg-transparent border border-gray-200 text-brand-text hover:bg-gray-50'}
      ${className}
    `}
    >
        {/* Growing Circle Background Effect - Starts from the Icon */}
        {primary && (
            <span className="absolute right-12 top-1/2 -translate-y-1/2 translate-x-1/2 w-[500%] aspect-square bg-brand-accent rounded-full scale-0 transition-transform duration-1000 ease-out group-hover:scale-100 origin-center" />
        )}

        <span className="relative z-10 flex items-center gap-2">
            {text}
            {children}
            {primary && !children && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
            )}
        </span>
    </button>
);

