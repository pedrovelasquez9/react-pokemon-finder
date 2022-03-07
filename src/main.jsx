import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import App from "./components/App/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./store/Store";
import { NextUIProvider } from "@nextui-org/react";
import Home from "./components/Home/Home";

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <NextUIProvider>
        <BrowserRouter>
          {/**Check router docs to separate routes definitions */}
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
