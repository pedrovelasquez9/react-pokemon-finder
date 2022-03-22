import "./PokemonButton.css";
import pokeball from "../../assets/images/pokeball.png";
const PokemonButton = ({ value, selectPokemon }) => {
  const { url, name } = value;
  return (
    <button
      id={name}
      className="list-item"
      onClick={() => selectPokemon(url, name)}
    >
      <img src={pokeball} className="pokeball-icon" />
      <span className="pokemon-btn">{name}</span>
    </button>
  );
};

export default PokemonButton;
