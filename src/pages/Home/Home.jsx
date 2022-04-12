import React, { useEffect } from "react";
import "./Home.css";
import PokemonList from "../../components/PokemonList/PokemonList";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "../../components/PokemonList/DataSlice";
import { fetchPokemon } from "../../components/PokemonCard/PokemonCardSlice";
import { getRandomValue } from "./../../utils/arrayHelpers";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SearchInput from "./../../components/SearchInput/SearchInput";

const Home = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonList());
  }, []);

  useEffect(() => {
    if (state.pokemons.status === "success" && state.pokemons.data.length > 0) {
      dispatch(fetchPokemon(getRandomValue(state.pokemons.data).url));
    }
  }, [state.pokemons.status]);

  let data = <Loading message="Cargando..."></Loading>;

  if (state.error) {
    data = (
      <ErrorMessage
        message="Ha ocurrido un error llamando a la API"
        error={state.error}
      ></ErrorMessage>
    );
  }

  return (
    <main className="home-main-container">
      <header className="home-section header-section">
        <SearchInput />
        {state.pokemons.status === "success" ? (
          <PokemonList data={state.pokemons.data.slice(0, 5)} />
        ) : (
          data
        )}
      </header>
      <section className="home-separator separator-section">
        <PokemonCard />
        <button className="separator-btn"></button>
      </section>
      <footer className="home-section footer-section">
        {state.pokemons.status === "success" ? (
          <PokemonList data={state.pokemons.data.slice(5, 10)} />
        ) : (
          data
        )}
      </footer>
    </main>
  );
};

export default Home;
