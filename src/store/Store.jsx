import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import AppSlices from "./Reducer";

const Store = ({ children }) => {
  const store = configureStore({ reducer: AppSlices });
  return <Provider store={store}>{children}</Provider>;
};

export default Store;
