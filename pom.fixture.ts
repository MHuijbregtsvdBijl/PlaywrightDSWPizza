import { test as baseTest, chromium, Page } from '@playwright/test';
import boterKaasEnEierenPage from './pages/boterKaasEnEierenPage.page';
import formPage from './pages/formPage.page';

type pages = {
    BoterKaasEnEierenPage: boterKaasEnEierenPage;
    FormPage: formPage;
}

const testPages = baseTest.extend<pages>({
    BoterKaasEnEierenPage: async ({ page }, use) => {
        await use(new boterKaasEnEierenPage(page));
    },
    FormPage: async ({ page }, use) => {
        await use(new formPage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;

