import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://peter425.gitlab.io/openpeopletestwebsite/form.html');
  await page.getByLabel('Naam').click();
  await page.getByLabel('Naam').fill('Bert');
  await page.locator('#man').check();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('uahdiuh@dsw.nl');
  await page.getByLabel('Provincie').selectOption('Groningen');
  await page.locator('#consentCheckbox').check();
  await page.getByLabel('Jouw bericht').click();
  await page.getByLabel('Jouw bericht').fill('Lalala');
  await page.getByRole('button', { name: 'Indienen' }).click();
});await page.getByRole('button', { name: 'Indienen' }).click();