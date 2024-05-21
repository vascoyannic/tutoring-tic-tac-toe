import * as React from "react";
import style from "./Quote.scss";

interface QuoteProps {
    title:string;
    author:string;
}

const Quote: React.FC<QuoteProps> = ({title, author}) => {
    return <quote className={style.quote}>
        <h1>{title}</h1>
        <h1>{author}</h1>
    </quote>
}

export default Quote;