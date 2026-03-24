'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'KI-Sichtbarkeit für Immobilienmakler: Wenn Käufer die KI fragen',
    description: 'Wie Immobilienmakler in ChatGPT, Perplexity und Google AI Overviews empfohlen werden. 7 Strategien für KI-Sichtbarkeit im Immobilienmarkt.',
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
        '@id': 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-immobilien',
    },
    inLanguage: 'de',
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Wie wird mein Maklerbüro in ChatGPT empfohlen?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'ChatGPT empfiehlt Makler, die auf vertrauenswürdigen Quellen konsistent erwähnt werden: Google Business mit starken Bewertungen, Fachportale wie ImmoScout24, Presseartikel und eine professionelle Website mit Stadtteil-Expertise. Brand Mentions auf diesen Quellen sind der stärkste Faktor.',
            },
        },
        {
            '@type': 'Question',
            name: 'Reicht ein ImmoScout24-Profil für KI-Sichtbarkeit?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nein. ImmoScout24 dominiert Google, aber KI-Systeme empfehlen einzelne Makler, nicht Portale. Du brauchst eine eigene Website mit Stadtteil-Expertise, ein starkes Google-Business-Profil, Bewertungen auf mehreren Plattformen und idealerweise Presseerwähnungen. Die KI cross-referenziert alle Quellen.',
            },
        },
        {
            '@type': 'Question',
            name: 'Welche Rolle spielen Bewertungen für KI-Empfehlungen bei Maklern?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Bewertungen sind ein zentraler Faktor. KI-Systeme werten Google-Rezensionen, ProvenExpert, ImmoScout24-Bewertungen und Kununu aus. Die Anzahl, Aktualität und Konsistenz der Bewertungen entscheidet. Ein Makler mit 80 aktuellen 4,8-Sterne-Bewertungen wird bevorzugt empfohlen.',
            },
        },
        {
            '@type': 'Question',
            name: 'Wie schnell wirkt KI-Sichtbarkeit im Immobilienbereich?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Erste Effekte bei der Live-Websuche (ChatGPT über Bing, Perplexity) können innerhalb von Wochen sichtbar werden. Trainingsdaten der Modelle aktualisieren sich alle paar Monate. Für nachhaltigen Aufbau solltest du 3-6 Monate einplanen.',
            },
        },
        {
            '@type': 'Question',
            name: 'Ist KI-Sichtbarkeit für Einzelmakler oder nur für große Büros relevant?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Gerade Einzelmakler profitieren überproportional. Große Franchises haben zwar Markenbekanntheit, aber KI-Systeme empfehlen oft spezialisierte lokale Experten. Ein Einzelmakler, der als Eppendorf-Spezialist positioniert ist, kann in KI-Empfehlungen einen Engel & Völkers-Franchise schlagen.',
            },
        },
        {
            '@type': 'Question',
            name: 'Was bringt Schema.org RealEstateAgent Markup?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Das RealEstateAgent-Markup hilft KI-Systemen, dein Unternehmen korrekt als Immobilienmakler zu klassifizieren. Es strukturiert Daten wie Spezialisierung, Einzugsgebiet und Kontaktdaten maschinenlesbar. Das erhöht die Wahrscheinlichkeit, bei branchenspezifischen Anfragen empfohlen zu werden.',
            },
        },
        {
            '@type': 'Question',
            name: 'Verlieren Immobilienportale durch KI an Bedeutung?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ja, teilweise. Wenn Käufer die KI fragen "Welcher Makler in Winterhude ist gut?", empfiehlt die KI direkt einzelne Makler - nicht ImmoScout24-Listings. Portale bleiben für die Objektsuche relevant, aber für die Maklerauswahl verschiebt sich der Erstkontakt zur KI.',
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
            name: 'KI-Sichtbarkeit für Immobilienmakler',
            item: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-immobilien',
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
                <span className="text-gray-600">KI-Sichtbarkeit für Immobilienmakler</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
                KI-Sichtbarkeit für Immobilienmakler:<br />
                Wenn Käufer die KI fragen
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
                &ldquo;Welcher Immobilienmakler in Hamburg-Eppendorf ist empfehlenswert?&rdquo; &ndash; Diese Frage
                geht immer öfter an ChatGPT statt an Google. Wer bei der Antwort fehlt, verliert den
                Erstkontakt. Dieser Guide zeigt dir, wie du als Makler in KI-Empfehlungen reinkommst.
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
                        <span>Käufer und Verkäufer fragen ChatGPT nach Maklerempfehlungen. ImmoScout24 dominiert Google, aber KI empfiehlt einzelne Makler direkt.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">2.</span>
                        <span>Immobilien sind YMYL (große finanzielle Entscheidung). KI-Systeme empfehlen nur Makler mit starkem Vertrauensprofil über mehrere Quellen.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">3.</span>
                        <span>Lokale Stadtteil-Expertise schlägt generische Makler-Websites. Wer Marktberichte für Eppendorf oder Winterhude publiziert, wird als Experte empfohlen.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">4.</span>
                        <span>Bewertungen auf Google, ProvenExpert und ImmoScout24 sind der stärkste Einzelfaktor für Makler-Empfehlungen in KI-Systemen.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">5.</span>
                        <span>Provisionen von 3-6 % machen jeden KI-generierten Lead extrem wertvoll. Ein einziger Abschluss kann das gesamte KI-SEO-Investment refinanzieren.</span>
                    </li>
                </ul>
            </div>
        </FadeIn>
    </section>
);

