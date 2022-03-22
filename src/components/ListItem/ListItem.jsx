import "./ListItem.css";
import { useDispatch } from "react-redux";
import { fetchPokemon } from "../PokemonCard/PokemonCardSlice";
import PokemonButton from "../PokemonButton/PokemonButton";
import { animatePokemonButton } from "../../utils/animationHelpers";

const ListItem = ({ value }) => {
  const dispatch = useDispatch();

  const selectPokemon = (pokemonUrl, name) => {
    animatePokemonButton(name);
    dispatch(fetchPokemon(pokemonUrl));
  };

  return (
    <li>
      <PokemonButton
        value={value}
        selectPokemon={selectPokemon}
      ></PokemonButton>
    </li>
  );
};

export default ListItem;
