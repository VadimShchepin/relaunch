'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'KI-Sichtbarkeit für Ärzte & Praxen: Wenn Patienten die KI fragen',
    description: 'Wie Ärzte und Praxen in ChatGPT, Perplexity und Google AI sichtbar werden. 7 Strategien für KI-Empfehlungen, medizinisches E-E-A-T und lokale Sichtbarkeit.',
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
        '@id': 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-aerzte',
    },
    inLanguage: 'de',
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Wie werde ich als Arzt in ChatGPT sichtbar?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Deine Praxis muss auf Plattformen präsent sein, die KI-Systeme als vertrauenswürdig einstufen: Google Business, Jameda, Doctolib, Ärztekammer-Verzeichnisse und medizinische Fachportale. Konsistente NAP-Daten, positive Bewertungen und strukturierte Leistungsseiten auf deiner Praxis-Website sind die Basis.',
            },
        },
        {
            '@type': 'Question',
            name: 'Warum ist KI-Sichtbarkeit für Ärzte besonders wichtig?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Über 40% der unter 35-Jährigen nutzen bereits KI-Assistenten für Gesundheitsfragen und Arztempfehlungen. KI-Systeme empfehlen typischerweise nur 2-3 Praxen pro Anfrage. Wer nicht empfohlen wird, verliert eine wachsende Patientengruppe an die Konkurrenz.',
            },
        },
        {
            '@type': 'Question',
            name: 'Welche Rolle spielen Jameda-Bewertungen für KI-Sichtbarkeit?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Jameda-Bewertungen sind ein wichtiges Signal, reichen aber allein nicht aus. KI-Systeme gleichen Bewertungen über mehrere Plattformen ab - Google, Jameda, Doctolib, Sanego. Praxen mit konsistent guten Bewertungen auf mehreren Plattformen werden bevorzugt empfohlen.',
            },
        },
        {
            '@type': 'Question',
            name: 'Was ist medizinisches E-E-A-T und warum ist es für KI relevant?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'E-E-A-T steht für Experience, Expertise, Authoritativeness und Trustworthiness. Bei medizinischen Inhalten (YMYL - Your Money or Your Life) prüfen Google und KI-Systeme besonders streng, ob der Autor tatsächlich medizinische Expertise hat. Facharzttitel, Publikationen, Klinikzugehörigkeiten und Mitgliedschaften in Fachgesellschaften sind starke Signale.',
            },
        },
        {
            '@type': 'Question',
            name: 'Hilft Schema.org-Markup meiner Praxis bei KI-Sichtbarkeit?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ja. Schema.org-Markup wie MedicalBusiness, Physician und MedicalSpecialty hilft KI-Systemen, deine Praxis korrekt einzuordnen. Es signalisiert Fachrichtung, Leistungsspektrum, Öffnungszeiten und Standort in maschinenlesbarer Form. Das reduziert Interpretationsfehler und erhöht die Chance auf korrekte Empfehlungen.',
            },
        },
        {
            '@type': 'Question',
            name: 'Wie schnell wirkt KI-Optimierung für Arztpraxen?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Änderungen an Google Business und Bewertungsplattformen können innerhalb von Tagen bis Wochen in KI-Live-Suchen wirken. Für die Trainingsdaten der KI-Modelle dauert es bis zum nächsten Update - das können Wochen bis Monate sein. Ein systematischer Ansatz zeigt typischerweise nach 2-3 Monaten erste messbare Ergebnisse.',
            },
        },
        {
            '@type': 'Question',
            name: 'Lohnt sich KI-Sichtbarkeit auch für kleine Einzelpraxen?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Gerade für Einzelpraxen ist KI-Sichtbarkeit eine Chance. KI-Systeme bewerten nicht nach Praxisgröße, sondern nach Vertrauenssignalen: Bewertungen, fachliche Autorität, konsistente Online-Präsenz. Eine gut optimierte Einzelpraxis kann in KI-Empfehlungen vor großen MVZ-Ketten erscheinen.',
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
            name: 'KI-Sichtbarkeit für Ärzte',
            item: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-aerzte',
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
                <span className="text-gray-600">KI-Sichtbarkeit für Ärzte</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
                KI-Sichtbarkeit für Ärzte &amp; Praxen:<br />
                Wenn Patienten die KI fragen
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
                &ldquo;Welcher Orthopäde in Hamburg ist gut?&rdquo; - Diese Frage wird heute nicht mehr
                nur bei Google gestellt. 40% der unter 35-Jährigen fragen ChatGPT nach Arztempfehlungen.
                Dieser Guide zeigt dir, wie deine Praxis in KI-Empfehlungen auftaucht.
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
                        <span>40% der jungen Erwachsenen fragen KI nach Arztempfehlungen. Tendenz: stark steigend.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">2.</span>
                        <span>Medizinische Inhalte unterliegen YMYL-Kriterien - KI-Systeme prüfen ärztliche Expertise besonders streng.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">3.</span>
                        <span>Bewertungsprofile auf Google, Jameda und Doctolib sind die stärksten KI-Signale für Arztpraxen.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">4.</span>
                        <span>Schema.org MedicalBusiness-Markup hilft KI-Systemen, deine Praxis korrekt einzuordnen.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">5.</span>
                        <span>Lokale Signale (NAP-Konsistenz, Google Business) entscheiden, ob du bei &ldquo;Arzt in Hamburg&rdquo; empfohlen wirst.</span>
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
                Das Problem: Patienten fragen ChatGPT statt Google
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Die Patientenreise hat sich verändert. Früher: Google-Suche, Jameda-Bewertungen lesen,
                    Praxis anrufen. Heute tippen immer mehr Patienten ihre Fragen direkt in ChatGPT,
                    Perplexity oder Google AI Overview.
                </p>
                <p>
                    &ldquo;Welcher Orthopäde in Hamburg-Eppendorf ist gut?&rdquo;, &ldquo;Empfiehl mir
                    einen Zahnarzt in der Nähe vom Jungfernstieg&rdquo;, &ldquo;Welcher Hautarzt in
                    Hamburg hat kurze Wartezeiten?&rdquo; - diese Prompts werden täglich tausendfach gestellt.
                </p>
            </div>

            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 my-8 shadow-sm">
                <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">Die neue Realität</p>
                <p className="text-2xl md:text-3xl font-semibold text-black mb-2">
                    40% der unter 35-Jährigen
                </p>
                <p className="text-gray-600">
                    fragen bereits KI-Assistenten nach Arztempfehlungen. Und KI-Systeme empfehlen
                    typischerweise nur 2-3 Praxen pro Anfrage. Wer nicht dabei ist, existiert für
                    diese Patientengruppe nicht.
                </p>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    <strong className="text-black">Deine Praxis ist exzellent - aber die KI weiss das nicht.</strong> Du
                    hast zufriedene Patienten, gute Jameda-Bewertungen, vielleicht sogar einen Lehrauftrag
                    am UKE. Aber wenn ChatGPT nach einem Spezialisten in deinem Fachgebiet gefragt wird,
                    empfiehlt es die Konkurrenz-Praxis drei Straßen weiter.
                </p>
                <p>
                    Jameda-Bewertungen allein reichen nicht mehr. KI-Systeme ziehen Informationen aus
                    dutzenden Quellen - und wenn deine Praxis dort nicht konsistent, vollständig und
                    überzeugend präsent ist, fällst du durch das Raster.
                </p>
                <p>
                    <strong className="text-black">Patienten vertrauen KI-Empfehlungen mehr als Jameda.</strong> Wenn
                    ChatGPT sagt &ldquo;Dr. Müller in Hamburg-Winterhude ist besonders empfehlenswert
                    für Knieprobleme&rdquo;, hat das für viele Patienten mehr Gewicht als ein anonymes
                    Bewertungsportal. Die KI wirkt neutral und allwissend - auch wenn sie es nicht ist.
                </p>
            </div>
        </FadeIn>
    </section>
);

