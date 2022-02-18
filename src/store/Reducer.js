import { createSlice } from "@reduxjs/toolkit";
import ACTIONS from "./Actions";

const initialState = {
  data: [],
  error: null,
};

const slice = createSlice({
  name: "store",
  initialState: initialState,
  reducers: ACTIONS,
});

export default slice;
