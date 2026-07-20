// Mathematik – Klasse 5 (Gymnasium Niedersachsen)
// Aufgaben-Typ "mc" = Multiple Choice (loesung ist der Text der richtigen Option)
// Aufgaben-Typ "zahl" = Antwort eintippen (loesung ist der erwartete Text, Vergleich ohne Leerzeichen)
window.LERNDATA = window.LERNDATA || {};
window.LERNDATA.mathe = {
  id: "mathe",
  name: "Mathematik",
  icon: "🔢",
  farbe: "#3B82F6",
  themen: [
    {
      id: "grundrechenarten",
      titel: "Grundrechenarten",
      icon: "➕",
      intro: "Plus, minus, mal und geteilt – das Wichtigste zum Kopfrechnen.",
      aufgaben: [
        { frage: "Wie heißt das Ergebnis einer Plus-Aufgabe?", typ: "mc", optionen: ["Summe", "Differenz", "Produkt", "Quotient"], loesung: "Summe", erklaerung: "Bei einer Addition (Plus) nennt man das Ergebnis Summe." },
        { frage: "Wie heißt das Ergebnis einer Minus-Aufgabe?", typ: "mc", optionen: ["Summe", "Differenz", "Produkt", "Quotient"], loesung: "Differenz", erklaerung: "Bei einer Subtraktion (Minus) nennt man das Ergebnis Differenz." },
        { frage: "Wie heißt das Ergebnis einer Mal-Aufgabe?", typ: "mc", optionen: ["Summe", "Differenz", "Produkt", "Quotient"], loesung: "Produkt", erklaerung: "Bei einer Multiplikation (Mal) nennt man das Ergebnis Produkt." },
        { frage: "Wie heißt das Ergebnis einer Geteilt-Aufgabe?", typ: "mc", optionen: ["Summe", "Differenz", "Produkt", "Quotient"], loesung: "Quotient", erklaerung: "Bei einer Division (Geteilt) nennt man das Ergebnis Quotient." },
        { frage: "Was ist 234 + 158?", typ: "zahl", loesung: "392", erklaerung: "234 + 158 = 392" },
        { frage: "Was ist 500 - 178?", typ: "zahl", loesung: "322", erklaerung: "500 - 178 = 322" },
        { frage: "Was ist 12 × 8?", typ: "zahl", loesung: "96", erklaerung: "12 × 8 = 96" },
        { frage: "Was ist 144 : 12?", typ: "zahl", loesung: "12", erklaerung: "144 : 12 = 12, denn 12 × 12 = 144." },
        { frage: "Welche Regel gilt: Punkt-vor-Strich bedeutet …", typ: "mc", optionen: ["Mal und Geteilt zuerst rechnen", "Plus und Minus zuerst rechnen", "immer von links nach rechts", "immer von rechts nach links"], loesung: "Mal und Geteilt zuerst rechnen", erklaerung: "Punktrechnung (× und :) wird vor Strichrechnung (+ und −) gerechnet." },
        { frage: "Was ist 5 + 3 × 4?", typ: "zahl", loesung: "17", erklaerung: "Erst 3 × 4 = 12 rechnen, dann 5 + 12 = 17 (Punkt vor Strich)." }
      ]
    },
    {
      id: "grosse-zahlen",
      titel: "Große Zahlen & Runden",
      icon: "🔢",
      intro: "Zahlen bis in die Millionen lesen, schreiben und runden.",
      aufgaben: [
        { frage: "Wie viele Nullen hat eine Million (1.000.000)?", typ: "zahl", loesung: "6", erklaerung: "1.000.000 hat sechs Nullen." },
        { frage: "Welche Stelle steht in 4.372 an der Hunderterstelle?", typ: "zahl", loesung: "3", erklaerung: "4.372 → 4 = Tausender, 3 = Hunderter, 7 = Zehner, 2 = Einer." },
        { frage: "Runde 748 auf die nächsten Zehner.", typ: "zahl", loesung: "750", erklaerung: "748 liegt näher an 750 als an 740, also wird aufgerundet." },
        { frage: "Runde 4.250 auf die nächsten Hunderter.", typ: "mc", optionen: ["4.200", "4.300", "4.250", "4.000"], loesung: "4.300", erklaerung: "Bei genau der Mitte (50) wird aufgerundet: 4.250 → 4.300." },
        { frage: "Welche Zahl ist größer: 45.900 oder 45.090?", typ: "mc", optionen: ["45.900", "45.090", "sie sind gleich", "kann man nicht sagen"], loesung: "45.900", erklaerung: "Beim Vergleich schaut man von links: 45.900 hat an der Hunderterstelle eine 9, 45.090 nur eine 0." },
        { frage: "Wie schreibt man 'zwölftausenddreihundertfünf' in Ziffern?", typ: "zahl", loesung: "12305", erklaerung: "Zwölftausend = 12.000, dreihundertfünf = 305 → 12.305." },
        { frage: "Runde 8.499 auf die nächsten Tausender.", typ: "mc", optionen: ["8.000", "9.000", "8.500", "8.400"], loesung: "8.000", erklaerung: "8.499 liegt näher an 8.000 als an 9.000." },
        { frage: "Was ist die Vorgängerzahl von 10.000?", typ: "zahl", loesung: "9999", erklaerung: "Der Vorgänger von 10.000 ist 9.999." }
      ]
    },
    {
      id: "groessen-einheiten",
      titel: "Größen & Einheiten",
      icon: "📏",
      intro: "Längen, Gewichte, Zeit und Geld richtig umrechnen.",
      aufgaben: [
        { frage: "Wie viele Zentimeter sind 1 Meter?", typ: "zahl", loesung: "100", erklaerung: "1 m = 100 cm" },
        { frage: "Wie viele Meter sind 1 Kilometer?", typ: "zahl", loesung: "1000", erklaerung: "1 km = 1000 m" },
        { frage: "Wie viele Gramm sind 1 Kilogramm?", typ: "zahl", loesung: "1000", erklaerung: "1 kg = 1000 g" },
        { frage: "Wie viele Minuten hat eine Stunde?", typ: "zahl", loesung: "60", erklaerung: "1 Stunde = 60 Minuten" },
        { frage: "3 m sind wie viele cm?", typ: "zahl", loesung: "300", erklaerung: "3 × 100 cm = 300 cm" },
        { frage: "2.500 g sind wie viele kg?", typ: "mc", optionen: ["2,5 kg", "25 kg", "0,25 kg", "250 kg"], loesung: "2,5 kg", erklaerung: "2.500 g : 1000 = 2,5 kg" },
        { frage: "Wie viele Sekunden hat eine Minute?", typ: "zahl", loesung: "60", erklaerung: "1 Minute = 60 Sekunden" },
        { frage: "1,5 € sind wie viele Cent?", typ: "zahl", loesung: "150", erklaerung: "1,5 € = 150 Cent" }
      ]
    },
    {
      id: "brueche",
      titel: "Brüche – Einführung",
      icon: "🍕",
      intro: "Was ein Bruch ist und wie man einfache Brüche vergleicht.",
      aufgaben: [
        { frage: "Ein Kuchen wird in 4 gleiche Teile geteilt. Wie heißt ein Teil als Bruch?", typ: "mc", optionen: ["1/4", "4/1", "1/2", "2/4"], loesung: "1/4", erklaerung: "Ein Teil von vier gleichen Teilen ist ein Viertel: 1/4." },
        { frage: "Wie nennt man die untere Zahl eines Bruchs?", typ: "mc", optionen: ["Zähler", "Nenner", "Summe", "Faktor"], loesung: "Nenner", erklaerung: "Die untere Zahl zeigt, in wie viele Teile geteilt wurde – das ist der Nenner." },
        { frage: "Wie nennt man die obere Zahl eines Bruchs?", typ: "mc", optionen: ["Zähler", "Nenner", "Summe", "Faktor"], loesung: "Zähler", erklaerung: "Die obere Zahl zeigt, wie viele Teile gemeint sind – das ist der Zähler." },
        { frage: "Was ist größer: 1/2 oder 1/4?", typ: "mc", optionen: ["1/2", "1/4", "gleich groß", "kann man nicht sagen"], loesung: "1/2", erklaerung: "Je kleiner der Nenner bei gleichem Zähler, desto größer der Bruch: 1/2 > 1/4." },
        { frage: "Wie viele Viertel ergeben ein Ganzes?", typ: "zahl", loesung: "4", erklaerung: "4/4 ergeben ein Ganzes." },
        { frage: "Ein Kuchen hat 8 Stücke. Du isst 3 Stücke. Welcher Bruch beschreibt das?", typ: "mc", optionen: ["3/8", "8/3", "3/5", "5/8"], loesung: "3/8", erklaerung: "3 von 8 Stücken sind 3/8." },
        { frage: "Was ist 1/2 als Bruch mit Nenner 4?", typ: "mc", optionen: ["2/4", "1/4", "4/2", "3/4"], loesung: "2/4", erklaerung: "1/2 = 2/4, weil Zähler und Nenner beide mal 2 genommen werden." },
        { frage: "Was ist größer: 3/4 oder 1/2?", typ: "mc", optionen: ["3/4", "1/2", "gleich groß", "kann man nicht sagen"], loesung: "3/4", erklaerung: "3/4 ist mehr als die Hälfte (2/4), also größer als 1/2." }
      ]
    },
    {
      id: "geometrie",
      titel: "Geometrie-Grundlagen",
      icon: "📐",
      intro: "Winkel, Figuren, Umfang und Fläche von Rechtecken.",
      aufgaben: [
        { frage: "Wie nennt man einen Winkel, der genau 90° hat?", typ: "mc", optionen: ["rechter Winkel", "spitzer Winkel", "stumpfer Winkel", "gestreckter Winkel"], loesung: "rechter Winkel", erklaerung: "Ein Winkel mit genau 90° heißt rechter Winkel." },
        { frage: "Wie nennt man einen Winkel, der kleiner als 90° ist?", typ: "mc", optionen: ["rechter Winkel", "spitzer Winkel", "stumpfer Winkel", "gestreckter Winkel"], loesung: "spitzer Winkel", erklaerung: "Ein Winkel unter 90° heißt spitzer Winkel." },
        { frage: "Wie nennt man einen Winkel, der größer als 90° und kleiner als 180° ist?", typ: "mc", optionen: ["rechter Winkel", "spitzer Winkel", "stumpfer Winkel", "gestreckter Winkel"], loesung: "stumpfer Winkel", erklaerung: "Ein Winkel zwischen 90° und 180° heißt stumpfer Winkel." },
        { frage: "Wie viele Ecken hat ein Rechteck?", typ: "zahl", loesung: "4", erklaerung: "Ein Rechteck hat 4 Ecken und 4 rechte Winkel." },
        { frage: "Ein Rechteck ist 5 cm lang und 3 cm breit. Wie groß ist der Umfang?", typ: "zahl", loesung: "16", erklaerung: "Umfang = 2 × (Länge + Breite) = 2 × (5+3) = 16 cm." },
        { frage: "Ein Rechteck ist 4 cm lang und 3 cm breit. Wie groß ist die Fläche?", typ: "zahl", loesung: "12", erklaerung: "Fläche = Länge × Breite = 4 × 3 = 12 cm²." },
        { frage: "Ein Quadrat hat die Seitenlänge 5 cm. Wie groß ist der Umfang?", typ: "zahl", loesung: "20", erklaerung: "Umfang eines Quadrats = 4 × Seitenlänge = 4 × 5 = 20 cm." },
        { frage: "Wie viele Seiten hat ein Dreieck?", typ: "zahl", loesung: "3", erklaerung: "Ein Dreieck hat 3 Seiten und 3 Ecken." }
      ]
    }
  ]
};
