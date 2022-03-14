import { useSelector } from "react-redux";
import "./PokemonCard.css";
import { useEffect } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loading from "../Loading/Loading";

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
    console.log(data);
    pokemonData = (
      <section>
        <div className="card-image">
          <div className="card-container">
            <img
              className="pokemon-image"
              src={data.sprites.other["official-artwork"].front_default}
              alt={data.name}
            />
          </div>
        </div>
        <section className="pokemon-card-name">
          <h1>{data.name}</h1>
        </section>
        <section className="pokemon-card-info">
          <div className="pokemon-type">
            Tipo: <p>{data.types[0].type.name}</p>
          </div>
          <div className="pokemon-weight">
            Peso: <p>{data.weight}</p>
          </div>
          <div className="pokemon-height">
            Altura: <p>{data.height}</p>
          </div>
        </section>
      </section>
    );
  }

  return <section className="pokemon-card-container">{pokemonData}</section>;
};

export default PokemonCard;
