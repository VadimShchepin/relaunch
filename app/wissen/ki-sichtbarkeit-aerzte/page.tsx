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
    description: 'Wie Arztpraxen in ChatGPT, Perplexity und Google AI empfohlen werden, ohne gegen das Heilmittelwerbegesetz zu verstoßen. Mit HWG-konformer Formulierungstabelle, KI-Vertrauensleiter und MedicalClinic-Schema.',
    image: [
        'https://aiseo.hamburg/photo/wissen_assets/chiropraktiker-gemini.webp',
        'https://aiseo.hamburg/photo/wissen_assets/medical-authority-ladder.webp',
        'https://aiseo.hamburg/photo/wissen_assets/medicalclinic-physician-schema.webp',
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
            name: 'Nutzen Patienten wirklich KI für die Arztsuche?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Laut Bitkom Digital Health 2025 (20.11.2025, n=1.145) recherchieren 73 Prozent der Menschen in Deutschland Gesundheitsfragen online, und 45 Prozent haben dafür bereits einen KI-Chatbot wie ChatGPT, Gemini oder Copilot genutzt. Eine saubere deutsche Statistik speziell zu "unter 35 wählt den Arzt per ChatGPT" gibt es noch nicht. Das Verhalten ist aber bereits angrenzend da: Von den KI-Nutzern sagen 50 Prozent, dass sie Symptome mit einem KI-Chatbot besser verstehen als mit klassischer Suche.',
            },
        },
        {
            '@type': 'Question',
            name: 'Bewegen Jameda- und Doctolib-Bewertungen wirklich KI-Empfehlungen?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'In meiner Arbeit mit Hamburger Praxen ist das zentrale Spiel das Bewertungsmanagement. Wichtig ist, auf allen relevanten Plattformen präsent zu sein (Google, Jameda, Doctolib) und die Bewertungen konsistent und frisch zu halten. Entscheidend ist nicht die reine Masse, sondern Qualität und Aktualität: etwa eine neue Bewertung pro Woche signalisiert Google und KI-Systemen, dass die Praxis aktiv ist und neue Patienten aufnimmt.',
            },
        },
        {
            '@type': 'Question',
            name: 'Wie viele Bewertungen braucht eine Praxis, um in der KI sichtbar zu sein?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Es gibt keine offizielle Jameda-Schwelle. Aus den sichtbaren Hamburger Kategorieseiten lässt sich ein praktischer Richtwert ableiten: ab etwa 30 Bewertungen wirkt ein Profil glaubwürdig, ab 75 stark, ab 150 ist es ein echter Wettbewerbsvorteil in umkämpften Fachrichtungen. Das ist ein beobachteter Richtwert, keine offizielle Ranking-Regel.',
            },
        },
        {
            '@type': 'Question',
            name: 'Was darf eine Praxis laut HWG online über sich schreiben?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Das Heilmittelwerbegesetz (§ 3 HWG) verbietet irreführende Werbung, also vor allem Heilversprechen und den falschen Eindruck garantierter Erfolge. In der Praxis ist das weniger einschränkend, als viele denken: Eine Praxis darf sachlich, indikationsbezogen und prozessorientiert beschreiben, welche Schwerpunkte sie hat, wie eine Behandlung abläuft und wie gut sie auf neue Patienten vorbereitet ist. Vermeiden sollte man Garantien, Erfolgsversprechen und unbelegte Überlegenheitsbehauptungen.',
            },
        },
        {
            '@type': 'Question',
            name: 'Wie oft sollte eine Praxis neue Bewertungen sammeln?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Aus der Praxis: Eine neue Bewertung pro Woche reicht, um das Profil "lebendig" zu halten. Viele Praxen haben viele alte Bewertungen, aber nichts Frisches. Stagnierende Profile wirken auf Google und KI-Systeme so, als nehme die Praxis keine neuen Patienten mehr auf, und werden seltener in den ersten Empfehlungen genannt.',
            },
        },
        {
            '@type': 'Question',
            name: 'Welche Fachrichtung wird in KI am häufigsten gefragt?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Es gibt keinen klaren Spitzenreiter. Gefragt wird, was Patienten gerade brauchen, und das verteilt sich über alle Fachrichtungen. Jede Indikation kann zur KI-Anfrage werden. Statt auf eine vermeintliche "Top-Fachrichtung" zu setzen, lohnt es sich, die eigenen Behandlungsschwerpunkte konkret und auffindbar zu machen.',
            },
        },
        {
            '@type': 'Question',
            name: 'Hilft Schema.org MedicalClinic-Markup meiner Praxis bei KI-Sichtbarkeit?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ja. Mit MedicalClinic für die Praxis und Physician für die Ärztin oder den Arzt werden Fachgebiet, Adresse, Öffnungszeiten und verknüpfte Profile (Google, Jameda, Doctolib, Ärztekammer) maschinenlesbar. Das Markup bildet eine saubere Kette von Praxis über Arztprofil bis zu den einzelnen Behandlungsseiten und reduziert Interpretationsfehler in KI-Empfehlungen.',
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
    <section className="relative pt-32 pb-12 md:pt-52 md:pb-16 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
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
                &bdquo;Welcher Chiropraktiker in Hamburg ist gut?&ldquo; Solche Fragen landen heute in
                ChatGPT, Gemini und Perplexity. Die KI nennt zwei bis drei Praxen. Im Medizinbereich
                gelten dabei die strengsten Vertrauensregeln im Netz, plus das Heilmittelwerbegesetz.
                Dieser Guide zeigt, was eine Praxis schreiben darf und was die KI trotzdem verstehen muss.
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
                        <span>45 % der Menschen in Deutschland haben laut Bitkom (Digital Health 2025) schon einen KI-Chatbot für Gesundheitsfragen genutzt. Eine saubere Zahl speziell zur Arztwahl gibt es noch nicht, das Verhalten ist aber angrenzend da.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">2.</span>
                        <span>Das eigentliche Spiel bei Praxen sind die Bewertungen. Nicht die Masse zählt, sondern Qualität und Frische: rund eine neue Bewertung pro Woche hält das Profil &bdquo;lebendig&ldquo;.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">3.</span>
                        <span>Das Heilmittelwerbegesetz (§ 3 HWG) begrenzt, was eine Praxis behaupten darf. Sachlich, indikationsbezogen und prozessorientiert formuliert bleibt erstaunlich viel erlaubt (siehe Formulierungstabelle).</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">4.</span>
                        <span>Beiträge in Magazinen und Fachjournalen über die Praxis sind der stärkste E-E-A-T-Hebel. Das macht fast keine Praxis, also ist hier am meisten zu holen.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">5.</span>
                        <span>Bewertungen sind das schwächste medizinische Signal. Stärker wirken Fachgesellschaft/Leitlinie, Studienlage und der offizielle Ärztekammer-Eintrag (KI-Vertrauensleiter).</span>
                    </li>
                </ul>
            </div>
        </FadeIn>
    </section>
);

