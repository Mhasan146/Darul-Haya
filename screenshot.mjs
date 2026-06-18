import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 900 });

// Landing page
await page.goto('http://localhost:3000');
await page.waitForLoadState('networkidle');
await page.screenshot({ path: 'C:/Users/hasan/AppData/Local/Temp/landing.png', fullPage: true });

// Login page
await page.goto('http://localhost:3000/login');
await page.waitForLoadState('networkidle');
await page.screenshot({ path: 'C:/Users/hasan/AppData/Local/Temp/login.png', fullPage: true });

// Register page
await page.goto('http://localhost:3000/register');
await page.waitForLoadState('networkidle');
await page.screenshot({ path: 'C:/Users/hasan/AppData/Local/Temp/register.png', fullPage: true });

await browser.close();
console.log('Done');