// Why Different Section
const WhyDifferentSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Warum KI-Sichtbarkeit für Praxen anders funktioniert
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Medizinische Inhalte sind YMYL-Inhalte: Your Money or Your Life. Google und
                    KI-Systeme wissen, dass falsche Gesundheitsinformationen Menschen schaden können.
                    Deshalb gelten für Ärzte und Praxen strengere Maßstäbe als für andere Branchen.
                </p>
            </div>

            <div className="space-y-6">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Medizinisches E-E-A-T wird strenger geprüft</h3>
                    <p className="text-gray-600 text-base">
                        Experience, Expertise, Authoritativeness, Trustworthiness - bei medizinischen
                        Inhalten dreht die KI diese Regler auf Maximum. Ein Facharzt mit nachweisbarer
                        Spezialisierung, Publikationen und Klinikzugehörigkeit wird bevorzugt empfohlen.
                        Ein generischer Praxis-Eintrag ohne erkennbare Expertise fällt durch. Die KI
                        prüft: Steht ein Facharzttitel auf der Website? Gibt es Publikationen? Wird
                        die Person in Fachkreisen erwähnt?
                    </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">YMYL bedeutet höhere Hürden</h3>
                    <p className="text-gray-600 text-base">
                        Bei einer Restaurantempfehlung kann die KI entspannter sein. Bei einer
                        Arztempfehlung riskiert sie, dass jemand gesundheitlichen Schaden nimmt.
                        Deshalb empfiehlt sie nur Praxen, bei denen die Vertrauenssignale eindeutig
                        sind. Widersprüchliche Informationen, fehlende Qualifikationsnachweise oder
                        dünne Online-Präsenzen werden im medizinischen Kontext härter bestraft als
                        in anderen Branchen.
                    </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Bewertungsprofile als Vertrauenssignal</h3>
                    <p className="text-gray-600 text-base">
                        KI-Systeme gleichen Bewertungen plattformübergreifend ab. Eine Praxis mit
                        4,8 Sternen auf Google, 1,2 auf Jameda und keinem Profil auf Doctolib sendet
                        widersprüchliche Signale. Praxen mit konsistent positiven Bewertungen über
                        drei oder mehr Plattformen werden deutlich häufiger empfohlen. Die Anzahl
                        der Bewertungen zählt dabei fast so stark wie die Durchschnittsnote.
                    </p>
                </div>
            </div>
        </FadeIn>
    </section>
);

