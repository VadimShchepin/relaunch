import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

const PAGES = [
  {
    title: 'KI-Sichtbarkeit Agentur Hamburg',
    description: 'Die umbrechende Service-Seite für Unternehmen, die in KI-Systemen konkret genannt werden wollen.',
    href: '/hamburg/ki-sichtbarkeit-agentur',
    tag: 'Kernleistung',
  },
  {
    title: 'AI SEO Agentur Hamburg',
    description: 'Kommerzielle Local-Intent-Seite für Unternehmen, die bereits aktiv nach AI SEO suchen.',
    href: '/hamburg/ai-seo-agentur',
    tag: 'AI SEO',
  },
  {
    title: 'ChatGPT Optimierung Hamburg',
    description: 'Wie Unternehmen in Hamburg für ChatGPT-Empfehlungen und GPT-Sichtbarkeit aufgebaut werden.',
    href: '/hamburg/chatgpt-optimierung',
    tag: 'ChatGPT',
  },
  {
    title: 'Perplexity Optimierung Hamburg',
    description: 'Fokussiert auf Zitationen, Quellenpräsenz und kaufnahe Sichtbarkeit in Perplexity.',
    href: '/hamburg/perplexity-optimierung',
    tag: 'Perplexity',
  },
  {
    title: 'Answer Engine Optimization Hamburg',
    description: 'AEO für lokale Unternehmen, die nicht nur ranken, sondern in Antworten landen wollen.',
    href: '/hamburg/answer-engine-optimization',
    tag: 'AEO',
  },
];

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'AI SEO Hamburg Service-Cluster',
  description: 'Lokale Buying-Intent-Seiten zu AI SEO, AEO, ChatGPT und Perplexity für Hamburg.',
  url: 'https://aiseo.hamburg/hamburg',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: PAGES.map((page, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://aiseo.hamburg${page.href}`,
      name: page.title,
    })),
  },
};

export default function HamburgHubPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F7F5F2] text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <main>
        <section className="relative pt-32 pb-20 md:pt-52 md:pb-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
                      <nav className="text-sm text-gray-500 mb-6">
              <a href="/" className="hover:text-brand-accent transition-colors">Startseite</a>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Hamburg</span>
            </nav>
            <p className="text-sm font-semibold text-brand-accent uppercase tracking-[0.2em] mb-5">
              Hamburg Cluster
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
              Lokale Buying-Intent-Seiten für AI SEO in Hamburg
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
              Diese Sektion ist bewusst nah am Kaufmoment gebaut: für Menschen, die nicht mehr nur verstehen wollen, was AI SEO ist, sondern einen passenden Partner in Hamburg suchen.
            </p>
        </section>

        <section className="py-10 md:py-16 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <div className="space-y-6">
            {PAGES.map((page, index) => (
                              <a
                  href={page.href}
                  className="block bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:border-brand-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
                      {page.tag}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl md:text-2xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                        {page.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">{page.description}</p>
                    </div>
                    <div className="text-brand-accent group-hover:translate-x-1 transition-transform duration-300 text-sm font-medium flex-shrink-0 mt-1">
                      Lesen &rarr;
                    </div>
                  </div>
                </a>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                      <div className="bg-[#121212] text-white rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mb-6 leading-tight">
                  Wer lokal empfohlen werden will, braucht lokal gedachte Seiten.
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Ich schaue mir an, welche dieser Seiten für dein Angebot wirklich Sinn ergeben und welche nur Luft produzieren würden. Davon gibt es online schon genug.
                </p>
                <Button href="/contact" primary text="Lokale KI-Sichtbarkeit anfragen" className="!py-4 !px-8" />
              </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
