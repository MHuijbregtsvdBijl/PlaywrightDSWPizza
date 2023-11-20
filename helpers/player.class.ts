import boterKaasEnEierenPage from "../pages/boterKaasEnEierenPage.page";
import { gameState } from "./gameState.class";


export class player {
    public claimedFields: number[];
    public signaturePlayer: string;
    public NumberToPlay: number;



    constructor(signaturePlayer: string) {
        this.signaturePlayer = signaturePlayer;
        this.claimedFields = [];
    }


    async playATurn(game: gameState, BoterKaasEnEierenPage: boterKaasEnEierenPage) {
        const numberToPlay = await this.pickANumber(game);
        console.log("Number to Play =" + numberToPlay);
        await this.claimedFields.push(numberToPlay);
        console.log(this.claimedFields);
        await game.filledFields.push(numberToPlay);
        console.log(game.filledFields);
        await BoterKaasEnEierenPage.clickCorrectField(numberToPlay);
        game.addTurn();
        if (this.checkForWin()) { game.winnerName = this.signaturePlayer; }
        else if (game.turnNumber == 10) { game.winnerName = "Gelijkspel"; }
    }

    pickANumber(game: gameState) {
        let isNumberPicked = true;
        let randomNumber: number;
        do {
            randomNumber = Math.ceil(Math.random() * 9);
            if (game.filledFields.includes(randomNumber) == false) { isNumberPicked = false; }
        }
        while (isNumberPicked);
        return randomNumber;
    }

    checkForWin() {
        let isWinner: boolean = false;
        if (this.checkForHorizontalWin() || this.checkForVerticalWin() || this.checkForDiagonalWin()) { isWinner = true; }
        return isWinner;
    }

    checkForHorizontalWin() {
        let horizontalWin: boolean = false;
        for (let startnumber = 1; startnumber <= 7; startnumber += 3) {
            if (this.claimedFields.includes(startnumber) && this.claimedFields.includes(startnumber + 1) && this.claimedFields.includes(startnumber + 2)) { horizontalWin = true; }
        }
        return horizontalWin;
    }

    checkForVerticalWin() {
        let verticalWin: boolean = false;
        for (let startnumber = 1; startnumber <= 3; startnumber++) {
            if (this.claimedFields.includes(startnumber) && this.claimedFields.includes(startnumber + 3) && this.claimedFields.includes(startnumber + 6)) { verticalWin = true; }
        }
        return verticalWin;
    }

    checkForDiagonalWin() {
        let diagonalWin: boolean = false;
        if (this.claimedFields.includes(1) && this.claimedFields.includes(5) && this.claimedFields.includes(9)) { diagonalWin = true; }
        if (this.claimedFields.includes(3) && this.claimedFields.includes(5) && this.claimedFields.includes(7)) { diagonalWin = true; }
        return diagonalWin;
    }

}