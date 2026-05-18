'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Sichtbarkeit in Claude AI: So wird dein Unternehmen empfohlen',
    description: 'Wie Claude AI Informationen verarbeitet, welche Faktoren Empfehlungen bestimmen und wie du deine Sichtbarkeit in Anthropics KI-Assistenten gezielt steuerst.',
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
        '@id': 'https://aiseo.hamburg/wissen/sichtbarkeit-in-claude',
    },
    inLanguage: 'de',
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Wie werde ich mit meinem Unternehmen in Claude AI sichtbar?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Claude AI bezieht sein Wissen aus Trainingsdaten. Dein Unternehmen muss auf autoritativen Quellen wie Wikipedia, Fachmedien, Branchenverzeichnissen und Bewertungsplattformen konsistent erwähnt werden. Anders als ChatGPT hat Claude keine Live-Websuche - das Trainingscorpus ist entscheidend.',
            },
        },
        {
            '@type': 'Question',
            name: 'Hat Claude AI eine Live-Websuche wie ChatGPT?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nein. Claude arbeitet primär mit seinem Trainingskorpus und hat keine integrierte Live-Websuche wie ChatGPT (via Bing) oder Perplexity. Das bedeutet: Deine Sichtbarkeit in Claude hängt vollständig davon ab, ob dein Unternehmen in den Trainingsdaten repräsentiert ist.',
            },
        },
        {
            '@type': 'Question',
            name: 'Was ist der Unterschied zwischen Claude und ChatGPT für die Unternehmenssichtbarkeit?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'ChatGPT nutzt Trainingsdaten plus Bing-Live-Suche. Claude stützt sich primär auf sein Trainingskorpus. Claude legt besonderen Wert auf faktische Genauigkeit durch Constitutional AI und bevorzugt wissenschaftliche und autoritative Quellen. Bing-SEO ist für Claude irrelevant.',
            },
        },
        {
            '@type': 'Question',
            name: 'Kann ich beeinflussen, was Claude ueber mein Unternehmen sagt?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ja, indirekt. Du steuerst die Quellen, die in Claudes Trainingsdaten einfließen: Presseartikel, Fachartikel, Wikipedia-Erwähnungen, Branchenverzeichnisse und deine eigene Website. Je konsistenter und autoritativer diese Quellen sind, desto besser stellt Claude dein Unternehmen dar.',
            },
        },
        {
            '@type': 'Question',
            name: 'Was ist llms.txt und hilft es bei Claude-Sichtbarkeit?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'llms.txt ist ein Standard-Format, das LLMs maschinenlesbare Informationen über dein Unternehmen liefert. Es ergänzt robots.txt und hilft KI-Systemen wie Claude, strukturierte und korrekte Fakten über dein Unternehmen zu erfassen. Es ist kein Ranking-Faktor, aber ein Hygiene-Signal.',
            },
        },
        {
            '@type': 'Question',
            name: 'Wie lange dauert es, bis Aenderungen in Claude sichtbar werden?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Da Claude keine Live-Websuche hat, werden Änderungen erst beim nächsten Modell-Update sichtbar. Das kann Wochen bis Monate dauern. Deshalb ist eine langfristige Strategie mit konsistenten Erwähnungen auf autoritativen Quellen wichtiger als schnelle taktische Maßnahmen.',
            },
        },
        {
            '@type': 'Question',
            name: 'Ist Claude relevant für Hamburger Unternehmen?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ja, zunehmend. Claude wird besonders in professionellen und Enterprise-Kontexten genutzt. Hamburger Unternehmen, die im B2B-Bereich tätig sind oder anspruchsvolle Dienstleistungen anbieten, sollten Claude-Sichtbarkeit als Teil ihrer KI-SEO-Strategie betrachten.',
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
            name: 'Sichtbarkeit in Claude',
            item: 'https://aiseo.hamburg/wissen/sichtbarkeit-in-claude',
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
                <span className="text-gray-600">Sichtbarkeit in Claude</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
                Sichtbarkeit in Claude AI:<br />
                So wird dein Unternehmen empfohlen
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
                Claude von Anthropic ist der am schnellsten wachsende KI-Assistent im professionellen
                Umfeld. Wenn Entscheider nach Dienstleistern fragen, empfiehlt Claude ein bis drei
                Unternehmen &mdash; ohne Anzeigen, ohne Rankings. Dieser Guide zeigt dir, wie Claudes
                Empfehlungssystem funktioniert und wie du dort reinkommst.
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
                        <span>Claude hat keine Live-Websuche. Deine Sichtbarkeit hängt komplett von den Trainingsdaten ab.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">2.</span>
                        <span>Anthropics Constitutional AI bevorzugt faktenbasierte, autoritative Quellen — Qualität schlägt Quantität.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">3.</span>
                        <span>Wikipedia, Fachmedien und wissenschaftliche Quellen haben bei Claude überproportionalen Einfluss.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">4.</span>
                        <span>Claude wird vor allem von Professionals und Enterprises genutzt — deine B2B-Zielgruppe sitzt hier.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">5.</span>
                        <span>Bing-SEO ist für Claude irrelevant. Was zählt: Quellen-Autorität und konsistente Markensignale.</span>
                    </li>
                </ul>
            </div>
        </FadeIn>
    </section>
);

