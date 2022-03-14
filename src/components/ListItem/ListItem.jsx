import "./ListItem.css";
import pokeball from "../../assets/images/pokeball.png";
import { useDispatch } from "react-redux";
import { fetchPokemon } from "../PokemonCard/PokemonCardSlice";

//TODO: fetch pokemon detail
const ListItem = ({ value }) => {
  const { url, name } = value;
  const dispatch = useDispatch();

  const selectPokemon = (pokemonUrl, name) => {
    const buttonElem = document.getElementById(name);
    buttonElem.classList.add("animated-btn");
    setTimeout(() => {
      buttonElem.classList.remove("animated-btn");
    }, 1000);
    dispatch(fetchPokemon(pokemonUrl));
  };

  return (
    <li>
      <button
        id={name}
        className="list-item"
        onClick={() => selectPokemon(url, name)}
      >
        <img src={pokeball} className="pokeball-icon" />
        <span className="pokemon-btn">{name}</span>
      </button>
    </li>
  );
};

export default ListItem;
