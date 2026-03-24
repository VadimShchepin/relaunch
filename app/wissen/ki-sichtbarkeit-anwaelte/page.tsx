'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'KI-Sichtbarkeit für Anwälte & Kanzleien: Mandanten fragen die KI',
    description: 'Wie Anwälte und Kanzleien in ChatGPT, Perplexity und Google AI sichtbar werden. 7 Strategien für KI-Empfehlungen, E-E-A-T für Rechtsberatung und lokale Sichtbarkeit in Hamburg.',
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
        '@id': 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-anwaelte',
    },
    inLanguage: 'de',
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Wie wird meine Kanzlei von ChatGPT empfohlen?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'ChatGPT empfiehlt Kanzleien, die auf vertrauenswürdigen Quellen konsistent erwähnt werden: anwalt.de, JUVE, Handelsblatt, Google Business, Fachzeitschriften. Zusätzlich muss Ihre Website für Bing optimiert sein, da ChatGPT Bing für Live-Suchen nutzt. Fachliche Spezialisierung und positive Mandantenbewertungen verstärken die Empfehlungswahrscheinlichkeit.',
            },
        },
        {
            '@type': 'Question',
            name: 'Ist KI-Sichtbarkeit für Anwälte DSGVO-konform?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ja. KI-Sichtbarkeit basiert auf der Optimierung öffentlich zugänglicher Informationen: Ihre Website, Branchenverzeichnisse, Fachpublikationen und Bewertungsprofile. Es werden keine personenbezogenen Mandantendaten verarbeitet. Die Strategien entsprechen den gleichen Prinzipien wie klassische Kanzlei-PR und Suchmaschinenoptimierung.',
            },
        },
        {
            '@type': 'Question',
            name: 'Welche Rechtsgebiete profitieren am meisten von KI-Sichtbarkeit?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Rechtsgebiete mit hohem Privatmandantenanteil profitieren am stärksten: Arbeitsrecht, Familienrecht, Mietrecht, Verkehrsrecht und Erbrecht. Hier fragen potenzielle Mandanten aktiv KI-Systeme nach Empfehlungen. Aber auch B2B-Bereiche wie Handelsrecht, IT-Recht und Gesellschaftsrecht gewinnen, da Unternehmer zunehmend KI für die Kanzleisuche nutzen.',
            },
        },
        {
            '@type': 'Question',
            name: 'Wie lange dauert es, bis eine Kanzlei in KI-Systemen sichtbar wird?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Erste Ergebnisse bei der Live-Websuche (Perplexity, ChatGPT mit Bing) sind nach 4-8 Wochen möglich. Für die Aufnahme in KI-Trainingsdaten dauert es 3-6 Monate, abhängig von der Häufigkeit und Qualität Ihrer Fachpublikationen und Erwähnungen auf vertrauenswürdigen Quellen.',
            },
        },
        {
            '@type': 'Question',
            name: 'Reicht ein Profil auf anwalt.de für KI-Sichtbarkeit?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nein. Ein anwalt.de-Profil ist ein wichtiger Baustein, aber nicht ausreichend. KI-Systeme bewerten die Konsistenz über viele Quellen hinweg: Website, Google Business, anwalt.de, JUVE, Fachpublikationen, Presseartikel und Bewertungsportale. Je mehr vertrauenswürdige Quellen Ihre Expertise bestätigen, desto wahrscheinlicher die KI-Empfehlung.',
            },
        },
        {
            '@type': 'Question',
            name: 'Was kostet KI-Sichtbarkeit für Kanzleien?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Die Grundlagen können Kanzleien selbst umsetzen: Website-Optimierung, Google Business, Bewertungsmanagement. Professionelle KI-SEO-Betreuung für Kanzleien beginnt typischerweise bei 1.500-3.000 Euro monatlich, abhängig von Kanzleigröße und Wettbewerbsintensität im jeweiligen Rechtsgebiet.',
            },
        },
        {
            '@type': 'Question',
            name: 'Verstößt KI-SEO für Anwälte gegen das anwaltliche Werberecht?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nein. KI-SEO basiert auf sachlicher Information, Fachpublikationen und der Optimierung öffentlicher Profile - das ist nach der liberalisierten BRAO und den Berufsordnungen der Rechtsanwaltskammern zulässig. Es gelten die gleichen Regeln wie für klassische Kanzlei-Websites und SEO: sachlich, nicht irreführend, keine Erfolgsversprechen.',
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
            name: 'KI-Sichtbarkeit für Anwälte',
            item: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-anwaelte',
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
                <span className="text-gray-600">KI-Sichtbarkeit für Anwälte</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
                KI-Sichtbarkeit für Anwälte &amp; Kanzleien:<br />
                Mandanten fragen die KI
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
                Potenzielle Mandanten googlen nicht mehr &ldquo;Anwalt Arbeitsrecht Hamburg&rdquo;.
                Sie fragen ChatGPT. Die KI empfiehlt zwei bis drei Kanzleien. Wer nicht dabei ist,
                verliert Mandate - ohne es zu wissen. Dieser Guide zeigt, wie Kanzleien in
                KI-Empfehlungen sichtbar werden.
            </p>
        </FadeIn>
    </section>
);

