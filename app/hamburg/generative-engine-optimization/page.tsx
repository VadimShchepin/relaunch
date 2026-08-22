import type { Metadata } from 'next';
import { LocalIntentTemplate } from '@/components/hamburg/LocalIntentTemplate';

export const metadata: Metadata = {
  title: 'Generative Engine Optimization (GEO) Hamburg',
  description:
    'GEO-Agentur Hamburg: als Quelle in ChatGPT, Perplexity, Copilot und Google AI Overviews genannt werden. Messbar über echte Citation-Daten.',
  keywords: [
    'generative engine optimization hamburg',
    'geo agentur hamburg',
    'geo optimierung hamburg',
    'geo seo hamburg',
    'ki seo agentur hamburg',
    'ai seo hamburg',
    'geo beratung hamburg',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/hamburg/generative-engine-optimization',
    title: 'Generative Engine Optimization (GEO) Hamburg',
    description:
      'Wie Hamburger Unternehmen als Quelle in KI-Antworten auftauchen. Sechs Bausteine, echte Citation-Daten und die ehrliche Abgrenzung, wann GEO nichts bringt.',
    siteName: 'aiseo.hamburg',
    images: [
      {
        url: '/images/wissen/generative-engine-optimization.svg',
        width: 1200,
        height: 675,
        alt: 'KI-Antwort, die ein Hamburger Unternehmen als Quelle nennt, daneben die verblassende Ergebnisliste',
      },
    ],
  },
  alternates: {
    canonical: 'https://aiseo.hamburg/hamburg/generative-engine-optimization',
  },
};

