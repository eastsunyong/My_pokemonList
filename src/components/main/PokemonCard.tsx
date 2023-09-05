import PokemonData from './PokemonData';
import { IPokemonList } from 'interface';
import { useGetPokemonlist } from 'hooks/useGetPokemonlist'
import styled from 'styled-components';
import { useInfinite } from 'hooks/useInfinite';

const Containal = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 4rem;
`
const PokemonCard = () => {
  const { pokemonList, setPokemonList} = useGetPokemonlist();
  const { pokemonListAll, pokemonListAllStatus} = useInfinite();
  console.log(pokemonListAll?.pages[0]);
  
  return (
    <Containal>
      {/* {
        pokemonList.map((pokemon : IPokemonList) => (
          <PokemonData key={pokemon.url} pokemonName={pokemon.name} />
        ))
      } */}
      {
        pokemonListAll?.pages[0]?.results.map((pokemon : IPokemonList) => (
          <PokemonData key={pokemon.url} pokemonName={pokemon.name} />
        ))
      }
    </Containal>
  )
}

export default PokemonCard