// Proof Section (real AI answer)
const ProofSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-6">
                So sieht eine KI-Arztempfehlung aus
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-10">
                <p>
                    Fragt man Gemini &bdquo;Welcher Chiropraktiker in Hamburg ist gut?&ldquo;, kommt keine
                    Linkliste, sondern eine kurze Empfehlung mit konkreten Namen und Stadtteilen. Genau
                    diese zwei bis drei Plätze entscheiden, wen der Patient kontaktiert. Wer nicht
                    genannt wird, existiert für diese Anfrage nicht.
                </p>
            </div>

            <figure className="mb-10">
                <img
                    src="/photo/wissen_assets/chiropraktiker-gemini.webp"
                    alt="Gemini beantwortet die Frage nach einem guten Chiropraktiker in Hamburg mit konkreten Praxen samt Stadtteil, darunter Felix Chiropraxis in Rahlstedt und Chiro Chris in Rotherbaum"
                    className="w-full rounded-2xl shadow-lg border border-gray-100"
                    loading="eager"
                    width={880}
                    height={976}
                />
                <figcaption className="text-sm text-gray-500 mt-3">
                    Gemini auf &bdquo;Welcher Chiropraktiker in Hamburg ist gut?&ldquo;: Die KI nennt
                    konkrete Praxen mit Stadtteil (Rahlstedt, Innenstadt, Rotherbaum, Wandsbek) und
                    begründet jede Empfehlung. Sichtbar werden die Praxen mit gepflegten, gut bewerteten
                    Profilen, nicht die mit der schönsten Website.
                </figcaption>
            </figure>

            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
                <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">Ehrlich eingeordnet</p>
                <p className="text-lg text-gray-800 leading-relaxed">
                    Das ist eine allgemeine KI-Antwort, kein Mandanten-Screenshot. Für den Medizinbereich
                    veröffentliche ich keine Patienten- oder Praxisdaten. Aber genau dieses Muster, zwei
                    bis drei namentlich genannte Praxen, ist der Grund, warum sich KI-Sichtbarkeit für
                    Praxen lohnt: Es geht um einen der wenigen verbliebenen Empfehlungsplätze.
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
                Das Problem: Patienten fragen die KI, bevor sie googeln
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    Die Patientenreise hat sich verschoben. Früher: Google-Suche, Jameda lesen, anrufen.
                    Heute tippen viele ihre Frage direkt in ChatGPT, Gemini oder Perplexity, und nehmen
                    die Antwort als neutrale Empfehlung.
                </p>
            </div>

            <div className="bg-white border-2 border-brand-accent rounded-xl p-6 my-8 shadow-sm">
                <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">Die Datenlage (Bitkom Digital Health 2025)</p>
                <p className="text-2xl md:text-3xl font-semibold text-black mb-2">
                    45 % haben KI für Gesundheitsfragen genutzt
                </p>
                <p className="text-gray-600">
                    73 % der Menschen in Deutschland recherchieren Symptome oder Gesundheitsthemen online,
                    45 % haben dafür schon einen KI-Chatbot wie ChatGPT, Gemini oder Copilot eingesetzt
                    (Bitkom, 20.11.2025, n=1.145). Von diesen KI-Nutzern sagen 50 %, sie verstünden
                    Symptome damit besser als mit klassischer Internetsuche, und 55 % vertrauen den
                    Chatbot-Antworten grundsätzlich.
                </p>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                    <strong className="text-black">Ehrliche Einordnung zur Zahl, die überall kursiert.</strong> Eine
                    belastbare deutsche Statistik mit der Aussage &bdquo;X % der unter 35-Jährigen wählen
                    ihren Arzt über ChatGPT&ldquo; existiert bislang nicht. Solche Zahlen werden oft frei
                    behauptet. Belegbar ist die angrenzende Verhaltensänderung: Recherche zu Symptomen und
                    Gesundheitsthemen wandert in die KI, und von dort ist es ein kurzer Schritt zur Frage
                    &bdquo;Welche Praxis in meiner Nähe?&ldquo;.
                </p>
                <p>
                    <strong className="text-black">Deine Praxis ist exzellent, aber die KI weiß das nicht.</strong> Zufriedene
                    Patienten, ein voller Wartebereich und ein guter Ruf im Stadtteil sind für ein
                    Sprachmodell unsichtbar, solange sie sich nicht in maschinenlesbaren, konsistenten und
                    frischen Signalen niederschlagen. Genau diese Signale baut dieser Guide auf, ohne das
                    Heilmittelwerbegesetz zu verletzen.
                </p>
            </div>
        </FadeIn>
    </section>
);

