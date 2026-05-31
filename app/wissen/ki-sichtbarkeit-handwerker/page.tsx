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
    description: 'KI-Sichtbarkeit für Handwerksbetriebe in Hamburg. Echtes Beispiel mit Zahlen (Blitz Hamburg: 5,0 Sterne, 35 Bewertungen, ChatGPT-Empfehlung), die Lead-Portal-Falle und 7 Strategien.',
    image: [
        'https://aiseo.hamburg/photo/wissen_assets/chatgpt_citation.webp',
        'https://aiseo.hamburg/photo/wissen_assets/gbp.webp',
        'https://aiseo.hamburg/photo/wissen_assets/gsc_change_last_30d.webp',
    ],
    author: {
        '@type': 'Person',
        name: 'Vadim Shchepin',
        url: 'https://aiseo.hamburg/ueber-mich',
    },
    publisher: {
        '@type': 'Organization',
        name: 'aiseo.hamburg',
        url: 'https://aiseo.hamburg',
    },
    datePublished: '2026-03-24',
    dateModified: '2026-06-01',
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
            name: 'Empfiehlt ChatGPT wirklich lokale Handwerksbetriebe?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ja. Auf die Frage „Welche Entrümpelungsfirma in Hamburg ist zuverlässig?" nennt ChatGPT konkrete Betriebe, darunter unseren Kunden Blitz Hamburg. Über 400 Millionen Menschen nutzen ChatGPT wöchentlich (OpenAI, Februar 2025), und lokale Dienstleisterfragen gehören zu den häufigsten Anfragen. Die KI nennt pro Anfrage nur 2-3 Betriebe.',
            },
        },
        {
            '@type': 'Question',
            name: 'Was kostet MyHammer im Vergleich zur KI-Empfehlung?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Bei MyHammer ist die Registrierung kostenlos, aber jeder bestätigte Kontakt kostet eine Gebühr. Der Preis pro Lead variiert dynamisch nach Gewerk, Auftragswert, Region und Wettbewerb. Eine öffentliche Preisliste gibt es 2026 nicht. Mehrere Betriebe bewerben sich um dieselbe Anfrage, du zahlst auch ohne Auftrag. Eine KI-Empfehlung kostet keine Lead-Gebühr und nennt keine Konkurrenz.',
            },
        },
        {
            '@type': 'Question',
            name: 'Warum empfiehlt mich die KI nicht?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Der mit Abstand häufigste Grund: kein gepflegtes Google Business Profil und keine gesammelten Bewertungen. Ohne diese Datenbasis hat die KI nichts, worauf sie eine Empfehlung stützen kann. Erst danach kommen fehlende Leistungsseiten, inkonsistente Adressdaten (NAP) und fehlendes Schema.org-Markup.',
            },
        },
        {
            '@type': 'Question',
            name: 'Wie viele Bewertungen brauche ich, damit die KI mich empfiehlt?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Es gibt keine feste Schwelle, aber als Richtwert: mindestens 30 Google-Bewertungen mit 4,5+ Sternen, auf die du auch antwortest. Unser Kunde Blitz Hamburg wird mit 5,0 Sternen aus 35 Bewertungen von ChatGPT genannt. Wichtiger als die reine Zahl ist die Kombination aus Menge, Aktualität und deinen Antworten auf Rezensionen.',
            },
        },
        {
            '@type': 'Question',
            name: 'Wie lange dauert es, bis mein Handwerksbetrieb in der KI auftaucht?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'In der Live-Websuche von ChatGPT und Perplexity wirken Optimierungen innerhalb von Tagen bis Wochen. Eine stabile, wiederkehrende Empfehlung dauert länger: Blitz Hamburg wurde erst einige Monate nach dem Relaunch der Website zitiert. KI-Empfehlungen treffen bislang fast nur Betriebe, die seit über einem Jahr aktiv an ihrer Online-Präsenz arbeiten.',
            },
        },
        {
            '@type': 'Question',
            name: 'Konvertieren KI-Anfragen besser als Portal-Leads?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nach unserer Erfahrung ja. Der Anteil der Neukunden, die direkt aus einer KI-Antwort kommen, ist heute noch klein. Aber diese Anfragen konvertieren mit 20 bis 40 %, weil der Kunde bereits eine Empfehlung erhalten hat und kaufbereit ist. Das ist deutlich höher als bei Portal-Leads, wo mehrere Betriebe um denselben Kunden konkurrieren.',
            },
        },
        {
            '@type': 'Question',
            name: 'Welche Handwerksgewerke werden in Hamburg am häufigsten in der KI gesucht?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Besonders SHK (Sanitär, Heizung, Klima), Elektrik und Dachdecker. Die Anfragen teilen sich in Notfall („Notdienst Heizung Hamburg Sonntag") und geplante Projekte („Badsanierung Hamburg Empfehlung"). Hamburg hat rund 15.000 Handwerksbetriebe (Handwerkskammer Hamburg), aber die KI-Konkurrenz ist in fast jedem Stadtteil noch minimal.',
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
    <section className="relative pt-32 pb-12 md:pt-52 md:pb-16 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
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
                &bdquo;Welcher Elektriker in Hamburg-Eimsbüttel ist zuverlässig?&ldquo; Diese Frage wird
                heute in ChatGPT gestellt, nicht bei den Gelben Seiten. Die KI empfiehlt 2-3 Betriebe.
                Dieser Guide zeigt am echten Fall eines Hamburger Betriebs, wie deiner dazugehört.
            </p>

            <div className="mt-6 text-sm text-gray-500">
                Von <a href="/ueber-mich" className="text-brand-accent hover:underline font-medium">Vadim Shchepin</a>
                <span className="mx-2">·</span>
                Aktualisiert am 1. Juni 2026
            </div>
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
                        <span>Echter Fall: Unser Kunde Blitz Hamburg (5,0 Sterne, 35 Bewertungen) wird von ChatGPT empfohlen, plus 55 Klicks (+55 %) und 6.660 Impressionen (+61 %) in 30 Tagen.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">2.</span>
                        <span>ChatGPT empfiehlt pro Anfrage nur 2-3 Betriebe. Der Rest existiert für den Kunden nicht.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">3.</span>
                        <span>Der häufigste Grund, warum die KI dich nicht empfiehlt: kein gepflegtes Google Business Profil und keine gesammelten Bewertungen.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">4.</span>
                        <span>Lead-Portale wie MyHammer und 11880 funktionieren wie eine Auktion: Du zahlst pro Kontakt, auch ohne Auftrag. Die KI-Empfehlung kostet keine Lead-Gebühr.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">5.</span>
                        <span>KI-Anfragen sind heute noch ein kleiner Kanal, konvertieren aber mit 20 bis 40 %, weil der Kunde schon eine Empfehlung in der Hand hat.</span>
                    </li>
                </ul>
            </div>
        </FadeIn>
    </section>
);

