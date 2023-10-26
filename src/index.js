import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import pi, { doublePi, triplePi } from "./math";

ReactDOM.render(
  <div>
    <App />
    <ul>
      <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
