import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<App />);