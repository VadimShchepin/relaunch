import React from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowRightIcon, OpenAIIcon, PerplexityIcon, GoogleIcon } from '@/components/ui/Icons';

type IconComponent = React.FC<{ className?: string }>;

interface Project {
    name: string;
    href: string;
    logo: string | null;
    engine: string;
    Icon: IconComponent;
    result: string;
    metric?: { value: string; label: string };
}

const PROJECTS: Project[] = [
    {
        name: 'dsgvoschulfotos.de',
        href: 'https://dsgvoschulfotos.de',
        logo: null,
        engine: 'ChatGPT, Perplexity & Co.',
        Icon: PerplexityIcon,
        result: 'Offizielle Nr. 1 der Nische in Europa, in jedem großen LLM regelmäßig zitiert.',
        metric: { value: 'Nr. 1', label: 'in Europa, alle LLMs' },
    },
    {
        name: 'aiseo.hamburg',
        href: 'https://aiseo.hamburg',
        logo: null,
        engine: 'Copilot & Partner',
        Icon: OpenAIIcon,
        result: 'Frische Domain, in nur 3 Monaten von null auf messbare KI-Präsenz aufgebaut.',
        metric: { value: '919', label: 'KI-Zitate in 3 Monaten' },
    },
    {
        name: 'DYBEAUTY',
        href: 'https://dybeauty.de',
        logo: null,
        engine: 'ChatGPT',
        Icon: OpenAIIcon,
        result: 'Beste Verkaufsmonate in Folge, plus rund 1.000 zusätzliche Klicks pro Monat.',
        metric: { value: '+108,9%', label: 'aktive Nutzer' },
    },
    {
        name: 'Blitz Hamburg',
        href: 'https://blitz-hamburg.de',
        logo: '/image/proof/blitz-logo.webp',
        engine: 'ChatGPT',
        Icon: OpenAIIcon,
        result: 'Sichtbar in ChatGPT, in einer Nische mit offiziell null KI-Traffic.',
        metric: { value: '154', label: 'KI-Zitate in 30 Tagen' },
    },
    {
        name: 'GL-Sommer',
        href: 'https://gl-sommer.de',
        logo: '/image/proof/gl-sommer-logo.webp',
        engine: 'Google Ads',
        Icon: GoogleIcon,
        result: '603 Anfragen aus 4.511 € Google-Ads-Budget, 6. April bis 3. August 2026. Eine Conversion ist hier eine Anfrage über Formular oder Anruf.',
        metric: { value: '7,48 €', label: 'pro Anfrage, Google Ads' },
    },
    {
        name: 'KinderAlbum',
        href: 'https://kinderalbum.com',
        logo: '/image/proof/KinderAlbum-logo.webp',
        engine: 'Perplexity',
        Icon: PerplexityIcon,
        result: 'In Perplexity und ChatGPT als DSGVO-Foto-Plattform für Schulen empfohlen.',
    },
    {
        name: 'Solovei Beauty',
        // solovei.de ist geparkt (301 auf notavailable.goneo.de). Die Seite der
        // Kundin laeuft auf solovei-beauty.com, so steht sie auch in
        // app/ai-sichtbarkeit.
        href: 'https://www.solovei-beauty.com/de',
        logo: '/image/proof/solovei-logo.avif',
        engine: 'ChatGPT',
        Icon: OpenAIIcon,
        result: 'In ChatGPT als lokale Beauty-Expertin in Hamburg sichtbar gemacht.',
    },
];

const Card: React.FC<{ p: Project; ariaHidden?: boolean }> = ({ p, ariaHidden }) => (
    <a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-hidden={ariaHidden}
        tabIndex={ariaHidden ? -1 : undefined}
        className="mr-5 shrink-0 w-[280px] sm:w-[320px] bg-white rounded-2xl p-6 md:p-7 border border-gray-100 flex flex-col hover:border-brand-accent hover:shadow-lg transition-all"
    >
        <div className="flex items-center justify-between gap-3 mb-5">
            {p.logo ? (
                <div className="relative h-7 w-24">
                    <Image src={p.logo} alt={p.name} fill className="object-contain object-left" />
                </div>
            ) : (
                <span className="text-base font-bold tracking-tight text-brand-text truncate">{p.name}</span>
            )}
            <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100 flex-shrink-0">
                <p.Icon className="w-3.5 h-3.5 text-gray-700" />
                <span className="text-[11px] font-semibold text-gray-600 whitespace-nowrap">{p.engine}</span>
            </div>
        </div>

        <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed flex-1">{p.result}</p>

        {p.metric ? (
            <div className="mt-5 pt-5 border-t border-gray-100">
                <div className="text-2xl md:text-3xl font-bold text-black tracking-tight">{p.metric.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{p.metric.label}</div>
            </div>
        ) : (
            <div className="mt-5 pt-5 border-t border-gray-100">
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-accent">
                    Website ansehen
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                </span>
            </div>
        )}
    </a>
);

export const ProofStrip: React.FC = () => (
    <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto">
            <FadeIn>
                <div className="mb-8 md:mb-10">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-accent font-semibold mb-4">
                        Echte Projekte, echte Daten
                    </p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.04em] text-black">
                        Marken, die KI heute schon empfiehlt.
                    </h2>
                </div>
            </FadeIn>
        </div>

        {/* Continuous marquee. Pauses on hover so cards stay clickable. */}
        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]">
                {PROJECTS.map((p) => (
                    <Card key={p.name} p={p} />
                ))}
                {PROJECTS.map((p) => (
                    <Card key={`${p.name}-dup`} p={p} ariaHidden />
                ))}
            </div>
        </div>

        <div className="px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto">
            <FadeIn>
                <p className="mt-8 text-sm text-gray-500 max-w-2xl leading-relaxed">
                    Zu den Anfragekosten eine Einordnung, damit die 7,48&nbsp;&euro; nicht als Versprechen gelesen werden: Im
                    gleichen Zeitraum lag ein zweites Google-Ads-Konto bei 71,37&nbsp;&euro; pro Anfrage, bei fast identischem
                    Budget. Der Unterschied liegt an Branche, Wettbewerb und Angebot, nicht an der Kampagnenarbeit. Was bei
                    dir realistisch ist, lässt sich erst nach einem Blick auf deinen Markt sagen.
                </p>
                <div className="mt-8">
                    <a
                        href="/ergebnisse"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:gap-3 transition-all group"
                    >
                        Alle Ergebnisse mit echten KI-Antworten ansehen
                        <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                </div>
            </FadeIn>
        </div>
    </section>
);
