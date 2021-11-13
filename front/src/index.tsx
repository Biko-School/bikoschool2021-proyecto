import React from "react";
import ReactDOM from "react-dom";
import App from "./ui/App";
import "./ui/theme/reset.css";
import "./ui/theme/app.css";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
