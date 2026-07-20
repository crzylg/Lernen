/* BeatJäger — Spiel-Engine. Alles läuft lokal (localStorage), kein Server. */
(function () {
  "use strict";

  var STORAGE = {
    xp: "bj_xp",
    streak: "bj_streak",
    lastPlay: "bj_lastPlay",
    badges: "bj_badges",
    stats: "bj_stats",
  };

  var state = {
    xp: 0,
    streak: 0,
    lastPlay: null,
    badges: [],
    stats: {},
    view: "home",
    params: {},
    session: null,
  };

  var BADGES = [
    { id: "erstsieg", ico: "🏆", name: "Erster Sieg", desc: "Gewinne dein erstes Duell" },
    { id: "combo5", ico: "🔥", name: "Combo x5", desc: "5 richtige Antworten in Folge" },
    { id: "mathe_meister", ico: "🧮", name: "Mathe-Meister", desc: "Mathe-Quiz ohne Fehler" },
    { id: "deutsch_meister", ico: "📖", name: "Deutsch-Meister", desc: "Deutsch-Quiz ohne Fehler" },
    { id: "alleskoenner", ico: "🌟", name: "Alleskönner", desc: "Spiele alle 5 Fächer" },
    { id: "serientaenzer", ico: "📅", name: "Serientänzer", desc: "3 Tage Streak" },
    { id: "legende_serie", ico: "👑", name: "Serien-Legende", desc: "7 Tage Streak" },
    { id: "blitz_champion", ico: "⚡", name: "Blitz-Champion", desc: "15 Treffer in einer Blitz-Runde" },
    { id: "gedaechtnis_profi", ico: "🧠", name: "Gedächtnis-Profi", desc: "Memory ohne Fehlversuch" },
  ];

  var MODE_META = {
    quiz: { ico: "⚔️", name: "Quiz-Duell", desc: "Besiege den Dämon mit richtigen Antworten" },
    blitz: { ico: "⚡", name: "Blitz-Runde", desc: "So viele Treffer wie möglich in 45 Sekunden" },
    dragdrop: { ico: "🧲", name: "Sortierschlacht", desc: "Bring alles in die richtige Reihenfolge" },
    memory: { ico: "🧠", name: "Erinnerungs-Duell", desc: "Finde alle passenden Paare" },
    fillblank: { ico: "✨", name: "Lückenzauber", desc: "Wähle das richtige Wort für die Lücke" },
  };

  // ---------- Persistence ----------
  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw !== null ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  }

  // ---------- Helpers ----------
  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }
  function pickRandom(arr, n) {
    var copy = shuffle(arr.slice());
    return n >= copy.length ? copy : copy.slice(0, n);
  }
  function todayStr() {
    return new Date().toISOString().slice(0, 10);
  }
  function yesterdayStr() {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().slice(0, 10);
  }
  function showToast(msg) {
    var el = document.getElementById("toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.className = "toast";
      el.hidden = true;
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(showToast._tm);
    showToast._tm = setTimeout(function () { el.hidden = true; }, 2200);
  }
  function buildShuffledOptions(q) {
    var correctText = q.options[q.correct];
    var texts = shuffle(q.options.slice());
    return { texts: texts, correctIdx: texts.indexOf(correctText) };
  }
  function subjectMeta(id) {
    for (var i = 0; i < BJ_SUBJECTS.length; i++) if (BJ_SUBJECTS[i].id === id) return BJ_SUBJECTS[i];
    return null;
  }
  function availableModes(subjectId) {
    var modes = ["quiz", "blitz"];
    if (BJ_DRAGDROP[subjectId]) modes.push("dragdrop");
    if (BJ_MEMORY[subjectId]) modes.push("memory");
    if (BJ_FILLBLANK[subjectId]) modes.push("fillblank");
    return modes;
  }

  // ---------- Level / XP ----------
  var XP_PER_LEVEL = 80;
  function levelFromXp(xp) { return Math.floor(xp / XP_PER_LEVEL) + 1; }
  function xpIntoLevel(xp) { return xp % XP_PER_LEVEL; }
  function rankTitle(level) {
    if (level >= 19) return "Legende";
    if (level >= 14) return "Superstar";
    if (level >= 10) return "Headliner";
    if (level >= 7) return "Rising Star";
    if (level >= 5) return "Support-Act";
    if (level >= 3) return "Backup-Tänzer:in";
    return "Trainee";
  }

  function updateStreak() {
    var today = todayStr();
    if (state.lastPlay === today) return;
    if (state.lastPlay === yesterdayStr()) state.streak += 1;
    else state.streak = 1;
    state.lastPlay = today;
    save(STORAGE.streak, state.streak);
    save(STORAGE.lastPlay, state.lastPlay);
  }

  function recordSubjectPlayed(subjectId, mode, score) {
    if (!state.stats[subjectId]) state.stats[subjectId] = { played: [], best: {} };
    var st = state.stats[subjectId];
    if (st.played.indexOf(mode) === -1) st.played.push(mode);
    if (score !== undefined && (st.best[mode] === undefined || score > st.best[mode])) st.best[mode] = score;
    save(STORAGE.stats, state.stats);
  }

  function unlockBadge(id, list) {
    if (state.badges.indexOf(id) !== -1) return;
    state.badges.push(id);
    save(STORAGE.badges, state.badges);
    var meta = null;
    for (var i = 0; i < BADGES.length; i++) if (BADGES[i].id === id) meta = BADGES[i];
    if (meta) list.push(meta);
  }

  function checkBadges(ctx) {
    var unlocked = [];
    if (ctx.correct > 0) unlockBadge("erstsieg", unlocked);
    if (ctx.comboMax >= 5) unlockBadge("combo5", unlocked);
    if (ctx.mode === "quiz" && ctx.subject === "mathe" && ctx.correct === ctx.total) unlockBadge("mathe_meister", unlocked);
    if (ctx.mode === "quiz" && ctx.subject === "deutsch" && ctx.correct === ctx.total) unlockBadge("deutsch_meister", unlocked);
    if (ctx.mode === "blitz" && ctx.correct >= 15) unlockBadge("blitz_champion", unlocked);
    if (ctx.mode === "memory" && ctx.perfect) unlockBadge("gedaechtnis_profi", unlocked);
    if (state.streak >= 3) unlockBadge("serientaenzer", unlocked);
    if (state.streak >= 7) unlockBadge("legende_serie", unlocked);
    var playedSubjects = Object.keys(state.stats).filter(function (s) { return state.stats[s].played.length > 0; });
    if (playedSubjects.length >= 5) unlockBadge("alleskoenner", unlocked);
    return unlocked;
  }

  function applyXpAndStreak(amount) {
    state.xp += amount;
    save(STORAGE.xp, state.xp);
    updateStreak();
  }

  function starsFromRatio(correct, total) {
    if (total === 0) return 0;
    var r = correct / total;
    if (r >= 0.99) return 3;
    if (r >= 0.6) return 2;
    if (correct > 0) return 1;
    return 0;
  }

  // ---------- Navigation ----------
  function cleanupSession() {
    if (state.session && state.session.timerId) {
      clearInterval(state.session.timerId);
    }
    state.session = null;
  }

  function show(view, params) {
    cleanupSession();
    state.view = view;
    state.params = params || {};
    render();
  }

  var backBtn = null, profileChip = null, appEl = null;

  function render() {
    var back = backBtn;
    back.hidden = state.view === "home";
    back.onclick = function () {
      if (state.view === "subject") show("home");
      else if (state.view === "profile") show("home");
      else show("subject", { subjectId: state.params.subjectId });
    };
    profileChip.textContent = "Lvl " + levelFromXp(state.xp);

    if (state.view === "home") renderHome();
    else if (state.view === "subject") renderSubject(state.params.subjectId);
    else if (state.view === "profile") renderProfile();
    else if (state.view === "quiz") renderQuizStart(state.params.subjectId);
    else if (state.view === "blitz") renderBlitzStart(state.params.subjectId);
    else if (state.view === "dragdrop") renderDragdropStart(state.params.subjectId);
    else if (state.view === "memory") renderMemoryStart(state.params.subjectId);
    else if (state.view === "fillblank") renderFillblankStart(state.params.subjectId);
    else if (state.view === "result") renderResult(state.params);
  }

  // ---------- Home ----------
  function renderHome() {
    var level = levelFromXp(state.xp);
    var into = xpIntoLevel(state.xp);
    var pct = (into / XP_PER_LEVEL) * 100;
    var html = "";
    html += "<div class=\"hero\">";
    html += "<div class=\"hero-orb\"><div class=\"hero-orb-inner\">🎤</div></div>";
    html += "<div class=\"hero-info\">";
    html += "<p class=\"hero-rank\">Lvl " + level + " · " + rankTitle(level) + "</p>";
    html += "<div class=\"hero-xpbar\"><div class=\"hero-xpbar-fill\" style=\"width:" + pct + "%\"></div></div>";
    html += "<p class=\"hero-xptext\">" + into + " / " + XP_PER_LEVEL + " XP bis zum nächsten Level</p>";
    html += "</div>";
    html += "<div class=\"hero-streak\"><b>🔥" + state.streak + "</b>Streak</div>";
    html += "</div>";

    html += "<div class=\"subject-grid\">";
    BJ_SUBJECTS.forEach(function (s) {
      var st = state.stats[s.id];
      var playedCount = st ? st.played.length : 0;
      var pctBar = Math.min(100, playedCount * 20);
      html += "<div class=\"subject-card\" data-subject=\"" + s.id + "\">";
      html += "<span class=\"ico\">" + s.icon + "</span>";
      html += "<p class=\"name\">" + s.name + "</p>";
      html += "<p class=\"tagline\">" + s.tagline + "</p>";
      html += "<div class=\"mini-bar\"><div class=\"mini-bar-fill\" style=\"width:" + pctBar + "%\"></div></div>";
      html += "</div>";
    });
    html += "</div>";
    appEl.innerHTML = html;
    appEl.querySelectorAll(".subject-card").forEach(function (el) {
      el.addEventListener("click", function () { show("subject", { subjectId: el.dataset.subject }); });
    });
  }

  // ---------- Subject mode list ----------
  function renderSubject(subjectId) {
    var s = subjectMeta(subjectId);
    var modes = availableModes(subjectId);
    var st = state.stats[subjectId];
    var html = "<p class=\"section-title\">" + s.icon + " " + s.name + " — Wähle dein Spiel</p>";
    html += "<div class=\"mode-list\">";
    modes.forEach(function (m) {
      var meta = MODE_META[m];
      var best = st && st.best[m] !== undefined ? st.best[m] : null;
      html += "<div class=\"mode-card\" data-mode=\"" + m + "\">";
      html += "<span class=\"ico\">" + meta.ico + "</span>";
      html += "<div class=\"mode-info\"><p class=\"mode-name\">" + meta.name + "</p><p class=\"mode-desc\">" + meta.desc + "</p></div>";
      if (best !== null) html += "<span class=\"mode-best\">🏅 " + best + "</span>";
      html += "</div>";
    });
    html += "</div>";
    appEl.innerHTML = html;
    appEl.querySelectorAll(".mode-card").forEach(function (el) {
      el.addEventListener("click", function () { show(el.dataset.mode, { subjectId: subjectId }); });
    });
  }

  // ---------- Quiz (Battle) ----------
  function renderQuizStart(subjectId) {
    var pool = BJ_QUIZ[subjectId] || [];
    var count = Math.min(8, pool.length);
    state.session = {
      type: "quiz", subject: subjectId,
      questions: pickRandom(pool, count),
      idx: 0, correct: 0, combo: 0, comboMax: 0, hearts: 3, xpEarned: 0, answered: false,
    };
    renderQuizQuestion();
  }
  function renderQuizQuestion() {
    var s = state.session;
    var total = s.questions.length;
    var q = s.questions[s.idx];
    s.currentShuffled = buildShuffledOptions(q);
    var hpPct = ((total - s.idx) / total) * 100;
    var html = "";
    html += "<div class=\"battle-hud\">";
    html += "<div class=\"demon\" id=\"demon\">👹</div>";
    html += "<div class=\"hud-mid\">";
    html += "<div class=\"hp-bar\"><div class=\"hp-bar-fill\" style=\"width:" + hpPct + "%\"></div></div>";
    html += "<div class=\"hearts\">";
    for (var i = 0; i < 3; i++) html += "<span class=\"heart" + (i < s.hearts ? "" : " lost") + "\">❤️</span>";
    html += "</div></div>";
    html += "<div class=\"combo-chip\">🔥" + s.combo + "x</div>";
    html += "</div>";
    html += "<div class=\"question-card\"><p class=\"qtext\">" + q.q + "</p></div>";
    html += "<div class=\"options-grid\">";
    s.currentShuffled.texts.forEach(function (t, i) {
      html += "<button class=\"opt-btn\" data-i=\"" + i + "\">" + t + "</button>";
    });
    html += "</div>";
    appEl.innerHTML = html;
    s.answered = false;
    appEl.querySelectorAll(".opt-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { onQuizAnswer(parseInt(btn.dataset.i, 10)); });
    });
  }
  function onQuizAnswer(i) {
    var s = state.session;
    if (s.answered) return;
    s.answered = true;
    var isCorrect = i === s.currentShuffled.correctIdx;
    appEl.querySelectorAll(".opt-btn").forEach(function (btn) {
      btn.disabled = true;
      var bi = parseInt(btn.dataset.i, 10);
      if (bi === s.currentShuffled.correctIdx) btn.classList.add("correct");
      else if (bi === i) btn.classList.add("wrong");
    });
    if (isCorrect) {
      s.correct += 1; s.combo += 1; s.comboMax = Math.max(s.comboMax, s.combo);
      s.xpEarned += s.combo >= 3 ? 20 : 10;
      var demon = document.getElementById("demon");
      if (demon) { demon.classList.add("hit"); setTimeout(function () { demon.classList.remove("hit"); }, 350); }
    } else {
      s.combo = 0; s.hearts -= 1;
    }
    setTimeout(function () {
      s.idx += 1;
      if (s.idx >= s.questions.length || s.hearts <= 0) finishQuiz();
      else renderQuizQuestion();
    }, 900);
  }
  function finishQuiz() {
    var s = state.session;
    var stars = starsFromRatio(s.correct, s.questions.length);
    applyXpAndStreak(s.xpEarned);
    recordSubjectPlayed(s.subject, "quiz", s.correct);
    var badges = checkBadges({ mode: "quiz", subject: s.subject, correct: s.correct, total: s.questions.length, comboMax: s.comboMax });
    show("result", { subjectId: s.subject, mode: "quiz", stars: stars, correct: s.correct, total: s.questions.length, xpEarned: s.xpEarned, newBadges: badges });
  }

  // ---------- Blitz ----------
  function renderBlitzStart(subjectId) {
    var pool = BJ_QUIZ[subjectId] || [];
    state.session = {
      type: "blitz", subject: subjectId, pool: pool, timeLeft: 45, correct: 0, combo: 0, comboMax: 0, xpEarned: 0, answered: false,
    };
    nextBlitzQuestion();
    renderBlitz();
    state.session.timerId = setInterval(function () {
      state.session.timeLeft -= 1;
      updateBlitzTimerBar();
      if (state.session.timeLeft <= 0) finishBlitz();
    }, 1000);
  }
  function nextBlitzQuestion() {
    var s = state.session;
    var pool = s.pool;
    var q;
    do { q = pool[Math.floor(Math.random() * pool.length)]; } while (pool.length > 1 && q === s.current);
    s.current = q;
    s.currentShuffled = buildShuffledOptions(q);
    s.answered = false;
  }
  function updateBlitzTimerBar() {
    var s = state.session;
    var fill = document.getElementById("blitzTimerFill");
    if (!fill) return;
    var pct = Math.max(0, (s.timeLeft / 45) * 100);
    fill.style.width = pct + "%";
    fill.classList.toggle("urgent", s.timeLeft <= 10);
    var scoreEl = document.getElementById("blitzTimeLbl");
    if (scoreEl) scoreEl.textContent = Math.max(0, s.timeLeft) + "s";
  }
  function renderBlitz() {
    var s = state.session;
    var html = "";
    html += "<div class=\"timer-bar\"><div class=\"timer-bar-fill\" id=\"blitzTimerFill\" style=\"width:100%\"></div></div>";
    html += "<p class=\"blitz-score\">" + s.correct + "</p>";
    html += "<p class=\"blitz-label\">Treffer · Combo 🔥" + s.combo + "x · <span id=\"blitzTimeLbl\">" + s.timeLeft + "s</span></p>";
    html += "<div class=\"question-card\"><p class=\"qtext\">" + s.current.q + "</p></div>";
    html += "<div class=\"options-grid\" id=\"blitzOptions\">";
    s.currentShuffled.texts.forEach(function (t, i) {
      html += "<button class=\"opt-btn\" data-i=\"" + i + "\">" + t + "</button>";
    });
    html += "</div>";
    appEl.innerHTML = html;
    bindBlitzOptions();
  }
  function bindBlitzOptions() {
    appEl.querySelectorAll("#blitzOptions .opt-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { onBlitzAnswer(parseInt(btn.dataset.i, 10)); });
    });
  }
  function onBlitzAnswer(i) {
    var s = state.session;
    if (s.answered || s.timeLeft <= 0) return;
    s.answered = true;
    var isCorrect = i === s.currentShuffled.correctIdx;
    appEl.querySelectorAll("#blitzOptions .opt-btn").forEach(function (btn) {
      btn.disabled = true;
      var bi = parseInt(btn.dataset.i, 10);
      if (bi === s.currentShuffled.correctIdx) btn.classList.add("correct");
      else if (bi === i) btn.classList.add("wrong");
    });
    if (isCorrect) {
      s.correct += 1; s.combo += 1; s.comboMax = Math.max(s.comboMax, s.combo);
      s.xpEarned += s.combo >= 5 ? 12 : 6;
    } else {
      s.combo = 0;
    }
    setTimeout(function () {
      if (s.timeLeft <= 0) return;
      nextBlitzQuestion();
      renderBlitz();
    }, 350);
  }
  function finishBlitz() {
    var s = state.session;
    clearInterval(s.timerId);
    var stars = s.correct >= 20 ? 3 : s.correct >= 12 ? 2 : s.correct >= 5 ? 1 : 0;
    applyXpAndStreak(s.xpEarned);
    recordSubjectPlayed(s.subject, "blitz", s.correct);
    var badges = checkBadges({ mode: "blitz", subject: s.subject, correct: s.correct, total: s.correct, comboMax: s.comboMax });
    show("result", { subjectId: s.subject, mode: "blitz", stars: stars, correct: s.correct, total: null, xpEarned: s.xpEarned, newBadges: badges });
  }

  // ---------- Drag & Drop (Sortierschlacht) ----------
  function renderDragdropStart(subjectId) {
    var pool = BJ_DRAGDROP[subjectId] || [];
    var count = Math.min(3, pool.length);
    state.session = {
      type: "dragdrop", subject: subjectId, rounds: pickRandom(pool, count),
      idx: 0, correctRounds: 0, xpEarned: 0,
    };
    renderDragdropRound();
  }
  function renderDragdropRound() {
    var s = state.session;
    var task = s.rounds[s.idx];
    var n = task.items.length;
    var shuffled = shuffle(task.items.slice());
    var tries = 0;
    while (n > 1 && tries < 10 && shuffled.every(function (v, i) { return v === task.items[i]; })) {
      shuffled = shuffle(task.items.slice()); tries++;
    }
    s.correctOrder = task.items;
    s.placed = new Array(n).fill(null);
    s.pool = shuffled;

    var html = "<p class=\"dd-prompt\">" + task.prompt + "</p>";
    html += "<div class=\"dd-slots\" id=\"ddSlots\">";
    for (var i = 0; i < n; i++) html += "<div class=\"dd-slot\" data-slot=\"" + i + "\">Platz " + (i + 1) + "</div>";
    html += "</div>";
    html += "<div class=\"dd-pool\" id=\"ddPool\"></div>";
    appEl.innerHTML = html;
    renderDragdropPool();
    appEl.querySelectorAll("#ddSlots .dd-slot").forEach(function (el) {
      el.addEventListener("click", function () { onDragdropSlotClick(parseInt(el.dataset.slot, 10)); });
    });
  }
  function renderDragdropPool() {
    var s = state.session;
    var pool = document.getElementById("ddPool");
    pool.innerHTML = "";
    s.pool.forEach(function (val, i) {
      var chip = document.createElement("button");
      chip.className = "dd-chip";
      chip.textContent = val;
      chip.dataset.val = i;
      chip.addEventListener("click", function () { onDragdropChipClick(val); });
      pool.appendChild(chip);
    });
    var slots = appEl.querySelectorAll("#ddSlots .dd-slot");
    slots.forEach(function (el, i) {
      var v = s.placed[i];
      el.textContent = v !== null ? v : "Platz " + (i + 1);
      el.classList.toggle("filled", v !== null);
    });
  }
  function onDragdropChipClick(val) {
    var s = state.session;
    var emptyIdx = s.placed.indexOf(null);
    if (emptyIdx === -1) return;
    s.placed[emptyIdx] = val;
    var poolIdx = s.pool.indexOf(val);
    if (poolIdx !== -1) s.pool.splice(poolIdx, 1);
    renderDragdropPool();
    if (s.placed.indexOf(null) === -1) {
      setTimeout(checkDragdropRound, 400);
    }
  }
  function onDragdropSlotClick(idx) {
    var s = state.session;
    var v = s.placed[idx];
    if (v === null) return;
    s.placed[idx] = null;
    s.pool.push(v);
    renderDragdropPool();
  }
  function checkDragdropRound() {
    var s = state.session;
    var match = s.placed.every(function (v, i) { return v === s.correctOrder[i]; });
    var slotsEl = document.getElementById("ddSlots");
    if (match) {
      s.correctRounds += 1; s.xpEarned += 15;
      showToast("✅ Richtig sortiert!");
      setTimeout(function () {
        s.idx += 1;
        if (s.idx >= s.rounds.length) finishDragdrop();
        else renderDragdropRound();
      }, 700);
    } else {
      if (slotsEl) { slotsEl.classList.add("shake"); setTimeout(function () { slotsEl.classList.remove("shake"); }, 350); }
      showToast("Noch nicht ganz richtig — versuch's nochmal!");
      s.pool = shuffle(s.placed.slice());
      s.placed = new Array(s.correctOrder.length).fill(null);
      renderDragdropPool();
    }
  }
  function finishDragdrop() {
    var s = state.session;
    var stars = s.correctRounds === s.rounds.length ? 3 : s.correctRounds >= Math.ceil(s.rounds.length / 2) ? 2 : 1;
    applyXpAndStreak(s.xpEarned);
    recordSubjectPlayed(s.subject, "dragdrop", s.correctRounds);
    var badges = checkBadges({ mode: "dragdrop", subject: s.subject, correct: s.correctRounds, total: s.rounds.length, comboMax: 0 });
    show("result", { subjectId: s.subject, mode: "dragdrop", stars: stars, correct: s.correctRounds, total: s.rounds.length, xpEarned: s.xpEarned, newBadges: badges });
  }

  // ---------- Memory (Erinnerungs-Duell) ----------
  function renderMemoryStart(subjectId) {
    var poolPairs = BJ_MEMORY[subjectId] || [];
    var count = Math.min(6, poolPairs.length);
    var pairs = pickRandom(poolPairs, count);
    var cards = [];
    pairs.forEach(function (p, i) {
      cards.push({ pairIdx: i, text: p[0] });
      cards.push({ pairIdx: i, text: p[1] });
    });
    shuffle(cards);
    state.session = {
      type: "memory", subject: subjectId, pairs: pairs, cards: cards,
      flipped: [], matchedCount: 0, mismatches: 0, xpEarned: 0, lock: false,
    };
    renderMemory();
  }
  function renderMemory() {
    var s = state.session;
    var html = "<p class=\"section-title\">🧠 Erinnerungs-Duell — " + s.matchedCount + " / " + s.pairs.length + " Paare</p>";
    html += "<div class=\"memory-grid\">";
    s.cards.forEach(function (c, i) {
      var flippedNow = s.flipped.indexOf(i) !== -1;
      var matched = c.matched;
      html += "<div class=\"memory-card" + (flippedNow ? " flipped" : "") + (matched ? " matched" : "") + "\" data-i=\"" + i + "\">";
      html += "<div class=\"memory-card-inner\">";
      html += "<div class=\"memory-face front\">❓</div>";
      html += "<div class=\"memory-face back\">" + c.text + "</div>";
      html += "</div></div>";
    });
    html += "</div>";
    appEl.innerHTML = html;
    appEl.querySelectorAll(".memory-card").forEach(function (el) {
      el.addEventListener("click", function () { onMemoryCardClick(parseInt(el.dataset.i, 10)); });
    });
  }
  function onMemoryCardClick(i) {
    var s = state.session;
    var c = s.cards[i];
    if (s.lock || c.matched || s.flipped.indexOf(i) !== -1 || s.flipped.length >= 2) return;
    s.flipped.push(i);
    renderMemory();
    if (s.flipped.length === 2) {
      s.lock = true;
      var a = s.cards[s.flipped[0]], b = s.cards[s.flipped[1]];
      if (a.pairIdx === b.pairIdx) {
        a.matched = true; b.matched = true;
        s.matchedCount += 1; s.xpEarned += 8;
        s.flipped = []; s.lock = false;
        setTimeout(renderMemory, 250);
        if (s.matchedCount === s.pairs.length) setTimeout(finishMemory, 500);
      } else {
        s.mismatches += 1;
        setTimeout(function () { s.flipped = []; s.lock = false; renderMemory(); }, 750);
      }
    }
  }
  function finishMemory() {
    var s = state.session;
    var perfect = s.mismatches === 0;
    var stars = perfect ? 3 : s.mismatches <= 2 ? 2 : 1;
    applyXpAndStreak(s.xpEarned);
    recordSubjectPlayed(s.subject, "memory", s.pairs.length - s.mismatches);
    var badges = checkBadges({ mode: "memory", subject: s.subject, correct: s.pairs.length, total: s.pairs.length, comboMax: 0, perfect: perfect });
    show("result", { subjectId: s.subject, mode: "memory", stars: stars, correct: s.pairs.length, total: s.pairs.length, xpEarned: s.xpEarned, newBadges: badges });
  }

  // ---------- Fillblank (Lückenzauber) ----------
  function renderFillblankStart(subjectId) {
    var pool = BJ_FILLBLANK[subjectId] || [];
    var count = Math.min(6, pool.length);
    state.session = {
      type: "fillblank", subject: subjectId, items: pickRandom(pool, count),
      idx: 0, correct: 0, xpEarned: 0, answered: false,
    };
    renderFillblank();
  }
  function renderFillblank() {
    var s = state.session;
    var item = s.items[s.idx];
    s.currentShuffled = buildShuffledOptions({ options: item.options, correct: item.correct });
    var sentenceHtml = item.text.replace("___", "<span class=\"fillblank-blank\" id=\"blankSpot\">?</span>");
    var html = "<p class=\"section-title\">✨ Lückenzauber — " + (s.idx + 1) + " / " + s.items.length + "</p>";
    html += "<div class=\"question-card\"><p class=\"fillblank-sentence\">" + sentenceHtml + "</p></div>";
    html += "<div class=\"options-grid\">";
    s.currentShuffled.texts.forEach(function (t, i) {
      html += "<button class=\"opt-btn\" data-i=\"" + i + "\">" + t + "</button>";
    });
    html += "</div>";
    appEl.innerHTML = html;
    s.answered = false;
    appEl.querySelectorAll(".opt-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { onFillblankAnswer(parseInt(btn.dataset.i, 10)); });
    });
  }
  function onFillblankAnswer(i) {
    var s = state.session;
    if (s.answered) return;
    s.answered = true;
    var isCorrect = i === s.currentShuffled.correctIdx;
    var blank = document.getElementById("blankSpot");
    if (blank) blank.textContent = s.currentShuffled.texts[s.currentShuffled.correctIdx];
    appEl.querySelectorAll(".opt-btn").forEach(function (btn) {
      btn.disabled = true;
      var bi = parseInt(btn.dataset.i, 10);
      if (bi === s.currentShuffled.correctIdx) btn.classList.add("correct");
      else if (bi === i) btn.classList.add("wrong");
    });
    if (isCorrect) { s.correct += 1; s.xpEarned += 10; }
    setTimeout(function () {
      s.idx += 1;
      if (s.idx >= s.items.length) finishFillblank();
      else renderFillblank();
    }, 900);
  }
  function finishFillblank() {
    var s = state.session;
    var stars = starsFromRatio(s.correct, s.items.length);
    applyXpAndStreak(s.xpEarned);
    recordSubjectPlayed(s.subject, "fillblank", s.correct);
    var badges = checkBadges({ mode: "fillblank", subject: s.subject, correct: s.correct, total: s.items.length, comboMax: 0 });
    show("result", { subjectId: s.subject, mode: "fillblank", stars: stars, correct: s.correct, total: s.items.length, xpEarned: s.xpEarned, newBadges: badges });
  }

  // ---------- Result ----------
  function renderResult(p) {
    var starStr = "";
    for (var i = 0; i < 3; i++) starStr += i < p.stars ? "⭐" : "⚪";
    var title = p.stars === 3 ? "Perfektes Duell!" : p.stars === 2 ? "Gut gekämpft!" : p.stars === 1 ? "Geschafft!" : "Nächstes Mal klappt's!";
    var sub = p.total ? p.correct + " von " + p.total + " richtig" : p.correct + " Treffer";
    var html = "";
    html += "<div class=\"result-stars\">" + starStr + "</div>";
    html += "<p class=\"result-title\">" + title + "</p>";
    html += "<p class=\"result-sub\">" + sub + "</p>";
    html += "<p class=\"result-xp\">+" + p.xpEarned + " XP</p>";
    (p.newBadges || []).forEach(function (b) {
      html += "<div class=\"badge-unlock\"><span class=\"ico\">" + b.ico + "</span><span class=\"txt\">Neues Abzeichen: " + b.name + "</span></div>";
    });
    html += "<div class=\"result-actions\">";
    html += "<button class=\"btn btn-ghost\" id=\"resBack\">Zurück</button>";
    html += "<button class=\"btn btn-primary\" id=\"resAgain\">Nochmal</button>";
    html += "</div>";
    appEl.innerHTML = html;
    document.getElementById("resBack").addEventListener("click", function () { show("subject", { subjectId: p.subjectId }); });
    document.getElementById("resAgain").addEventListener("click", function () { show(p.mode, { subjectId: p.subjectId }); });
  }

  // ---------- Profile ----------
  function renderProfile() {
    var level = levelFromXp(state.xp);
    var into = xpIntoLevel(state.xp);
    var pct = (into / XP_PER_LEVEL) * 100;
    var html = "<div class=\"hero\">";
    html += "<div class=\"hero-orb\"><div class=\"hero-orb-inner\">🎤</div></div>";
    html += "<div class=\"hero-info\">";
    html += "<p class=\"hero-rank\">Lvl " + level + " · " + rankTitle(level) + "</p>";
    html += "<div class=\"hero-xpbar\"><div class=\"hero-xpbar-fill\" style=\"width:" + pct + "%\"></div></div>";
    html += "<p class=\"hero-xptext\">" + state.xp + " XP insgesamt</p>";
    html += "</div>";
    html += "<div class=\"hero-streak\"><b>🔥" + state.streak + "</b>Streak</div>";
    html += "</div>";
    html += "<p class=\"section-title\">Abzeichen</p>";
    html += "<div class=\"badge-grid\">";
    BADGES.forEach(function (b) {
      var unlocked = state.badges.indexOf(b.id) !== -1;
      html += "<div class=\"badge-tile" + (unlocked ? "" : " locked") + "\" title=\"" + b.desc + "\">";
      html += "<span class=\"ico\">" + b.ico + "</span><span class=\"lbl\">" + b.name + "</span>";
      html += "</div>";
    });
    html += "</div>";
    appEl.innerHTML = html;
  }

  // ---------- Init ----------
  function init() {
    backBtn = document.getElementById("btnBack");
    profileChip = document.getElementById("profileLevelChip");
    appEl = document.getElementById("app");

    state.xp = load(STORAGE.xp, 0);
    state.streak = load(STORAGE.streak, 0);
    state.lastPlay = load(STORAGE.lastPlay, null);
    state.badges = load(STORAGE.badges, []);
    state.stats = load(STORAGE.stats, {});

    document.getElementById("btnProfile").addEventListener("click", function () { show("profile"); });

    show("home");

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
