// Deutsch – Klasse 5 (Gymnasium Niedersachsen)
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
      titel: "Satzglieder",
      icon: "🧩",
      intro: "Subjekt, Prädikat und Objekt in einem Satz finden.",
      lektion: [
        "🧩 Jeder vollständige Satz braucht ein Subjekt (Wer oder was?) und ein Prädikat (Was tut das Subjekt?).",
        "🏃 Das Prädikat ist das Verb im Satz.",
        "🎯 Ein Objekt ergänzt den Satz. Es antwortet z. B. auf 'Wen oder was?' (Akkusativobjekt) oder 'Wem?' (Dativobjekt)."
      ],
      aufgaben: [
        { frage: "Wie fragt man nach dem Subjekt?", typ: "mc", optionen: ["Wer oder was?", "Was tut jemand?", "Wem?", "Wen oder was?"], loesung: "Wer oder was?", erklaerung: "Das Subjekt ist der Satzgegenstand: 'Wer oder was?'" },
        { frage: "Wie fragt man nach dem Prädikat?", typ: "mc", optionen: ["Was tut das Subjekt?", "Wer oder was?", "Wo?", "Wann?"], loesung: "Was tut das Subjekt?", erklaerung: "Das Prädikat ist die Satzaussage (das Verb): 'Was tut das Subjekt?'" },
        { frage: "Im Satz 'Der Hund bellt laut.' – was ist das Subjekt?", typ: "mc", optionen: ["Der Hund", "bellt", "laut", "kein Subjekt vorhanden"], loesung: "Der Hund", erklaerung: "'Der Hund' beantwortet die Frage 'Wer oder was bellt?'" },
        { frage: "Im Satz 'Der Hund bellt laut.' – was ist das Prädikat?", typ: "mc", optionen: ["Der Hund", "bellt", "laut", "kein Prädikat vorhanden"], loesung: "bellt", erklaerung: "'bellt' ist das Verb und damit das Prädikat." },
        { frage: "Im Satz 'Anna liest ein Buch.' – was ist das Objekt?", typ: "mc", optionen: ["Anna", "liest", "ein Buch", "kein Objekt vorhanden"], loesung: "ein Buch", erklaerung: "'ein Buch' beantwortet die Frage 'Wen oder was liest Anna?' – das ist das Objekt." },
        { frage: "Wie fragt man nach dem Objekt im Akkusativ?", typ: "mc", optionen: ["Wen oder was?", "Wer oder was?", "Wessen?", "Wo?"], loesung: "Wen oder was?", erklaerung: "Das Akkusativobjekt findet man mit der Frage 'Wen oder was?'" },
        { frage: "Im Satz 'Tim spielt Fußball.' – was ist das Subjekt?", typ: "mc", optionen: ["Tim", "spielt", "Fußball", "kein Subjekt vorhanden"], loesung: "Tim", erklaerung: "'Tim' beantwortet 'Wer oder was spielt?'" },
        { frage: "Ein einfacher Satz braucht mindestens …", typ: "mc", optionen: ["Subjekt und Prädikat", "nur ein Objekt", "drei Adjektive", "ein Fragezeichen"], loesung: "Subjekt und Prädikat", erklaerung: "Jeder vollständige Satz braucht mindestens ein Subjekt und ein Prädikat." },
        { frage: "Im Satz 'Die Tänzerin übt die Schritte.' – was ist das Subjekt?", typ: "mc", optionen: ["Die Tänzerin", "übt", "die Schritte", "kein Subjekt vorhanden"], loesung: "Die Tänzerin", erklaerung: "'Die Tänzerin' beantwortet 'Wer oder was übt?'" },
        { frage: "Im Satz 'Die Tänzerin übt die Schritte.' – was ist das Objekt?", typ: "mc", optionen: ["die Schritte", "Die Tänzerin", "übt", "kein Objekt vorhanden"], loesung: "die Schritte", erklaerung: "'die Schritte' beantwortet 'Wen oder was übt die Tänzerin?'" },
        { frage: "Im Satz 'Der Lehrer gibt dem Schüler ein Buch.' – wie fragt man nach 'dem Schüler'?", typ: "mc", optionen: ["Wem?", "Wen oder was?", "Wer oder was?", "Wessen?"], loesung: "Wem?", erklaerung: "'dem Schüler' ist ein Dativobjekt – Frage: 'Wem gibt der Lehrer das Buch?'" },
        { frage: "Im Satz 'Die Sonne scheint.' – gibt es hier ein Objekt?", typ: "mc", optionen: ["Nein, nur Subjekt und Prädikat", "Ja, 'scheint' ist das Objekt", "Ja, 'Sonne' ist das Objekt", "Der Satz hat kein Prädikat"], loesung: "Nein, nur Subjekt und Prädikat", erklaerung: "Nicht jeder Satz braucht ein Objekt – 'Die Sonne scheint' hat nur Subjekt und Prädikat." }
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
        "🧠 Manche Antworten stehen wörtlich im Text, andere musst du selbst zusammenreimen."
      ],
      text: "Am Samstag fuhr Familie Meyer mit dem Fahrrad zum Wald. Die Sonne schien, und die Vögel sangen laut. Lina, die Tochter, entdeckte einen kleinen Igel unter einem Busch. Vorsichtig beobachtete sie das Tier, ohne es zu stören. Ihr Bruder Paul machte ein Foto mit dem Handy seiner Mutter. Am Mittag packten sie ihre Brote aus und aßen gemeinsam auf einer Wiese. Danach sammelten die Kinder bunte Blätter für ein Herbstbild. Nach einer Stunde im Wald packten sie ihre Rucksäcke und fuhren zufrieden nach Hause.",
      aufgaben: [
        { frage: "Womit fuhr die Familie zum Wald?", typ: "mc", optionen: ["Mit dem Fahrrad", "Mit dem Auto", "Mit dem Bus", "Zu Fuß"], loesung: "Mit dem Fahrrad", erklaerung: "Im Text steht: 'fuhr Familie Meyer mit dem Fahrrad zum Wald'." },
        { frage: "Wer entdeckte den Igel?", typ: "mc", optionen: ["Lina", "Paul", "Die Mutter", "Der Vater"], loesung: "Lina", erklaerung: "Im Text steht: 'Lina, die Tochter, entdeckte einen kleinen Igel'." },
        { frage: "Wie hieß Linas Bruder?", typ: "mc", optionen: ["Paul", "Tim", "Max", "Jan"], loesung: "Paul", erklaerung: "Im Text steht: 'Ihr Bruder Paul machte ein Foto'." },
        { frage: "Womit machte Paul ein Foto?", typ: "mc", optionen: ["Mit dem Handy seiner Mutter", "Mit einer Kamera", "Mit einem Tablet", "Er machte kein Foto"], loesung: "Mit dem Handy seiner Mutter", erklaerung: "Im Text steht: 'machte ein Foto mit dem Handy seiner Mutter'." },
        { frage: "Wie lange waren sie im Wald?", typ: "mc", optionen: ["Eine Stunde", "Zwei Stunden", "Den ganzen Tag", "Zehn Minuten"], loesung: "Eine Stunde", erklaerung: "Im Text steht: 'Nach einer Stunde im Wald packten sie ihre Rucksäcke'." },
        { frage: "Wie war das Wetter?", typ: "mc", optionen: ["Die Sonne schien", "Es regnete", "Es schneite", "Es war neblig"], loesung: "Die Sonne schien", erklaerung: "Im Text steht: 'Die Sonne schien, und die Vögel sangen laut'." },
        { frage: "Störte Lina den Igel?", typ: "mc", optionen: ["Nein, sie beobachtete ihn vorsichtig", "Ja, sie fing ihn", "Ja, sie erschreckte ihn", "Sie fand keinen Igel"], loesung: "Nein, sie beobachtete ihn vorsichtig", erklaerung: "Im Text steht: 'beobachtete sie das Tier, ohne es zu stören'." },
        { frage: "Wie fühlten sie sich auf dem Nachhauseweg?", typ: "mc", optionen: ["Zufrieden", "Traurig", "Wütend", "Gelangweilt"], loesung: "Zufrieden", erklaerung: "Im Text steht: 'fuhren zufrieden nach Hause'." },
        { frage: "Was aßen sie zu Mittag?", typ: "mc", optionen: ["Brote", "Pizza", "Nudeln", "Nichts, sie hatten Pause"], loesung: "Brote", erklaerung: "Im Text steht: 'packten sie ihre Brote aus und aßen gemeinsam'." },
        { frage: "Wo aßen sie zu Mittag?", typ: "mc", optionen: ["Auf einer Wiese", "Zu Hause", "Im Auto", "In einem Restaurant"], loesung: "Auf einer Wiese", erklaerung: "Im Text steht: 'aßen gemeinsam auf einer Wiese'." },
        { frage: "Was sammelten die Kinder?", typ: "mc", optionen: ["Bunte Blätter", "Steine", "Pilze", "Blumen"], loesung: "Bunte Blätter", erklaerung: "Im Text steht: 'sammelten die Kinder bunte Blätter für ein Herbstbild'." },
        { frage: "Wofür wollten sie die Blätter benutzen?", typ: "mc", optionen: ["Für ein Herbstbild", "Zum Essen", "Als Geschenk", "Für die Schule"], loesung: "Für ein Herbstbild", erklaerung: "Im Text steht: 'sammelten die Kinder bunte Blätter für ein Herbstbild'." }
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
    }
  ]
};
