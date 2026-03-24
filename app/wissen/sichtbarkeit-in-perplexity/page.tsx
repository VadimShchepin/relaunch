'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sichtbarkeit in Perplexity AI: So wirst du als Quelle zitiert',
  description: 'Perplexity ist eine Antwortmaschine mit 45 Mio. Nutzern und 370% Wachstum. Wie du mit Bing-Optimierung, Content-Frische und extrahierbaren Absaetzen zitiert wirst.',
  author: {
    '@type': 'Person',
    name: 'Vadim Shchepin',
    url: 'https://aiseo.hamburg/ueber-mich',
    jobTitle: 'AI SEO Specialist',
  },
  publisher: {
    '@type': 'Organization',
    name: 'aiseo.hamburg',
    url: 'https://aiseo.hamburg',
  },
  datePublished: '2026-03-12',
  dateModified: '2026-03-24',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://aiseo.hamburg/wissen/sichtbarkeit-in-perplexity',
  },
  inLanguage: 'de',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Nutzt Perplexity den Google-Index oder den Bing-Index?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Perplexity nutzt primaer den Bing-Index. Wer bei Perplexity zitiert werden will, muss seine Seiten bei Bing optimieren und indexieren lassen. Google-Rankings allein reichen nicht. Das bedeutet konkret: Bing Webmaster Tools einrichten, Sitemap einreichen und Bing-spezifische Ranking-Signale beachten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie schnell erscheinen neue Inhalte bei Perplexity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Perplexity aktualisiert seinen Index taeglich. Neue oder aktualisierte Inhalte koennen innerhalb von 2-3 Tagen in Antworten erscheinen. Das ist fundamental schneller als bei ChatGPT, wo Trainingsdaten Monate brauchen. Fuer Perplexity ist Content-Frische kein Bonus, sondern Voraussetzung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen Perplexity und ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Perplexity ist eine Antwortmaschine, die bei jeder Anfrage live das Web durchsucht und Quellen mit nummerierten Referenzen zitiert. ChatGPT ist ein Chatbot, der primaer auf Trainingsdaten zurueckgreift. Bei Perplexity zaehlt die einzelne Seite, bei ChatGPT die gesamte Marke. Perplexity ist der Equalizer fuer kleinere Unternehmen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Muss ich PerplexityBot in robots.txt erlauben?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Blockierst du PerplexityBot, wirst du nicht gecrawlt und nicht zitiert. Pruefe deine robots.txt und stelle sicher, dass PerplexityBot explizit erlaubt ist. Viele Security-Plugins und CDN-Einstellungen blockieren KI-Crawler pauschal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist Perplexity fuer B2B-Unternehmen relevant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sehr. 80% der Perplexity-Nutzer haben einen Hochschulabschluss, 30% sind in leitenden Positionen. Laut BCG 2026 nutzen 67% der B2B-Einkaeufer unter 35 KI-Suche fuer ihre Recherche. Perplexity erreicht exakt die Entscheider, die du willst.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ein unbekanntes Unternehmen bei Perplexity zitiert werden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Perplexity zitiert auf Seiten-Ebene, nicht auf Marken-Ebene. Eine einzelne gut optimierte Seite mit extrahierbaren Fakten kann als Quelle erscheinen, selbst wenn die Marke unbekannt ist. Das unterscheidet Perplexity fundamental von ChatGPT, wo Markenbekanntheit entscheidend ist.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie messe ich meine Perplexity-Sichtbarkeit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drei Wege: Referral-Traffic von perplexity.ai in deinem Analytics pruefen, Server-Logs auf den PerplexityBot User-Agent analysieren und den Indexierungsstatus in Bing Webmaster Tools ueberwachen. Die Conversion-Rate von Perplexity-Traffic liegt typischerweise 4x hoeher als bei organischem Google-Traffic.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'Sichtbarkeit in Perplexity' },
  ],
};

export default function SichtbarkeitInPerplexityPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F7F5F2] text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 md:pt-52 md:pb-16 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <FadeIn>
            <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-8">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li><a href="/" className="hover:text-brand-accent transition-colors">Startseite</a></li>
                <li>/</li>
                <li><a href="/wissen" className="hover:text-brand-accent transition-colors">Wissen</a></li>
                <li>/</li>
                <li className="text-black font-medium">Sichtbarkeit in Perplexity</li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
              Perplexity zitiert deinen Wettbewerber.<br />
              Nicht dich.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
              45 Millionen aktive Nutzer. 370% Wachstum. 4x hoehere Conversion-Rate als Google.
              Perplexity zitiert nicht Marken, sondern einzelne Seiten. Auch unbekannte Unternehmen
              koennen als Quelle erscheinen. Wirst du zitiert?
            </p>
          </FadeIn>
        </section>

        {/* Image */}
        <div className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-8">
          <FadeIn>
            <img
              src="/images/wissen/perplexity.jpg"
              alt="Perplexity AI Sichtbarkeit: Datenanalyse und KI-Suche"
              className="w-full rounded-2xl shadow-lg"
              loading="eager"
            />
            <p className="text-xs text-gray-400 mt-2">Foto: Unsplash</p>
          </FadeIn>
        </div>

        {/* TLDR */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
          <FadeIn>
            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
              <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">Auf den Punkt</p>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">1.</span>
                  <span>Perplexity durchsucht bei jeder Anfrage live das Web &ndash; ueber den Bing-Index, nicht Google.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">2.</span>
                  <span>Einzelne Seiten werden zitiert, nicht Marken. Auch unbekannte Unternehmen koennen als Quelle erscheinen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">3.</span>
                  <span>Taegliche Index-Updates: Neue Inhalte erscheinen in 2&ndash;3 Tagen, nicht in Monaten.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">4.</span>
                  <span>Premium-Zielgruppe: 80% Akademiker, 30% Fuehrungskraefte, 67% B2B-Einkaeufer unter 35 nutzen KI-Suche.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">5.</span>
                  <span>Conversion-Rate 4x hoeher als Google-Traffic. Die meisten deiner Wettbewerber ignorieren Perplexity komplett.</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </section>

        {/* Stats Grid */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-16">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { number: '45 Mio.', label: 'Aktive Nutzer' },
                { number: '370%', label: 'Wachstum YoY' },
                { number: '4x', label: 'Hoehere Conversion' },
                { number: '2-3 Tage', label: 'Bis zur Zitation' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm text-center">
                  <div className="text-2xl md:text-3xl font-bold text-black mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Warum Perplexity dein unterschaetzter Wachstumskanal ist */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Warum Perplexity dein unterschaetzter Wachstumskanal ist
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Die meisten Unternehmen ignorieren Perplexity. Sie optimieren fuer Google, vielleicht noch fuer
                <a href="/wissen/sichtbarkeit-in-chatgpt" className="text-brand-accent hover:underline"> ChatGPT</a>.
                Perplexity? Steht nicht auf der Agenda. Und genau das ist deine Chance.
              </p>
              <p>
                Perplexity waechst mit <strong className="text-black">370% pro Jahr</strong>. 45 Millionen aktive Nutzer.
                Ueber 100 Millionen Suchanfragen pro Woche. Die Nutzerbasis ist die wertvollste im gesamten Suchmarkt:
                80% Akademiker, 30% in leitenden Positionen, 65% einkommensstark. Das sind exakt die Entscheider, die deine
                Dienstleistung beauftragen.
              </p>

              <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm">
                <p className="text-lg text-black font-medium">
                  67% der B2B-Einkaeufer unter 35 nutzen KI-Suche fuer ihre Recherche (BCG 2026). Nicht Google. Nicht LinkedIn. KI-Suche.
                  Wenn du bei Perplexity nicht zitiert wirst, existierst du fuer diese Entscheider schlicht nicht.
                </p>
              </div>

              <p>
                Der entscheidende Unterschied zu ChatGPT und Google: Perplexity zitiert <strong className="text-black">einzelne Seiten</strong>,
                nicht Marken. Du brauchst keine grosse Marke, keine Millionen Backlinks, keine jahrelange Domain-Autoritaet.
                Eine einzige gut optimierte Seite mit den richtigen Fakten kann als Quelle erscheinen.
                Fuer KMUs und Nischenanbieter ist das ein massiver Hebel.
              </p>
              <p>
                Und: Die Conversion-Rate von Perplexity-Traffic liegt <strong className="text-black">4x hoeher</strong> als bei
                organischem Google-Traffic. Perplexity-Nutzer kommen mit klarer Kaufintention. Sie haben recherchiert,
                verglichen und sich fuer dich entschieden &ndash; bevor sie ueberhaupt auf deiner Website landen.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Das Perplexity-Problem deiner Konkurrenz */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Das Perplexity-Problem deiner Konkurrenz
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                Deine Wettbewerber haben kein Perplexity-Problem. Sie wissen nicht einmal, dass Perplexity existiert.
                Und genau das macht es zum groessten ungenutzten Wachstumskanal fuer dein Unternehmen.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white border-2 border-brand-orange rounded-xl p-6 shadow-sm">
                <p className="text-lg md:text-xl font-semibold text-black leading-snug">
                  Dein Wettbewerber optimiert fuer Google. Du optimierst fuer Perplexity. In 2 Tagen bist du zitiert. Er weiss nicht einmal, dass er Traffic verliert.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-semibold text-black text-lg mb-2">Die meisten ignorieren Perplexity komplett</h3>
                <p className="text-gray-600 leading-relaxed">
                  Waehrend alle auf Google-Rankings starren, waechst Perplexity im Schatten. 370% Nutzerwachstum,
                  aber kaum ein Unternehmen optimiert aktiv dafuer. Das bedeutet: weniger Wettbewerb, schnellere Ergebnisse,
                  hoehere Chancen fuer fruehe Mover.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-semibold text-black text-lg mb-2">Wer Bing ignoriert, ist bei Perplexity unsichtbar</h3>
                <p className="text-gray-600 leading-relaxed">
                  95% der Unternehmen in Deutschland optimieren ausschliesslich fuer Google. Perplexity nutzt den Bing-Index.
                  Wer keine Bing Webmaster Tools eingerichtet hat, seine Sitemap dort nicht eingereicht hat und seine
                  Bing-Rankings nicht kennt, existiert fuer Perplexity nicht. Drei Schritte, die deine Konkurrenz nicht macht.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-semibold text-black text-lg mb-2">Statischer Content wird nicht zitiert</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dein Wettbewerber hat seinen Blog-Artikel 2024 geschrieben und nie aktualisiert. Perplexitys Index wird
                  taeglich aktualisiert. Inhalte, die seit Monaten unberuehrt sind, verlieren gegen frische Inhalte mit
                  aktuellem Datum. Content-Frische ist bei Perplexity das, was Backlinks bei Google sind.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-semibold text-black text-lg mb-2">Du brauchst keine grosse Marke</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bei ChatGPT gewinnt die bekannteste Marke. Bei Perplexity gewinnt die beste Seite. Ein gut strukturierter
                  Fachbeitrag mit konkreten Zahlen und klaren Aussagen kann sofort als Quelle zitiert werden &ndash; unabhaengig
                  davon, ob jemand dein Unternehmen kennt. Das ist der Equalizer fuer KMUs.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Was Perplexity anders macht */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
              Was Perplexity anders macht
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Perplexity ist kein Chatbot. Es ist eine Antwortmaschine mit einem
                fundamental anderen Ansatz als <a href="/wissen/sichtbarkeit-in-chatgpt" className="text-brand-accent hover:underline">ChatGPT</a> oder Google.
              </p>

              <div className="grid gap-4 mt-4">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <h3 className="font-semibold text-black text-lg mb-2">Live-Web statt Trainingsdaten</h3>
                  <p className="text-gray-600 text-base">
                    ChatGPT greift auf Monate alte Trainingsdaten zurueck. Perplexity durchsucht bei jeder
                    Anfrage live das Web. Jede Antwort basiert auf aktuellen Quellen, nicht auf eingefrorenem Wissen.
                    Das bedeutet: Aenderungen an deinem Content wirken innerhalb von Tagen, nicht Monaten.
                  </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <h3 className="font-semibold text-black text-lg mb-2">Bing-Index, nicht Google-Index</h3>
                  <p className="text-gray-600 text-base">
                    Perplexity nutzt primaer den Bing-Index. Deine Google-Rankings sind irrelevant,
                    wenn Bing deine Seiten nicht kennt. Bing Webmaster Tools sind Pflicht. Das ignorieren
                    fast alle Unternehmen in Deutschland &ndash; und genau das ist die Luecke, die du nutzen kannst.
                    Mehr zu den <a href="/wissen/technische-ki-sichtbarkeit" className="text-brand-accent hover:underline">technischen Voraussetzungen</a>.
                  </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <h3 className="font-semibold text-black text-lg mb-2">Taegliche Index-Updates</h3>
                  <p className="text-gray-600 text-base">
                    Der Index wird taeglich aktualisiert. Neue Inhalte koennen in 2&ndash;3 Tagen in Antworten
                    erscheinen. Bei ChatGPT dauert das Monate. Frische ist bei Perplexity kein Bonus &ndash;
                    es ist Voraussetzung. Statischer Content verliert gegen frischen Content. Immer.
                  </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <h3 className="font-semibold text-black text-lg mb-2">Seiten-Zitation statt Marken-Zitation</h3>
                  <p className="text-gray-600 text-base">
                    ChatGPT empfiehlt Marken. Perplexity zitiert einzelne URLs mit nummerierten Referenzen [1] [2] [3].
                    Eine gut optimierte Unterseite kann zitiert werden, selbst wenn deine Marke unbekannt ist.
                    Das aendert alles fuer kleinere Unternehmen und Nischenanbieter.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Wie Perplexity Quellen auswaehlt */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Wie Perplexity Quellen auswaehlt
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                Perplexity waehlt Quellen pro Anfrage aus dem Bing-Index. Es gibt keine feste
                Rangfolge. Fuenf Kriterien entscheiden, ob deine Seite zitiert wird &ndash; oder ob dein
                Wettbewerber den Platz bekommt.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: 'Extrahierbarkeit',
                  desc: 'Perplexity braucht Absaetze, die es direkt als Antwort-Snippet verwenden kann. Ideal: 40-60 Woerter, ein Fakt pro Absatz, klare Aussage im ersten Satz. Langer Fliesstext ohne Struktur? Wird uebersprungen.',
                },
                {
                  title: 'Content-Frische',
                  desc: 'Aktualisierungsdatum zaehlt. Seiten, die in den letzten 2 Wochen geaendert wurden, werden bevorzugt. Statische Inhalte von 2024 verlieren gegen frische von gestern. Aktualisiere mindestens alle 2 Wochen.',
                },
                {
                  title: 'Bing-Indexierung',
                  desc: 'Keine Bing-Indexierung, keine Perplexity-Zitation. So einfach. Pruefe den Status in den Bing Webmaster Tools und reiche deine Sitemap dort ein. Die meisten Unternehmen haben das nie getan.',
                },
                {
                  title: 'Faktische Praezision',
                  desc: 'Konkrete Zahlen, Daten, Statistiken und Quellenangaben werden haeufiger zitiert als vage Aussagen. Perplexity sucht verifizierbare Fakten, keine Meinungen und keine Marketing-Floskeln.',
                },
                {
                  title: 'Nischen-Autoritaet',
                  desc: 'Thematisch fokussierte Websites gewinnen gegen Generalisten. Perplexity bevorzugt die Quelle, die sich tief mit einem Thema befasst, nicht die, die alles oberflaechlich abdeckt. Spezialisierung schlaegt Breite.',
                },
              ].map((item) => (
                <FadeIn key={item.title}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent/50 transition-all">
                    <h3 className="font-semibold text-black mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-base">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* 7 Perplexity-spezifische Strategien */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              7 Perplexity-spezifische Strategien
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Diese Strategien funktionieren speziell fuer Perplexity. Manche ueberschneiden sich mit
              <a href="/wissen/sichtbarkeit-in-chatgpt" className="text-brand-accent hover:underline"> ChatGPT-Strategien</a>,
              aber die Gewichtung ist voellig anders.
            </p>

            <div className="space-y-8">
              {[
                {
                  num: '01',
                  title: 'Schreibe extrahierbare Absaetze',
                  text: 'Jeder Absatz muss fuer sich allein als Antwort funktionieren. 40-60 Woerter, Kernaussage im ersten Satz, ein Fakt pro Absatz. Perplexity extrahiert Absaetze als Snippets. Wenn dein Text erst nach 200 Woertern zur Sache kommt, wirst du uebersprungen. Teste jeden Absatz: Kann er allein als Antwort stehen?',
                },
                {
                  num: '02',
                  title: 'Aktualisiere alle 2 Wochen',
                  text: 'Perplexitys Index ist taeglich frisch. Seiten, die seit Monaten unberuehrt sind, verlieren gegen Seiten mit aktuellem Datum. Aktualisiere deine wichtigsten Seiten alle 2 Wochen: neue Zahlen, aktuelle Beispiele, frisches Datum. Content-Frische ist bei Perplexity das, was Backlinks bei Google sind.',
                },
                {
                  num: '03',
                  title: 'Optimiere fuer Bing, nicht fuer Google',
                  text: 'Reiche deine Sitemap bei den Bing Webmaster Tools ein. Pruefe, welche Seiten indexiert sind. Behebe Crawl-Fehler bei Bing. Bing gewichtet exakte Keyword-Matches im Title staerker als Google und bewertet Social Signals hoeher. Wer Bing ignoriert, ist bei Perplexity unsichtbar.',
                },
                {
                  num: '04',
                  title: 'Baue Multi-Plattform-Praesenz auf',
                  text: 'Perplexity durchsucht nicht nur Websites. Reddit-Threads, YouTube-Beschreibungen, Quora-Antworten, LinkedIn-Artikel und Fachforen werden als Quellen herangezogen. Deine Expertise auf drei Plattformen ist staerker als perfekter Content auf einer.',
                },
                {
                  num: '05',
                  title: 'Erstelle dedizierte Autorenseiten',
                  text: 'Perplexity bewertet, wer den Content geschrieben hat. Eine Autorenseite mit Bio, Qualifikationen und verlinkten Beitraegen ist ein starkes Vertrauenssignal. Anonyme Inhalte werden seltener zitiert als Inhalte mit klarer Autorenschaft und nachweisbarer Expertise.',
                },
                {
                  num: '06',
                  title: 'Nutze Daten, Zahlen und Fakten',
                  text: 'Perplexity bevorzugt verifizierbare Aussagen. Statt "Viele Unternehmen haben dieses Problem" schreibe "70% der Unternehmens-Websites blockieren mindestens einen KI-Crawler (Orainti 2025)". Konkrete Zahlen mit Quellenangabe werden 3x haeufiger zitiert als vage Behauptungen.',
                },
                {
                  num: '07',
                  title: 'Mobile Speed unter 2 Sekunden',
                  text: 'Perplexity bevorzugt Seiten, die technisch schnell ausgeliefert werden. Unter 2 Sekunden Ladezeit auf Mobile. Kein Render-Blocking JavaScript. Sauberer HTML-Output. Mehr zu den technischen Anforderungen im Guide zur technischen KI-Sichtbarkeit.',
                },
              ].map((strategy, i) => (
                <FadeIn key={i} delay={i * 50}>
                  <div className="flex gap-5">
                    <div className="text-brand-accent font-bold text-sm mt-1 flex-shrink-0 w-6">{strategy.num}</div>
                    <div>
                      <h3 className="font-semibold text-black text-lg mb-2">{strategy.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{strategy.text}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Perplexity vs. ChatGPT */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Perplexity vs. ChatGPT: Komplett andere Regeln
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                Wer beide Plattformen gleich behandelt, verschwendet Budget. Die Unterschiede sind fundamental.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden border border-gray-100">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-black text-sm">Kriterium</th>
                    <th className="text-left p-4 font-semibold text-black text-sm">Perplexity</th>
                    <th className="text-left p-4 font-semibold text-black text-sm">ChatGPT</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm">
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-black">Funktionsprinzip</td>
                    <td className="p-4">Antwortmaschine mit Quellenangaben</td>
                    <td className="p-4">Chatbot mit optionaler Websuche</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-black">Datenquelle</td>
                    <td className="p-4">Live-Web ueber Bing-Index</td>
                    <td className="p-4">Trainingsdaten + Bing-Websuche</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-black">Index-Aktualitaet</td>
                    <td className="p-4">Taeglich</td>
                    <td className="p-4">Monate (Trainingszyklen)</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-black">Was zitiert wird</td>
                    <td className="p-4">Einzelne URLs (Seiten-Ebene)</td>
                    <td className="p-4">Marken (Gesamtautoritaet)</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-black">Zitierformat</td>
                    <td className="p-4">Nummerierte Referenzen [1] [2] [3]</td>
                    <td className="p-4">Fliesstext-Empfehlung</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-black">Optimierungsfokus</td>
                    <td className="p-4">Content-Frische, Bing, extrahierbare Fakten</td>
                    <td className="p-4">Brand Mentions, E-E-A-T, Konsistenz</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-black">Zeit bis Sichtbarkeit</td>
                    <td className="p-4">2&ndash;3 Tage</td>
                    <td className="p-4">Wochen bis Monate</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-black">Chance fuer KMUs</td>
                    <td className="p-4">Hoch &ndash; einzelne Seite reicht</td>
                    <td className="p-4">Gering &ndash; Markenbekanntheit zaehlt</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 mt-8 shadow-sm">
              <p className="text-lg text-black font-medium">
                Bei Perplexity gewinnt die beste Seite. Bei ChatGPT gewinnt die bekannteste Marke.
                Das macht Perplexity zum Equalizer fuer kleinere Unternehmen und Nischenanbieter.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Perplexity fuer Hamburger Unternehmen */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Perplexity fuer Hamburger Unternehmen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Hamburg ist ein Premium-Standort mit hoher Kaufkraft und Tech-Affinitaet. Perplexitys
                Zielgruppe &ndash; Akademiker, Fuehrungskraefte, Einkommensstark &ndash; ist in Hamburg
                ueberproportional vertreten.
              </p>
              <p>
                Wenn ein Hamburger Entscheider Perplexity fragt &bdquo;Welche Agenturen fuer KI-Sichtbarkeit
                gibt es in Hamburg?&ldquo; und du nicht zitiert wirst &ndash; existierst du nicht. Du wirst
                nicht verglichen, nicht in Betracht gezogen, nicht kontaktiert.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-semibold text-black text-lg mb-2">Lokale Signale nutzen</h3>
                <p className="text-gray-600 text-base">
                  Google Business Profile, Hamburger Branchenverzeichnisse, lokale Bewertungsportale &ndash;
                  diese Signale fliessen ueber den Bing-Index in Perplexitys Quellenauswahl ein.
                  Konsistente NAP-Daten (Name, Adresse, Telefon) ueber alle Plattformen sind Pflicht.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-semibold text-black text-lg mb-2">Hamburger Fachmedien als Hebel</h3>
                <p className="text-gray-600 text-base">
                  Erwahnungen in Hamburger Abendblatt, Hamburg Startups, Hamburger Wirtschaft oder lokalen
                  Fachpublikationen staerken deine Perplexity-Sichtbarkeit. Perplexity zieht diese Quellen
                  bei lokalen Anfragen bevorzugt heran.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-semibold text-black text-lg mb-2">Wenig lokale Konkurrenz</h3>
                <p className="text-gray-600 text-base">
                  Die meisten Hamburger Unternehmen haben keine Perplexity-Strategie. Wer jetzt optimiert,
                  hat in vielen lokalen Branchen praktisch keinen Wettbewerb. Das Zeitfenster ist offen &ndash;
                  aber es schliesst sich, je mehr Unternehmen Perplexity als Kanal entdecken.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-semibold text-black text-lg mb-2">Pipeline: Google Business &rarr; Bing &rarr; Perplexity</h3>
                <p className="text-gray-600 text-base">
                  Dein Google Business Profile wird von Bing indexiert. Bing speist Perplexitys Index.
                  Ein optimiertes GBP mit aktuellen Informationen, Bewertungen und Fotos wirkt sich
                  direkt auf deine Perplexity-Sichtbarkeit aus &ndash; ein Hebel, den fast niemand nutzt.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Perplexity-Sichtbarkeit messen */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Perplexity-Sichtbarkeit messen
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                Drei Datenpunkte. Alle kostenlos. Alle Perplexity-spezifisch. Mehr Details im
                <a href="/wissen/ki-sichtbarkeit-messen" className="text-brand-accent hover:underline"> KI-Sichtbarkeit messen Guide</a>.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-semibold text-black text-lg mb-2">1. PerplexityBot in Server-Logs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Filtere deine Server-Logs nach dem User-Agent <code className="bg-gray-100 px-2 py-0.5 rounded text-sm mx-1">PerplexityBot</code>.
                  Welche Seiten werden gecrawlt? Wie oft? Steigende Crawl-Frequenz bedeutet steigende Relevanz.
                  Wenn der Bot nicht auftaucht, pruefe sofort deine
                  <a href="/wissen/technische-ki-sichtbarkeit" className="text-brand-accent hover:underline"> robots.txt</a>.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-semibold text-black text-lg mb-2">2. Referral-Traffic von perplexity.ai</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pruefe in deinem Analytics-Tool den Traffic von <code className="bg-gray-100 px-2 py-0.5 rounded text-sm mx-1">perplexity.ai</code> als
                  Referrer. Dieser Traffic zeigt, welche Seiten tatsaechlich als Quelle zitiert werden. Beachte: Conversion-Rate
                  liegt typischerweise <strong className="text-black">4x hoeher</strong> als bei organischem Google-Traffic.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-semibold text-black text-lg mb-2">3. Bing Webmaster Tools</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dein wichtigstes Werkzeug fuer Perplexity. Pruefe: Sind deine Seiten indexiert?
                  Gibt es Crawl-Fehler? Welche Keywords ranken bei Bing? Bing-Daten korrelieren
                  direkt mit Perplexity-Zitationen. Kein Bing-Index = keine Perplexity-Praesenz.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-12">
              Haeufig gestellte Fragen
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Nutzt Perplexity den Google-Index oder den Bing-Index?',
                  a: 'Den Bing-Index. Wer bei Perplexity zitiert werden will, muss bei Bing indexiert und optimiert sein. Google-Rankings allein bringen nichts. Das bedeutet: Bing Webmaster Tools einrichten und Sitemap einreichen.',
                },
                {
                  q: 'Wie schnell erscheinen neue Inhalte bei Perplexity?',
                  a: 'Innerhalb von 2-3 Tagen. Perplexitys Index wird taeglich aktualisiert. Das ist fundamental schneller als ChatGPT, wo Trainingsdaten Monate brauchen. Content-Frische ist bei Perplexity der wichtigste Faktor.',
                },
                {
                  q: 'Kann ein unbekanntes Unternehmen bei Perplexity zitiert werden?',
                  a: 'Ja. Perplexity zitiert auf Seiten-Ebene, nicht auf Marken-Ebene. Eine einzelne gut optimierte Seite reicht. Markenbekanntheit ist kein Muss. Das macht Perplexity zum Equalizer fuer KMUs.',
                },
                {
                  q: 'Muss ich PerplexityBot in robots.txt erlauben?',
                  a: 'Ja. Blockierst du PerplexityBot, wirst du nicht gecrawlt und nicht zitiert. Pruefe deine robots.txt sofort. Viele Security-Plugins blockieren KI-Crawler pauschal.',
                },
                {
                  q: 'Wie oft sollte ich Inhalte aktualisieren?',
                  a: 'Alle 2 Wochen fuer deine wichtigsten Seiten. Perplexity bevorzugt frische Inhalte extrem stark. Statischer Content verliert schnell an Sichtbarkeit. Content-Frische ist bei Perplexity das Equivalent zu Backlinks bei Google.',
                },
                {
                  q: 'Ist Perplexity fuer lokale Hamburger Unternehmen relevant?',
                  a: 'Sehr. Hamburgs Zielgruppe passt perfekt zur Perplexity-Demographie: hohe Kaufkraft, Tech-affin, Entscheider. Lokale Signale ueber Bing und Google Business Profile fliessen direkt in Perplexitys Quellenauswahl ein.',
                },
                {
                  q: 'Wie messe ich meine Perplexity-Sichtbarkeit?',
                  a: 'Drei Wege: Referral-Traffic von perplexity.ai in Analytics pruefen, Server-Logs auf PerplexityBot analysieren und Bing Webmaster Tools ueberwachen. Mehr Details im Guide KI-Sichtbarkeit messen.',
                },
              ].map((faq) => (
                <details key={faq.q} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-brand-accent/50 transition-all">
                  <summary className="p-6 cursor-pointer font-semibold text-black text-lg flex items-center justify-between">
                    {faq.q}
                    <span className="text-brand-accent ml-4 shrink-0 transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Sources */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-16">
          <FadeIn>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-black mb-4">Quellen</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <span className="text-gray-400 mr-2">[1]</span>
                  BCG (2026): B2B-Einkaeufer und KI-Suche &ndash; 67% der unter 35-Jaehrigen nutzen KI-Suchmaschinen
                </li>
                <li>
                  <span className="text-gray-400 mr-2">[2]</span>
                  Perplexity AI: Offizielle Nutzerzahlen und Wachstumsdaten (2025/2026) &ndash; 45 Mio. aktive Nutzer, 370% YoY
                </li>
                <li>
                  <span className="text-gray-400 mr-2">[3]</span>
                  Ahrefs (2025): Content Freshness und KI-Suchmaschinen &ndash; Einfluss der Aktualitaet auf Zitierungen
                </li>
                <li>
                  <span className="text-gray-400 mr-2">[4]</span>
                  Sistrix: Perplexity AI Analyse &ndash; Marktanteile, Bing-Index-Nutzung und Nutzungsverhalten
                </li>
                <li>
                  <span className="text-gray-400 mr-2">[5]</span>
                  Claneo: Perplexity AI &amp; SEO &ndash; Demographische Daten der Perplexity-Nutzer (80% Akademiker, 30% Fuehrungskraefte)
                </li>
                <li>
                  <span className="text-gray-400 mr-2">[6]</span>
                  Orainti / Aleyda Solis (2025): Analyse zur Blockierung von KI-Crawlern durch Unternehmens-Websites
                </li>
              </ul>
            </div>
          </FadeIn>
        </section>

        {/* Verwandte Guides */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-16">
          <FadeIn>
            <div className="border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-black mb-4">Verwandte Guides</h3>
              <ul className="space-y-2 text-base text-gray-600">
                <li>
                  <a href="/wissen/ki-sichtbarkeit" className="text-brand-accent hover:underline transition-colors">
                    KI-Sichtbarkeit: Der komplette Guide
                  </a>
                  <span className="text-gray-400"> &ndash; Ueberblick ueber alle KI-Plattformen</span>
                </li>
                <li>
                  <a href="/wissen/sichtbarkeit-in-chatgpt" className="text-brand-accent hover:underline transition-colors">
                    Sichtbarkeit in ChatGPT
                  </a>
                  <span className="text-gray-400"> &ndash; Andere Plattform, andere Regeln</span>
                </li>
                <li>
                  <a href="/wissen/ai-overviews-sichtbarkeit" className="text-brand-accent hover:underline transition-colors">
                    Google AI Overviews
                  </a>
                  <span className="text-gray-400"> &ndash; So erscheinst du in Googles KI-Antwortbox</span>
                </li>
                <li>
                  <a href="/wissen/ki-sichtbarkeit-messen" className="text-brand-accent hover:underline transition-colors">
                    KI-Sichtbarkeit messen
                  </a>
                  <span className="text-gray-400"> &ndash; Tools, KPIs und Tracking-Methoden</span>
                </li>
                <li>
                  <a href="/wissen/technische-ki-sichtbarkeit" className="text-brand-accent hover:underline transition-colors">
                    Technische KI-Sichtbarkeit
                  </a>
                  <span className="text-gray-400"> &ndash; robots.txt, llms.txt und Schema.org</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <div className="bg-[#121212] text-white rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] mb-6 leading-tight">
                  Wirst du bei Perplexity zitiert?
                </h2>
                <p className="text-lg text-gray-300 mb-4 max-w-2xl leading-relaxed">
                  Ich pruefe deine aktuelle Perplexity-Sichtbarkeit, analysiere deine Bing-Indexierung
                  und zeige dir, welche Seiten Zitierungs-Potenzial haben. Kostenlos und in 48 Stunden.
                </p>
                <p className="text-base text-gray-400 mb-8 max-w-2xl leading-relaxed">
                  Deine Wettbewerber haben keine Perplexity-Strategie. Das ist dein Zeitfenster.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose Perplexity-Analyse" className="!py-4 !px-8" />
                  <Button href="/wissen/sichtbarkeit-in-chatgpt" text="ChatGPT-Guide lesen" className="!text-white !border-white/20 hover:!border-white/40" />
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}
