'use client';

import React, { useEffect, useState } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { ReflowTable } from '@/components/wissen/ReflowTable';

/* ------------------------------------------------------------------ */
/*  Dates                                                             */
/* ------------------------------------------------------------------ */

const PUBLISHED = '2026-03-12';
const MODIFIED = '2026-08-23';
const PUBLISHED_LABEL = '12. März 2026';
const MODIFIED_LABEL = '23. August 2026';

/* ------------------------------------------------------------------ */
/*  Table of contents                                                 */
/* ------------------------------------------------------------------ */

const TOC = [
  { no: '1', id: 'definition', label: 'Definition und Abgrenzung' },
  { no: '2', id: 'zahlen', label: 'Dein Problem in Zahlen' },
  { no: '3', id: 'nichtstun', label: 'Was passiert, wenn du nichts tust' },
  { no: '4', id: 'warum-jetzt', label: 'Warum jetzt' },
  { no: '5', id: 'saeulen', label: 'Die drei Säulen' },
  { no: '6', id: 'geo-vs-seo', label: 'GEO vs. klassisches SEO' },
  { no: '7', id: 'unternehmenstypen', label: 'Nach Unternehmenstyp' },
  { no: '8', id: 'schritte', label: 'Fünf strategische Schritte' },
  { no: '9', id: 'dauer', label: 'Wie lange dauert es' },
  { no: '', id: 'faq', label: 'FAQ' },
  { no: '', id: 'quellen', label: 'Quellen' },
  { no: '', id: 'guides', label: 'Weiterführende Guides' },
];

/* ------------------------------------------------------------------ */
/*  Figure 1 data: the four numbers, as a chart instead of stat cards  */
/* ------------------------------------------------------------------ */

const PROBLEM_BARS: {
  value: number;
  display: string;
  label: React.ReactNode;
  ref: string;
}[] = [
  {
    value: 68,
    display: '68 %',
    label: (
      <>
        der Google-Suchen in den USA endeten von Januar bis April 2026 ohne jeden Klick, 2024 waren es 58,5 %. Die Antwort steht in der Suche, spätestens seit dem{' '}
        <a href="/wissen/ai-overviews-sichtbarkeit" className="text-brand-accent-ink underline decoration-brand-accent/40 underline-offset-2 hover:decoration-brand-accent-ink">
          AI Overview Rollout
        </a>
        .
      </>
    ),
    ref: 'SparkToro 2026 [3]',
  },
  {
    value: 8,
    display: '8 %',
    label: (
      <>
        der Besuche auf einer Ergebnisseite mit KI-Antwort führen noch zu einem Klick auf ein Ergebnis. Ohne KI-Antwort sind es 15 %, also fast doppelt so viele.
      </>
    ),
    ref: 'Pew Research Center 2025 [7]',
  },
  {
    value: 79,
    display: '79 %',
    label: (
      <>
        Klickverlust auf dem Spitzenplatz, gemessen an britischen Nachrichtenseiten, wenn Google über dem Ergebnis eine AI Overview einblendet. Das Ranking bleibt, der Traffic nicht.
      </>
    ),
    ref: 'Authoritas 2025 [8]',
  },
  {
    value: 50,
    display: '50 %+',
    label: (
      <>
        des organischen Traffics wandern bis 2028 zu KI-gestützter Suche. Keine Prognose für 2035, sondern für übermorgen.
      </>
    ),
    ref: 'Gartner 2024, Prognose [1]',
  },
];

/* ------------------------------------------------------------------ */
/*  Figure 2 data: one metric, four cohorts                           */
/* ------------------------------------------------------------------ */

const COHORTS = [
  { value: 33, display: '33 %', label: 'Wöchentlich, DE und USA', ref: 'Claneo 2025 [4]', forecast: false },
  { value: 50, display: '50 %', label: 'Internetnutzer in DE', ref: 'Bitkom 2025 [6]', forecast: false },
  { value: 66, display: '66 %', label: '16 bis 29 Jahre, DE', ref: 'Bitkom 2025 [6]', forecast: false },
  { value: 94, display: '94 %', label: 'B2B-Einkauf', ref: 'Forrester 2026 [5]', forecast: false },
];

const AXIS = [100, 75, 50, 25, 0];

/* ------------------------------------------------------------------ */
/*  Figure 3 data: the three pillars                                  */
/* ------------------------------------------------------------------ */

const PILLARS = [
  {
    no: '1',
    title: 'Technik',
    claim: 'Kann die KI dich überhaupt lesen?',
    icon: '/images/wissen/saeulen/saeule-technik.svg',
    iconAlt: 'Diagramm aus einem Datenknoten mit zwei untergeordneten Knoten, Symbol für strukturierte Daten',
    items: [
      'Schema.org Markup (Product, FAQ, HowTo, LocalBusiness, Organization)',
      'Saubere, crawlbare Seitenarchitektur mit klarer Hierarchie',
      'Schnelle Ladezeiten und Core Web Vitals',
      'Zugang für KI-Bots in robots.txt (GPTBot, PerplexityBot, ClaudeBot)',
      'llms.txt und ai.txt für KI-Crawler-Instruktionen',
      'Strukturierte Daten für Entity-Erkennung',
      'Semantisches HTML mit korrekter Heading-Hierarchie',
    ],
    href: '/wissen/technische-ki-sichtbarkeit',
    hrefLabel: 'Technische KI-Sichtbarkeit',
  },
  {
    no: '2',
    title: 'Content',
    claim: 'Findet die KI in deinem Text eine Antwort?',
    icon: '/images/wissen/saeulen/saeule-content.svg',
    iconAlt: 'Symbol eines beschriebenen Dokuments mit Textzeilen',
    items: [
      'Echte Fragen deiner Zielgruppe beantworten (nicht Werbetexte)',
      'Extrahierbare, klar strukturierte Formate (Listen, Tabellen, Definitionen)',
      'Regelmäßige Aktualisierung (Freshness-Signal)',
      'Klare Positionierung und thematische Spezialisierung',
      'Ehrlicher Vergleichs-Content mit Zahlen und Fakten',
      'Zitierfähige Aussagen mit konkreten Daten',
      'Content-Cluster mit thematischer Tiefe',
    ],
    href: '/wissen/ai-overviews-sichtbarkeit',
    hrefLabel: 'AI Overviews Sichtbarkeit',
  },
  {
    no: '3',
    title: 'Autorität',
    claim: 'Bestätigt jemand anderes, dass du zählst?',
    icon: '/images/wissen/saeulen/saeule-autoritaet.svg',
    iconAlt: 'Symbol eines Netzwerks aus einem zentralen Knoten mit acht Verbindungen',
    items: [
      'Markennennungen auf relevanten Plattformen (Wikipedia, Fachportale)',
      'PR und redaktionelle Erwähnungen in Branchenmedien',
      'Branchenverzeichnisse, Listings und Bewertungsportale',
      'E-E-A-T Signale (Experience, Expertise, Authority, Trust)',
      'Konsistente NAP-Daten überall',
      'Gastbeiträge und Expertenzitate in Fachmedien',
      'Präsenz auf Plattformen, die KI als Trainingsdaten nutzt',
    ],
    href: '/wissen/ki-sichtbarkeit-messen',
    hrefLabel: 'KI-Sichtbarkeit messen',
  },
];

/* ------------------------------------------------------------------ */
/*  Table 1: GEO vs SEO, ten rows                                     */
/* ------------------------------------------------------------------ */

const COMPARISON: [string, string, string, string][] = [
  ['Ergebnis-Format', '10 blaue Links', '2 bis 7 Zitationen in einer Antwort', 'Ein Platz auf Seite 1 ist kein Platz in der Antwort.'],
  ['Optimierungsfokus', 'Keywords und Suchintention', 'Semantische Relevanz und Entitäten', 'Du belegst Themen, nicht Phrasen.'],
  ['Vertrauenssignal', 'Backlinks', 'Zitationen und Markennennungen', 'Eine Fachnennung ohne Link zählt trotzdem.'],
  ['Nutzerinteraktion', 'Klick auf das Suchergebnis', 'Informationsextraktion durch die KI', 'Der Wert entsteht ohne Sitzung auf deiner Seite.'],
  ['Optimierungsebene', 'Einzelne Seite oder URL', 'Entität, also die Marke als Ganzes', 'Landingpage-Denken greift zu kurz.'],
  ['Update-Rhythmus', 'Monatliche Zyklen', 'Kontinuierliche Aktualität (Freshness)', 'Ein Artikel ohne Datum wirkt veraltet.'],
  ['Content-Typ', 'Keyword-optimierte Texte', 'Zitierfähige, faktenbasierte Antworten', 'Zahl plus Quelle schlägt Adjektiv.'],
  ['Wettbewerb', 'Hunderte Ergebnisse pro Suchanfrage', '2 bis 7 Quellen pro KI-Antwort', 'Platz 8 existiert in einer KI-Antwort nicht.'],
  ['Messgröße', 'Position, Klicks, CTR', 'Zitationsrate, Share of Voice, KI-Referrals', 'Die Search Console allein zeigt es nicht.'],
  ['Zeit bis Wirkung', 'Wochen bis Monate', '4 bis 8 Wochen in Perplexity, 3 bis 6 Monate in ChatGPT', 'Perplexity ist dein Testfeld, ChatGPT dein Ziel.'],
];

