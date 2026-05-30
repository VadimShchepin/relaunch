'use client';

import React, { useMemo, useState } from 'react';
import type { Article, Topic } from './articles';
import { TOPICS } from './articles';

type Filter = 'Alle' | Topic;

export function WissenList({ articles }: { articles: Article[] }) {
  const [filter, setFilter] = useState<Filter>('Alle');

  // Only show filter chips for topics that actually have articles.
  const availableTopics = useMemo(() => {
    const present = new Set(articles.map((a) => a.topic));
    return TOPICS.filter((t) => present.has(t));
  }, [articles]);

  const visible = useMemo(
    () => (filter === 'Alle' ? articles : articles.filter((a) => a.topic === filter)),
    [articles, filter],
  );

  const filters: Filter[] = ['Alle', ...availableTopics];

  return (
    <>
      {/* Topic filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => {
          const active = f === filter;
          const count = f === 'Alle' ? articles.length : articles.filter((a) => a.topic === f).length;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                active
                  ? 'bg-brand-accent text-white border-brand-accent'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-brand-accent hover:text-brand-accent'
              }`}
            >
              {f}
              <span className={`ml-1.5 text-xs ${active ? 'text-white/70' : 'text-gray-400'}`}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* Articles */}
      <div className="space-y-6">
        {visible.map((article) => (
          <a
            key={article.href}
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
                <p className="text-gray-600 leading-relaxed">{article.description}</p>
              </div>
              <div className="text-brand-accent group-hover:translate-x-1 transition-transform duration-300 text-sm font-medium flex-shrink-0 mt-1">
                Lesen &rarr;
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
