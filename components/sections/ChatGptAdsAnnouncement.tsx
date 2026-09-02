import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowRightIcon, OpenAIIcon } from '@/components/ui/Icons';

/* Ankuendigungsband zwischen Hero und ProofStrip.
 *
 * Bewusst in der Klassensprache der Startseite gebaut (max-w-[1200px],
 * rounded-2xl, tracking-[0.2em]) und nicht in den neueren Tokens der
 * Unterseiten, damit die Naht zu Hero und ProofStrip nicht auffaellt.
 * Weisses Band, weil die Startseite sonst durchgehend brand-bg ist und
 * die Neuigkeit sich absetzen soll.
 *
 * Der Screenshot ist die echte eigene Anzeige. Der Beleg traegt den
 * Block, deshalb steht er im rechten Kanal und nicht als Dekoration.
 * Die Eyebrow nutzt brand-accent-ink statt brand-accent: brand-accent
 * traegt bei dieser Groesse zu wenig Kontrast (siehe CLAUDE.md).
 */

const MILESTONES = [
  { date: '24.08.2026', label: 'Anzeigen in Deutschland live' },
  { date: '31.08.2026', label: 'Self-Serve-Zugang offen' },
  { date: '01.09.2026', label: 'unsere ersten Kampagnen' },
];

export const ChatGptAdsAnnouncement: React.FC = () => (
  <section className="border-y border-gray-100 bg-white py-16 md:py-20">
    <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 md:px-12 lg:grid-cols-12 lg:gap-16 lg:px-20">
      <div className="lg:col-span-7">
        <FadeIn>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent-ink">
            <span className="rounded-full bg-brand-accent/10 px-2.5 py-1 tracking-[0.15em]">Neu</span>
            <OpenAIIcon className="h-3.5 w-3.5" />
            ChatGPT Ads, Deutschland
          </p>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-black md:text-4xl lg:text-5xl">
            Werbung in ChatGPT? <span className="text-brand-accent">Läuft bei uns bereits.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Seit dem 24. August 2026 sieht Deutschland Anzeigen in ChatGPT, seit dem 31. August kann sie jedes Unternehmen selbst buchen. Wir fahren seit dem ersten Tag eigene Kampagnen im Ads Manager und bauen dir dasselbe Setup auf: Konto, Gebote, Anzeigen und ein Conversion-Tracking, das vor dem Datenschutz besteht.
          </p>

          <dl className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-3">
            {MILESTONES.map((m) => (
              <div key={m.date} className="border-t border-gray-100 pt-3">
                <dt className="text-sm font-semibold tabular-nums text-black">{m.date}</dt>
                <dd className="mt-0.5 text-sm leading-snug text-gray-500">{m.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a
              href="/chatgpt-ads"
              className="group inline-flex items-center gap-2 self-start rounded-full bg-brand-dark px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              ChatGPT Ads schalten
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/termin"
              className="text-sm font-medium text-gray-600 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-black"
            >
              Oder erst im 15-Minuten-Call prüfen lassen
            </a>
          </div>
        </FadeIn>
      </div>

      <div className="lg:col-span-5">
        <FadeIn delay={120}>
          <figure>
            <div className="rounded-2xl border border-gray-100 bg-brand-bg p-3 shadow-lg sm:p-4">
              <img
                src="/image/chatgpt-ads/chatgpt-anzeige-aiseo.webp"
                width={732}
                height={274}
                alt="Anzeige von aiseo.hamburg in ChatGPT mit der Überschrift Frag die KI nach deiner Branche und dem Hinweis Anzeige"
                className="w-full rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="mt-4 text-sm leading-relaxed text-gray-500">
              Keine Illustration: unsere eigene Anzeige, wie ChatGPT sie ausliefert. Screenshot aus dem Ads Manager, 1. September 2026.
            </figcaption>
          </figure>
        </FadeIn>
      </div>
    </div>
  </section>
);
