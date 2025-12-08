import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';
import * as locators from '../page_objects/automationExercisePage.json';

// Helper to get locator by path (e.g.: "login.usernameInput")
function getLocator(locatorPath: string): string {
  const keys = locatorPath.split('.');
  let value: any = locators;

  for (const key of keys) {
    value = value[key];
    if (value === undefined) {
      throw new Error(`Locator not found: ${locatorPath}`);
    }
  }
  return value;
}

Given('I navigate to {string}', async function (url: string) {
  await pageFixture.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
});

When('I click {string}', async function (selector: string) {
  const locator = getLocator(selector);
  await pageFixture.page.waitForSelector(locator, { timeout: 10000 });
  await pageFixture.page.click(locator);
});

When('I click {string} if visible', async function (selector: string) {
  const locator = getLocator(selector);
  try {
    await pageFixture.page.waitForSelector(locator, { timeout: 5000, state: 'visible' });
    await pageFixture.page.click(locator);
  } catch (error) {
    console.log(`Element ${selector} not found, continuing...`);
  }
});

When('I fill {string} in {string}', async function (text: string, selector: string) {
  const locator = getLocator(selector);
  await pageFixture.page.waitForSelector(locator, { timeout: 10000 });
  await pageFixture.page.fill(locator, text);
});

When('I select {string} from {string}', async function (value: string, selector: string) {
  const locator = getLocator(selector);
  await pageFixture.page.waitForSelector(locator, { timeout: 10000 });
  await pageFixture.page.selectOption(locator, value);
});

When('I check {string}', async function (selector: string) {
  const locator = getLocator(selector);
  await pageFixture.page.waitForSelector(locator, { timeout: 10000 });
  await pageFixture.page.check(locator);
});

When('I uncheck {string}', async function (selector: string) {
  const locator = getLocator(selector);
  await pageFixture.page.waitForSelector(locator, { timeout: 10000 });
  await pageFixture.page.uncheck(locator);
});

When('I wait {int} seconds', async function (seconds: number) {
  await pageFixture.page.waitForTimeout(seconds * 1000);
});

Then('I should see text {string}', async function (text: string) {
  const element = await pageFixture.page.getByText(text, { exact: false });
  await element.waitFor({ state: 'visible', timeout: 10000 });
});

Then('I should see {string}', async function (selector: string) {
  const locator = getLocator(selector);
  const element = await pageFixture.page.waitForSelector(locator);
  if (!element) {
    throw new Error(`Element not found: ${locator} - Selector: ${selector}`);
  }
});

Then('I should not see {string}', async function (selector: string) {
  const element = await pageFixture.page.$(selector);
  if (element) {
    throw new Error(`Element ${selector} was found but should not be visible`);
  }
});

// Step to verify URL
Then('the URL should contain {string}', async function (text: string) {
  const url = pageFixture.page.url();
  if (!url.includes(text)) {
    throw new Error(`URL "${url}" does not contain "${text}"`);
  }
});

// Step to verify page title
Then('the page title should be {string}', async function (title: string) {
  const pageTitle = await pageFixture.page.title();
  if (pageTitle !== title) {
    throw new Error(`Expected title: "${title}", got: "${pageTitle}"`);
  }
});

// Step to take screenshot
When('I take a screenshot named {string}', async function (name: string) {
  await pageFixture.page.screenshot({
    path: `./test-results/screenshots/${name}-${Date.now()}.png`,
    fullPage: true
  });
});
