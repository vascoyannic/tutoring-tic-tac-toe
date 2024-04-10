import * as React from "react";
import style from "./Board.scss";
import { BoardCell, CellState } from "./BoardCell";

interface BoardProps {
    
}

const Board: React.FC<BoardProps> = () => {
    return (
        <div className={style.boardBox}>
            <div className={style.board}>
                <BoardCell x={0} y={0} state={CellState.O}/>
                <BoardCell x={0} y={0} state={CellState.O}/>
                <BoardCell x={0} y={0} state={CellState.O}/>
                <BoardCell x={0} y={0} state={CellState.O}/>
                <BoardCell x={0} y={0} state={CellState.O}/>
                <BoardCell x={0} y={0} state={CellState.O}/>
                <BoardCell x={0} y={0} state={CellState.O}/>
                <BoardCell x={0} y={0} state={CellState.O}/>
                <BoardCell x={0} y={0} state={CellState.O}/>
                {/* <div className="board-cell board-row-1 board-col-1" id="board-cell-1"><div className="board-icon icon-o"></div></div>
                <div className="board-cell board-row-1 board-col-2" id="board-cell-2"></div>
                <div className="board-cell board-row-1 board-col-3" id="board-cell-3"></div>
                <div className="board-cell board-row-2 board-col-1" id="board-cell-4"></div>
                <div className="board-cell board-row-2 board-col-2" id="board-cell-5"><div className="board-icon icon-o"></div></div>
                <div className="board-cell board-row-2 board-col-3" id="board-cell-6"><div className="board-icon icon-x"></div></div>
                <div className="board-cell board-row-3 board-col-1" id="board-cell-7"><div className="board-icon icon-x"></div></div>
                <div className="board-cell board-row-3 board-col-2" id="board-cell-8"></div>
    <div className="board-cell board-row-3 board-col-3" id="board-cell-9"><div className="board-icon icon-o"></div></div> */}
                <div className={style.boardGridV1}></div>
                <div className={style.boardGridV2}></div>
                <div className={style.boardGridH1}></div>
                <div className={style.boardGridH2}></div>
                {/* <div className="board-win-line board-win-line-diagonal-positive"></div> */}
            </div>
        </div>
    )
}

export default Board;