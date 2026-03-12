'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Sichtbarkeit in ChatGPT: So wird dein Unternehmen empfohlen',
    description: 'Wie ChatGPTs Dual-System aus Trainingsdaten und Bing-Suche funktioniert, welche Faktoren Empfehlungen bestimmen und wie du deine Sichtbarkeit gezielt steuerst.',
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
    datePublished: '2026-03-12',
    dateModified: '2026-03-12',
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://aiseo.hamburg/wissen/sichtbarkeit-in-chatgpt',
    },
    inLanguage: 'de',
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Wie werde ich mit meinem Unternehmen in ChatGPT sichtbar?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dein Unternehmen muss auf Seiten erwähnt werden, die ChatGPT vertraut: Wikipedia, große Nachrichtenportale, Branchenverzeichnisse und Bewertungsplattformen. Zusätzlich muss deine Website für Bing optimiert sein, da ChatGPT Bing für Live-Suchen nutzt.',
            },
        },
        {
            '@type': 'Question',
            name: 'Kann ich beeinflussen, was ChatGPT über mein Unternehmen sagt?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ja, indirekt. Du steuerst die Quellen, die ChatGPT auswertet: deine Website, Branchenverzeichnisse, Presseartikel und Bewertungen. Je konsistenter und vertrauenswürdiger diese Quellen sind, desto besser die Darstellung.',
            },
        },
        {
            '@type': 'Question',
            name: 'Wie lange dauert es, bis mein Unternehmen in ChatGPT erscheint?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Bei der Live-Websuche über Bing können Änderungen innerhalb von Tagen wirken. Bei den Trainingsdaten dauert es bis zum nächsten Modell-Update - das können Wochen bis Monate sein.',
            },
        },
        {
            '@type': 'Question',
            name: 'Nutzt ChatGPT Google oder Bing für die Websuche?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'ChatGPT nutzt ausschließlich Bing für seine Live-Websuche. Das bedeutet: Bing-SEO ist für ChatGPT-Sichtbarkeit relevanter als Google-SEO. Bing gewichtet Social Signals und exakte Keyword-Matches stärker als Google.',
            },
        },
        {
            '@type': 'Question',
            name: 'Wie messe ich, ob ChatGPT mein Unternehmen empfiehlt?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Prüfe Referral-Traffic von chat.openai.com und chatgpt.com in deiner Analytics. Analysiere Server-Logs auf GPTBot- und OAI-SearchBot-Zugriffe. Teste regelmäßig branchenspezifische Prompts und dokumentiere die Antworten.',
            },
        },
        {
            '@type': 'Question',
            name: 'Was ist der Unterschied zwischen GPTBot und OAI-SearchBot?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'GPTBot crawlt Seiten für zukünftige Trainingsdaten. OAI-SearchBot crawlt für die Live-Websuche in Echtzeit. Beide sollten in der robots.txt erlaubt sein. Wer einen blockiert, verliert einen der zwei Sichtbarkeitskanäle in ChatGPT.',
            },
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
                <span className="text-gray-600">Sichtbarkeit in ChatGPT</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
                Sichtbarkeit in ChatGPT:<br />
                So wird dein Unternehmen empfohlen
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
                400 bis 800 Millionen Menschen nutzen ChatGPT jede Woche. Wenn sie nach Dienstleistern
                fragen, empfiehlt ChatGPT ein bis drei Unternehmen. Dieser Guide zeigt dir, wie das
                Empfehlungssystem funktioniert und wie du reinkommst.
            </p>
        </FadeIn>
    </section>
);

// Image Section
const ImageSection: React.FC = () => (
    <div className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-8">
        <FadeIn>
            <img
                src="/images/wissen/chatgpt.jpg"
                alt="Sichtbarkeit in ChatGPT für Unternehmen optimieren"
                className="w-full rounded-2xl shadow-lg"
                loading="eager"
            />
            <p className="text-xs text-gray-400 mt-2">Foto: Unsplash</p>
        </FadeIn>
    </div>
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
                        <span>ChatGPT hat zwei Quellen: Trainingsdaten und Live-Websuche über Bing. Du brauchst beide.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">2.</span>
                        <span>Brand Mentions korrelieren mit r=0,664 mit KI-Sichtbarkeit - stärker als Backlinks (Ahrefs-Studie).</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">3.</span>
                        <span>Bing-Optimierung ist Pflicht. ChatGPT nutzt nicht Google, sondern Bing für Live-Ergebnisse.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">4.</span>
                        <span>GPTBot und OAI-SearchBot in der robots.txt blockieren = unsichtbar in ChatGPT.</span>
                    </li>
                </ul>
            </div>
        </FadeIn>
    </section>
);

