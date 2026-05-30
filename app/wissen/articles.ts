// Single source of truth for the /wissen article index.
//
// When you add a new article under app/wissen/<slug>/, add a matching entry
// here. The articles.guard.test.ts test fails the build if a folder has no
// entry, so the listing can never silently fall out of date.
//
// The index page sorts these automatically (featured first, then newest by
// `date` descending), so insertion order in this array does not matter.

export type Topic =
  | 'Grundlagen'
  | 'Plattformen'
  | 'Branchen'
  | 'Strategie'
  | 'Technik'
  | 'Vergleiche'
  | 'Case Studies';

export interface Article {
  title: string;
  description: string;
  href: string;
  tag: string;
  topic: Topic;
  readTime: string;
  date: string; // ISO YYYY-MM-DD, used for descending sort
  featured?: boolean;
}

// Display order of the topic filter chips.
export const TOPICS: Topic[] = [
  'Grundlagen',
  'Plattformen',
  'Branchen',
  'Strategie',
  'Technik',
  'Vergleiche',
  'Case Studies',
];

export const ARTICLES: Article[] = [
  {
    title: 'KI-Sichtbarkeit: Der komplette Guide für Unternehmen 2026',
    description: 'Was KI-Sichtbarkeit bedeutet, warum sie 2026 entscheidend ist und wie du in ChatGPT, Perplexity und Google AI empfohlen wirst.',
    href: '/wissen/ki-sichtbarkeit',
    tag: 'Pillar Guide',
    topic: 'Grundlagen',
    readTime: '12 Min.',
    date: '2026-03-12',
    featured: true,
  },
  {
    title: 'Google KI-Optimierung: Was Google offiziell empfiehlt (und welche GEO-Mythen du streichen kannst)',
    description: 'Googles eigene Empfehlungen für AI Overviews und AI Mode: Was offiziell zählt, was Google ausdrücklich für unnötig erklärt (llms.txt, Content-Chunking, Spezial-Schema) und was das für deutsche Unternehmen bedeutet.',
    href: '/wissen/google-ki-optimierung',
    tag: 'Google',
    topic: 'Plattformen',
    readTime: '11 Min.',
    date: '2026-05-29',
  },
  {
    title: 'AI SEO Marktanalyse Deutschland 2026: AEO, GEO, LLMO und 3 Keyword-Honigfallen',
    description: 'Primärrecherche für Unternehmen und Agenturen: 297 deutsche AEO/GEO/LLMO Keywords. Drei Honigfallen, sechs Begriffe mit starkem Wachstum und der stille Rückgang von „ChatGPT SEO". Mit Datensatz.',
    href: '/wissen/aeo-geo-marktanalyse-deutschland-2026',
    tag: 'Marktanalyse',
    topic: 'Strategie',
    readTime: '12 Min.',
    date: '2026-05-25',
  },
  {
    title: 'Die 10 besten KI-Sichtbarkeit & AI-SEO Agenturen in Hamburg 2026',
    description: 'Wir haben 4 KIs gefragt, welche Agentur in Hamburg AI-SEO macht. Die ehrliche Auswertung mit Citation-Scorecard und R-A-P-Bewertung, inklusive unserer eigenen Lücken.',
    href: '/wissen/ki-sichtbarkeit-agenturen-hamburg-2026',
    tag: 'Vergleich',
    topic: 'Vergleiche',
    readTime: '14 Min.',
    date: '2026-05-23',
  },
  {
    title: 'Fallstudie: In 90 Tagen KI-sichtbar — echte Zahlen eines Hamburger Unternehmens',
    description: 'Composite Case Study mit echten Zahlen: Performance von 35 auf 99, 474 Klicks/Monat, 2x organischer Traffic, #1 in ChatGPT. Der komplette 90-Tage-Plan.',
    href: '/wissen/fallstudie-ki-sichtbarkeit-90-tage',
    tag: 'Case Study',
    topic: 'Case Studies',
    readTime: '13 Min.',
    date: '2026-04-04',
  },
  {
    title: 'KI-Sichtbarkeit beauftragen: Der komplette Ablauf von Anfrage bis Ergebnis',
    description: 'Was passiert, wenn du KI-Sichtbarkeit bei aiseo.hamburg beauftragst, von der kostenlosen Kurzanalyse bis zur ersten ChatGPT-Empfehlung. Transparent, ohne Buzzwords.',
    href: '/wissen/ki-sichtbarkeit-beauftragen',
    tag: 'Prozess',
    topic: 'Strategie',
    readTime: '8 Min.',
    date: '2026-04-04',
  },
  {
    title: 'KI-Sichtbarkeit für Dienstleister: Vom unsichtbaren Experten zum empfohlenen Anbieter',
    description: 'Warum ChatGPT deinen Wettbewerber empfiehlt und nicht dich. 5 Schritte für Steuerberater, Architekten, Berater und Agenturen, mit ROI-Rechnung.',
    href: '/wissen/ki-sichtbarkeit-dienstleister',
    tag: 'Dienstleister',
    topic: 'Branchen',
    readTime: '12 Min.',
    date: '2026-04-04',
  },
  {
    title: 'SEO-Agentur liefert Rankings, aber keine Kunden — warum AI SEO der nächste Schritt ist',
    description: 'Warum klassische SEO-Agenturen 2026 an Wirkung verlieren, wann sich AI-SEO wirklich lohnt und wie du den Wechsel sauber begründest.',
    href: '/wissen/seo-agentur-vs-ai-seo',
    tag: 'Vergleich',
    topic: 'Vergleiche',
    readTime: '9 Min.',
    date: '2026-04-04',
  },
  {
    title: 'Warum dein Wettbewerber Kunden bekommt, die du nie siehst',
    description: 'Wie KI-Systeme Empfehlungen treffen, und warum dein Wettbewerber regelmäßig dort genannt wird, wo du nicht einmal recherchierbar bist.',
    href: '/wissen/wettbewerber-ki-sichtbarkeit',
    tag: 'Wettbewerb',
    topic: 'Strategie',
    readTime: '10 Min.',
    date: '2026-04-04',
  },
  {
    title: 'Warum bannt ChatGPT deine Website? Die größten AIO-Fails 2026',
    description: 'Keyword-Stuffing, Cloaking, Spam-Content: Warum billige Tricks bei ChatGPT und Perplexity zum permanenten Bann führen, und was stattdessen funktioniert.',
    href: '/wissen/aio-fails-chatgpt-bann',
    tag: 'AIO Fails',
    topic: 'Strategie',
    readTime: '11 Min.',
    date: '2026-04-02',
  },
  {
    title: 'Was ist GEO? Generative Engine Optimization endlich verständlich erklärt',
    description: 'GEO ist nicht einfach „SEO für KI". Was Generative Engine Optimization wirklich bedeutet, wie es sich von SEO und AEO unterscheidet und warum es 2026 unverzichtbar ist.',
    href: '/wissen/was-ist-geo',
    tag: 'GEO',
    topic: 'Grundlagen',
    readTime: '10 Min.',
    date: '2026-04-02',
  },
  {
    title: 'llms.txt erstellen: So machst du deine Website KI-lesbar',
    description: 'Was llms.txt ist, warum robots.txt nicht reicht und wie du Schritt für Schritt eine llms.txt-Datei erstellst, die KI-Systeme tatsächlich lesen.',
    href: '/wissen/llms-txt-anleitung',
    tag: 'Technik',
    topic: 'Technik',
    readTime: '12 Min.',
    date: '2026-04-02',
  },
  {
    title: 'E-E-A-T und KI: Warum Expertise für ChatGPT wichtiger ist als für Google',
    description: 'E-E-A-T ist nicht nur für Google relevant. Wie KI-Systeme Expertise bewerten und warum eine Autoren-Bio allein nichts bringt.',
    href: '/wissen/eeat-ki-sichtbarkeit',
    tag: 'E-E-A-T',
    topic: 'Grundlagen',
    readTime: '10 Min.',
    date: '2026-04-02',
  },
  {
    title: 'AI SEO Tools 2026: Welche sich lohnen und welche Geldverbrennung sind',
    description: 'Ehrlicher Überblick über die AI SEO Tool-Landschaft: Monitoring, Content-Optimierung, technische Tools, und welche du getrost ignorieren kannst.',
    href: '/wissen/ai-seo-tools',
    tag: 'Tools',
    topic: 'Technik',
    readTime: '11 Min.',
    date: '2026-04-02',
  },
  {
    title: 'Perplexity vs ChatGPT vs Google AI: Wo lohnt sich Optimierung am meisten?',
    description: 'Drei KI-Plattformen, drei verschiedene Spielregeln. Wie jede Content entdeckt, was jede priorisiert und wo du anfangen solltest.',
    href: '/wissen/perplexity-vs-chatgpt-vs-google',
    tag: 'Vergleich',
    topic: 'Vergleiche',
    readTime: '11 Min.',
    date: '2026-04-02',
  },
  {
    title: 'Wie KI-Systeme über deine Marke entscheiden — und was du dagegen tun kannst',
    description: 'LLMs bilden sich eine Meinung über deine Marke. Woher sie ihre Informationen nehmen und wie du das Bild beeinflussen kannst.',
    href: '/wissen/ki-markenwahrnehmung',
    tag: 'Branding',
    topic: 'Strategie',
    readTime: '10 Min.',
    date: '2026-04-02',
  },
  {
    title: 'KI-Sichtbarkeit für Online-Shops: Warum ChatGPT deine Produkte nicht empfiehlt',
    description: 'Produktseiten sind für LLMs unsichtbar. Wie E-Commerce-Unternehmen zitierbaren Content rund um ihre Produkte aufbauen.',
    href: '/wissen/ki-sichtbarkeit-ecommerce',
    tag: 'E-Commerce',
    topic: 'Branchen',
    readTime: '11 Min.',
    date: '2026-04-02',
  },
  {
    title: 'Lokale KI-Sichtbarkeit: Warum dein Restaurant in ChatGPT unsichtbar ist',
    description: 'Google Maps ist nicht gleich ChatGPT-Wissen. Warum lokale Unternehmen in KI-Systemen fast unsichtbar sind und was dagegen hilft.',
    href: '/wissen/lokale-ki-sichtbarkeit',
    tag: 'Lokal',
    topic: 'Branchen',
    readTime: '11 Min.',
    date: '2026-04-02',
  },
  {
    title: 'Der große KI-Content-Audit: So prüfst du, ob dein Content 2027 überlebt',
    description: 'Schritt-für-Schritt-Anleitung zum Audit deines bestehenden Contents auf KI-Tauglichkeit. Mit Scoring-System und Checkliste.',
    href: '/wissen/ki-content-audit-anleitung',
    tag: 'Content Audit',
    topic: 'Strategie',
    readTime: '12 Min.',
    date: '2026-04-02',
  },
  {
    title: 'Zero-Click-Zukunft: Warum deine Website bald keinen Traffic mehr braucht',
    description: 'Gartner sagt 50% Traffic-Verlust bis 2028 voraus. Warum das eine Chance ist und welche neuen KPIs zählen.',
    href: '/wissen/zero-click-zukunft',
    tag: 'Zukunft',
    topic: 'Strategie',
    readTime: '9 Min.',
    date: '2026-04-02',
  },
  {
    title: 'Sichtbarkeit in Google AI Overviews: So wirst du in der KI-Box zitiert',
    description: 'Google zeigt KI-Antworten direkt über den Suchergebnissen. Wie du in AI Overviews als Quelle erscheinst und Zero-Click-Traffic gewinnst.',
    href: '/wissen/ai-overviews-sichtbarkeit',
    tag: 'AI Overviews',
    topic: 'Plattformen',
    readTime: '11 Min.',
    date: '2026-03-24',
  },
  {
    title: 'KI-Sichtbarkeit messen: Tools, KPIs und Tracking-Methoden',
    description: 'Wie misst du, ob ChatGPT dich empfiehlt? Die wichtigsten Tools, Metriken und ein konkretes Dashboard für KI-Sichtbarkeits-Tracking.',
    href: '/wissen/ki-sichtbarkeit-messen',
    tag: 'Analytics',
    topic: 'Strategie',
    readTime: '10 Min.',
    date: '2026-03-24',
  },
  {
    title: 'Technische KI-Sichtbarkeit: Warum KI-Crawler deine Website nicht verstehen',
    description: 'robots.txt, llms.txt, Schema.org und semantisches HTML: Die technischen Grundlagen, damit KI-Systeme deine Inhalte crawlen und zitieren.',
    href: '/wissen/technische-ki-sichtbarkeit',
    tag: 'Technik',
    topic: 'Technik',
    readTime: '12 Min.',
    date: '2026-03-24',
  },
  {
    title: 'AEO — Answer Engine Optimization: Der Guide für 2026',
    description: 'Was Answer Engine Optimization wirklich ist, wie sie sich von SEO und GEO unterscheidet und welche konkreten Hebel deine Inhalte zur direkten KI-Antwort machen.',
    href: '/wissen/aeo-answer-engine-optimization',
    tag: 'AEO',
    topic: 'Grundlagen',
    readTime: '11 Min.',
    date: '2026-03-24',
  },
  {
    title: 'LLMO — LLM Optimierung: So wirst du von KI-Systemen empfohlen',
    description: 'Large Language Model Optimization erklärt: Welche Signale LLMs nutzen, wie du deine Marke in Trainings- und Retrieval-Daten platzierst und welche Tools wirklich helfen.',
    href: '/wissen/llmo-llm-optimierung',
    tag: 'LLMO',
    topic: 'Grundlagen',
    readTime: '11 Min.',
    date: '2026-03-24',
  },
  {
    title: 'Sichtbarkeit in Claude AI: So wird dein Unternehmen empfohlen',
    description: 'Wie wirst du in Anthropics Claude sichtbar? Die wichtigsten Faktoren, konkrete Strategien und Praxis-Tipps für Claude AI Optimierung und Citation-Building.',
    href: '/wissen/sichtbarkeit-in-claude',
    tag: 'Claude',
    topic: 'Plattformen',
    readTime: '9 Min.',
    date: '2026-03-24',
  },
  {
    title: 'Sichtbarkeit in Google Gemini: So erscheinst du in Googles KI',
    description: 'Gemini-Optimierung, E-E-A-T, Knowledge Graph und lokale KI-Sichtbarkeit. 7 Strategien, damit deine Marke in Googles KI-Antworten erscheint.',
    href: '/wissen/sichtbarkeit-in-gemini',
    tag: 'Gemini',
    topic: 'Plattformen',
    readTime: '10 Min.',
    date: '2026-03-24',
  },
  {
    title: 'AI Content Strategie: Inhalte, die KI-Systeme zitieren wollen',
    description: 'Wie strukturiert man Content, damit ChatGPT, Perplexity und Gemini ihn aktiv zitieren? Die Content-Architektur für 2026, mit konkreten Templates.',
    href: '/wissen/ai-content-strategie',
    tag: 'Content',
    topic: 'Strategie',
    readTime: '12 Min.',
    date: '2026-03-24',
  },
  {
    title: 'KI-Sichtbarkeit Kosten: Was AI SEO 2026 wirklich kostet',
    description: 'Transparente Preise statt Geheimniskrämerei. Was ein KI-Sichtbarkeits-Audit, ein 90-Tage-Programm und laufende Betreuung tatsächlich kosten, mit ROI-Rechnung.',
    href: '/wissen/ki-sichtbarkeit-kosten',
    tag: 'Preise',
    topic: 'Strategie',
    readTime: '9 Min.',
    date: '2026-03-24',
  },
  {
    title: 'KI-Sichtbarkeit für Ärzte & Praxen: Wenn Patienten die KI fragen',
    description: 'Wie Ärzte und Praxen in ChatGPT, Perplexity und Google AI sichtbar werden. 7 Strategien, medizinisches E-E-A-T und lokale Sichtbarkeit in Hamburg.',
    href: '/wissen/ki-sichtbarkeit-aerzte',
    tag: 'Ärzte',
    topic: 'Branchen',
    readTime: '11 Min.',
    date: '2026-03-24',
  },
  {
    title: 'KI-Sichtbarkeit für Anwälte & Kanzleien: Mandanten fragen die KI',
    description: 'Wie Anwälte und Kanzleien in KI-Antworten als Quelle erscheinen. 7 Strategien für rechtsspezifisches E-E-A-T und lokale Sichtbarkeit in Hamburg.',
    href: '/wissen/ki-sichtbarkeit-anwaelte',
    tag: 'Anwälte',
    topic: 'Branchen',
    readTime: '11 Min.',
    date: '2026-03-24',
  },
  {
    title: 'KI-Sichtbarkeit für Handwerker: Wenn Kunden die KI nach dem besten Betrieb fragen',
    description: 'Warum ChatGPT nur 2–3 Handwerksbetriebe empfiehlt, welche Faktoren entscheiden und 7 Strategien für Hamburger Handwerker.',
    href: '/wissen/ki-sichtbarkeit-handwerker',
    tag: 'Handwerk',
    topic: 'Branchen',
    readTime: '11 Min.',
    date: '2026-03-24',
  },
  {
    title: 'KI-Sichtbarkeit für Immobilienmakler: Wenn Käufer die KI fragen',
    description: 'Wie Immobilienmakler in ChatGPT, Perplexity und Google AI Overviews empfohlen werden. 7 Strategien für den Hamburger Immobilienmarkt.',
    href: '/wissen/ki-sichtbarkeit-immobilien',
    tag: 'Immobilien',
    topic: 'Branchen',
    readTime: '11 Min.',
    date: '2026-03-24',
  },
  {
    title: 'GEO Agentur Hamburg: Was gute Generative Engine Optimization wirklich leistet',
    description: 'Woran du echte GEO-Expertise erkennst, für welche Hamburger Unternehmen sie sich lohnt und wie lokale KI-Sichtbarkeit aufgebaut wird.',
    href: '/wissen/geo-agentur-hamburg',
    tag: 'Hamburg',
    topic: 'Strategie',
    readTime: '8 Min.',
    date: '2026-03-19',
  },
  {
    title: 'ChatGPT SEO: So optimierst du Inhalte für Empfehlungen statt Rankings',
    description: 'Was ChatGPT SEO wirklich bedeutet, welche Hebel Empfehlungen beeinflussen und warum Klarheit wichtiger ist als Keyword-Gymnastik.',
    href: '/wissen/chatgpt-seo',
    tag: 'ChatGPT',
    topic: 'Plattformen',
    readTime: '9 Min.',
    date: '2026-03-19',
  },
  {
    title: 'SEO vs AI SEO: Was du 2026 wirklich brauchst',
    description: 'Die Entscheidungshilfe für Unternehmen, die wissen wollen, wann klassisches SEO reicht und wann AI SEO zusätzlich nötig wird.',
    href: '/wissen/seo-vs-ai-seo',
    tag: 'Vergleich',
    topic: 'Vergleiche',
    readTime: '8 Min.',
    date: '2026-03-19',
  },
  {
    title: 'Case Study KinderAlbum: Von Nischenprodukt zu KI-Empfehlung',
    description: 'Wie eine DSGVO-konforme Foto-Plattform für Schulen in ChatGPT und Perplexity sichtbar wurde, mit echten Learnings statt Märchenkurve.',
    href: '/wissen/case-study-kinderalbum',
    tag: 'Case Study',
    topic: 'Case Studies',
    readTime: '7 Min.',
    date: '2026-03-19',
  },
  {
    title: 'Case Study Blitz Hamburg: Wie klare Positionierung zu ChatGPT-Empfehlungen führte',
    description: 'Ein lokaler Dienstleister, ein austauschbarer Markt und der Hebel, der aus Sichtbarkeit echte Empfehlbarkeit macht.',
    href: '/wissen/case-study-blitz-hamburg',
    tag: 'Case Study',
    topic: 'Case Studies',
    readTime: '7 Min.',
    date: '2026-03-19',
  },
  {
    title: 'Sichtbarkeit in ChatGPT: So wird dein Unternehmen empfohlen',
    description: 'Die wichtigsten Faktoren, die bestimmen, ob ChatGPT dein Unternehmen nennt. Mit konkreten Strategien und Praxis-Tipps.',
    href: '/wissen/sichtbarkeit-in-chatgpt',
    tag: 'ChatGPT',
    topic: 'Plattformen',
    readTime: '10 Min.',
    date: '2026-03-12',
  },
  {
    title: 'Sichtbarkeit in Perplexity AI: Wie dein Unternehmen zitiert wird',
    description: 'Perplexity wächst um 370% jährlich. So optimierst du deine Inhalte, um von der KI-Suchmaschine zitiert zu werden.',
    href: '/wissen/sichtbarkeit-in-perplexity',
    tag: 'Perplexity',
    topic: 'Plattformen',
    readTime: '10 Min.',
    date: '2026-03-12',
  },
  {
    title: 'AI SEO Agentur: Was sie wirklich leistet',
    description: 'Was eine gute AI SEO Agentur ausmacht, worauf du bei der Auswahl achten solltest und wann sich Beratung lohnt.',
    href: '/wissen/ai-seo-agentur',
    tag: 'Beratung',
    topic: 'Strategie',
    readTime: '9 Min.',
    date: '2026-03-12',
  },
  {
    title: 'Website-Automatisierung: Tools und Strategien für 2026',
    description: 'Die besten Automatisierungs-Tools für deutsche Unternehmen. DSGVO-konform, praxiserprobt und mit konkreten Anwendungsfällen.',
    href: '/wissen/website-automatisierung',
    tag: 'Automatisierung',
    topic: 'Technik',
    readTime: '10 Min.',
    date: '2026-03-12',
  },
];

// featured first, then newest by date descending. Array order breaks ties.
export function sortedArticles(): Article[] {
  return [...ARTICLES].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.date.localeCompare(a.date);
  });
}
