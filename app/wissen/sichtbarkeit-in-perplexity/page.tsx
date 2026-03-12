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
  description: 'Perplexity ist eine Antwortmaschine, kein Chatbot. Wie du mit Bing-Optimierung, Content-Frische und extrahierbaren Absätzen zitiert wirst.',
  author: {
    '@type': 'Person',
    name: 'Vadim Shchepin',
    url: 'https://aiseo.hamburg',
  },
  publisher: {
    '@type': 'Organization',
    name: 'aiseo.hamburg',
    url: 'https://aiseo.hamburg',
  },
  datePublished: '2026-03-12',
  dateModified: '2026-03-12',
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
        text: 'Perplexity nutzt primär den Bing-Index. Wer bei Perplexity zitiert werden will, muss seine Seiten bei Bing optimieren und indexieren lassen. Google-Rankings allein reichen nicht.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie schnell erscheinen neue Inhalte bei Perplexity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Perplexity aktualisiert seinen Index täglich. Neue oder aktualisierte Inhalte können innerhalb von 2-3 Tagen in Antworten erscheinen. Das ist fundamental schneller als bei ChatGPT, wo Trainingsdaten Monate brauchen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen Perplexity und ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Perplexity ist eine Antwortmaschine, die bei jeder Anfrage live das Web durchsucht und Quellen mit nummerierten Referenzen zitiert. ChatGPT ist ein Chatbot, der primär auf Trainingsdaten zurückgreift. Bei Perplexity zählt die einzelne Seite, bei ChatGPT die gesamte Marke.',
      },
    },
    {
      '@type': 'Question',
      name: 'Muss ich PerplexityBot in robots.txt erlauben?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Blockierst du PerplexityBot, wirst du nicht gecrawlt und nicht zitiert. Prüfe deine robots.txt und stelle sicher, dass PerplexityBot explizit erlaubt ist.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist Perplexity für B2B-Unternehmen relevant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sehr. 80% der Perplexity-Nutzer haben einen Hochschulabschluss, 30% sind in leitenden Positionen. Laut BCG 2026 nutzen 67% der B2B-Einkäufer unter 35 KI-Suche für ihre Recherche. Perplexity erreicht exakt die Entscheider, die du willst.',
      },
    },
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

      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 md:pt-52 md:pb-16 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <FadeIn>
            <nav className="text-sm text-gray-400 mb-8">
              <a href="/" className="hover:text-brand-accent transition-colors">Startseite</a>
              <span className="mx-2">/</span>
              <a href="/wissen" className="hover:text-brand-accent transition-colors">Wissen</a>
              <span className="mx-2">/</span>
              <span className="text-gray-600">Sichtbarkeit in Perplexity</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
              Perplexity AI ist keine Suchmaschine.<br />
              Es ist eine Antwortmaschine.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
              Perplexity zitiert Quellen mit nummerierten Referenzen. Nicht Marken, sondern einzelne Seiten.
              Nicht aus Trainingsdaten, sondern live aus dem Bing-Index. Jeden Tag neu.
              Wirst du zitiert?
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
                  <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                  <span>Perplexity durchsucht bei jeder Anfrage live das Web &ndash; über den Bing-Index, nicht Google.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                  <span>Einzelne Seiten werden zitiert, nicht Marken. Auch unbekannte Unternehmen können als Quelle erscheinen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                  <span>Tägliche Index-Updates: Neue Inhalte erscheinen in 2&ndash;3 Tagen, nicht in Monaten.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                  <span>Extrahierbare Absätze (40&ndash;60 Wörter) schlagen lange Essays.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                  <span>Premium-Zielgruppe: 80 % Akademiker, 30 % Führungskräfte, 65 % einkommensstark.</span>
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
                { number: '370 %', label: 'Wachstum YoY' },
                { number: '4x', label: 'Höhere Conversion' },
                { number: '42 %', label: 'Längere Sessions' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm text-center">
                  <div className="text-2xl md:text-3xl font-bold text-black mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
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
                fundamental anderen Ansatz als ChatGPT oder Google.
              </p>

              <div className="grid gap-4 mt-4">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <h3 className="font-semibold text-black text-lg mb-2">Live-Web statt Trainingsdaten</h3>
                  <p className="text-gray-600 text-base">
                    ChatGPT greift auf Monate alte Trainingsdaten zurück. Perplexity durchsucht bei jeder
                    Anfrage live das Web. Jede Antwort basiert auf aktuellen Quellen, nicht auf eingefrorenem Wissen.
                  </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <h3 className="font-semibold text-black text-lg mb-2">Bing-Index, nicht Google-Index</h3>
                  <p className="text-gray-600 text-base">
                    Perplexity nutzt primär den Bing-Index. Deine Google-Rankings sind irrelevant,
                    wenn Bing deine Seiten nicht kennt. Bing Webmaster Tools sind Pflicht.
                  </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <h3 className="font-semibold text-black text-lg mb-2">Tägliche Updates</h3>
                  <p className="text-gray-600 text-base">
                    Der Index wird täglich aktualisiert. Neue Inhalte können in 2&ndash;3 Tagen in Antworten
                    erscheinen. Bei ChatGPT dauert das Monate. Frische ist bei Perplexity kein Bonus &ndash; es ist Voraussetzung.
                  </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <h3 className="font-semibold text-black text-lg mb-2">Seiten-Zitation statt Marken-Zitation</h3>
                  <p className="text-gray-600 text-base">
                    ChatGPT empfiehlt Marken. Perplexity zitiert einzelne URLs mit nummerierten Referenzen.
                    Eine gut optimierte Unterseite kann zitiert werden, selbst wenn deine Marke unbekannt ist.
                    Das ändert alles für kleinere Unternehmen.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Wie Perplexity Quellen auswählt */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
              Wie Perplexity Quellen auswählt
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                Perplexity wählt Quellen pro Anfrage aus dem Bing-Index. Es gibt keine feste
                Rangfolge. Fünf Kriterien entscheiden, ob deine Seite zitiert wird.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: 'Extrahierbarkeit',
                  desc: 'Perplexity braucht Absätze, die es direkt als Antwort-Snippet verwenden kann. Ideal: 40-60 Wörter, ein Fakt pro Absatz, klare Aussage im ersten Satz.',
                },
                {
                  title: 'Content-Frische',
                  desc: 'Aktualisierungsdatum zählt. Seiten, die in den letzten 2 Wochen geändert wurden, werden bevorzugt. Statische Inhalte von 2024 verlieren gegen frische von gestern.',
                },
                {
                  title: 'Bing-Indexierung',
                  desc: 'Keine Bing-Indexierung, keine Perplexity-Zitation. So einfach. Prüfe den Status in den Bing Webmaster Tools und reiche deine Sitemap dort ein.',
                },
                {
                  title: 'Faktische Präzision',
                  desc: 'Konkrete Zahlen, Daten und Statistiken werden häufiger zitiert als vage Aussagen. Perplexity sucht Fakten, keine Meinungen.',
                },
                {
                  title: 'Nischen-Autorität',
                  desc: 'Thematisch fokussierte Websites gewinnen gegen Generalisten. Perplexity bevorzugt die Quelle, die sich tief mit einem Thema befasst, nicht die, die alles oberflächlich abdeckt.',
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

        {/* 6 Perplexity-spezifische Strategien */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
              6 Perplexity-spezifische Strategien
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Diese Strategien funktionieren nur für Perplexity. Nicht für ChatGPT, nicht für Google.
            </p>

            <div className="space-y-8">
              {[
                {
                  num: '01',
                  title: 'Schreibe extrahierbare Absätze',
                  text: 'Jeder Absatz muss für sich allein als Antwort funktionieren. 40-60 Wörter, Kernaussage im ersten Satz, ein Fakt pro Absatz. Perplexity extrahiert Absätze als Snippets. Wenn dein Text erst nach 200 Wörtern zur Sache kommt, wirst du übersprungen.',
                },
                {
                  num: '02',
                  title: 'Aktualisiere alle 2 Wochen',
                  text: 'Perplexitys Index ist täglich frisch. Seiten, die seit Monaten unberührt sind, verlieren gegen Seiten mit aktuellem Datum. Aktualisiere deine wichtigsten Seiten alle 2 Wochen: neue Zahlen, aktuelle Beispiele, frisches Datum. Content-Frische ist bei Perplexity das, was Backlinks bei Google sind.',
                },
                {
                  num: '03',
                  title: 'Optimiere für Bing, nicht für Google',
                  text: 'Reiche deine Sitemap bei den Bing Webmaster Tools ein. Prüfe, welche Seiten indexiert sind. Behebe Crawl-Fehler bei Bing. Viele Unternehmen ignorieren Bing komplett. Bei Perplexity ist das fatal, weil der gesamte Index von dort kommt.',
                },
                {
                  num: '04',
                  title: 'Baue Multi-Plattform-Präsenz',
                  text: 'Perplexity durchsucht nicht nur Websites. Reddit-Threads, YouTube-Beschreibungen, Quora-Antworten und Fachforen werden als Quellen herangezogen. Deine Expertise auf drei Plattformen ist stärker als perfekter Content auf einer.',
                },
                {
                  num: '05',
                  title: 'Erstelle dedizierte Autorenseiten',
                  text: 'Perplexity bewertet, wer den Content geschrieben hat. Eine Autorenseite mit Bio, Qualifikationen und verlinkten Beiträgen ist ein Vertrauenssignal. Anonyme Inhalte werden seltener zitiert als Inhalte mit klarer Autorenschaft.',
                },
                {
                  num: '06',
                  title: 'Mobile Speed unter 2 Sekunden',
                  text: 'Perplexity bevorzugt Seiten, die technisch schnell ausgeliefert werden. Unter 2 Sekunden Ladezeit auf Mobile. Kein Render-Blocking JavaScript. Sauberer HTML-Output. Der PerplexityBot ist ungeduldig.',
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
              Perplexity vs. ChatGPT: Komplett andere Regeln
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                Wer beide Plattformen gleich behandelt, verschwendet Budget. Hier die konkreten Unterschiede.
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
                    <td className="p-4">Live-Web über Bing-Index</td>
                    <td className="p-4">Trainingsdaten + Bing-Websuche</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-black">Index-Aktualität</td>
                    <td className="p-4">Täglich</td>
                    <td className="p-4">Monate (Trainingszyklen)</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-black">Was zitiert wird</td>
                    <td className="p-4">Einzelne URLs (Seiten-Ebene)</td>
                    <td className="p-4">Marken (Gesamtautorität)</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-black">Zitierformat</td>
                    <td className="p-4">Nummerierte Referenzen [1] [2] [3]</td>
                    <td className="p-4">Fließtext-Empfehlung</td>
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
                    <td className="p-4 font-medium text-black">Chance für Unbekannte</td>
                    <td className="p-4">Hoch &ndash; einzelne Seite reicht</td>
                    <td className="p-4">Gering &ndash; Markenbekanntheit zählt</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 mt-8 shadow-sm">
              <p className="text-lg text-black font-medium">
                Der entscheidende Unterschied: Bei Perplexity gewinnt die beste Seite. Bei ChatGPT gewinnt die bekannteste Marke.
              </p>
              <p className="text-gray-600 mt-2">
                Das macht Perplexity zum Equalizer für kleinere Unternehmen und Nischenanbieter.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Warum Perplexity für B2B entscheidend ist */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
              Warum Perplexity für B2B entscheidend ist
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                67 % der B2B-Einkäufer unter 35 nutzen KI-Suche für ihre Recherche (BCG 2026).
                Nicht Google. Nicht LinkedIn. KI-Suche.
              </p>
              <p>
                Perplexitys Zielgruppe ist wie geschaffen für B2B: 80 % Akademiker, 30 % in
                leitenden Positionen, 65 % einkommensstark. Das sind exakt die Entscheider,
                die deine Dienstleistung beauftragen.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm text-center">
                <div className="text-2xl md:text-3xl font-bold text-black mb-1">67 %</div>
                <div className="text-sm text-gray-500">B2B-Einkäufer unter 35 nutzen KI-Suche</div>
              </div>
              <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm text-center">
                <div className="text-2xl md:text-3xl font-bold text-black mb-1">80 %</div>
                <div className="text-sm text-gray-500">der Nutzer mit Hochschulabschluss</div>
              </div>
              <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm text-center">
                <div className="text-2xl md:text-3xl font-bold text-black mb-1">30 %</div>
                <div className="text-sm text-gray-500">in leitenden Positionen</div>
              </div>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mt-8">
              <p>
                Wenn ein Entscheider Perplexity fragt &bdquo;Welche Agenturen für [deine
                Dienstleistung] gibt es in Hamburg?&ldquo; und du nicht zitiert wirst &ndash;
                existierst du nicht. Du wirst nicht verglichen, nicht in Betracht gezogen.
              </p>
              <p>
                Der Vorteil gegenüber ChatGPT: Du brauchst keine große Marke. Eine einzelne
                gut optimierte Seite reicht, um bei Perplexity als Quelle zu erscheinen.
                Für B2B-Nischenanbieter ist das ein massiver Hebel.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Perplexity-Sichtbarkeit messen */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
              Perplexity-Sichtbarkeit messen
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                Drei Datenpunkte. Alle kostenlos. Alle Perplexity-spezifisch.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-semibold text-black text-lg mb-2">PerplexityBot in Server-Logs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Filtere deine Server-Logs nach dem User-Agent <code className="bg-gray-100 px-2 py-0.5 rounded text-sm mx-1">PerplexityBot</code>.
                  Welche Seiten werden gecrawlt? Wie oft? Steigende Crawl-Frequenz bedeutet steigende Relevanz.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-semibold text-black text-lg mb-2">Referral-Traffic von perplexity.ai</h3>
                <p className="text-gray-600 leading-relaxed">
                  Prüfe in deinem Analytics-Tool den Traffic von <code className="bg-gray-100 px-2 py-0.5 rounded text-sm mx-1">perplexity.ai</code> als
                  Referrer. Dieser Traffic zeigt, welche Seiten tatsächlich als Quelle zitiert werden. Beachte: Conversion-Rate
                  liegt typischerweise 4x höher als bei organischem Google-Traffic.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-semibold text-black text-lg mb-2">Bing Webmaster Tools</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dein wichtigstes Werkzeug für Perplexity. Prüfe: Sind deine Seiten indexiert?
                  Gibt es Crawl-Fehler? Welche Keywords ranken bei Bing? Bing-Daten korrelieren
                  direkt mit Perplexity-Zitationen.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-12">
              Häufig gestellte Fragen
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Nutzt Perplexity den Google-Index oder den Bing-Index?',
                  a: 'Den Bing-Index. Wer bei Perplexity zitiert werden will, muss bei Bing indexiert und optimiert sein. Google-Rankings allein bringen nichts.',
                },
                {
                  q: 'Wie schnell erscheinen neue Inhalte bei Perplexity?',
                  a: 'Innerhalb von 2-3 Tagen. Perplexitys Index wird täglich aktualisiert. Das ist fundamental schneller als ChatGPT, wo Trainingsdaten Monate brauchen.',
                },
                {
                  q: 'Kann ein unbekanntes Unternehmen bei Perplexity zitiert werden?',
                  a: 'Ja. Perplexity zitiert auf Seiten-Ebene, nicht auf Marken-Ebene. Eine einzelne gut optimierte Seite reicht. Markenbekanntheit ist kein Muss.',
                },
                {
                  q: 'Muss ich PerplexityBot in robots.txt erlauben?',
                  a: 'Ja. Blockierst du PerplexityBot, wirst du nicht gecrawlt und nicht zitiert. Prüfe deine robots.txt sofort.',
                },
                {
                  q: 'Wie oft sollte ich Inhalte aktualisieren?',
                  a: 'Alle 2 Wochen für deine wichtigsten Seiten. Perplexity bevorzugt frische Inhalte extrem stark. Statischer Content verliert schnell an Sichtbarkeit.',
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
                  BCG (2026): B2B-Einkäufer und KI-Suche &ndash; 67 % der unter 35-Jährigen nutzen KI-Suchmaschinen
                </li>
                <li>
                  <span className="text-gray-400 mr-2">[2]</span>
                  Perplexity AI: Offizielle Nutzerzahlen und Wachstumsdaten (2025/2026)
                </li>
                <li>
                  <span className="text-gray-400 mr-2">[3]</span>
                  Ahrefs (2025): Content Freshness und KI-Suchmaschinen &ndash; Einfluss der Aktualität auf Zitierungen
                </li>
                <li>
                  <span className="text-gray-400 mr-2">[4]</span>
                  Sistrix: Perplexity AI Analyse &ndash; Marktanteile, Bing-Index-Nutzung und Nutzungsverhalten
                </li>
                <li>
                  <span className="text-gray-400 mr-2">[5]</span>
                  Claneo: Perplexity AI &amp; SEO &ndash; Demographische Daten der Perplexity-Nutzer
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
                  <span className="text-gray-400"> &ndash; Überblick über alle KI-Plattformen</span>
                </li>
                <li>
                  <a href="/wissen/sichtbarkeit-in-chatgpt" className="text-brand-accent hover:underline transition-colors">
                    Sichtbarkeit in ChatGPT
                  </a>
                  <span className="text-gray-400"> &ndash; Andere Plattform, andere Regeln</span>
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
                <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                  Ich prüfe deine aktuelle Perplexity-Sichtbarkeit, analysiere deine Bing-Indexierung
                  und zeige dir, welche Seiten Zitierungs-Potenzial haben.
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
