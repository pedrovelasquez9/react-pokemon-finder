import "./ListItem.css";
import pokeball from "../../assets/images/pokeball.png";

//TODO: fetch pokemon detail
const ListItem = ({ value }) => {
  const { url, name } = value;

  const selectPokemon = (pokemonUrl, name) => {
    const buttonElem = document.getElementById(name);
    buttonElem.classList.add("animated-btn");
    setTimeout(() => {
      buttonElem.classList.remove("animated-btn");
    }, 1000);
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
