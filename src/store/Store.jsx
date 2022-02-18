import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Reducer from "./Reducer";

const Store = ({ children }) => {
  const store = configureStore({ reducer: Reducer.reducer });
  return <Provider store={store}>{children}</Provider>;
};

export default Store;
