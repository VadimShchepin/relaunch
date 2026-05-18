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
    description: 'ChatGPT empfiehlt 2-3 Unternehmen pro Anfrage. Erfahre, wie das Dual-System aus Trainingsdaten und Bing-Suche funktioniert, warum KI-Halluzinationen dein Geschäft gefährden und wie du deine ChatGPT-Sichtbarkeit gezielt verbesserst.',
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
    dateModified: '2026-03-24',
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
            name: 'Wie werde ich mit meinem Unternehmen bei ChatGPT gefunden?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dein Unternehmen muss auf Seiten erwähnt werden, die ChatGPT vertraut: Wikipedia, große Nachrichtenportale, Branchenverzeichnisse und Bewertungsplattformen. Zusätzlich muss deine Website für Bing optimiert sein, da ChatGPT Bing für Live-Suchen nutzt. Konsistente NAP-Daten über alle Verzeichnisse sind Pflicht, da ChatGPT widersprüchliche Informationen als Vertrauensverlust wertet.',
            },
        },
        {
            '@type': 'Question',
            name: 'Kann ich beeinflussen, was ChatGPT über mein Unternehmen sagt?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ja, indirekt. Du steuerst die Quellen, die ChatGPT auswertet: deine Website, Branchenverzeichnisse, Presseartikel und Bewertungen. Je konsistenter und vertrauenswürdiger diese Quellen sind, desto besser die Darstellung. Ohne aktive Steuerung riskierst du KI-Halluzinationen - ChatGPT erfindet dann Preise, Öffnungszeiten oder Dienstleistungen.',
            },
        },
        {
            '@type': 'Question',
            name: 'Wie lange dauert es, bis mein Unternehmen in ChatGPT erscheint?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Bei der Live-Websuche über Bing können Änderungen innerhalb von Tagen wirken. Bei den Trainingsdaten dauert es bis zum nächsten Modell-Update - das können Wochen bis Monate sein. Eine kombinierte Strategie für beide Kanäle ist daher entscheidend.',
            },
        },
        {
            '@type': 'Question',
            name: 'Nutzt ChatGPT Google oder Bing für die Websuche?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'ChatGPT nutzt ausschließlich Bing für seine Live-Websuche. Das bedeutet: Bing-SEO ist für ChatGPT-Sichtbarkeit relevanter als Google-SEO. Bing gewichtet Social Signals und exakte Keyword-Matches stärker als Google. Wer nur für Google optimiert, ist für ChatGPT unsichtbar.',
            },
        },
        {
            '@type': 'Question',
            name: 'Wie messe ich meine Sichtbarkeit in ChatGPT?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Es gibt keine ChatGPT Search Console. Prüfe Referral-Traffic von chat.openai.com und chatgpt.com in deiner Analytics. Analysiere Server-Logs auf GPTBot- und OAI-SearchBot-Zugriffe. Teste regelmäßig branchenspezifische Prompts und dokumentiere die Antworten. Mehr dazu in unserem Guide zur KI-Sichtbarkeit messen.',
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
        {
            '@type': 'Question',
            name: 'Was kostet ChatGPT-Optimierung für Unternehmen?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'ChatGPT-Optimierung ist kein einmaliges Projekt, sondern ein fortlaufender Prozess. Die Kosten hängen von der Branche, dem Wettbewerb und dem aktuellen Stand deiner digitalen Präsenz ab. Viele Maßnahmen wie NAP-Konsistenz und robots.txt-Optimierung sind kostenlos umsetzbar. Für eine professionelle Strategie mit Pressearbeit, Brand Mentions und Bing-Optimierung solltest du mit einem monatlichen Budget rechnen.',
            },
        },
        {
            '@type': 'Question',
            name: 'Erfindet ChatGPT Informationen über mein Unternehmen?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ja, das passiert regelmäßig. ChatGPT halluziniert falsche Preise, Öffnungszeiten, Dienstleistungen und sogar Mitarbeiternamen, wenn die Datenlage dünn oder widersprüchlich ist. Je weniger konsistente Quellen ChatGPT über dich findet, desto höher das Risiko für erfundene Informationen. Aktive ChatGPT-Optimierung ist auch Schadensverhütung.',
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
                Dein Wettbewerber wird empfohlen.{' '}
                <span className="text-gray-400">Du nicht.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed mb-4">
                400 bis 800 Millionen Menschen fragen ChatGPT jede Woche. Wenn jemand tippt
                „Empfiehl mir einen guten Dienstleister in Hamburg", nennt ChatGPT
                zwei bis drei Unternehmen. Nicht zehn. Nicht fünf. Zwei bis drei.
            </p>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
                Wenn du nicht dabei bist, existierst du für diese Nutzer nicht. Und du
                erfährst es nicht einmal – denn es gibt keine ChatGPT Search Console.
                Du fliegst blind.
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
                alt="Sichtbarkeit in ChatGPT verbessern - so wird dein Unternehmen bei ChatGPT gefunden"
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
                        <span>ChatGPT empfiehlt 2–3 Unternehmen pro Anfrage. Wer nicht dabei ist, existiert nicht.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">2.</span>
                        <span>Zwei Systeme: Trainingsdaten + Live-Websuche über Bing. Du brauchst Sichtbarkeit in beiden.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">3.</span>
                        <span>Brand Mentions korrelieren mit r=0,664 mit KI-Sichtbarkeit – stärker als Backlinks (Ahrefs-Studie).</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">4.</span>
                        <span>Ohne aktive Steuerung erfindet ChatGPT Fakten über dein Unternehmen: falsche Preise, falsche Leistungen.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">5.</span>
                        <span>Deine Agentur zeigt dir Google-Rankings. <a href="/wissen/ki-sichtbarkeit-messen" className="text-brand-accent underline hover:no-underline">ChatGPT-Empfehlungen</a>? Fehlanzeige.</span>
                    </li>
                </ul>
            </div>
        </FadeIn>
    </section>
);

