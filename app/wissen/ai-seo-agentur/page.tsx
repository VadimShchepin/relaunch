'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

const FAQ_ITEMS = [
  {
    q: 'Was kostet eine AI SEO Agentur?',
    a: 'Ein einmaliges KI-Sichtbarkeits-Audit liegt zwischen 500 und 2.000 Euro. Laufende Optimierung kostet zwischen 1.000 und 5.000 Euro pro Monat. Entscheidend ist nicht der Preis, sondern ob die Agentur echte KI-Zitierungen messen kann. Viele Anbieter verkaufen klassisches SEO unter neuem Label. Bei aiseo.hamburg gibt es eine kostenlose Kurzanalyse, damit du vorher weisst, wo du stehst.',
  },
  {
    q: 'Wie schnell sehe ich Ergebnisse bei AI SEO?',
    a: 'Erste Veraenderungen in KI-Antworten sind oft innerhalb von 4 bis 8 Wochen sichtbar. Stabile, zuverlaessige Sichtbarkeit entsteht ueber Monate durch konsistente Arbeit an Inhalten, Struktur und Autoritaet. Der Vorteil: Wer jetzt startet, hat in den meisten Branchen noch wenig Konkurrenz.',
  },
  {
    q: 'Brauche ich eine AI SEO Agentur oder reicht klassisches SEO?',
    a: 'Klassisches SEO bleibt wichtig, ist aber nicht ausreichend. KI-Systeme bewerten Quellen anders als Google. Wenn deine Zielgruppe ChatGPT, Perplexity oder Google AI nutzt, brauchst du gezielte AI SEO Optimierung. Eine spezialisierte Agentur fuer KI-Sichtbarkeit sorgt dafuer, dass du nicht nur bei Google, sondern auch in KI-Antworten zitiert wirst.',
  },
  {
    q: 'Was unterscheidet aiseo.hamburg von anderen AI SEO Agenturen?',
    a: 'Hinter aiseo.hamburg steht ein Software-Architekt mit ueber 10 Jahren Erfahrung, kein Marketing-Generalist. Das bedeutet: datengetriebene Analyse statt Bauchgefuehl, individuelle Betreuung statt Massenabfertigung, und echte Messung von KI-Zitierungen statt Vanity-Metriken. Kein Agentur-Overhead, keine Praktikanten an deinem Projekt.',
  },
  {
    q: 'Gibt es AI SEO Agenturen in Hamburg?',
    a: 'Hamburg hat als Technologie- und Medienstandort einige Anbieter im Bereich AI SEO. Wichtig ist, auf tatsaechliche Erfahrung mit KI-Sichtbarkeit zu achten. aiseo.hamburg ist in Hamburg-Altona ansaessig und auf KI-Sichtbarkeit spezialisiert. Frage bei jeder Agentur konkret: Wie messt ihr KI-Zitierungen?',
  },
  {
    q: 'Was ist der Unterschied zwischen AI SEO und GEO?',
    a: 'GEO (Generative Engine Optimization) ist der akademische Begriff fuer AI SEO. Beide meinen dasselbe: Optimierung fuer KI-gesteuerte Suchsysteme, damit dein Unternehmen in KI-generierten Antworten zitiert wird. aiseo.hamburg nutzt beide Begriffe synonym.',
  },
  {
    q: 'Kann ich AI SEO auch selbst machen?',
    a: 'Grundsaetzlich ja, aber es erfordert technisches Verstaendnis von Schema-Markup, strukturierten Daten, LLM-Crawlern und Content-Architektur. Die meisten Unternehmen profitieren von einer initialen Analyse und Strategie durch einen Spezialisten und koennen dann Teile der Umsetzung selbst uebernehmen.',
  },
  {
    q: 'Welche KI-Systeme sind relevant fuer mein Unternehmen?',
    a: 'Die wichtigsten sind aktuell ChatGPT (OpenAI), Google AI Overviews, Perplexity, Claude (Anthropic) und Microsoft Copilot. Welche fuer dein Unternehmen relevant sind, haengt von deiner Zielgruppe ab. Im B2B-Bereich sind ChatGPT und Perplexity besonders stark, bei Konsumenten dominiert Google AI.',
  },
];

