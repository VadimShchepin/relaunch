'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

const FAQ_ITEMS = [
  {
    q: 'Gibt es versteckte Kosten bei KI-Sichtbarkeit?',
    a: 'Bei aiseo.hamburg nicht. Du bekommst einen klaren Kostenvoranschlag vor Projektstart. Einmalige Projekte haben einen Festpreis, laufende Betreuung eine monatliche Pauschale ohne Mindestlaufzeit. Es gibt keine versteckten Setup-Gebühren, keine Tool-Kosten die du separat zahlen musst und keine nachträglichen Aufschläge.',
  },
  {
    q: 'Kann ich KI-Sichtbarkeit selbst machen?',
    a: 'Grundsätzlich ja. Viele technische Grundlagen wie Schema-Markup, llms.txt und Content-Strukturierung kannst du selbst umsetzen, wenn du Zeit und technisches Verständnis hast. Der Vorteil einer Agentur: Erfahrung mit dem, was tatsächlich zu KI-Zitierungen führt, und systematisches Monitoring über alle Plattformen.',
  },
  {
    q: 'Was ist der typische ROI von KI-Sichtbarkeit?',
    a: 'Der ROI hängt stark von deiner Branche und deinem durchschnittlichen Auftragswert ab. Bei Dienstleistern mit Auftragswerten ab 2.000 Euro reichen oft 1-2 zusätzliche Kundenanfragen pro Monat, um die Investition zu amortisieren. Bei E-Commerce-Unternehmen rechnet sich KI-Sichtbarkeit über das Volumen.',
  },
  {
    q: 'Gibt es eine Garantie für KI-Sichtbarkeit?',
    a: 'Niemand kann garantieren, dass ChatGPT oder Perplexity dein Unternehmen empfiehlt. KI-Antworten sind kontextabhängig und verändern sich. Was wir garantieren: eine saubere technische Basis, optimierte Inhalte und messbare Verbesserung deiner Ausgangslage. Wer dir Platz-1-Garantien verkauft, verkauft heiße Luft.',
  },
  {
    q: 'Wie schnell sehe ich Ergebnisse?',
    a: 'Technische Optimierungen wie Schema-Markup und llms.txt wirken innerhalb weniger Wochen. Content-basierte Maßnahmen brauchen typischerweise 2-4 Monate. Messbare, konsistente KI-Sichtbarkeit entsteht nach 3-6 Monaten. Das ist schneller als klassisches SEO, aber kein Overnight-Erfolg.',
  },
  {
    q: 'Lohnt sich KI-Sichtbarkeit für kleine Unternehmen?',
    a: 'Gerade für kleine Unternehmen kann KI-Sichtbarkeit ein enormer Hebel sein. Während bei Google die großen Marken dominieren, empfehlen KI-Systeme oft spezialisierte Anbieter. Ein einmaliges Upgrade für 1.500 Euro kann sich bereits im ersten Monat rechnen, wenn ein einziger Kunde darüber kommt.',
  },
  {
    q: 'Was passiert, wenn ich die Betreuung beende?',
    a: 'Alle technischen Optimierungen bleiben bestehen. Deine Website behält das Schema-Markup, die strukturierten Inhalte und die llms.txt. Was wegfällt: laufendes Monitoring, Content-Updates und die Anpassung an neue KI-Plattformen. Die Basis bleibt, aber ohne Pflege verliert sie über Zeit an Wirkung.',
  },
];

const COST_FACTORS = [
  {
    title: 'Branche & Wettbewerb',
    desc: 'In stark umkämpften Branchen wie Recht, Finanzen oder Gesundheit ist der Aufwand höher, weil mehr Quellen um die wenigen Zitierungsplätze konkurrieren.',
  },
  {
    title: 'Technische Ausgangslage',
    desc: 'Eine saubere Website mit guter Struktur braucht weniger Grundlagenarbeit als eine veraltete Seite ohne Schema-Markup, ohne klare Inhaltsstruktur und mit technischen Problemen.',
  },
  {
    title: 'Umfang & Standorte',
    desc: 'Ein Standort in Hamburg ist weniger Aufwand als fünf Standorte bundesweit. Jeder Standort braucht eigene lokale Signale und Inhalte.',
  },
  {
    title: 'Ziel-Plattformen',
    desc: 'Nur ChatGPT optimieren ist weniger Aufwand als alle relevanten Plattformen abzudecken: ChatGPT, Perplexity, Google AI Overviews, Claude, Copilot.',
  },
  {
    title: 'DIY vs. Agentur',
    desc: 'Selbst machen spart Geld, kostet aber Zeit und Lernkurve. Eine Agentur bringt Erfahrung und Systematik, kostet aber entsprechend mehr.',
  },
];

