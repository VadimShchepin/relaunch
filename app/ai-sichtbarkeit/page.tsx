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
import { KurzanalyseForm, NewsletterInline } from './Forms';

/* Dieselben drei Kennzahlen wie auf /leistungen und /ergebnisse, damit die Site
   an jeder Stelle dieselbe Zahl nennt. Quellen: AI-Performance-Report der Bing
   Webmaster Tools und Google Search Console. Stand August 2026. */
const FACTS = [
  { value: '800', label: 'KI-Zitate in 3 Monaten', note: 'aiseo.hamburg, Copilot, 15.03. bis 13.06.2026' },
  { value: '+847 %', label: 'KI-Traffic', note: 'KinderAlbum, dokumentiert' },
  { value: '+55 %', label: 'Klicks in 30 Tagen', note: 'Handwerksbetrieb, Search Console' },
];

const MECHANICS = [
  { title: 'KI sucht nicht', body: 'sie antwortet' },
  { title: 'Antworten basieren', body: 'auf Quellen und Vertrauen' },
  { title: 'Vertrauen ist', body: 'bauen, nicht raten' },
];

const FITS = [
  'Hamburger Dienstleister und lokale Unternehmen, B2C oder B2B lokal',
  'ihr habt Website und Marke, aber KI nennt euch nie',
  'ihr wollt nicht nur Reichweite, sondern Anfragen',
  'ihr könnt Entscheidungen treffen oder sitzt nah dran',
];

const FITS_NOT = [
  'ihr wollt AI-SEO-Hacks ohne Umsetzung',
  'ihr sucht eine Agentur, die 50 Blogposts rausballert',
  'ihr wollt kurzfristige Tricks statt saubere Basis',
];

const APPROACH = [
  {
    n: '01',
    title: 'Sichtbarkeits-Check in LLMs',
    body: 'Welche Fragen führen zu euch, und wo taucht ihr nicht auf? Getestet mit einer festen Prompt-Liste, nicht mit einer Stichprobe.',
  },
  {
    n: '02',
    title: 'Website-Signale & Struktur',
    body: 'E-E-A-T, Informationsarchitektur, interne Verlinkung, Entitäten, Schema, Performance.',
  },
  {
    n: '03',
    title: 'Content, der zitiert wird',
    body: 'Nicht mehr Content, sondern die richtigen Seiten: Expertenseite, Angebot, FAQ, lokale Belege.',
  },
  {
    n: '04',
    title: 'Messung & Iteration',
    body: 'Tracking der Anfragen und Monitoring der KI-Nennungen, mit denselben Prompts wie im Check.',
  },
];

const ANALYSE_POINTS = [
  'Live im Call: kurzer Blick auf eure Website und eure KI-Nennungen',
  'Drei klare Punkte: was blockiert euch, was bringt am meisten, was ist unnötig',
  'Wenn es passt: nächster Schritt als konkreter Vorschlag',
  'Kein schriftlicher Report, kein Audit-PDF, keine Verpflichtung',
];

const URGENCY = [
  'KI-Antworten stabilisieren sich gerade.',
  'Wer heute als Quelle gelernt wird, bleibt es oft langfristig.',
  'Später nachziehen ist deutlich schwerer.',
];

const CASES = [
  {
    name: 'KinderAlbum / DSGVO-Schulfotos',
    url: 'https://dsgvoschulfotos.de/',
    problem: 'DSGVO macht Fotos teilen für Schulen fast unmöglich.',
    result: '281 Copilot-Zitate in drei Monaten, aus dem Stand, plus Anfragen über ChatGPT.',
    learning: 'Vertrauen und klare Struktur schlagen Anzeigen.',
    read: { href: '/wissen/case-study-kinderalbum', label: 'Fallstudie' },
  },
  {
    name: 'Blitz (lokale Dienstleistung)',
    url: 'https://www.blitz-hamburg.de/',
    problem: 'Neue Website, Anfragen kamen fast nur über Empfehlungen.',
    result: 'Plus 55 Prozent Klicks und plus 61 Prozent Impressionen in 30 Tagen, dazu 29 Anrufe und WhatsApp-Kontakte.',
    learning: 'Klarheit über die Zielgruppe schlägt breites Marketing.',
    read: { href: '/wissen/case-study-blitz-hamburg', label: 'Fallstudie' },
  },
  {
    name: 'Solovei (System & Markt)',
    url: 'https://www.solovei-beauty.com/en',
    problem: 'System sauber gebaut, Geschäftsmodell mehrfach angepasst.',
    result: 'Der Markt entschied anders als geplant, das Projekt wurde gestoppt.',
    learning: 'Auch das gehört hierher: Technik rettet kein Modell, das der Markt nicht will.',
    read: null,
  },
];

