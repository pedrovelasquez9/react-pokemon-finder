export const fetchPokemonDetails = async (url = null) => {
  if (url) {
    return await (await fetch(url)).json();
  }
};
