const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const DIR = __dirname;
const FRAMES = path.join(DIR, 'frames');
const FF = '/opt/pw-browsers/ffmpeg-1011/ffmpeg-linux';

(async () => {
  if (fs.existsSync(FRAMES)) fs.rmSync(FRAMES, { recursive: true });
  fs.mkdirSync(FRAMES);

  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox', '--force-color-profile=srgb', '--disable-lcd-text', '--hide-scrollbars']
  });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(DIR, 'anim.html'));
  await page.waitForFunction('window.TOTAL_FRAMES !== undefined');

  const total = await page.evaluate('window.TOTAL_FRAMES');
  const fps = await page.evaluate('window.FPS');
  console.log('Total frames:', total, 'fps:', fps);

  const t0 = Date.now();
  for (let i = 0; i < total; i++) {
    await page.evaluate((f) => window.renderFrame(f), i);
    const buf = await page.screenshot({ type: 'jpeg', quality: 92, clip: { x: 0, y: 0, width: 1080, height: 1920 } });
    fs.writeFileSync(path.join(FRAMES, `f${String(i).padStart(4, '0')}.jpg`), buf);
    if (i % 40 === 0) console.log(`  frame ${i}/${total}  (${((Date.now()-t0)/1000).toFixed(1)}s)`);
  }
  await browser.close();
  console.log('Captured in', ((Date.now()-t0)/1000).toFixed(1), 's');

  // encode JPEG sequence -> VP8 WebM
  const out = path.join(DIR, 'gandalf_eagles_short.webm');
  console.log('Encoding WebM...');
  execFileSync(FF, [
    '-y', '-framerate', String(fps), '-i', path.join(FRAMES, 'f%04d.jpg'),
    '-c:v', 'libvpx', '-b:v', '3M', '-crf', '10', '-pix_fmt', 'yuv420p',
    '-auto-alt-ref', '0', '-r', String(fps), out
  ], { stdio: 'inherit' });
  const kb = (fs.statSync(out).size/1024).toFixed(0);
  console.log('DONE ->', out, kb + ' KB');
})().catch(e => { console.error(e); process.exit(1); });
