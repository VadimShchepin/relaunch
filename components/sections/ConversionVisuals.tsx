import React from 'react';

/**
 * Branded, abstract/schematic SVG illustrations for the conversion pages.
 * No fake product UI: these are clearly diagrammatic (charts, flows, concept maps)
 * meant to break up text-heavy sections and visualise the core ideas.
 *
 * Palette mirrors the design system:
 *   accent  #4FAF8C   accent-dark #2d8a65
 *   text    #111111   muted #6b7280   line #E5E7EB   surface #FFFFFF
 */

const C = {
  accent: '#4FAF8C',
  accentDark: '#2d8a65',
  accentSoft: '#E4F2EC',
  text: '#111111',
  muted: '#6B7280',
  faint: '#9CA3AF',
  line: '#E5E7EB',
  surface: '#FFFFFF',
};

type VisualProps = { className?: string; title?: string };

const svgBase = {
  width: '100%',
  height: 'auto',
  display: 'block',
  fontFamily: 'inherit',
} as const;

/* ------------------------------------------------------------------ */
/* 1. How AI selects its sources (core promise, fully schematic)        */
/* ------------------------------------------------------------------ */
export const SourceSelectionVisual: React.FC<VisualProps> = ({ className }) => (
  <svg viewBox="0 0 460 320" role="img" aria-label="Schema: Wie KI eine Quelle auswählt und deine Marke zitiert" style={svgBase} className={className}>
    <rect x="0.5" y="0.5" width="459" height="319" rx="16" fill={C.surface} stroke={C.line} />
    <text x="24" y="34" fontSize="12" fontWeight="700" letterSpacing="1.5" fill={C.faint}>SO WÄHLT KI IHRE QUELLEN</text>

    {/* Query node */}
    <rect x="24" y="120" width="118" height="64" rx="12" fill={C.accentSoft} />
    <text x="40" y="148" fontSize="12" fill={C.accentDark} fontWeight="700">Nutzerfrage</text>
    <text x="40" y="166" fontSize="11" fill={C.muted}>„Wer ist gut für …?“</text>

    {/* connector query -> AI */}
    <path d="M142 152 H188" stroke={C.faint} strokeWidth="2" fill="none" markerEnd="url(#csArrow)" />

    {/* AI hub */}
    <circle cx="232" cy="152" r="38" fill={C.text} />
    <text x="232" y="150" fontSize="14" fontWeight="700" fill="#fff" textAnchor="middle">KI</text>
    <text x="232" y="166" fontSize="9" fill="#cbd5e1" textAnchor="middle">wählt 2–5</text>

    {/* connectors AI -> sources */}
    <path d="M270 138 C300 120 312 96 332 96" stroke={C.accent} strokeWidth="2.5" fill="none" />
    <path d="M270 152 H332" stroke={C.faint} strokeWidth="2" fill="none" />
    <path d="M270 166 C300 184 312 208 332 208" stroke={C.faint} strokeWidth="2" fill="none" />
    <path d="M268 172 C296 210 300 250 332 256" stroke={C.line} strokeWidth="2" fill="none" />

    {/* Source rows */}
    {/* #1 highlighted = your brand */}
    <rect x="332" y="74" width="104" height="44" rx="10" fill={C.accentSoft} stroke={C.accent} strokeWidth="1.5" />
    <circle cx="350" cy="96" r="9" fill={C.accent} />
    <path d="M346 96 l3 3 l5 -6" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <text x="366" y="93" fontSize="11" fontWeight="700" fill={C.text}>Deine Marke</text>
    <text x="366" y="107" fontSize="9.5" fill={C.accentDark}>zitiert ·  Quelle 1</text>

    <rect x="332" y="130" width="104" height="36" rx="10" fill="#fff" stroke={C.line} />
    <rect x="346" y="142" width="64" height="5" rx="2.5" fill={C.line} />
    <rect x="346" y="152" width="44" height="5" rx="2.5" fill={C.line} />

    <rect x="332" y="178" width="104" height="36" rx="10" fill="#fff" stroke={C.line} />
    <rect x="346" y="190" width="64" height="5" rx="2.5" fill={C.line} />
    <rect x="346" y="200" width="40" height="5" rx="2.5" fill={C.line} />

    <rect x="332" y="234" width="104" height="36" rx="10" fill="#fff" stroke={C.line} opacity="0.7" />
    <rect x="346" y="246" width="58" height="5" rx="2.5" fill={C.line} />
    <rect x="346" y="256" width="36" height="5" rx="2.5" fill={C.line} />

    <text x="24" y="300" fontSize="10.5" fill={C.faint}>Schematische Darstellung. Ziel: Quelle 1 statt unsichtbar.</text>

    <defs>
      <marker id="csArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 z" fill={C.faint} />
      </marker>
    </defs>
  </svg>
);

