import * as React from "react";
import style from "./Header.scss";

interface HeaderProps {
    title:string;
    hasBackIcon:boolean;
}

const Header: React.FC<HeaderProps> = ({title, hasBackIcon}) => {
    return <header className={style.header}>
        {
            hasBackIcon && <nav>
                <a href="#" title="Back" className={style.back}>
                    <div className={style.iconBack}></div>
                </a>
            </nav>
        }
        <h1>{title}</h1>
    </header>
}

export default Header;