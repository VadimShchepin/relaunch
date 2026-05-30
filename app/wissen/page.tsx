import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { sortedArticles } from './articles';
import { WissenList } from './WissenList';

const ARTICLES = sortedArticles();

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
                </section>

                {/* Articles Grid */}
                <section className="py-10 md:py-16 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
                    <WissenList articles={ARTICLES} />
                </section>

                {/* CTA */}
                <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
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
                </section>
            </main>

            <Footer />
        </div>
    );
}
