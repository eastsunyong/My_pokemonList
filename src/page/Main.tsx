import Header from 'components/common/Header';
import PokemonCard from 'components/main/PokemonCard';
import * as S from './Main.style';
import { useInfinite } from 'hooks/useInfinite';
import { useInView } from 'react-intersection-observer';
import Label from 'components/main/Label';
import styled from 'styled-components';

const Containal = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0 2rem;
`;

const Main = () => {
  const [ref, useInview] = useInView();
  const { pokemonListAll, pokemonListAllStatus } = useInfinite(useInview);
  return (
    <S.Wrap>
      <Header address={'main'} />
      <Label />
      <Containal>
        {pokemonListAll?.pages.map((group, index) => (
          <PokemonCard key={index} pokemons={group.results} status={pokemonListAllStatus} />
        ))}
        <div ref={ref} />
      </Containal>
    </S.Wrap>
  );
};

export default Main;
