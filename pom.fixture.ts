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

