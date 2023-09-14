import { useQuery } from 'react-query'
import { getPokemonInfo, getPokemonListWithSpecies } from 'client/api'

export const useAllPokemon = (pokemonName: string) => {
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
  return { pokemonInfo, pokemonSpeciesInfo }
}