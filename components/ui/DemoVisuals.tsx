import React from 'react';

interface VisualProps {
    className?: string;
}

/**
 * "Frage -> KI -> Quellen" flow. The visitor's question flows into an AI engine,
 * which picks a small set of sources. One of them, the brand, is highlighted.
 */
export const QueryFlowVisual: React.FC<VisualProps> = ({ className = '' }) => (
    <svg
        viewBox="0 0 520 220"
        className={className}
        role="img"
        aria-label="Eine Frage fließt in ein KI-System, das wenige Quellen auswählt. Deine Marke ist die hervorgehobene Quelle."
        fill="none"
    >
        {/* connectors */}
        <path d="M150 110 H205" stroke="#D8D2CC" strokeWidth="2" />
        <path d="M315 110 C345 110 345 56 372 56" stroke="#D8D2CC" strokeWidth="2" />
        <path d="M315 110 H372" stroke="#4FAF8C" strokeWidth="2.5" />
        <path d="M315 110 C345 110 345 164 372 164" stroke="#D8D2CC" strokeWidth="2" />

        {/* query bubble */}
        <rect x="14" y="84" width="136" height="52" rx="14" fill="#1C1917" />
        <text x="32" y="108" fill="#fff" fontSize="13" fontFamily="inherit" fontWeight="600">Wer macht das</text>
        <text x="32" y="125" fill="#9CA3AF" fontSize="13" fontFamily="inherit">gut in Hamburg?</text>

        {/* AI engine */}
        <circle cx="260" cy="110" r="46" fill="#fff" stroke="#1C1917" strokeWidth="2" />
        <circle cx="260" cy="110" r="46" fill="#4FAF8C" fillOpacity="0.06" />
        <text x="260" y="107" fill="#1C1917" fontSize="13" fontFamily="inherit" fontWeight="700" textAnchor="middle">KI</text>
        <text x="260" y="124" fill="#6B7280" fontSize="10" fontFamily="inherit" textAnchor="middle">wählt aus</text>

        {/* generic source top */}
        <rect x="372" y="38" width="134" height="36" rx="10" fill="#F1EEEA" stroke="#E2DCD5" strokeWidth="1.5" />
        <circle cx="392" cy="56" r="5" fill="#C9C2BA" />
        <rect x="404" y="50" width="70" height="5" rx="2.5" fill="#C9C2BA" />
        <rect x="404" y="60" width="48" height="5" rx="2.5" fill="#DBD5CE" />

        {/* brand source (highlighted) */}
        <rect x="372" y="92" width="134" height="36" rx="10" fill="#fff" stroke="#4FAF8C" strokeWidth="2.5" />
        <circle cx="392" cy="110" r="5" fill="#4FAF8C" />
        <text x="404" y="108" fill="#1C1917" fontSize="12" fontFamily="inherit" fontWeight="700">Deine Marke</text>
        <text x="404" y="121" fill="#4FAF8C" fontSize="9" fontFamily="inherit" fontWeight="600">zitiert</text>

        {/* generic source bottom */}
        <rect x="372" y="146" width="134" height="36" rx="10" fill="#F1EEEA" stroke="#E2DCD5" strokeWidth="1.5" />
        <circle cx="392" cy="164" r="5" fill="#C9C2BA" />
        <rect x="404" y="158" width="70" height="5" rx="2.5" fill="#C9C2BA" />
        <rect x="404" y="168" width="48" height="5" rx="2.5" fill="#DBD5CE" />
    </svg>
);

/**
 * Before/after schematic: same question, two answers. Left without the brand
 * (generic), right with the brand as the named source.
 */
export const BeforeAfterVisual: React.FC<VisualProps> = ({ className = '' }) => (
    <svg
        viewBox="0 0 520 240"
        className={className}
        role="img"
        aria-label="Vorher: die KI-Antwort nennt nur generische Anbieter. Nachher: deine Marke ist die genannte Quelle."
        fill="none"
    >
        {/* Before card */}
        <rect x="8" y="20" width="232" height="200" rx="16" fill="#fff" stroke="#E2DCD5" strokeWidth="1.5" />
        <text x="28" y="48" fill="#9CA3AF" fontSize="11" fontFamily="inherit" fontWeight="700" letterSpacing="1.5">OHNE UNS</text>
        <rect x="28" y="62" width="150" height="7" rx="3.5" fill="#E2DCD5" />
        <rect x="28" y="80" width="184" height="7" rx="3.5" fill="#E2DCD5" />
        <rect x="28" y="98" width="120" height="7" rx="3.5" fill="#E2DCD5" />
        {/* generic chips */}
        <rect x="28" y="128" width="80" height="26" rx="8" fill="#F1EEEA" />
        <text x="68" y="145" fill="#9CA3AF" fontSize="11" fontFamily="inherit" textAnchor="middle">Anbieter A</text>
        <rect x="118" y="128" width="80" height="26" rx="8" fill="#F1EEEA" />
        <text x="158" y="145" fill="#9CA3AF" fontSize="11" fontFamily="inherit" textAnchor="middle">Anbieter B</text>
        <text x="28" y="190" fill="#B0A89F" fontSize="11" fontFamily="inherit">Deine Marke fehlt.</text>

        {/* Arrow */}
        <circle cx="260" cy="120" r="20" fill="#1C1917" />
        <path d="M252 120 H266 m-5 -5 5 5 -5 5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

        {/* After card */}
        <rect x="280" y="20" width="232" height="200" rx="16" fill="#fff" stroke="#4FAF8C" strokeWidth="2.5" />
        <text x="300" y="48" fill="#4FAF8C" fontSize="11" fontFamily="inherit" fontWeight="700" letterSpacing="1.5">MIT UNS</text>
        <rect x="300" y="62" width="150" height="7" rx="3.5" fill="#D8D2CC" />
        <rect x="300" y="80" width="184" height="7" rx="3.5" fill="#D8D2CC" />
        <rect x="300" y="98" width="120" height="7" rx="3.5" fill="#D8D2CC" />
        {/* brand chip highlighted */}
        <rect x="300" y="128" width="120" height="26" rx="8" fill="#4FAF8C" />
        <text x="360" y="145" fill="#fff" fontSize="11" fontFamily="inherit" fontWeight="700" textAnchor="middle">Deine Marke</text>
        <rect x="430" y="128" width="56" height="26" rx="8" fill="#F1EEEA" />
        <text x="458" y="145" fill="#9CA3AF" fontSize="11" fontFamily="inherit" textAnchor="middle">u.a.</text>
        <text x="300" y="190" fill="#4FAF8C" fontSize="11" fontFamily="inherit" fontWeight="600">Genannt und zitiert.</text>
    </svg>
);
