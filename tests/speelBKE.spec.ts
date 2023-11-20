import { expect } from '@playwright/test';
import { test } from '../pom.fixture';
import { player } from '../helpers/player.class'
import { gameState } from '../helpers/gameState.class';

let countDraw = 0;
let countWinnerX = 0;
let countWinnerY = 0;

test('speel duizend maal boter kaas en eieren', async ({ BoterKaasEnEierenPage }) => {
  for (let gamesToPlay: number = 0; gamesToPlay <= 1000; gamesToPlay++) {
    await BoterKaasEnEierenPage.gotoPage();
    const playerOne = new player('X');
    const playerTwo = new player("O");
    const game = new gameState();

    while (game.winnerName == null) {
      await playerOne.playATurn(game, BoterKaasEnEierenPage);
      if (game.winnerName != null) { break; }
      await playerTwo.playATurn(game, BoterKaasEnEierenPage);
    }
    console.log("De winnaar is: " + game.winnerName);

    let winnersText: string;
    if (game.winnerName == "Gelijkspel") { winnersText = 'Gelijk spel'; countDraw++; }
    else {
      winnersText = "Speler " + game.winnerName + " heeft gewonnen";
      game.winnerName == 'X' ? countWinnerX++ : countWinnerY++;
    }
    await expect(BoterKaasEnEierenPage.stand).toContainText(winnersText);
    console.log("De stand is: Speler X " + countWinnerX + ", Speler Y " + countWinnerY + " Gelijkspel: " + countDraw);
    await BoterKaasEnEierenPage.restartButton.click();

  }
});
