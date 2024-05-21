import * as React from "react";
import style from "./Quote.scss";

interface QuoteProps {
    title:string;
    author:string;
    cite?:string;
}

const Quote: React.FC<QuoteProps> = ({title, author, cite}) => {
    return <blockquote className={style.quote} cite={cite}>
        <p>{title}</p>
        <span>{author}</span>
        { cite && 
            <a href={cite} target="_blank" rel="noopener norefferer nofollow">{cite}</a>
        }
    </blockquote>
}

export default Quote;