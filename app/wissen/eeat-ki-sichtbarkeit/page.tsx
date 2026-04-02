import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Ist E-E-A-T ein Ranking-Faktor bei Google?',
    a: 'Nein, nicht direkt. E-E-A-T ist kein algorithmischer Ranking-Faktor wie PageSpeed oder Backlinks. Es ist ein Konzept aus den Google Quality Rater Guidelines, das beschreibt, wonach menschliche Qualitätsprüfer suchen. Google nutzt diese Bewertungen, um seine Algorithmen zu trainieren. Für KI-Systeme ist E-E-A-T noch weniger ein „Faktor" — es ist eher eine emergente Eigenschaft. Wenn deine Expertise konsistent über viele Quellen bestätigt wird, zitiert dich die KI häufiger. Kein Schalter, den du umlegst. Eher ein Ruf, den du aufbaust.',
  },
  {
    q: 'Reicht eine Autoren-Bio für E-E-A-T bei KI-Systemen?',
    a: 'Absolut nicht. Eine Autoren-Bio ist für Google nützlich, weil der Crawler sie lesen und mit anderen Signalen abgleichen kann. Für KI-Systeme wie ChatGPT ist eine Bio auf deiner eigenen Website ungefähr so überzeugend wie ein Lebenslauf, den du dir selbst geschrieben hast. KI prüft, ob dein Name in externen Quellen mit dem Thema verknüpft ist — Fachpublikationen, Interviews, Konferenzvorträge, Erwähnungen auf anderen Websites. Die Bio ist das Sahnehäubchen, nicht das Fundament.',
  },
  {
    q: 'Wie kann ich meine E-E-A-T-Signale für ChatGPT verbessern?',
    a: 'Drei Hebel: Erstens, konsistente Expertise über verschiedene Quellen hinweg aufbauen — Gastbeiträge, Podcasts, Fachpublikationen, LinkedIn-Artikel. Zweitens, auf deiner Website Inhalte mit echten Daten, Erfahrungsberichten und verifizierbaren Fakten erstellen. Drittens, deine Person oder Marke mit Schema.org-Markup (Person, Organization) maschinenlesbar machen. Der wichtigste Punkt: Es geht nicht um einen einzigen Trick, sondern um konsistente Präsenz über Monate und Jahre.',
  },
  {
    q: 'Was bedeutet das erste E in E-E-A-T für KI?',
    a: 'Das erste E steht für Experience — Erfahrung. Für Google bedeutet das: Hat der Autor das Thema selbst erlebt? Für KI-Systeme ist Experience noch schwerer zu fälschen, weil LLMs Muster erkennen. Ein Artikel über Backpacking in Vietnam, der nur Wikipedia-Fakten zusammenfasst, klingt anders als einer von jemandem, der tatsächlich dort war. KI erkennt diese Nuancen überraschend gut. Eigene Erfahrungen, spezifische Details und persönliche Einschätzungen sind die stärksten Experience-Signale.',
  },
  {
    q: 'Können Backlinks meine KI-Sichtbarkeit verbessern?',
    a: 'Indirekt ja, direkt nein. ChatGPT und Claude können keine Backlink-Profile analysieren — sie sehen den Link-Graph nicht. Aber: Websites mit vielen hochwertigen Backlinks werden häufiger in Trainingsdaten aufgenommen und häufiger von Perplexity gecrawlt. Backlinks sind also kein direktes KI-Signal, aber sie erhöhen die Wahrscheinlichkeit, dass dein Content in den Trainingsdaten und im Live-Web-Index der KI-Systeme landet.',
  },
  {
    q: 'Wie unterscheidet sich Trustworthiness bei Google vs. KI?',
    a: 'Bei Google basiert Trust auf technischen Signalen: HTTPS, saubere Domain-History, keine Spam-Penalties, solides Backlink-Profil. Bei KI-Systemen basiert Trust auf inhaltlicher Konsistenz: Stimmen deine Aussagen mit dem überein, was andere vertrauenswürdige Quellen sagen? Widersprichst du dir selbst auf verschiedenen Seiten? Sind deine Fakten verifizierbar? Google prüft deine Nachbarschaft (wer verlinkt auf dich), KI prüft deine Aussagen (stimmt das, was du sagst).',
  },
  {
    q: 'Muss jede Seite E-E-A-T-Signale haben?',
    a: 'Nicht jede Seite braucht den gleichen E-E-A-T-Aufwand. Für YMYL-Themen (Your Money, Your Life) — also Gesundheit, Finanzen, Recht — sind starke E-E-A-T-Signale absolut kritisch, sowohl für Google als auch für KI. Für weniger sensible Themen reicht eine solide Grundlage: erkennbarer Autor, aktuelle Inhalte, verifizierbare Fakten. Der Fehler ist, E-E-A-T komplett zu ignorieren oder es als reine Checkbox-Übung zu behandeln.',
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
  headline: 'E-E-A-T und KI: Warum Expertise für ChatGPT wichtiger ist als für Google',
  description:
    'Wie E-E-A-T bei KI-Systemen anders funktioniert als bei Google. Warum Konsistenz über Quellen hinweg wichtiger ist als Backlinks — und warum eine Autoren-Bio allein nichts bringt.',
  image: 'https://aiseo.hamburg/images/wissen/eeat-ki-sichtbarkeit.jpg',
  author: {
    '@type': 'Person',
    name: 'Vadim Shchepin',
    url: 'https://aiseo.hamburg/ueber-mich',
    jobTitle: 'AI SEO Specialist',
  },
  publisher: {
    '@id': 'https://aiseo.hamburg/#organization',
  },
  datePublished: '2026-04-02',
  dateModified: '2026-04-02',
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/eeat-ki-sichtbarkeit',
  inLanguage: 'de',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'E-E-A-T und KI-Sichtbarkeit' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function EEATKISichtbarkeitPage() {
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
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li><a href="/" className="hover:text-brand-accent transition-colors">Startseite</a></li>
            <li>/</li>
            <li><a href="/wissen" className="hover:text-brand-accent transition-colors">Wissen</a></li>
            <li>/</li>
            <li className="text-black font-medium">E-E-A-T und KI-Sichtbarkeit</li>
          </ol>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
          E-E-A-T und KI: Warum Expertise für ChatGPT wichtiger ist als für Google
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          Du hast eine Autoren-Bio auf deine Seite geknallt und denkst, E-E-A-T ist erledigt? Herzlichen Glückwunsch — du hast gerade das digitale Äquivalent eines Namensschilds an eine leere Wand geklebt. KI-Systeme lesen keine Bios. Sie lesen alles andere.
        </p>
      </section>

      {/* ============================================================ */}
      {/*  TL;DR                                                       */}
      {/* ============================================================ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">1.</span>
              <span><strong className="text-black">Google prüft deine Nachbarschaft, KI prüft deine Aussagen.</strong> Backlinks sagen Google, wer dich empfiehlt. KI vergleicht, ob deine Fakten mit anderen Quellen übereinstimmen.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">2.</span>
              <span><strong className="text-black">Konsistenz schlägt Autorität.</strong> KI-Systeme vertrauen Quellen, die über viele Dokumente hinweg die gleichen, verifizierbaren Aussagen machen.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">3.</span>
              <span><strong className="text-black">Eine Autoren-Bio ist kein E-E-A-T.</strong> Sie ist ein Pflaster auf einem Holzbein. Expertise zeigt sich in Inhalten, nicht in Selbstbeschreibungen.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">4.</span>
              <span><strong className="text-black">Experience ist der neue Differentiator.</strong> KI erkennt, ob du über etwas schreibst, das du erlebt hast — oder ob du Wikipedia umformulierst.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">5.</span>
              <span><strong className="text-black">E-E-A-T für KI ist kein Projekt, sondern ein Zustand.</strong> Du baust es nicht einmal auf. Du lebst es — oder du tust so, und KI merkt den Unterschied.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Das Missverständnis                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Das große E-E-A-T-Missverständnis: Warum 90 % es falsch machen
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Irgendwann im Jahr 2023 hat die SEO-Branche beschlossen, dass E-E-A-T bedeutet: Schreib eine Autoren-Bio, pack ein Foto daneben, fertig. Expertise demonstriert. Trust etabliert. Ab jetzt liebt uns Google.
          </p>
          <p>
            Das ist ungefähr so, als würdest du dir einen weißen Kittel anziehen und erwarten, dass Patienten dich für einen Arzt halten. <strong className="text-black">Das Kostüm ist nicht die Qualifikation.</strong>
          </p>
          <p>
            E-E-A-T steht für Experience, Expertise, Authoritativeness und Trustworthiness. Vier Dimensionen, die beschreiben, ob eine Quelle vertrauenswürdig ist. Google hat das Konzept für seine Quality Rater eingeführt — echte Menschen, die Suchergebnisse bewerten. Und jetzt, wo KI-Systeme wie ChatGPT, Perplexity und Claude die Informationslandschaft umkrempeln, wird E-E-A-T plötzlich noch wichtiger. Aber auch komplett anders.
          </p>
        </div>

        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm my-8">
          <p className="text-lg md:text-xl font-semibold text-black leading-snug">
            Kernunterschied: Google bewertet E-E-A-T anhand von Proxy-Signalen (Backlinks, Domain-Alter, technische Qualität). KI bewertet E-E-A-T anhand von inhaltlicher Konsistenz über Quellen hinweg.
          </p>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Wenn du verstehst, warum dieser Unterschied alles verändert, hast du einen Vorsprung vor 90 % der SEO-Branche. Wenn nicht — nun, es gibt noch genug Platz für Autoren-Bios auf leeren Websites.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  E-E-A-T bei Google vs. KI                                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          E-E-A-T bei Google vs. E-E-A-T bei KI: Zwei verschiedene Welten
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Gleiche Buchstaben, komplett andere Mechanismen. Hier ist der Vergleich, der dir die Augen öffnen wird — oder zumindest das eine Auge, das noch nicht von SEO-Buzzwords zugeschwollen ist.
        </p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-sm font-semibold text-black">Dimension</th>
                <th className="py-3 pr-4 text-sm font-semibold text-black">Google</th>
                <th className="py-3 text-sm font-semibold text-black">KI-Systeme</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Experience</td>
                <td className="py-3 pr-4">Product Reviews, Fotos, nutzergenerierte Inhalte als Signale</td>
                <td className="py-3">Sprachliche Muster: Spezifische Details, persönliche Einschätzungen, keine generischen Formulierungen</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Expertise</td>
                <td className="py-3 pr-4">Autoren-Bio, Credentials, thematische Tiefe der Website</td>
                <td className="py-3">Konsistente Fachaussagen über mehrere Quellen, verifizierbare Fakten, semantische Tiefe</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Authoritativeness</td>
                <td className="py-3 pr-4">Backlink-Profil, Domain Authority, Erwähnungen auf autoritativen Seiten</td>
                <td className="py-3">Cross-Source-Bestätigung: Werden deine Aussagen von anderen Quellen gestützt?</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Trustworthiness</td>
                <td className="py-3 pr-4">HTTPS, saubere Domain-History, keine Spam-Penalties</td>
                <td className="py-3">Faktische Korrektheit, Widerspruchsfreiheit, Übereinstimmung mit Konsens</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Hauptmechanismus</td>
                <td className="py-3 pr-4">Proxy-Signale (Links, technische Qualität)</td>
                <td className="py-3">Inhaltliche Analyse (Was steht da? Stimmt das?)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Manipulierbar?</td>
                <td className="py-3 pr-4">Ja, mit Link-Building, PBNs, gekauften Erwähnungen</td>
                <td className="py-3">Deutlich schwerer. Du müsstest das gesamte Trainingskorpus manipulieren.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Siehst du das Muster? Google bewertet, <strong className="text-black">wer auf dich zeigt</strong>. KI bewertet, <strong className="text-black">was du sagst und ob es stimmt</strong>. Das ist ein fundamentaler Unterschied, den die meisten SEOs noch nicht verstanden haben.
          </p>
          <p>
            Bei Google kannst du mit einem starken Backlink-Profil und einer autoritativen Domain auch mittelmäßigen Content auf Seite 1 bringen. Bei KI funktioniert das nicht. Ein LLM fragt sich nicht „Hat diese Domain 10.000 Backlinks?" — es fragt sich „Ist diese Aussage korrekt und konsistent mit dem, was ich aus anderen Quellen weiß?"
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Expertise-Signale für KI                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Die echten Expertise-Signale für KI — und warum deine Bio nicht dazugehört
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Vergiss alles, was du über E-E-A-T-Checklisten gelesen hast. Hier sind die Signale, die für KI-Systeme tatsächlich zählen.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">1. Cross-Source-Konsistenz</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Das stärkste Signal. Wenn dein Name, deine Marke oder deine Website in den Trainingsdaten konsistent mit einem Fachthema verknüpft ist — über verschiedene Quellen hinweg — stuft die KI dich als Experten ein. Nicht weil du es behauptest, sondern weil es aus den Daten hervorgeht.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-black">Praktisch bedeutet das:</strong> Gastbeiträge in Fachmedien, Podcast-Auftritte, Konferenzvorträge, LinkedIn-Artikel, Erwähnungen in Branchenberichten. Alles, was deinen Namen mit deinem Thema verknüpft — außerhalb deiner eigenen Website.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">2. Semantische Tiefe</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Ein echter Experte benutzt Fachbegriffe natürlich. Er kennt die Nuancen, die Ausnahmen, die Randfälle. Ein Generalist schreibt „KI wird die Suche verändern". Ein Experte schreibt „Retrieval-Augmented Generation ermöglicht KI-Systemen, aktuelle Webinhalte in Echtzeit einzubeziehen, was die statischen Trainingsdaten ergänzt."
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-black">KI erkennt den Unterschied.</strong> Nicht durch einen magischen Expertise-Detektor, sondern durch statistische Muster. Experten-Texte korrelieren mit bestimmten sprachlichen Merkmalen, die LLMs in ihren Trainingsdaten gelernt haben.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">3. Verifizierbare Originalität</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Eigene Daten, eigene Studien, eigene Erfahrungsberichte. Wenn du schreibst „Wir haben 200 Hamburger KMU-Websites analysiert und festgestellt, dass nur 12 % ein llms.txt haben", ist das zitierbarer als jede Zusammenfassung einer Gartner-Studie.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Warum? Weil nur du diese Daten hast. KI-Systeme brauchen einzigartige Informationsbausteine. Wenn alle den gleichen Gartner-Report zitieren, braucht die KI nicht noch eine Quelle, die das Gleiche sagt. <strong className="text-black">Sie braucht die Quelle, die etwas Neues beisteuert.</strong>
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">4. Widerspruchsfreiheit</h3>
            <p className="text-gray-600 leading-relaxed">
              Wenn du auf einer Seite schreibst „AI SEO kostet ab 2.000 Euro monatlich" und auf einer anderen „Schon ab 500 Euro monatlich möglich", hast du ein Trust-Problem. Nicht bei Google — der Crawler vergleicht deine Seiten nicht inhaltlich. Aber ein LLM, das beide Seiten in seinen Trainingsdaten hat, registriert den Widerspruch. Und widersprüchliche Quellen sind weniger vertrauenswürdig. So einfach ist das.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">5. Schema.org als Maschinenlesbarer Beweis</h3>
            <p className="text-gray-600 leading-relaxed">
              Strukturierte Daten sind für KI-Systeme das, was ein Notarstempel für ein Dokument ist. Person-Schema mit sameAs-Links zu LinkedIn, Organisation-Schema mit nachweisbaren Adressen, Article-Schema mit Autor-Verknüpfung. <strong className="text-black">Das ersetzt keine Expertise — aber es macht vorhandene Expertise maschinenlesbar.</strong> Und für ein System, das Milliarden von Seiten verarbeitet, ist Maschinenlesbarkeit kein Nice-to-Have.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Die Autoren-Bio-Illusion                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Die Autoren-Bio-Illusion: Warum du dich selbst belügst
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Lass uns das mal durchspielen. Du schreibst auf deine Website: „Max Mustermann ist ein führender Experte für digitales Marketing mit über 15 Jahren Erfahrung." Beeindruckend. Google liest das und denkt: „Ok, da steht was über den Autor." ChatGPT liest das und denkt: „Interessant, sagt er über sich selbst."
          </p>
          <p>
            Merkst du das Problem? <strong className="text-black">Selbstdeklarierte Expertise ist für KI wertlos.</strong> Es ist, als würdest du beim Bewerbungsgespräch sagen: „Ich bin der Beste" — ohne Referenzen, ohne Portfolio, ohne nachweisbare Ergebnisse. Der Personaler lächelt höflich und legt deinen Lebenslauf auf den „Nein"-Stapel.
          </p>
          <p>
            Die Autoren-Bio ist nicht nutzlos. Für Google ist sie ein nützliches Signal im Gesamtkontext. Aber wenn sie dein einziges E-E-A-T-Signal ist, hast du kein E-E-A-T. Du hast eine Visitenkarte.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 my-10">
          <h3 className="text-xl font-semibold text-black mb-4">Der E-E-A-T-Realitätscheck</h3>
          <p className="text-gray-600 leading-relaxed mb-4">Prüfe ehrlich, wie viele dieser Punkte auf dich zutreffen:</p>
          <ul className="space-y-3 text-gray-600 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>Dein Name erscheint auf externen Fachwebsites in Verbindung mit deinem Thema</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>Du hast Gastbeiträge, Podcast-Auftritte oder Konferenzvorträge zum Thema</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>Deine Inhalte enthalten eigene Daten, Studien oder einzigartige Erfahrungsberichte</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>Andere Experten oder Medien zitieren deine Aussagen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>Dein LinkedIn-Profil bestätigt deine fachliche Ausrichtung mit nachweisbaren Stationen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>Deine Website hat Schema.org Person- oder Organization-Markup mit sameAs-Verlinkungen</span>
            </li>
          </ul>
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600">
              <strong className="text-black">5-6 Punkte:</strong> Solide E-E-A-T-Basis für KI. <strong className="text-black">3-4 Punkte:</strong> Ausbaufähig, aber auf dem richtigen Weg. <strong className="text-black">0-2 Punkte:</strong> Du hast eine Autoren-Bio. Herzlichen Glückwunsch.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Experience: Der geheime Vorteil                             */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Experience — der geheime Vorteil, den KI besser erkennt als Google
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Das erste E wurde 2022 hinzugefügt. Google wollte damit Content von Leuten belohnen, die tatsächlich Erfahrung mit dem Thema haben. Ein Restaurantkritiker, der das Restaurant besucht hat. Ein Reiseblogger, der tatsächlich dort war. Ein Handwerker, der das Werkzeug selbst benutzt.
          </p>
          <p>
            Für Google ist Experience schwer zu verifizieren. Woher soll der Algorithmus wissen, ob du wirklich in Vietnam warst? Er kann nur auf Proxies schauen — Fotos, spezifische Details, nutzergenerierte Reviews.
          </p>
          <p>
            <strong className="text-black">Für KI ist Experience paradoxerweise einfacher zu erkennen.</strong> Warum? Weil LLMs auf Milliarden von Texten trainiert wurden und statistische Muster gelernt haben. Ein Text von jemandem, der etwas erlebt hat, klingt anders als ein Text von jemandem, der darüber gelesen hat. Spezifischere Details, unerwartete Beobachtungen, persönliche Bewertungen, die von der Mainstream-Meinung abweichen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 my-10">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-black mb-3">Ohne Experience</h3>
            <p className="text-gray-600 text-sm leading-relaxed italic">
              „KI-Sichtbarkeit ist ein wichtiger Trend im digitalen Marketing. Unternehmen sollten ihre Online-Präsenz für KI-Systeme optimieren, um zukunftsfähig zu bleiben."
            </p>
            <p className="text-sm text-gray-400 mt-3">Klingt wie jeder andere Artikel zum Thema. KI hat keinen Grund, ausgerechnet das zu zitieren.</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-black mb-3">Mit Experience</h3>
            <p className="text-gray-600 text-sm leading-relaxed italic">
              „Als ich 2025 die Websites von 50 Hamburger KMUs auf KI-Sichtbarkeit testete, hatte keine einzige ein llms.txt. Die häufigste Reaktion der Geschäftsführer: ‚Was ist ein LLM?'"
            </p>
            <p className="text-sm text-gray-400 mt-3">Spezifisch, einzigartig, verifizierbar. Genau das, was KI als zitierbare Quelle braucht.</p>
          </div>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Der Trick ist: <strong className="text-black">Experience kannst du nicht faken.</strong> Du kannst eine Autoren-Bio erfinden. Du kannst Expertise simulieren, indem du Fachbegriffe zusammenkopierst. Aber echte Erfahrung produziert Content, der statistisch anders aussieht. Und LLMs sind sehr, sehr gut darin, statistische Muster zu erkennen.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Praktische Umsetzung                                        */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          E-E-A-T für KI aufbauen: Was tatsächlich funktioniert
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Genug Theorie. Hier ist der Plan, der funktioniert — vorausgesetzt, du hast tatsächlich Expertise. Falls nicht, ist Schritt 0: Expertise aufbauen. Das dauert Jahre. Sorry, keine Abkürzung.
        </p>

        <ol className="space-y-8">
          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-black mb-3">
                Schritt 1: Entitäts-Identität etablieren
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Dein Name oder deine Marke muss als Entität in den KI-Trainingsdaten existieren. Das bedeutet: Konsistente Präsenz über verschiedene Quellen hinweg. Gleicher Name, gleiche Beschreibung, gleiche thematische Zuordnung.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span>LinkedIn-Profil mit klarer fachlicher Positionierung</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span>Google Business Profile (falls lokal relevant)</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span>Crunchbase, XING, relevante Branchenverzeichnisse</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span>Schema.org Person/Organization mit sameAs-Links</span></li>
              </ul>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-black mb-3">
                Schritt 2: Externe Expertise-Signale aufbauen
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Deine eigene Website allein reicht nicht. Du brauchst externe Bestätigung. KI-Systeme gewichten Quellen stärker, wenn die Expertise von Dritten bestätigt wird.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span>Gastbeiträge auf relevanten Fachportalen (t3n, OMR, Branchenmedien)</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span>Podcast-Interviews und Webinar-Auftritte</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span>Konferenzvorträge (auch lokale Meetups zählen)</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span>Fachliche LinkedIn-Beiträge mit Engagement</span></li>
              </ul>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-black mb-3">
                Schritt 3: Content mit echten Daten erstellen
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Hör auf, die immer gleichen Studien zu zitieren. Erstelle eigene Daten. Analysiere etwas. Messe etwas. Teste etwas. Und dann schreib darüber.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span>Eigene Analysen und Mini-Studien deiner Branche</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span>Case Studies mit konkreten Zahlen und Ergebnissen</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span>Erfahrungsberichte aus der Praxis mit spezifischen Details</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span>Frameworks und Methoden, die du selbst entwickelt hast</span></li>
              </ul>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-black mb-3">
                Schritt 4: Technische E-E-A-T-Signale implementieren
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Jetzt — und erst jetzt — kommen die technischen Maßnahmen. Sie verstärken vorhandene Expertise, aber sie ersetzen sie nicht.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span>Article-Schema mit Autor-Verknüpfung auf jeder Seite</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span>Person-Schema für jeden Autor mit Credentials und sameAs</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span>Dedizierte Autorenseite mit nachweisbaren Qualifikationen</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span>llms.txt und ai.txt für KI-Crawler-Transparenz</span></li>
              </ul>
            </div>
          </li>
        </ol>
      </section>

      {/* ============================================================ */}
      {/*  Häufige Fehler                                              */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Die 5 dümmsten E-E-A-T-Fehler, die ich jeden Tag sehe
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">1. „Wir sind Experten, weil wir es auf unsere Website schreiben"</h3>
            <p className="text-gray-600 leading-relaxed">
              Wenn selbstdeklarierte Expertise ausreichen würde, wäre jeder LinkedIn-Nutzer ein „Thought Leader". KI-Systeme sind trainiert auf Milliarden von Texten — sie kennen den Unterschied zwischen jemandem, der über ein Thema schreibt, und jemandem, der ein Thema beherrscht. Dein „Über uns"-Text überzeugt niemanden, der nicht bereits überzeugt ist.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">2. Autoren-Bio ohne externe Bestätigung</h3>
            <p className="text-gray-600 leading-relaxed">
              „15 Jahre Erfahrung im digitalen Marketing" steht in deiner Bio. Toll. Kann ich irgendwo nachprüfen, dass du in den letzten 15 Jahren tatsächlich Marketing gemacht hast? Keine LinkedIn-Verlinkung, keine Publikationen, keine Vorträge? Dann ist deine Bio so glaubwürdig wie eine Fünf-Sterne-Bewertung von deiner Mutter.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">3. E-E-A-T als einmalige Checkbox-Übung</h3>
            <p className="text-gray-600 leading-relaxed">
              Autoren-Bio hinzugefügt. Schema implementiert. Fertig, E-E-A-T ist erledigt! Nein. E-E-A-T für KI ist kein Projekt mit Deadline. Es ist ein fortlaufender Prozess. Jeder neue Artikel, jeder Gastbeitrag, jede Erwähnung baut dein E-E-A-T auf — oder erodiert es, wenn du Unsinn publizierst. Es ist wie Fitness: Einmal ins Fitnessstudio gehen macht dich nicht fit.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">4. Content über alles statt Tiefe in einem Thema</h3>
            <p className="text-gray-600 leading-relaxed">
              Du schreibst über SEO, Social Media, E-Commerce, HR, Nachhaltigkeit und Kryptowährungen. Auf der gleichen Website. Aus der gleichen Autoren-Bio. KI liest das und denkt: „Der ist Experte für nichts." Thematische Fokussierung ist für KI-E-E-A-T entscheidend. Lieber 30 tiefe Artikel zu einem Kernthema als 300 oberflächliche zu allem.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">5. Widersprüche auf der eigenen Website</h3>
            <p className="text-gray-600 leading-relaxed">
              Auf Seite A: „Schema-Markup ist der wichtigste Faktor für KI-Sichtbarkeit." Auf Seite B: „Content-Qualität ist wichtiger als jedes technische Signal." Auf Seite C: „Ohne Backlinks keine KI-Sichtbarkeit." Ja, was denn nun? Widersprüche auf der eigenen Website sind für KI-Systeme ein rotes Tuch. Wenn du dir selbst widersprichst, warum sollte eine KI irgendetwas von dir zitieren?
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-10">
          Häufig gestellte Fragen
        </h2>
        <div className="space-y-6">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">{faq.q}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Weiterführende Guides                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Weiterführende Guides
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
            href="/wissen/ai-content-strategie"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              AI Content Strategie
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Inhalte erstellen, die KI-Systeme als Quelle nutzen wollen.
            </p>
          </a>

          <a
            href="/wissen/was-ist-geo"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              Was ist GEO?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Generative Engine Optimization erklärt — von der Theorie zur Praxis.
            </p>
          </a>

          <a
            href="/wissen/sichtbarkeit-in-chatgpt"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              Sichtbarkeit in ChatGPT
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Wie ChatGPT Quellen auswählt und wie du eine davon wirst.
            </p>
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <div className="bg-[#121212] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-white mb-4">
            Wie steht es um dein E-E-A-T für KI?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Finde heraus, ob KI-Systeme dich als Experten einstufen — oder ob du nur eine Autoren-Bio hast. Kostenlose Analyse deiner KI-Sichtbarkeit und E-E-A-T-Signale.
          </p>
          <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose E-E-A-T-Analyse anfragen" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