// Proof Section (real client data)
const ProofSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-6">
                Echtes Beispiel: Wie ein Hamburger Betrieb in ChatGPT landet
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-10">
                <p>
                    Statt Theorie ein realer Fall aus unserer Arbeit. Blitz Hamburg ist ein Betrieb für
                    Entrümpelung, Sanierung und Haushaltsauflösung. Nach dem Relaunch der Website und der
                    konsequenten Pflege von Google Business Profil und Bewertungen wird der Betrieb heute
                    von ChatGPT genannt, wenn jemand nach einer zuverlässigen Firma in Hamburg fragt.
                </p>
            </div>

            {/* ChatGPT citation */}
            <figure className="mb-10">
                <img
                    src="/photo/wissen_assets/chatgpt_citation.webp"
                    alt="ChatGPT empfiehlt auf die Frage nach einer zuverlässigen Entrümpelungsfirma in Hamburg konkrete Betriebe, darunter Blitz Hamburg"
                    className="w-full rounded-2xl shadow-lg border border-gray-100"
                    loading="eager"
                />
                <figcaption className="text-sm text-gray-500 mt-3">
                    ChatGPT beantwortet &bdquo;Welche Entrümpelungsfirma in Hamburg ist zuverlässig?&ldquo;
                    mit einer kurzen Liste konkreter Betriebe. Genau diese 2-3 Plätze entscheiden, wen der
                    Kunde anruft.
                </figcaption>
            </figure>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
                {/* GBP */}
                <figure>
                    <img
                        src="/photo/wissen_assets/gbp.webp"
                        alt="Google Business Profil von Blitz Hamburg mit 5,0 Sternen aus 35 Bewertungen und vollständigen Kontaktdaten"
                        className="w-full rounded-2xl shadow-lg border border-gray-100"
                        loading="lazy"
                    />
                    <figcaption className="text-sm text-gray-500 mt-3">
                        Das Fundament: ein vollständiges Google Business Profil mit 5,0 Sternen aus 35
                        Bewertungen, konsistenter Adresse und Öffnungszeiten. Ohne diese Datenbasis hat die
                        KI nichts, worauf sie eine Empfehlung stützt.
                    </figcaption>
                </figure>

                {/* GSC */}
                <figure>
                    <img
                        src="/photo/wissen_assets/gsc_change_last_30d.webp"
                        alt="Google Search Console zeigt 55 Klicks (plus 55 Prozent) und 6.660 Impressionen (plus 61 Prozent) in den letzten 30 Tagen"
                        className="w-full rounded-2xl shadow-lg border border-gray-100"
                        loading="lazy"
                    />
                    <figcaption className="text-sm text-gray-500 mt-3">
                        Google Search Console, letzte 30 Tage: 55 Klicks (+55 %) und 6.660 Impressionen
                        (+61 %). Die optimierten Leistungsseiten ranken bei Null startend nach oben.
                    </figcaption>
                </figure>
            </div>

            {/* Umami */}
            <figure className="mb-10">
                <img
                    src="/photo/wissen_assets/umami_tracked_events_last_30d.webp"
                    alt="Umami-Analytics zeigt 55 erfasste Kontaktaktionen in 30 Tagen, davon 20 Anrufe und 14 Klicks auf Google-Bewertungen"
                    className="w-full rounded-2xl shadow-lg border border-gray-100"
                    loading="lazy"
                />
                <figcaption className="text-sm text-gray-500 mt-3">
                    Was am Ende zählt, sind Kontaktaktionen. Umami erfasste in 30 Tagen 55 davon: 20
                    Anrufe (36 %), 14 Klicks auf die Google-Bewertungen (25 %), 9 WhatsApp-Kontakte (16 %)
                    und 4 Anfragen über den Preisrechner (7 %).
                </figcaption>
            </figure>

            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
                <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">Ehrlich eingeordnet</p>
                <p className="text-lg text-gray-800 leading-relaxed">
                    Die KI-Empfehlung kam nicht über Nacht. Sie stellte sich erst einige Monate nach dem
                    Relaunch ein, als Website, Bewertungen und lokale Signale zusammenpassten. Der Anteil
                    der Anfragen, die heute direkt aus einer KI-Antwort stammen, ist noch klein. Aber genau
                    diese Anfragen konvertieren am besten, weil der Kunde schon mit einer Empfehlung kommt.
                </p>
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
                    &bdquo;Welcher Elektriker in Hamburg-Eimsbüttel ist zuverlässig?&ldquo;
                    &bdquo;Empfiehl mir einen guten Maler in Ottensen.&ldquo;
                    &bdquo;Wer macht Badsanierung in Hamburg-Nord?&ldquo;
                </p>
                <p>
                    Diese Fragen werden heute in ChatGPT getippt, nicht bei den Gelben Seiten und nicht
                    bei MyHammer. Die Nutzerzahlen verschieben sich massiv: OpenAI meldete im Februar 2025
                    über 400 Millionen wöchentliche ChatGPT-Nutzer, ein Plus von 33 % gegenüber Dezember
                    2024. Parallel zeigt der Bitkom: Die Hälfte der deutschen Internetnutzer verwendet
                    zumindest gelegentlich KI-Chats statt klassischer Suchmaschinen (November 2025), und
                    ein Drittel (34 %) nutzt KI mindestens einmal pro Woche.
                </p>
            </div>

            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 my-8 shadow-sm">
                <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">Das Kernproblem</p>
                <p className="text-lg text-gray-800 leading-relaxed">
                    Dein Betrieb lebt von Empfehlungen, aber die KI kennt dich nicht.
                    ChatGPT empfiehlt pro Anfrage nur 2-3 Betriebe. Der Rest wird nicht erwähnt.
                    Für den Kunden existierst du schlicht nicht.
                </p>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Handwerk hat schon immer von Empfehlungen gelebt: vom Nachbarn, vom Kollegen,
                    vom Schwiegervater. Jetzt empfiehlt die KI. Und sie empfiehlt nicht nach Bauchgefühl,
                    sondern nach Daten, die du beeinflussen kannst.
                </p>
            </div>
        </FadeIn>
    </section>
);

