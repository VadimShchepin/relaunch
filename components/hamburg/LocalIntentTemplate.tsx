'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

type FAQItem = {
  q: string;
  a: string;
};

type CardItem = {
  title: string;
  text: string;
};

type RelatedLink = {
  title: string;
  description: string;
  href: string;
  tag: string;
};

type LocalIntentTemplateProps = {
  canonicalPath: string;
  title: string;
  description: string;
  eyebrow: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption?: string;
  summaryItems: string[];
  painPoints: string[];
  serviceCards: CardItem[];
  eeatCards: CardItem[];
  fitBullets: string[];
  processCards: CardItem[];
  faqItems: FAQItem[];
  relatedLinks: RelatedLink[];
  ctaTitle: string;
  ctaText: string;
  ctaHref: string;
  ctaLabel: string;
};

export function LocalIntentTemplate({
  canonicalPath,
  title,
  description,
  eyebrow,
  imageSrc,
  imageAlt,
  imageCaption,
  summaryItems,
  painPoints,
  serviceCards,
  eeatCards,
  fitBullets,
  processCards,
  faqItems,
  relatedLinks,
  ctaTitle,
  ctaText,
  ctaHref,
  ctaLabel,
}: LocalIntentTemplateProps) {
  const canonicalUrl = `https://aiseo.hamburg${canonicalPath}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description,
    provider: {
      '@id': 'https://aiseo.hamburg/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: 'Hamburg',
    },
    serviceType: title,
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#F7F5F2] text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <section className="relative pt-32 pb-20 md:pt-52 md:pb-24 px-6 md:px-12 lg:px-20 max-w-[980px] mx-auto">
          <FadeIn>
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li><a href="/" className="hover:text-brand-accent transition-colors">Startseite</a></li>
                <li>/</li>
                <li><a href="/hamburg" className="hover:text-brand-accent transition-colors">Hamburg</a></li>
                <li>/</li>
                <li className="text-black font-medium">{eyebrow}</li>
              </ol>
            </nav>

            <p className="text-sm font-semibold text-brand-accent uppercase tracking-[0.2em] mb-5">
              {eyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
              {description}
            </p>
          </FadeIn>
        </section>

        <div className="px-6 md:px-12 lg:px-20 max-w-[980px] mx-auto pb-10">
          <FadeIn>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full rounded-2xl shadow-lg"
              loading="eager"
            />
            {imageCaption ? <p className="text-xs text-gray-400 mt-2">{imageCaption}</p> : null}
          </FadeIn>
        </div>

        <section className="px-6 md:px-12 lg:px-20 max-w-[980px] mx-auto pb-12">
          <FadeIn>
            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-brand-accent mb-4">Warum diese Seite Geld verdienen kann und nicht nur gut aussieht</h2>
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                {summaryItems.map((item, index) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brand-accent font-bold mt-0.5 shrink-0">{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </section>

        <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 max-w-[980px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Welche Probleme diese Leistung fuer Hamburger Unternehmen loest
            </h2>
            <div className="grid gap-4">
              {painPoints.map((item, index) => (
                <FadeIn key={item} delay={index * 60}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <div className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-sm font-bold shrink-0">
                        {index + 1}
                      </span>
                      <p className="text-base text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 max-w-[980px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Was ich in dieser Leistung konkret mache
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {serviceCards.map((card, index) => (
                <FadeIn key={card.title} delay={index * 70}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 h-full">
                    <h3 className="text-lg font-semibold text-black mb-3">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{card.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 max-w-[980px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Warum dir Google, ChatGPT oder Perplexity diese Seite abkaufen sollten
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              EEAT ist hier kein Deko-Wort. Diese Signale machen den Unterschied zwischen Content und glaubwuerdiger Quelle.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {eeatCards.map((card, index) => (
                <FadeIn key={card.title} delay={index * 70}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 h-full">
                    <h3 className="text-lg font-semibold text-black mb-3">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{card.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 max-w-[980px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Fuer wen sich das besonders lohnt
            </h2>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <ul className="space-y-4 text-base text-gray-600 leading-relaxed">
                {fitBullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </section>

        <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 max-w-[980px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              So laeuft die Zusammenarbeit ab
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {processCards.map((card, index) => (
                <FadeIn key={card.title} delay={index * 70}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 h-full">
                    <div className="w-9 h-9 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center text-sm font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-black mb-3">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{card.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 max-w-[980px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-10">
              FAQ
            </h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.q} className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-black mb-3">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 max-w-[980px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Weitere Seiten in diesem Hamburg-Cluster
            </h2>
            <div className="space-y-5">
              {relatedLinks.map((link, index) => (
                <FadeIn key={link.href} delay={index * 60}>
                  <a
                    href={link.href}
                    className="block bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:border-brand-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
                        {link.tag}
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{link.description}</p>
                      </div>
                      <div className="text-brand-accent group-hover:translate-x-1 transition-transform duration-300 text-sm font-medium flex-shrink-0 mt-1">
                        Lesen &rarr;
                      </div>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 max-w-[980px] mx-auto border-t border-gray-100">
          <FadeIn>
            <div className="bg-[#121212] text-white rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mb-6 leading-tight">
                  {ctaTitle}
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl">{ctaText}</p>
                <Button href={ctaHref} primary text={ctaLabel} className="!py-4 !px-8" />
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}
