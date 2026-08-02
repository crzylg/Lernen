// Deutsch – Klasse 5 (Gymnasium Niedersachsen)
// Aufgaben-Typ "mc" = Multiple Choice (loesung ist der Text der richtigen Option)
// Aufgaben-Typ "zahl" = Antwort eintippen (loesung ist der erwartete Text)
//
// Themenauswahl ist an das im Unterricht verwendete Buch angelehnt
// (Deutschbuch Gymnasium, 5. Schuljahr): Wortarten & Rechtschreibung ·
// Satzglieder (inkl. Umstellprobe, Objekte, adverbiale Bestimmungen) ·
// Zeitformen (Tempora) · Zeichensetzung · Textverständnis · Erzähltexte
// (Sagen) · Gedichte · eigenes Schreiben (Erzählung, Brief, Beschreibung,
// Meinung begründen).
// Alle Texte, Beispiele und Aufgaben sind vollständig selbst geschrieben –
// es wird kein Inhalt aus dem Buch übernommen, nur Themen und Reihenfolge.
window.LERNDATA = window.LERNDATA || {};
window.LERNDATA.deutsch = {
  id: "deutsch",
  name: "Deutsch",
  icon: "📖",
  farbe: "#EF4444",
  themen: [
    {
      id: "wortarten",
      titel: "Wortarten",
      icon: "🔤",
      intro: "Nomen, Verben und Adjektive erkennen.",
      lektion: [
        "🏷️ Nomen (Namenwörter) benennen Menschen, Tiere, Dinge oder Ideen. Frage: 'Wer oder was?' – sie werden immer großgeschrieben.",
        "🏃 Verben (Tuwörter) beschreiben, was jemand tut. Frage: 'Was tut er/sie?'",
        "🎨 Adjektive (Wiewörter) beschreiben, wie etwas ist. Frage: 'Wie ist es?'"
      ],
      aufgaben: [
        { frage: "Welche Wortart ist 'Hund'?", typ: "mc", optionen: ["Nomen", "Verb", "Adjektiv", "Artikel"], loesung: "Nomen", erklaerung: "'Hund' ist ein Nomen (Namenwort) – man kann einen Artikel davorsetzen: der Hund." },
        { frage: "Welche Wortart ist 'laufen'?", typ: "mc", optionen: ["Nomen", "Verb", "Adjektiv", "Artikel"], loesung: "Verb", erklaerung: "'laufen' ist ein Verb (Tuwort) – es beschreibt eine Handlung." },
        { frage: "Welche Wortart ist 'schnell'?", typ: "mc", optionen: ["Nomen", "Verb", "Adjektiv", "Artikel"], loesung: "Adjektiv", erklaerung: "'schnell' ist ein Adjektiv (Wiewort) – es beschreibt, wie etwas ist." },
        { frage: "Nomen schreibt man immer …", typ: "mc", optionen: ["groß", "klein", "mit Bindestrich", "kursiv"], loesung: "groß", erklaerung: "Nomen werden im Deutschen immer großgeschrieben." },
        { frage: "Welches Wort ist ein Verb?", typ: "mc", optionen: ["springen", "Baum", "grün", "und"], loesung: "springen", erklaerung: "'springen' beschreibt eine Handlung, also ist es ein Verb." },
        { frage: "Welches Wort ist ein Nomen?", typ: "mc", optionen: ["Schule", "lesen", "bunt", "leise"], loesung: "Schule", erklaerung: "'Schule' ist ein Namenwort, also ein Nomen." },
        { frage: "Welches Wort ist ein Adjektiv?", typ: "mc", optionen: ["fröhlich", "Katze", "singen", "Tisch"], loesung: "fröhlich", erklaerung: "'fröhlich' beschreibt eine Eigenschaft, also ist es ein Adjektiv." },
        { frage: "Wie fragt man nach einem Nomen?", typ: "mc", optionen: ["Wer oder was?", "Was tut er?", "Wie ist es?", "Wo ist es?"], loesung: "Wer oder was?", erklaerung: "Mit 'Wer oder was?' findet man das Nomen im Satz." },
        { frage: "Welches Wort ist ein Verb?", typ: "mc", optionen: ["tanzen", "Mond", "hell", "leise"], loesung: "tanzen", erklaerung: "'tanzen' ist eine Handlung, also ein Verb." },
        { frage: "Welches Wort ist ein Nomen?", typ: "mc", optionen: ["Sonne", "singen", "laut", "schön"], loesung: "Sonne", erklaerung: "'Sonne' ist ein Namenwort, also ein Nomen." },
        { frage: "Welches Wort ist ein Adjektiv?", typ: "mc", optionen: ["mutig", "Ritter", "kämpfen", "Schwert"], loesung: "mutig", erklaerung: "'mutig' beschreibt eine Eigenschaft – ein Adjektiv." },
        { frage: "Wie fragt man nach einem Verb?", typ: "mc", optionen: ["Was tut er/sie?", "Wer oder was?", "Wie ist es?", "Wessen?"], loesung: "Was tut er/sie?", erklaerung: "Mit 'Was tut er/sie?' findet man das Verb." },
        { frage: "Welches Wort ist ein Nomen?", typ: "mc", optionen: ["Mikrofon", "singen", "laut", "auf"], loesung: "Mikrofon", erklaerung: "'Mikrofon' ist ein Ding, also ein Nomen." },
        { frage: "Welches Wort ist ein Verb?", typ: "mc", optionen: ["trainieren", "Bühne", "stark", "und"], loesung: "trainieren", erklaerung: "'trainieren' beschreibt eine Handlung, also ein Verb." },
        { frage: "Welches Wort ist ein Adjektiv?", typ: "mc", optionen: ["glänzend", "Stern", "tanzen", "Team"], loesung: "glänzend", erklaerung: "'glänzend' beschreibt, wie etwas ist – ein Adjektiv." }
      ]
    },
    {
      id: "gross-klein",
      titel: "Groß- & Kleinschreibung",
      icon: "🔠",
      intro: "Wann schreibt man ein Wort groß, wann klein?",
      lektion: [
        "🔠 Jeder Satz beginnt mit einem Großbuchstaben.",
        "🏷️ Nomen werden immer großgeschrieben – egal wo sie im Satz stehen.",
        "🔡 Verben und Adjektive schreibt man klein, außer sie stehen am Satzanfang.",
        "💡 Tipp: Wenn du einen Artikel (der, die, das, ein, eine) davorsetzen kannst, ist es meist ein Nomen."
      ],
      aufgaben: [
        { frage: "Welches Wort ist richtig geschrieben?", typ: "mc", optionen: ["Der Baum ist Grün.", "der baum ist grün.", "Der Baum ist grün.", "der Baum Ist grün."], loesung: "Der Baum ist grün.", erklaerung: "Satzanfang groß, Nomen ('Baum') groß, Adjektiv ('grün') klein." },
        { frage: "Welches Wort wird großgeschrieben?", typ: "mc", optionen: ["Tisch", "laufen", "schön", "und"], loesung: "Tisch", erklaerung: "'Tisch' ist ein Nomen und wird deshalb großgeschrieben." },
        { frage: "Am Satzanfang schreibt man immer …", typ: "mc", optionen: ["groß", "klein", "kursiv", "mit Ausrufezeichen"], loesung: "groß", erklaerung: "Das erste Wort eines Satzes wird immer großgeschrieben." },
        { frage: "Welcher Satz ist richtig?", typ: "mc", optionen: ["Ich gehe In die Schule.", "ich gehe in die schule.", "Ich gehe in die Schule.", "Ich Gehe in die Schule."], loesung: "Ich gehe in die Schule.", erklaerung: "Satzanfang 'Ich' groß, 'Schule' als Nomen groß, der Rest klein." },
        { frage: "Wird 'das Fahrrad' richtig geschrieben, wenn 'Fahrrad' großgeschrieben ist?", typ: "mc", optionen: ["Ja, weil es ein Nomen ist", "Nein, es ist ein Verb", "Nein, es ist ein Adjektiv", "Das spielt keine Rolle"], loesung: "Ja, weil es ein Nomen ist", erklaerung: "'Fahrrad' ist ein Nomen und wird deshalb großgeschrieben." },
        { frage: "Welches Wort schreibt man klein?", typ: "mc", optionen: ["schnell", "Auto", "Schule", "Kind"], loesung: "schnell", erklaerung: "'schnell' ist ein Adjektiv und wird kleingeschrieben (außer am Satzanfang)." },
        { frage: "Wie beginnt jeder neue Satz?", typ: "mc", optionen: ["mit Großbuchstabe", "mit Kleinbuchstabe", "mit Zahl", "mit Komma"], loesung: "mit Großbuchstabe", erklaerung: "Jeder Satz beginnt mit einem Großbuchstaben." },
        { frage: "Welcher Satz ist richtig?", typ: "mc", optionen: ["Die Sonne scheint Hell.", "die sonne scheint hell.", "Die Sonne scheint hell.", "Die sonne Scheint hell."], loesung: "Die Sonne scheint hell.", erklaerung: "'Sonne' ist ein Nomen (groß), 'hell' ein Adjektiv (klein), Satzanfang groß." },
        { frage: "Welches Wort wird großgeschrieben?", typ: "mc", optionen: ["Bühne", "singen", "laut", "leise"], loesung: "Bühne", erklaerung: "'Bühne' ist ein Nomen und wird großgeschrieben." },
        { frage: "Welcher Satz ist richtig?", typ: "mc", optionen: ["Das team übt jeden Tag.", "Das Team übt jeden tag.", "Das Team übt jeden Tag.", "das Team übt Jeden Tag."], loesung: "Das Team übt jeden Tag.", erklaerung: "'Team' und 'Tag' sind Nomen und werden großgeschrieben, 'übt' und 'jeden' klein." },
        { frage: "Welches Wort ist hier falsch geschrieben: 'Die Katze Schläft ruhig.'?", typ: "mc", optionen: ["Schläft", "Katze", "Die", "ruhig"], loesung: "Schläft", erklaerung: "'schläft' ist ein Verb und wird kleingeschrieben: 'Die Katze schläft ruhig.'" },
        { frage: "Welcher Satz ist richtig?", typ: "mc", optionen: ["mira übt für den Auftritt.", "Mira übt für den auftritt.", "Mira übt für den Auftritt.", "Mira Übt für den Auftritt."], loesung: "Mira übt für den Auftritt.", erklaerung: "Namen und Nomen ('Auftritt') werden großgeschrieben, 'übt' bleibt klein." },
        { frage: "Welches Wort ist ein Nomen und muss großgeschrieben werden: 'die reise war lang'?", typ: "mc", optionen: ["reise", "war", "lang", "die"], loesung: "reise", erklaerung: "'Reise' ist ein Nomen: 'Die Reise war lang.'" }
      ]
    },
    {
      id: "satzglieder",
      titel: "Satzglieder: Subjekt & Prädikat",
      icon: "🧩",
      intro: "Subjekt und Prädikat finden – und mit der Umstellprobe prüfen.",
      lektion: [
        "🧩 Jeder vollständige Satz braucht ein Subjekt (Wer oder was?) und ein Prädikat (Was tut das Subjekt? / Was geschieht?).",
        "🏃 Das Prädikat ist das Verb im Satz – es ist der 'Kern', um den sich alles andere dreht.",
        "🔀 Umstellprobe: Man kann prüfen, ob eine Wortgruppe ein eigenes Satzglied ist, indem man sie an den Satzanfang stellt. Bleibt sie zusammen, ist sie ein Satzglied. Beispiel: 'Der Hund bellt laut im Garten.' → 'Im Garten bellt der Hund laut.' ('im Garten' bleibt zusammen = ein Satzglied.)",
        "📍 In einem Aussagesatz steht das Prädikat fast immer an zweiter Stelle – egal, welches Satzglied ganz vorne steht."
      ],
      aufgaben: [
        { frage: "Wie fragt man nach dem Subjekt?", typ: "mc", optionen: ["Wer oder was?", "Was tut jemand?", "Wem?", "Wen oder was?"], loesung: "Wer oder was?", erklaerung: "Das Subjekt ist der Satzgegenstand: 'Wer oder was?'" },
        { frage: "Wie fragt man nach dem Prädikat?", typ: "mc", optionen: ["Was tut das Subjekt?", "Wer oder was?", "Wo?", "Wann?"], loesung: "Was tut das Subjekt?", erklaerung: "Das Prädikat ist die Satzaussage (das Verb): 'Was tut das Subjekt?'" },
        { frage: "Im Satz 'Der Hund bellt laut.' – was ist das Subjekt?", typ: "mc", optionen: ["Der Hund", "bellt", "laut", "kein Subjekt vorhanden"], loesung: "Der Hund", erklaerung: "'Der Hund' beantwortet die Frage 'Wer oder was bellt?'" },
        { frage: "Im Satz 'Der Hund bellt laut.' – was ist das Prädikat?", typ: "mc", optionen: ["Der Hund", "bellt", "laut", "kein Prädikat vorhanden"], loesung: "bellt", erklaerung: "'bellt' ist das Verb und damit das Prädikat." },
        { frage: "Was macht man bei der Umstellprobe?", typ: "mc", optionen: ["Man stellt eine Wortgruppe an den Satzanfang", "Man streicht das Prädikat", "Man liest den Satz rückwärts", "Man zählt die Wörter"], loesung: "Man stellt eine Wortgruppe an den Satzanfang", erklaerung: "Mit der Umstellprobe testet man, ob eine Wortgruppe zusammen als ein Satzglied verschoben werden kann." },
        { frage: "'Der Hund bellt laut im Garten.' wird zu 'Im Garten bellt der Hund laut.' Was zeigt das?", typ: "mc", optionen: ["'im Garten' ist ein eigenes Satzglied", "Der Satz ist jetzt falsch", "'bellt' ist kein Verb mehr", "Der Hund ist jetzt das Prädikat"], loesung: "'im Garten' ist ein eigenes Satzglied", erklaerung: "Weil 'im Garten' als Ganzes umgestellt werden kann, ist es ein zusammenhängendes Satzglied." },
        { frage: "In einem Aussagesatz steht das Prädikat meistens an welcher Stelle?", typ: "zahl", loesung: "2", erklaerung: "Das Prädikat steht in einem deutschen Aussagesatz fast immer an zweiter Stelle." },
        { frage: "'Am Abend liest Tom ein Buch.' – was steht hier an erster Stelle?", typ: "mc", optionen: ["Am Abend", "liest", "Tom", "ein Buch"], loesung: "Am Abend", erklaerung: "'Am Abend' steht vorne, das Prädikat 'liest' folgt trotzdem an zweiter Stelle." },
        { frage: "'Am Abend liest Tom ein Buch.' – was ist hier das Prädikat?", typ: "mc", optionen: ["liest", "Am Abend", "Tom", "ein Buch"], loesung: "liest", erklaerung: "'liest' ist das Verb und bleibt das Prädikat, egal was vorne im Satz steht." },
        { frage: "Ein einfacher Satz braucht mindestens …", typ: "mc", optionen: ["Subjekt und Prädikat", "nur ein Objekt", "drei Adjektive", "ein Fragezeichen"], loesung: "Subjekt und Prädikat", erklaerung: "Jeder vollständige Satz braucht mindestens ein Subjekt und ein Prädikat." },
        { frage: "Im Satz 'Die Tänzerin übt die Schritte.' – was ist das Subjekt?", typ: "mc", optionen: ["Die Tänzerin", "übt", "die Schritte", "kein Subjekt vorhanden"], loesung: "Die Tänzerin", erklaerung: "'Die Tänzerin' beantwortet 'Wer oder was übt?'" },
        { frage: "Im Satz 'Die Sonne scheint.' – was ist das Prädikat?", typ: "mc", optionen: ["scheint", "Die Sonne", "kein Prädikat vorhanden", "Sonne"], loesung: "scheint", erklaerung: "'scheint' ist das Verb und damit das Prädikat des Satzes." }
      ]
    },
    {
      id: "satzglieder-objekte",
      titel: "Satzglieder: Objekte & adverbiale Bestimmungen",
      icon: "🎯",
      intro: "Akkusativ- und Dativobjekt sowie Ort, Zeit, Art und Grund im Satz finden.",
      lektion: [
        "🎯 Ein Objekt ergänzt das Prädikat. Das Akkusativobjekt antwortet auf 'Wen oder was?', z. B.: 'Anna liest ein Buch.' → ein Buch.",
        "🤲 Das Dativobjekt antwortet auf 'Wem?', z. B.: 'Der Lehrer gibt dem Schüler ein Buch.' → dem Schüler. Manche Verben (geben, schenken, zeigen …) brauchen beide Objekte gleichzeitig.",
        "🧭 Adverbiale Bestimmungen geben zusätzliche Informationen: des Ortes (Wo?), der Zeit (Wann?), der Art und Weise (Wie?) und des Grundes (Warum?).",
        "📌 Beispiel: 'Sie rennt schnell durch den Park.' – 'schnell' ist die Art und Weise, 'durch den Park' der Ort."
      ],
      aufgaben: [
        { frage: "Wie fragt man nach dem Akkusativobjekt?", typ: "mc", optionen: ["Wen oder was?", "Wer oder was?", "Wessen?", "Wo?"], loesung: "Wen oder was?", erklaerung: "Das Akkusativobjekt findet man mit der Frage 'Wen oder was?'" },
        { frage: "Wie fragt man nach dem Dativobjekt?", typ: "mc", optionen: ["Wem?", "Wen oder was?", "Wessen?", "Wie?"], loesung: "Wem?", erklaerung: "Das Dativobjekt findet man mit der Frage 'Wem?'" },
        { frage: "Im Satz 'Anna liest ein Buch.' – was ist das Akkusativobjekt?", typ: "mc", optionen: ["ein Buch", "Anna", "liest", "kein Objekt vorhanden"], loesung: "ein Buch", erklaerung: "'ein Buch' beantwortet die Frage 'Wen oder was liest Anna?'" },
        { frage: "Im Satz 'Der Lehrer gibt dem Schüler ein Buch.' – was ist das Dativobjekt?", typ: "mc", optionen: ["dem Schüler", "Der Lehrer", "ein Buch", "gibt"], loesung: "dem Schüler", erklaerung: "'dem Schüler' beantwortet die Frage 'Wem gibt der Lehrer das Buch?'" },
        { frage: "Im selben Satz 'Der Lehrer gibt dem Schüler ein Buch.' – was ist das Akkusativobjekt?", typ: "mc", optionen: ["ein Buch", "dem Schüler", "Der Lehrer", "kein Objekt vorhanden"], loesung: "ein Buch", erklaerung: "'ein Buch' beantwortet 'Wen oder was gibt der Lehrer?'" },
        { frage: "Die adverbiale Bestimmung des Ortes antwortet auf welche Frage?", typ: "mc", optionen: ["Wo?", "Wann?", "Wie?", "Warum?"], loesung: "Wo?", erklaerung: "Ort-Angaben antworten auf 'Wo?' (oder 'Wohin?'/'Woher?')." },
        { frage: "Die adverbiale Bestimmung der Zeit antwortet auf welche Frage?", typ: "mc", optionen: ["Wann?", "Wo?", "Wie?", "Warum?"], loesung: "Wann?", erklaerung: "Zeit-Angaben antworten auf 'Wann?'" },
        { frage: "Die adverbiale Bestimmung der Art und Weise antwortet auf welche Frage?", typ: "mc", optionen: ["Wie?", "Wo?", "Wann?", "Warum?"], loesung: "Wie?", erklaerung: "Art-und-Weise-Angaben antworten auf 'Wie?'" },
        { frage: "Die adverbiale Bestimmung des Grundes antwortet auf welche Frage?", typ: "mc", optionen: ["Warum?", "Wo?", "Wann?", "Wie?"], loesung: "Warum?", erklaerung: "Grund-Angaben antworten auf 'Warum?' (oder 'Weshalb?')." },
        { frage: "'Sie rennt schnell durch den Park.' – welche adverbiale Bestimmung ist 'durch den Park'?", typ: "mc", optionen: ["Ort", "Zeit", "Art und Weise", "Grund"], loesung: "Ort", erklaerung: "'durch den Park' beantwortet 'Wo (entlang)?' – das ist eine Ortsangabe." },
        { frage: "'Sie rennt schnell durch den Park.' – welche adverbiale Bestimmung ist 'schnell'?", typ: "mc", optionen: ["Art und Weise", "Ort", "Zeit", "Grund"], loesung: "Art und Weise", erklaerung: "'schnell' beantwortet 'Wie rennt sie?' – Art und Weise." },
        { frage: "'Wegen des Regens blieben wir zu Hause.' – welche adverbiale Bestimmung ist 'Wegen des Regens'?", typ: "mc", optionen: ["Grund", "Ort", "Zeit", "Art und Weise"], loesung: "Grund", erklaerung: "'Wegen des Regens' beantwortet 'Warum blieben wir zu Hause?' – ein Grund." }
      ]
    },
    {
      id: "tempora",
      titel: "Zeitformen (Tempora)",
      icon: "⏳",
      intro: "Präsens, Präteritum, Perfekt, Plusquamperfekt und Futur I unterscheiden.",
      lektion: [
        "🕐 Präsens (Gegenwart): 'Sie geht.' – für Dinge, die jetzt passieren oder immer gelten.",
        "🕑 Präteritum (Erzählzeit): 'Sie ging.' – die typische Zeitform beim Schreiben von Geschichten.",
        "🕒 Perfekt (gesprochene Vergangenheit): 'Sie ist gegangen.' – gebildet mit 'haben' oder 'sein' + Partizip II, häufig im Gespräch.",
        "🕓 Plusquamperfekt (Vorvergangenheit): 'Sie war gegangen.' – für etwas, das schon VOR einem anderen Vergangenheits-Ereignis passiert war.",
        "🕔 Futur I (Zukunft): 'Sie wird gehen.' – gebildet mit 'werden' + Infinitiv."
      ],
      aufgaben: [
        { frage: "'Sie geht zur Schule.' – welche Zeitform ist das?", typ: "mc", optionen: ["Präsens", "Präteritum", "Perfekt", "Futur I"], loesung: "Präsens", erklaerung: "'geht' ist die Präsensform (Gegenwart) von 'gehen'." },
        { frage: "'Sie ging zur Schule.' – welche Zeitform ist das?", typ: "mc", optionen: ["Präteritum", "Präsens", "Perfekt", "Plusquamperfekt"], loesung: "Präteritum", erklaerung: "'ging' ist die Präteritumform (Erzählzeit) von 'gehen'." },
        { frage: "'Sie ist zur Schule gegangen.' – welche Zeitform ist das?", typ: "mc", optionen: ["Perfekt", "Präsens", "Präteritum", "Futur I"], loesung: "Perfekt", erklaerung: "'ist … gegangen' besteht aus 'sein' + Partizip II – das ist Perfekt." },
        { frage: "'Sie wird zur Schule gehen.' – welche Zeitform ist das?", typ: "mc", optionen: ["Futur I", "Präsens", "Präteritum", "Perfekt"], loesung: "Futur I", erklaerung: "'wird … gehen' besteht aus 'werden' + Infinitiv – das ist Futur I." },
        { frage: "'Sie war schon zur Schule gegangen, als es zu regnen begann.' – welche Zeitform hat 'war … gegangen'?", typ: "mc", optionen: ["Plusquamperfekt", "Präsens", "Perfekt", "Futur I"], loesung: "Plusquamperfekt", erklaerung: "'war … gegangen' zeigt: das Gehen war schon VOR dem Regen abgeschlossen – Plusquamperfekt." },
        { frage: "Das Perfekt wird gebildet mit 'haben' oder 'sein' plus …", typ: "mc", optionen: ["Partizip II", "Infinitiv", "Präsensform", "Adjektiv"], loesung: "Partizip II", erklaerung: "Perfekt = 'haben'/'sein' + Partizip II, z. B. 'hat gespielt', 'ist gegangen'." },
        { frage: "Das Futur I wird gebildet mit 'werden' plus …", typ: "mc", optionen: ["Infinitiv", "Partizip II", "Präteritum", "Adjektiv"], loesung: "Infinitiv", erklaerung: "Futur I = 'werden' + Infinitiv, z. B. 'wird spielen'." },
        { frage: "Welche Zeitform nutzt man meistens zum Erzählen von Geschichten?", typ: "mc", optionen: ["Präteritum", "Präsens", "Perfekt", "Futur I"], loesung: "Präteritum", erklaerung: "Das Präteritum ist die klassische Erzählzeit in Geschichten." },
        { frage: "Welche Zeitform beschreibt etwas, das schon vor einem anderen Vergangenheits-Ereignis passiert war?", typ: "mc", optionen: ["Plusquamperfekt", "Präsens", "Futur I", "Perfekt"], loesung: "Plusquamperfekt", erklaerung: "Das Plusquamperfekt zeigt die 'Vergangenheit vor der Vergangenheit'." },
        { frage: "'ich spiele' – welche Zeitform?", typ: "mc", optionen: ["Präsens", "Präteritum", "Perfekt", "Futur I"], loesung: "Präsens", erklaerung: "'spiele' ist die Präsensform von 'spielen'." },
        { frage: "'ich habe gespielt' – welche Zeitform?", typ: "mc", optionen: ["Perfekt", "Präsens", "Präteritum", "Plusquamperfekt"], loesung: "Perfekt", erklaerung: "'habe … gespielt' besteht aus 'haben' + Partizip II – Perfekt." },
        { frage: "'ich spielte' – welche Zeitform?", typ: "mc", optionen: ["Präteritum", "Präsens", "Perfekt", "Futur I"], loesung: "Präteritum", erklaerung: "'spielte' ist die Präteritumform von 'spielen'." },
        { frage: "'ich werde spielen' – welche Zeitform?", typ: "mc", optionen: ["Futur I", "Präsens", "Präteritum", "Perfekt"], loesung: "Futur I", erklaerung: "'werde … spielen' besteht aus 'werden' + Infinitiv – Futur I." },
        { frage: "'ich hatte gespielt' – welche Zeitform?", typ: "mc", optionen: ["Plusquamperfekt", "Perfekt", "Präteritum", "Futur I"], loesung: "Plusquamperfekt", erklaerung: "'hatte … gespielt' besteht aus 'hatte' (Präteritum von haben) + Partizip II – Plusquamperfekt." }
      ]
    },
    {
      id: "zeichensetzung",
      titel: "Zeichensetzung",
      icon: "❗",
      intro: "Satzzeichen und wörtliche Rede richtig setzen.",
      lektion: [
        "🔵 Ein Aussagesatz endet mit einem Punkt (.).",
        "❓ Eine Frage endet mit einem Fragezeichen (?).",
        "❗ Ein Ausruf oder Befehl endet oft mit einem Ausrufezeichen (!).",
        "💬 Wörtliche Rede steht in Anführungszeichen: „...“. Vor dem Begleitsatz (z. B. 'sagt sie') steht ein Komma."
      ],
      aufgaben: [
        { frage: "Welches Satzzeichen steht am Ende einer Frage?", typ: "mc", optionen: ["Fragezeichen (?)", "Punkt (.)", "Ausrufezeichen (!)", "Komma (,)"], loesung: "Fragezeichen (?)", erklaerung: "Eine Frage endet mit einem Fragezeichen." },
        { frage: "Welches Satzzeichen steht am Ende eines Befehls?", typ: "mc", optionen: ["Fragezeichen (?)", "Punkt (.)", "Ausrufezeichen (!)", "Komma (,)"], loesung: "Ausrufezeichen (!)", erklaerung: "Ein Befehl oder Ausruf endet oft mit einem Ausrufezeichen." },
        { frage: "Wörtliche Rede steht immer in …", typ: "mc", optionen: ["Anführungszeichen", "Klammern", "Fragezeichen", "Sternchen"], loesung: "Anführungszeichen", erklaerung: "Wörtliche Rede wird in Anführungszeichen (' ') gesetzt." },
        { frage: "Welcher Satz zeigt wörtliche Rede richtig?", typ: "mc", optionen: ['„Ich komme gleich", sagt Lisa.', "Ich komme gleich, sagt Lisa.", "'Ich komme gleich sagt Lisa.'", "„Ich komme gleich sagt Lisa"], loesung: '„Ich komme gleich", sagt Lisa.', erklaerung: "Die wörtliche Rede steht in Anführungszeichen, danach folgt ein Komma vor dem Begleitsatz." },
        { frage: "Vor einem Begleitsatz nach wörtlicher Rede steht meist ein …", typ: "mc", optionen: ["Komma", "Punkt", "Doppelpunkt", "Semikolon"], loesung: "Komma", erklaerung: "Beispiel: „Ich komme“, sagt er. – vor 'sagt er' steht ein Komma." },
        { frage: "Wie viele Satzzeichen braucht die wörtliche Rede mindestens (Anführungszeichen)?", typ: "zahl", loesung: "2", erklaerung: "Anführungszeichen werden immer paarweise gesetzt: am Anfang und am Ende." },
        { frage: "Welches Satzzeichen trennt Aufzählungen in einem Satz?", typ: "mc", optionen: ["Komma", "Punkt", "Fragezeichen", "Ausrufezeichen"], loesung: "Komma", erklaerung: "Bei Aufzählungen setzt man zwischen den einzelnen Teilen ein Komma." },
        { frage: "Ein Aussagesatz endet normalerweise mit einem …", typ: "mc", optionen: ["Punkt", "Fragezeichen", "Ausrufezeichen", "Komma"], loesung: "Punkt", erklaerung: "Ein normaler Aussagesatz endet mit einem Punkt." },
        { frage: "Welcher Satz ist eine Frage?", typ: "mc", optionen: ["Kommst du mit ins Training?", "Ich komme mit ins Training.", "Komm mit ins Training!", "Wir gehen ins Training"], loesung: "Kommst du mit ins Training?", erklaerung: "Ein Fragesatz endet mit einem Fragezeichen." },
        { frage: "Welcher Satz ist ein Befehl?", typ: "mc", optionen: ["Pass auf!", "Passt du auf?", "Ich passe auf.", "Aufpassen ist wichtig."], loesung: "Pass auf!", erklaerung: "'Pass auf!' ist ein Befehl und endet mit einem Ausrufezeichen." },
        { frage: "Vor der wörtlichen Rede steht meistens ein …", typ: "mc", optionen: ["Doppelpunkt", "Komma", "Semikolon", "Bindestrich"], loesung: "Doppelpunkt", erklaerung: "Beispiel: Sie sagt: „Ich komme gleich.“ – davor steht ein Doppelpunkt." }
      ]
    },
    {
      id: "textverstaendnis",
      titel: "Textverständnis",
      icon: "📚",
      intro: "Lies den kurzen Text genau und beantworte die Fragen.",
      lektion: [
        "👀 Lies den Text zuerst ganz in Ruhe durch, bevor du die Fragen anschaust.",
        "🔍 Wenn eine Frage kommt, suche die passende Stelle im Text noch einmal genau.",
        "🧠 Manche Antworten stehen wörtlich im Text, andere musst du selbst zusammenreimen.",
        "🔎 Manche Antworten musst du nicht nur suchen, sondern selbst erschließen – z. B. wenn eine Uhr 'zwölf schlägt', bedeutet das 12 Uhr Mittag, auch wenn die Zahl '12 Uhr' nirgends direkt im Text steht. Das nennt man eine Schlussfolgerung (Inferenz)."
      ],
      text: "Am Samstagmorgen packte Familie Meyer ihre Fahrräder und fuhr zum Wald am Rand der Stadt. Der Himmel war klar, die Sonne schien warm, und aus den Bäumen klang lautes Vogelgezwitscher. Linas Vater hatte extra einen Picknickkorb mit belegten Broten und einer Thermoskanne Tee eingepackt, denn sie wollten den ganzen Vormittag draußen bleiben.\n\nKaum waren sie im Wald angekommen, entdeckte Lina, die neunjährige Tochter, unter einem dichten Busch etwas, das sich bewegte. Sie blieb sofort stehen, hockte sich langsam hin und erkannte einen kleinen Igel, der sich zwischen den trockenen Blättern versteckte. Vorsichtig beobachtete sie das Tier eine ganze Weile, ohne näherzukommen oder laut zu sprechen, damit der Igel keine Angst bekam. Ihr Bruder Paul, der elf Jahre alt war, lief leise dazu und bat seine Mutter um ihr Handy, um ein Foto von dem seltenen Fund zu machen. Das Bild gelang ihm erst beim dritten Versuch, weil der Igel sich immer wieder zwischen die Blätter zurückzog.\n\nAls die Kirchturmuhr im Dorf zwölf schlug, packte die Familie ihre Brote aus und breitete eine karierte Decke auf einer sonnigen Wiese aus. Sie aßen gemeinsam, tauschten Butterbrote und erzählten sich, was sie im Wald schon alles entdeckt hatten. Nach dem Essen zogen Lina und Paul los, um bunte Blätter zu sammeln – rote, gelbe und orange-braune –, denn sie wollten am nächsten Tag in der Schule ein Herbstbild daraus basteln. Ihre Mutter half ihnen, die schönsten Exemplare auszusuchen, während der Vater die Fahrräder für den Rückweg bereitmachte.\n\nNach etwas mehr als einer Stunde im Wald wurde der Himmel im Westen langsam orange, und die Familie packte ihre Rucksäcke wieder ein. Müde, aber zufrieden setzten sich alle auf ihre Fahrräder und fuhren gemeinsam nach Hause. Lina dachte auf dem ganzen Heimweg an den kleinen Igel und hoffte, ihn bei einem nächsten Ausflug wiederzusehen.",
      aufgaben: [
        { frage: "Womit fuhr die Familie zum Wald?", typ: "mc", optionen: ["Mit dem Fahrrad", "Mit dem Auto", "Mit dem Bus", "Zu Fuß"], loesung: "Mit dem Fahrrad", erklaerung: "Im Text steht: 'packte Familie Meyer ihre Fahrräder' und am Ende 'setzten sich alle auf ihre Fahrräder und fuhren gemeinsam nach Hause' – das ist eine direkte, wörtliche Angabe, die du im Text nachlesen kannst." },
        { frage: "Wer entdeckte den Igel?", typ: "mc", optionen: ["Lina", "Paul", "Die Mutter", "Der Vater"], loesung: "Lina", erklaerung: "Im Text steht ausdrücklich: 'entdeckte Lina, die neunjährige Tochter, unter einem dichten Busch etwas'. Solche Antworten findest du, indem du nach dem Namen direkt vor oder nach der gesuchten Handlung suchst." },
        { frage: "Wie alt ist Lina?", typ: "zahl", loesung: "9", erklaerung: "Der Text nennt es direkt: 'Lina, die neunjährige Tochter'. Das Wort 'neunjährige' sagt dir sofort das Alter, ohne dass du etwas ausrechnen musst." },
        { frage: "Wie alt ist Paul?", typ: "zahl", loesung: "11", erklaerung: "Im Text steht: 'Ihr Bruder Paul, der elf Jahre alt war'. Auch das ist eine wörtliche Angabe, die direkt im Satz zu finden ist." },
        { frage: "Womit machte Paul ein Foto?", typ: "mc", optionen: ["Mit dem Handy seiner Mutter", "Mit einer Kamera", "Mit einem Tablet", "Er machte kein Foto"], loesung: "Mit dem Handy seiner Mutter", erklaerung: "Im Text steht: 'bat seine Mutter um ihr Handy, um ein Foto von dem seltenen Fund zu machen'. Wichtig: Es ist das Handy der Mutter, nicht sein eigenes." },
        { frage: "Beim wievielten Versuch gelang Paul das Foto?", typ: "zahl", loesung: "3", erklaerung: "Im Text steht: 'Das Bild gelang ihm erst beim dritten Versuch'. Diese Information ist etwas versteckter im Text als die anderen – du musst also genau lesen, nicht nur überfliegen." },
        { frage: "Um wie viel Uhr aßen sie zu Mittag?", typ: "mc", optionen: ["12 Uhr", "10 Uhr", "14 Uhr", "16 Uhr"], loesung: "12 Uhr", erklaerung: "Im Text steht: 'Als die Kirchturmuhr im Dorf zwölf schlug'. Das steht nicht direkt als '12 Uhr' da – du musst selbst schließen, dass eine Turmuhr, die zwölfmal schlägt, mittags 12 Uhr anzeigt. Das nennt man eine Schlussfolgerung." },
        { frage: "Wie war das Wetter am Anfang des Ausflugs?", typ: "mc", optionen: ["Die Sonne schien", "Es regnete", "Es schneite", "Es war neblig"], loesung: "Die Sonne schien", erklaerung: "Im Text steht: 'Der Himmel war klar, die Sonne schien warm'. Wetterbeschreibungen stehen meist am Anfang einer Geschichte, weil sie die Stimmung der Szene festlegen." },
        { frage: "Störte Lina den Igel?", typ: "mc", optionen: ["Nein, sie beobachtete ihn vorsichtig", "Ja, sie fing ihn", "Ja, sie erschreckte ihn", "Sie fand keinen Igel"], loesung: "Nein, sie beobachtete ihn vorsichtig", erklaerung: "Im Text steht: 'ohne näherzukommen oder laut zu sprechen, damit der Igel keine Angst bekam'. Diese Formulierung zeigt dir, dass Lina absichtlich vorsichtig war, um das Tier nicht zu erschrecken." },
        { frage: "Was hatte der Vater für das Picknick eingepackt?", typ: "mc", optionen: ["Belegte Brote und Tee", "Nur Kekse", "Pizza", "Nichts, sie kauften unterwegs ein"], loesung: "Belegte Brote und Tee", erklaerung: "Im Text steht: 'hatte extra einen Picknickkorb mit belegten Broten und einer Thermoskanne Tee eingepackt'. Das Wort 'extra' zeigt außerdem, dass der Ausflug von Anfang an gut geplant war." },
        { frage: "Wo aßen sie zu Mittag?", typ: "mc", optionen: ["Auf einer Wiese", "Zu Hause", "Im Auto", "In einem Restaurant"], loesung: "Auf einer Wiese", erklaerung: "Im Text steht: 'breitete eine karierte Decke auf einer sonnigen Wiese aus'. Beachte: Es ist nicht irgendeine Wiese, sondern eine sonnige – solche Details machen eine Geschichte lebendiger." },
        { frage: "Was sammelten die Kinder?", typ: "mc", optionen: ["Bunte Blätter", "Steine", "Pilze", "Blumen"], loesung: "Bunte Blätter", erklaerung: "Im Text steht: 'zogen Lina und Paul los, um bunte Blätter zu sammeln – rote, gelbe und orange-braune'. Der Text nennt sogar die genauen Farben, das macht das Bild im Kopf des Lesers genauer." },
        { frage: "Wofür wollten sie die Blätter benutzen?", typ: "mc", optionen: ["Für ein Herbstbild", "Zum Essen", "Als Geschenk", "Für die Schule"], loesung: "Für ein Herbstbild", erklaerung: "Im Text steht: 'denn sie wollten am nächsten Tag in der Schule ein Herbstbild daraus basteln'. Das Wort 'denn' leitet hier direkt die Begründung ein." },
        { frage: "Wie lange waren sie ungefähr im Wald?", typ: "mc", optionen: ["Etwas mehr als eine Stunde", "Den ganzen Tag", "Nur 10 Minuten", "Zwei Tage"], loesung: "Etwas mehr als eine Stunde", erklaerung: "Im Text steht: 'Nach etwas mehr als einer Stunde im Wald wurde der Himmel im Westen langsam orange'. Achte auf die Formulierung 'etwas mehr als' – das ist keine ganz genaue Zeitangabe." },
        { frage: "Wie fühlte sich die Familie auf dem Heimweg?", typ: "mc", optionen: ["Müde, aber zufrieden", "Traurig", "Wütend", "Gelangweilt"], loesung: "Müde, aber zufrieden", erklaerung: "Im Text steht: 'Müde, aber zufrieden setzten sich alle auf ihre Fahrräder'. Zwei Gefühle werden hier gleichzeitig genannt – das kommt in Texten häufig vor und macht die Stimmung genauer." },
        { frage: "Woran dachte Lina auf dem Heimweg?", typ: "mc", optionen: ["An den kleinen Igel", "An die Schule", "An das Mittagessen", "An gar nichts Bestimmtes"], loesung: "An den kleinen Igel", erklaerung: "Im Text steht: 'Lina dachte auf dem ganzen Heimweg an den kleinen Igel und hoffte, ihn bei einem nächsten Ausflug wiederzusehen'. Weil das der letzte Gedanke der Geschichte ist, kannst du erschließen, dass der Igel bei Lina den größten Eindruck des Tages hinterlassen hat." }
      ]
    },
    {
      id: "sagen",
      titel: "Sagen",
      icon: "🏔️",
      intro: "Eine alte Textsorte kennenlernen: Was ist eine Sage?",
      lektion: [
        "📜 Eine Sage ist eine alte Geschichte, die von einem echten Ort oder Ereignis erzählt – aber mit übernatürlichen oder unerklärlichen Dingen vermischt.",
        "🗣️ Sagen wurden früher mündlich (nur gesprochen) von einer Generation zur nächsten weitergegeben, bevor sie aufgeschrieben wurden.",
        "🆚 Unterschied zum Märchen: Sagen spielen an einem echten Ort und behaupten, 'wahr' zu sein. Märchen beginnen oft mit 'Es war einmal ...' und spielen an keinem bestimmten Ort.",
        "📖 Bekannte deutsche Sagen sind zum Beispiel 'Der Rattenfänger von Hameln', 'Die Loreley' und 'Rübezahl'."
      ],
      aufgaben: [
        { frage: "Was ist eine Sage?", typ: "mc", optionen: ["Eine alte Geschichte über einen echten Ort, oft mit übernatürlichen Ereignissen", "Ein Sachtext über Tiere", "Ein Gedicht ohne Reim", "Eine Anleitung zum Kochen"], loesung: "Eine alte Geschichte über einen echten Ort, oft mit übernatürlichen Ereignissen", erklaerung: "Eine Sage erzählt von einem echten Ort, gemischt mit unerklärlichen Ereignissen." },
        { frage: "Womit beginnen die meisten Märchen typischerweise?", typ: "mc", optionen: ["Es war einmal ...", "An einem echten Ort ...", "Vor kurzer Zeit ...", "Heute Morgen ..."], loesung: "Es war einmal ...", erklaerung: "Märchen beginnen meist mit 'Es war einmal ...' – Sagen dagegen spielen an echten Orten." },
        { frage: "Wo spielen Sagen meistens?", typ: "mc", optionen: ["An einem echten, bekannten Ort", "Nirgendwo Bestimmtem", "Nur im Weltraum", "Nur in der Schule"], loesung: "An einem echten, bekannten Ort", erklaerung: "Sagen spielen typischerweise an echten Orten wie einem Berg, Fluss oder einer Stadt." },
        { frage: "Wie wurden Sagen früher weitergegeben, bevor es viele Bücher gab?", typ: "mc", optionen: ["Mündlich, von Generation zu Generation", "Nur im Fernsehen", "Gar nicht", "Nur in Zeitungen"], loesung: "Mündlich, von Generation zu Generation", erklaerung: "Sagen wurden lange Zeit nur erzählt, nicht aufgeschrieben." },
        { frage: "Welche der folgenden ist eine bekannte deutsche Sage?", typ: "mc", optionen: ["Der Rattenfänger von Hameln", "Cinderella", "Robin Hood", "Die drei kleinen Schweinchen"], loesung: "Der Rattenfänger von Hameln", erklaerung: "'Der Rattenfänger von Hameln' ist eine bekannte deutsche Sage." },
        { frage: "Die Sage von der 'Loreley' erzählt von einem Felsen an welchem Fluss?", typ: "mc", optionen: ["Rhein", "Elbe", "Donau", "Weser"], loesung: "Rhein", erklaerung: "Die Loreley ist ein berühmter Felsen am Rhein." },
        { frage: "Was unterscheidet eine Sage von einem Sachtext (Fakten-Text)?", typ: "mc", optionen: ["Eine Sage enthält oft unerklärliche Ereignisse, ein Sachtext nicht", "Eine Sage hat immer Bilder", "Ein Sachtext ist immer kürzer", "Es gibt keinen Unterschied"], loesung: "Eine Sage enthält oft unerklärliche Ereignisse, ein Sachtext nicht", erklaerung: "Sachtexte berichten nur Fakten, Sagen mischen Fakten mit Unerklärlichem." },
        { frage: "Behaupten Sagen, dass sie wirklich passiert sind?", typ: "mc", optionen: ["Ja", "Nein", "Nur manchmal am Anfang", "Das steht nie dabei"], loesung: "Ja", erklaerung: "Sagen behaupten (im Gegensatz zu Märchen), dass sie wirklich geschehen sind." },
        { frage: "Ein alter, sagenhafter Berggeist im Riesengebirge heißt:", typ: "mc", optionen: ["Rübezahl", "Rumpelstilzchen", "Zwerg Nase", "Wichtelmann"], loesung: "Rübezahl", erklaerung: "Rübezahl ist der bekannte Berggeist aus den Sagen des Riesengebirges." },
        { frage: "Sagen gehören zu welcher Textart?", typ: "mc", optionen: ["Erzähltext", "Sachtext", "Gedicht", "Anleitung"], loesung: "Erzähltext", erklaerung: "Sagen sind erzählende Texte, genau wie Märchen und Fabeln." }
      ]
    },
    {
      id: "gedichte",
      titel: "Gedichte",
      icon: "🎵",
      intro: "Verse, Strophen und Reime – wie Gedichte aufgebaut sind.",
      lektion: [
        "🎵 Ein Gedicht ist in Verse (Zeilen) und oft in Strophen (Abschnitte) gegliedert – nicht wie ein normaler Text in Sätzen und Absätzen.",
        "🔁 Viele Gedichte reimen sich: Die letzten Wörter von zwei oder mehr Zeilen klingen ähnlich, z. B. 'Baum' und 'Traum'.",
        "🎶 Das Reimschema beschreibt, wie sich die Zeilen reimen. Beim Paarreim reimen sich Zeile 1+2 und Zeile 3+4 (Schema: aabb). Beim Kreuzreim reimen sich Zeile 1+3 und Zeile 2+4 (Schema: abab).",
        "👂 Beim lauten Vorlesen eines Gedichts achtet man auf den Rhythmus – manche Silben werden betont, andere nicht."
      ],
      aufgaben: [
        { frage: "Was ist eine Strophe?", typ: "mc", optionen: ["Ein Abschnitt in einem Gedicht", "Ein einzelnes Wort", "Ein Satzzeichen", "Der Titel eines Gedichts"], loesung: "Ein Abschnitt in einem Gedicht", erklaerung: "Eine Strophe ist ein Abschnitt aus mehreren Versen." },
        { frage: "Wie nennt man eine einzelne Zeile in einem Gedicht?", typ: "mc", optionen: ["Vers", "Satz", "Absatz", "Strophe"], loesung: "Vers", erklaerung: "Eine Gedichtzeile heißt Vers." },
        { frage: "Reimen sich 'Baum' und 'Traum'?", typ: "mc", optionen: ["Ja", "Nein"], loesung: "Ja", erklaerung: "'Baum' und 'Traum' klingen am Ende gleich – sie reimen sich." },
        { frage: "Beim Paarreim reimen sich welche Zeilen?", typ: "mc", optionen: ["Zeile 1+2 und Zeile 3+4", "Zeile 1+3 und Zeile 2+4", "Nur Zeile 1 und 4", "Gar keine"], loesung: "Zeile 1+2 und Zeile 3+4", erklaerung: "Beim Paarreim (Schema aabb) reimen sich direkt aufeinanderfolgende Zeilen." },
        { frage: "Wie heißt das Reimschema, bei dem sich Zeile 1+3 und Zeile 2+4 reimen?", typ: "mc", optionen: ["Kreuzreim", "Paarreim", "Kein Reim", "Zufallsreim"], loesung: "Kreuzreim", erklaerung: "Der Kreuzreim hat das Schema abab." },
        { frage: "Welches Wort reimt sich auf 'Haus'?", typ: "mc", optionen: ["Maus", "Tisch", "Buch", "Baum"], loesung: "Maus", erklaerung: "'Haus' und 'Maus' klingen am Ende gleich." },
        { frage: "Welches Wort reimt sich auf 'Licht'?", typ: "mc", optionen: ["Gedicht", "Baum", "Haus", "Sonne"], loesung: "Gedicht", erklaerung: "'Licht' und 'Gedicht' reimen sich." },
        { frage: "Wie nennt man es, wenn beim Lesen eines Gedichts manche Silben betont werden?", typ: "mc", optionen: ["Rhythmus", "Reim", "Strophe", "Vers"], loesung: "Rhythmus", erklaerung: "Der Rhythmus entsteht durch betonte und unbetonte Silben." },
        { frage: "Ist ein Gedicht in Sätzen und Absätzen geschrieben wie ein Brief?", typ: "mc", optionen: ["Nein, in Versen und Strophen", "Ja, genauso", "Nur manchmal", "Das ist egal"], loesung: "Nein, in Versen und Strophen", erklaerung: "Gedichte sind in Versen und Strophen aufgebaut, nicht wie normale Prosa-Texte." },
        { frage: "Welches Reimschema hat das Muster 'abab'?", typ: "mc", optionen: ["Kreuzreim", "Paarreim", "Umarmender Reim", "Kein Reim"], loesung: "Kreuzreim", erklaerung: "Das Schema abab gehört zum Kreuzreim." }
      ]
    },
    {
      id: "erzaehlungen-schreiben",
      titel: "Erzählungen schreiben",
      icon: "✍️",
      intro: "Wie schreibt man eine spannende Geschichte?",
      lektion: [
        "✍️ Eine Erzählung hat drei Teile: Einleitung (Wer? Wo? Wann?), Hauptteil (Was passiert? – der spannendste Teil!) und Schluss (Wie endet die Geschichte?).",
        "⏳ Erzählungen schreibt man meistens im Präteritum (der Erzählzeit), z. B. 'Sie ging' statt 'Sie geht'.",
        "🎢 Ein Spannungsbogen macht eine Geschichte spannend: Sie beginnt ruhig, wird immer aufregender bis zum Höhepunkt, dann löst sich alles auf.",
        "🌈 Nutze anschauliche Adjektive und Verben statt langweiliger Wörter – schreibe 'flüsterte' statt nur 'sagte leise'."
      ],
      aufgaben: [
        { frage: "Aus wie vielen Hauptteilen besteht eine Erzählung?", typ: "zahl", loesung: "3", erklaerung: "Eine Erzählung hat Einleitung, Hauptteil und Schluss." },
        { frage: "In welcher Zeit schreibt man meistens eine Erzählung?", typ: "mc", optionen: ["Präteritum", "Präsens", "Futur", "Perfekt"], loesung: "Präteritum", erklaerung: "Das Präteritum ist die typische Erzählzeit." },
        { frage: "Was gehört in die Einleitung einer Erzählung?", typ: "mc", optionen: ["Wer, wo, wann", "Der spannendste Moment", "Das Ende", "Nur ein Bild"], loesung: "Wer, wo, wann", erklaerung: "Die Einleitung stellt Personen, Ort und Zeit vor." },
        { frage: "Wie nennt man den spannendsten Punkt einer Geschichte?", typ: "mc", optionen: ["Höhepunkt", "Einleitung", "Schluss", "Reim"], loesung: "Höhepunkt", erklaerung: "Der Höhepunkt ist der spannendste Moment im Spannungsbogen." },
        { frage: "Welches Verb steht im Präteritum?", typ: "mc", optionen: ["ging", "geht", "wird gehen", "geh"], loesung: "ging", erklaerung: "'ging' ist die Präteritumform von 'gehen'." },
        { frage: "Wie beginnt ein typischer Spannungsbogen?", typ: "mc", optionen: ["Ruhig, und wird dann spannender", "Sofort mit dem Höhepunkt", "Immer traurig", "Ohne Ende"], loesung: "Ruhig, und wird dann spannender", erklaerung: "Ein Spannungsbogen steigt langsam bis zum Höhepunkt an." },
        { frage: "Welcher Satz klingt anschaulicher?", typ: "mc", optionen: ["Sie flüsterte ängstlich.", "Sie sagte etwas.", "Sie machte ein Geräusch.", "Sie redete."], loesung: "Sie flüsterte ängstlich.", erklaerung: "Genaue Verben und Adjektive machen eine Erzählung lebendiger." },
        { frage: "Wie heißt die typische Erzählzeit im Deutschen?", typ: "mc", optionen: ["Präteritum", "Präsens", "Futur I", "Plusquamperfekt"], loesung: "Präteritum", erklaerung: "Erzählungen werden meist im Präteritum geschrieben." },
        { frage: "Was kommt am Schluss einer Erzählung?", typ: "mc", optionen: ["Wie die Geschichte endet", "Nur die Vorstellung der Personen", "Der Höhepunkt", "Gar nichts"], loesung: "Wie die Geschichte endet", erklaerung: "Der Schluss löst die Geschichte auf und zeigt, wie sie endet." },
        { frage: "Warum benutzt man in Erzählungen genaue Adjektive und Verben?", typ: "mc", optionen: ["Damit die Geschichte lebendig und spannend wirkt", "Damit der Text kürzer wird", "Das ist nicht wichtig", "Nur für die Rechtschreibung"], loesung: "Damit die Geschichte lebendig und spannend wirkt", erklaerung: "Genaue Wörter machen eine Erzählung anschaulicher und spannender." }
      ]
    },
    {
      id: "brief-schreiben",
      titel: "Einen Brief schreiben",
      icon: "✉️",
      intro: "Aufbau und Anrede eines Briefs – privat und förmlich.",
      lektion: [
        "✉️ Ein Brief hat einen festen Aufbau: Ort und Datum (meist oben rechts), Anrede (z. B. 'Liebe Oma,'), Haupttext, Grußformel (z. B. 'Viele Grüße') und Unterschrift.",
        "✏️ Nach der Anrede steht ein Komma. Der erste Satz des Haupttextes beginnt kleingeschrieben, wenn er sich direkt an die Anrede anschließt.",
        "🤝 Es gibt private Briefe (persönlich, freundlich, z. B. an Familie oder Freunde) und förmliche Briefe (z. B. an eine Firma oder Behörde, Anrede: 'Sehr geehrte Damen und Herren,').",
        "📋 Ein guter Brief ist übersichtlich gegliedert: Einleitung (worum geht es?), Hauptteil (das Wichtigste), Schluss (Zusammenfassung oder Bitte)."
      ],
      aufgaben: [
        { frage: "Wo stehen Ort und Datum in einem Brief meistens?", typ: "mc", optionen: ["Oben rechts", "Ganz unten", "In der Mitte", "Auf der Rückseite"], loesung: "Oben rechts", erklaerung: "Ort und Datum stehen üblicherweise oben rechts im Brief." },
        { frage: "Wie nennt man den Satz 'Liebe Oma,' am Anfang eines Briefes?", typ: "mc", optionen: ["Anrede", "Grußformel", "Betreff", "Unterschrift"], loesung: "Anrede", erklaerung: "Die Anrede wendet sich direkt an den Empfänger, z. B. 'Liebe Oma,'." },
        { frage: "Welches Satzzeichen steht direkt nach der Anrede?", typ: "mc", optionen: ["Komma", "Punkt", "Ausrufezeichen", "Doppelpunkt"], loesung: "Komma", erklaerung: "Nach der Anrede (z. B. 'Liebe Oma,') steht ein Komma." },
        { frage: "Was steht meistens am Ende eines Briefes, direkt vor der Unterschrift?", typ: "mc", optionen: ["Eine Grußformel", "Die Anrede", "Das Datum", "Der Titel"], loesung: "Eine Grußformel", erklaerung: "Am Ende steht eine Grußformel wie 'Viele Grüße' oder 'Herzliche Grüße'." },
        { frage: "Welche Anrede passt zu einem förmlichen Brief an eine Firma?", typ: "mc", optionen: ["Sehr geehrte Damen und Herren,", "Hallo du,", "Liebe Freunde,", "Hey Team,"], loesung: "Sehr geehrte Damen und Herren,", erklaerung: "Bei förmlichen Briefen an unbekannte Empfänger nutzt man 'Sehr geehrte Damen und Herren,'." },
        { frage: "Welche Anrede passt zu einem privaten Brief an die beste Freundin?", typ: "mc", optionen: ["Liebe Mia,", "Sehr geehrte Frau Mia,", "Betreff: Brief", "Mit freundlichen Grüßen"], loesung: "Liebe Mia,", erklaerung: "Bei privaten Briefen an Freunde nutzt man eine persönliche Anrede wie 'Liebe Mia,'." },
        { frage: "Was gehört in den Hauptteil eines Briefes?", typ: "mc", optionen: ["Das Wichtigste, das man mitteilen möchte", "Nur die Unterschrift", "Nur das Datum", "Gar nichts"], loesung: "Das Wichtigste, das man mitteilen möchte", erklaerung: "Im Hauptteil steht der eigentliche Inhalt des Briefes." },
        { frage: "Ein Brief an eine Behörde (z. B. das Rathaus) sollte eher …", typ: "mc", optionen: ["förmlich geschrieben sein", "sehr locker geschrieben sein", "ohne Anrede auskommen", "nur aus einem Wort bestehen"], loesung: "förmlich geschrieben sein", erklaerung: "Briefe an Behörden oder Firmen schreibt man förmlich." },
        { frage: "Aus wie vielen Hauptteilen besteht ein Brief (Anrede/Haupttext, Grußformel zählen als Rahmen)?", typ: "zahl", loesung: "3", erklaerung: "Ein Brief gliedert sich in Einleitung, Hauptteil und Schluss – wie eine Erzählung." },
        { frage: "Was ist bei einem privaten Brief typisch?", typ: "mc", optionen: ["Ein persönlicher, freundlicher Ton", "Ein sehr förmlicher Ton", "Keine Anrede", "Kein Absender"], loesung: "Ein persönlicher, freundlicher Ton", erklaerung: "Private Briefe sind persönlich und freundlich formuliert." }
      ]
    },
    {
      id: "beschreibung-schreiben",
      titel: "Eine Beschreibung schreiben",
      icon: "🔍",
      intro: "Ein Tier oder einen Gegenstand genau beschreiben.",
      lektion: [
        "🔍 Eine Beschreibung erklärt sachlich und genau, wie etwas aussieht oder funktioniert – meist in einer festen Reihenfolge (z. B. von oben nach unten, von außen nach innen).",
        "🐾 Bei einer Tierbeschreibung nennt man z. B.: Aussehen, Lebensraum, Nahrung und besondere Merkmale.",
        "🕐 Anders als bei einer Erzählung schreibt man eine Beschreibung im Präsens, nicht im Präteritum – weil die Eigenschaften immer gelten.",
        "🎯 Genaue Adjektive und Fachbegriffe machen eine Beschreibung präzise, z. B. 'gestreiftes Fell' statt nur 'schönes Fell'."
      ],
      aufgaben: [
        { frage: "In welcher Zeitform schreibt man eine Beschreibung normalerweise?", typ: "mc", optionen: ["Präsens", "Präteritum", "Perfekt", "Futur I"], loesung: "Präsens", erklaerung: "Beschreibungen nutzen das Präsens, weil die Eigenschaften allgemein gelten." },
        { frage: "Was gehört typischerweise in eine Tierbeschreibung?", typ: "mc", optionen: ["Aussehen, Lebensraum, Nahrung", "Nur der Name des Tieres", "Nur die Lieblingsfarbe des Autors", "Ein Rezept"], loesung: "Aussehen, Lebensraum, Nahrung", erklaerung: "Eine Tierbeschreibung nennt Aussehen, Lebensraum, Nahrung und besondere Merkmale." },
        { frage: "Warum nutzt man in Beschreibungen genaue Adjektive und Fachbegriffe?", typ: "mc", optionen: ["Damit die Beschreibung präzise und anschaulich ist", "Damit der Text kürzer wird", "Weil es sonst verboten ist", "Das spielt keine Rolle"], loesung: "Damit die Beschreibung präzise und anschaulich ist", erklaerung: "Genaue Wörter machen eine Beschreibung klarer und anschaulicher." },
        { frage: "In welcher Reihenfolge beschreibt man einen Gegenstand meistens?", typ: "mc", optionen: ["In einer festen, sinnvollen Reihenfolge (z. B. oben nach unten)", "Ganz durcheinander", "Nur die Farbe nennen", "Rückwärts vom Ende her"], loesung: "In einer festen, sinnvollen Reihenfolge (z. B. oben nach unten)", erklaerung: "Eine gute Beschreibung folgt einer klaren, nachvollziehbaren Ordnung." },
        { frage: "Welcher Satz ist eine gute Tierbeschreibung?", typ: "mc", optionen: ["Der Fuchs hat rotbraunes Fell und einen buschigen Schwanz.", "Der Fuchs war gestern im Wald und rannte weg.", "Ich mag Füchse total gern.", "Füchse sind manchmal irgendwie da."], loesung: "Der Fuchs hat rotbraunes Fell und einen buschigen Schwanz.", erklaerung: "Eine Beschreibung nennt sachliche, genaue Merkmale im Präsens." },
        { frage: "Was unterscheidet eine Beschreibung von einer Erzählung?", typ: "mc", optionen: ["Eine Beschreibung ist sachlich, eine Erzählung erzählt ein Ereignis", "Es gibt keinen Unterschied", "Eine Beschreibung hat immer einen Höhepunkt", "Eine Erzählung nutzt nie das Präteritum"], loesung: "Eine Beschreibung ist sachlich, eine Erzählung erzählt ein Ereignis", erklaerung: "Eine Beschreibung schildert Eigenschaften, eine Erzählung schildert ein Geschehen." },
        { frage: "'Der Igel hat spitze Stacheln auf dem Rücken.' – welche Zeitform wird hier genutzt?", typ: "mc", optionen: ["Präsens", "Präteritum", "Perfekt", "Futur I"], loesung: "Präsens", erklaerung: "'hat' ist die Präsensform – typisch für Beschreibungen." },
        { frage: "Warum beschreibt man z. B. bei einem Gegenstand von außen nach innen?", typ: "mc", optionen: ["Damit der Leser sich alles gut vorstellen kann", "Weil es sonst verboten ist", "Weil das kürzer ist", "Das ist egal"], loesung: "Damit der Leser sich alles gut vorstellen kann", erklaerung: "Eine klare Reihenfolge hilft dem Leser, sich das Beschriebene vorzustellen." },
        { frage: "Welches Wort passt am besten in eine genaue Tierbeschreibung?", typ: "mc", optionen: ["gestreiftes Fell", "schönes Fell", "cooles Fell", "irgendein Fell"], loesung: "gestreiftes Fell", erklaerung: "'gestreiftes Fell' ist ein genaues, sachliches Merkmal." },
        { frage: "Was gehört NICHT in eine sachliche Beschreibung?", typ: "mc", optionen: ["Die eigene Meinung ('Ich finde...')", "Das Aussehen", "Der Lebensraum", "Besondere Merkmale"], loesung: "Die eigene Meinung ('Ich finde...')", erklaerung: "Eine Beschreibung ist sachlich – die eigene Meinung gehört woanders hin." }
      ]
    },
    {
      id: "meinung-begruenden",
      titel: "Eine Meinung begründen",
      icon: "💬",
      intro: "Behauptung, Begründung und Beispiel – überzeugend argumentieren.",
      lektion: [
        "💬 Eine Meinung besteht aus einer klaren Behauptung (These), z. B. 'Hunde sind die besten Haustiere.'",
        "🔗 Wörter wie 'weil', 'denn' und 'deshalb' verbinden eine Meinung mit ihrer Begründung (dem Argument).",
        "📎 Ein gutes Argument wird oft mit einem Beispiel belegt, damit es überzeugender wirkt – z. B. 'weil sie treu sind, so wie mein Hund, der mich jeden Tag an der Tür begrüßt.'",
        "🔚 Ein überzeugender Text nennt am Ende oft noch einmal kurz die eigene Meinung – als Schlusssatz."
      ],
      aufgaben: [
        { frage: "Was ist eine These?", typ: "mc", optionen: ["Eine klare Behauptung oder Meinung", "Ein Satzzeichen", "Ein Gedicht", "Eine Anführung"], loesung: "Eine klare Behauptung oder Meinung", erklaerung: "Die These ist die zentrale Behauptung, die man begründen möchte." },
        { frage: "Welches Wort leitet häufig eine Begründung ein?", typ: "mc", optionen: ["weil", "und", "aber", "oder"], loesung: "weil", erklaerung: "'weil' verbindet eine Aussage mit ihrem Grund." },
        { frage: "Wozu dient ein Beispiel in einem Argument?", typ: "mc", optionen: ["Es macht das Argument überzeugender", "Es macht den Text kürzer", "Es ersetzt die Meinung", "Es ist nicht nötig"], loesung: "Es macht das Argument überzeugender", erklaerung: "Ein konkretes Beispiel stützt und veranschaulicht ein Argument." },
        { frage: "'Hunde sind tolle Haustiere, weil sie treu sind.' – was ist hier die Begründung?", typ: "mc", optionen: ["weil sie treu sind", "Hunde sind tolle Haustiere", "Haustiere", "sind"], loesung: "weil sie treu sind", erklaerung: "Der Teil nach 'weil' erklärt, warum die Meinung gilt." },
        { frage: "Was steht meistens am Ende eines überzeugenden Textes?", typ: "mc", optionen: ["Noch einmal kurz die eigene Meinung", "Eine neue, andere Meinung", "Gar nichts", "Nur ein Satzzeichen"], loesung: "Noch einmal kurz die eigene Meinung", erklaerung: "Ein Schlusssatz fasst die eigene Meinung noch einmal zusammen." },
        { frage: "Welches Wort passt NICHT zu einer Begründung?", typ: "mc", optionen: ["gestern", "weil", "denn", "deshalb"], loesung: "gestern", erklaerung: "'gestern' ist eine Zeitangabe, keine Begründung – 'weil', 'denn' und 'deshalb' leiten Begründungen ein." },
        { frage: "Was braucht eine gute Meinung mindestens?", typ: "mc", optionen: ["Eine These und mindestens einen Grund", "Nur ein Ausrufezeichen", "Nur ein Beispiel ohne These", "Gar nichts weiter"], loesung: "Eine These und mindestens einen Grund", erklaerung: "Ohne Begründung bleibt eine Meinung nur eine unbelegte Behauptung." },
        { frage: "'Ich finde Lesen wichtig, denn man lernt viele neue Wörter.' – was ist hier die These?", typ: "mc", optionen: ["Ich finde Lesen wichtig", "man lernt viele neue Wörter", "denn", "neue Wörter"], loesung: "Ich finde Lesen wichtig", erklaerung: "'Ich finde Lesen wichtig' ist die Behauptung, der Rest ist die Begründung." },
        { frage: "Warum sollte man ein Argument mit einem Beispiel belegen?", typ: "mc", optionen: ["Damit es konkreter und überzeugender wird", "Damit der Text länger wirkt", "Weil es sonst verboten ist", "Das ist nicht wichtig"], loesung: "Damit es konkreter und überzeugender wird", erklaerung: "Ein Beispiel macht ein abstraktes Argument greifbar." },
        { frage: "Welcher Satz ist eine begründete Meinung (keine bloße Behauptung)?", typ: "mc", optionen: ["Katzen sind besser als Hunde, weil sie selbstständiger sind.", "Katzen sind besser als Hunde.", "Ich mag Katzen.", "Katzen. Hunde. Tiere."], loesung: "Katzen sind besser als Hunde, weil sie selbstständiger sind.", erklaerung: "Nur dieser Satz enthält eine These UND eine Begründung." }
      ]
    }
  ]
};
