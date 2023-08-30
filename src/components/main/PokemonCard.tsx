import React from 'react'
import PokemonData from './PokemonData';
import { IPokemonCard, IPokemonList } from 'interface';
import { useGetPokemonlist } from 'hooks/useGetPokemonlist'

const PokemonCard = () => {
  const { pokemonList, setPokemonList} = useGetPokemonlist();
  return (
    <>
      {
        pokemonList.map((pokemon : IPokemonList) => (
          <PokemonData key={pokemon.url} pokemonName={pokemon.name} />
        ))
      }
    </>
  )
}

export default PokemonCard