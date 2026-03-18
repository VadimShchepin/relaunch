'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

const ARTICLES = [
    {
        title: 'KI-Sichtbarkeit: Der komplette Guide für Unternehmen 2026',
        description: 'Was KI-Sichtbarkeit bedeutet, warum sie 2026 entscheidend ist und wie du in ChatGPT, Perplexity und Google AI empfohlen wirst.',
        href: '/wissen/ki-sichtbarkeit',
        tag: 'Pillar Guide',
        readTime: '12 Min.',
    },
    {
        title: 'GEO Agentur Hamburg: Was gute Generative Engine Optimization wirklich leistet',
        description: 'Woran du echte GEO-Expertise erkennst, für welche Hamburger Unternehmen sie sich lohnt und wie lokale KI-Sichtbarkeit aufgebaut wird.',
        href: '/wissen/geo-agentur-hamburg',
        tag: 'Hamburg',
        readTime: '8 Min.',
    },
    {
        title: 'ChatGPT SEO: So optimierst du Inhalte für Empfehlungen statt Rankings',
        description: 'Was ChatGPT SEO wirklich bedeutet, welche Hebel Empfehlungen beeinflussen und warum Klarheit wichtiger ist als Keyword-Gymnastik.',
        href: '/wissen/chatgpt-seo',
        tag: 'ChatGPT',
        readTime: '9 Min.',
    },
    {
        title: 'SEO vs AI SEO: Was du 2026 wirklich brauchst',
        description: 'Die Entscheidungshilfe für Unternehmen, die wissen wollen, wann klassisches SEO reicht und wann AI SEO zusätzlich nötig wird.',
        href: '/wissen/seo-vs-ai-seo',
        tag: 'Vergleich',
        readTime: '8 Min.',
    },
    {
        title: 'Sichtbarkeit in ChatGPT: So wird dein Unternehmen empfohlen',
        description: 'Die wichtigsten Faktoren, die bestimmen, ob ChatGPT dein Unternehmen nennt. Mit konkreten Strategien und Praxis-Tipps.',
        href: '/wissen/sichtbarkeit-in-chatgpt',
        tag: 'ChatGPT',
        readTime: '10 Min.',
    },
    {
        title: 'Sichtbarkeit in Perplexity AI: Wie dein Unternehmen zitiert wird',
        description: 'Perplexity wächst um 370% jährlich. So optimierst du deine Inhalte, um von der KI-Suchmaschine zitiert zu werden.',
        href: '/wissen/sichtbarkeit-in-perplexity',
        tag: 'Perplexity',
        readTime: '10 Min.',
    },
    {
        title: 'AI SEO Agentur: Was sie wirklich leistet',
        description: 'Was eine gute AI SEO Agentur ausmacht, worauf du bei der Auswahl achten solltest und wann sich Beratung lohnt.',
        href: '/wissen/ai-seo-agentur',
        tag: 'Beratung',
        readTime: '9 Min.',
    },
    {
        title: 'Case Study KinderAlbum: Von Nischenprodukt zu KI-Empfehlung',
        description: 'Wie eine DSGVO-konforme Foto-Plattform für Schulen in ChatGPT und Perplexity sichtbar wurde – mit echten Learnings statt Märchenkurve.',
        href: '/wissen/case-study-kinderalbum',
        tag: 'Case Study',
        readTime: '7 Min.',
    },
    {
        title: 'Case Study Blitz Hamburg: Wie klare Positionierung zu ChatGPT-Empfehlungen führte',
        description: 'Ein lokaler Dienstleister, ein austauschbarer Markt und der Hebel, der aus Sichtbarkeit echte Empfehlbarkeit macht.',
        href: '/wissen/case-study-blitz-hamburg',
        tag: 'Case Study',
        readTime: '7 Min.',
    },
    {
        title: 'Website-Automatisierung: Tools und Strategien für 2026',
        description: 'Die besten Automatisierungs-Tools für deutsche Unternehmen. DSGVO-konform, praxiserprobt und mit konkreten Anwendungsfällen.',
        href: '/wissen/website-automatisierung',
        tag: 'Automatisierung',
        readTime: '10 Min.',
    },
];

const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Wissen: KI-Sichtbarkeit, AI SEO & Automatisierung',
    description: 'Praxis-Guides zu KI-Sichtbarkeit, AI SEO und Website-Automatisierung für Unternehmen.',
    url: 'https://aiseo.hamburg/wissen',
    publisher: {
        '@type': 'Organization',
        name: 'aiseo.hamburg',
        url: 'https://aiseo.hamburg',
    },
    mainEntity: {
        '@type': 'ItemList',
        itemListElement: ARTICLES.map((article, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `https://aiseo.hamburg${article.href}`,
            name: article.title,
        })),
    },
};

export default function WissenPage() {
    return (
        <div className="relative w-full overflow-hidden bg-[#F7F5F2] text-brand-text font-sans selection:bg-brand-accent selection:text-white">
            <Navbar />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />

            <main>
                {/* Hero */}
                <section className="relative pt-32 pb-20 md:pt-52 md:pb-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
                    <FadeIn>
                        <nav className="text-sm text-gray-500 mb-6">
                            <a href="/" className="hover:text-brand-accent transition-colors">Startseite</a>
                            <span className="mx-2">/</span>
                            <span className="text-gray-900">Wissen</span>
                        </nav>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
                            Wissen &amp; Guides
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
                            Fundierte Praxis-Guides zu KI-Sichtbarkeit, AI SEO und Website-Automatisierung. Kein Marketing-Blabla, sondern echtes Wissen mit Quellen und konkreten Handlungsempfehlungen.
                        </p>
                    </FadeIn>
                </section>

                {/* Articles Grid */}
                <section className="py-10 md:py-16 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
                    <div className="space-y-6">
                        {ARTICLES.map((article, i) => (
                            <FadeIn key={i} delay={i * 75}>
                                <a
                                    href={article.href}
                                    className="block bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:border-brand-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-xs font-bold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
                                            {article.tag}
                                        </span>
                                        <span className="text-xs text-gray-400">{article.readTime} Lesezeit</span>
                                    </div>

                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                                                {article.title}
                                            </h2>
                                            <p className="text-gray-600 leading-relaxed">
                                                {article.description}
                                            </p>
                                        </div>
                                        <div className="text-brand-accent group-hover:translate-x-1 transition-transform duration-300 text-sm font-medium flex-shrink-0 mt-1">
                                            Lesen &rarr;
                                        </div>
                                    </div>
                                </a>
                            </FadeIn>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                    <FadeIn>
                        <div className="bg-[#121212] text-white rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mb-6 leading-tight">
                                    Wissen ist gut.<br />
                                    <span className="text-gray-500">Umsetzung ist besser.</span>
                                </h2>
                                <p className="text-gray-300 mb-8 max-w-lg">
                                    Du willst wissen, ob KI dein Unternehmen bereits empfiehlt? Starte mit einer kostenlosen Kurzanalyse.
                                </p>
                                <Button href="/ai-sichtbarkeit-now" primary text="KI-Sichtbarkeit prüfen" className="!py-4 !px-8" />
                            </div>
                        </div>
                    </FadeIn>
                </section>
            </main>

            <Footer />
        </div>
    );
}
