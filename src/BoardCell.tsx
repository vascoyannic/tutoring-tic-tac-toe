import * as React from "react";
import style from "./BoardCell.scss";

export enum CellState {EMPTY, X, O}

interface BoardCellProps {
    state:CellState;
}

export const BoardCell: React.FC<BoardCellProps> = ({state}) => {
    return <div className={style.boardCell}><div className="board-icon icon-o"></div></div>
    // return <div className="board-cell board-row-1 board-col-1"><div className="board-icon icon-o"></div></div>
}

export default BoardCell;