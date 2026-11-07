import { chromium } from '@playwright/test';
import path from 'path';
import fs from 'fs';

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1
  });

  const page = await context.newPage();
  const filePath = `file://${path.resolve('presentation/index.html')}`;
  await page.goto(filePath);
  await page.waitForTimeout(500);

  const outDir = 'evidence/stage-4-demo/slides';
  fs.mkdirSync(outDir, { recursive: true });

  for (let i = 1; i <= 8; i++) {
    await page.evaluate((idx) => {
      window.showSlide(idx);
    }, i);
    await page.waitForTimeout(300);
    const shotPath = path.join(outDir, `slide-${i}.png`);
    await page.screenshot({ path: shotPath });
    console.log(`Captured slide ${i} -> ${shotPath}`);
  }

  await browser.close();
  console.log('All 8 slides captured successfully.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
