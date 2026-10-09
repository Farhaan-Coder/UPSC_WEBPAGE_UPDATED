import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const widths = [360, 390, 768, 1024, 1440];
const screenshotDir = path.resolve('qa-screenshots');

if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

async function runCheck() {
  console.log('Launching browser with Edge channel...');
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true,
  });

  const results = [];

  for (const width of widths) {
    const context = await browser.newContext({
      viewport: { width, height: 800 },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();

    console.log(`\nTesting viewport width: ${width}px...`);
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });

    // Scroll smoothly down the full page to trigger all observers
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 400;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });

    await page.waitForTimeout(500);

    // Scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);

    // Check for horizontal overflow
    const overflowInfo = await page.evaluate(() => {
      const docWidth = document.documentElement.scrollWidth;
      const winWidth = window.innerWidth;
      const hasOverflow = docWidth > winWidth;
      
      const offenders = [];
      if (hasOverflow) {
        const allElements = document.querySelectorAll('*');
        for (const el of allElements) {
          const rect = el.getBoundingClientRect();
          if (rect.right > winWidth + 1) {
            offenders.push({
              tag: el.tagName.toLowerCase(),
              className: el.className?.toString().slice(0, 80) || '',
              id: el.id || '',
              right: rect.right,
              width: rect.width
            });
            if (offenders.length >= 5) break;
          }
        }
      }

      return {
        docWidth,
        winWidth,
        hasOverflow,
        offenders
      };
    });

    console.log(`Width ${width}px: scrollWidth = ${overflowInfo.docWidth}, innerWidth = ${overflowInfo.winWidth}, overflow: ${overflowInfo.hasOverflow ? 'FAIL' : 'PASS'}`);
    if (overflowInfo.hasOverflow) {
      console.log('Offenders:', overflowInfo.offenders);
    }

    // Save full page screenshot
    const screenshotPath = path.join(screenshotDir, `${width}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved screenshot: ${screenshotPath}`);

    results.push({
      width,
      docWidth: overflowInfo.docWidth,
      winWidth: overflowInfo.winWidth,
      hasOverflow: overflowInfo.hasOverflow,
      offenders: overflowInfo.offenders,
      screenshot: screenshotPath
    });

    await context.close();
  }

  // Functional test: verify modal opens on correct tab
  console.log('\nTesting Modal Entry Points & Tabs...');
  const testContext = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const testPage = await testContext.newPage();
  await testPage.goto('http://localhost:5173', { waitUntil: 'networkidle' });

  // 1. Navbar "Aspirant Login" -> Login Tab
  const loginBtn = testPage.locator('button:has-text("Aspirant Login")').first();
  await loginBtn.click();
  await testPage.waitForTimeout(200);
  const loginTabSelected = await testPage.locator('#tab-login').getAttribute('aria-selected');
  const loginTitle = await testPage.locator('#modal-title').innerText();
  console.log('Click "Aspirant Login" -> aria-selected="true" on #tab-login:', loginTabSelected === 'true', `Title: "${loginTitle}"`);
  console.assert(loginTabSelected === 'true', 'Aspirant Login must select login tab');

  // Close modal with ESC
  await testPage.keyboard.press('Escape');
  await testPage.waitForTimeout(200);
  let modalVisible = await testPage.locator('#panel-auth').isVisible();
  console.log('ESC key closes modal:', !modalVisible);
  console.assert(!modalVisible, 'ESC must close modal');

  // 2. Navbar "Start Free Prep" -> Sign Up Tab
  const signupBtn = testPage.locator('button:has-text("Start Free Prep")').first();
  await signupBtn.click();
  await testPage.waitForTimeout(200);
  const signupTabSelected = await testPage.locator('#tab-signup').getAttribute('aria-selected');
  const signupTitle = await testPage.locator('#modal-title').innerText();
  console.log('Click "Start Free Prep" -> aria-selected="true" on #tab-signup:', signupTabSelected === 'true', `Title: "${signupTitle}"`);
  console.assert(signupTabSelected === 'true', 'Start Free Prep must select signup tab');

  // Switch tab inside modal to Login
  await testPage.locator('#tab-login').click();
  await testPage.waitForTimeout(100);
  const switchedLoginSelected = await testPage.locator('#tab-login').getAttribute('aria-selected');
  const switchedLoginTitle = await testPage.locator('#modal-title').innerText();
  console.log('Click tab switcher in modal -> Login:', switchedLoginSelected === 'true', `Title: "${switchedLoginTitle}"`);
  console.assert(switchedLoginSelected === 'true' && switchedLoginTitle.includes('Welcome Back'), 'Tab switcher must update panel and tab together');

  // Close modal
  await testPage.locator('button[aria-label="Close dialog"]').click();
  await testPage.waitForTimeout(200);

  // 3. Trust Strip "Free diagnostic test" -> Sign Up Tab
  const diagTrustBtn = testPage.locator('button:has-text("Free diagnostic test")').first();
  await diagTrustBtn.click();
  await testPage.waitForTimeout(200);
  const diagTabSelected = await testPage.locator('#tab-signup').getAttribute('aria-selected');
  console.log('Click Trust Strip "Free diagnostic test" -> Sign Up Tab:', diagTabSelected === 'true');
  console.assert(diagTabSelected === 'true', 'Diagnostic test must select signup tab');
  await testPage.keyboard.press('Escape');
  await testPage.waitForTimeout(200);

  // 4. FAQ "Start a free diagnostic test" link -> Sign Up Tab
  const faqDiagBtn = testPage.locator('button:has-text("Start a free diagnostic test")').first();
  await faqDiagBtn.scrollIntoViewIfNeeded();
  await faqDiagBtn.click();
  await testPage.waitForTimeout(200);
  const faqTabSelected = await testPage.locator('#tab-signup').getAttribute('aria-selected');
  console.log('Click FAQ "Start a free diagnostic test" -> Sign Up Tab:', faqTabSelected === 'true');
  console.assert(faqTabSelected === 'true', 'FAQ diagnostic test must select signup tab');
  await testPage.keyboard.press('Escape');
  await testPage.waitForTimeout(200);

  // 5. Test Elimination Drill interactive behavior
  console.log('\nTesting Elimination Drill in DOM...');
  const drillSection = testPage.locator('#sample-drill');
  await drillSection.scrollIntoViewIfNeeded();

  // Initial state check
  const optionB = drillSection.locator('button[aria-label="Select option B as final answer"]');
  const bClass = await optionB.evaluate(el => el.parentElement.parentElement.className);
  console.log('Option B card initial class contains emerald / green?', bClass.includes('emerald') || bClass.includes('green'));
  console.assert(!bClass.includes('emerald') && !bClass.includes('green'), 'Option B must NOT be green initially');

  // Eliminate Option A
  const elimABtn = drillSection.locator('button[aria-label="Eliminate option A"]');
  await elimABtn.click();
  await testPage.waitForTimeout(100);
  let statusText = await drillSection.locator('[aria-live="polite"]').first().innerText();
  console.log('Status after eliminating A:', statusText.replace(/\n/g, ' '));
  console.assert(statusText.includes('1 wrong option eliminated'), 'Should show 1 wrong option eliminated');
  console.assert(statusText.includes('33%'), 'Should show 33%');

  // Eliminate Option B (Correct)
  const elimBBtn = drillSection.locator('button[aria-label="Eliminate option B"]');
  await elimBBtn.click();
  await testPage.waitForTimeout(100);
  statusText = await drillSection.locator('[aria-live="polite"]').first().innerText();
  console.log('Status after eliminating B (correct):', statusText.replace(/\n/g, ' '));
  console.assert(statusText.includes('0%'), 'Should show 0% chance');
  console.assert(statusText.includes('Off track'), 'Should show Confidence: Off track');

  // Try again reset
  // Un-eliminate B
  await elimBBtn.click();
  await testPage.waitForTimeout(100);
  // Select option B as final answer
  await optionB.click();
  await testPage.waitForTimeout(100);
  const resultPanel = drillSection.locator('[aria-live="polite"]').nth(1);
  const resultText = await resultPanel.innerText();
  console.log('Result panel after selecting B:', resultText.replace(/\n/g, ' '));
  console.assert(resultText.includes('Correct!'), 'Selecting option B should show Correct!');

  // Reset drill
  const tryAgainBtn = drillSection.locator('button:has-text("Try again")');
  await tryAgainBtn.click();
  await testPage.waitForTimeout(100);
  const resultVisible = await resultPanel.isVisible();
  console.log('Result panel after Try again visible:', resultVisible);
  console.assert(!resultVisible, 'Try again must reset result panel');

  await testContext.close();
  await browser.close();

  console.log('\n========================================');
  console.log('RESPONSIVE & FUNCTIONAL QA COMPLETE');
  console.log('========================================');
  console.log(JSON.stringify(results, null, 2));

  const allPassed = results.every(r => !r.hasOverflow);
  if (!allPassed) {
    console.error('FAILED: Horizontal overflow detected in one or more viewports!');
    process.exit(1);
  } else {
    console.log('SUCCESS: All 5 viewports (360, 390, 768, 1024, 1440) passed with 0 horizontal overflow!');
  }
}

runCheck().catch(err => {
  console.error(err);
  process.exit(1);
});
