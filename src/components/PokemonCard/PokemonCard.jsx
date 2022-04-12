import { useSelector } from "react-redux";
import "./PokemonCard.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loading from "../Loading/Loading";
import PokemonDetailImage from "../PokemonDetailImage/PokemonDetailImage";
import PokemonDetailData from "../PokemonDetailData/PokemonDetailData";
import { FETCH_STATUS } from "../../utils/actionHelpers";

const PokemonCard = () => {
  const state = useSelector((state) => state);
  const pokemonDetailStatus = state.pokemonDetails.status;
  let pokemonData = null;

  if (
    pokemonDetailStatus === FETCH_STATUS.LOADING ||
    pokemonDetailStatus === FETCH_STATUS.PENDING
  ) {
    pokemonData = <Loading message="Cargando..."></Loading>;
  }

  if (pokemonDetailStatus === FETCH_STATUS.ERROR) {
    pokemonData = (
      <section className="pokemon-card-container error-card-container">
        <ErrorMessage
          message="El Pokemon no existe o lo ha capturado otro entrenador"
          error={state.error}
        ></ErrorMessage>
      </section>
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
