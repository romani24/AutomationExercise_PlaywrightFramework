import { When } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';
import * as locators from '../page_objects/automationExercisePage.json';
import { generateUniqueEmail, generateRandomText, generatePhoneNumber } from '../../utils/helpers';

// Store generated data to use between steps
export let generatedData: { [key: string]: string } = {};

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

// Step to fill with automatically generated unique email
When('I fill unique email in {string}', async function (selector: string) {
  const locator = getLocator(selector);
  const email = generateUniqueEmail('testuser');
  generatedData['email'] = email;
  await pageFixture.page.waitForSelector(locator, { timeout: 10000 });
  await pageFixture.page.fill(locator, email);
  console.log(`Generated email: ${email}`);
});

// Step to fill with random text
When('I fill random text in {string}', async function (selector: string) {
  const locator = getLocator(selector);
  const text = generateRandomText(10);
  await pageFixture.page.waitForSelector(locator, { timeout: 10000 });
  await pageFixture.page.fill(locator, text);
});

// Step to fill with random phone number
When('I fill random phone in {string}', async function (selector: string) {
  const locator = getLocator(selector);
  const phone = generatePhoneNumber();
  await pageFixture.page.waitForSelector(locator, { timeout: 10000 });
  await pageFixture.page.fill(locator, phone);
});
