// Englisch – Klasse 5 (Gymnasium Niedersachsen)
window.LERNDATA = window.LERNDATA || {};
window.LERNDATA.englisch = {
  id: "englisch",
  name: "Englisch",
  icon: "🇬🇧",
  farbe: "#DC2626",
  themen: [
    {
      id: "greetings",
      titel: "Greetings & Vorstellen",
      icon: "👋",
      intro: "Sich auf Englisch begrüßen und vorstellen.",
      lektion: [
        "👋 'Hello!' oder 'Hi!' heißt Hallo. 'Goodbye!' oder 'Bye!' heißt Tschüss.",
        "🙋 'My name is ...' heißt 'Ich heiße ...'. 'What's your name?' heißt 'Wie heißt du?'",
        "😊 'How are you?' heißt 'Wie geht es dir?' – Antwort: 'I'm fine, thanks!' = 'Mir geht's gut, danke!'",
        "🌍 'I'm from Germany.' heißt 'Ich komme aus Deutschland.'"
      ],
      aufgaben: [
        { frage: "Was heißt 'Hello' auf Deutsch?", typ: "mc", optionen: ["Hallo", "Tschüss", "Danke", "Bitte"], loesung: "Hallo", erklaerung: "'Hello' ist die englische Begrüßung – auf Deutsch 'Hallo'." },
        { frage: "Was heißt 'Goodbye' auf Deutsch?", typ: "mc", optionen: ["Tschüss", "Hallo", "Ja", "Nein"], loesung: "Tschüss", erklaerung: "'Goodbye' heißt 'Tschüss' oder 'Auf Wiedersehen'." },
        { frage: "Wie sagt man 'Ich heiße Tom' auf Englisch?", typ: "mc", optionen: ["My name is Tom", "I am from Tom", "Tom is my", "Name Tom is"], loesung: "My name is Tom", erklaerung: "'My name is ...' heißt 'Ich heiße ...'." },
        { frage: "Was bedeutet 'How are you?'", typ: "mc", optionen: ["Wie geht es dir?", "Wie heißt du?", "Wo wohnst du?", "Wie alt bist du?"], loesung: "Wie geht es dir?", erklaerung: "'How are you?' fragt danach, wie es jemandem geht." },
        { frage: "Wie antwortet man freundlich auf 'How are you?'", typ: "mc", optionen: ["I'm fine, thanks!", "My name is Anna", "Goodbye!", "I am ten"], loesung: "I'm fine, thanks!", erklaerung: "'I'm fine, thanks!' heißt 'Mir geht's gut, danke!'" },
        { frage: "Was heißt 'Wie heißt du?' auf Englisch?", typ: "mc", optionen: ["What's your name?", "How old are you?", "Where are you from?", "How are you?"], loesung: "What's your name?", erklaerung: "'What's your name?' fragt nach dem Namen." },
        { frage: "Was heißt 'Ich komme aus Deutschland' auf Englisch?", typ: "mc", optionen: ["I'm from Germany", "I am Germany", "Germany is me", "I from Germany am"], loesung: "I'm from Germany", erklaerung: "'I'm from ...' heißt 'Ich komme aus ...'." },
        { frage: "Übersetze: 'good morning' auf Deutsch.", typ: "mc", optionen: ["Guten Morgen", "Gute Nacht", "Guten Tag", "Guten Abend"], loesung: "Guten Morgen", erklaerung: "'Good morning' heißt 'Guten Morgen'." },
        { frage: "Übersetze: 'good night' auf Deutsch.", typ: "mc", optionen: ["Gute Nacht", "Guten Morgen", "Guten Tag", "Hallo"], loesung: "Gute Nacht", erklaerung: "'Good night' heißt 'Gute Nacht'." },
        { frage: "Wie sagt man 'Bitte' auf Englisch?", typ: "mc", optionen: ["Please", "Thanks", "Sorry", "Excuse me"], loesung: "Please", erklaerung: "'Please' heißt 'Bitte'." },
        { frage: "Wie sagt man 'Danke' auf Englisch?", typ: "mc", optionen: ["Thank you", "Please", "Sorry", "Hello"], loesung: "Thank you", erklaerung: "'Thank you' heißt 'Danke'." },
        { frage: "Wie sagt man 'Entschuldigung' auf Englisch?", typ: "mc", optionen: ["Sorry", "Please", "Thanks", "Bye"], loesung: "Sorry", erklaerung: "'Sorry' heißt 'Entschuldigung' oder 'Tut mir leid'." }
      ]
    },
    {
      id: "numbers-colours",
      titel: "Numbers & Colours",
      icon: "🔢",
      intro: "Zahlen und Farben auf Englisch.",
      lektion: [
        "🔢 one, two, three, four, five, six, seven, eight, nine, ten – die Zahlen 1 bis 10.",
        "🎨 red, blue, green, yellow, black, white – wichtige Farben.",
        "❓ 'How old are you?' heißt 'Wie alt bist du?' – Antwort: 'I am eleven.' = 'Ich bin elf.'"
      ],
      aufgaben: [
        { frage: "Was heißt 'three' auf Deutsch?", typ: "zahl", loesung: "drei", erklaerung: "'three' heißt 'drei'." },
        { frage: "Was heißt 'seven' auf Deutsch?", typ: "zahl", loesung: "sieben", erklaerung: "'seven' heißt 'sieben'." },
        { frage: "Wie heißt die Zahl 10 auf Englisch?", typ: "text", loesung: "ten", erklaerung: "10 heißt auf Englisch 'ten'." },
        { frage: "Wie heißt die Zahl 5 auf Englisch?", typ: "text", loesung: "five", erklaerung: "5 heißt auf Englisch 'five'." },
        { frage: "Wie heißt die Zahl 8 auf Englisch?", typ: "text", loesung: "eight", erklaerung: "8 heißt auf Englisch 'eight'." },
        { frage: "Was heißt 'red' auf Deutsch?", typ: "mc", optionen: ["rot", "blau", "grün", "gelb"], loesung: "rot", erklaerung: "'red' heißt 'rot'." },
        { frage: "Was heißt 'blue' auf Deutsch?", typ: "mc", optionen: ["blau", "rot", "grün", "schwarz"], loesung: "blau", erklaerung: "'blue' heißt 'blau'." },
        { frage: "Was heißt 'green' auf Deutsch?", typ: "mc", optionen: ["grün", "gelb", "weiß", "rot"], loesung: "grün", erklaerung: "'green' heißt 'grün'." },
        { frage: "Wie sagt man 'gelb' auf Englisch?", typ: "text", loesung: "yellow", erklaerung: "'gelb' heißt 'yellow'." },
        { frage: "Wie sagt man 'schwarz' auf Englisch?", typ: "text", loesung: "black", erklaerung: "'schwarz' heißt 'black'." },
        { frage: "Was heißt 'How old are you?' auf Deutsch?", typ: "mc", optionen: ["Wie alt bist du?", "Wie heißt du?", "Wo wohnst du?", "Wie geht es dir?"], loesung: "Wie alt bist du?", erklaerung: "'How old are you?' fragt nach dem Alter." },
        { frage: "Wie antwortet man auf Englisch, wenn man 11 Jahre alt ist?", typ: "mc", optionen: ["I am eleven.", "I am ten.", "I am twelve.", "I am nine."], loesung: "I am eleven.", erklaerung: "'eleven' ist die Zahl 11." }
      ]
    },
    {
      id: "family-pets",
      titel: "Family & Pets",
      icon: "🐾",
      intro: "Wörter für Familie und Tiere lernen.",
      lektion: [
        "👨‍👩‍👧 mother, father, sister, brother, grandmother, grandfather – die Familie.",
        "🐶 dog, cat, bird, fish, rabbit, horse – Haustiere.",
        "💬 'I have got a dog.' heißt 'Ich habe einen Hund.'"
      ],
      aufgaben: [
        { frage: "Was heißt 'mother' auf Deutsch?", typ: "mc", optionen: ["Mutter", "Vater", "Schwester", "Bruder"], loesung: "Mutter", erklaerung: "'mother' heißt 'Mutter'." },
        { frage: "Was heißt 'father' auf Deutsch?", typ: "mc", optionen: ["Vater", "Mutter", "Bruder", "Schwester"], loesung: "Vater", erklaerung: "'father' heißt 'Vater'." },
        { frage: "Was heißt 'sister' auf Deutsch?", typ: "mc", optionen: ["Schwester", "Bruder", "Mutter", "Oma"], loesung: "Schwester", erklaerung: "'sister' heißt 'Schwester'." },
        { frage: "Wie sagt man 'Bruder' auf Englisch?", typ: "text", loesung: "brother", erklaerung: "'Bruder' heißt 'brother'." },
        { frage: "Wie sagt man 'Großmutter' auf Englisch?", typ: "text", loesung: "grandmother", erklaerung: "'Großmutter' heißt 'grandmother'." },
        { frage: "Was heißt 'dog' auf Deutsch?", typ: "mc", optionen: ["Hund", "Katze", "Vogel", "Fisch"], loesung: "Hund", erklaerung: "'dog' heißt 'Hund'." },
        { frage: "Was heißt 'cat' auf Deutsch?", typ: "mc", optionen: ["Katze", "Hund", "Pferd", "Kaninchen"], loesung: "Katze", erklaerung: "'cat' heißt 'Katze'." },
        { frage: "Wie sagt man 'Vogel' auf Englisch?", typ: "text", loesung: "bird", erklaerung: "'Vogel' heißt 'bird'." },
        { frage: "Wie sagt man 'Pferd' auf Englisch?", typ: "text", loesung: "horse", erklaerung: "'Pferd' heißt 'horse'." },
        { frage: "Was heißt 'I have got a dog.' auf Deutsch?", typ: "mc", optionen: ["Ich habe einen Hund.", "Ich mag Hunde.", "Ich sehe einen Hund.", "Ich hatte einen Hund."], loesung: "Ich habe einen Hund.", erklaerung: "'I have got ...' heißt 'Ich habe ...'." },
        { frage: "Wie sagt man 'Kaninchen' auf Englisch?", typ: "text", loesung: "rabbit", erklaerung: "'Kaninchen' heißt 'rabbit'." }
      ]
    },
    {
      id: "to-be-to-have",
      titel: "'to be' & 'to have got'",
      icon: "🧩",
      intro: "Die wichtigsten Formen von 'sein' und 'haben' auf Englisch.",
      lektion: [
        "🧍 'to be' (sein): I am, you are, he/she/it is, we are, you are, they are.",
        "🖐️ 'to have got' (haben): I have got, you have got, he/she/it has got, we have got.",
        "💡 Kurzform: I am → I'm, he is → he's, they are → they're."
      ],
      aufgaben: [
        { frage: "Wie heißt 'I am' richtig ergänzt: 'I ___ happy.'", typ: "mc", optionen: ["am", "is", "are", "be"], loesung: "am", erklaerung: "Bei 'I' benutzt man 'am': 'I am happy.'" },
        { frage: "Wie heißt es richtig: 'She ___ my friend.'", typ: "mc", optionen: ["is", "am", "are", "be"], loesung: "is", erklaerung: "Bei 'he/she/it' benutzt man 'is'." },
        { frage: "Wie heißt es richtig: 'They ___ at school.'", typ: "mc", optionen: ["are", "is", "am", "be"], loesung: "are", erklaerung: "Bei 'they/we/you' benutzt man 'are'." },
        { frage: "Wie heißt es richtig: 'We ___ ten years old.'", typ: "mc", optionen: ["are", "is", "am", "has"], loesung: "are", erklaerung: "Bei 'we' benutzt man 'are'." },
        { frage: "Wie heißt es richtig: 'He ___ got a bike.'", typ: "mc", optionen: ["has", "have", "is", "am"], loesung: "has", erklaerung: "Bei 'he/she/it' benutzt man 'has got'." },
        { frage: "Wie heißt es richtig: 'I ___ got a sister.'", typ: "mc", optionen: ["have", "has", "am", "is"], loesung: "have", erklaerung: "Bei 'I/you/we/they' benutzt man 'have got'." },
        { frage: "Was ist die Kurzform von 'I am'?", typ: "text", loesung: "I'm", erklaerung: "'I am' kann man kurz als 'I'm' schreiben." },
        { frage: "Was ist die Kurzform von 'he is'?", typ: "text", loesung: "he's", erklaerung: "'he is' kann man kurz als 'he's' schreiben." },
        { frage: "Wie heißt es richtig: 'You ___ my best friend.'", typ: "mc", optionen: ["are", "is", "am", "has"], loesung: "are", erklaerung: "Bei 'you' benutzt man 'are'." },
        { frage: "Wie heißt es richtig: 'It ___ a big house.'", typ: "mc", optionen: ["is", "are", "am", "have"], loesung: "is", erklaerung: "Bei 'it' benutzt man 'is'." },
        { frage: "Wie heißt es richtig: 'They ___ got two cats.'", typ: "mc", optionen: ["have", "has", "is", "am"], loesung: "have", erklaerung: "Bei 'they' benutzt man 'have got'." }
      ]
    },
    {
      id: "questions-negation",
      titel: "Questions & Verneinung",
      icon: "❓",
      intro: "Fragen stellen und Sätze verneinen auf Englisch.",
      lektion: [
        "❓ Eine Ja/Nein-Frage bildet man oft mit 'Do' oder 'Does': 'Do you like pizza?'",
        "🙅 Verneinen mit 'do not' (don't) oder 'does not' (doesn't): 'I don't like fish.'",
        "🔎 Fragewörter: what (was), where (wo), who (wer), when (wann), why (warum), how (wie)."
      ],
      aufgaben: [
        { frage: "Was heißt 'where' auf Deutsch?", typ: "mc", optionen: ["wo", "was", "wer", "wann"], loesung: "wo", erklaerung: "'where' fragt nach einem Ort: 'wo'." },
        { frage: "Was heißt 'who' auf Deutsch?", typ: "mc", optionen: ["wer", "was", "wo", "wie"], loesung: "wer", erklaerung: "'who' fragt nach einer Person: 'wer'." },
        { frage: "Was heißt 'when' auf Deutsch?", typ: "mc", optionen: ["wann", "warum", "wo", "was"], loesung: "wann", erklaerung: "'when' fragt nach der Zeit: 'wann'." },
        { frage: "Was heißt 'why' auf Deutsch?", typ: "mc", optionen: ["warum", "wie", "wer", "wo"], loesung: "warum", erklaerung: "'why' fragt nach einem Grund: 'warum'." },
        { frage: "Was heißt 'how' auf Deutsch?", typ: "mc", optionen: ["wie", "was", "wer", "wann"], loesung: "wie", erklaerung: "'how' fragt nach der Art: 'wie'." },
        { frage: "Wie verneint man richtig: 'I ___ like fish.' (nicht mögen)", typ: "mc", optionen: ["don't", "doesn't", "am not", "isn't"], loesung: "don't", erklaerung: "Bei 'I' benutzt man 'don't' zum Verneinen." },
        { frage: "Wie verneint man richtig: 'She ___ like milk.' (nicht mögen)", typ: "mc", optionen: ["doesn't", "don't", "isn't", "am not"], loesung: "doesn't", erklaerung: "Bei 'he/she/it' benutzt man 'doesn't'." },
        { frage: "Welches Wort fehlt: '___ you like pizza?'", typ: "mc", optionen: ["Do", "Does", "Are", "Is"], loesung: "Do", erklaerung: "Bei 'you' fragt man mit 'Do': 'Do you like pizza?'" },
        { frage: "Welches Wort fehlt: '___ he play football?'", typ: "mc", optionen: ["Does", "Do", "Is", "Are"], loesung: "Does", erklaerung: "Bei 'he/she/it' fragt man mit 'Does'." },
        { frage: "Was ist die Kurzform von 'do not'?", typ: "text", loesung: "don't", erklaerung: "'do not' kann man kurz als 'don't' schreiben." },
        { frage: "Was ist die Kurzform von 'does not'?", typ: "text", loesung: "doesn't", erklaerung: "'does not' kann man kurz als 'doesn't' schreiben." }
      ]
    },
    {
      id: "vokabeln-lernen",
      titel: "Vokabeln lernen",
      icon: "🗂️",
      intro: "20 wichtige Wörter mit Übersetzung und Beispielsatz.",
      lektion: [
        "🗂️ Hier lernst du 20 wichtige Wörter. Lies Wort, Übersetzung und Beispielsatz genau durch.",
        "🔁 Sprich die Beispielsätze am besten laut nach – so bleiben sie besser im Kopf.",
        "✏️ Danach kommt eine kleine Übung dazu."
      ],
      vokabeln: [
        { en: "school", de: "die Schule", satz: "I go to school every day." },
        { en: "teacher", de: "der Lehrer / die Lehrerin", satz: "My teacher is very nice." },
        { en: "friend", de: "der Freund / die Freundin", satz: "She is my best friend." },
        { en: "book", de: "das Buch", satz: "I read a book every evening." },
        { en: "pen", de: "der Stift", satz: "Can I borrow your pen?" },
        { en: "table", de: "der Tisch", satz: "The book is on the table." },
        { en: "window", de: "das Fenster", satz: "Please open the window." },
        { en: "house", de: "das Haus", satz: "Our house is very old." },
        { en: "week", de: "die Woche", satz: "We have five school days a week." },
        { en: "today", de: "heute", satz: "Today is Monday." },
        { en: "tomorrow", de: "morgen", satz: "Tomorrow is Tuesday." },
        { en: "weather", de: "das Wetter", satz: "The weather is sunny today." },
        { en: "rain", de: "der Regen / regnen", satz: "It often rains in autumn." },
        { en: "sun", de: "die Sonne", satz: "The sun is shining." },
        { en: "play", de: "spielen", satz: "The children play in the garden." },
        { en: "eat", de: "essen", satz: "We eat breakfast at seven." },
        { en: "drink", de: "trinken", satz: "I drink water every day." },
        { en: "big", de: "groß", satz: "The elephant is very big." },
        { en: "small", de: "klein", satz: "The mouse is very small." },
        { en: "happy", de: "glücklich", satz: "I am happy today." }
      ],
      aufgaben: [
        { frage: "Was heißt 'school' auf Deutsch?", typ: "mc", optionen: ["die Schule", "das Buch", "der Tisch", "das Haus"], loesung: "die Schule", erklaerung: "'school' heißt 'die Schule' – 'I go to school every day.'" },
        { frage: "Was heißt 'friend' auf Deutsch?", typ: "mc", optionen: ["der Freund / die Freundin", "der Lehrer", "das Fenster", "die Woche"], loesung: "der Freund / die Freundin", erklaerung: "'friend' heißt 'der Freund / die Freundin' – 'She is my best friend.'" },
        { frage: "Was heißt 'book' auf Deutsch?", typ: "mc", optionen: ["das Buch", "der Stift", "der Tisch", "das Fenster"], loesung: "das Buch", erklaerung: "'book' heißt 'das Buch' – 'I read a book every evening.'" },
        { frage: "Wie sagt man 'der Tisch' auf Englisch?", typ: "text", loesung: "table", erklaerung: "'der Tisch' heißt 'table' – 'The book is on the table.'" },
        { frage: "Wie sagt man 'das Fenster' auf Englisch?", typ: "text", loesung: "window", erklaerung: "'das Fenster' heißt 'window' – 'Please open the window.'" },
        { frage: "Was heißt 'house' auf Deutsch?", typ: "mc", optionen: ["das Haus", "die Schule", "der Stift", "die Woche"], loesung: "das Haus", erklaerung: "'house' heißt 'das Haus' – 'Our house is very old.'" },
        { frage: "Wie sagt man 'heute' auf Englisch?", typ: "text", loesung: "today", erklaerung: "'heute' heißt 'today' – 'Today is Monday.'" },
        { frage: "Wie sagt man 'morgen' (Tag danach) auf Englisch?", typ: "text", loesung: "tomorrow", erklaerung: "'morgen' heißt 'tomorrow' – 'Tomorrow is Tuesday.'" },
        { frage: "Was heißt 'weather' auf Deutsch?", typ: "mc", optionen: ["das Wetter", "die Sonne", "der Regen", "die Woche"], loesung: "das Wetter", erklaerung: "'weather' heißt 'das Wetter' – 'The weather is sunny today.'" },
        { frage: "Was heißt 'sun' auf Deutsch?", typ: "mc", optionen: ["die Sonne", "der Regen", "das Wetter", "der Mond"], loesung: "die Sonne", erklaerung: "'sun' heißt 'die Sonne' – 'The sun is shining.'" },
        { frage: "Wie sagt man 'spielen' auf Englisch?", typ: "text", loesung: "play", erklaerung: "'spielen' heißt 'play' – 'The children play in the garden.'" },
        { frage: "Wie sagt man 'essen' auf Englisch?", typ: "text", loesung: "eat", erklaerung: "'essen' heißt 'eat' – 'We eat breakfast at seven.'" },
        { frage: "Wie sagt man 'trinken' auf Englisch?", typ: "text", loesung: "drink", erklaerung: "'trinken' heißt 'drink' – 'I drink water every day.'" },
        { frage: "Was heißt 'big' auf Deutsch?", typ: "mc", optionen: ["groß", "klein", "glücklich", "schnell"], loesung: "groß", erklaerung: "'big' heißt 'groß' – 'The elephant is very big.'" },
        { frage: "Was heißt 'small' auf Deutsch?", typ: "mc", optionen: ["klein", "groß", "glücklich", "alt"], loesung: "klein", erklaerung: "'small' heißt 'klein' – 'The mouse is very small.'" },
        { frage: "Wie sagt man 'glücklich' auf Englisch?", typ: "text", loesung: "happy", erklaerung: "'glücklich' heißt 'happy' – 'I am happy today.'" },
        { frage: "Welches Wort passt: 'The ___ is shining.' (Sonne)", typ: "mc", optionen: ["sun", "rain", "week", "book"], loesung: "sun", erklaerung: "'The sun is shining.' – die Sonne scheint." },
        { frage: "Welches Wort passt: 'Can I borrow your ___?' (Stift)", typ: "mc", optionen: ["pen", "table", "window", "house"], loesung: "pen", erklaerung: "'Can I borrow your pen?' – Kannst du mir deinen Stift leihen?" }
      ]
    }
  ]
};
