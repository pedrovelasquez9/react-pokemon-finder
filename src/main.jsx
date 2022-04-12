import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import Store from "./store/Store";
import AppRoutes from "./routes/Routes";

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <AppRoutes />
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
