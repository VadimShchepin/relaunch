import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

const FAQ_ITEMS = [
  {
    q: 'Was kostet eine AI SEO Agentur?',
    a: 'Die Kosten variieren stark, weil das Feld noch jung ist. Ein einmaliges Audit liegt typischerweise zwischen 500 und 2.000 Euro, laufende Optimierung zwischen 1.000 und 5.000 Euro pro Monat. Entscheidend ist nicht der Preis, sondern ob die Agentur tatsächlich KI-Zitierungen messen kann.',
  },
  {
    q: 'Wie lange dauert AI SEO Optimierung?',
    a: 'Erste Veränderungen in KI-Antworten sind oft innerhalb von 4 bis 8 Wochen sichtbar. Stabile, zuverlässige Sichtbarkeit entsteht über Monate durch konsistente Arbeit an Inhalten, Struktur und Autorität.',
  },
  {
    q: 'Brauche ich eine AI SEO Agentur oder reicht klassisches SEO?',
    a: 'Klassisches SEO bleibt wichtig, ist aber nicht ausreichend. KI-Systeme bewerten Quellen anders als Google. Wenn deine Zielgruppe ChatGPT, Perplexity oder Google AI nutzt, brauchst du gezielte AI SEO Optimierung.',
  },
  {
    q: 'Was ist der Unterschied zwischen AI SEO und GEO?',
    a: 'GEO (Generative Engine Optimization) ist der akademische Begriff für AI SEO. Beide meinen dasselbe: Optimierung für KI-gesteuerte Suchsysteme, damit dein Unternehmen in KI-generierten Antworten zitiert wird.',
  },
  {
    q: 'Gibt es AI SEO Agenturen in Hamburg?',
    a: 'Ja. Hamburg hat als Technologie- und Medienstandort einige Anbieter im Bereich AI SEO. Wichtig ist, auf tatsächliche Erfahrung mit KI-Sichtbarkeit zu achten und nicht nur auf klassische SEO-Agenturen, die AI SEO als Label verwenden.',
  },
];