// Why the AI does not recommend you
const NotRecommendedSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Der häufigste Grund, warum die KI dich nicht empfiehlt
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Aus der Arbeit mit Handwerksbetrieben gibt es eine Antwort, die fast immer stimmt:
                    kein gepflegtes Google Business Profil und keine gesammelten Bewertungen. Das ist der
                    eine Fehler, der die meisten Betriebe für die KI unsichtbar macht.
                </p>
                <p>
                    Der Grund ist technisch simpel. KI-Systeme empfehlen einen lokalen Betrieb nur, wenn
                    sie eine belastbare Datenbasis finden. Das Google Business Profil mit echten,
                    aktuellen Bewertungen ist diese Basis. Fehlt sie, hat die KI nichts in der Hand und
                    nennt stattdessen den Wettbewerber, der seine Bewertungen pflegt.
                </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 my-8">
                <p className="font-semibold text-black mb-3">Die typische Reihenfolge der Fehler</p>
                <ol className="space-y-2 text-gray-600">
                    <li><span className="text-brand-accent font-bold mr-2">1.</span>Kein oder ungepflegtes Google Business Profil, kaum Bewertungen.</li>
                    <li><span className="text-brand-accent font-bold mr-2">2.</span>Eine einzige Website-Seite für alle Leistungen statt eigener Leistungsseiten.</li>
                    <li><span className="text-brand-accent font-bold mr-2">3.</span>Inkonsistente Adress- und Telefondaten (NAP) über Verzeichnisse hinweg.</li>
                    <li><span className="text-brand-accent font-bold mr-2">4.</span>Kein Schema.org-Markup, sodass die KI Adresse und Leistungen schlecht zuordnet.</li>
                </ol>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
                Die gute Nachricht: Punkt eins lässt sich in wenigen Tagen beheben, und er ist der mit
                Abstand wirksamste Hebel. Bei Blitz Hamburg waren 35 Bewertungen mit 5,0 Sternen das
                Fundament, auf dem alles andere aufbaute.
            </p>
        </FadeIn>
    </section>
);

