'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Was ist der Unterschied zwischen SEO-Content und KI-optimiertem Content?',
    a: 'SEO-Content optimiert fuer Keywords und Rankings in Suchmaschinen. KI-optimierter Content optimiert dafuer, als zitierfaehige Quelle in ChatGPT, Perplexity und Google AI Overviews zu erscheinen. Der groesste Unterschied: KI bevorzugt Answer-First-Strukturen mit klaren Fakten, waehrend SEO-Content oft auf Keyword-Dichte und Verweildauer setzt. Idealerweise kombinierst du beides.',
  },
  {
    q: 'Wie schnell wirkt sich eine Content-Optimierung auf KI-Zitierungen aus?',
    a: 'Bei Perplexity oft schon nach 2-4 Wochen, weil Perplexity das Live-Web durchsucht. Bei ChatGPT und Claude dauert es laenger - 3-6 Monate, da diese Modelle in Trainingszyklen aktualisiert werden. Google AI Overviews reagieren aehnlich schnell wie die normale Google-Suche, also innerhalb weniger Wochen nach Indexierung.',
  },
  {
    q: 'Muss ich meinen gesamten Content neu schreiben?',
    a: 'Nein. Ein Content-Audit zeigt dir, welche Inhalte das groesste Potenzial haben. Oft reicht es, bestehende Artikel mit Answer-First-Strukturen, Quellenangaben und klaren H2/H3-Hierarchien zu ueberarbeiten. Fokussiere dich zuerst auf deine Top-20-Seiten nach Traffic und Relevanz.',
  },
  {
    q: 'Welche Content-Formate funktionieren am besten fuer KI?',
    a: 'Definitorische Inhalte ("Was ist X?"), Vergleichs-Content ("X vs Y") und How-To-Guides werden am haeufigsten von KI zitiert. FAQ-Sektionen und Glossar-Eintraege sind ebenfalls sehr effektiv. Die Princeton-GEO-Studie zeigt, dass strukturierte, faktenbasierte Formate 115% mehr Zitierungen erhalten als unstrukturierte Inhalte.',
  },
  {
    q: 'Brauche ich spezielle Tools fuer KI-Content-Optimierung?',
    a: 'Grundlegende Optimierungen kannst du ohne spezielle Tools umsetzen: Answer-First schreiben, Quellen einbauen, Struktur verbessern. Fuer Monitoring empfehlen sich Ahrefs Brand Radar oder Semrush AI Visibility, um deine Praesenz in KI-Antworten zu tracken. Ein Schema-Markup-Validator hilft bei der technischen Pruefung.',
  },
  {
    q: 'Wie wichtig sind Quellenangaben fuer KI-Zitierungen?',
    a: 'Sehr wichtig. KI-Systeme bevorzugen Inhalte mit verifizierbaren Quellen, weil sie die Aussagen dann sicherer weiterempfehlen koennen. Die Princeton-Studie zeigt: Inhalte mit Statistiken und Quellenverweisen erhalten deutlich mehr KI-Zitierungen als Meinungsartikel ohne Belege.',
  },
  {
    q: 'Kann KI-optimierter Content meinem Google-Ranking schaden?',
    a: 'Nein, im Gegenteil. Die meisten KI-Content-Prinzipien - klare Struktur, Answer-First, Quellenangaben, regelmaessige Updates - verbessern auch dein Google-Ranking. Google AI Overviews nutzen aehnliche Signale wie die organische Suche. Du optimierst also fuer zwei Kanaele gleichzeitig.',
  },
];

/* ------------------------------------------------------------------ */
/*  JSON-LD schemas                                                   */
/* ------------------------------------------------------------------ */

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Content Strategie: Inhalte die KI-Systeme zitieren wollen',
  description:
    'Der komplette Guide zu KI-optimiertem Content: 7 Strategien, Content-Audit-Checkliste und Workflow fuer Inhalte, die ChatGPT und Perplexity zitieren.',
  image: 'https://aiseo.hamburg/images/wissen/ai-content-strategie.jpg',
  author: {
    '@type': 'Person',
    name: 'Vadim Shchepin',
    url: 'https://aiseo.hamburg/ueber-mich',
    jobTitle: 'AI SEO Specialist',
  },
  publisher: {
    '@id': 'https://aiseo.hamburg/#organization',
  },
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/ai-content-strategie',
  inLanguage: 'de',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'AI Content Strategie' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Helper components                                                 */
