'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

const FAQ_ITEMS = [
  {
    q: 'Was ist Website-Automatisierung?',
    a: 'Website-Automatisierung bedeutet, wiederkehrende digitale Prozesse durch Software erledigen zu lassen -- zum Beispiel Kontaktformular-Antworten, E-Mail-Sequenzen, Social-Media-Posts oder Rechnungserstellung. Ziel ist es, manuelle Arbeit zu reduzieren und Fehler zu vermeiden.',
  },
  {
    q: 'Welches Automatisierungs-Tool ist das beste für deutsche Unternehmen?',
    a: 'Make.com bietet das beste Gesamtpaket für deutsche KMU: EU-Hosting, DSGVO-Konformität, faire Preise und eine intuitive Oberfläche. Für Unternehmen mit technischem Know-how ist n8n als Open-Source-Alternative ideal, da es komplett selbst gehostet werden kann.',
  },
  {
    q: 'Ist Zapier DSGVO-konform?',
    a: 'Zapier ist ein US-Unternehmen und speichert Daten auf US-Servern. Trotz EU-US Data Privacy Framework bleibt ein Restrisiko. Für sensible Daten empfehlen wir EU-gehostete Alternativen wie Make.com oder selbst gehostetes n8n.',
  },
  {
    q: 'Was kostet Website-Automatisierung?',
    a: 'Die Tools selbst starten oft kostenlos: Make.com ab 0 EUR/Monat (1.000 Operationen), n8n ist komplett kostenlos bei Self-Hosting. Professionelle Einrichtung und Strategie kosten je nach Umfang zwischen 2.000 und 10.000 EUR -- bis zu 80 % davon können über BAFA-Förderung gedeckt werden.',
  },
  {
    q: 'Kann ich Automatisierung selbst einrichten oder brauche ich Hilfe?',
    a: 'Einfache Workflows (z.B. Formular-Antworten, E-Mail-Sequenzen) kannst du mit etwas Einarbeitung selbst umsetzen. Für komplexere Szenarien -- etwa CRM-Integration, Lead-Scoring oder DSGVO-konforme Datenverarbeitung -- lohnt sich professionelle Unterstützung.',
  },
];

export default function WebsiteAutomatisierungPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F7F5F2] text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Website-Automatisierung: Tools und Strategien, die wirklich funktionieren',
            description: 'Website-Automatisierung für Unternehmen: Die besten Tools, DSGVO-konforme Lösungen und praktische Strategien für mehr Effizienz im digitalen Alltag.',
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
              '@id': 'https://aiseo.hamburg/wissen/website-automatisierung',
            },
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

      <main className="min-h-screen bg-[#F7F5F2]">
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-52 md:pb-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <FadeIn>
            <nav className="text-sm text-gray-400 mb-8">
              <a href="/" className="hover:text-gray-600 transition-colors">Startseite</a>
              <span className="mx-2">/</span>
              <span>Wissen</span>
              <span className="mx-2">/</span>
              <span className="text-gray-600">Website-Automatisierung</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.04em] text-black leading-[1.1] mb-6">
              Website-Automatisierung: Tools und Strategien, die wirklich funktionieren
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-[720px]">
              79 % nutzen KI-Tools. Nur 23 % haben eine Strategie. Hier steht, welche Tools sich lohnen und worauf du in Deutschland achten musst.
            </p>
          </FadeIn>
        </section>

        {/* Image */}
        <div className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-8">
          <FadeIn>
            <img
              src="/images/wissen/automatisierung.jpg"
              alt="Website-Automatisierung: Code und moderne Entwicklung"
              className="w-full rounded-2xl shadow-lg"
              loading="eager"
            />
            <p className="text-xs text-gray-400 mt-2">Foto: Unsplash</p>
          </FadeIn>
        </div>

        {/* TLDR */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-16">
          <FadeIn>
            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-black mb-4">TL;DR -- Das Wichtigste in 30 Sekunden</h2>
              <ul className="space-y-3 text-base text-gray-600 leading-relaxed">
                <li className="flex gap-3"><span className="text-brand-accent font-bold mt-0.5">&#10003;</span><span><strong>Beste Tools:</strong> Make.com (EU-gehostet, ideal für KMU), n8n (Open-Source, Self-Hosting), Zapier (mächtig, aber US-Server)</span></li>
                <li className="flex gap-3"><span className="text-brand-accent font-bold mt-0.5">&#10003;</span><span><strong>DSGVO:</strong> EU-gehostete oder selbst gehostete Lösungen bevorzugen</span></li>
                <li className="flex gap-3"><span className="text-brand-accent font-bold mt-0.5">&#10003;</span><span><strong>Produktivität:</strong> Bis zu 25 % Steigerung durch KI-Einsatz (Institut der deutschen Wirtschaft)</span></li>
                <li className="flex gap-3"><span className="text-brand-accent font-bold mt-0.5">&#10003;</span><span><strong>Förderung:</strong> BAFA deckt bis zu 80 % der Beratungskosten</span></li>
              </ul>
            </div>
          </FadeIn>
        </section>

        {/* Warum Website-Automatisierung jetzt wichtig ist */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Warum Website-Automatisierung jetzt wichtig ist
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                79 % der Unternehmen nutzen KI-Tools. Nur 23 % haben eine Strategie. Der Rest verschwendet Geld oder verpasst den Anschluss.
              </p>
              <p>
                Seit 2025 gilt der EU AI Act mit klaren Regeln für KI in Unternehmen. Wer jetzt nicht strategisch automatisiert, riskiert Wettbewerbsnachteile und Compliance-Probleme.
              </p>
              <p>
                Die gute Nachricht: Automatisierung ist nicht nur für Konzerne. KMU setzen die richtigen Tools oft schneller um -- weniger Bürokratie, kürzere Entscheidungswege.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm my-8">
              <p className="text-2xl md:text-3xl font-semibold text-black text-center">
                79 % der Unternehmen nutzen KI-Tools, aber nur 23 % haben eine Strategie
              </p>
              <p className="text-sm text-gray-400 text-center mt-2">Quelle: Deloitte AI Institute</p>
            </div>
          </FadeIn>
        </section>

        {/* Tool-Vergleich */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Die besten Automatisierungs-Tools im Vergleich
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Drei Tools dominieren den Markt. Jedes hat klare Stärken und Schwächen:
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            <FadeIn>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-black mb-3">Make.com</h3>
                <span className="inline-block text-xs font-medium bg-green-50 text-green-700 px-2 py-1 rounded-full mb-4">Empfehlung für KMU</span>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><strong>Vorteile:</strong> EU-Hosting, DSGVO-konform, visuelle Oberfläche, fairer Preis</li>
                  <li><strong>Nachteile:</strong> Komplexe Szenarien brauchen Einarbeitung</li>
                  <li><strong>Preis:</strong> Ab 0 EUR/Monat (1.000 Ops), Pro ab 9 EUR/Monat</li>
                  <li><strong>DSGVO:</strong> EU-Server, AVV verfügbar</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-black mb-3">n8n</h3>
                <span className="inline-block text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded-full mb-4">Open Source</span>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><strong>Vorteile:</strong> Self-Hosting möglich, volle Datenkontrolle, kein Vendor-Lock-in</li>
                  <li><strong>Nachteile:</strong> Technisches Setup nötig, weniger Integrationen</li>
                  <li><strong>Preis:</strong> Kostenlos (Self-Hosted), Cloud ab 20 EUR/Monat</li>
                  <li><strong>DSGVO:</strong> Volle Kontrolle bei Self-Hosting</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-black mb-3">Zapier</h3>
                <span className="inline-block text-xs font-medium bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full mb-4">US-gehostet</span>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><strong>Vorteile:</strong> 7.000+ Integrationen, einfache Bedienung</li>
                  <li><strong>Nachteile:</strong> US-Server, teuer bei hohem Volumen</li>
                  <li><strong>Preis:</strong> Ab 0 USD/Monat (100 Tasks), Pro ab 19,99 USD/Monat</li>
                  <li><strong>DSGVO:</strong> US-Server, DPA verfügbar, Restrisiko bleibt</li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <p className="text-base text-gray-500 leading-relaxed mt-8">
              Für Enterprise: SAP Build Process Automation, Microsoft Power Automate oder UiPath. Mächtig, aber deutlich komplexer und teurer.
            </p>
          </FadeIn>
        </section>

        {/* DSGVO */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              DSGVO und Automatisierung: Was du beachten musst
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Die DSGVO bestimmt, welche Tools du einsetzen darfst. US-Tools wie Zapier speichern Daten auf amerikanischen Servern. Auch mit dem EU-US Data Privacy Framework bleibt ein rechtliches Restrisiko.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>EU-Hosting wählen:</strong> Make.com bietet EU-Server und einen vollständigen Auftragsverarbeitungsvertrag (AVV).</li>
                <li><strong>Self-Hosting nutzen:</strong> n8n auf eigenen Servern oder bei deutschen Anbietern (Hetzner, IONOS) betreiben -- volle Datenkontrolle.</li>
                <li><strong>AVV abschließen:</strong> Bei jedem Tool prüfen, welche Daten wohin fließen.</li>
              </ul>
              <p>
                Seit 2025 bringt der EU AI Act zusätzliche Anforderungen: Transparenzpflichten, Risikoklassifizierung, Dokumentation. Von Anfang an mitdenken.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* 10 Automatisierungen */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              10 Automatisierungen, die jedes Unternehmen sofort umsetzen kann
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Starte mit den Aufgaben, die dich am meisten Zeit kosten:
            </p>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { nr: '01', title: 'Kontaktformular-Antworten', desc: 'Automatische Bestätigungs-E-Mails und KI-Chatbots für sofortige Reaktion, auch außerhalb der Geschäftszeiten.' },
              { nr: '02', title: 'Social-Media-Planung', desc: 'Beiträge vorplanen und automatisch veröffentlichen -- spart Stunden pro Woche.' },
              { nr: '03', title: 'E-Mail-Sequenzen', desc: 'Willkommens-E-Mails, Follow-ups und Newsletter, die automatisch zum richtigen Zeitpunkt rausgehen.' },
              { nr: '04', title: 'Rechnungserstellung', desc: 'Automatische Rechnungen nach Auftragseingang, inklusive Zahlungserinnerungen.' },
              { nr: '05', title: 'Terminbuchung', desc: 'Kunden buchen selbst, du bekommst automatisch alle Infos.' },
              { nr: '06', title: 'Angebotserstellung', desc: 'Aus Formulardaten automatisch individuelle Angebote generieren und versenden.' },
              { nr: '07', title: 'Belegerfassung', desc: 'Belege fotografieren, automatisch erkennen und in die Buchhaltung übertragen.' },
              { nr: '08', title: 'Content-Publishing', desc: 'Blog-Beiträge automatisch auf Website, Newsletter und Social Media verteilen.' },
              { nr: '09', title: 'Lead-Scoring & CRM', desc: 'Neue Kontakte automatisch bewerten, priorisieren und im CRM anlegen.' },
              { nr: '10', title: 'Website-Monitoring', desc: 'Automatische Benachrichtigung bei Ausfällen, langsamen Ladezeiten oder SEO-Problemen.' },
            ].map((item) => (
              <FadeIn key={item.nr}>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <span className="text-sm font-mono text-brand-accent font-bold">{item.nr}</span>
                  <h3 className="text-lg font-semibold text-black mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={100}>
            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm my-8">
              <p className="text-2xl md:text-3xl font-semibold text-black text-center">
                KI-Einsatz kann die Arbeitsproduktivität in Deutschland um bis zu 25 % steigern
              </p>
              <p className="text-sm text-gray-400 text-center mt-2">Quelle: Institut der deutschen Wirtschaft</p>
            </div>
          </FadeIn>
        </section>

        {/* Hamburger Unternehmen */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Website-Automatisierung für Hamburger Unternehmen
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Hamburg ist ein Hotspot für KI und Automatisierung. Die Otto Group nutzt mit ogGPT ein eigenes KI-System für Prozessautomatisierung, Jung von Matt setzt mit Stables auf KI-gestützte Kreativprozesse, und das ARIC vernetzt Unternehmen, Forschung und Startups.
              </p>
              <p>
                Für KMU heißt das: Lokale Expertise, Förderprogramme und ein starkes Netzwerk sind da. Die Hamburger Wirtschaftsbehörde fördert digitale Transformation aktiv -- in Kombination mit BAFA-Förderung sind Automatisierungsprojekte mit minimalem Eigenanteil möglich.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* KI-Sichtbarkeit Verweis */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Automatisierung und KI-Sichtbarkeit
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Automatisierung hilft nicht nur bei internen Prozessen -- sie ist auch ein Hebel für deine Sichtbarkeit in KI-Systemen wie ChatGPT oder Perplexity. Content-Freshness, strukturierte Daten und KI-Monitoring lassen sich automatisieren. Mehr dazu in unserem <a href="/wissen/ki-sichtbarkeit" className="text-brand-accent underline underline-offset-2 hover:text-black transition-colors">Guide zu KI-Sichtbarkeit</a>.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Webentwicklung-Tools */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Webentwicklung-Tools: Moderne Entwicklung automatisieren
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Auch die Webentwicklung selbst profitiert massiv von Automatisierung:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>CI/CD-Pipelines:</strong> GitHub Actions, GitLab CI oder Vercel automatisieren Build, Test und Deployment bei jeder Änderung.</li>
                <li><strong>Automatisiertes Testing:</strong> Unit-Tests, E2E-Tests und visuelle Regressionstests bei jedem Commit.</li>
                <li><strong>KI-Coding-Assistenten:</strong> Claude Code, GitHub Copilot oder Cursor beschleunigen die Entwicklung und reduzieren Fehler.</li>
                <li><strong>Headless CMS:</strong> Inhalte über APIs verwalten und automatisch auf allen Kanälen ausspielen.</li>
              </ul>
              <p>
                Gerade für kleine Teams ist die Kombination aus automatisierten Workflows und KI-gestützter Entwicklung ein enormer Hebel.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* BAFA Stat Box */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-16">
          <FadeIn>
            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm my-8">
              <p className="text-2xl md:text-3xl font-semibold text-black text-center">
                BAFA-Förderung: bis zu 80 % der Beratungskosten
              </p>
              <p className="text-sm text-gray-400 text-center mt-2">Quelle: Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA)</p>
            </div>
          </FadeIn>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Häufige Fragen zur Website-Automatisierung
            </h2>
          </FadeIn>
          <div className="space-y-8">
            {FAQ_ITEMS.map((item, idx) => (
              <FadeIn key={idx}>
                <article className="border-b border-black/10 pb-8 last:border-b-0 last:pb-0">
                  <h3 className="text-lg md:text-xl font-semibold text-black tracking-tight">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-gray-600 text-base leading-relaxed">{item.a}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-16">
          <FadeIn>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Quellen</h3>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>Deloitte AI Institute -- &quot;State of AI in the Enterprise&quot; (Studie zur KI-Tool-Nutzung in Unternehmen)</li>
                <li>Institut der deutschen Wirtschaft -- Studie zur Steigerung der Arbeitsproduktivität durch KI-Einsatz</li>
                <li>Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA) -- Förderung unternehmerischen Know-hows</li>
                <li>hamburg-business.com -- Hamburger Unternehmen und KI-Transformation</li>
              </ul>
            </div>
          </FadeIn>
        </section>

        {/* Verwandte Guides */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-16">
          <FadeIn>
            <div className="bg-white border border-gray-100 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Verwandte Guides</h3>
              <ul className="text-base text-gray-600 space-y-2">
                <li>
                  <a href="/wissen/ki-sichtbarkeit" className="text-brand-accent underline underline-offset-2 hover:text-black transition-colors">
                    KI-Sichtbarkeit: So wirst du von ChatGPT und Co. empfohlen
                  </a>
                </li>
              </ul>
            </div>
          </FadeIn>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-gray-100">
          <FadeIn>
            <div className="max-w-[700px] mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-6">
                Du willst deine Website und Prozesse automatisieren?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Ich helfe dir, die richtigen Tools auszuwählen, DSGVO-konform einzurichten und mit deiner KI-Sichtbarkeit zu verbinden. Kein Verkaufsgespräch -- nur eine ehrliche Einschätzung.
              </p>
              <Button href="/contact" text="Kostenlos beraten lassen" primary />
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}
