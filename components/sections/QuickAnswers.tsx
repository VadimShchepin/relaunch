import type { ReactNode } from 'react';

/* Short Q&A block for the conversion pages (/contact, /termin). These pages
   were mostly form, so crawlers saw ~150 words. The answers here are the
   questions people otherwise ask by mail before they book. */

export type QuickAnswer = { q: string; a: ReactNode };

export function QuickAnswers({ title, items }: { title: string; items: QuickAnswer[] }) {
  return (
    <section className="border-t border-brand-line bg-brand-bg px-6 py-block md:px-12 lg:px-20">
      <div className="max-w-article mx-auto">
        <h2 className="text-heading font-semibold text-brand-text">{title}</h2>
        <dl className="mt-stack grid gap-x-block gap-y-stack md:grid-cols-2">
          {items.map((item) => (
            <div key={item.q} className="border-t border-brand-hairline pt-flow">
              <dt className="text-body font-semibold text-brand-text">{item.q}</dt>
              <dd className="mt-2 max-w-measure text-body text-brand-muted">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