const SERVICES = [
  {
    title: 'KI-Sichtbarkeits-Audit',
    desc: 'Vollstaendige Bestandsaufnahme: Wie wirst du in ChatGPT, Perplexity, Google AI, Claude und Copilot dargestellt? Wo wirst du zitiert, wo nicht, und warum? Konkrete Handlungsempfehlungen mit Prioritaeten.',
  },
  {
    title: 'Technische Optimierung',
    desc: 'Schema.org Markup, JSON-LD, robots.txt, llms.txt, ai.txt und semantische Seitenstruktur. Alles, damit KI-Crawler dein Angebot eindeutig verstehen und korrekt einordnen koennen.',
  },
  {
    title: 'Content-Strategie fuer KI-Zitierbarkeit',
    desc: 'Inhalte so strukturieren, dass KI sie als ziterfaehige Quelle erkennt. Klare Aussagen, praezise Definitionen, logischer Aufbau. Kein Content-Spam, sondern zitierfaehige Substanz.',
  },
  {
    title: 'Autoritaets-Aufbau',
    desc: 'Erwahnungen in Verzeichnissen, Fachpublikationen und PR-Massnahmen. KI bewertet Konsistenz und Verbreitung deiner Marke ueber verschiedene Quellen. Systematischer Aufbau deiner digitalen Reputation.',
  },
  {
    title: 'Monatliches KI-Sichtbarkeits-Reporting',
    desc: 'Regelmaessige Pruefung, ob und wie du in KI-Antworten zitiert wirst. Tracking ueber Zeit, Vergleich mit Wettbewerbern und Ableitung konkreter naechster Schritte. Keine Vanity-Metriken.',
  },
];

const TARGET_AUDIENCE = [
  {
    title: 'Hamburger Dienstleister',
    desc: 'Du gewinnst Kunden ueber Empfehlungen und Reputation. Wenn jemand ChatGPT fragt "Empfiehl mir einen Steuerberater in Hamburg", willst du genannt werden.',
  },
  {
    title: 'B2B-Unternehmen',
    desc: 'Entscheider recherchieren zunehmend ueber KI. Wer bei der Anbietersuche via Perplexity oder ChatGPT nicht auftaucht, existiert fuer diese Zielgruppe nicht.',
  },
  {
    title: 'Lokale Unternehmen',
    desc: 'Du willst bei "Empfiehl mir einen [Branche] in Hamburg" erscheinen. Lokale KI-Sichtbarkeit ist der neue Branchenbucheintrag, nur dass hier nur 3 bis 5 statt 50 Anbieter genannt werden.',
  },
  {
    title: 'Agentur-Wechsler',
    desc: 'Du bist von deiner aktuellen Agentur enttaeuscht. Die zeigen dir monatlich Google-Rankings, aber niemand trackt, ob KI dich empfiehlt. Du willst jemanden, der das Feld wirklich versteht.',
  },
];