// Dual System Section
const DualSystemSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Wie ChatGPT Empfehlungen generiert
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    ChatGPT arbeitet mit zwei Systemen gleichzeitig. Das unterscheidet es fundamental
                    von Google, Perplexity und allen anderen Suchsystemen.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">System 1: Trainingsdaten</h3>
                    <p className="text-gray-600 text-base mb-3">
                        OpenAI trainiert GPT-Modelle mit Milliarden von Webseiten, Büchern und Artikeln.
                        Dieses Wissen ist im Modell eingefroren. Es aktualisiert sich nur bei Modell-Updates.
                    </p>
                    <p className="text-gray-600 text-base">
                        Wenn ein Nutzer fragt &ldquo;Welche SEO-Agentur in Hamburg ist gut?&rdquo; und ChatGPT
                        keine Websuche auslöst, antwortet es aus diesem eingefrorenen Wissen. Marken, die zum
                        Trainingszeitpunkt auf vielen Quellen erwähnt wurden, haben hier einen Vorteil.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">System 2: Bing-Websuche</h3>
                    <p className="text-gray-600 text-base mb-3">
                        Bei aktuellen Fragen oder wenn ChatGPT unsicher ist, durchsucht es das Web - über Bing.
                        Nicht Google. Das ist ein entscheidender Unterschied.
                    </p>
                    <p className="text-gray-600 text-base">
                        Bing gewichtet andere Signale als Google: Social Signals zählen mehr, exakte
                        Keyword-Matches haben höheres Gewicht, und Bing Webmaster Tools sind dein
                        Steuerungsinstrument. Wer nur für Google optimiert, verschenkt ChatGPT-Sichtbarkeit.
                    </p>
                </div>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Wann welches System greift, entscheidet ChatGPT selbst. Bei der Frage &ldquo;Wer baut
                    gute Websites in Hamburg?&rdquo; kann es Trainingsdaten nutzen. Bei &ldquo;Wer baut gute
                    Websites in Hamburg 2026?&rdquo; wird es Bing befragen.
                </p>
                <p>
                    Du brauchst Sichtbarkeit in beiden Systemen. Trainingsdaten steuerst du über
                    Brand Mentions und Quellenqualität. Die Bing-Suche steuerst du über klassische
                    Bing-SEO und deine Bing Webmaster Tools.
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
                Was ChatGPT-Sichtbarkeit beeinflusst
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Ahrefs hat 2025 untersucht, welche Signale mit KI-Sichtbarkeit korrelieren.
                    Das Ergebnis: Brand Mentions schlagen Backlinks. Deutlich.
                </p>
            </div>

            {/* Ahrefs Study Callout */}
            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 mb-10 shadow-sm">
                <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">Ahrefs-Studie 2025</p>
                <p className="text-2xl md:text-3xl font-semibold text-black mb-2">
                    r = 0,664
                </p>
                <p className="text-gray-600">
                    Korrelation zwischen Brand Mentions und KI-Sichtbarkeit. Zum Vergleich: Backlinks korrelierten schwächer.
                    Für ChatGPT ist es wichtiger, <em>wie oft</em> du auf vertrauenswürdigen Seiten erwähnt wirst,
                    als wie viele Links du hast.
                </p>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Die Princeton-Studie zu Earned Media bestätigt das. Redaktionelle Erwähnungen - also
                    Presseartikel, Fachbeiträge, unabhängige Reviews - beeinflussen ChatGPTs Quellenwahl
                    am stärksten. Bezahlte Mentions und Werbung haben kaum Effekt.
                </p>
            </div>

            <h3 className="font-semibold text-black text-xl mb-6">Die vier ChatGPT-spezifischen Faktoren</h3>

            <div className="space-y-6">
                {[
                    {
                        title: 'Brand Mentions auf vertrauenswürdigen Quellen',
                        desc: 'ChatGPT gewichtet Erwähnungen auf Wikipedia, großen Nachrichtenportalen, etablierten Bewertungsplattformen und Branchenverzeichnissen besonders stark. Eine Erwähnung auf Spiegel.de oder in einem Wikipedia-Artikel wiegt mehr als hundert Blogpost-Backlinks.',
                    },
                    {
                        title: 'Bing-Ranking deiner Website',
                        desc: 'Dein Google-Ranking ist für ChatGPT irrelevant. Was zählt, ist dein Bing-Ranking. Melde deine Seite in Bing Webmaster Tools an, reiche deine Sitemap ein, und optimiere für Bings Ranking-Signale: exakte Keyword-Matches im Title, Social Signals, und frischer Content.',
                    },
                    {
                        title: 'Konsistenz über Quellen hinweg',
                        desc: 'ChatGPT cross-referenziert Informationen. Wenn deine Website sagt, du bist in Hamburg, dein Google-Business-Profil zeigt Harburg, und Yelp listet eine andere Telefonnummer, sinkt das Vertrauen. ChatGPT empfiehlt Unternehmen, bei denen sich alle Quellen einig sind.',
                    },
                    {
                        title: 'Alter und Häufigkeit der Erwähnungen',
                        desc: 'Eine einzelne Pressemeldung von 2023 reicht nicht. ChatGPT bewertet, ob eine Marke über Zeit konsistent erwähnt wird. Regelmäßige redaktionelle Erwähnungen über Monate und Jahre bauen ein stabiles Vertrauensprofil auf.',
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
                5 Strategien speziell für ChatGPT
            </h2>
            <div className="space-y-8">
                {[
                    {
                        num: '01',
                        title: 'Werde auf Seiten erwähnt, denen ChatGPT vertraut',
                        text: 'ChatGPT zieht bestimmte Quellen systematisch vor: Wikipedia, große Nachrichtenportale (Spiegel, Zeit, Handelsblatt), Bewertungsplattformen (Trustpilot, ProvenExpert, Google Reviews) und Branchenverzeichnisse (Gelbe Seiten, Das Örtliche, WLW). Ziel: Dein Unternehmen muss auf mindestens 5-10 dieser Quellen konsistent erwähnt werden. Gastbeiträge in Fachmedien, Pressearbeit und aktive Pflege von Bewertungsprofilen sind der direkte Weg.',
                    },
                    {
                        num: '02',
                        title: 'Mach deine Marke über Bing findbar',
                        text: 'ChatGPTs Live-Suche läuft über Bing. Nicht Google. Das heißt konkret: Melde dich bei Bing Webmaster Tools an. Reiche deine Sitemap ein. Bing bevorzugt exakte Keyword-Matches im Title-Tag, bewertet Social Signals (LinkedIn, Facebook) stärker als Google, und indexiert neue Seiten langsamer - also aktiv über die URL-Einreichung nachhelfen. Prüfe dein Bing-Ranking für deine wichtigsten Keywords. Wenn du dort auf Seite 3 stehst, wird ChatGPT dich bei Live-Suchen nicht finden.',
                    },
                    {
                        num: '03',
                        title: 'Baue konsistente NAP-Daten über alle Verzeichnisse auf',
                        text: 'Name, Adresse, Telefonnummer - überall identisch. ChatGPT gleicht Informationen aus mehreren Quellen ab. Wenn deine Website "Mustermann GmbH" sagt, Google Business "Mustermann Digital" zeigt und Das Örtliche "Firma Mustermann" listet, wird ChatGPT unsicher und empfiehlt lieber einen Wettbewerber, bei dem alle Quellen übereinstimmen. Prüfe alle Verzeichnisse quartalsweise.',
                    },
                    {
                        num: '04',
                        title: 'Erstelle Inhalte, die exakte Nutzer-Prompts beantworten',
                        text: 'ChatGPT-Nutzer fragen anders als Google-Nutzer. Sie schreiben ganze Sätze: "Welcher Steuerberater in Hamburg ist gut für Freelancer?", "Empfiehl mir eine Webdesign-Agentur in Hamburg, die sich mit Shopify auskennt", "Was kostet eine Website für ein kleines Unternehmen in Hamburg?". Erstelle Seiten, die genau diese Prompts als H2 aufgreifen und in den ersten zwei Sätzen direkt beantworten. ChatGPT bevorzugt Quellen, die sofort zur Sache kommen.',
                    },
                    {
                        num: '05',
                        title: 'Erlaube GPTBot und OAI-SearchBot den Zugriff',
                        text: 'OpenAI nutzt zwei Crawler: GPTBot (User-Agent: GPTBot) für Trainingsdaten und OAI-SearchBot für die Live-Websuche. Prüfe deine robots.txt - viele CMS-Plugins und Security-Tools blockieren diese Bots pauschal. Stelle sicher, dass auch der Bing-Bot (bingbot) erlaubt ist, da er die Live-Suche speist. Drei Zeilen in der robots.txt entscheiden darüber, ob ChatGPT dich überhaupt finden kann.',
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

// Measuring Section
const MeasuringSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                So misst du deine ChatGPT-Sichtbarkeit
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Es gibt keine ChatGPT Search Console. Trotzdem kannst du drei Datenquellen
                    anzapfen, die dir ein klares Bild geben.
                </p>
            </div>

            <div className="space-y-6">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">1. Referral-Traffic aus ChatGPT</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        In Google Analytics 4 unter Akquisition &rarr; Traffic-Akquisition nach Quelle filtern.
                        Suche nach diesen Referrern:
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                        <code className="bg-gray-100 px-3 py-1 rounded text-sm">chat.openai.com</code>
                        <code className="bg-gray-100 px-3 py-1 rounded text-sm">chatgpt.com</code>
                        <code className="bg-gray-100 px-3 py-1 rounded text-sm">android-app://com.openai.chatgpt</code>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        Steigender Traffic von diesen Quellen bedeutet: ChatGPT empfiehlt dich und Nutzer klicken
                        auf die Quellenlinks. Tracke diese Zahlen monatlich.
                    </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">2. GPTBot und OAI-SearchBot in Server-Logs</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        Prüfe deine Access-Logs auf diese User-Agents:
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                        <code className="bg-gray-100 px-3 py-1 rounded text-sm">GPTBot/1.0</code>
                        <code className="bg-gray-100 px-3 py-1 rounded text-sm">OAI-SearchBot/1.0</code>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        GPTBot crawlt für zukünftige Trainingsdaten. OAI-SearchBot crawlt für die Live-Websuche.
                        Wenn keiner der beiden in deinen Logs auftaucht, blockiert wahrscheinlich deine robots.txt
                        oder dein CDN die Bots. Sofort prüfen.
                    </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">3. Systematische Prompt-Tests</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        Teste monatlich 10-15 branchenspezifische Prompts und dokumentiere die Ergebnisse.
                        Beispiel-Prompts für ein Hamburger Unternehmen:
                    </p>
                    <ul className="space-y-1.5 text-gray-600 text-base mb-3">
                        <li className="flex items-start gap-2">
                            <span className="text-brand-accent flex-shrink-0">&bull;</span>
                            <span>&ldquo;Empfiehl mir einen [deine Branche] in Hamburg&rdquo;</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-accent flex-shrink-0">&bull;</span>
                            <span>&ldquo;Welcher [deine Branche] in Hamburg hat die besten Bewertungen?&rdquo;</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-accent flex-shrink-0">&bull;</span>
                            <span>&ldquo;Ich suche [deine Dienstleistung] in Hamburg. Was kannst du empfehlen?&rdquo;</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-accent flex-shrink-0">&bull;</span>
                            <span>&ldquo;Vergleiche [dein Unternehmen] mit [Wettbewerber]&rdquo;</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-accent flex-shrink-0">&bull;</span>
                            <span>&ldquo;Was kostet [deine Dienstleistung] in Hamburg?&rdquo;</span>
                        </li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed">
                        Nutze einen neuen Chat ohne Verlauf, damit vorherige Gespräche die Antworten nicht beeinflussen.
                        Teste sowohl mit als auch ohne aktivierte Websuche.
                    </p>
                </div>
            </div>
        </FadeIn>
    </section>
);

// Common Mistakes Section
const MistakesSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Typische Fehler
            </h2>

            <div className="space-y-6">
                {[
                    {
                        mistake: 'GPTBot und OAI-SearchBot blockieren',
                        explanation: 'Viele Security-Plugins tun das automatisch. Prüfe deine robots.txt jetzt. Blockierst du einen der beiden Bots, verlierst du den entsprechenden Sichtbarkeitskanal komplett.',
                    },
                    {
                        mistake: 'Nur für Google optimieren, Bing ignorieren',
                        explanation: 'ChatGPTs Live-Suche läuft über Bing. Wer kein Bing Webmaster Tools nutzt und seine Bing-Rankings nicht kennt, fliegt bei der Hälfte aller ChatGPT-Anfragen blind.',
                    },
                    {
                        mistake: 'Auf Keyword-Stuffing statt Markenaufbau setzen',
                        explanation: 'ChatGPT empfiehlt Marken, nicht Keywords. Ein Unternehmen, das auf 20 vertrauenswürdigen Seiten erwähnt wird, schlägt eines mit perfekter Keyword-Dichte auf der eigenen Website.',
                    },
                    {
                        mistake: 'Widersprüchliche Unternehmensdaten dulden',
                        explanation: 'Drei verschiedene Telefonnummern auf drei Plattformen = ChatGPT empfiehlt jemand anderen. Konsistenz prüfen, einmal richtig machen, quartalsweise kontrollieren.',
                    },
                ].map((item, i) => (
                    <FadeIn key={i} delay={i * 50}>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6">
                            <div className="flex items-start gap-3">
                                <span className="text-red-400 font-bold text-xl leading-none mt-0.5 flex-shrink-0">&#10007;</span>
                                <div>
                                    <h3 className="font-semibold text-black text-lg mb-1">{item.mistake}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.explanation}</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </FadeIn>
    </section>
);

// FAQ Section
const FAQSection: React.FC = () => {
    const faqItems = [
        {
            q: 'Wie werde ich mit meinem Unternehmen in ChatGPT sichtbar?',
            a: 'Werde auf Seiten erwähnt, die ChatGPT vertraut: Wikipedia, Nachrichtenportale, Bewertungsplattformen, Branchenverzeichnisse. Optimiere parallel für Bing, da ChatGPT Bing für Live-Suchen nutzt.',
        },
        {
            q: 'Kann ich beeinflussen, was ChatGPT über mein Unternehmen sagt?',
            a: 'Ja, indirekt. Du steuerst die Quellen: deine Website, Verzeichniseinträge, Presseartikel, Bewertungen. Konsistente und vertrauenswürdige Quellen verbessern die Darstellung.',
        },
        {
            q: 'Wie lange dauert es, bis mein Unternehmen in ChatGPT erscheint?',
            a: 'Live-Websuche über Bing: Tage. Trainingsdaten: Wochen bis Monate, abhängig vom nächsten Modell-Update.',
        },
        {
            q: 'Nutzt ChatGPT Google oder Bing für die Websuche?',
            a: 'Ausschließlich Bing. Dein Google-Ranking ist für ChatGPTs Live-Suche irrelevant. Bing Webmaster Tools sind dein Steuerungsinstrument.',
        },
        {
            q: 'Wie messe ich, ob ChatGPT mein Unternehmen empfiehlt?',
            a: 'Drei Wege: Referral-Traffic von chat.openai.com und chatgpt.com in Analytics prüfen, Server-Logs auf GPTBot und OAI-SearchBot analysieren, und regelmäßig branchenspezifische Prompts testen.',
        },
        {
            q: 'Was ist der Unterschied zwischen GPTBot und OAI-SearchBot?',
            a: 'GPTBot crawlt für zukünftige Trainingsdaten. OAI-SearchBot crawlt für die Live-Websuche. Beide müssen in der robots.txt erlaubt sein.',
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
                            Ahrefs (2025): LLM SEO - Brand Mentions Correlation Study (r=0,664)
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
                        Wird dein Unternehmen von ChatGPT empfohlen?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                        Ich prüfe, ob und wie ChatGPT dein Unternehmen aktuell darstellt - Trainingsdaten
                        und Live-Suche. Kostenlos, in 48 Stunden.
                    </p>
                    <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose Kurzanalyse anfragen" className="!py-4 !px-8" />
                </div>
            </div>
        </FadeIn>
    </section>
);

export default function SichtbarkeitInChatGPTPage() {
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

            <Navbar />

            <main>
                <HeroSection />
                <ImageSection />
                <TLDRSection />
                <DualSystemSection />
                <FactorsSection />
                <StrategiesSection />
                <MeasuringSection />
                <MistakesSection />
                <FAQSection />
                <SourcesSection />
                <RelatedGuidesSection />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
}
