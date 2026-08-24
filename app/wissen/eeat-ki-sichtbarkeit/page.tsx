import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function EEATKISichtbarkeitPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/eeat-ki-sichtbarkeit"
      breadcrumbLabel="E-E-A-T und KI-Sichtbarkeit"
      eyebrow="Autorität"
      title="E-E-A-T und KI: Warum Expertise für ChatGPT wichtiger ist als für Google"
      description="Du hast eine Autoren-Bio auf deine Seite geknallt und denkst, E-E-A-T ist erledigt? Das ist das digitale Äquivalent eines Namensschilds an einer leeren Wand. KI-Systeme lesen keine Bios. Sie lesen alles andere."
      schemaImage="/og/wissen-eeat-ki-sichtbarkeit.png"
      publishedAt="2026-04-02"
      modifiedAt="2026-08-24"
      summaryItems={[
        'Google prüft deine Nachbarschaft, KI prüft deine Aussagen. Backlinks sagen Google, wer dich empfiehlt. KI vergleicht, ob deine Fakten mit anderen Quellen übereinstimmen.',
        'Konsistenz schlägt Autorität. KI-Systeme vertrauen Quellen, die über viele Dokumente hinweg die gleichen, verifizierbaren Aussagen machen.',
        'Eine Autoren-Bio ist kein E-E-A-T. Expertise zeigt sich in Inhalten, nicht in Selbstbeschreibungen.',
        'Experience ist der neue Differentiator. KI erkennt, ob du über etwas schreibst, das du erlebt hast, oder ob du Wikipedia umformulierst.',
        'E-E-A-T für KI ist kein Projekt, sondern ein Zustand. Du baust es nicht einmal auf, du lebst es, und KI merkt den Unterschied.',
      ]}
      sections={[
        {
          id: 'missverstaendnis',
          heading: 'Das große E-E-A-T-Missverständnis: Warum 90 % es falsch machen',
          intro:
            'Irgendwann im Jahr 2023 hat die SEO-Branche beschlossen, dass E-E-A-T bedeutet: Schreib eine Autoren-Bio, pack ein Foto daneben, fertig. Expertise demonstriert, Trust etabliert, ab jetzt liebt uns Google.',
          stat:
            'Kernunterschied: Google bewertet E-E-A-T anhand von Proxy-Signalen (Backlinks, Domain-Alter, technische Qualität). KI bewertet E-E-A-T anhand von inhaltlicher Konsistenz über Quellen hinweg.',
          paragraphs: [
            'Das ist ungefähr so, als würdest du dir einen weißen Kittel anziehen und erwarten, dass Patienten dich für einen Arzt halten. Das Kostüm ist nicht die Qualifikation.',
            'E-E-A-T steht für Experience, Expertise, Authoritativeness und Trustworthiness. Vier Dimensionen, die beschreiben, ob eine Quelle vertrauenswürdig ist. Google hat das Konzept für seine Quality Rater eingeführt, echte Menschen, die Suchergebnisse bewerten. Und jetzt, wo ChatGPT, Perplexity und Claude die Informationslandschaft umkrempeln, wird E-E-A-T noch wichtiger. Aber auch komplett anders.',
            'Wenn du verstehst, warum dieser Unterschied alles verändert, hast du einen Vorsprung vor 90 Prozent der SEO-Branche. Wenn nicht, es gibt noch genug Platz für Autoren-Bios auf leeren Websites.',
          ],
        },
        {
          id: 'google-vs-ki',
          heading: 'E-E-A-T bei Google vs. E-E-A-T bei KI: Zwei verschiedene Welten',
          intro:
            'Gleiche Buchstaben, komplett andere Mechanismen. Sechs Zeilen, die den Unterschied vollständig beschreiben.',
          paragraphs: [
            'Bei Google kannst du mit einem starken Backlink-Profil und einer autoritativen Domain auch mittelmäßigen Content auf Seite 1 bringen. Bei KI funktioniert das nicht. Ein LLM fragt nicht, ob eine Domain 10.000 Backlinks hat. Es fragt, ob eine Aussage korrekt und konsistent mit dem ist, was es aus anderen Quellen kennt.',
          ],
          table: {
            headers: ['Dimension', 'Google', 'KI-Systeme'],
            rows: [
              [
                'Experience',
                'Product Reviews, Fotos, nutzergenerierte Inhalte als Signale',
                'Sprachliche Muster: spezifische Details, persönliche Einschätzungen, keine generischen Formulierungen',
              ],
              [
                'Expertise',
                'Autoren-Bio, Credentials, thematische Tiefe der Website',
                'Konsistente Fachaussagen über mehrere Quellen, verifizierbare Fakten, semantische Tiefe',
              ],
              [
                'Authoritativeness',
                'Backlink-Profil, Domain Authority, Erwähnungen auf autoritativen Seiten',
                'Cross-Source-Bestätigung: Werden deine Aussagen von anderen Quellen gestützt?',
              ],
              [
                'Trustworthiness',
                'HTTPS, saubere Domain-History, keine Spam-Penalties',
                'Faktische Korrektheit, Widerspruchsfreiheit, Übereinstimmung mit dem Konsens',
              ],
              [
                'Hauptmechanismus',
                'Proxy-Signale (Links, technische Qualität)',
                'Inhaltliche Analyse: Was steht da, und stimmt das?',
              ],
              [
                'Manipulierbar?',
                'Ja, mit Link-Building, PBNs, gekauften Erwähnungen',
                'Deutlich schwerer. Du müsstest das gesamte Trainingskorpus manipulieren.',
              ],
            ],
            caption:
              'Die Zeile Hauptmechanismus ist der eigentliche Unterschied. Alles darüber folgt aus ihr.',
          },
          quote:
            'Google bewertet, wer auf dich zeigt. KI bewertet, was du sagst und ob es stimmt.',
        },
        {
          id: 'expertise-signale',
          heading: 'Die echten Expertise-Signale für KI, und warum deine Bio nicht dazugehört',
          intro:
            'Vergiss alles, was du über E-E-A-T-Checklisten gelesen hast. Diese fünf Signale zählen für KI-Systeme tatsächlich.',
          steps: [
            {
              title: 'Cross-Source-Konsistenz',
              text:
                'Das stärkste Signal. Wenn dein Name, deine Marke oder deine Website in den Trainingsdaten konsistent mit einem Fachthema verknüpft ist, über verschiedene Quellen hinweg, stuft die KI dich als Experten ein. Nicht weil du es behauptest, sondern weil es aus den Daten hervorgeht.',
              outro:
                'Praktisch bedeutet das: Gastbeiträge in Fachmedien, Podcast-Auftritte, Konferenzvorträge, LinkedIn-Artikel, Erwähnungen in Branchenberichten. Alles, was deinen Namen mit deinem Thema verknüpft, außerhalb deiner eigenen Website.',
            },
            {
              title: 'Semantische Tiefe',
              text:
                'Ein echter Experte benutzt Fachbegriffe natürlich. Er kennt die Nuancen, die Ausnahmen, die Randfälle. Ein Generalist schreibt, dass KI die Suche verändern wird. Ein Experte schreibt, dass Retrieval-Augmented Generation KI-Systemen erlaubt, aktuelle Webinhalte in Echtzeit einzubeziehen und damit die statischen Trainingsdaten zu ergänzen.',
              outro:
                'KI erkennt den Unterschied. Nicht durch einen magischen Expertise-Detektor, sondern durch statistische Muster: Experten-Texte korrelieren mit sprachlichen Merkmalen, die LLMs in ihren Trainingsdaten gelernt haben.',
            },
            {
              title: 'Verifizierbare Originalität',
              text:
                'Eigene Daten, eigene Studien, eigene Erfahrungsberichte. Ein Satz wie "wir haben 200 Hamburger KMU-Websites analysiert und nur 12 Prozent hatten eine llms.txt" ist zitierbarer als jede Zusammenfassung einer fremden Studie.',
              outro:
                'Warum? Weil nur du diese Daten hast. Wenn alle denselben Report zitieren, braucht die KI keine weitere Quelle, die dasselbe sagt. Sie braucht die Quelle, die etwas Neues beisteuert.',
            },
            {
              title: 'Widerspruchsfreiheit',
              text:
                'Wenn du auf einer Seite schreibst, AI SEO kostet ab 2.000 Euro monatlich, und auf einer anderen, es geht schon ab 500 Euro, hast du ein Trust-Problem. Nicht bei Google, der Crawler vergleicht deine Seiten nicht inhaltlich. Aber ein LLM, das beide Seiten in seinen Trainingsdaten hat, registriert den Widerspruch. Und widersprüchliche Quellen sind weniger vertrauenswürdig.',
            },
            {
              title: 'Schema.org als Maschinenlesbarer Beweis',
              text:
                'Strukturierte Daten sind für KI-Systeme das, was ein Notarstempel für ein Dokument ist. Person-Schema mit sameAs-Links zu LinkedIn, Organization-Schema mit nachweisbarer Adresse, Article-Schema mit Autor-Verknüpfung. Das ersetzt keine Expertise, aber es macht vorhandene Expertise maschinenlesbar. Für ein System, das Milliarden Seiten verarbeitet, ist Maschinenlesbarkeit kein Nice-to-have.',
            },
          ],
        },
        {
          id: 'bio-illusion',
          heading: 'Die Autoren-Bio-Illusion: Warum du dich selbst belügst',
          intro:
            'Spiel das einmal durch. Auf deiner Website steht: Max Mustermann ist ein führender Experte für digitales Marketing mit über 15 Jahren Erfahrung. Google liest das und notiert, dass es eine Autorenangabe gibt. ChatGPT liest das und notiert, dass er das über sich selbst sagt.',
          paragraphs: [
            'Merkst du das Problem? Selbstdeklarierte Expertise ist für KI wertlos. Es ist, als würdest du im Bewerbungsgespräch sagen, du seist der Beste, ohne Referenzen, ohne Portfolio, ohne nachweisbare Ergebnisse. Der Personaler lächelt höflich und legt den Lebenslauf auf den Nein-Stapel.',
            'Die Autoren-Bio ist nicht nutzlos. Für Google ist sie ein nützliches Signal im Gesamtkontext. Aber wenn sie dein einziges E-E-A-T-Signal ist, hast du kein E-E-A-T. Du hast eine Visitenkarte.',
          ],
        },
        {
          id: 'realitaetscheck',
          heading: 'Der E-E-A-T-Realitätscheck',
          intro: 'Prüfe ehrlich, wie viele dieser sechs Punkte auf dich zutreffen.',
          bullets: [
            'Dein Name erscheint auf externen Fachwebsites in Verbindung mit deinem Thema',
            'Du hast Gastbeiträge, Podcast-Auftritte oder Konferenzvorträge zum Thema',
            'Deine Inhalte enthalten eigene Daten, Studien oder einzigartige Erfahrungsberichte',
            'Andere Experten oder Medien zitieren deine Aussagen',
            'Dein LinkedIn-Profil bestätigt deine fachliche Ausrichtung mit nachweisbaren Stationen',
            'Deine Website hat Schema.org Person- oder Organization-Markup mit sameAs-Verlinkungen',
          ],
          note:
            '5 bis 6 Punkte: solide E-E-A-T-Basis für KI. 3 bis 4 Punkte: ausbaufähig, aber auf dem richtigen Weg. 0 bis 2 Punkte: du hast eine Autoren-Bio.',
        },
        {
          id: 'experience',
          heading: 'Experience: der geheime Vorteil, den KI besser erkennt als Google',
          intro:
            'Das erste E wurde 2022 hinzugefügt. Google wollte damit Content von Leuten belohnen, die tatsächlich Erfahrung mit dem Thema haben: der Restaurantkritiker, der im Restaurant war, der Reiseblogger, der wirklich dort war, der Handwerker, der das Werkzeug selbst benutzt.',
          paragraphs: [
            'Für Google ist Experience schwer zu verifizieren. Woher soll ein Algorithmus wissen, ob du wirklich in Vietnam warst? Er kann nur auf Proxies schauen: Fotos, spezifische Details, nutzergenerierte Reviews.',
            'Für KI ist Experience paradoxerweise einfacher zu erkennen. LLMs wurden auf Milliarden Texten trainiert und haben statistische Muster gelernt. Ein Text von jemandem, der etwas erlebt hat, klingt anders als ein Text von jemandem, der darüber gelesen hat: spezifischere Details, unerwartete Beobachtungen, persönliche Bewertungen, die von der Mainstream-Meinung abweichen.',
          ],
          cards: [
            {
              title: 'Ohne Experience',
              text:
                'KI-Sichtbarkeit ist ein wichtiger Trend im digitalen Marketing. Unternehmen sollten ihre Online-Präsenz für KI-Systeme optimieren, um zukunftsfähig zu bleiben. Klingt wie jeder andere Artikel zum Thema. KI hat keinen Grund, ausgerechnet das zu zitieren.',
            },
            {
              title: 'Mit Experience',
              text:
                'Als ich 2025 die Websites von 50 Hamburger KMU auf KI-Sichtbarkeit testete, hatte keine einzige eine llms.txt. Die häufigste Reaktion der Geschäftsführer war die Rückfrage, was ein LLM sei. Spezifisch, einzigartig, verifizierbar. Genau das, was KI als zitierbare Quelle braucht.',
            },
          ],
          quote:
            'Experience kannst du nicht faken. Eine Bio kannst du erfinden, Expertise kannst du mit zusammenkopierten Fachbegriffen simulieren. Echte Erfahrung produziert Text, der statistisch anders aussieht.',
        },
        {
          id: 'aufbauen',
          heading: 'E-E-A-T für KI aufbauen: Was tatsächlich funktioniert',
          intro:
            'Genug Theorie. Dieser Plan funktioniert, vorausgesetzt, du hast tatsächlich Expertise. Falls nicht, ist Schritt 0: Expertise aufbauen. Das dauert Jahre, dafür gibt es keine Abkürzung.',
          steps: [
            {
              title: 'Entitäts-Identität etablieren',
              text:
                'Dein Name oder deine Marke muss als Entität in den KI-Trainingsdaten existieren. Das bedeutet konsistente Präsenz über verschiedene Quellen hinweg: gleicher Name, gleiche Beschreibung, gleiche thematische Zuordnung.',
              bullets: [
                'LinkedIn-Profil mit klarer fachlicher Positionierung',
                'Google Business Profile, falls lokal relevant',
                'Crunchbase, XING, relevante Branchenverzeichnisse',
                'Schema.org Person und Organization mit sameAs-Links',
              ],
            },
            {
              title: 'Externe Expertise-Signale aufbauen',
              text:
                'Deine eigene Website allein reicht nicht. Du brauchst externe Bestätigung. KI-Systeme gewichten Quellen stärker, wenn die Expertise von Dritten bestätigt wird.',
              bullets: [
                'Gastbeiträge auf relevanten Fachportalen (t3n, OMR, Branchenmedien)',
                'Podcast-Interviews und Webinar-Auftritte',
                'Konferenzvorträge, auch lokale Meetups zählen',
                'Fachliche LinkedIn-Beiträge mit Engagement',
              ],
            },
            {
              title: 'Content mit echten Daten erstellen',
              text:
                'Hör auf, die immer gleichen Studien zu zitieren. Erstelle eigene Daten: analysiere etwas, messe etwas, teste etwas. Und dann schreib darüber.',
              bullets: [
                'Eigene Analysen und Mini-Studien deiner Branche',
                'Case Studies mit konkreten Zahlen und Ergebnissen',
                'Erfahrungsberichte aus der Praxis mit spezifischen Details',
                'Frameworks und Methoden, die du selbst entwickelt hast',
              ],
            },
            {
              title: 'Technische E-E-A-T-Signale implementieren',
              text:
                'Jetzt, und erst jetzt, kommen die technischen Maßnahmen. Sie verstärken vorhandene Expertise, aber sie ersetzen sie nicht.',
              bullets: [
                'Article-Schema mit Autor-Verknüpfung auf jeder Seite',
                'Person-Schema für jeden Autor mit Credentials und sameAs',
                'Dedizierte Autorenseite mit nachweisbaren Qualifikationen',
                'llms.txt und ai.txt für KI-Crawler-Transparenz',
              ],
            },
          ],
        },
        {
          id: 'fehler',
          heading: 'Die 5 dümmsten E-E-A-T-Fehler, die ich jeden Tag sehe',
          intro: 'Alle fünf kosten nichts zu vermeiden. Alle fünf sehen wir jede Woche.',
          steps: [
            {
              title: 'Wir sind Experten, weil wir es auf unsere Website schreiben',
              text:
                'Wenn selbstdeklarierte Expertise ausreichen würde, wäre jeder LinkedIn-Nutzer ein Thought Leader. KI-Systeme sind auf Milliarden Texten trainiert, sie kennen den Unterschied zwischen jemandem, der über ein Thema schreibt, und jemandem, der es beherrscht. Ein Über-uns-Text überzeugt niemanden, der nicht bereits überzeugt ist.',
            },
            {
              title: 'Autoren-Bio ohne externe Bestätigung',
              text:
                '15 Jahre Erfahrung im digitalen Marketing steht in deiner Bio. Lässt sich das irgendwo nachprüfen? Keine LinkedIn-Verlinkung, keine Publikationen, keine Vorträge? Dann ist die Bio so glaubwürdig wie eine Fünf-Sterne-Bewertung aus der eigenen Familie.',
            },
            {
              title: 'E-E-A-T als einmalige Checkbox-Übung',
              text:
                'Autoren-Bio hinzugefügt, Schema implementiert, erledigt? Nein. E-E-A-T für KI ist kein Projekt mit Deadline, sondern ein fortlaufender Prozess. Jeder neue Artikel, jeder Gastbeitrag, jede Erwähnung baut es auf, oder erodiert es, wenn du Unsinn publizierst. Wie Fitness: einmal ins Studio gehen macht nicht fit.',
            },
            {
              title: 'Content über alles statt Tiefe in einem Thema',
              text:
                'Du schreibst über SEO, Social Media, E-Commerce, HR, Nachhaltigkeit und Kryptowährungen. Auf derselben Website, aus derselben Autoren-Bio. Eine KI liest das als: Experte für nichts. Thematische Fokussierung ist für KI-E-E-A-T entscheidend. Lieber 30 tiefe Artikel zu einem Kernthema als 300 oberflächliche zu allem.',
            },
            {
              title: 'Widersprüche auf der eigenen Website',
              text:
                'Auf Seite A ist Schema-Markup der wichtigste Faktor für KI-Sichtbarkeit, auf Seite B ist Content-Qualität wichtiger als jedes technische Signal, auf Seite C geht ohne Backlinks gar nichts. Was denn nun? Widersprüche auf der eigenen Website sind für KI-Systeme ein rotes Tuch. Wenn du dir selbst widersprichst, warum sollte eine KI dich zitieren?',
            },
          ],
        },
      ]}
      faqTitle="Häufig gestellte Fragen"
      faqs={[
        {
          q: 'Ist E-E-A-T ein Ranking-Faktor bei Google?',
          a: 'Nein, nicht direkt. E-E-A-T ist kein algorithmischer Ranking-Faktor wie PageSpeed oder Backlinks. Es ist ein Konzept aus den Google Quality Rater Guidelines, das beschreibt, wonach menschliche Qualitätsprüfer suchen. Google nutzt diese Bewertungen, um seine Algorithmen zu trainieren. Für KI-Systeme ist E-E-A-T noch weniger ein Faktor, es ist eher eine emergente Eigenschaft. Wenn deine Expertise konsistent über viele Quellen bestätigt wird, zitiert dich die KI häufiger. Kein Schalter, den du umlegst, eher ein Ruf, den du aufbaust.',
        },
        {
          q: 'Reicht eine Autoren-Bio für E-E-A-T bei KI-Systemen?',
          a: 'Absolut nicht. Eine Autoren-Bio ist für Google nützlich, weil der Crawler sie lesen und mit anderen Signalen abgleichen kann. Für KI-Systeme wie ChatGPT ist eine Bio auf deiner eigenen Website ungefähr so überzeugend wie ein Lebenslauf, den du dir selbst geschrieben hast. KI prüft, ob dein Name in externen Quellen mit dem Thema verknüpft ist: Fachpublikationen, Interviews, Konferenzvorträge, Erwähnungen auf anderen Websites. Die Bio ist das Sahnehäubchen, nicht das Fundament.',
        },
        {
          q: 'Wie kann ich meine E-E-A-T-Signale für ChatGPT verbessern?',
          a: 'Drei Hebel: Erstens, konsistente Expertise über verschiedene Quellen hinweg aufbauen: Gastbeiträge, Podcasts, Fachpublikationen, LinkedIn-Artikel. Zweitens, auf deiner Website Inhalte mit echten Daten, Erfahrungsberichten und verifizierbaren Fakten erstellen. Drittens, deine Person oder Marke mit Schema.org-Markup (Person, Organization) maschinenlesbar machen. Der wichtigste Punkt: Es geht nicht um einen einzigen Trick, sondern um konsistente Präsenz über Monate und Jahre.',
        },
        {
          q: 'Was bedeutet das erste E in E-E-A-T für KI?',
          a: 'Das erste E steht für Experience, Erfahrung. Für Google bedeutet das: Hat der Autor das Thema selbst erlebt? Für KI-Systeme ist Experience noch schwerer zu fälschen, weil LLMs Muster erkennen. Ein Artikel über Backpacking in Vietnam, der nur Wikipedia-Fakten zusammenfasst, klingt anders als einer von jemandem, der tatsächlich dort war. KI erkennt diese Nuancen überraschend gut. Eigene Erfahrungen, spezifische Details und persönliche Einschätzungen sind die stärksten Experience-Signale.',
        },
        {
          q: 'Können Backlinks meine KI-Sichtbarkeit verbessern?',
          a: 'Indirekt ja, direkt nein. ChatGPT und Claude können keine Backlink-Profile analysieren, sie sehen den Link-Graph nicht. Aber: Websites mit vielen hochwertigen Backlinks werden häufiger in Trainingsdaten aufgenommen und häufiger von Perplexity gecrawlt. Backlinks sind also kein direktes KI-Signal, aber sie erhöhen die Wahrscheinlichkeit, dass dein Content in den Trainingsdaten und im Live-Web-Index der KI-Systeme landet.',
        },
        {
          q: 'Wie unterscheidet sich Trustworthiness bei Google vs. KI?',
          a: 'Bei Google basiert Trust auf technischen Signalen: HTTPS, saubere Domain-History, keine Spam-Penalties, solides Backlink-Profil. Bei KI-Systemen basiert Trust auf inhaltlicher Konsistenz: Stimmen deine Aussagen mit dem überein, was andere vertrauenswürdige Quellen sagen? Widersprichst du dir selbst auf verschiedenen Seiten? Sind deine Fakten verifizierbar? Google prüft deine Nachbarschaft (wer verlinkt auf dich), KI prüft deine Aussagen (stimmt das, was du sagst).',
        },
        {
          q: 'Muss jede Seite E-E-A-T-Signale haben?',
          a: 'Nicht jede Seite braucht den gleichen E-E-A-T-Aufwand. Für YMYL-Themen (Your Money, Your Life), also Gesundheit, Finanzen, Recht, sind starke E-E-A-T-Signale absolut kritisch, sowohl für Google als auch für KI. Für weniger sensible Themen reicht eine solide Grundlage: erkennbarer Autor, aktuelle Inhalte, verifizierbare Fakten. Der Fehler ist, E-E-A-T komplett zu ignorieren oder es als reine Checkbox-Übung zu behandeln.',
        },
      ]}
      sourcesTitle="Quellen"
      sources={[
        {
          label: 'Google Search Central',
          text:
            'Creating helpful, reliable, people-first content. Die offizielle Grundlage für E-E-A-T, inklusive der Who-How-Why-Fragen, die Google an jeden Inhalt stellt.',
          href: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
        },
        {
          label: 'Google Search Central, AI features',
          text:
            'Googles Aussage zu den eigenen KI-Funktionen: dieselben Qualitätsgrundlagen wie in der klassischen Suche, keine KI-spezifischen Techniken.',
          href: 'https://developers.google.com/search/docs/appearance/ai-features',
        },
        {
          label: 'Schema.org, Person',
          text:
            'Die Vokabular-Referenz für Person-Markup und sameAs-Verknüpfungen, mit denen sich eine Autor-Entität maschinenlesbar an externe Profile binden lässt.',
          href: 'https://schema.org/Person',
        },
      ]}
      relatedTitle="Weiterführende Guides"
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit',
          description: 'Der Pillar-Guide: Was KI-Sichtbarkeit bedeutet und wie du sie erreichst.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Pillar',
        },
        {
          title: 'AI Content Strategie',
          description: 'Inhalte erstellen, die KI-Systeme als Quelle nutzen wollen.',
          href: '/wissen/ai-content-strategie',
          tag: 'Content',
        },
        {
          title: 'Was ist GEO?',
          description: 'Generative Engine Optimization erklärt, von der Theorie zur Praxis.',
          href: '/wissen/was-ist-geo',
          tag: 'GEO',
        },
        {
          title: 'Sichtbarkeit in ChatGPT',
          description: 'Wie ChatGPT Quellen auswählt und wie du eine davon wirst.',
          href: '/wissen/sichtbarkeit-in-chatgpt',
          tag: 'ChatGPT',
        },
      ]}
      ctaTitle="Wie steht es um dein E-E-A-T für KI?"
      ctaText="Finde heraus, ob KI-Systeme dich als Experten einstufen, oder ob du nur eine Autoren-Bio hast. Kostenlose Analyse deiner KI-Sichtbarkeit und E-E-A-T-Signale."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenlose E-E-A-T-Analyse anfragen"
    />
  );
}