const SERVICES = [
  {
    title: 'KI-Sichtbarkeits-Audit',
    desc: 'Wie wirst du in ChatGPT, Perplexity, Google AI Overview, Claude und Copilot dargestellt? Wo wirst du genannt, wo nicht, und warum?',
  },
  {
    title: 'Strukturierte Daten & Schema',
    desc: 'JSON-LD, Schema.org Markup und semantische Struktur so optimieren, dass KI dein Angebot eindeutig versteht und korrekt einordnet.',
  },
  {
    title: 'Content für Extrahierbarkeit',
    desc: 'Inhalte so strukturieren, dass KI sie als zitierfähige Quelle erkennt. Klare Aussagen, präzise Definitionen, logischer Aufbau.',
  },
  {
    title: 'Autoritäts-Aufbau',
    desc: 'Erwähnungen in Verzeichnissen, Fachpublikationen und PR-Maßnahmen. KI bewertet Konsistenz und Verbreitung deiner Marke über verschiedene Quellen.',
  },
  {
    title: 'Technisches SEO-Fundament',
    desc: 'Ladezeiten, Crawlability, Mobile-Optimierung und saubere Seitenstruktur. Ohne solides Fundament funktioniert auch AI SEO nicht.',
  },
  {
    title: 'Monitoring & Messung',
    desc: 'Regelmäßige Prüfung, ob und wie du in KI-Antworten zitiert wirst. Tracking über Zeit und Ableitung konkreter Maßnahmen.',
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
              headline: 'AI SEO Agentur: Was sie wirklich leistet und worauf du achten solltest',
              description: 'Was macht eine AI SEO Agentur? Erfahre, welche Leistungen wichtig sind, worauf du bei der Auswahl achten solltest und wann sich AI SEO Beratung lohnt.',
              author: {
                '@type': 'Person',
                name: 'Vadim Shchepin',
              },
              publisher: {
                '@type': 'Organization',
                name: 'aiseo.hamburg',
                url: 'https://aiseo.hamburg',
              },
              url: 'https://aiseo.hamburg/wissen/ai-seo-agentur',
              datePublished: '2026-03-12',
              dateModified: '2026-03-12',
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

        {/* Hero */}
        <section className="relative pt-32 pb-12 md:pt-52 md:pb-16 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
                      <nav className="text-sm text-gray-400 mb-8">
              <a href="/" className="hover:text-gray-600 transition-colors">Startseite</a>
              <span className="mx-2">/</span>
              <span>Wissen</span>
              <span className="mx-2">/</span>
              <span className="text-gray-600">AI SEO Agentur</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
              AI SEO Agentur: Was sie wirklich leistet und worauf du achten solltest
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
              Die meisten &quot;AI SEO Agenturen&quot; kleben ein neues Label auf alte Leistungen. Hier ist, woran du echte Expertise erkennst, was eine gute Agentur konkret tut und was sie kosten sollte.
            </p>
        </section>

        {/* Image */}
        <div className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-8">
                      <img
              src="/images/wissen/ai-seo-agentur.jpg"
              alt="AI SEO Agentur: Team bei der Strategieentwicklung"
              className="w-full rounded-2xl shadow-lg"
              loading="eager"
            />
            <p className="text-xs text-gray-400 mt-2">Foto: Unsplash</p>
        </div>

        {/* TLDR */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-16">
                      <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
              <p className="text-sm font-bold text-brand-accent mb-4">Zusammenfassung</p>
              <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-brand-accent font-bold mt-0.5 shrink-0">1.</span>
                  <span>AI SEO = in KI-Antworten zitiert werden, nicht nur bei Google ranken.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-accent font-bold mt-0.5 shrink-0">2.</span>
                  <span>Das Unterscheidungsmerkmal: die Agentur misst echte KI-Zitierungen, nicht nur klassische Metriken.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-accent font-bold mt-0.5 shrink-0">3.</span>
                  <span>Vorsicht bei fertigen &quot;AI SEO Paketen&quot;. Das Feld ist zu jung für Standardlösungen.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-accent font-bold mt-0.5 shrink-0">4.</span>
                  <span>Spezialisierte Freelancer schlagen aktuell oft große Agenturen, weil echte GEO-Erfahrung selten ist.</span>
                </li>
              </ul>
            </div>
        </section>

        {/* Was unterscheidet eine AI SEO Agentur? */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                      <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Was unterscheidet eine AI SEO Agentur von klassischem SEO?
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Klassisches SEO kämpft um zehn Plätze auf Seite eins. AI SEO kämpft um zwei bis sieben Zitierungen in einer KI-Antwort. Das ist ein fundamental anderes Spiel.
              </p>
              <p>
                KI wählt nicht die populärste Seite, sondern die klarste, vertrauenswürdigste und am besten strukturierte Quelle. Zitierungen sind die neuen Backlinks: statt dass andere Websites auf dich verlinken, zitiert die KI dich direkt.
              </p>
              <p>
                Eine AI SEO Agentur sorgt dafür, dass dein Unternehmen zu diesen wenigen Quellen gehört. Das erfordert andere Methoden als klassisches SEO: strukturierte Daten, zitierfähige Inhalte und gezielten Autoritäts-Aufbau über verschiedene Quellen.
              </p>
              <p>
                Wichtig: AI SEO ersetzt klassisches SEO nicht. Es baut darauf auf. Ohne saubere technische Basis hat auch die beste KI-Optimierung wenig Wirkung.
              </p>
            </div>
        </section>

        {/* Was macht eine gute AI SEO Agentur? */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                      <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Was macht eine gute AI SEO Agentur?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Sechs Kernbereiche. Fehlt einer, fehlt ein wichtiger Baustein.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {SERVICES.map((service) => (
                <div key={service.title} className="bg-white border border-gray-100 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">{service.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Worauf bei Auswahl achten */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                      <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Worauf solltest du bei der Auswahl achten?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Nicht jeder, der AI SEO anbietet, versteht, was dahintersteckt. Hier sind klare Signale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Red Flags */}
              <div className="bg-white border border-red-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-red-600 mb-4">Red Flags</h3>
                <ul className="space-y-3 text-base text-gray-600 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0 mt-1">&#10005;</span>
                    <span>Versprechen wie &quot;garantierte KI-Rankings&quot;. Niemand kann das garantieren, weil KI-Antworten kontextabhängig sind.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0 mt-1">&#10005;</span>
                    <span>Fokus auf Vanity-Metriken wie Wortanzahl oder Keyword-Dichte statt auf tatsächliche Zitierungen.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0 mt-1">&#10005;</span>
                    <span>Keine eigene Messmethodik. Wer nicht zeigen kann, wie er KI-Sichtbarkeit trackt, versteht sie vermutlich nicht.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0 mt-1">&#10005;</span>
                    <span>Generische Content-Farmen: massenhaft Blog-Artikel ohne Tiefe oder Relevanz.</span>
                  </li>
                </ul>
              </div>

              {/* Green Flags */}
              <div className="bg-white border border-green-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-brand-accent mb-4">Green Flags</h3>
                <ul className="space-y-3 text-base text-gray-600 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                    <span>Transparente Methodik: klar erklärt, was sie tun und warum.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                    <span>Misst tatsächliche KI-Zitierungen, nicht nur Google-Rankings.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                    <span>Verbindet technisches SEO mit Content-Strategie und Autoritäts-Aufbau.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                    <span>Versteht E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) im KI-Kontext.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                    <span>Kann konkrete Fallstudien oder Beispiele zeigen.</span>
                  </li>
                </ul>
              </div>
            </div>
        </section>

        {/* Agentur vs Freelancer vs Inhouse */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                      <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              AI SEO Agentur vs. Freelancer vs. Inhouse
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Ehrliche Antwort: in einem so jungen Feld sind spezialisierte Freelancer oft die bessere Wahl als große Agenturen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Agentur</h3>
                <ul className="space-y-2 text-base text-gray-600 leading-relaxed">
                  <li><span className="text-brand-accent">+</span> Breites Team, verschiedene Kompetenzen</li>
                  <li><span className="text-brand-accent">+</span> Skalierbar bei größeren Projekten</li>
                  <li><span className="text-red-400">-</span> Höhere Kosten, oft Overhead</li>
                  <li><span className="text-red-400">-</span> AI SEO manchmal nur als Add-on</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Freelancer</h3>
                <ul className="space-y-2 text-base text-gray-600 leading-relaxed">
                  <li><span className="text-brand-accent">+</span> Tiefe Spezialisierung möglich</li>
                  <li><span className="text-brand-accent">+</span> Persönliche Betreuung</li>
                  <li><span className="text-brand-accent">+</span> Kosteneffizient</li>
                  <li><span className="text-red-400">-</span> Begrenzte Kapazität</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Inhouse</h3>
                <ul className="space-y-2 text-base text-gray-600 leading-relaxed">
                  <li><span className="text-brand-accent">+</span> Volle Kontrolle und Integration</li>
                  <li><span className="text-brand-accent">+</span> Tiefes Produktverständnis</li>
                  <li><span className="text-red-400">-</span> Schwer, Talent zu finden</li>
                  <li><span className="text-red-400">-</span> Hohe Fixkosten</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mt-8">
              Spezialisierte Freelancer haben sich früh mit GEO beschäftigt. Größere Agenturen kleben häufig ein neues Label auf bestehende Leistungen. Das ändert sich, aber aktuell zählt Spezialisierung mehr als Teamgröße.
            </p>
        </section>

        {/* Was kostet AI SEO Beratung? */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                      <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Was kostet AI SEO Beratung?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Es gibt noch keinen etablierten Markt. Hier eine ehrliche Orientierung:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">Einmaliges Audit</h3>
                <p className="text-2xl font-semibold text-brand-accent mb-2">500 - 2.000 &euro;</p>
                <p className="text-base text-gray-600 leading-relaxed">Bestandsaufnahme deiner aktuellen KI-Sichtbarkeit auf allen relevanten Plattformen.</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">Laufende Optimierung</h3>
                <p className="text-2xl font-semibold text-brand-accent mb-2">1.000 - 5.000 &euro;/Monat</p>
                <p className="text-base text-gray-600 leading-relaxed">Kontinuierliche Optimierung, Content-Anpassung, Monitoring und Autoritäts-Aufbau.</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">Projektbasiert</h3>
                <p className="text-2xl font-semibold text-brand-accent mb-2">Individuell</p>
                <p className="text-base text-gray-600 leading-relaxed">Einmalige Projekte wie Schema-Optimierung oder Content-Überarbeitung. Umfang bestimmt den Preis.</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mt-8">
              Vorsicht bei sehr günstigen Pauschalen. AI SEO erfordert manuelle Analyse und individuelle Strategie. Massenabfertigung funktioniert nicht.
            </p>
        </section>

        {/* Quick Checklist */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                      <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Quick Checklist: Brauchst du AI SEO?
            </h2>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <ul className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-brand-accent shrink-0 font-bold">&#9744;</span>
                  <span>Deine Zielgruppe nutzt ChatGPT, Perplexity oder Google AI für Recherchen?<span className="text-brand-accent font-medium ml-2">Ja = AI SEO relevant.</span></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-accent shrink-0 font-bold">&#9744;</span>
                  <span>Deine Website hat bereits Inhalte und eine gewisse Autorität?<span className="text-brand-accent font-medium ml-2">Ja = gute Ausgangslage.</span></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-accent shrink-0 font-bold">&#9744;</span>
                  <span>Dein Markt ist wettbewerbsstark und Empfehlungen zählen?<span className="text-brand-accent font-medium ml-2">Ja = KI-Sichtbarkeit wird zum Vorteil.</span></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-accent shrink-0 font-bold">&#9744;</span>
                  <span>Du willst früher da sein als deine Wettbewerber?<span className="text-brand-accent font-medium ml-2">Ja = jetzt starten.</span></span>
                </li>
              </ul>
              <p className="text-base text-gray-500 mt-6">
                Zwei oder mehr Ja? Dann lohnt sich mindestens ein Audit.
              </p>
            </div>
        </section>

        {/* AI SEO für Hamburger Unternehmen */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                      <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              AI SEO für Hamburger Unternehmen
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Hamburg ist stark in Technologie, Medien und spezialisierten Dienstleistungen. Genau diese Branchen profitieren am meisten, weil ihre Zielgruppen KI-Tools früh adaptiert haben. Der größte Hebel: lokale Signale wie Google Business Profile und regionale Erwähnungen verstärken die KI-Sichtbarkeit erheblich. Wenn ChatGPT nach einem Anbieter in Hamburg gefragt wird, zieht es genau diese Signale heran.
              </p>
              <p>
                Die meisten Hamburger Wettbewerber konzentrieren sich weiterhin ausschließlich auf klassisches SEO. Wer jetzt mit AI SEO anfängt, hat in vielen Branchen noch wenig direkte Konkurrenz.
              </p>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                      <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-10">
              Häufig gestellte Fragen
            </h2>
            <div className="space-y-6">
              {FAQ_ITEMS.map((item) => (
                <div key={item.q} className="bg-white border border-gray-100 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">{item.q}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Quellen */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                      <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Quellen und weiterführende Informationen
            </h2>
            <ul className="space-y-3 text-base text-gray-600 leading-relaxed">
              <li>
                <span className="font-medium text-black">Aggarwal et al. (2023):</span>{' '}
                &quot;GEO: Generative Engine Optimization&quot; - die erste akademische Studie zu Generative Engine Optimization.
              </li>
              <li>
                <span className="font-medium text-black">Google Search Central:</span>{' '}
                Dokumentation zu strukturierten Daten und Schema.org Markup.
              </li>
              <li>
                <span className="font-medium text-black">Search Engine Journal:</span>{' '}
                Laufende Berichterstattung über die Entwicklung von AI Overviews und deren Einfluss auf SEO.
              </li>
            </ul>
        </section>

        {/* Verwandte Guides */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-8">
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
                  <p className="text-sm text-gray-500 mt-1">Konkrete Strategien für ChatGPT-Zitierungen.</p>
                </a>
              </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
                      <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-black mb-4">
                Du suchst AI SEO Beratung?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto mb-8">
                aiseo.hamburg hilft Hamburger Unternehmen, in KI-Antworten sichtbar zu werden. Kein Paketverkauf, sondern individuelle Analyse und ehrliche Einschätzung.
              </p>
              <Button href="/ai-sichtbarkeit-now" text="Mehr erfahren" primary />
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
