"use client";
import PokemonCard from "@/components/pokemon-card";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface PokemonGridProps {
  pokemonList: any;
}
export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState("");
  const searchPokemon = (e: any) => {
    const { value } = e.target;
    setSearchText(value);
  };
  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
  };
  const filteredPokemon = searchFilter(pokemonList);
  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Search For Your Pokemon!</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="pokemonName">Pokemon Name</Label>
          <Input
            type="text"
            id="pokemonName"
            placeholder="Pokemon Name"
            value={searchText}
            onChange={searchPokemon}
            autoComplete="off"
          />
        </div>
        <h3 className="text-3xl pt-12 pb-8 text-center">Pokemon collection</h3>
      </div>
      <div className="grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        {filteredPokemon?.map((pokemon: any) => {
          return <PokemonCard name={pokemon?.name} key={pokemon?.name+ "card"} />;
        })}
      </div>
    </>
  );
}
