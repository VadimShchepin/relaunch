import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function GoogleKiOptimierungPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/google-ki-optimierung"
      breadcrumbLabel="Google KI-Optimierung"
      eyebrow="Google"
      title="Google KI-Optimierung: Was Google offiziell empfiehlt"
      description="Die GEO-Branche verkauft dir Dateien, Tricks und Spezial-Markup für Google AI Overviews. Google selbst sagt in seiner offiziellen Dokumentation: Das meiste davon brauchst du nicht. Hier steht, was wirklich zählt und was du dir sparen kannst."
      publishedAt="2026-05-29"
      modifiedAt="2026-08-24"
      summaryTitle="Das Wichtigste in 5 Punkten"
      summaryItems={[
        'Kein eigenes KI-Ranking. AI Overviews und AI Mode laufen auf den normalen Ranking- und Qualitätssystemen der Google-Suche.',
        'Streich diese Aufgaben für Google: llms.txt, Content-Chunking, KI-spezifischer Schreibstil, Schema nur für die KI.',
        'Originalität schlägt Masse. Massenhaft dünne KI-Seiten fallen unter scaled content abuse und sind ein Spam-Verstoß.',
        'Technik zuerst: crawlbar, indexiert, serverseitig gerendert, gute Page Experience.',
        'Für andere KI-Systeme gilt anderes: llms.txt und Zitierfähigkeit helfen bei ChatGPT und Perplexity weiterhin.',
      ]}
      sections={[
        {
          id: 'kernprinzip',
          heading: 'Das Kernprinzip: SEO bleibt der Hebel',
          intro:
            'Googles generative KI-Funktionen sind kein eigenes System, das man getrennt bespielt. Sie sitzen auf den bestehenden Ranking- und Qualitätssystemen der Google-Suche. Technisch geschieht das über Retrieval-Augmented Generation und Query Fan-out: Eine Nutzeranfrage wird intern in viele Teilanfragen zerlegt, und das Modell baut seine Antwort aus den Seiten, die für diese Teilanfragen ranken.',
          stat: 'Gute klassische SEO ist gleichzeitig gute Optimierung für Googles KI-Funktionen. Es gibt keine Abkürzung daran vorbei.',
          paragraphs: [
            'Daraus folgt die wichtigste Konsequenz: Es gibt kein separates KI-Ranking, das du losgelöst von deiner normalen Sichtbarkeit optimieren könntest. Damit eine Seite überhaupt in einer KI-Funktion auftauchen kann, muss sie indexiert und für ein Snippet in der regulären Suche zugelassen sein.',
            'Das ist eine gute Nachricht, wenn deine Grundlagen sitzen, und eine unbequeme, wenn du gehofft hast, dir den mühsamen Teil mit einer Datei oder einem Markup-Trick zu ersparen. Google formuliert es selbst nüchtern: Viele Inhalte ranken gut, ganz ohne offensichtliche SEO. Maßgeblich ist, ob Besucher die Seite hilfreich und befriedigend finden.',
          ],
          steps: [
            {
              title: 'Beispiel: Query Fan-out in der Praxis',
              text: 'Jemand fragt, wer die beste Firma für Haushaltsauflösung in Hamburg ist. Intern zerlegt das System diese eine Frage in viele Teilfragen, die du nie zu sehen bekommst. Deshalb verschiebt sich die Optimierung weg vom einzelnen Keyword hin zur vollständigen Themenabdeckung. In der Arbeit mit lokalen Unternehmen sorge ich dafür, dass die wahrscheinlichen Folgefragen irgendwo im Content-Ökosystem bereits beantwortet sind. Wer nur eine Seite zu einem Keyword hat, fällt durch das Raster der Teilfragen.',
              bullets: [
                'Welche Firmen sind in Hamburg aktiv?',
                'Welche haben gute Bewertungen?',
                'Welche nennen Haushaltsauflösung ausdrücklich?',
                'Welche gelten lokal als vertrauenswürdig?',
                'Welche werden von anderen Quellen empfohlen?',
              ],
            },
          ],
          note:
            'Grundlage dieses Artikels: Google Search Central, „AI optimization guide“ und „Using AI-generated content“, Stand Mai 2026. Die Einschätzungen dazwischen stammen aus der Arbeit mit deutschen Mittelständlern und aus Content-Projekten, die von ChatGPT, Gemini und Claude zitiert wurden.',
        },
        {
          id: 'vier-dinge',
          heading: 'Die 4 Dinge, die Google dir tatsächlich aufträgt',
          intro:
            'Der AI optimization guide lässt sich auf vier Empfehlungen eindampfen. Keine davon ist exotisch.',
          steps: [
            {
              title: 'Wertvolle Inhalte ohne Massenware',
              text: 'Liefere einen eigenen Blickwinkel: originäre Analyse, eigene Daten, Ersthand-Erfahrung statt Wiederkäuen vorhandener Texte. Schreibe für Menschen, nicht für Rankings. Gliedere mit klaren Absätzen, Abschnitten und Überschriften. Setze relevante Bilder und Videos ein, wo sie wirklich helfen, und übertreibe es nicht, sonst kippt es in Manipulation.',
            },
            {
              title: 'Klare technische Struktur',
              text: 'Die Seite muss indexiert und snippet-fähig sein, öffentlich zugänglich und crawlbar. Bei JavaScript-Frameworks gelten die normalen JavaScript-SEO-Regeln: Der Inhalt muss für Googlebot rendern, nicht nur im Browser. Dazu eine gute Page Experience auf allen Geräten, geringe Ladezeiten, wenig Duplicate Content. Die Details stehen im Guide zur technischen KI-Sichtbarkeit.',
            },
            {
              title: 'Lokale und E-Commerce-Daten pflegen',
              text: 'Nutze Google Merchant Center und das Google Unternehmensprofil, damit Produkt-, Service- und Standortdaten strukturiert und aktuell vorliegen. Für lokale Anbieter ist das Unternehmensprofil oft der direkteste Weg in lokale KI-Antworten.',
            },
            {
              title: 'Bei KI-Tools die Qualitätslatte halten',
              text: 'Wenn du KI zur Content-Erstellung einsetzt, muss das Ergebnis die Search Essentials und die Spam-Richtlinien erfüllen, allen voran die Regel gegen scaled content abuse. Dazu weiter unten mehr.',
            },
          ],
        },
        {
          id: 'unnoetig',
          heading: 'Was Google ausdrücklich für unnötig erklärt',
          intro:
            'Hier wird es unbequem, denn diese Punkte laufen gegen einen Großteil der gängigen GEO-Ratschläge. Google nennt sie in seinem Leitfaden direkt als nicht erforderlich für die Sichtbarkeit in generativen KI-Funktionen. Für Google, nicht für jede Plattform.',
          table: {
            headers: ['Verbreitete Behauptung', 'Googles Position'],
            rows: [
              [
                'llms.txt oder KI-Textdateien anlegen',
                'Nicht nötig. Google nennt llms.txt direkt als Beispiel für eine nicht erforderliche Datei.',
              ],
              [
                'Content in Chunks zerlegen',
                'Keine Voraussetzung. Googles Systeme verstehen Nuance und Struktur.',
              ],
              [
                'KI-optimierter Schreibstil oder Keyword-Phrasing',
                'Nicht nötig. Die Systeme verstehen Synonyme und Bedeutung.',
              ],
              [
                'Schema-Markup, damit die KI die Seite liest',
                'Für KI-Eignung nicht erforderlich. Schema hilft weiterhin für Rich Results, das ist ein anderes Ziel.',
              ],
              ['Künstliche Marken-Erwähnungen einkaufen', 'Wirkungslos.'],
            ],
            caption:
              'Die praktische Faustregel: Wenn eine Maßnahme nur existiert, um die KI zu füttern, und einem menschlichen Leser nichts bringt, kannst du sie für Google streichen.',
          },
          paragraphs: [
            'Und jetzt die ehrliche Einordnung, die viele Anbieter verschweigen: llms.txt ist nicht wertlos, sie ist nur für Google wertlos. ChatGPT, Perplexity und andere RAG-Systeme arbeiten anders, und dort kann eine gepflegte llms.txt sowie eine hohe Zitierfähigkeit sehr wohl etwas bringen. Wer plattformübergreifend denkt, behält diese Maßnahmen. Wer nur über Google AI Overviews redet und dir llms.txt als Wundermittel verkauft, hat den offiziellen Leitfaden nicht gelesen.',
          ],
          quote:
            'Für Google: weniger Tricks, mehr Substanz. Für ChatGPT und Perplexity: Zitierfähigkeit und llms.txt bleiben relevant. Genau diese Trennung unterscheidet seriöse von oberflächlicher GEO-Beratung.',
        },
        {
          id: 'technische-checkliste',
          heading: 'Technische Voraussetzungen: die Checkliste',
          intro:
            'Jeder Punkt, der bei dir mit Nein beantwortet wird, schließt eine Seite von KI-Funktionen aus, egal wie gut der Inhalt ist. Prüfe der Reihe nach.',
          bullets: [
            'Indexiert: Die Seite ist im Google-Index, geprüft über die Search Console.',
            'Snippet-fähig: kein noindex, kein nosnippet, keine blockierenden data-nosnippet-Bereiche.',
            'Crawlbar: nicht in der robots.txt für Googlebot gesperrt.',
            'Serverseitig gerendert: Der Hauptinhalt erscheint ohne client-seitiges JavaScript oder wird für Googlebot serverseitig ausgeliefert.',
            'Gute Page Experience: mobilfreundlich, geringe Latenz, stabiles Layout.',
            'Sauberes Canonical: kein verwässernder Duplicate Content.',
            'Korrekte Metadaten: Title, Meta-Description, Überschriften und Bild-Alt-Texte sind zutreffend und nützlich. Sie liefern dem Modell Kontext.',
          ],
        },
        {
          id: 'ki-inhalte',
          heading: 'KI-generierte Inhalte: Googles Regeln',
          intro:
            'Google verbietet KI-Inhalte nicht, es bewertet Qualität und nicht Herstellungsmethode. Es gibt aber eine harte Grenze und klare Erwartungen.',
          steps: [
            {
              title: 'Die harte Grenze: scaled content abuse',
              text: 'Verboten ist die Erstellung vieler Seiten mit dem primären Ziel, Rankings zu manipulieren, statt Nutzern zu helfen. Entscheidend sind Absicht und Maßstab, nicht der Einsatz von KI. Eine wirklich hilfreiche, KI-unterstützte Seite ist in Ordnung, zehntausend dünne sind Missbrauch. Meine eigene Grenze ist einfach: Wenn KI einem Fachmann hilft, echtes Wissen schneller zu vermitteln, ist das in Ordnung. Wenn KI tausende Seiten erzeugt, die niemand geschrieben, geprüft oder verantwortet hätte, ist es Spam.',
              bullets: [
                'Massenhaft KI-Seiten ohne Nutzermehrwert.',
                'Feeds oder Suchergebnisse scrapen und kaum etwas hinzufügen.',
                'Inhalte aus mehreren Quellen zusammenstückeln, ohne sie zu veredeln.',
                'Mehrere Sites aufsetzen, um den Massencharakter zu verschleiern.',
                'Viele keyword-gespickte Seiten mit wenig zusammenhängendem Sinn.',
              ],
            },
            {
              title: 'Qualität und Metadaten',
              text: 'Achte besonders bei automatisch erzeugten Inhalten auf Richtigkeit, Qualität und Relevanz, und genau auf die Metadaten, die solche Pipelines gern vernachlässigen: Title-Elemente, Meta-Descriptions, strukturierte Daten und Bild-Alt-Texte.',
            },
            {
              title: 'Transparenz',
              text: 'Google empfiehlt, Lesern Kontext zu geben, wie ein Inhalt entstanden ist. Bei automatisierten Inhalten kann es sinnvoll sein, den Einsatz von Automatisierung offenzulegen und zu erklären, warum sie nützlich war. Nicht jeder Text braucht einen KI-Hinweis, entscheidend ist Verantwortlichkeit: Steht jemand mit Fachwissen hinter der Information, und wurde sie geprüft?',
            },
            {
              title: 'E-Commerce und Merchant Center',
              text: 'KI-generierte Bilder müssen IPTC-Metadaten vom Typ DigitalSourceType mit dem Wert TrainedAlgorithmicMedia tragen. KI-generierte Produktattribute müssen separat angegeben und als KI-generiert gekennzeichnet werden.',
            },
          ],
        },
        {
          id: 'eeat',
          heading: 'E-E-A-T und das Wer-Wie-Warum',
          intro:
            'Google bewertet Inhalte nach Experience, Expertise, Authoritativeness und Trustworthiness. Trust ist davon das wichtigste, die anderen drei zahlen darauf ein. Drei Fragenblöcke helfen bei der Selbstprüfung.',
          cards: [
            {
              title: 'Wer (Who)',
              text: 'Ist erkennbar, wer den Inhalt verfasst hat? Gibt es Autorenzeilen, wo Leser sie erwarten? Verlinken diese auf nachvollziehbare Hintergründe und Qualifikationen?',
            },
            {
              title: 'Wie (How)',
              text: 'Ist Automatisierung oder KI-Erzeugung dort offengelegt, wo es relevant ist? Erklärst du, warum die Automatisierung für den Leser nützlich war?',
            },
            {
              title: 'Warum (Why)',
              text: 'Entsteht der Inhalt primär, um Menschen zu helfen, und nicht, um Rankings zu manipulieren? Das ist die Definition von people-first content.',
            },
          ],
        },
        {
          id: 'deutsche-unternehmen',
          heading: 'Was das für deutsche Unternehmen heißt',
          intro:
            'Für ein mittelständisches Unternehmen oder einen lokalen Dienstleister in Hamburg ist die Botschaft entlastend: Du musst keiner technischen Mode hinterherrennen. Du musst indexierbar sein, serverseitig gerenderte und ehrlich originäre Inhalte mit klarem Autor liefern, und du darfst nicht in die Massenproduktion dünner Seiten kippen.',
          paragraphs: [
            'Der schwierige Teil bleibt der inhaltliche: ein eigener Blickwinkel und nachweisbare Erfahrung. Genau hier scheitern die meisten KI-Pipelines, und genau hier entsteht der Vorsprung. Wer als Handwerksbetrieb, Kanzlei oder Praxis echte Fälle, eigene Zahlen und benannte Fachleute zeigt, sammelt die Trust-Signale, die ein generisch generierter Wettbewerber nicht hat.',
            'Und die plattformübergreifende Realität: Deine deutschen Kunden fragen nicht nur Google, sie fragen ChatGPT und Perplexity. Für diese Systeme bleiben Zitierfähigkeit und eine gepflegte llms.txt sinnvoll. Die Kunst ist, beide Welten getrennt zu denken und nicht die Google-Mythen mit den ChatGPT-Hebeln zu verwechseln.',
          ],
        },
        {
          id: 'aus-der-praxis',
          heading: 'Aus der Praxis: Was wirklich zählt',
          intro:
            'So weit die offizielle Dokumentation. Hier ist, was ich nach Jahren mit deutschen Unternehmen und KI-zitierten Projekten tatsächlich beobachte. Manches deckt sich mit Google, manches ergänzt es.',
          stat: 'Der größte Teil der KI-Sichtbarkeit entsteht dadurch, dass man eine bessere Quelle wird, nicht dadurch, dass man KI-Systeme besser austrickst.',
          bullets: [
            'KI-Optimierung ersetzt SEO nicht. Sie ist SEO, Autoritätsaufbau und digitale PR, betrachtet durch eine neue Linse.',
            'Die Unternehmen, denen man am leichtesten vertraut, sind meist die, die KI-Systeme empfehlen.',
            'Wenn niemand mit Fachwissen den Inhalt geprüft hat, macht KI ihn nicht auf magische Weise wertvoll.',
            'Vertrauen entsteht, wenn jedes Signal online dieselbe Geschichte erzählt.',
          ],
          steps: [
            {
              title: 'llms.txt: meine ehrliche Erfahrung',
              text: 'Ich habe keinen überzeugenden Beleg gesehen, dass eine llms.txt Rankings oder Sichtbarkeit innerhalb von Googles Ökosystem bewegt. Googles öffentliche Aussage deckt sich mit meiner Praxis. Potenziellen Wert sehe ich bei Systemen wie ChatGPT und Perplexity, die sie als Orientierung nutzen können. Der eigentliche Fehler ist aber, llms.txt überhaupt als Ranking-Taktik zu behandeln. Selbst wenn sie etwas bringt, ist der Effekt winzig gegenüber wirklich nützlichem Content, klarer Expertise und echten Autoritätssignalen.',
            },
            {
              title: 'Was funktioniert hat',
              text: 'Fünf Dinge, die in echten Projekten messbar etwas verändert haben:',
              bullets: [
                'Extrem klare Positionierung',
                'Thematischer Fokus statt Bauchladen',
                'Nützliche, originäre Inhalte',
                'Autorität rund um eine konkrete Nische',
                'Echte Erfahrung und Fallbeispiele',
              ],
            },
            {
              title: 'Was ich überschätzt habe',
              text: 'Rückblickend kamen die meisten Zuwächse daher, eine bessere Quelle zu werden, nicht ein besserer Manipulator.',
              bullets: [
                'Technische KI-Optimierungstricks',
                'Jeder neuen GEO-Taktik hinterherjagen',
                'Viel Zeit für spekulative Hacks',
              ],
            },
            {
              title: 'Wie ich KI-Sichtbarkeit messe',
              text: 'Es gibt bisher kein Pendant zum klassischen Rank-Tracking. Mein Vorgehen ist deutlich manueller: Ich teste regelmäßig ChatGPT, Gemini, Claude und Perplexity mit kommerziellen und informativen Fragen aus dem Markt des Kunden. Dann verfolge ich, ob die Marke auftaucht, wie oft, welche Informationen verwendet werden und welche Wettbewerber genannt werden. Unperfekt, aber oft wertvoller als Vanity-Metriken.',
            },
            {
              title: 'Deutschland hinkt hinterher, und das ist die Chance',
              text: 'Der deutsche Markt ist bei der KI-Suche hinter den USA. Viele Unternehmen verstehen klassisches SEO noch kaum, KI-Optimierung ist oft gar nicht auf dem Radar. Genau das schafft einen Vorsprung: Wer jetzt investiert, sichert sich Sichtbarkeit, bevor der Markt eng wird. Leads kommen dabei selten direkt aus einer KI-Antwort. Sie entstehen, weil das Unternehmen insgesamt zu einer stärkeren Autorität wird und dann über mehrere Kanäle gleichzeitig besser performt.',
            },
          ],
        },
      ]}
      faqTitle="Häufige Fragen zur Google KI-Optimierung"
      faqs={[
        {
          q: 'Gibt es ein eigenes Ranking-System für Google AI Overviews?',
          a: 'Nein. Laut Googles Search-Central-Dokumentation bauen die generativen KI-Funktionen (AI Overviews, AI Mode) auf den bestehenden Ranking- und Qualitätssystemen der Google-Suche auf. Sie nutzen Retrieval-Augmented Generation und Query Fan-out, bei dem eine Anfrage in viele Teilanfragen zerlegt wird. Es gibt also kein separates KI-Ranking, das man getrennt optimieren könnte. Damit eine Seite in einer KI-Funktion verwendet werden kann, muss sie indexiert und für ein Snippet in der normalen Suche zugelassen sein.',
        },
        {
          q: 'Braucht meine Website eine llms.txt, um in Google AI Overviews zu erscheinen?',
          a: 'Für Google nein. Google schreibt ausdrücklich, dass keine neuen maschinenlesbaren Dateien, KI-Textdateien oder Markdown-Versionen nötig sind, und nennt llms.txt als Beispiel. Für andere Systeme wie ChatGPT oder Perplexity kann eine llms.txt dagegen sinnvoll sein. Sie schadet Google nicht, sie hilft Google nur nicht. Wer Aufwand spart, investiert ihn besser in bessere Inhalte und saubere technische SEO.',
        },
        {
          q: 'Bestraft Google KI-generierte Inhalte?',
          a: 'Nein, nicht pauschal. Google bewertet Qualität, nicht die Herstellungsmethode. Verboten ist Missbrauch mit in großem Umfang generierten Inhalten, also scaled content abuse: viele Seiten, die primär erstellt werden, um Rankings zu manipulieren, statt Nutzern zu helfen. Ein einzelner, wirklich hilfreicher KI-unterstützter Artikel ist erlaubt. Zehntausend dünne Seiten sind es nicht. Entscheidend sind Absicht und Maßstab, nicht der Einsatz von KI.',
        },
        {
          q: 'Muss ich Content in kurze Blöcke (Chunks) aufteilen, damit die KI ihn versteht?',
          a: 'Google sagt nein. Das sogenannte Chunking ist keine Voraussetzung, weil Googles Systeme Nuancen und Struktur verstehen. Eine klare Gliederung mit Absätzen, Abschnitten und Überschriften ist trotzdem gut, aber das ist normale Lesefreundlichkeit für Menschen, kein KI-Spezialtrick.',
        },
        {
          q: 'Hilft Schema-Markup, um in Googles KI-Antworten zitiert zu werden?',
          a: 'Für die Eignung in generativen KI-Funktionen ist strukturierte Datenauszeichnung laut Google nicht erforderlich. Schema bleibt nützlich für Rich Results in der klassischen Suche, das ist ein anderes Ziel. Wenn du Schema einsetzt, halte dich an die allgemeinen und feature-spezifischen Richtlinien und validiere das Markup.',
        },
        {
          q: 'Was zählt bei Google am meisten für KI-Sichtbarkeit?',
          a: 'Die Grundlagen: Die Seite muss indexierbar, crawlbar und snippet-fähig sein, sie muss serverseitig gerenderte, originäre Inhalte mit klarem Autor und Mehrwert liefern, und sie darf nicht massenhaft dünne Seiten produzieren. Google fasst es so zusammen: Konzentriere dich darauf, was Besucher hilfreich und zufriedenstellend finden. Trust ist innerhalb von E-E-A-T das wichtigste Signal.',
        },
        {
          q: 'Sollte ich KI-Crawler in der robots.txt blockieren?',
          a: 'Für Googles KI-Funktionen ist das kontraproduktiv: Sie nutzen öffentlich zugängliche, crawlbare Inhalte über die normale Google-Indexierung. Wer Googlebot blockiert, fliegt aus Suche und KI-Funktionen gleichzeitig raus. Separate KI-Trainings-Crawler sind eine eigene, lizenzrechtliche Entscheidung. Verwechsle sie nicht mit der Sichtbarkeit in AI Overviews.',
        },
      ]}
      sources={[
        {
          label: 'Google Search Central: AI optimization guide',
          text: 'Die offizielle Anleitung zur Sichtbarkeit in AI Overviews und AI Mode, inklusive der Liste dessen, was Google für nicht erforderlich erklärt.',
          href: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide',
        },
        {
          label: 'Google Search Central: Using AI-generated content',
          text: 'Googles Position zu KI-generierten Inhalten, Transparenz und Metadaten.',
          href: 'https://developers.google.com/search/docs/fundamentals/using-gen-ai-content',
        },
        {
          label: 'Google Search Central: Spam policies',
          text: 'Definition von scaled content abuse und die typischen Verstoßmuster.',
          href: 'https://developers.google.com/search/docs/essentials/spam-policies',
        },
      ]}
      relatedTitle="Weiterführende Guides"
      relatedArticles={[
        {
          title: 'Sichtbarkeit in Google AI Overviews',
          description: 'Wie du konkret in den KI-Antworten oberhalb der Suchergebnisse landest.',
          href: '/wissen/ai-overviews-sichtbarkeit',
          tag: 'AI Overviews',
        },
        {
          title: 'Was ist GEO?',
          description: 'Generative Engine Optimization plattformübergreifend erklärt.',
          href: '/wissen/was-ist-geo',
          tag: 'Grundlagen',
        },
        {
          title: 'Technische KI-Sichtbarkeit',
          description: 'Crawlbarkeit, Rendering, robots.txt und die technische Basis.',
          href: '/wissen/technische-ki-sichtbarkeit',
          tag: 'Technik',
        },
        {
          title: 'E-E-A-T für KI-Sichtbarkeit',
          description: 'Wie du Trust-Signale aufbaust, die Google und KI-Systeme honorieren.',
          href: '/wissen/eeat-ki-sichtbarkeit',
          tag: 'E-E-A-T',
        },
        {
          title: 'llms.txt Anleitung',
          description: 'Wofür die Datei taugt, wenn nicht für Google, und wie du sie richtig aufsetzt.',
          href: '/wissen/llms-txt-anleitung',
          tag: 'llms.txt',
        },
        {
          title: 'Lokale KI-Sichtbarkeit',
          description: 'Unternehmensprofil, Standortdaten und der direkteste Weg in lokale KI-Antworten.',
          href: '/wissen/lokale-ki-sichtbarkeit',
          tag: 'Lokal',
        },
        {
          title: 'Perplexity vs ChatGPT vs Google',
          description: 'Wo die drei Systeme unterschiedlich arbeiten und welche Hebel je Plattform zählen.',
          href: '/wissen/perplexity-vs-chatgpt-vs-google',
          tag: 'Vergleich',
        },
        {
          title: 'KI-Sichtbarkeit messen',
          description: 'Die Methode hinter dem manuellen Prompt-Testing, plus Tools und KPIs.',
          href: '/wissen/ki-sichtbarkeit-messen',
          tag: 'Messung',
        },
      ]}
      ctaTitle="Kennt Google dein Unternehmen?"
      ctaText="Wir prüfen, ob deine Seiten für AI Overviews überhaupt geeignet sind, wo Substanz fehlt und welchen GEO-Aufwand du dir sparen kannst. Ehrlich, ohne Mythen."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenlose KI-Sichtbarkeitsanalyse anfragen"
    />
  );
}
