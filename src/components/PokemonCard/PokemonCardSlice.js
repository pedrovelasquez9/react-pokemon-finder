import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPokemonDetails } from "../../services/pokemonService";
import { searchPokemon } from "../../services/searchService";
import { ACTIONS } from "../../utils/actionHelpers";

export const fetchPokemon = createAsyncThunk(
  "fetch/pokemonDetails",
  async (url) => {
    const jsonData = await fetchPokemonDetails(url);
    const data = jsonData;
    return data;
  }
);

export const fetchPokemonByName = createAsyncThunk(
  "fetch/pokemonByName",
  async (pokemonName) => {
    const jsonData = await searchPokemon(pokemonName);
    const data = jsonData;
    return data;
  }
);

const extraReducers = (builder) => {
  builder
    .addCase(fetchPokemon.fulfilled, ACTIONS.SET_DATA)
    .addCase(fetchPokemon.rejected, ACTIONS.SET_DATA_ERROR)
    .addCase(fetchPokemonByName.fulfilled, ACTIONS.SET_DATA)
    .addCase(fetchPokemonByName.rejected, ACTIONS.SET_DATA_ERROR);
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
