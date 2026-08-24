import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { CheckIcon, ArrowRightIcon, PhoneIcon } from '@/components/ui/Icons';
import { FadeIn } from '@/components/ui/FadeIn';
import { AntigravityBackground } from '@/components/ui/AntigravityBackground';
import { DataChart } from '@/components/ui/DataChart';

/* ---------------------------------------------------------------------------
   Anrede: diese Seite siezt, wie ihr H1 und ihre indexierten Ueberschriften
   ("Werden Sie zur Top-Empfehlung", "So machen wir Sie zur KI-Empfehlung").
   Sie bleibt deshalb in sich konsistent bei Sie.

   Was in diesem Umbau bewusst rausgeflogen ist, und warum:

   1. Der ReferralSimulator unter "Typische Traffic-Entwicklung nach 3 Monaten"
      zeigte 142 / 89 / 64 / 31 / 14 Besucher, beschriftet als "Live-Daten von
      echten Kunden-Projekten". Diese Zahlen stehen als Konstanten in der
      Komponente. An derselben Stelle steht jetzt der echte Referrer-Bericht
      eines Projekts, gezeichnet mit dem geteilten Chart-Primitive.
   2. Die Kennzahlenzeile im Hero ("100% Erfolgsquote", "847% Durchschn.
      Traffic-Steigerung") behauptete einen Durchschnitt ueber Kunden, den es
      nicht gibt. Jetzt stehen dort drei einzeln belegte Projektzahlen mit
      Quelle und Stand.
   3. Das dritte Testimonial war anonym ("Vertraulicher Kunde", "+430%
      Anfragen") und damit nicht nachpruefbar. Die zwei namentlichen bleiben.
   4. Die vier Kacheln der Nachweis-Galerie waren Screenshots aus fremden
      Oberflaechen, im 4:3-Rahmen beschnitten: Text um 6px, keine Zeile
      lesbar. Jetzt tragen dieselben vier Ueberschriften die Zahl und den Link
      zum Beleg, dazu ein einziger Ausschnitt in echter 2x-Groesse.
   5. Der Zaehler "3 Freie Slots in Hamburg" war eine Verknappung ohne Deckung.
      Die Regel selbst (1 Kunde pro Nische) steht weiter da.
   6. Die nachgebaute KI-Antwort unter "Live-Demo" nannte drei Quell-Domains
      pro Szenario, von denen sechs frei erfunden waren (datenschutz-blog.de,
      edu-tools.de, entruempelung-vergleich.de, branchenbuch.de,
      beauty-hamburg.de, treatwell.de). Erfundene Quellen auf einer Seite, die
      Citations messbar machen will, sind der teuerste Fehler von allen. Der
      Text der Sektion bleibt, die Attrappe ist weg.

   Die Citation-Zahlen dieser Seite: 800 Zitate im AI-Performance-Bericht der
   Bing Webmaster Tools fuer das Fenster 15.03. bis 13.06.2026 (Screenshot
   unter /image/proof/citations-aiseo-hamburg.webp). Der aeltere Tagesexport
   vom 30.05.2026 zaehlt 420 Zitate fuer 28.02. bis 28.05.2026; beide Staende
   stehen mit Datum auf /ergebnisse.
--------------------------------------------------------------------------- */

const PHONE_NUMBER = '+4917632194754';
const PHONE_DISPLAY = '+49 176 321 94 754';
const WHATSAPP_URL =
  'https://wa.me/4917632194754?text=Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20KI-Sichtbarkeit%20f%C3%BCr%20mein%20Unternehmen';
const EMAIL = 'hello@aiseo.hamburg';
const GOOGLE_REVIEWS_URL = 'https://share.google/bkLeWZ9kPt2G8Lwtg';

/* Belegte Projektzahlen, dieselben wie auf /ergebnisse und /leistungen. */
const FACTS = [
  { value: '800', label: 'KI-Zitate in 3 Monaten', note: 'aiseo.hamburg, Copilot, 15.03. bis 13.06.2026' },
  { value: '+847 %', label: 'KI-Traffic', note: 'KinderAlbum, dokumentiert' },
  { value: '+55 %', label: 'Klicks in 30 Tagen', note: 'Handwerksbetrieb, Search Console' },
];

const BENEFITS = ['Erste Ergebnisse in 2 bis 3 Wochen', 'Traffic-Garantie', 'Nachweisbare Nennungen'];

