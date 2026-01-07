import React from 'react';

interface TagProps {
    text: string;
}

export const Tag: React.FC<TagProps> = ({ text }) => (
    <div className="inline-block px-4 py-1.5 mb-8 border border-gray-200 bg-white/50 backdrop-blur-sm rounded-full shadow-sm">
        <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">{text}</span>
    </div>
);
