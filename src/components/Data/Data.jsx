import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Data.css";
import { fetchPokemonList } from "./DataSlice";
import ListItem from "../ListItem/ListItem";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Data = () => {
  const state = useSelector((state) => state);
  const pokemonListStatus = state.pokemons.status;
  const dispatch = useDispatch();

  useEffect(() => {
    if (pokemonListStatus === "idle") {
      dispatch(fetchPokemonList());
    }
  }, [pokemonListStatus, dispatch]);

  let data = <Loading message="Cargando..."></Loading>;

  if (state.error) {
    data = (
      <ErrorMessage
        message="Ha ocurrido un error llamando a la API"
        error={state.error}
      ></ErrorMessage>
    );
  }

  if (!state.pokemons.error && state.pokemons.data.length > 0) {
    data = state.pokemons.data.map((item, index) => {
      return <ListItem key={index} value={item}></ListItem>;
    });
  }

  return <ul className="main-ul">{data}</ul>;
};

export default Data;
