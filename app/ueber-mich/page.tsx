import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { LinkedInIcon, InstagramIcon, TikTokIcon, GoogleIcon } from '@/components/ui/Icons';

/* ==================================================================== *
 *  /ueber-mich
 *  --------------------------------------------------------------------
 *  The site's E-E-A-T anchor. Three defects it had, all fixed here:
 *
 *  1. The portrait was public/vadim_shchepin_2.jpeg, 1920 x 2560 and
 *     337 kB, scaled by CSS to 208px. That is a 9x over-download and,
 *     because images.unoptimized is true, there was no safety net. It is
 *     now a hand-cut 768 x 960 WebP (55 kB) shown at 384px: a genuine 2x,
 *     with the loose ceiling of the original cropped out. The full file
 *     stays linked as the press photo.
 *  2. Everything on the page was an assertion. "Ergebnisse" and "Daten"
 *     appeared eleven times with not one number attached. The Belege
 *     block now carries three checkable facts with their source and
 *     export date. No chart: /ergebnisse owns the charts, and drawing
 *     the same series twice would pad this page instead of proving
 *     anything.
 *  3. One ink, one weight, four rounded cards per section. Now two inks
 *     (brand-text for the claim, brand-muted for the reasoning), a
 *     numbered principle list on hairlines instead of cards, and a facts
 *     rail that an extraction model can read as key/value pairs.
 *
 *  Server component. The old file was 'use client' with no hook in it.
 * ==================================================================== */

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vadim-shchepin/',
    icon: LinkedInIcon,
    label: 'Projekte, Cases und Gedanken zu AI SEO',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/aiseo.hamburg/',
    icon: InstagramIcon,
    label: 'Behind the scenes und Quick-Tipps',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@aiseo.hamburg/',
    icon: TikTokIcon,
    label: 'Kurze Videos zu KI-Sichtbarkeit',
  },
  {
    name: 'Google Business',
    href: 'https://share.google/bkLeWZ9kPt2G8Lwtg',
    icon: GoogleIcon,
    label: 'Bewertungen und Standort',
  },
];

/* Key/value pairs, not prose. Every line is a fact that is checkable on
   this site or in the Impressum, so an extraction model has something to
   pick up besides adjectives. */
const FACTS: { k: string; v: React.ReactNode }[] = [
  { k: 'Rolle', v: 'Senior Engineer, Berater für KI-Sichtbarkeit' },
  { k: 'Standort', v: 'Hamburg Flottbek, Arbeit im DACH-Raum' },
  { k: 'Erfahrung', v: 'Über zehn Jahre Software- und Webentwicklung' },
  {
    k: 'Schwerpunkt',
    v: 'GEO und AEO für ChatGPT, Perplexity, Google AI Overviews, Microsoft Copilot',
  },
  { k: 'Ansprechpartner', v: 'Durchgehend ich, keine Übergabe an ein Junior-Team' },
  {
    k: 'Zweite Marke',
    v: (
      <>
        <a
          href="https://webseite.hamburg/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
        >
          webseite.hamburg
        </a>{' '}
        für Websites, Google Ads und klassisches SEO
      </>
    ),
  },
];

const VALUES = [
  {
    title: 'Ergebnis vor Ego',
    description:
      'Ich optimiere nicht, damit es gut aussieht, sondern bis es funktioniert. Jede Empfehlung basiert auf Daten, nicht auf Vermutungen.',
  },
  {
    title: 'Dranbleiben statt abliefern',
    description:
      'Ein Audit ist kein Endprodukt. Ich arbeite mit deinen Daten weiter, teste, passe an und höre erst auf, wenn die Zahlen stimmen.',
  },
  {
    title: 'Ehrlich statt diplomatisch',
    description:
      'Wenn etwas keinen Sinn macht, sage ich das. Kein Upselling, kein Buzzword-Bingo. Nur das, was dein Business wirklich weiterbringt.',
  },
  {
    title: 'Persönlich statt skaliert',
    description:
      'Keine Agentur-Pipeline, kein Junior, der dein Projekt übernimmt. Du arbeitest direkt mit mir. Immer.',
  },
];

/* Three checkable claims. Each one names the tool, the number and the
   export date, because a number without a date is a slogan. */
