import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { IPokemonName, IPokemonNameBox } from 'interface'
import { getPokemonInfo, getPokemonListWithSpecies } from 'client/api'

export const useAllPokemon = ({ pokemonName }: IPokemonName) => {
  const [lang, setLang] = useState({lang :  "ko"})
  console.log(pokemonName);
  
  
  //포켓몬 세부정보 api
  const { data: pokemonInfo } = useQuery(
    ["pokemons", pokemonName],
    () => getPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`),
    { enabled: !!pokemonName },
  );

  //포켓몬 이름 데이터 가져오는 api
  const { data: pokemonSpeciesInfo } = useQuery(
    ["pokemon-species", pokemonInfo?.species?.name],
    () => getPokemonListWithSpecies(pokemonInfo?.species?.name),
    { enabled: !!pokemonInfo?.species?.name }
  );

  //포켓몬 이름 filter 이용해서 구하기
  let koreaName : IPokemonNameBox[] = [];
  koreaName = pokemonSpeciesInfo?.names.filter(
    (koreaName : IPokemonNameBox) => koreaName.language.name === lang.lang
  )
  return { pokemonInfo, koreaName }
}