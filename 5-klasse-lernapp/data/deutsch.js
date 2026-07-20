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
      aufgaben: [
        { frage: "Welche Wortart ist 'Hund'?", typ: "mc", optionen: ["Nomen", "Verb", "Adjektiv", "Artikel"], loesung: "Nomen", erklaerung: "'Hund' ist ein Nomen (Namenwort) – man kann einen Artikel davorsetzen: der Hund." },
        { frage: "Welche Wortart ist 'laufen'?", typ: "mc", optionen: ["Nomen", "Verb", "Adjektiv", "Artikel"], loesung: "Verb", erklaerung: "'laufen' ist ein Verb (Tuwort) – es beschreibt eine Handlung." },
        { frage: "Welche Wortart ist 'schnell'?", typ: "mc", optionen: ["Nomen", "Verb", "Adjektiv", "Artikel"], loesung: "Adjektiv", erklaerung: "'schnell' ist ein Adjektiv (Wiewort) – es beschreibt, wie etwas ist." },
        { frage: "Nomen schreibt man immer …", typ: "mc", optionen: ["groß", "klein", "mit Bindestrich", "kursiv"], loesung: "groß", erklaerung: "Nomen werden im Deutschen immer großgeschrieben." },
        { frage: "Welches Wort ist ein Verb?", typ: "mc", optionen: ["springen", "Baum", "grün", "und"], loesung: "springen", erklaerung: "'springen' beschreibt eine Handlung, also ist es ein Verb." },
        { frage: "Welches Wort ist ein Nomen?", typ: "mc", optionen: ["Schule", "lesen", "bunt", "leise"], loesung: "Schule", erklaerung: "'Schule' ist ein Namenwort, also ein Nomen." },
        { frage: "Welches Wort ist ein Adjektiv?", typ: "mc", optionen: ["fröhlich", "Katze", "singen", "Tisch"], loesung: "fröhlich", erklaerung: "'fröhlich' beschreibt eine Eigenschaft, also ist es ein Adjektiv." },
        { frage: "Wie fragt man nach einem Nomen?", typ: "mc", optionen: ["Wer oder was?", "Was tut er?", "Wie ist es?", "Wo ist es?"], loesung: "Wer oder was?", erklaerung: "Mit 'Wer oder was?' findet man das Nomen im Satz." }
      ]
    },
    {
      id: "gross-klein",
      titel: "Groß- & Kleinschreibung",
      icon: "🔠",
      intro: "Wann schreibt man ein Wort groß, wann klein?",
      aufgaben: [
        { frage: "Welches Wort ist richtig geschrieben?", typ: "mc", optionen: ["Der Baum ist Grün.", "der baum ist grün.", "Der Baum ist grün.", "der Baum Ist grün."], loesung: "Der Baum ist grün.", erklaerung: "Satzanfang groß, Nomen ('Baum') groß, Adjektiv ('grün') klein." },
        { frage: "Welches Wort wird großgeschrieben?", typ: "mc", optionen: ["Tisch", "laufen", "schön", "und"], loesung: "Tisch", erklaerung: "'Tisch' ist ein Nomen und wird deshalb großgeschrieben." },
        { frage: "Am Satzanfang schreibt man immer …", typ: "mc", optionen: ["groß", "klein", "kursiv", "mit Ausrufezeichen"], loesung: "groß", erklaerung: "Das erste Wort eines Satzes wird immer großgeschrieben." },
        { frage: "Welcher Satz ist richtig?", typ: "mc", optionen: ["Ich gehe In die Schule.", "ich gehe in die schule.", "Ich gehe in die Schule.", "Ich Gehe in die Schule."], loesung: "Ich gehe in die Schule.", erklaerung: "Satzanfang 'Ich' groß, 'Schule' als Nomen groß, der Rest klein." },
        { frage: "Wird 'das Fahrrad' richtig geschrieben, wenn 'Fahrrad' großgeschrieben ist?", typ: "mc", optionen: ["Ja, weil es ein Nomen ist", "Nein, es ist ein Verb", "Nein, es ist ein Adjektiv", "Das spielt keine Rolle"], loesung: "Ja, weil es ein Nomen ist", erklaerung: "'Fahrrad' ist ein Nomen und wird deshalb großgeschrieben." },
        { frage: "Welches Wort schreibt man klein?", typ: "mc", optionen: ["schnell", "Auto", "Schule", "Kind"], loesung: "schnell", erklaerung: "'schnell' ist ein Adjektiv und wird kleingeschrieben (außer am Satzanfang)." },
        { frage: "Wie beginnt jeder neue Satz?", typ: "mc", optionen: ["mit Großbuchstabe", "mit Kleinbuchstabe", "mit Zahl", "mit Komma"], loesung: "mit Großbuchstabe", erklaerung: "Jeder Satz beginnt mit einem Großbuchstaben." },
        { frage: "Welcher Satz ist richtig?", typ: "mc", optionen: ["Die Sonne scheint Hell.", "die sonne scheint hell.", "Die Sonne scheint hell.", "Die sonne Scheint hell."], loesung: "Die Sonne scheint hell.", erklaerung: "'Sonne' ist ein Nomen (groß), 'hell' ein Adjektiv (klein), Satzanfang groß." }
      ]
    },
    {
      id: "satzglieder",
      titel: "Satzglieder",
      icon: "🧩",
      intro: "Subjekt, Prädikat und Objekt in einem Satz finden.",
      aufgaben: [
        { frage: "Wie fragt man nach dem Subjekt?", typ: "mc", optionen: ["Wer oder was?", "Was tut jemand?", "Wem?", "Wen oder was?"], loesung: "Wer oder was?", erklaerung: "Das Subjekt ist der Satzgegenstand: 'Wer oder was?'" },
        { frage: "Wie fragt man nach dem Prädikat?", typ: "mc", optionen: ["Was tut das Subjekt?", "Wer oder was?", "Wo?", "Wann?"], loesung: "Was tut das Subjekt?", erklaerung: "Das Prädikat ist die Satzaussage (das Verb): 'Was tut das Subjekt?'" },
        { frage: "Im Satz 'Der Hund bellt laut.' – was ist das Subjekt?", typ: "mc", optionen: ["Der Hund", "bellt", "laut", "kein Subjekt vorhanden"], loesung: "Der Hund", erklaerung: "'Der Hund' beantwortet die Frage 'Wer oder was bellt?'" },
        { frage: "Im Satz 'Der Hund bellt laut.' – was ist das Prädikat?", typ: "mc", optionen: ["Der Hund", "bellt", "laut", "kein Prädikat vorhanden"], loesung: "bellt", erklaerung: "'bellt' ist das Verb und damit das Prädikat." },
        { frage: "Im Satz 'Anna liest ein Buch.' – was ist das Objekt?", typ: "mc", optionen: ["Anna", "liest", "ein Buch", "kein Objekt vorhanden"], loesung: "ein Buch", erklaerung: "'ein Buch' beantwortet die Frage 'Wen oder was liest Anna?' – das ist das Objekt." },
        { frage: "Wie fragt man nach dem Objekt im Akkusativ?", typ: "mc", optionen: ["Wen oder was?", "Wer oder was?", "Wessen?", "Wo?"], loesung: "Wen oder was?", erklaerung: "Das Akkusativobjekt findet man mit der Frage 'Wen oder was?'" },
        { frage: "Im Satz 'Tim spielt Fußball.' – was ist das Subjekt?", typ: "mc", optionen: ["Tim", "spielt", "Fußball", "kein Subjekt vorhanden"], loesung: "Tim", erklaerung: "'Tim' beantwortet 'Wer oder was spielt?'" },
        { frage: "Ein einfacher Satz braucht mindestens …", typ: "mc", optionen: ["Subjekt und Prädikat", "nur ein Objekt", "drei Adjektive", "ein Fragezeichen"], loesung: "Subjekt und Prädikat", erklaerung: "Jeder vollständige Satz braucht mindestens ein Subjekt und ein Prädikat." }
      ]
    },
    {
      id: "zeichensetzung",
      titel: "Zeichensetzung",
      icon: "❗",
      intro: "Satzzeichen und wörtliche Rede richtig setzen.",
      aufgaben: [
        { frage: "Welches Satzzeichen steht am Ende einer Frage?", typ: "mc", optionen: ["Fragezeichen (?)", "Punkt (.)", "Ausrufezeichen (!)", "Komma (,)"], loesung: "Fragezeichen (?)", erklaerung: "Eine Frage endet mit einem Fragezeichen." },
        { frage: "Welches Satzzeichen steht am Ende eines Befehls?", typ: "mc", optionen: ["Fragezeichen (?)", "Punkt (.)", "Ausrufezeichen (!)", "Komma (,)"], loesung: "Ausrufezeichen (!)", erklaerung: "Ein Befehl oder Ausruf endet oft mit einem Ausrufezeichen." },
        { frage: "Wörtliche Rede steht immer in …", typ: "mc", optionen: ["Anführungszeichen", "Klammern", "Fragezeichen", "Sternchen"], loesung: "Anführungszeichen", erklaerung: "Wörtliche Rede wird in Anführungszeichen (' ') gesetzt." },
        { frage: "Welcher Satz zeigt wörtliche Rede richtig?", typ: "mc", optionen: ['„Ich komme gleich", sagt Lisa.', "Ich komme gleich, sagt Lisa.", "'Ich komme gleich sagt Lisa.'", "„Ich komme gleich sagt Lisa"], loesung: '„Ich komme gleich", sagt Lisa.', erklaerung: "Die wörtliche Rede steht in Anführungszeichen, danach folgt ein Komma vor dem Begleitsatz." },
        { frage: "Vor einem Begleitsatz nach wörtlicher Rede steht meist ein …", typ: "mc", optionen: ["Komma", "Punkt", "Doppelpunkt", "Semikolon"], loesung: "Komma", erklaerung: "Beispiel: „Ich komme“, sagt er. – vor 'sagt er' steht ein Komma." },
        { frage: "Wie viele Satzzeichen braucht die wörtliche Rede mindestens (Anführungszeichen)?", typ: "zahl", loesung: "2", erklaerung: "Anführungszeichen werden immer paarweise gesetzt: am Anfang und am Ende." },
        { frage: "Welches Satzzeichen trennt Aufzählungen in einem Satz?", typ: "mc", optionen: ["Komma", "Punkt", "Fragezeichen", "Ausrufezeichen"], loesung: "Komma", erklaerung: "Bei Aufzählungen setzt man zwischen den einzelnen Teilen ein Komma." },
        { frage: "Ein Aussagesatz endet normalerweise mit einem …", typ: "mc", optionen: ["Punkt", "Fragezeichen", "Ausrufezeichen", "Komma"], loesung: "Punkt", erklaerung: "Ein normaler Aussagesatz endet mit einem Punkt." }
      ]
    },
    {
      id: "textverstaendnis",
      titel: "Textverständnis",
      icon: "📚",
      intro: "Lies den kurzen Text genau und beantworte die Fragen.",
      text: "Am Samstag fuhr Familie Meyer mit dem Fahrrad zum Wald. Die Sonne schien, und die Vögel sangen laut. Lina, die Tochter, entdeckte einen kleinen Igel unter einem Busch. Vorsichtig beobachtete sie das Tier, ohne es zu stören. Ihr Bruder Paul machte ein Foto mit dem Handy seiner Mutter. Nach einer Stunde im Wald packten sie ihre Rucksäcke und fuhren zufrieden nach Hause.",
      aufgaben: [
        { frage: "Womit fuhr die Familie zum Wald?", typ: "mc", optionen: ["Mit dem Fahrrad", "Mit dem Auto", "Mit dem Bus", "Zu Fuß"], loesung: "Mit dem Fahrrad", erklaerung: "Im Text steht: 'fuhr Familie Meyer mit dem Fahrrad zum Wald'." },
        { frage: "Wer entdeckte den Igel?", typ: "mc", optionen: ["Lina", "Paul", "Die Mutter", "Der Vater"], loesung: "Lina", erklaerung: "Im Text steht: 'Lina, die Tochter, entdeckte einen kleinen Igel'." },
        { frage: "Wie hieß Linas Bruder?", typ: "mc", optionen: ["Paul", "Tim", "Max", "Jan"], loesung: "Paul", erklaerung: "Im Text steht: 'Ihr Bruder Paul machte ein Foto'." },
        { frage: "Womit machte Paul ein Foto?", typ: "mc", optionen: ["Mit dem Handy seiner Mutter", "Mit einer Kamera", "Mit einem Tablet", "Er machte kein Foto"], loesung: "Mit dem Handy seiner Mutter", erklaerung: "Im Text steht: 'machte ein Foto mit dem Handy seiner Mutter'." },
        { frage: "Wie lange waren sie im Wald?", typ: "mc", optionen: ["Eine Stunde", "Zwei Stunden", "Den ganzen Tag", "Zehn Minuten"], loesung: "Eine Stunde", erklaerung: "Im Text steht: 'Nach einer Stunde im Wald packten sie ihre Rucksäcke'." },
        { frage: "Wie war das Wetter?", typ: "mc", optionen: ["Die Sonne schien", "Es regnete", "Es schneite", "Es war neblig"], loesung: "Die Sonne schien", erklaerung: "Im Text steht: 'Die Sonne schien, und die Vögel sangen laut'." },
        { frage: "Störte Lina den Igel?", typ: "mc", optionen: ["Nein, sie beobachtete ihn vorsichtig", "Ja, sie fing ihn", "Ja, sie erschreckte ihn", "Sie fand keinen Igel"], loesung: "Nein, sie beobachtete ihn vorsichtig", erklaerung: "Im Text steht: 'beobachtete sie das Tier, ohne es zu stören'." },
        { frage: "Wie fühlten sie sich auf dem Nachhauseweg?", typ: "mc", optionen: ["Zufrieden", "Traurig", "Wütend", "Gelangweilt"], loesung: "Zufrieden", erklaerung: "Im Text steht: 'fuhren zufrieden nach Hause'." }
      ]
    }
  ]
};