const EVIDENCE: { value: string; claim: string; source: React.ReactNode }[] = [
  {
    value: '800',
    claim: 'KI-Zitate dieser Website in drei Monaten',
    source: (
      <>
        AI-Performance-Bericht der Bing Webmaster Tools, Quelle Microsoft Copilots and
        Partners, Zeitraum 15.03. bis 13.06.2026.{' '}
        <Link
          href="/ergebnisse"
          className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
        >
          Zahlen und Case Studies
        </Link>
      </>
    ),
  },
  {
    value: '248',
    claim: 'Zitate auf einer einzigen Seite, dem Guide zur Messung',
    source: (
      <>
        248 von 420 Zitaten im Export vom 30.05.2026.{' '}
        <Link
          href="/wissen/ki-sichtbarkeit-messen"
          className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
        >
          KI-Sichtbarkeit messen
        </Link>
      </>
    ),
  },
  {
    value: '4',
    claim: 'KI-Systeme, in denen ich vor und nach der Arbeit dieselben Prompts teste',
    source: (
      <>
        ChatGPT, Perplexity, Claude und Gemini. Methode offen dokumentiert, damit du sie
        selbst nachstellen kannst.
      </>
    ),
  },
];

const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vadim Shchepin',
  jobTitle: 'Senior Engineer und Berater für KI-Sichtbarkeit',
  url: 'https://aiseo.hamburg/ueber-mich',
  image: 'https://aiseo.hamburg/vadim_shchepin_2.jpeg',
  email: 'hello@aiseo.hamburg',
  description:
    'Senior Engineer aus Hamburg. Ich mache Unternehmen in KI-Systemen wie ChatGPT, Perplexity und Google AI Overviews sichtbar und messe jede Veränderung nach.',
  knowsAbout: [
    'KI-Sichtbarkeit',
    'Generative Engine Optimization',
    'Answer Engine Optimization',
    'Schema.org',
    'Technisches SEO',
    'Next.js',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hamburg',
    addressRegion: 'HH',
    addressCountry: 'DE',
  },
  sameAs: [
    'https://www.linkedin.com/in/vadim-shchepin/',
    'https://www.instagram.com/aiseo.hamburg/',
    'https://www.tiktok.com/@aiseo.hamburg/',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'aiseo.hamburg',
    url: 'https://aiseo.hamburg',
  },
};

/** Section head with the numbered hierarchy the rest of the site uses. */
const Head: React.FC<{ no: string; children: React.ReactNode }> = ({ no, children }) => (
  <h2 className="text-subheading md:text-heading font-semibold text-brand-text sm:flex sm:gap-4">
    <span aria-hidden="true" className="block shrink-0 tabular-nums text-brand-accent-ink">
      {no}.
    </span>
    <span>{children}</span>
  </h2>
);

