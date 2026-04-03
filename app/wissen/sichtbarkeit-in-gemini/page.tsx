'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Sichtbarkeit in Google Gemini: So erscheinst du in Googles KI',
    description: 'Wie Gemini und AI Overviews Quellen auswahlen, warum E-E-A-T und strukturierte Daten entscheidend sind, und 7 Strategien fur Gemini-Sichtbarkeit.',
    author: {
        '@type': 'Person',
        name: 'Vadim Shchepin',
        url: 'https://aiseo.hamburg',
    },
    publisher: {
        '@type': 'Organization',
        name: 'aiseo.hamburg',
        url: 'https://aiseo.hamburg',
    },
    datePublished: '2026-03-24',
    dateModified: '2026-03-24',
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://aiseo.hamburg/wissen/sichtbarkeit-in-gemini',
    },
    inLanguage: 'de',
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Wie werde ich in Google Gemini sichtbar?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Gemini nutzt Googles eigene Ranking-Signale, den Knowledge Graph und strukturierte Daten. Optimiere dein Google Business Profile, setze Schema.org Markup ein, baue E-E-A-T-Signale auf und sorge dafur, dass deine Inhalte fur Featured Snippets optimiert sind. Gemini bevorzugt Quellen, die Google bereits als autoritativ einstuft.',
            },
        },
        {
            '@type': 'Question',
            name: 'Was ist der Unterschied zwischen Gemini und AI Overviews?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Gemini ist Googles KI-Assistent als eigenstandige App und in Workspace integriert. AI Overviews sind KI-generierte Zusammenfassungen direkt in den Google-Suchergebnissen. Beide nutzen Gemini-Modelle, aber in unterschiedlichen Kontexten: AI Overviews reagieren auf Suchanfragen, Gemini auf Konversationen.',
            },
        },
        {
            '@type': 'Question',
            name: 'Beeinflusst mein Google-Ranking die Gemini-Sichtbarkeit?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ja, direkt. Im Gegensatz zu ChatGPT (das Bing nutzt) greift Gemini auf Googles eigenen Index und Ranking-Signale zuruck. Wer bei Google gut rankt, hat einen strukturellen Vorteil bei Gemini. Allerdings reicht ein gutes Ranking allein nicht - Gemini bewertet zusatzlich E-E-A-T, strukturierte Daten und Knowledge-Graph-Prasenz.',
            },
        },
        {
            '@type': 'Question',
            name: 'Wie wichtig ist das Google Business Profile fur Gemini?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sehr wichtig, besonders fur lokale Anfragen. Gemini greift direkt auf Google Business Profile-Daten zu. Ein vollstandig ausgefulltes Profil mit aktuellen Offnungszeiten, Fotos, Bewertungen und regelmasigen Posts erhoht die Chance, von Gemini bei lokalen Empfehlungen berucksichtigt zu werden.',
            },
        },
        {
            '@type': 'Question',
            name: 'Kann ich messen, ob Gemini mein Unternehmen empfiehlt?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Direkte Gemini-Analytics gibt es noch nicht. Du kannst aber AI Overview-Impressionen in der Google Search Console tracken, Referral-Traffic von gemini.google.com in Analytics prufen, und regelmasige Prompt-Tests mit branchenspezifischen Fragen durchfuhren. Google arbeitet an erweiterten Reporting-Tools fur AI Overviews.',
            },
        },
        {
            '@type': 'Question',
            name: 'Welche Rolle spielt YouTube fur die Gemini-Sichtbarkeit?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Eine grosse Rolle. Gemini kann YouTube-Videos analysieren und deren Inhalte in Antworten einbeziehen. Unternehmen mit einer aktiven YouTube-Prasenz, die Fachthemen in Videos erklaren, haben einen zusatzlichen Sichtbarkeitskanal. Optimierte Videotitel, Beschreibungen und Kapitelmarker helfen Gemini, den Videoinhalt zu verstehen.',
            },
        },
        {
            '@type': 'Question',
            name: 'Wie schnell wirken Optimierungen fur Gemini?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Schneller als bei ChatGPT, da Gemini auf den Live-Google-Index zugreift. Anderungen an strukturierten Daten und Google Business Profile konnen innerhalb von Tagen wirken. E-E-A-T-Aufbau und Knowledge-Graph-Prasenz sind langfristige Massnahmen, die Wochen bis Monate brauchen.',
            },
        },
    ],
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Startseite',
            item: 'https://aiseo.hamburg',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Wissen',
            item: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Sichtbarkeit in Gemini',
            item: 'https://aiseo.hamburg/wissen/sichtbarkeit-in-gemini',
        },
    ],
};

