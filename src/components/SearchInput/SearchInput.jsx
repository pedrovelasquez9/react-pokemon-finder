import "./SearchInput.css";
const SearchInput = () => {
  const searchPokemon = (evt) => {
    if (evt.keyCode === 13) {
      console.log("presiona enter");
    }
  };

  return (
    <div>
      <div className="grid-container">
        <section className="pokeball-section-container">
          <section className="pokeball-section pokeball-header"></section>
          <section className="pokeball-separator "></section>
          <button className="pokeball-btn"></button>
          <section className="pokeball-section pokeball-footer"></section>
        </section>
        <input className="search-input" type="text" />
      </div>
    </div>
    // <input
    //   type="search"
    //   name="search"
    //   id="search"
    //   onKeyUp={(evt) => searchPokemon(evt)}
    // />
  );
};

export default SearchInput;
