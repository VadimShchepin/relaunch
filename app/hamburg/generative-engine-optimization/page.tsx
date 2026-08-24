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
        url: '/og/generative-engine-optimization.jpg',
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
      description="Generative Engine Optimization heißt, Inhalte so aufzubauen, dass KI-Systeme sie abrufen und als Quelle nennen. Fragt jemand in Hamburg nach einem Anbieter, entscheidet diese Antwort über die Anfrage. Diese Seite zeigt die Arbeit, die Messung und die Grenzen."
      eyebrow="GEO Agentur Hamburg"
      facts={[
        { label: 'Einstieg', value: '15 Minuten, 0 Euro', href: '/termin' },
        { label: 'Umsetzung', value: 'ab 1.500 Euro, Festpreis vorab', href: '/preise' },
        { label: 'Belegt', value: '415 Citations, Export 30.05.2026', href: '/ergebnisse' },
      ]}
      secondaryCtaHref="/preise"
      secondaryCtaLabel="Preise ansehen"
      contactPhone="+49 176 321 94 754"
      contactNote="Ein Ansprechpartner, keine Agentur-Pipeline. Erstgespräch per Video oder in Hamburg."
      summaryItems={[
        'Die Seite bedient die kaufnahe Suche nach Generative Engine Optimization und GEO-Agentur in Hamburg.',
        'Gemessen wird mit Bing Webmaster Tools und Google Search Console, nicht mit Schätzwerten.',
        'Die Belege sind eigene Zahlen mit Exportdatum, keine Branchendurchschnitte.',
        'Das Kürzel GEO meint im deutschen Suchraum meist Geoportal oder Geografie. Hier steht deshalb die ausgeschriebene Form.',
      ]}
      painPoints={[
        'Die Rankings stehen, die Anfragen fallen. Eine KI-Antwort über der Trefferliste verschiebt den Klick, und klassische Berichte zeigen davon nichts.',
        'Niemand im Haus kann sagen, ob ChatGPT oder Copilot die Firma nennt. Es fehlt die Datenquelle, nicht der Wille.',
        'Agenturangebote nennen eine Citation Rate, aber nicht die Prompt-Liste dahinter. Damit ist die Zahl nicht prüfbar.',
        'llms.txt und Spezial-Schema sind eingebaut, ohne Wirkung. Google selbst sagt, dass beides nicht nötig ist.',
      ]}
      serviceCards={[
        {
          title: 'Zugangsprüfung für KI-Crawler',
          text: 'robots.txt gegen GPTBot, OAI-SearchBot, PerplexityBot und ClaudeBot prüfen, Bot-Schutz freigeben, Server-Logs auf echte Zugriffe lesen.',
        },
        {
          title: 'Antwortseiten statt Leistungsseiten',
          text: 'Eine Frage pro Seite, die Antwort im ersten Absatz, Fachbegriffe definiert, Zahlen mit Datum. Jeder Absatz muss allein tragen.',
        },
        {
          title: 'Lokale Entität sauber aufsetzen',
          text: 'Firmenname, Adresse und Zuständigkeiten überall identisch: Website, Profile, Hamburger Verzeichnisse, Kammerlisten. Widersprüche führen zur falschen Einsortierung.',
        },
        {
          title: 'Citation-Messung über echte Plattformdaten',
          text: 'Bing Webmaster Tools für Citations, Grounding Queries und Citation Share, Search Console für KI-Impressionen. Monatlich exportiert, weil alte Zeiträume fehlen.',
        },
        {
          title: 'Prompt-Liste für ChatGPT und Perplexity',
          text: 'Für Plattformen ohne Konsole eine feste Liste aus 30 bis 50 Fragen, überwiegend ohne deinen Markennamen.',
        },
        {
          title: 'Erwähnungen außerhalb der eigenen Domain',
          text: 'Hamburger Verzeichnisse, Fachlisten, Bewertungsplattformen, Fachbeiträge. Dieser Teil bestimmt die Reihenfolge in Vergleichsantworten und braucht Monate.',
        },
      ]}
      comparison={{
        navLabel: 'Diagnose',
        heading: 'Woran es liegt, wenn dich die KI nicht nennt',
        intro:
          'Fünf Ursachen fühlen sich identisch an: Du wirst nicht genannt. Jede braucht andere Arbeit und andere Geduld.',
        columns: ['Symptom', 'Wahrscheinliche Ursache', 'Wie du es prüfst', 'Wirkzeit'],
        rows: [
          [
            'KI-Bots holen die Seite nie ab',
            'robots.txt oder Bot-Schutz sperrt GPTBot, OAI-SearchBot oder PerplexityBot',
            'Server-Log nach den Bot-Namen filtern',
            'Tage',
          ],
          [
            'Seite ist abrufbar, wird nicht zitiert',
            'Antwort steht nicht im ersten Absatz, Absätze sind nicht einzeln entnehmbar',
            'einen Absatz isoliert lesen: trägt er allein?',
            '4 bis 12 Wochen',
          ],
          [
            'Firma wird falsch einsortiert',
            'Name, Adresse und Leistungen weichen zwischen Website und Verzeichnissen ab',
            'eigene Angaben Zeile für Zeile vergleichen',
            'Wochen',
          ],
          [
            'Genannt, aber immer zuletzt',
            'zu wenige Erwähnungen außerhalb der eigenen Domain',
            'Vergleichsantworten mit fester Prompt-Liste protokollieren',
            'Monate',
          ],
          [
            'Bei Bing zitiert, bei Google unsichtbar',
            'Seite ist von Google entdeckt, aber nicht indexiert',
            'Search Console, Bericht Seitenindexierung',
            'offen',
          ],
        ],
        note: 'Die letzte Zeile ist unser eigener Fall: Die meistzitierte Seite dieser Website war bei Google zeitweise nicht indexiert.',
      }}
      proofData={{
        variant: 'row',
        title: 'Citations je Seite, Export vom 30. Mai 2026',
        subject: 'aiseo.hamburg, Bing Webmaster Tools',
        axis: { title: 'Citations' },
        highlight: 'peak',
        points: [
          { label: 'Meistzitierte Antwortseite', short: 'Top-Seite', value: 248 },
          { label: 'Neun weitere zitierte Seiten zusammen', short: '9 weitere', value: 167 },
        ],
        stats: [
          { label: 'Citations gesamt', value: '415' },
          { label: 'Zitierte Seiten', value: '10' },
          { label: 'Anteil der Top-Seite', value: '59,8 %' },
        ],
        table: { label: 'Zahlen als Tabelle', heads: ['Seiten', 'Citations'], sum: ['Alle 10 Seiten', '415'] },
        caption:
          'AI-Page-Stats-Export der Bing Webmaster Tools, 28. Februar bis 28. Mai 2026. Eine von zehn Seiten trug fast sechs von zehn Citations.',
        source: { href: '/ergebnisse', label: 'Alle Citation-Zahlen, auch aus Kundenprojekten' },
      }}
      eeatCards={[
        {
          title: 'Eigene Citation-Daten, offen gezeigt',
          text: 'Die Citation-Zahlen dieser Domain stehen mit Exportdatum offen auf der Website, auch die unbequeme: Die meistzitierte Seite war bei Google nicht indexiert.',
        },
        {
          title: 'Offizielle Quellen statt Branchenweisheiten',
          text: 'Die Methodik stützt sich auf Googles Search-Central-Doku zu AI-Features und auf Microsofts Blogs zum AI-Performance-Bericht.',
        },
        {
          title: 'Kennzahlen mit Nenner',
          text: 'Citation Rate, Mention Rate, Citation Share und Share of Voice stehen getrennt, jeweils mit der Prompt-Liste dahinter. Ohne Nenner ist keine prüfbar.',
        },
        {
          title: 'Umsetzung im Code',
          text: 'Empfehlungen landen direkt in der Website: Crawlbarkeit, Rendering, interne Verlinkung, Schema. Kein Übergabeverlust.',
        },
      ]}
      fitBullets={[
        'Hamburger Dienstleister und B2B-Anbieter, deren Kunden vor der Anfrage einen Assistenten fragen.',
        'Unternehmen mit Fachwissen im Haus, das bisher nur in Angeboten und Telefonaten steckt.',
        'Betriebe, die noch ranken, aber weniger Anfragen bekommen und den Grund wissen wollen.',
        'Nicht geeignet für reine Laufkundschaft und für alle, die Wirkung in zwei Wochen brauchen.',
      ]}
      fitNote={{
        label: 'Merksatz',
        statement: 'GEO entscheidet sich pro Antwortseite, nicht pro Domain.',
      }}
      processCards={[
        {
          title: 'Prüfen',
          text: 'Kostenloses 15-Minuten-Gespräch mit Live-Test: Nennt die KI dich bei den Fragen deiner Kunden? Dazu robots.txt und Indexierungsstatus.',
        },
        {
          title: 'Umsetzen',
          text: 'Technische Freigaben, die drei bis fünf wichtigsten Antwortseiten, konsistente Entitätsdaten, die Messroutine. Festpreis statt Beratungsschleife.',
        },
        {
          title: 'Nachhalten',
          text: 'Monatlicher Export der Citations, Grounding Queries auf kommerzielle Intents prüfen, Seiten anhand der echten Fragen nachschärfen.',
        },
      ]}
      faqItems={[
        {
          q: 'Was macht eine GEO-Agentur in Hamburg konkret?',
          a: 'Sie sorgt dafür, dass KI-Systeme die Inhalte eines Unternehmens abrufen und als Quelle nennen. Sechs Teile: Zugang für KI-Crawler, zitierfähige Seitenstruktur, konsistente Entitätsdaten, Erwähnungen außerhalb der eigenen Domain, Indexierung und Messung über die kostenlosen Berichte von Bing und Google.',
        },
        {
          q: 'Warum steht hier immer „Generative Engine Optimization“ und nicht nur GEO?',
          a: 'Weil das Kürzel im deutschen Suchraum anders belegt ist: Bei einer Suche nach GEO dominieren Geoportal, Geografie und das Magazin GEO. Für Titel und Anzeigen ist die ausgeschriebene Form deshalb Pflicht.',
        },
        {
          q: 'Wie wird der Erfolg von GEO gemessen?',
          a: 'Über fünf Kennzahlen: Citations und Citation Share aus den Bing Webmaster Tools, KI-Impressionen aus der Google Search Console sowie Citation Rate und Share of Voice aus einer festen Prompt-Liste. Klicks aus KI-Antworten liefert keine der beiden Konsolen, eine KI-Conversion-Rate ist daraus nicht berechenbar.',
        },
        {
          q: 'Was kostet GEO in Hamburg?',
          a: 'Erster Schritt: ein kostenloses 15-Minuten-Gespräch. Danach ein Umsetzungssprint ab 1.500 Euro netto oder laufende Betreuung ab 600 Euro netto pro Monat. Den Festpreis nennen wir nach dem Gespräch.',
        },
        {
          q: 'Wie lange dauert es, bis GEO wirkt?',
          a: 'Ein freigegebener Crawler wirkt nach dem nächsten Crawl, also in Tagen. Neue Antwortseiten tauchen nach vier bis zwölf Wochen in KI-Antworten auf, sofern die Domain indexiert wird. Die Reihenfolge in Vergleichsantworten verschiebt sich über Monate.',
        },
        {
          q: 'Brauche ich für GEO eine llms.txt?',
          a: 'Für Googles KI-Funktionen nicht. Google schreibt selbst, dass keine neuen maschinenlesbaren Dateien, KI-Textdateien oder speziellen Schema-Typen nötig sind, um in AI Overviews und AI Mode zu erscheinen.',
        },
      ]}
      relatedLinks={[
        {
          title: 'Generative Engine Optimization: Leistung und Preise',
          description: 'Die überregionale Leistungsseite: sechs Bausteine, Ablauf, Abgrenzung.',
          href: '/geo-optimierung',
          tag: 'Kernleistung',
        },
        {
          title: 'GEO vs SEO vs AEO vs LLMO',
          description: 'Vier Kürzel in einer Tabelle: Ziel, Erfolgsmaß, Zielsystem, Namensfalle.',
          href: '/wissen/geo-vs-seo',
          tag: 'Wissen',
        },
        {
          title: 'Citation Rate richtig berechnen',
          description: 'Die Kennzahl hinter jedem GEO-Angebot, mit Formel und echten Zahlen.',
          href: '/wissen/citation-rate',
          tag: 'Messung',
        },
        {
          title: 'GEO Agentur Hamburg: worauf du achten solltest',
          description: 'Woran du echte GEO-Expertise erkennst und für wen sie sich lohnt.',
          href: '/wissen/geo-agentur-hamburg',
          tag: 'Auswahl',
        },
      ]}
      ctaTitle="Nennt die KI dein Hamburger Unternehmen, wenn jemand nach einem Anbieter fragt?"
      ctaText="Wir testen es im kostenlosen 15-Minuten-Gespräch live und schauen in robots.txt und Indexierungsstatus."
      ctaHref="/termin"
      ctaLabel="15-Minuten-Gespräch buchen"
    />
  );
}
