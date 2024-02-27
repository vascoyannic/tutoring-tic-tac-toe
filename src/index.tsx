import * as React from "react";
import { createRoot } from "react-dom/client";
import style from "./index.scss";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

const name = <i className={style.meinHeader}>Izzie</i>;

root.render(<h1>Hello { name }!</h1>);