const BEFORE = [
  'ChatGPT empfiehlt Konkurrenten',
  'Perplexity listet Sie nicht auf',
  'Gemini kennt Sie nicht',
  'Null Traffic aus KI-Quellen',
  'Veraltete Website-Struktur',
];

const AFTER = [
  'ChatGPT nennt Sie zuerst',
  'Perplexity hebt Sie hervor',
  'Gemini empfiehlt Sie aktiv',
  'Messbarer Anteil des Traffics aus KI',
  'Optimiert für alle KI-Modelle',
];

/* Referrer-Bericht KinderAlbum, Projekt-Analytics, Januar 2026. Ein Projekt,
   kein Durchschnitt. Dieselben Werte auf /wissen/case-study-kinderalbum. */
const REFERRERS = [
  { label: 'chatgpt.com', value: 32, note: '44 Prozent der zugeordneten Besucher' },
  { label: 'deref-gmx.net', value: 20, note: '27 Prozent, Weiterleitung aus Mail' },
  { label: 'google.com', value: 17, note: '24 Prozent' },
  { label: 'mail.google.com', value: 2 },
  { label: 'com.google.android.gm', value: 1 },
];

const PROCESS = [
  {
    step: '1',
    title: 'KI-Sichtbarkeits-Check',
    desc: 'Wir prüfen mit einer festen Prompt-Liste, wo KI Sie heute empfiehlt und wo nicht.',
    out: '15 Minuten, kostenlos',
  },
  {
    step: '2',
    title: 'Strategie & Optimierung',
    desc: 'Gezielte Anpassungen für ChatGPT, Perplexity und Google AI: Antwortseiten, Struktur, Schema, Entitätsdaten.',
    out: '2 bis 4 Wochen',
  },
  {
    step: '3',
    title: 'Dominanz & Monitoring',
    desc: 'Dieselben Prompts erneut, dazu Citations und KI-Traffic. Sie sehen, was sich bewegt hat.',
    out: 'monatlich',
  },
];

const TRUST_POINTS = [
  'Erste Ergebnisse in 2 bis 3 Wochen sichtbar',
  'Nachweisbare Nennungen in ChatGPT, Perplexity und Gemini',
  'Exklusiv: nur 1 Kunde pro Nische in Hamburg',
  'Traffic-Garantie oder Geld zurück',
  'Persönliche Betreuung vom Gründer',
  'Alle Maßnahmen transparent dokumentiert',
];

const TESTIMONIALS = [
  {
    text: 'Innerhalb von 3 Wochen empfiehlt ChatGPT unser Fotoalbum als erste Wahl. Der Traffic aus KI-Quellen ist explodiert.',
    author: 'KinderAlbum',
    role: 'E-Commerce',
    metric: '+847 % KI-Traffic',
  },
  {
    text: 'Vorher unsichtbar in KI-Suchen, jetzt Top-Empfehlung bei Perplexity und ChatGPT. Das verändert unser Geschäft fundamental.',
    author: 'Firma Blitz',
    role: 'Dienstleistung Hamburg',
    metric: 'Von 0 auf #1',
  },
];

const INCLUDED = [
  'Vollständiger KI-Sichtbarkeits-Audit',
  'Optimierung für fünf und mehr KI-Plattformen',
  'Strukturierte Daten und KI-lesbare Inhalte',
  'Monatliches Monitoring der Nennungen',
  'Prompt-Liste für Ihre Nische',
  'Wöchentliche Status-Updates',
  'Direkter Draht zum Gründer über WhatsApp und Telefon',
];

const EVIDENCE = [
  {
    title: 'KinderAlbum in ChatGPT',
    fact: 'Top-Empfehlung mit ausführlicher Beschreibung und direkter Verlinkung.',
    number: '+847 % KI-Traffic in 3 Monaten',
    href: '/wissen/case-study-kinderalbum',
    cta: 'Fallstudie',
  },
  {
    title: 'Firma Blitz in ChatGPT',
    fact: 'Von unsichtbar zur genannten Empfehlung für Haushaltsauflösungen in Hamburg.',
    number: '+55 % Klicks, +61 % Impressionen in 30 Tagen',
    href: '/wissen/case-study-blitz-hamburg',
    cta: 'Fallstudie',
  },
  {
    title: 'Traffic-Explosion',
    fact: 'Der Anstieg ist kein einzelner Ausschlag: aus dem Stand auf 800 Copilot-Zitate zwischen 15.03. und 13.06.2026.',
    number: '800 Citations, Bing Webmaster Tools',
    href: '/ergebnisse',
    cta: 'Dashboards',
  },
  {
    title: 'ChatGPT Traffic',
    fact: 'chatgpt.com war die stärkste einzelne Besucherquelle des Projekts, vor google.com.',
    number: '32 von 72 zugeordneten Besuchern',
    href: '/wissen/ki-sichtbarkeit-messen',
    cta: 'So wird gemessen',
  },
];