/* ------------------------------------------------------------------ */
/*  Table 2: business types, four rows                                */
/* ------------------------------------------------------------------ */

const TYPES: { type: string; sub: string; problem: string; lever: string; win: string }[] = [
  {
    type: 'Dienstleister',
    sub: 'Agenturen, Berater, Anwälte, Steuerberater',
    problem: 'Kunden fragen ChatGPT nach der besten SEO-Agentur in Hamburg. Du tauchst nicht auf.',
    lever: 'Expertise-Content, E-E-A-T-Signale, Fachbeiträge, Spezialisierung sichtbar machen',
    win: 'Vergleichs-Content und FAQ-Seiten mit konkreten Antworten auf Branchenfragen',
  },
  {
    type: 'Lokale Unternehmen',
    sub: 'Handwerker, Restaurants, Ärzte, Fitnessstudios',
    problem: 'Google AI Overviews zeigen lokale Empfehlungen, aber nicht dich.',
    lever: 'LocalBusiness-Schema, konsistente NAP-Daten, Google Business Profile, Bewertungen',
    win: 'Google Business Profile optimieren und in lokalen Verzeichnissen präsent sein',
  },
  {
    type: 'B2B-Unternehmen',
    sub: 'Software, Industrie, Zulieferer, Maschinenbau',
    problem: 'Einkäufer recherchieren Lieferanten über Perplexity und finden deine Wettbewerber.',
    lever: 'Fach-Content mit Daten, Whitepapers, Branchenverzeichnisse, Produktvergleiche',
    win: 'Technische Produktseiten mit Schema.org und strukturierten Spezifikationen',
  },
  {
    type: 'E-Commerce',
    sub: 'Online-Shops, D2C-Marken, Marktplatz-Händler',
    problem: 'Bei "Bestes Produkt 2026" empfiehlt die KI Amazon und deine Wettbewerber.',
    lever: 'Product-Schema, Testberichte, ehrliche Vergleichsseiten, Kundenbewertungen',
    win: 'Produktseiten mit Review-Schema und ausführlichen, ehrlichen Beschreibungen',
  },
];

/* ------------------------------------------------------------------ */
/*  Five steps                                                        */
/* ------------------------------------------------------------------ */

