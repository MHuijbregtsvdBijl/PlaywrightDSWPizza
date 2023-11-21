import { expect, Locator, Page } from '@playwright/test';

export default class boterKaasEnEierenPage {
    readonly naamVeld: Locator
    readonly radioGeslachtMan: Locator;
    readonly emailVeld: Locator;
    readonly provincieDropdown: Locator;
    readonly toestemmingCheckbox: Locator;
    readonly berichtVeld: Locator;
    readonly indienKnop: Locator;
    readonly resultFieldName: Locator;


    constructor(public page: Page) {
        this.naamVeld = this.page.getByLabel('Naam');
        this.radioGeslachtMan = this.page.locator('#man');
        this.emailVeld = this.page.getByLabel('Email');
        this.provincieDropdown = this.page.getByLabel('Provincie');
        this.toestemmingCheckbox = this.page.locator('#consentCheckbox');
        this.berichtVeld = this.page.getByLabel('Jouw bericht');
        this.indienKnop = this.page.getByRole('button', { name: 'Indienen' });
        this.resultFieldName = this.page.locator("//td[@id='naam0']");
    }
      
}