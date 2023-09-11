import { useInView } from 'react-intersection-observer';
import PokemonData from './PokemonData';
import { IPokemonList } from 'interface';
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
  const [ref, useInview] = useInView();
  const { pokemonListAll, pokemonListAllStatus} = useInfinite(useInview);
  
  return (
    <Containal>
      {
        pokemonListAll?.pages[0]?.results.map((pokemon : IPokemonList) => (
          <PokemonData key={pokemon.url} pokemonName={pokemon.name} />
        ))
      }
      <div ref={ref}/>
    </Containal>
  )
}

export default PokemonCard