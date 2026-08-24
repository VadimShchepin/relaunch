import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { CheckIcon, ArrowRightIcon } from '@/components/ui/Icons';
import { PlatformIconLoop } from '@/components/ui/PlatformIconLoop';
import { AntigravityBackground } from '@/components/ui/AntigravityBackground';
import { DataChart } from '@/components/ui/DataChart';
import { CheckForm } from './CheckForm';

/* ---------------------------------------------------------------------------
   Anrede: diese Seite siezt. Das ist nicht Zufall und kein Bruch mit dem
   Rest der Site, sondern der bestehende H1 und alle indexierten Ueberschriften
   sind gesiezt ("Wird Ihr Unternehmen ...", "Warum KI Ihre Website ..."). Eine
   halbe Umstellung, gesiezte Ueberschriften ueber geduzten Absaetzen, waere
   schlechter als beides. Deshalb bleibt die Seite in sich konsistent bei Sie.
--------------------------------------------------------------------------- */

/* Fester Leistungsumfang, unveraendert. Preis und Dauer stehen so schon im
   Title-Tag der Route, deshalb sind sie hier wortgleich. */
const SCOPE = [
  { label: 'Preis', value: '1.500 € netto', note: 'einmalig, kein Abo' },
  { label: 'Dauer', value: '10 bis 14 Tage', note: 'ab Freigabe der Inhalte' },
  { label: 'Umfang', value: 'Startseite + 2 Seiten', note: 'Leistung und Vertrauen' },
  { label: 'Bindung', value: 'keine', note: 'keine Agenturbindung' },
];

const BLOCKERS = [
  {
    problem: 'Leistungen sind für KI nicht eindeutig zuzuordnen',
    consequence: 'Das Modell weiß nicht, was Sie anbieten, und nennt lieber jemanden, bei dem es sicher ist.',
  },
  {
    problem: 'Hamburg-Bezug (Stadtteile / Einzugsgebiet) ist zu schwach oder fehlt',
    consequence: 'Bei einer Frage nach Hamburg fallen Sie aus der Auswahl, obwohl Sie um die Ecke sitzen.',
  },
  {
    problem: 'Seiten liefern Marketing, aber keine klaren Antworten',
    consequence: 'Es gibt keinen Satz, den eine KI zitieren könnte, also zitiert sie einen anderen.',
  },
];

const STEPS = [
  {
    n: '1)',
    title: 'Analyse',
    body: 'Ich prüfe, ob und wie Ihr Unternehmen in ChatGPT, Perplexity und Google AI auftaucht, und warum (noch) nicht.',
    out: 'Prompt-Liste mit Ist-Stand',
  },
  {
    n: '2)',
    title: 'Website-Upgrade',
    body: 'Startseite und zwei gezielte Unterseiten (Leistung, Vertrauen). Inhalte so strukturiert, dass KI-Systeme sie zuordnen können.',
    out: '3 überarbeitete Seiten',
  },
  {
    n: '3)',
    title: 'Technische Basis',
    body: 'Strukturierte Daten (Schema), saubere Struktur, interne Verlinkung. Ohne Overengineering.',
    out: 'Schema plus Linkpfade',
  },
  {
    n: '4)',
    title: 'Indexierung',
    body: 'Search-Console-Check und saubere Indexierung der neuen Seiten, damit die Arbeit überhaupt gelesen wird.',
    out: 'Indexierungsnachweis',
  },
  {
    n: '5)',
    title: 'Erklärung',
    body: 'Sie verstehen, was geändert wurde und warum es relevant ist. Kein Report, den niemand liest.',
    out: 'Durchsprache, 30 Minuten',
  },
];

/* Copilot-Zitate je Website, Drei-Monats-Fenster, aus dem AI-Performance-Report
   der Bing Webmaster Tools. Dieselben Werte stehen auf /ergebnisse. Nichts
   gerundet, nichts hochgerechnet, keine Kundenzahl als eigene ausgegeben. */
const CITATIONS = [
  { label: 'aiseo.hamburg', short: 'aiseo', value: 800, note: 'eigene Website' },
  { label: 'dsgvoschulfotos.de', short: 'dsgvo', value: 281, note: 'aus dem Stand' },
  { label: 'dybeauty.de', short: 'dybeauty', value: 225, note: 'neuer Kanal' },
];

