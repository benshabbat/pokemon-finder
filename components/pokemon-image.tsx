"use client"

import Image from 'next/image'
import React from 'react'

const pokemonImage = ({image,name}:{image:string,name:string}) => {
  return (
    <Image
    src={image }
    width={200}
    height={200}
    alt={`picture of ${name}`}
  />
  )
}

export default pokemonImage