// Expert Section (first-hand experience)
const ExpertSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-6">
                Was bei Hamburger Praxen wirklich zieht
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-10">
                <p>
                    Ich habe mit mehreren Praxen in Hamburg gearbeitet, und Medizin ist ein anderes Spiel
                    als jede andere Branche. Vertrauen bedeutet hier deutlich mehr. Vier Dinge entscheiden
                    aus meiner Erfahrung am stärksten, und keines davon ist eine schöne Startseite.
                </p>
            </div>

            <div className="space-y-6">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">1. Bewertungen sind das Spiel, und Frische schlägt Masse</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Der wichtigste Hebel ist das Bewertungsmanagement: neue Bewertungen sammeln und sie
                        hoch halten. Dabei zählt nicht in erster Linie die Anzahl, sondern die Qualität und
                        vor allem die Aktualität. Eine neue Bewertung pro Woche reicht, damit Google die
                        Praxis als lebendig einstuft, als einen Ort, an dem aktuell Menschen behandelt werden
                        und an dem eine Empfehlung gebraucht wird. Das funktioniert genauso für KI-Systeme.
                    </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">2. Stagnierende Profile fallen zu Recht heraus</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Es gibt viele Praxen mit vielen alten Bewertungen, die keine neuen Patienten mehr
                        aufnehmen, weil sie voll sind. Solche Profile gehören eigentlich nicht in die erste
                        Empfehlung, und Google wie KI behandeln sie auch so. Wer dagegen kontinuierlich
                        frische Signale liefert, rückt nach vorne, weil er der KI zeigt: hier werden neue
                        Patienten angenommen.
                    </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">3. Magazine und Journale sind der E-E-A-T-Turbo</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Was am stärksten auf das E-E-A-T-Profil einzahlt, sind Magazine und Fachjournale, die
                        über die Praxis schreiben. Eine unabhängige Quelle, die die Praxis erwähnt, wiegt
                        weit mehr als jeder Selbsttext auf der eigenen Website. Und kaum eine Praxis
                        optimiert überhaupt für KI, schon gar nicht über Medienarbeit. Genau das ist die
                        Lücke, die sich gerade nutzen lässt.
                    </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">4. HWG ist weniger einschränkend, als alle denken</h3>
                    <p className="text-gray-600 leading-relaxed">
                        In der Praxis verbietet das Heilmittelwerbegesetz nicht viel von dem, was eine Praxis
                        sagen will. Sie muss nicht tief in Patientendetails gehen. Es reicht zu zeigen, wie
                        gut die Praxis auf neue Patienten vorbereitet ist, was im Alltag passiert und welche
                        Schwerpunkte sie hat. Da gibt es enorm viel Spielraum, ganz ohne Rechtsverstoß. Die
                        konkrete Grenze steht im nächsten Abschnitt.
                    </p>
                </div>
            </div>
        </FadeIn>
    </section>
);

// HWG Phrasing Table Section (unique asset)
const HWGSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-6">
                HWG-konforme KI-Sichtbarkeit: was du schreiben darfst
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Das <strong className="text-black">Heilmittelwerbegesetz (HWG)</strong> ist der Grund,
                    warum medizinische KI-Sichtbarkeit anders funktioniert als für jede andere Branche.
                    Drei Paragraphen sind für Praxis-Websites und KI-Inhalte relevant:
                </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-10">
                <div className="bg-white border border-gray-100 rounded-2xl p-5">
                    <p className="font-semibold text-black mb-1">§ 3 HWG</p>
                    <p className="text-sm text-gray-600">Verbot irreführender Werbung. Keine Heilversprechen, kein Eindruck eines sicher zu erwartenden Erfolgs.</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-5">
                    <p className="font-semibold text-black mb-1">§ 11 HWG</p>
                    <p className="text-sm text-gray-600">Grenzen der Publikumswerbung. Unter anderem keine Vorher-Nachher-Bilder bei Schönheitsoperationen ohne medizinische Notwendigkeit.</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-5">
                    <p className="font-semibold text-black mb-1">§ 9 HWG</p>
                    <p className="text-sm text-gray-600">Werbung für Fernbehandlung nur, wenn kein persönlicher Arztkontakt erforderlich ist und fachliche Standards eingehalten werden.</p>
                </div>
            </div>

            <h3 className="font-semibold text-black text-xl mb-4">Formulierungstabelle: riskant vs. HWG-bewusst</h3>
            <p className="text-gray-600 mb-6">
                Die meisten Wettbewerber reden über &bdquo;Sichtbarkeit&ldquo;. Kaum jemand übersetzt das
                Medizinwerberecht in nutzbare Textregeln. Diese Tabelle macht genau das.
            </p>

            <div className="overflow-x-auto -mx-2 px-2">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                    <thead>
                        <tr className="border-b-2 border-gray-200">
                            <th className="py-3 pr-4 font-semibold text-brand-orange align-top w-1/2">Riskant / problematisch</th>
                            <th className="py-3 pl-4 font-semibold text-brand-accent align-top w-1/2">HWG-bewusst formuliert</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 align-top">
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4">&bdquo;Wir heilen Ihre Rückenschmerzen dauerhaft.&ldquo;</td>
                            <td className="py-3 pl-4">&bdquo;Wir untersuchen die Ursache Ihrer Rückenschmerzen und besprechen geeignete Behandlungsmöglichkeiten.&ldquo;</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4">&bdquo;Garantiert schmerzfrei.&ldquo;</td>
                            <td className="py-3 pl-4">&bdquo;Wir arbeiten mit schonenden Verfahren und besprechen Möglichkeiten zur Schmerzlinderung individuell.&ldquo;</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4">&bdquo;Die beste Hautarztpraxis in Hamburg.&ldquo;</td>
                            <td className="py-3 pl-4">&bdquo;Dermatologische Praxis in Hamburg mit Schwerpunkt Hautkrebsvorsorge, Akne, Rosazea und ästhetischer Dermatologie.&ldquo;</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4">&bdquo;Unsere Behandlung wirkt bei jedem Patienten.&ldquo;</td>
                            <td className="py-3 pl-4">&bdquo;Ob eine Behandlung geeignet ist, hängt von Diagnose, Befund und individuellen Faktoren ab.&ldquo;</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4">&bdquo;Keine Risiken, keine Nebenwirkungen.&ldquo;</td>
                            <td className="py-3 pl-4">&bdquo;Mögliche Risiken und Nebenwirkungen werden vor der Behandlung ärztlich besprochen.&ldquo;</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4">&bdquo;Vorher-nachher: perfektes Ergebnis nach Filler.&ldquo;</td>
                            <td className="py-3 pl-4">&bdquo;Bei ästhetischen Behandlungen beraten wir individuell zu Möglichkeiten, Grenzen und Risiken.&ldquo;</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4">&bdquo;Nie wieder Angst vorm Zahnarzt.&ldquo;</td>
                            <td className="py-3 pl-4">&bdquo;Wir nehmen uns Zeit für Angstpatient:innen und erklären jeden Behandlungsschritt transparent.&ldquo;</td>
                        </tr>
                        <tr>
                            <td className="py-3 pr-4">&bdquo;ChatGPT empfiehlt uns als beste Praxis.&ldquo;</td>
                            <td className="py-3 pl-4">&bdquo;Wir stellen strukturierte, sachliche Informationen bereit, damit Patient:innen und digitale Suchsysteme unsere Leistungen, Schwerpunkte und Erreichbarkeit besser einordnen können.&ldquo;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-gray-500 mt-4 text-sm">
                Die linke Spalte enthält typische Heilversprechen und Überlegenheitsbehauptungen, die nach
                § 3 HWG problematisch sind. Die rechte Spalte sagt inhaltlich dasselbe, bleibt aber
                sachlich, indikationsbezogen und diagnoseabhängig. Keine Rechtsberatung, im Zweifel die
                Formulierung anwaltlich prüfen lassen.
            </p>
        </FadeIn>
    </section>
);