// Why Claude Matters Section
const WhyClaudeSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Warum Claude AI für dein Unternehmen relevant ist
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Anthropic, das Unternehmen hinter Claude, gehört zu den am schnellsten wachsenden
                    KI-Firmen weltweit. Claude hat sich innerhalb von zwei Jahren als ernstzunehmende Alternative
                    zu ChatGPT etabliert — besonders im professionellen und Enterprise-Bereich.
                </p>
                <p>
                    Der Unterschied zu ChatGPT: Claude wird überproportional von Professionals genutzt.
                    Entwickler, Berater, Analysten und Entscheider setzen Claude ein, weil das Modell
                    für längere, analytischere Aufgaben optimiert ist. Wenn ein CTO fragt
                    „Welche Agentur in Hamburg macht gutes AI SEO?", dann ist die Wahrscheinlichkeit
                    hoch, dass er Claude nutzt — nicht ChatGPT.
                </p>
                <p>
                    Amazon hat über 4 Milliarden Dollar in Anthropic investiert. Google ebenfalls Milliarden.
                    Claude ist in AWS Bedrock integriert und wird von Tausenden Enterprise-Kunden genutzt.
                    Das ist kein Nischenprodukt — das ist Infrastruktur.
                </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
                    <p className="text-3xl font-semibold text-black mb-1">Enterprise</p>
                    <p className="text-sm text-gray-500">Fokus von Anthropic — B2B-Zielgruppe</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
                    <p className="text-3xl font-semibold text-black mb-1">200K</p>
                    <p className="text-sm text-gray-500">Token Context Window</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
                    <p className="text-3xl font-semibold text-black mb-1">$8 Mrd.+</p>
                    <p className="text-sm text-gray-500">Investitionen in Anthropic</p>
                </div>
            </div>
        </FadeIn>
    </section>
);

