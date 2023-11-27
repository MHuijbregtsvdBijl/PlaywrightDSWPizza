import { expect, Page } from '@playwright/test';
import { test } from '../pom.fixture';
//codeVoorbeeld: PW is identiek aan Cypress, muv van eerder genoemde page.goto/cy.visit en assert-statement
const testName = "testNaam";
const testValue = 12;
const user1 = {
  voornaam: "Peter",
  achternaam: "Bakker",
  email: "peter@test.nl",
  woonplaats: "Alblasserdam",
  telefoonnummer: "0612345678",
  provincie: "Zuid-Holland"
};

test('Gebruik waardes', async ({ FormPage, page }) => {
  await page.goto("https://automation.testpeople.nl/formulier");
  await FormPage.naamVeld.fill(user1.voornaam + " " + user1.achternaam);
  await FormPage.emailVeld.fill(user1.email);
  await FormPage.provincieDropdown.selectOption(user1.provincie);
  await FormPage.radioGeslachtMan.click();
  await FormPage.toestemmingCheckbox.check();
  await FormPage.berichtVeld.fill("Lorem ipsum sit dolor et amet");
  await FormPage.indienKnop.click();  
  await expect(FormPage.resultFieldName).toContainText(user1.voornaam + " " + user1.achternaam);
});


//custom commands
/*
Om functies overal in je testsuite te gebruiken: maak een bestand aan met naam.class.ts
Vul de functies als volgt:
export async function naam(parameter) {
vul hier je code in
}
Je moet wel nog deze specifieke functie importeren.
Verder ondersteunt Playwright fixtures: dit zijn klassen die al binnen Playwright gedefiniëerd worden om hier vervolgens nog eigen modificaties in aan te brengen,
net zoals we bijvoorbeeld met de formPage hebben gedaan (dit is een modificatie van de Page).
*/