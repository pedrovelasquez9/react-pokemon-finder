import { useState } from "react";
import "./SearchInput.css";
import { useDispatch } from "react-redux";
import { fetchPokemonByName } from "../PokemonCard/PokemonCardSlice";
import Pokeball from "../Pokeball/Pokeball";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const searchPokemon = () => {
    const validatedValue = searchValue.trim();
    if (validatedValue) {
      dispatch(fetchPokemonByName(validatedValue));
      setSearchValue("");
    }
  };

  return (
    <div className="grid-container">
      <Pokeball btnFunction={searchPokemon} />
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
  );
};

export default SearchInput;