const STEPS: { no: string; title: string; body: React.ReactNode; hint: React.ReactNode; hintLabel: string }[] = [
  {
    no: '8.1',
    title: 'Positionierung schärfen',
    body: (
      <>
        KI empfiehlt Spezialisten, keine Generalisten. Alles für alle lässt sich keiner konkreten Frage zuordnen. Definiere: Was machst du, für wen, warum bist du die beste Wahl? Je spitzer, desto höher die Zitationswahrscheinlichkeit.
      </>
    ),
    hintLabel: 'Beispiel',
    hint: (
      <>
        Webdesign-Agentur ist zu generisch. Webdesign für Zahnärzte in Hamburg mit Fokus auf Patientengewinnung ist eine Positionierung, die KI einer konkreten Frage zuordnen kann.
      </>
    ),
  },
  {
    no: '8.2',
    title: 'Content als Antwortmaschine aufbauen',
    body: (
      <>
        KI sucht Antworten, keine Werbetexte. Recherchiere, welche Fragen deine Zielgruppe an KI stellt, und beantworte sie präzise, ehrlich und klar strukturiert. Vergleichs-Content schlägt Selbstdarstellung. Fakten mit Quellen schlagen Meinungen ohne Belege.
      </>
    ),
    hintLabel: 'Praxis-Tipp',
    hint: (
      <>
        Frag ChatGPT und Perplexity selbst, was sie über dein Themengebiet wissen. Wo Lücken sind, ist deine Chance. Erstelle Content, der diese Lücken füllt, mit Daten, Erfahrungswerten und klaren Strukturen.
      </>
    ),
  },
  {
    no: '8.3',
    title: 'Technische Grundlage schaffen',
    body: (
      <>
        Strukturierte Daten, saubere Architektur, KI-Bots in robots.txt zulassen. Ohne{' '}
        <a href="/wissen/technische-ki-sichtbarkeit" className="text-brand-accent-ink underline decoration-brand-accent/40 underline-offset-2 hover:decoration-brand-accent-ink">
          technische Basis
        </a>{' '}
        kann KI deine Inhalte weder crawlen noch verstehen. Das ist die Eintrittskarte.
      </>
    ),
    hintLabel: 'Sofort prüfen',
    hint: (
      <>
        Blockiert deine robots.txt GPTBot, PerplexityBot oder ClaudeBot? Bei neuen Domains blockiert Cloudflare KI-Crawler seit Juli 2025 standardmäßig [9], dazu kommen WAF- und Plugin-Regeln, die niemand bewusst gesetzt hat. Der Check dauert 30 Sekunden und entscheidet über deine gesamte KI-Sichtbarkeit.
      </>
    ),
  },
  {
    no: '8.4',
    title: 'Autorität systematisch aufbauen',
    body: (
      <>
        Markennennungen auf relevanten Plattformen, PR, Branchenverzeichnisse, konsistente NAP-Daten. Eine Erwähnung in einem relevanten Fachartikel kann mehr bewirken als hundert Verzeichnis-Backlinks. KI bewertet Qualität, nicht Quantität.
      </>
    ),
    hintLabel: 'Strategie',
    hint: (
      <>
        Identifiziere die zehn Quellen, die KI in deiner Branche am häufigsten zitiert. Werde auf diesen Plattformen präsent, durch Gastbeiträge, Expertenzitate, Listings oder redaktionelle Erwähnungen. Das sind deine Autoritäts-Multiplikatoren.
      </>
    ),
  },
  {
    no: '8.5',
    title: 'Messen und iterieren',
    body: (
      <>
        Tools wie Ahrefs Brand Radar und Semrush AI Visibility zeigen, ob du in KI-Antworten auftauchst. GA4 trackt den Traffic von KI-Plattformen. Ohne{' '}
        <a href="/wissen/ki-sichtbarkeit-messen" className="text-brand-accent-ink underline decoration-brand-accent/40 underline-offset-2 hover:decoration-brand-accent-ink">
          Messung
        </a>{' '}
        kein Fortschritt.
      </>
    ),
    hintLabel: 'KPIs',
    hint: (
      <>
        Zitationsrate in KI-Antworten, Referral-Traffic von KI-Plattformen (chatgpt.com, perplexity.ai), Brand-Mentions in KI-Outputs, Share of Voice gegenüber Wettbewerbern. Plattformspezifische Details in den Guides zu{' '}
        <a href="/wissen/sichtbarkeit-in-chatgpt" className="text-brand-accent-ink underline decoration-brand-accent/40 underline-offset-2 hover:decoration-brand-accent-ink">
          ChatGPT
        </a>{' '}
        und{' '}
        <a href="/wissen/sichtbarkeit-in-perplexity" className="text-brand-accent-ink underline decoration-brand-accent/40 underline-offset-2 hover:decoration-brand-accent-ink">
          Perplexity
        </a>
        .
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Was bedeutet KI-Sichtbarkeit?',
    a: 'KI-Sichtbarkeit bedeutet, dass dein Unternehmen von ChatGPT, Perplexity, Google AI Overviews oder Microsoft Copilot als vertrauenswürdige Quelle erkannt und aktiv empfohlen wird. Nicht gefunden, sondern empfohlen. Es geht nicht um klassische Rankings auf blauen Links, sondern darum, ob KI-Systeme dich als relevante Autorität einordnen und in ihren Antworten namentlich zitieren. Ein Unternehmen mit hoher KI-Sichtbarkeit wird bei branchenrelevanten Fragen konsistent als Empfehlung ausgegeben.',
  },
  {
    q: 'Ist KI-Sichtbarkeit das gleiche wie SEO?',
    a: 'Nein. SEO optimiert für Rankings und Klicks auf blaue Links in klassischen Suchmaschinen. KI-Sichtbarkeit (auch GEO oder AEO genannt) optimiert dafür, dass KI-Systeme dich als vertrauenswürdige Quelle zitieren und weiterempfehlen. Die Disziplinen überschneiden sich bei technischen Grundlagen wie strukturierten Daten, haben aber unterschiedliche Mechanismen: SEO bewertet Backlinks und Keywords, KI-Sichtbarkeit bewertet semantische Relevanz, Entitäts-Autorität und Zitierfähigkeit deiner Inhalte.',
  },
  {
    q: 'Welche KI-Systeme sind für die Sichtbarkeit relevant?',
    a: 'ChatGPT (OpenAI), Google Gemini mit AI Overviews, Perplexity, Microsoft Copilot und Claude (Anthropic). Perplexity und Google AI Overviews sind besonders relevant, weil sie Quellen direkt verlinken und messbaren Traffic generieren. ChatGPT ist der wichtigste Kanal für Markenempfehlungen, weil dort die meisten Nutzer sind. Für lokale Unternehmen sind Google AI Overviews der wichtigste Kanal, für B2B-Recherchen dominieren Perplexity und ChatGPT.',
  },
  {
    q: 'Was kostet KI-Sichtbarkeits-Optimierung?',
    a: 'Das hängt vom Umfang ab. Ein einmaliges Audit mit Handlungsempfehlungen ist der günstigste Einstieg. Eine vollständige Optimierung inklusive Content-Strategie, technischer Implementierung und Autoritätsaufbau läuft über mehrere Monate. Der ROI ist hoch: Ein einziger Zitationsplatz in ChatGPT oder Perplexity kann hunderte qualifizierte Besucher pro Monat generieren. Für eine konkrete Einschätzung biete ich eine kostenlose Kurzanalyse an.',
  },
  {
    q: 'Für welche Unternehmen lohnt sich KI-Sichtbarkeit?',
    a: 'Für alle, die über Online-Sichtbarkeit Kunden gewinnen: Dienstleister, lokale Unternehmen, SaaS-Anbieter, E-Commerce, Berater, Agenturen, Ärzte, Anwälte und Handwerker. Besonders profitieren Unternehmen in Branchen, in denen Kunden KI für Recherche und Kaufentscheidungen nutzen. Laut Forrester haben 94 % der B2B-Einkäufer bei ihrem letzten Kauf KI eingesetzt, im Vorjahr waren es 89 %.',
  },
  {
    q: 'Wie messe ich meine KI-Sichtbarkeit?',
    a: 'Tools wie Ahrefs Brand Radar, Semrush AI Visibility und Otterly.ai zeigen deine Präsenz in KI-Antworten. GA4 trackt Traffic von KI-Plattformen über Referral-Quellen. Zusätzlich kannst du manuell prüfen, was ChatGPT oder Perplexity auf branchenrelevante Fragen antworten. Eine detaillierte Anleitung findest du im Guide KI-Sichtbarkeit messen.',
  },
  {
    q: 'Wie lange dauert es, bis ich Ergebnisse sehe?',
    a: 'Perplexity durchsucht das Live-Web, dort siehst du Ergebnisse oft nach 4 bis 8 Wochen. ChatGPT und Google Gemini trainieren in Zyklen, hier dauert es 3 bis 6 Monate bis zu konsistenten Veränderungen. Der Compound-Effekt bedeutet: Wer früh optimiert, wird als Quelle etabliert. Spätere Trainingszyklen bestätigen dieses Signal und machen die Position stabiler.',
  },
  {
    q: 'Blockiert meine Website KI-Crawler?',
    a: 'Möglich, ohne dass jemand es entschieden hat. Cloudflare blockiert KI-Crawler bei neu angemeldeten Domains seit dem 1. Juli 2025 standardmäßig, viele Security-Plugins und WAFs sperren GPTBot, PerplexityBot und ClaudeBot schon in der Standardkonfiguration aus, und restriktive robots.txt-Regeln aus dem Jahr 2024 stehen oft noch drin. Ein technisches Audit deckt das in Minuten auf. Details dazu im Guide zur technischen KI-Sichtbarkeit.',
  },
];

/* ------------------------------------------------------------------ */
/*  Sources, numbered so the figures can cite them                    */
/* ------------------------------------------------------------------ */

const SOURCES: { no: string; who: string; text: string; href?: string }[] = [
  {
    no: '1',
    who: 'Gartner (2024)',
    text: 'Gartner erwartet, dass Marken bis 2028 die Hälfte oder mehr ihres organischen Suchtraffics an KI-gestützte Suche verlieren. Die frei zugängliche Pressemitteilung vom 19.02.2024 nennt zusätzlich 25 % weniger Suchmaschinen-Volumen bis 2026.',
    href: 'https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents',
  },
  {
    no: '2',
    who: 'Princeton University u. a. (KDD 2024)',
    text: 'GEO: Generative Engine Optimization, arXiv 2311.09735. Kontrollierte Studie mit neun Methoden: bis zu 40 % mehr Sichtbarkeit in generativen Antworten. Beim Zitieren von Quellen gewann die fünftplatzierte Seite 115,1 %, die Nummer eins verlor 30,3 %.',
    href: 'https://arxiv.org/abs/2311.09735',
  },
  {
    no: '3',
    who: 'SparkToro (2026)',
    text: 'Zero-Click-Auswertung im Similarweb-Panel: 68,01 % der US-Google-Suchen von Januar bis April 2026 endeten ohne jeden Klick, 2024 waren es 58,5 % (USA) und 59,7 % (EU). In Deutschland liegt die Quote laut derselben Auswertung niedriger als in den USA.',
    href: 'https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/',
  },
  {
    no: '4',
    who: 'Claneo (2025)',
    text: 'State of Search 2025, Panel-Befragung mit Appinio, 2.000 Personen aus Deutschland und den USA, erhoben am 1. und 2. April 2025: die wöchentliche Nutzung von KI-Chats stieg binnen eines Jahres um 15 Prozentpunkte auf 33 %.',
    href: 'https://www.claneo.com/de/state-of-search-studie/',
  },
  {
    no: '5',
    who: 'Forrester (2026)',
    text: 'The State Of Business Buying, 2026, auf Basis der Buyers Journey Survey mit knapp 18.000 Einkäufern weltweit: 94 % haben im letzten Kaufprozess KI eingesetzt, im Vorjahr waren es 89 %.',
    href: 'https://www.forrester.com/press-newsroom/forrester-2026-the-state-of-business-buying/',
  },
  {
    no: '6',
    who: 'Bitkom (2025)',
    text: 'Repräsentative Befragung von 1.156 Personen ab 16 Jahren in Deutschland, veröffentlicht am 20.11.2025: 50 % der Internetnutzer verwenden zumindest gelegentlich KI-Chats statt klassischer Suche, bei den 16- bis 29-Jährigen 66 %.',
    href: 'https://www.bitkom.org/Presse/Presseinformation/Internet-Suche-Wandel-Haelfte-nutzt-KI-Chats',
  },
  {
    no: '7',
    who: 'Pew Research Center (2025)',
    text: 'Browserdaten von 900 US-Erwachsenen, März 2025, veröffentlicht am 22.07.2025: bei Ergebnisseiten mit KI-Antwort führten 8 % der Besuche zu einem Klick auf ein Ergebnis, ohne KI-Antwort 15 %. 88 % der KI-Antworten nannten drei oder mehr Quellen.',
    href: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/',
  },
  {
    no: '8',
    who: 'Authoritas (2025)',
    text: 'Messung an britischen Nachrichtenseiten, Suchanfragen vom 16. bis 22. April 2025: erscheint eine AI Overview, verliert das erste organische Ergebnis bis zu 79 % seiner Klicks. Google widerspricht der Methodik.',
    href: 'https://pressgazette.co.uk/media-audience-and-business-data/google-ai-overviews-publishers-report-clickthroughs-authoritas-report/',
  },
  {
    no: '9',
    who: 'Cloudflare (2025)',
    text: 'Ankündigung vom 1. Juli 2025: Cloudflare blockiert KI-Crawler bei neu angemeldeten Domains standardmäßig und fragt beim Setup ab, welche KI-Bots erlaubt sein sollen.',
    href: 'https://blog.cloudflare.com/content-independence-day-no-ai-crawl-without-compensation/',
  },
];

/* ------------------------------------------------------------------ */
/*  Related guides                                                    */
/* ------------------------------------------------------------------ */

const GUIDES = [
  {
    href: '/wissen/geo-vs-seo',
    title: 'GEO vs SEO vs AEO vs LLMO',
    text: 'Die vier Begriffe sauber getrennt: Ziel, Erfolgsmaß und Zielsystem in einer Tabelle.',
  },
  {
    href: '/wissen/warum-nicht-in-chatgpt',
    title: 'Warum erscheint meine Firma nicht in ChatGPT?',
    text: 'Zehn Ursachen nach Häufigkeit und die Diagnose in vier Schritten, bevor du Inhalte produzierst.',
  },
  {
    href: '/wissen/sichtbarkeit-in-chatgpt',
    title: 'Sichtbarkeit in ChatGPT',
    text: 'Wie du in ChatGPT-Antworten erscheinst, was OpenAI als Quelle bevorzugt und wie die Websuche funktioniert.',
  },
  {
    href: '/wissen/sichtbarkeit-in-perplexity',
    title: 'Sichtbarkeit in Perplexity',
    text: 'Der schnellste Kanal für KI-Sichtbarkeit. Live-Web-Suche, Quellenverlinkung und konkrete Taktiken.',
  },
  {
    href: '/wissen/ai-overviews-sichtbarkeit',
    title: 'Google AI Overviews',
    text: 'So wirst du in Googles KI-Antwortbox als Quelle zitiert. Der wichtigste Kanal für lokale Sichtbarkeit.',
  },
  {
    href: '/wissen/ki-sichtbarkeit-messen',
    title: 'KI-Sichtbarkeit messen',
    text: 'Tools, KPIs und Tracking-Methoden: So misst du deine Präsenz in KI-Antworten systematisch.',
  },
  {
    href: '/wissen/technische-ki-sichtbarkeit',
    title: 'Technische KI-Sichtbarkeit',
    text: 'robots.txt, llms.txt, Schema.org und was KI-Crawler brauchen. Der technische Audit-Guide.',
  },
  {
    href: '/ai-seo-agentur',
    title: 'AI SEO Agentur',
    text: 'Worauf du bei der Wahl einer AI SEO Agentur achten solltest und welche Fragen du stellen musst.',
  },
  {
    href: '/wissen/fallstudie-ki-sichtbarkeit-90-tage',
    title: 'Fallstudie: 90 Tage KI-sichtbar',
    text: 'Echte Zahlen eines Hamburger Unternehmens: Performance von 35 auf 99, doppelter Traffic, Platz 1 in ChatGPT.',
  },
  {
    href: '/wissen/case-study-blitz-hamburg',
    title: 'Case Study: Blitz Hamburg',
    text: 'Wie ein lokaler Dienstleister in einem austauschbaren Markt zur ChatGPT-Empfehlung wurde.',
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
  headline: 'KI-Sichtbarkeit: Was es bedeutet und warum es 2026 entscheidend ist',
  description:
    'Der Pillar-Guide zu KI-Sichtbarkeit: Definition, Framework mit drei Säulen, GEO vs. SEO, Pain-Analyse und strategische Schritte für Unternehmen.',
  image: 'https://aiseo.hamburg/images/wissen/ki-sichtbarkeit.jpg',
  author: {
    '@type': 'Person',
    name: 'Vadim Shchepin',
    url: 'https://aiseo.hamburg/ueber-mich',
    jobTitle: 'AI SEO Specialist',
  },
  publisher: {
    '@id': 'https://aiseo.hamburg/#organization',
  },
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit',
  inLanguage: 'de',
};

/* ------------------------------------------------------------------ */
/*  Layout primitives                                                 */
/* ------------------------------------------------------------------ */

/** Reading measure: 752px. Every run of body copy sits in one of these. */
const Prose: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`max-w-measure space-y-flow text-body text-brand-muted ${className}`}>{children}</div>
);

