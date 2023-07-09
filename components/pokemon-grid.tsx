"use client";

import { useState } from "react";

export function PokemonGrid() {
  const [searchText, setSearchText] = useState();
  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Search For Your Pokemon!</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">

        </div>
      </div>
    </>
  );
}
