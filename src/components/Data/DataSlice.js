import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../services/dataService";
import { FETCH_STATUS } from "../../utils/actionHelpers";

const ACTIONS = {
  SET_DATA: (state, action) => {
    return {
      ...state,
      data: action.payload,
      status: FETCH_STATUS.SUCCESS,
      error: null,
    };
  },
  ADD_DATA: (state, action) => {
    return {
      ...state,
      data: state.data.concat(action.payload),
      status: FETCH_STATUS.SUCCESS,
      error: null,
    };
  },
  REMOVE_DATA: (state, action) => {
    return {
      ...state,
      status: FETCH_STATUS.SUCCESS,
      data: state.data.filter((item) => item.id !== action.payload),
      error: null,
    };
  },
  SET_DATA_ERROR: (state, action) => {
    return {
      ...state,
      status: FETCH_STATUS.ERROR,
      error: action.payload,
    };
  },
  DEFAULT_DATA: (state) => {
    return state;
  },
};

export const fetchPokemonList = createAsyncThunk(
  "fetch/pokemonList",
  async () => {
    const jsonData = await fetchData();
    const data = jsonData.results;
    return data;
  }
);

const extraReducers = (builder) => {
  builder.addCase(fetchPokemonList.fulfilled, ACTIONS.SET_DATA);
};

const initialState = {
  data: [],
  error: null,
  status: "idle",
};

const slice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: ACTIONS,
  extraReducers: extraReducers,
});

export const { ADD_DATA, REMOVE_DATA, SET_DATA, SET_DATA_ERROR, DEFAULT_DATA } =
  slice.actions;
export default slice.reducer;