// Problem Section
const ProblemSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Das Problem: Käufer und Verkäufer fragen die KI nach Maklerempfehlungen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Stell dir vor, ein Ehepaar sucht eine Eigentumswohnung in Hamburg-Eppendorf. Früher
                    hätten sie auf ImmoScout24 nach Objekten gesucht und sich zum erstbesten Makler
                    durchgeklickt. Heute öffnen sie ChatGPT und fragen:
                </p>
            </div>

            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 my-8 shadow-sm">
                <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">Typischer Prompt</p>
                <p className="text-xl md:text-2xl font-semibold text-black italic">
                    &ldquo;Welcher Immobilienmakler in Hamburg-Eppendorf ist empfehlenswert? Wir suchen eine
                    3-Zimmer-Wohnung bis 600.000 Euro.&rdquo;
                </p>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    ChatGPT antwortet nicht mit einer Liste von zehn Maklern. Es empfiehlt zwei bis drei
                    konkrete Namen &ndash; mit Begründung. &ldquo;Makler X ist auf Eppendorf spezialisiert,
                    hat 120 Google-Bewertungen mit 4,9 Sternen und wurde vom Hamburger Abendblatt als
                    lokaler Experte zitiert.&rdquo;
                </p>
                <p>
                    ImmoScout24 dominiert nach wie vor die Google-Suchergebnisse. Aber wenn die KI
                    gefragt wird, empfiehlt sie nicht das Portal &ndash; sie empfiehlt einzelne Makler.
                    Das verändert die Spielregeln fundamental.
                </p>
                <p>
                    Provisionen im Hamburger Immobilienmarkt liegen bei 3 bis 6 Prozent. Bei einer
                    Wohnung für 500.000 Euro sind das 15.000 bis 30.000 Euro. Jeder KI-generierte
                    Kontakt hat damit einen potenziellen Wert, der klassische Google-Ads-Leads in
                    den Schatten stellt. Und das Entscheidende: Eine KI-Empfehlung kommt mit einem
                    Vertrauensvorschuss. Der Kunde hat nicht zehn Makler verglichen &ndash; die KI hat
                    für ihn entschieden.
                </p>
            </div>
        </FadeIn>
    </section>
);

