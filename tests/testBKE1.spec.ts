import { expect } from '@playwright/test';
import { test } from '../pom.fixture';
import { player } from '../helpers/player.class'
import { gameState } from '../helpers/gameState.class';

//voorbeeldcode pom.fixture.ts
/*
import { test as baseTest, chromium, Page } from '@playwright/test';
import boterKaasEnEierenPage from './pages/boterKaasEnEierenPage.page';

type pages = {
    BoterKaasEnEierenPage: boterKaasEnEierenPage;
}

const testPages = baseTest.extend<pages>({
    BoterKaasEnEierenPage: async ({ page }, use) => {
        await use(new boterKaasEnEierenPage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;
*/

//voorbeeldcode Page boterKaasEnEierenPage.page.ts
/*
import { expect, Locator, Page } from '@playwright/test';

export default class boterKaasEnEierenPage {
    readonly headerTitle: Locator;
    readonly fieldOne: Locator;

    constructor(public page: Page) {
        this.headerTitle = this.page.locator('li').filter({ hasText: 'Boter kaas en eieren' });
        this.fieldOne = this.page.locator("//*[@locatorAttribute='0']");
    }

    public async gotoPage() {
        await this.page.goto("https://automation.testpeople.nl/bke");
        await this.headerTitle.click();
    }
}
*/
test('speel een potje', async ({ BoterKaasEnEierenPage }) => {
  await BoterKaasEnEierenPage.gotoPage();
  await BoterKaasEnEierenPage.fieldFive.click();
  await BoterKaasEnEierenPage.fieldOne.click();
  await BoterKaasEnEierenPage.fieldTwo.click();
  await BoterKaasEnEierenPage.fieldThree.click();
  await BoterKaasEnEierenPage.fieldEight.click();
  await expect(BoterKaasEnEierenPage.stand).toContainText("Speler X heeft gewonnen");
})


