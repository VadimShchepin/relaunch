'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { LinkedInIcon, InstagramIcon, TikTokIcon, GoogleIcon } from '@/components/ui/Icons';

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vadim-shchepin/',
    icon: LinkedInIcon,
    label: 'Projekte, Cases und Gedanken zu AI SEO',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/aiseo.hamburg/',
    icon: InstagramIcon,
    label: 'Behind the scenes und Quick-Tipps',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@aiseo.hamburg/',
    icon: TikTokIcon,
    label: 'Kurze Videos zu KI-Sichtbarkeit',
  },
  {
    name: 'Google Business',
    href: 'https://share.google/bkLeWZ9kPt2G8Lwtg',
    icon: GoogleIcon,
    label: 'Bewertungen und Standort',
  },
];

const VALUES = [
  {
    title: 'Ergebnis vor Ego',
    description: 'Ich optimiere nicht, damit es gut aussieht. Ich optimiere, bis es funktioniert. Jede Empfehlung basiert auf Daten, nicht auf Vermutungen.',
  },
  {
    title: 'Dranbleiben statt abliefern',
    description: 'Ein Audit ist kein Endprodukt. Ich arbeite mit deinen Daten weiter, teste, passe an und höre erst auf, wenn die Zahlen stimmen.',
  },
  {
    title: 'Ehrlich statt diplomatisch',
    description: 'Wenn etwas keinen Sinn macht, sage ich das. Kein Upselling, kein Buzzword-Bingo. Nur das, was dein Business wirklich weiterbringt.',
  },
  {
    title: 'Persönlich statt skaliert',
    description: 'Keine Agentur-Pipeline, kein Junior, der dein Projekt übernimmt. Du arbeitest direkt mit mir. Immer.',
  },
];