// Why It Matters Section
const WhyItMattersSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Warum KI-Sichtbarkeit für Makler spielentscheidend ist
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Immobilien sind ein klassisches YMYL-Thema &ndash; Your Money, Your Life. Eine
                    Immobilientransaktion ist für die meisten Menschen die größte finanzielle
                    Entscheidung ihres Lebens. KI-Systeme behandeln solche Anfragen mit besonderer
                    Sorgfalt und empfehlen nur Anbieter mit eindeutigem Vertrauensprofil.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Vertrauen ist die Währung</h3>
                    <p className="text-gray-600 text-base">
                        Beim Maklerkauf geht es um Vertrauen. Niemand übergibt die Vermarktung seiner
                        Immobilie an einen Unbekannten. KI-Systeme bilden diesen Vertrauensprozess ab:
                        Sie empfehlen Makler, die über viele Quellen hinweg als kompetent und
                        vertrauenswürdig bestätigt werden.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Lokale Expertise als USP</h3>
                    <p className="text-gray-600 text-base">
                        Immobilien sind hyperlokal. Ein Makler, der Winterhude kennt, ist für einen
                        Winterhude-Verkäufer relevanter als ein bundesweiter Franchise. KI-Systeme
                        verstehen das &ndash; und bevorzugen nachweisbare lokale Spezialisierung gegenüber
                        generischer Marktabdeckung.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Portale verlieren den Erstkontakt</h3>
                    <p className="text-gray-600 text-base">
                        Wenn die KI direkt Makler empfiehlt, umgeht der Käufer ImmoScout24, Immowelt
                        und Co. komplett. Der Erstkontakt findet über die KI-Empfehlung statt &ndash; ohne
                        Portal-Provision, ohne Vergleich mit zehn anderen Anbietern. Das ist ein
                        Paradigmenwechsel.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Hohe Provisionen = hoher Lead-Wert</h3>
                    <p className="text-gray-600 text-base">
                        Bei Provisionen von 15.000 bis 30.000 Euro pro Transaktion ist der ROI von
                        KI-Sichtbarkeit im Immobilienbereich extrem hoch. Zwei bis drei KI-generierte
                        Abschlüsse pro Jahr finanzieren eine komplette KI-SEO-Strategie &ndash; mit Gewinn.
                    </p>
                </div>
            </div>
        </FadeIn>
    </section>
);

