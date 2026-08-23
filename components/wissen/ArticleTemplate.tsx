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
  // Intrinsic pixel size. Supply it for photography so the browser reserves the
  // box before the file arrives; screenshots without it keep the old behaviour.
  width?: number;
  height?: number;
};

export type ArticleDefinition = {
  term: string;
  definition: string;
  formula?: string;
};

export type ArticleTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
  note?: string;
};

export type ArticleStep = {
  title: string;
  text: string;
};

export type ArticleWarning = {
  title: string;
  text: string;
};

export type ArticleSource = {
  label: string;
  text: string;
  href?: string;
};

export type ArticleSection = {
  id: string;
  heading: string;
  intro?: string;
  image?: ArticleImage;
  definitions?: ArticleDefinition[];
  paragraphs?: string[];
  stat?: string;
  table?: ArticleTable;
  cards?: ArticleCard[];
  bullets?: string[];
  steps?: ArticleStep[];
  warning?: ArticleWarning;
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
  sources?: ArticleSource[];
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
  sources,
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

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
      { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
      { '@type': 'ListItem', position: 3, name: breadcrumbLabel },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
                width={image.width}
                height={image.height}
                className="w-full h-auto rounded-2xl shadow-lg"
                loading="eager"
                fetchPriority="high"
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

              {section.image ? (
                <figure className="mb-10">
                  <img
                    src={section.image.src}
                    alt={section.image.alt}
                    width={section.image.width}
                    height={section.image.height}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto rounded-2xl shadow-sm"
                  />
                  {section.image.caption ? (
                    <figcaption className="mt-3 text-sm text-gray-500 leading-relaxed">
                      {section.image.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ) : null}

              {section.definitions ? (
                <dl className="space-y-4 mb-10">
                  {section.definitions.map((entry) => (
                    <div
                      key={entry.term}
                      className="bg-white border-l-4 border-brand-accent rounded-r-2xl rounded-l-sm p-6 shadow-sm"
                    >
                      <dt className="text-lg font-semibold text-black mb-2">{entry.term}</dt>
                      <dd className="text-base text-gray-600 leading-relaxed">
                        {entry.definition}
                        {entry.formula ? (
                          <span className="mt-3 block rounded-lg bg-gray-50 px-4 py-3 font-mono text-sm text-black">
                            {entry.formula}
                          </span>
                        ) : null}
                      </dd>
                    </div>
                  ))}
                </dl>
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

              {section.table ? (
                <figure className="mt-10">
                  <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white">
                    <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 bg-gray-50">
                          {section.table.headers.map((header) => (
                            <th
                              key={header}
                              scope="col"
                              className="px-4 py-3 font-semibold text-black align-bottom"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.join('|')} className="border-b border-gray-100 last:border-0">
                            {row.map((cell, cellIndex) => (
                              <td
                                key={`${row[0]}-${cellIndex}`}
                                className={
                                  cellIndex === 0
                                    ? 'px-4 py-3 font-medium text-black align-top'
                                    : 'px-4 py-3 text-gray-600 align-top'
                                }
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {section.table.caption ? (
                    <figcaption className="mt-3 text-sm text-gray-500 leading-relaxed">
                      {section.table.caption}
                    </figcaption>
                  ) : null}
                  {section.table.note ? (
                    <p className="mt-2 text-xs text-gray-400 leading-relaxed">{section.table.note}</p>
                  ) : null}
                </figure>
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

              {section.steps ? (
                <ol className="mt-10 space-y-8">
                  {section.steps.map((step, stepIndex) => (
                    <li key={step.title} className="flex gap-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-base font-bold text-brand-accent">
                        {stepIndex + 1}
                      </span>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-black mb-2">
                          {step.title}
                        </h3>
                        <p className="text-base text-gray-600 leading-relaxed">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              ) : null}

              {section.warning ? (
                <div className="mt-10 rounded-2xl border-2 border-brand-orange/40 bg-brand-orange/5 p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-black mb-3">{section.warning.title}</h3>
                  <p className="text-base text-gray-700 leading-relaxed">{section.warning.text}</p>
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

        {sources && sources.length > 0 ? (
          <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
                Quellen
              </h2>
              <ul className="space-y-4 rounded-2xl bg-white border border-gray-100 p-6 md:p-8">
                {sources.map((source) => (
                  <li key={source.label} className="text-sm text-gray-600 leading-relaxed">
                    <strong className="text-black">{source.label}:</strong> {source.text}
                    {source.href ? (
                      <>
                        {' '}
                        <a
                          href={source.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-accent underline underline-offset-2 break-words"
                        >
                          Quelle
                        </a>
                      </>
                    ) : null}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </section>
        ) : null}

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
