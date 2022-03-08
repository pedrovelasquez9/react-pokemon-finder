import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import Store from "./store/Store";
import { NextUIProvider } from "@nextui-org/react";
import AppRoutes from "./routes/Routes";

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <NextUIProvider>
        <AppRoutes />
      </NextUIProvider>
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
