import { BASE_URL } from "../utils/serviceHelpers";

export const searchPokemon = async (pokemonName = null) => {
  return await (await fetch(`${BASE_URL}/${pokemonName}`)).json();
};
