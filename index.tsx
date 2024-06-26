import * as React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./src/App";

const container = document.getElementById("app") as Element;
const root = createRoot(container);
root.render(<App />)