export default function AiSeoAgenturPage() {
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
              headline: 'AI SEO Agentur Hamburg: KI-Sichtbarkeit vom Software-Architekten',
              description: 'AI SEO Agentur in Hamburg: Vadim Shchepin verbindet 10+ Jahre Software-Erfahrung mit KI-Sichtbarkeit. Datengetriebene AI SEO Beratung statt Backlink-Pakete.',
              author: {
                '@type': 'Person',
                name: 'Vadim Shchepin',
                url: 'https://aiseo.hamburg/ueber-mich',
                jobTitle: 'Senior Software Engineer & AI SEO Spezialist',
              },
              publisher: {
                '@type': 'Organization',
                name: 'aiseo.hamburg',
                url: 'https://aiseo.hamburg',
              },
              url: 'https://aiseo.hamburg/wissen/ai-seo-agentur',
              datePublished: '2026-03-12',
              dateModified: '2026-03-24',
              mainEntityOfPage: 'https://aiseo.hamburg/wissen/ai-seo-agentur',
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
                  name: 'AI SEO Agentur',
                  item: 'https://aiseo.hamburg/wissen/ai-seo-agentur',
                },
              ],
            }),
          }}
        />

        {/* ===== HERO ===== */}
        <section className="relative pt-32 pb-12 md:pt-52 md:pb-16 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <FadeIn>
            <nav className="text-sm text-gray-400 mb-8">
              <a href="/" className="hover:text-gray-600 transition-colors">Startseite</a>
              <span className="mx-2">/</span>
              <a href="/wissen" className="hover:text-gray-600 transition-colors">Wissen</a>
              <span className="mx-2">/</span>
              <span className="text-gray-600">AI SEO Agentur</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
              AI SEO Agentur Hamburg: KI-Sichtbarkeit vom Software-Architekten
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed mb-4">
              Die meisten &quot;AI SEO Agenturen&quot; kleben ein neues Label auf alte Leistungen. Hier arbeitet ein Software-Architekt mit ueber 10 Jahren Erfahrung an deiner KI-Sichtbarkeit.
            </p>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
              Keine Backlink-Pakete. Keine Massenbetreuung. Datengetriebene AI SEO Beratung fuer Hamburger Unternehmen, die in ChatGPT, Perplexity und Google AI zitiert werden wollen.
            </p>
          </FadeIn>
        </section>

        {/* Image */}
        <div className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-8">
          <FadeIn>
            <img
              src="/images/wissen/ai-seo-agentur.jpg"
              alt="AI SEO Agentur Hamburg: Vadim Shchepin bei der KI-Sichtbarkeits-Analyse"
              className="w-full rounded-2xl shadow-lg"
              loading="eager"
            />
          </FadeIn>
        </div>

        {/* Inline CTA after Hero */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-16">
          <FadeIn>
            <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <div className="flex-1">
                <p className="text-lg font-semibold text-black mb-1">Kostenlose Kurzanalyse</p>
                <p className="text-base text-gray-600">Finde heraus, ob und wie KI-Systeme dein Unternehmen aktuell empfehlen. In 48 Stunden.</p>
              </div>
              <Button href="/ai-sichtbarkeit-now" text="Kurzanalyse anfordern" primary />
            </div>
          </FadeIn>
        </section>

        {/* ===== DAS PROBLEM MIT DEN MEISTEN AGENTUREN ===== */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
              Das Problem mit den meisten AI SEO Agenturen
            </h2>
            <p className="text-lg text-gray-500 mb-10">
              Warum &quot;AI SEO&quot; auf dem Angebot steht, aber selten drin ist.
            </p>

            <div className="space-y-6">
              <div className="bg-white border border-red-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-semibold text-red-600 mb-5">Was wir auf dem Markt beobachten</h3>
                <ul className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0 mt-1 font-bold">1.</span>
                    <span><strong className="text-black">Alte Leistungen, neues Label.</strong> 70% der Hamburger Agenturen verkaufen Backlink-Pakete und Content-Produktion als &quot;AI SEO&quot;. An der Methodik hat sich nichts geaendert.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0 mt-1 font-bold">2.</span>
                    <span><strong className="text-black">Falsche Metriken.</strong> Sie messen Google-Rankings, aber keine KI-Zitierungen. Deine Agentur zeigt dir monatlich Ranking-Reports. Aber wer trackt, ob ChatGPT dich empfiehlt?</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0 mt-1 font-bold">3.</span>
                    <span><strong className="text-black">Standardisierte Templates.</strong> Jeder Kunde bekommt dasselbe Paket. KI-Sichtbarkeit erfordert aber individuelle Analyse, weil jede Branche und jedes Unternehmen anders bewertet wird.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0 mt-1 font-bold">4.</span>
                    <span><strong className="text-black">Keine eigene Messmethodik.</strong> Frag deine Agentur: &quot;Wie messt ihr, ob ChatGPT mich empfiehlt?&quot; Wenn keine klare Antwort kommt, verkaufen sie dir klassisches SEO.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0 mt-1 font-bold">5.</span>
                    <span><strong className="text-black">Massenbetreuung.</strong> Massenbetreuung funktioniert nicht bei KI-Sichtbarkeit. Jedes Unternehmen braucht individuelle Analyse. 20 Kunden pro Account Manager ist keine AI SEO Beratung.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
                <p className="text-lg leading-relaxed">
                  <strong>Die unbequeme Wahrheit:</strong> Du zahlst fuer Rankings in einem System, das seine Marktmacht verliert. Google beantwortet immer mehr Anfragen direkt. ChatGPT, Perplexity und Copilot uebernehmen die Recherche deiner Zielgruppe. Wer nur Google-Rankings optimiert, optimiert fuer gestern.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ===== WAS AISEO.HAMBURG ANDERS MACHT ===== */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
              Was aiseo.hamburg anders macht
            </h2>
            <p className="text-lg text-gray-500 mb-10">
              Kein Marketing-Generalist. Ein Software-Architekt, der KI-Sichtbarkeit von der technischen Seite denkt.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white border border-brand-accent/20 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center mb-4">
                  <span className="text-brand-accent font-bold text-lg">1</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Software-Architekt, kein Marketing-Generalist</h3>
                <p className="text-base text-gray-600 leading-relaxed">Ueber 10 Jahre Erfahrung in Software-Entwicklung und Web-Architektur. KI-Sichtbarkeit ist ein technisches Problem. Es braucht jemanden, der versteht, wie LLMs Quellen bewerten, nicht jemanden, der Keyword-Listen erstellt.</p>
              </div>
              <div className="bg-white border border-brand-accent/20 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center mb-4">
                  <span className="text-brand-accent font-bold text-lg">2</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Eigene erfolgreiche Plattformen als Proof</h3>
                <p className="text-base text-gray-600 leading-relaxed">Entwickler eigener Software-Plattformen, darunter eine DSGVO-konforme Foto-App. Keine Theorie, sondern nachweisbare Erfahrung mit Produkten, die echte Nutzer haben.</p>
              </div>
              <div className="bg-white border border-brand-accent/20 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center mb-4">
                  <span className="text-brand-accent font-bold text-lg">3</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Datengetrieben statt Bauchgefuehl</h3>
                <p className="text-base text-gray-600 leading-relaxed">Messung von echten KI-Zitierungen ueber alle relevanten Plattformen. Kein Reporting mit Vanity-Metriken, sondern nachvollziehbare Daten: Wer zitiert dich? Wo? Wie oft? Und wie veraendert sich das ueber Zeit?</p>
              </div>
              <div className="bg-white border border-brand-accent/20 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center mb-4">
                  <span className="text-brand-accent font-bold text-lg">4</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Keine leeren Garantien</h3>
                <p className="text-base text-gray-600 leading-relaxed">Niemand kann garantieren, dass ChatGPT dich morgen empfiehlt. Was wir garantieren: nachweisbare Struktur-Arbeit, die deine Chancen auf KI-Zitierungen systematisch erhoeht. Ehrliche Einschaetzung statt Verkaufsdruck.</p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ===== UEBER VADIM SHCHEPIN ===== */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Ueber Vadim Shchepin
            </h2>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="flex-1 space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-black">Senior Software Engineer mit Fokus auf AI SEO.</strong> Ueber 10 Jahre Erfahrung in Software-Entwicklung, Web-Architektur und datengetriebenen Systemen. Entwickler eigener Software-Plattformen mit echten Nutzern.
                  </p>
                  <p>
                    Standort: <strong className="text-black">Hamburg-Altona/Ottensen.</strong> Keine verteilte Agentur mit anonymen Mitarbeitern, sondern ein Ansprechpartner, der dein Projekt persoenlich betreut.
                  </p>
                  <p>
                    Der Hintergrund als Software-Architekt ist der entscheidende Unterschied: KI-Sichtbarkeit erfordert tiefes technisches Verstaendnis von LLM-Architektur, Crawling-Mechanismen und strukturierten Daten. Marketing-Wissen allein reicht nicht.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-0.5">&#10003;</span>
                      <span>Ueber 10 Jahre Software- und Web-Development-Erfahrung</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-0.5">&#10003;</span>
                      <span>Entwickler eigener erfolgreicher Software-Plattformen</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-0.5">&#10003;</span>
                      <span>Persoenliche Betreuung, kein Agentur-Overhead</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-accent shrink-0 mt-0.5">&#10003;</span>
                      <span>Ansaessig in Hamburg-Altona</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <a
                      href="/ueber-mich"
                      className="text-brand-accent font-medium hover:underline transition-colors"
                    >
                      Mehr ueber Vadim erfahren &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ===== WAS DU BEKOMMST ===== */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
              Was du bekommst
            </h2>
            <p className="text-lg text-gray-500 mb-10">
              Fuenf Bausteine fuer messbare KI-Sichtbarkeit. Kein Baustein ist optional.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {SERVICES.map((service, i) => (
                <div key={service.title} className={`bg-white border border-gray-100 rounded-2xl p-6 ${i === SERVICES.length - 1 ? 'md:col-span-2' : ''}`}>
                  <h3 className="text-lg font-semibold text-black mb-2">{service.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ===== FUER WEN IST DAS? ===== */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
              Fuer wen ist das?
            </h2>
            <p className="text-lg text-gray-500 mb-10">
              AI SEO Beratung ist nicht fuer jeden. Hier ist, fuer wen es sich lohnt.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {TARGET_AUDIENCE.map((item) => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Mid-page CTA */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-4">
          <FadeIn>
            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <div className="flex-1">
                <p className="text-lg font-semibold mb-1">Du erkennst dich wieder?</p>
                <p className="text-base text-gray-300">Finde in 48 Stunden heraus, wie KI-Systeme dein Unternehmen aktuell bewerten. Kostenlos und unverbindlich.</p>
              </div>
              <Button href="/ai-sichtbarkeit-now" text="Kurzanalyse anfordern" primary />
            </div>
          </FadeIn>
        </section>

        {/* ===== RED FLAGS / GREEN FLAGS ===== */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
              Woran du eine gute AI SEO Agentur erkennst
            </h2>
            <p className="text-lg text-gray-500 mb-10">
              Nicht jeder, der AI SEO anbietet, versteht, was dahintersteckt. Hier sind klare Signale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Red Flags */}
              <div className="bg-white border border-red-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-red-600 mb-4">Red Flags</h3>
                <ul className="space-y-3 text-base text-gray-600 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0 mt-1">&#10005;</span>
                    <span>&quot;Garantierte KI-Rankings&quot;. Niemand kann das garantieren, weil KI-Antworten kontextabhaengig sind.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0 mt-1">&#10005;</span>
                    <span>Fokus auf Vanity-Metriken wie Wortanzahl oder Keyword-Dichte statt auf tatsaechliche KI-Zitierungen.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0 mt-1">&#10005;</span>
                    <span>Keine eigene Messmethodik. Wer nicht zeigen kann, wie er KI-Sichtbarkeit trackt, versteht sie vermutlich nicht.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0 mt-1">&#10005;</span>
                    <span>Standardisierte &quot;AI SEO Pakete&quot;. Das Feld ist zu jung und zu individuell fuer Paketloesungen.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0 mt-1">&#10005;</span>
                    <span>Kein technisches Team. AI SEO ohne Software-Verstaendnis ist wie Autotuning ohne Werkstatt.</span>
                  </li>
                </ul>
              </div>

              {/* Green Flags */}
              <div className="bg-white border border-green-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-brand-accent mb-4">Green Flags</h3>
                <ul className="space-y-3 text-base text-gray-600 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                    <span>Transparente Methodik: klar erklaert, was sie tun und warum.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                    <span>Misst tatsaechliche KI-Zitierungen, nicht nur Google-Rankings.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                    <span>Verbindet technisches SEO mit Content-Strategie und Autoritaets-Aufbau.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                    <span>Versteht E-E-A-T im KI-Kontext und kann erklaeren, warum das relevant ist.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                    <span>Ehrliche Einschaetzung statt Verkaufsdruck. Sagt auch, wenn AI SEO fuer dich noch keinen Sinn macht.</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ===== SO LAEUFT DIE ZUSAMMENARBEIT AB ===== */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
              So laeuft die Zusammenarbeit ab
            </h2>
            <p className="text-lg text-gray-500 mb-10">
              Kein Agentur-Prozess mit Kickoff-Workshops und Quartals-Reviews. Stattdessen: schneller Start, klare Schritte, messbare Ergebnisse.
            </p>

            <div className="space-y-0">
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                  <div className="w-px h-full bg-brand-accent/20 mt-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-black mb-1">Kostenlose Kurzanalyse</h3>
                  <p className="text-base text-gray-600 leading-relaxed">Du erhaeltst innerhalb von 48 Stunden eine erste Einschaetzung: Wie sichtbar ist dein Unternehmen aktuell in ChatGPT, Perplexity und Google AI? Wo liegen die groessten Chancen? Keine Verpflichtung.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
                  <div className="w-px h-full bg-brand-accent/20 mt-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-black mb-1">Tiefenanalyse & Strategie</h3>
                  <p className="text-base text-gray-600 leading-relaxed">Vollstaendiges KI-Sichtbarkeits-Audit ueber alle relevanten Plattformen. Wettbewerbsanalyse. Individuelle Strategie mit priorisierten Massnahmen. Du weisst genau, was zu tun ist und warum.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
                  <div className="w-px h-full bg-brand-accent/20 mt-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-black mb-1">Umsetzung</h3>
                  <p className="text-base text-gray-600 leading-relaxed">Technische Optimierung, Content-Anpassung, Schema-Markup, llms.txt und Autoritaets-Aufbau. Jeder Schritt ist nachvollziehbar dokumentiert. Keine Black Box.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-sm shrink-0">4</div>
                </div>
                <div className="pb-2">
                  <h3 className="text-lg font-semibold text-black mb-1">Monitoring & Iteration</h3>
                  <p className="text-base text-gray-600 leading-relaxed">Monatliches Reporting mit echten KI-Zitierungsdaten. Was funktioniert? Was muss angepasst werden? Kontinuierliche Optimierung basierend auf Daten, nicht auf Annahmen.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ===== KOSTENUEBERSICHT ===== */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
              Kostenuebersicht: Was AI SEO Beratung kostet
            </h2>
            <p className="text-lg text-gray-500 mb-8">
              Ehrliche Orientierung. Kein Versteckspiel bei Preisen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">Einmaliges Audit</h3>
                <p className="text-2xl font-semibold text-brand-accent mb-2">500 - 2.000 &euro;</p>
                <p className="text-base text-gray-600 leading-relaxed">Vollstaendige Bestandsaufnahme deiner KI-Sichtbarkeit ueber alle relevanten Plattformen. Inkl. Handlungsempfehlungen.</p>
              </div>
              <div className="bg-white border border-brand-accent/30 rounded-2xl p-6 relative">
                <span className="absolute -top-3 left-6 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full">Am beliebtesten</span>
                <h3 className="text-lg font-semibold text-black mb-2">Laufende Optimierung</h3>
                <p className="text-2xl font-semibold text-brand-accent mb-2">1.000 - 5.000 &euro;/Monat</p>
                <p className="text-base text-gray-600 leading-relaxed">Kontinuierliche Optimierung, Content-Anpassung, Monitoring und Autoritaets-Aufbau. Monatliches KI-Sichtbarkeits-Reporting.</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">Projektbasiert</h3>
                <p className="text-2xl font-semibold text-brand-accent mb-2">Individuell</p>
                <p className="text-base text-gray-600 leading-relaxed">Einmalige Projekte wie Schema-Optimierung, llms.txt-Setup oder Content-Ueberarbeitung. Umfang bestimmt den Preis.</p>
              </div>
            </div>
            <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-xl p-5 mt-6">
              <p className="text-base text-gray-700 leading-relaxed">
                <strong className="text-black">Erster Schritt immer kostenlos:</strong> Die Kurzanalyse zeigt dir, wo du stehst und ob sich eine Zusammenarbeit lohnt. Kein Verkaufsdruck, keine Verpflichtung.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* ===== HAMBURG ALS KI-SICHTBARKEITS-STANDORT ===== */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Hamburg als KI-Sichtbarkeits-Standort
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Hamburg ist Deutschlands zweitgroesster Tech-Hub und einer der staerksten Medienstandorte Europas. Die Stadt vereint Technologie, Medien, spezialisierte Dienstleistungen und eine starke Gruenderszene. Genau diese Branchen profitieren am meisten von KI-Sichtbarkeit, weil ihre Zielgruppen KI-Tools frueher adaptiert haben als der Durchschnitt.
              </p>
              <p>
                <strong className="text-black">Der lokale Vorteil:</strong> Wenn ChatGPT oder Perplexity nach einem Anbieter in Hamburg gefragt wird, zieht die KI lokale Signale heran: Google Business Profile, regionale Erwahnungen, Branchenverzeichnisse. Unternehmen in Altona, Ottensen, der HafenCity oder Eimsbuettel, die diese Signale gezielt staerken, erhoehen ihre Chancen auf KI-Empfehlungen erheblich.
              </p>
              <p>
                <strong className="text-black">Das Zeitfenster:</strong> Die meisten Hamburger Wettbewerber konzentrieren sich weiterhin ausschliesslich auf klassisches SEO. Wer jetzt mit AI SEO anfaengt, hat in vielen Branchen noch wenig direkte Konkurrenz. Dieses Fenster schliesst sich, wenn die grossen Agenturen das Thema in ihre Standard-Pakete aufnehmen.
              </p>
              <p>
                <strong className="text-black">Branchen mit dem groessten Hebel in Hamburg:</strong> Rechtsanwaelte, Steuerberater, Aerzte und Therapeuten, Architekten, IT-Dienstleister, Unternehmensberater, Immobilienmakler und spezialisierte Handwerksbetriebe. Ueberall dort, wo Vertrauen und Empfehlungen den Unterschied machen, wird KI-Sichtbarkeit zum entscheidenden Wettbewerbsvorteil.
              </p>
              <p>
                <strong className="text-black">SEO in Altona und Ottensen:</strong> Als ansaessiger Spezialist in Hamburg-Altona kennt Vadim Shchepin die lokale Unternehmenslandschaft. Kurze Wege, persoenliche Treffen und ein echtes Verstaendnis fuer den Hamburger Markt - das ist der Vorteil gegenueber Remote-Agenturen ohne lokalen Bezug.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-10">
              Haeufig gestellte Fragen zur AI SEO Agentur
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

        {/* ===== QUELLEN ===== */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Quellen und weiterfuehrende Informationen
            </h2>
            <ul className="space-y-3 text-base text-gray-600 leading-relaxed">
              <li>
                <span className="font-medium text-black">Aggarwal et al. (2023):</span>{' '}
                &quot;GEO: Generative Engine Optimization&quot; - die erste akademische Studie zu Generative Engine Optimization und wie Inhalte fuer KI-Zitierbarkeit optimiert werden koennen.
              </li>
              <li>
                <span className="font-medium text-black">Google Search Central:</span>{' '}
                Dokumentation zu strukturierten Daten und Schema.org Markup. Grundlage fuer die technische KI-Sichtbarkeits-Optimierung.
              </li>
              <li>
                <span className="font-medium text-black">Search Engine Journal:</span>{' '}
                Laufende Berichterstattung ueber die Entwicklung von AI Overviews und deren Einfluss auf SEO-Strategien.
              </li>
              <li>
                <span className="font-medium text-black">Gartner (2025):</span>{' '}
                Prognose: Bis 2026 werden 25% aller Suchanfragen ueber KI-gesteuerte Interfaces beantwortet. Das unterstreicht die Dringlichkeit von AI SEO.
              </li>
            </ul>
          </FadeIn>
        </section>

        {/* ===== VERWANDTE GUIDES ===== */}
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
                  href="/wissen/sichtbarkeit-in-chatgpt"
                  className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
                >
                  <p className="text-base font-semibold text-black group-hover:text-brand-accent transition-colors">Sichtbarkeit in ChatGPT</p>
                  <p className="text-sm text-gray-500 mt-1">Konkrete Strategien fuer ChatGPT-Zitierungen.</p>
                </a>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ===== WARUM JETZT? ===== */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Warum jetzt der richtige Zeitpunkt ist
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                KI-gesteuerte Suche waechst exponentiell. Google integriert AI Overviews in immer mehr Suchanfragen. ChatGPT hat ueber 200 Millionen woechentliche Nutzer. Perplexity waechst zweistellig pro Monat. Die Frage ist nicht ob, sondern wann deine Zielgruppe ueber KI nach Anbietern sucht.
              </p>
              <p>
                <strong className="text-black">Der First-Mover-Vorteil ist real:</strong> KI-Systeme bevorzugen etablierte, konsistente Quellen. Wer jetzt die Grundlagen legt - strukturierte Daten, zitierfaehige Inhalte, konsistente Praesenz - baut einen Vorsprung auf, den Nachzuegler nur schwer aufholen koennen.
              </p>
              <p>
                <strong className="text-black">Die Kosten des Wartens:</strong> Jeder Monat ohne KI-Sichtbarkeit bedeutet verpasste Anfragen von potenziellen Kunden, die ueber ChatGPT, Perplexity oder Google AI nach genau deiner Leistung suchen. Diese Anfragen gehen an deine Wettbewerber - oder an niemanden, weil die KI dich nicht kennt.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* ===== STRONG CTA ===== */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <FadeIn>
            <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] mb-4">
                Bereit fuer echte KI-Sichtbarkeit?
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto mb-4">
                Keine Pakete. Keine Templates. Persoenliche Analyse und ehrliche Einschaetzung von einem Software-Architekten mit ueber 10 Jahren Erfahrung.
              </p>
              <p className="text-base text-gray-400 leading-relaxed max-w-xl mx-auto mb-8">
                Kostenlose Kurzanalyse: Finde in 48 Stunden heraus, ob und wie KI-Systeme dein Unternehmen aktuell empfehlen. Kein Verkaufsdruck, keine Verpflichtung.
              </p>
              <Button href="/ai-sichtbarkeit-now" text="Kostenlose Kurzanalyse anfordern" primary />
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}