const FAQS = [
  {
    question: 'Wie schnell sehe ich erste Ergebnisse?',
    answer:
      'Die meisten Kunden erscheinen innerhalb von 2 bis 3 Wochen in ersten KI-Empfehlungen. Nach 4 bis 6 Wochen ist die Top-Position in der Hauptnische in der Regel erreicht. Wir dokumentieren jeden Fortschritt transparent.',
  },
  {
    question: 'Was unterscheidet KI-Sichtbarkeit von klassischem SEO?',
    answer:
      'Klassisches SEO zielt auf Google-Rankings ab. KI-Sichtbarkeit bedeutet, dass ChatGPT, Perplexity und Co. Ihr Unternehmen aktiv empfehlen. Das ist fundamentaler: KI antwortet nicht mit 10 Links, sondern mit 1 bis 3 klaren Empfehlungen. Wer dort nicht auftaucht, wird nicht verglichen.',
  },
  {
    question: 'Funktioniert das auch für meine Branche?',
    answer:
      'Ja, wenn Ihre Zielgruppe online nach Lösungen sucht. Besonders effektiv bei Dienstleistungen, E-Commerce, B2B-Software, Handwerk und Beratung. Ob es sich in Ihrer Nische lohnt, klären wir vorab im kostenlosen KI-Check, 15 Minuten am Telefon.',
  },
  {
    question: 'Was kostet KI-Sichtbarkeit?',
    answer:
      'Das hängt von Wettbewerb und Umfang ab. Es gibt zwei Bausteine: einen einmaligen Umsetzungs-Sprint und eine laufende Betreuung pro Monat, beide zum Festpreis. Eine Pauschalzahl auf einer Website wäre geraten, deshalb nennen wir sie nicht. Nach dem kostenlosen KI-Check bekommen Sie eine konkrete Zahl, an die wir uns halten. Die Pakete im Überblick finden Sie auf der Preise-Seite.',
  },
  {
    question: 'Garantieren Sie Ergebnisse?',
    answer:
      'Ja. Wenn Sie nach 8 Wochen nicht in mindestens 2 KI-Plattformen für Ihre Hauptkeywords erscheinen, erhalten Sie Ihr Geld zurück. Bedingung: Sie setzen unsere Empfehlungen vollständig um.',
  },
  {
    question: 'Warum nur 1 Kunde pro Nische?',
    answer:
      'Wir können nicht gleichzeitig drei Entrümpelungs-Firmen in Hamburg zur Top-Empfehlung machen. Deshalb arbeiten wir exklusiv: pro Nische und Region nur 1 Kunde. Wer zuerst kommt, sichert sich den Platz.',
  },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'KI-Sichtbarkeit Hamburg - AI SEO Optimierung',
  description:
    'Professionelle KI-Sichtbarkeit für Unternehmen in Hamburg. Werden Sie zur Top-Empfehlung in ChatGPT, Perplexity und Co. Messbare Ergebnisse in 2 bis 3 Wochen.',
  url: 'https://aiseo.hamburg/ai-sichtbarkeit-now',
  telephone: PHONE_NUMBER,
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Flottbeker Drift 1',
    addressLocality: 'Hamburg',
    postalCode: '22607',
    addressCountry: 'DE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 53.5514, longitude: 9.9937 },
  areaServed: { '@type': 'City', name: 'Hamburg' },
  priceRange: '€€€',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

const CALL_BUTTON =
  'inline-flex items-center justify-center gap-2 rounded-full bg-brand-night px-6 py-4 text-base font-medium text-white transition-colors hover:bg-brand-accent-deep';
const SECOND_BUTTON =
  'inline-flex items-center justify-center gap-2 rounded-full border border-brand-line bg-transparent px-6 py-4 text-base font-medium text-brand-text transition-colors hover:bg-brand-surface';

const AIVisibilityNowPage = () => (
  <div className="relative w-full overflow-x-clip bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
    <Navbar />

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <main>
      {/* ========== HERO: 7/5, linksbuendig. Die Telefonnummer bleibt gross,
          weil diese Seite auf Anrufe optimiert ist. Rechts drei belegte
          Zahlen statt vier Kacheln mit erfundenen Durchschnitten. ========== */}
      <section className="relative overflow-hidden pt-28 pb-block lg:pt-32">
        <div className="absolute top-0 right-0 z-0 h-[600px] w-[600px] rounded-full bg-brand-accent/5 blur-3xl" />
        <AntigravityBackground />

        <div className="relative z-10 mx-auto grid max-w-article gap-block px-6 lg:grid-cols-12 lg:gap-x-rule lg:px-12">
          <div className="lg:col-span-7">
            <FadeIn>
              <p className="text-micro uppercase tracking-eyebrow text-brand-accent-ink">
                Exklusiv: nur 1 Kunde pro Nische
              </p>
              <h1 className="mt-flow text-heading sm:text-title font-semibold text-brand-text">
                Werden Sie zur <span className="text-brand-accent">Top-Empfehlung</span> in ChatGPT &amp; Perplexity
              </h1>
              <p className="mt-flow max-w-measure text-lead text-brand-muted">
                Professionelle KI-Sichtbarkeit für Unternehmen in Hamburg.
              </p>
              <p className="mt-flow flex flex-wrap items-center gap-x-4 gap-y-2 text-meta text-brand-subtle">
                {BENEFITS.map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckIcon className="w-3.5 h-3.5 text-brand-accent-ink" />
                    {item}
                  </span>
                ))}
              </p>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="mt-stack inline-block text-heading lg:text-title font-semibold tabular-nums text-brand-accent-ink hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="mt-1 text-meta text-brand-subtle">Kostenloser KI-Check: 15 Minuten am Telefon.</p>

              <div className="mt-stack flex flex-col gap-4 sm:flex-row">
                <a href={`tel:${PHONE_NUMBER}`} className={CALL_BUTTON}>
                  <PhoneIcon className="w-4 h-4" />
                  Jetzt anrufen
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={SECOND_BUTTON}>
                  WhatsApp schreiben
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 lg:pt-2">
            <FadeIn delay={120}>
              <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Gemessen, nicht behauptet</p>
              <dl className="mt-flow">
                {FACTS.map((fact) => (
                  <div key={fact.label} className="flex items-baseline gap-flow border-t border-brand-line py-3">
                    <dt className="w-24 shrink-0 text-subheading font-semibold tabular-nums text-brand-text">{fact.value}</dt>
                    <dd className="text-meta text-brand-muted">
                      {fact.label}
                      <span className="block text-micro text-brand-subtle">{fact.note}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/ergebnisse"
                className="mt-flow inline-flex items-center gap-1.5 border-t border-brand-line pt-3 text-meta font-medium text-brand-accent-ink hover:gap-2.5"
              >
                Alle Ergebnisse mit Screenshots
                <ArrowRightIcon className="w-3 h-3" />
              </Link>
              <p className="mt-2 text-micro text-brand-subtle">Stand: August 2026</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== DER MECHANISMUS. Hier lief bis Runde 3 eine nachgebaute
          KI-Antwort, deren Quellenzeile erfundene Domains zeigte
          (datenschutz-blog.de, edu-tools.de, treatwell.de). Eine Agentur, die
          Citations messbar machen will, darf keine erfundenen Quellen
          ausstellen, auch nicht als Illustration. Die belegten Zahlen stehen
          eine Sektion weiter oben, mit Quelle und Datum. ========== */}
      <section className="border-t border-brand-line py-rule">
        <div className="mx-auto max-w-article px-6 lg:px-12">
          <FadeIn>
            <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
              <div className="lg:col-span-8">
                <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Der Mechanismus</p>
                <h2 className="mt-1 text-subheading md:text-heading font-semibold text-brand-text">
                  So empfiehlt KI Ihre Konkurrenz, oder bald Sie
                </h2>
                <p className="mt-flow max-w-measure text-body text-brand-muted">
                  Eine KI-Antwort auf die Frage nach Ihrer Dienstleistung nennt zwei bis drei Anbieter. Wenn KI nichts über Sie weiß, empfiehlt sie Ihre Konkurrenz.
                </p>
                <p className="mt-flow max-w-measure text-body font-medium text-brand-text">
                  Die Lösung: Wir machen Sie zur ersten Wahl in den Antworten, die Ihre Kunden lesen.
                </p>
                <p className="mt-flow border-t border-brand-line pt-3 text-meta text-brand-subtle">
                  Wie eine solche Antwort entsteht, steht in{' '}
                  <Link href="/wissen/sichtbarkeit-in-chatgpt" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                    Sichtbarkeit in ChatGPT
                  </Link>
                  .
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== VORHER / NACHHER plus echte Verteilung ========== */}
      <section className="border-t border-brand-line py-rule">
        <div className="mx-auto max-w-article px-6 lg:px-12">
          <FadeIn>
            <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
              <div>
                <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Beweis</p>
                <h2 className="mt-1 text-subheading md:text-heading font-semibold text-brand-text lg:text-subheading">
                  Die Traffic-Revolution
                </h2>
                <p className="mt-flow text-meta text-brand-muted">
                  Was sich verändert, wenn KI-Systeme Ihr Angebot einordnen können.
                </p>
              </div>

              <div>
                <div className="grid gap-x-stack sm:grid-cols-2">
                  <div>
                    <h3 className="border-b border-brand-edge pb-2 text-lead font-semibold text-brand-subtle">
                      VORHER: Unsichtbar für KI
                    </h3>
                    <ul>
                      {BEFORE.map((item) => (
                        <li key={item} className="flex items-start gap-2 border-b border-brand-hairline py-2.5 text-meta text-brand-subtle">
                          <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-brand-edge" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-stack sm:mt-0">
                    <h3 className="border-b border-brand-edge pb-2 text-lead font-semibold text-brand-text">
                      NACHHER: Top-Empfehlung
                    </h3>
                    <ul>
                      {AFTER.map((item) => (
                        <li key={item} className="flex items-start gap-2 border-b border-brand-hairline py-2.5 text-meta text-brand-muted">
                          <CheckIcon className="mt-1.5 w-3 h-3 shrink-0 text-brand-accent-ink" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-stack border-t border-brand-edge pt-4">
                  <h3 className="text-subheading font-semibold text-brand-text">
                    Typische Traffic-Entwicklung nach 3 Monaten
                  </h3>
                  <p className="mt-1 max-w-measure text-meta text-brand-muted">
                    Ein Projekt, kein Durchschnitt: der Referrer-Bericht von KinderAlbum drei Monate nach der Umsetzung. ChatGPT liegt vor Google.
                  </p>
                  <div className="mt-flow max-w-measure rounded-card border border-brand-line bg-white p-4 sm:p-5">
                    <DataChart
                      frame={false}
                      variant="row"
                      headingLevel="p"
                      title="Besucher nach Quelle"
                      subject="KinderAlbum, Januar 2026"
                      axis={{ title: 'Besucher' }}
                      highlight="peak"
                      points={REFERRERS}
                      /* Die 24-Stunden-Kennzahlen derselben Ansicht (314
                         Seitenaufrufe, 65 Besuche, 7:07 Min.) stehen hier
                         bewusst nicht: sie haben eine andere Bezugsgroesse als
                         die Balken und brauchten drei Zeilen Erklaerung. */
                      table={{ label: 'Quellen als Tabelle', heads: ['Quelle', 'Besucher'] }}
                    />
                  </div>
                  <p className="mt-3 text-meta text-brand-subtle">
                    Werte aus dem Referrer-Bericht des Projekt-Analytics, 72 zugeordnete Besucher.{' '}
                    <Link href="/wissen/case-study-kinderalbum" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      Fallstudie
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== ABLAUF ========== */}
      <section className="border-t border-brand-line py-rule">
        <div className="mx-auto max-w-article px-6 lg:px-12">
          <FadeIn>
            <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
              <div>
                <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Ablauf</p>
                <h2 className="mt-1 text-subheading md:text-heading font-semibold text-brand-text lg:text-subheading">
                  So machen wir Sie zur KI-Empfehlung
                </h2>
                <p className="mt-flow text-meta text-brand-muted">
                  Transparenter Prozess, messbare Ergebnisse. Projektdauer typischerweise 4 bis 6 Wochen.
                </p>
              </div>

              <div>
                <div className="hidden lg:grid lg:grid-cols-[1fr_140px] lg:gap-x-flow">
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Schritt</p>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Dauer</p>
                </div>
                <div className="mt-2">
                  {PROCESS.map((item) => (
                    <div key={item.step} className="grid gap-y-1 border-t border-brand-edge py-3 lg:grid-cols-[1fr_140px] lg:gap-x-flow">
                      <div>
                        <h3 className="flex items-baseline gap-2 text-lead font-semibold text-brand-text">
                          <span className="text-micro tabular-nums text-brand-subtle">{`0${item.step}`}</span>
                          {item.title}
                        </h3>
                        <p className="max-w-measure text-meta text-brand-muted">{item.desc}</p>
                      </div>
                      <p className="text-micro text-brand-subtle lg:pt-1.5">{item.out}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== VERTRAUEN: Garantien links, zwei namentliche Stimmen rechts.
          Das anonyme dritte Testimonial ist raus, es war nicht pruefbar. ========== */}
      <section className="border-t border-brand-line py-rule">
        <div className="mx-auto max-w-article px-6 lg:px-12">
          <FadeIn>
            <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
              <div className="lg:col-span-7">
                <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Garantien</p>
                <h2 className="mt-1 text-subheading md:text-heading font-semibold text-brand-text">
                  Warum Kunden uns vertrauen
                </h2>
                <ul className="mt-stack">
                  {TRUST_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-3 border-t border-brand-line py-2.5 text-meta lg:text-body text-brand-muted">
                      <CheckIcon className="mt-1.5 w-3.5 h-3.5 shrink-0 text-brand-accent-ink" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-stack border-t border-brand-edge pt-4">
                  <h3 className="text-subheading font-semibold text-brand-text">Traffic-Garantie</h3>
                  <p className="mt-1 max-w-measure text-meta text-brand-muted">
                    Wenn Sie nach 8 Wochen nicht in mindestens 2 KI-Plattformen erscheinen, erhalten Sie Ihr Geld zurück. Bedingung: Sie setzen die Empfehlungen vollständig um.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Kundenstimmen</p>
                <div className="mt-flow">
                  {TESTIMONIALS.map((t) => (
                    <blockquote key={t.author} className="border-t border-brand-line py-3">
                      <p className="text-meta text-brand-muted">{t.text}</p>
                      <footer className="mt-2 flex flex-wrap items-baseline justify-between gap-x-flow gap-y-1">
                        <span className="text-meta font-semibold text-brand-text">
                          {t.author}
                          <span className="ml-2 text-micro font-normal text-brand-subtle">{t.role}</span>
                        </span>
                        <span className="text-meta font-semibold tabular-nums text-brand-accent-ink">{t.metric}</span>
                      </footer>
                    </blockquote>
                  ))}
                </div>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-flow inline-flex items-center gap-1.5 border-t border-brand-line pt-3 text-meta font-medium text-brand-accent-ink hover:gap-2.5"
                >
                  Bewertungen bei Google
                  <ArrowRightIcon className="w-3 h-3" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== PAKET ========== */}
      <section className="border-t border-brand-line py-rule">
        <div className="mx-auto max-w-article px-6 lg:px-12">
          <FadeIn>
            <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
              <div>
                <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Leistungen</p>
                <h2 className="mt-1 text-subheading md:text-heading font-semibold text-brand-text lg:text-subheading">
                  Das ist im KI-Sichtbarkeits-Paket enthalten
                </h2>
                <Link
                  href="/preise"
                  className="mt-flow inline-flex items-center gap-1.5 border-t border-brand-line pt-3 text-meta font-medium text-brand-accent-ink hover:gap-2.5"
                >
                  Pakete und Preise
                  <ArrowRightIcon className="w-3 h-3" />
                </Link>
              </div>

              <div>
                <ul className="sm:grid sm:grid-cols-2 sm:gap-x-stack">
                  {INCLUDED.map((service) => (
                    <li key={service} className="flex items-start gap-2 border-t border-brand-line py-2.5 text-meta text-brand-muted">
                      <CheckIcon className="mt-1.5 w-3 h-3 shrink-0 text-brand-accent-ink" />
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="mt-stack flex flex-col gap-4 border-t border-brand-edge pt-4 sm:flex-row">
                  <a href={`tel:${PHONE_NUMBER}`} className={CALL_BUTTON}>
                    <PhoneIcon className="w-4 h-4" />
                    Kostenlose Beratung
                  </a>
                  <a href={`mailto:${EMAIL}`} className={SECOND_BUTTON}>
                    E-Mail schreiben
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== NACHWEISE: ein Ausschnitt in echter 2x-Groesse plus die
          Zahlen. Vorher: vier fremde Screenshots im 4:3-Beschnitt. ========== */}
      <section className="border-t border-brand-line py-rule">
        <div className="mx-auto max-w-article px-6 lg:px-12">
          <FadeIn>
            <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
              <div className="lg:col-span-5">
                <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Nachweise</p>
                <h2 className="mt-1 text-subheading md:text-heading font-semibold text-brand-text">
                  Echte Ergebnisse, echte Rankings
                </h2>
                <p className="mt-flow max-w-measure text-body text-brand-muted">
                  Die Zahlen hinter den Screenshots. Die Bilder selbst liegen in voller Größe auf der Ergebnisseite, weil ein auf Kachelgröße beschnittener Screenshot nichts belegt, das man lesen kann.
                </p>
                {/* 923x113 Datei, Anzeige maximal 460px: echtes 2x. */}
                <img
                  src="/image/proof/KinderAlbum-chagpt-recommendation.webp"
                  width={923}
                  height={113}
                  loading="lazy"
                  decoding="async"
                  alt="Ausschnitt einer ChatGPT-Antwort: KinderAlbum wird als einsteigerfreundliche, DSGVO-fokussierte Lösung für Schul- und Elternfotos empfohlen."
                  className="mt-stack w-full max-w-[460px] rounded-card border border-brand-line bg-brand-night"
                />
                <p className="mt-2 text-micro text-brand-subtle">
                  Ausschnitt einer echten ChatGPT-Antwort, Abschnitt Empfehlung.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="hidden lg:grid lg:grid-cols-[1fr_230px] lg:gap-x-flow">
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Nachweis</p>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Zahl und Quelle</p>
                </div>
                <div className="mt-2">
                  {EVIDENCE.map((item) => (
                    <div key={item.title} className="grid gap-y-1 border-t border-brand-edge py-3 lg:grid-cols-[1fr_230px] lg:gap-x-flow">
                      <div>
                        <h3 className="text-lead font-semibold text-brand-text">{item.title}</h3>
                        <p className="max-w-measure text-meta text-brand-muted">{item.fact}</p>
                      </div>
                      <div className="lg:pt-1">
                        <p className="text-meta font-medium tabular-nums text-brand-text">{item.number}</p>
                        <Link href={item.href} className="mt-0.5 inline-flex items-center gap-1.5 text-micro font-medium text-brand-accent-ink hover:gap-2.5">
                          {item.cta}
                          <ArrowRightIcon className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-stack flex flex-wrap items-center gap-x-stack gap-y-3 border-t border-brand-line pt-4">
                  <a href={`tel:${PHONE_NUMBER}`} className={CALL_BUTTON}>
                    <PhoneIcon className="w-4 h-4" />
                    KI-Check vereinbaren
                  </a>
                  <span className="text-meta text-brand-subtle">Wöchentliche Dokumentation, welche Plattform Sie nennt.</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== EXKLUSIVITAET: dunkles Vollband statt Farbverlauf mit
          weisser Schrift auf brand-accent (2,55:1, also unter jeder Norm). ========== */}
      <section className="bg-brand-night py-rule text-white">
        <div className="mx-auto max-w-article px-6 lg:px-12">
          <FadeIn>
            <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
              <h2 className="text-subheading md:text-heading font-semibold lg:text-subheading">Exklusivität garantiert</h2>
              <div>
                <p className="max-w-measure text-body text-brand-line">
                  Wir nehmen <span className="font-semibold text-white">nur 1 Kunden pro Nische und Region</span> an. Zwei Wettbewerber gleichzeitig zur Top-Empfehlung zu machen, geht rechnerisch nicht. Wenn Ihre Konkurrenz zuerst da ist, müssen wir absagen.
                </p>
                <dl className="mt-stack grid gap-x-stack border-t border-white/15 sm:grid-cols-3">
                  <div className="border-b border-white/10 py-3 sm:border-b-0">
                    <dt className="text-lead font-semibold text-brand-accent">1 Kunde</dt>
                    <dd className="text-micro text-brand-line">pro Nische und Region</dd>
                  </div>
                  <div className="border-b border-white/10 py-3 sm:border-b-0">
                    <dt className="text-lead font-semibold text-brand-accent">8 Wochen</dt>
                    <dd className="text-micro text-brand-line">Frist für die Traffic-Garantie</dd>
                  </div>
                  <div className="py-3">
                    <dt className="text-lead font-semibold text-brand-accent">15 Minuten</dt>
                    <dd className="text-micro text-brand-line">kostenloser KI-Check am Telefon</dd>
                  </div>
                </dl>
                <div className="mt-stack">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent-deep px-6 py-4 text-base font-medium text-white transition-colors hover:bg-brand-accent-ink"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    Platz sichern: {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== FAQ: offene Liste statt Akkordeon. Sechs Antworten, die
          ohnehin jeder liest, brauchen keinen Klick, und ohne useState
          rendert die ganze Seite serverseitig. ========== */}
      <section className="border-t border-brand-line py-rule">
        <div className="mx-auto max-w-article px-6 lg:px-12">
          <FadeIn>
            <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
              <h2 className="text-subheading md:text-heading font-semibold text-brand-text lg:text-subheading">
                Häufige Fragen
              </h2>
              <div className="sm:grid sm:grid-cols-2 sm:gap-x-stack">
                {FAQS.map((faq) => (
                  <div key={faq.question} className="border-t border-brand-line py-3">
                    <h3 className="text-body font-semibold text-brand-text">{faq.question}</h3>
                    <p className="mt-1 text-meta text-brand-muted">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== ABSCHLUSS ========== */}
      <section className="bg-brand-night py-rule text-white">
        <div className="mx-auto max-w-article px-6 lg:px-12">
          <FadeIn>
            <div className="grid gap-stack lg:grid-cols-12 lg:gap-x-rule">
              <div className="lg:col-span-5">
                <h2 className="text-subheading md:text-heading lg:text-title font-semibold">Bereit für KI-Dominanz?</h2>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="mt-flow inline-block text-subheading lg:text-heading font-semibold tabular-nums text-brand-accent hover:underline"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="lg:col-span-7">
                <p className="max-w-measure text-body text-brand-line">
                  Kostenloser KI-Check, 15 Minuten am Telefon. Wir schauen live nach, wo Sie heute stehen, und Sie hören, was der schnellste Hebel wäre.
                </p>
                <div className="mt-stack flex flex-col gap-4 sm:flex-row">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent-deep px-6 py-4 text-base font-medium text-white transition-colors hover:bg-brand-accent-ink"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    Jetzt anrufen
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-4 text-base font-medium text-white transition-colors hover:bg-white/10"
                  >
                    WhatsApp schreiben
                  </a>
                </div>
                <p className="mt-flow flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-white/15 pt-3 text-meta text-brand-line">
                  <span>Unverbindlich</span>
                  <span>Keine Vertragsbindung</span>
                  <span>Geld-zurück-Garantie</span>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== QUERVERWEISE: eine Zeile statt vier Kacheln. ========== */}
      <section className="border-t border-brand-line py-block">
        <div className="mx-auto max-w-article px-6 lg:px-12">
          <p className="flex flex-wrap items-center gap-x-stack gap-y-2 text-meta">
            <span className="text-micro uppercase tracking-eyebrow text-brand-subtle">Weiter</span>
            <Link href="/ai-sichtbarkeit" className="font-medium text-brand-accent-ink hover:underline">
              KI-Sichtbarkeit
            </Link>
            <Link href="/leistungen" className="font-medium text-brand-accent-ink hover:underline">
              Leistungen
            </Link>
            <Link href="/ergebnisse" className="font-medium text-brand-accent-ink hover:underline">
              Ergebnisse
            </Link>
            <Link href="/faq" className="font-medium text-brand-accent-ink hover:underline">
              FAQ
            </Link>
            <Link href="/contact" className="font-medium text-brand-accent-ink hover:underline">
              Kontakt
            </Link>
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default AIVisibilityNowPage;