/* ------------------------------------------------------------------ */
/* 2. Citation growth chart (matches the documented 0 -> 800 ramp)      */
/* ------------------------------------------------------------------ */
export const CitationGrowthVisual: React.FC<VisualProps> = ({ className, title = 'KI-ZITATE PRO MONAT' }) => (
  <svg viewBox="0 0 460 300" role="img" aria-label="Diagramm: KI-Zitate steigen über drei Monate von nahe null auf rund 800" style={svgBase} className={className}>
    <rect x="0.5" y="0.5" width="459" height="299" rx="16" fill={C.surface} stroke={C.line} />
    <text x="24" y="34" fontSize="12" fontWeight="700" letterSpacing="1.5" fill={C.faint}>{title}</text>

    {/* gridlines + y labels */}
    <line x1="60" y1="60" x2="430" y2="60" stroke={C.line} strokeWidth="1" />
    <line x1="60" y1="150" x2="430" y2="150" stroke={C.line} strokeWidth="1" />
    <line x1="60" y1="240" x2="430" y2="240" stroke={C.line} strokeWidth="1" />
    <text x="50" y="64" fontSize="10" fill={C.faint} textAnchor="end">800</text>
    <text x="50" y="154" fontSize="10" fill={C.faint} textAnchor="end">400</text>
    <text x="50" y="244" fontSize="10" fill={C.faint} textAnchor="end">0</text>

    {/* area + line: 0,40,110,250,470,800 over 6 points */}
    <defs>
      <linearGradient id="cgFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={C.accent} stopOpacity="0.32" />
        <stop offset="100%" stopColor={C.accent} stopOpacity="0.02" />
      </linearGradient>
    </defs>
    <path d="M75 240 L142 231 L209 215 L276 184 L343 134 L410 60 L410 240 L75 240 Z" fill="url(#cgFill)" />
    <path d="M75 240 L142 231 L209 215 L276 184 L343 134 L410 60" fill="none" stroke={C.accentDark} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

    {/* peak marker */}
    <circle cx="410" cy="60" r="5.5" fill={C.accentDark} stroke="#fff" strokeWidth="2" />
    <rect x="360" y="30" width="74" height="24" rx="12" fill={C.text} />
    <text x="397" y="46" fontSize="12" fontWeight="700" fill="#fff" textAnchor="middle">≈ 800</text>

    {/* x labels */}
    {['M1', 'M2', 'M3', 'M4', 'M5', 'M6'].map((m, i) => (
      <text key={m} x={75 + i * 67} y="262" fontSize="10" fill={C.faint} textAnchor="middle">{m}</text>
    ))}
    <text x="24" y="288" fontSize="10.5" fill={C.faint}>Verlauf startet nahe null und steigt nach Projektbeginn.</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* 3. Three-step process flow                                          */
/* ------------------------------------------------------------------ */
const STEPS = [
  { n: '1', t: 'Analysieren', s: 'KI-Status & Lücken' },
  { n: '2', t: 'Optimieren', s: 'Struktur · Inhalt · Autorität' },
  { n: '3', t: 'Zitiert werden', s: 'belegt mit Prompt-Tests' },
];
export const ProcessFlowVisual: React.FC<VisualProps> = ({ className }) => (
  <svg viewBox="0 0 460 170" role="img" aria-label="Ablauf in drei Schritten: analysieren, optimieren, zitiert werden" style={svgBase} className={className}>
    {STEPS.map((step, i) => {
      const x = 14 + i * 150;
      const last = i === STEPS.length - 1;
      return (
        <g key={step.n}>
          <rect x={x} y="40" width="128" height="90" rx="14" fill={last ? C.accentSoft : C.surface} stroke={last ? C.accent : C.line} strokeWidth={last ? 1.5 : 1} />
          <circle cx={x + 26} cy="68" r="14" fill={last ? C.accent : C.text} />
          <text x={x + 26} y="73" fontSize="13" fontWeight="700" fill="#fff" textAnchor="middle">{step.n}</text>
          <text x={x + 16} y="102" fontSize="13" fontWeight="700" fill={C.text}>{step.t}</text>
          <text x={x + 16} y="119" fontSize="10.5" fill={C.muted}>{step.s}</text>
          {!last && (
            <path d={`M${x + 128} 85 H${x + 150}`} stroke={C.faint} strokeWidth="2" fill="none" markerEnd="url(#pfArrow)" />
          )}
        </g>
      );
    })}
    <defs>
      <marker id="pfArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 z" fill={C.faint} />
      </marker>
    </defs>
  </svg>
);

/* ------------------------------------------------------------------ */
/* 4. Visibility comparison (schematic, no fabricated numbers)          */
/* ------------------------------------------------------------------ */
const BARS = [
  { label: 'Deine Marke', w: 268, you: true },
  { label: 'Wettbewerb A', w: 176, you: false },
  { label: 'Wettbewerb B', w: 112, you: false },
  { label: 'Wettbewerb C', w: 64, you: false },
];
export const VisibilityCompareVisual: React.FC<VisualProps> = ({ className }) => (
  <svg viewBox="0 0 460 250" role="img" aria-label="Schematischer Vergleich der Sichtbarkeit in KI-Antworten" style={svgBase} className={className}>
    <rect x="0.5" y="0.5" width="459" height="249" rx="16" fill={C.surface} stroke={C.line} />
    <text x="24" y="34" fontSize="12" fontWeight="700" letterSpacing="1.5" fill={C.faint}>SICHTBARKEIT IN KI-ANTWORTEN</text>
    {BARS.map((bar, i) => {
      const y = 64 + i * 42;
      return (
        <g key={bar.label}>
          <text x="24" y={y + 15} fontSize="11.5" fontWeight={bar.you ? 700 : 400} fill={bar.you ? C.text : C.muted}>{bar.label}</text>
          <rect x="150" y={y} width="286" height="22" rx="11" fill="#F3F4F6" />
          <rect x="150" y={y} width={bar.w} height="22" rx="11" fill={bar.you ? C.accent : '#D1D5DB'} />
        </g>
      );
    })}
    <text x="24" y="238" fontSize="10.5" fill={C.faint}>Schematisch. Wer fehlt, wird nicht verglichen, sondern übersehen.</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* 5. Multi-platform reach (concept map, label-only, no logos)          */
/* ------------------------------------------------------------------ */
const NODES = [
  { label: 'ChatGPT', x: 230, y: 44 },
  { label: 'Perplexity', x: 396, y: 110 },
  { label: 'Gemini', x: 360, y: 232 },
  { label: 'Claude', x: 100, y: 232 },
  { label: 'Google AI', x: 64, y: 110 },
];
export const PlatformReachVisual: React.FC<VisualProps> = ({ className }) => (
  <svg viewBox="0 0 460 290" role="img" aria-label="Konzept: eine Marke, sichtbar über alle großen KI-Plattformen" style={svgBase} className={className}>
    {NODES.map((node) => (
      <line key={`l-${node.label}`} x1="230" y1="150" x2={node.x} y2={node.y} stroke={C.line} strokeWidth="2" />
    ))}
    {NODES.map((node) => (
      <g key={node.label}>
        <rect x={node.x - 46} y={node.y - 16} width="92" height="32" rx="16" fill={C.surface} stroke={C.line} />
        <text x={node.x} y={node.y + 4} fontSize="11" fontWeight="600" fill={C.muted} textAnchor="middle">{node.label}</text>
      </g>
    ))}
    <circle cx="230" cy="150" r="44" fill={C.accent} />
    <circle cx="230" cy="150" r="44" fill="none" stroke={C.accentDark} strokeWidth="1" />
    <text x="230" y="146" fontSize="12" fontWeight="700" fill="#fff" textAnchor="middle">Deine</text>
    <text x="230" y="162" fontSize="12" fontWeight="700" fill="#fff" textAnchor="middle">Marke</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* 6. Three pillars (Struktur / Autorität / Präsenz)                    */
/* ------------------------------------------------------------------ */
const PILLARS = [
  { label: 'Struktur', h: 96, sub: 'Schema · Crawlbarkeit' },
  { label: 'Autorität', h: 132, sub: 'Nennungen · Konsistenz' },
  { label: 'Präsenz', h: 116, sub: 'Antworten · Zitate' },
];
export const PillarsVisual: React.FC<VisualProps> = ({ className }) => (
  <svg viewBox="0 0 460 240" role="img" aria-label="Drei Säulen der KI-Sichtbarkeit: Struktur, Autorität, Präsenz" style={svgBase} className={className}>
    <text x="24" y="30" fontSize="12" fontWeight="700" letterSpacing="1.5" fill={C.faint}>DREI SÄULEN DER KI-SICHTBARKEIT</text>
    <line x1="24" y1="196" x2="436" y2="196" stroke={C.line} strokeWidth="1.5" />
    {PILLARS.map((pillar, i) => {
      const x = 56 + i * 132;
      const y = 196 - pillar.h;
      return (
        <g key={pillar.label}>
          <rect x={x} y={y} width="92" height={pillar.h} rx="10" fill={i === 1 ? C.accent : C.accentSoft} stroke={i === 1 ? C.accentDark : C.accent} strokeWidth="1" />
          <text x={x + 46} y={y - 10} fontSize="12.5" fontWeight="700" fill={C.text} textAnchor="middle">{pillar.label}</text>
          <text x={x + 46} y="214" fontSize="10" fill={C.muted} textAnchor="middle">{pillar.sub}</text>
        </g>
      );
    })}
  </svg>
);
