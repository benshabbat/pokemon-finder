"use client";

import Image from "next/image";
import React from "react";

const PokemonImage = ({ image, name }: { image: string; name: string }) => {
  return (
    <Image
      src={image}
      priority
      fill
      style={{ objectFit: "contain" }}
      className="transition-opacity opacity-0 duration-[2s]"
      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      alt={`picture of ${name}`}
    />
  );
};

export default PokemonImage;
