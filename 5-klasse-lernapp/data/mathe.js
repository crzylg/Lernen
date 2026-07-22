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
      lektion: [
        "➕ Plus (+) heißt addieren: Du legst Zahlen zusammen. Das Ergebnis heißt Summe.",
        "➖ Minus (−) heißt subtrahieren: Du ziehst eine Zahl von einer anderen ab. Das Ergebnis heißt Differenz.",
        "✖️ Mal (×) heißt multiplizieren: Du zählst eine Zahl mehrmals. Das Ergebnis heißt Produkt.",
        "➗ Geteilt (:) heißt dividieren: Du teilst eine Zahl in gleiche Teile auf. Das Ergebnis heißt Quotient.",
        "⭐ Wichtige Regel: 'Punkt vor Strich' – zuerst rechnest du Mal und Geteilt, danach erst Plus und Minus."
      ],
      beispiele: [
        {
          aufgabe: "5 + 3 × 4 = ?",
          schritte: [
            "Schau zuerst, ob eine Mal- oder Geteilt-Aufgabe dabei ist.",
            "3 × 4 rechnest du zuerst: 3 × 4 = 12.",
            "Jetzt rechnest du die Plus-Aufgabe: 5 + 12 = 17."
          ],
          ergebnis: "17"
        },
        {
          aufgabe: "(4 + 6) × 3 = ?",
          schritte: [
            "Steht eine Klammer da, rechnest du die immer zuerst.",
            "In der Klammer steht 4 + 6 = 10.",
            "Jetzt rechnest du 10 × 3 = 30."
          ],
          ergebnis: "30"
        },
        {
          aufgabe: "234 + 158 = ?",
          schritte: [
            "Du addierst zuerst die Einer (rechte Spalte): 4 + 8 = 12. Du schreibst die 2 auf und merkst dir die 1.",
            "Jetzt die Zehner: 3 + 5 = 8, plus die gemerkte 1 macht 9.",
            "Zum Schluss die Hunderter: 2 + 1 = 3."
          ],
          ergebnis: "392"
        }
      ],
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
        { frage: "Was ist 5 + 3 × 4?", typ: "zahl", loesung: "17", erklaerung: "Erst 3 × 4 = 12 rechnen, dann 5 + 12 = 17 (Punkt vor Strich)." },
        { frage: "Was ist 9 × 9?", typ: "zahl", loesung: "81", erklaerung: "9 × 9 = 81" },
        { frage: "Was ist 63 : 7?", typ: "zahl", loesung: "9", erklaerung: "63 : 7 = 9, denn 9 × 7 = 63." },
        { frage: "Was ist 1000 - 456?", typ: "zahl", loesung: "544", erklaerung: "1000 - 456 = 544" },
        { frage: "Was ist 25 × 4?", typ: "zahl", loesung: "100", erklaerung: "25 × 4 = 100" },
        { frage: "Was ist (4 + 6) × 3?", typ: "zahl", loesung: "30", erklaerung: "Erst die Klammer rechnen: 4+6=10, dann 10×3=30. Klammern werden immer zuerst gerechnet." },
        { frage: "Was ist 20 - 4 × 3?", typ: "zahl", loesung: "8", erklaerung: "Erst 4×3=12 rechnen, dann 20-12=8 (Punkt vor Strich)." },
        { frage: "Was ist 7 × 6?", typ: "zahl", loesung: "42", erklaerung: "7 × 6 = 42" },
        { frage: "Was ist 128 : 4?", typ: "zahl", loesung: "32", erklaerung: "128 : 4 = 32" },
        { frage: "Was bedeutet 'Klammern zuerst'?", typ: "mc", optionen: ["Was in Klammern steht, wird zuerst gerechnet", "Klammern kann man ignorieren", "Klammern kommen nach Punktrechnung", "Klammern sind nur Deko"], loesung: "Was in Klammern steht, wird zuerst gerechnet", erklaerung: "Klammern haben immer Vorrang – sie werden vor Punkt- und Strichrechnung berechnet." },
        { frage: "Was ist 15 × 3 - 10?", typ: "zahl", loesung: "35", erklaerung: "Erst 15×3=45, dann 45-10=35." }
      ]
    },
    {
      id: "grosse-zahlen",
      titel: "Große Zahlen & Runden",
      icon: "🔢",
      intro: "Zahlen bis in die Millionen lesen, schreiben und runden.",
      lektion: [
        "🔢 Große Zahlen liest man von links nach rechts, immer in Dreiergruppen: Millionen, Tausender, Einer.",
        "📍 Jede Ziffer hat einen Stellenwert: Einer, Zehner, Hunderter, Tausender und so weiter.",
        "🔄 Runden heißt: Eine Zahl einfacher machen. Du schaust auf die Ziffer rechts von der Rundungsstelle.",
        "⬇️⬆️ Ist diese Ziffer 0,1,2,3,4 → abrunden. Ist sie 5,6,7,8,9 → aufrunden."
      ],
      beispiele: [
        {
          aufgabe: "Runde 748 auf die nächsten Zehner.",
          schritte: [
            "Schau auf die Ziffer rechts von der Zehnerstelle, also die Einerstelle: bei 748 ist das die 8.",
            "Die 8 ist 5 oder größer, also wird aufgerundet.",
            "Die Zehnerstelle wird deshalb eins größer: aus 740 wird 750."
          ],
          ergebnis: "750"
        },
        {
          aufgabe: "Runde 8.499 auf die nächsten Tausender.",
          schritte: [
            "Schau auf die Ziffer rechts von der Tausenderstelle, also die Hunderterstelle: bei 8.499 ist das die 4.",
            "Die 4 ist kleiner als 5, also wird abgerundet.",
            "Die Tausenderstelle bleibt einfach gleich: aus 8.499 wird 8.000."
          ],
          ergebnis: "8.000"
        },
        {
          aufgabe: "Welche Zahl ist größer: 45.900 oder 45.090?",
          schritte: [
            "Vergleiche Ziffer für Ziffer von links nach rechts.",
            "Zehntausender (4) und Tausender (5) sind bei beiden Zahlen gleich.",
            "Bei der Hunderterstelle hat 45.900 eine 9, aber 45.090 nur eine 0 – ab hier gewinnt die Zahl mit der größeren Ziffer."
          ],
          ergebnis: "45.900 ist größer"
        }
      ],
      aufgaben: [
        { frage: "Wie viele Nullen hat eine Million (1.000.000)?", typ: "zahl", loesung: "6", erklaerung: "1.000.000 hat sechs Nullen." },
        { frage: "Welche Stelle steht in 4.372 an der Hunderterstelle?", typ: "zahl", loesung: "3", erklaerung: "4.372 → 4 = Tausender, 3 = Hunderter, 7 = Zehner, 2 = Einer." },
        { frage: "Runde 748 auf die nächsten Zehner.", typ: "zahl", loesung: "750", erklaerung: "748 liegt näher an 750 als an 740, also wird aufgerundet." },
        { frage: "Runde 4.250 auf die nächsten Hunderter.", typ: "mc", optionen: ["4.200", "4.300", "4.250", "4.000"], loesung: "4.300", erklaerung: "Bei genau der Mitte (50) wird aufgerundet: 4.250 → 4.300." },
        { frage: "Welche Zahl ist größer: 45.900 oder 45.090?", typ: "mc", optionen: ["45.900", "45.090", "sie sind gleich", "kann man nicht sagen"], loesung: "45.900", erklaerung: "Beim Vergleich schaut man von links: 45.900 hat an der Hunderterstelle eine 9, 45.090 nur eine 0." },
        { frage: "Wie schreibt man 'zwölftausenddreihundertfünf' in Ziffern?", typ: "zahl", loesung: "12305", erklaerung: "Zwölftausend = 12.000, dreihundertfünf = 305 → 12.305." },
        { frage: "Runde 8.499 auf die nächsten Tausender.", typ: "mc", optionen: ["8.000", "9.000", "8.500", "8.400"], loesung: "8.000", erklaerung: "8.499 liegt näher an 8.000 als an 9.000." },
        { frage: "Was ist die Vorgängerzahl von 10.000?", typ: "zahl", loesung: "9999", erklaerung: "Der Vorgänger von 10.000 ist 9.999." },
        { frage: "Was ist die Nachfolgerzahl von 99.999?", typ: "zahl", loesung: "100000", erklaerung: "Der Nachfolger von 99.999 ist 100.000." },
        { frage: "Welche Ziffer steht in 782.145 an der Zehntausenderstelle?", typ: "zahl", loesung: "8", erklaerung: "782.145 → 7=Hunderttausender, 8=Zehntausender, 2=Tausender, 1=Hunderter, 4=Zehner, 5=Einer." },
        { frage: "Runde 3.652 auf die nächsten Hunderter.", typ: "zahl", loesung: "3700", erklaerung: "3.652 liegt näher an 3.700 als an 3.600." },
        { frage: "Welche Zahl ist kleiner: 12.045 oder 12.450?", typ: "mc", optionen: ["12.045", "12.450", "sie sind gleich", "kann man nicht sagen"], loesung: "12.045", erklaerung: "An der Hunderterstelle hat 12.045 eine 0, 12.450 eine 4 – also ist 12.045 kleiner." },
        { frage: "Wie schreibt man 'dreihunderttausend' in Ziffern?", typ: "zahl", loesung: "300000", erklaerung: "Dreihunderttausend = 300.000" },
        { frage: "Runde 5.500 auf die nächsten Tausender.", typ: "zahl", loesung: "6000", erklaerung: "Bei genau der Mitte (500) wird aufgerundet: 5.500 → 6.000." },
        { frage: "Wie viele Hunderter stecken in 4.000?", typ: "zahl", loesung: "40", erklaerung: "4.000 : 100 = 40, also stecken 40 Hunderter in 4.000." },
        { frage: "Welche Zahl liegt zwischen 6.000 und 7.000?", typ: "mc", optionen: ["6.500", "5.999", "7.100", "8.000"], loesung: "6.500", erklaerung: "6.500 liegt zwischen 6.000 und 7.000." },
        { frage: "Runde 91.450 auf die nächsten Tausender.", typ: "zahl", loesung: "91000", erklaerung: "91.450 liegt näher an 91.000 als an 92.000." }
      ]
    },
    {
      id: "groessen-einheiten",
      titel: "Größen & Einheiten",
      icon: "📏",
      intro: "Längen, Gewichte, Zeit und Geld richtig umrechnen.",
      lektion: [
        "📏 Längen misst man in mm, cm, m und km. 100 cm sind 1 m, 1000 m sind 1 km.",
        "⚖️ Gewichte misst man in g, kg und t. 1000 g sind 1 kg.",
        "⏰ Zeit misst man in Sekunden, Minuten und Stunden. 60 Sekunden sind 1 Minute, 60 Minuten sind 1 Stunde.",
        "💶 Geld misst man in Euro und Cent. 100 Cent sind 1 Euro.",
        "💡 Tipp: Von einer kleinen in eine große Einheit rechnest du meistens durch Teilen. Umgekehrt durch Malnehmen."
      ],
      beispiele: [
        {
          aufgabe: "3 m sind wie viele cm?",
          schritte: [
            "Du weißt: 1 m sind 100 cm.",
            "Für 3 m rechnest du also 3-mal so viel: 3 × 100.",
            "3 × 100 = 300."
          ],
          ergebnis: "300 cm"
        },
        {
          aufgabe: "2.500 g sind wie viele kg?",
          schritte: [
            "Du weißt: 1.000 g sind 1 kg.",
            "Du willst von der kleinen Einheit (g) in die große Einheit (kg), also teilst du.",
            "2.500 : 1.000 = 2,5."
          ],
          ergebnis: "2,5 kg"
        },
        {
          aufgabe: "Wie viele Minuten sind 2 Stunden?",
          schritte: [
            "Du weißt: 1 Stunde hat 60 Minuten.",
            "Für 2 Stunden rechnest du 2-mal so viel: 2 × 60.",
            "2 × 60 = 120."
          ],
          ergebnis: "120 Minuten"
        }
      ],
      aufgaben: [
        { frage: "Wie viele Zentimeter sind 1 Meter?", typ: "zahl", loesung: "100", erklaerung: "1 m = 100 cm" },
        { frage: "Wie viele Meter sind 1 Kilometer?", typ: "zahl", loesung: "1000", erklaerung: "1 km = 1000 m" },
        { frage: "Wie viele Gramm sind 1 Kilogramm?", typ: "zahl", loesung: "1000", erklaerung: "1 kg = 1000 g" },
        { frage: "Wie viele Minuten hat eine Stunde?", typ: "zahl", loesung: "60", erklaerung: "1 Stunde = 60 Minuten" },
        { frage: "3 m sind wie viele cm?", typ: "zahl", loesung: "300", erklaerung: "3 × 100 cm = 300 cm" },
        { frage: "2.500 g sind wie viele kg?", typ: "mc", optionen: ["2,5 kg", "25 kg", "0,25 kg", "250 kg"], loesung: "2,5 kg", erklaerung: "2.500 g : 1000 = 2,5 kg" },
        { frage: "Wie viele Sekunden hat eine Minute?", typ: "zahl", loesung: "60", erklaerung: "1 Minute = 60 Sekunden" },
        { frage: "1,5 € sind wie viele Cent?", typ: "zahl", loesung: "150", erklaerung: "1,5 € = 150 Cent" },
        { frage: "Wie viele Millimeter sind 1 Zentimeter?", typ: "zahl", loesung: "10", erklaerung: "1 cm = 10 mm" },
        { frage: "Wie viele Kilogramm sind 3.000 g?", typ: "zahl", loesung: "3", erklaerung: "3.000 g : 1000 = 3 kg" },
        { frage: "Wie viele Meter sind 2,5 km?", typ: "zahl", loesung: "2500", erklaerung: "2,5 × 1000 m = 2.500 m" },
        { frage: "Wie viele Minuten sind 2 Stunden?", typ: "zahl", loesung: "120", erklaerung: "2 × 60 Minuten = 120 Minuten" },
        { frage: "Wie viele Gramm sind 0,5 kg?", typ: "zahl", loesung: "500", erklaerung: "0,5 kg × 1000 = 500 g" },
        { frage: "Wie viele Cent sind 3,20 €?", typ: "zahl", loesung: "320", erklaerung: "3,20 € = 320 Cent" },
        { frage: "Wie viele Sekunden hat eine halbe Minute?", typ: "zahl", loesung: "30", erklaerung: "60 : 2 = 30 Sekunden" },
        { frage: "Ein Auto fährt 90 km in einer Stunde. Wie viele km sind das pro Minute (ungefähr)?", typ: "mc", optionen: ["1,5 km", "9 km", "90 km", "0,5 km"], loesung: "1,5 km", erklaerung: "90 km : 60 Minuten = 1,5 km pro Minute." },
        { frage: "Wie viele Meter sind 450 cm?", typ: "mc", optionen: ["4,5 m", "45 m", "0,45 m", "450 m"], loesung: "4,5 m", erklaerung: "450 cm : 100 = 4,5 m" }
      ]
    },
    {
      id: "brueche",
      titel: "Brüche – Einführung",
      icon: "🍕",
      intro: "Was ein Bruch ist und wie man einfache Brüche vergleicht.",
      lektion: [
        "🍕 Ein Bruch zeigt, wie viele Teile von einem Ganzen gemeint sind, zum Beispiel 1/4 = ein Viertel.",
        "⬆️ Die obere Zahl heißt Zähler – sie zeigt, wie viele Teile gemeint sind.",
        "⬇️ Die untere Zahl heißt Nenner – sie zeigt, in wie viele Teile das Ganze geteilt wurde.",
        "📊 Je größer der Nenner, desto kleiner ist ein einzelnes Teil (1/8 ist kleiner als 1/2)."
      ],
      beispiele: [
        {
          aufgabe: "Ein Kuchen hat 8 Stücke. Du isst 3 Stücke. Welcher Bruch beschreibt das?",
          schritte: [
            "Der Nenner (unten) ist die Gesamtzahl aller Stücke: 8.",
            "Der Zähler (oben) ist die Anzahl, die du gegessen hast: 3.",
            "Du schreibst den Zähler oben und den Nenner unten."
          ],
          ergebnis: "3/8"
        },
        {
          aufgabe: "Was ist 1/2 als Bruch mit Nenner 4?",
          schritte: [
            "Du willst aus dem Nenner 2 den Nenner 4 machen: dafür rechnest du 2 × 2 = 4.",
            "Was du unten mit der Zahl machst, musst du oben genauso machen: 1 × 2 = 2.",
            "Der neue Bruch hat oben die 2 und unten die 4."
          ],
          ergebnis: "2/4"
        },
        {
          aufgabe: "Was ist größer: 1/2 oder 1/4?",
          schritte: [
            "Bei gleichem Zähler (hier: 1) schaust du nur auf den Nenner.",
            "Je größer der Nenner, desto kleiner ist ein einzelnes Stück.",
            "4 ist größer als 2, also ist 1/4 das kleinere Stück."
          ],
          ergebnis: "1/2 ist größer"
        }
      ],
      aufgaben: [
        { frage: "Ein Kuchen wird in 4 gleiche Teile geteilt. Wie heißt ein Teil als Bruch?", typ: "mc", optionen: ["1/4", "4/1", "1/2", "2/4"], loesung: "1/4", erklaerung: "Ein Teil von vier gleichen Teilen ist ein Viertel: 1/4." },
        { frage: "Wie nennt man die untere Zahl eines Bruchs?", typ: "mc", optionen: ["Zähler", "Nenner", "Summe", "Faktor"], loesung: "Nenner", erklaerung: "Die untere Zahl zeigt, in wie viele Teile geteilt wurde – das ist der Nenner." },
        { frage: "Wie nennt man die obere Zahl eines Bruchs?", typ: "mc", optionen: ["Zähler", "Nenner", "Summe", "Faktor"], loesung: "Zähler", erklaerung: "Die obere Zahl zeigt, wie viele Teile gemeint sind – das ist der Zähler." },
        { frage: "Was ist größer: 1/2 oder 1/4?", typ: "mc", optionen: ["1/2", "1/4", "gleich groß", "kann man nicht sagen"], loesung: "1/2", erklaerung: "Je kleiner der Nenner bei gleichem Zähler, desto größer der Bruch: 1/2 > 1/4." },
        { frage: "Wie viele Viertel ergeben ein Ganzes?", typ: "zahl", loesung: "4", erklaerung: "4/4 ergeben ein Ganzes." },
        { frage: "Ein Kuchen hat 8 Stücke. Du isst 3 Stücke. Welcher Bruch beschreibt das?", typ: "mc", optionen: ["3/8", "8/3", "3/5", "5/8"], loesung: "3/8", erklaerung: "3 von 8 Stücken sind 3/8." },
        { frage: "Was ist 1/2 als Bruch mit Nenner 4?", typ: "mc", optionen: ["2/4", "1/4", "4/2", "3/4"], loesung: "2/4", erklaerung: "1/2 = 2/4, weil Zähler und Nenner beide mal 2 genommen werden." },
        { frage: "Was ist größer: 3/4 oder 1/2?", typ: "mc", optionen: ["3/4", "1/2", "gleich groß", "kann man nicht sagen"], loesung: "3/4", erklaerung: "3/4 ist mehr als die Hälfte (2/4), also größer als 1/2." },
        { frage: "Wie viele Drittel ergeben ein Ganzes?", typ: "zahl", loesung: "3", erklaerung: "3/3 ergeben ein Ganzes." },
        { frage: "Eine Pizza hat 6 Stücke. Zwei Freunde essen je 1 Stück. Wie viele Stücke (als Bruch) haben sie zusammen gegessen?", typ: "mc", optionen: ["2/6", "6/2", "1/6", "2/2"], loesung: "2/6", erklaerung: "Zusammen wurden 2 von 6 Stücken gegessen: 2/6." },
        { frage: "Was ist größer: 1/3 oder 1/5?", typ: "mc", optionen: ["1/3", "1/5", "gleich groß", "kann man nicht sagen"], loesung: "1/3", erklaerung: "Bei gleichem Zähler ist der Bruch mit dem kleineren Nenner größer: 1/3 > 1/5." },
        { frage: "Wie schreibt man 'drei von zehn Teilen' als Bruch?", typ: "mc", optionen: ["3/10", "10/3", "3/3", "10/10"], loesung: "3/10", erklaerung: "Drei von zehn Teilen ist 3/10." },
        { frage: "Ein Ganzes besteht aus wie vielen Halben?", typ: "zahl", loesung: "2", erklaerung: "2/2 ergeben ein Ganzes." },
        { frage: "Was ist 2/4 vereinfacht (gekürzt)?", typ: "mc", optionen: ["1/2", "1/4", "2/2", "4/2"], loesung: "1/2", erklaerung: "2/4 kann man kürzen: Zähler und Nenner durch 2 teilen ergibt 1/2." }
      ]
    },
    {
      id: "geometrie",
      titel: "Geometrie-Grundlagen",
      icon: "📐",
      intro: "Winkel, Figuren, Umfang und Fläche von Rechtecken.",
      lektion: [
        "📐 Ein Winkel entsteht, wenn sich zwei Linien treffen. Man misst ihn in Grad (°).",
        "📏 Ein rechter Winkel hat genau 90°. Ein spitzer Winkel ist kleiner, ein stumpfer Winkel größer als 90°.",
        "🔲 Der Umfang ist die Länge, wenn du einmal außen um eine Figur herumgehst.",
        "🟦 Die Fläche ist der Platz innerhalb einer Figur. Bei einem Rechteck gilt: Fläche = Länge × Breite."
      ],
      beispiele: [
        {
          aufgabe: "Ein Rechteck ist 5 cm lang und 3 cm breit. Wie groß ist der Umfang?",
          schritte: [
            "Die Formel für den Umfang ist: 2 × (Länge + Breite).",
            "Zuerst rechnest du Länge + Breite: 5 + 3 = 8.",
            "Dann multiplizierst du mit 2: 2 × 8 = 16."
          ],
          ergebnis: "16 cm"
        },
        {
          aufgabe: "Ein Rechteck ist 4 cm lang und 3 cm breit. Wie groß ist die Fläche?",
          schritte: [
            "Die Formel für die Fläche ist: Länge × Breite.",
            "Du setzt die Zahlen ein: 4 × 3.",
            "4 × 3 = 12."
          ],
          ergebnis: "12 cm²"
        },
        {
          aufgabe: "Ein Quadrat hat die Seitenlänge 5 cm. Wie groß ist der Umfang?",
          schritte: [
            "Ein Quadrat hat 4 gleich lange Seiten.",
            "Die Formel für den Umfang ist deshalb: 4 × Seitenlänge.",
            "4 × 5 = 20."
          ],
          ergebnis: "20 cm"
        }
      ],
      aufgaben: [
        { frage: "Wie nennt man einen Winkel, der genau 90° hat?", typ: "mc", optionen: ["rechter Winkel", "spitzer Winkel", "stumpfer Winkel", "gestreckter Winkel"], loesung: "rechter Winkel", erklaerung: "Ein Winkel mit genau 90° heißt rechter Winkel." },
        { frage: "Wie nennt man einen Winkel, der kleiner als 90° ist?", typ: "mc", optionen: ["rechter Winkel", "spitzer Winkel", "stumpfer Winkel", "gestreckter Winkel"], loesung: "spitzer Winkel", erklaerung: "Ein Winkel unter 90° heißt spitzer Winkel." },
        { frage: "Wie nennt man einen Winkel, der größer als 90° und kleiner als 180° ist?", typ: "mc", optionen: ["rechter Winkel", "spitzer Winkel", "stumpfer Winkel", "gestreckter Winkel"], loesung: "stumpfer Winkel", erklaerung: "Ein Winkel zwischen 90° und 180° heißt stumpfer Winkel." },
        { frage: "Wie viele Ecken hat ein Rechteck?", typ: "zahl", loesung: "4", erklaerung: "Ein Rechteck hat 4 Ecken und 4 rechte Winkel." },
        { frage: "Ein Rechteck ist 5 cm lang und 3 cm breit. Wie groß ist der Umfang?", typ: "zahl", loesung: "16", erklaerung: "Umfang = 2 × (Länge + Breite) = 2 × (5+3) = 16 cm." },
        { frage: "Ein Rechteck ist 4 cm lang und 3 cm breit. Wie groß ist die Fläche?", typ: "zahl", loesung: "12", erklaerung: "Fläche = Länge × Breite = 4 × 3 = 12 cm²." },
        { frage: "Ein Quadrat hat die Seitenlänge 5 cm. Wie groß ist der Umfang?", typ: "zahl", loesung: "20", erklaerung: "Umfang eines Quadrats = 4 × Seitenlänge = 4 × 5 = 20 cm." },
        { frage: "Wie viele Seiten hat ein Dreieck?", typ: "zahl", loesung: "3", erklaerung: "Ein Dreieck hat 3 Seiten und 3 Ecken." },
        { frage: "Ein Quadrat hat die Seitenlänge 6 cm. Wie groß ist die Fläche?", typ: "zahl", loesung: "36", erklaerung: "Fläche eines Quadrats = Seite × Seite = 6 × 6 = 36 cm²." },
        { frage: "Wie viele Grad hat ein gestreckter Winkel?", typ: "zahl", loesung: "180", erklaerung: "Ein gestreckter Winkel ist eine gerade Linie und hat 180°." },
        { frage: "Wie viele Ecken hat ein Fünfeck?", typ: "zahl", loesung: "5", erklaerung: "Ein Fünfeck hat 5 Ecken und 5 Seiten." },
        { frage: "Ein Rechteck ist 8 cm lang und 2 cm breit. Wie groß ist der Umfang?", typ: "zahl", loesung: "20", erklaerung: "Umfang = 2 × (8+2) = 2 × 10 = 20 cm." },
        { frage: "Ein Rechteck ist 7 cm lang und 4 cm breit. Wie groß ist die Fläche?", typ: "zahl", loesung: "28", erklaerung: "Fläche = 7 × 4 = 28 cm²." },
        { frage: "Wie nennt man eine Linie, die zwei Punkte auf dem kürzesten Weg verbindet?", typ: "mc", optionen: ["Strecke", "Winkel", "Fläche", "Kreis"], loesung: "Strecke", erklaerung: "Eine Strecke ist die kürzeste Verbindung zwischen zwei Punkten." },
        { frage: "Wie viele rechte Winkel hat ein Quadrat?", typ: "zahl", loesung: "4", erklaerung: "Ein Quadrat hat 4 rechte Winkel (je 90°)." }
      ]
    },
    {
      id: "schriftliche-division",
      titel: "Schriftliche Division",
      icon: "➗",
      intro: "Große Zahlen Schritt für Schritt teilen, auch wenn's im Kopf nicht mehr geht.",
      lektion: [
        "➗ Bei großen Zahlen kannst du nicht immer im Kopf teilen. Dafür gibt es die schriftliche Division – du teilst Ziffer für Ziffer.",
        "1️⃣ Nimm die erste Ziffer der großen Zahl. Ist sie zu klein für den Divisor, nimm die ersten zwei Ziffern.",
        "2️⃣ Teile sie durch den Divisor und schreib das Ergebnis über den Strich. Rechne zurück (Ergebnis × Divisor) und zieh ab – das ist der Rest.",
        "3️⃣ Hol dir die nächste Ziffer der großen Zahl dazu (an den Rest anhängen) und wiederhole das Ganze.",
        "✅ Wenn keine Ziffer mehr übrig ist und der Rest 0 ist, geht die Division ohne Rest auf."
      ],
      beispiele: [
        {
          aufgabe: "848 : 4 = ?",
          schritte: [
            "Erste Ziffer 8: Wie oft passt 4 in 8? Zweimal (2 × 4 = 8), Rest 0.",
            "Nächste Ziffer 4 dazu: Wie oft passt 4 in 4? Einmal (1 × 4 = 4), Rest 0.",
            "Letzte Ziffer 8 dazu: Wie oft passt 4 in 8? Zweimal (2 × 4 = 8), Rest 0."
          ],
          ergebnis: "212"
        },
        {
          aufgabe: "729 : 3 = ?",
          schritte: [
            "Erste Ziffer 7: Wie oft passt 3 in 7? Zweimal (2 × 3 = 6), Rest 1.",
            "Rest 1 + nächste Ziffer 2 = 12: Wie oft passt 3 in 12? Viermal (4 × 3 = 12), Rest 0.",
            "Letzte Ziffer 9 dazu: Wie oft passt 3 in 9? Dreimal (3 × 3 = 9), Rest 0."
          ],
          ergebnis: "243"
        },
        {
          aufgabe: "936 : 4 = ?",
          schritte: [
            "Erste Ziffer 9: Wie oft passt 4 in 9? Zweimal (2 × 4 = 8), Rest 1.",
            "Rest 1 + nächste Ziffer 3 = 13: Wie oft passt 4 in 13? Dreimal (3 × 4 = 12), Rest 1.",
            "Rest 1 + letzte Ziffer 6 = 16: Wie oft passt 4 in 16? Viermal (4 × 4 = 16), Rest 0."
          ],
          ergebnis: "234"
        }
      ],
      // Kurze, interaktive Schritt-Animation im K-Pop-Dämonenjäger-Look
      // (eigene, frei erfundene Gestaltung – keine Kopie eines Films).
      // Wird auf der Lektion-Seite über den Button "🎬 Animation ansehen" geöffnet.
      animation: {
        titel: "Besiege den Zahlen-Dämon: 936 : 4",
        szenen: [
          {
            text: "Ein Zahlen-Dämon aus 936 versperrt dir den Weg! Um ihn zu besiegen, musst du ihn durch 4 teilen – Ziffer für Ziffer.",
            ergebnisSoweit: "",
            rest: "",
            hp: 100
          },
          {
            text: "Schritt 1: Nimm die erste Ziffer 9. Wie oft passt 4 in 9? Zweimal! (2 × 4 = 8). Rest: 9 − 8 = 1.",
            rechnung: "9 : 4 = 2, Rest 1",
            ergebnisSoweit: "2",
            rest: "1",
            hp: 66
          },
          {
            text: "Schritt 2: Hol dir die nächste Ziffer (3) dazu: aus dem Rest 1 wird 13. Wie oft passt 4 in 13? Dreimal! (3 × 4 = 12). Rest: 13 − 12 = 1.",
            rechnung: "13 : 4 = 3, Rest 1",
            ergebnisSoweit: "23",
            rest: "1",
            hp: 33
          },
          {
            text: "Schritt 3: Hol dir die letzte Ziffer (6) dazu: aus dem Rest 1 wird 16. Wie oft passt 4 in 16? Viermal! (4 × 4 = 16). Rest: 16 − 16 = 0 — der Dämon ist besiegt!",
            rechnung: "16 : 4 = 4, Rest 0",
            ergebnisSoweit: "234",
            rest: "0",
            hp: 0
          },
          {
            text: "🏆 Geschafft! 936 : 4 = 234, ohne Rest. Du hast den Zahlen-Dämon Schritt für Schritt bezwungen.",
            ergebnisSoweit: "234",
            rest: "0",
            hp: 0,
            ende: true
          }
        ]
      },
      aufgaben: [
        { frage: "Wie nennt man das Ergebnis einer Division noch einmal?", typ: "mc", optionen: ["Summe", "Differenz", "Produkt", "Quotient"], loesung: "Quotient", erklaerung: "Bei einer Division nennt man das Ergebnis Quotient." },
        { frage: "Was ist 484 : 4?", typ: "zahl", loesung: "121", erklaerung: "4:4=1 Rest 0, 08:4=2 Rest 0, 4:4=1 Rest 0 → 121." },
        { frage: "Was ist 636 : 3?", typ: "zahl", loesung: "212", erklaerung: "6:3=2 Rest 0, 3:3=1 Rest 0, 6:3=2 Rest 0 → 212." },
        { frage: "Was ist 848 : 4?", typ: "zahl", loesung: "212", erklaerung: "8:4=2 Rest 0, 4:4=1 Rest 0, 8:4=2 Rest 0 → 212." },
        { frage: "Was ist 729 : 3?", typ: "zahl", loesung: "243", erklaerung: "7:3=2 Rest 1, 12:3=4 Rest 0, 9:3=3 Rest 0 → 243." },
        { frage: "Was ist 824 : 8?", typ: "zahl", loesung: "103", erklaerung: "8:8=1 Rest 0, 2:8=0 Rest 2, 24:8=3 Rest 0 → 103." },
        { frage: "Was ist 945 : 5?", typ: "zahl", loesung: "189", erklaerung: "9:5=1 Rest 4, 44:5=8 Rest 4, 45:5=9 Rest 0 → 189." },
        { frage: "Was ist 693 : 3?", typ: "zahl", loesung: "231", erklaerung: "6:3=2 Rest 0, 9:3=3 Rest 0, 3:3=1 Rest 0 → 231." },
        { frage: "Was ist 936 : 4?", typ: "zahl", loesung: "234", erklaerung: "9:4=2 Rest 1, 13:4=3 Rest 1, 16:4=4 Rest 0 → 234." },
        { frage: "Was ist 7.236 : 6?", typ: "zahl", loesung: "1206", erklaerung: "7:6=1 Rest 1, 12:6=2 Rest 0, 3:6=0 Rest 3, 36:6=6 Rest 0 → 1.206." },
        { frage: "Bei 25 : 4 bleibt ein Rest. Wie groß ist er?", typ: "zahl", loesung: "1", erklaerung: "4 × 6 = 24, und 25 − 24 = 1 Rest." },
        { frage: "Bei 936 : 4 = 234 — wie groß ist der Rest am Ende?", typ: "zahl", loesung: "0", erklaerung: "936 : 4 geht ohne Rest auf, der Rest ist 0." }
      ]
    }
  ]
};