/* Referrer-Bericht KinderAlbum, Projekt-Analytics, Januar 2026. Exakt die Werte
   aus dem Screenshot, den diese Seite vorher als 567px breites Bild zeigte:
   dort standen die Zahlen bei 5 bis 6px und in Fremdfarben. Dieselbe Tabelle
   steht auf /wissen/case-study-kinderalbum. */
const REFERRERS = [
  { label: 'chatgpt.com', value: 32, note: '44 Prozent der zugeordneten Besucher' },
  { label: 'deref-gmx.net', value: 20, note: '27 Prozent, Weiterleitung aus Mail' },
  { label: 'google.com', value: 17, note: '24 Prozent' },
  { label: 'mail.google.com', value: 2 },
  { label: 'com.google.android.gm', value: 1 },
];

const CREDENTIALS = [
  'Senior Software Engineer, Architektur und Qualität, nicht nur Marketing',
  'Erfahrung mit Tracking und Daten: Conversions statt Vanity-Metriken',
  'Content und Technik in einer Hand: Struktur, Performance, Schema',
  'Fokus auf Hamburg und lokale Unternehmen',
];

const FAQS = [
  {
    q: 'Was ist KI-Sichtbarkeit überhaupt?',
    a: 'Genannt und empfohlen werden, wenn KI Fragen beantwortet: in ChatGPT, Perplexity, Google AI Overviews und Microsoft Copilot.',
  },
  {
    q: 'Ist das nur SEO?',
    a: 'Nein. SEO ist Teil der Basis, aber LLMs bewerten Vertrauen und Struktur anders als eine Trefferliste.',
  },
  {
    q: 'Wie schnell sieht man Ergebnisse?',
    a: 'Je nach Ausgangslage erste Effekte in Wochen, Stabilität über Monate. Bei dsgvoschulfotos.de lagen zwischen Start und 281 Zitaten drei Monate.',
  },
  {
    q: 'Brauchen wir eine neue Website?',
    a: 'Meist nicht. Oft reichen klare Angebotsseiten, saubere Struktur und Belege.',
  },
  {
    q: 'Was kostet das?',
    a: 'Einstieg über die kostenlose Kurzanalyse, danach Umsetzung je nach Umfang, als Fixpreis oder auf Projektbasis. Die Pakete stehen auf der Preise-Seite.',
  },
  {
    q: 'Arbeitest du alleine?',
    a: 'Ja. Bei Bedarf mit Spezialisten für Design und Text auf Projektbasis. Ansprechpartner bleibe ich.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function AISichtbarkeitPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <main>
        {/* ========== HERO: 7/5. Links die Frage, rechts drei belegte Zahlen.
            Vorher standen hier drei gestapelte Kaesten mit Behauptungen. ========== */}
        <section className="relative overflow-hidden pt-28 pb-block lg:pt-32">
          <div className="absolute top-0 right-0 z-0 h-[600px] w-[600px] rounded-full bg-brand-accent/5 blur-3xl" />
          <AntigravityBackground />

          <div className="relative z-10 mx-auto grid max-w-article gap-block px-6 lg:grid-cols-12 lg:gap-x-rule lg:px-12">
            <div className="lg:col-span-7">
              <FadeIn>
                <p className="text-micro uppercase tracking-eyebrow text-brand-accent-ink">KI-Sichtbarkeit aus Hamburg</p>
                <h1 className="mt-flow text-heading sm:text-title xl:text-display font-semibold text-black">
                  Wirst du genannt, <span className="text-brand-accent">wenn KI gefragt wird?</span>
                </h1>
                <p className="mt-flow max-w-measure text-lead text-brand-muted">
                  Ich helfe Hamburger Unternehmen, in ChatGPT, Perplexity und Google AI empfohlen zu werden, und messe, ob daraus echte Anfragen entstehen.
                </p>
                <p className="mt-flow max-w-measure text-body text-brand-muted">
                  <span className="font-medium text-brand-text">Ich komme aus der Software-Architektur, nicht aus dem Marketing.</span>{' '}
                  Weniger Marketing-Magie, mehr nachvollziehbare Signale.
                </p>
                <div className="mt-stack flex flex-col gap-4 sm:flex-row">
                  <Button href="#kontakt" primary className="!py-4 !px-6 !pl-8 group">
                    <span className="relative z-10 flex items-center gap-3">
                      Kostenlose Kurzanalyse
                      <PlatformIconLoop className="!p-0" iconClassName="!w-5 !h-5" />
                    </span>
                  </Button>
                  <Button href="#cases" text="Beispiele ansehen" className="!py-4 !px-8" />
                </div>
                <p className="mt-flow text-meta text-brand-subtle">
                  Keine Sales-Show. 15 Minuten, klare Einschätzung, ob das Thema bei euch überhaupt Sinn macht.
                </p>
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
                <Link href="/ergebnisse" className="mt-flow inline-flex items-center gap-1.5 border-t border-brand-line pt-3 text-meta font-medium text-brand-accent-ink hover:gap-2.5">
                  Alle Ergebnisse mit Screenshots
                  <ArrowRightIcon className="w-3 h-3" />
                </Link>
                <p className="mt-2 text-micro text-brand-subtle">Stand: August 2026</p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ========== PROBLEM: drei Absaetze in der Lesespalte, darunter die
            Mechanik in einer Zeile statt in drei grauen Kacheln. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Der Unterschied</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    SEO bringt Traffic. <span className="text-brand-subtle">KI bringt Empfehlungen.</span>
                  </h2>
                </div>

                <div>
                  <p className="max-w-measure text-body text-brand-muted">
                    Viele Websites sind auffindbar, werden von KI aber nicht als Quelle genannt. LLMs empfehlen nicht die schönste Seite, sondern die, die sie verstehen und der sie vertrauen. Das lässt sich beeinflussen: mit klarer Struktur, mit Signalen und mit Inhalten, die zitierbar sind.
                  </p>

                  <dl className="mt-flow grid border-t border-brand-edge sm:grid-cols-3 sm:gap-x-stack">
                    {MECHANICS.map((item) => (
                      <div key={item.title} className="border-b border-brand-hairline py-3 sm:border-b-0">
                        <dt className="text-body font-semibold text-brand-text">{item.title}</dt>
                        <dd className="text-meta text-brand-subtle">{item.body}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-flow text-meta text-brand-subtle">
                    Die Mechanik dahinter steht in{' '}
                    <Link href="/wissen/ki-sichtbarkeit" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      KI-Sichtbarkeit
                    </Link>{' '}
                    und{' '}
                    <Link href="/wissen/sichtbarkeit-in-chatgpt" className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4">
                      Sichtbarkeit in ChatGPT
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== PASSUNG: die Ja-Liste und die Nein-Liste in einem Band,
            7/5. Kein rotes Kreuz mehr, die Absage traegt die Typografie. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-7">
                  <h2 className="text-subheading md:text-heading font-semibold text-black">Passt gut, wenn…</h2>
                  <ul className="mt-flow">
                    {FITS.map((item) => (
                      <li key={item} className="flex items-start gap-3 border-t border-brand-line py-3 text-body text-brand-muted">
                        <CheckIcon className="mt-1.5 w-3.5 h-3.5 shrink-0 text-brand-accent-ink" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-5">
                  <h3 className="text-subheading font-semibold text-brand-subtle">Passt nicht, wenn…</h3>
                  <ul className="mt-flow">
                    {FITS_NOT.map((item) => (
                      <li key={item} className="flex items-start gap-3 border-t border-brand-hairline py-3 text-meta text-brand-subtle">
                        <span aria-hidden className="mt-2 h-1 w-3 shrink-0 bg-brand-edge" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-flow border-t border-brand-hairline pt-3 text-micro text-brand-subtle">
                    In beiden Fällen sage ich es im ersten Call, nicht nach der ersten Rechnung.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== ABLAUF: vier Schritte, zwei Spuren, Hairlines. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Ablauf</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    So arbeite ich
                  </h2>
                  <p className="mt-flow text-meta text-brand-muted">Ohne Bauchgefühl. Vier Schritte, jeder mit einem Ergebnis, das du prüfen kannst.</p>
                </div>

                <div>
                  {APPROACH.map((step) => (
                    <div key={step.n} className="flex gap-flow border-t border-brand-edge py-3">
                      <span className="w-7 shrink-0 pt-1 text-micro tabular-nums text-brand-subtle">{step.n}</span>
                      <div>
                        <h3 className="text-lead font-semibold text-brand-text">{step.title}</h3>
                        <p className="max-w-measure text-meta text-brand-muted">{step.body}</p>
                      </div>
                    </div>
                  ))}
                  <p className="mt-3 text-meta text-brand-subtle">
                    Die Messmethode im Detail:{' '}
                    <Link href="/wissen/ki-sichtbarkeit-messen" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      KI-Sichtbarkeit messen
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== ANGEBOT: dunkles Vollband. Links die Dringlichkeit, rechts
            das kostenlose Gespraech. Vorher zwei Baender mit zwei Rahmen. ========== */}
        <section className="bg-brand-night py-rule text-white">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <h3 className="text-subheading font-semibold">Warum jetzt?</h3>
                  <ul className="mt-flow">
                    {URGENCY.map((line) => (
                      <li key={line} className="border-t border-white/15 py-2.5 text-meta text-brand-line">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-accent">Kostenlos</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold">
                    Kostenlose Kurzanalyse <span className="text-brand-line">(15 Minuten)</span>
                  </h2>
                  <ul className="mt-flow grid gap-x-stack gap-y-1.5 sm:grid-cols-2">
                    {ANALYSE_POINTS.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-meta text-brand-line">
                        <CheckIcon className="mt-1 w-3.5 h-3.5 shrink-0 text-brand-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-stack flex flex-wrap items-center gap-x-stack gap-y-3 border-t border-white/15 pt-4">
                    <Button href="#kontakt" primary text="Kurzanalyse anfragen" className="!py-3 !px-6" />
                    <Link href="/termin" className="text-meta font-medium text-brand-accent hover:underline">
                      oder direkt einen Termin wählen
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== BEISPIELE: Diagramm plus drei Zeilen. Das Diagramm ersetzt
            den Analytics-Screenshot, der hier als 567px-Bild lag. ========== */}
        <section id="cases" className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-7">
                  <h2 className="text-subheading md:text-heading font-semibold text-black">Beispiele aus der Praxis</h2>
                  <p className="mt-flow max-w-measure text-body text-brand-muted">
                    Drei Projekte, auch das gescheiterte. Zahlen kommen aus Search Console, Bing Webmaster Tools und dem Analytics des jeweiligen Projekts, nicht aus einem Report, den ich selbst gebaut habe.
                  </p>
                  <p className="mt-flow max-w-measure text-body text-brand-muted">
                    Was in allen drei Fällen gleich war: nicht die Verkaufsseite gewinnt die Nennung, sondern die Seite, die eine konkrete Frage vollständig beantwortet. Bei dsgvoschulfotos.de trug eine einzige Antwortseite 45 von 211 Zitaten. Deshalb steht am Anfang jedes Projekts eine Prompt-Liste und nicht ein Redaktionsplan.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="rounded-card border border-brand-line bg-white p-4 sm:p-5">
                    <DataChart
                      frame={false}
                      variant="row"
                      headingLevel="p"
                      title="Besucher nach Quelle"
                      subject="KinderAlbum"
                      axis={{ title: 'Besucher' }}
                      highlight="peak"
                      points={REFERRERS}
                      table={false}
                    />
                  </div>
                  <p className="mt-3 border-t border-brand-hairline pt-3 text-meta text-brand-subtle">
                    ChatGPT ist die stärkste einzelne Quelle, vor Google. Referrer-Bericht des Projekt-Analytics, Januar 2026.{' '}
                    <Link href="/wissen/case-study-kinderalbum" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      Fallstudie
                    </Link>
                  </p>
                </div>
              </div>

              <div className="mt-stack hidden lg:grid lg:grid-cols-[220px_1fr_1fr] lg:gap-x-stack">
                <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Projekt</p>
                <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Ausgangslage und Ergebnis</p>
                <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Learning</p>
              </div>

              <div className="mt-2 lg:mt-2">
                {CASES.map((item) => (
                  <article key={item.name} className="grid gap-y-2 border-t border-brand-edge py-flow lg:grid-cols-[220px_1fr_1fr] lg:gap-x-stack">
                    <div>
                      <h3 className="text-lead font-semibold text-brand-text">{item.name}</h3>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1.5 text-micro font-medium text-brand-accent-ink hover:gap-2.5"
                      >
                        Website ansehen
                        <ArrowRightIcon className="w-3 h-3" />
                      </a>
                      {item.read && (
                        <Link href={item.read.href} className="mt-1 block text-micro text-brand-subtle underline decoration-brand-line underline-offset-4 hover:text-brand-accent-ink">
                          {item.read.label}
                        </Link>
                      )}
                    </div>
                    <div>
                      <p className="text-meta text-brand-subtle">{item.problem}</p>
                      <p className="mt-1 text-meta lg:text-body text-brand-muted">{item.result}</p>
                    </div>
                    <p className="text-meta text-brand-muted">{item.learning}</p>
                  </article>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== PERSON: Foto 720x720 auf 320px, echtes 2x. Rechts der
            Newsletter, der vorher in einem eigenen gruenen Rahmen sass. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-7">
                  <h2 className="text-subheading md:text-heading font-semibold text-black">Warum ich das kann</h2>
                  <div className="mt-stack grid gap-flow sm:grid-cols-[160px_1fr] sm:gap-x-stack">
                    <img
                      src="/image/leistungen/vadim-shchepin-720.webp"
                      width={720}
                      height={720}
                      loading="lazy"
                      decoding="async"
                      alt="Vadim Shchepin, KI-Sichtbarkeit Berater aus Hamburg"
                      className="w-40 rounded-card border border-brand-line object-cover"
                    />
                    <ul>
                      {CREDENTIALS.map((item) => (
                        <li key={item} className="border-t border-brand-line py-2.5 text-meta text-brand-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-flow text-meta text-brand-subtle">
                    Mehr zur Person:{' '}
                    <Link href="/ueber-mich" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      über mich
                    </Link>
                    .
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <h3 className="text-subheading font-semibold text-brand-text">Immer noch kein Vertrauen?</h3>
                  <p className="mt-2 text-meta text-brand-muted">
                    Dann lies erst mit. Echte Geschichten, wie andere Betriebe es in der Realität machen. Kostenlos, ohne Spam.
                  </p>
                  <NewsletterInline />
                  <p className="mt-3 border-t border-brand-hairline pt-3 text-micro text-brand-subtle">
                    Oder direkt in die Guides:{' '}
                    <Link href="/wissen" className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4">
                      alle Beiträge
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== FAQ: zwei Spalten, Hairlines, keine Karten. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <h2 className="text-subheading md:text-heading font-semibold text-black lg:text-subheading">Häufige Fragen</h2>
                <div className="grid sm:grid-cols-2 sm:gap-x-stack">
                  {FAQS.map((item) => (
                    <div key={item.q} className="border-t border-brand-line py-3">
                      <h3 className="text-body font-semibold text-brand-text">{item.q}</h3>
                      <p className="mt-1 text-meta text-brand-muted">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== ABSCHLUSS UND FORMULAR: ein Band statt zwei. ========== */}
        <section id="kontakt" className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-5">
                  <h2 className="text-subheading md:text-heading font-semibold text-black">
                    Willst du wissen, ob KI euch aktuell empfiehlt?
                  </h2>
                  <p className="mt-flow text-body text-brand-muted">
                    Schick mir eure Website und ein bis zwei Sätze, was ihr verkauft. Ich sage dir in 15 Minuten, ob das Thema bei euch hebelt oder ob ihr etwas anderes priorisieren solltet.
                  </p>
                  <p className="mt-flow border-t border-brand-line pt-3 text-meta text-brand-subtle">
                    Antwort in 24 bis 48 Stunden. Lieber schreiben?{' '}
                    <Link href="/contact" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      Kontakt
                    </Link>
                    .
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <h3 className="text-subheading font-semibold text-brand-text">Kurzanalyse anfragen</h3>
                  <KurzanalyseForm />
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
