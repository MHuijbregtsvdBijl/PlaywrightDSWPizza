import { test,expect, Page } from '@playwright/test';

test('test scenario 1', async ({ page }) => {
  //Type hier je code
});

test('Test scenario 2', async ({ page }) => {
    //Type hier je code
  });

test('Test scenario 3', async ({ page }) => {
    //Type hier je code
  });

test('Test scenario 4', async ({ page }) => {
    //Type hier je code
  });

  //de volgende bouwblokken nodig:
  /*
  await page.goto('${url}');
  await page.locator('//element[@attribuut="waarde"])
  .fill("waarde")
  .click()
  await expect(locatie).toContainText("test1234");
  */

  test('te licht', async ({ page }) => {
    await page.goto("https://automation.testpeople.nl/bmi");
    await page.locator('//input[@id="BMILengte"]').fill("176");
    await page.locator('//input[@id="BMIGewicht"]').fill("20");
    await page.locator('//button[@id="berekenBMI"]').click();
    await expect(page.locator('//p[@id="jouwBMI"]')).toContainText("Jouw BMI is: 6.5");
  });

  test('gezond', async ({ page }) => {
    await page.goto("https://automation.testpeople.nl/bmi");
    await page.locator('//input[@id="BMILengte"]').fill("186");
    await page.locator('//input[@id="BMIGewicht"]').fill("80");
    await page.locator('//button[@id="berekenBMI"]').click();
    await expect(page.locator('//p[@id="jouwBMI"]')).toContainText("Jouw BMI is: 23.1");
  });

  test('te zwaar', async ({ page }) => {
    await page.goto("https://automation.testpeople.nl/bmi");
    await page.locator('//input[@id="BMILengte"]').fill("186");
    await page.locator('//input[@id="BMIGewicht"]').fill("90");
    await page.locator('//button[@id="berekenBMI"]').click();
    await expect(page.locator('//p[@id="jouwBMI"]')).toContainText("Jouw BMI is: 26");
  });

  test('veel te zwaar', async ({ page }) => {
    await page.goto("https://automation.testpeople.nl/bmi");
    await page.locator('//input[@id="BMILengte"]').fill("176");
    await page.locator('//input[@id="BMIGewicht"]').fill("120");
    await page.locator('//button[@id="berekenBMI"]').click();
    await expect(page.locator('//p[@id="jouwBMI"]')).toContainText("Jouw BMI is: 38.7");
  });