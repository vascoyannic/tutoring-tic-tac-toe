import * as React from "react";
import style from "./Icon.scss";

export enum IconType {X, O}

interface IconProps {
    type: IconType;
    className: string;
}

export const Icon: React.FC<IconProps> = ({type, className}) => {

    // // Variante 1
    // let iconClassName: string;
    // if (type===IconType.X){
    //     iconClassName=style.iconX;
    // } else {
    //     iconClassName=style.iconO;
    // }

    // // Variante 2
    // let iconClassName;
    // if (type===IconType.X){
    //     iconClassName=style.iconX;
    // } else if (type===IconType.O) {
    //     iconClassName=style.iconO;
    // }

    // // Variante 3
    // let iconClassName;
    // switch (type) {
    //     case IconType.X:
    //         iconClassName = style.iconX;
    //         break;
    //     case IconType.O:
    //         iconClassName = style.iconO;
    //         break;
    // }

    // // Variante 4
    // let iconClassName;
    // switch (type) {
    //     case IconType.X:
    //         iconClassName = style.iconX;
    //         break;
    //     default:
    //         iconClassName = style.iconO;
    //         break;
    // }

    // Variante 5
    let iconClassName = type === IconType.X ? style.iconX : style.iconO;

    let composedClassName = iconClassName + " " + className;

    return <div className={composedClassName}></div>
    // return <div className="board-cell board-row-1 board-col-1"><div className="board-icon icon-o"></div></div>
}

export default Icon;