export default function GenerativeEngineOptimizationHamburgPage() {
  return (
    <LocalIntentTemplate
      canonicalPath="/hamburg/generative-engine-optimization"
      title="Generative Engine Optimization (GEO) Hamburg: als Quelle in der KI-Antwort statt als Zeile in der Liste"
      description="Generative Engine Optimization heißt, Inhalte so aufzubauen, dass KI-Systeme sie abrufen und als Quelle nennen. Für Hamburger Unternehmen ist das die kaufnahe Variante: Wenn jemand nach einem Anbieter in der Stadt fragt, entscheidet die Antwort über die Anfrage. Diese Seite zeigt, woraus die Arbeit besteht, wie sie gemessen wird und wann sie sich nicht lohnt."
      eyebrow="GEO Agentur Hamburg"
      imageSrc="/images/wissen/generative-engine-optimization.svg"
      imageAlt="KI-Antwort mit hervorgehobener erster Quelle, daneben Citation-Kennzahlen aus Hamburg"
      imageCaption="Aus dem eigenen Bing-Export vom 30. Mai 2026: 415 Citations in 30 Tagen, 59,8 Prozent davon auf einer einzigen Seite."
      summaryItems={[
        'Die Seite bedient die kaufnahe Suche nach Generative Engine Optimization und GEO-Agentur im Raum Hamburg.',
        'GEO wird hier über echte Plattformdaten gemessen: Citations und Grounding Queries aus den Bing Webmaster Tools, KI-Impressionen aus der Google Search Console.',
        'Die Belege sind eigene Zahlen, nicht Branchendurchschnitte: 415 Citations in einem 30-Tage-Fenster, davon 248 auf einer Seite.',
        'Das Kürzel GEO wird im deutschen Suchraum auch für Geoportal und Geografie benutzt. Deshalb steht hier immer die ausgeschriebene Form.',
      ]}
      painPoints={[
        'Die Rankings stehen, die Anfragen fallen. Wenn oben in der Suche eine KI-Antwort steht, verschiebt sich der Klick, und klassische Sichtbarkeitsberichte zeigen davon nichts.',
        'Niemand im Unternehmen kann beantworten, ob ChatGPT oder Copilot die Firma bei einer Anbieterfrage nennt. Es fehlt nicht am Willen, sondern an der Datenquelle.',
        'Angebote von Agenturen nennen eine Citation Rate, aber nicht die Prompt-Liste dahinter. Damit ist die Zahl nicht überprüfbar und nicht mit dem Vormonat vergleichbar.',
        'Es wurden schon llms.txt und Spezial-Schema eingebaut, ohne Wirkung. Für Googles KI-Funktionen sagt Google selbst, dass beides nicht nötig ist.',
      ]}
      serviceCards={[
        {
          title: 'Zugangsprüfung für KI-Crawler',
          text: 'robots.txt gegen GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot und Google-Extended prüfen, Bot-Schutz-Regeln freigeben, Server-Logs auf tatsächliche Bot-Zugriffe auswerten. Der häufigste Befund ist ein versehentlich mitgesperrter OAI-SearchBot, und der lässt sich in Minuten beheben.',
        },
        {
          title: 'Antwortseiten statt Leistungsseiten',
          text: 'Eine Frage pro Seite, die Antwort im ersten Absatz, Fachbegriffe im Text definiert, Zahlen mit Datum und Quelle. Jeder Absatz muss isoliert eine vollständige Aussage ergeben, weil er genau so entnommen wird.',
        },
        {
          title: 'Lokale Entität sauber aufsetzen',
          text: 'Firmenname, Adresse, Leistungen und Zuständigkeiten überall identisch: Website, Unternehmensprofil, Hamburger Verzeichnisse, Kammer- und Verbandslisten. Widersprüche sind der häufigste Grund, warum Modelle ein Unternehmen nicht einsortieren.',
        },
        {
          title: 'Citation-Messung über echte Plattformdaten',
          text: 'Bing Webmaster Tools für Citations, Grounding Queries und seit Juni 2026 auch Citation Share, Google Search Console für KI-Impressionen in AI Overviews und AI Mode. Beides kostenlos, beides monatlich exportiert, weil ältere Zeiträume nicht rekonstruierbar sind.',
        },
        {
          title: 'Prompt-Liste für ChatGPT und Perplexity',
          text: 'Für Plattformen ohne Konsole eine feste Liste aus 30 bis 50 Fragen, zu mindestens 70 Prozent ohne den eigenen Markennamen. Nur so entsteht eine Citation Rate, die über Monate vergleichbar bleibt.',
        },
        {
          title: 'Erwähnungen außerhalb der eigenen Domain',
          text: 'Hamburger Verzeichnisse, Fachlisten, Bewertungsplattformen und Fachbeiträge. Dieser Teil bestimmt die Reihenfolge in Vergleichsantworten stärker als die eigene Website und braucht Monate, nicht Wochen.',
        },
      ]}
      eeatCards={[
        {
          title: 'Eigene Citation-Daten, offen gezeigt',
          text: 'Der Bing-Export dieser Domain vom 30. Mai 2026 weist 415 Citations auf zehn Seiten aus, 248 davon auf einer einzigen. Diese Zahlen stehen offen auf der Website, inklusive der unbequemen Beobachtung, dass genau diese Seite bei Google gleichzeitig nicht indexiert war.',
        },
        {
          title: 'Offizielle Quellen statt Branchenweisheiten',
          text: 'Die Methodik stützt sich auf Googles Search-Central-Doku zu AI-Features und auf Microsofts Blogs zum AI-Performance-Bericht, inklusive der offiziellen Definition von Citation Share. Wo Zahlen aus Anbietervergleichen kommen, steht das dabei.',
        },
        {
          title: 'Kennzahlen mit Nenner',
          text: 'Citation Rate, Mention Rate, Citation Share und Share of Voice werden getrennt ausgewiesen, jeweils mit der Prompt-Liste dahinter. Ohne Nenner ist keine dieser Zahlen prüfbar, und das gilt auch für unsere eigenen.',
        },
        {
          title: 'Umsetzung im Code',
          text: 'Empfehlungen landen direkt in der Website: Crawlbarkeit, serverseitiges Rendering, interne Verlinkung, Schema, das den sichtbaren Inhalt abbildet. Kein Übergabeverlust zwischen Strategie und Entwicklung.',
        },
      ]}
      fitBullets={[
        'Hamburger Dienstleister und B2B-Anbieter, deren Kunden vor der Anfrage recherchieren und dabei zunehmend einen Assistenten fragen.',
        'Unternehmen mit echtem Fachwissen im Haus, das bisher nur in Angeboten und Telefonaten steckt und nirgendwo öffentlich steht.',
        'Betriebe, die noch ranken, aber weniger Anfragen bekommen und wissen wollen, ob die KI-Antwort der Grund ist.',
        'Nicht geeignet für reine Laufkundschaft ohne Onlinerecherche und für alle, die eine Wirkung innerhalb von zwei Wochen brauchen.',
      ]}
      processCards={[
        {
          title: 'Prüfen',
          text: 'Kostenloses 15-Minuten-Gespräch mit Live-Test: Nennt die KI dich bei den Fragen deiner Kunden? Dazu robots.txt und Indexierungsstatus. Danach steht fest, ob das Problem beim Zugang, im Index, bei der Autorität oder in der Formulierung liegt.',
        },
        {
          title: 'Umsetzen',
          text: 'Technische Freigaben, die drei bis fünf wichtigsten Antwortseiten, konsistente Entitätsdaten und die Messroutine. Ein klar umrissener Sprint mit Festpreis, keine offene Beratungsschleife.',
        },
        {
          title: 'Nachhalten',
          text: 'Monatlicher Export der Citations, Prüfung der Grounding Queries auf kommerzielle Intents und Nachschärfen der Seiten anhand der tatsächlich gestellten Fragen. Entweder in deiner Hand oder in unserer.',
        },
      ]}
      faqItems={[
        {
          q: 'Was macht eine GEO-Agentur in Hamburg konkret?',
          a: 'Sie sorgt dafür, dass KI-Systeme die Inhalte eines Unternehmens abrufen und als Quelle nennen können. Die Arbeit besteht aus sechs Teilen: Zugang für KI-Crawler, zitierfähige Seitenstruktur, konsistente Entitätsdaten, Erwähnungen außerhalb der eigenen Domain, Indexierung und Messung über die kostenlosen Berichte von Bing und Google. Alles andere ist Beiwerk.',
        },
        {
          q: 'Warum steht hier immer „Generative Engine Optimization“ und nicht nur GEO?',
          a: 'Weil das Kürzel im deutschen Suchraum anders belegt ist. Bei einer Suche nach GEO dominieren Geoportal, Geografie und das Magazin GEO die Ergebnisse. Für Titel und Anzeigen ist die ausgeschriebene Form deshalb Pflicht, sonst konkurriert man mit Kartendiensten. Dasselbe gilt für AEO, das im Zollrecht den zugelassenen Wirtschaftsbeteiligten bezeichnet.',
        },
        {
          q: 'Wie wird der Erfolg von GEO gemessen?',
          a: 'Über fünf Kennzahlen: Citations und Citation Share aus den Bing Webmaster Tools, KI-Impressionen aus dem Generative-AI-Bericht der Google Search Console sowie Citation Rate und Share of Voice aus einer festen eigenen Prompt-Liste. Keine der beiden Suchkonsolen liefert Klicks aus KI-Antworten, deshalb ist eine KI-Conversion-Rate aus diesen Daten nicht berechenbar.',
        },
        {
          q: 'Was kostet GEO in Hamburg?',
          a: 'Der erste Schritt ist ein kostenloses 15-Minuten-Gespräch. Danach folgt ein einmaliger Umsetzungssprint ab 1.500 Euro netto oder eine laufende Betreuung ab 600 Euro netto pro Monat. Der Festpreis wird nach dem Gespräch genannt, weil Aufwand und Wettbewerbslage je Branche stark abweichen.',
        },
        {
          q: 'Wie lange dauert es, bis GEO wirkt?',
          a: 'Ein blockierter Crawler wirkt nach dem nächsten Crawl, also in Tagen. Neue Antwortseiten tauchen typischerweise nach vier bis zwölf Wochen in KI-Antworten auf, sofern die Domain indexiert wird. Die Reihenfolge innerhalb von Vergleichsantworten verschiebt sich über Monate, weil sie an Erwähnungen außerhalb der eigenen Domain hängt.',
        },
        {
          q: 'Brauche ich für GEO eine llms.txt?',
          a: 'Für Googles KI-Funktionen nicht. Google schreibt in der eigenen Dokumentation, dass keine neuen maschinenlesbaren Dateien, KI-Textdateien oder speziellen Schema-Typen nötig sind, um in AI Overviews und AI Mode zu erscheinen. Eine llms.txt kann als Übersicht nützlich sein, ist aber kein Sichtbarkeitshebel.',
        },
      ]}
      relatedLinks={[
        {
          title: 'Generative Engine Optimization: Leistung und Preise',
          description: 'Die überregionale Leistungsseite mit den sechs Bausteinen, dem Ablauf und der Abgrenzung.',
          href: '/geo-optimierung',
          tag: 'Kernleistung',
        },
        {
          title: 'GEO vs SEO vs AEO vs LLMO',
          description: 'Die vier Kürzel in einer Tabelle: Ziel, Erfolgsmaß, Zielsystem und die deutsche Namensfalle.',
          href: '/wissen/geo-vs-seo',
          tag: 'Wissen',
        },
        {
          title: 'Citation Rate richtig berechnen',
          description: 'Die Kennzahl hinter jedem GEO-Angebot, mit Formel und echten Zahlen aus zwei Exporten.',
          href: '/wissen/citation-rate',
          tag: 'Messung',
        },
        {
          title: 'GEO Agentur Hamburg: worauf du achten solltest',
          description: 'Woran du echte GEO-Expertise erkennst und für welche Hamburger Unternehmen sie sich lohnt.',
          href: '/wissen/geo-agentur-hamburg',
          tag: 'Auswahl',
        },
      ]}
      ctaTitle="Nennt die KI dein Hamburger Unternehmen, wenn jemand nach einem Anbieter fragt?"
      ctaText="Wir testen es im kostenlosen 15-Minuten-Gespräch live und schauen dabei in robots.txt und Indexierungsstatus. Danach weißt du, ob GEO in deinem Fall der richtige nächste Schritt ist oder ob erst etwas anderes fällig ist."
      ctaHref="/termin"
      ctaLabel="15-Minuten-Gespräch buchen"
    />
  );
}
