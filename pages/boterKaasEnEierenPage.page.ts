import { expect, Locator, Page } from '@playwright/test';

export default class boterKaasEnEierenPage {
    readonly headerTitle: Locator;
    readonly fieldOne: Locator;
    readonly fieldTwo: Locator;
    readonly fieldThree: Locator;
    readonly fieldFour: Locator;
    readonly fieldFive: Locator;
    readonly fieldSix: Locator;
    readonly fieldSeven: Locator;
    readonly fieldEight: Locator;
    readonly fieldNine: Locator;
    readonly stand: Locator;
    readonly restartButton: Locator;


    constructor(public page: Page) {
        this.headerTitle = this.page.locator('li').filter({ hasText: 'Boter kaas en eieren' });
        this.fieldOne = this.page.locator("//*[@data-cell-index='0']");
        this.fieldTwo = this.page.locator("//*[@data-cell-index='1']");
        this.fieldThree = this.page.locator("//*[@data-cell-index='2']");
        this.fieldFour = this.page.locator("//*[@data-cell-index='3']");
        this.fieldFive = this.page.locator("//*[@data-cell-index='4']");
        this.fieldSix = this.page.locator("//*[@data-cell-index='5']");
        this.fieldSeven = this.page.locator("//*[@data-cell-index='6']");
        this.fieldEight = this.page.locator("//*[@data-cell-index='7']");
        this.fieldNine = this.page.locator("//*[@data-cell-index='8']");
        this.stand = this.page.locator("//h2[@id='stand']");
        this.restartButton = this.page.locator("//button[@id='restart']");
    }


    public async gotoPage() {
        await this.page.goto("https://automation.testpeople.nl/bke");
        await this.headerTitle.click();
    }

    public async clickCorrectField(numberToPress: number) {
        if (numberToPress == 1) { await this.fieldOne.click(); }
        if (numberToPress == 2) { await this.fieldTwo.click(); }
        if (numberToPress == 3) { await this.fieldThree.click(); }
        if (numberToPress == 4) { await this.fieldFour.click(); }
        if (numberToPress == 5) { await this.fieldFive.click(); }
        if (numberToPress == 6) { await this.fieldSix.click(); }
        if (numberToPress == 7) { await this.fieldSeven.click(); }
        if (numberToPress == 8) { await this.fieldEight.click(); }
        if (numberToPress == 9) { await this.fieldNine.click(); }
    }
}