import * as React from "react";
import style from "./Icon.scss";
import cn from "classnames";

export enum IconType {X, O}

interface IconProps {
    type: IconType;
    className?: string;
}

export const Icon: React.FC<IconProps> = ({type, className}) => (
    <div className={cn(type === IconType.X ? style.iconX : style.iconO, className)}></div>
)

export default Icon;

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
// let iconClassName = type === IconType.X ? style.iconX : style.iconO;