export default function UeberMichPage() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vadim Shchepin',
    jobTitle: 'Senior Engineer & KI-Sichtbarkeit Berater',
    url: 'https://aiseo.hamburg/ueber-mich',
    image: 'https://aiseo.hamburg/vadim_shchepin_2.jpeg',
    description: 'Datengetriebener AI SEO Berater aus Hamburg. Qualität und Ergebnisse stehen an erster Stelle.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hamburg',
      addressRegion: 'HH',
      addressCountry: 'DE',
    },
    sameAs: [
      'https://www.linkedin.com/in/vadim-shchepin/',
      'https://www.instagram.com/aiseo.hamburg/',
      'https://www.tiktok.com/@aiseo.hamburg/',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'aiseo.hamburg',
      url: 'https://aiseo.hamburg',
    },
  };

  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <main className="min-h-screen bg-[#F7F5F2]">

        {/* Hero */}
        <section className="px-6 md:px-12 lg:px-20 pt-32 pb-16 md:pt-40 md:pb-20 max-w-[1000px] mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              <img
                src="/vadim_shchepin_2.jpeg"
                alt="Vadim Shchepin"
                className="w-40 h-40 md:w-52 md:h-52 rounded-2xl object-cover shadow-lg flex-shrink-0"
              />
              <div>
                <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-3">
                  Über mich
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.04em] text-black mb-4 leading-[1.1]">
                  Vadim Shchepin
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                  Senior Engineer aus Hamburg. Ich baue keine SEO-Pakete &ndash; ich mache Unternehmen in KI-Systemen sichtbar.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Story */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 max-w-[800px] mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-8">
              Kurz gesagt
            </h2>
          </FadeIn>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <FadeIn delay={100}>
              <p>
                Ich habe jahrelang als Engineer Software gebaut. Irgendwann habe ich gemerkt: Die besten Produkte bringen nichts, wenn niemand sie findet. Nicht bei Google. Nicht bei ChatGPT. Nirgends.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p>
                Also habe ich angefangen, mich tief in Suchsysteme reinzuarbeiten. Erst klassisches SEO, dann die neue Welt: KI-Sichtbarkeit. Wie wird ein Unternehmen von ChatGPT empfohlen? Warum taucht eine Marke bei Perplexity auf und eine andere nicht?
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p>
                Was mich antreibt: Ich möchte, dass gute Unternehmen gefunden werden. Nicht die mit dem größten Budget, sondern die mit dem besten Angebot. KI-Systeme belohnen echte Expertise &ndash; und genau das mache ich sichtbar.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="font-semibold text-black">
                Ich arbeite mit deinen Daten, bis wir Ergebnisse sehen. Nicht bis das Budget aufgebraucht ist.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* How I work */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                So arbeite ich
              </h2>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl">
                Vier Prinzipien, an denen ich jede Entscheidung messe.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              {VALUES.map((value, i) => (
                <FadeIn key={value.title} delay={i * 100}>
                  <div className="bg-[#F7F5F2] rounded-xl p-6 md:p-8 h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </span>
                      <h3 className="text-lg font-bold text-black">{value.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* What makes me different */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 max-w-[800px] mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-8">
              Warum ich das anders mache
            </h2>
          </FadeIn>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <FadeIn delay={100}>
              <p>
                Die meisten Agenturen verkaufen Stunden. Ich verkaufe Ergebnisse. Wenn nach drei Monaten deine KI-Sichtbarkeit nicht messbar besser ist, habe ich meinen Job nicht gemacht.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p>
                Ich komme aus der Technik. Das heißt: Ich verstehe nicht nur, <em>was</em> optimiert werden muss, sondern auch <em>wie</em> es implementiert wird. Schema Markup, technisches SEO, Content-Strategie &ndash; alles aus einer Hand, ohne Übergabe-Verluste.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p>
                Und ich bin ehrlich: Wenn dein Unternehmen noch nicht bereit für KI-Sichtbarkeit ist, sage ich dir das. Lieber eine unbequeme Wahrheit als ein teurer Vertrag, der nichts bringt.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Sister brand */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-white">
          <div className="max-w-[800px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-8">
                Mehr als KI-Sichtbarkeit
              </h2>
            </FadeIn>

            <FadeIn delay={100}>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                KI-Sichtbarkeit ist mein Fokus &ndash; aber nicht alles, was ich mache. Unter <a href="https://webseite.hamburg/" target="_blank" rel="noopener noreferrer" className="text-brand-accent font-semibold underline underline-offset-2 hover:text-black transition-colors">webseite.hamburg</a> biete ich klassische digitale Dienstleistungen an: Webseiten-Erstellung, Google Ads, SEO und Online-Promotion.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Viele meiner Kunden starten dort mit einer neuen Website oder Ads-Kampagne und kommen dann hierher, wenn sie den nächsten Schritt machen wollen: sichtbar werden in ChatGPT, Perplexity und Co. Beide Seiten ergänzen sich &ndash; je nachdem, wo du gerade stehst.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <a
                href="https://webseite.hamburg/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-[#F7F5F2] hover:bg-gray-100 rounded-xl p-5 pr-8 transition-all hover:shadow-md group"
              >
                <span className="w-12 h-12 rounded-full bg-black/5 group-hover:bg-brand-accent/10 flex items-center justify-center transition-colors text-lg font-bold text-gray-700 group-hover:text-brand-accent">
                  W
                </span>
                <div>
                  <p className="font-bold text-black text-sm">webseite.hamburg</p>
                  <p className="text-gray-500 text-xs">Webseiten, Google Ads, SEO &amp; Promotion</p>
                </div>
              </a>
            </FadeIn>
          </div>
        </section>

        {/* Social Links */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                Lass uns connecten
              </h2>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl">
                Ich teile regelmäßig Einblicke, Cases und Quick-Tipps. Folge mir da, wo es für dich passt.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SOCIAL_LINKS.map((social, i) => (
                <FadeIn key={social.name} delay={i * 80}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-[#F7F5F2] hover:bg-gray-100 rounded-xl p-5 transition-all hover:shadow-md group"
                  >
                    <span className="w-12 h-12 rounded-full bg-black/5 group-hover:bg-brand-accent/10 flex items-center justify-center transition-colors">
                      <social.icon className="w-5 h-5 text-gray-700 group-hover:text-brand-accent transition-colors" />
                    </span>
                    <div>
                      <p className="font-bold text-black text-sm">{social.name}</p>
                      <p className="text-gray-500 text-xs">{social.label}</p>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 max-w-[800px] mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
              Lass uns reden
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Du willst wissen, ob KI-Sichtbarkeit für dein Unternehmen Sinn macht? Schreib mir &ndash; ich antworte persönlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                primary
                text="Kontakt aufnehmen"
                className="!py-3 !px-8"
              />
              <Button
                href="/ai-sichtbarkeit-now"
                text="KI-Sichtbarkeit prüfen"
                className="!py-3 !px-8"
              />
            </div>
          </FadeIn>
        </section>

      </main>

      <Footer />
    </div>
  );
}
