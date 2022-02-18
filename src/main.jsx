import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import App from "./components/App/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Store from "./store/Store";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <NextUIProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/test" element={<Loading />} />
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
