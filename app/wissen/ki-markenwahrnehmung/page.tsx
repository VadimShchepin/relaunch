import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Kann ich beeinflussen, was ChatGPT über meine Marke sagt?',
    a: 'Ja, aber nicht direkt und nicht über Nacht. ChatGPTs Wissen über deine Marke stammt aus Trainingsdaten — also dem gesamten Internet, das vor dem letzten Training-Cutoff existierte. Du beeinflusst es indirekt, indem du konsistente, positive und faktenbasierte Informationen über deine Marke verbreitest: auf deiner Website, in Fachartikeln, auf Wikipedia (wenn relevant), in Pressemeldungen und in Bewertungen. Je mehr hochwertige, konsistente Erwähnungen existieren, desto positiver wird das Bild, das ChatGPT von deiner Marke hat. Das ist kein Sprint, sondern ein Marathon — der aber massive langfristige Wirkung hat.',
  },
  {
    q: 'Wie finde ich heraus, was KI-Systeme aktuell über meine Marke denken?',
    a: 'Frag sie. Ernsthaft. Stell ChatGPT, Perplexity und Google Gemini direkte Fragen über deine Marke: „Was ist [Markenname]?", „Ist [Markenname] empfehlenswert?", „Welche Alternativen gibt es zu [Markenname]?". Dokumentiere die Antworten und wiederhole das monatlich. Du wirst Muster erkennen: Welche Informationen sind korrekt, welche veraltet, welche komplett falsch? Das ist dein Ausgangspunkt. Zusätzlich gibt es spezialisierte Monitoring-Tools, die KI-Erwähnungen systematisch tracken.',
  },
  {
    q: 'Reicht eine Pressemeldung, um die KI-Wahrnehmung zu verbessern?',
    a: 'Nein. Eine einzelne Pressemeldung ist wie ein einzelner Tropfen in einem Ozean aus Daten. KI-Systeme bewerten den Konsens über hunderte bis tausende Quellen. Eine Pressemeldung hilft nur, wenn sie von anderen Medien aufgegriffen, zitiert und weiterverbreitet wird. Und selbst dann ist sie nur ein Baustein. Was wirklich hilft: konsistente Erwähnungen über einen längeren Zeitraum, auf verschiedenen Plattformen, von verschiedenen Quellen. Das ist aufwändiger als eine Pressemeldung. Aber es funktioniert tatsächlich.',
  },
  {
    q: 'Was ist der Unterschied zwischen Google-Reputation und KI-Reputation?',
    a: 'Google-Reputation basiert auf Backlinks, Domain-Autorität und Ranking-Positionen — technische Signale, die du über SEO steuerst. KI-Reputation basiert auf dem semantischen Verständnis deiner Marke: Was wird über dich gesagt, wie oft, wo und in welchem Kontext? Du kannst bei Google auf Seite 1 ranken und trotzdem ein katastrophales KI-Markenbild haben — zum Beispiel, wenn Foren und Bewertungsportale voller Beschwerden sind, die in die Trainingsdaten einfließen. Umgekehrt kann eine kleine Marke mit exzellenten Drittquellen-Erwähnungen bei ChatGPT hervorragend dastehen, obwohl sie bei Google kaum sichtbar ist.',
  },
  {
    q: 'Wie wichtig sind Wikipedia-Einträge für die KI-Wahrnehmung?',
    a: 'Extrem wichtig — wenn deine Marke relevant genug ist, einen zu haben. Wikipedia ist eine der meistgewichteten Quellen in den Trainingsdaten aller großen Sprachmodelle. Ein korrekter, gut gepflegter Wikipedia-Eintrag ist Gold wert. Aber: Wikipedia hat strenge Relevanzkriterien. Nicht jedes Unternehmen qualifiziert sich. Und einen Eintrag zu manipulieren oder zu kaufen führt dazu, dass er gelöscht wird — und das ist schlimmer als keinen zu haben, weil die Löschung selbst ein negatives Signal ist.',
  },
  {
    q: 'Können negative Bewertungen mein KI-Markenbild dauerhaft beschädigen?',
    a: 'Ja, wenn sie in die Trainingsdaten einfließen und nicht durch positive Signale ausgeglichen werden. ChatGPT unterscheidet nicht zwischen „alter Bewertung von einem frustrierten Kunden" und „aktueller Zustand des Unternehmens". Alles fließt in den Konsens ein. Die Lösung ist nicht, negative Bewertungen zu löschen (das funktioniert bei Trainingsdaten nicht), sondern sie durch überwiegend positive, authentische Signale zu überlagern. 50 echte 5-Sterne-Bewertungen neutralisieren 5 schlechte Bewertungen — sowohl bei Menschen als auch bei KI.',
  },
  {
    q: 'Wie lange dauert es, bis Änderungen an meiner Markenwahrnehmung in KI-Systemen sichtbar werden?',
    a: 'Bei Perplexity: Tage bis Wochen, weil es in Echtzeit crawlt. Bei Google AI Overviews: Wochen bis Monate, abhängig davon, wann Google deine aktualisierten Seiten neu indexiert. Bei ChatGPT: Monate, weil Trainingsdaten-Updates nicht täglich stattfinden. Das Browsing-Feature kann aktuellere Informationen zeigen, aber das Basiswissen ändert sich langsamer. Plane mit einem Horizont von 3–6 Monaten für messbare Veränderungen über alle Plattformen hinweg.',
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
  headline: 'Wie KI-Systeme über deine Marke entscheiden — und was du dagegen tun kannst',
  description:
    'ChatGPT, Perplexity und Google AI bilden sich eine Meinung über deine Marke — ob du willst oder nicht. Trainingsdaten, Reviews, Presse: Wie KI-Markenwahrnehmung entsteht und wie du sie beeinflusst.',
  image: 'https://aiseo.hamburg/images/wissen/ki-markenwahrnehmung.jpg',
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
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/ki-markenwahrnehmung',
  inLanguage: 'de',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'KI-Markenwahrnehmung' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function KIMarkenwahrnehmungPage() {
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

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-52 md:pb-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li><a href="/" className="hover:text-brand-accent transition-colors">Startseite</a></li>
            <li>/</li>
            <li><a href="/wissen" className="hover:text-brand-accent transition-colors">Wissen</a></li>
            <li>/</li>
            <li className="text-black font-medium">KI-Markenwahrnehmung</li>
          </ol>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
          Wie KI-Systeme über deine Marke entscheiden — und was du dagegen tun kannst
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          ChatGPT hat eine Meinung über deine Marke. Perplexity auch. Google AI sowieso. Und diese Meinung basiert nicht auf deiner hübschen Imagebroschüre, sondern auf allem, was das Internet jemals über dich gesagt hat. Auch die Sachen, die du lieber vergessen würdest.
        </p>
      </section>

      {/* TL;DR */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR — Für die Ungeduldigen</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">1.</span>
              <span><strong className="text-black">KI-Systeme „denken" über deine Marke</strong> — basierend auf Trainingsdaten, Weberwähnungen, Bewertungen, Presseartikeln und Wikipedia. Du kontrollierst das nicht direkt, aber du kannst es beeinflussen.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">2.</span>
              <span><strong className="text-black">Eine Pressemeldung reicht nicht.</strong> KI-Systeme bewerten den Konsens über hunderte Quellen. Einzelne Aktionen verpuffen. Konsistenz gewinnt.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">3.</span>
              <span><strong className="text-black">Google-Reputation ≠ KI-Reputation.</strong> Du kannst auf Seite 1 ranken und trotzdem ein katastrophales KI-Markenbild haben.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">4.</span>
              <span><strong className="text-black">Es dauert 3–6 Monate</strong>, bis Änderungen in KI-Systemen sichtbar werden. Wer jetzt nicht anfängt, verliert jetzt schon.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Wie LLMs sich eine Meinung bilden */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Wie ein Sprachmodell lernt, deine Marke zu „kennen" (oder zu verachten)
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Ein Large Language Model hat keine Gefühle. Es hat keine Meinung. Es hat keine persönliche Erfahrung mit deinem Produkt. Was es hat, ist eine statistische Zusammenfassung von allem, was jemals über deine Marke geschrieben wurde. Und diese Zusammenfassung ist dein KI-Markenbild.
          </p>
          <p>
            <strong className="text-black">Stell dir vor, ein sehr aufmerksamer, absolut humorloser Bibliothekar liest alles, was jemals über dich veröffentlicht wurde — und fasst es in einem Satz zusammen.</strong> Das ist im Grunde das, was ChatGPT macht. Nur dass der Bibliothekar 175 Milliarden Parameter hat und keinen Feierabend kennt.
          </p>
          <p>
            Das Problem: Du hast keinen Einfluss darauf, was der Bibliothekar gelesen hat. Aber du hast Einfluss darauf, was er in Zukunft zu lesen bekommt. Und genau darum geht es bei KI-Markenwahrnehmung.
          </p>
        </div>
      </section>

      {/* Die 5 Quellen der KI-Markenwahrnehmung */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Die 5 Quellen, aus denen KI-Systeme dein Markenbild zusammensetzen
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Nicht alle Quellen sind gleich gewichtet. Manche sind Gold, manche sind Müll, und manche sind aktiv giftig. Hier ist die Hierarchie.
        </p>

        <ol className="space-y-6">
          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                1. Wikipedia und Wikidata
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                Wikipedia ist die Mutter aller Trainingsdaten. Jedes große Sprachmodell wurde ausgiebig auf Wikipedia trainiert. Wenn deine Marke einen Wikipedia-Eintrag hat, ist das die primäre Informationsquelle für ChatGPT. <strong className="text-black">Ein korrekter, gut gepflegter Wikipedia-Eintrag ist mehr wert als 100 Blogartikel.</strong>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Aber bevor du jetzt losrennst und einen Wikipedia-Eintrag schreibst: Wikipedia hat Relevanzkriterien. Nicht jedes Unternehmen qualifiziert sich. Und einen Eintrag zu kaufen oder zu manipulieren führt dazu, dass er gelöscht wird — was noch schlimmer ist als keinen zu haben. Das ist wie gefeuert zu werden — schlimmer als nie angestellt gewesen zu sein.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                2. Presse und Fachartikel
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                Erwähnungen in seriösen Medien sind das zweitwichtigste Signal. Das Handelsblatt, t3n, Fachmagazine, branchenspezifische Portale — alles, was Google als „autoritativ" einstuft, fließt auch in KI-Trainingsdaten ein.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong className="text-black">Aber: Eine einzelne Pressemeldung auf einem Pay-to-Play-Portal ist so nützlich wie ein Regenschirm aus Pappe.</strong> KI-Systeme erkennen den Unterschied zwischen redaktionellem Content und bezahlten Platzierungen. Zumindest meistens. Und die Quote wird besser, nicht schlechter.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                3. Bewertungen und Reviews
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                Google Reviews, Trustpilot, G2, Capterra, Kununu — all diese Plattformen fließen in die Trainingsdaten ein. Wenn 200 Leute auf Google schreiben, dass dein Service fantastisch ist, wird ChatGPT das widerspiegeln. Wenn 200 Leute schreiben, dass du eine Katastrophe bist… nun, dann wird ChatGPT auch das widerspiegeln.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong className="text-black">Das Schöne an Bewertungen ist: Du kannst sie aktiv beeinflussen — durch guten Service.</strong> Revolutionäres Konzept, ich weiß. Wer hätte gedacht, dass die beste Marketingstrategie darin besteht, nicht schlecht zu sein.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                4. Deine eigene Website
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                Ja, deine eigene Website fließt in die Trainingsdaten ein — vorausgesetzt, du blockierst die KI-Crawler nicht. Aber hier kommt der Haken: <strong className="text-black">KI-Systeme gewichten Eigenaussagen weniger als Drittquellen.</strong> Wenn du auf deiner Website schreibst „Wir sind die besten", ist das für ChatGPT etwa so überzeugend wie ein Kandidat, der im Vorstellungsgespräch sagt „Ich bin perfekt".
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Was auf deiner Website hilft: konsistente Fakten, klare Positionierung, nachweisbare Expertise (Case Studies, Daten, Methoden) und strukturierte Informationen, die KI-Systeme leicht extrahieren können.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                5. Foren, Social Media und Community-Content
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                Reddit, Quora, LinkedIn-Posts, Twitter-Threads, Branchenforen — alles wird von LLMs aufgesaugt wie ein Staubsauger, dem jemand den Turbo-Modus beigebracht hat. Und hier wird es gefährlich: <strong className="text-black">Ein viraler Reddit-Thread über deinen schlechten Kundenservice kann mehr Gewicht haben als 10 deiner eigenen Blogartikel.</strong>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Die Ironie: Viele Unternehmen investieren Tausende in ihre Website, ignorieren aber komplett, was in Foren über sie geschrieben wird. Das ist, als würdest du dein Wohnzimmer mit Designer-Möbeln einrichten und gleichzeitig die Haustür offen lassen.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* Google vs ChatGPT Markenwissen */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Was Google über deine Marke weiß vs. was ChatGPT über deine Marke „denkt"
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Das sind zwei komplett verschiedene Dinge. Und wer das nicht versteht, optimiert an der falschen Stelle.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-sm font-semibold text-black">Aspekt</th>
                <th className="py-3 pr-4 text-sm font-semibold text-blue-600">Google (Suche)</th>
                <th className="py-3 text-sm font-semibold text-green-600">ChatGPT / LLMs</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Datenquelle</td>
                <td className="py-3 pr-4">Live-Index des Webs</td>
                <td className="py-3">Trainingsdaten (Monate alt) + Browsing</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Wie du gefunden wirst</td>
                <td className="py-3 pr-4">Keywords, Backlinks, technisches SEO</td>
                <td className="py-3">Semantischer Konsens über deine Marke</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Was „Autorität" bedeutet</td>
                <td className="py-3 pr-4">Domain Authority, Backlink-Profil</td>
                <td className="py-3">Häufigkeit und Qualität von Erwähnungen</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Aktualität</td>
                <td className="py-3 pr-4">Nahezu Echtzeit</td>
                <td className="py-3">Verzögert (Monate bei Trainingsdaten)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Negative Bewertungen</td>
                <td className="py-3 pr-4">Beeinflussen Rankings kaum direkt</td>
                <td className="py-3">Fließen direkt in das Markenbild ein</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Deine Kontrolle</td>
                <td className="py-3 pr-4">Hoch (SEO, Content, Technik)</td>
                <td className="py-3">Indirekt (Konsens über Zeit aufbauen)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Vergleich</td>
                <td className="py-3 pr-4">Personalausweis — kontrollierte Fakten</td>
                <td className="py-3">Nachbarschaftsgerüchte — was alle sagen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Die Konsequenz ist brutal einfach: <strong className="text-black">Bei Google kontrollierst du, was Leute über dich finden. Bei ChatGPT kontrollierst du, was Leute über dich denken.</strong> Und das Zweite ist auf Dauer mächtiger.
          </p>
          <p>
            Denn wenn ein potenzieller Kunde ChatGPT fragt „Welche AI SEO Agentur in Hamburg ist empfehlenswert?" und deine Marke nicht genannt wird — oder schlimmer, negativ erwähnt wird — dann ist es egal, ob du bei Google auf Platz 1 rankst. Der Kunde hat seine Entscheidung schon getroffen, bevor er überhaupt bei Google sucht.
          </p>
        </div>
      </section>

      {/* Die Pressemeldungs-Illusion */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          „Wir schicken einfach eine Pressemeldung raus" — und andere fatale Irrtümer
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-10">
          <p>
            Ich erlebe das mindestens dreimal im Monat. Ein Geschäftsführer ruft an, aufgeregt, manchmal leicht panisch: „ChatGPT empfiehlt unseren Konkurrenten! Was machen wir?!" Meine Antwort: „Was haben Sie bisher getan?" Die Antwort: „Wir haben eine Pressemeldung verschickt."
          </p>
          <p>
            <strong className="text-black">Das ist, als würdest du versuchen, einen Ozean mit einem Teelöffel umzurühren.</strong> Technisch machbar. Praktisch sinnlos. Und die Leute um dich herum schauen dich mitleidig an.
          </p>
          <p>
            Eine einzelne Pressemeldung verändert das KI-Markenbild nicht. Nicht einmal ein bisschen. KI-Systeme bewerten den Konsens über hunderte bis tausende Quellen. Eine Quelle mehr oder weniger macht keinen messbaren Unterschied. Was einen Unterschied macht, ist ein konsistentes, langfristiges Muster von positiven, authentischen Erwähnungen über verschiedene Plattformen.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-semibold text-black mb-4">Die häufigsten Irrtümer über KI-Markenwahrnehmung</h3>
          <ul className="space-y-4 text-gray-600 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
              <span><strong className="text-black">„Eine Pressemeldung reicht."</strong> — Nein. Es braucht hunderte konsistente Signale über Monate hinweg.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
              <span><strong className="text-black">„Wir kaufen einen Wikipedia-Eintrag."</strong> — Wird gelöscht, und die Löschung ist ein negatives Signal. Herzlichen Glückwunsch.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
              <span><strong className="text-black">„Wir blockieren KI-Crawler, dann können sie nichts Schlechtes sagen."</strong> — Dann können sie auch nichts Gutes sagen. Und sie greifen trotzdem auf vorhandene Trainingsdaten zurück.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
              <span><strong className="text-black">„Wir schreiben auf unsere Website, dass wir die Besten sind."</strong> — KI-Systeme gewichten Eigenaussagen weniger als Drittquellen. „Ich bin toll" sagt jeder.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
              <span><strong className="text-black">„Wir lassen Fake-Bewertungen schreiben."</strong> — LLMs erkennen Fake-Bewertungen-Muster, weil sie auf Millionen davon trainiert wurden. Du spielst gegen den Schiedsrichter.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Was tatsächlich funktioniert */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Was tatsächlich funktioniert: Der 6-Punkte-Plan für dein KI-Markenbild
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Keine Tricks, keine Abkürzungen, kein Bullshit. Nur das, was über 3–6 Monate konsistent angewendet zu messbaren Ergebnissen führt. Langweilig? Ja. Effektiv? Extrem.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">1. KI-Marken-Audit durchführen</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-3">
              Bevor du etwas veränderst, musst du wissen, wo du stehst. Frag ChatGPT, Perplexity, Gemini und Claude nach deiner Marke. Dokumentiere die Antworten. Identifiziere Lücken, Fehler und negative Muster.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>„Was ist [Marke]?" auf allen großen KI-Plattformen testen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>„Ist [Marke] empfehlenswert?" und Alternativen-Fragen stellen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Antworten monatlich dokumentieren und Veränderungen tracken</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">2. Konsistente Markeninformationen über alle Kanäle</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-3">
              Wenn deine Website sagt, du bist eine „AI SEO Agentur", LinkedIn „Digitalagentur", Google Business „Marketing Beratung" und dein Impressum „Webdesign Studio" — dann hat ChatGPT keine Ahnung, was du bist. <strong className="text-black">Und wenn eine KI nicht weiß, was du bist, wird sie dich nicht empfehlen.</strong>
              </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Einheitliche Markenbeschreibung auf allen Plattformen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Gleiche Kernbotschaft auf Website, Social Media, Profilen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Schema.org-Markup mit korrekten Organisationsdaten</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">3. Drittquellen-Erwähnungen systematisch aufbauen</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-3">
              Gastbeiträge in Fachmedien, Podcast-Auftritte, Konferenz-Vorträge, Branchen-Interviews. Alles, was eine dritte Partei veranlasst, über dich zu schreiben. Das ist das digitale Äquivalent von Mundpropaganda — nur dass die Mundpropaganda in Trainingsdaten fließt und für die nächsten Jahre dort bleibt.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Gastbeiträge auf Fachportalen veröffentlichen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Expert Quotes für Journalisten anbieten (HARO, Fraggly, etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>In Branchenforen und auf LinkedIn aktiv mit Expertise sichtbar sein</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">4. Bewertungen aktiv managen</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-3">
              Nicht „kaufen". Nicht „faken". <strong className="text-black">Managen.</strong> Das bedeutet: zufriedene Kunden aktiv um Bewertungen bitten, auf negative Bewertungen professionell antworten und das Feedback ernst nehmen. Revolutionär, ich weiß.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Automatisierte Bewertungsanfrage nach jedem Projekt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Auf negative Bewertungen sachlich und lösungsorientiert antworten</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Bewertungen auf verschiedenen Plattformen verteilen (Google, Trustpilot, Branchenportale)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">5. Expertise durch eigene Inhalte demonstrieren</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-3">
              Case Studies, Whitepapers, eigene Datenanalysen, Branchenreports. Inhalte, die zeigen, dass du nicht nur redest, sondern tatsächlich Ahnung hast. <strong className="text-black">KI-Systeme lieben Originalquellen, die niemand sonst hat.</strong>
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Regelmäßig Case Studies mit konkreten Zahlen veröffentlichen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Eigene Daten und Analysen statt Wiederholung von Allgemeinwissen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Autoren mit echtem Namen, Bio und nachweisbarer Expertise</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">6. Technisch sichtbar sein für KI-Crawler</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-3">
              Klingt banal, wird trotzdem ständig verbockt. Wer GPTBot, ClaudeBot und PerplexityBot in der robots.txt blockiert, ist für diese Systeme unsichtbar. Und wer unsichtbar ist, kann kein positives Markenbild aufbauen. Logisch, oder?
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Alle relevanten KI-Crawler in robots.txt erlauben</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>llms.txt mit klarer Markenpositionierung implementieren</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Organization-Schema mit allen relevanten Markeninformationen</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Der Marken-Selbstcheck */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Marken-Selbstcheck: Was weiß die KI über dich?
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Mach diesen Test. Jetzt. Es dauert 10 Minuten. Und die Antworten werden entweder beruhigend oder alarmierend sein. Wahrscheinlich alarmierend. Aber besser jetzt als in einem Jahr.
        </p>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
          <ul className="space-y-4 text-gray-600 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">1.</span>
              <span>Frag ChatGPT: „Was ist [deine Marke]?" — Ist die Antwort korrekt? Vollständig? Positiv?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">2.</span>
              <span>Frag Perplexity: „Ist [deine Marke] empfehlenswert?" — Welche Quellen werden zitiert?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">3.</span>
              <span>Frag ChatGPT: „Welche Alternativen gibt es zu [deine Marke]?" — Wirst du überhaupt als Option genannt?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">4.</span>
              <span>Google „[deine Marke] Erfahrung" — Was steht in den Top 10? Das fließt in Trainingsdaten ein.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">5.</span>
              <span>Prüfe, ob deine robots.txt GPTBot, ClaudeBot und PerplexityBot erlaubt.</span>
            </li>
          </ul>

          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600">
              <strong className="text-black">Alles korrekt und positiv?</strong> Gut, weiter so. <strong className="text-black">Lücken oder Fehler?</strong> Du weißt jetzt, wo du ansetzen musst. <strong className="text-black">ChatGPT kennt dich nicht?</strong> Das ist die schlechteste aller Antworten. Nicht-Existenz ist schlimmer als ein schlechtes Image — denn ein schlechtes Image kann man korrigieren, aber wer nicht existiert, kann nicht korrigiert werden.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Fazit */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Fazit: Deine Marke hat keine Wahl — aber du schon
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            KI-Systeme bilden sich eine Meinung über deine Marke, ob du mitspielst oder nicht. Die Frage ist nicht, ob ChatGPT, Perplexity und Google AI über dich reden werden. Die Frage ist, was sie sagen werden.
          </p>
          <p>
            <strong className="text-black">Du kannst das ignorieren. Dann erzählt die KI das, was das Internet eben hergibt — inklusive der frustrierten Kununu-Bewertung von 2019 und dem Reddit-Thread, in dem jemand dein Logo hässlich fand.</strong>
          </p>
          <p>
            Oder du nimmst die Sache in die Hand. Nicht mit einer einzelnen Pressemeldung. Nicht mit Fake-Bewertungen. Nicht mit der verzweifelten Hoffnung, dass sich das schon irgendwie regelt. Sondern mit einer konsistenten, langfristigen Strategie, die auf echten Signalen basiert.
          </p>
          <p>
            Das klingt nach Arbeit, weil es Arbeit ist. Aber es ist die Art von Arbeit, die sich in 3–6 Monaten auszahlt und danach jahrelang Rendite bringt. Und das ist mehr, als man von den meisten Marketingmaßnahmen sagen kann.
          </p>
        </div>

        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm mt-10">
          <p className="text-lg md:text-xl font-semibold text-black leading-snug">
            Zusammenfassung: KI-Markenwahrnehmung entsteht aus dem Konsens aller Quellen im Internet — Wikipedia, Presse, Bewertungen, Foren, deine Website. Du beeinflusst diesen Konsens durch Konsistenz, Drittquellen-Erwähnungen und echte Expertise. Nicht durch Tricks. Nicht durch eine Pressemeldung. Durch Arbeit. Langweilige, effektive, unverzichtbare Arbeit.
          </p>
        </div>
      </section>

      {/* Weiterführende Guides */}
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
              KI-Sichtbarkeit: Der komplette Guide
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Das große Ganze: Was KI-Sichtbarkeit bedeutet und wie du sie systematisch aufbaust.
            </p>
          </a>

          <a
            href="/wissen/eeat-ki-sichtbarkeit"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              E-E-A-T und KI-Sichtbarkeit
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Erfahrung, Expertise, Autorität und Vertrauenswürdigkeit — was KI-Systeme wirklich bewerten.
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
              Deep-Dive: Wie ChatGPT Quellen auswählt und wie du dort als Marke sichtbar wirst.
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
              Wie du Content erstellst, der sowohl dein Markenbild stärkt als auch von KI zitiert wird.
            </p>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <div className="bg-[#121212] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-white mb-4">
            Was denkt ChatGPT über deine Marke?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Finde es heraus, bevor deine Kunden es tun. Kostenloser KI-Marken-Audit mit konkretem Aktionsplan.
          </p>
          <Button href="/ai-sichtbarkeit-now" primary text="Kostenlosen KI-Marken-Audit starten" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