// Lead portal vs AI section + comparison table
const PortalSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                MyHammer, 11880 und die Lead-Auktion
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Lead-Portale wie MyHammer und 11880 funktionieren wie eine Auktion. Die Registrierung
                    ist kostenlos, aber Geld kostet jeder Kundenkontakt. Bei MyHammer fallen Gebühren nur
                    für einen &bdquo;bestätigten Kontakt&ldquo; an. Der Preis pro Lead ist nicht öffentlich
                    gelistet, sondern wird dynamisch nach Gewerk, Auftragswert, Region und Wettbewerb
                    berechnet. MyHammer Plus ist das kostenpflichtige Premium-Programm darüber hinaus.
                </p>
                <p>
                    In der Praxis heißt das: Mehrere Betriebe bewerben sich um dieselbe Anfrage, du zahlst
                    für den Kontakt, und ob du den Auftrag am Ende bekommst, steht auf einem anderen Blatt.
                    Eine KI-Empfehlung kehrt diese Logik um. Es gibt keine Lead-Gebühr, keinen Bieterkampf,
                    und der Kunde kommt mit einer Empfehlung statt mit drei Vergleichsangeboten.
                </p>
            </div>

            <div className="overflow-x-auto -mx-2 px-2">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b-2 border-gray-200">
                            <th className="py-3 pr-4 font-semibold text-black"></th>
                            <th className="py-3 px-4 font-semibold text-black">Lead-Portal (MyHammer, 11880)</th>
                            <th className="py-3 pl-4 font-semibold text-brand-accent">KI-Empfehlung</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 font-medium text-gray-800">Kosten</td>
                            <td className="py-3 px-4">Gebühr pro bestätigtem Kontakt, auch ohne Auftrag</td>
                            <td className="py-3 pl-4">Keine Lead-Gebühr</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 font-medium text-gray-800">Wettbewerb</td>
                            <td className="py-3 px-4">Mehrere Betriebe bieten auf dieselbe Anfrage</td>
                            <td className="py-3 pl-4">KI nennt nur 2-3 Betriebe, kein Bieterkampf</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 font-medium text-gray-800">Preistransparenz</td>
                            <td className="py-3 px-4">Keine öffentliche Preisliste, dynamisch je Lead</td>
                            <td className="py-3 pl-4">Entfällt</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 font-medium text-gray-800">Vertrauen</td>
                            <td className="py-3 px-4">Anzeige im Auktionsumfeld</td>
                            <td className="py-3 pl-4">Persönlich wirkende Empfehlung der KI</td>
                        </tr>
                        <tr>
                            <td className="py-3 pr-4 font-medium text-gray-800">Kundenbeziehung</td>
                            <td className="py-3 px-4">Plattform sitzt zwischen dir und dem Kunden</td>
                            <td className="py-3 pl-4">Kunde kommt direkt zu dir</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </FadeIn>
    </section>
);

