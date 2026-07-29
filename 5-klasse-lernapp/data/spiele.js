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
    // Logik ist nach Schwierigkeit gestaffelt (leicht/mittel/schwer) statt
    // einer einzigen flachen Liste — siehe Fortschrittsbericht-Recherche:
    // Transfer-Effekt von Logikspielen ist am größten bei altersgerechter,
    // gestaffelter Schwierigkeit statt gleichbleibendem Niveau.
    logik: {
      leicht: [
        { prompt: "Ordne die Wochentage richtig:", items: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"] },
        { prompt: "Ordne die Schritte zum Anziehen richtig:", items: ["Socken anziehen", "Schuhe anziehen", "Jacke anziehen", "Haus verlassen"] },
        { prompt: "Ordne die Uhrzeiten vom frühen zum späten Morgen:", items: ["6 Uhr", "7 Uhr", "8 Uhr", "9 Uhr"] },
      ],
      mittel: [
        { prompt: "Ordne die Wörter alphabetisch:", items: ["Apfel", "Baum", "Katze", "Mond"] },
        { prompt: "Ordne die Tiere nach Größe (klein → groß):", items: ["Ameise", "Katze", "Pferd", "Elefant"] },
        { prompt: "Ordne die Monate richtig:", items: ["März", "April", "Mai", "Juni"] },
      ],
      schwer: [
        { prompt: "Ordne die Zahlenfolge richtig (verdoppeln):", items: ["2", "4", "8", "16", "32"] },
        { prompt: "Ordne aufsteigend nach Wert:", items: ["1/4", "0,5", "3/4", "1"] },
        { prompt: "Ordne die Zahlenfolge richtig (jede Zahl ist die Summe der zwei davor):", items: ["1", "1", "2", "3", "5", "8"] },
      ],
    },
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
  // Nach Schwierigkeit gestaffelt (leicht = ein Schritt, mittel = zwei
  // Schritte/einfache Schlussfolgerung, schwer = Analogien/mehrstufig).
  logikQuiz: {
    leicht: [
      { typ: "mc", frage: "Was kommt als Nächstes? 2, 4, 6, 8, ?", optionen: ["9", "10", "12", "14"], loesung: "10", erklaerung: "Die Folge zählt immer +2 weiter: 8 + 2 = 10." },
      { typ: "mc", frage: "Was kommt als Nächstes? 10, 20, 30, 40, ?", optionen: ["41", "45", "50", "60"], loesung: "50", erklaerung: "Die Folge zählt immer +10 weiter: 40 + 10 = 50." },
      { typ: "mc", frage: "Welches Wort passt nicht in die Reihe?", optionen: ["Apfel", "Birne", "Banane", "Tisch"], loesung: "Tisch", erklaerung: "Apfel, Birne und Banane sind Obst — Tisch ist ein Möbelstück." },
      { typ: "mc", frage: "Was kommt als Nächstes? 5, 10, 15, 20, ?", optionen: ["22", "24", "25", "30"], loesung: "25", erklaerung: "Die Folge zählt immer +5 weiter: 20 + 5 = 25." },
      { typ: "mc", frage: "Welche Form passt nicht in die Reihe?", optionen: ["Kreis", "Quadrat", "Dreieck", "Apfel"], loesung: "Apfel", erklaerung: "Kreis, Quadrat und Dreieck sind geometrische Formen — ein Apfel nicht." },
      { typ: "mc", frage: "Was kommt als Nächstes? 100, 90, 80, 70, ?", optionen: ["50", "60", "65", "75"], loesung: "60", erklaerung: "Die Folge zählt immer -10 weiter: 70 - 10 = 60." },
      { typ: "mc", frage: "Wie geht das Muster weiter? Rot, Blau, Rot, Blau, ?", optionen: ["Rot", "Blau", "Grün", "Gelb"], loesung: "Rot", erklaerung: "Das Muster wechselt immer zwischen Rot und Blau — nach Blau kommt wieder Rot." },
      { typ: "mc", frage: "Was kommt als Nächstes? 1, 2, 3, 4, ?", optionen: ["3", "4", "5", "6"], loesung: "5", erklaerung: "Die Folge zählt einfach +1 weiter: 4 + 1 = 5." },
    ],
    mittel: [
      { typ: "mc", frage: "Was kommt als Nächstes? 1, 4, 9, 16, ?", optionen: ["20", "24", "25", "36"], loesung: "25", erklaerung: "Das sind Quadratzahlen: 1×1, 2×2, 3×3, 4×4, 5×5 = 25." },
      { typ: "mc", frage: "Was kommt als Nächstes? 3, 6, 12, 24, ?", optionen: ["30", "36", "48", "60"], loesung: "48", erklaerung: "Jede Zahl wird verdoppelt: 24 × 2 = 48." },
      { typ: "mc", frage: "Wie geht die Buchstabenreihe weiter? A, C, E, G, ?", optionen: ["H", "I", "J", "F"], loesung: "I", erklaerung: "Es wird immer ein Buchstabe übersprungen: A-C-E-G-I." },
      { typ: "mc", frage: "Was kommt als Nächstes? 5, 10, 20, 40, ?", optionen: ["45", "60", "70", "80"], loesung: "80", erklaerung: "Jede Zahl wird verdoppelt: 40 × 2 = 80." },
      { typ: "mc", frage: "Alle Katzen sind Tiere. Mimi ist eine Katze. Also ist Mimi ein …?", optionen: ["Hund", "Tier", "Pflanze", "Stein"], loesung: "Tier", erklaerung: "Wenn alle Katzen Tiere sind und Mimi eine Katze ist, muss Mimi auch ein Tier sein." },
      { typ: "mc", frage: "Was kommt als Nächstes? 2, 3, 5, 8, 13, ?", optionen: ["18", "20", "21", "24"], loesung: "21", erklaerung: "Jede Zahl ist die Summe der zwei davor: 8 + 13 = 21." },
      { typ: "mc", frage: "Heute ist Montag. Welcher Tag ist übermorgen?", optionen: ["Dienstag", "Mittwoch", "Donnerstag", "Freitag"], loesung: "Mittwoch", erklaerung: "Übermorgen bedeutet zwei Tage später: Montag + 2 Tage = Mittwoch." },
      { typ: "mc", frage: "Was kommt als Nächstes? 80, 40, 20, ?", optionen: ["0", "5", "10", "15"], loesung: "10", erklaerung: "Jede Zahl wird halbiert: 20 : 2 = 10." },
    ],
    schwer: [
      { typ: "mc", frage: "Hand ist zu Finger wie Fuß ist zu …?", optionen: ["Arm", "Zehen", "Knie", "Schuh"], loesung: "Zehen", erklaerung: "So wie die Hand Finger hat, hat der Fuß Zehen." },
      { typ: "mc", frage: "Alle Vögel können fliegen. Ein Pinguin ist ein Vogel. Stimmt die Folgerung „Pinguine können fliegen“?", optionen: ["Ja, das stimmt", "Nein, die erste Aussage ist falsch", "Nur im Sommer", "Nur als Küken"], loesung: "Nein, die erste Aussage ist falsch", erklaerung: "Nicht alle Vögel können fliegen (z. B. Pinguine) — die erste Aussage stimmt schon nicht, also ist die Folgerung nicht sicher." },
      { typ: "mc", frage: "Was kommt als Nächstes? 2, 6, 12, 20, 30, ?", optionen: ["36", "40", "42", "44"], loesung: "42", erklaerung: "Die Unterschiede werden immer um 2 größer (4,6,8,10,12): 30 + 12 = 42." },
      { typ: "mc", frage: "A ist größer als B. B ist größer als C. Wer ist am kleinsten?", optionen: ["A", "B", "C", "Das kann man nicht wissen"], loesung: "C", erklaerung: "A > B > C, also ist C am kleinsten." },
      { typ: "mc", frage: "Was kommt als Nächstes? 1, 1, 2, 3, 5, 8, ?", optionen: ["11", "12", "13", "14"], loesung: "13", erklaerung: "Jede Zahl ist die Summe der zwei davor (Fibonacci-Folge): 5 + 8 = 13." },
      { typ: "mc", frage: "Buch ist zu Lesen wie Gabel ist zu …?", optionen: ["Kochen", "Essen", "Schneiden", "Kaufen"], loesung: "Essen", erklaerung: "Ein Buch benutzt man zum Lesen, eine Gabel benutzt man zum Essen." },
      { typ: "mc", frage: "Heute ist weder Montag noch Dienstag. Übermorgen ist Freitag. Welcher Tag ist heute?", optionen: ["Montag", "Dienstag", "Mittwoch", "Donnerstag"], loesung: "Mittwoch", erklaerung: "Übermorgen = heute + 2 Tage = Freitag, also ist heute Mittwoch." },
      { typ: "mc", frage: "Was kommt als Nächstes? 7, 11, 18, 29, ?", optionen: ["40", "45", "47", "50"], loesung: "47", erklaerung: "Jede Zahl ist die Summe der zwei davor: 18 + 29 = 47." },
    ],
  },
};