const SEARCH_FACTS = [
  { value: '+55 %', label: 'Klicks in 30 Tagen', note: 'Hamburger Handwerksbetrieb, Search Console' },
  { value: '+61 %', label: 'Impressionen in 30 Tagen', note: '6.660 Impressionen im selben Fenster' },
  { value: '29', label: 'Anrufe und WhatsApp-Kontakte', note: 'direkt aus der Suche, 30 Tage' },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI-Sichtbarkeits-Upgrade Hamburg',
  serviceType: 'Generative Engine Optimization (GEO)',
  url: 'https://aiseo.hamburg/ai-sichtbarkeits-upgrade-hamburg',
  description:
    'Einmaliges AI-Sichtbarkeits-Upgrade für Hamburger Unternehmen: Analyse, Startseite plus zwei Unterseiten, strukturierte Daten und Indexierung in 10 bis 14 Tagen.',
  provider: { '@id': 'https://aiseo.hamburg/#organization' },
  areaServed: { '@type': 'City', name: 'Hamburg' },
  offers: {
    '@type': 'Offer',
    price: '1500',
    priceCurrency: 'EUR',
    description: 'Einmaliges Upgrade, 1.500 € netto',
  },
};

export default function AISichtbarkeitsUpgradeHamburgPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />

      <main>
        {/* ========== HERO: 7/5. Links die Frage, rechts der komplette Deal als
            Definitionsliste. Wer nur den Preis wissen will, muss nicht scrollen. ========== */}
        <section className="relative overflow-hidden pt-28 pb-block lg:pt-32">
          <div className="absolute top-0 right-0 z-0 h-[600px] w-[600px] rounded-full bg-brand-accent/5 blur-3xl" />
          <AntigravityBackground />

          <div className="relative z-10 mx-auto grid max-w-article gap-block px-6 lg:grid-cols-12 lg:gap-x-rule lg:px-12">
            <div className="lg:col-span-7">
              <FadeIn>
                <p className="text-micro uppercase tracking-eyebrow text-brand-accent-ink">Für Hamburger Unternehmen</p>
                {/* Zehn Woerter Frage: auf text-display braeuchte der H1 fuenf
                    Zeilen und 336px Hoehe. text-title haelt ihn bei drei. */}
                <h1 className="mt-flow text-heading sm:text-title font-semibold text-black">
                  Wird Ihr Unternehmen von <span className="text-brand-accent">ChatGPT</span> als Anbieter für{' '}
                  <span className="text-brand-accent">Hamburg</span> genannt?
                </h1>
                <p className="mt-flow max-w-measure text-lead text-brand-muted">
                  Kunden fragen KI-Systeme längst nach Empfehlungen. Viele Websites werden dabei nicht berücksichtigt, obwohl das Angebot gut ist. Für Dienstleister, Praxen und lokale Betriebe mit bestehender Website in Hamburg und Umgebung.
                </p>
                <div className="mt-stack flex flex-col gap-4 sm:flex-row">
                  <Button href="#kontakt" primary className="!py-4 !px-6 !pl-8 group">
                    <span className="relative z-10 flex items-center gap-3">
                      Kostenlose Prüfung anfragen
                      <PlatformIconLoop className="!p-0" iconClassName="!w-5 !h-5" />
                    </span>
                  </Button>
                  <Button href="#angebot" text="Was drin ist" className="!py-4 !px-8" />
                </div>
                <p className="mt-flow flex flex-wrap items-center gap-x-4 gap-y-2 text-meta text-brand-subtle">
                  {['Kostenlos', 'Unverbindlich', 'Direkt vom Experten'].map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-brand-accent-ink" />
                      {item}
                    </span>
                  ))}
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-5 lg:pt-2">
              <FadeIn delay={120}>
                <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Der Deal in vier Zeilen</p>
                <dl className="mt-flow">
                  {SCOPE.map((row) => (
                    <div key={row.label} className="flex items-baseline gap-flow border-t border-brand-line py-3">
                      <dt className="w-20 shrink-0 text-micro uppercase tracking-eyebrow text-brand-subtle">{row.label}</dt>
                      <dd>
                        <span className="text-lead font-semibold tabular-nums text-brand-text">{row.value}</span>
                        <span className="block text-micro text-brand-subtle">{row.note}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-flow border-t border-brand-line pt-3 text-micro text-brand-subtle">
                  Keine Ranking- oder Lead-Garantie. Ziel ist, dass KI-Systeme Ihr Angebot technisch und inhaltlich korrekt verstehen können.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ========== PROBLEM: drei Blocker, je Zeile eine Ursache und ihre Folge.
            Vorher lag hier eine rote Alarmbox; die Konsequenz steht jetzt im Text. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Das Problem</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    Warum KI Ihre Website oft nicht empfiehlt
                  </h2>
                </div>

                <div>
                  <p className="max-w-measure text-body text-brand-muted">
                    Nicht wegen schlechter Qualität, sondern weil KI-Systeme Inhalte anders interpretieren als Google. Drei Ursachen sehe ich in Hamburg immer wieder.
                  </p>

                  <div className="mt-flow">
                    {BLOCKERS.map((item, i) => (
                      <div key={item.problem} className="flex gap-flow border-t border-brand-edge py-3">
                        <span className="w-6 shrink-0 pt-1 text-micro tabular-nums text-brand-subtle">{`0${i + 1}`}</span>
                        <div>
                          <p className="text-body font-medium text-brand-text">{item.problem}</p>
                          <p className="mt-1 text-meta text-brand-muted">{item.consequence}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-flow border-t border-brand-edge pt-3 text-body font-medium text-brand-text">
                    Ergebnis: Andere Betriebe werden genannt, Ihrer nicht.
                  </p>
                  <p className="mt-2 text-meta text-brand-subtle">
                    Wie lokale KI-Antworten zustande kommen, steht ausführlich in{' '}
                    <Link href="/wissen/lokale-ki-sichtbarkeit" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      lokale KI-Sichtbarkeit
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== ANGEBOT: fuenf Schritte in denselben zwei Spuren wie oben,
            plus eine Ergebnisspalte, damit jeder Schritt ein Lieferobjekt hat. ========== */}
        <section id="angebot" className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Das Upgrade</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    AI-Sichtbarkeits-Upgrade (einmalig)
                  </h2>
                  <p className="mt-flow text-meta text-brand-muted">
                    Klarer Scope. Kein Abo. Keine Agenturbindung.
                  </p>
                  <Link href="/leistungen" className="mt-flow inline-flex items-center gap-1.5 border-t border-brand-line pt-3 text-meta font-medium text-brand-accent-ink hover:gap-2.5">
                    Laufende Betreuung statt Einmalprojekt
                    <ArrowRightIcon className="w-3 h-3" />
                  </Link>
                </div>

                <div>
                  <div className="hidden lg:grid lg:grid-cols-[1fr_160px] lg:gap-x-flow">
                    <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Schritt</p>
                    <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Sie bekommen</p>
                  </div>

                  <div className="mt-2">
                    {STEPS.map((step) => (
                      <div key={step.title} className="grid gap-y-1.5 border-t border-brand-edge py-3 lg:grid-cols-[1fr_160px] lg:gap-x-flow">
                        <div>
                          <h3 className="text-lead font-semibold text-brand-text">
                            <span className="tabular-nums text-brand-subtle">{step.n}</span> {step.title}
                          </h3>
                          <p className="max-w-measure text-meta text-brand-muted">{step.body}</p>
                        </div>
                        <p className="flex items-start gap-2 text-micro text-brand-subtle lg:pt-1">
                          <CheckIcon className="mt-0.5 w-3 h-3 shrink-0 text-brand-accent-ink" />
                          {step.out}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== BELEGE: das Diagramm ersetzt zwei Bilder. Das eine war ein
            KI-Render mit eingebranntem Wort "GROWTH ANALYTICS", das andere ein
            Analytics-Screenshot mit 5px-Labels. Beide Bildunterschriften
            behaupteten Zahlen, die im Bild nicht standen. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-7">
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Proof</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black">
                    Aktuelle Signale aus der Praxis
                  </h2>
                  <div className="mt-stack rounded-card border border-brand-line bg-white p-4 sm:p-5">
                    <DataChart
                      frame={false}
                      variant="column"
                      headingLevel="p"
                      title="KI-Zitate in drei Monaten"
                      subject="Microsoft Copilot"
                      axis={{ title: 'Zitate' }}
                      highlight="peak"
                      points={CITATIONS}
                      stats={[
                        { label: 'Summe', value: '1.306 Zitate' },
                        { label: 'Quelle', value: 'Bing WMT' },
                        { label: 'Zeitraum', value: 'bis 13.06.2026' },
                      ]}
                      table={{ label: 'Zahlen als Tabelle', heads: ['Website', 'Zitate'] }}
                    />
                  </div>
                  <p className="mt-3 border-t border-brand-hairline pt-3 text-meta text-brand-subtle">
                    Drei Websites, dieselbe Methode, gemessen im AI-Performance-Report der Bing Webmaster Tools, Zeitraum 15.03. bis 13.06.2026. aiseo.hamburg ist die eigene Seite, die anderen zwei sind Projekte. Vorher lagen alle drei bei nahezu null.{' '}
                    <Link href="/ergebnisse" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      Belege mit Screenshots
                    </Link>
                  </p>
                </div>

                <div className="lg:col-span-5 lg:pt-8">
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Und in der klassischen Suche</p>
                  <dl className="mt-flow">
                    {SEARCH_FACTS.map((fact) => (
                      <div key={fact.label} className="flex items-baseline gap-flow border-t border-brand-line py-3">
                        <dt className="w-20 shrink-0 text-subheading font-semibold tabular-nums text-brand-text">{fact.value}</dt>
                        <dd className="text-meta text-brand-muted">
                          {fact.label}
                          <span className="block text-micro text-brand-subtle">{fact.note}</span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-flow border-t border-brand-line pt-3 text-micro text-brand-subtle">
                    Ergebnisse hängen von Markt und Wettbewerb ab. Es werden keine Rankings und keine Leads garantiert.{' '}
                    <Link href="/wissen/ki-sichtbarkeit-messen" className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4">
                      So wird gemessen
                    </Link>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== PREIS: dunkles Vollband statt gerundeter Karte im Karton. ========== */}
        <section className="bg-brand-night py-rule text-white">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-line">Preis</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold lg:text-subheading">
                    AI-Sichtbarkeits-Upgrade
                  </h2>
                  <p className="mt-flow border-t border-white/15 pt-3 text-micro text-brand-line">
                    Nicht enthalten: Anzeigen, Shop-Umbau, Übersetzungen, neue Fotos.
                  </p>
                </div>

                <div>
                  <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-title lg:text-display font-semibold tabular-nums text-brand-accent">1.500 €</span>
                    <span className="text-lead text-brand-line">netto, einmalig</span>
                  </p>
                  <div className="mt-flow flex flex-wrap gap-x-stack gap-y-2 border-t border-white/15 pt-3 text-meta text-brand-line">
                    <span className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-brand-accent" />
                      Dauer 10 bis 14 Tage
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-brand-accent" />
                      Startseite plus zwei Unterseiten
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-brand-accent" />
                      Kein Abo
                    </span>
                  </div>
                  <p className="mt-flow max-w-measure border-t border-white/15 pt-3 text-body text-brand-line">
                    Wenn das Upgrade für Ihre Situation keinen sinnvollen Mehrwert bringt, sage ich das offen und setze es nicht um.
                  </p>
                  <div className="mt-stack flex flex-wrap items-center gap-x-stack gap-y-3">
                    <Button href="#kontakt" primary text="Kostenlose Prüfung anfragen" className="!py-3 !px-6" />
                    <Link href="/preise" className="text-meta font-medium text-brand-accent hover:underline">
                      Alle Pakete im Vergleich
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== KONTAKT: Foto links haelt die Spalte, Formular rechts.
            Das Bild ist 640x800 und wird auf 320x400 gezeigt, also echtes 2x. ========== */}
        <section id="kontakt" className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-5">
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Kontakt</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black">
                    Kostenlose AI-Sichtbarkeits-Prüfung
                  </h2>
                  <p className="mt-flow text-body text-brand-muted">
                    Kurz und unverbindlich. Ich antworte in 24 bis 48 Stunden und sage Ihnen, ob sich das Upgrade für Ihren Betrieb lohnt.
                  </p>

                  {/* Drei Zeilen statt Leerraum: der Absender soll wissen, was
                      nach dem Klick passiert, bevor er fuenf Felder ausfuellt. */}
                  <ol className="mt-flow">
                    {[
                      'Sie schicken Website und Angebot in einem Satz.',
                      'Ich stelle drei echte Kundenfragen in ChatGPT und Perplexity.',
                      'Sie bekommen die Antworten und eine ehrliche Einschätzung.',
                    ].map((line, i) => (
                      <li key={line} className="flex gap-flow border-t border-brand-line py-2.5 text-meta text-brand-muted">
                        <span className="w-4 shrink-0 text-micro tabular-nums text-brand-subtle">{i + 1}</span>
                        {line}
                      </li>
                    ))}
                  </ol>

                  {/* 640x800 Datei, Anzeige nie breiter als 224px: echtes 2x auf
                      jedem Viewport, kein Upscale, keine zweite Datei noetig. */}
                  <img
                    src="/image/hamburg/speicherstadt-hamburg.webp"
                    width={640}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    alt="Speicherstadt in Hamburg, Backsteinlager an einem Kanal"
                    className="mt-stack w-full max-w-56 rounded-card border border-brand-line object-cover"
                  />
                  <p className="mt-3 text-micro text-brand-subtle">
                    Hamburg und Umgebung. Ich arbeite mit Betrieben, die eine bestehende Website haben.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <CheckForm />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