// Authority Ladder Section
const AuthorityLadderSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-6">
                Die KI-Vertrauensleiter für Arztpraxen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-10">
                <p>
                    Für medizinische KI-Sichtbarkeit reicht es nicht, viele Bewertungen zu haben.
                    KI-Systeme gewichten medizinische Autoritätssignale unterschiedlich stark. Von oben
                    nach unten nimmt das medizinische Gewicht ab, der Bewertungs-Charakter zu.
                </p>
            </div>

            <figure className="mb-10">
                <img
                    src="/photo/wissen_assets/medical-authority-ladder.webp"
                    alt="KI-Vertrauensleiter: Fachgesellschaft und Leitlinie oben, darunter PubMed und Studienlage, dann Ärztekammer-Eintrag, unten Jameda- und Google-Bewertungen"
                    className="w-full rounded-2xl shadow-lg border border-gray-100"
                    loading="lazy"
                    width={1200}
                    height={1500}
                />
                <figcaption className="text-sm text-gray-500 mt-3">
                    Was KI als medizinische Autorität wertet, von oben (stärkstes Signal) nach unten
                    (Reputationssignal). Bewertungen helfen, sind aber kein medizinischer Beleg.
                </figcaption>
            </figure>

            <div className="space-y-4">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <p className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-1">Stufe 1, stärkstes Signal</p>
                    <h3 className="font-semibold text-black text-lg mb-2">Fachgesellschaft / Leitlinie</h3>
                    <p className="text-gray-600 text-base">
                        Leitlinien-Konsens auf höchster Ebene. Die AWMF beschreibt offizielle Leitlinien als
                        Entscheidungshilfen für Ärztinnen, Ärzte, Gesundheitspersonal und Patienten. Wer
                        Inhalte an anerkannte Leitlinien anlehnt, baut das belastbarste Vertrauenssignal auf.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <p className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-1">Stufe 2</p>
                    <h3 className="font-semibold text-black text-lg mb-2">PubMed / Studienlage</h3>
                    <p className="text-gray-600 text-base">
                        Peer-reviewte medizinische Literatur. PubMed umfasst über 40 Millionen Nachweise.
                        Eine Verknüpfung der eigenen Schwerpunkte mit wissenschaftlichen Quellen ist ein
                        starkes Evidenzsignal, das im richtigen Kontext stehen muss.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <p className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-1">Stufe 3</p>
                    <h3 className="font-semibold text-black text-lg mb-2">Ärztekammer / offizieller Eintrag</h3>
                    <p className="text-gray-600 text-base">
                        Identitäts- und Legitimitätssignal: Kammereintrag, Facharzttitel, Approbation. Es
                        bestätigt, dass die Ärztin oder der Arzt fachlich und offiziell zuordenbar ist.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Stufe 4, Reputationssignal</p>
                    <h3 className="font-semibold text-black text-lg mb-2">Jameda / Google / Patientenbewertungen</h3>
                    <p className="text-gray-600 text-base">
                        Nützlich und wichtig für die lokale Sichtbarkeit, medizinisch aber schwächer. Hier
                        wirken Frische und Konsistenz am stärksten (siehe Bewertungs-Richtwerte unten).
                    </p>
                </div>
            </div>

            <div className="bg-[#121212] text-white rounded-2xl p-6 md:p-8 mt-8">
                <p className="text-lg leading-relaxed">
                    KI-Sichtbarkeit für Arztpraxen entsteht nicht durch mehr Keywords, sondern durch eine
                    saubere Autoritätskette: Leitlinie, Studienlage, offizielles Arztprofil, konsistente
                    Patientenbewertungen, strukturierte Praxisdaten.
                </p>
            </div>
        </FadeIn>
    </section>
);