// Hero Section
const HeroSection: React.FC = () => (
    <section className="relative pt-32 pb-20 md:pt-52 md:pb-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
        <FadeIn>
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-gray-400">
                <a href="/" className="hover:text-brand-accent transition-colors">Startseite</a>
                <span className="mx-2">/</span>
                <a href="/wissen/ki-sichtbarkeit" className="hover:text-brand-accent transition-colors">Wissen</a>
                <span className="mx-2">/</span>
                <span className="text-gray-600">Sichtbarkeit in Gemini</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
                Sichtbarkeit in Google Gemini:<br />
                So erscheinst du in Googles KI
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
                Gemini ist nicht irgendeine KI. Es ist Googles KI - eingebaut in Search, Gmail, Workspace
                und Android. Mit uber 2 Milliarden Chrome-Nutzern und 8,5 Milliarden Suchanfragen pro Tag
                hat Gemini die grosste Reichweite aller KI-Systeme. Dieser Guide zeigt dir, wie du dort sichtbar wirst.
            </p>
        </FadeIn>
    </section>
);

// TLDR Section
const TLDRSection: React.FC = () => (
    <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <FadeIn>
            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
                <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">Zusammenfassung</p>
                <ul className="space-y-2 text-gray-800">
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">1.</span>
                        <span>Gemini nutzt Googles eigene Ranking-Signale - dein Google-Ranking ist direkter Hebel fur Gemini-Sichtbarkeit.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">2.</span>
                        <span>AI Overviews in der Google-Suche und Gemini App nutzen dieselben Modelle, aber unterschiedliche Kontexte.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">3.</span>
                        <span>E-E-A-T (Erfahrung, Expertise, Autoritat, Vertrauenswurdigkeit) ist bei Gemini noch wichtiger als im klassischen Google-Ranking.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">4.</span>
                        <span>Strukturierte Daten und Knowledge-Graph-Prasenz werden von Gemini direkt verarbeitet - nicht nur als Ranking-Signal.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">5.</span>
                        <span>YouTube-Inhalte fliessen in Gemini-Antworten ein - ein Kanal, den die meisten Unternehmen ubersehen.</span>
                    </li>
                </ul>
            </div>
        </FadeIn>
    </section>
);

