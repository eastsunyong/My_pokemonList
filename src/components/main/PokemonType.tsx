import React from 'react'
import { IPokemonType } from 'interface'
import { ConvertedText } from 'hooks/useTypeChange'
import * as S from './PokemonType.style'

interface IPropsData {
  type: IPokemonType
}
const PokemonType = ({ type }: IPropsData) => {
  return (
      <S.Button bgColor={type?.type?.name}
        key={type?.type?.name}>
        {type?.type?.name !== "unknown" &&
          type?.type?.name !== "shadow" && (
            <S.Img
              key={type?.type?.name}
              src={`/images/pokemon-type-images/${type?.type?.name}.svg`}
              alt={type?.type?.name}
            />
          )}
        <S.Span>{ConvertedText[type?.type?.name]}</S.Span>
      </S.Button>
  );
}

export default PokemonType