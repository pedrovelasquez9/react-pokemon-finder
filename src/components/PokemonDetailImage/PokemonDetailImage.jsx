import "./PokemonDetailImage.css";
const PokemonDetailImage = ({ name, imageUrl }) => {
  return (
    <div className="card-image">
      <div className="card-container">
        <img className="pokemon-image" src={imageUrl} alt={name} />
      </div>
    </div>
  );
};

export default PokemonDetailImage;