// Das ChatGPT-Problem Section
const ProblemSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Das ChatGPT-Problem: Nur 2–3 Unternehmen werden empfohlen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Google zeigt zehn Ergebnisse pro Seite. ChatGPT empfiehlt zwei bis drei. Manchmal nur eins.
                    Das verändert alles.
                </p>
                <p>
                    Bei Google kannst du auf Platz 7 stehen und trotzdem Klicks bekommen. Bei ChatGPT gibt es kein
                    „Platz 7". Du bist entweder in der Empfehlung – oder du existierst nicht.
                    Es gibt keine zweite Seite, kein Scrollen, kein „Weitere Ergebnisse laden".
                </p>
            </div>

            {/* Pain Point Cards */}
            <div className="space-y-6 mb-10">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">ChatGPT-Nutzer vertrauen Empfehlungen mehr als Google-Ergebnissen</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Ein Google-Ergebnis ist ein Link. Eine ChatGPT-Empfehlung ist eine persönliche Antwort.
                        Nutzer behandeln ChatGPT wie einen vertrauenswürdigen Berater, nicht wie eine Suchmaschine.
                        Wenn ChatGPT sagt „Ich empfehle Firma X für dein Problem", hat das mehr
                        Gewicht als ein Platz-1-Ranking bei Google.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">Die Conversion Rate von ChatGPT-Traffic ist signifikant höher</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Wer über ChatGPT auf deine Website kommt, hat eine klare Kaufabsicht. Diese Nutzer haben
                        nicht „gegoogelt" – sie haben um eine konkrete Empfehlung gebeten. Das sind
                        keine Browser. Das sind Käufer. Erste Daten zeigen: ChatGPT-Referral-Traffic konvertiert
                        deutlich besser als organischer Google-Traffic.
                    </p>
                </div>
            </div>

            {/* Prompt Test Callout */}
            <div className="bg-[#121212] text-white rounded-xl p-6 md:p-8">
                <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">Mach den Test – jetzt</p>
                <p className="text-lg leading-relaxed mb-4">
                    Öffne ChatGPT und frag: „Empfiehl mir einen guten <em>[deine Branche]</em> in Hamburg."
                </p>
                <p className="text-gray-300 leading-relaxed">
                    Wirst du genannt? Wenn nicht: Dein Wettbewerber wird gerade empfohlen. Du erfährst es
                    nicht einmal. Es gibt keine Benachrichtigung, kein Dashboard, keine Search Console.
                    ChatGPT empfiehlt deinen Wettbewerber – und du fliegst blind.
                </p>
            </div>
        </FadeIn>
    </section>
);