// Why Gemini Changes Everything Section
const WhyGeminiSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Warum Google Gemini alles verandert
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    ChatGPT hat 400 Millionen Nutzer. Beeindruckend. Aber Google hat 4,3 Milliarden.
                    Wenn Google seine KI in die Suche einbaut - und genau das passiert mit AI Overviews -
                    dann verandert sich nicht ein Kanal. Dann verandert sich das gesamte Suchverhalten.
                </p>
                <p>
                    Gemini ist kein isoliertes Produkt. Es ist in das grosste digitale Okosystem der
                    Welt integriert: Google Search, Gmail, Google Docs, Google Maps, Android, YouTube.
                    Wenn ein Nutzer in Gmail eine E-Mail von einem Dienstleister bekommt und Gemini fragt
                    &ldquo;Ist dieser Anbieter gut?&rdquo;, dann nutzt Gemini alles, was Google uber diesen
                    Anbieter weiss. Reviews, Rankings, Knowledge Graph, YouTube-Videos, Search-Historie.
                </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 my-8">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Google Search</h3>
                    <p className="text-gray-600 text-base">
                        AI Overviews erscheinen bei immer mehr Suchanfragen direkt uber den organischen Ergebnissen.
                        Sie fassen Informationen zusammen und empfehlen Quellen - bevor der Nutzer uberhaupt scrollt.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Workspace & Gmail</h3>
                    <p className="text-gray-600 text-base">
                        Gemini ist in Google Docs, Sheets, Gmail und Slides integriert. Wenn jemand in Docs recherchiert
                        oder in Gmail nach Empfehlungen fragt, antwortet Gemini mit Googles gesamtem Wissensgraph.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Android & Maps</h3>
                    <p className="text-gray-600 text-base">
                        Auf Android-Geraten ist Gemini der Standard-Assistent. Bei lokalen Anfragen greift es
                        auf Google Maps und Business Profile zu - direkt auf dem Sperrbildschirm.
                    </p>
                </div>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Das bedeutet: Gemini ist nicht ein weiteres KI-Tool, das du optimieren musst. Es ist
                    die KI-Schicht uber dem gesamten Google-Okosystem. Und dieses Okosystem kennt deine
                    Kunden bereits.
                </p>
            </div>
        </FadeIn>
    </section>
);