/** A section head with the bar's numbered hierarchy. */
const SectionHead: React.FC<{ no: string; id: string; children: React.ReactNode }> = ({ no, id, children }) => (
  <h2 id={id} className="mb-flow flex gap-4 text-heading font-semibold text-brand-text">
    <span className="shrink-0 tabular-nums text-brand-accent-ink">{no}.</span>
    <span>{children}</span>
  </h2>
);

/** Figures use the full content column, so they bleed right past the measure. */
const Figure: React.FC<{ label: string; caption: React.ReactNode; children: React.ReactNode }> = ({
  label,
  caption,
  children,
}) => (
  <figure className="mt-stack">
    <div className="rounded-card border border-brand-line bg-white p-5 sm:p-7">
      <p className="mb-5 text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">{label}</p>
      {children}
    </div>
    <figcaption className="mt-4 border-l-2 border-brand-accent pl-4 text-meta text-brand-subtle lg:-ml-10 lg:pl-9">
      {caption}
    </figcaption>
  </figure>
);

/** Compact key-figure note. Replaces the old full-width bordered StatBox. */
const Note: React.FC<{ kind?: 'fact' | 'risk'; children: React.ReactNode }> = ({ kind = 'fact', children }) => (
  <p
    className={`max-w-measure border-l-2 pl-5 text-lead font-medium text-brand-text ${
      kind === 'risk' ? 'border-brand-orange' : 'border-brand-accent'
    }`}
  >
    {children}
  </p>
);

/* ------------------------------------------------------------------ */
/*  Sticky table of contents                                          */
/* ------------------------------------------------------------------ */

