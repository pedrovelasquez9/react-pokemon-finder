import { useState } from "react";
import "./SearchInput.css";
import { useDispatch } from "react-redux";
import { fetchPokemonByName } from "../PokemonCard/PokemonCardSlice";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const searchPokemon = () => {
    dispatch(fetchPokemonByName(searchValue));
    setSearchValue("");
  };

  return (
    <div>
      <div className="grid-container">
        <section className="pokeball-section-container">
          <section className="pokeball-section pokeball-header"></section>
          <section className="pokeball-separator "></section>
          <button
            className="pokeball-btn"
            onClick={() => searchPokemon()}
          ></button>
          <section className="pokeball-section pokeball-footer"></section>
        </section>
        <input
          className="search-input"
          type="text"
          name="searchPokemonInput"
          id="searchPokemonInput"
          value={searchValue}
          onChange={(evt) => setSearchValue(evt.target.value)}
          onKeyUp={(evt) => {
            evt.key === "Enter" ? searchPokemon() : null;
          }}
        />
      </div>
    </div>
  );
};

export default SearchInput;
