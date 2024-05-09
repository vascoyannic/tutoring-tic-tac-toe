import * as React from "react";
import style from "./BoardCell.scss";
import Icon, { IconType } from "./Icon";

export enum CellState {EMPTY, X, O}

interface BoardCellProps {
    state:CellState;
}

export const BoardCell: React.FC<BoardCellProps> = ({state}) => {
    return <div className={style.boardCell}>{
        state !== CellState.EMPTY &&
        <Icon type={state === CellState.X ? IconType.X : IconType.O} className={style.boardIcon}/>
    }</div>
    // return <div className="board-cell board-row-1 board-col-1"><div className="board-icon icon-o"></div></div>
}

export default BoardCell;

// 1 == "1" // wahr
// 1 === "1" // falsch
// 1 == true // wahr
// 1 === true // falsch
// 1 != "1" // falsch
// 1 !== "1" // wahr

// w w => w
// w f => f
// f w => f
// f f => f
// AND, OR, XOR, NOT, NOT AND: a && b, a || b, a ^ b, !a, !(a && b)