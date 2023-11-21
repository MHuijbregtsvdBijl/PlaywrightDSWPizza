import { test, expect, Page, Browser } from '@playwright/test';

//codevoorbeeld playwright
/*
async function InvulFunctie(eersteWaarde:number, tweedeWaarde:number){
  async ({page}) =>{
  await this.page.locator("//input[@id='veld1']").fill(eersteWaarde);
  await this.page.locator("//input[@id='veld2']").fill(tweedeWaarde);
  }
}

test('gebruik de functie', async ({ page }) => {
  await page.goto("url");
  await InvulFunctie(13,20);
  await page.locator("//button[@id='knop']");
});

test.beforeEach(async ({ page }) => {
  await page.goto('RandomWebsite.nl');
});
*/
//vanaf hier code voor oplossing opdracht


async function fillInData(lengte: string, gewicht: string) {
  async ({ page }) => {
    await page.locator("//input[@id='BMILengte']").fill(lengte);
    await page.locator("//input[@id='BMIGewicht']").fill(gewicht);
    await page.locator("//button[@id='berekenBMI']").click();
  };
}

async function assertData(bmi: string, text: string) {
  async ({ page }) => {
    await expect(page.locator('//p[@id="jouwBMI"]')).toContainText(
      "Jouw BMI is: " + bmi
    );
    await expect(page.locator('//p[@id="statusBMI"]')).toContainText(
      "Jij bent: " + text
    );
  };
}

  test.beforeEach(async ({ page }) => {
    await page.goto("https://peter425.gitlab.io/openpeopletestwebsite/bmi.html");
  });

  test('te licht', async ({ page }) => {
    await fillInData("176", "20");
    await assertData("6.5", "te licht");
  });

  test('gezond', async ({ page }) => {
    await fillInData("186", "26");
    await assertData("23.1", "gezond");
  });

  test('te zwaar', async ({ page }) => {
    await fillInData("186", "90");
    await assertData("26", "te zwaar");
  });

  test('veel te zwaar', async ({ page }) => {
    await fillInData("176", "120");
    await assertData("38.7", "veel te zwaar");
  });