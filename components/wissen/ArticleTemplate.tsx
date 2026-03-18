'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

export type ArticleFAQ = {
  q: string;
  a: string;
};

export type ArticleCard = {
  title: string;
  text: string;
};

export type ArticleImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ArticleSection = {
  id: string;
  heading: string;
  intro?: string;
  paragraphs?: string[];
  stat?: string;
  cards?: ArticleCard[];
  bullets?: string[];
  note?: string;
  quote?: string;
};

export type RelatedArticle = {
  title: string;
  description: string;
  href: string;
  tag: string;
};

export type ArticleTemplateProps = {
  canonicalPath: string;
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt: string;
  breadcrumbLabel: string;
  eyebrow?: string;
  image?: ArticleImage;
  summaryTitle?: string;
  summaryItems: string[];
  sections: ArticleSection[];
  faqs: ArticleFAQ[];
  galleryTitle?: string;
  galleryIntro?: string;
  gallery?: ArticleImage[];
  relatedArticles?: RelatedArticle[];
  ctaTitle: string;
  ctaText: string;
  ctaHref: string;
  ctaLabel: string;
};

export function ArticleTemplate({
  canonicalPath,
  title,
  description,
  publishedAt,
  modifiedAt,
  breadcrumbLabel,
  eyebrow = 'Wissen',
  image,
  summaryTitle = 'TL;DR',
  summaryItems,
  sections,
  faqs,
  galleryTitle,
  galleryIntro,
  gallery,
  relatedArticles,
  ctaTitle,
  ctaText,
  ctaHref,
  ctaLabel,
}: ArticleTemplateProps) {
  const canonicalUrl = `https://aiseo.hamburg${canonicalPath}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image ? `https://aiseo.hamburg${image.src}` : undefined,
    author: {
      '@type': 'Person',
      name: 'Vadim Shchepin',
      url: 'https://aiseo.hamburg/ueber-mich',
      jobTitle: 'AI SEO Specialist',
    },
    publisher: {
      '@id': 'https://aiseo.hamburg/#organization',
    },
    datePublished: publishedAt,
    dateModified: modifiedAt,
    mainEntityOfPage: canonicalUrl,
    inLanguage: 'de',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#F7F5F2] text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main>
        <section className="relative pt-32 pb-20 md:pt-52 md:pb-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <FadeIn>
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li><a href="/" className="hover:text-brand-accent transition-colors">Startseite</a></li>
                <li>/</li>
                <li><a href="/wissen" className="hover:text-brand-accent transition-colors">Wissen</a></li>
                <li>/</li>
                <li className="text-black font-medium">{breadcrumbLabel}</li>
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
            <p className="text-sm text-gray-400 mt-6">
              Veröffentlicht am {publishedAt} · Aktualisiert am {modifiedAt}
            </p>
          </FadeIn>
        </section>

        {image ? (
          <div className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-8">
            <FadeIn>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full rounded-2xl shadow-lg"
                loading="eager"
              />
              {image.caption ? (
                <p className="text-xs text-gray-400 mt-2">{image.caption}</p>
              ) : null}
            </FadeIn>
          </div>
        ) : null}

        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
          <FadeIn>
            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-brand-accent mb-4">{summaryTitle}</h2>
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

        {sections.map((section, sectionIndex) => (
          <section
            key={section.id}
            id={section.id}
            className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100"
          >
            <FadeIn delay={sectionIndex * 40}>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
                {section.heading}
              </h2>

              {section.intro ? (
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {section.intro}
                </p>
              ) : null}

              {section.stat ? (
                <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm my-8">
                  <p className="text-xl md:text-2xl font-semibold text-black leading-snug">
                    {section.stat}
                  </p>
                </div>
              ) : null}

              {section.paragraphs ? (
                <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}

              {section.cards ? (
                <div className="grid gap-6 md:grid-cols-2 mt-10">
                  {section.cards.map((card) => (
                    <div key={card.title} className="bg-white border border-gray-100 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-black mb-3">{card.title}</h3>
                      <p className="text-base text-gray-600 leading-relaxed">{card.text}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {section.bullets ? (
                <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 mt-10">
                  <ul className="space-y-4 text-base text-gray-600 leading-relaxed">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {section.note ? (
                <p className="text-sm text-gray-500 leading-relaxed mt-8">
                  {section.note}
                </p>
              ) : null}

              {section.quote ? (
                <blockquote className="mt-10 border-l-4 border-brand-accent pl-5 text-xl text-black font-medium leading-relaxed">
                  {section.quote}
                </blockquote>
              ) : null}
            </FadeIn>
          </section>
        ))}

        {gallery && gallery.length > 0 ? (
          <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-6">
                {galleryTitle ?? 'Belege & Screenshots'}
              </h2>
              {galleryIntro ? (
                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                  {galleryIntro}
                </p>
              ) : null}

              <div className="grid gap-6 md:grid-cols-2">
                {gallery.map((asset, index) => (
                  <FadeIn key={asset.src} delay={index * 80}>
                    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                      <img
                        src={asset.src}
                        alt={asset.alt}
                        className="w-full rounded-xl"
                        loading="lazy"
                      />
                      {asset.caption ? (
                        <p className="text-sm text-gray-500 leading-relaxed mt-3">{asset.caption}</p>
                      ) : null}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </section>
        ) : null}

        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-10">
              FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-black mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {relatedArticles && relatedArticles.length > 0 ? (
          <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
                Weiterführende Artikel
              </h2>
              <div className="space-y-5">
                {relatedArticles.map((article, index) => (
                  <FadeIn key={article.href} delay={index * 60}>
                    <a
                      href={article.href}
                      className="block bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:border-brand-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-bold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
                          {article.tag}
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                            {article.title}
                          </h3>
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
            </FadeIn>
          </section>
        ) : null}

        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <div className="bg-[#121212] text-white rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mb-6 leading-tight">
                  {ctaTitle}
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  {ctaText}
                </p>
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
