'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { CheckIcon, ArrowRightIcon } from '@/components/ui/Icons';
import { Tag } from '@/components/ui/Tag';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { AntigravityBackground } from '@/components/ui/AntigravityBackground';
import { PlatformIconLoop } from '@/components/ui/PlatformIconLoop';

// Inline SVG icons
const LightbulbIcon = ({ className = 'w-7 h-7' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const SparklesIcon = ({ className = 'w-7 h-7' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const BrainIcon = ({ className = 'w-7 h-7' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5m-4.75-11.396c.251.023.501.05.75.082M12 12a3 3 0 110-6 3 3 0 010 6zm-7 8a7 7 0 0114 0H5z" />
  </svg>
);

const CodeIcon = ({ className = 'w-7 h-7' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const SearchIcon = ({ className = 'w-7 h-7' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const LinkIcon = ({ className = 'w-7 h-7' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const MegaphoneIcon = ({ className = 'w-7 h-7' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  </svg>
);

const ZapIcon = ({ className = 'w-7 h-7' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ShieldIcon = ({ className = 'w-7 h-7' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const TargetIcon = ({ className = 'w-7 h-7' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
  </svg>
);

const GlobeIcon = ({ className = 'w-7 h-7' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.5 0 4.5-4.03 4.5-9S14.5 3 12 3 7.5 7.03 7.5 12s2 9 4.5 9zM3.6 9h16.8M3.6 15h16.8" />
  </svg>
);

const ChevronDownIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const BookOpenIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const PHONE_NUMBER = '+4917632194754';
const PHONE_DISPLAY = '+49 176 321 94 754';

interface ServiceType {
  icon: React.FC<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  idealFor: string;
  timeline: string;
  primaryArticle: { title: string; href: string };
  relatedArticles: { title: string; href: string }[];
}

const SERVICES: ServiceType[] = [
  {
    icon: LightbulbIcon,
    title: 'Beratung',
    subtitle: 'Strategische KI-Sichtbarkeitsberatung',
    description: 'Du weißt genau, wo du stehst, was dich blockiert und welche Schritte den größten Hebel haben. Ich analysiere deine aktuelle Präsenz in ChatGPT, Perplexity und Google AI, identifiziere Lücken und erstelle einen persönlichen Fahrplan mit konkreten Prioritäten.',
    benefits: [
      'Klarheit über deine aktuelle KI-Sichtbarkeit',
      'Konkrete Prioritäten statt vager Empfehlungen',
      'Persönlicher Fahrplan mit nächsten Schritten',
      'Fundierte Entscheidungsgrundlage für dein Budget',
    ],
    deliverables: [
      'KI-Sichtbarkeitsanalyse über alle Plattformen',
      'Wettbewerber-Vergleich (wer wird statt dir empfohlen?)',
      'Priorisierter Maßnahmenplan mit Quick Wins',
      'Persönliches Strategie-Gespräch (60 Min.)',
    ],
    idealFor: 'Unternehmen, die erstmal verstehen wollen, wo sie stehen, bevor sie investieren.',
    timeline: 'Ergebnisse in 5–7 Werktagen',
    primaryArticle: { title: 'KI-Sichtbarkeit beauftragen: so geht\'s', href: '/wissen/ki-sichtbarkeit-beauftragen' },
    relatedArticles: [
      { title: 'Was kostet KI-Sichtbarkeit?', href: '/wissen/ki-sichtbarkeit-kosten' },
      { title: 'KI-Sichtbarkeit messen', href: '/wissen/ki-sichtbarkeit-messen' },
    ],
  },
  {
    icon: SparklesIcon,
    title: 'AEO',
    subtitle: 'Answer Engine Optimization',
    description: 'Wenn Kunden ChatGPT oder Perplexity nach deiner Leistung fragen, wirst du als Antwort genannt, nicht deine Konkurrenz. Ich optimiere deine Inhalte so, dass KI-Systeme sie als relevante, zitierbare Quelle erkennen und in ihren Antworten verwenden.',
    benefits: [
      'Dein Unternehmen erscheint in KI-Antworten',
      'Relevante Kundenfragen führen direkt zu dir',
      'Messbare Nennungen in ChatGPT, Perplexity & Gemini',
      'Nachvollziehbare Fortschritte durch Monitoring',
    ],
    deliverables: [
      'Answer-First Content-Optimierung deiner Kernseiten',
      'FAQ-Markup und strukturierte Daten',
      'Zitierbarkeits-Audit mit konkreten Änderungen',
      'Monatliches KI-Zitations-Monitoring',
    ],
    idealFor: 'Dienstleister und Berater, deren Kunden aktiv in KI-Assistenten recherchieren.',
    timeline: 'Erste Ergebnisse bei Perplexity nach 2–4 Wochen',
    primaryArticle: { title: 'AEO: Der komplette Leitfaden', href: '/wissen/aeo-answer-engine-optimization' },
    relatedArticles: [
      { title: 'ChatGPT SEO: so wirst du gefunden', href: '/wissen/chatgpt-seo' },
      { title: 'Perplexity vs. ChatGPT vs. Google', href: '/wissen/perplexity-vs-chatgpt-vs-google' },
    ],
  },
  {
    icon: GlobeIcon,
    title: 'GEO',
    subtitle: 'Generative Engine Optimization',
    description: 'GEO ist die Disziplin dahinter: deine Inhalte so aufbereiten, dass generative KI-Systeme wie ChatGPT, Perplexity und Google AI dich als Quelle auswählen, wenn sie ihre Antworten zusammensetzen. AEO ist ein Teil davon. GEO denkt deine Sichtbarkeit über alle generativen Engines zusammen, statt jede Plattform einzeln zu behandeln.',
    benefits: [
      'Sichtbar in den Antworten aller generativen KI-Systeme',
      'Eine Strategie statt isolierter Einzelmaßnahmen',
      'Zukunftssicher, während sich die Suche zu KI verschiebt',
      'Weniger Abhängigkeit von klassischen Google-Rankings',
    ],
    deliverables: [
      'GEO-Audit: Wo wirst du zitiert, wo nicht?',
      'Zitierbare, antwortorientierte Inhaltsstruktur',
      'Entity- und Autoritätssignale für generative Modelle',
      'Plattformübergreifendes Zitations-Monitoring',
    ],
    idealFor: 'Unternehmen, die KI-Sichtbarkeit als Ganzes denken wollen, nicht nur eine einzelne Plattform.',
    timeline: 'Erste Zitationen nach 3–6 Wochen, je nach Ausgangslage',
    primaryArticle: { title: 'Was ist GEO? Generative Engine Optimization erklärt', href: '/wissen/was-ist-geo' },
    relatedArticles: [
      { title: 'GEO-Agentur Hamburg', href: '/wissen/geo-agentur-hamburg' },
      { title: 'AEO/GEO Marktanalyse Deutschland 2026', href: '/wissen/aeo-geo-marktanalyse-deutschland-2026' },
    ],
  },
  {
    icon: BrainIcon,
    title: 'AI SEO',
    subtitle: 'KI-fokussierte Suchoptimierung',
    description: 'Deine Website wird von KI-Systemen als vertrauenswürdige Quelle erkannt und bei relevanten Suchanfragen bevorzugt ausgespielt. Die Optimierung umfasst semantische Strukturierung, Entity-Signale und technische KI-Zugänglichkeit. Also alles, was KI braucht, um dein Angebot einzuordnen.',
    benefits: [
      'Höheres Vertrauen bei KI-Plattformen',
      'Bessere Positionierung in KI-gestützten Suchergebnissen',
      'Dein Angebot wird korrekt eingeordnet und verstanden',
      'Schnellere Ladezeiten und bessere Nutzererfahrung',
    ],
    deliverables: [
      'Semantische Content-Strukturierung',
      'Entity-Optimierung (Schema.org, Knowledge Graph)',
      'llms.txt und ai.txt Konfiguration',
      'KI-Crawler-Zugänglichkeit sicherstellen',
    ],
    idealFor: 'Unternehmen, die in Google AI Overviews und KI-Antworten gleichzeitig sichtbar sein wollen.',
    timeline: '4–8 Wochen bis zu messbaren Veränderungen',
    primaryArticle: { title: 'AI SEO Agentur: was du wissen musst', href: '/wissen/ai-seo-agentur' },
    relatedArticles: [
      { title: 'SEO vs. AI SEO: die Unterschiede', href: '/wissen/seo-vs-ai-seo' },
      { title: 'AI SEO Tools im Vergleich', href: '/wissen/ai-seo-tools' },
    ],
  },
  {
    icon: CodeIcon,
    title: 'Website-Erstellung',
    subtitle: 'KI-optimierte Websites',
    description: 'Eine Website, die nicht nur gut aussieht, sondern von KI-Systemen ab dem ersten Tag online verstanden und empfohlen wird. Gebaut mit Next.js, perfekten Core Web Vitals, Schema.org Markup und voller Zugänglichkeit für alle KI-Crawler.',
    benefits: [
      'Sofort sichtbar für KI-Plattformen nach Launch',
      'Mehr Anfragen durch conversion-optimiertes Design',
      'Schnelle Ladezeiten, die Besucher halten',
      'Zukunftssicher gebaut mit modernster Technik',
    ],
    deliverables: [
      'Next.js Website mit perfekten Core Web Vitals',
      'Schema.org Markup für alle relevanten Entitäten',
      'KI-Crawler-Zugang (llms.txt, ai.txt, robots.txt)',
      'Responsive Design mit Conversion-Fokus',
    ],
    idealFor: 'Unternehmen mit veralteter Website oder ohne klare KI-Sichtbarkeitsstrategie.',
    timeline: '4–8 Wochen bis zum Launch',
    primaryArticle: { title: 'Technische KI-Sichtbarkeit', href: '/wissen/technische-ki-sichtbarkeit' },
    relatedArticles: [
      { title: 'Website-Automatisierung mit KI', href: '/wissen/website-automatisierung' },
      { title: 'AI SEO Tools im Vergleich', href: '/wissen/ai-seo-tools' },
    ],
  },
  {
    icon: SearchIcon,
    title: 'SEO',
    subtitle: 'Klassische Suchmaschinenoptimierung',
    description: 'Dein Unternehmen wird bei Google gefunden und baut gleichzeitig das Fundament auf, das KI-Sichtbarkeit erst möglich macht. Technisches SEO, On-Page-Optimierung und lokale Sichtbarkeit in Hamburg bilden die Basis für alle weiteren Maßnahmen.',
    benefits: [
      'Mehr organischer Traffic aus Google',
      'Lokale Sichtbarkeit in Hamburg gestärkt',
      'Saubere technische Basis für alle weiteren Maßnahmen',
      'Volle Kontrolle über deine Indexierung',
    ],
    deliverables: [
      'Technisches SEO-Audit mit Umsetzung',
      'On-Page-Optimierung deiner Kernseiten',
      'Lokales SEO: Google Business, NAP-Konsistenz',
      'Keyword-Strategie und Content-Empfehlungen',
    ],
    idealFor: 'Unternehmen, die noch keine stabile Google-Basis haben. Die Grundlage für alles.',
    timeline: '3–6 Monate für nachhaltige Rankings',
    primaryArticle: { title: 'Lokale KI-Sichtbarkeit', href: '/wissen/lokale-ki-sichtbarkeit' },
    relatedArticles: [
      { title: 'SEO-Agentur vs. AI SEO', href: '/wissen/seo-agentur-vs-ai-seo' },
      { title: 'Technische KI-Sichtbarkeit', href: '/wissen/technische-ki-sichtbarkeit' },
    ],
  },
  {
    icon: LinkIcon,
    title: 'Backlink-Aufbau',
    subtitle: 'Autorität & Vertrauenssignale',
    description: 'Dein Unternehmen wird als Autorität in deiner Branche wahrgenommen: von Google, von KI-Systemen und von potenziellen Kunden. Gezielte Markennennungen auf relevanten Plattformen stärken die Signale, die KI-Systemen Vertrauen geben.',
    benefits: [
      'Steigende Domain-Autorität und Vertrauen',
      'Erwähnungen auf relevanten Branchenseiten',
      'Stärkere Positionierung gegenüber Wettbewerbern',
      'Nachhaltige Signale, die langfristig wirken',
    ],
    deliverables: [
      'Backlink-Strategie basierend auf Wettbewerber-Analyse',
      'Gezielte Markennennungen auf Branchenportalen',
      'Digital PR und Gastbeiträge',
      'Monatliches Backlink-Reporting',
    ],
    idealFor: 'Unternehmen, die technisch sauber aufgestellt sind, aber an Autorität gewinnen müssen.',
    timeline: 'Erste Backlinks innerhalb von 4 Wochen',
    primaryArticle: { title: 'E-E-A-T und KI-Sichtbarkeit', href: '/wissen/eeat-ki-sichtbarkeit' },
    relatedArticles: [
      { title: 'KI-Markenwahrnehmung aufbauen', href: '/wissen/ki-markenwahrnehmung' },
      { title: 'Wettbewerber-KI-Sichtbarkeit analysieren', href: '/wissen/wettbewerber-ki-sichtbarkeit' },
    ],
  },
  {
    icon: MegaphoneIcon,
    title: 'Pressemitteilungen',
    subtitle: 'PR & Pressearbeit',
    description: 'Dein Unternehmen erscheint in relevanten Medien und KI-Systeme lernen dich als etablierte, vertrauenswürdige Marke kennen. Redaktionelle Erwähnungen in Fachmedien sind eines der stärksten Autoritätssignale für KI-Zitationen.',
    benefits: [
      'Sichtbarkeit in Fachmedien und Presseportalen',
      'Neue Zielgruppen erreichen, die dich noch nicht kennen',
      'Glaubwürdigkeit durch unabhängige Berichterstattung',
      'Langfristige Stärkung deiner Markenwahrnehmung',
    ],
    deliverables: [
      'Redaktionelle Pressemitteilungen (deutsch)',
      'Distribution über relevante Presseportale',
      'Fachmedien-Outreach in deiner Branche',
      'Reporting über Veröffentlichungen und Reichweite',
    ],
    idealFor: 'Unternehmen mit Neuigkeiten, Expertise oder einem Story-Anlass.',
    timeline: 'Erste Veröffentlichungen nach 2–3 Wochen',
    primaryArticle: { title: 'KI-Markenwahrnehmung aufbauen', href: '/wissen/ki-markenwahrnehmung' },
    relatedArticles: [
      { title: 'E-E-A-T und KI-Sichtbarkeit', href: '/wissen/eeat-ki-sichtbarkeit' },
      { title: 'AI Content-Strategie', href: '/wissen/ai-content-strategie' },
    ],
  },
];

const DIFFERENTIATORS = [
  {
    icon: TargetIcon,
    title: 'Strategie',
    description: 'Nicht einzelne Tricks, sondern ein klares System, das auf dein Unternehmen zugeschnitten ist.',
  },
  {
    icon: ZapIcon,
    title: 'Technik',
    description: 'Saubere Struktur, Schema, Performance. Damit KI dein Angebot wirklich versteht.',
  },
  {
    icon: ShieldIcon,
    title: 'Autorität',
    description: 'Backlinks, Erwähnungen, Pressearbeit. Die Signale, die KI-Systemen Vertrauen geben.',
  },
];

const VERTICALS = [
  { title: 'Handwerker', href: '/wissen/ki-sichtbarkeit-handwerker', description: 'Mehr Aufträge durch KI-Empfehlungen in deiner Region.' },
  { title: 'Immobilien', href: '/wissen/ki-sichtbarkeit-immobilien', description: 'Makler & Verwalter, die KI als Kanal nutzen.' },
  { title: 'Ärzte & Praxen', href: '/wissen/ki-sichtbarkeit-aerzte', description: 'Patienten finden dich über KI-Assistenten.' },
  { title: 'Anwälte & Kanzleien', href: '/wissen/ki-sichtbarkeit-anwaelte', description: 'Mandanten gewinnen über ChatGPT & Co.' },
  { title: 'E-Commerce', href: '/wissen/ki-sichtbarkeit-ecommerce', description: 'Produkte, die KI aktiv empfiehlt.' },
  { title: 'Dienstleister', href: '/wissen/ki-sichtbarkeit-dienstleister', description: 'Agenturen, Berater und Freelancer, sichtbar in KI.' },
];

const PLATFORMS = [
  { name: 'ChatGPT', href: '/wissen/sichtbarkeit-in-chatgpt', description: 'So wirst du in ChatGPT-Antworten genannt.' },
  { name: 'Perplexity', href: '/wissen/sichtbarkeit-in-perplexity', description: 'Schnellste Ergebnisse durch Live-Web-Suche.' },
  { name: 'Claude', href: '/wissen/sichtbarkeit-in-claude', description: 'Anthropics KI mit wachsender Nutzerbasis.' },
  { name: 'Gemini', href: '/wissen/sichtbarkeit-in-gemini', description: 'Google AI und die Zukunft der Suche.' },
];

function ExpandableServiceCard({ service, index }: { service: ServiceType; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <FadeIn delay={index * 0.08}>
      <SpotlightCard className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all h-full flex flex-col">
        <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
          {/* Header */}
          <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6">
            <Icon className="w-7 h-7 text-brand-accent" />
          </div>
          <h3 className="text-xl font-bold text-brand-text mb-1">{service.title}</h3>
          <p className="text-sm font-medium text-brand-accent mb-3">{service.subtitle}</p>
          <p className="text-gray-600 mb-5 leading-relaxed text-sm">{service.description}</p>

          {/* Benefits */}
          <ul className="space-y-2 mb-5">
            {service.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckIcon className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Expandable section */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            {/* Deliverables */}
            <div className="border-t border-gray-100 pt-5 mb-5">
              <p className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-3">Was du bekommst</p>
              <ul className="space-y-2">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal for + Timeline */}
            <div className="bg-gray-50 rounded-xl p-4 mb-5 space-y-2">
              <p className="text-sm text-gray-700"><span className="font-semibold text-brand-text">Ideal für:</span> {service.idealFor}</p>
              <p className="text-sm text-gray-700"><span className="font-semibold text-brand-text">Zeitrahmen:</span> {service.timeline}</p>
            </div>

            {/* Related articles */}
            <div className="border-t border-gray-100 pt-5">
              <p className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-3">Weiterlesen</p>
              <div className="space-y-2">
                <Link
                  href={service.primaryArticle.href}
                  className="flex items-center gap-2 text-sm font-medium text-brand-accent hover:text-brand-accent/80 transition-colors group"
                >
                  <BookOpenIcon className="w-4 h-4" />
                  <span className="group-hover:underline">{service.primaryArticle.title}</span>
                </Link>
                {service.relatedArticles.map((article, i) => (
                  <Link
                    key={i}
                    href={article.href}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-accent transition-colors group"
                  >
                    <ArrowRightIcon className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                    <span className="group-hover:underline">{article.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Expand toggle + CTA - pushed to bottom */}
          <div className="mt-auto pt-5 flex items-center justify-between gap-3">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-brand-text transition-colors"
            >
              <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
              {expanded ? 'Weniger anzeigen' : 'Details & Artikel'}
            </button>
            <Link
              href="/contact"
              className="text-sm font-medium text-brand-accent hover:text-brand-accent/80 transition-colors flex items-center gap-1"
            >
              Anfragen
              <ArrowRightIcon className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </SpotlightCard>
    </FadeIn>
  );
}

export default function LeistungenPage() {
  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          'name': 'Leistungen von aiseo.hamburg',
          'description': 'Alle Dienstleistungen für KI-Sichtbarkeit in Hamburg',
          'url': 'https://aiseo.hamburg/leistungen',
          'numberOfItems': 8,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'item': {
                '@type': 'Service',
                'name': 'KI-Sichtbarkeitsberatung',
                'description': 'Strategische Beratung für AI Visibility: Analyse, Strategie und Handlungsempfehlungen.',
                'provider': { '@id': 'https://aiseo.hamburg/#organization' },
                'areaServed': { '@type': 'City', 'name': 'Hamburg' },
              },
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'item': {
                '@type': 'Service',
                'name': 'Answer Engine Optimization (AEO)',
                'description': 'Optimierung für ChatGPT, Perplexity, Gemini und andere KI-Antwortmaschinen.',
                'provider': { '@id': 'https://aiseo.hamburg/#organization' },
                'areaServed': { '@type': 'City', 'name': 'Hamburg' },
              },
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'item': {
                '@type': 'Service',
                'name': 'Generative Engine Optimization (GEO)',
                'description': 'Plattformübergreifende Optimierung, damit generative KI-Systeme wie ChatGPT, Perplexity und Google AI dein Unternehmen als Quelle zitieren.',
                'provider': { '@id': 'https://aiseo.hamburg/#organization' },
                'areaServed': { '@type': 'City', 'name': 'Hamburg' },
              },
            },
            {
              '@type': 'ListItem',
              'position': 4,
              'item': {
                '@type': 'Service',
                'name': 'AI SEO',
                'description': 'KI-fokussierte Suchmaschinenoptimierung für die Suche der Zukunft.',
                'provider': { '@id': 'https://aiseo.hamburg/#organization' },
                'areaServed': { '@type': 'City', 'name': 'Hamburg' },
              },
            },
            {
              '@type': 'ListItem',
              'position': 5,
              'item': {
                '@type': 'Service',
                'name': 'Website-Erstellung',
                'description': 'KI-optimierte Websites mit Next.js, Schema.org und perfekten Core Web Vitals.',
                'provider': { '@id': 'https://aiseo.hamburg/#organization' },
                'areaServed': { '@type': 'City', 'name': 'Hamburg' },
              },
            },
            {
              '@type': 'ListItem',
              'position': 6,
              'item': {
                '@type': 'Service',
                'name': 'Suchmaschinenoptimierung (SEO)',
                'description': 'Klassische SEO als Fundament: technisches SEO, On-Page, lokales SEO für Hamburg.',
                'provider': { '@id': 'https://aiseo.hamburg/#organization' },
                'areaServed': { '@type': 'City', 'name': 'Hamburg' },
              },
            },
            {
              '@type': 'ListItem',
              'position': 7,
              'item': {
                '@type': 'Service',
                'name': 'Backlink-Aufbau',
                'description': 'Gezielter Aufbau von Autorität und Vertrauenssignalen für KI-Systeme.',
                'provider': { '@id': 'https://aiseo.hamburg/#organization' },
                'areaServed': { '@type': 'City', 'name': 'Hamburg' },
              },
            },
            {
              '@type': 'ListItem',
              'position': 8,
              'item': {
                '@type': 'Service',
                'name': 'Pressemitteilungen',
                'description': 'Professionelle PR und Pressearbeit für Medienerwähnungen und KI-Autorität.',
                'provider': { '@id': 'https://aiseo.hamburg/#organization' },
                'areaServed': { '@type': 'City', 'name': 'Hamburg' },
              },
            },
          ],
        })
      }} />

      <main>
        {/* ========================================
            HERO SECTION
            ======================================== */}
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-brand-bg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl z-0"></div>
          <AntigravityBackground />

          <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <FadeIn>
                <Tag text="Leistungen" />
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-[-0.04em] text-black mb-5 mt-6 leading-[1.05]">
                  Alles, was dein Unternehmen in <span className="text-brand-accent">KI sichtbar</span> macht.
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                  Generative Engine Optimization (GEO), AEO und klassisches SEO. Von der Strategie bis zur Umsetzung: Beratung, Optimierung, Technik und Autorität, alles aus einer Hand und spezialisiert auf Hamburg.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button href="/ai-sichtbarkeit-now" primary className="!py-4 !px-6 !pl-8 group">
                    <span className="relative z-10 flex items-center gap-3">
                      KI-Sichtbarkeit prüfen
                      <PlatformIconLoop className="!p-0" iconClassName="!w-5 !h-5" />
                    </span>
                  </Button>
                  <Button href="#leistungen" text="Alle Leistungen" className="!py-4 !px-8" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ========================================
            SERVICES GRID
            ======================================== */}
        <section id="leistungen" className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-4">
                  8 Leistungen. <span className="text-gray-400">Ein Ziel.</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Von Generative Engine Optimization (GEO) und AEO bis zu Technik und Autorität: Jede Leistung stärkt deine KI-Sichtbarkeit, zusammen bilden sie ein System, das KI-Plattformen nicht ignorieren können. Klicke auf &quot;Details&quot; für konkrete Liefergegenstände und weiterführende Artikel.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <ExpandableServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
            MID-PAGE CTA
            ======================================== */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="bg-brand-accent/5 border border-brand-accent/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-black mb-3">
                    Nicht sicher, wo du anfangen sollst?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    In 15 Minuten zeige ich dir, wie KI dein Unternehmen heute beschreibt und was sich ändern muss, damit du empfohlen wirst. Kostenlos, ehrlich, ohne Verkaufsdruck.
                  </p>
                </div>
                <div className="flex flex-col gap-3 flex-shrink-0">
                  <Button href="/ai-sichtbarkeit-now" primary text="KI-Check starten" className="!py-3 !px-6" />
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="text-sm font-medium text-brand-accent hover:text-brand-accent/80 transition-colors text-center"
                  >
                    oder direkt anrufen
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========================================
            DIFFERENTIATOR - Why Together
            ======================================== */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="bg-[#121212] text-white rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10">
                  <Tag text="Warum ein System?" />
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mb-4 mt-6">
                    KI-Sichtbarkeit entsteht nicht durch <span className="text-gray-500">einen einzelnen Hebel.</span>
                  </h2>
                  <p className="text-gray-400 text-lg mb-12 max-w-2xl">
                    KI-Systeme bewerten Klarheit, Technik und Autorität gleichzeitig. Nur wenn alle drei Säulen stimmen, wirst du empfohlen.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-8">
                    {DIFFERENTIATORS.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <FadeIn key={index} delay={index * 0.1}>
                          <div>
                            <Icon className="w-8 h-8 text-brand-accent mb-4" />
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                          </div>
                        </FadeIn>
                      );
                    })}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========================================
            BRANCHEN / VERTICALS
            ======================================== */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-14">
                <Tag text="Für deine Branche" />
                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4 mt-6">
                  KI-Sichtbarkeit für <span className="text-brand-accent">deine Branche</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Jede Branche hat eigene Suchmuster, Kundenfragen und Wettbewerber. Finde heraus, wie KI-Sichtbarkeit in deinem Bereich funktioniert.
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VERTICALS.map((vertical, index) => (
                <FadeIn key={index} delay={index * 0.06}>
                  <Link
                    href={vertical.href}
                    className="group block bg-white rounded-xl border border-gray-100 p-6 hover:border-brand-accent/30 hover:shadow-md transition-all"
                  >
                    <h3 className="text-lg font-semibold text-brand-text mb-2 group-hover:text-brand-accent transition-colors">
                      {vertical.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{vertical.description}</p>
                    <span className="text-sm font-medium text-brand-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                      Leitfaden lesen
                      <ArrowRightIcon className="w-3 h-3" />
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
            PLATTFORMEN
            ======================================== */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-14">
                <Tag text="Plattformen" />
                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4 mt-6">
                  Sichtbar auf <span className="text-brand-accent">jeder KI-Plattform</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Jede Plattform funktioniert anders. Erfahre, wie du auf den wichtigsten KI-Systemen als Quelle erscheinst.
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PLATFORMS.map((platform, index) => (
                <FadeIn key={index} delay={index * 0.06}>
                  <Link
                    href={platform.href}
                    className="group block bg-white rounded-xl border border-gray-100 p-6 hover:border-brand-accent/30 hover:shadow-md transition-all text-center"
                  >
                    <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-accent transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{platform.description}</p>
                    <span className="text-sm font-medium text-brand-accent flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                      Mehr erfahren
                      <ArrowRightIcon className="w-3 h-3" />
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
            CTA SECTION
            ======================================== */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-gray-100">
          <div className="max-w-[900px] mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-4">
                Welche Leistung passt zu dir?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                In 15 Minuten klären wir, wo du stehst und welche Maßnahmen den größten Hebel haben. Kostenlos und unverbindlich.
              </p>

              <div className="mb-8">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="text-3xl lg:text-4xl font-bold text-brand-accent hover:text-brand-accent/80 transition-colors inline-block"
                >
                  {PHONE_DISPLAY}
                </a>
                <p className="text-sm text-gray-500 mt-2">Kostenlose Erstberatung</p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button href="/ai-sichtbarkeit-now" primary text="KI-Sichtbarkeit prüfen" className="!py-4 !px-8" />
                <Button href="/contact" text="Kontakt aufnehmen" className="!py-4 !px-8" />
              </div>

              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-brand-accent" />
                  Kostenlos
                </span>
                <span className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-brand-accent" />
                  Unverbindlich
                </span>
                <span className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-brand-accent" />
                  Direkt vom Experten
                </span>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
