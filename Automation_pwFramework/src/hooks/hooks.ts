import { After, AfterAll, Before, Status, setDefaultTimeout } from "@cucumber/cucumber";
import {Browser, Page, expect, chromium} from "@playwright/test";
import { pageFixture } from "./pageFixture";

setDefaultTimeout(60000);

let browser:Browser;
let page:Page;

// Use headless: true in CI/container, false locally
const isHeadless = process.env.CI === 'true' || process.env.HEADLESS === 'true';

Before(async function() {
    browser = await chromium.launch({
        headless: isHeadless,
        args: ['--start-maximized']
    });
    page = await browser.newPage({ viewport: null });
    page.setDefaultTimeout(60000);
    pageFixture.page = page;
})

After(async function() {
    // Screenshot on failure
    if (this.result?.status === Status.FAILED) {
        const image = await page.screenshot({ path: `./test-result/screenshots/failure-${Date.now()}.png`, fullPage: true });
        this.attach(image, 'image/png');
    }
    await page.close();
    await browser.close();
})