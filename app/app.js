/* Lernplan KI & Genesys - App-Logik
   Sehr einfaches Deutsch. IT-Begriffe im Original. */
(function () {
  "use strict";

  var DATA = window.CURRICULUM || { modules: [], total: 0, updated: "", counts: {} };
  var LS_DONE = "lernplan_done_v2";     // v2: Schluessel jetzt track:nr
  var LS_OPEN = "lernplan_open_v1";
  var LS_REFRESH = "lernplan_refresh_v1";
  var LS_TRACK = "lernplan_track_v1";

  var content = document.getElementById("content");
  var progressFill = document.getElementById("progressFill");
  var progressText = document.getElementById("progressText");
  var searchInput = document.getElementById("search");
  var refreshBtn = document.getElementById("refreshBtn");
  var toast = document.getElementById("toast");

  var done = load(LS_DONE, {});
  var openState = load(LS_OPEN, {});
  var activeTrack = load(LS_TRACK, "genesys");
  if (activeTrack !== "genesys" && activeTrack !== "ai") activeTrack = "genesys";

  function load(k, def) {
    try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? def : v; } catch (e) { return def; }
  }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function uid(tp) { return tp.track + ":" + tp.nr; }

  /* ---------- Link-Builder ---------- */
  function ytLink(q) {
    return "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);
  }
  function fallbackSrc(name) {
    return "https://www.google.com/search?q=" + encodeURIComponent(name + " offizielle Dokumentation");
  }

  /* ---------- Helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function tracksModules() {
    return DATA.modules.filter(function (m) { return m.track === activeTrack; });
  }

  /* ---------- Topic ---------- */
  function topicHTML(tp) {
    var id = uid(tp);
    var isDone = !!done[id];
    var links = "";

    links += '<a class="l-yt" target="_blank" rel="noopener" href="' + ytLink(tp.yt) + '">▶️ YouTube</a>';

    var srcUrl = (tp.src && tp.src[1]) ? tp.src[1] : fallbackSrc(tp.t);
    var srcTitle = (tp.src && tp.src[0]) ? tp.src[0] : "Offizielle Quelle";
    links += '<a class="l-src" target="_blank" rel="noopener" href="' + srcUrl + '">📖 ' + esc(srcTitle) + '</a>';

    (tp.gh || []).forEach(function (g) {
      links += '<a class="l-gh" target="_blank" rel="noopener" href="' + g[1] + '">💻 ' + esc(g[0]) + '</a>';
    });
    (tp.art || []).forEach(function (a) {
      links += '<a class="l-art" target="_blank" rel="noopener" href="' + a[1] + '">📰 ' + esc(a[0]) + '</a>';
    });
    // Im Internet gefundene Texte
    (tp.web || []).forEach(function (w) {
      links += '<a class="l-web" target="_blank" rel="noopener" href="' + w[1] + '">🌐 ' + esc(w[0]) + '</a>';
    });

    var pts = (tp.pts || []).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
    var detail = tp.detail ? '<p class="detail">' + esc(tp.detail) + "</p>" : "";
    var bsp = tp.bsp ? '<p class="bsp"><b>💡 Beispiel:</b> ' + esc(tp.bsp) + "</p>" : "";
    var merke = tp.merke ? '<p class="merke"><b>📌 Merke:</b> ' + esc(tp.merke) + "</p>" : "";

    // Langtext (mehrseitige, ausfuehrliche Erklaerung)
    var lang = "";
    if (tp.lang && tp.lang.length) {
      lang += '<div class="lang">';
      lang += '<div class="lang-badge">📖 Ausführliche Erklärung (mehrere Seiten)</div>';
      tp.lang.forEach(function (sec) {
        lang += '<h5 class="lang-h">' + esc(sec.h) + "</h5>";
        (sec.p || []).forEach(function (par) { lang += '<p class="lang-p">' + esc(par) + "</p>"; });
      });
      lang += "</div>";
    }

    var hasDeep = (tp.lang && tp.lang.length) || detail || bsp || merke;
    var tag = (tp.lang && tp.lang.length) ? " · ausführlich 📖" : (detail ? " · ausführlich" : "");

    return (
      '<article class="topic' + (isDone ? " done" : "") + (hasDeep ? " deep" : "") +
        '" data-id="' + id + '" data-name="' + esc((tp.t + " " + tp.was).toLowerCase()) + '">' +
        '<div class="topic-head">' +
          '<div class="check" data-check="' + id + '">✓</div>' +
          '<div class="topic-t"><span class="nr">Schritt ' + tp.nr + tag + '</span><h4>' + esc(tp.t) + "</h4></div>" +
          '<span class="chev2">▶</span>' +
        "</div>" +
        '<div class="topic-body">' +
          '<p class="was">' + esc(tp.was) + "</p>" +
          detail + lang +
          "<ul>" + pts + "</ul>" +
          bsp + merke +
          '<div class="links">' + links + "</div>" +
        "</div>" +
      "</article>"
    );
  }

  /* ---------- Modul ---------- */
  function moduleHTML(mod, idx, topicsDoneCount) {
    var first = mod.topics[0] ? mod.topics[0].nr : 0;
    var last = mod.topics[mod.topics.length - 1] ? mod.topics[mod.topics.length - 1].nr : 0;
    var isOpen = openState[idx] !== undefined ? openState[idx] : false;
    var topics = mod.topics.map(topicHTML).join("");
    return (
      '<section class="module' + (isOpen ? " open" : "") + '" data-mod="' + idx + '">' +
        '<div class="mod-head" data-modhead="' + idx + '">' +
          '<span class="mod-emoji">' + mod.emoji + "</span>" +
          '<div class="mod-titles"><h3>' + esc(mod.title) + "</h3>" +
            '<p class="ziel">' + esc(mod.ziel) + "</p></div>" +
          '<div class="mod-meta">' +
            '<span class="mod-num">Schritt ' + first + "–" + last + "</span>" +
            '<span class="mod-count">' + topicsDoneCount + "/" + mod.topics.length + " ✓</span>" +
          "</div>" +
          '<span class="chev">▶</span>' +
        "</div>" +
        '<div class="topics">' + topics + "</div>" +
      "</section>"
    );
  }

  /* ---------- Tabs ---------- */
  function tabsHTML() {
    var gc = (DATA.counts && DATA.counts.genesys) || 0;
    var ac = (DATA.counts && DATA.counts.ai) || 0;
    function tab(key, emoji, label, count) {
      return '<button class="tab' + (activeTrack === key ? " active" : "") + '" data-track="' + key + '">' +
        '<span class="tab-emoji">' + emoji + "</span>" +
        '<span class="tab-label">' + label + "</span>" +
        '<span class="tab-count">' + count + " Themen</span>" +
        "</button>";
    }
    return '<div class="tabs">' +
      tab("genesys", "🏦", "Genesys", gc) +
      tab("ai", "🤖", "KI / AI", ac) +
      "</div>";
  }

  /* ---------- Render ---------- */
  function render() {
    var isG = activeTrack === "genesys";
    var introText = isG
      ? "Der <b>Genesys-Pfad</b>: von den Bank-Grundlagen bis zur Zertifizierung <b>GC-AI-DB</b>. " +
        "Arbeite die Module <b>von oben nach unten</b> durch."
      : "Der <b>KI / AI-Pfad</b>: von Python und Mathe über Machine Learning und Deep Learning bis zu " +
        "GenAI, Agenten, Sicherheit und Führung. Viele AI-Themen haben eine <b>ausführliche Erklärung 📖</b> " +
        "mit Praxis-Einsatz und im Internet gefundenen Texten.";

    var intro =
      '<div class="intro">' +
        "<h2>" + (isG ? "🏦 Genesys-Pfad" : "🤖 KI / AI-Pfad") + "</h2>" +
        "<p>" + introText + " Sehr einfaches Deutsch – IT-Begriffe bleiben im Original. " +
        "Tippe ein Thema an; das Kästchen markiert es als gelernt.</p>" +
        '<div class="legend">' +
          "<span>▶️ YouTube</span><span>📖 Offizielle Quelle</span><span>🌐 Web-Text</span>" +
          "<span>💻 GitHub</span><span>📰 Studie</span>" +
        "</div>" +
      "</div>";

    var mods = "";
    DATA.modules.forEach(function (mod, idx) {
      if (mod.track !== activeTrack) return;
      var dc = mod.topics.filter(function (t) { return done[uid(t)]; }).length;
      mods += moduleHTML(mod, idx, dc);
    });

    content.innerHTML = tabsHTML() + intro + mods;
    if (searchInput.value.trim()) applySearch();
    updateProgress();

    document.getElementById("footDate").textContent = load(LS_REFRESH, DATA.updated) || DATA.updated;
    document.getElementById("footCount").textContent = DATA.total;
  }

  function updateProgress() {
    var topics = [];
    tracksModules().forEach(function (m) { topics = topics.concat(m.topics); });
    var total = topics.length || 1;
    var d = topics.filter(function (t) { return done[uid(t)]; }).length;
    var pct = Math.round((d / total) * 100);
    progressFill.style.width = pct + "%";
    progressText.textContent = pct + " %";
    DATA.modules.forEach(function (mod, idx) {
      if (mod.track !== activeTrack) return;
      var el = document.querySelector('.module[data-mod="' + idx + '"] .mod-count');
      if (el) {
        var dc = mod.topics.filter(function (t) { return done[uid(t)]; }).length;
        el.textContent = dc + "/" + mod.topics.length + " ✓";
      }
    });
  }

  /* ---------- Interaktion ---------- */
  content.addEventListener("click", function (e) {
    var tabEl = e.target.closest("[data-track]");
    if (tabEl) {
      var tr = tabEl.getAttribute("data-track");
      if (tr !== activeTrack) {
        activeTrack = tr; save(LS_TRACK, tr);
        window.scrollTo(0, 0);
        render();
      }
      return;
    }

    var checkEl = e.target.closest("[data-check]");
    if (checkEl) {
      var id = checkEl.getAttribute("data-check");
      done[id] = !done[id];
      save(LS_DONE, done);
      checkEl.closest(".topic").classList.toggle("done", !!done[id]);
      updateProgress();
      e.stopPropagation();
      return;
    }

    var modHead = e.target.closest("[data-modhead]");
    if (modHead) {
      var mi = modHead.getAttribute("data-modhead");
      var section = modHead.closest(".module");
      var nowOpen = !section.classList.contains("open");
      section.classList.toggle("open", nowOpen);
      openState[mi] = nowOpen;
      save(LS_OPEN, openState);
      return;
    }

    var head = e.target.closest(".topic-head");
    if (head) head.closest(".topic").classList.toggle("expanded");
  });

  /* ---------- Suche (nur im aktiven Bereich) ---------- */
  function applySearch() {
    var q = searchInput.value.trim().toLowerCase();
    var anyVisible = false;
    document.querySelectorAll(".module").forEach(function (section) {
      var visible = 0;
      section.querySelectorAll(".topic").forEach(function (t) {
        var match = !q || t.getAttribute("data-name").indexOf(q) !== -1;
        t.style.display = match ? "" : "none";
        if (match) visible++;
      });
      section.style.display = visible > 0 ? "" : "none";
      if (visible > 0) anyVisible = true;
      if (q) section.classList.add("open");
    });
    var introEl = document.querySelector(".intro");
    if (introEl) introEl.style.display = q ? "none" : "";
    var old = document.getElementById("noResult");
    if (old) old.remove();
    if (!anyVisible) {
      var div = document.createElement("div");
      div.id = "noResult"; div.className = "empty";
      div.textContent = "Kein Thema gefunden für „" + searchInput.value + "“ im Bereich " +
        (activeTrack === "genesys" ? "Genesys" : "KI / AI") + ".";
      content.appendChild(div);
    }
  }
  searchInput.addEventListener("input", applySearch);

  /* ---------- Quellen aktualisieren ---------- */
  function showToast(msg) {
    toast.textContent = msg;
    toast.hidden = false;
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () { toast.hidden = true; }, 2600);
  }
  refreshBtn.addEventListener("click", function () {
    refreshBtn.classList.add("spin");
    var today = new Date().toISOString().slice(0, 10);
    save(LS_REFRESH, today);
    document.getElementById("footDate").textContent = today;
    if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: "refresh" });
    }
    setTimeout(function () {
      refreshBtn.classList.remove("spin");
      showToast("✅ Quellen aktualisiert – YouTube, Web-Texte & offizielle Seiten zeigen die neuesten Inhalte.");
    }, 900);
  });

  /* ---------- Service Worker ---------- */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }

  render();
})();
