'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'KI-Sichtbarkeit für Handwerker: Wenn Kunden die KI nach dem besten Betrieb fragen',
    description: 'KI-Sichtbarkeit für Handwerksbetriebe: Warum ChatGPT nur 2-3 Betriebe empfiehlt, welche Faktoren entscheiden und 7 Strategien für Handwerker in Hamburg.',
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
        '@id': 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-handwerker',
    },
    inLanguage: 'de',
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Was ist KI-Sichtbarkeit für Handwerker?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'KI-Sichtbarkeit bedeutet, dass dein Handwerksbetrieb von ChatGPT, Perplexity und anderen KI-Systemen empfohlen wird, wenn potenzielle Kunden nach einem Handwerker in deiner Region fragen. Die KI nennt typischerweise nur 2-3 Betriebe pro Anfrage.',
            },
        },
        {
            '@type': 'Question',
            name: 'Warum ist KI-Sichtbarkeit für Handwerksbetriebe besonders wichtig?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Handwerk lebt von Empfehlungen. Immer mehr Kunden fragen die KI statt im Branchenbuch oder bei MyHammer zu suchen. Wer jetzt als Handwerker in der KI sichtbar wird, hat einen enormen First-Mover-Advantage, weil die meisten Betriebe noch keine optimierte Online-Präsenz haben.',
            },
        },
        {
            '@type': 'Question',
            name: 'Welche Faktoren bestimmen, ob ChatGPT meinen Handwerksbetrieb empfiehlt?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Fünf Faktoren sind entscheidend: Google-Bewertungen (Menge, Qualität und ob du antwortest), Website-Qualität mit eigenen Leistungsseiten, lokale Signale wie NAP-Konsistenz und Google Business Profil, klare Spezialisierung statt Bauchladen, und Fotodokumentation deiner Referenzprojekte.',
            },
        },
        {
            '@type': 'Question',
            name: 'Wie schnell kann ich als Handwerker in der KI sichtbar werden?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Bei der Live-Websuche können Optimierungen innerhalb von Tagen bis Wochen wirken. Für die Trainingsdaten der KI dauert es bis zum nächsten Modell-Update. Der Vorteil im Handwerk: Die Konkurrenz ist online so schwach, dass schon grundlegende Optimierungen einen großen Unterschied machen.',
            },
        },
        {
            '@type': 'Question',
            name: 'Brauche ich als Handwerker eine neue Website für KI-Sichtbarkeit?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nicht unbedingt eine komplett neue Website, aber deine bestehende muss überarbeitet werden. Einzelne Leistungsseiten pro Gewerk, FAQ-Bereiche, Schema.org-Markup und eine klare Struktur sind Pflicht. Eine einzelne Seite mit allen Leistungen reicht für KI-Sichtbarkeit nicht aus.',
            },
        },
        {
            '@type': 'Question',
            name: 'Ist KI-Sichtbarkeit besser als MyHammer oder Gelbe Seiten?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'KI-Empfehlungen haben drei Vorteile gegenüber Portalen: Keine Provision (MyHammer nimmt bis zu 20%), höheres Vertrauen beim Kunden (persönliche Empfehlung statt Anzeige), und kein Preiskampf mit anderen Betrieben auf der gleichen Plattform.',
            },
        },
        {
            '@type': 'Question',
            name: 'Welche Handwerksgewerke profitieren am meisten von KI-Sichtbarkeit?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Besonders stark profitieren Gewerke mit hohem Rechercheaufwand: SHK (Sanitär, Heizung, Klima) wegen komplexer Entscheidungen wie Wärmepumpen, Elektriker wegen Smart-Home-Themen, und Dachdecker wegen hoher Auftragswerte. Aber grundsätzlich hat jedes Gewerk Potenzial, weil die KI-Konkurrenz im Handwerk noch minimal ist.',
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
            name: 'KI-Sichtbarkeit für Handwerker',
            item: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-handwerker',
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
                <span className="text-gray-600">KI-Sichtbarkeit für Handwerker</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
                KI-Sichtbarkeit für Handwerker:<br />
                Wenn Kunden die KI nach dem besten Betrieb fragen
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
                &ldquo;Welcher Elektriker in Hamburg-Eimsbüttel ist zuverlässig?&rdquo; &ndash; Diese Frage wird
                heute in ChatGPT gestellt, nicht bei den Gelben Seiten. Die KI empfiehlt 2-3 Betriebe.
                Dieser Guide zeigt dir, wie deiner dazugehört.
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
                        <span>Handwerk hat online kaum KI-Konkurrenz &ndash; First-Mover-Advantage ist jetzt enorm.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">2.</span>
                        <span>ChatGPT empfiehlt pro Anfrage nur 2-3 Betriebe. Der Rest existiert für den Kunden nicht.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">3.</span>
                        <span>Google-Bewertungen, eigene Leistungsseiten und lokale Signale sind die drei wichtigsten Hebel.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">4.</span>
                        <span>MyHammer nimmt dir 20% Provision &ndash; die KI empfiehlt kostenlos und mit höherem Vertrauen.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">5.</span>
                        <span>Schon grundlegende Optimierungen reichen, weil die meisten Handwerks-Websites veraltet sind.</span>
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
                Das Problem: Kunden fragen ChatGPT statt im Branchenbuch zu suchen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    &ldquo;Welcher Elektriker in Hamburg-Eimsbüttel ist zuverlässig?&rdquo; &ndash;
                    &ldquo;Empfiehl mir einen guten Maler in Ottensen.&rdquo; &ndash;
                    &ldquo;Wer macht Badsanierung in Hamburg-Nord?&rdquo;
                </p>
                <p>
                    Diese Fragen werden heute in ChatGPT getippt. Nicht bei Google. Nicht bei MyHammer.
                    Nicht in den Gelben Seiten. Die Nutzerzahlen verschieben sich massiv: Über 400 Millionen
                    Menschen nutzen ChatGPT wöchentlich, und lokale Dienstleisterfragen gehören zu den
                    häufigsten Anfragen.
                </p>
            </div>

            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 my-8 shadow-sm">
                <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">Das Kernproblem</p>
                <p className="text-lg text-gray-800 leading-relaxed">
                    Dein Betrieb lebt von Empfehlungen &ndash; aber die KI kennt dich nicht.
                    ChatGPT empfiehlt pro Anfrage nur 2-3 Betriebe. Der Rest wird nicht erwähnt.
                    Für den Kunden existierst du schlicht nicht.
                </p>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    MyHammer und Gelbe Seiten verlieren an Relevanz. Warum sollte ein Kunde eine Plattform
                    durchforsten, auf der 40 Betriebe um den gleichen Auftrag kämpfen, wenn die KI direkt
                    sagt: &ldquo;Ich empfehle dir Betrieb X, weil...&rdquo;?
                </p>
                <p>
                    Handwerk hat schon immer von Empfehlungen gelebt. Vom Nachbarn, vom Kollegen,
                    vom Schwiegervater. Jetzt empfiehlt die KI. Und sie empfiehlt nicht nach Bauchgefühl,
                    sondern nach Daten. Daten, die du beeinflussen kannst.
                </p>
            </div>
        </FadeIn>
    </section>
);