// Unique asset: sample prompt table per Gewerk
const PromptTableSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Was Kunden tippen: Beispiel-Prompts pro Gewerk
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Kunden formulieren zwei Arten von Anfragen: dringende Notfälle und geplante Projekte.
                    Beide brauchen unterschiedliche Inhalte auf deiner Website. Eine Notdienst-Seite
                    gewinnt die Notfall-Anfrage, eine Leistungs- und Preisseite die geplante Anfrage.
                </p>
            </div>

            <div className="overflow-x-auto -mx-2 px-2">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                    <thead>
                        <tr className="border-b-2 border-gray-200">
                            <th className="py-3 pr-4 font-semibold text-black">Gewerk</th>
                            <th className="py-3 px-4 font-semibold text-brand-orange">Notfall-Anfrage</th>
                            <th className="py-3 pl-4 font-semibold text-brand-accent">Geplante Anfrage</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 font-medium text-gray-800">SHK</td>
                            <td className="py-3 px-4">&bdquo;Notdienst Heizung Hamburg Sonntag&ldquo;</td>
                            <td className="py-3 pl-4">&bdquo;Badsanierung Hamburg Empfehlung&ldquo;</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 font-medium text-gray-800">Elektriker</td>
                            <td className="py-3 px-4">&bdquo;Stromausfall Elektriker Notdienst Hamburg&ldquo;</td>
                            <td className="py-3 pl-4">&bdquo;Wallbox Installation Hamburg Kosten&ldquo;</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 font-medium text-gray-800">Dachdecker</td>
                            <td className="py-3 px-4">&bdquo;Dachdecker Notdienst Sturmschaden Hamburg&ldquo;</td>
                            <td className="py-3 pl-4">&bdquo;Dachsanierung Hamburg Förderung&ldquo;</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 font-medium text-gray-800">Maler</td>
                            <td className="py-3 px-4">&bdquo;Wasserschaden Wand streichen Hamburg&ldquo;</td>
                            <td className="py-3 pl-4">&bdquo;3-Zimmer-Wohnung streichen Hamburg Preis&ldquo;</td>
                        </tr>
                        <tr>
                            <td className="py-3 pr-4 font-medium text-gray-800">Tischler</td>
                            <td className="py-3 px-4">(kaum Notfälle)</td>
                            <td className="py-3 pl-4">&bdquo;Einbauschrank nach Maß Hamburg&ldquo;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-gray-600 mt-4 text-sm">
                Jede dieser Anfragen ist ein eigener Inhalt auf deiner Website. Wer für beide Spalten eine
                passende Seite hat, deckt sowohl die dringenden als auch die hochwertigen Aufträge ab.
            </p>
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
                    grundlegend anders, und das ist deine Chance.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Kaum KI-Konkurrenz online</h3>
                    <p className="text-gray-600 text-base">
                        Viele Handwerksbetriebe haben Websites aus 2015: eine Seite, keine Struktur, kaum
                        Texte. Für KI-Systeme gibt es fast nichts auszuwerten. Wer jetzt optimiert, hat das
                        Feld praktisch für sich allein.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Schlechte Websites als Normalzustand</h3>
                    <p className="text-gray-600 text-base">
                        Eine einzelne Seite mit &bdquo;Über uns&ldquo;, ein paar Leistungsstichworten und
                        einer Telefonnummer ist der Standard im Handwerk. Die Messlatte für KI-Sichtbarkeit
                        ist niedrig, schon Grundlagen machen den Unterschied.
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
                    <h3 className="font-semibold text-black text-lg mb-3">Lokale Suche und KI passen perfekt zusammen</h3>
                    <p className="text-gray-600 text-base">
                        Handwerk ist per Definition lokal, und lokale Empfehlungsfragen sind einer der
                        stärksten KI-Anwendungsfälle. &bdquo;Welcher Dachdecker in meiner Nähe?&ldquo; ist
                        die ideale KI-Frage und dein idealer Kundenkanal.
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
                    KI-Systeme bewerten deinen Betrieb nicht nach Bauchgefühl, sondern nach konkreten
                    Signalen. Für Handwerksbetriebe sind diese fünf entscheidend.
                </p>
            </div>

            <div className="space-y-6">
                {[
                    {
                        title: 'Google-Bewertungen: Menge, Qualität und Antworten',
                        desc: 'Dein Wettbewerber hat 50 Google-Bewertungen, du 3. Wer wird empfohlen? Die KI wertet nicht nur die Sterne aus, sondern auch den Inhalt der Bewertungen und ob du als Betrieb auf Rezensionen antwortest. Ein Betrieb mit 30 Bewertungen und durchdachten Antworten schlägt einen mit 80 unbeantworteten. Blitz Hamburg startet hier mit 5,0 Sternen aus 35 Bewertungen.',
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
                        text: 'Drucke einen QR-Code auf jede Rechnung, der direkt zur Google-Bewertung führt. Bitte zufriedene Kunden persönlich um eine Bewertung. Antworte auf jede Rezension innerhalb von 48 Stunden, auch auf negative. Die KI wertet das Antwortverhalten als Qualitätssignal. Ziel: mindestens 30 Bewertungen mit 4,5+ Sternen.',
                    },
                    {
                        num: '04',
                        title: 'Referenzprojekte mit Fotos dokumentieren',
                        text: 'Fotografiere jedes Projekt: vorher, während, nachher. Erstelle für die besten Projekte eigene Unterseiten mit Beschreibung, Fotos, Standort und Kundenstimme. „Komplettsanierung eines Altbau-Badezimmers in Hamburg-Winterhude" gibt der KI exakt die Information, die sie für eine Empfehlung braucht.',
                    },
                    {
                        num: '05',
                        title: 'FAQ zu häufigen Kundenfragen erstellen',
                        text: 'Welche Fragen stellen Kunden am Telefon? Genau diese Fragen stellen sie auch der KI. „Was kostet ein neues Bad?" „Wie lange dauert eine Heizungsmodernisierung?" „Brauche ich eine Genehmigung für...?" Jede FAQ mit konkreter Antwort ist ein potenzieller KI-Treffer. 15-20 Fragen sind ein guter Start.',
                    },
                    {
                        num: '06',
                        title: 'Schema.org LocalBusiness + Service Markup einsetzen',
                        text: 'Strukturierte Daten helfen der KI, deinen Betrieb einzuordnen. LocalBusiness-Schema mit Adresse, Öffnungszeiten, Bewertungen. Service-Schema für jede Leistung. Geo-Koordinaten für dein Einzugsgebiet. Das ist technisch simpel, aber im Handwerk machen es weniger als 5 % der Betriebe.',
                    },
                    {
                        num: '07',
                        title: 'Präsenz auf Handwerksportalen pflegen',
                        text: 'MyHammer, Gelbe Seiten, Das Örtliche, Check24, das Handwerkerportal der Handwerkskammer: überall mit identischen Daten vertreten sein. Nicht wegen des Traffics dieser Portale, sondern weil die KI diese Quellen als Vertrauenssignale auswertet. Konsistente Einträge auf 5+ Plattformen stärken dein KI-Profil enorm.',
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
                        pain: 'Kunden recherchieren Wärmepumpen, Badsanierung und Heizungstausch intensiv online. Hohe Auftragswerte (5.000 bis 30.000 Euro) führen zu langer Entscheidungsphase.',
                        chance: 'Wärmepumpen-Beratung, Fördermittel-FAQ und Energieeffizienz-Content sind perfekte KI-Themen. Wer hier Expertise zeigt, wird bei Fragen wie „Welcher Heizungsbauer in Hamburg kennt sich mit Wärmepumpen aus?" empfohlen.',
                    },
                    {
                        title: 'Elektriker',
                        pain: 'Smart-Home, Wallboxen, PV-Anlagen: alles Themen, zu denen Kunden die KI befragen. Gleichzeitig haben die meisten Elektro-Betriebe kaum Online-Präsenz.',
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
                        pain: 'Höchste Auftragswerte im Handwerk (10.000 bis 50.000 Euro). Kunden holen mehrere Angebote ein und recherchieren intensiv. Versicherungsfälle und Sturmschäden erzeugen Dringlichkeit.',
                        chance: 'Notdienst-Seiten, Materialvergleiche (Ziegel, Schiefer, Blech), Fördermittel für energetische Dachsanierung. Bei Sturmschäden fragen Kunden die KI: „Dachdecker Notdienst Hamburg". Wer dort auftaucht, bekommt den Auftrag.',
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
                    Die Handwerkskammer Hamburg vertritt rund 15.000 Betriebe mit knapp 106.000
                    Beschäftigten. Die lokale Handwerkslandschaft ist geprägt von kleinen und
                    mittelständischen Betrieben mit 1 bis 20 Mitarbeitern, genau die Zielgruppe, die von
                    KI-Sichtbarkeit am meisten profitiert.
                </p>
                <p>
                    Die Stadtteilstruktur Hamburgs ist für KI-SEO ein Geschenk. Jeder Stadtteil ist
                    ein eigenes Keyword-Cluster: &bdquo;Elektriker Hamburg-Eimsbüttel&ldquo;,
                    &bdquo;Klempner Hamburg-Altona&ldquo;, &bdquo;Maler Hamburg-Wandsbek&ldquo;.
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
                    Jeder Stadtteil plus Gewerk ist ein eigener Keyword-Cluster.
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
            q: 'Empfiehlt ChatGPT wirklich lokale Handwerksbetriebe?',
            a: 'Ja. Auf die Frage „Welche Entrümpelungsfirma in Hamburg ist zuverlässig?" nennt ChatGPT konkrete Betriebe, darunter unseren Kunden Blitz Hamburg. Über 400 Millionen Menschen nutzen ChatGPT wöchentlich (OpenAI, Februar 2025), und lokale Dienstleisterfragen gehören zu den häufigsten Anfragen. Die KI nennt pro Anfrage nur 2-3 Betriebe.',
        },
        {
            q: 'Was kostet MyHammer im Vergleich zur KI-Empfehlung?',
            a: 'Bei MyHammer ist die Registrierung kostenlos, aber jeder bestätigte Kontakt kostet eine Gebühr. Der Preis pro Lead variiert dynamisch nach Gewerk, Auftragswert, Region und Wettbewerb. Eine öffentliche Preisliste gibt es 2026 nicht. Mehrere Betriebe bewerben sich um dieselbe Anfrage, du zahlst auch ohne Auftrag. Eine KI-Empfehlung kostet keine Lead-Gebühr und nennt keine Konkurrenz.',
        },
        {
            q: 'Warum empfiehlt mich die KI nicht?',
            a: 'Der mit Abstand häufigste Grund: kein gepflegtes Google Business Profil und keine gesammelten Bewertungen. Ohne diese Datenbasis hat die KI nichts, worauf sie eine Empfehlung stützen kann. Erst danach kommen fehlende Leistungsseiten, inkonsistente Adressdaten (NAP) und fehlendes Schema.org-Markup.',
        },
        {
            q: 'Wie viele Bewertungen brauche ich, damit die KI mich empfiehlt?',
            a: 'Es gibt keine feste Schwelle, aber als Richtwert: mindestens 30 Google-Bewertungen mit 4,5+ Sternen, auf die du auch antwortest. Blitz Hamburg wird mit 5,0 Sternen aus 35 Bewertungen von ChatGPT genannt. Wichtiger als die reine Zahl ist die Kombination aus Menge, Aktualität und deinen Antworten auf Rezensionen.',
        },
        {
            q: 'Wie lange dauert es, bis mein Handwerksbetrieb in der KI auftaucht?',
            a: 'In der Live-Websuche von ChatGPT und Perplexity wirken Optimierungen innerhalb von Tagen bis Wochen. Eine stabile, wiederkehrende Empfehlung dauert länger: Blitz Hamburg wurde erst einige Monate nach dem Relaunch der Website zitiert. KI-Empfehlungen treffen bislang fast nur Betriebe, die seit über einem Jahr aktiv an ihrer Online-Präsenz arbeiten.',
        },
        {
            q: 'Konvertieren KI-Anfragen besser als Portal-Leads?',
            a: 'Nach unserer Erfahrung ja. Der Anteil der Neukunden, die direkt aus einer KI-Antwort kommen, ist heute noch klein. Aber diese Anfragen konvertieren mit 20 bis 40 %, weil der Kunde bereits eine Empfehlung erhalten hat und kaufbereit ist. Das ist deutlich höher als bei Portal-Leads, wo mehrere Betriebe um denselben Kunden konkurrieren.',
        },
        {
            q: 'Welche Handwerksgewerke werden in Hamburg am häufigsten in der KI gesucht?',
            a: 'Besonders SHK (Sanitär, Heizung, Klima), Elektrik und Dachdecker. Die Anfragen teilen sich in Notfall („Notdienst Heizung Hamburg Sonntag") und geplante Projekte („Badsanierung Hamburg Empfehlung"). Hamburg hat rund 15.000 Handwerksbetriebe (Handwerkskammer Hamburg), aber die KI-Konkurrenz ist in fast jedem Stadtteil noch minimal.',
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
                            href="https://www.demandsage.com/chatgpt-statistics/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            DemandSage: ChatGPT-Nutzerstatistik (OpenAI: 400 Mio. wöchentliche Nutzer, Februar 2025)
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.bitkom.org/Presse/Presseinformation/Internet-Suche-Wandel-Haelfte-nutzt-KI-Chats"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Bitkom (November 2025): Internet-Suche im Wandel, die Hälfte nutzt bereits KI-Chats
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.bitkom.org/Presse/Presseinformation/Ein-Drittel-nutzt-KI-mindestens-einmal-pro-Woche"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Bitkom: Ein Drittel nutzt KI mindestens einmal pro Woche (34 %)
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.myhammer.de/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            MyHammer: Gebührenmodell &bdquo;Bestätigte Kontakte&ldquo; für Auftragnehmer
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.hwk-hamburg.de/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Handwerkskammer Hamburg: rund 15.000 Betriebe, knapp 106.000 Beschäftigte
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
                    href="/wissen/case-study-blitz-hamburg"
                    className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
                >
                    <p className="font-semibold text-black group-hover:text-brand-accent transition-colors mb-1">
                        Fallstudie: Blitz Hamburg
                    </p>
                    <p className="text-sm text-gray-500">
                        Der vollständige Fall hinter den Zahlen auf dieser Seite.
                    </p>
                </a>
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
                        Schema.org, robots.txt und Crawling: die technische Seite der KI-Optimierung.
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
                <ProofSection />
                <ProblemSection />
                <NotRecommendedSection />
                <PortalSection />
                <PromptTableSection />
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
