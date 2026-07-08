# Gandalf & the Eagles — YouTube Short

A 16.8s vertical (1080×1920) YouTube Short answering *"Why didn't the Eagles just fly
the Ring to Mount Doom?"* — retro, hand-drawn 2D animation with English captions.

Generated entirely for free (no paid API / credits) using only local tools:
HTML5 Canvas → headless Chromium frame capture → ffmpeg (VP8/WebM).

## Files
- `anim.html` — the animation. A deterministic `window.renderFrame(frame)` draws each
  frame on a Canvas with a parchment palette and a per-frame "line boil" wobble
  (hand-drawn look, animated on threes). Three scenes: the eagle plan, Mordor watching
  (Eye of Sauron + Nazgûl), and stealth (hobbits sneaking).
- `capture.js` — Playwright script: renders every frame to JPEG deterministically, then
  pipes the sequence to ffmpeg to encode a VP8 WebM.
- `gandalf_eagles_short.webm` — the finished short (1080×1920, 30fps, ~5.2 MB, silent).

## Rebuild
```bash
npm i playwright                 # browser already provided via PLAYWRIGHT_BROWSERS_PATH
node capture.js                  # writes gandalf_eagles_short.webm
```

## Notes
- Silent by design: the bundled ffmpeg has no audio encoder. Add music/voiceover in
  your editor (CapCut, Canva, etc.) on upload.
- To tweak the script/timing, edit the `beats` array and scene functions in `anim.html`.