// Pain Section
const PainSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Das Claude-Problem: Du weißt nicht, was Claude über dich sagt
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Du optimierst für Google, aber Claude ignoriert dich komplett. Während du
                    deine Rankings in der Google Search Console trackst, empfiehlt Claude deinen
                    Wettbewerber — und du bekommst es nicht einmal mit.
                </p>
                <p>
                    Es gibt keine Claude Search Console. Kein Dashboard, keine Impressions, keine Klickzahlen.
                    Du fliegst komplett blind. Und das ist gef&auml;hrlich, denn:
                </p>
            </div>

            <div className="space-y-4 mb-8">
                {[
                    'Deine Konkurrenz wird von Claude empfohlen \u2013 du nicht',
                    'Claude halluziniert m\u00F6glicherweise falsche Infos \u00FCber dein Unternehmen',
                    'Kein Dashboard, keine Kontrolle \u2013 du fliegst komplett blind',
                    'Jede Claude-Empfehlung, die nicht du bist, ist ein verlorener Lead',
                ].map((pain, i) => (
                    <FadeIn key={i} delay={i * 50}>
                        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-3">
                            <span className="text-red-400 font-bold text-xl leading-none mt-0.5 flex-shrink-0">&#10007;</span>
                            <p className="text-gray-700 font-medium">{pain}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Das Kernproblem: Claude hat keine Live-Websuche. Es kann deine Website nicht in
                    Echtzeit crawlen. Alles, was Claude &uuml;ber dich wei&szlig;, stammt aus den
                    Trainingsdaten. Wenn du dort nicht vorkommst &mdash; oder schlimmer, mit falschen
                    Informationen vorkommst &mdash; hast du ein ernstes Problem.
                </p>
            </div>
        </FadeIn>
    </section>
);

// How Claude Works Section
const HowClaudeWorksSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Wie Claude Informationen verarbeitet
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Claude funktioniert fundamental anders als ChatGPT oder Perplexity. Das zu verstehen
                    ist der Schl&uuml;ssel zu deiner Sichtbarkeitsstrategie.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Trainingskorpus statt Live-Suche</h3>
                    <p className="text-gray-600 text-base">
                        Claude arbeitet prim&auml;r mit seinem Trainingskorpus. Es gibt keinen
                        Bing-Zugriff, keine Google-Suche. Was Claude wei&szlig;, stammt aus den Daten,
                        mit denen es trainiert wurde. Das sind Webseiten, B&uuml;cher, wissenschaftliche
                        Paper und Artikel &mdash; eingefroren zum Trainingszeitpunkt.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Constitutional AI</h3>
                    <p className="text-gray-600 text-base">
                        Anthropic trainiert Claude mit einem besonderen Ansatz: Constitutional AI.
                        Das Modell ist darauf optimiert, ehrlich, hilfreich und harmlos zu sein.
                        In der Praxis bedeutet das: Claude ist vorsichtiger bei Empfehlungen,
                        bevorzugt faktenbasierte Aussagen und markiert Unsicherheiten explizit.
                    </p>
                </div>
            </div>

            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 mb-8 shadow-sm">
                <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">Entscheidender Unterschied</p>
                <p className="text-gray-700 leading-relaxed">
                    ChatGPT kann deine Website in Echtzeit &uuml;ber Bing finden. Claude nicht. Bei Claude
                    musst du in den Trainingsdaten sein &mdash; das hei&szlig;t, du musst auf Quellen pr&auml;sent sein,
                    die Anthropic f&uuml;r das Training nutzt. Das sind prim&auml;r hochwertige, &ouml;ffentlich
                    zug&auml;ngliche Webseiten mit hoher Autorit&auml;t.
                </p>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Claudes Knowledge Cutoff bedeutet: Es gibt ein Datum, nach dem Claude nichts mehr wei&szlig;.
                    Neue Unternehmen, die erst nach dem Cutoff online pr&auml;sent wurden, existieren f&uuml;r
                    Claude schlicht nicht. Bestehende Unternehmen, die ihre Online-Pr&auml;senz nach dem Cutoff
                    massiv verbessert haben, profitieren davon erst beim n&auml;chsten Modell-Update.
                </p>
                <p>
                    Das macht langfristige, konsistente Pr&auml;senz auf autoritativen Quellen zum
                    wichtigsten Faktor f&uuml;r Claude-Sichtbarkeit. Einmal-Aktionen bringen wenig.
                    Du brauchst ein stabiles Fundament, das bei jedem Trainingsupdate verf&uuml;gbar ist.
                </p>
            </div>
        </FadeIn>
    </section>
);

// Factors Section
const FactorsSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                5 Faktoren, die Claude-Empfehlungen beeinflussen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Anthropic ver&ouml;ffentlicht keine offizielle Liste von Ranking-Faktoren. Aber aus
                    der Architektur von Claude, Anthropics Forschungspapern und systematischen Tests
                    lassen sich f&uuml;nf klare Einflussfaktoren ableiten.
                </p>
            </div>

            <div className="space-y-6">
                {[
                    {
                        num: '01',
                        title: 'Autoritative Quellen',
                        desc: 'Claude gewichtet Informationen aus anerkannten Quellen deutlich st\u00E4rker. Wikipedia-Eintr\u00E4ge, Artikel in Fachmedien, wissenschaftliche Publikationen und Eintr\u00E4ge in etablierten Verzeichnissen bilden das R\u00FCckgrat von Claudes Wissen. Wenn dein Unternehmen nur auf der eigenen Website erw\u00E4hnt wird, reicht das nicht.',
                    },
                    {
                        num: '02',
                        title: 'Konsistente Markensignale',
                        desc: 'Claude cross-referenziert Informationen aus dem Trainingskorpus. Wenn verschiedene Quellen unterschiedliche Dinge \u00FCber dein Unternehmen sagen \u2013 verschiedene Adressen, verschiedene Leistungsbeschreibungen, widersp\u00FCchliche Gr\u00FCndungsdaten \u2013 wird Claude unsicher und empfiehlt lieber ein Unternehmen, bei dem alle Quellen \u00FCbereinstimmen.',
                    },
                    {
                        num: '03',
                        title: 'Strukturierte, faktenbasierte Inhalte',
                        desc: 'Constitutional AI bevorzugt Fakten. Claude empfiehlt eher ein Unternehmen, das seine Leistungen klar und faktenbasiert beschreibt, als eines, das mit vagen Marketing-Floskeln arbeitet. Konkrete Zahlen, Fallstudien und dokumentierte Ergebnisse signalisieren Claude Vertrauensw\u00FCrdigkeit.',
                    },
                    {
                        num: '04',
                        title: 'E-E-A-T-Signale',
                        desc: 'Experience, Expertise, Authoritativeness, Trustworthiness \u2013 was f\u00FCr Google gilt, gilt in verst\u00E4rktem Ma\u00DFe f\u00FCr Claude. Autorenprofile, Fachpublikationen, Zertifizierungen, Mitgliedschaften in Fachverb\u00E4nden und Vortragst\u00E4tigkeiten erh\u00F6hen die Wahrscheinlichkeit, dass Claude dich als vertrauensw\u00FCrdige Quelle einstuft.',
                    },
                    {
                        num: '05',
                        title: 'Faktische Genauigkeit',
                        desc: 'Claude ist darauf trainiert, faktisch korrekte Antworten zu geben. Unternehmen, deren \u00F6ffentliche Informationen nachweisbar korrekt, aktuell und widerspruchsfrei sind, werden bevorzugt. Veraltete Angaben, falsche Telefonnummern oder inkonsistente \u00D6ffnungszeiten k\u00F6nnen dazu f\u00FChren, dass Claude dich komplett ignoriert.',
                    },
                ].map((factor, i) => (
                    <FadeIn key={i} delay={i * 50}>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="text-brand-accent font-bold text-sm mt-1 flex-shrink-0 w-6">{factor.num}</span>
                                <div>
                                    <h3 className="font-semibold text-black text-lg mb-2">{factor.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{factor.desc}</p>
                                </div>
                            </div>
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
                7 Strategien f&uuml;r Claude-Sichtbarkeit
            </h2>
            <div className="space-y-8">
                {[
                    {
                        num: '01',
                        title: 'Werde auf Wikipedia und in autoritativen Medien erw\u00E4hnt',
                        text: 'Wikipedia ist f\u00FCr Claude eine der wichtigsten Quellen. Ein eigener Wikipedia-Eintrag ist ideal, aber auch Erw\u00E4hnungen in bestehenden Artikeln helfen. Parallel dazu: Gastbeitr\u00E4ge in Fachmedien, Interviews in Branchenmagazinen, Erw\u00E4hnungen in Handelsblatt, Manager Magazin oder branchenspezifischen Portalen. Claude gewichtet redaktionelle Erw\u00E4hnungen deutlich st\u00E4rker als Werbeformate.',
                    },
                    {
                        num: '02',
                        title: 'Baue konsistente NAP-Daten \u00FCber alle Verzeichnisse auf',
                        text: 'Name, Adresse, Telefonnummer \u2013 \u00FCberall identisch. Claude gleicht Informationen aus seinem Trainingskorpus ab. Wenn deine Website \u201eMustermann GmbH\u201C sagt, Das \u00D6rtliche \u201EFirma Mustermann\u201C listet und ProvenExpert \u201EMustermann Digital\u201C zeigt, wird Claude unsicher. Pr\u00FCfe alle Verzeichniseintr\u00E4ge: Gelbe Seiten, Das \u00D6rtliche, WLW, Yelp, ProvenExpert, Google Business Profile, LinkedIn.',
                    },
                    {
                        num: '03',
                        title: 'Erstelle strukturierte FAQ-Inhalte auf deiner Website',
                        text: 'Claude beantwortet Fragen. Deine Website muss Fragen beantworten \u2013 strukturiert, direkt, faktenbasiert. Erstelle umfangreiche FAQ-Seiten, die typische Nutzer-Prompts aufgreifen. Nutze Schema.org FAQPage-Markup. Beantworte jede Frage in den ersten zwei S\u00E4tzen direkt und liefere danach Details. Claude bevorzugt Quellen, die ohne Umschweife informieren.',
                    },
                    {
                        num: '04',
                        title: 'Implementiere llms.txt auf deiner Website',
                        text: 'llms.txt ist ein offener Standard, der KI-Systemen maschinenlesbare Informationen \u00FCber dein Unternehmen liefert. Es erg\u00E4nzt robots.txt und sitemap.xml. Beschreibe in llms.txt dein Unternehmen, deine Leistungen, dein Team und deine Kontaktdaten in einem Format, das LLMs optimal verarbeiten k\u00F6nnen. Noch ist llms.txt kein offizieller Standard, aber ein starkes Signal f\u00FCr KI-Readiness.',
                    },
                    {
                        num: '05',
                        title: 'Investiere in Pressearbeit und Earned Media',
                        text: 'Redaktionelle Erw\u00E4hnungen in unabh\u00E4ngigen Medien sind f\u00FCr Claude Gold wert. Pressemitteilungen allein reichen nicht \u2013 es m\u00FCssen echte redaktionelle Beitr\u00E4ge sein. Positioniere dich als Experte in deiner Branche, biete Journalisten Daten und Insights an, kommentiere Branchentrends. Jede Erw\u00E4hnung auf einem Medium, das Anthropic f\u00FCrs Training nutzt, erh\u00F6ht deine Claude-Sichtbarkeit.',
                    },
                    {
                        num: '06',
                        title: 'Produziere akademische und Experten-Inhalte',
                        text: 'Claude ist f\u00FCr analytische Aufgaben optimiert und bevorzugt wissenschaftlich fundierte Inhalte. White Papers, Studien, Forschungsberichte, Datenanalysen und Fachvortr\u00E4ge st\u00E4rken deine Position im Trainingskorpus. Wenn du eine Studie zu deinem Fachgebiet ver\u00F6ffentlichst und sie von Fachmedien aufgegriffen wird, ist das ein doppelter Gewinn f\u00FCr die Claude-Sichtbarkeit.',
                    },
                    {
                        num: '07',
                        title: 'Optimiere die technische Qualit\u00E4t deiner Dokumentation',
                        text: 'Claude wird h\u00E4ufig f\u00FCr technische Recherche genutzt. Saubere, gut strukturierte Dokumentation \u2013 API-Docs, technische Guides, Implementierungsanleitungen \u2013 signalisiert Professionalit\u00E4t. Nutze klare \u00DCberschriften-Hierarchien, Code-Beispiele, Schema.org-Markup und eine logische Seitenstruktur. ClaudeBot (Anthropics Crawler) muss deine Seiten problemlos crawlen k\u00F6nnen.',
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

// Comparison Table Section
const ComparisonSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Claude vs ChatGPT vs Perplexity: Unterschiede f&uuml;r Unternehmen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Jedes KI-System funktioniert anders. Was f&uuml;r ChatGPT funktioniert, kann bei
                    Claude wirkungslos sein. Diese Tabelle zeigt die entscheidenden Unterschiede.
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-100 rounded-2xl overflow-hidden text-sm">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                            <th className="text-left p-4 font-semibold text-black">Kriterium</th>
                            <th className="text-left p-4 font-semibold text-black">Claude</th>
                            <th className="text-left p-4 font-semibold text-black">ChatGPT</th>
                            <th className="text-left p-4 font-semibold text-black">Perplexity</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr>
                            <td className="p-4 font-medium text-gray-700">Datenquelle</td>
                            <td className="p-4 text-gray-600">Trainingskorpus</td>
                            <td className="p-4 text-gray-600">Training + Bing</td>
                            <td className="p-4 text-gray-600">Live-Websuche</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-gray-700">Live-Websuche</td>
                            <td className="p-4 text-gray-600">Nein</td>
                            <td className="p-4 text-gray-600">Ja (Bing)</td>
                            <td className="p-4 text-gray-600">Ja (eigener Index)</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-gray-700">Zielgruppe</td>
                            <td className="p-4 text-gray-600">Professionals, Enterprise</td>
                            <td className="p-4 text-gray-600">Breites Publikum</td>
                            <td className="p-4 text-gray-600">Recherche-orientiert</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-gray-700">Quellenangaben</td>
                            <td className="p-4 text-gray-600">Selten, auf Anfrage</td>
                            <td className="p-4 text-gray-600">Bei Websuche ja</td>
                            <td className="p-4 text-gray-600">Immer mit Quellen</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-gray-700">Wichtigster Hebel</td>
                            <td className="p-4 text-gray-600">Autoritative Quellen</td>
                            <td className="p-4 text-gray-600">Bing-SEO + Mentions</td>
                            <td className="p-4 text-gray-600">Technisches SEO</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-gray-700">Crawler</td>
                            <td className="p-4 text-gray-600">ClaudeBot</td>
                            <td className="p-4 text-gray-600">GPTBot, OAI-SearchBot</td>
                            <td className="p-4 text-gray-600">PerplexityBot</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-gray-700">Aktualisierung</td>
                            <td className="p-4 text-gray-600">Modell-Updates</td>
                            <td className="p-4 text-gray-600">Echtzeit + Updates</td>
                            <td className="p-4 text-gray-600">Echtzeit</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-6 space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Die Konsequenz: Du brauchst f&uuml;r jedes KI-System eine angepasste Strategie.
                    Bing-Optimierung hilft bei ChatGPT, aber nicht bei Claude. Technisches SEO
                    hilft bei Perplexity, aber ist f&uuml;r Claude nur ein Hygienefaktor. Bei Claude
                    z&auml;hlt vor allem eines: die Qualit&auml;t und Autorit&auml;t der Quellen, auf denen
                    dein Unternehmen erw&auml;hnt wird.
                </p>
            </div>
        </FadeIn>
    </section>
);

// Hamburg Section
const HamburgSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Claude-Sichtbarkeit f&uuml;r Hamburger Unternehmen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Hamburg ist einer der st&auml;rksten Technologie-Standorte Deutschlands. Die Stadt
                    hat eine dichte Konzentration von Agenturen, Beratungen, Tech-Unternehmen und
                    innovativen Mittelst&auml;ndlern &mdash; genau die Zielgruppe, die Claude nutzt.
                </p>
                <p>
                    Wenn ein Hamburger Entscheider Claude fragt &ldquo;Welche Agentur f&uuml;r digitale
                    Transformation gibt es in Hamburg?&rdquo;, empfiehlt Claude die Unternehmen, die
                    es aus den Trainingsdaten kennt. Das sind typischerweise Firmen, die auf
                    hamburg.de, im Hamburger Abendblatt, in der MOPO oder in Hamburger
                    Branchenverzeichnissen erw&auml;hnt werden.
                </p>
                <p>
                    F&uuml;r Hamburger Unternehmen hei&szlig;t das: Lokale Pressearbeit, Mitgliedschaften
                    in der Handelskammer Hamburg, Pr&auml;senz auf hamburg.de und Erw&auml;hnungen in lokalen
                    Fachmedien sind direkte Hebel f&uuml;r Claude-Sichtbarkeit. Das ist kein Zufall &mdash;
                    das ist eine Strategie, die du heute starten kannst.
                </p>
            </div>

            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 mt-8 shadow-sm">
                <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">Hamburger Hebel</p>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent flex-shrink-0">&bull;</span>
                        <span>Handelskammer Hamburg &mdash; Mitgliedschaft und Firmenprofil pflegen</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent flex-shrink-0">&bull;</span>
                        <span>hamburg.de Branchenverzeichnis &mdash; aktueller, vollst&auml;ndiger Eintrag</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent flex-shrink-0">&bull;</span>
                        <span>Hamburger Abendblatt, MOPO &mdash; redaktionelle Erw&auml;hnungen anstreben</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent flex-shrink-0">&bull;</span>
                        <span>Hamburg Startups, Hamburg News &mdash; Branchenportale f&uuml;r Tech-Sichtbarkeit</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent flex-shrink-0">&bull;</span>
                        <span>Lokale Fachveranstaltungen &mdash; Speaker-Slots und Recaps nutzen</span>
                    </li>
                </ul>
            </div>
        </FadeIn>
    </section>
);

// FAQ Section
const FAQSection: React.FC = () => {
    const faqItems = [
        {
            q: 'Wie werde ich mit meinem Unternehmen in Claude AI sichtbar?',
            a: 'Werde auf autoritativen Quellen erw\u00E4hnt, die Anthropic f\u00FCrs Training nutzt: Wikipedia, Fachmedien, Branchenverzeichnisse, Bewertungsplattformen. Anders als bei ChatGPT gibt es keine Live-Websuche \u2013 dein Trainingskorpus-Profil ist alles.',
        },
        {
            q: 'Hat Claude AI eine Live-Websuche wie ChatGPT?',
            a: 'Nein. Claude arbeitet prim\u00E4r mit seinem Trainingskorpus. Das bedeutet: Bing-SEO ist f\u00FCr Claude irrelevant. Was z\u00E4hlt, ist deine Pr\u00E4senz auf Quellen, die ins Training einflie\u00DFen.',
        },
        {
            q: 'Was ist der Unterschied zwischen Claude und ChatGPT f\u00FCr Unternehmen?',
            a: 'ChatGPT nutzt Trainingsdaten plus Bing-Live-Suche. Claude st\u00FCtzt sich prim\u00E4r auf sein Trainingskorpus und legt besonderen Wert auf faktische Genauigkeit. Claude wird st\u00E4rker im professionellen und Enterprise-Kontext genutzt.',
        },
        {
            q: 'Kann ich beeinflussen, was Claude \u00FCber mein Unternehmen sagt?',
            a: 'Ja, indirekt. Steuere die Quellen, die in Claudes Trainingsdaten einflie\u00DFen: Presseartikel, Fachartikel, Wikipedia, Verzeichnisse und deine Website. Konsistenz und Autorit\u00E4t sind die Schl\u00FCssel.',
        },
        {
            q: 'Was ist llms.txt und hilft es bei Claude-Sichtbarkeit?',
            a: 'llms.txt ist ein Format, das LLMs maschinenlesbare Unternehmensinformationen liefert. Es erg\u00E4nzt robots.txt und hilft KI-Systemen, strukturierte Fakten zu erfassen. Kein direkter Ranking-Faktor, aber ein sinnvolles Hygiene-Signal.',
        },
        {
            q: 'Wie lange dauert es, bis \u00C4nderungen in Claude sichtbar werden?',
            a: 'Wochen bis Monate. Ohne Live-Websuche werden \u00C4nderungen erst beim n\u00E4chsten Modell-Update sichtbar. Langfristige, konsistente Pr\u00E4senz auf autoritativen Quellen ist deshalb wichtiger als schnelle taktische Ma\u00DFnahmen.',
        },
        {
            q: 'Ist Claude relevant f\u00FCr Hamburger Unternehmen?',
            a: 'Ja, zunehmend. Claude wird besonders von Professionals und Enterprises genutzt. Hamburger B2B-Unternehmen und Dienstleister sollten Claude-Sichtbarkeit als Teil ihrer KI-SEO-Strategie betrachten.',
        },
    ];

    return (
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-12">
                    H&auml;ufig gestellte Fragen
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
                            href="https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Anthropic (2023): Constitutional AI: Harmlessness from AI Feedback
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://ahrefs.com/blog/llm-seo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Ahrefs (2025): LLM SEO &mdash; Brand Mentions Correlation Study
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
                            href="https://docs.anthropic.com/en/docs/about-claude/models"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Anthropic: Claude Models &amp; Training Data Documentation
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://llmstxt.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            llms.txt: Proposed Standard for LLM-readable Site Information
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
                        Grundlagen, Strategie und Frameworks f&uuml;r Sichtbarkeit in allen KI-Systemen.
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
                    href="/wissen/sichtbarkeit-in-perplexity"
                    className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
                >
                    <p className="font-semibold text-black group-hover:text-brand-accent transition-colors mb-1">
                        Sichtbarkeit in Perplexity
                    </p>
                    <p className="text-sm text-gray-500">
                        Wie Perplexitys Quellensystem funktioniert und wie du dort sichtbar wirst.
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
                        robots.txt, llms.txt, Schema.org und Crawler-Zugang richtig konfigurieren.
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
                        Tracking, Monitoring und KPIs f&uuml;r deine KI-Sichtbarkeit.
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
                        Wird dein Unternehmen von Claude empfohlen?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                        Ich pr&uuml;fe, ob und wie Claude AI dein Unternehmen aktuell darstellt &mdash;
                        Trainingsdaten-Analyse, Prompt-Tests und konkrete Handlungsempfehlungen.
                        Kostenlos, in 48 Stunden.
                    </p>
                    <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose Kurzanalyse anfragen" className="!py-4 !px-8" />
                </div>
            </div>
        </FadeIn>
    </section>
);

export default function SichtbarkeitInClaudePage() {
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
                <WhyClaudeSection />
                <PainSection />
                <HowClaudeWorksSection />
                <FactorsSection />
                <StrategiesSection />
                <ComparisonSection />
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