// Was ChatGPT über dein Unternehmen weiß Section
const HallucinationSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Was ChatGPT WIRKLICH über dein Unternehmen weiß
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Die meisten Unternehmer haben nie geprüft, was ChatGPT über sie sagt. Das
                    ist gefährlich. Denn ChatGPT sagt trotzdem etwas – und oft ist es falsch.
                </p>
            </div>

            <div className="space-y-6 mb-8">
                <div className="bg-white border-2 border-red-200 rounded-xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">KI-Halluzinationen: ChatGPT erfindet Fakten über dein Unternehmen</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Falsche Preise. Falsche Öffnungszeiten. Dienstleistungen, die du gar nicht anbietest.
                        Mitarbeiternamen, die nicht existieren. ChatGPT halluziniert – und präsentiert
                        diese Halluzinationen mit der gleichen Selbstsicherheit wie korrekte Informationen.
                        Deine potenziellen Kunden können den Unterschied nicht erkennen.
                    </p>
                </div>
                <div className="bg-white border-2 border-red-200 rounded-xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">Widersprüchliche Daten = ChatGPT rät von dir ab</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Wenn dein digitales Profil widersprüchlich ist – verschiedene Adressen auf verschiedenen
                        Plattformen, unterschiedliche Leistungsbeschreibungen, veraltete Telefonnummern – wird ChatGPT
                        unsicher. Und unsichere KI empfiehlt lieber den Wettbewerber, bei dem alle Quellen
                        übereinstimmen. Konsistenz ist kein Nice-to-have. Sie entscheidet, ob du empfohlen wirst.
                    </p>
                </div>
                <div className="bg-white border-2 border-red-200 rounded-xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">Dünne Datenlage = maximales Halluzinationsrisiko</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Je weniger verlässliche Quellen ChatGPT über dein Unternehmen findet, desto mehr
                        füllt es die Lücken selbst. Mit erfundenen Informationen. Ein Unternehmen mit
                        20 konsistenten Erwähnungen auf vertrauenswürdigen Seiten wird korrekt dargestellt.
                        Ein Unternehmen mit zwei Erwähnungen bekommt eine Fantasie-Beschreibung.
                    </p>
                </div>
            </div>

            <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-xl p-6">
                <p className="text-gray-800 leading-relaxed">
                    <strong>ChatGPT-Optimierung ist nicht nur Marketing – es ist Schadensverhütung.</strong>{' '}
                    Wer seine <a href="/wissen/ki-sichtbarkeit" className="text-brand-accent underline hover:no-underline">KI-Sichtbarkeit</a> nicht
                    aktiv steuert, überlässt einer halluzinierenden KI die Darstellung seines Unternehmens.
                </p>
            </div>
        </FadeIn>
    </section>
);

