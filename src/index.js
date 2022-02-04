import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@reach/tabs/styles.css";
import "@reach/dialog/styles.css";
import "@reach/menu-button/styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
