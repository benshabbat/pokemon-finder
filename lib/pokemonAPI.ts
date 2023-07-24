const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemonList() {
  const response = await fetch(POKEMON_API + "pokemon?limit=500&offset=0");
  const data = await response.json();
  return data.results;
}
export async function getPokemonListLimit(limit:number) {
  const response = await fetch(POKEMON_API + `pokemon?limit=${limit}&offset=0`);
  const data = await response.json();
  return data.results;
}