// Dual System Section
const DualSystemSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Wie ChatGPT Empfehlungen generiert: Das Dual-System
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Um bei ChatGPT gefunden zu werden, musst du verstehen, wie das System funktioniert.
                    ChatGPT arbeitet mit zwei Quellen gleichzeitig. Das unterscheidet es fundamental
                    von Google, <a href="/wissen/sichtbarkeit-in-perplexity" className="text-brand-accent underline hover:no-underline">Perplexity</a> und
                    allen anderen Suchsystemen.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">System 1: Trainingsdaten</h3>
                    <p className="text-gray-600 text-base mb-3">
                        OpenAI trainiert GPT-Modelle mit Milliarden von Webseiten, Büchern und Artikeln.
                        Dieses Wissen ist im Modell eingefroren. Es aktualisiert sich nur bei Modell-Updates.
                    </p>
                    <p className="text-gray-600 text-base mb-3">
                        Wenn ein Nutzer fragt „Welche SEO-Agentur in Hamburg ist gut?" und ChatGPT
                        keine Websuche auslöst, antwortet es aus diesem eingefrorenen Wissen.
                    </p>
                    <p className="text-gray-600 text-base">
                        <strong>Beispiel Hamburg:</strong> Eine Hamburger Werbeagentur, die seit Jahren auf Spiegel.de,
                        im Hamburger Abendblatt und auf W&amp;V erwähnt wird, ist in den Trainingsdaten verankert.
                        Ein Wettbewerber, der nur eine eigene Website hat, nicht.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">System 2: Bing-Websuche</h3>
                    <p className="text-gray-600 text-base mb-3">
                        Bei aktuellen Fragen oder wenn ChatGPT unsicher ist, durchsucht es das Web – über Bing.
                        Nicht Google. Das ist ein entscheidender Unterschied.
                    </p>
                    <p className="text-gray-600 text-base mb-3">
                        Bing gewichtet andere Signale als Google: Social Signals zählen mehr, exakte
                        Keyword-Matches haben höheres Gewicht, und Bing Webmaster Tools sind dein
                        Steuerungsinstrument.
                    </p>
                    <p className="text-gray-600 text-base">
                        <strong>Beispiel Hamburg:</strong> Ein Hamburger Steuerberater, der bei Bing auf Platz 2 steht,
                        wird bei ChatGPT-Live-Suchen empfohlen. Sein Wettbewerber auf Google Platz 1, aber Bing Platz 15?
                        Unsichtbar für ChatGPT.
                    </p>
                </div>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Wann welches System greift, entscheidet ChatGPT selbst. Bei „Wer baut
                    gute Websites in Hamburg?" kann es Trainingsdaten nutzen. Bei „Wer baut gute
                    Websites in Hamburg 2026?" wird es Bing befragen. Die Jahresangabe triggert die Live-Suche.
                </p>
                <p>
                    <strong>Du brauchst Sichtbarkeit in beiden Systemen.</strong> Trainingsdaten steuerst du über
                    Brand Mentions und Quellenqualität. Die Bing-Suche steuerst du über klassische
                    Bing-SEO und <a href="/wissen/technische-ki-sichtbarkeit" className="text-brand-accent underline hover:no-underline">technische
                    KI-Sichtbarkeit</a>. Wer nur einen Kanal bespielt, verliert die Hälfte der ChatGPT-Anfragen.
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
                ChatGPT-Sichtbarkeit verbessern: Was Empfehlungen beeinflusst
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Ahrefs hat 2025 untersucht, welche Signale mit KI-Sichtbarkeit korrelieren.
                    Das Ergebnis widerspricht allem, was du über klassisches SEO weißt:
                    Brand Mentions schlagen Backlinks. Deutlich.
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
                    Für die ChatGPT-Optimierung deines Unternehmens bedeutet das: Es ist wichtiger, <em>wie oft</em> du auf
                    vertrauenswürdigen Seiten erwähnt wirst, als wie viele Links du hast.
                </p>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Die Princeton-Studie zu Earned Media bestätigt das. Redaktionelle Erwähnungen – also
                    Presseartikel, Fachbeiträge, unabhängige Reviews – beeinflussen ChatGPTs Quellenwahl
                    am stärksten. Bezahlte Mentions und Werbung haben kaum Effekt. ChatGPT erkennt den Unterschied.
                </p>
            </div>

            <h3 className="font-semibold text-black text-xl mb-6">Die fünf ChatGPT-spezifischen Ranking-Faktoren</h3>

            <div className="space-y-6">
                {[
                    {
                        title: 'Brand Mentions auf vertrauenswürdigen Quellen',
                        desc: 'ChatGPT gewichtet Erwähnungen auf Wikipedia, großen Nachrichtenportalen, etablierten Bewertungsplattformen und Branchenverzeichnissen besonders stark. Eine Erwähnung im Hamburger Abendblatt oder auf Spiegel.de wiegt mehr als hundert Blogpost-Backlinks. Für Hamburger Unternehmen sind lokale Medien Gold wert.',
                    },
                    {
                        title: 'Bing-Ranking deiner Website',
                        desc: 'Dein Google-Ranking ist für ChatGPT irrelevant. Was zählt, ist dein Bing-Ranking. Melde deine Seite in Bing Webmaster Tools an, reiche deine Sitemap ein, und optimiere für Bings Ranking-Signale: exakte Keyword-Matches im Title, Social Signals, und frischer Content. Prüfe jetzt dein Bing-Ranking für deine wichtigsten Keywords.',
                    },
                    {
                        title: 'Konsistenz über alle Quellen hinweg (NAP)',
                        desc: 'ChatGPT cross-referenziert Informationen aus dutzenden Quellen. Wenn deine Website Hamburg-Altstadt sagt, Google Business Harburg zeigt und Yelp eine alte Telefonnummer listet, sinkt das Vertrauen massiv. ChatGPT empfiehlt Unternehmen, bei denen sich alle Quellen einig sind. Widersprüche = keine Empfehlung.',
                    },
                    {
                        title: 'Alter und Häufigkeit der Erwähnungen',
                        desc: 'Eine einzelne Pressemeldung von 2023 reicht nicht. ChatGPT bewertet, ob eine Marke über Zeit konsistent erwähnt wird. Regelmäßige redaktionelle Erwähnungen über Monate und Jahre bauen ein stabiles Vertrauensprofil auf. Einmalige PR-Aktionen verpuffen.',
                    },
                    {
                        title: 'Strukturierte Daten und technische Signale',
                        desc: 'Schema.org-Markup, saubere robots.txt, erlaubte AI-Crawler — diese technischen Grundlagen entscheiden, ob ChatGPT deine Inhalte überhaupt verarbeiten kann. Ohne technische KI-Sichtbarkeit hilft der beste Content nichts.',
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-4">
                7 Strategien: So wirst du bei ChatGPT gefunden
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                ChatGPT-Optimierung für Unternehmen ist kein Hexenwerk – aber es erfordert andere
                Maßnahmen als klassisches Google-SEO. Hier sind die sieben wirksamsten Strategien.
            </p>
            <div className="space-y-8">
                {[
                    {
                        num: '01',
                        title: 'Werde auf Seiten erwähnt, denen ChatGPT vertraut',
                        text: 'ChatGPT zieht bestimmte Quellen systematisch vor: Wikipedia, große Nachrichtenportale (Spiegel, Zeit, Handelsblatt), Bewertungsplattformen (Trustpilot, ProvenExpert, Google Reviews) und Branchenverzeichnisse (Gelbe Seiten, Das Örtliche, WLW). Für Hamburger Unternehmen besonders relevant: Hamburger Abendblatt, Hamburg.de, die Handelskammer Hamburg und lokale Branchenverzeichnisse. Ziel: Mindestens 10-15 konsistente Erwähnungen auf vertrauenswürdigen Quellen.',
                    },
                    {
                        num: '02',
                        title: 'Mach deine Marke über Bing findbar',
                        text: 'ChatGPTs Live-Suche läuft über Bing. Nicht Google. Konkret: Melde dich bei Bing Webmaster Tools an. Reiche deine Sitemap ein. Bing bevorzugt exakte Keyword-Matches im Title-Tag, bewertet Social Signals (LinkedIn, Facebook) stärker als Google, und indexiert neue Seiten langsamer — also aktiv über die URL-Einreichung nachhelfen. Prüfe dein Bing-Ranking für „[deine Branche] Hamburg". Wenn du dort auf Seite 3 stehst, wird ChatGPT dich bei Live-Suchen nicht finden.',
                    },
                    {
                        num: '03',
                        title: 'Baue lückenlose NAP-Konsistenz auf',
                        text: 'Name, Adresse, Telefonnummer — überall identisch. ChatGPT gleicht Informationen aus dutzenden Quellen ab. Wenn deine Website „Mustermann GmbH" sagt, Google Business „Mustermann Digital" zeigt und Das Örtliche „Firma Mustermann" listet, wird ChatGPT unsicher und empfiehlt jemand anderen. Erstelle eine Tabelle mit allen Verzeichnissen, in denen du gelistet bist, und gleiche quartalsweise ab. Diese Konsistenz ist auch für AI Overviews bei Google entscheidend.',
                    },
                    {
                        num: '04',
                        title: 'Erstelle Inhalte, die exakte ChatGPT-Prompts beantworten',
                        text: 'ChatGPT-Nutzer fragen anders als Google-Nutzer. Sie schreiben ganze Sätze: „Welcher Steuerberater in Hamburg ist gut für Freelancer?", „Empfiehl mir eine Webdesign-Agentur in Hamburg, die sich mit Shopify auskennt", „Was kostet eine Website für ein kleines Unternehmen in Hamburg?". Erstelle Seiten, die genau diese Prompts als H2 aufgreifen und in den ersten zwei Sätzen direkt beantworten. ChatGPT bevorzugt Quellen, die sofort zur Sache kommen — nicht solche, die mit 500 Wörtern Einleitung beginnen.',
                    },
                    {
                        num: '05',
                        title: 'Erlaube GPTBot und OAI-SearchBot den Zugriff',
                        text: 'OpenAI nutzt zwei Crawler: GPTBot für Trainingsdaten und OAI-SearchBot für die Live-Websuche. Prüfe deine robots.txt — viele CMS-Plugins und Security-Tools blockieren diese Bots pauschal. Stelle sicher, dass auch der Bing-Bot erlaubt ist, da er die Live-Suche speist. Drei Zeilen in der robots.txt entscheiden darüber, ob ChatGPT dich überhaupt finden kann. Mehr dazu in unserem Guide zur technischen KI-Sichtbarkeit.',
                    },
                    {
                        num: '06',
                        title: 'Investiere in echte Pressearbeit und Earned Media',
                        text: 'Bezahlte Mentions und Advertorials erkennt ChatGPT und wertet sie ab. Was zählt, sind redaktionelle Erwähnungen: Fachartikel, Interviews, Gastbeiträge in relevanten Medien. Für Hamburger Unternehmen: Pressearbeit über die Handelskammer, Beiträge im Hamburger Abendblatt, Erwähnungen auf Hamburg.de oder in Hamburger Branchenblogs. Diese Quellen fließen direkt in ChatGPTs Vertrauensprofil ein.',
                    },
                    {
                        num: '07',
                        title: 'Baue ein konsistentes Bewertungsprofil auf',
                        text: 'ChatGPT wertet Bewertungen aus — nicht nur die Sterne, sondern auch den Inhalt. „Bester Steuerberater für Freelancer in Hamburg" in einer Google-Bewertung ist ein starkes Signal. Bitte zufriedene Kunden um spezifische Bewertungen, die deine Kernleistung und deinen Standort nennen. 50 generische 5-Sterne-Bewertungen zählen weniger als 20 detaillierte, die deine Spezialisierung beschreiben.',
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
                ChatGPT-Sichtbarkeit für Hamburger Unternehmen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Hamburg ist Deutschlands zweitgrößte Stadt, Medienstandort Nummer eins und
                    Heimat tausender Dienstleister, die um die gleichen Kunden kämpfen. Wenn jemand
                    ChatGPT fragt „Empfiehl mir einen guten Rechtsanwalt in Hamburg", entscheiden
                    wenige Signale, wer genannt wird.
                </p>
                <p>
                    Die gute Nachricht: <strong>Die meisten Hamburger Wettbewerber ignorieren ChatGPT-Optimierung
                    noch komplett.</strong> Sie optimieren für Google, investieren in Google Ads und
                    übersehen, dass ein wachsender Anteil ihrer Zielgruppe längst ChatGPT fragt.
                    Wer jetzt handelt, hat einen First-Mover-Vorteil.
                </p>
            </div>

            <h3 className="font-semibold text-black text-xl mb-4">Lokale Signale, die ChatGPT für Hamburg auswertet</h3>
            <div className="space-y-4 mb-8">
                {[
                    {
                        signal: 'Google Business Profil mit Hamburg-Bezug',
                        detail: 'Vollständig ausgefüllt, mit Hamburg-Adresse, Fotos vom Standort und regelmäßigen Beiträgen. ChatGPT wertet Google Business als vertrauenswürdige Quelle für lokale Unternehmen.',
                    },
                    {
                        signal: 'Hamburger Abendblatt und lokale Medien',
                        detail: 'Erwähnungen im Hamburger Abendblatt, auf Hamburg.de, bei der Handelskammer Hamburg oder in der MOPO sind starke lokale Signale. ChatGPT gewichtet regionale Medien für lokale Anfragen überproportional.',
                    },
                    {
                        signal: 'Hamburger Branchenverzeichnisse',
                        detail: 'Hamburg.de Firmenverzeichnis, Handelskammer-Mitgliederliste, Hamburg Tourismus (für Gastro/Hotellerie), lokale Handwerkskammer — diese Quellen bestätigen deine Hamburger Präsenz.',
                    },
                    {
                        signal: 'Bewertungen mit Hamburg-Bezug',
                        detail: '„Bester Zahnarzt in Eppendorf", „Top-Steuerberater Hamburg Altona" — Bewertungen, die Stadtteil und Stadt nennen, sind lokale Ranking-Signale für ChatGPT.',
                    },
                ].map((item, i) => (
                    <FadeIn key={i} delay={i * 50}>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6">
                            <h4 className="font-semibold text-black mb-1">{item.signal}</h4>
                            <p className="text-gray-600 leading-relaxed">{item.detail}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-xl p-6">
                <p className="text-gray-800 leading-relaxed">
                    <strong>Hamburg-Vorteil nutzen:</strong> Als Technologie- und Medienstandort generiert Hamburg
                    überdurchschnittlich viel digitale Presse und Online-Präsenz. Hamburger Unternehmen
                    haben damit bessere Voraussetzungen für ChatGPT-Sichtbarkeit als Unternehmen in kleineren
                    Städten – wenn sie diese Voraussetzungen auch nutzen.
                </p>
            </div>
        </FadeIn>
    </section>
);

// Measuring Section
const MeasuringSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                Wie werde ich bei ChatGPT gefunden – und wie messe ich es?
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Du hast keine ChatGPT Search Console. Du fliegst blind. Deine Agentur zeigt dir
                    Google-Rankings. ChatGPT-Empfehlungen? Fehlanzeige. Trotzdem gibt es drei Datenquellen,
                    die dir ein Bild geben. Mehr dazu in unserem ausführlichen Guide
                    zur <a href="/wissen/ki-sichtbarkeit-messen" className="text-brand-accent underline hover:no-underline">KI-Sichtbarkeit messen</a>.
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
                        auf die Quellenlinks. Tracke diese Zahlen monatlich und vergleiche die Conversion Rate mit
                        organischem Google-Traffic.
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
                        Wenn keiner der beiden in deinen Logs auftaucht, blockiert wahrscheinlich deine robots.txt
                        oder dein CDN die Bots. Sofort prüfen.
                    </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">3. Systematische Prompt-Tests</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        Teste monatlich 10–15 branchenspezifische Prompts. Nutze einen neuen Chat ohne Verlauf.
                    </p>
                    <ul className="space-y-1.5 text-gray-600 text-base mb-3">
                        <li className="flex items-start gap-2">
                            <span className="text-brand-accent flex-shrink-0">&bull;</span>
                            <span>„Empfiehl mir einen [deine Branche] in Hamburg"</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-accent flex-shrink-0">&bull;</span>
                            <span>„Welcher [deine Branche] in Hamburg hat die besten Bewertungen?"</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-accent flex-shrink-0">&bull;</span>
                            <span>„Vergleiche [dein Unternehmen] mit [Wettbewerber]"</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-accent flex-shrink-0">&bull;</span>
                            <span>„Was kostet [deine Dienstleistung] in Hamburg?"</span>
                        </li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed">
                        Dokumentiere die Ergebnisse in einer Tabelle. Teste sowohl mit als auch ohne aktivierte
                        Websuche. Die Differenz zeigt dir, wo du in Trainingsdaten vs. Bing-Suche stehst.
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
                Typische Fehler bei der ChatGPT-Optimierung
            </h2>

            <div className="space-y-6">
                {[
                    {
                        mistake: 'GPTBot und OAI-SearchBot blockieren',
                        explanation: 'Viele Security-Plugins tun das automatisch. Prüfe deine robots.txt jetzt. Blockierst du einen der beiden Bots, verlierst du den entsprechenden Sichtbarkeitskanal komplett. Das ist, als würdest du Google den Zugang zu deiner Website sperren.',
                    },
                    {
                        mistake: 'Nur für Google optimieren, Bing ignorieren',
                        explanation: 'ChatGPTs Live-Suche läuft über Bing. Wer kein Bing Webmaster Tools nutzt und seine Bing-Rankings nicht kennt, fliegt bei der Hälfte aller ChatGPT-Anfragen blind. Google Platz 1 hilft dir bei ChatGPT null.',
                    },
                    {
                        mistake: 'Auf Keyword-Stuffing statt Markenaufbau setzen',
                        explanation: 'ChatGPT empfiehlt Marken, nicht Keywords. Ein Unternehmen, das auf 20 vertrauenswürdigen Seiten erwähnt wird, schlägt eines mit perfekter Keyword-Dichte auf der eigenen Website. Investiere in PR, nicht in Keyword-Dichte.',
                    },
                    {
                        mistake: 'Widersprüchliche Unternehmensdaten dulden',
                        explanation: 'Drei verschiedene Telefonnummern auf drei Plattformen = ChatGPT empfiehlt jemand anderen. Konsistenz prüfen, einmal richtig machen, quartalsweise kontrollieren. Das gilt auch für Öffnungszeiten, Adressen und Leistungsbeschreibungen.',
                    },
                    {
                        mistake: 'ChatGPT-Sichtbarkeit nicht messen',
                        explanation: 'Was du nicht misst, kannst du nicht verbessern. Die meisten Unternehmen haben keine Ahnung, ob und wie ChatGPT sie darstellt. Richte jetzt Referral-Tracking ein und starte mit monatlichen Prompt-Tests.',
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
            q: 'Wie werde ich mit meinem Unternehmen bei ChatGPT gefunden?',
            a: 'Werde auf Seiten erwähnt, die ChatGPT vertraut: Wikipedia, Nachrichtenportale, Bewertungsplattformen, Branchenverzeichnisse. Optimiere parallel für Bing, da ChatGPT Bing für Live-Suchen nutzt. Stelle sicher, dass deine NAP-Daten über alle Plattformen konsistent sind und GPTBot sowie OAI-SearchBot nicht blockiert werden.',
        },
        {
            q: 'Kann ich beeinflussen, was ChatGPT über mein Unternehmen sagt?',
            a: 'Ja, indirekt. Du steuerst die Quellen: deine Website, Verzeichniseinträge, Presseartikel, Bewertungen. Konsistente und vertrauenswürdige Quellen verbessern die Darstellung. Ohne aktive Steuerung riskierst du KI-Halluzinationen — ChatGPT erfindet dann Fakten über dich.',
        },
        {
            q: 'Wie lange dauert es, bis mein Unternehmen in ChatGPT erscheint?',
            a: 'Live-Websuche über Bing: Tage. Trainingsdaten: Wochen bis Monate, abhängig vom nächsten Modell-Update. Eine kombinierte Strategie für beide Kanäle verkürzt die Wartezeit.',
        },
        {
            q: 'Nutzt ChatGPT Google oder Bing für die Websuche?',
            a: 'Ausschließlich Bing. Dein Google-Ranking ist für ChatGPTs Live-Suche irrelevant. Bing Webmaster Tools sind dein Steuerungsinstrument für die ChatGPT-Sichtbarkeit.',
        },
        {
            q: 'Wie messe ich meine Sichtbarkeit in ChatGPT?',
            a: 'Drei Wege: Referral-Traffic von chat.openai.com und chatgpt.com in Analytics prüfen, Server-Logs auf GPTBot und OAI-SearchBot analysieren, und regelmäßig branchenspezifische Prompts testen.',
        },
        {
            q: 'Was ist der Unterschied zwischen GPTBot und OAI-SearchBot?',
            a: 'GPTBot crawlt für zukünftige Trainingsdaten. OAI-SearchBot crawlt für die Live-Websuche. Beide müssen in der robots.txt erlaubt sein — wer einen blockiert, verliert einen Sichtbarkeitskanal.',
        },
        {
            q: 'Was kostet ChatGPT-Optimierung für Unternehmen?',
            a: 'Viele Grundlagen sind kostenlos umsetzbar: NAP-Konsistenz, robots.txt-Optimierung, Bing Webmaster Tools. Für eine professionelle Strategie mit Pressearbeit, Brand Mentions und laufendem Monitoring solltest du ein monatliches Budget einplanen.',
        },
        {
            q: 'Erfindet ChatGPT Informationen über mein Unternehmen?',
            a: 'Ja, regelmäßig. ChatGPT halluziniert falsche Preise, Öffnungszeiten und Dienstleistungen, wenn die Datenlage dünn oder widersprüchlich ist. Je mehr konsistente Quellen du aufbaust, desto geringer das Halluzinationsrisiko.',
        },
    ];

    return (
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-12">
                    Häufig gestellte Fragen zur ChatGPT-Sichtbarkeit
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
                            Ahrefs (2025): LLM SEO – Brand Mentions Correlation Study (r=0,664)
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
                <a
                    href="/wissen/ai-overviews-sichtbarkeit"
                    className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
                >
                    <p className="font-semibold text-black group-hover:text-brand-accent transition-colors mb-1">
                        AI Overviews Sichtbarkeit
                    </p>
                    <p className="text-sm text-gray-500">
                        Googles KI-Antworten: So wirst du in AI Overviews als Quelle zitiert.
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
                        Tools, Metriken und Prozesse, um deine Sichtbarkeit in KI-Systemen zu tracken.
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
                        robots.txt, Schema.org, Crawler-Steuerung – die technischen Grundlagen.
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
                        ChatGPT empfiehlt deinen Wettbewerber.{' '}
                        <span className="text-gray-400">Du erfährst es nicht einmal.</span>
                    </h2>
                    <p className="text-lg text-gray-300 mb-4 max-w-2xl leading-relaxed">
                        Ich prüfe, ob und wie ChatGPT dein Unternehmen aktuell darstellt – Trainingsdaten
                        und Live-Suche. Inklusive Halluzinations-Check: Erfindet ChatGPT falsche Fakten über dich?
                    </p>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                        Kostenlos. In 48 Stunden. Ohne Verpflichtung.
                    </p>
                    <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose ChatGPT-Analyse anfragen" className="!py-4 !px-8" />
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
                <ProblemSection />
                <HallucinationSection />
                <DualSystemSection />
                <FactorsSection />
                <StrategiesSection />
                <HamburgSection />
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
