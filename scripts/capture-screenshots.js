import { chromium } from '@playwright/test';
import { spawn } from 'child_process';
import path from 'path';

async function main() {
  console.log('Starting preview server...');
  const server = spawn('npx', ['vite', 'preview', '--port', '4173'], {
    stdio: 'inherit'
  });

  // wait for preview server
  await new Promise(r => setTimeout(r, 1500));

  const browser = await chromium.launch();

  // 1. Desktop 1440px
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto('http://localhost:4173');
  await desktopPage.waitForLoadState('networkidle');

  // Tab 1: MOS Career Bridge
  await desktopPage.screenshot({ path: 'evidence/stage-2-build/frontend/desktop-1440-mos.png', fullPage: true });
  console.log('Saved desktop-1440-mos.png');

  // Tab 2: VA Claim Evidence
  await desktopPage.getByRole('button', { name: 'VA Claim Nexus Auditor' }).click();
  await desktopPage.waitForTimeout(300);
  await desktopPage.screenshot({ path: 'evidence/stage-2-build/frontend/desktop-1440-claim.png', fullPage: true });
  console.log('Saved desktop-1440-claim.png');

  // Tab 3: 305 Resources
  await desktopPage.getByRole('button', { name: '305 South Florida Hub' }).click();
  await desktopPage.waitForTimeout(300);
  await desktopPage.screenshot({ path: 'evidence/stage-2-build/frontend/desktop-1440-resources.png', fullPage: true });
  console.log('Saved desktop-1440-resources.png');

  await desktopContext.close();

  // 2. Mobile 390px
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:4173');
  await mobilePage.waitForLoadState('networkidle');

  // Mobile Tab 1: MOS
  await mobilePage.screenshot({ path: 'evidence/stage-2-build/frontend/mobile-390-mos.png', fullPage: true });
  console.log('Saved mobile-390-mos.png');

  // Mobile Tab 2: VA Claim
  await mobilePage.getByRole('button', { name: 'VA Claim Nexus Auditor' }).click();
  await mobilePage.waitForTimeout(300);
  await mobilePage.screenshot({ path: 'evidence/stage-2-build/frontend/mobile-390-claim.png', fullPage: true });
  console.log('Saved mobile-390-claim.png');

  // Mobile Tab 3: Resources
  await mobilePage.getByRole('button', { name: '305 South Florida Hub' }).click();
  await mobilePage.waitForTimeout(300);
  await mobilePage.screenshot({ path: 'evidence/stage-2-build/frontend/mobile-390-resources.png', fullPage: true });
  console.log('Saved mobile-390-resources.png');

  await mobileContext.close();
  await browser.close();

  server.kill();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
