export class gameState {
    public filledFields: number[];
    public turnNumber: number;
    public winnerName: string;


    constructor() {
        this.turnNumber = 0;
        this.filledFields = [];
    }


    addTurn() {
        this.turnNumber++;
        if (this.turnNumber == 9) { this.winnerName = "Gelijkspel"; }
    }
}