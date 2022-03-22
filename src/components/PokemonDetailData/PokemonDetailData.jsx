import "./PokemonDetailData.css";

const PokemonDetailData = ({ data }) => {
  return (
    <>
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
    </>
  );
};

export default PokemonDetailData;