// Advantage Section
const AdvantageSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Warum KI-Sichtbarkeit für Handwerker ein Riesenvorteil ist
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Die meisten Branchen kämpfen um KI-Sichtbarkeit. Im Handwerk ist die Ausgangslage
                    grundlegend anders &ndash; und das ist deine Chance.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Kaum KI-Konkurrenz online</h3>
                    <p className="text-gray-600 text-base">
                        Die meisten Handwerksbetriebe haben Websites aus 2015 &ndash; eine Seite, keine
                        Struktur, keine Texte. Für KI-Systeme gibt es fast nichts auszuwerten. Wer jetzt
                        optimiert, hat das Feld praktisch für sich allein.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Schlechte Websites als Normalzustand</h3>
                    <p className="text-gray-600 text-base">
                        Eine einzelne Seite mit &ldquo;Über uns&rdquo;, ein paar Leistungsstichworten und einer
                        Telefonnummer. Das ist der Standard im Handwerk. Die Messlatte für KI-Sichtbarkeit
                        ist extrem niedrig &ndash; schon Grundlagen machen den Unterschied.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Enormer First-Mover-Advantage</h3>
                    <p className="text-gray-600 text-base">
                        Wer als erster SHK-Betrieb in Hamburg-Wandsbek eine ordentliche Website mit
                        Leistungsseiten, Bewertungen und Schema-Markup hat, dominiert die KI-Empfehlungen
                        im gesamten Stadtteil. Die Konkurrenz schläft noch.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Lokale Suche + KI = perfekte Kombination</h3>
                    <p className="text-gray-600 text-base">
                        Handwerk ist per Definition lokal. Und genau lokale Empfehlungsfragen sind einer
                        der stärksten KI-Anwendungsfälle. &ldquo;Welcher Dachdecker in meiner Nähe?&rdquo;
                        ist die ideale KI-Frage &ndash; und dein idealer Kundenkanal.
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
                5 Faktoren, die KI-Empfehlungen für Handwerker beeinflussen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    KI-Systeme bewerten dein Unternehmen nicht nach Bauchgefühl. Sie analysieren
                    konkrete Signale. Für Handwerksbetriebe sind diese fünf entscheidend.
                </p>
            </div>

            <div className="space-y-6">
                {[
                    {
                        title: 'Google-Bewertungen: Menge, Qualität und Antworten',
                        desc: 'Dein Wettbewerber hat 50 Google-Bewertungen, du 3. Wer wird empfohlen? Die KI wertet nicht nur die Sterne aus, sondern auch den Inhalt der Bewertungen und ob du als Betrieb auf Rezensionen antwortest. Ein Betrieb mit 30 Bewertungen und durchdachten Antworten schlägt einen mit 80 unbeantworteten.',
                    },
                    {
                        title: 'Website-Qualität: Leistungsseiten statt einer Seite für alles',
                        desc: 'Eine Website mit einer einzelnen Seite, die alle Leistungen auflistet, gibt der KI nichts zum Arbeiten. Du brauchst eigene Seiten für jede Leistung: /badsanierung, /heizungsinstallation, /notdienst. Jede Seite beantwortet spezifische Fragen, die Kunden an die KI stellen.',
                    },
                    {
                        title: 'Lokale Signale: NAP-Konsistenz und Google Business',
                        desc: 'Name, Adresse, Telefonnummer (NAP) müssen auf deiner Website, Google Business, Gelbe Seiten, Das Örtliche und jedem anderen Verzeichnis identisch sein. Widersprüchliche Daten verwirren die KI. Ein vollständig gepflegtes Google Business Profil mit Fotos, Öffnungszeiten und Leistungen ist Pflicht.',
                    },
                    {
                        title: 'Spezialisierung: Klares Profil statt „wir machen alles"',
                        desc: 'Die KI empfiehlt Betriebe, die eine klare Expertise zeigen. „Wir machen alles rund ums Haus" ist für die KI ein leeres Signal. „Badsanierung und Heizungsmodernisierung in Hamburg-Altona" ist ein starkes Signal. Je klarer dein Profil, desto wahrscheinlicher die Empfehlung.',
                    },
                    {
                        title: 'Fotodokumentation: Vorher/Nachher und Referenzprojekte',
                        desc: 'Bilder mit Alt-Texten, Projektbeschreibungen und Standortangaben liefern der KI Kontext. „Badsanierung Hamburg-Eppendorf Altbau 2025" als Bildunterschrift ist Gold wert. Vorher/Nachher-Galerien zeigen Kompetenz und geben der KI konkrete Referenzen, die sie zitieren kann.',
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
                7 Strategien für Handwerksbetriebe
            </h2>
            <div className="space-y-8">
                {[
                    {
                        num: '01',
                        title: 'Google Business Profil zum Aushängeschild machen',
                        text: 'Dein Google Business Profil ist die wichtigste Datenquelle für KI-Systeme. Fülle jedes Feld aus: Leistungen, Öffnungszeiten, Einzugsgebiet, Attribute. Lade mindestens 20 hochwertige Fotos hoch. Poste regelmäßig Updates zu abgeschlossenen Projekten. Ein vollständiges Profil signalisiert der KI: Dieser Betrieb ist aktiv und vertrauenswürdig.',
                    },
                    {
                        num: '02',
                        title: 'Leistungsseiten für jedes Gewerk erstellen',
                        text: 'Statt einer Seite mit Aufzählung brauchst du eigene URLs: /badsanierung, /heizungswartung, /rohrreinigung-notdienst. Jede Seite sollte die Frage beantworten, die ein Kunde der KI stellen würde: „Was kostet eine Badsanierung in Hamburg?" Konkrete Preisrahmen, typische Projektdauer, dein Vorgehen Schritt für Schritt.',
                    },
                    {
                        num: '03',
                        title: 'Bewertungen aktiv managen (QR-Code auf der Rechnung)',
                        text: 'Drucke einen QR-Code auf jede Rechnung, der direkt zur Google-Bewertung führt. Bitte zufriedene Kunden persönlich um eine Bewertung. Antworte auf jede Rezension innerhalb von 48 Stunden – auch auf negative. Die KI wertet das Antwortverhalten als Qualitätssignal. Ziel: Mindestens 30 Bewertungen mit 4,5+ Sternen.',
                    },
                    {
                        num: '04',
                        title: 'Referenzprojekte mit Fotos dokumentieren',
                        text: 'Fotografiere jedes Projekt – vorher, während, nachher. Erstelle für die besten Projekte eigene Unterseiten mit Beschreibung, Fotos, Standort und Kundenstimme. „Komplettsanierung eines Altbau-Badezimmers in Hamburg-Winterhude" gibt der KI exakt die Information, die sie für eine Empfehlung braucht.',
                    },
                    {
                        num: '05',
                        title: 'FAQ zu häufigen Kundenfragen erstellen',
                        text: 'Welche Fragen stellen Kunden am Telefon? Genau diese Fragen stellen sie auch der KI. „Was kostet ein neues Bad?" „Wie lange dauert eine Heizungsmodernisierung?" „Brauche ich eine Genehmigung für...?" Jede FAQ mit konkreter Antwort ist ein potenzieller KI-Treffer. 15-20 Fragen sind ein guter Start.',
                    },
                    {
                        num: '06',
                        title: 'Schema.org LocalBusiness + Service Markup einsetzen',
                        text: 'Strukturierte Daten helfen der KI, deinen Betrieb einzuordnen. LocalBusiness-Schema mit Adresse, Öffnungszeiten, Bewertungen. Service-Schema für jede Leistung. Geo-Koordinaten für dein Einzugsgebiet. Das ist technisch simpel, aber im Handwerk machen es weniger als 5% der Betriebe.',
                    },
                    {
                        num: '07',
                        title: 'Präsenz auf Handwerksportalen pflegen',
                        text: 'MyHammer, Gelbe Seiten, Das Örtliche, Check24, Handwerkerportal der Handwerkskammer – überall mit identischen Daten vertreten sein. Nicht wegen des Traffics von diesen Portalen, sondern weil die KI diese Quellen als Vertrauenssignale auswertet. Konsistente Einträge auf 5+ Plattformen stärken dein KI-Profil enorm.',
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

// Gewerke Section
const GewerkeSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Gewerke und ihre KI-Chancen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Nicht jedes Gewerk hat die gleichen KI-Chancen. Hier die wichtigsten Branchen
                    mit ihren spezifischen Hebeln und Herausforderungen.
                </p>
            </div>

            <div className="space-y-6">
                {[
                    {
                        title: 'Sanitär, Heizung, Klima (SHK)',
                        pain: 'Kunden recherchieren Wärmepumpen, Badsanierung und Heizungstausch intensiv online. Hohe Auftragswerte (5.000-30.000 Euro) führen zu langer Entscheidungsphase.',
                        chance: 'Wärmepumpen-Beratung, Fördermittel-FAQ und Energieeffizienz-Content sind perfekte KI-Themen. Wer hier Expertise zeigt, wird bei Fragen wie „Welcher Heizungsbauer in Hamburg kennt sich mit Wärmepumpen aus?" empfohlen.',
                    },
                    {
                        title: 'Elektriker',
                        pain: 'Smart-Home, Wallboxen, PV-Anlagen – alles Themen, zu denen Kunden die KI befragen. Gleichzeitig haben die meisten Elektro-Betriebe kaum Online-Präsenz.',
                        chance: 'Leistungsseiten zu Smart-Home-Installation, Wallbox-Montage und PV-Anschluss. Jedes dieser Themen ist ein eigener Suchcluster in der KI. Technische FAQ zu Kosten und Voraussetzungen sind Goldstaub.',
                    },
                    {
                        title: 'Maler und Lackierer',
                        pain: 'Starker Preiskampf auf Portalen. Kunden fragen die KI: „Was kostet es, eine 3-Zimmer-Wohnung streichen zu lassen?" und erwarten konkrete Zahlen.',
                        chance: 'Vorher/Nachher-Galerien mit Standortangaben, Preisrechner-Inhalte und Farbberatungs-Seiten. Maler, die Referenzprojekte mit Fotos dokumentieren, haben einen massiven Vorteil gegenüber der gesichtslosen Masse.',
                    },
                    {
                        title: 'Tischler und Schreiner',
                        pain: 'Maßanfertigungen sind erklärungsbedürftig. Kunden wollen verstehen, was möglich ist, bevor sie anfragen. Die KI wird zum ersten Beratungsgespräch.',
                        chance: 'Projektgalerien mit Materialangaben, Maß-Optionen und Preisrahmen. „Einbauschrank nach Maß in Hamburg" als eigene Leistungsseite. Tischler mit Portfolio-Website dominieren die KI-Empfehlungen, weil die Konkurrenz quasi nicht existiert.',
                    },
                    {
                        title: 'Dachdecker',
                        pain: 'Höchste Auftragswerte im Handwerk (10.000-50.000 Euro). Kunden holen mehrere Angebote ein und recherchieren intensiv. Versicherungsfälle und Sturmschäden erzeugen Dringlichkeit.',
                        chance: 'Notdienst-Seiten, Materialvergleiche (Ziegel vs. Schiefer vs. Blech), Fördermittel für energetische Dachsanierung. Bei Sturmschäden fragen Kunden die KI: „Dachdecker Notdienst Hamburg" – wer dort auftaucht, bekommt den Auftrag.',
                    },
                ].map((gewerk, i) => (
                    <FadeIn key={i} delay={i * 50}>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6">
                            <h3 className="font-semibold text-black text-lg mb-3">{gewerk.title}</h3>
                            <div className="space-y-2 text-gray-600 leading-relaxed">
                                <p><span className="font-medium text-gray-800">Herausforderung:</span> {gewerk.pain}</p>
                                <p><span className="font-medium text-brand-accent">Chance:</span> {gewerk.chance}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </FadeIn>
    </section>
);

// Hamburg Section
const HamburgSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                KI-Sichtbarkeit für Hamburger Handwerksbetriebe
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Hamburg hat über 15.000 Handwerksbetriebe, organisiert in der Handwerkskammer Hamburg.
                    Die lokale Handwerkslandschaft ist geprägt von kleinen und mittelständischen Betrieben
                    mit 1-20 Mitarbeitern &ndash; genau die Zielgruppe, die von KI-Sichtbarkeit am
                    meisten profitiert.
                </p>
                <p>
                    Die Stadtteilstruktur Hamburgs ist für KI-SEO ein Geschenk. Jeder Stadtteil ist
                    ein eigenes Keyword-Cluster: &ldquo;Elektriker Hamburg-Eimsbüttel&rdquo;,
                    &ldquo;Klempner Hamburg-Altona&rdquo;, &ldquo;Maler Hamburg-Wandsbek&rdquo;.
                    Die KI versteht diese lokalen Zuordnungen und empfiehlt bevorzugt Betriebe,
                    die sich klar einem Stadtteil zuordnen lassen.
                </p>
            </div>

            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 my-8 shadow-sm">
                <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">Hamburger Stadtteile als KI-Chance</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700 text-sm">
                    {[
                        'Eimsbüttel', 'Altona', 'Wandsbek', 'Hamburg-Nord',
                        'Bergedorf', 'Harburg', 'Eppendorf', 'Winterhude',
                        'Ottensen', 'Barmbek', 'Blankenese', 'Rahlstedt',
                    ].map((stadtteil) => (
                        <div key={stadtteil} className="flex items-center gap-1.5">
                            <span className="text-brand-accent flex-shrink-0">&bull;</span>
                            <span>{stadtteil}</span>
                        </div>
                    ))}
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                    Jeder Stadtteil + Gewerk ist ein eigener Keyword-Cluster.
                    Die meisten davon sind in der KI noch komplett unbesetzt.
                </p>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Die Handwerkskammer Hamburg bietet Betrieben ein eigenes Verzeichnis. Ein
                    vollständiger Eintrag dort ist ein weiteres Vertrauenssignal für die KI.
                    Nutze zusätzlich das Hamburger Branchenbuch, hamburg.de und lokale
                    Handwerkerportale, um deine Präsenz zu verstärken.
                </p>
            </div>
        </FadeIn>
    </section>
);

// FAQ Section
const FAQSection: React.FC = () => {
    const faqItems = [
        {
            q: 'Was ist KI-Sichtbarkeit für Handwerker?',
            a: 'KI-Sichtbarkeit bedeutet, dass dein Handwerksbetrieb von ChatGPT, Perplexity und anderen KI-Systemen empfohlen wird, wenn potenzielle Kunden nach einem Handwerker in deiner Region fragen. Die KI nennt typischerweise nur 2-3 Betriebe pro Anfrage.',
        },
        {
            q: 'Warum ist KI-Sichtbarkeit für Handwerksbetriebe besonders wichtig?',
            a: 'Handwerk lebt von Empfehlungen. Immer mehr Kunden fragen die KI statt im Branchenbuch oder bei MyHammer zu suchen. Wer jetzt als Handwerker in der KI sichtbar wird, hat einen enormen First-Mover-Advantage, weil die meisten Betriebe noch keine optimierte Online-Präsenz haben.',
        },
        {
            q: 'Welche Faktoren bestimmen, ob ChatGPT meinen Handwerksbetrieb empfiehlt?',
            a: 'Fünf Faktoren sind entscheidend: Google-Bewertungen (Menge, Qualität und ob du antwortest), Website-Qualität mit eigenen Leistungsseiten, lokale Signale wie NAP-Konsistenz und Google Business Profil, klare Spezialisierung statt Bauchladen, und Fotodokumentation deiner Referenzprojekte.',
        },
        {
            q: 'Wie schnell kann ich als Handwerker in der KI sichtbar werden?',
            a: 'Bei der Live-Websuche können Optimierungen innerhalb von Tagen bis Wochen wirken. Für die Trainingsdaten der KI dauert es bis zum nächsten Modell-Update. Der Vorteil im Handwerk: Die Konkurrenz ist online so schwach, dass schon grundlegende Optimierungen einen großen Unterschied machen.',
        },
        {
            q: 'Brauche ich als Handwerker eine neue Website für KI-Sichtbarkeit?',
            a: 'Nicht unbedingt eine komplett neue Website, aber deine bestehende muss überarbeitet werden. Einzelne Leistungsseiten pro Gewerk, FAQ-Bereiche, Schema.org-Markup und eine klare Struktur sind Pflicht. Eine einzelne Seite mit allen Leistungen reicht für KI-Sichtbarkeit nicht aus.',
        },
        {
            q: 'Ist KI-Sichtbarkeit besser als MyHammer oder Gelbe Seiten?',
            a: 'KI-Empfehlungen haben drei Vorteile: Keine Provision (MyHammer nimmt bis zu 20%), höheres Vertrauen beim Kunden (persönliche Empfehlung statt Anzeige), und kein Preiskampf mit anderen Betrieben auf der gleichen Plattform.',
        },
        {
            q: 'Welche Handwerksgewerke profitieren am meisten von KI-Sichtbarkeit?',
            a: 'Besonders stark profitieren Gewerke mit hohem Rechercheaufwand: SHK wegen komplexer Entscheidungen wie Wärmepumpen, Elektriker wegen Smart-Home-Themen, und Dachdecker wegen hoher Auftragswerte. Aber jedes Gewerk hat Potenzial, weil die KI-Konkurrenz im Handwerk noch minimal ist.',
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
                            href="https://www.hwk-hamburg.de/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Handwerkskammer Hamburg: Betriebsverzeichnis und Branchendaten
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://sparktoro.com/blog/new-research-how-much-traffic-do-ai-tools-send-to-websites/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            SparkToro / Datos: ChatGPT Traffic- und Marktanteilsanalyse
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://platform.openai.com/docs/bots"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            OpenAI: GPTBot und OAI-SearchBot Dokumentation
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
                <a
                    href="/wissen/technische-ki-sichtbarkeit"
                    className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
                >
                    <p className="font-semibold text-black group-hover:text-brand-accent transition-colors mb-1">
                        Technische KI-Sichtbarkeit
                    </p>
                    <p className="text-sm text-gray-500">
                        Schema.org, robots.txt, Crawling &ndash; die technische Seite der KI-Optimierung.
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
                        Tools, Metriken und Prozesse zur Messung deiner KI-Sichtbarkeit.
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
                        Werden Kunden von der KI zu deinem Betrieb geschickt?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                        Ich prüfe, ob und wie ChatGPT, Perplexity und andere KI-Systeme deinen
                        Handwerksbetrieb aktuell empfehlen. Kostenlos, in 48 Stunden.
                    </p>
                    <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose Kurzanalyse anfragen" className="!py-4 !px-8" />
                </div>
            </div>
        </FadeIn>
    </section>
);

export default function KiSichtbarkeitHandwerkerPage() {
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
                <AdvantageSection />
                <FactorsSection />
                <StrategiesSection />
                <GewerkeSection />
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
