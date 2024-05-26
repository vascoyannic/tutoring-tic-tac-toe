export enum CellState {EMPTY=0, X=1, O=2}

export enum Player {X=1, O=2}

export interface BoardState {
    cells: CellState[];
    activePlayer: Player;
}

export function makeMove (state: BoardState, move:number):BoardState {
    // FEHLER 1: move < 0
    // FEHLER 2: move > 8
    // FEHLER 3: move keine ganze Zahl
    if(move<0|| move>8 || !Number.isInteger(move)) {
        throw new Error("move isn't a valid cell position");
    }

    // FEHLER 4: state.cells hat nicht Länge 9
    if (state.cells.length !== 9) {
        throw new Error("cell length doesn't match 9");
    }

    //CellState einer cell ändern
    let newCells=[...state.cells];
    newCells[move]=state.activePlayer as number as CellState;

    //To-Do:
    //überprüfen ob Spiel beendet: Sieg --> Spielende
    //...

    //ansonsten ActivePlayer wechseln
    let newActivePlayer=state.activePlayer === Player.X ? Player.O : Player.X;

    //dann neuen boardstate an app zurückgeben
    return {
        cells: newCells, 
        activePlayer: newActivePlayer
    }
}