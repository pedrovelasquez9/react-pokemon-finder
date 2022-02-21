import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import App from "./components/App/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./store/Store";
import { NextUIProvider } from "@nextui-org/react";
import Data from "./components/Data/Data";

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <NextUIProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Data />} />
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
