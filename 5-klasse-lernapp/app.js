(function () {
  "use strict";

  var LS_PROGRESS = "lk5_progress"; // eigener Präfix, damit nichts mit der anderen App im Repo kollidiert
  var LS_REFRESH = "lk5_refresh";
  var LS_LEITNER = "lk5_leitner";
  var LS_STREAK = "lk5_streak";
  var LS_SPIELE_XP = "lk5_spiele_xp";
  var LS_SPIELE_BADGES = "lk5_spiele_badges";
  var LS_SPIELE_GESPIELT = "lk5_spiele_gespielt";

  var AKTIVE_FAECHER = ["mathe", "deutsch", "englisch", "erdkunde", "biologie", "lesen"];

  var KOMMEND = [];

  // ---------- Spiele-Arena: Konfiguration ----------
  // Quiz-Duell & Blitz-Runde laufen über die echten Aufgaben aus window.LERNDATA
  // (nur Typ "mc"), damit dieselben Inhalte wie in den normalen Missionen
  // geübt werden. Sortierschlacht/Erinnerungs-Duell/Lückenzauber nutzen die
  // Zusatzinhalte aus window.SPIELE_EXTRA. Logik ist ein Bonus-Bereich ohne
  // eigenes Schulfach.
  var SPIELE_FAECHER = ["mathe", "deutsch", "englisch", "erdkunde", "biologie", "lesen", "logik"];
  var SPIELE_MODI = {
    quiz: { emoji: "⚔️", name: "Quiz-Duell", desc: "Besiege den Wissens-Dämon mit richtigen Antworten" },
    blitz: { emoji: "⚡", name: "Blitz-Runde", desc: "So viele Treffer wie möglich in 45 Sekunden" },
    dragdrop: { emoji: "🧲", name: "Sortierschlacht", desc: "Bring alles in die richtige Reihenfolge" },
    memory: { emoji: "🧠", name: "Erinnerungs-Duell", desc: "Finde alle passenden Paare" },
    luecken: { emoji: "✨", name: "Lückenzauber", desc: "Wähle das richtige Wort für die Lücke" },
  };
  var SPIELE_BADGES = [
    { id: "erstsieg", emoji: "🏆", name: "Erster Sieg", desc: "Gewinne dein erstes Duell" },
    { id: "combo5", emoji: "🔥", name: "Combo x5", desc: "5 richtige Antworten in Folge" },
    { id: "mathe_meister", emoji: "🧮", name: "Mathe-Meister", desc: "Mathe Quiz-Duell ohne Fehler" },
    { id: "deutsch_meister", emoji: "📖", name: "Deutsch-Meister", desc: "Deutsch Quiz-Duell ohne Fehler" },
    { id: "alleskoenner", emoji: "🌟", name: "Alleskönner", desc: "Spiele in allen Fächern" },
    { id: "blitz_champion", emoji: "⚡", name: "Blitz-Champion", desc: "15 Treffer in einer Blitz-Runde" },
    { id: "gedaechtnis_profi", emoji: "🧠", name: "Gedächtnis-Profi", desc: "Memory ohne Fehlversuch" },
    { id: "serientaenzer", emoji: "📅", name: "Serientänzer", desc: "3 Tage Streak" },
    { id: "legende_serie", emoji: "👑", name: "Serien-Legende", desc: "7 Tage Streak" },
  ];
  var SPIELE_XP_PRO_LEVEL = 80;

  var appEl = document.getElementById("app");
  var titelEl = document.getElementById("titel");
  var backBtn = document.getElementById("btnZurueck");
  var refreshBtn = document.getElementById("btnRefresh");
  var footDate = document.getElementById("footDate");
  var timerBtn = document.getElementById("btnTimer");
  var fortschrittBtn = document.getElementById("btnFortschritt");
  var FORTSCHRITT_PASSWORT = "11061985";

  var state = {
    view: "faecher",
    fach: null,
    thema: null,
    modus: "normal", // "normal" | "review" | "retry"
    aufgaben: [],
    index: 0,
    richtigCount: 0,
    falscheDiesesmal: [],
    kurzcheckFragen: [],
    kurzcheckIndex: 0,
    geplanteAnzahl: null,
    spielFachId: null,
    spiel: null,
    animation: null
  };

  // ---------- Aufgaben-Index (für Wiederholung über alle Fächer) ----------
  var AUFGABEN_INDEX = {};
  (function baueAufgabenIndex() {
    AKTIVE_FAECHER.forEach(function (fachId) {
      var fach = window.LERNDATA[fachId];
      if (!fach) return;
      fach.themen.forEach(function (thema) {
        thema.aufgaben.forEach(function (aufgabe, i) {
          var id = fachId + "::" + thema.id + "::" + i;
          aufgabe._id = id;
          AUFGABEN_INDEX[id] = {
            fachId: fachId, fachName: fach.name, fachIcon: fach.icon,
            themaId: thema.id, themaTitel: thema.titel, aufgabe: aufgabe
          };
        });
      });
    });
  })();

  // ---------- Fortschritt (Sterne pro Thema) ----------
  function ladeProgress() {
    try { return JSON.parse(localStorage.getItem(LS_PROGRESS)) || {}; }
    catch (e) { return {}; }
  }
  function speichereProgress(p) {
    try { localStorage.setItem(LS_PROGRESS, JSON.stringify(p)); } catch (e) {}
  }
  function progressKey(fachId, themaId) { return fachId + "-" + themaId; }

  // ---------- Leitner-Wiederholungswarteschlange ----------
  var LEITNER_INTERVALLE = [1, 3, 7]; // Tage bis zur nächsten Fälligkeit je Box (1-3)
  function heuteStr(versatzTage) {
    var d = new Date();
    if (versatzTage) d.setDate(d.getDate() + versatzTage);
    return d.toISOString().slice(0, 10);
  }
  function ladeLeitner() {
    try { return JSON.parse(localStorage.getItem(LS_LEITNER)) || {}; } catch (e) { return {}; }
  }
  function speichereLeitner(l) {
    try { localStorage.setItem(LS_LEITNER, JSON.stringify(l)); } catch (e) {}
  }
  function aktualisiereLeitner(aufgabeId, richtig) {
    var l = ladeLeitner();
    if (richtig) {
      var eintrag = l[aufgabeId];
      if (!eintrag) return; // war noch nie falsch -> braucht keine Wiederholung
      eintrag.box = Math.min(3, eintrag.box + 1);
      eintrag.faelligAm = heuteStr(LEITNER_INTERVALLE[eintrag.box - 1]);
      l[aufgabeId] = eintrag;
    } else {
      l[aufgabeId] = { box: 1, faelligAm: heuteStr(LEITNER_INTERVALLE[0]) };
    }
    speichereLeitner(l);
  }
  function faelligeAufgaben() {
    var l = ladeLeitner();
    var heute = heuteStr();
    var ergebnisse = [];
    Object.keys(l).forEach(function (id) {
      if (l[id].faelligAm <= heute && AUFGABEN_INDEX[id]) ergebnisse.push(AUFGABEN_INDEX[id]);
    });
    return ergebnisse;
  }

  // ---------- Tages-Streak (mit einer Freeze pro Woche) ----------
  function ladeStreak() {
    try { return JSON.parse(localStorage.getItem(LS_STREAK)) || null; } catch (e) { return null; }
  }
  function speichereStreak(s) {
    try { localStorage.setItem(LS_STREAK, JSON.stringify(s)); } catch (e) {}
  }
  function kalenderwoche(datumStr) {
    var d = new Date(datumStr + "T00:00:00Z");
    var jan1 = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    var tage = Math.floor((d - jan1) / 86400000);
    return d.getUTCFullYear() + "-W" + Math.ceil((tage + jan1.getUTCDay() + 1) / 7);
  }
  function aktualisiereStreak() {
    var heute = heuteStr();
    var s = ladeStreak();
    if (!s) { speichereStreak({ anzahl: 1, letztesDatum: heute, eingefrorenWoche: null }); return; }
    if (s.letztesDatum === heute) return; // heute schon gezählt
    var gestern = heuteStr(-1);
    var vorgestern = heuteStr(-2);
    var dieseWoche = kalenderwoche(heute);
    if (s.letztesDatum === gestern) {
      s.anzahl += 1;
    } else if (s.letztesDatum === vorgestern && s.eingefrorenWoche !== dieseWoche) {
      s.anzahl += 1; // eine verpasste Tageslücke pro Woche wird verziehen
      s.eingefrorenWoche = dieseWoche;
    } else {
      s.anzahl = 1;
    }
    s.letztesDatum = heute;
    speichereStreak(s);
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }
  function zufallsElement(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function sterneAusProzent(prozent) {
    if (prozent >= 90) return 3;
    if (prozent >= 70) return 2;
    if (prozent >= 50) return 1;
    return 0;
  }

  function sterneAnzeige(anzahl) {
    var voll = "⭐".repeat(anzahl);
    var leer = "☆".repeat(3 - anzahl);
    return voll + leer;
  }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      if (k === "class") node.className = attrs[k];
      else if (k === "text") node.textContent = attrs[k];
      else if (k === "html") node.innerHTML = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function zeigeToast(text, art, dauerMs) {
    var toast = el("div", { class: "toast" + (art ? " toast-" + art : "") , text: text });
    document.body.appendChild(toast);
    setTimeout(function () { toast.remove(); }, dauerMs || 4000);
  }

  // ==================== Spiele-Arena ====================
  // Eigenständiger Mini-Spiele-Bereich innerhalb derselben App. Quiz-Duell
  // und Blitz-Runde nutzen echte Aufgaben aus window.LERNDATA (nur Typ
  // "mc") und dieselbe Frage-UI wie die normalen Missionen (renderFrageInhalt),
  // damit Inhalte, Fortschritt bei der Wiederholungswarteschlange (Leitner)
  // und der Tages-Streak einheitlich bleiben. XP/Level/Abzeichen sind eine
  // eigene, zusätzliche Fortschrittsebene nur für die Spiele-Arena.

  function ladeSpieleXp() {
    try { return parseInt(localStorage.getItem(LS_SPIELE_XP), 10) || 0; } catch (e) { return 0; }
  }
  function speichereSpieleXp(xp) {
    try { localStorage.setItem(LS_SPIELE_XP, String(xp)); } catch (e) {}
  }
  function spielLevelAus(xp) { return Math.floor(xp / SPIELE_XP_PRO_LEVEL) + 1; }
  function spielXpImLevel(xp) { return xp % SPIELE_XP_PRO_LEVEL; }
  function spielRangName(level) {
    if (level >= 19) return "Legende";
    if (level >= 14) return "Superstar";
    if (level >= 10) return "Headliner";
    if (level >= 7) return "Rising Star";
    if (level >= 5) return "Support-Act";
    if (level >= 3) return "Backup-Tänzer:in";
    return "Trainee";
  }
  function vergibSpielXp(betrag) {
    var xp = ladeSpieleXp() + betrag;
    speichereSpieleXp(xp);
    aktualisiereStreak();
    return xp;
  }

  function ladeSpieleBadges() {
    try { return JSON.parse(localStorage.getItem(LS_SPIELE_BADGES)) || []; } catch (e) { return []; }
  }
  function speichereSpieleBadges(b) {
    try { localStorage.setItem(LS_SPIELE_BADGES, JSON.stringify(b)); } catch (e) {}
  }
  function ladeSpieleGespielt() {
    try { return JSON.parse(localStorage.getItem(LS_SPIELE_GESPIELT)) || []; } catch (e) { return []; }
  }
  function vermerkeSpielGespielt(fachId) {
    var g = ladeSpieleGespielt();
    if (g.indexOf(fachId) === -1) {
      g.push(fachId);
      try { localStorage.setItem(LS_SPIELE_GESPIELT, JSON.stringify(g)); } catch (e) {}
    }
    return g;
  }
  function schalteBadgeFrei(id, neuListe) {
    var badges = ladeSpieleBadges();
    if (badges.indexOf(id) !== -1) return;
    badges.push(id);
    speichereSpieleBadges(badges);
    for (var i = 0; i < SPIELE_BADGES.length; i++) {
      if (SPIELE_BADGES[i].id === id) { neuListe.push(SPIELE_BADGES[i]); return; }
    }
  }
  function pruefeSpielAbzeichen(ctx) {
    var neu = [];
    if (ctx.richtig > 0) schalteBadgeFrei("erstsieg", neu);
    if (ctx.comboMax >= 5) schalteBadgeFrei("combo5", neu);
    if (ctx.modus === "quiz" && ctx.fachId === "mathe" && ctx.richtig === ctx.gesamt) schalteBadgeFrei("mathe_meister", neu);
    if (ctx.modus === "quiz" && ctx.fachId === "deutsch" && ctx.richtig === ctx.gesamt) schalteBadgeFrei("deutsch_meister", neu);
    if (ctx.modus === "blitz" && ctx.richtig >= 15) schalteBadgeFrei("blitz_champion", neu);
    if (ctx.modus === "memory" && ctx.perfekt) schalteBadgeFrei("gedaechtnis_profi", neu);
    var streak = ladeStreak();
    if (streak && streak.anzahl >= 3) schalteBadgeFrei("serientaenzer", neu);
    if (streak && streak.anzahl >= 7) schalteBadgeFrei("legende_serie", neu);
    var gespielt = vermerkeSpielGespielt(ctx.fachId);
    var alleFaecherOhneBonus = SPIELE_FAECHER.filter(function (f) { return f !== "logik"; });
    if (alleFaecherOhneBonus.every(function (f) { return gespielt.indexOf(f) !== -1; })) schalteBadgeFrei("alleskoenner", neu);
    return neu;
  }

  function spielFachMeta(fachId) {
    if (fachId === "logik") return { id: "logik", name: "Logik", icon: "🧩", farbe: "#f472b6" };
    var fach = window.LERNDATA[fachId];
    return fach ? { id: fach.id, name: fach.name, icon: fach.icon, farbe: fach.farbe } : null;
  }

  // Sammelt alle Multiple-Choice-Aufgaben eines Fachs aus window.LERNDATA
  // (dieselben Objekte, inkl. _id — Antworten hier fließen daher auch in
  // die Leitner-Wiederholungswarteschlange ein).
  function mcPoolFuerFach(fachId) {
    var fach = window.LERNDATA[fachId];
    if (!fach) return [];
    var pool = [];
    fach.themen.forEach(function (thema) {
      thema.aufgaben.forEach(function (a) { if (a.typ === "mc") pool.push(a); });
    });
    return pool;
  }

  // Vokabelkarten (Wort/Übersetzung) aus window.LERNDATA lassen sich direkt
  // als Erinnerungs-Duell-Paare wiederverwenden (bisher nur bei Englisch).
  function vokabelPaareFuerFach(fachId) {
    var fach = window.LERNDATA[fachId];
    if (!fach) return [];
    var paare = [];
    fach.themen.forEach(function (thema) {
      if (!thema.vokabeln) return;
      thema.vokabeln.forEach(function (v) { paare.push([v.en, v.de.split(" / ")[0]]); });
    });
    return paare;
  }
  function memoryPaareFuerFach(fachId) {
    return (window.SPIELE_EXTRA.memory[fachId] || []).concat(vokabelPaareFuerFach(fachId));
  }

  function verfuegbareSpielModi(fachId) {
    var modi = ["quiz", "blitz"];
    if (window.SPIELE_EXTRA.dragdrop[fachId]) modi.push("dragdrop");
    if (memoryPaareFuerFach(fachId).length > 0) modi.push("memory");
    if (window.SPIELE_EXTRA.fillblank[fachId]) modi.push("luecken");
    return modi;
  }

  function raeumeSpielSession() {
    if (state.spiel && state.spiel.timerId) clearInterval(state.spiel.timerId);
    state.spiel = null;
  }

  function starSterne(anteil) {
    if (anteil >= 0.99) return 3;
    if (anteil >= 0.6) return 2;
    return anteil > 0 ? 1 : 0;
  }

  // ---------- Spiele-Übersicht (Fächer-Auswahl) ----------
  function renderSpieleUebersicht() {
    titelEl.textContent = "🎤⚔️ Spiele-Arena";
    var xp = ladeSpieleXp();
    var level = spielLevelAus(xp);
    var imLevel = spielXpImLevel(xp);

    appEl.appendChild(el("div", { class: "spiele-xp-pill", text: "🎤 Lvl " + level + " · " + spielRangName(level) + " · " + imLevel + "/" + SPIELE_XP_PRO_LEVEL + " XP" }));

    var badgeBtn = el("button", { class: "wiederhol-karte" }, [
      el("div", { class: "wiederhol-text", text: "🏅 Abzeichen" }),
      el("div", { class: "wiederhol-anzahl", text: ladeSpieleBadges().length + " von " + SPIELE_BADGES.length + " freigeschaltet" })
    ]);
    badgeBtn.addEventListener("click", function () { state.view = "spiele-abzeichen"; render(); });
    appEl.appendChild(badgeBtn);

    var grid = el("div", { class: "grid" });
    SPIELE_FAECHER.forEach(function (fachId) {
      var meta = spielFachMeta(fachId);
      if (!meta) return;
      var tile = el("button", { class: "tile fach", style: "--fach-color:" + meta.farbe }, [
        el("div", { class: "emoji", text: meta.icon }),
        el("div", { class: "name", text: meta.name })
      ]);
      tile.addEventListener("click", function () {
        state.spielFachId = fachId;
        state.view = "spiele-modi";
        render();
      });
      grid.appendChild(tile);
    });

    appEl.appendChild(el("p", { class: "intro-box", text: "✨ Wähle ein Fach und dann ein Mini-Spiel!" }));
    appEl.appendChild(grid);
  }

  function renderSpieleModi() {
    var meta = spielFachMeta(state.spielFachId);
    titelEl.textContent = meta.icon + " " + meta.name + " — Spiele";
    appEl.appendChild(el("p", { class: "intro-box", text: "Wähle dein Mini-Spiel." }));
    var liste = el("div", { class: "modus-liste" });
    verfuegbareSpielModi(state.spielFachId).forEach(function (modusId) {
      var m = SPIELE_MODI[modusId];
      var karte = el("button", { class: "modus-karte" }, [
        el("span", { class: "emoji", text: m.emoji }),
        el("span", { class: "info" }, [
          el("div", { class: "name", text: m.name }),
          el("div", { class: "desc", text: m.desc })
        ])
      ]);
      karte.addEventListener("click", function () { starteSpielModus(modusId); });
      liste.appendChild(karte);
    });
    appEl.appendChild(liste);
  }

  function starteSpielModus(modusId) {
    if (modusId === "quiz") starteSpielQuiz();
    else if (modusId === "blitz") starteSpielBlitz();
    else if (modusId === "dragdrop") starteSpielDragdrop();
    else if (modusId === "memory") starteSpielMemory();
    else if (modusId === "luecken") starteSpielLuecken();
  }

  // ---------- Quiz-Duell ----------
  function starteSpielQuiz() {
    var quelle = state.spielFachId === "logik" ? window.SPIELE_EXTRA.logikQuiz : mcPoolFuerFach(state.spielFachId);
    var anzahl = Math.min(8, quelle.length);
    state.spiel = {
      typ: "quiz", fachId: state.spielFachId,
      aufgaben: shuffle(quelle).slice(0, anzahl),
      index: 0, richtig: 0, combo: 0, comboMax: 0, herzen: 3, xp: 0,
    };
    state.view = "spiele-quiz";
    render();
  }
  function renderSpielQuizFrage() {
    var s = state.spiel;
    var gesamt = s.aufgaben.length;
    titelEl.textContent = "⚔️ Quiz-Duell";
    var box = el("div", { class: "frage-box" });

    var hud = el("div", { class: "demon-hud" });
    var demon = el("div", { class: "demon-emoji", text: "👹" });
    hud.appendChild(demon);
    var mitte = el("div", { class: "demon-hud-mitte" });
    mitte.appendChild(el("div", { class: "hp-leiste" }, [el("div", { style: "width:" + (((gesamt - s.index) / gesamt) * 100) + "%" })]));
    var herzen = el("div", { class: "herzen" });
    for (var i = 0; i < 3; i++) herzen.appendChild(el("span", { class: "herz" + (i < s.herzen ? "" : " verloren"), text: "❤️" }));
    mitte.appendChild(herzen);
    hud.appendChild(mitte);
    hud.appendChild(el("div", { class: "combo-chip", text: "🔥" + s.combo + "x" }));
    box.appendChild(hud);

    var aufgabe = s.aufgaben[s.index];
    box.appendChild(el("div", { class: "frage-text", text: (s.index + 1) + " / " + gesamt + " — " + aufgabe.frage }));

    renderFrageInhalt(box, aufgabe, function (richtig) {
      if (aufgabe._id) aktualisiereLeitner(aufgabe._id, richtig);
      if (richtig) {
        s.richtig++; s.combo++; s.comboMax = Math.max(s.comboMax, s.combo);
        s.xp += s.combo >= 3 ? 20 : 10;
        demon.classList.add("getroffen");
        setTimeout(function () { demon.classList.remove("getroffen"); }, 350);
      } else {
        s.combo = 0; s.herzen--;
      }
      box.appendChild(el("div", { class: "erklaerung", text: (richtig ? "✅ " : "💡 ") + aufgabe.erklaerung }));
      setTimeout(function () {
        s.index++;
        if (s.index >= gesamt || s.herzen <= 0) beendeSpielQuiz();
        else render();
      }, 1100);
    });

    appEl.appendChild(box);
  }
  function beendeSpielQuiz() {
    var s = state.spiel;
    var sterne = starSterne(s.richtig / s.aufgaben.length);
    vergibSpielXp(s.xp);
    var neueBadges = pruefeSpielAbzeichen({ modus: "quiz", fachId: s.fachId, richtig: s.richtig, gesamt: s.aufgaben.length, comboMax: s.comboMax });
    state.spielErgebnis = { modus: "quiz", fachId: s.fachId, sterne: sterne, richtig: s.richtig, gesamt: s.aufgaben.length, xp: s.xp, neueBadges: neueBadges };
    raeumeSpielSession();
    state.view = "spiele-ergebnis";
    render();
  }

  // ---------- Blitz-Runde ----------
  function starteSpielBlitz() {
    var pool = state.spielFachId === "logik" ? window.SPIELE_EXTRA.logikQuiz : mcPoolFuerFach(state.spielFachId);
    state.spiel = { typ: "blitz", fachId: state.spielFachId, pool: pool, zeit: 45, richtig: 0, combo: 0, comboMax: 0, xp: 0, aktuelle: null };
    naechsteSpielBlitzFrage();
    state.view = "spiele-blitz";
    render();
    state.spiel.timerId = setInterval(function () {
      if (!state.spiel) return;
      state.spiel.zeit--;
      aktualisiereBlitzTimer();
      if (state.spiel.zeit <= 0) beendeSpielBlitz();
    }, 1000);
  }
  function naechsteSpielBlitzFrage() {
    var s = state.spiel;
    var q;
    do { q = s.pool[Math.floor(Math.random() * s.pool.length)]; } while (s.pool.length > 1 && q === s.aktuelle);
    s.aktuelle = q;
  }
  function aktualisiereBlitzTimer() {
    var s = state.spiel;
    var leiste = document.getElementById("spBlitzTimer");
    if (!leiste) return;
    var pct = Math.max(0, (s.zeit / 45) * 100);
    leiste.style.width = pct + "%";
    leiste.classList.toggle("dringend", s.zeit <= 10);
    var lbl = document.getElementById("spBlitzZeit");
    if (lbl) lbl.textContent = Math.max(0, s.zeit) + "s";
  }
  function renderSpielBlitz() {
    var s = state.spiel;
    titelEl.textContent = "⚡ Blitz-Runde";
    var box = el("div", { class: "frage-box" });
    box.appendChild(el("div", { class: "timer-leiste" }, [el("div", { id: "spBlitzTimer", style: "width:100%" })]));
    box.appendChild(el("p", { class: "blitz-score", text: String(s.richtig) }));
    box.appendChild(el("p", { class: "blitz-label" }, [
      document.createTextNode("Treffer · Combo 🔥" + s.combo + "x · "),
      el("span", { id: "spBlitzZeit", text: s.zeit + "s" })
    ]));
    box.appendChild(el("div", { class: "frage-text", text: s.aktuelle.frage }));
    renderFrageInhalt(box, s.aktuelle, function (richtig) {
      if (s.zeit <= 0) return;
      if (richtig) {
        s.richtig++; s.combo++; s.comboMax = Math.max(s.comboMax, s.combo);
        s.xp += s.combo >= 5 ? 12 : 6;
      } else {
        s.combo = 0;
      }
      setTimeout(function () {
        if (!state.spiel || state.spiel.zeit <= 0) return;
        naechsteSpielBlitzFrage();
        render();
      }, 320);
    });
    appEl.appendChild(box);
  }
  function beendeSpielBlitz() {
    var s = state.spiel;
    if (!s) return;
    clearInterval(s.timerId);
    var sterne = s.richtig >= 20 ? 3 : s.richtig >= 12 ? 2 : s.richtig >= 5 ? 1 : 0;
    vergibSpielXp(s.xp);
    var neueBadges = pruefeSpielAbzeichen({ modus: "blitz", fachId: s.fachId, richtig: s.richtig, gesamt: s.richtig, comboMax: s.comboMax });
    state.spielErgebnis = { modus: "blitz", fachId: s.fachId, sterne: sterne, richtig: s.richtig, gesamt: null, xp: s.xp, neueBadges: neueBadges };
    state.spiel = null;
    state.view = "spiele-ergebnis";
    render();
  }

  // ---------- Sortierschlacht (Drag&Drop / Tippen zum Sortieren) ----------
  function starteSpielDragdrop() {
    var pool = window.SPIELE_EXTRA.dragdrop[state.spielFachId] || [];
    var anzahl = Math.min(3, pool.length);
    state.spiel = { typ: "dragdrop", fachId: state.spielFachId, runden: shuffle(pool).slice(0, anzahl), index: 0, richtigeRunden: 0, xp: 0 };
    state.view = "spiele-dragdrop";
    render();
  }
  function renderSpielDragdropRunde() {
    var s = state.spiel;
    var aufgabe = s.runden[s.index];
    var n = aufgabe.items.length;
    var gemischt = shuffle(aufgabe.items);
    var versuche = 0;
    while (n > 1 && versuche < 10 && gemischt.every(function (v, i) { return v === aufgabe.items[i]; })) {
      gemischt = shuffle(aufgabe.items); versuche++;
    }
    s.korrekt = aufgabe.items;
    s.platziert = new Array(n).fill(null);
    s.pool = gemischt;

    titelEl.textContent = "🧲 Sortierschlacht";
    var box = el("div", { class: "frage-box" });
    box.appendChild(el("p", { class: "dd-prompt", text: aufgabe.prompt }));
    var slots = el("div", { class: "dd-slots", id: "spDdSlots" });
    for (var i = 0; i < n; i++) {
      var slotBtn = el("button", { class: "dd-slot", text: "Platz " + (i + 1), "data-slot": i });
      (function (idx) { slotBtn.addEventListener("click", function () { entferneDragdropChip(idx); }); })(i);
      slots.appendChild(slotBtn);
    }
    box.appendChild(slots);
    var pool = el("div", { class: "dd-pool", id: "spDdPool" });
    box.appendChild(pool);
    appEl.appendChild(box);
    renderSpielDragdropPool();
  }
  function renderSpielDragdropPool() {
    var s = state.spiel;
    var poolEl = document.getElementById("spDdPool");
    poolEl.innerHTML = "";
    s.pool.forEach(function (wert) {
      var chip = el("button", { class: "dd-chip", text: wert });
      chip.addEventListener("click", function () { platziereDragdropChip(wert); });
      poolEl.appendChild(chip);
    });
    var slotEls = document.querySelectorAll("#spDdSlots .dd-slot");
    slotEls.forEach(function (elm, i) {
      var wert = s.platziert[i];
      elm.textContent = wert !== null ? wert : "Platz " + (i + 1);
      elm.classList.toggle("gefuellt", wert !== null);
    });
  }
  function platziereDragdropChip(wert) {
    var s = state.spiel;
    var leerIdx = s.platziert.indexOf(null);
    if (leerIdx === -1) return;
    s.platziert[leerIdx] = wert;
    var poolIdx = s.pool.indexOf(wert);
    if (poolIdx !== -1) s.pool.splice(poolIdx, 1);
    renderSpielDragdropPool();
    if (s.platziert.indexOf(null) === -1) setTimeout(pruefeDragdropRunde, 400);
  }
  function entferneDragdropChip(slotIdx) {
    var s = state.spiel;
    var wert = s.platziert[slotIdx];
    if (wert === null) return;
    s.platziert[slotIdx] = null;
    s.pool.push(wert);
    renderSpielDragdropPool();
  }
  function pruefeDragdropRunde() {
    var s = state.spiel;
    var stimmt = s.platziert.every(function (wert, i) { return wert === s.korrekt[i]; });
    var slotsEl = document.getElementById("spDdSlots");
    if (stimmt) {
      s.richtigeRunden++; s.xp += 15;
      zeigeToast("✅ Richtig sortiert!");
      setTimeout(function () {
        s.index++;
        if (s.index >= s.runden.length) beendeSpielDragdrop();
        else render();
      }, 700);
    } else {
      if (slotsEl) { slotsEl.classList.add("wackeln"); setTimeout(function () { slotsEl.classList.remove("wackeln"); }, 350); }
      zeigeToast("Noch nicht ganz richtig — versuch's nochmal!", "warn");
      s.pool = shuffle(s.platziert.slice());
      s.platziert = new Array(s.korrekt.length).fill(null);
      renderSpielDragdropPool();
    }
  }
  function beendeSpielDragdrop() {
    var s = state.spiel;
    var sterne = s.richtigeRunden === s.runden.length ? 3 : s.richtigeRunden >= Math.ceil(s.runden.length / 2) ? 2 : 1;
    vergibSpielXp(s.xp);
    var neueBadges = pruefeSpielAbzeichen({ modus: "dragdrop", fachId: s.fachId, richtig: s.richtigeRunden, gesamt: s.runden.length, comboMax: 0 });
    state.spielErgebnis = { modus: "dragdrop", fachId: s.fachId, sterne: sterne, richtig: s.richtigeRunden, gesamt: s.runden.length, xp: s.xp, neueBadges: neueBadges };
    raeumeSpielSession();
    state.view = "spiele-ergebnis";
    render();
  }

  // ---------- Erinnerungs-Duell (Memory) ----------
  function starteSpielMemory() {
    var paare = memoryPaareFuerFach(state.spielFachId);
    var anzahl = Math.min(6, paare.length);
    var gewaehlt = shuffle(paare).slice(0, anzahl);
    var karten = [];
    gewaehlt.forEach(function (p, i) {
      karten.push({ paarIdx: i, text: p[0] });
      karten.push({ paarIdx: i, text: p[1] });
    });
    karten = shuffle(karten);
    state.spiel = { typ: "memory", fachId: state.spielFachId, paare: gewaehlt, karten: karten, aufgedeckt: [], gefundenAnzahl: 0, fehlversuche: 0, xp: 0, sperre: false };
    state.view = "spiele-memory";
    render();
  }
  function renderSpielMemory() {
    var s = state.spiel;
    titelEl.textContent = "🧠 Erinnerungs-Duell";
    var box = el("div", {});
    box.appendChild(el("p", { class: "intro-box", text: s.gefundenAnzahl + " / " + s.paare.length + " Paare gefunden" }));
    var grid = el("div", { class: "memory-grid" });
    s.karten.forEach(function (karte, i) {
      var aufgedeckt = s.aufgedeckt.indexOf(i) !== -1;
      var cls = "memory-karte" + (aufgedeckt ? " aufgedeckt" : "") + (karte.gefunden ? " gefunden" : "");
      var kartenBtn = el("button", { class: cls }, [
        el("div", { class: "memory-karte-innen" }, [
          el("div", { class: "memory-seite vorn", text: "❓" }),
          el("div", { class: "memory-seite hinten", text: karte.text })
        ])
      ]);
      kartenBtn.addEventListener("click", function () { klickMemoryKarte(i); });
      grid.appendChild(kartenBtn);
    });
    box.appendChild(grid);
    appEl.appendChild(box);
  }
  function klickMemoryKarte(i) {
    var s = state.spiel;
    var karte = s.karten[i];
    if (s.sperre || karte.gefunden || s.aufgedeckt.indexOf(i) !== -1 || s.aufgedeckt.length >= 2) return;
    s.aufgedeckt.push(i);
    render();
    if (s.aufgedeckt.length === 2) {
      s.sperre = true;
      var a = s.karten[s.aufgedeckt[0]], b = s.karten[s.aufgedeckt[1]];
      if (a.paarIdx === b.paarIdx) {
        a.gefunden = true; b.gefunden = true;
        s.gefundenAnzahl++; s.xp += 8;
        s.aufgedeckt = []; s.sperre = false;
        setTimeout(render, 250);
        if (s.gefundenAnzahl === s.paare.length) setTimeout(beendeSpielMemory, 500);
      } else {
        s.fehlversuche++;
        setTimeout(function () { s.aufgedeckt = []; s.sperre = false; render(); }, 750);
      }
    }
  }
  function beendeSpielMemory() {
    var s = state.spiel;
    var perfekt = s.fehlversuche === 0;
    var sterne = perfekt ? 3 : s.fehlversuche <= 2 ? 2 : 1;
    vergibSpielXp(s.xp);
    var neueBadges = pruefeSpielAbzeichen({ modus: "memory", fachId: s.fachId, richtig: s.paare.length, gesamt: s.paare.length, comboMax: 0, perfekt: perfekt });
    state.spielErgebnis = { modus: "memory", fachId: s.fachId, sterne: sterne, richtig: s.paare.length, gesamt: s.paare.length, xp: s.xp, neueBadges: neueBadges };
    raeumeSpielSession();
    state.view = "spiele-ergebnis";
    render();
  }

  // ---------- Lückenzauber ----------
  function starteSpielLuecken() {
    var pool = window.SPIELE_EXTRA.fillblank[state.spielFachId] || [];
    var anzahl = Math.min(6, pool.length);
    state.spiel = { typ: "luecken", fachId: state.spielFachId, items: shuffle(pool).slice(0, anzahl), index: 0, richtig: 0, xp: 0 };
    state.view = "spiele-luecken";
    render();
  }
  function renderSpielLuecken() {
    var s = state.spiel;
    var item = s.items[s.index];
    titelEl.textContent = "✨ Lückenzauber";
    var box = el("div", { class: "frage-box" });
    box.appendChild(el("div", { class: "fortschritt-leiste" }, [el("div", { style: "width:" + Math.round((s.index / s.items.length) * 100) + "%" })]));
    var teile = item.text.split("___");
    var satzEl = el("p", { class: "luecken-satz" });
    satzEl.appendChild(document.createTextNode(teile[0]));
    satzEl.appendChild(el("span", { class: "luecke", id: "spLueckeSpot", text: "?" }));
    satzEl.appendChild(document.createTextNode(teile[1] || ""));
    box.appendChild(satzEl);

    // Frage-Objekt im selben Format wie window.LERNDATA, damit renderFrageInhalt
    // wiederverwendet werden kann.
    var aufgabeAdapter = { typ: "mc", frage: "", optionen: item.options.slice(), loesung: item.options[item.correct] };
    renderFrageInhalt(box, aufgabeAdapter, function (richtig) {
      var spot = document.getElementById("spLueckeSpot");
      if (spot) spot.textContent = item.options[item.correct];
      if (richtig) { s.richtig++; s.xp += 10; }
      setTimeout(function () {
        s.index++;
        if (s.index >= s.items.length) beendeSpielLuecken();
        else render();
      }, 1000);
    });
    appEl.appendChild(box);
  }
  function beendeSpielLuecken() {
    var s = state.spiel;
    var sterne = starSterne(s.richtig / s.items.length);
    vergibSpielXp(s.xp);
    var neueBadges = pruefeSpielAbzeichen({ modus: "luecken", fachId: s.fachId, richtig: s.richtig, gesamt: s.items.length, comboMax: 0 });
    state.spielErgebnis = { modus: "luecken", fachId: s.fachId, sterne: sterne, richtig: s.richtig, gesamt: s.items.length, xp: s.xp, neueBadges: neueBadges };
    raeumeSpielSession();
    state.view = "spiele-ergebnis";
    render();
  }

  // ---------- Ergebnis & Abzeichen ----------
  function renderSpielErgebnis() {
    var r = state.spielErgebnis;
    titelEl.textContent = "Ergebnis";
    var titelText = r.sterne === 3 ? "🏆 Perfektes Duell!" : r.sterne === 2 ? "🔥 Starker Kampf!" : r.sterne === 1 ? "✨ Geschafft!" : "💪 Nächstes Mal klappt's!";
    var subText = r.gesamt ? r.richtig + " von " + r.gesamt + " richtig" : r.richtig + " Treffer";
    var box = el("div", { class: "ergebnis-box" }, [
      el("div", { class: "ergebnis-spruch", text: titelText }),
      el("div", { text: subText }),
      el("div", { class: "ergebnis-sterne", text: sterneAnzeige(r.sterne) }),
      el("div", { class: "ergebnis-text", text: "+" + r.xp + " XP" })
    ]);
    (r.neueBadges || []).forEach(function (b) {
      box.appendChild(el("div", { class: "badge-unlock" }, [
        el("span", { class: "emoji", text: b.emoji }),
        el("span", { class: "txt", text: "Neues Abzeichen: " + b.name })
      ]));
    });
    var reihe = el("div", { class: "button-reihe" });
    var nochmalBtn = el("button", { class: "btn-primary btn-glow", text: "🔁 Nochmal" });
    nochmalBtn.addEventListener("click", function () { starteSpielModus(r.modus); });
    var zurueckBtn = el("button", { class: "btn-primary btn-secondary", text: "Zurück" });
    zurueckBtn.addEventListener("click", function () { state.view = "spiele-modi"; render(); });
    reihe.appendChild(nochmalBtn);
    reihe.appendChild(zurueckBtn);
    box.appendChild(reihe);
    appEl.appendChild(box);
  }

  function renderSpielAbzeichen() {
    titelEl.textContent = "🏅 Abzeichen";
    var freigeschaltet = ladeSpieleBadges();
    var grid = el("div", { class: "badge-grid" });
    SPIELE_BADGES.forEach(function (b) {
      var frei = freigeschaltet.indexOf(b.id) !== -1;
      grid.appendChild(el("div", { class: "badge-kachel" + (frei ? "" : " gesperrt"), title: b.desc }, [
        el("span", { class: "emoji", text: b.emoji }),
        el("span", { class: "lbl", text: b.name })
      ]));
    });
    appEl.appendChild(grid);
  }

  // Ansichten, in denen eine Mission/Übung gerade läuft – hier soll ein
  // Reload durch den Aktualisieren-Button nicht mitten drin passieren.
  var ANSICHTEN_MIT_LAUFENDER_AUFGABE = ["uebung", "kurzcheck", "spiele-quiz", "spiele-blitz", "spiele-dragdrop", "spiele-memory", "spiele-luecken"];

  function render() {
    appEl.innerHTML = "";
    backBtn.hidden = state.view === "faecher";
    if (state.view === "faecher") renderFaecher();
    else if (state.view === "themen") renderThemen();
    else if (state.view === "lektion") renderLektion();
    else if (state.view === "vokabeln") renderVokabeln();
    else if (state.view === "kurzcheck") renderKurzcheck();
    else if (state.view === "uebung") renderUebung();
    else if (state.view === "ergebnis") renderErgebnis();
    else if (state.view === "fortschritt-login") renderFortschrittLogin();
    else if (state.view === "fortschritt") renderFortschritt();
    else if (state.view === "spiele") renderSpieleUebersicht();
    else if (state.view === "spiele-modi") renderSpieleModi();
    else if (state.view === "spiele-quiz") renderSpielQuizFrage();
    else if (state.view === "spiele-blitz") renderSpielBlitz();
    else if (state.view === "spiele-dragdrop") renderSpielDragdropRunde();
    else if (state.view === "spiele-memory") renderSpielMemory();
    else if (state.view === "spiele-luecken") renderSpielLuecken();
    else if (state.view === "spiele-ergebnis") renderSpielErgebnis();
    else if (state.view === "spiele-abzeichen") renderSpielAbzeichen();
    else if (state.view === "mathe-animation") renderThemaAnimation();
  }

  function renderFaecher() {
    titelEl.textContent = "⚔️ Idol Academy · 5. Klasse";
    var progress = ladeProgress();
    var streak = ladeStreak();
    var faellige = faelligeAufgaben();

    if (streak && streak.anzahl > 0) {
      appEl.appendChild(el("div", { class: "streak-pill", text: "🔥 " + streak.anzahl + " Tag" + (streak.anzahl === 1 ? "" : "e") + " in Folge" }));
    }

    if (faellige.length > 0) {
      var wiederholKarte = el("button", { class: "wiederhol-karte" }, [
        el("div", { class: "wiederhol-text", text: "🔁 Wiederholung bereit" }),
        el("div", { class: "wiederhol-anzahl", text: faellige.length + " Frage" + (faellige.length === 1 ? "" : "n") + " heute fällig – mach dich bereit!" })
      ]);
      wiederholKarte.addEventListener("click", function () { starteWiederholung(); });
      appEl.appendChild(wiederholKarte);
    }

    var spielXp = ladeSpieleXp();
    var spielLevel = spielLevelAus(spielXp);
    var spieleKarte = el("button", { class: "spiele-karte" }, [
      el("span", { class: "emoji", text: "🎤⚔️" }),
      el("span", {}, [
        el("div", { class: "titel", text: "Spiele-Arena · Lvl " + spielLevel }),
        el("div", { class: "sub", text: "Mathe, Deutsch & mehr als schnelle Mini-Duelle" })
      ])
    ]);
    spieleKarte.addEventListener("click", function () { state.view = "spiele"; render(); });
    appEl.appendChild(spieleKarte);

    var grid = el("div", { class: "grid" });

    AKTIVE_FAECHER.forEach(function (fachId) {
      var fach = window.LERNDATA[fachId];
      if (!fach) return;
      var anzahlThemen = fach.themen.length;
      var summeSterne = 0;
      fach.themen.forEach(function (t) {
        var p = progress[progressKey(fach.id, t.id)];
        if (p) summeSterne += p.sterne;
      });
      var tile = el("button", { class: "tile fach", style: "--fach-color:" + fach.farbe }, [
        el("div", { class: "emoji", text: fach.icon }),
        el("div", { class: "name", text: fach.name }),
        el("div", { class: "stars", text: summeSterne + " / " + (anzahlThemen * 3) + " ⭐" })
      ]);
      tile.addEventListener("click", function () {
        state.fach = fach;
        state.view = "themen";
        render();
      });
      grid.appendChild(tile);
    });

    KOMMEND.forEach(function (f) {
      grid.appendChild(el("div", { class: "tile locked" }, [
        el("div", { class: "emoji", text: f.icon }),
        el("div", { class: "name", text: f.name }),
        el("div", { class: "stars", text: "bald verfügbar" })
      ]));
    });

    appEl.appendChild(el("p", { class: "intro-box", text: "✨ Wähle einen Bereich und starte deine Mission!" }));
    appEl.appendChild(grid);
  }

  function renderThemen() {
    titelEl.textContent = state.fach.icon + " " + state.fach.name;
    var progress = ladeProgress();
    var grid = el("div", { class: "grid" });

    state.fach.themen.forEach(function (thema, i) {
      var p = progress[progressKey(state.fach.id, thema.id)];
      var sterne = p ? p.sterne : 0;
      var label = state.fach.id === "lesen" ? thema.titel : "Mission " + (i + 1) + ": " + thema.titel;
      var tile = el("button", { class: "tile" }, [
        el("div", { class: "emoji", text: thema.icon }),
        el("div", { class: "name", text: label }),
        el("div", { class: "stars", text: sterneAnzeige(sterne) })
      ]);
      tile.addEventListener("click", function () {
        state.thema = thema;
        if (thema.vokabeln) {
          state.view = "vokabeln";
        } else if (thema.lektion) {
          state.view = "lektion";
        } else {
          starteUebungDirekt(thema);
          return;
        }
        render();
      });
      grid.appendChild(tile);
    });

    appEl.appendChild(el("p", { class: "intro-box", text: "🎤 Tippe auf eine Mission, um loszulegen." }));
    appEl.appendChild(grid);
  }

  function starteUebungDirekt(thema) {
    starteUebung(state.fach, thema);
  }

  // ---------- Start-Auswahl: kurze oder vollständige Runde ----------
  function renderStartBlock(box, fach, thema, labelWennKurz) {
    if (thema.aufgaben.length > 10) {
      box.appendChild(el("p", { class: "laenge-hinweis", text: "Wie viele Aufgaben möchtest du üben?" }));
      var reihe = el("div", { class: "button-reihe" });
      var kurzBtn = el("button", { class: "btn-primary btn-secondary", text: "⚡ Kurz (8)" });
      kurzBtn.addEventListener("click", function () { starteMitKurzcheck(fach, thema, 8); });
      var alleBtn = el("button", { class: "btn-primary btn-glow", text: "🎯 Alle (" + thema.aufgaben.length + ")" });
      alleBtn.addEventListener("click", function () { starteMitKurzcheck(fach, thema, null); });
      reihe.appendChild(kurzBtn);
      reihe.appendChild(alleBtn);
      box.appendChild(reihe);
    } else {
      var startBtn = el("button", { class: "btn-primary btn-glow", text: labelWennKurz });
      startBtn.addEventListener("click", function () { starteMitKurzcheck(fach, thema, null); });
      box.appendChild(startBtn);
    }
  }

  function starteMitKurzcheck(fach, thema, limit) {
    if (thema.aufgaben.length >= 5) {
      state.fach = fach;
      state.thema = thema;
      state.geplanteAnzahl = limit;
      state.kurzcheckFragen = shuffle(thema.aufgaben).slice(0, Math.min(3, thema.aufgaben.length));
      state.kurzcheckIndex = 0;
      state.view = "kurzcheck";
      render();
    } else {
      starteUebung(fach, thema, { limit: limit });
    }
  }

  function renderLektion() {
    var thema = state.thema;
    titelEl.textContent = "📖 " + thema.titel;
    var box = el("div", { class: "lektion-box" });
    box.appendChild(el("div", { class: "lektion-emoji", text: thema.icon }));
    box.appendChild(el("h2", { class: "lektion-titel", text: thema.titel }));

    var liste = el("div", { class: "lektion-liste" });
    (thema.lektion || []).forEach(function (satz) {
      liste.appendChild(el("div", { class: "lektion-punkt", text: satz }));
    });
    box.appendChild(liste);

    renderBeispiele(box, thema.beispiele);

    if (thema.animation) {
      var animBtn = el("button", { class: "btn-primary btn-secondary", text: "🎬 Animation ansehen" });
      animBtn.addEventListener("click", function () {
        state.animation = { thema: thema, index: 0 };
        state.view = "mathe-animation";
        render();
      });
      box.appendChild(animBtn);
    }

    renderStartBlock(box, state.fach, thema, "⚔️ Mission starten");

    appEl.appendChild(box);
  }

  // ---------- Beispielrechnungen: Schritt-für-Schritt-Lösungswege ----------
  function renderBeispiele(box, beispiele) {
    if (!beispiele || !beispiele.length) return;
    box.appendChild(el("h3", { class: "beispiele-ueberschrift", text: "✏️ So geht's: Beispielrechnungen" }));
    beispiele.forEach(function (b) {
      var karte = el("div", { class: "beispiel-karte" });
      karte.appendChild(el("div", { class: "beispiel-aufgabe", text: b.aufgabe }));
      var schritteListe = el("ol", { class: "beispiel-schritte" });
      b.schritte.forEach(function (s) {
        schritteListe.appendChild(el("li", { text: s }));
      });
      karte.appendChild(schritteListe);
      karte.appendChild(el("div", { class: "beispiel-ergebnis", text: "✅ Ergebnis: " + b.ergebnis }));
      box.appendChild(karte);
    });
  }

  // ---------- Mini-Animation zu einem Thema (eigener, frei erfundener
  // K-Pop-Dämonenjäger-Look, Schritt für Schritt per Tastendruck) ----------
  function renderThemaAnimation() {
    var anim = state.animation.thema.animation;
    var szene = anim.szenen[state.animation.index];
    titelEl.textContent = "🎬 " + anim.titel;

    var box = el("div", { class: "frage-box" });

    var hud = el("div", { class: "demon-hud" });
    var demon = el("div", { class: "demon-emoji", text: szene.hp > 0 ? "👹" : "✨" });
    hud.appendChild(demon);
    var mitte = el("div", { class: "demon-hud-mitte" });
    mitte.appendChild(el("div", { class: "hp-leiste" }, [el("div", { style: "width:" + szene.hp + "%" })]));
    hud.appendChild(mitte);
    box.appendChild(hud);

    box.appendChild(el("div", { class: "frage-text", text: szene.text }));

    if (szene.rechnung) {
      box.appendChild(el("div", { class: "beispiel-karte" }, [
        el("div", { class: "beispiel-aufgabe", text: szene.rechnung }),
        el("div", { text: "Ergebnis bisher: " + szene.ergebnisSoweit + " · Rest: " + szene.rest })
      ]));
    } else if (szene.ende) {
      box.appendChild(el("div", { class: "beispiel-karte" }, [
        el("div", { class: "beispiel-ergebnis", text: "✅ Ergebnis: " + szene.ergebnisSoweit })
      ]));
    }

    var letzte = state.animation.index + 1 >= anim.szenen.length;
    var reihe = el("div", { class: "button-reihe" });
    if (!letzte) {
      var weiterBtn = el("button", { class: "btn-primary btn-glow", text: "Weiter ▶" });
      weiterBtn.addEventListener("click", function () { state.animation.index++; render(); });
      reihe.appendChild(weiterBtn);
    } else {
      var nochmalBtn = el("button", { class: "btn-primary btn-secondary", text: "🔁 Nochmal ansehen" });
      nochmalBtn.addEventListener("click", function () { state.animation.index = 0; render(); });
      var fertigBtn = el("button", { class: "btn-primary btn-glow", text: "Fertig" });
      fertigBtn.addEventListener("click", function () { state.animation = null; state.view = "lektion"; render(); });
      reihe.appendChild(nochmalBtn);
      reihe.appendChild(fertigBtn);
    }
    box.appendChild(reihe);

    appEl.appendChild(box);
  }

  function renderVokabeln() {
    var thema = state.thema;
    titelEl.textContent = "🗂️ " + thema.titel;
    var box = el("div", { class: "lektion-box" });
    box.appendChild(el("div", { class: "lektion-emoji", text: thema.icon }));
    box.appendChild(el("h2", { class: "lektion-titel", text: thema.titel }));

    if (thema.lektion) {
      var hinweise = el("div", { class: "lektion-liste" });
      thema.lektion.forEach(function (satz) {
        hinweise.appendChild(el("div", { class: "lektion-punkt", text: satz }));
      });
      box.appendChild(hinweise);
    }

    var karten = el("div", { class: "vokabel-liste" });
    thema.vokabeln.forEach(function (v) {
      karten.appendChild(el("div", { class: "vokabel-karte" }, [
        el("div", { class: "vokabel-wort" }, [
          el("span", { class: "vokabel-en", text: v.en }),
          el("span", { class: "vokabel-de", text: v.de })
        ]),
        el("div", { class: "vokabel-satz", text: "„" + v.satz + "“" })
      ]));
    });
    box.appendChild(karten);

    renderStartBlock(box, state.fach, thema, "⚔️ Zur Übung");

    appEl.appendChild(box);
  }

  // ---------- Kurz-Check: 2-3 ungewertete Aufwärm-Fragen ----------
  function renderKurzcheck() {
    titelEl.textContent = "🧠 Kurz-Check";
    var box = el("div", { class: "frage-box" });
    box.appendChild(el("div", { class: "kurzcheck-hinweis", text: "Das zählt noch nicht mit – nur zum Warmwerden! 🔥" }));

    var prozentFertig = Math.round((state.kurzcheckIndex / state.kurzcheckFragen.length) * 100);
    box.appendChild(el("div", { class: "fortschritt-leiste" }, [el("div", { style: "width:" + prozentFertig + "%" })]));

    var aufgabe = state.kurzcheckFragen[state.kurzcheckIndex];
    box.appendChild(el("div", { class: "frage-text", text: (state.kurzcheckIndex + 1) + " / " + state.kurzcheckFragen.length + " — " + aufgabe.frage }));

    renderFrageInhalt(box, aufgabe, function (richtig) {
      var praefix = richtig ? "✅ Genau!" : "💡 Kein Problem, gleich üben wir das genauer:";
      box.appendChild(el("div", { class: "erklaerung", text: praefix + " " + aufgabe.erklaerung }));
      var letzte = state.kurzcheckIndex + 1 >= state.kurzcheckFragen.length;
      var weiterBtn = el("button", { class: "btn-primary btn-glow", text: letzte ? "🚀 Weiter zum Quiz" : "Weiter" });
      weiterBtn.addEventListener("click", function () {
        state.kurzcheckIndex++;
        if (state.kurzcheckIndex >= state.kurzcheckFragen.length) {
          starteUebung(state.fach, state.thema, { limit: state.geplanteAnzahl });
        } else {
          render();
        }
      });
      box.appendChild(weiterBtn);
    });

    appEl.appendChild(box);
  }

  // ---------- Wiederholungsrunde (fachübergreifend, fällige Fragen) ----------
  function starteWiederholung() {
    var faellige = faelligeAufgaben().map(function (e) { return e.aufgabe; });
    if (faellige.length === 0) return;
    starteUebung(null, null, { aufgaben: faellige, modus: "review", limit: 20 });
  }

  function starteUebung(fach, thema, opts) {
    opts = opts || {};
    state.fach = fach;
    state.thema = thema;
    state.modus = opts.modus || "normal";
    var pool = opts.aufgaben || thema.aufgaben;
    var gemischt = shuffle(pool);
    if (opts.limit) gemischt = gemischt.slice(0, opts.limit);
    state.aufgaben = gemischt;
    state.index = 0;
    state.richtigCount = 0;
    state.falscheDiesesmal = [];
    state.view = "uebung";
    render();
  }

  // ---------- Gemeinsame Frage-UI (Mehrfachauswahl oder Texteingabe) ----------
  function renderFrageInhalt(box, aufgabe, onBeantwortet) {
    var beantwortet = false;

    if (aufgabe.typ === "mc") {
      var optionenBox = el("div", { class: "optionen" });
      var optionen = shuffle(aufgabe.optionen);
      var buttons = [];

      optionen.forEach(function (opt) {
        var btn = el("button", { class: "option-btn", text: opt });
        btn.addEventListener("click", function () {
          if (beantwortet) return;
          beantwortet = true;
          var richtig = opt === aufgabe.loesung;
          buttons.forEach(function (b) {
            b.disabled = true;
            if (b.textContent === aufgabe.loesung) b.classList.add("richtig");
            else if (b === btn) b.classList.add("falsch");
          });
          onBeantwortet(richtig);
        });
        buttons.push(btn);
        optionenBox.appendChild(btn);
      });
      box.appendChild(optionenBox);
    } else {
      var inputWrap = el("div", { class: "zahl-eingabe" });
      var input = el("input", {
        type: "text",
        inputmode: aufgabe.typ === "zahl" ? "numeric" : "text",
        autocapitalize: "off",
        autocomplete: "off",
        placeholder: "Deine Antwort"
      });
      var pruefenBtn = el("button", { class: "btn-primary", text: "Prüfen" });
      pruefenBtn.style.width = "auto";
      inputWrap.appendChild(input);
      inputWrap.appendChild(pruefenBtn);
      box.appendChild(inputWrap);

      var pruefen = function () {
        if (beantwortet) return;
        beantwortet = true;
        var wert = (input.value || "").trim().replace(/\s+/g, "");
        var soll = aufgabe.loesung.trim().replace(/\s+/g, "");
        var richtig = wert.toLowerCase() === soll.toLowerCase();
        input.disabled = true;
        input.classList.add(richtig ? "richtig" : "falsch");
        if (!richtig) input.value = input.value + "  (richtig: " + aufgabe.loesung + ")";
        pruefenBtn.disabled = true;
        onBeantwortet(richtig);
      };
      pruefenBtn.addEventListener("click", pruefen);
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") pruefen(); });
    }
  }

  function renderUebung() {
    var thema = state.thema;
    titelEl.textContent = state.modus === "review" ? "🔁 Wiederholung" : (thema ? thema.titel : "Übung");

    var box = el("div", { class: "frage-box" });

    var prozentFertig = Math.round((state.index / state.aufgaben.length) * 100);
    box.appendChild(el("div", { class: "fortschritt-leiste" }, [el("div", { style: "width:" + prozentFertig + "%" })]));

    if (thema && thema.text) {
      box.appendChild(el("div", { class: "lesetext", text: thema.text }));
    }

    var aufgabe = state.aufgaben[state.index];

    if (state.modus === "review" && aufgabe._id && AUFGABEN_INDEX[aufgabe._id]) {
      var meta = AUFGABEN_INDEX[aufgabe._id];
      box.appendChild(el("div", { class: "review-tag", text: meta.fachIcon + " " + meta.fachName + " · " + meta.themaTitel }));
    }

    box.appendChild(el("div", { class: "frage-text", text: (state.index + 1) + " / " + state.aufgaben.length + " — " + aufgabe.frage }));

    renderFrageInhalt(box, aufgabe, function (richtig) {
      if (aufgabe._id) aktualisiereLeitner(aufgabe._id, richtig);
      if (richtig) state.richtigCount++;
      else state.falscheDiesesmal.push(aufgabe);
      zeigeErklaerung(box, aufgabe, richtig);
    });

    appEl.appendChild(box);
  }

  var LOB_RICHTIG = ["✅ Genau richtig!", "✅ Klasse gemacht!", "✅ Stark erkannt!", "✅ Super gelöst!"];
  var LOB_FALSCH = ["🤔 Fast! Schau mal:", "💡 Noch nicht ganz. Schau mal:", "🤔 Guter Versuch! Schau mal:"];

  function zeigeErklaerung(box, aufgabe, richtig) {
    var praefix = richtig ? zufallsElement(LOB_RICHTIG) : zufallsElement(LOB_FALSCH);
    box.appendChild(el("div", { class: "erklaerung", text: praefix + " " + aufgabe.erklaerung }));
    var weiterBtn = el("button", { class: "btn-primary", text: state.index + 1 < state.aufgaben.length ? "Weiter" : "Ergebnis anzeigen" });
    weiterBtn.addEventListener("click", function () {
      state.index++;
      if (state.index >= state.aufgaben.length) {
        beendeUebung();
      } else {
        render();
      }
    });
    box.appendChild(weiterBtn);
  }

  function beendeUebung() {
    var prozent = Math.round((state.richtigCount / state.aufgaben.length) * 100);
    var sterne = sterneAusProzent(prozent);

    if (state.modus === "normal" && state.fach && state.thema) {
      var progress = ladeProgress();
      var key = progressKey(state.fach.id, state.thema.id);
      var bisher = progress[key];
      if (!bisher || sterne > bisher.sterne) {
        progress[key] = { sterne: sterne, beste: prozent };
        speichereProgress(progress);
      }
    }

    aktualisiereStreak();

    state.view = "ergebnis";
    state.letztesProzent = prozent;
    state.letzteSterne = sterne;
    render();
  }

  function ergebnisSpruch(sterne) {
    if (sterne === 3) return "🏆 Legendärer Sieg!";
    if (sterne === 2) return "🔥 Starker Kampf!";
    if (sterne === 1) return "✨ Gut gemacht!";
    return "💪 Nächstes Mal schaffst du mehr Sterne!";
  }

  function renderErgebnis() {
    titelEl.textContent = "Ergebnis";
    var box = el("div", { class: "ergebnis-box" }, [
      el("div", { class: "ergebnis-spruch", text: ergebnisSpruch(state.letzteSterne) }),
      el("div", { text: "Du hast " + state.richtigCount + " von " + state.aufgaben.length + " Aufgaben richtig gelöst." }),
      el("div", { class: "ergebnis-sterne", text: sterneAnzeige(state.letzteSterne) }),
      el("div", { class: "ergebnis-text", text: state.letztesProzent + " % richtig" })
    ]);

    if (state.modus === "normal" && state.falscheDiesesmal.length >= 2) {
      var anzahlFalsch = state.falscheDiesesmal.length;
      var retryBtn = el("button", { class: "btn-primary btn-glow", text: "🔁 Nur die " + anzahlFalsch + " Fehler üben" });
      retryBtn.addEventListener("click", function () {
        var wiederholen = state.falscheDiesesmal;
        starteUebung(state.fach, state.thema, { aufgaben: wiederholen, modus: "retry" });
      });
      box.appendChild(retryBtn);
    }

    var reihe = el("div", { class: "button-reihe" });
    var nochmalBtn = el("button", { class: "btn-primary btn-glow", text: state.fach ? "🔁 Nochmal üben" : "🔁 Wiederholung erneut prüfen" });
    nochmalBtn.addEventListener("click", function () {
      if (state.fach) starteUebung(state.fach, state.thema);
      else starteWiederholung();
    });
    var zurueckBtn = el("button", { class: "btn-primary btn-secondary", text: state.fach ? "Zurück zu den Missionen" : "Zurück zur Startseite" });
    zurueckBtn.addEventListener("click", function () { state.view = state.fach ? "themen" : "faecher"; render(); });
    reihe.appendChild(nochmalBtn);
    reihe.appendChild(zurueckBtn);
    box.appendChild(reihe);

    appEl.appendChild(box);
  }

  // ---------- Fortschrittsbericht (passwortgeschützt, für Eltern/Lehrkräfte) ----------
  function renderFortschrittLogin() {
    titelEl.textContent = "🔒 Fortschritt";
    var box = el("div", { class: "lektion-box" });
    box.appendChild(el("div", { class: "lektion-emoji", text: "🔒" }));
    box.appendChild(el("h2", { class: "lektion-titel", text: "Für Eltern & Lehrkräfte" }));
    box.appendChild(el("p", { class: "laenge-hinweis", text: "Bitte gib das Passwort ein, um den Fortschrittsbericht zu sehen." }));

    var inputWrap = el("div", { class: "zahl-eingabe" });
    var input = el("input", { type: "password", inputmode: "numeric", autocomplete: "off", placeholder: "Passwort" });
    var pruefenBtn = el("button", { class: "btn-primary", text: "Anzeigen" });
    pruefenBtn.style.width = "auto";
    inputWrap.appendChild(input);
    inputWrap.appendChild(pruefenBtn);
    box.appendChild(inputWrap);

    var fehlerBox = el("div");
    box.appendChild(fehlerBox);

    var pruefen = function () {
      if (input.value === FORTSCHRITT_PASSWORT) {
        input.value = "";
        state.view = "fortschritt";
        render();
      } else {
        fehlerBox.innerHTML = "";
        fehlerBox.appendChild(el("div", { class: "erklaerung", text: "❌ Das Passwort stimmt leider nicht." }));
        input.value = "";
        input.focus();
      }
    };
    pruefenBtn.addEventListener("click", pruefen);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") pruefen(); });

    appEl.appendChild(box);
  }

  function statusFuerBeste(beste) {
    if (beste >= 90) return { label: "🟢 Sehr gut gemeistert", klasse: "status-gut" };
    if (beste >= 50) return { label: "🟡 Kann noch geübt werden", klasse: "status-mittel" };
    return { label: "🔴 Braucht Wiederholung", klasse: "status-schlecht" };
  }

  function baueFortschrittsBericht() {
    var progress = ladeProgress();
    var leitner = ladeLeitner();
    var offeneFehlerProThema = {};
    Object.keys(leitner).forEach(function (aufgabeId) {
      var meta = AUFGABEN_INDEX[aufgabeId];
      if (!meta) return;
      var key = progressKey(meta.fachId, meta.themaId);
      offeneFehlerProThema[key] = (offeneFehlerProThema[key] || 0) + 1;
    });

    var zeilen = [];
    AKTIVE_FAECHER.forEach(function (fachId) {
      var fach = window.LERNDATA[fachId];
      if (!fach) return;
      fach.themen.forEach(function (thema) {
        var key = progressKey(fach.id, thema.id);
        var p = progress[key];
        var offeneFehler = offeneFehlerProThema[key] || 0;
        if (!p && offeneFehler === 0) return; // noch nie versucht
        zeilen.push({
          fach: fach, thema: thema,
          sterne: p ? p.sterne : 0,
          beste: p ? p.beste : 0,
          offeneFehler: offeneFehler
        });
      });
    });

    zeilen.sort(function (a, b) { return a.beste - b.beste || b.offeneFehler - a.offeneFehler; });
    return zeilen;
  }

  function renderFortschritt() {
    titelEl.textContent = "📊 Fortschrittsbericht";
    var zeilen = baueFortschrittsBericht();

    var box = el("div", { class: "lektion-box" });
    box.appendChild(el("div", { class: "lektion-emoji", text: "📊" }));
    box.appendChild(el("h2", { class: "lektion-titel", text: "Wie läuft's?" }));

    if (zeilen.length === 0) {
      box.appendChild(el("p", { class: "laenge-hinweis", text: "Noch keine Übungen gemacht – zeit, loszulegen! 🚀" }));
      appEl.appendChild(box);
      return;
    }

    var gesamtSterne = 0, maxSterne = 0;
    zeilen.forEach(function (z) { gesamtSterne += z.sterne; maxSterne += 3; });
    box.appendChild(el("p", { class: "laenge-hinweis", text: gesamtSterne + " von " + maxSterne + " Sternen in " + zeilen.length + " geübten Missionen" }));

    var schwaechste = zeilen[0];
    if (schwaechste && schwaechste.beste < 90) {
      var empfehlung = el("div", { class: "beispiel-karte" }, [
        el("div", { class: "beispiel-aufgabe", text: "💡 Empfehlung" }),
        el("div", { text: schwaechste.fach.icon + " " + schwaechste.fach.name + " · " + schwaechste.thema.titel + " braucht gerade am meisten Übung. Am besten noch einmal die Lektion mit den Beispielrechnungen anschauen." })
      ]);
      box.appendChild(empfehlung);
    }

    appEl.appendChild(box);

    var liste = el("div", { class: "fortschritt-liste" });
    zeilen.forEach(function (z) {
      var status = statusFuerBeste(z.beste);
      var karte = el("div", { class: "fortschritt-zeile" });
      karte.appendChild(el("div", { class: "fortschritt-zeile-kopf" }, [
        el("span", { class: "fortschritt-fach", text: z.fach.icon + " " + z.fach.name + " · " + z.thema.titel }),
        el("span", { class: "fortschritt-sterne", text: sterneAnzeige(z.sterne) })
      ]));
      karte.appendChild(el("div", { class: "fortschritt-zeile-details" }, [
        el("span", { class: "status-badge " + status.klasse, text: status.label }),
        el("span", { class: "fortschritt-prozent", text: z.beste + " % beste Runde" }),
        z.offeneFehler > 0 ? el("span", { class: "fortschritt-offene", text: z.offeneFehler + " Frage" + (z.offeneFehler === 1 ? "" : "n") + " zur Wiederholung" }) : null
      ]));
      var lernBtn = el("button", { class: "btn-primary btn-secondary", text: "📖 Nochmal lernen" });
      lernBtn.addEventListener("click", function () {
        state.fach = z.fach;
        state.thema = z.thema;
        state.view = z.thema.vokabeln ? "vokabeln" : (z.thema.lektion ? "lektion" : "themen");
        render();
      });
      karte.appendChild(lernBtn);
      liste.appendChild(karte);
    });
    appEl.appendChild(liste);

    var abmeldenBtn = el("button", { class: "btn-primary btn-secondary", text: "🔒 Zurück zur Startseite" });
    abmeldenBtn.addEventListener("click", function () { state.view = "faecher"; render(); });
    appEl.appendChild(abmeldenBtn);
  }

  if (fortschrittBtn) {
    fortschrittBtn.addEventListener("click", function () {
      state.view = "fortschritt-login";
      render();
    });
  }

  backBtn.addEventListener("click", function () {
    if (state.view === "themen") state.view = "faecher";
    else if (state.view === "lektion" || state.view === "vokabeln" || state.view === "kurzcheck") state.view = "themen";
    else if (state.view === "uebung" || state.view === "ergebnis") state.view = state.fach ? "themen" : "faecher";
    else if (state.view === "fortschritt-login" || state.view === "fortschritt") state.view = "faecher";
    else if (state.view === "spiele" || state.view === "spiele-abzeichen") state.view = "faecher";
    else if (state.view === "spiele-modi") state.view = "spiele";
    else if (state.view === "spiele-ergebnis") state.view = "spiele-modi";
    else if (["spiele-quiz", "spiele-blitz", "spiele-dragdrop", "spiele-memory", "spiele-luecken"].indexOf(state.view) !== -1) {
      raeumeSpielSession();
      state.view = "spiele-modi";
    }
    else if (state.view === "mathe-animation") { state.animation = null; state.view = "lektion"; }
    render();
  });

  // ---------- 30-Minuten-Lernzeit-Timer (sichtbar auf jedem Bildschirm, auch beim Lesen) ----------
  var TIMER_DAUER_SEK = 30 * 60;
  var timerSekunden = TIMER_DAUER_SEK;
  var timerLaeuft = false;
  var timerIntervall = null;

  function formatiereZeit(sek) {
    var m = Math.floor(sek / 60);
    var s = sek % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }
  function aktualisiereTimerAnzeige() {
    if (!timerBtn) return;
    timerBtn.textContent = "⏱️ " + formatiereZeit(timerSekunden);
    timerBtn.classList.toggle("laeuft", timerLaeuft);
    timerBtn.classList.toggle("gleich-null", timerSekunden <= 60 && timerSekunden > 0);
  }
  function pausiereTimer() {
    timerLaeuft = false;
    clearInterval(timerIntervall);
    aktualisiereTimerAnzeige();
  }
  function zeigeTimerEndeMeldung() {
    zeigeToast("🎉 30 Minuten geschafft! Zeit für eine kleine Pause. 💪", "info", 6000);
  }
  function timerTick() {
    timerSekunden--;
    if (timerSekunden <= 0) {
      timerSekunden = 0;
      pausiereTimer();
      zeigeTimerEndeMeldung();
      return;
    }
    aktualisiereTimerAnzeige();
  }
  function starteTimer() {
    if (timerLaeuft) return;
    timerLaeuft = true;
    timerIntervall = setInterval(timerTick, 1000);
    aktualisiereTimerAnzeige();
  }
  if (timerBtn) {
    timerBtn.addEventListener("click", function () {
      if (timerSekunden <= 0) {
        timerSekunden = TIMER_DAUER_SEK;
        starteTimer();
        return;
      }
      if (timerLaeuft) pausiereTimer();
      else starteTimer();
    });
    aktualisiereTimerAnzeige();
  }

  if (refreshBtn) {
    refreshBtn.addEventListener("click", function () {
      if (ANSICHTEN_MIT_LAUFENDER_AUFGABE.indexOf(state.view) !== -1) {
        zeigeToast("😊 Beende erst deine Mission, dann kannst du aktualisieren!", "warn");
        return;
      }
      refreshBtn.classList.add("spin");
      var heute = new Date().toISOString().slice(0, 10);
      try { localStorage.setItem(LS_REFRESH, heute); } catch (e) {}
      if (footDate) footDate.textContent = heute;
      setTimeout(function () {
        var url = new URL(window.location.href);
        url.searchParams.set("_v", Date.now().toString());
        window.location.href = url.toString();
      }, 400);
    });
  }

  if (footDate) {
    var gespeichertesDatum = null;
    try { gespeichertesDatum = localStorage.getItem(LS_REFRESH); } catch (e) {}
    footDate.textContent = gespeichertesDatum || "noch nie";
  }

  render();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("./sw.js").catch(function () {});
    });
  }
})();
