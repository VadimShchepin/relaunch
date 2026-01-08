import React from 'react';

interface TagProps {
    text: string;
}

export const Tag: React.FC<TagProps> = ({ text }) => (
    <div className="inline-block px-3 py-1 mb-6 bg-black/5 rounded-full">
        <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-gray-500">{text}</span>
    </div>
);