// Pain Section
const PainSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Das Gemini-Problem: Google kennt dich - aber empfiehlt dich nicht
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Du rankst auf Seite 1 bei Google. Seit Jahren. Du hast in SEO investiert, Backlinks
                    aufgebaut, Content erstellt. Und trotzdem: Wenn jemand Gemini fragt &ldquo;Welcher
                    Dienstleister in Hamburg ist gut fur [dein Thema]?&rdquo;, empfiehlt es jemand anderen.
                </p>
                <p>
                    Das ist das Paradox der Gemini-Sichtbarkeit: Google hat alle Daten uber dich. Dein
                    Ranking, deine Bewertungen, dein Business Profile, deine Schema-Daten. Aber Gemini
                    nutzt diese Daten anders als die klassische Suche. Es fasst zusammen, gewichtet neu,
                    und prasentiert eine einzelne Antwort statt zehn blaue Links.
                </p>
            </div>

            <div className="space-y-6">
                {[
                    {
                        pain: 'AI Overviews fressen deinen organischen Traffic - und du merkst es nicht',
                        detail: 'Wenn AI Overviews die Antwort direkt in der Suche liefern, klickt der Nutzer nicht mehr auf dein Ergebnis. Dein Ranking bleibt gleich, aber dein Traffic sinkt. In der Search Console siehst du sinkende Klicks bei stabilen Impressionen - das klassische Zeichen fur AI Overview-Kannibalisierung.',
                    },
                    {
                        pain: 'Du rankst auf Seite 1, aber Gemini empfiehlt jemand anderen',
                        detail: 'Gemini wahlt nicht automatisch das Top-Ranking-Ergebnis. Es bevorzugt Quellen mit starken E-E-A-T-Signalen, strukturierten Daten und Knowledge-Graph-Prasenz. Ein Wettbewerber mit schlechterem Ranking aber besserem Schema-Markup kann dich in Gemini-Antworten verdraengen.',
                    },
                    {
                        pain: 'Google kennt alles uber dich - nutzt es aber nicht fur Gemini-Empfehlungen',
                        detail: 'Google hat deine Daten, aber Gemini braucht sie in einem bestimmten Format. Ohne strukturierte Daten, ohne vollstandiges Business Profile, ohne Knowledge-Panel-Prasenz kann Gemini deine Informationen nicht effizient verarbeiten - auch wenn sie im Index liegen.',
                    },
                    {
                        pain: 'Deine Konkurrenz erscheint im Knowledge Panel - du nicht',
                        detail: 'Knowledge Panels sind Geminis Vertrauensanker. Unternehmen mit eigenem Knowledge Panel werden von Gemini als Entitaten erkannt und bevorzugt zitiert. Ohne Panel bist du fur Gemini eine von Millionen Webseiten statt einer erkannten Marke.',
                    },
                ].map((item, i) => (
                    <FadeIn key={i} delay={i * 50}>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6">
                            <div className="flex items-start gap-3">
                                <span className="text-red-400 font-bold text-xl leading-none mt-0.5 flex-shrink-0">&#10007;</span>
                                <div>
                                    <h3 className="font-semibold text-black text-lg mb-1">{item.pain}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.detail}</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </FadeIn>
    </section>
);

// How Gemini Selects Sources Section
const SourceSelectionSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Wie Gemini Quellen auswahlt
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Gemini hat einen fundamentalen Vorteil gegenuber ChatGPT und Perplexity: Es sitzt
                    direkt auf Googles Infrastruktur. Das bedeutet Zugriff auf den grossten Suchindex der Welt,
                    den Knowledge Graph mit Milliarden von Entitaten, und 25 Jahre Ranking-Erfahrung.
                </p>
                <p>
                    Aber Gemini kopiert nicht einfach die Google-Suchergebnisse. Es nutzt Googles Signale
                    als Basis und legt KI-spezifische Bewertungskriterien daruber.
                </p>
            </div>

            <div className="space-y-6">
                {[
                    {
                        title: 'Googles Ranking-Signale als Fundament',
                        desc: 'Seiten, die bei Google gut ranken, haben einen Startvorteil bei Gemini. Aber es ist nur ein Startvorteil - nicht die Garantie. Gemini nutzt die Ranking-Daten, um einen Pool relevanter Quellen zu identifizieren, und filtert dann nach zusatzlichen Kriterien.',
                    },
                    {
                        title: 'E-E-A-T als Vertrauensfilter',
                        desc: 'Erfahrung, Expertise, Autoritat, Vertrauenswurdigkeit - bei Gemini noch wichtiger als im klassischen Ranking. Gemini prasentiert eine einzige Antwort, nicht zehn Ergebnisse. Deshalb muss die Quelle maximal vertrauenswurdig sein. Seiten mit klarer Autorenschaft, nachweisbarer Expertise und zitierbaren Referenzen werden bevorzugt.',
                    },
                    {
                        title: 'Strukturierte Daten als Direktzugang',
                        desc: 'Schema.org Markup ist fur Gemini nicht nur ein Ranking-Signal - es ist ein Verarbeitungsformat. Gemini kann strukturierte Daten direkt interpretieren: FAQPage-Markup wird zu Antworten, Product-Markup zu Empfehlungen, LocalBusiness-Markup zu lokalen Vorschlagen. Ohne strukturierte Daten muss Gemini raten, was dein Content bedeutet.',
                    },
                    {
                        title: 'Knowledge Graph Integration',
                        desc: 'Googles Knowledge Graph enthalt Milliarden vernetzter Entitaten: Unternehmen, Personen, Orte, Produkte. Wenn dein Unternehmen als Entitat im Knowledge Graph existiert, kann Gemini es als eigenstandige Marke erkennen und in Beziehung zu anderen Entitaten setzen. Ohne Knowledge-Graph-Prasenz bist du fur Gemini unsichtbar als Marke.',
                    },
                ].map((factor, i) => (
                    <FadeIn key={i} delay={i * 50}>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6">
                            <h3 className="font-semibold text-black text-lg mb-2">{factor.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{factor.desc}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </FadeIn>
    </section>
);

// Gemini vs AI Overviews Section
const GeminiVsAIOSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Gemini vs AI Overviews: Was ist der Unterschied?
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Beide nutzen Gemini-Modelle. Aber der Kontext ist komplett unterschiedlich - und damit
                    auch die Optimierungsstrategie.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Gemini App</h3>
                    <p className="text-gray-600 text-base mb-3">
                        Eigenstandiger KI-Assistent unter gemini.google.com und in der mobilen App.
                        Nutzer fuhren Gesprache, stellen komplexe Fragen, lassen sich beraten.
                    </p>
                    <p className="text-gray-600 text-base mb-3">
                        Gemini hat hier mehr Kontext: Es kennt die Gesprachehistorie, kann Ruckfragen stellen,
                        und zieht bei Bedarf Informationen aus Google Search, Maps und YouTube heran.
                    </p>
                    <p className="text-gray-600 text-base">
                        <strong>Optimierung:</strong> Breite Autoritat, Knowledge-Graph-Prasenz, konsistente
                        Markeninformationen uber alle Google-Dienste hinweg.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">AI Overviews in Search</h3>
                    <p className="text-gray-600 text-base mb-3">
                        KI-generierte Zusammenfassungen direkt in den Google-Suchergebnissen. Erscheinen
                        uber den organischen Ergebnissen und beantworten die Suchanfrage sofort.
                    </p>
                    <p className="text-gray-600 text-base mb-3">
                        AI Overviews sind suchgetrieben: Sie reagieren auf eine spezifische Query und ziehen
                        Quellen aus den Top-Suchergebnissen heran. Die Quellenauswahl ist enger an das
                        klassische Ranking gebunden.
                    </p>
                    <p className="text-gray-600 text-base">
                        <strong>Optimierung:</strong> Featured-Snippet-Optimierung, direkte Antworten in den
                        ersten Absatzen, strukturierte Daten, klare H2-Hierarchie.
                    </p>
                </div>
            </div>

            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm">
                <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">Wichtig</p>
                <p className="text-gray-800">
                    Du brauchst Sichtbarkeit in beiden Kontexten. AI Overviews betreffen jeden, der Google
                    nutzt - ob er will oder nicht. Die Gemini App wird von Power-Usern genutzt, die
                    tiefergehende Entscheidungen treffen. Wer in beiden sichtbar ist, dominiert Googles
                    gesamte KI-Flache.
                </p>
            </div>
        </FadeIn>
    </section>
);

// 7 Strategies Section
const StrategiesSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                7 Strategien fur Gemini-Sichtbarkeit
            </h2>
            <div className="space-y-8">
                {[
                    {
                        num: '01',
                        title: 'Google Business Profile vollstandig optimieren',
                        text: 'Fur lokale Gemini-Anfragen ist das Google Business Profile der wichtigste Datenpunkt. Fullstandige Beschaftreibung mit relevanten Keywords, alle Kategorien korrekt gesetzt, aktuelle Offnungszeiten, hochwertige Fotos (mindestens 10), regelmasige Posts (mindestens 2 pro Monat), und aktiv beantwortete Bewertungen. Gemini zieht diese Daten direkt in seine Antworten - unvollstandige Profile werden ubersprungen.',
                    },
                    {
                        num: '02',
                        title: 'Schema.org Markup implementieren',
                        text: 'Gemini verarbeitet strukturierte Daten direkt. Implementiere mindestens: LocalBusiness oder Organization Schema mit vollstandigen NAP-Daten, FAQPage fur haufige Fragen, Article mit Autor und Datum fur Fachcontent, Product oder Service fur dein Angebot, und BreadcrumbList fur Seitenstruktur. Teste jedes Markup mit Googles Rich Results Test. Fehlerhafte Schemas sind schlimmer als keine Schemas.',
                    },
                    {
                        num: '03',
                        title: 'E-E-A-T-Signale maximieren',
                        text: 'Gemini wahlt eine Quelle, nicht zehn. Deshalb muss diese Quelle maximales Vertrauen ausstrahlen. Konkret: Autorenprofile mit nachweisbarer Expertise auf jeder Seite, Impressum und Kontaktdaten prominent sichtbar, Quellenangaben und Referenzen in Fachartikeln, Zertifizierungen und Auszeichnungen im Schema-Markup, und regelmasig aktualisierte Inhalte mit sichtbarem Anderungsdatum.',
                    },
                    {
                        num: '04',
                        title: 'Content fur Featured Snippets optimieren',
                        text: 'AI Overviews bauen haufig auf den gleichen Quellen auf, die Google bereits fur Featured Snippets auswahlt. Optimiere dafur: Direkte Antwort in den ersten 2-3 Satzen nach der H2, klare Listenformate fur Prozesse und Aufzahlungen, Tabellen fur Vergleiche, kurze Absatze (max. 3-4 Satze), und Fragen als H2-Uberschriften im exakten Wortlaut, wie Nutzer sie stellen.',
                    },
                    {
                        num: '05',
                        title: 'Knowledge Panel aufbauen',
                        text: 'Ein eigenes Knowledge Panel ist der starkste Vertrauensindikator fur Gemini. So baust du es auf: Wikipedia-Eintrag anstreben (hohe Hurde, aber starkster Hebel), Wikidata-Eintrag erstellen (niedrigere Hurde, direkter Knowledge-Graph-Zugang), konsistente Unternehmensdaten uber alle Google-Dienste, Presseartikel und Erwaehnungen auf autoritativen Quellen, und Google Search Console mit deinem Brand verknupfen.',
                    },
                    {
                        num: '06',
                        title: 'YouTube-Prasenz nutzen',
                        text: 'Gemini versteht Video. Es kann YouTube-Inhalte analysieren und in Antworten einbeziehen - ein Kanal, den die meisten Unternehmen fur KI-Sichtbarkeit komplett ignorieren. Erstelle Erklarvideos zu deinen Kernthemen, nutze aussagekraftige Titel und Beschreibungen mit relevanten Keywords, setze Kapitelmarker fur einzelne Themen, transkribiere deine Videos und verlinke die Transkripte. Ein YouTube-Kanal mit 20 Fachvideos kann mehr Gemini-Sichtbarkeit bringen als 100 Blogartikel.',
                    },
                    {
                        num: '07',
                        title: 'Google Workspace Signals nutzen',
                        text: 'Gemini ist in Google Workspace integriert. Wenn Nutzer in Google Docs recherchieren oder in Gmail nach Empfehlungen fragen, greift Gemini auf denselben Datenpool zu. Stelle sicher, dass dein Unternehmen in Google-Diensten konsistent praesent ist: Google Business Profile, Google Maps Beitrage, Google News (fur Presseartikel), YouTube, und Google Scholar (fur Fachartikel). Je mehr Google-Touchpoints, desto sichtbarer fur Gemini.',
                    },
                ].map((strategy, i) => (
                    <FadeIn key={i} delay={i * 50}>
                        <div className="flex gap-5">
                            <div className="text-brand-accent font-bold text-sm mt-1 flex-shrink-0 w-6">{strategy.num}</div>
                            <div>
                                <h3 className="font-semibold text-black text-lg mb-2">{strategy.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{strategy.text}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </FadeIn>
    </section>
);

// Hamburg Local Section
const HamburgSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Gemini fur Hamburger Unternehmen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Hamburg ist die zweitgrosste Stadt Deutschlands. Bei lokalen Anfragen wie &ldquo;Bester
                    Steuerberater in Hamburg&rdquo; oder &ldquo;Webdesign Agentur Hamburg Empfehlung&rdquo;
                    greift Gemini massiv auf Google Business Profile und lokale Signale zuruck.
                </p>
                <p>
                    Fur Hamburger Unternehmen bedeutet das: Dein Google Business Profile ist nicht optional.
                    Es ist dein wichtigster Gemini-Datenpunkt. Wenn Gemini auf einem Android-Handy in
                    Hamburg eine lokale Empfehlung ausspricht, zieht es als erstes die Business-Profile-Daten heran.
                </p>
            </div>

            <div className="space-y-6">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">Lokale Autoritat aufbauen</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Gemini bewertet lokale Autoritat: Erwaehnungen in Hamburger Medien (Hamburger Abendblatt,
                        MOPO, Hamburg.de), Mitgliedschaft in der Handelskammer Hamburg, Eintrage in lokalen
                        Branchenverzeichnissen, Bewertungen von Hamburger Kunden. Je starker dein lokales
                        Signal, desto wahrscheinlicher die Gemini-Empfehlung bei Hamburg-bezogenen Anfragen.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">Google Maps und Android</h3>
                    <p className="text-gray-600 leading-relaxed">
                        In Hamburg nutzen Millionen Menschen Android-Gerate mit Gemini als Standard-Assistent.
                        Wenn sie unterwegs fragen &ldquo;Wo gibt es guten Kaffee in der Nahe?&rdquo; oder
                        &ldquo;Empfiehl mir einen Handwerker in Eimsbuttel&rdquo;, zieht Gemini Google Maps-Daten,
                        Bewertungen und Entfernungsdaten heran. Ein optimiertes Google Business Profile
                        mit korrekter Adresse, Offnungszeiten und Fotos ist der Zugang zu diesen Empfehlungen.
                    </p>
                </div>
            </div>
        </FadeIn>
    </section>
);

// FAQ Section
const FAQSection: React.FC = () => {
    const faqItems = [
        {
            q: 'Wie werde ich in Google Gemini sichtbar?',
            a: 'Optimiere dein Google Business Profile, implementiere Schema.org Markup, baue E-E-A-T-Signale auf und sorge fur Featured-Snippet-taugliche Inhalte. Gemini nutzt Googles eigene Ranking-Signale plus KI-spezifische Kriterien.',
        },
        {
            q: 'Was ist der Unterschied zwischen Gemini und AI Overviews?',
            a: 'Gemini ist Googles KI-Assistent als eigenstandige App. AI Overviews sind KI-Zusammenfassungen in den Suchergebnissen. Beide nutzen Gemini-Modelle, aber in unterschiedlichen Kontexten.',
        },
        {
            q: 'Beeinflusst mein Google-Ranking die Gemini-Sichtbarkeit?',
            a: 'Ja, direkt. Gemini greift auf Googles Index und Ranking-Signale zuruck. Ein gutes Google-Ranking ist ein Startvorteil, aber allein nicht ausreichend - E-E-A-T und strukturierte Daten sind zusatzlich entscheidend.',
        },
        {
            q: 'Wie wichtig ist das Google Business Profile fur Gemini?',
            a: 'Sehr wichtig, besonders fur lokale Anfragen. Gemini greift direkt auf Business-Profile-Daten zu. Vollstandigkeit, aktuelle Informationen und aktives Bewertungsmanagement sind Pflicht.',
        },
        {
            q: 'Kann ich messen, ob Gemini mein Unternehmen empfiehlt?',
            a: 'Prufe AI Overview-Impressionen in der Google Search Console, tracke Referral-Traffic von gemini.google.com, und fuhre regelmasige Prompt-Tests mit branchenspezifischen Fragen durch.',
        },
        {
            q: 'Welche Rolle spielt YouTube fur die Gemini-Sichtbarkeit?',
            a: 'Gemini kann YouTube-Videos analysieren und in Antworten einbeziehen. Eine aktive YouTube-Prasenz mit Fachvideos, optimierten Titeln und Kapitelmarkern eroffnet einen zusatzlichen Sichtbarkeitskanal.',
        },
        {
            q: 'Wie schnell wirken Optimierungen fur Gemini?',
            a: 'Schneller als bei ChatGPT, da Gemini auf den Live-Google-Index zugreift. Strukturierte Daten und Business-Profile-Anderungen konnen innerhalb von Tagen wirken. E-E-A-T und Knowledge Graph brauchen Wochen bis Monate.',
        },
    ];

    return (
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-12">
                    Haufig gestellte Fragen
                </h2>

                <div className="space-y-6">
                    {faqItems.map((item, i) => (
                        <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                            <h3 className="font-semibold text-black mb-2">{item.q}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.a}</p>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </section>
    );
};

// Sources Section
const SourcesSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-black mb-4">Quellen</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                        <a
                            href="https://blog.google/technology/ai/google-gemini-ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Google Blog: Introducing Gemini - Googles Most Capable AI Model
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://developers.google.com/search/docs/appearance/ai-overviews"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Google Search Central: AI Overviews and Your Website
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Google: Introduction to Structured Data and Search Features
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Google: Creating Helpful, Reliable, People-First Content (E-E-A-T)
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://searchengineland.com/google-ai-overviews-how-they-work-442547"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Search Engine Land: Google AI Overviews - How They Work and What It Means for SEO
                        </a>
                    </li>
                </ul>
            </div>
        </FadeIn>
    </section>
);

// Related Guides Section
const RelatedGuidesSection: React.FC = () => (
    <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <FadeIn>
            <h3 className="font-semibold text-black text-lg mb-4">Verwandte Guides:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
                <a
                    href="/wissen/ki-sichtbarkeit"
                    className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
                >
                    <p className="font-semibold text-black group-hover:text-brand-accent transition-colors mb-1">
                        KI-Sichtbarkeit: Der komplette Guide
                    </p>
                    <p className="text-sm text-gray-500">
                        Grundlagen, Strategie und Frameworks fur Sichtbarkeit in allen KI-Systemen.
                    </p>
                </a>
                <a
                    href="/wissen/ai-overviews-sichtbarkeit"
                    className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
                >
                    <p className="font-semibold text-black group-hover:text-brand-accent transition-colors mb-1">
                        Sichtbarkeit in AI Overviews
                    </p>
                    <p className="text-sm text-gray-500">
                        Wie du in Googles KI-Zusammenfassungen als Quelle erscheinst.
                    </p>
                </a>
                <a
                    href="/wissen/sichtbarkeit-in-chatgpt"
                    className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
                >
                    <p className="font-semibold text-black group-hover:text-brand-accent transition-colors mb-1">
                        Sichtbarkeit in ChatGPT
                    </p>
                    <p className="text-sm text-gray-500">
                        Wie ChatGPTs Dual-System funktioniert und wie du dort empfohlen wirst.
                    </p>
                </a>
                <a
                    href="/wissen/technische-ki-sichtbarkeit"
                    className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
                >
                    <p className="font-semibold text-black group-hover:text-brand-accent transition-colors mb-1">
                        Technische KI-Sichtbarkeit
                    </p>
                    <p className="text-sm text-gray-500">
                        Schema-Markup, Crawler-Zugang und technische Grundlagen fur KI-Optimierung.
                    </p>
                </a>
                <a
                    href="/wissen/ki-sichtbarkeit-messen"
                    className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
                >
                    <p className="font-semibold text-black group-hover:text-brand-accent transition-colors mb-1">
                        KI-Sichtbarkeit messen
                    </p>
                    <p className="text-sm text-gray-500">
                        Metriken, Tools und Methoden fur die Erfolgsmessung deiner KI-Sichtbarkeit.
                    </p>
                </a>
            </div>
        </FadeIn>
    </section>
);

// CTA Section
const CTASection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <div className="bg-[#121212] text-white rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] mb-6 leading-tight">
                        Erscheinst du in Gemini und AI Overviews?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                        Ich prufe, ob und wie Gemini dein Unternehmen aktuell darstellt - in der Gemini App
                        und in AI Overviews. Inklusive Google Business Profile-Check und Schema-Analyse.
                        Kostenlos, in 48 Stunden.
                    </p>
                    <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose Kurzanalyse anfragen" className="!py-4 !px-8" />
                </div>
            </div>
        </FadeIn>
    </section>
);

export default function SichtbarkeitInGeminiPage() {
    return (
        <div className="relative w-full overflow-hidden bg-[#F7F5F2] text-brand-text font-sans selection:bg-brand-accent selection:text-white">
            {/* Article JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            {/* FAQ JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Breadcrumb JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <Navbar />

            <main>
                <HeroSection />
                <TLDRSection />
                <WhyGeminiSection />
                <PainSection />
                <SourceSelectionSection />
                <GeminiVsAIOSection />
                <StrategiesSection />
                <HamburgSection />
                <FAQSection />
                <SourcesSection />
                <RelatedGuidesSection />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
}
