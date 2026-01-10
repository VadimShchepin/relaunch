import React from 'react';

interface TagProps {
    text: string;
    className?: string;
}

export const Tag: React.FC<TagProps> = ({ text, className = "" }) => (
    <div className={`inline-block px-3 py-1 bg-black/5 rounded-full ${className}`}>
        <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-gray-500">{text}</span>
    </div>
);

