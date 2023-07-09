"use client";

import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export function PokemonGrid() {
  const [searchText, setSearchText] = useState();
  const searchPokemon = (e:any) => {
    const { value } = e.target;
    setSearchText(value);
  };
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
          />
        </div>
      </div>
    </>
  );
}
