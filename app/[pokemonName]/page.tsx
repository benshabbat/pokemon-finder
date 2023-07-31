import { getPokemon } from "@/lib/pokemonAPI";
import PokemonImage from "@/components/pokemon-image";
export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemonObject = await getPokemon(pokemonName);
  console.log(pokemonObject);
  return (
    <>
      <h1 className="text-4xl text-bold pt-4">
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </h1>
      <PokemonImage
        image={pokemonObject.sprites.other["official-artwork"].front_default}
        name={pokemonName}
      />
    </>
  );
}
