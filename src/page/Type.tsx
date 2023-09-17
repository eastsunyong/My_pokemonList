import React from 'react'
import { useParams } from "react-router-dom";
import { useLanguage } from 'hooks/useLanguage';
import { useType } from 'hooks/useType';
import { IPokemonMap } from 'interface';
import Header from 'components/common/Header';
import TypeHeader from 'components/type/TypeHeader';
import PokemonData from 'components/main/PokemonData';
import * as S from './Type.style'

const Type = () => {
  const { pokemonType } = useParams();
  const { typePokemonList } = useType(pokemonType);
  const { bilingual } = useLanguage(typePokemonList?.names, undefined)
  return (
    <S.Wrap>
      <Header address={'type'}/>
      <TypeHeader img={pokemonType} krName={bilingual && bilingual[0]?.name} type={pokemonType}/>
      <S.Containal>
        {typePokemonList?.pokemon?.map((pokemon: IPokemonMap) => (
          <PokemonData key={pokemon.pokemon.url} pokemonName={pokemon.pokemon.name} />
        ))}
      </S.Containal>
    </S.Wrap>
  )
}

export default Type