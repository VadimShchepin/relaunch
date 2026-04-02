import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Welche KI-Suchmaschine hat den größten Marktanteil in Deutschland?',
    a: 'Google dominiert mit über 90 % des deutschen Suchmarktes, wobei AI Overviews zunehmend in die Ergebnisse integriert werden. ChatGPT hat laut Schätzungen über 180 Millionen aktive Nutzer weltweit, wächst aber in Deutschland vor allem im professionellen Umfeld. Perplexity ist kleiner, wächst aber am schnellsten unter informationssuchenden Nutzern. Die Kombination aller drei erreicht die breiteste Zielgruppe — wer nur eine Plattform optimiert, ignoriert die anderen 30–60 % seines potenziellen Traffics.',
  },
  {
    q: 'Kann ich mit einer einzigen Strategie alle drei Plattformen abdecken?',
    a: 'Zu etwa 70 % ja. Alle drei Plattformen bevorzugen gut strukturierten, faktenbasierten Content mit klarer Autorenschaft und sauberen technischen Grundlagen. Die restlichen 30 % sind plattformspezifisch: Perplexity braucht frische Quellen und funktioniert besser mit aktuellen Daten, ChatGPT gewichtet Trainingsdaten-Qualität und Erwähnungen auf autoritativen Seiten, Google AI Overviews hängt stark an klassischen SEO-Signalen wie Backlinks und Domain-Autorität. Eine gemeinsame Basis plus plattformspezifische Feinabstimmung ist der effizienteste Weg.',
  },
  {
    q: 'Wie schnell indexiert Perplexity neue Inhalte im Vergleich zu ChatGPT?',
    a: 'Perplexity crawlt das Web in Echtzeit bei jeder Suchanfrage und kann neue Inhalte innerhalb von Minuten bis Stunden nach Veröffentlichung finden — vorausgesetzt, sie sind technisch zugänglich. ChatGPT verwendet ein hybrides Modell: Das Basiswissen stammt aus Trainingsdaten (Monate alt), das Browsing-Feature crawlt in Echtzeit, wird aber nicht bei jeder Anfrage aktiviert. Google AI Overviews nutzt den Google-Index, der neue Seiten je nach Domain-Autorität innerhalb von Stunden bis Wochen aufnimmt. Für zeitkritische Inhalte ist Perplexity also der schnellste Kanal.',
  },
  {
    q: 'Welche Plattform zitiert am häufigsten mit Quellenlinks?',
    a: 'Perplexity zitiert bei jeder Antwort mit nummerierten Quellenlinks — das ist sein Kernfeature. Google AI Overviews zeigt Links zu den Quellen, die die Antwort unterstützen, aber weniger prominent. ChatGPT verlinkt nur im Browsing-Modus und bei SearchGPT-Anfragen, nicht im Standard-Chat. Wenn dein Ziel direkter Referral-Traffic ist, liefert Perplexity das transparenteste Zitierverhalten.',
  },
  {
    q: 'Lohnt sich Optimierung für Google AI Overviews, wenn ich schon klassisches SEO mache?',
    a: 'Absolut, aber es ist kein komplett neues Projekt. Etwa 80 % der Signale, die für klassisches Google-Ranking wichtig sind, helfen auch bei AI Overviews: starke Domain-Autorität, relevante Backlinks, guter Content. Der Unterschied liegt in der Content-Struktur: AI Overviews extrahiert bevorzugt direkte Antworten, Listen, Definitionen und Vergleiche. Wer seine bestehenden Top-Ranking-Seiten um Answer-First-Absätze und FAQ-Sektionen ergänzt, hat die Hälfte der Arbeit schon erledigt.',
  },
  {
    q: 'Wie messe ich, ob meine Optimierung für KI-Suchmaschinen funktioniert?',
    a: 'Für Perplexity: Suche regelmäßig nach deinen Kernthemen und prüfe, ob du als Quelle auftauchst. Es gibt auch spezialisierte Monitoring-Tools. Für ChatGPT: Frage das Modell direkt nach deiner Marke, deinen Produkten und deinem Fachgebiet — und dokumentiere die Antworten über Zeit. Für Google AI Overviews: Die Google Search Console zeigt zunehmend AIO-Impressions. Zusätzlich hilft ein manueller Check der SERPs für deine Ziel-Keywords. Wichtig: KI-Sichtbarkeit ist weniger stabil als klassische Rankings und kann sich von Anfrage zu Anfrage unterscheiden.',
  },
  {
    q: 'Welche Plattform sollte ich zuerst optimieren, wenn ich nur ein begrenztes Budget habe?',
    a: 'Google AI Overviews. Warum? Erstens erreichst du damit den größten Markt. Zweitens profitiert dein klassisches SEO gleichzeitig davon. Drittens sind die Signale, die Google AI Overviews wichtig findet, eine solide Basis für alle anderen Plattformen. Wenn du bereits gut bei Google rankst, ist der Aufwand minimal — du musst vor allem deine Content-Struktur optimieren. Von dort aus erweiterst du auf Perplexity (schnellster ROI bei informationalen Queries) und dann ChatGPT (langfristiger Brand-Effekt).',
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
  headline: 'Perplexity vs ChatGPT vs Google AI: Wo lohnt sich Optimierung am meisten?',
  description:
    'Perplexity, ChatGPT oder Google AI Overviews — welche KI-Suchmaschine bringt am meisten? Detaillierter Vergleich: Indexierung, Zitierverhalten, Optimierungspotenzial.',
  image: 'https://aiseo.hamburg/images/wissen/perplexity-vs-chatgpt-vs-google.jpg',
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
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/perplexity-vs-chatgpt-vs-google',
  inLanguage: 'de',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'Perplexity vs ChatGPT vs Google AI' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function PerplexityVsChatgptVsGooglePage() {
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
            <li className="text-black font-medium">Perplexity vs ChatGPT vs Google AI</li>
          </ol>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
          Perplexity vs ChatGPT vs Google AI: Wo lohnt sich Optimierung am meisten?
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          Drei KI-Plattformen, drei verschiedene Philosophien, drei verschiedene Wege, deine Inhalte entweder zu zitieren oder zu ignorieren. Und du optimierst wahrscheinlich nur für eine davon. Das ist, als würdest du ein Dreigänge-Menü vorbereiten und dann nur die Vorspeise servieren.
        </p>
      </section>

      {/* TL;DR */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR — Für die Ungeduldigen</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">1.</span>
              <span><strong className="text-black">Perplexity</strong> crawlt in Echtzeit, zitiert mit Links und liebt frische, gut strukturierte Inhalte. Schnellster ROI für informationalen Content.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">2.</span>
              <span><strong className="text-black">ChatGPT</strong> basiert hauptsächlich auf Trainingsdaten und Browsing. Langfristiger Brand-Effekt, aber Zitierverhalten weniger transparent.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">3.</span>
              <span><strong className="text-black">Google AI Overviews</strong> nutzt den bestehenden Google-Index. Wer bei Google schon gut rankt, hat einen massiven Vorsprung.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">4.</span>
              <span><strong className="text-black">Die ideale Strategie?</strong> Google AI Overviews als Basis, Perplexity für schnelle Sichtbarkeit, ChatGPT für langfristigen Markenaufbau.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Warum Vergleich wichtig */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Warum du nicht mehr nur für Google optimieren kannst (aber auch nicht aufhören solltest)
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Es war einmal eine wunderschöne, einfache Welt. Du hast für Google optimiert. Punkt. Ende. Feierabend. Wer auf Seite 1 war, hat gewonnen. Wer auf Seite 2 war, hat geweint. Wer auf Seite 3 war, existierte nicht.
          </p>
          <p>
            <strong className="text-black">Diese Welt ist tot. Sie wurde von drei KI-Systemen beerdigt, die sich nicht mal die Mühe machen, Blumen aufs Grab zu legen.</strong>
          </p>
          <p>
            2026 suchen Menschen nicht mehr nur bei Google. Sie fragen ChatGPT. Sie recherchieren mit Perplexity. Und Google selbst hat aufgehört, zehn blaue Links zu zeigen — stattdessen gibt es AI Overviews, die die Antwort direkt liefern und deine wunderschön optimierte Seite oft gar nicht mehr brauchen.
          </p>
          <p>
            Das bedeutet: Wenn du nur eine Plattform optimierst, optimierst du für eine schrumpfende Scheibe eines wachsenden Kuchens. Das ist so, als würdest du dein gesamtes Vermögen in Faxgeräte investieren, weil „Kommunikation ja wichtig bleibt". Technisch korrekt. Strategisch eine Katastrophe.
          </p>
        </div>
      </section>

      {/* Wie jede Plattform Content entdeckt */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Wie jede Plattform deine Inhalte entdeckt (oder ignoriert)
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Drei Plattformen, drei komplett verschiedene Entdeckungsmechanismen. Wer das nicht versteht, optimiert blind. Und blinde Optimierung ist wie Dartwerfen im Dunkeln — du triffst vielleicht irgendwas, aber wahrscheinlich nicht die Scheibe.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
              Perplexity: Der Echtzeit-Rechercheur
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Perplexity crawlt das Web bei jeder einzelnen Suchanfrage in Echtzeit. Es hat keinen statischen Index wie Google. Stattdessen schickt es Crawler los, die aktuelle Quellen finden, lesen und zusammenfassen. Das bedeutet: <strong className="text-black">Dein gestern veröffentlichter Artikel kann heute schon zitiert werden.</strong>
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Echtzeit-Crawling bei jeder Anfrage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Bevorzugt aktuelle, gut strukturierte Quellen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Transparentes Zitierverhalten mit nummerierten Links</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>PerplexityBot muss in der robots.txt erlaubt sein</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
              ChatGPT: Der Langzeitgedächtnis-Koloss
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              ChatGPT arbeitet mit einem hybriden Modell. Das Basiswissen stammt aus Trainingsdaten — riesige Mengen an Texten, die Monate bis Jahre alt sein können. Darüber hinaus gibt es das Browsing-Feature und SearchGPT, die in Echtzeit crawlen. <strong className="text-black">Das Problem: Du weißt nie genau, wann und ob dein Content in die Trainingsdaten aufgenommen wird.</strong>
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Basiswissen aus Trainingsdaten (periodische Updates)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Browsing-Modus und SearchGPT für Echtzeit-Informationen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Bevorzugt Quellen mit hoher Autorität und häufigen Erwähnungen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>GPTBot und OAI-SearchBot müssen erlaubt sein</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
              Google AI Overviews: Der alte König mit neuem Trick
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Google AI Overviews nutzt den existierenden Google-Index. Das bedeutet: <strong className="text-black">Wenn du bei Google nicht indexiert bist, existierst du für AI Overviews nicht.</strong> Punkt. Kein Verhandlungsspielraum. Die gute Nachricht: Alles, was du für klassisches SEO getan hast, fließt direkt in AI Overviews ein.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Basiert auf dem Google-Index — klassische SEO-Signale zählen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Domain-Autorität und Backlinks sind wichtige Faktoren</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Bevorzugt direkte Antworten, Listen und Definitionen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Googlebot muss crawlen können (war ja schon immer so)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Große Vergleichstabelle */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Der große Vergleich: Perplexity vs ChatGPT vs Google AI Overviews
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Hier ist die Tabelle, die du dir ausdrucken und an die Wand nageln solltest. Oder als Hintergrundbild. Oder tätowieren — ich urteile nicht.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-sm font-semibold text-black">Kriterium</th>
                <th className="py-3 pr-4 text-sm font-semibold text-blue-600">Perplexity</th>
                <th className="py-3 pr-4 text-sm font-semibold text-green-600">ChatGPT</th>
                <th className="py-3 text-sm font-semibold text-red-600">Google AI Overviews</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Content-Entdeckung</td>
                <td className="py-3 pr-4">Echtzeit-Crawling</td>
                <td className="py-3 pr-4">Trainingsdaten + Browsing</td>
                <td className="py-3">Google-Index</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Indexierungsgeschwindigkeit</td>
                <td className="py-3 pr-4">Minuten bis Stunden</td>
                <td className="py-3 pr-4">Wochen bis Monate (Training), Echtzeit (Browsing)</td>
                <td className="py-3">Stunden bis Wochen (Google-Index)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Zitierverhalten</td>
                <td className="py-3 pr-4">Immer, mit nummerierten Links</td>
                <td className="py-3 pr-4">Nur im Browsing-/SearchGPT-Modus</td>
                <td className="py-3">Quellenlinks unter der Antwort</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Wichtigste Signale</td>
                <td className="py-3 pr-4">Aktualität, Struktur, Fakten</td>
                <td className="py-3 pr-4">Autorität, Erwähnungen, E-E-A-T</td>
                <td className="py-3">Backlinks, Domain-Autorität, Content-Qualität</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Relevanter Bot</td>
                <td className="py-3 pr-4">PerplexityBot</td>
                <td className="py-3 pr-4">GPTBot, OAI-SearchBot</td>
                <td className="py-3">Googlebot</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Traffic-Potenzial</td>
                <td className="py-3 pr-4">Direkte Klicks durch Quellenlinks</td>
                <td className="py-3 pr-4">Indirekter Brand-Traffic</td>
                <td className="py-3">Reduziert CTR, aber hohes Volumen</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Optimierungsaufwand</td>
                <td className="py-3 pr-4">Mittel (Content-Struktur + Technik)</td>
                <td className="py-3 pr-4">Hoch (langfristiger Autoritätsaufbau)</td>
                <td className="py-3">Niedrig, wenn SEO bereits steht</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">ROI-Geschwindigkeit</td>
                <td className="py-3 pr-4">Schnell (Wochen)</td>
                <td className="py-3 pr-4">Langsam (Monate)</td>
                <td className="py-3">Mittel (abhängig von bestehendem Ranking)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Vergleich</td>
                <td className="py-3 pr-4">Espresso: schnell, intensiv, direkt</td>
                <td className="py-3 pr-4">Cold Brew: langsam, aber mächtig</td>
                <td className="py-3">Filterkaffee: bewährt, verlässlich, überall</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Was jede Plattform priorisiert */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Was jede Plattform wirklich priorisiert (und was du daraus machst)
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Jede Plattform hat ihre eigene Definition von „guter Quelle". Das zu verstehen ist der Unterschied zwischen Strategie und Hoffnung. Und Hoffnung ist bekanntlich kein Geschäftsmodell.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Perplexity priorisiert: Aktualität und Quellenklarheit</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Perplexity ist wie der Freund, der immer die neueste Nachricht kennt und dir sofort sagt, woher er sie hat. Es bevorzugt frische Inhalte, die klar strukturiert sind und sich eindeutig als Quelle eignen. <strong className="text-black">Wer seine Seiten wie eine gut organisierte Bibliothek aufbaut, gewinnt bei Perplexity.</strong>
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Veröffentlichungsdatum und letzte Aktualisierung sichtbar machen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Klare H2-Struktur mit beschreibenden Überschriften</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Answer-First-Absätze: Kernaussage im ersten Satz</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">ChatGPT priorisiert: Autorität und Konsensbildung</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              ChatGPT ist wie der Professor, der dich nur zitiert, wenn du genug andere Professoren beeindruckt hast. Es gewichtet stark, wie oft und wo deine Marke, dein Name oder deine Website erwähnt werden — in Fachartikeln, auf Wikipedia, in Foren, in Pressemeldungen. <strong className="text-black">Bei ChatGPT geht es weniger um eine einzelne Seite und mehr um dein gesamtes digitales Ökosystem.</strong>
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Erwähnungen auf autoritativen Drittseiten aufbauen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Konsistente Markeninfo über alle Plattformen hinweg</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Expertise des Autors durch veröffentlichte Inhalte belegen</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Google AI Overviews priorisiert: Bewährte SEO-Signale plus Antwort-Struktur</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Google AI Overviews ist wie dein alter Arbeitgeber, der jetzt einen KI-Assistenten hat: Die Grundregeln haben sich nicht geändert, aber die Spielweise schon. Domain-Autorität, Backlinks und Content-Qualität bleiben entscheidend. Neu ist: <strong className="text-black">Dein Content muss so strukturiert sein, dass die KI eine direkte Antwort extrahieren kann.</strong>
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Starke Backlinks und hohe Domain-Autorität</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Featured-Snippet-optimierte Absätze (40–60 Wörter Antwort)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Schema.org-Markup: FAQ, HowTo, Article</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Die Leute die nur für eine optimieren */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          „Ich optimiere nur für ChatGPT, das reicht" — und andere Märchen
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Jede Woche höre ich das Gleiche. „Wir machen jetzt ChatGPT-SEO." Oder: „Perplexity ist die Zukunft, da konzentrieren wir uns drauf." Oder der Klassiker: „Google ist sowieso tot, wir brauchen kein SEO mehr."
          </p>
          <p>
            <strong className="text-black">Das ist, als würdest du dein Restaurant nur montags öffnen, weil montags dein Lieblingskoch da ist.</strong> Die Kunden kommen auch dienstags. Und mittwochs. Und freitags besonders gern. Aber du bist nicht da. Weil Montag.
          </p>
          <p>
            Die Realität ist: Deine potenziellen Kunden nutzen alle drei Plattformen. Der Geschäftsführer googelt morgens nach Lösungen, die Marketingleiterin fragt mittags ChatGPT um Rat, und der Tech Lead recherchiert nachmittags bei Perplexity. Wenn du nur auf einer Plattform sichtbar bist, verlierst du zwei Drittel deiner potenziellen Touchpoints.
          </p>
          <p>
            Und das Schönste: Die drei Plattformen arbeiten nicht gegeneinander. <strong className="text-black">Eine gute Basis-Strategie deckt 70 % der Anforderungen aller drei ab.</strong> Du musst kein dreifaches Budget haben. Du musst nur aufhören, in Silos zu denken.
          </p>
        </div>
      </section>

      {/* Praktischer Leitfaden */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Wenn du nur eine Plattform wählen kannst: So triffst du die richtige Entscheidung
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Budget ist endlich. Zeit ist endlich. Geduld ist definitiv endlich. Wenn du wirklich nur eine Plattform priorisieren kannst, hier ist der Entscheidungsbaum. Ohne Bullshit.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Wähle Google AI Overviews, wenn…</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Du bereits gut bei Google rankst und vorhandene Authority nutzen willst</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Dein Publikum primär über Google-Suche kommt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Du den größten Markt mit dem geringsten Zusatzaufwand abdecken willst</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Dein Business von transaktionalen Suchanfragen lebt</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Wähle Perplexity, wenn…</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Du regelmäßig frischen, informationalen Content veröffentlichst</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Dein Publikum tech-affin ist und alternative Suchtools nutzt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Du schnelle Ergebnisse sehen willst (Wochen statt Monate)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Du direkten Referral-Traffic über Quellenlinks willst</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Wähle ChatGPT, wenn…</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Du eine starke Marke aufbauen willst, die KI-Systeme empfehlen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Dein Geschäftsmodell auf Vertrauen und Expertise basiert (Beratung, B2B)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Du langfristig denkst und bereit bist, Monate zu investieren</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Du in einer Nische bist, in der „ChatGPT empfiehlt X" Kaufentscheidungen beeinflusst</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Die 70%-Strategie */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Die 70 %-Strategie: Was für alle drei Plattformen gleichzeitig funktioniert
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-10">
          <p>
            Die gute Nachricht — und ja, es gibt auch gute Nachrichten, ich bin nicht nur hier, um dich zu demoralisieren: Etwa 70 % der Optimierungsarbeit ist plattformübergreifend. Wenn du diese Basis richtig machst, bist du auf allen drei Plattformen besser aufgestellt als 90 % deiner Konkurrenz.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-semibold text-black mb-4">Die universelle Checkliste</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">Answer-First Content:</strong> Kernaussage im ersten Satz jedes Abschnitts. Alle drei Plattformen extrahieren die ersten Sätze.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">Klare Überschriften-Hierarchie:</strong> H1 → H2 → H3 mit beschreibenden, keywordhaltigen Titeln. Kein „Weitere Informationen" als H2.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">Schema.org-Markup:</strong> Article, FAQ, BreadcrumbList — korrekt und zum Content passend.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">robots.txt öffnen:</strong> GPTBot, ClaudeBot, PerplexityBot, GoogleBot — alle erlauben.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">llms.txt implementieren:</strong> Eine maschinenlesbare Zusammenfassung deiner Website für KI-Crawler.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">Echte Autorenschaft:</strong> Name, Bio, Qualifikationen, externe Veröffentlichungen — nicht „Admin" als Autorenname.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">Fakten statt Floskeln:</strong> Zahlen, Studien, eigene Daten. „Viele Experten sagen" ist kein Fakt.</span>
            </li>
          </ul>
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
          Fazit: Es ist kein Krieg — es ist ein Buffet
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Perplexity, ChatGPT und Google AI Overviews sind keine Gegner. Sie sind drei verschiedene Kanäle, über die Menschen Informationen suchen. Und jeder dieser Kanäle hat sein eigenes Publikum, sein eigenes Timing und seine eigene Art, Quellen zu bewerten.
          </p>
          <p>
            <strong className="text-black">Wer alle drei versteht, optimiert nicht dreimal so viel — sondern einmal richtig.</strong>
          </p>
          <p>
            Die Basis ist identisch: gut geschriebener, faktenbasierter Content mit klarer Struktur, sauberer Technik und echter Autorenschaft. Die plattformspezifischen Anpassungen sind das Sahnehäubchen — nicht der Kuchen.
          </p>
          <p>
            Also hör auf, dich zwischen den Plattformen entscheiden zu wollen. Bau die Basis. Dann erweitere. Und wenn jemand dir erzählt, du sollst nur für eine Plattform optimieren, dann frag ihn, ob er auch nur auf einem Bein steht. Kann man machen. Ist aber auf Dauer unbequem. Und sieht lächerlich aus.
          </p>
        </div>

        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm mt-10">
          <p className="text-lg md:text-xl font-semibold text-black leading-snug">
            Zusammenfassung: Google AI Overviews als Basis (größter Markt, nutzt bestehende SEO-Arbeit), Perplexity für schnelle Sichtbarkeit (Echtzeit, transparente Zitierung), ChatGPT für langfristigen Brand-Effekt (Autorität, Empfehlungen). Die 70 %-Strategie deckt alle drei ab. Der Rest ist Feintuning.
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
            href="/wissen/sichtbarkeit-in-chatgpt"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              Sichtbarkeit in ChatGPT
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Deep-Dive: Wie ChatGPT Quellen auswählt und wie du dort sichtbar wirst.
            </p>
          </a>

          <a
            href="/wissen/sichtbarkeit-in-perplexity"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              Sichtbarkeit in Perplexity
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Alles über Perplexitys Echtzeit-Crawling und wie du als Quelle zitiert wirst.
            </p>
          </a>

          <a
            href="/wissen/ai-overviews-sichtbarkeit"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              Google AI Overviews Sichtbarkeit
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Wie du in Googles KI-generierten Antworten als Quelle auftauchst.
            </p>
          </a>

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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <div className="bg-[#121212] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-white mb-4">
            Auf welcher Plattform bist du unsichtbar?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Finde heraus, wo deine KI-Sichtbarkeit Lücken hat — über alle drei Plattformen hinweg. Kostenlos und ehrlich.
          </p>
          <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose KI-Sichtbarkeits-Analyse" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