function useActiveHeading(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-120px 0px -70% 0px', threshold: 0 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const TocList: React.FC<{ active: string }> = ({ active }) => (
  <ol className="space-y-2.5">
    {TOC.map((item) => {
      const isActive = active === item.id;
      return (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            aria-current={isActive ? 'true' : undefined}
            className={`flex gap-2 border-l-2 py-0.5 pl-3 text-micro leading-snug transition-colors ${
              isActive
                ? 'border-brand-accent-deep font-semibold text-brand-text'
                : 'border-transparent text-brand-subtle hover:border-brand-line hover:text-brand-text'
            }`}
          >
            {item.no ? <span className="shrink-0 tabular-nums">{item.no}.</span> : null}
            <span>{item.label}</span>
          </a>
        </li>
      );
    })}
  </ol>
);

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function KISichtbarkeitPage() {
  const active = useActiveHeading(React.useMemo(() => TOC.map((t) => t.id), []));

  return (
    <div className="relative w-full overflow-x-clip bg-brand-surface text-brand-text font-sans selection:bg-brand-accent selection:text-white">
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
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
            { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
            { '@type': 'ListItem', position: 3, name: 'KI-Sichtbarkeit' },
          ],
        }) }}
      />

      <div className="mx-auto w-full max-w-[1264px] px-6 lg:px-10">
        {/* ========================================================== */}
        {/*  Hero: asymmetric, H1 left, offer aside right              */}
        {/* ========================================================== */}
        <header className="pt-28 md:pt-40 lg:grid lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-x-12">
          <div>
            <nav aria-label="Breadcrumb" className="mb-8 text-meta text-brand-subtle">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li><a href="/" className="hover:text-brand-accent-ink">Startseite</a></li>
                <li aria-hidden="true">/</li>
                <li><a href="/wissen" className="hover:text-brand-accent-ink">Wissen</a></li>
                <li aria-hidden="true">/</li>
                <li className="font-medium text-brand-text">KI-Sichtbarkeit</li>
              </ol>
            </nav>

            <p className="mb-5 text-micro font-semibold uppercase tracking-eyebrow text-brand-accent-ink">
              Pillar Guide
            </p>
            <h1 className="mb-6 max-w-[20ch] text-4xl font-semibold leading-[1.05] tracking-display text-brand-text sm:text-5xl lg:text-display">
              KI-Sichtbarkeit: Deine Kunden fragen KI um Rat. KI empfiehlt dich nicht.
            </h1>
            <div className="max-w-measure space-y-flow text-lead text-brand-muted">
              <p>
                Du verlierst Geschäft, ohne es zu merken. Während du in Google-Rankings investierst, recherchieren deine Kunden längst in ChatGPT, Perplexity und Google AI Overviews. Wer dort nicht empfohlen wird, existiert für eine wachsende Zielgruppe schlicht nicht.
              </p>
              <p className="font-medium text-brand-text">
                Dein Google-Ranking ist irrelevant, wenn ChatGPT dich nicht kennt. Hier ist das Framework, um das zu ändern.
              </p>
            </div>

            <dl className="mt-stack flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-brand-line pt-5 text-micro text-brand-subtle">
              <div className="flex gap-1.5">
                <dt className="sr-only">Autor</dt>
                <dd>
                  <a href="/ueber-mich" className="font-medium text-brand-text hover:text-brand-accent-ink">
                    Vadim Shchepin
                  </a>
                  , AI SEO Specialist
                </dd>
              </div>
              <div className="flex gap-1.5">
                <dt>Veröffentlicht</dt>
                <dd className="text-brand-text">
                  <time dateTime={PUBLISHED}>{PUBLISHED_LABEL}</time>
                </dd>
              </div>
              <div className="flex gap-1.5">
                <dt>Aktualisiert</dt>
                <dd className="text-brand-text">
                  <time dateTime={MODIFIED}>{MODIFIED_LABEL}</time>
                </dd>
              </div>
              <div className="flex gap-1.5">
                <dt>Lesezeit</dt>
                <dd className="text-brand-text">12 Min.</dd>
              </div>
            </dl>
          </div>

          <aside className="mt-stack border-t border-brand-line pt-6 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1">
            <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
              Kostenlose Kurzanalyse
            </p>
            <p className="mt-4 text-meta leading-relaxed text-brand-muted">
              Du erfährst in einer Analyse, was ChatGPT und Perplexity heute über dein Unternehmen sagen, wo du unsichtbar bist und welche drei Schritte den größten Hebel haben.
            </p>
            <a
              href="/ai-sichtbarkeit-now"
              className="mt-5 inline-flex items-center gap-1.5 text-meta font-semibold text-brand-accent-ink hover:gap-2.5 transition-all"
            >
              Sichtbarkeit prüfen
              <span aria-hidden="true">&rarr;</span>
            </a>
            <p className="mt-6 border-t border-brand-hairline pt-4 text-micro text-brand-subtle">
              Kein Abo, kein Verkaufsgespräch. Du bekommst die Auswertung und entscheidest danach.
            </p>
          </aside>
        </header>

        {/* ========================================================== */}
        {/*  Two-column body: sticky TOC + content                     */}
        {/* ========================================================== */}
        <div className="mt-rule lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-x-8">
          {/* --- rail --- */}
          <div className="lg:relative">
            <div className="hidden lg:sticky lg:top-28 lg:block">
              <p className="mb-4 text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                Inhalt
              </p>
              <nav aria-label="Inhaltsverzeichnis">
                <TocList active={active} />
              </nav>
              <a
                href="/ai-sichtbarkeit-now"
                className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-brand-accent-deep px-4 py-3 text-micro font-semibold text-white transition-colors hover:bg-brand-accent-ink"
              >
                Sichtbarkeit prüfen
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* mobile: same list, collapsed */}
            <details className="rounded-card border border-brand-line bg-white lg:hidden">
              <summary className="cursor-pointer px-5 py-4 text-meta font-semibold text-brand-text">
                Inhalt, 12 Abschnitte
              </summary>
              <nav aria-label="Inhaltsverzeichnis" className="border-t border-brand-hairline px-5 py-4">
                <TocList active={active} />
              </nav>
            </details>
          </div>

          {/* --- content column: prose 752px, figures full width --- */}
          <div className="mt-block lg:mt-0 lg:border-l lg:border-brand-hairline lg:pl-10">
            {/* ------------------------------------------------ TL;DR */}
            <section className="scroll-mt-navbar">
              <FadeIn>
                <div className="rounded-card border border-brand-line bg-white p-6 md:p-8">
                  <h2 className="mb-5 text-micro font-semibold uppercase tracking-eyebrow text-brand-accent-ink">
                    TL;DR
                  </h2>
                  <ol className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
                    {[
                      <>
                        <strong className="font-semibold text-brand-text">KI-Sichtbarkeit</strong> heißt: KI-Systeme empfehlen dein Unternehmen aktiv. Nicht finden. Empfehlen.
                      </>,
                      <>
                        <strong className="font-semibold text-brand-text">68 % der Google-Suchen</strong> enden ohne Klick (USA, Anfang 2026). 94 % der B2B-Einkäufer nutzen KI im Kaufprozess.
                      </>,
                      <>
                        <strong className="font-semibold text-brand-text">Drei Säulen</strong> entscheiden: Technik, Content, Autorität. Fehlt eine, funktioniert nichts.
                      </>,
                      <>
                        <strong className="font-semibold text-brand-text">Compound-Effekt:</strong> KI zitiert die gleichen Quellen immer wieder. Wer jetzt startet, baut einen schwer einholbaren Vorsprung auf.
                      </>,
                      <>
                        <strong className="font-semibold text-brand-text">Blockierte KI-Crawler</strong> sind selten eine Entscheidung: Cloudflare sperrt sie bei neuen Domains seit Juli 2025 standardmäßig aus. Du bist vielleicht unsichtbar, ohne es zu wissen.
                      </>,
                      <>
                        <strong className="font-semibold text-brand-text">Erster Schritt:</strong> robots.txt prüfen, dann eine Frage deiner Kunden in ChatGPT und Perplexity stellen und lesen, wer statt dir genannt wird.
                      </>,
                    ].map((item, index) => (
                      <li key={index} className="flex gap-3 text-meta leading-relaxed text-brand-muted">
                        <span className="shrink-0 tabular-nums font-semibold text-brand-accent-ink">
                          {index + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </FadeIn>
            </section>

            {/* ------------------------------------------ 1 Definition */}
            <section className="mt-block border-t border-brand-hairline pt-block">
              <FadeIn>
                <SectionHead no="1" id="definition">
                  Was ist KI-Sichtbarkeit? Definition und Abgrenzung
                </SectionHead>
                <Prose>
                  <p>
                    <strong className="font-semibold text-brand-text">KI-Sichtbarkeit</strong> (auch KI-gestützte Sichtbarkeit oder KI Visibility) bedeutet: dein Unternehmen wird von ChatGPT, Perplexity oder Google AI empfohlen. Nicht gefunden. <strong className="font-semibold text-brand-text">Empfohlen.</strong> Der Unterschied ist fundamental. Du konkurrierst nicht mehr um 10 blaue Links, sondern um 2 bis 7 Zitationsplätze pro KI-Antwort.
                  </p>
                  <p>
                    Die Disziplin dahinter heißt <strong className="font-semibold text-brand-text">GEO (Generative Engine Optimization)</strong>. Du kennst sie vielleicht als <strong className="font-semibold text-brand-text">AEO (Answer Engine Optimization)</strong> oder <strong className="font-semibold text-brand-text">LLMO (Large Language Model Optimization)</strong>. Gleicher Kern: dein Unternehmen so aufstellen, dass KI-Systeme es verstehen, einordnen und weiterempfehlen. Die Abgrenzung im Detail steht im Guide{' '}
                    <a href="/wissen/geo-vs-seo" className="text-brand-accent-ink underline decoration-brand-accent/40 underline-offset-2 hover:decoration-brand-accent-ink">
                      GEO vs SEO vs AEO vs LLMO
                    </a>
                    .
                  </p>
                  <p>
                    Bei Google optimierst du für ein Ranking. Bei KI-Sichtbarkeit optimierst du dafür,{' '}
                    <strong className="font-semibold text-brand-text">als Quelle zitiert</strong> zu werden. Andere Signale, andere Strukturen, andere Denkweise. Und ein völlig anderer Wettbewerb: statt gegen hunderte Ergebnisse kämpfst du um eine Handvoll Empfehlungsplätze.
                  </p>
                </Prose>

                <div className="mt-stack">
                  <Note>
                    Der Test dauert eine Minute. Frag ChatGPT: Welche AI SEO Agentur in Hamburg ist empfehlenswert? Erscheint dein Unternehmen in der Antwort? Wenn nicht, hast du ein KI-Sichtbarkeits-Problem, unabhängig von deinem Google-Ranking.
                  </Note>
                </div>

                <Prose className="mt-stack">
                  <p>
                    Der Hebel ist messbar. Die Princeton-Studie zu GEO (arXiv 2311.09735, KDD 2024) hat neun Optimierungsmethoden kontrolliert getestet: aufbereitete Inhalte erreichten bis zu{' '}
                    <strong className="font-semibold text-brand-text">40 % mehr Sichtbarkeit</strong> in KI-Antworten. Für eine einzelne Methode, das Zitieren von Quellen, gewann die zuvor fünftplatzierte Seite{' '}
                    <strong className="font-semibold text-brand-text">115,1 %</strong>, während die Nummer eins 30,3 % verlor. Am stärksten wirkten Zitate, Statistiken und klare Quellenangaben, also genau das, was klassisches SEO nie belohnt hat. <span className="text-brand-subtle">[2]</span>
                  </p>
                </Prose>
              </FadeIn>
            </section>

            {/* -------------------------------------- 2 Problem in Zahlen */}
            <section className="mt-block border-t border-brand-hairline pt-block">
              <FadeIn>
                <SectionHead no="2" id="zahlen">
                  Dein Problem in Zahlen
                </SectionHead>
                <Prose>
                  <p>
                    Du investierst Tausende in Content-Marketing, aber KI bedient sich an deinem Wissen, ohne dich zu nennen. Vier Zahlen zeigen, wie schnell sich der Markt verschiebt.
                  </p>
                </Prose>

                <Figure
                  label="Abbildung 1: Was die Verschiebung bisher gekostet hat"
                  caption="Vier unabhängig erhobene Kennzahlen, alle auf dieselbe Prozentskala gelegt. Die letzte ist eine Prognose und daher offen dargestellt. Quellen [1], [3], [7] und [8]."
                >
                  <div className="mb-5 grid gap-x-6 sm:grid-cols-[6rem_minmax(0,1fr)]">
                    <span className="hidden sm:block" />
                    <div className="relative h-4 border-b border-brand-edge">
                      {[0, 25, 50, 75, 100].map((tick) => (
                        <span
                          key={tick}
                          className={`absolute bottom-1 text-micro tabular-nums text-brand-subtle ${
                            tick === 0 ? 'left-0' : tick === 100 ? 'right-0' : '-translate-x-1/2'
                          }`}
                          style={tick === 0 || tick === 100 ? undefined : { left: `${tick}%` }}
                        >
                          {tick} %
                        </span>
                      ))}
                    </div>
                  </div>
                  <ol className="space-y-6">
                    {PROBLEM_BARS.map((bar) => (
                      <li key={bar.display} className="grid gap-x-6 gap-y-2 sm:grid-cols-[6rem_minmax(0,1fr)]">
                        <p className="text-3xl font-semibold tabular-nums tracking-heading text-brand-text sm:text-right">
                          {bar.display}
                        </p>
                        <div>
                          <div className="h-2.5 w-full overflow-hidden rounded-full bg-brand-hairline">
                            <div
                              className={`h-full rounded-full ${bar.value === 50 ? 'bg-brand-accent/50' : 'bg-brand-accent-deep'}`}
                              style={{ width: `${bar.value}%` }}
                            />
                          </div>
                          <p className="mt-2.5 text-meta leading-relaxed text-brand-muted">{bar.label}</p>
                          <p className="mt-1 text-micro text-brand-subtle">{bar.ref}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </Figure>

                <Prose className="mt-stack">
                  <p>
                    Deine Agentur optimiert für ein System, das seine Marktmacht verliert. Nicht weil Google verschwindet, sondern weil sich die Art ändert, wie Menschen Antworten finden. Wer nur auf klassisches SEO setzt, optimiert für die Vergangenheit.
                  </p>
                </Prose>
              </FadeIn>
            </section>

            {/* -------------------------------------------- 3 Nichtstun */}
            <section className="mt-block border-t border-brand-hairline pt-block">
              <FadeIn>
                <SectionHead no="3" id="nichtstun">
                  Was passiert, wenn du nichts tust
                </SectionHead>
                <Prose>
                  <p>
                    Nichtstun ist keine neutrale Entscheidung, sondern eine Entscheidung gegen deine zukünftige Sichtbarkeit. Drei Mechanismen arbeiten dabei gegen dich.
                  </p>
                </Prose>

                <div className="mt-stack">
                  <Note kind="risk">
                    Dein Wettbewerber wird empfohlen. Du nicht. Bei jeder KI-Anfrage in deiner Branche entscheidet sich, wer künftig Anfragen bekommt und wer unsichtbar bleibt.
                  </Note>
                </div>

                <div className="mt-stack divide-y divide-brand-hairline border-y border-brand-hairline">
                  {[
                    {
                      no: '3.1',
                      title: 'Der Compound-Effekt arbeitet gegen dich',
                      text: 'KI-Systeme zitieren die gleichen Quellen immer wieder. Jede Zitation stärkt die Autorität dieser Quelle für zukünftige Antworten. Dein Wettbewerber, der heute zitiert wird, wird morgen häufiger zitiert. Der Vorsprung verstärkt sich mit jedem Modell-Update. Wie Zinseszins, nur gegen dich.',
                    },
                    {
                      no: '3.2',
                      title: 'Je länger du wartest, desto teurer wird es',
                      text: 'Heute reicht ein gut strukturierter Fachbeitrag, um in Perplexity als Quelle aufzutauchen. In einem Jahr brauchst du eine umfassende Content-Strategie für den gleichen Effekt. In zwei Jahren kämpfst du gegen fest etablierte KI-Autoritäten in deiner Branche. Die Einstiegskosten steigen mit jedem Monat.',
                    },
                    {
                      no: '3.3',
                      title: 'Dein Content wird geplündert, ohne Gegenleistung',
                      text: 'Du investierst Tausende in Content-Marketing. KI-Systeme extrahieren dein Wissen, fassen es zusammen und liefern es an Nutzer, ohne deinen Namen zu nennen, ohne Link, ohne Klick. Dein Content füttert die KI, aber du bekommst nichts zurück. Außer du optimierst aktiv dafür, als Quelle zitiert zu werden.',
                    },
                  ].map((item) => (
                    <div key={item.no} className="grid gap-x-6 gap-y-2 py-6 sm:grid-cols-[4rem_minmax(0,1fr)]">
                      <p className="text-meta font-semibold tabular-nums text-brand-accent-ink">{item.no}</p>
                      <div className="max-w-measure">
                        <h3 className="mb-2 text-subheading font-semibold text-brand-text">{item.title}</h3>
                        <p className="text-body text-brand-muted">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-stack">
                  <Note kind="risk">
                    In 12 Monaten ist der Abstand nicht mehr mit dem gleichen Budget aufzuholen. Der Vorsprung deines Wettbewerbers verstärkt sich mit jedem Modell-Update.
                  </Note>
                </div>
              </FadeIn>
            </section>

            {/* ------------------------------------------ 4 Warum jetzt */}
            <section className="mt-block border-t border-brand-hairline pt-block">
              <FadeIn>
                <SectionHead no="4" id="warum-jetzt">
                  Warum jetzt? Die Marktverschiebung in Echtzeit
                </SectionHead>
                <Prose>
                  <p>
                    Das Suchverhalten kippt gerade, nicht irgendwann. Gartner erwartet bis 2026 ein um{' '}
                    <strong className="font-semibold text-brand-text">25 % sinkendes Volumen</strong> klassischer Suchmaschinen. Gleichzeitig wachsen die KI-Plattformen: OpenAI meldete im Oktober 2025 über{' '}
                    <strong className="font-semibold text-brand-text">800 Millionen wöchentlich aktive Nutzer</strong> für ChatGPT, Perplexity kam im Mai 2025 auf rund{' '}
                    <strong className="font-semibold text-brand-text">780 Millionen Suchanfragen im Monat</strong>. Das sind keine Nischenwerte mehr.
                  </p>
                </Prose>

                <Figure
                  label="Abbildung 2: Anteil, der die Recherche in einem KI-System startet"
                  caption="Eine Kennzahl, vier Gruppen: wöchentliche KI-Chat-Nutzung in Deutschland und den USA, alle Internetnutzer in Deutschland, die 16- bis 29-Jährigen und Einkäufer im B2B. Alle vier Werte sind gemessen, nicht prognostiziert. Die Fragen der Erhebungen unterscheiden sich leicht, deshalb sind die Balken nebeneinander gestellt und nicht addiert. Quellen [4], [5] und [6]."
                >
                  <div className="flex gap-4 pt-3">
                    {/* y axis */}
                    <div className="relative h-56 w-10 shrink-0">
                      {AXIS.map((tick) => (
                        <span
                          key={tick}
                          className="absolute right-0 -translate-y-1/2 text-micro tabular-nums text-brand-subtle"
                          style={{ bottom: `${tick}%` }}
                        >
                          {tick} %
                        </span>
                      ))}
                    </div>
                    {/* plot */}
                    <div className="relative min-w-0 flex-1">
                      <div className="relative h-56">
                        {AXIS.map((tick) => (
                          <span
                            key={tick}
                            className={`absolute inset-x-0 h-px ${tick === 0 ? 'bg-brand-edge' : 'bg-brand-hairline'}`}
                            style={{ bottom: `${tick}%` }}
                          />
                        ))}
                        <div className="absolute inset-0 flex items-end gap-3 sm:gap-6">
                          {COHORTS.map((c) => (
                            <div key={c.label} className="flex h-full min-w-0 flex-1 flex-col justify-end">
                              <p className="mb-1.5 text-center text-micro font-semibold tabular-nums text-brand-text sm:text-meta">
                                {c.display}
                              </p>
                              <div
                                className={
                                  c.forecast
                                    ? 'w-full rounded-t border-2 border-dashed border-brand-accent-deep border-b-0 bg-brand-accent/10'
                                    : 'w-full rounded-t bg-brand-accent-deep'
                                }
                                style={{ height: `${c.value}%` }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-3 flex gap-3 sm:gap-6">
                        {COHORTS.map((c) => (
                          <div key={c.label} className="min-w-0 flex-1 text-center">
                            <p className="text-[0.6875rem] font-medium leading-tight text-brand-text sm:text-micro">{c.label}</p>
                            <p className="mt-1 text-[0.625rem] leading-tight text-brand-subtle sm:text-micro">{c.ref}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Figure>

                <Prose className="mt-stack">
                  <p>
                    Das sind nicht nur Tech-Early-Adopter. Handwerker lassen Angebote vergleichen. Freiberufler fragen nach dem besten Steuerberater in Hamburg. Einkäufer recherchieren Lieferanten über Perplexity. Geschäftsführer lassen sich Marktanalysen von ChatGPT erstellen. Quer durch alle Branchen und Hierarchieebenen.
                  </p>
                  <p>
                    Wenn KI dich nicht kennt, wirst du nicht empfohlen. Wenn du nicht empfohlen wirst, verlierst du Anfragen an Wettbewerber, die KI als Quelle erkannt hat. Und dieser Effekt verstärkt sich selbst, mit jedem Trainingszyklus und mit jedem Modell-Update. In 12 bis 18 Monaten ist KI-Sichtbarkeit keine Option mehr, sondern Grundvoraussetzung. Die Frage ist nicht ob, sondern{' '}
                    <strong className="font-semibold text-brand-text">wann</strong> du anfängst, und ob du dann noch einen Vorsprung hast oder aufholen musst.
                  </p>
                </Prose>
              </FadeIn>
            </section>

            {/* ---------------------------------------------- 5 Säulen */}
            <section className="mt-block border-t border-brand-hairline pt-block">
              <FadeIn>
                <SectionHead no="5" id="saeulen">
                  Die drei Säulen der KI-Sichtbarkeit
                </SectionHead>
                <Prose>
                  <p>
                    KI-gestützte Sichtbarkeit basiert auf drei Bereichen, die zusammenspielen müssen. Sie addieren sich nicht, sie multiplizieren sich: fehlt eine Säule, ist das Ergebnis null.
                  </p>
                </Prose>

                <Figure
                  label="Abbildung 3: Technik × Content × Autorität"
                  caption="Jede Säule hat sieben Prüfpunkte. Die Multiplikationszeichen sind wörtlich zu nehmen: beste Technik ohne Content ist nutzlos, bester Content ohne Autorität wird nicht zitiert, Autorität ohne Technik bleibt für KI unsichtbar."
                >
                  <div className="grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-brand-hairline">
                    {PILLARS.map((pillar, index) => (
                      <div
                        key={pillar.title}
                        className={`relative flex flex-col ${index === 0 ? 'sm:pr-6' : 'sm:px-6'} ${
                          index === 2 ? 'sm:pr-0 sm:pl-6' : ''
                        }`}
                      >
                        {index > 0 ? (
                          <span
                            aria-hidden="true"
                            className="absolute -left-2.5 top-3 hidden text-subheading font-light text-brand-subtle sm:block"
                          >
                            ×
                          </span>
                        ) : null}
                        <img
                          src={pillar.icon}
                          alt={pillar.iconAlt}
                          width={56}
                          height={56}
                          loading="lazy"
                          decoding="async"
                          className="h-14 w-14"
                        />
                        <p className="mt-4 text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                          Säule {pillar.no} von 3
                        </p>
                        <h3 className="mt-1.5 text-subheading font-semibold text-brand-text">{pillar.title}</h3>
                        <p className="mt-1.5 text-meta font-medium text-brand-accent-ink">{pillar.claim}</p>
                        <ul className="mt-4 divide-y divide-brand-hairline border-t border-brand-hairline">
                          {pillar.items.map((item) => (
                            <li key={item} className="py-2 text-micro leading-snug text-brand-muted">
                              {item}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-4 pt-1 text-micro text-brand-subtle sm:mt-auto">
                          Vertiefung:{' '}
                          <a href={pillar.href} className="text-brand-accent-ink underline decoration-brand-accent/40 underline-offset-2 hover:decoration-brand-accent-ink">
                            {pillar.hrefLabel}
                          </a>
                        </p>
                      </div>
                    ))}
                  </div>
                </Figure>

                <Prose className="mt-stack">
                  <p>
                    In der Praxis scheitern die meisten Unternehmen nicht an einer fehlenden Säule, sondern daran, dass sie nur eine bedienen: viel Content, keine Autorität, oder eine technisch perfekte Seite ohne eine einzige zitierfähige Aussage. Prüfe deshalb alle drei Spalten, bevor du in eine davon investierst.
                  </p>
                </Prose>
              </FadeIn>
            </section>

            {/* ------------------------------------------ 6 GEO vs SEO */}
            <section className="mt-block border-t border-brand-hairline pt-block">
              <FadeIn>
                <SectionHead no="6" id="geo-vs-seo">
                  GEO vs. klassisches SEO: Warum deine bisherige Strategie nicht reicht
                </SectionHead>
                <Prose>
                  <p>
                    KI-Sichtbarkeit ersetzt SEO nicht, sie ergänzt es. Aber die Mechanismen sind grundlegend anders, und wer das nicht versteht, optimiert an der falschen Stelle.
                  </p>
                </Prose>

                <Figure
                  label="Tabelle 1: Zehn Unterschiede, die deine Arbeit verändern"
                  caption="Die dritte Spalte ist die operative: sie sagt, was der Unterschied für deine nächste Aufgabe bedeutet."
                >
                  {/* Bis Runde 3 stand hier min-w-[720px] in einer overflow-x-auto-Box.
                      Bei 390px hat der Kasten 300px, also begann die Spalte
                      "KI-Sichtbarkeit (GEO)" bei x=366 und "Konsequenz für dich" bei
                      x=568: beide ausserhalb des Bildschirms, hinter einer Wischgeste
                      ohne Hinweis. Der Hinweis stand als Satz in der Bildunterschrift,
                      und ein Satz ist keine Bedienhilfe. */}
                  <ReflowTable
                    tabularNums
                    srCaption="Vergleich von klassischem SEO und KI-Sichtbarkeit in zehn Kriterien"
                    columns={[
                      { label: 'Kriterium', width: 'lg:w-[16%]' },
                      { label: 'Klassisches SEO', width: 'lg:w-[24%]' },
                      { label: 'KI-Sichtbarkeit (GEO)', width: 'lg:w-[28%]', emphasis: true },
                      { label: 'Konsequenz für dich' },
                    ]}
                    rows={COMPARISON.map((row) => [...row])}
                    rowKeys={COMPARISON.map(([criterion]) => criterion)}
                  />
                </Figure>

                <div className="mt-stack">
                  <Note kind="risk">
                    Der größte Denkfehler: Ich bin bei Google auf Platz 1, also bin ich auch in KI sichtbar. Stimmt nicht. Eine Seite kann hervorragend ranken und von ChatGPT komplett ignoriert werden.
                  </Note>
                </div>

                <Prose className="mt-stack">
                  <p>
                    Warum? Weil die Inhalte nicht strukturiert sind, die Marke als Entität nicht positioniert ist oder die Autoritätssignale fehlen. Google bewertet Seiten. KI bewertet Marken, Expertise und Zitierfähigkeit. Die häufigsten Ursachen im Einzelnen stehen im Guide{' '}
                    <a href="/wissen/warum-nicht-in-chatgpt" className="text-brand-accent-ink underline decoration-brand-accent/40 underline-offset-2 hover:decoration-brand-accent-ink">
                      Warum erscheint meine Firma nicht in ChatGPT
                    </a>
                    .
                  </p>
                </Prose>
              </FadeIn>
            </section>

            {/* -------------------------------------- 7 Unternehmenstypen */}
            <section className="mt-block border-t border-brand-hairline pt-block">
              <FadeIn>
                <SectionHead no="7" id="unternehmenstypen">
                  KI-Sichtbarkeit für verschiedene Unternehmenstypen
                </SectionHead>
                <Prose>
                  <p>
                    Jede Branche hat andere KI-Touchpoints und andere Hebel. Suche deine Zeile und arbeite von rechts nach links: zuerst der Quick Win, dann der große Hebel.
                  </p>
                </Prose>

                <Figure
                  label="Tabelle 2: Der erste Schritt nach Unternehmenstyp"
                  caption="Vier Typen, drei Spalten. Die Quick-Win-Spalte ist bewusst so klein gehalten, dass sie in einer Woche erledigt ist."
                >
                  {/* Gleiche Geschichte wie bei Tabelle 1: bei 390px lagen zwei der
                      vier Spalten hinter dem rechten Bildschirmrand. */}
                  <ReflowTable
                    srCaption="KI-Sichtbarkeit nach Unternehmenstyp: Problem, Hebel und Quick Win"
                    columns={[
                      { label: 'Unternehmenstyp', width: 'lg:w-[20%]' },
                      { label: 'Wo KI dich prüft', width: 'lg:w-[27%]' },
                      { label: 'Größter Hebel', width: 'lg:w-[27%]' },
                      { label: 'Quick Win', emphasis: true },
                    ]}
                    rows={TYPES.map((row) => [
                      <>
                        <span className="block">{row.type}</span>
                        <span className="mt-1 block font-normal leading-snug text-brand-subtle">
                          {row.sub}
                        </span>
                      </>,
                      row.problem,
                      row.lever,
                      row.win,
                    ])}
                    rowKeys={TYPES.map((row) => row.type)}
                  />
                </Figure>
              </FadeIn>
            </section>

            {/* --------------------------------------------- 8 Schritte */}
            <section className="mt-block border-t border-brand-hairline pt-block">
              <FadeIn>
                <SectionHead no="8" id="schritte">
                  5 strategische Schritte zur KI-Sichtbarkeit
                </SectionHead>
                <Prose>
                  <p>
                    Die Strategie zuerst, die Taktik danach. Plattformspezifische Taktiken stehen in den Guides zu{' '}
                    <a href="/wissen/sichtbarkeit-in-chatgpt" className="text-brand-accent-ink underline decoration-brand-accent/40 underline-offset-2 hover:decoration-brand-accent-ink">
                      ChatGPT
                    </a>
                    ,{' '}
                    <a href="/wissen/sichtbarkeit-in-perplexity" className="text-brand-accent-ink underline decoration-brand-accent/40 underline-offset-2 hover:decoration-brand-accent-ink">
                      Perplexity
                    </a>{' '}
                    und{' '}
                    <a href="/wissen/ai-overviews-sichtbarkeit" className="text-brand-accent-ink underline decoration-brand-accent/40 underline-offset-2 hover:decoration-brand-accent-ink">
                      Google AI Overviews
                    </a>
                    .
                  </p>
                </Prose>

                <ol className="mt-stack divide-y divide-brand-hairline border-y border-brand-hairline">
                  {STEPS.map((step) => (
                    <li key={step.no} className="grid gap-x-6 gap-y-2 py-7 sm:grid-cols-[4rem_minmax(0,1fr)]">
                      <p className="text-meta font-semibold tabular-nums text-brand-accent-ink">{step.no}</p>
                      <div className="max-w-measure">
                        <h3 className="mb-2 text-subheading font-semibold text-brand-text">{step.title}</h3>
                        <p className="text-body text-brand-muted">{step.body}</p>
                        <p className="mt-3 border-l-2 border-brand-line pl-4 text-meta text-brand-muted">
                          <strong className="font-semibold text-brand-text">{step.hintLabel}:</strong> {step.hint}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </FadeIn>
            </section>

            {/* ------------------------------------------------ 9 Dauer */}
            <section className="mt-block border-t border-brand-hairline pt-block">
              <FadeIn>
                <SectionHead no="9" id="dauer">
                  Wie lange dauert es?
                </SectionHead>

                <dl className="max-w-measure divide-y divide-brand-hairline border-y border-brand-hairline">
                  {[
                    {
                      term: 'Perplexity',
                      time: '4 bis 8 Wochen',
                      text: (
                        <>
                          Durchsucht das Live-Web, reagiert also fast sofort auf neue Inhalte. Das ideale Testfeld für deine GEO-Strategie: wenn du hier zitiert wirst, funktioniert die Aufbereitung.
                        </>
                      ),
                    },
                    {
                      term: 'Google AI Overviews',
                      time: 'Wochen',
                      text: (
                        <>
                          Reagieren innerhalb von Wochen auf Content-Änderungen. Wer hier als Quelle erscheint, gewinnt sofort Sichtbarkeit bei der größten Suchmaschine der Welt. Mehr dazu im{' '}
                          <a href="/wissen/ai-overviews-sichtbarkeit" className="text-brand-accent-ink underline decoration-brand-accent/40 underline-offset-2 hover:decoration-brand-accent-ink">
                            AI Overviews Guide
                          </a>
                          .
                        </>
                      ),
                    },
                    {
                      term: 'ChatGPT und Gemini',
                      time: '3 bis 6 Monate',
                      text: (
                        <>
                          Die großen Modelle trainieren in Zyklen, Optimierungen fließen erst mit dem nächsten Update ein. Das erfordert Geduld, hält aber länger als ein Ranking.
                        </>
                      ),
                    },
                    {
                      term: 'Compound-Effekt',
                      time: 'ab Monat 6',
                      text: (
                        <>
                          Wer früh optimiert, wird als Quelle etabliert. Spätere Trainingszyklen bestätigen dieses Signal. Je länger du sichtbar bist, desto stabiler die Position, ähnlich wie Domain-Autorität, nur schwerer einzuholen.
                        </>
                      ),
                    },
                  ].map((row) => (
                    <div key={row.term} className="grid gap-x-6 gap-y-1 py-5 sm:grid-cols-[11rem_minmax(0,1fr)]">
                      <dt>
                        <span className="block text-meta font-semibold text-brand-text">{row.term}</span>
                        <span className="mt-0.5 block text-micro tabular-nums text-brand-accent-ink">{row.time}</span>
                      </dt>
                      <dd className="text-meta leading-relaxed text-brand-muted">{row.text}</dd>
                    </div>
                  ))}
                </dl>
              </FadeIn>
            </section>

            {/* -------------------------------------------------- FAQ */}
            <section className="mt-block border-t border-brand-hairline pt-block">
              <FadeIn>
                <h2 id="faq" className="mb-flow text-heading font-semibold text-brand-text">
                  Häufig gestellte Fragen zur KI-Sichtbarkeit
                </h2>
                <div className="max-w-measure divide-y divide-brand-hairline border-y border-brand-hairline">
                  {FAQS.map((faq, index) => (
                    <div key={faq.q} className="grid gap-x-6 gap-y-2 py-6 sm:grid-cols-[2.5rem_minmax(0,1fr)]">
                      <p className="text-meta font-semibold tabular-nums text-brand-subtle">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      <div>
                        <h3 className="mb-2 text-lead font-semibold text-brand-text">{faq.q}</h3>
                        <p className="text-meta leading-relaxed text-brand-muted">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </section>

            {/* ---------------------------------------------- Quellen */}
            <section className="mt-block border-t border-brand-hairline pt-block">
              <FadeIn>
                <h2 id="quellen" className="mb-flow text-heading font-semibold text-brand-text">
                  Quellen
                </h2>
                <p className="mb-6 max-w-measure text-meta text-brand-subtle">
                  Die Nummern in eckigen Klammern im Text und in den Abbildungen verweisen auf diese Liste.
                </p>
                <ol className="grid border-t border-brand-hairline sm:grid-cols-2 sm:gap-x-10">
                  {SOURCES.map((source) => (
                    <li
                      key={source.no}
                      className="grid gap-x-3 border-b border-brand-hairline py-4 sm:grid-cols-[2rem_minmax(0,1fr)]"
                    >
                      <span className="text-micro font-semibold tabular-nums text-brand-accent-ink">
                        [{source.no}]
                      </span>
                      <span className="text-micro leading-relaxed text-brand-muted">
                        <strong className="font-semibold text-brand-text">{source.who}:</strong> {source.text}
                        {source.href ? (
                          <>
                            {' '}
                            <a
                              href={source.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="break-words text-brand-accent-ink underline underline-offset-2"
                            >
                              Quelle ansehen
                            </a>
                          </>
                        ) : null}
                      </span>
                    </li>
                  ))}
                </ol>
              </FadeIn>
            </section>

            {/* ----------------------------------------------- Guides */}
            <section className="mt-block border-t border-brand-hairline pt-block">
              <FadeIn>
                <h2 id="guides" className="mb-flow text-heading font-semibold text-brand-text">
                  Weiterführende Guides
                </h2>
                <ul className="grid border-t border-brand-hairline sm:grid-cols-2 sm:gap-x-10">
                  {GUIDES.map((guide) => (
                    <li key={guide.href} className="border-b border-brand-hairline">
                      <a href={guide.href} className="group block py-4">
                        <h3 className="flex items-baseline gap-2 text-meta font-semibold text-brand-text group-hover:text-brand-accent-ink">
                          {guide.title}
                          <span aria-hidden="true" className="text-brand-accent-ink transition-transform group-hover:translate-x-0.5">
                            &rarr;
                          </span>
                        </h3>
                        <p className="mt-1 text-micro leading-snug text-brand-subtle">{guide.text}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </section>

            {/* -------------------------------------------------- CTA */}
            <section className="mt-block">
              <FadeIn>
                <div className="relative overflow-hidden rounded-section bg-brand-night p-8 text-white md:p-12">
                  <div className="absolute right-0 top-0 h-[400px] w-[400px] -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-accent/10 blur-[100px]" />
                  <div className="relative z-10">
                    <h2 className="mb-4 max-w-[24ch] text-heading font-semibold">
                      Bereit für KI-Sichtbarkeit?
                    </h2>
                    <p className="mb-3 max-w-measure text-body text-white/80">
                      Finde heraus, wie KI dein Unternehmen aktuell beschreibt, und was du tun kannst, um empfohlen zu werden. Kostenlos und unverbindlich.
                    </p>
                    <p className="mb-8 max-w-measure text-meta text-white/60">
                      Du bekommst eine konkrete Analyse deiner aktuellen KI-Sichtbarkeit: was ChatGPT und Perplexity über dich wissen, wo du unsichtbar bist und welche Schritte den größten Hebel haben.
                    </p>
                    <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose Kurzanalyse anfragen" />
                  </div>
                </div>
              </FadeIn>
            </section>
          </div>
        </div>
      </div>

      <div className="mt-rule">
        <Footer />
      </div>
    </div>
  );
}