const COST_TRAPS = [
  {
    title: 'Billige Agenturen, die nichts liefern',
    desc: 'AI SEO für 299 Euro im Monat? Unmöglich, wenn es seriös gemacht wird. Da bekommst du bestenfalls automatisierte Reports und schlimmstenfalls gar nichts.',
  },
  {
    title: 'Langzeitverträge ohne Ergebnisse',
    desc: 'Wer dich an 12 oder 24 Monate bindet, bevor überhaupt Ergebnisse da sind, hat kein Vertrauen in die eigene Leistung. Seriöse Anbieter arbeiten mit kurzen Kündigungsfristen.',
  },
  {
    title: 'Tool-Abos, die niemand nutzt',
    desc: 'Manche Agenturen verkaufen teure Tool-Lizenzen mit, die du nicht brauchst oder die niemand aktiv einsetzt. Frag immer: Welche Tools nutzt ihr, und wer arbeitet damit?',
  },
  {
    title: '"KI-Sichtbarkeit" als Upsell ohne Substanz',
    desc: 'Klassische SEO-Agenturen, die plötzlich AI SEO anbieten, ohne ihre Methoden zu ändern. Frag nach konkreten KI-Zitierungsbeispielen ihrer Kunden.',
  },
  {
    title: 'Content-Massen ohne Strategie',
    desc: '50 Blog-Artikel im Monat klingt viel, bringt aber nichts, wenn keiner davon von KI als Quelle erkannt wird. Qualität und Struktur schlagen Quantität.',
  },
  {
    title: 'Einmalige Optimierung als Dauerlösung',
    desc: 'KI-Plattformen entwickeln sich rasant. Was heute funktioniert, kann morgen veraltet sein. Einmalige Optimierung ist ein Start, aber kein Endzustand.',
  },
];

export default function KiSichtbarkeitKostenPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F7F5F2] text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="min-h-screen bg-[#F7F5F2]">
        {/* Article JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'KI-Sichtbarkeit Kosten: Was AI SEO wirklich kostet (2026)',
              description: 'Was kostet KI-Sichtbarkeit? Transparente Preise, ehrlicher Kostenvergleich und ROI-Rechnung für AI SEO.',
              author: {
                '@type': 'Person',
                name: 'Vadim Shchepin',
              },
              publisher: {
                '@type': 'Organization',
                name: 'aiseo.hamburg',
                url: 'https://aiseo.hamburg',
              },
              url: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-kosten',
              datePublished: '2026-03-24',
              dateModified: '2026-03-24',
              mainEntityOfPage: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-kosten',
              inLanguage: 'de',
            }),
          }}
        />

        {/* FAQPage JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQ_ITEMS.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.a,
                },
              })),
            }),
          }}
        />

        {/* BreadcrumbList JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Startseite',
                  item: 'https://aiseo.hamburg',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Wissen',
                  item: 'https://aiseo.hamburg/wissen',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'KI-Sichtbarkeit Kosten',
                  item: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-kosten',
                },
              ],
            }),
          }}
        />

        {/* Hero */}
        <section className="relative pt-32 pb-12 md:pt-52 md:pb-16 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <FadeIn>
            <nav className="text-sm text-gray-400 mb-8">
              <a href="/" className="hover:text-gray-600 transition-colors">Startseite</a>
              <span className="mx-2">/</span>
              <span>Wissen</span>
              <span className="mx-2">/</span>
              <span className="text-gray-600">KI-Sichtbarkeit Kosten</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
              KI-Sichtbarkeit Kosten: Was AI&nbsp;SEO wirklich kostet
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
              Du gibst 3.000&nbsp;&euro;/Monat f&uuml;r Google Ads aus, aber KI-Empfehlungen bringen qualifiziertere Leads &ndash; kostenlos. Hier ist die ehrliche Aufschl&uuml;sselung, was KI-Sichtbarkeit 2026 kostet und wann sich die Investition rechnet.
            </p>
          </FadeIn>
        </section>

        {/* TL;DR Preise */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-16">
          <FadeIn>
            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
              <p className="text-sm font-bold text-brand-accent mb-4">TL;DR &ndash; Preise auf einen Blick</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Einmaliges Upgrade</p>
                  <p className="text-xl font-semibold text-black">1.500 &ndash; 3.000&nbsp;&euro;</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Monatliche Betreuung</p>
                  <p className="text-xl font-semibold text-black">1.500 &ndash; 5.000&nbsp;&euro;/Monat</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Enterprise</p>
                  <p className="text-xl font-semibold text-black">ab 5.000&nbsp;&euro;/Monat</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">DIY / Selbst machen</p>
                  <p className="text-xl font-semibold text-black">0&nbsp;&euro; + viel Zeit</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Zum Vergleich: Google Ads CPC steigt j&auml;hrlich um 10-15%. Klassische SEO-Agenturen kosten 2.000&ndash;10.000&nbsp;&euro;/Monat. KI-Sichtbarkeit liefert nachhaltigere Ergebnisse bei oft geringeren Kosten.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Die ehrliche Antwort */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Die ehrliche Antwort: Was KI-Sichtbarkeit 2026 kostet
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Der Markt f&uuml;r KI-Sichtbarkeit ist jung. Es gibt noch keine standardisierten Preise wie bei Google Ads oder klassischem SEO. Das macht die Kostenfrage schwieriger &ndash; aber auch ehrlicher. Denn es bedeutet: du zahlst f&uuml;r echte Arbeit, nicht f&uuml;r aufgebl&auml;hte Pakete.
              </p>
              <p>
                Hier sind die realistischen Preisbereiche, basierend auf dem, was seri&ouml;se Anbieter 2026 berechnen:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">Einmaliges Upgrade</h3>
                <p className="text-2xl font-semibold text-brand-accent mb-2">1.500 &ndash; 3.000&nbsp;&euro;</p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Schema-Markup, llms.txt, Content-Restrukturierung, technische Basis. Einmalig, kein Abo. Ergebnis: deine Website ist KI-ready.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">Monatliche Betreuung</h3>
                <p className="text-2xl font-semibold text-brand-accent mb-2">1.500 &ndash; 5.000&nbsp;&euro;/Monat</p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Laufende Optimierung, Content-Erstellung, Monitoring &uuml;ber alle KI-Plattformen, Autorit&auml;ts-Aufbau und monatliches Reporting.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">Enterprise</h3>
                <p className="text-2xl font-semibold text-brand-accent mb-2">ab 5.000&nbsp;&euro;/Monat</p>
                <p className="text-base text-gray-600 leading-relaxed">
                  F&uuml;r Unternehmen mit mehreren Standorten, Produktkategorien oder internationaler Ausrichtung. Vollumf&auml;ngliche Betreuung.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">DIY / Selbst machen</h3>
                <p className="text-2xl font-semibold text-brand-accent mb-2">0&nbsp;&euro; + Zeit</p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Technisch m&ouml;glich, wenn du Zeit und Know-how hast. Rechne mit 20-40 Stunden Einarbeitung und laufendem Aufwand.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Warum die falsche Frage */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Warum die Frage nach Kosten die falsche Frage ist
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Die eigentliche Frage lautet nicht &bdquo;Was kostet KI-Sichtbarkeit?&ldquo; &ndash; sondern &bdquo;Was kostet es, NICHT sichtbar zu sein?&ldquo;
              </p>
              <p>
                Jeder potenzielle Kunde, der ChatGPT, Perplexity oder Google AI nach einer L&ouml;sung fragt und dich nicht findet, ist ein verlorener Kunde. Du siehst ihn nicht mal in deiner Analytics. Er taucht nicht als Bounce auf, nicht als verlorener Lead. Er war nie da.
              </p>
              <p>
                Deine SEO-Agentur liefert Rankings-Reports, aber null KI-Sichtbarkeit. Jeder Monat ohne KI-Sichtbarkeit kostet dich Kunden, die du nie siehst.
              </p>
            </div>

            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 mt-10 shadow-sm">
              <p className="text-sm font-bold text-brand-accent mb-4">Rechenbeispiel: Was Unsichtbarkeit kostet</p>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>Anfragen &uuml;ber KI pro Monat (konservativ)</span>
                  <span className="font-semibold text-black">10</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>Davon finden dich aktuell</span>
                  <span className="font-semibold text-red-500">0</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>&Oslash; Auftragswert</span>
                  <span className="font-semibold text-black">3.000&nbsp;&euro;</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>Conversion Rate (Anfrage &#8594; Auftrag)</span>
                  <span className="font-semibold text-black">20%</span>
                </div>
                <div className="flex justify-between items-center py-2 bg-red-50 rounded-lg px-3">
                  <span className="font-semibold">Entgangener Umsatz pro Monat</span>
                  <span className="font-bold text-red-600 text-lg">6.000&nbsp;&euro;</span>
                </div>
                <div className="flex justify-between items-center py-2 bg-red-50 rounded-lg px-3">
                  <span className="font-semibold">Entgangener Umsatz pro Jahr</span>
                  <span className="font-bold text-red-600 text-lg">72.000&nbsp;&euro;</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Selbst wenn nur die H&auml;lfte realistisch ist: 36.000&nbsp;&euro; entgangener Umsatz pro Jahr &ndash; verglichen mit einer Investition von 1.500&nbsp;&euro; f&uuml;r ein einmaliges Upgrade.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Kostenvergleich */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Kostenvergleich: KI-Sichtbarkeit vs. andere Marketing-Kan&auml;le
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Wie schneidet KI-Sichtbarkeit im Vergleich zu den Kan&auml;len ab, die du vermutlich schon nutzt?
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-gray-100 rounded-2xl overflow-hidden text-sm md:text-base">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-black">Kanal</th>
                    <th className="text-left p-4 font-semibold text-black">Monatliche Kosten</th>
                    <th className="text-left p-4 font-semibold text-black">Time-to-Result</th>
                    <th className="text-left p-4 font-semibold text-black">Nachhaltigkeit</th>
                    <th className="text-left p-4 font-semibold text-black">ROI-Potenzial</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-black">Google Ads</td>
                    <td className="p-4 text-gray-600">2.000&ndash;20.000&nbsp;&euro;</td>
                    <td className="p-4 text-gray-600">Sofort</td>
                    <td className="p-4 text-red-500">Keine (Ads aus = weg)</td>
                    <td className="p-4 text-gray-600">Mittel, sinkend</td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-50/50">
                    <td className="p-4 font-medium text-black">Klassisches SEO</td>
                    <td className="p-4 text-gray-600">2.000&ndash;10.000&nbsp;&euro;</td>
                    <td className="p-4 text-gray-600">6&ndash;12 Monate</td>
                    <td className="p-4 text-brand-accent">Hoch</td>
                    <td className="p-4 text-gray-600">Hoch, aber langsam</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-black">Social Media Ads</td>
                    <td className="p-4 text-gray-600">1.000&ndash;15.000&nbsp;&euro;</td>
                    <td className="p-4 text-gray-600">Sofort</td>
                    <td className="p-4 text-red-500">Keine</td>
                    <td className="p-4 text-gray-600">Variabel</td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-brand-accent/5">
                    <td className="p-4 font-semibold text-brand-accent">KI-Sichtbarkeit</td>
                    <td className="p-4 font-medium text-brand-accent">1.500&ndash;5.000&nbsp;&euro;</td>
                    <td className="p-4 text-gray-600">2&ndash;6 Monate</td>
                    <td className="p-4 text-brand-accent">Hoch</td>
                    <td className="p-4 font-medium text-brand-accent">Sehr hoch</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-base text-gray-500 mt-6">
              Der entscheidende Unterschied: KI-Sichtbarkeit baut auf und verst&auml;rkt sich &uuml;ber Zeit. Google Ads kosten bei jedem Klick. Und KI-Leads sind qualifizierter, weil der Nutzer bereits eine konkrete Frage gestellt hat.
            </p>
          </FadeIn>
        </section>

        {/* Was beeinflusst die Kosten? */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Was beeinflusst die Kosten?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              F&uuml;nf Faktoren bestimmen, wo du im Preisbereich landest.
            </p>
            <div className="space-y-5">
              {COST_FACTORS.map((factor, i) => (
                <div key={factor.title} className="bg-white border border-gray-100 rounded-2xl p-6">
                  <div className="flex gap-4">
                    <span className="text-brand-accent font-bold text-lg shrink-0 mt-0.5">{i + 1}.</span>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">{factor.title}</h3>
                      <p className="text-base text-gray-600 leading-relaxed">{factor.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Die 3 Preismodelle bei aiseo.hamburg */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Die 3 Preismodelle bei aiseo.hamburg
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Klar, transparent, ohne Kleingedrucktes.
            </p>

            <div className="space-y-6">
              {/* Modell 1: Kostenlose Kurzanalyse */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-black">Kostenlose Kurzanalyse</h3>
                  <span className="text-2xl font-semibold text-brand-accent mt-2 sm:mt-0">0&nbsp;&euro;</span>
                </div>
                <div className="space-y-3 text-base text-gray-600 leading-relaxed mb-6">
                  <p className="font-medium text-black">Was du bekommst:</p>
                  <ul className="space-y-2 pl-1">
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                      <span>Check deiner aktuellen KI-Sichtbarkeit auf ChatGPT, Perplexity und Google AI</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                      <span>Erste Einsch&auml;tzung: Wo stehst du, wo stehen deine Wettbewerber?</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                      <span>Ehrliche Aussage, ob sich KI-Sichtbarkeit f&uuml;r dein Unternehmen lohnt</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-black mb-1">F&uuml;r wen ist das?</p>
                  <p className="text-sm text-gray-600">F&uuml;r jedes Unternehmen, das wissen will, wo es steht. Keine Verpflichtung, kein Verkaufsdruck. Du bekommst eine ehrliche Einsch&auml;tzung in 15 Minuten.</p>
                </div>
              </div>

              {/* Modell 2: AI-Sichtbarkeits-Upgrade */}
              <div className="bg-white border-2 border-brand-accent rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-black">AI-Sichtbarkeits-Upgrade</h3>
                  <span className="text-2xl font-semibold text-brand-accent mt-2 sm:mt-0">1.500&nbsp;&euro; netto</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">Einmalig &middot; 10&ndash;14 Tage Umsetzung &middot; Kein Abo</p>
                <div className="space-y-3 text-base text-gray-600 leading-relaxed mb-6">
                  <p className="font-medium text-black">Was du bekommst:</p>
                  <ul className="space-y-2 pl-1">
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                      <span>Vollst&auml;ndiges KI-Sichtbarkeits-Audit &uuml;ber alle relevanten Plattformen</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                      <span>Schema-Markup (JSON-LD) f&uuml;r deine wichtigsten Seiten</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                      <span>llms.txt und ai.txt Konfiguration</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                      <span>Content-Restrukturierung deiner Top-5-Seiten f&uuml;r KI-Extrahierbarkeit</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                      <span>Technische Optimierung (Crawlability, Seitenstruktur)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                      <span>Dokumentation und Handlungsempfehlungen f&uuml;r eigenst&auml;ndige Weiterarbeit</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-brand-accent/5 rounded-lg p-4">
                  <p className="text-sm font-medium text-black mb-1">F&uuml;r wen ist das?</p>
                  <p className="text-sm text-gray-600">F&uuml;r Unternehmen, die eine solide KI-Basis brauchen und danach selbst weiterarbeiten k&ouml;nnen. Ideal als Einstieg oder wenn du ein internes Marketing-Team hast.</p>
                </div>
              </div>

              {/* Modell 3: Full KI-Sichtbarkeits-Paket */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-black">Full KI-Sichtbarkeits-Paket</h3>
                  <span className="text-2xl font-semibold text-brand-accent mt-2 sm:mt-0">ab 2.500&nbsp;&euro;/Monat</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">Laufende Betreuung &middot; Monatlich k&uuml;ndbar &middot; Alle Plattformen</p>
                <div className="space-y-3 text-base text-gray-600 leading-relaxed mb-6">
                  <p className="font-medium text-black">Was du bekommst:</p>
                  <ul className="space-y-2 pl-1">
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                      <span>Alles aus dem Upgrade, plus:</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                      <span>Laufende Content-Erstellung und -Optimierung f&uuml;r KI-Zitierbarkeit</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                      <span>Monitoring auf ChatGPT, Perplexity, Google AI Overviews, Claude, Copilot</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                      <span>Autorit&auml;ts-Aufbau: Verzeichnisse, Erw&auml;hnungen, Fachpublikationen</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                      <span>Monatliches Reporting mit konkreten KI-Zitierungs-Metriken</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                      <span>Pers&ouml;nlicher Ansprechpartner, kein Ticket-System</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-black mb-1">F&uuml;r wen ist das?</p>
                  <p className="text-sm text-gray-600">F&uuml;r Unternehmen, die KI-Sichtbarkeit als strategischen Kanal aufbauen wollen. Wenn du kein internes Team hast oder maximale Ergebnisse willst.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ROI-Rechner */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              ROI-Rechner: Lohnt sich KI-Sichtbarkeit f&uuml;r dich?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Setze deine eigenen Zahlen ein und rechne nach.
            </p>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <p className="font-medium text-black mb-6">Beispiel: Hamburger Dienstleister</p>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-1">Investition (einmaliges Upgrade)</p>
                    <p className="text-lg font-semibold text-black">1.500&nbsp;&euro;</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-1">&Oslash; Auftragswert</p>
                    <p className="text-lg font-semibold text-black">5.000&nbsp;&euro;</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-1">Zus&auml;tzliche Anfragen durch KI/Monat</p>
                    <p className="text-lg font-semibold text-black">3</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-1">Conversion Rate</p>
                    <p className="text-lg font-semibold text-black">25%</p>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex justify-between items-center py-2">
                    <span>Zus&auml;tzliche Auftr&auml;ge pro Monat</span>
                    <span className="font-semibold text-black">0,75</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Zus&auml;tzlicher Umsatz pro Monat</span>
                    <span className="font-semibold text-black">3.750&nbsp;&euro;</span>
                  </div>
                  <div className="flex justify-between items-center py-2 bg-brand-accent/5 rounded-lg px-3">
                    <span className="font-semibold">Break-even nach</span>
                    <span className="font-bold text-brand-accent text-lg">weniger als 1 Monat</span>
                  </div>
                  <div className="flex justify-between items-center py-2 bg-brand-accent/5 rounded-lg px-3 mt-2">
                    <span className="font-semibold">ROI nach 12 Monaten</span>
                    <span className="font-bold text-brand-accent text-lg">+43.500&nbsp;&euro;</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Selbst bei konservativen Annahmen: Eine Investition von 1.500&nbsp;&euro; mit einem einzelnen zus&auml;tzlichen Auftrag pro Monat rechnet sich innerhalb weniger Wochen.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Typische Kostenfallen */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Typische Kostenfallen bei AI SEO
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Sechs Warnsignale, die dich vor Fehlinvestitionen sch&uuml;tzen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {COST_TRAPS.map((trap) => (
                <div key={trap.title} className="bg-white border border-red-100 rounded-2xl p-6">
                  <div className="flex gap-3 mb-2">
                    <span className="text-red-400 shrink-0 mt-1 font-bold">&#9888;</span>
                    <h3 className="text-lg font-semibold text-black">{trap.title}</h3>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed pl-7">{trap.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Wann sich die Investition rechnet - Timeline */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Wann sich die Investition rechnet
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              KI-Sichtbarkeit ist kein Overnight-Erfolg, aber deutlich schneller als klassisches SEO. Hier die realistische Timeline.
            </p>

            <div className="space-y-5">
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-16 h-16 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                    <span className="text-brand-accent font-bold text-sm">1&ndash;2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Monat 1&ndash;2: Technische Basis</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Schema-Markup, llms.txt, Content-Restrukturierung, technische Optimierung. Deine Website wird KI-ready. Erste Crawls durch KI-Bots beginnen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-16 h-16 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                    <span className="text-brand-accent font-bold text-sm">3&ndash;4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Monat 3&ndash;4: Erste Sichtbarkeit</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      KI-Systeme beginnen, deine Inhalte als Quelle zu erkennen. Erste Erw&auml;hnungen in KI-Antworten tauchen auf. Monitoring zeigt Fortschritt.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-16 h-16 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                    <span className="text-brand-accent font-bold text-sm">5&ndash;6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Monat 5&ndash;6: Messbare Ergebnisse</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Konsistente Zitierungen &uuml;ber mehrere KI-Plattformen. Erste Anfragen, die direkt auf KI-Empfehlungen zur&uuml;ckzuf&uuml;hren sind. ROI wird messbar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 mt-8 shadow-sm">
              <p className="text-base text-gray-700 leading-relaxed">
                <span className="font-semibold text-black">Break-even typisch nach 3&ndash;6 Monaten.</span> Bei einem einmaligen Upgrade oft noch schneller, weil die Investition gering ist und schon ein einziger zus&auml;tzlicher Auftrag die Kosten deckt.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-10">
              H&auml;ufig gestellte Fragen zu KI-Sichtbarkeit Kosten
            </h2>
            <div className="space-y-6">
              {FAQ_ITEMS.map((item) => (
                <div key={item.q} className="bg-white border border-gray-100 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">{item.q}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Quellen */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Quellen und weiterf&uuml;hrende Informationen
            </h2>
            <ul className="space-y-3 text-base text-gray-600 leading-relaxed">
              <li>
                <span className="font-medium text-black">Aggarwal et al. (2023):</span>{' '}
                &quot;GEO: Generative Engine Optimization&quot; &ndash; akademische Grundlage f&uuml;r AI SEO Methodik und ROI-Bewertung.
              </li>
              <li>
                <span className="font-medium text-black">Gartner (2025):</span>{' '}
                Prognose: Bis 2026 werden 25% aller Suchanfragen &uuml;ber KI-Assistenten laufen. Das ver&auml;ndert die Kostenstruktur im digitalen Marketing grundlegend.
              </li>
              <li>
                <span className="font-medium text-black">Search Engine Journal (2026):</span>{' '}
                Analyse der steigenden Google Ads CPCs und deren Einfluss auf Marketing-Budgetverteilung.
              </li>
              <li>
                <span className="font-medium text-black">HubSpot State of Marketing (2026):</span>{' '}
                Daten zu Customer Acquisition Costs (CAC) &uuml;ber verschiedene Kan&auml;le im DACH-Raum.
              </li>
            </ul>
          </FadeIn>
        </section>

        {/* Verwandte Guides */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-8">
          <FadeIn>
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-xl font-semibold text-black mb-5">Verwandte Guides:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="/wissen/ki-sichtbarkeit"
                  className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
                >
                  <p className="text-base font-semibold text-black group-hover:text-brand-accent transition-colors">KI-Sichtbarkeit</p>
                  <p className="text-sm text-gray-500 mt-1">Wie Unternehmen in KI-Antworten sichtbar werden.</p>
                </a>
                <a
                  href="/wissen/ai-seo-agentur"
                  className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
                >
                  <p className="text-base font-semibold text-black group-hover:text-brand-accent transition-colors">AI SEO Agentur</p>
                  <p className="text-sm text-gray-500 mt-1">Was eine gute AI SEO Agentur leistet und worauf du achten solltest.</p>
                </a>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Dark CTA */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <FadeIn>
            <div className="bg-[#121212] rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-white mb-4">
                Was kostet KI-Sichtbarkeit f&uuml;r DEIN Unternehmen?
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto mb-8">
                Jedes Unternehmen ist anders. Lass uns in 15 Minuten pr&uuml;fen, wo du stehst und was sich f&uuml;r dich konkret lohnt. Kostenlos und ohne Verpflichtung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button href="/ai-sichtbarkeit-now" text="Kostenlose Kurzanalyse starten" primary />
                <a
                  href="/ai-sichtbarkeits-upgrade-hamburg"
                  className="text-gray-400 hover:text-white transition-colors text-base underline underline-offset-4"
                >
                  Oder direkt zum AI-Sichtbarkeits-Upgrade
                </a>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}
