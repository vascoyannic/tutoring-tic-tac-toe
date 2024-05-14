export enum CellState {EMPTY=0, X=1, O=2}

export enum Player {X=1, O=2}

export interface BoardState {
    cells: CellState[];
    activePlayer: Player;
}

export function makeMove (state: BoardState, move:number):BoardState {
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