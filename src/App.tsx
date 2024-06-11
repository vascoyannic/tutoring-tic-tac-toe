import * as React from "react";
import Header from "./Header";
import Board from "./Board";
import {BoardState, getDefaultState, makeMove} from "./GameStatus";

const App: React.FC<{}> = () => {
    const [boardState, setBoardState] = React.useState<BoardState>(getDefaultState());
    return <>
        <Header title="Tic Tac Toe against Joe Doe" hasBackIcon={true} />
        <Board boardState={boardState} onCellPlayed={(i)=>{
            const newState = makeMove(boardState, i);
            setBoardState(newState);
            }}/>
    </>
}
export default App;