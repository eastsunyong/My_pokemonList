import Header from 'components/common/Header'
import Input from 'components/main/Input'
import PokemonCard from 'components/main/PokemonCard'
import * as S from "./Main.style"
import { useInfinite } from 'hooks/useInfinite'
import { useInView } from 'react-intersection-observer';
import Label from 'components/main/Label'

const Main = () => {
  const [ref, useInview] = useInView();
  const { pokemonListAll, pokemonListAllStatus } = useInfinite(useInview);
  return (
    <S.Wrap>
      <Header />
      {/* <Input /> */}
      <Label />
      {pokemonListAll?.pages.map((group, index) => (
        <PokemonCard key={index} pokemons={group.results} status={pokemonListAllStatus} />
      ))}
      <div ref={ref}/>
    </S.Wrap>
  )
}

export default Main