/* ------------------------------------------------------------------ */

const StatBox: React.FC<{ text: string }> = ({ text }) => (
  <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm my-8">
    <p className="text-lg md:text-xl font-semibold text-black leading-snug">{text}</p>
  </div>
);

const CheckItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start gap-3">
    <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
    <span>{text}</span>
  </li>
);

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function AIContentStrategiePage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F7F5F2] text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      {/* JSON-LD */}
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

      {/* ============================================================ */}
      {/*  Hero                                                        */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-20 md:pt-52 md:pb-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
        <FadeIn>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li><a href="/" className="hover:text-brand-accent transition-colors">Startseite</a></li>
              <li>/</li>
              <li><a href="/wissen" className="hover:text-brand-accent transition-colors">Wissen</a></li>
              <li>/</li>
              <li className="text-black font-medium">AI Content Strategie</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
            AI Content Strategie: Inhalte, die KI-Systeme zitieren wollen
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
            Du produzierst Content wie 2020 - aber KI liest anders als Google. Dein Blog hat 100 Artikel, aber kein einziger wird von ChatGPT zitiert. Hier erfaehrst du, wie du Inhalte erstellst, die KI-Systeme als Quelle nutzen.
          </p>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  TL;DR                                                       */}
      {/* ============================================================ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <FadeIn>
          <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR</h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">1.</span>
                <span><strong className="text-black">KI zitiert anders als Google rankt.</strong> Keyword-optimierter Content ist nicht automatisch zitierbarer Content.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">2.</span>
                <span><strong className="text-black">Answer-First ist Pflicht.</strong> KI-Systeme bevorzugen Inhalte, die die Antwort sofort liefern - nicht nach 500 Woertern Einleitung.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">3.</span>
                <span><strong className="text-black">Princeton-Studie:</strong> Strukturierte, autoritative Inhalte erhalten 115% mehr KI-Zitierungen als unstrukturierter Content.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">4.</span>
                <span><strong className="text-black">3 Content-Typen dominieren:</strong> Definitorisch ("Was ist X?"), Vergleich ("X vs Y"), How-To (Schritt-fuer-Schritt).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">5.</span>
                <span><strong className="text-black">Content ohne Quellen ist fuer KI wertlos.</strong> Zahlen, Studien und verifizierbare Fakten machen deinen Content zitierbar.</span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Warum deine Content-Strategie nicht funktioniert            */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Warum deine Content-Strategie fuer KI-Systeme nicht funktioniert
          </h2>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Dein Content rankt bei Google. Vielleicht sogar auf Seite 1. Aber frag ChatGPT nach deinem Thema - und dein Unternehmen taucht nicht auf. <strong className="text-black">KI-Systeme brauchen andere Inhalte als Suchmaschinen.</strong>
            </p>
            <p>
              Das Problem: Keyword-optimierter Content &#8800; zitierbarer Content. Google bewertet Relevanz anhand von Keywords, Backlinks und Nutzerverhalten. KI-Systeme bewerten, ob sie eine Aussage <strong className="text-black">sicher weiterempfehlen</strong> koennen. Das erfordert andere Strukturen, andere Formate, andere Inhalte.
            </p>
          </div>

          <StatBox text="Princeton-Studie (GEO): Strukturierte, autoritative Inhalte mit Quellenverweisen erhalten 115% mehr Zitierungen in KI-generierten Antworten." />

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Die typischen Symptome: Dein Blog hat dutzende Artikel, aber kein einziger wird von ChatGPT zitiert. Deine Landingpages performen bei Google, aber Perplexity ignoriert sie komplett. Du investierst in Content-Marketing, aber der ROI sinkt, weil immer mehr Nutzer KI statt Google fragen.
            </p>
            <p>
              <strong className="text-black">Content ohne Struktur ist fuer KI unsichtbar.</strong> Lange Fliesstexte ohne klare Hierarchie, ohne Fakten, ohne Quellen - das ist fuer einen LLM nicht verwertbar. KI braucht extrahierbare, verifizierbare Informationsbausteine.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Was KI-Systeme von Content erwarten                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            Was KI-Systeme von Content erwarten
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            KI-Systeme sind keine Suchmaschinen. Sie generieren Antworten. Dafuer brauchen sie Content, der fuenf Kriterien erfuellt.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Answer-First</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Die Antwort steht sofort im ersten Absatz. Kontext und Details folgen danach. KI extrahiert bevorzugt die ersten 2-3 Saetze eines Abschnitts. Wer die Antwort erst nach 500 Woertern Einleitung liefert, wird uebersprungen.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Faktenbasiert</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Zahlen, Studien, Quellen. KI-Systeme koennen Aussagen mit Belegen sicherer weiterempfehlen als Meinungen ohne Grundlage. "Unserer Erfahrung nach" ist schwaecher als "Laut Princeton-Studie (2024)".
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Strukturiert</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Klare H2/H3-Hierarchie, Listen, Tabellen. KI-Systeme parsen Inhalte anhand ihrer Struktur. Ein langer Fliesstext ohne Zwischenueberschriften ist fuer LLMs schwer zu verarbeiten und wird seltener zitiert.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Eindeutig</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Keine Mehrdeutigkeit, klare Aussagen. "Es kommt darauf an" ist keine Antwort, die KI zitieren kann. Konkrete Empfehlungen mit Kontext ("Fuer Unternehmen mit unter 50 Mitarbeitern empfehlen wir X") sind zitierbarer.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:col-span-2">
              <h3 className="text-xl font-semibold text-black mb-3">Aktuell</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Datum sichtbar, regelmaessige Updates. KI-Systeme bevorzugen aktuelle Inhalte - insbesondere Perplexity und Google AI Overviews, die das Live-Web durchsuchen. Ein Artikel von 2022 ohne Update-Datum wird gegenueber einem aktuellen Beitrag benachteiligt. Zeige dein Aktualisierungsdatum prominent.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Die 3 Content-Typen die KI liebt                           */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            Die 3 Content-Typen, die KI liebt
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Nicht jeder Content-Typ wird gleich haeufig von KI zitiert. Diese drei Formate dominieren in KI-Antworten.
          </p>

          <ol className="space-y-10">
            {/* Typ 1 */}
            <li>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                  1. Definitorischer Content - "Was ist X?"
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Wird fuer Erklaerungen zitiert. Wenn jemand ChatGPT fragt "Was ist Generative Engine Optimization?", sucht die KI nach klaren, praegnanten Definitionen mit Kontext.
                </p>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-sm font-semibold text-black mb-2">Vorlage:</p>
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    "[Begriff] ist [klare Definition in 1-2 Saetzen]. Im Unterschied zu [Abgrenzung] fokussiert sich [Begriff] auf [Kernaspekt]. Fuer Unternehmen bedeutet das: [praktische Relevanz]."
                  </p>
                </div>
              </div>
            </li>

            {/* Typ 2 */}
            <li>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                  2. Vergleichs-Content - "X vs Y"
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Wird fuer Empfehlungen genutzt. KI-Nutzer fragen "Was ist besser, X oder Y?" oder "Welches Tool fuer Z?". Ehrliche, strukturierte Vergleiche werden bevorzugt zitiert.
                </p>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-sm font-semibold text-black mb-2">Vorlage:</p>
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    "[X] eignet sich am besten fuer [Zielgruppe/Anwendungsfall]. [Y] ist die bessere Wahl, wenn [Bedingung]. Der wichtigste Unterschied: [Kernunterschied mit Fakten]."
                  </p>
                </div>
              </div>
            </li>

            {/* Typ 3 */}
            <li>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                  3. How-To Content - Schritt-fuer-Schritt
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Wird fuer Anleitungen zitiert. Wenn Nutzer KI nach konkreten Anleitungen fragen, extrahiert die KI nummerierte Schritte aus strukturierten Guides.
                </p>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-sm font-semibold text-black mb-2">Vorlage:</p>
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    "Um [Ziel] zu erreichen, folge diesen [Anzahl] Schritten: 1. [Aktion + erwartetes Ergebnis] 2. [Aktion + erwartetes Ergebnis] ... Wichtig dabei: [Kernwarnung oder Tipp]."
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Content-Audit: Ist dein Content KI-ready?                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            Content-Audit: Ist dein Content KI-ready?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Pruefe deine wichtigsten Seiten anhand dieser Checkliste. Je mehr Punkte du abhaken kannst, desto hoeher die Wahrscheinlichkeit, dass KI deinen Content zitiert.
          </p>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-6">KI-Content-Checkliste</h3>
            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <CheckItem text="Answer-First: Die Kernantwort steht in den ersten 2-3 Saetzen jedes Abschnitts" />
              <CheckItem text="Klare H2/H3-Hierarchie: Jeder Abschnitt hat eine beschreibende Zwischenueberschrift" />
              <CheckItem text="Quellenangaben: Statistiken und Aussagen sind mit Studien oder Quellen belegt" />
              <CheckItem text="Aktualitaet: Veroeffentlichungs- und Aktualisierungsdatum sind sichtbar" />
              <CheckItem text="Strukturierte Daten: FAQ-, Article- oder HowTo-Schema ist implementiert" />
              <CheckItem text="Listen und Tabellen: Komplexe Informationen sind in extrahierbaren Formaten" />
              <CheckItem text="Eindeutige Aussagen: Keine vagen Formulierungen wie 'es kommt darauf an' ohne Kontext" />
              <CheckItem text="Entitaeten abgedeckt: Relevante Begriffe, Personen und Konzepte sind erwaehnt und verknuepft" />
              <CheckItem text="Interne Verlinkung: Der Artikel ist Teil eines Topic Clusters mit verwandten Inhalten" />
              <CheckItem text="Keine Keyword-Stuffing: Der Text liest sich natuerlich und informativ" />
              <CheckItem text="Unique Insights: Der Content bietet eigene Daten, Erfahrungen oder Perspektiven" />
              <CheckItem text="Autoreninfo: Ein erkennbarer Autor mit Expertise ist zugeordnet" />
              <CheckItem text="Meta-Beschreibung: Fasst den Inhalt in 1-2 Saetzen praezise zusammen" />
            </ul>

            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600">
                <strong className="text-black">Bewertung:</strong> 11-13 Punkte = KI-ready. 7-10 Punkte = gute Basis, aber Optimierungsbedarf. Unter 7 = dringender Handlungsbedarf.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  7 Strategien fuer KI-optimierten Content                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            7 Strategien fuer KI-optimierten Content
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Von der wichtigsten zur fortgeschrittensten. Starte mit Strategie 1 und arbeite dich vor.
          </p>

          <ol className="space-y-10">
            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                1. Answer-First schreiben
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                Jeder Abschnitt beginnt mit der Kernantwort. Nicht mit einer Einleitung, nicht mit Kontext, nicht mit einer rhetorischen Frage. <strong className="text-black">Die Antwort zuerst, die Erklaerung danach.</strong>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Warum? KI-Systeme extrahieren bevorzugt die ersten Saetze eines Abschnitts. Wenn deine Antwort erst im dritten Absatz kommt, wird sie moeglicherweise nicht erfasst. Journalisten nennen das "Inverted Pyramid" - und es ist das effektivste Format fuer KI-Zitierungen.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                2. Topic Clusters aufbauen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                Einzelne Artikel sind schwaecher als vernetzte Content-Cluster. Ein Pillar-Artikel zum Hauptthema, verlinkt mit 5-10 spezifischen Unterartikeln, signalisiert KI-Systemen: <strong className="text-black">Diese Quelle hat umfassende Expertise.</strong>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Beispiel: Statt eines einzelnen Artikels "KI-Sichtbarkeit" erstellst du einen Pillar-Guide plus Unter-Guides zu ChatGPT, Perplexity, technischer Umsetzung, Content-Strategie und Messung. KI erkennt die thematische Tiefe und zitiert haeufiger.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                3. Statistiken und Quellen einbauen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                KI-Systeme bevorzugen verifizierbare Aussagen. <strong className="text-black">"Laut Gartner (2024) verlieren Marken bis 2028 ueber 50% ihres organischen Traffics"</strong> ist zitierbarer als "Der Traffic wird sinken".
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Baue in jeden Artikel mindestens 3-5 Quellenverweise ein. Nenne die Quelle, das Jahr und die Kernaussage. Verlinke, wenn moeglich. Das erhoeht nicht nur die KI-Zitierbarkeit, sondern auch die E-E-A-T-Signale fuer Google.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                4. FAQ-Sektionen fuer jede Seite
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                FAQ-Bereiche sind Gold fuer KI-Zitierungen. Warum? Sie liefern exakt das Format, das KI braucht: <strong className="text-black">eine klare Frage und eine praezise Antwort.</strong>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ergaenze jede wichtige Seite um 5-7 relevante Fragen mit ausfuehrlichen Antworten (3-5 Saetze). Implementiere FAQPage-Schema-Markup. Die Fragen sollten echte Nutzerfragen sein - nicht Marketing-Fragen wie "Warum sind wir die Besten?"
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                5. Regelmaessige Content-Aktualisierung
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                <strong className="text-black">Veralteter Content wird von KI bestraft.</strong> Perplexity und Google AI Overviews bevorzugen aktuelle Quellen. Auch LLMs wie ChatGPT gewichten in neueren Trainingslaeufen aktuellere Inhalte hoeher.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Plane quartalmaessige Reviews deiner Top-Inhalte. Aktualisiere Statistiken, ergaenze neue Erkenntnisse, entferne veraltete Informationen. Zeige das Aktualisierungsdatum prominent auf der Seite.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                6. Semantische Vollstaendigkeit - Entitaeten abdecken
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                KI-Systeme arbeiten mit Entitaeten (Personen, Konzepte, Orte, Tools). <strong className="text-black">Wenn dein Artikel ein Thema behandelt, aber wichtige verwandte Entitaeten fehlen, wirkt er fuer KI unvollstaendig.</strong>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Beispiel: Ein Artikel ueber "KI-Sichtbarkeit" ohne Erwaehnung von ChatGPT, Perplexity, Schema.org oder E-E-A-T ist semantisch unvollstaendig. Recherchiere, welche Entitaeten KI mit deinem Thema verknuepft, und decke sie in deinem Content ab.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                7. Unique Insights statt Me-Too-Content
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                KI hat Zugang zu tausenden Artikeln zum gleichen Thema. <strong className="text-black">Warum sollte sie ausgerechnet deinen zitieren?</strong> Nur wenn du etwas bietest, das andere nicht haben.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Eigene Daten, eigene Erfahrungsberichte, eigene Frameworks, eigene Case Studies. "Wir haben 50 Websites analysiert und festgestellt..." ist zitierbarer als eine Zusammenfassung von dem, was alle anderen auch schreiben. Originalitaet ist der staerkste Zitierungstreiber.
              </p>
            </li>
          </ol>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Content-Formate im KI-Vergleich                             */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Content-Formate im KI-Vergleich
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Nicht jedes Format wird gleich haeufig von KI zitiert. Diese Uebersicht zeigt, welche Formate sich am besten fuer KI-Sichtbarkeit eignen.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-black">Format</th>
                  <th className="py-3 pr-4 text-sm font-semibold text-black">KI-Zitierbarkeit</th>
                  <th className="py-3 text-sm font-semibold text-black">Staerke</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Pillar Page</td>
                  <td className="py-3 pr-4 text-brand-accent font-semibold">Sehr hoch</td>
                  <td className="py-3">Umfassende Abdeckung, wird als autoritative Quelle erkannt</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">FAQ-Seite</td>
                  <td className="py-3 pr-4 text-brand-accent font-semibold">Sehr hoch</td>
                  <td className="py-3">Perfektes Frage-Antwort-Format fuer KI-Extraktion</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Glossar-Eintrag</td>
                  <td className="py-3 pr-4 text-brand-accent font-semibold">Sehr hoch</td>
                  <td className="py-3">Klare Definitionen, ideal fuer "Was ist X?"-Anfragen</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">How-To Guide</td>
                  <td className="py-3 pr-4 text-brand-accent font-semibold">Hoch</td>
                  <td className="py-3">Nummerierte Schritte, leicht extrahierbar</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Case Study</td>
                  <td className="py-3 pr-4 font-semibold">Mittel-Hoch</td>
                  <td className="py-3">Einzigartige Daten und Ergebnisse, guter Unique-Insight-Faktor</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Blogpost</td>
                  <td className="py-3 pr-4 font-semibold">Mittel</td>
                  <td className="py-3">Abhaengig von Struktur und Quellenqualitaet</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Video-Transkript</td>
                  <td className="py-3 pr-4 font-semibold">Niedrig-Mittel</td>
                  <td className="py-3">Nur wenn sauber strukturiert und als Text verfuegbar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  AI Content Workflow                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            AI Content Workflow: Von der Idee zum zitierbaren Inhalt
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Dieser 5-Schritte-Workflow stellt sicher, dass jeder neue Inhalt KI-optimiert ist.
          </p>

          <ol className="space-y-8">
            <li>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Schritt 1: KI-Fragen recherchieren
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Frag ChatGPT, Perplexity und Google AI direkt nach deinem Thema. Welche Fragen stellen Nutzer? Welche Quellen werden aktuell zitiert? Welche Luecken gibt es? Nutze auch Tools wie AlsoAsked, AnswerThePublic und die Google-Autovervollstaendigung fuer Frage-Recherche.
                </p>
              </div>
            </li>

            <li>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Schritt 2: Entitaeten und Struktur planen
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Definiere die Kernaussage (Answer-First), die H2/H3-Struktur und die relevanten Entitaeten. Welche Begriffe, Tools, Studien und Experten muessen vorkommen? Erstelle ein Outline mit allen Elementen, bevor du schreibst.
                </p>
              </div>
            </li>

            <li>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Schritt 3: Answer-First schreiben
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Schreibe jeden Abschnitt mit der Antwort zuerst. Baue Statistiken und Quellenverweise ein. Nutze Listen und Tabellen fuer komplexe Informationen. Halte Absaetze kurz (3-5 Saetze) und eindeutig.
                </p>
              </div>
            </li>

            <li>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Schritt 4: Technisch optimieren
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Implementiere Schema-Markup (Article, FAQ, HowTo). Pruefe die H-Tag-Hierarchie. Ergaenze eine FAQ-Sektion. Setze interne Links zu verwandten Inhalten im Topic Cluster. Stelle sicher, dass Datum und Autor sichtbar sind.
                </p>
              </div>
            </li>

            <li>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Schritt 5: Monitoring und Iteration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pruefe nach 4-8 Wochen, ob dein Content in Perplexity-Antworten auftaucht. Teste relevante Fragen in ChatGPT und Google AI. Tracke KI-Referral-Traffic in GA4. Aktualisiere und verbessere basierend auf den Ergebnissen.
                </p>
              </div>
            </li>
          </ol>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Typische Content-Fehler fuer KI                             */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Typische Content-Fehler fuer KI
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Diese Fehler machen deinen Content fuer KI-Systeme unsichtbar - auch wenn er bei Google gut performt.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Zu viel Fluff, zu wenig Substanz</h3>
              <p className="text-gray-600 leading-relaxed">
                Lange Einleitungen, Fuellwoerter, Marketing-Floskeln. KI-Systeme suchen nach konkreten Aussagen und Fakten. "In der heutigen digitalen Welt..." ist fuer einen LLM wertlos. Komm direkt zum Punkt.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Keine Quellenangaben</h3>
              <p className="text-gray-600 leading-relaxed">
                Aussagen ohne Belege sind fuer KI schwer zu verifizieren und werden seltener zitiert. "Studien zeigen" ohne konkrete Studie ist fast so schlecht wie gar keine Aussage. Nenne immer Quelle, Jahr und Kernaussage.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Veraltete Informationen</h3>
              <p className="text-gray-600 leading-relaxed">
                Ein Guide von 2023 ohne Update wird von KI-Systemen zugunsten aktuellerer Quellen uebergangen. Besonders kritisch bei schnelllebigen Themen wie KI und Technologie. Zeige das Aktualisierungsdatum und halte Inhalte aktuell.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Fehlende Struktur</h3>
              <p className="text-gray-600 leading-relaxed">
                Ein 3.000-Woerter-Fliesstext ohne Zwischenueberschriften, Listen oder Tabellen ist fuer KI ein einziger Textblock. LLMs koennen daraus schwer einzelne Antworten extrahieren. Strukturiere mit H2/H3, nutze Listen fuer Aufzaehlungen und Tabellen fuer Vergleiche.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Me-Too-Content ohne eigene Perspektive</h3>
              <p className="text-gray-600 leading-relaxed">
                Wenn dein Artikel das gleiche sagt wie 50 andere, hat KI keinen Grund, dich zu zitieren. Eigene Daten, eigene Frameworks, eigene Erfahrungen - das macht Content einzigartig und zitierbar. Frag dich: "Was weiss ich, das die anderen nicht wissen?"
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Kein Schema-Markup</h3>
              <p className="text-gray-600 leading-relaxed">
                Strukturierte Daten (Article, FAQ, HowTo) helfen KI-Systemen, deinen Content korrekt einzuordnen. Ohne Schema-Markup verlaesst du dich darauf, dass KI die Struktur selbst erkennt - das funktioniert oft, aber nicht zuverlaessig.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-10">
            Haeufig gestellte Fragen
          </h2>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">{faq.q}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Quellen                                                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Quellen
          </h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li>
                <strong className="text-black">Princeton University (2024):</strong> "GEO: Generative Engine Optimization" - Studie zur Optimierung von Inhalten fuer KI-Suchmaschinen. Zeigt, dass strukturierte Inhalte mit Quellenverweisen 115% mehr Zitierungen erhalten.
              </li>
              <li>
                <strong className="text-black">Gartner (2024):</strong> "Predicts 2025: Search and AI" - Prognose zum Rueckgang organischen Traffics durch KI-gestuetzte Suche bis 2028.
              </li>
              <li>
                <strong className="text-black">HubSpot (2025):</strong> "State of Content Marketing Report" - Analyse von Content-Formaten und deren Performance in KI-gestuetzten Suchumgebungen.
              </li>
              <li>
                <strong className="text-black">Semrush (2025):</strong> "AI Overviews Study" - Untersuchung, welche Content-Typen in Google AI Overviews zitiert werden und welche Strukturmerkmale sie gemeinsam haben.
              </li>
              <li>
                <strong className="text-black">Rand Fishkin / SparkToro (2025):</strong> "Zero-Click Content" - Analyse des Wandels von klickbasiertem zu zitationsbasiertem Content-Marketing.
              </li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Weiterfuehrende Guides                                      */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Weiterfuehrende Guides
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="/wissen/ki-sichtbarkeit"
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                KI-Sichtbarkeit
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Der Pillar-Guide: Was KI-Sichtbarkeit bedeutet und wie du sie erreichst.
              </p>
            </a>

            <a
              href="/wissen/llmo-llm-optimierung"
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                LLMO - LLM-Optimierung
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wie du dein Unternehmen fuer ChatGPT, Claude und andere LLMs optimierst.
              </p>
            </a>

            <a
              href="/wissen/aeo-answer-engine-optimization"
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                AEO - Answer Engine Optimization
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Optimierung fuer Antwortmaschinen: Perplexity, Google AI und Co.
              </p>
            </a>

            <a
              href="/wissen/technische-ki-sichtbarkeit"
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                Technische KI-Sichtbarkeit
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                robots.txt, llms.txt, Schema.org und was KI-Crawler technisch brauchen.
              </p>
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <div className="bg-[#121212] rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-white mb-4">
              Wird dein Content von KI zitiert?
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
              Finde heraus, wie KI-Systeme deinen Content aktuell bewerten - und was du aendern musst, um als Quelle zitiert zu werden.
            </p>
            <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose Content-Analyse anfragen" />
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