export default function UeberMichPage() {
  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
      />

      <main className="min-h-screen bg-brand-surface">
        {/* Hero. The portrait sits in the right gutter and holds that x
            position for the whole page: the facts rail below it starts on the
            same column edge. */}
        <section className="px-6 pt-navbar pb-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto grid items-start gap-stack lg:grid-cols-12 lg:gap-block">
            <FadeIn className="lg:col-span-7">
              <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                Über mich
              </p>
              <h1 className="mt-3 text-title md:text-display font-semibold text-brand-text">
                Vadim Shchepin
              </h1>
              <p className="mt-2 text-meta font-medium text-brand-accent-ink">
                Senior Engineer und Berater für KI-Sichtbarkeit, Hamburg
              </p>
              <p className="mt-flow max-w-measure text-lead text-brand-muted">
                Ich baue keine SEO-Pakete. Ich sorge dafür, dass ChatGPT, Perplexity und
                Google AI dein Unternehmen nennen, und weise jede Veränderung mit Zahlen
                nach, die du selbst öffnen kannst.
              </p>

              <dl className="mt-flow border-t border-brand-line">
                {FACTS.map((fact) => (
                  <div
                    key={fact.k}
                    className="grid gap-x-6 border-b border-brand-hairline py-2.5 sm:grid-cols-[11rem_minmax(0,1fr)]"
                  >
                    <dt className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle sm:pt-0.5">
                      {fact.k}
                    </dt>
                    <dd className="text-meta text-brand-muted">{fact.v}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>

            <FadeIn delay={120} className="lg:col-span-5">
              <figure>
                {/* 768 x 960 WebP at a 384px display width: a real 2x, and
                    55 kB instead of the 337 kB JPEG that used to be squeezed
                    into 208px. */}
                <img
                  src="/image/ueber-mich/vadim-shchepin-768.webp"
                  width={768}
                  height={960}
                  loading="eager"
                  decoding="async"
                  alt="Vadim Shchepin, Berater für KI-Sichtbarkeit, in seinem Büro in Hamburg"
                  className="w-full max-w-[384px] rounded-card border border-brand-line object-cover"
                />
                <figcaption className="mt-3 max-w-[384px] text-micro text-brand-subtle">
                  Hamburg, 2026.{' '}
                  <a
                    href="/vadim_shchepin_2.jpeg"
                    className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                  >
                    Pressefoto in voller Auflösung
                  </a>{' '}
                  (JPEG, 1920 x 2560). Weiteres Material im{' '}
                  <Link
                    href="/pressekit"
                    className="underline decoration-brand-line underline-offset-4 hover:text-brand-accent-ink"
                  >
                    Pressekit
                  </Link>
                  .
                </figcaption>
              </figure>
            </FadeIn>
          </div>
        </section>

        {/* 1. Story */}
        <section className="border-t border-brand-line bg-brand-bg px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="1">Kurz gesagt</Head>
              <div className="mt-flow max-w-measure sm:pl-10">
                <p className="text-body font-medium text-brand-text">
                  Ich habe jahrelang als Engineer Software gebaut und irgendwann gemerkt:
                  Die besten Produkte bringen nichts, wenn niemand sie findet. Nicht bei
                  Google, nicht bei ChatGPT, nirgends.
                </p>
                <p className="mt-4 text-body text-brand-muted">
                  Also habe ich mich in Suchsysteme eingearbeitet. Erst klassisches SEO,
                  dann die neue Frage: Wie wird ein Unternehmen von ChatGPT empfohlen?
                  Warum taucht eine Marke bei Perplexity auf und eine andere nicht? Das
                  ist keine Frage von Keywords, sondern von Struktur, Klarheit und
                  überprüfbarer Autorität.
                </p>
                <p className="mt-4 text-body text-brand-muted">
                  Was mich antreibt: Gute Unternehmen sollen gefunden werden. Nicht die
                  mit dem größten Budget, sondern die mit dem besten Angebot. KI-Systeme
                  belohnen echte Expertise, und genau die mache ich sichtbar.
                </p>
                <p className="mt-4 text-body font-medium text-brand-text">
                  Ich arbeite mit deinen Daten, bis wir Ergebnisse sehen. Nicht bis das
                  Budget aufgebraucht ist.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 2. Belege. The typographic anchor: numbers with a source and a date,
            no chart, because /ergebnisse already draws this data. */}
        <section className="border-t border-brand-line px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="2">Belege statt Behauptungen</Head>
              <p className="mt-flow max-w-measure text-body text-brand-muted sm:pl-10">
                Jede Zahl hier stammt aus einem Bericht, den du selbst öffnen kannst, mit
                dem Datum des Exports. Die ersten beiden betreffen meine eigene Website,
                weil ich zuerst an ihr getestet habe, was ich verkaufe.
              </p>
              <dl className="mt-flow border-t border-brand-line sm:ml-10">
                {EVIDENCE.map((item) => (
                  <div
                    key={item.value}
                    className="grid items-baseline gap-x-6 border-b border-brand-hairline py-4 sm:grid-cols-[5rem_minmax(0,1fr)]"
                  >
                    <dt className="text-heading font-semibold tabular-nums text-brand-text">
                      {item.value}
                    </dt>
                    <dd>
                      <p className="text-body text-brand-text">{item.claim}</p>
                      <p className="mt-1 text-micro text-brand-subtle">{item.source}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </section>

        {/* 3. Principles. Was four rounded cards, now a numbered list on
            hairlines: same four claims, roughly half the height. */}
        <section className="border-t border-brand-line bg-brand-bg px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="3">So arbeite ich</Head>
              <p className="mt-flow max-w-measure text-body text-brand-muted sm:pl-10">
                Vier Prinzipien, an denen ich jede Entscheidung messe.
              </p>
            </FadeIn>
            <ol className="mt-flow border-t border-brand-line sm:ml-10">
              {VALUES.map((value, i) => (
                <FadeIn key={value.title} delay={i * 60}>
                  <li className="grid gap-x-6 border-b border-brand-hairline py-4 md:grid-cols-[16rem_minmax(0,1fr)]">
                    <h3 className="flex gap-3 text-body font-semibold text-brand-text">
                      <span aria-hidden="true" className="shrink-0 tabular-nums text-brand-subtle">
                        3.{i + 1}
                      </span>
                      <span>{value.title}</span>
                    </h3>
                    <p className="mt-1 max-w-measure text-body text-brand-muted md:mt-0">
                      {value.description}
                    </p>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </section>

        {/* 4. Difference */}
        <section className="border-t border-brand-line px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="4">Warum ich das anders mache</Head>
              <div className="mt-flow max-w-measure sm:pl-10">
                <p className="text-body font-medium text-brand-text">
                  Die meisten Agenturen verkaufen Stunden. Ich verkaufe Ergebnisse. Wenn
                  nach drei Monaten deine KI-Sichtbarkeit nicht messbar besser ist, habe
                  ich meinen Job nicht gemacht.
                </p>
                <p className="mt-4 text-body text-brand-muted">
                  Ich komme aus der Technik. Ich verstehe deshalb nicht nur, <em>was</em>{' '}
                  optimiert werden muss, sondern auch, <em>wie</em> es sauber implementiert
                  wird: Schema Markup, technisches SEO, Content-Strategie, alles aus einer
                  Hand, ohne Übergabe-Verluste.
                </p>
                <p className="mt-4 text-body text-brand-muted">
                  Und ich bin ehrlich: Wenn dein Unternehmen noch nicht bereit für
                  KI-Sichtbarkeit ist, sage ich dir das. Lieber eine unbequeme Wahrheit
                  als ein teurer Vertrag, der nichts bringt.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 5. Sister brand */}
        <section className="border-t border-brand-line bg-brand-bg px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="5">Mehr als KI-Sichtbarkeit</Head>
              <div className="mt-flow grid gap-stack sm:pl-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-block">
                <div className="max-w-measure">
                  <p className="text-body text-brand-muted">
                    KI-Sichtbarkeit ist mein Fokus, aber nicht alles, was ich mache. Unter{' '}
                    <a
                      href="https://webseite.hamburg/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                    >
                      webseite.hamburg
                    </a>{' '}
                    biete ich klassische digitale Dienstleistungen an:
                    Webseiten-Erstellung, Google Ads, SEO und Online-Promotion.
                  </p>
                  <p className="mt-4 text-body text-brand-muted">
                    Viele Kunden starten dort mit einer neuen Website oder einer
                    Ads-Kampagne und kommen hierher, wenn sie den nächsten Schritt machen:
                    sichtbar werden in ChatGPT, Perplexity und Co. Welche Seite passt,
                    hängt davon ab, wo du gerade stehst.
                  </p>
                </div>
                <a
                  href="https://webseite.hamburg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-fit items-center gap-4 rounded-card border border-brand-line bg-brand-surface p-4 transition-colors hover:border-brand-edge"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-hairline text-body font-semibold text-brand-text">
                    W
                  </span>
                  <span>
                    <span className="block text-meta font-semibold text-brand-text">
                      webseite.hamburg
                    </span>
                    <span className="block text-micro text-brand-subtle">
                      Websites, Google Ads, SEO und Promotion
                    </span>
                  </span>
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 6. Social */}
        <section className="border-t border-brand-line px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <Head no="6">Lass uns connecten</Head>
              <p className="mt-flow max-w-measure text-body text-brand-muted sm:pl-10">
                Ich teile regelmäßig Einblicke, Cases und Quick-Tipps. Folge mir da, wo es
                für dich passt.
              </p>
            </FadeIn>
            <ul className="mt-flow grid gap-x-block border-t border-brand-line sm:ml-10 md:grid-cols-2">
              {SOCIAL_LINKS.map((social, i) => (
                <FadeIn key={social.name} delay={i * 50}>
                  <li className="border-b border-brand-hairline">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 py-3.5 transition-colors hover:text-brand-accent-ink"
                    >
                      <social.icon className="h-5 w-5 shrink-0 text-brand-subtle" />
                      <span className="min-w-0">
                        <span className="block text-meta font-semibold text-brand-text">
                          {social.name}
                        </span>
                        <span className="block text-micro text-brand-subtle">
                          {social.label}
                        </span>
                      </span>
                    </a>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </section>

        {/* 7. CTA */}
        <section className="border-t border-brand-line bg-brand-bg px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              <div className="grid items-end gap-stack lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <h2 className="text-subheading md:text-heading font-semibold text-brand-text">
                    Lass uns reden
                  </h2>
                  <p className="mt-flow max-w-measure text-body text-brand-muted">
                    Du willst wissen, ob KI-Sichtbarkeit für dein Unternehmen Sinn macht?
                    Schreib mir, ich antworte persönlich. Im 15-Minuten-Call schauen wir
                    live nach, ob KI dich heute nennt.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-accent-deep px-6 py-3 text-meta font-semibold text-white transition-colors hover:bg-brand-accent-ink"
                  >
                    Kontakt aufnehmen
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <Link
                    href="/ai-sichtbarkeit-now"
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-line px-6 py-3 text-meta font-semibold text-brand-text transition-colors hover:border-brand-edge"
                  >
                    KI-Sichtbarkeit prüfen
                  </Link>
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