// Factors Section
const FactorsSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                5 Faktoren, die KI-Empfehlungen für Makler beeinflussen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    KI-Systeme wie ChatGPT, Perplexity und Google AI Overviews werten unterschiedliche
                    Signale aus. Für Immobilienmakler kristallisieren sich fünf Hauptfaktoren heraus.
                </p>
            </div>

            <div className="space-y-6">
                {[
                    {
                        title: 'Bewertungsprofil',
                        desc: 'Google-Rezensionen, ProvenExpert, ImmoScout24-Bewertungen und Kununu fließen alle ein. Die KI gewichtet Anzahl, Durchschnitt und Aktualität. Ein Makler mit 80 aktuellen Bewertungen bei 4,8 Sternen wird einem mit 15 Bewertungen aus 2022 vorgezogen. Aktive Bewertungsstrategie nach jedem Abschluss ist Pflicht.',
                    },
                    {
                        title: 'Lokale Marktexpertise',
                        desc: 'Stadtteil-bezogener Content ist der stärkste Differenzierungsfaktor. Marktberichte pro Viertel, Preisentwicklungen, Stadtteil-Guides mit Infrastruktur, Schulen und Entwicklungsprojekten. Die KI erkennt: Dieser Makler kennt Eppendorf nicht nur oberflächlich, sondern im Detail.',
                    },
                    {
                        title: 'Website-Qualität',
                        desc: 'Aktuelle Objekte, dokumentierte Referenzen, nachvollziehbare Verkaufserfolge. Die KI prüft, ob deine Website Substanz hat oder nur eine Visitenkarte ist. Case Studies mit Vorher-Nachher (Exposé, Vermarktungsdauer, Verkaufspreis vs. Angebotspreis) zeigen Kompetenz messbar.',
                    },
                    {
                        title: 'Medienresonanz',
                        desc: 'Presseerwähnungen, Marktkommentare im Hamburger Abendblatt, Gastbeiträge in Immobilien-Fachmedien, Zitate in Marktberichten. Redaktionelle Erwähnungen signalisieren der KI: Diese Person ist eine anerkannte Quelle im Immobilienmarkt.',
                    },
                    {
                        title: 'Spezialisierung',
                        desc: 'Luxusimmobilien, Gewerbeimmobilien, Eigentumswohnungen, Kapitalanlagen, Neubauprojekte &ndash; klare Spezialisierung hilft der KI bei der Zuordnung. Wer alles kann, wird für nichts empfohlen. Wer sich als Spezialist für Altbau-ETW in Eimsbüttel positioniert, bekommt genau diese Anfragen.',
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

// Strategies Section
const StrategiesSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                7 Strategien für Immobilienmakler
            </h2>
            <div className="space-y-8">
                {[
                    {
                        num: '01',
                        title: 'Stadtteil-Guides und Marktberichte erstellen',
                        text: 'Erstelle für jedes Viertel, in dem du aktiv bist, einen detaillierten Marktbericht: aktuelle Quadratmeterpreise, Preisentwicklung der letzten 3 Jahre, typische Käuferprofile, Infrastruktur-Highlights. Aktualisiere quartalsweise. Ein Guide "Immobilienmarkt Eppendorf 2026: Preise, Trends, Prognose" ist genau der Content, den KI-Systeme als Expertenquelle einstufen.',
                    },
                    {
                        num: '02',
                        title: 'Verkaufserfolge dokumentieren',
                        text: 'Case Studies sind Gold wert. Für jedes verkaufte Objekt: Ausgangssituation, Vermarktungsstrategie, Vermarktungsdauer, Ergebnis. "3-Zimmer-Altbau in Winterhude: Angebotspreis 520.000 Euro, Verkaufspreis 548.000 Euro, 18 Tage am Markt." Diese konkreten Daten geben der KI belastbare Evidenz für eine Empfehlung.',
                    },
                    {
                        num: '03',
                        title: 'Google Business mit Immobilien-Kategorien optimieren',
                        text: 'Hauptkategorie: Immobilienmakler. Zusätzliche Kategorien: Immobilienberater, Immobilienverwaltung (falls zutreffend). Regelmäßige Google-Posts mit neuen Objekten, Markt-Updates und Verkaufserfolgen. Fotos von Objekten, dem Büro und dir persönlich. Die KI nutzt Google Business als eine der wichtigsten lokalen Quellen.',
                    },
                    {
                        num: '04',
                        title: 'Schema.org RealEstateAgent Markup implementieren',
                        text: 'Strukturierte Daten helfen KI-Systemen, dein Unternehmen korrekt zu klassifizieren. RealEstateAgent-Schema mit areaServed (Hamburg und spezifische Stadtteile), priceRange, Spezialisierungen und Bewertungsaggregate. Das macht deine Daten maschinenlesbar und erhöht die Trefferquote bei spezifischen Anfragen.',
                    },
                    {
                        num: '05',
                        title: 'Bewertungsmanagement nach jedem Abschluss',
                        text: 'Systematischer Prozess: Nach jeder Schlüsselübergabe innerhalb von 48 Stunden eine persönliche Bewertungsbitte senden. Google, ProvenExpert und ImmoScout24 abdecken. Auf jede Bewertung antworten &ndash; auch auf positive. Ziel: Mindestens 5 neue Bewertungen pro Quartal. Die KI gewichtet Aktualität und Kontinuität.',
                    },
                    {
                        num: '06',
                        title: 'Marktexpertise durch Blog und Ratgeber zeigen',
                        text: 'Regelmäßige Artikel zu Themen, die Käufer und Verkäufer bewegen: "Was kostet ein Makler in Hamburg?", "Immobilie verkaufen ohne Makler &ndash; lohnt sich das?", "Grunderwerbsteuer Hamburg: Was Käufer wissen müssen." Beantworte exakt die Fragen, die auch an KI-Systeme gestellt werden. Direkte Antwort in den ersten zwei Sätzen.',
                    },
                    {
                        num: '07',
                        title: 'Präsenz auf Fachportalen stärken',
                        text: 'IVD-Mitgliedschaft (Immobilienverband Deutschland), Eintrag bei immowelt, immonet, Engel & Völkers Netzwerk (falls Franchise). Gastbeiträge in Immobilien-Fachmedien wie Immobilien Manager, Thomas Daily oder AIZ. Jede redaktionelle Erwähnung auf einer vertrauenswürdigen Branchenquelle stärkt dein KI-Profil.',
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

// Makler Types Section
const MaklerTypesSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Makler-Typen und ihre KI-Chancen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Nicht jeder Makler hat die gleichen Voraussetzungen. Je nach Geschäftsmodell
                    unterscheiden sich die Hebel für KI-Sichtbarkeit.
                </p>
            </div>

            <div className="space-y-6">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">Einzelmakler</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        <strong>Vorteil:</strong> Persönliche Marke, echte Spezialisierung, authentische Bewertungen
                        mit Namen. KI-Systeme bevorzugen konkrete Personen gegenüber anonymen Firmen.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        <strong>Strategie:</strong> Positioniere dich als der Experte für zwei bis drei Stadtteile.
                        Persönliche Marke aufbauen, Gesicht zeigen, Expertise durch Content belegen. Du brauchst
                        weniger Volumen als große Büros &ndash; dafür mehr Tiefe.
                    </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">Boutique-Maklerbüro</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        <strong>Vorteil:</strong> Team-Expertise kombinieren, mehrere Stadtteile abdecken,
                        gemeinsame Marke mit individuellen Profilen.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        <strong>Strategie:</strong> Jeder Makler im Team wird als Stadtteil-Experte positioniert.
                        Gemeinsame Website mit individuellen Profilen und Bewertungen. Teamauftritte in
                        Fachmedien. Die KI empfiehlt sowohl das Büro als auch einzelne Makler.
                    </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">Franchise (Engel & Völkers, VON POLL, etc.)</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        <strong>Vorteil:</strong> Starke Dachmarke, die KI bereits kennt. Markenbekanntheit
                        ist ein Vertrauenssignal.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        <strong>Herausforderung:</strong> Die KI empfiehlt oft die Marke generisch, nicht
                        deinen spezifischen Standort. Lösung: Lokale Differenzierung durch eigene Inhalte,
                        eigenes Google-Business-Profil und standortspezifische Bewertungen. Die Franchise-Marke
                        öffnet die Tür &ndash; lokale Expertise schließt den Deal.
                    </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">Bauträger-Vertrieb</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        <strong>Vorteil:</strong> Neubauprojekte sind konkret, aktuell und hoch relevant
                        für KI-Anfragen wie &ldquo;Neubau kaufen in Hamburg&rdquo;.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        <strong>Strategie:</strong> Projektseiten mit detaillierten Informationen (Grundrisse,
                        Preise, Baufortschritt, Umgebungsinformationen). Schema.org für Neubauprojekte.
                        Pressearbeit bei Projektstart und Richtfest. Jedes Projekt ist eine eigene
                        KI-Sichtbarkeits-Chance.
                    </p>
                </div>
            </div>
        </FadeIn>
    </section>
);

// Hamburg Section
const HamburgSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                KI-Sichtbarkeit für Hamburger Immobilienmakler
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Hamburg ist einer der teuersten und dynamischsten Immobilienmärkte Deutschlands.
                    Durchschnittliche Quadratmeterpreise von über 5.500 Euro, stark differenzierte
                    Stadtteile und eine hohe Maklerdichte machen KI-Sichtbarkeit hier besonders
                    wettbewerbsrelevant.
                </p>
                <p>
                    Die Stadtteile sind der Schlüssel. Käufer suchen nicht &ldquo;Makler Hamburg&rdquo; &ndash;
                    sie suchen &ldquo;Makler Eppendorf&rdquo; oder &ldquo;Immobilien Blankenese&rdquo;. Jeder
                    Stadtteil hat sein eigenes Preisniveau, seine eigene Käuferstruktur und seinen
                    eigenen Charakter. Wer das in Content abbildet, wird von der KI als lokaler
                    Experte erkannt.
                </p>
            </div>

            <h3 className="font-semibold text-black text-xl mb-6">Stadtteile als KI-Keywords</h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                    {
                        stadtteil: 'Eppendorf',
                        detail: 'Altbau, Familien, hohe Kaufkraft. Durchschnitt ~7.000 EUR/m². Starke Nachfrage nach sanierten Altbauwohnungen.',
                    },
                    {
                        stadtteil: 'Winterhude',
                        detail: 'Mix aus Altbau und Neubau, junges Publikum, Alster-Nähe. Eines der gefragtesten Viertel für Eigentumswohnungen.',
                    },
                    {
                        stadtteil: 'HafenCity',
                        detail: 'Neubau, Kapitalanleger, internationale Käufer. Premium-Segment mit Wasserblick und moderner Architektur.',
                    },
                    {
                        stadtteil: 'Blankenese',
                        detail: 'Villen, Elbnähe, Luxussegment. Exklusiver Markt mit diskreter Vermarktung und langen Verkaufszyklen.',
                    },
                    {
                        stadtteil: 'Eimsbüttel',
                        detail: 'Beliebt bei jungen Familien, Altbau-Quartier, moderate Preise im Vergleich zu Eppendorf.',
                    },
                    {
                        stadtteil: 'Ottensen',
                        detail: 'Kreativ, urban, hohe Nachfrage. Gentrifizierung treibt Preise, starker Mietwohnungsmarkt.',
                    },
                ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5">
                        <h4 className="font-semibold text-black mb-1">{item.stadtteil}</h4>
                        <p className="text-sm text-gray-600">{item.detail}</p>
                    </div>
                ))}
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Eine IVD-Nord-Mitgliedschaft stärkt dein Vertrauensprofil bei KI-Systemen.
                    Der IVD (Immobilienverband Deutschland) ist eine der meistzitierten Branchenquellen
                    in Immobilien-Kontexten. Wenn die KI &ldquo;IVD-zertifizierter Makler&rdquo; als Qualitätsmerkmal
                    erkennt, ist das ein Empfehlungssignal.
                </p>
                <p>
                    Für jeden Stadtteil, in dem du aktiv bist, sollte eine eigene Unterseite existieren:
                    Marktdaten, aktuelle Objekte, Referenzen aus dem Viertel, lokale Expertise.
                    Das ist der Content, den KI-Systeme als Beweis für Stadtteil-Kompetenz werten.
                </p>
            </div>
        </FadeIn>
    </section>
);

// FAQ Section
const FAQSection: React.FC = () => {
    const faqItems = [
        {
            q: 'Wie wird mein Maklerbüro in ChatGPT empfohlen?',
            a: 'ChatGPT empfiehlt Makler mit starkem Bewertungsprofil auf Google und ProvenExpert, konsistenten Erwähnungen auf Fachportalen, einer professionellen Website mit Stadtteil-Expertise und idealerweise Presseerwähnungen. Brand Mentions auf vertrauenswürdigen Quellen sind der stärkste Faktor.',
        },
        {
            q: 'Reicht ein ImmoScout24-Profil für KI-Sichtbarkeit?',
            a: 'Nein. ImmoScout24 dominiert Google, aber KI-Systeme empfehlen einzelne Makler direkt. Du brauchst eine eigene Website mit Stadtteil-Expertise, Bewertungen auf mehreren Plattformen und idealerweise Presseerwähnungen. Die KI cross-referenziert alle Quellen.',
        },
        {
            q: 'Welche Rolle spielen Bewertungen für KI-Empfehlungen bei Maklern?',
            a: 'Bewertungen sind ein zentraler Faktor. Die KI wertet Google-Rezensionen, ProvenExpert, ImmoScout24-Bewertungen und Kununu aus. Anzahl, Aktualität und Konsistenz entscheiden. Ziel: Mindestens 5 neue Bewertungen pro Quartal.',
        },
        {
            q: 'Wie schnell wirkt KI-Sichtbarkeit im Immobilienbereich?',
            a: 'Live-Websuche (ChatGPT über Bing, Perplexity): Wochen. Trainingsdaten: Monate. Für nachhaltigen Aufbau solltest du 3-6 Monate einplanen. Die gute Nachricht: Jeder veröffentlichte Marktbericht und jede neue Bewertung zahlt sofort auf die Live-Suche ein.',
        },
        {
            q: 'Ist KI-Sichtbarkeit für Einzelmakler oder nur für große Büros relevant?',
            a: 'Gerade Einzelmakler profitieren überproportional. KI-Systeme empfehlen oft spezialisierte lokale Experten. Ein Einzelmakler, der als Eppendorf-Spezialist positioniert ist, kann in KI-Empfehlungen einen Franchise-Makler schlagen.',
        },
        {
            q: 'Was bringt Schema.org RealEstateAgent Markup?',
            a: 'Das Markup hilft KI-Systemen, dein Unternehmen als Immobilienmakler zu klassifizieren. Es strukturiert Spezialisierung, Einzugsgebiet und Kontaktdaten maschinenlesbar. Das erhöht die Trefferquote bei spezifischen Anfragen wie "Luxusmakler Hamburg Blankenese".',
        },
        {
            q: 'Verlieren Immobilienportale durch KI an Bedeutung?',
            a: 'Teilweise ja. Für die Objektsuche bleiben Portale relevant. Aber für die Maklerauswahl verschiebt sich der Erstkontakt zur KI. Wenn Käufer fragen "Welcher Makler in Winterhude ist gut?", empfiehlt die KI direkt &ndash; ohne den Umweg über ein Portal.',
        },
    ];

    return (
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-12">
                    Häufig gestellte Fragen
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
                            href="https://ahrefs.com/blog/llm-seo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Ahrefs (2025): LLM SEO &ndash; Brand Mentions Correlation Study
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.ivd.net/marktdaten"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            IVD Immobilienverband Deutschland: Marktdaten und Preisspiegel
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.gutachterausschuss-hamburg.de"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Gutachterausschuss Hamburg: Grundstücksmarktbericht
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://schema.org/RealEstateAgent"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Schema.org: RealEstateAgent Markup-Dokumentation
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
                        Grundlagen, Strategie und Frameworks für Sichtbarkeit in allen KI-Systemen.
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
                        Wie ChatGPTs Dual-System funktioniert und wie du dort sichtbar wirst.
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
                        Werden Käufer und Verkäufer von der KI zu dir geschickt?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                        Ich prüfe, ob und wie KI-Systeme dein Maklerbüro aktuell empfehlen &ndash;
                        ChatGPT, Perplexity und Google AI Overviews. Kostenlos, in 48 Stunden.
                    </p>
                    <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose Kurzanalyse anfragen" className="!py-4 !px-8" />
                </div>
            </div>
        </FadeIn>
    </section>
);

export default function KISichtbarkeitImmobilienPage() {
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
                <ProblemSection />
                <WhyItMattersSection />
                <FactorsSection />
                <StrategiesSection />
                <MaklerTypesSection />
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