// Review Benchmark Section (Jameda / Doctolib)
const ReviewBenchmarkSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-6">
                Jameda, Doctolib und wie viele Bewertungen wirklich zählen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                    Für KI-Empfehlungen zählen beide großen Plattformen, weil KI-Systeme sie als
                    strukturierte Vertrauens- und Reputationssignale lesen. Die Rollen sind unterschiedlich:
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Doctolib = Termin-Infrastruktur</h3>
                    <p className="text-gray-600 text-base">
                        Der dominante Akteur bei Terminbuchung und Praxis-Workflow. Laut Doctolib Digital
                        Health Report 2026 (1.000 Patienten, über 400 Ärzte und MFA) finden nur 35 % der
                        Patienten die Terminsuche einfach, 64 % haben schon eine Behandlung verschoben, weil
                        Praxis- oder Terminsuche zu mühsam war. 72 % würden einen KI-Terminassistenten nutzen,
                        die höchste Zustimmung aller getesteten KI-Anwendungen.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-3">Jameda = Reputation &amp; Verzeichnis</h3>
                    <p className="text-gray-600 text-base">
                        Die große Bewertungs- und Arztsuche-Plattform. Nach eigenen Angaben mehr als 411.000
                        Ärzte und Gesundheitsfachpersonen, über 1 Million buchbare Termine und über 2 Millionen
                        verifizierte Patientenfeedbacks. Die vzbv hat 2025 beide Portale untersucht und als
                        kommerzielle Terminplattformen mit Transparenzproblemen eingeordnet.
                    </p>
                </div>
            </div>

            <h3 className="font-semibold text-black text-xl mb-4">Bewertungs-Richtwert (beobachtet, keine offizielle Regel)</h3>
            <p className="text-gray-600 mb-6">
                Es gibt keine offizielle Schwelle &bdquo;sichtbar ab X Bewertungen&ldquo;. Aus den
                sichtbaren Hamburger Jameda-Kategorieseiten (Hautärzte, Zahnärzte) lässt sich aber ein
                praktischer Korridor ableiten.
            </p>

            <div className="overflow-x-auto -mx-2 px-2">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                    <thead>
                        <tr className="border-b-2 border-gray-200">
                            <th className="py-3 pr-4 font-semibold text-black">Bewertungsanzahl</th>
                            <th className="py-3 pl-4 font-semibold text-black">Einordnung</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 font-medium text-gray-800">0&ndash;5</td>
                            <td className="py-3 pl-4">Schwaches Vertrauenssignal, wirkt dünn (außer in Nischen mit wenig Konkurrenz)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 font-medium text-gray-800">10&ndash;25</td>
                            <td className="py-3 pl-4">Grundglaubwürdigkeit, das Profil wirkt nicht mehr leer</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 font-medium text-gray-800">30&ndash;60</td>
                            <td className="py-3 pl-4">Lokal glaubwürdig, in den meisten Fachrichtungen wettbewerbsfähig</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 font-medium text-gray-800">75&ndash;120</td>
                            <td className="py-3 pl-4">Starkes Vertrauenssignal, typisch für etablierte Praxen</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 font-medium text-gray-800">150+</td>
                            <td className="py-3 pl-4">Kategorieführer-Signal in umkämpften Fachrichtungen</td>
                        </tr>
                        <tr>
                            <td className="py-3 pr-4 font-medium text-gray-800">250&ndash;400+</td>
                            <td className="py-3 pl-4">Dominanter Reputations-Ausreißer</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-gray-500 mt-4 text-sm">
                Faustregel: 30+ als Minimum für sichtbare Glaubwürdigkeit, 75+ als stark, 150+ als echten
                Wettbewerbsvorteil. Wichtiger als der Endstand ist die Frische: rund eine neue Bewertung
                pro Woche hält das Profil aktiv.
            </p>
        </FadeIn>
    </section>
);

