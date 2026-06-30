import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { OpenAIIcon, PerplexityIcon, GoogleIcon } from '@/components/ui/Icons';

const PROMPT = 'Was hältst du von der KI-Sichtbarkeits-Agentur aiseo.hamburg? Wofür ist sie bekannt?';
const Q = encodeURIComponent(PROMPT);

const ENGINES = [
    {
        label: 'In ChatGPT fragen',
        href: `https://chatgpt.com/?q=${Q}&hints=search`,
        Icon: OpenAIIcon,
    },
    {
        label: 'In Perplexity fragen',
        href: `https://www.perplexity.ai/search?q=${Q}`,
        Icon: PerplexityIcon,
    },
    {
        label: 'In Google AI fragen',
        href: `https://www.google.com/search?q=${Q}&udm=50`,
        Icon: GoogleIcon,
    },
];

export const AskAI: React.FC = () => (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <FadeIn>
            <div className="max-w-[900px] mx-auto rounded-3xl bg-brand-dark text-white p-8 md:p-12 lg:p-14 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-accent font-semibold mb-4">
                    Selbst testen, nicht glauben
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.04em] mb-5">
                    Frag die KI, was sie über uns sagt.
                </h2>
                <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
                    Ein Klick öffnet ChatGPT, Perplexity oder die Google-KI mit einer fertigen Frage über aiseo.hamburg. Genau solche vorbefüllten KI-Links bauen wir auch für deine Marke, damit Interessenten dich direkt in der KI entdecken.
                </p>

                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-8 max-w-full">
                    <span className="text-white/40 text-sm">›</span>
                    <span className="text-sm md:text-[15px] text-white/80 text-left leading-snug">„{PROMPT}"</span>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                    {ENGINES.map(({ label, href, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2.5 bg-white text-black rounded-full px-5 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
                        >
                            <Icon className="w-4 h-4" />
                            {label}
                        </a>
                    ))}
                </div>

                <p className="text-xs text-white/40 mt-6">Öffnet in einem neuen Tab.</p>
            </div>
        </FadeIn>
    </section>
);
