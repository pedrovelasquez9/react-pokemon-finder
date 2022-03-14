import PokemonCardSlice from "../components/PokemonCard/PokemonCardSlice";
import DataSlice from "../components/PokemonList/DataSlice";

const AppSlices = {
  pokemons: DataSlice,
  pokemonDetails: PokemonCardSlice,
};

export default AppSlices;