// 5 Factors Section
const FactorsSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                5 Faktoren, die KI-Empfehlungen für Ärzte beeinflussen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Nicht alle Signale sind gleich stark. Diese fünf Faktoren entscheiden, ob
                    deine Praxis von ChatGPT, Perplexity und Google AI empfohlen wird.
                </p>
            </div>

            <div className="space-y-6">
                {[
                    {
                        title: 'Bewertungsprofil (Google, Jameda, Doctolib)',
                        desc: 'Das stärkste Signal für Arztpraxen. KI-Systeme aggregieren Bewertungen über alle relevanten Plattformen. Entscheidend sind: Gesamtbewertung (ab 4,5 Sterne wird es relevant), Anzahl der Bewertungen (Masse signalisiert Vertrauen), Aktualität (aktuelle Bewertungen wiegen schwerer), und Antwortverhalten (reagierst du auf Bewertungen?). Eine Praxis mit 200 Google-Bewertungen bei 4,7 Sternen hat einen massiven Vorteil gegenüber einer mit 12 Bewertungen bei 5,0.',
                    },
                    {
                        title: 'Fachliche Autorität (Publikationen, Vorträge)',
                        desc: 'KI-Systeme durchsuchen PubMed, Google Scholar, Konferenzprogramme und Fachzeitschriften. Wenn dein Name in Publikationen, Kongressbeiträgen oder als Experte in Fachartikeln auftaucht, steigt dein E-E-A-T-Score massiv. Ein Facharzt mit drei PubMed-Einträgen wird anders bewertet als einer ohne jegliche Fachpublikation. Auch Interviews in lokalen Medien oder Gastbeiträge in Gesundheitsportalen zählen.',
                    },
                    {
                        title: 'Praxis-Website Qualität (strukturierte Leistungsseiten)',
                        desc: 'Eine einzelne Seite mit "Unsere Leistungen" reicht nicht. KI-Systeme brauchen strukturierte, detaillierte Einzelseiten pro Leistung. Statt einer Aufzählung: eine eigene Seite für "Kniespiegelung in Hamburg", eine für "Sportmedizinische Untersuchung", eine für "Arthrose-Behandlung". Jede Seite beantwortet die häufigsten Patientenfragen direkt. Das gibt der KI konkreten Content, den sie zitieren und empfehlen kann.',
                    },
                    {
                        title: 'Lokale Signale (NAP, Google Business)',
                        desc: 'Name, Adresse, Praxis-Telefonnummer - auf jeder Plattform identisch. Dein Google Business Profil ist der wichtigste Einzelfaktor für lokale KI-Empfehlungen. Kategorien korrekt wählen (nicht nur "Arzt", sondern "Orthopäde", "Sportmediziner"), Öffnungszeiten aktuell halten, Fotos der Praxis hochladen, und regelmäßig Google-Posts veröffentlichen. KI-Systeme nutzen Google Business als primäre lokale Datenquelle.',
                    },
                    {
                        title: 'Patientenkommunikation (FAQ, Ratgeber-Content)',
                        desc: 'Praxen, die Patientenfragen proaktiv beantworten, haben einen doppelten Vorteil: Die FAQ-Inhalte werden von KI-Systemen als direkte Antwortquellen genutzt, und sie signalisieren Patientenorientierung. "Wie lange dauert die Heilung nach einer Knie-OP?", "Was zahlt die Kasse bei einer Zahnreinigung?" - diese Fragen stellen Patienten auch der KI. Wenn deine Praxis-Website die Antwort liefert, wirst du zur Quelle der KI-Empfehlung.',
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

// 7 Strategies Section
const StrategiesSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                7 Strategien für Ärzte und Praxen
            </h2>
            <div className="space-y-8">
                {[
                    {
                        num: '01',
                        title: 'Google Business mit medizinischen Kategorien optimieren',
                        text: 'Dein Google Business Profil ist der Dreh- und Angelpunkt. Wähle die spezifischste Kategorie: nicht "Arzt", sondern "Orthopäde" oder "Facharzt für Innere Medizin". Ergänze alle relevanten Unterkategorien. Fülle jedes Feld aus: Leistungen, Versicherungen, Barrierefreiheit, Sprachen. Veröffentliche wöchentlich einen Google-Post zu Gesundheitsthemen oder Praxis-News. Lade professionelle Fotos der Praxisräume hoch. KI-Systeme nutzen Google Business als erste Anlaufstelle für lokale Arztempfehlungen.',
                    },
                    {
                        num: '02',
                        title: 'Leistungsseiten mit FAQ erstellen',
                        text: 'Erstelle für jede Kernleistung eine eigene Unterseite. Struktur: Was ist die Behandlung, für wen ist sie geeignet, wie läuft sie ab, was kostet sie (Kassenleistung vs. IGeL), und wie lange dauert die Heilung. Ergänze jede Seite mit einem FAQ-Block, der die 5 häufigsten Patientenfragen beantwortet. Diese Seiten werden von KI-Systemen als direkte Antwortquellen genutzt. Beispiel: "/leistungen/kniespiegelung" statt einer Zeile in einer Übersichtsliste.',
                    },
                    {
                        num: '03',
                        title: 'Bewertungsmanagement systematisieren',
                        text: 'Richte einen Prozess ein: Nach jedem erfolgreichen Behandlungsabschluss eine freundliche Erinnerung per Mail oder QR-Code in der Praxis. Ziel: monatlich 5-10 neue Google-Bewertungen. Reagiere auf jede Bewertung innerhalb von 48 Stunden - positiv wie negativ. Bei negativen Bewertungen: sachlich, lösungsorientiert, ohne Patientendaten. KI-Systeme bewerten dein Antwortverhalten als Qualitätssignal. Pflege parallel Jameda und Doctolib.',
                    },
                    {
                        num: '04',
                        title: 'Fachliche Autorität aufbauen',
                        text: 'Veröffentliche Fachartikel in medizinischen Portalen, gib Interviews für lokale Medien (Hamburger Abendblatt, NDR Visite), schreibe Gastbeiträge für Gesundheitsblogs. Halte Vorträge bei Patienten-Informationsabenden oder medizinischen Kongressen und sorge dafür, dass diese online dokumentiert sind. Jede dieser Erwähnungen stärkt dein E-E-A-T-Profil. KI-Systeme cross-referenzieren: Wird Dr. Müller nur auf der eigenen Website erwähnt, oder auch auf unabhängigen Quellen?',
                    },
                    {
                        num: '05',
                        title: 'Schema.org MedicalBusiness und Physician Markup',
                        text: 'Implementiere strukturierte Daten auf deiner Praxis-Website. Verwende Schema.org/MedicalBusiness für die Praxis und Schema.org/Physician für jeden Arzt. Ergänze MedicalSpecialty für deine Fachrichtung, MedicalCondition für behandelte Krankheitsbilder, und MedicalProcedure für angebotene Behandlungen. Dieses Markup hilft KI-Systemen, deine Praxis korrekt einzuordnen, ohne interpretieren zu müssen. Das reduziert Fehler in Empfehlungen und erhöht die Relevanz.',
                    },
                    {
                        num: '06',
                        title: 'Doctolib- und Jameda-Profile pflegen',
                        text: 'Behandle Doctolib und Jameda nicht als notwendiges Übel, sondern als KI-Datenquellen. Vollständiges Profil mit Foto, Lebenslauf, Qualifikationen, Leistungsspektrum und Sprechzeiten. Auf Jameda: Premium-Profil nutzen, um eigene Inhalte und Bilder zu hinterlegen. Auf Doctolib: Online-Terminbuchung aktivieren - das ist ein starkes Nutzersignal. KI-Systeme werten die Profiltiefe als Qualitätsmerkmal. Ein ausgefülltes Profil schlägt ein leeres, unabhängig von der Bewertungsnote.',
                    },
                    {
                        num: '07',
                        title: 'Patientenratgeber als Trust-Content',
                        text: 'Erstelle einen Ratgeber-Bereich auf deiner Praxis-Website. Beantworte typische Patientenfragen: "Wann sollte ich zum Orthopäden?", "Wie bereite ich mich auf eine Magenspiegelung vor?", "Was hilft bei chronischen Rückenschmerzen?". Schreibe in verständlicher Sprache, aber mit fachlicher Tiefe. Kennzeichne jeden Artikel mit Autorenbox (Name, Facharzttitel, Foto). Dieser Content wird von KI-Systemen als Vertrauensbeweis für Patientenorientierung und fachliche Kompetenz gewertet.',
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

// Practice Types Section
const PracticeTypesSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Praxis-Typen und ihre KI-Chancen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Nicht jede Praxis hat dieselben Hebel. Die optimale KI-Strategie hängt von
                    deinem Fachgebiet und deiner Praxisstruktur ab.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
                {[
                    {
                        type: 'Hausarztpraxis',
                        tips: 'Stärkstes Signal: Lokale Nähe und Verfügbarkeit. Optimiere für Stadtteil-spezifische Anfragen ("Hausarzt Hamburg-Eimsbüttel"). Betone kurze Wartezeiten, Online-Terminvergabe und breites Leistungsspektrum. KI-Systeme empfehlen Hausärzte primär nach Standort und Erreichbarkeit. Check-up- und Vorsorge-Seiten sind idealer FAQ-Content.',
                    },
                    {
                        type: 'Zahnarztpraxis',
                        tips: 'Höchstes Suchvolumen aller Fachrichtungen in KI-Systemen. Erstelle separate Seiten für Implantologie, Prophylaxe, Ästhetische Zahnmedizin. Preistransparenz bei IGeL-Leistungen ist ein starkes Differenzierungsmerkmal. Vorher-Nachher-Bilder (mit Patienteneinwilligung) stärken das Vertrauen. Google-Bewertungen mit konkreten Behandlungsberichten sind Gold wert.',
                    },
                    {
                        type: 'Facharztpraxis',
                        tips: 'Hier zählt Spezialisierung. KI-Systeme empfehlen Fachärzte nach Behandlungsschwerpunkten, nicht nach generischem Fachgebiet. "Kniechirurg Hamburg" schlägt "Orthopäde Hamburg". Publikationen und Kongressbeiträge haben das höchste Gewicht. Baue Autorität in deiner Subspecialität auf, nicht in der gesamten Fachrichtung.',
                    },
                    {
                        type: 'MVZ / Gemeinschaftspraxis',
                        tips: 'Nutze den Größenvorteil: Mehr Ärzte = mehr Expertise-Signale, breiteres Leistungsspektrum, mehr Bewertungen. Erstelle individuelle Arzt-Profile mit Schema.org/Physician-Markup neben dem Gesamtprofil. KI-Systeme können dann sowohl die Praxis als Ganzes als auch einzelne Ärzte empfehlen. Cross-Linking zwischen Arzt-Profilen und Leistungsseiten stärkt die interne Struktur.',
                    },
                ].map((item, i) => (
                    <FadeIn key={i} delay={i * 50}>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6">
                            <h3 className="font-semibold text-black text-lg mb-3">{item.type}</h3>
                            <p className="text-gray-600 leading-relaxed text-base">{item.tips}</p>
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
                KI-Sichtbarkeit für Hamburger Praxen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Hamburg hat über 12.000 niedergelassene Ärzte. Der Wettbewerb um Patienten
                    ist in Stadtteilen wie Eppendorf, Winterhude und der HafenCity besonders
                    intensiv. Genau hier entscheidet KI-Sichtbarkeit über neue Patienten.
                </p>
                <p>
                    Die Ärztekammer Hamburg, das UKE als universitäre Referenz und die dichte
                    Facharzt-Landschaft schaffen ein Umfeld, in dem medizinisches E-E-A-T
                    besonders gut aufgebaut werden kann. Nutze lokale Autoritäten: Eine Erwähnung
                    im Hamburger Ärzteblatt oder eine Kooperation mit dem UKE sind starke
                    Vertrauenssignale für KI-Systeme.
                </p>
                <p>
                    <strong className="text-black">Hamburger Besonderheiten für die KI-Optimierung:</strong>
                </p>
            </div>

            <div className="space-y-4 mt-6">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">Stadtteil-Optimierung</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Hamburg-Patienten suchen stadtteilspezifisch. Optimiere für &ldquo;Zahnarzt
                        Hamburg-Eppendorf&rdquo;, nicht nur für &ldquo;Zahnarzt Hamburg&rdquo;. KI-Systeme
                        verstehen Hamburger Stadtteile und gewichten lokale Nähe stark. Erwähne deinen
                        Stadtteil auf der Website, in Google Business und in Bewertungsantworten.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">Hamburger Medienlandschaft nutzen</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Das Hamburger Abendblatt, MOPO, NDR Hamburg Journal und Hamburg1 suchen
                        regelmäßig medizinische Experten für Gesundheitsthemen. Ein Interview oder
                        Gastbeitrag in diesen Medien wird von KI-Systemen als starkes lokales
                        Autoritätssignal gewertet. Biete dich als Experte für saisonale
                        Gesundheitsthemen an.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">Ärztekammer und Fachgesellschaften</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Die Mitgliedschaft in der Ärztekammer Hamburg, Auflistung im Arztregister
                        der KV Hamburg, und Mitgliedschaften in Fachgesellschaften sind
                        Vertrauenssignale, die KI-Systeme erkennen und positiv bewerten. Stelle
                        sicher, dass dein Profil in diesen Verzeichnissen vollständig und aktuell ist.
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
            q: 'Wie werde ich als Arzt in ChatGPT sichtbar?',
            a: 'Deine Praxis muss auf Plattformen präsent sein, die KI-Systeme als vertrauenswürdig einstufen: Google Business, Jameda, Doctolib, Ärztekammer-Verzeichnisse und medizinische Fachportale. Konsistente NAP-Daten, positive Bewertungen und strukturierte Leistungsseiten auf deiner Praxis-Website sind die Basis.',
        },
        {
            q: 'Warum ist KI-Sichtbarkeit für Ärzte besonders wichtig?',
            a: 'Über 40% der unter 35-Jährigen nutzen bereits KI-Assistenten für Gesundheitsfragen und Arztempfehlungen. KI-Systeme empfehlen typischerweise nur 2-3 Praxen pro Anfrage. Wer nicht empfohlen wird, verliert eine wachsende Patientengruppe an die Konkurrenz.',
        },
        {
            q: 'Welche Rolle spielen Jameda-Bewertungen für KI-Sichtbarkeit?',
            a: 'Jameda ist ein wichtiges Signal, reicht aber allein nicht aus. KI-Systeme gleichen Bewertungen über Google, Jameda, Doctolib und Sanego ab. Praxen mit konsistent guten Bewertungen auf mehreren Plattformen werden bevorzugt empfohlen.',
        },
        {
            q: 'Was ist medizinisches E-E-A-T und warum ist es für KI relevant?',
            a: 'E-E-A-T steht für Experience, Expertise, Authoritativeness und Trustworthiness. Bei medizinischen Inhalten prüfen KI-Systeme besonders streng, ob der Autor tatsächlich medizinische Expertise hat. Facharzttitel, Publikationen und Mitgliedschaften in Fachgesellschaften sind entscheidende Signale.',
        },
        {
            q: 'Hilft Schema.org-Markup meiner Praxis bei KI-Sichtbarkeit?',
            a: 'Ja. MedicalBusiness-, Physician- und MedicalSpecialty-Markup hilft KI-Systemen, deine Praxis korrekt einzuordnen. Es signalisiert Fachrichtung, Leistungsspektrum und Standort in maschinenlesbarer Form.',
        },
        {
            q: 'Wie schnell wirkt KI-Optimierung für Arztpraxen?',
            a: 'Änderungen an Google Business und Bewertungsplattformen können innerhalb von Tagen bis Wochen in KI-Live-Suchen wirken. Für die Trainingsdaten der KI-Modelle dauert es Wochen bis Monate. Ein systematischer Ansatz zeigt typischerweise nach 2-3 Monaten erste messbare Ergebnisse.',
        },
        {
            q: 'Lohnt sich KI-Sichtbarkeit auch für kleine Einzelpraxen?',
            a: 'Gerade für Einzelpraxen ist KI-Sichtbarkeit eine Chance. KI-Systeme bewerten nicht nach Praxisgröße, sondern nach Vertrauenssignalen. Eine gut optimierte Einzelpraxis kann in KI-Empfehlungen vor großen MVZ-Ketten erscheinen.',
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
                            href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Google: E-E-A-T und YMYL-Richtlinien für medizinische Inhalte
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://schema.org/MedicalBusiness"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Schema.org: MedicalBusiness und Physician Markup-Dokumentation
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.aerztekammer-hamburg.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Ärztekammer Hamburg: Arztverzeichnis und Qualitätssicherung
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
                        Wie ChatGPTs Empfehlungssystem funktioniert und wie du dort sichtbar wirst.
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
                        robots.txt, Schema.org, llms.txt und technische Grundlagen für KI-Crawler.
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
                        Werden Ihre Patienten von der KI zu Ihnen geschickt?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                        Ich prüfe, wie ChatGPT, Perplexity und Google AI deine Praxis aktuell
                        darstellen - und was du tun kannst, damit die KI dich empfiehlt.
                        Kostenlos, in 48 Stunden.
                    </p>
                    <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose Praxis-Analyse anfragen" className="!py-4 !px-8" />
                </div>
            </div>
        </FadeIn>
    </section>
);

export default function KiSichtbarkeitAerztePage() {
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
                <WhyDifferentSection />
                <FactorsSection />
                <StrategiesSection />
                <PracticeTypesSection />
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
