import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import { fetchPokemonList } from "./DataSlice";
import ListItem from "../ListItem/ListItem";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Input } from "@nextui-org/react";

const Home = () => {
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

  return (
    <main className="home-main-container">
      <header className="home-section header-section">
        <Input
          animated={false}
          className="home-search-input"
          clearable
          style={{ width: "100%" }}
          type={["text"]}
          placeholder="Find Pokemon"
          color="default"
          aria-label="Find Pokemon"
        />
        <section className="data-section">
          <ul className="main-ul">{data}</ul>
        </section>
      </header>
      <section className="home-separator separator-section">
        <button className="separator-btn"></button>
      </section>
      <footer className="home-section footer-section">
        <section className="data-section">
          <ul className="main-ul">{data}</ul>
        </section>
      </footer>
    </main>
  );
};

export default Home;
