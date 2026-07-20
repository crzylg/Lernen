// Zusatz-Inhalte nur für die Spiele-Arena (Sortierschlacht, Erinnerungs-Duell,
// Lückenzauber, Logik-Bonus). Quiz-Duell & Blitz-Runde nutzen direkt die
// echten Aufgaben aus window.LERNDATA (mathe/deutsch/englisch/erdkunde/
// biologie/lesen) — hier stehen nur die Inhalte, die es dort noch nicht gibt.
window.SPIELE_EXTRA = {
  dragdrop: {
    mathe: [
      { prompt: "Ordne die Brüche aufsteigend:", items: ["1/8", "1/4", "1/2", "3/4"] },
      { prompt: "Ordne die Dezimalzahlen aufsteigend:", items: ["0,2", "0,45", "0,5", "1,1"] },
      { prompt: "Ordne die Zahlen aufsteigend:", items: ["-5", "-2", "0", "3"] },
      { prompt: "Ordne absteigend, größte zuerst:", items: ["90", "75", "60", "40"] },
      { prompt: "Ordne die Rechenschritte für 23 + 48 richtig:", items: ["Erst Einer: 3 + 8 = 11, 1 merken", "Dann Zehner: 2 + 4 + 1 = 7", "Ergebnis: 71"] },
      { prompt: "Ordne die Vielfachen von 6 aufsteigend:", items: ["12", "18", "24", "30", "36"] },
      { prompt: "Ordne aufsteigend nach Wert:", items: ["1/2", "0,6", "3/4", "1"] },
    ],
    logik: [
      { prompt: "Ordne die Zahlenfolge richtig (verdoppeln):", items: ["2", "4", "8", "16", "32"] },
      { prompt: "Ordne die Wörter alphabetisch:", items: ["Apfel", "Baum", "Katze", "Mond"] },
      { prompt: "Ordne die Schritte zum Anziehen richtig:", items: ["Socken anziehen", "Schuhe anziehen", "Jacke anziehen", "Haus verlassen"] },
      { prompt: "Ordne die Tiere nach Größe (klein → groß):", items: ["Ameise", "Katze", "Pferd", "Elefant"] },
      { prompt: "Ordne die Wochentage richtig:", items: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"] },
    ],
  },

  memory: {
    deutsch: [
      ["Nomen", "Tisch"], ["Verb", "laufen"], ["Adjektiv", "schön"], ["Adverb", "schnell"],
      ["Konjunktion", "und"], ["Präposition", "auf"], ["Pronomen", "er"], ["Artikel", "die"],
      ["Numerale", "drei"], ["Interjektion", "aha"],
    ],
  },

  fillblank: {
    deutsch: [
      { text: "Die Katze sitzt ___ dem Tisch.", options: ["auf", "unter", "über", "an"], correct: 0 },
      { text: "Er ist ___ als sein Bruder.", options: ["groß", "größer", "am größten", "großer"], correct: 1 },
      { text: "Wir ___ gestern ins Kino gegangen.", options: ["sind", "haben", "waren", "hat"], correct: 0 },
      { text: "___ Auto ist neu.", options: ["Der", "Die", "Das", "Den"], correct: 2 },
      { text: "Sie kauft zwei ___.", options: ["Apfel", "Äpfel", "Äpfeln", "Apfeln"], correct: 1 },
      { text: "Wenn es regnet, ___ ich einen Regenschirm.", options: ["nehme", "nimmt", "nahm", "genommen"], correct: 0 },
      { text: "Das ist das Haus, ___ mir gehört.", options: ["das", "der", "die", "dem"], correct: 0 },
      { text: "Ich freue mich ___ die Ferien.", options: ["auf", "für", "über", "an"], correct: 0 },
      { text: "Er läuft schneller ___ ich.", options: ["als", "wie", "dann", "so"], correct: 0 },
      { text: "Die Kinder spielen ___ Garten.", options: ["im", "in der", "an dem", "unter"], correct: 0 },
      { text: "Meine Mutter ___ jeden Tag zur Arbeit.", options: ["fährt", "fahrt", "fahren", "gefahren"], correct: 0 },
      { text: "___ du mir bitte helfen?", options: ["Kannst", "Kann", "Können", "Könnt"], correct: 0 },
    ],
  },

  // Logik ist kein eigenes Schulfach in dieser App — eigener Bonus-Bereich,
  // deshalb im selben Aufgaben-Format wie window.LERNDATA (mc), aber separat.
  logikQuiz: [
    { typ: "mc", frage: "Was kommt als Nächstes? 2, 4, 6, 8, ?", optionen: ["9", "10", "12", "14"], loesung: "10", erklaerung: "Die Folge zählt immer +2 weiter: 8 + 2 = 10." },
    { typ: "mc", frage: "Was kommt als Nächstes? 1, 4, 9, 16, ?", optionen: ["20", "24", "25", "36"], loesung: "25", erklaerung: "Das sind Quadratzahlen: 1×1, 2×2, 3×3, 4×4, 5×5 = 25." },
    { typ: "mc", frage: "Welches Wort passt nicht in die Reihe?", optionen: ["Apfel", "Birne", "Banane", "Tisch"], loesung: "Tisch", erklaerung: "Apfel, Birne und Banane sind Obst — Tisch ist ein Möbelstück." },
    { typ: "mc", frage: "Was kommt als Nächstes? 3, 6, 12, 24, ?", optionen: ["30", "36", "48", "60"], loesung: "48", erklaerung: "Jede Zahl wird verdoppelt: 24 × 2 = 48." },
    { typ: "mc", frage: "Alle Katzen sind Tiere. Mimi ist eine Katze. Also ist Mimi ein …?", optionen: ["Hund", "Tier", "Pflanze", "Stein"], loesung: "Tier", erklaerung: "Wenn alle Katzen Tiere sind und Mimi eine Katze ist, muss Mimi auch ein Tier sein." },
    { typ: "mc", frage: "Wie geht die Buchstabenreihe weiter? A, C, E, G, ?", optionen: ["H", "I", "J", "F"], loesung: "I", erklaerung: "Es wird immer ein Buchstabe übersprungen: A-C-E-G-I." },
    { typ: "mc", frage: "Was kommt als Nächstes? 100, 90, 80, 70, ?", optionen: ["50", "60", "65", "75"], loesung: "60", erklaerung: "Die Folge zählt immer -10 weiter: 70 - 10 = 60." },
    { typ: "mc", frage: "Welche Form passt nicht in die Reihe?", optionen: ["Kreis", "Quadrat", "Dreieck", "Apfel"], loesung: "Apfel", erklaerung: "Kreis, Quadrat und Dreieck sind geometrische Formen — ein Apfel nicht." },
    { typ: "mc", frage: "Wie viele Ecken hat ein Sechseck?", optionen: ["4", "5", "6", "7"], loesung: "6", erklaerung: "Ein Sechseck (Hexagon) hat immer 6 Ecken und 6 Seiten." },
    { typ: "mc", frage: "Was kommt als Nächstes? 5, 10, 20, 40, ?", optionen: ["45", "60", "70", "80"], loesung: "80", erklaerung: "Jede Zahl wird verdoppelt: 40 × 2 = 80." },
  ],
};
