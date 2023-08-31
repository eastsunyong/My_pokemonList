import PokemonData from './PokemonData';
import { IPokemonList } from 'interface';
import { useGetPokemonlist } from 'hooks/useGetPokemonlist'
import styled from 'styled-components';

const Containal = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const PokemonCard = () => {
  const { pokemonList, setPokemonList} = useGetPokemonlist();
  return (
    <Containal>
      {
        pokemonList.map((pokemon : IPokemonList) => (
          <PokemonData key={pokemon.url} pokemonName={pokemon.name} />
        ))
      }
    </Containal>
  )
}

export default PokemonCard