// Schema Section (MedicalClinic / Physician)
const SchemaSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-6">
                MedicalClinic- und Physician-Schema: die Praxis maschinenlesbar machen
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-10">
                <p>
                    Schema.org hat eigene Typen für <strong className="text-black">MedicalClinic</strong> (die
                    Praxis) und <strong className="text-black">Physician</strong> (die Ärztin oder den Arzt).
                    Damit verknüpfst du Praxis, Arztprofil und Behandlungsseiten zu einer Kette, die
                    KI-Systeme ohne Interpretation lesen können: Fachgebiet, Adresse, Öffnungszeiten und die
                    verknüpften Profile (Google, Jameda, Doctolib, Ärztekammer) über das Feld
                    <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded mx-1">sameAs</code>.
                </p>
            </div>

            <figure className="mb-10">
                <img
                    src="/photo/wissen_assets/medicalclinic-physician-schema.webp"
                    alt="Schema-Diagramm: MedicalClinic verweist über employee auf Physician, dieser über knowsAbout auf Behandlungs- und Themenseiten, alle mit sameAs zu Google, Jameda, Doctolib und Ärztekammer"
                    className="w-full rounded-2xl shadow-lg border border-gray-100"
                    loading="lazy"
                    width={1200}
                    height={900}
                />
                <figcaption className="text-sm text-gray-500 mt-3">
                    Die Kette: MedicalClinic verweist per
                    <code className="text-xs bg-gray-100 px-1 py-0.5 rounded mx-1">employee</code> auf den
                    Physician, dieser per
                    <code className="text-xs bg-gray-100 px-1 py-0.5 rounded mx-1">knowsAbout</code> auf die
                    Behandlungsseiten. Jede Ebene trägt
                    <code className="text-xs bg-gray-100 px-1 py-0.5 rounded mx-1">sameAs</code>-Verweise auf
                    die externen Profile.
                </figcaption>
            </figure>

            <h3 className="font-semibold text-black text-xl mb-4">JSON-LD-Beispiel für eine Praxisseite</h3>
            <div className="overflow-x-auto rounded-2xl bg-[#121212] p-5 md:p-6 text-sm leading-relaxed">
                <pre className="text-gray-200 whitespace-pre"><code>{`{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://www.beispiel-praxis.de/#clinic",
  "name": "Praxis Dr. Beispiel",
  "url": "https://www.beispiel-praxis.de/",
  "telephone": "+49-40-123456",
  "medicalSpecialty": "Dermatologic",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstraße 12",
    "postalCode": "20095",
    "addressLocality": "Hamburg",
    "addressCountry": "DE"
  },
  "sameAs": [
    "https://www.jameda.de/...",
    "https://www.doctolib.de/...",
    "https://www.google.com/maps?cid=..."
  ],
  "employee": {
    "@type": "Physician",
    "name": "Dr. med. Max Beispiel",
    "medicalSpecialty": "Dermatology",
    "sameAs": [
      "https://www.aerztekammer-hamburg.org/...",
      "https://www.jameda.de/..."
    ]
  }
}`}</code></pre>
            </div>
            <p className="text-gray-500 mt-4 text-sm">
                Hinweis zur Google/Bing-Doppelnatur: Google sagt offiziell, spezielles Schema sei für seine
                KI-Funktionen nicht nötig. Für Bing und damit ChatGPT-Websuche sind klar definierte,
                verknüpfte Entitäten dagegen ein messbarer Vorteil. Das Markup schadet Google nie und hilft
                der anderen Hälfte der KI-Landschaft.
            </p>
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
                    Nicht alle Signale sind gleich stark. Diese fünf entscheiden, ob deine Praxis von
                    ChatGPT, Perplexity und Google AI genannt wird.
                </p>
            </div>

            <div className="space-y-6">
                {[
                    {
                        title: 'Bewertungsprofil mit Frische (Google, Jameda, Doctolib)',
                        desc: 'Das stärkste lokale Signal. Entscheidend sind Gesamtnote (ab 4,5 wird es relevant), Anzahl (Richtwert: 30+ glaubwürdig, 75+ stark) und vor allem Aktualität: rund eine neue Bewertung pro Woche hält das Profil lebendig. Eine Praxis mit 200 Google-Bewertungen bei 4,7 und wöchentlichem Zulauf schlägt eine mit 12 alten Bewertungen bei 5,0.',
                    },
                    {
                        title: 'Externe Erwähnungen (Magazine, Fachjournale, Presse)',
                        desc: 'Der unterschätzte E-E-A-T-Hebel. Wird die Praxis in einem Magazin, Fachjournal oder lokalen Medium erwähnt, zählt das weit mehr als jeder Selbsttext. KI-Systeme cross-referenzieren: Taucht die Praxis nur auf der eigenen Seite auf, oder auch in unabhängigen Quellen? Kaum eine Praxis arbeitet hier, also ist der Vorsprung groß.',
                    },
                    {
                        title: 'Strukturierte Behandlungsseiten mit FAQ',
                        desc: 'Eine Seite "Unsere Leistungen" reicht nicht. KI-Systeme brauchen eigene, detaillierte Seiten pro Behandlung, jede mit den häufigsten Patientenfragen als FAQ. Diese Blöcke werden direkt als Antwortquelle zitiert, müssen aber HWG-konform bleiben: keine Garantien, keine Heilversprechen.',
                    },
                    {
                        title: 'Lokale Signale (NAP, Google Business Profil)',
                        desc: 'Name, Adresse, Telefonnummer auf jeder Plattform identisch. Die spezifische Kategorie wählen (nicht nur "Arzt", sondern die Fachrichtung), Öffnungszeiten aktuell halten, Praxisfotos hochladen. KI-Systeme nutzen das Google Business Profil als primäre lokale Datenquelle.',
                    },
                    {
                        title: 'Offizielle Einträge und Verknüpfung (Ärztekammer, Schema)',
                        desc: 'Kammereintrag, Facharzttitel und konsistente sameAs-Verknüpfung zwischen Website, Google, Jameda, Doctolib und Kammerprofil bilden die Autoritätskette aus der KI-Vertrauensleiter ab. Das ist das, was Bewertungen allein nicht liefern können.',
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
                        title: 'Bewertungen wöchentlich und plattformübergreifend sammeln',
                        text: 'Richte einen festen Prozess ein: nach dem Behandlungsabschluss eine freundliche Erinnerung per QR-Code in der Praxis oder per Mail. Ziel ist nicht ein Massen-Push, sondern ein steter Fluss von etwa einer neuen Bewertung pro Woche, parallel auf Google, Jameda und Doctolib. Reagiere auf jede Bewertung innerhalb von 48 Stunden, sachlich und ohne Patientendaten. Genau diese Frische ist das, was Stillstand-Profile von empfohlenen Praxen unterscheidet.',
                    },
                    {
                        num: '02',
                        title: 'Medienarbeit für E-E-A-T aufbauen',
                        text: 'Der stärkste Hebel und der am wenigsten genutzte. Biete dich als Experte für saisonale Gesundheitsthemen an (Hamburger Abendblatt, NDR, MOPO, Gesundheitsmagazine), schreibe Gastbeiträge, lass über Praxis-Schwerpunkte berichten. Jede unabhängige Erwähnung ist ein Vertrauenssignal, das KI-Systeme höher gewichten als jeden Eigentext.',
                    },
                    {
                        num: '03',
                        title: 'Behandlungsseiten HWG-konform strukturieren',
                        text: 'Pro Kernleistung eine eigene Unterseite: Was ist die Behandlung, für wen ist sie geeignet, wie läuft sie ab, Kasse oder IGeL, mit FAQ-Block. Formuliere durchgehend sachlich und diagnoseabhängig (siehe Formulierungstabelle). Beispiel: /leistungen/kniespiegelung statt einer Zeile in einer Übersicht.',
                    },
                    {
                        num: '04',
                        title: 'Google Business Profil mit Fachkategorie pflegen',
                        text: 'Wähle die spezifischste Kategorie (nicht "Arzt", sondern die Fachrichtung), fülle Leistungen, Versicherungen, Barrierefreiheit und Sprachen aus, lade echte Praxisfotos hoch und veröffentliche regelmäßig Posts. Das Profil ist die erste Anlaufstelle für lokale KI-Empfehlungen.',
                    },
                    {
                        num: '05',
                        title: 'Autoritätskette über Schema.org abbilden',
                        text: 'MedicalClinic für die Praxis, Physician für jeden Arzt, verknüpft per employee und knowsAbout, mit sameAs auf Google, Jameda, Doctolib und Ärztekammer. So liest die KI Fachgebiet, Standort und Legitimität ohne Interpretation. Das deckt die oberen Stufen der KI-Vertrauensleiter ab.',
                    },
                    {
                        num: '06',
                        title: 'Doctolib- und Jameda-Profile als KI-Datenquelle behandeln',
                        text: 'Vollständiges Profil mit Foto, Qualifikationen, Leistungsspektrum und Sprechzeiten. Auf Doctolib die Online-Terminbuchung aktivieren, das ist ein starkes Nutzersignal. Ein ausgefülltes Profil schlägt ein leeres, unabhängig von der Note. KI-Systeme werten die Profiltiefe als Qualitätsmerkmal.',
                    },
                    {
                        num: '07',
                        title: 'Patientenratgeber mit sichtbarer Autorenschaft',
                        text: 'Beantworte typische Patientenfragen verständlich, aber fachlich fundiert, und kennzeichne jeden Artikel mit Autorenbox (Name, Facharzttitel, Foto, Verlinkung zum Kammerprofil). Das ist Googles "Wer hat das erstellt?" in Reinform und zugleich direkter Antwort-Content für die KI.',
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
                    Eine Vorbemerkung: Es gibt keine &bdquo;Top-Fachrichtung&ldquo; in der KI. Gefragt
                    wird, was Patienten gerade brauchen, und das verteilt sich über alle Fachgebiete.
                    Die Hebel unterscheiden sich aber je nach Praxisstruktur.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
                {[
                    {
                        type: 'Hausarztpraxis',
                        tips: 'Stärkstes Signal: lokale Nähe und Verfügbarkeit. Optimiere für stadtteilspezifische Anfragen ("Hausarzt Hamburg-Eimsbüttel"). Betone Aufnahme neuer Patienten, kurze Wartezeiten und Online-Terminvergabe. Check-up- und Vorsorgeseiten sind idealer FAQ-Content.',
                    },
                    {
                        type: 'Zahnarztpraxis',
                        tips: 'Eigene Seiten für Implantologie, Prophylaxe und ästhetische Zahnmedizin. Preistransparenz bei IGeL ist ein starkes Differenzierungsmerkmal. Vorher-Nachher-Bilder nur mit Einwilligung und im HWG-Rahmen. Bewertungen mit konkreten Behandlungsberichten wirken besonders.',
                    },
                    {
                        type: 'Facharztpraxis',
                        tips: 'Hier zählt der Behandlungsschwerpunkt, nicht das generische Fachgebiet. "Kniechirurg Hamburg" schlägt "Orthopäde Hamburg". Publikationen, Kongressbeiträge und externe Erwähnungen haben das höchste Gewicht. Autorität in der Subspezialität aufbauen.',
                    },
                    {
                        type: 'MVZ / Gemeinschaftspraxis',
                        tips: 'Größenvorteil nutzen: mehr Ärzte bedeuten mehr Expertise-Signale und mehr Bewertungen. Individuelle Physician-Profile per Schema neben dem Gesamtprofil anlegen, untereinander und mit den Leistungsseiten verlinken. So kann die KI Praxis und einzelne Ärzte empfehlen.',
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
                    Hamburg hat über 12.000 niedergelassene Ärzte. In Stadtteilen wie Eppendorf,
                    Winterhude und der HafenCity ist der Wettbewerb um Patienten besonders intensiv. Genau
                    dort entscheidet KI-Sichtbarkeit über neue Patienten.
                </p>
                <p>
                    Die Ärztekammer Hamburg, das UKE als universitäre Referenz und die dichte
                    Facharzt-Landschaft schaffen ein Umfeld, in dem sich medizinisches E-E-A-T gut aufbauen
                    lässt. Eine Erwähnung im Hamburger Ärzteblatt oder eine Kooperation mit dem UKE ist ein
                    starkes lokales Vertrauenssignal.
                </p>
            </div>

            <div className="space-y-4 mt-6">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">Stadtteil-Optimierung</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Hamburg-Patienten suchen stadtteilspezifisch. Optimiere für &bdquo;Zahnarzt
                        Hamburg-Eppendorf&ldquo;, nicht nur für &bdquo;Zahnarzt Hamburg&ldquo;. KI-Systeme
                        verstehen Hamburger Stadtteile und gewichten lokale Nähe stark. Nenne deinen
                        Stadtteil auf der Website, im Google Business Profil und in Bewertungsantworten.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">Hamburger Medienlandschaft nutzen</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Hamburger Abendblatt, MOPO, NDR Hamburg Journal und Hamburg1 suchen regelmäßig
                        medizinische Experten. Ein Interview oder Gastbeitrag wird von KI-Systemen als
                        starkes lokales Autoritätssignal gewertet. Das ist die praktische Umsetzung des
                        Magazin- und Journal-Hebels.
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-black text-lg mb-2">Ärztekammer und Fachgesellschaften</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Mitgliedschaft in der Ärztekammer Hamburg, Auflistung im Arztregister der KV Hamburg
                        und Mitgliedschaften in Fachgesellschaften sind Signale, die KI-Systeme erkennen.
                        Stelle sicher, dass dein Eintrag in diesen Verzeichnissen vollständig und aktuell ist
                        und per sameAs mit deiner Website verknüpft wird.
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
            q: 'Nutzen Patienten wirklich KI für die Arztsuche?',
            a: 'Laut Bitkom Digital Health 2025 (20.11.2025, n=1.145) recherchieren 73 % der Menschen in Deutschland Gesundheitsfragen online, 45 % haben dafür schon einen KI-Chatbot wie ChatGPT, Gemini oder Copilot genutzt. Eine saubere Zahl speziell zur Arztwahl gibt es noch nicht. Belegbar ist die angrenzende Verhaltensänderung: 50 % der KI-Nutzer verstehen Symptome damit besser als mit klassischer Suche.',
        },
        {
            q: 'Bewegen Jameda- und Doctolib-Bewertungen wirklich KI-Empfehlungen?',
            a: 'In meiner Arbeit mit Hamburger Praxen ist das Bewertungsmanagement das zentrale Spiel. Wichtig ist, auf allen relevanten Plattformen präsent zu sein und die Bewertungen konsistent und frisch zu halten. Entscheidend ist nicht die reine Masse, sondern Qualität und Aktualität: etwa eine neue Bewertung pro Woche signalisiert Google und KI-Systemen, dass die Praxis aktiv ist.',
        },
        {
            q: 'Wie viele Bewertungen braucht eine Praxis, um in der KI sichtbar zu sein?',
            a: 'Es gibt keine offizielle Schwelle. Aus den sichtbaren Hamburger Jameda-Kategorieseiten lässt sich ein Richtwert ableiten: ab etwa 30 Bewertungen wirkt ein Profil glaubwürdig, ab 75 stark, ab 150 ist es in umkämpften Fachrichtungen ein echter Wettbewerbsvorteil. Beobachteter Richtwert, keine offizielle Ranking-Regel.',
        },
        {
            q: 'Was darf eine Praxis laut HWG online über sich schreiben?',
            a: 'Das Heilmittelwerbegesetz (§ 3 HWG) verbietet irreführende Werbung, vor allem Heilversprechen und garantierte Erfolge. In der Praxis bleibt aber viel erlaubt: Eine Praxis darf sachlich, indikationsbezogen und prozessorientiert beschreiben, welche Schwerpunkte sie hat, wie eine Behandlung abläuft und wie gut sie auf neue Patienten vorbereitet ist. Vermeiden sollte man Garantien und unbelegte Überlegenheitsbehauptungen.',
        },
        {
            q: 'Wie oft sollte eine Praxis neue Bewertungen sammeln?',
            a: 'Eine neue Bewertung pro Woche reicht, um das Profil lebendig zu halten. Viele Praxen haben viele alte Bewertungen, aber nichts Frisches. Stagnierende Profile wirken auf Google und KI-Systeme so, als nehme die Praxis keine neuen Patienten mehr auf, und werden seltener in den ersten Empfehlungen genannt.',
        },
        {
            q: 'Welche Fachrichtung wird in KI am häufigsten gefragt?',
            a: 'Es gibt keinen klaren Spitzenreiter. Gefragt wird, was Patienten gerade brauchen, und das verteilt sich über alle Fachrichtungen. Statt auf eine vermeintliche Top-Fachrichtung zu setzen, lohnt es sich, die eigenen Behandlungsschwerpunkte konkret und auffindbar zu machen.',
        },
        {
            q: 'Hilft Schema.org MedicalClinic-Markup meiner Praxis?',
            a: 'Ja. Mit MedicalClinic für die Praxis und Physician für die Ärztin oder den Arzt werden Fachgebiet, Adresse, Öffnungszeiten und verknüpfte Profile maschinenlesbar. Das Markup bildet eine saubere Kette von Praxis über Arztprofil bis zu den Behandlungsseiten und reduziert Interpretationsfehler in KI-Empfehlungen.',
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
                            href="https://www.bitkom.org/Presse/Presseinformation/Digital-Health"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Bitkom (20.11.2025): Digital Health 2025, 45 % nutzen KI-Chatbots für Gesundheitsfragen (n=1.145)
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.gesetze-im-internet.de/heilmwerbg/__3.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            § 3 HWG: Verbot irreführender Heilmittelwerbung (Gesetze im Internet)
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.gesetze-im-internet.de/heilmwerbg/__11.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            § 11 HWG: Grenzen der Publikumswerbung, u. a. Vorher-Nachher-Bilder (Gesetze im Internet)
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.awmf.org/leitlinien"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            AWMF: Leitlinien für Ärztinnen, Ärzte und Gesundheitspersonal
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.jameda.de/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Jameda: über 411.000 Ärzte, über 2 Mio. verifizierte Patientenfeedbacks (eigene Angabe)
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://schema.org/MedicalClinic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-brand-accent transition-colors"
                        >
                            Schema.org: MedicalClinic und Physician Markup-Dokumentation
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
                    href="/wissen/eeat-ki-sichtbarkeit"
                    className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
                >
                    <p className="font-semibold text-black group-hover:text-brand-accent transition-colors mb-1">
                        E-E-A-T für KI-Sichtbarkeit
                    </p>
                    <p className="text-sm text-gray-500">
                        Wie Experience, Expertise, Authoritativeness und Trust für die KI nachweisbar werden.
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
                        Ich prüfe, wie ChatGPT, Perplexity und Google AI deine Praxis aktuell darstellen,
                        und was du HWG-konform tun kannst, damit die KI dich empfiehlt. Kostenlos, in 48 Stunden.
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
                <ProofSection />
                <ProblemSection />
                <ExpertSection />
                <HWGSection />
                <AuthorityLadderSection />
                <ReviewBenchmarkSection />
                <SchemaSection />
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
