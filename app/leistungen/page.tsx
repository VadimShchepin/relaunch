'use client';

import React from 'react';
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

const PHONE_NUMBER = '+4917632194754';
const PHONE_DISPLAY = '+49 176 321 94 754';

const SERVICES = [
  {
    icon: LightbulbIcon,
    title: 'Beratung',
    subtitle: 'Strategische KI-Sichtbarkeitsberatung',
    description: 'Individuelle Analyse und Strategie, wie dein Unternehmen von ChatGPT, Perplexity und Google AI empfohlen wird.',
    benefits: [
      'KI-Sichtbarkeits-Audit: wo stehst du heute?',
      'Konkurrenzanalyse in KI-Plattformen',
      'Individuelle Strategie mit klaren Prioritäten',
      'Umsetzbare Handlungsempfehlungen',
    ],
  },
  {
    icon: SparklesIcon,
    title: 'AEO',
    subtitle: 'Answer Engine Optimization',
    description: 'Optimierung für KI-Antwortmaschinen. Dein Unternehmen wird zur zitierten Quelle, wenn KI Fragen beantwortet.',
    benefits: [
      'Optimierung für ChatGPT, Perplexity, Gemini',
      'Strukturierte Daten für KI-Verständnis',
      'Content, der als Quelle zitiert wird',
      'Monitoring der KI-Nennungen',
    ],
  },
  {
    icon: BrainIcon,
    title: 'AI SEO',
    subtitle: 'KI-fokussierte Suchoptimierung',
    description: 'Suchmaschinenoptimierung, die über klassische Rankings hinausgeht – optimiert für die KI-gestützte Suche der Zukunft.',
    benefits: [
      'E-E-A-T-Signale für KI-Vertrauen',
      'Entity-Optimierung & Knowledge-Graph',
      'KI-lesbare Inhaltsstruktur',
      'Performance- & Core-Web-Vitals-Optimierung',
    ],
  },
  {
    icon: CodeIcon,
    title: 'Website-Erstellung',
    subtitle: 'KI-optimierte Websites',
    description: 'Websites, die von Anfang an so gebaut sind, dass KI-Systeme sie verstehen, einordnen und empfehlen.',
    benefits: [
      'Next.js / React – schnell & modern',
      'Schema.org & strukturierte Daten ab Tag 1',
      'Conversion-optimiertes Design',
      'Perfekte Core Web Vitals',
    ],
  },
  {
    icon: SearchIcon,
    title: 'SEO',
    subtitle: 'Klassische Suchmaschinenoptimierung',
    description: 'Solide SEO-Basis als Fundament für KI-Sichtbarkeit. Google-Rankings und organischer Traffic bleiben wichtig.',
    benefits: [
      'Technisches SEO & Crawlability',
      'On-Page-Optimierung & Content-Strategie',
      'Lokales SEO für Hamburg',
      'Search Console & Indexierung',
    ],
  },
  {
    icon: LinkIcon,
    title: 'Backlink-Aufbau',
    subtitle: 'Autorität & Vertrauenssignale',
    description: 'Gezielter Aufbau von Backlinks und Erwähnungen, die KI-Systemen zeigen, dass dein Unternehmen vertrauenswürdig ist.',
    benefits: [
      'Qualitative Backlinks aus relevanten Quellen',
      'Branchenverzeichnisse & lokale Zitationen',
      'Digital PR & Erwähnungen',
      'Autoritätssignale für KI-Systeme',
    ],
  },
  {
    icon: MegaphoneIcon,
    title: 'Pressemitteilungen',
    subtitle: 'PR & Pressearbeit',
    description: 'Professionelle Pressemitteilungen, die dein Unternehmen in relevanten Medien platzieren und KI-Quellen füttern.',
    benefits: [
      'Redaktionell aufbereitete Pressemitteilungen',
      'Distribution über relevante Presseportale',
      'Aufbau von Medienerwähnungen',
      'Stärkung der Markenautorität',
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
    description: 'Saubere Struktur, Schema, Performance – damit KI dein Angebot wirklich versteht.',
  },
  {
    icon: ShieldIcon,
    title: 'Autorität',
    description: 'Backlinks, Erwähnungen, Pressearbeit – die Signale, die KI-Systemen Vertrauen geben.',
  },
];

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
          'numberOfItems': 7,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'item': {
                '@type': 'Service',
                'name': 'KI-Sichtbarkeitsberatung',
                'description': 'Strategische Beratung für AI Visibility – Analyse, Strategie und Handlungsempfehlungen.',
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
                'name': 'AI SEO',
                'description': 'KI-fokussierte Suchmaschinenoptimierung für die Suche der Zukunft.',
                'provider': { '@id': 'https://aiseo.hamburg/#organization' },
                'areaServed': { '@type': 'City', 'name': 'Hamburg' },
              },
            },
            {
              '@type': 'ListItem',
              'position': 4,
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
              'position': 5,
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
              'position': 6,
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
              'position': 7,
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
                  Von der Strategie bis zur Umsetzung. Beratung, Optimierung, Technik und Autorität – alles aus einer Hand, spezialisiert auf Hamburg.
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
                  7 Leistungen. <span className="text-gray-400">Ein Ziel.</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Jede Leistung stärkt deine KI-Sichtbarkeit – zusammen bilden sie ein System, das KI-Plattformen nicht ignorieren können.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => {
                const Icon = service.icon;
                return (
                  <FadeIn key={index} delay={index * 0.08}>
                    <SpotlightCard className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-all h-full">
                      <div className="relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6">
                          <Icon className="w-7 h-7 text-brand-accent" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-text mb-1">{service.title}</h3>
                        <p className="text-sm font-medium text-brand-accent mb-3">{service.subtitle}</p>
                        <p className="text-gray-600 mb-5 leading-relaxed text-sm">{service.description}</p>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckIcon className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </SpotlightCard>
                  </FadeIn>
                );
              })}
            </div>
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