// TL;DR Section
const TLDRSection: React.FC = () => (
    <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <FadeIn>
            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
                <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">Zusammenfassung</p>
                <ul className="space-y-2 text-gray-800">
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">1.</span>
                        <span>Mandanten fragen KI-Systeme nach Anwaltsempfehlungen - wer dort nicht auftaucht, wird nicht kontaktiert.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">2.</span>
                        <span>Rechtsberatung ist ein YMYL-Thema: KI-Systeme stellen höchste E-E-A-T-Anforderungen an empfohlene Kanzleien.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">3.</span>
                        <span>Spezialisierung schlägt Vollservice: Klare Rechtsgebiets-Signale erhöhen die Empfehlungswahrscheinlichkeit deutlich.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">4.</span>
                        <span>Fachpublikationen, Mandantenbewertungen und konsistente Profile auf Fachportalen sind die drei stärksten Hebel.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">5.</span>
                        <span>Schema.org LegalService Markup und strukturierte FAQ-Seiten machen Kanzlei-Websites maschinenlesbar.</span>
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
                Das Problem: Mandanten fragen ChatGPT nach Anwaltsempfehlungen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Die Mandantenakquise hat sich fundamental verändert. Statt &ldquo;Anwalt Arbeitsrecht
                    Hamburg&rdquo; in Google einzugeben, fragen immer mehr Menschen ChatGPT, Perplexity
                    oder Google AI: &ldquo;Welchen Anwalt für Arbeitsrecht kannst du in Hamburg
                    empfehlen?&rdquo;
                </p>
                <p>
                    Die KI antwortet nicht mit zehn blauen Links. Sie empfiehlt zwei bis drei Kanzleien
                    namentlich - mit Begründung. Wer in dieser Empfehlung auftaucht, bekommt den Anruf.
                    Wer nicht auftaucht, erfährt nicht einmal, dass ein potenzieller Mandant nach genau
                    seiner Spezialisierung gesucht hat.
                </p>
                <p>
                    Das Tückische: Klassische Sichtbarkeit schützt nicht. Ein Top-Profil auf anwalt.de,
                    eine JUVE-Empfehlung oder ein gutes Google-Ranking bedeuten nicht automatisch, dass
                    ChatGPT Ihre Kanzlei empfiehlt. KI-Systeme bewerten nach eigenen Kriterien - und
                    diese Kriterien sind für Kanzleien besonders anspruchsvoll.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Früher: Google-Suche</h3>
                    <p className="text-gray-600 text-base">
                        Mandant googelt &ldquo;Anwalt Arbeitsrecht Hamburg&rdquo;, sieht 10 Ergebnisse,
                        klickt 3-4 Kanzlei-Websites an, vergleicht und ruft an. Mehrere Kanzleien
                        bekommen eine Chance.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Heute: KI-Empfehlung</h3>
                    <p className="text-gray-600 text-base">
                        Mandant fragt ChatGPT &ldquo;Empfiehl mir einen guten Arbeitsrechtler in
                        Hamburg&rdquo;. Die KI nennt 2-3 Kanzleien mit Begründung. Der Mandant
                        kontaktiert die erste Empfehlung. Fertig.
                    </p>
                </div>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Ein Profil auf anwalt.de und eine JUVE-Listung allein reichen nicht mehr. Diese
                    Plattformen sind wichtige Bausteine, aber KI-Systeme bewerten das Gesamtbild:
                    Wie konsistent ist Ihre Expertise über alle Quellen hinweg dokumentiert? Wie
                    aktuell sind Ihre Fachbeiträge? Wie bewerten Mandanten Ihre Arbeit?
                </p>
            </div>
        </FadeIn>
    </section>
);

