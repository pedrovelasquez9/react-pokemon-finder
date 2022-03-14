import React from "react";
import "./Home.css";
import { Input } from "@nextui-org/react";
import PokemonList from "../../components/PokemonList/PokemonList";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

const Home = () => {
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
        <PokemonList />
      </header>
      <section className="home-separator separator-section">
        <PokemonCard />
        <button className="separator-btn"></button>
      </section>
      <footer className="home-section footer-section">
        <PokemonList />
      </footer>
    </main>
  );
};

export default Home;
