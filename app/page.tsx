import { PokemonGrid } from "@/components/pokemon-grid";next build
import { getPokemonListLimit } from "@/lib/pokemonAPI";
export default async function Home() {
  // const pokemonList = await getPokemonList();
  const pokemonList = await getPokemonListLimit(151);
  return <PokemonGrid pokemonList={pokemonList}/>;
}