// Why Important Section
const WhyImportantSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Warum KI-Sichtbarkeit für Kanzleien besonders wichtig ist
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Rechtsberatung gehört zu den sensibelsten Bereichen im Internet. Google nennt es
                    YMYL - &ldquo;Your Money Your Life&rdquo;. KI-Systeme übernehmen dieses Prinzip
                    und verschärfen es sogar. Die Hürde für eine Kanzlei-Empfehlung ist höher als
                    für einen Restauranttipp.
                </p>
            </div>

            <div className="space-y-6">
                {[
                    {
                        title: 'YMYL-Thema mit höchsten E-E-A-T-Anforderungen',
                        desc: 'Rechtliche Beratung kann das Leben von Menschen grundlegend verändern. KI-Systeme wissen das und prüfen besonders streng: Ist die empfohlene Kanzlei tatsächlich spezialisiert? Gibt es nachweisbare Expertise? Bestätigen unabhängige Quellen die Kompetenz? Eine falsche Anwaltsempfehlung hat andere Konsequenzen als eine falsche Restaurantempfehlung.',
                    },
                    {
                        title: 'Rechtsberatung ist Vertrauenssache',
                        desc: 'Mandanten vertrauen ihrem Anwalt sensible Informationen an. Wenn eine KI einen Anwalt empfiehlt, ist das ein implizites Vertrauensvotum. KI-Systeme gehen mit dieser Verantwortung vorsichtig um und empfehlen nur Kanzleien, deren Reputation über mehrere unabhängige Quellen belegt ist.',
                    },
                    {
                        title: 'KI-Empfehlung = implizites Vertrauensvotum',
                        desc: 'Wenn ChatGPT sagt "Für Arbeitsrecht in Hamburg empfehle ich Kanzlei X", dann hat das für den Nutzer eine andere Qualität als ein Google-Suchergebnis. Der Nutzer behandelt die KI-Empfehlung wie den Rat eines kompetenten Bekannten. Die Conversion-Rate von KI-Empfehlung zu Erstkontakt ist signifikant höher als bei klassischen Suchergebnissen.',
                    },
                    {
                        title: 'Wettbewerbsvorteil durch frühe Positionierung',
                        desc: 'Die meisten Kanzleien ignorieren KI-Sichtbarkeit noch vollständig. Wer jetzt die richtigen Signale setzt, baut einen Vorsprung auf, den Wettbewerber später nur schwer aufholen können. KI-Trainingsdaten sind kumulativ - frühe und konsistente Erwähnungen wiegen schwerer als späte Aufholjagden.',
                    },
                ].map((item, i) => (
                    <FadeIn key={i} delay={i * 50}>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6">
                            <h3 className="font-semibold text-black text-lg mb-2">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </FadeIn>
    </section>
);

// Factors Section
const FactorsSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                5 Faktoren, die KI-Empfehlungen für Kanzleien beeinflussen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    KI-Systeme bewerten Kanzleien anhand spezifischer Signale. Wer diese Faktoren
                    kennt und gezielt bedient, erhöht die Wahrscheinlichkeit, in Empfehlungen
                    aufzutauchen, erheblich.
                </p>
            </div>

            <div className="space-y-6">
                {[
                    {
                        title: 'Fachliche Reputation',
                        desc: 'Veröffentlichungen in Fachzeitschriften (NJW, MDR, NZA), Vorträge auf Fachtagungen, Kommentierungen, JUVE-Rankings und Listungen in Chambers oder Legal 500. KI-Systeme erkennen diese Signale und gewichten sie als starke Expertise-Indikatoren. Ein Aufsatz in der NJW wiegt schwerer als hundert Blogposts auf der eigenen Website.',
                    },
                    {
                        title: 'Bewertungsprofil',
                        desc: 'Google-Bewertungen, anwalt.de-Bewertungen, Kununu (als Arbeitgeber) und ProvenExpert. KI-Systeme aggregieren Bewertungen über Plattformen hinweg. Eine Kanzlei mit 4,8 Sternen auf Google, positiven anwalt.de-Bewertungen und guten Kununu-Werten sendet ein starkes Vertrauenssignal. Vereinzelte Bewertungen auf einer Plattform reichen nicht.',
                    },
                    {
                        title: 'Spezialisierungssignale',
                        desc: 'KI-Systeme empfehlen Spezialisten, keine Generalisten. Eine Kanzlei, die sich klar als "Boutique für Arbeitsrecht" positioniert, wird eher empfohlen als eine, die 15 Rechtsgebiete auf der Website listet. Klare Rechtsgebiets-Seiten, Fachanwaltstitel und thematisch fokussierte Fachbeiträge sind die stärksten Spezialisierungssignale.',
                    },
                    {
                        title: 'Digitale Präsenz und Website-Qualität',
                        desc: 'Strukturierte Website mit klaren Rechtsgebiets-Seiten, FAQ-Bereichen, Anwaltsprofilen mit Vita und Publikationsliste. Schema.org-Markup (LegalService, Attorney), schnelle Ladezeiten, Mobile-Optimierung. KI-Crawler bewerten die technische Qualität und Struktur Ihrer Website als Indikator für Professionalität.',
                    },
                    {
                        title: 'Medienresonanz',
                        desc: 'Pressezitate in Tageszeitungen und Fachmedien, Gastbeiträge in Wirtschaftsmedien (Handelsblatt, WirtschaftsWoche), Interviews und Einordnungen zu aktuellen Rechtsfragen. Redaktionelle Erwähnungen durch Dritte wiegen bei KI-Systemen deutlich schwerer als eigene Veröffentlichungen auf der Kanzlei-Website.',
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
                7 Strategien für Anwälte und Kanzleien
            </h2>
            <div className="space-y-8">
                {[
                    {
                        num: '01',
                        title: 'Rechtsgebiets-Seiten mit FAQ erstellen',
                        text: 'Jedes Rechtsgebiet Ihrer Kanzlei braucht eine eigene, ausführliche Seite. Nicht nur eine Aufzählung von Tätigkeiten, sondern echte Inhalte: Typische Mandate, häufige Fragen, aktuelle Rechtsprechung, Ihre spezifische Erfahrung. Ergänzen Sie jede Seite um einen FAQ-Bereich mit den Fragen, die Mandanten tatsächlich stellen. KI-Systeme nutzen genau diese FAQ-Strukturen als Antwortquellen.',
                    },
                    {
                        num: '02',
                        title: 'Fachbeiträge und Legal-Tech-Content publizieren',
                        text: 'Schreiben Sie regelmäßig Fachbeiträge - nicht nur auf Ihrer Website, sondern in Fachzeitschriften, auf anwalt.de, auf LinkedIn. Kommentieren Sie aktuelle Urteile. Ordnen Sie Gesetzesänderungen ein. KI-Systeme lernen aus diesen Quellen und ordnen Ihre Expertise bestimmten Rechtsgebieten zu. Ein monatlicher Fachbeitrag ist mehr wert als eine perfekte Kanzlei-Website ohne aktuelle Inhalte.',
                    },
                    {
                        num: '03',
                        title: 'Google Business mit Kanzlei-Kategorien optimieren',
                        text: 'Ihr Google-Business-Profil ist eine der wichtigsten Quellen für KI-Systeme bei lokalen Empfehlungen. Wählen Sie die passende Hauptkategorie (z.B. "Anwalt für Arbeitsrecht"), ergänzen Sie Nebenkategorien, pflegen Sie Öffnungszeiten, Fotos der Kanzleiräume und reagieren Sie professionell auf jede Bewertung. Ein vollständiges, aktives Google-Business-Profil signalisiert Relevanz und Vertrauenswürdigkeit.',
                    },
                    {
                        num: '04',
                        title: 'Schema.org LegalService Markup implementieren',
                        text: 'Strukturierte Daten machen Ihre Website für KI-Systeme maschinenlesbar. Implementieren Sie Schema.org-Markup: LegalService für die Kanzlei, Attorney für einzelne Anwälte, FAQPage für FAQ-Bereiche, Review für Mandantenbewertungen. Das ist kein optionales Extra - es ist die Sprache, die KI-Crawler verstehen.',
                    },
                    {
                        num: '05',
                        title: 'Mandantenbewertungen systematisch aufbauen',
                        text: 'Bitten Sie zufriedene Mandanten aktiv um Bewertungen - auf Google, auf anwalt.de, auf ProvenExpert. Machen Sie es einfach: QR-Code in der Kanzlei, Link in der Abschluss-E-Mail, kurze Anleitung. Reagieren Sie auf jede Bewertung professionell und zeitnah. KI-Systeme bewerten nicht nur die Sterne, sondern auch die Aktualität und Ihre Antworten.',
                    },
                    {
                        num: '06',
                        title: 'Kanzlei-Profile auf Fachportalen pflegen',
                        text: 'anwalt.de, JUVE, Chambers, Legal 500, anwaltssuche.de, Deutsches Anwaltsregister - all diese Profile müssen vollständig, aktuell und konsistent sein. Gleicher Name, gleiche Adresse, gleiche Telefonnummer, gleiche Rechtsgebiete überall. KI-Systeme cross-referenzieren diese Quellen. Inkonsistenzen senken das Vertrauen.',
                    },
                    {
                        num: '07',
                        title: 'Thought Leadership durch Gastbeiträge aufbauen',
                        text: 'Schreiben Sie Gastbeiträge für Wirtschaftsmedien, geben Sie Interviews zu aktuellen Rechtsfragen, sprechen Sie auf Branchenveranstaltungen. Jede redaktionelle Erwähnung durch Dritte ist ein starkes Signal für KI-Systeme. Ziel: Wenn ein Journalist "Experte für Arbeitsrecht Hamburg" sucht, sollte Ihr Name fallen - denn genau diese Medienberichte fließen in KI-Trainingsdaten ein.',
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

// Kanzlei Types Section
const KanzleiTypesSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Kanzlei-Typen und ihre KI-Chancen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Nicht jede Kanzlei braucht die gleiche KI-Strategie. Der richtige Ansatz hängt
                    von Ihrer Größe, Spezialisierung und Zielgruppe ab.
                </p>
            </div>

            <div className="space-y-6">
                <FadeIn>
                    <div className="bg-white border border-gray-100 rounded-2xl p-6">
                        <h3 className="font-semibold text-black text-lg mb-3">Einzelanwalt / Kleine Kanzlei</h3>
                        <p className="text-gray-600 leading-relaxed mb-3">
                            <strong>Vorteil:</strong> Maximale Spezialisierung möglich. Wenn Sie als Einzelanwalt
                            nur Arbeitsrecht machen, ist Ihr Spezialisierungssignal glasklar.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            <strong>Strategie:</strong> Fokussieren Sie auf ein bis zwei Rechtsgebiete. Bauen Sie
                            tiefe Inhalte zu genau diesen Themen. Pflegen Sie Google Business und anwalt.de
                            besonders sorgfältig. Sammeln Sie systematisch Bewertungen. Ihr Ziel: Bei der Frage
                            &ldquo;Wer ist ein guter Arbeitsrechtler in Hamburg?&rdquo; als Spezialist empfohlen
                            werden.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={50}>
                    <div className="bg-white border border-gray-100 rounded-2xl p-6">
                        <h3 className="font-semibold text-black text-lg mb-3">Boutique-Kanzlei (2-10 Anwälte)</h3>
                        <p className="text-gray-600 leading-relaxed mb-3">
                            <strong>Vorteil:</strong> Gebündelte Expertise in einem Bereich. Mehrere Anwälte mit
                            Fachanwaltstitel im gleichen Gebiet sind ein starkes Team-Signal.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            <strong>Strategie:</strong> Positionieren Sie die Kanzlei als Team-Expertise.
                            Individuelle Anwaltsprofile mit Publikationslisten. Gemeinsame Fachbeiträge.
                            Kanzlei-eigener Newsletter zu Ihrem Fachgebiet. Ziel: Als &ldquo;die Kanzlei
                            für [Rechtsgebiet]&rdquo; in Ihrer Region wahrgenommen werden.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={100}>
                    <div className="bg-white border border-gray-100 rounded-2xl p-6">
                        <h3 className="font-semibold text-black text-lg mb-3">Mittelständische Kanzlei (10-50 Anwälte)</h3>
                        <p className="text-gray-600 leading-relaxed mb-3">
                            <strong>Vorteil:</strong> Breite Abdeckung mit Tiefe in einzelnen Bereichen.
                            Genug Ressourcen für systematisches Content-Marketing.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            <strong>Strategie:</strong> Erstellen Sie für jedes Rechtsgebiet eigene
                            Content-Hubs mit Experten-Profilen. Nutzen Sie die Breite als Stärke:
                            &ldquo;Wirtschaftsrechtliche Beratung aus einer Hand&rdquo;. Investieren
                            Sie in PR und Fachpublikationen. Implementieren Sie umfassendes Schema.org-Markup
                            für jeden Praxisbereich.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={150}>
                    <div className="bg-white border border-gray-100 rounded-2xl p-6">
                        <h3 className="font-semibold text-black text-lg mb-3">Großkanzlei (50+ Anwälte)</h3>
                        <p className="text-gray-600 leading-relaxed mb-3">
                            <strong>Vorteil:</strong> Hohe Medienresonanz, etablierte Marke, JUVE- und
                            Chambers-Rankings. Viele der KI-Signale sind bereits vorhanden.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            <strong>Strategie:</strong> Technische Optimierung der bestehenden Inhalte:
                            Schema.org-Markup, strukturierte FAQ, optimierte Anwaltsprofile. Sicherstellen,
                            dass GPTBot und andere KI-Crawler nicht blockiert werden. Die vorhandene
                            Reputation gezielt für KI-Systeme aufbereiten - oft ist das meiste Material
                            vorhanden, nur nicht maschinenlesbar.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </FadeIn>
    </section>
);

// Hamburg Section
const HamburgSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                KI-Sichtbarkeit für Hamburger Kanzleien
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Hamburg ist einer der größten Rechtsstandorte Deutschlands. Die Hanseatische
                    Rechtsanwaltskammer zählt über 10.000 zugelassene Anwälte. Der Wettbewerb ist
                    intensiv - und genau deshalb ist KI-Sichtbarkeit hier besonders wertvoll.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Hamburger Rechtsmarkt</h3>
                    <p className="text-gray-600 text-base">
                        Internationale Großkanzleien, spezialisierte Boutiquen und Einzelanwälte
                        konkurrieren um Mandanten. Besonders stark besetzt: Handels- und
                        Gesellschaftsrecht (Hafenwirtschaft), Arbeitsrecht, Medienrecht und
                        maritimes Wirtschaftsrecht. Wer hier in KI-Empfehlungen auftaucht,
                        differenziert sich vom Wettbewerb.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Lokale Signale nutzen</h3>
                    <p className="text-gray-600 text-base">
                        Hamburg-spezifische Optimierung: Google Business mit Hamburger Adresse
                        und Stadtteil. Mitgliedschaft in der Hanseatischen Rechtsanwaltskammer
                        auf der Website nennen. Lokale Medienarbeit (Hamburger Abendblatt,
                        MOPO, Hamburg Journal). Engagement in Hamburger Wirtschaftsverbänden
                        (Handelskammer, UVNord).
                    </p>
                </div>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Hamburger Kanzleien haben einen spezifischen Vorteil: Die Stadt ist groß genug
                    für spezialisierte Anfragen (&ldquo;Anwalt Seerecht Hamburg&rdquo;), aber
                    überschaubar genug, dass gezielte lokale Maßnahmen schnell wirken. Ein
                    Fachanwalt für maritimes Wirtschaftsrecht in Hamburg hat bei der entsprechenden
                    KI-Anfrage deutlich weniger Wettbewerb als ein Arbeitsrechtler.
                </p>
                <p>
                    Nutzen Sie den hanseatischen Standortvorteil: Verknüpfen Sie Ihre Kanzlei
                    konsequent mit Hamburg-spezifischen Themen, Institutionen und Medien.
                    KI-Systeme bewerten diese lokale Verankerung als starkes Relevanzsignal.
                </p>
            </div>
        </FadeIn>
    </section>
);

// FAQ Section
const FAQSection: React.FC = () => {
    const faqItems = [
        {
            q: 'Wie wird meine Kanzlei von ChatGPT empfohlen?',
            a: 'ChatGPT empfiehlt Kanzleien, die auf vertrauenswürdigen Quellen konsistent erwähnt werden: anwalt.de, JUVE, Google Business, Fachzeitschriften, Presseartikel. Zusätzlich muss Ihre Website für Bing optimiert sein, da ChatGPT Bing für Live-Suchen nutzt.',
        },
        {
            q: 'Ist KI-Sichtbarkeit für Anwälte DSGVO-konform?',
            a: 'Ja. KI-Sichtbarkeit basiert auf der Optimierung öffentlich zugänglicher Informationen: Website, Branchenverzeichnisse, Fachpublikationen, Bewertungsprofile. Es werden keine personenbezogenen Mandantendaten verarbeitet.',
        },
        {
            q: 'Welche Rechtsgebiete profitieren am meisten von KI-Sichtbarkeit?',
            a: 'Rechtsgebiete mit hohem Privatmandantenanteil: Arbeitsrecht, Familienrecht, Mietrecht, Verkehrsrecht, Erbrecht. Aber auch B2B-Bereiche wie Handelsrecht, IT-Recht und Gesellschaftsrecht, da Unternehmer zunehmend KI für die Kanzleisuche nutzen.',
        },
        {
            q: 'Wie lange dauert es, bis eine Kanzlei in KI-Systemen sichtbar wird?',
            a: 'Erste Ergebnisse bei der Live-Websuche (Perplexity, ChatGPT mit Bing) nach 4-8 Wochen. Für KI-Trainingsdaten: 3-6 Monate, abhängig von Häufigkeit und Qualität Ihrer Fachpublikationen und Erwähnungen.',
        },
        {
            q: 'Reicht ein Profil auf anwalt.de für KI-Sichtbarkeit?',
            a: 'Nein. anwalt.de ist ein wichtiger Baustein, aber nicht ausreichend. KI-Systeme bewerten die Konsistenz über viele Quellen: Website, Google Business, anwalt.de, JUVE, Fachpublikationen, Presseartikel, Bewertungsportale.',
        },
        {
            q: 'Was kostet KI-Sichtbarkeit für Kanzleien?',
            a: 'Die Grundlagen können Sie selbst umsetzen: Website-Optimierung, Google Business, Bewertungsmanagement. Professionelle KI-SEO-Betreuung beginnt bei 1.500-3.000 Euro monatlich, abhängig von Kanzleigröße und Wettbewerbsintensität.',
        },
        {
            q: 'Verstößt KI-SEO für Anwälte gegen das anwaltliche Werberecht?',
            a: 'Nein. KI-SEO basiert auf sachlicher Information, Fachpublikationen und der Optimierung öffentlicher Profile. Das ist nach der liberalisierten BRAO und den Berufsordnungen zulässig - gleiche Regeln wie für klassische Kanzlei-Websites und SEO.',
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
                            Ahrefs (2025): LLM SEO - Brand Mentions Correlation Study
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://arxiv.org/abs/2406.05035"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Princeton University: The Role of Earned Media in AI Search Engines
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.brak.de/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Bundesrechtsanwaltskammer: Berufsrecht und Werberecht für Anwälte
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://developers.google.com/search/docs/appearance/structured-data/legal-service"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Google: Schema.org LegalService Structured Data Dokumentation
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
                        Wie ChatGPTs Dual-System funktioniert und wie Unternehmen dort empfohlen werden.
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
                        Werden potenzielle Mandanten von der KI zu Ihnen geschickt?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                        Ich prüfe, ob und wie ChatGPT, Perplexity und Google AI Ihre Kanzlei aktuell
                        darstellen und empfehlen. Kostenlos, in 48 Stunden.
                    </p>
                    <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose Kurzanalyse anfragen" className="!py-4 !px-8" />
                </div>
            </div>
        </FadeIn>
    </section>
);

export default function KiSichtbarkeitAnwaeltePage() {
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
                <WhyImportantSection />
                <FactorsSection />
                <StrategiesSection />
                <KanzleiTypesSection />
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
