import { useSelector } from "react-redux";
import "./PokemonCard.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loading from "../Loading/Loading";
import PokemonDetailImage from "../PokemonDetailImage/PokemonDetailImage";
import PokemonDetailData from "../PokemonDetailData/PokemonDetailData";

const PokemonCard = () => {
  const state = useSelector((state) => state);
  const pokemonDetailStatus = state.pokemonDetails.status;
  let pokemonData = null;

  if (pokemonDetailStatus === "loading" || pokemonDetailStatus === "pending") {
    pokemonData = <Loading message="Cargando..."></Loading>;
  }

  if (state.error) {
    pokemonData(
      <ErrorMessage
        message="Ha ocurrido un error llamando a la API"
        error={state.error}
      ></ErrorMessage>
    );
  }

  if (pokemonDetailStatus === "success" && state.pokemonDetails.data) {
    const data = state.pokemonDetails.data;
    const imageUrl = data.sprites.other["official-artwork"].front_default;
    const name = data.name;

    pokemonData = (
      <section className="pokemon-card-container">
        <PokemonDetailImage name={name} imageUrl={imageUrl} />
        <PokemonDetailData data={data} />
      </section>
    );
  }

  return pokemonData;
};

export default PokemonCard;
