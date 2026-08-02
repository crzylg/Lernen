// Mathematik – Klasse 5 (Gymnasium Niedersachsen)
// Aufgaben-Typ "mc" = Multiple Choice (loesung ist der Text der richtigen Option)
// Aufgaben-Typ "zahl" = Antwort eintippen (loesung ist der erwartete Text, Vergleich ohne Leerzeichen)
//
// Kapitelstruktur und Reihenfolge sind an das im Unterricht verwendete Buch
// angelehnt (Fundamente der Mathematik – Niedersachsen ab 2024, 5. Schuljahr):
// 1 Natürliche Zahlen und Größen · 2 Rechnen mit natürlichen Zahlen ·
// 3 Grundbegriffe der Geometrie · 4 Flächeninhalt und Umfang ·
// 5 Volumen und Oberflächeninhalt · 6 Brüche und Dezimalzahlen.
// Alle Texte, Beispiele und Aufgaben sind vollständig selbst geschrieben –
// es wird kein Inhalt aus dem Buch übernommen, nur Themen und Reihenfolge.
window.LERNDATA = window.LERNDATA || {};
window.LERNDATA.mathe = {
  id: "mathe",
  name: "Mathematik",
  icon: "🔢",
  farbe: "#3B82F6",
  themen: [
    {
      id: "daten-auswerten",
      titel: "1.1 Daten auswerten und darstellen",
      icon: "📊",
      intro: "Kapitel 1: Zählen, ordnen und als Diagramm darstellen.",
      lektion: [
        "📊 Eine Strichliste hilft beim Zählen: Für jedes Ereignis machst du einen Strich, ab dem fünften Strich einen Querstrich (gebündelt zu 5er-Blöcken).",
        "📈 Ein Diagramm zeigt Daten als Bild – z. B. als Balkendiagramm (Säulen) oder Kreisdiagramm (Anteile als Tortenstücke).",
        "📋 Eine Tabelle ordnet Daten übersichtlich in Zeilen und Spalten.",
        "🔢 Die Häufigkeit sagt, wie oft ein Ereignis vorkommt."
      ],
      beispiele: [
        {
          aufgabe: "In einer Strichliste stehen zwei volle 5er-Blöcke und 3 einzelne Striche. Wie viele Striche sind das insgesamt?",
          schritte: [
            "Ein voller 5er-Block sind 5 Striche.",
            "Zwei volle Blöcke sind 5 + 5 = 10 Striche.",
            "Dazu kommen noch 3 einzelne Striche: 10 + 3 = 13."
          ],
          ergebnis: "13"
        }
      ],
      aufgaben: [
        { frage: "Wie viele Striche zeigt ein voller 5er-Block in einer Strichliste?", typ: "zahl", loesung: "5", erklaerung: "Ein voller Block wird immer zu 5 Strichen gebündelt." },
        { frage: "Was zeigt ein Balkendiagramm?", typ: "mc", optionen: ["Daten als Säulen/Balken", "Nur Zahlen ohne Bild", "Nur Wörter", "Ein Rechenergebnis"], loesung: "Daten als Säulen/Balken", erklaerung: "Ein Balkendiagramm stellt Häufigkeiten als unterschiedlich hohe Balken dar." },
        { frage: "Wie nennt man es, wie oft ein Ereignis vorkommt?", typ: "mc", optionen: ["Häufigkeit", "Mittelwert", "Summe", "Differenz"], loesung: "Häufigkeit", erklaerung: "Die Häufigkeit zählt, wie oft etwas vorkommt." },
        { frage: "Eine Tabelle ordnet Daten in …", typ: "mc", optionen: ["Zeilen und Spalten", "Kreisen", "Strichen", "Farben"], loesung: "Zeilen und Spalten", erklaerung: "Tabellen bestehen aus Zeilen (waagerecht) und Spalten (senkrecht)." },
        { frage: "In einer Strichliste stehen zwei volle 5er-Blöcke. Wie viele Striche sind das?", typ: "zahl", loesung: "10", erklaerung: "5 + 5 = 10." },
        { frage: "In einer Strichliste stehen ein voller 5er-Block und 2 einzelne Striche. Wie viele Striche sind das?", typ: "zahl", loesung: "7", erklaerung: "5 + 2 = 7." },
        { frage: "Welches Diagramm zeigt Anteile als Kreis mit Segmenten?", typ: "mc", optionen: ["Kreisdiagramm", "Balkendiagramm", "Strichliste", "Tabelle"], loesung: "Kreisdiagramm", erklaerung: "Ein Kreisdiagramm zeigt Anteile als 'Tortenstücke'." },
        { frage: "5 Kinder mögen Fußball, 3 mögen Schwimmen. Wie viele Kinder wurden insgesamt befragt?", typ: "zahl", loesung: "8", erklaerung: "5 + 3 = 8 Kinder." },
        { frage: "Was braucht man, um eine Strichliste in ein Balkendiagramm umzuwandeln?", typ: "mc", optionen: ["Die Häufigkeiten der Strichliste", "Nur die Namen", "Ein Lineal", "Nichts weiter"], loesung: "Die Häufigkeiten der Strichliste", erklaerung: "Die Balkenhöhen entsprechen den gezählten Häufigkeiten." },
        { frage: "Wozu dienen Diagramme?", typ: "mc", optionen: ["Um Daten übersichtlich darzustellen", "Um zu malen", "Um zu addieren", "Um Wörter zu ordnen"], loesung: "Um Daten übersichtlich darzustellen", erklaerung: "Diagramme machen Zahlen auf einen Blick verständlich." }
      ]
    },
    {
      id: "grosse-zahlen",
      titel: "1.2 Große Zahlen & Runden",
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
        { frage: "Welche Zahl liegt zwischen 6.000 und 7.000?", typ: "mc", optionen: ["6.500", "5.999", "7.100", "8.000"], loesung: "6.500", erklaerung: "6.500 liegt zwischen 6.000 und 7.000." },
        { frage: "Runde 91.450 auf die nächsten Tausender.", typ: "zahl", loesung: "91000", erklaerung: "91.450 liegt näher an 91.000 als an 92.000." }
      ]
    },
    {
      id: "groessen-einheiten",
      titel: "1.3 Größen umrechnen",
      icon: "📏",
      intro: "Längen, Gewichte, Zeit, Geld und den Maßstab richtig umrechnen.",
      lektion: [
        "📏 Längen misst man in mm, cm, m und km. 100 cm sind 1 m, 1000 m sind 1 km.",
        "⚖️ Gewichte misst man in g, kg und t. 1000 g sind 1 kg.",
        "⏰ Zeit misst man in Sekunden, Minuten und Stunden. 60 Sekunden sind 1 Minute, 60 Minuten sind 1 Stunde.",
        "💶 Geld misst man in Euro und Cent. 100 Cent sind 1 Euro.",
        "💡 Tipp: Von einer kleinen in eine große Einheit rechnest du meistens durch Teilen. Umgekehrt durch Malnehmen.",
        "🗺️ Der Maßstab gibt an, wie eine Karte oder Zeichnung im Vergleich zur Wirklichkeit verkleinert ist: 1:100 bedeutet, 1 cm auf der Karte sind 100 cm (= 1 m) in Wirklichkeit."
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
          aufgabe: "Der Maßstab ist 1:100. Eine Strecke auf dem Plan ist 5 cm lang. Wie lang ist sie in Wirklichkeit?",
          schritte: [
            "Bei 1:100 ist jeder cm auf dem Plan in Wirklichkeit 100-mal so lang.",
            "Du rechnest deshalb 5 × 100.",
            "5 × 100 = 500 cm, das sind 5 m."
          ],
          ergebnis: "500 cm (5 m)"
        }
      ],
      aufgaben: [
        { frage: "Wie viele Zentimeter sind 1 Meter?", typ: "zahl", loesung: "100", erklaerung: "1 m = 100 cm" },
        { frage: "Wie viele Meter sind 1 Kilometer?", typ: "zahl", loesung: "1000", erklaerung: "1 km = 1000 m" },
        { frage: "Wie viele Gramm sind 1 Kilogramm?", typ: "zahl", loesung: "1000", erklaerung: "1 kg = 1000 g" },
        { frage: "Wie viele Minuten hat eine Stunde?", typ: "zahl", loesung: "60", erklaerung: "1 Stunde = 60 Minuten" },
        { frage: "3 m sind wie viele cm?", typ: "zahl", loesung: "300", erklaerung: "3 × 100 cm = 300 cm" },
        { frage: "2.500 g sind wie viele kg?", typ: "mc", optionen: ["2,5 kg", "25 kg", "0,25 kg", "250 kg"], loesung: "2,5 kg", erklaerung: "2.500 g : 1000 = 2,5 kg" },
        { frage: "1,5 € sind wie viele Cent?", typ: "zahl", loesung: "150", erklaerung: "1,5 € = 150 Cent" },
        { frage: "Wie viele Millimeter sind 1 Zentimeter?", typ: "zahl", loesung: "10", erklaerung: "1 cm = 10 mm" },
        { frage: "Wie viele Meter sind 2,5 km?", typ: "zahl", loesung: "2500", erklaerung: "2,5 × 1000 m = 2.500 m" },
        { frage: "Wie viele Minuten sind 2 Stunden?", typ: "zahl", loesung: "120", erklaerung: "2 × 60 Minuten = 120 Minuten" },
        { frage: "Wie viele Gramm sind 0,5 kg?", typ: "zahl", loesung: "500", erklaerung: "0,5 kg × 1000 = 500 g" },
        { frage: "Wie viele Cent sind 3,20 €?", typ: "zahl", loesung: "320", erklaerung: "3,20 € = 320 Cent" },
        { frage: "Wie viele Meter sind 450 cm?", typ: "mc", optionen: ["4,5 m", "45 m", "0,45 m", "450 m"], loesung: "4,5 m", erklaerung: "450 cm : 100 = 4,5 m" },
        { frage: "Der Maßstab einer Karte ist 1:1000. Wie viele cm in Wirklichkeit sind 1 cm auf der Karte?", typ: "zahl", loesung: "1000", erklaerung: "Bei 1:1000 ist 1 cm auf der Karte 1000 cm in Wirklichkeit." },
        { frage: "Der Maßstab ist 1:100. Eine Strecke auf der Karte ist 5 cm lang. Wie lang ist sie in Wirklichkeit (in cm)?", typ: "zahl", loesung: "500", erklaerung: "5 × 100 = 500 cm." },
        { frage: "Der Maßstab ist 1:50. Wie lang ist eine 3-cm-Strecke auf dem Plan in Wirklichkeit?", typ: "mc", optionen: ["1,5 m", "15 m", "150 m", "0,5 m"], loesung: "1,5 m", erklaerung: "3 × 50 = 150 cm, das sind 1,5 m." },
        { frage: "Was bedeutet ein Maßstab von 1:200?", typ: "mc", optionen: ["1 cm auf der Karte = 200 cm in Wirklichkeit", "200 cm auf der Karte = 1 cm in Wirklichkeit", "Die Karte ist 200-mal so groß wie die Wirklichkeit", "Das hat nichts mit Längen zu tun"], loesung: "1 cm auf der Karte = 200 cm in Wirklichkeit", erklaerung: "Bei 1:200 steht die 1 für die Karte, die 200 für die Wirklichkeit." }
      ]
    },
    {
      id: "grundrechenarten",
      titel: "2.1 Grundrechenarten",
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
      id: "schriftliches-rechnen",
      titel: "2.2 Schriftliches Addieren, Subtrahieren & Multiplizieren",
      icon: "✏️",
      intro: "Große Zahlen Schritt für Schritt schriftlich berechnen.",
      lektion: [
        "➕ Schriftliche Addition: Du schreibst die Zahlen stellenrichtig untereinander (Einer unter Einer, Zehner unter Zehner usw.) und addierst spaltenweise von rechts nach links. Ab 10 schreibst du die Einerziffer auf und merkst dir 1 für die nächste Spalte.",
        "➖ Schriftliche Subtraktion: Genauso stellenrichtig untereinanderschreiben. Reicht eine Ziffer oben nicht aus, leihst du dir 1 von der nächsten Spalte.",
        "✖️ Schriftliche Multiplikation: Du multiplizierst die große Zahl zuerst mit der Einerziffer, dann mit der Zehnerziffer (um eine Stelle nach links verschoben), und addierst am Ende alle Teilergebnisse."
      ],
      beispiele: [
        {
          aufgabe: "347 + 258 = ?",
          schritte: [
            "Einer: 7 + 8 = 15, du schreibst die 5 auf und merkst dir 1.",
            "Zehner: 4 + 5 = 9, plus die gemerkte 1 = 10, du schreibst die 0 auf und merkst dir 1.",
            "Hunderter: 3 + 2 = 5, plus die gemerkte 1 = 6."
          ],
          ergebnis: "605"
        },
        {
          aufgabe: "742 - 315 = ?",
          schritte: [
            "Einer: 2 - 5 geht nicht, du leihst dir 1 von den Zehnern: 12 - 5 = 7.",
            "Zehner: die 4 ist jetzt eine 3 (weil geliehen): 3 - 1 = 2.",
            "Hunderter: 7 - 3 = 4."
          ],
          ergebnis: "427"
        },
        {
          aufgabe: "23 × 14 = ?",
          schritte: [
            "Du multiplizierst erst 23 × 4 (Einer von 14): 23 × 4 = 92.",
            "Dann 23 × 10 (Zehner von 14): 23 × 10 = 230.",
            "Beide Teilergebnisse addierst du: 92 + 230 = 322."
          ],
          ergebnis: "322"
        }
      ],
      aufgaben: [
        { frage: "347 + 258 = ?", typ: "zahl", loesung: "605", erklaerung: "347 + 258 = 605" },
        { frage: "742 - 315 = ?", typ: "zahl", loesung: "427", erklaerung: "742 - 315 = 427" },
        { frage: "23 × 14 = ?", typ: "zahl", loesung: "322", erklaerung: "23 × 14 = 322" },
        { frage: "456 + 389 = ?", typ: "zahl", loesung: "845", erklaerung: "456 + 389 = 845" },
        { frage: "800 - 356 = ?", typ: "zahl", loesung: "444", erklaerung: "800 - 356 = 444" },
        { frage: "32 × 21 = ?", typ: "zahl", loesung: "672", erklaerung: "32 × 21 = 672" },
        { frage: "Bei der schriftlichen Addition schreibt man die Zahlen …", typ: "mc", optionen: ["stellenrichtig untereinander", "nebeneinander", "quer", "in einer Reihe"], loesung: "stellenrichtig untereinander", erklaerung: "Einer unter Einer, Zehner unter Zehner usw." },
        { frage: "Wie nennt man es, wenn man sich bei der Subtraktion eine 1 von der nächsten Spalte ausleiht?", typ: "mc", optionen: ["Leihen", "Runden", "Kürzen", "Erweitern"], loesung: "Leihen", erklaerung: "Reicht eine Ziffer nicht aus, leiht man sich 1 von der nächsten Spalte." },
        { frage: "129 + 671 = ?", typ: "zahl", loesung: "800", erklaerung: "129 + 671 = 800" },
        { frage: "45 × 12 = ?", typ: "zahl", loesung: "540", erklaerung: "45 × 12 = 540" },
        { frage: "603 - 248 = ?", typ: "zahl", loesung: "355", erklaerung: "603 - 248 = 355" }
      ]
    },
    {
      id: "schriftliche-division",
      titel: "2.3 Schriftliche Division",
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
      // aktion-Werte, die der Animationsmotor in app.js kennt:
      // "eingang" (Held & Dämon treten auf), "angriff" (Held schlägt zu,
      // HP-Balken tweent runter), "sieg" (Dämon besiegt, Konfetti).
      // zielGruppen speist das "Kind 1..4"-Verteilen-Modell: Es zeigt parallel
      // zur abstrakten Rechnung, wie viel jedes Kind bisher bekommen hat –
      // die konkrete Brücke zum abstrakten Rechenverfahren.
      animation: {
        titel: "Besiege den Zahlen-Dämon: 936 : 4",
        zahlenDaemon: "936",
        zielGruppen: 4,
        szenen: [
          {
            aktion: "eingang",
            text: "Ein Zahlen-Dämon aus 936 versperrt dir den Weg! Stell dir vor: 936 Bonbons werden gerecht auf 4 Kinder verteilt – jedes Kind bekommt gleich viel. Um den Dämon zu besiegen, teilst du ihn Ziffer für Ziffer durch 4.",
            hp: 100
          },
          {
            aktion: "angriff",
            text: "Schritt 1: Nimm die erste Ziffer 9. Wie oft passt 4 in 9? Zweimal! (2 × 4 = 8). Rest: 9 − 8 = 1.",
            rechnung: "9 : 4 = 2, Rest 1",
            ergebnisSoweit: "2",
            hp: 66
          },
          {
            aktion: "angriff",
            text: "Schritt 2: Hol dir die nächste Ziffer (3) dazu: aus dem Rest 1 wird 13. Wie oft passt 4 in 13? Dreimal! (3 × 4 = 12). Rest: 13 − 12 = 1.",
            rechnung: "13 : 4 = 3, Rest 1",
            ergebnisSoweit: "23",
            hp: 33
          },
          {
            aktion: "angriff",
            text: "Schritt 3: Hol dir die letzte Ziffer (6) dazu: aus dem Rest 1 wird 16. Wie oft passt 4 in 16? Viermal! (4 × 4 = 16). Rest: 16 − 16 = 0 — letzter Treffer!",
            rechnung: "16 : 4 = 4, Rest 0",
            ergebnisSoweit: "234",
            hp: 0
          },
          {
            aktion: "sieg",
            text: "🏆 Geschafft! Jedes der 4 Kinder bekommt 234 Bonbons – 936 : 4 = 234, ohne Rest. Du hast den Zahlen-Dämon Schritt für Schritt bezwungen.",
            ergebnisSoweit: "234",
            hp: 0
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
    },
    {
      id: "rechengesetze-teilbarkeit",
      titel: "2.4 Rechengesetze & Teilbarkeit",
      icon: "🔍",
      intro: "Rechentricks, die das Kopfrechnen einfacher machen.",
      lektion: [
        "🔄 Kommutativgesetz: Beim Plus und Mal darf man die Reihenfolge tauschen: 3 + 5 = 5 + 3, 4 × 7 = 7 × 4.",
        "📦 Assoziativgesetz: Beim Plus und Mal darf man anders klammern: (2 + 3) + 4 = 2 + (3 + 4).",
        "🔢 Teilbarkeit durch 2: Eine Zahl ist durch 2 teilbar, wenn die letzte Ziffer 0, 2, 4, 6 oder 8 ist (gerade Zahl).",
        "5️⃣ Teilbarkeit durch 5: Eine Zahl ist durch 5 teilbar, wenn die letzte Ziffer 0 oder 5 ist.",
        "🔟 Teilbarkeit durch 10: Eine Zahl ist durch 10 teilbar, wenn die letzte Ziffer 0 ist.",
        "3️⃣ Teilbarkeit durch 3: Eine Zahl ist durch 3 teilbar, wenn ihre Quersumme (Summe aller Ziffern) durch 3 teilbar ist."
      ],
      beispiele: [
        {
          aufgabe: "Ist 246 durch 3 teilbar?",
          schritte: [
            "Bilde die Quersumme: 2 + 4 + 6 = 12.",
            "Prüfe, ob 12 durch 3 teilbar ist: 12 : 3 = 4.",
            "Da 12 durch 3 teilbar ist, ist auch 246 durch 3 teilbar."
          ],
          ergebnis: "Ja, 246 ist durch 3 teilbar"
        }
      ],
      aufgaben: [
        { frage: "Welches Gesetz erlaubt es, die Reihenfolge beim Plusrechnen zu tauschen (3+5=5+3)?", typ: "mc", optionen: ["Kommutativgesetz", "Assoziativgesetz", "Distributivgesetz", "Punktgesetz"], loesung: "Kommutativgesetz", erklaerung: "Das Kommutativgesetz erlaubt das Vertauschen der Reihenfolge bei Plus und Mal." },
        { frage: "(2+3)+4 ergibt dasselbe wie 2+(3+4). Wie heißt dieses Gesetz?", typ: "mc", optionen: ["Assoziativgesetz", "Kommutativgesetz", "Distributivgesetz", "Rundungsgesetz"], loesung: "Assoziativgesetz", erklaerung: "Das Assoziativgesetz erlaubt anderes Klammern bei Plus und Mal." },
        { frage: "Darf man beim Minusrechnen die Reihenfolge einfach tauschen (5-3 = 3-5)?", typ: "mc", optionen: ["Nein", "Ja"], loesung: "Nein", erklaerung: "Beim Minus und Geteilt gilt das Kommutativgesetz NICHT: 5-3=2, aber 3-5=-2." },
        { frage: "Ist 84 durch 2 teilbar?", typ: "mc", optionen: ["Ja", "Nein"], loesung: "Ja", erklaerung: "84 ist eine gerade Zahl (endet auf 4)." },
        { frage: "Ist 47 durch 2 teilbar?", typ: "mc", optionen: ["Nein", "Ja"], loesung: "Nein", erklaerung: "47 ist eine ungerade Zahl (endet auf 7)." },
        { frage: "Ist 130 durch 5 teilbar?", typ: "mc", optionen: ["Ja", "Nein"], loesung: "Ja", erklaerung: "130 endet auf 0, also ist sie durch 5 teilbar." },
        { frage: "Ist 130 durch 10 teilbar?", typ: "mc", optionen: ["Ja", "Nein"], loesung: "Ja", erklaerung: "130 endet auf 0, also ist sie durch 10 teilbar." },
        { frage: "Ist 246 durch 3 teilbar?", typ: "mc", optionen: ["Ja", "Nein"], loesung: "Ja", erklaerung: "Quersumme 2+4+6=12, und 12 ist durch 3 teilbar." },
        { frage: "Ist 100 durch 3 teilbar?", typ: "mc", optionen: ["Nein", "Ja"], loesung: "Nein", erklaerung: "Quersumme 1+0+0=1, und 1 ist nicht durch 3 teilbar." },
        { frage: "Wie prüft man, ob eine Zahl durch 3 teilbar ist?", typ: "mc", optionen: ["Die Quersumme muss durch 3 teilbar sein", "Die letzte Ziffer muss 3 sein", "Die Zahl muss gerade sein", "Das geht nicht"], loesung: "Die Quersumme muss durch 3 teilbar sein", erklaerung: "Man addiert alle Ziffern und prüft, ob diese Summe durch 3 teilbar ist." },
        { frage: "Welche Ziffer muss eine Zahl am Ende haben, damit sie durch 10 teilbar ist?", typ: "zahl", loesung: "0", erklaerung: "Nur Zahlen, die auf 0 enden, sind durch 10 teilbar." }
      ]
    },
    {
      id: "senkrecht-parallel-winkel",
      titel: "3.1 Senkrecht, Parallel & Winkel",
      icon: "📐",
      intro: "Kapitel 3: Wie Geraden zueinander stehen und was ein Winkel ist.",
      lektion: [
        "📐 Zwei Geraden, die sich in einem rechten Winkel (90°) schneiden, heißen senkrecht (⊥) zueinander.",
        "➖ Zwei Geraden, die sich nie schneiden und immer den gleichen Abstand haben, heißen parallel (∥) zueinander.",
        "📏 Ein Winkel entsteht, wenn sich zwei Linien treffen. Man misst ihn in Grad (°).",
        "🔲 Ein rechter Winkel hat genau 90°. Ein spitzer Winkel ist kleiner, ein stumpfer Winkel größer als 90°. Ein gestreckter Winkel ist eine gerade Linie: 180°."
      ],
      aufgaben: [
        { frage: "Wie nennt man zwei Geraden, die sich im rechten Winkel schneiden?", typ: "mc", optionen: ["senkrecht", "parallel", "identisch", "gebogen"], loesung: "senkrecht", erklaerung: "Senkrechte Geraden bilden einen 90°-Winkel." },
        { frage: "Wie nennt man zwei Geraden, die sich nie schneiden?", typ: "mc", optionen: ["parallel", "senkrecht", "schräg", "identisch"], loesung: "parallel", erklaerung: "Parallele Geraden haben überall den gleichen Abstand." },
        { frage: "Welches Symbol steht für 'senkrecht'?", typ: "mc", optionen: ["⊥", "∥", "°", "="], loesung: "⊥", erklaerung: "Das Symbol ⊥ bedeutet 'senkrecht zu'." },
        { frage: "Welches Symbol steht für 'parallel'?", typ: "mc", optionen: ["∥", "⊥", "°", "≠"], loesung: "∥", erklaerung: "Das Symbol ∥ bedeutet 'parallel zu'." },
        { frage: "Wie nennt man einen Winkel, der genau 90° hat?", typ: "mc", optionen: ["rechter Winkel", "spitzer Winkel", "stumpfer Winkel", "gestreckter Winkel"], loesung: "rechter Winkel", erklaerung: "Ein Winkel mit genau 90° heißt rechter Winkel." },
        { frage: "Wie nennt man einen Winkel, der kleiner als 90° ist?", typ: "mc", optionen: ["rechter Winkel", "spitzer Winkel", "stumpfer Winkel", "gestreckter Winkel"], loesung: "spitzer Winkel", erklaerung: "Ein Winkel unter 90° heißt spitzer Winkel." },
        { frage: "Wie nennt man einen Winkel, der größer als 90° und kleiner als 180° ist?", typ: "mc", optionen: ["rechter Winkel", "spitzer Winkel", "stumpfer Winkel", "gestreckter Winkel"], loesung: "stumpfer Winkel", erklaerung: "Ein Winkel zwischen 90° und 180° heißt stumpfer Winkel." },
        { frage: "Wie viele Grad hat ein gestreckter Winkel?", typ: "zahl", loesung: "180", erklaerung: "Ein gestreckter Winkel ist eine gerade Linie und hat 180°." },
        { frage: "Wie nennt man eine Linie, die zwei Punkte auf dem kürzesten Weg verbindet?", typ: "mc", optionen: ["Strecke", "Winkel", "Fläche", "Kreis"], loesung: "Strecke", erklaerung: "Eine Strecke ist die kürzeste Verbindung zwischen zwei Punkten." },
        { frage: "Wie viele rechte Winkel hat ein Quadrat?", typ: "zahl", loesung: "4", erklaerung: "Ein Quadrat hat 4 rechte Winkel (je 90°)." }
      ]
    },
    {
      id: "koordinatensystem",
      titel: "3.2 Koordinatensystem",
      icon: "🎯",
      intro: "Punkte mit zwei Zahlen genau angeben.",
      lektion: [
        "📍 Ein Koordinatensystem hat zwei Achsen: die waagerechte x-Achse und die senkrechte y-Achse.",
        "🎯 Ein Punkt wird mit zwei Zahlen angegeben: (x-Wert | y-Wert), z. B. (3|2) bedeutet 3 nach rechts, dann 2 nach oben.",
        "0️⃣ Der Punkt, an dem sich beide Achsen treffen, heißt Ursprung: (0|0)."
      ],
      beispiele: [
        {
          aufgabe: "Wie findest du den Punkt (4|3) im Koordinatensystem?",
          schritte: [
            "Starte im Ursprung (0|0).",
            "Gehe zuerst 4 Schritte nach rechts (x-Wert).",
            "Gehe von dort 3 Schritte nach oben (y-Wert)."
          ],
          ergebnis: "Der Punkt (4|3)"
        }
      ],
      aufgaben: [
        { frage: "Wie heißt die waagerechte Achse im Koordinatensystem?", typ: "mc", optionen: ["x-Achse", "y-Achse", "z-Achse", "Mittelachse"], loesung: "x-Achse", erklaerung: "Die waagerechte Achse heißt x-Achse." },
        { frage: "Wie heißt die senkrechte Achse im Koordinatensystem?", typ: "mc", optionen: ["y-Achse", "x-Achse", "z-Achse", "Mittelachse"], loesung: "y-Achse", erklaerung: "Die senkrechte Achse heißt y-Achse." },
        { frage: "Wie heißt der Punkt (0|0)?", typ: "mc", optionen: ["Ursprung", "Nullpunkt-Ecke", "Startpunkt", "Mittelpunkt"], loesung: "Ursprung", erklaerung: "Der Treffpunkt beider Achsen heißt Ursprung." },
        { frage: "Beim Punkt (3|2): Wie viele Schritte gehst du zuerst nach rechts?", typ: "zahl", loesung: "3", erklaerung: "Der erste Wert (x-Wert) ist immer die Schritte nach rechts." },
        { frage: "Beim Punkt (3|2): Wie viele Schritte gehst du dann nach oben?", typ: "zahl", loesung: "2", erklaerung: "Der zweite Wert (y-Wert) ist die Schritte nach oben." },
        { frage: "Welche Zahl steht beim Punkt (5|7) zuerst (x-Wert)?", typ: "zahl", loesung: "5", erklaerung: "Der x-Wert steht immer zuerst, vor dem Strich." },
        { frage: "Was gibst du bei einem Punkt im Koordinatensystem immer zuerst an?", typ: "mc", optionen: ["den x-Wert", "den y-Wert", "die Farbe", "den Namen"], loesung: "den x-Wert", erklaerung: "Man schreibt immer erst x-Wert, dann y-Wert: (x|y)." },
        { frage: "Beim Punkt (0|5): Wie weit gehst du nach rechts?", typ: "zahl", loesung: "0", erklaerung: "x-Wert 0 bedeutet: kein Schritt nach rechts, du bleibst auf der y-Achse." }
      ]
    },
    {
      id: "symmetrie",
      titel: "3.3 Symmetrie",
      icon: "🪞",
      intro: "Achsensymmetrie und Punktsymmetrie erkennen.",
      lektion: [
        "🪞 Eine Figur ist achsensymmetrisch, wenn man eine Linie (Spiegelachse) einzeichnen kann, sodass beide Hälften spiegelgleich sind.",
        "🔄 Eine Figur ist punktsymmetrisch, wenn man sie um einen Punkt (Symmetriezentrum) um 180° drehen kann und sie danach genau gleich aussieht.",
        "❤️ Ein Herz ist achsensymmetrisch. Manche Figuren sind punktsymmetrisch, manche beides, manche keins von beidem."
      ],
      aufgaben: [
        { frage: "Wie heißt die Linie, an der eine achsensymmetrische Figur gespiegelt wird?", typ: "mc", optionen: ["Spiegelachse", "Symmetriezentrum", "Diagonale", "Mittellinie"], loesung: "Spiegelachse", erklaerung: "Die Spiegelachse teilt die Figur in zwei spiegelgleiche Hälften." },
        { frage: "Um wie viel Grad dreht man eine Figur bei Punktsymmetrie, damit sie wieder gleich aussieht?", typ: "zahl", loesung: "180", erklaerung: "Bei Punktsymmetrie sieht die Figur nach einer 180°-Drehung genauso aus." },
        { frage: "Ist ein Kreis achsensymmetrisch?", typ: "mc", optionen: ["Ja", "Nein"], loesung: "Ja", erklaerung: "Ein Kreis hat sogar unendlich viele Spiegelachsen." },
        { frage: "Ist ein Quadrat achsensymmetrisch?", typ: "mc", optionen: ["Ja", "Nein"], loesung: "Ja", erklaerung: "Ein Quadrat hat mehrere Spiegelachsen." },
        { frage: "Wie heißt der Punkt, um den bei Punktsymmetrie gedreht wird?", typ: "mc", optionen: ["Symmetriezentrum", "Spiegelachse", "Ursprung", "Mittelpunkt der Kante"], loesung: "Symmetriezentrum", erklaerung: "Der Drehpunkt bei Punktsymmetrie heißt Symmetriezentrum." },
        { frage: "Welcher Großbuchstabe ist achsensymmetrisch (senkrechte Spiegelachse)?", typ: "mc", optionen: ["A", "F", "G", "P"], loesung: "A", erklaerung: "Der Buchstabe A hat eine senkrechte Spiegelachse in der Mitte." },
        { frage: "Wie viele Spiegelachsen kann ein gleichseitiges Dreieck haben?", typ: "zahl", loesung: "3", erklaerung: "Ein gleichseitiges Dreieck hat 3 Spiegelachsen." }
      ]
    },
    {
      id: "koerper-netze",
      titel: "3.4 Körper & Netze",
      icon: "📦",
      intro: "Quader, Würfel, Körpernetze und Schrägbilder.",
      lektion: [
        "📦 Ein Körpernetz ist die 'aufgeklappte' Oberfläche eines Körpers – faltet man es zusammen, entsteht der 3D-Körper.",
        "🧊 Ein Quader hat 6 rechteckige Flächen, 12 Kanten und 8 Ecken.",
        "🎲 Ein Würfel ist ein besonderer Quader, bei dem alle 6 Flächen gleich große Quadrate sind.",
        "✏️ Ein Schrägbild zeichnet einen 3D-Körper auf einem flachen Blatt, sodass er räumlich aussieht."
      ],
      aufgaben: [
        { frage: "Wie viele Flächen hat ein Quader?", typ: "zahl", loesung: "6", erklaerung: "Ein Quader hat 6 rechteckige Flächen." },
        { frage: "Wie viele Kanten hat ein Quader?", typ: "zahl", loesung: "12", erklaerung: "Ein Quader hat 12 Kanten." },
        { frage: "Wie viele Ecken hat ein Quader?", typ: "zahl", loesung: "8", erklaerung: "Ein Quader hat 8 Ecken." },
        { frage: "Was ist ein Würfel?", typ: "mc", optionen: ["Ein Quader, bei dem alle Flächen gleich große Quadrate sind", "Eine runde Kugel", "Ein Körper ohne Ecken", "Eine flache Figur"], loesung: "Ein Quader, bei dem alle Flächen gleich große Quadrate sind", erklaerung: "Ein Würfel ist ein besonderer Quader mit lauter gleichen Quadraten." },
        { frage: "Wie nennt man die aufgeklappte, flache Form eines Körpers?", typ: "mc", optionen: ["Körpernetz", "Schrägbild", "Koordinatensystem", "Diagramm"], loesung: "Körpernetz", erklaerung: "Ein Körpernetz zeigt alle Flächen ausgebreitet auf einer Ebene." },
        { frage: "Wie nennt man eine räumliche Zeichnung eines Körpers auf einem flachen Blatt?", typ: "mc", optionen: ["Schrägbild", "Netz", "Grundriss", "Diagramm"], loesung: "Schrägbild", erklaerung: "Ein Schrägbild lässt den Körper räumlich wirken." },
        { frage: "Welche Form haben die Flächen eines Würfels?", typ: "mc", optionen: ["Quadrate", "Rechtecke", "Dreiecke", "Kreise"], loesung: "Quadrate", erklaerung: "Alle 6 Flächen eines Würfels sind gleich große Quadrate." },
        { frage: "Wie viele Flächen hat ein Würfel?", typ: "zahl", loesung: "6", erklaerung: "Ein Würfel hat wie jeder Quader 6 Flächen." }
      ]
    },
    {
      id: "flaecheninhalt-umfang",
      titel: "4.1 Flächeninhalt und Umfang",
      icon: "🟦",
      intro: "Kapitel 4: Flächen vergleichen und die Fläche und den Umfang von Rechtecken berechnen.",
      lektion: [
        "📐 Flächen kann man vergleichen, indem man schaut, wie viele gleiche Kästchen (z. B. 1-cm²-Quadrate) hineinpassen.",
        "🔲 Der Umfang ist die Länge, wenn du einmal außen um eine Figur herumgehst.",
        "🟦 Die Fläche ist der Platz innerhalb einer Figur. Bei einem Rechteck gilt: Fläche = Länge × Breite.",
        "📏 Flächeneinheiten: 1 m² = 10.000 cm² (weil 1 m = 100 cm, und 100 × 100 = 10.000)."
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
        { frage: "Wie viele Ecken hat ein Rechteck?", typ: "zahl", loesung: "4", erklaerung: "Ein Rechteck hat 4 Ecken und 4 rechte Winkel." },
        { frage: "Ein Rechteck ist 5 cm lang und 3 cm breit. Wie groß ist der Umfang?", typ: "zahl", loesung: "16", erklaerung: "Umfang = 2 × (Länge + Breite) = 2 × (5+3) = 16 cm." },
        { frage: "Ein Rechteck ist 4 cm lang und 3 cm breit. Wie groß ist die Fläche?", typ: "zahl", loesung: "12", erklaerung: "Fläche = Länge × Breite = 4 × 3 = 12 cm²." },
        { frage: "Ein Quadrat hat die Seitenlänge 5 cm. Wie groß ist der Umfang?", typ: "zahl", loesung: "20", erklaerung: "Umfang eines Quadrats = 4 × Seitenlänge = 4 × 5 = 20 cm." },
        { frage: "Ein Quadrat hat die Seitenlänge 6 cm. Wie groß ist die Fläche?", typ: "zahl", loesung: "36", erklaerung: "Fläche eines Quadrats = Seite × Seite = 6 × 6 = 36 cm²." },
        { frage: "Ein Rechteck ist 8 cm lang und 2 cm breit. Wie groß ist der Umfang?", typ: "zahl", loesung: "20", erklaerung: "Umfang = 2 × (8+2) = 2 × 10 = 20 cm." },
        { frage: "Ein Rechteck ist 7 cm lang und 4 cm breit. Wie groß ist die Fläche?", typ: "zahl", loesung: "28", erklaerung: "Fläche = 7 × 4 = 28 cm²." },
        { frage: "Wie viele cm² sind 1 m²?", typ: "zahl", loesung: "10000", erklaerung: "1 m² = 100 cm × 100 cm = 10.000 cm²." },
        { frage: "Wie viele mm² sind 1 cm²?", typ: "zahl", loesung: "100", erklaerung: "1 cm² = 10 mm × 10 mm = 100 mm²." },
        { frage: "2 m² sind wie viele cm²?", typ: "zahl", loesung: "20000", erklaerung: "2 × 10.000 cm² = 20.000 cm²." },
        { frage: "Welche Fläche ist größer: 1 m² oder 5000 cm²?", typ: "mc", optionen: ["1 m²", "5000 cm²", "gleich groß", "kann man nicht sagen"], loesung: "1 m²", erklaerung: "1 m² = 10.000 cm², das ist mehr als 5000 cm²." }
      ]
    },
    {
      id: "volumen-oberflaeche",
      titel: "5.1 Volumen und Oberflächeninhalt",
      icon: "🧊",
      intro: "Kapitel 5: Wie viel in einen Quader passt und wie groß seine Oberfläche ist.",
      lektion: [
        "📦 Das Volumen eines Quaders berechnet man mit: Volumen = Länge × Breite × Höhe.",
        "🧊 Volumeneinheiten: 1 dm³ = 1 Liter. 1 m³ = 1000 dm³ = 1000 Liter.",
        "🎁 Der Oberflächeninhalt eines Quaders ist die Summe der Flächeninhalte aller 6 Rechteckflächen."
      ],
      beispiele: [
        {
          aufgabe: "Ein Quader ist 4 cm lang, 3 cm breit und 2 cm hoch. Wie groß ist das Volumen?",
          schritte: [
            "Formel: Volumen = Länge × Breite × Höhe.",
            "Setze die Zahlen ein: 4 × 3 × 2.",
            "4 × 3 = 12, dann 12 × 2 = 24."
          ],
          ergebnis: "24 cm³"
        }
      ],
      aufgaben: [
        { frage: "Wie berechnet man das Volumen eines Quaders?", typ: "mc", optionen: ["Länge × Breite × Höhe", "Länge + Breite + Höhe", "Länge × Breite", "2 × (Länge+Breite)"], loesung: "Länge × Breite × Höhe", erklaerung: "Das Volumen eines Quaders ist Länge mal Breite mal Höhe." },
        { frage: "Ein Quader ist 4 cm lang, 3 cm breit, 2 cm hoch. Wie groß ist das Volumen?", typ: "zahl", loesung: "24", erklaerung: "4 × 3 × 2 = 24 cm³." },
        { frage: "Ein Würfel hat die Kantenlänge 3 cm. Wie groß ist das Volumen?", typ: "zahl", loesung: "27", erklaerung: "3 × 3 × 3 = 27 cm³." },
        { frage: "Wie viele Liter sind 1 m³?", typ: "zahl", loesung: "1000", erklaerung: "1 m³ = 1000 Liter." },
        { frage: "Wie viele dm³ sind 1 m³?", typ: "zahl", loesung: "1000", erklaerung: "1 m³ = 1000 dm³." },
        { frage: "Wie viele Rechteckflächen eines Quaders addiert man für den Oberflächeninhalt?", typ: "zahl", loesung: "6", erklaerung: "Ein Quader hat 6 Flächen, deren Inhalte man zusammenzählt." },
        { frage: "Ein Quader ist 5 cm lang, 2 cm breit, 3 cm hoch. Wie groß ist das Volumen?", typ: "zahl", loesung: "30", erklaerung: "5 × 2 × 3 = 30 cm³." },
        { frage: "1 dm³ entspricht wie vielen Litern?", typ: "zahl", loesung: "1", erklaerung: "1 dm³ = 1 Liter." }
      ]
    },
    {
      id: "brueche",
      titel: "6.1 Brüche verstehen",
      icon: "🍕",
      intro: "Kapitel 6: Was ein Bruch ist und wie man ihn erweitert, kürzt und vergleicht.",
      lektion: [
        "🍕 Ein Bruch zeigt, wie viele Teile von einem Ganzen gemeint sind, zum Beispiel 1/4 = ein Viertel.",
        "⬆️ Die obere Zahl heißt Zähler – sie zeigt, wie viele Teile gemeint sind.",
        "⬇️ Die untere Zahl heißt Nenner – sie zeigt, in wie viele Teile das Ganze geteilt wurde.",
        "📊 Je größer der Nenner, desto kleiner ist ein einzelnes Teil (1/8 ist kleiner als 1/2).",
        "🔁 Erweitern heißt: Zähler und Nenner mit der gleichen Zahl multiplizieren (1/2 = 2/4). Kürzen heißt: beide durch die gleiche Zahl teilen (2/4 = 1/2)."
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
        { frage: "Ein Kuchen hat 8 Stücke. Du isst 3 Stücke. Welcher Bruch beschreibt das?", typ: "mc", optionen: ["3/8", "8/3", "3/5", "5/8"], loesung: "3/8", erklaerung: "3 von 8 Stücken sind 3/8." },
        { frage: "Was ist 1/2 als Bruch mit Nenner 4 (erweitert)?", typ: "mc", optionen: ["2/4", "1/4", "4/2", "3/4"], loesung: "2/4", erklaerung: "1/2 = 2/4, weil Zähler und Nenner beide mal 2 genommen werden." },
        { frage: "Was ist größer: 3/4 oder 1/2?", typ: "mc", optionen: ["3/4", "1/2", "gleich groß", "kann man nicht sagen"], loesung: "3/4", erklaerung: "3/4 ist mehr als die Hälfte (2/4), also größer als 1/2." },
        { frage: "Was ist 2/4 gekürzt?", typ: "mc", optionen: ["1/2", "1/4", "2/2", "4/2"], loesung: "1/2", erklaerung: "2/4 kann man kürzen: Zähler und Nenner durch 2 teilen ergibt 1/2." },
        { frage: "Was ist 3/6 gekürzt?", typ: "mc", optionen: ["1/2", "1/3", "3/3", "6/3"], loesung: "1/2", erklaerung: "3/6 kürzt man durch 3: 3:3 / 6:3 = 1/2." },
        { frage: "Was ist größer: 1/3 oder 1/5?", typ: "mc", optionen: ["1/3", "1/5", "gleich groß", "kann man nicht sagen"], loesung: "1/3", erklaerung: "Bei gleichem Zähler ist der Bruch mit dem kleineren Nenner größer: 1/3 > 1/5." }
      ]
    },
    {
      id: "brueche-quotient",
      titel: "6.2 Brüche als Quotient & Größenanteile",
      icon: "➗",
      intro: "Brüche als Geteilt-Aufgabe verstehen und Anteile von Größen berechnen.",
      lektion: [
        "➗ Ein Bruch ist auch eine Divisionsaufgabe: 3/4 bedeutet dasselbe wie 3 : 4.",
        "🧮 Einen Größenanteil berechnest du so: Teile das Ganze durch den Nenner, dann multipliziere mit dem Zähler. Beispiel: 3/4 von 20 = 20 : 4 × 3 = 15."
      ],
      beispiele: [
        {
          aufgabe: "Was ist 3/4 von 20?",
          schritte: [
            "Teile 20 durch den Nenner 4: 20 : 4 = 5.",
            "Multipliziere mit dem Zähler 3: 5 × 3 = 15."
          ],
          ergebnis: "15"
        }
      ],
      aufgaben: [
        { frage: "3/4 ist dasselbe wie welche Divisionsaufgabe?", typ: "mc", optionen: ["3 : 4", "4 : 3", "3 × 4", "4 - 3"], loesung: "3 : 4", erklaerung: "Ein Bruch a/b bedeutet immer a : b." },
        { frage: "Was ist 1/2 von 20?", typ: "zahl", loesung: "10", erklaerung: "20 : 2 = 10." },
        { frage: "Was ist 3/4 von 20?", typ: "zahl", loesung: "15", erklaerung: "20 : 4 = 5, dann 5 × 3 = 15." },
        { frage: "Was ist 2/5 von 25?", typ: "zahl", loesung: "10", erklaerung: "25 : 5 = 5, dann 5 × 2 = 10." },
        { frage: "Was ist 1/3 von 30?", typ: "zahl", loesung: "10", erklaerung: "30 : 3 = 10." },
        { frage: "Was ist 3/10 von 100?", typ: "zahl", loesung: "30", erklaerung: "100 : 10 = 10, dann 10 × 3 = 30." },
        { frage: "Was ist 1/4 von 40?", typ: "zahl", loesung: "10", erklaerung: "40 : 4 = 10." },
        { frage: "Was ist 2/3 von 30?", typ: "zahl", loesung: "20", erklaerung: "30 : 3 = 10, dann 10 × 2 = 20." }
      ]
    },
    {
      id: "dezimalzahlen",
      titel: "6.3 Dezimalzahlen",
      icon: "🔢",
      intro: "Brüche als Kommazahlen schreiben.",
      lektion: [
        "🔢 Eine Dezimalzahl hat einen Komma-Teil: Bei 3,45 ist 3 der ganze Teil, 45 der Nachkomma-Teil.",
        "📍 Nach dem Komma stehen die Stellenwerte Zehntel, Hundertstel, Tausendstel.",
        "🍕 0,5 ist dasselbe wie 1/2. 0,25 ist dasselbe wie 1/4.",
        "🔁 Eine Dezimalzahl heißt abbrechend, wenn sie irgendwann endet (0,5). Sie heißt periodisch, wenn sich Ziffern nach dem Komma unendlich wiederholen (1/3 = 0,333…)."
      ],
      beispiele: [
        {
          aufgabe: "Schreibe 3/10 als Dezimalzahl.",
          schritte: [
            "3/10 bedeutet 3 geteilt durch 10.",
            "3 : 10 = 0,3."
          ],
          ergebnis: "0,3"
        }
      ],
      aufgaben: [
        { frage: "Was ist 1/2 als Dezimalzahl?", typ: "mc", optionen: ["0,5", "0,2", "0,25", "1,2"], loesung: "0,5", erklaerung: "1 : 2 = 0,5." },
        { frage: "Was ist 1/4 als Dezimalzahl?", typ: "mc", optionen: ["0,25", "0,4", "0,5", "0,14"], loesung: "0,25", erklaerung: "1 : 4 = 0,25." },
        { frage: "Was ist 3/10 als Dezimalzahl?", typ: "mc", optionen: ["0,3", "0,03", "3,0", "0,13"], loesung: "0,3", erklaerung: "3 : 10 = 0,3." },
        { frage: "Welcher Teil einer Dezimalzahl steht direkt nach dem Komma?", typ: "mc", optionen: ["Zehntel", "Hundertstel", "Tausendstel", "Einer"], loesung: "Zehntel", erklaerung: "Die erste Stelle nach dem Komma sind die Zehntel." },
        { frage: "Ist 0,5 eine abbrechende oder periodische Dezimalzahl?", typ: "mc", optionen: ["abbrechend", "periodisch", "weder noch", "beides"], loesung: "abbrechend", erklaerung: "0,5 endet nach einer Stelle, also ist sie abbrechend." },
        { frage: "1/3 als Dezimalzahl ist 0,333… Wie nennt man so eine Dezimalzahl?", typ: "mc", optionen: ["periodisch", "abbrechend", "gerundet", "negativ"], loesung: "periodisch", erklaerung: "Weil sich die 3 unendlich wiederholt, ist die Zahl periodisch." },
        { frage: "Was ist größer: 0,4 oder 0,25?", typ: "mc", optionen: ["0,4", "0,25", "gleich groß", "kann man nicht sagen"], loesung: "0,4", erklaerung: "0,4 = 0,40, und 40 Hundertstel sind mehr als 25 Hundertstel." },
        { frage: "Was ist 0,5 + 0,25?", typ: "mc", optionen: ["0,75", "0,7", "0,8", "1,0"], loesung: "0,75", erklaerung: "0,5 + 0,25 = 0,75." }
      ]
    }
  ]
};
