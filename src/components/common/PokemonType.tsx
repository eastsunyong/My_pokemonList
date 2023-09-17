import React, {useContext} from 'react'
import { IPokemonType } from 'interface'
import { ConvertedText } from 'hooks/useTypeChange'
import { useNavigate } from 'react-router-dom'
import { LanguageContext } from 'App'

import * as S from './PokemonType.style'
interface IPropsData {
  type: IPokemonType;
}
const PokemonType = ({ type }: IPropsData) => {
  const navigate = useNavigate();
  const {language} = useContext(LanguageContext)
  return (
    <S.Button bgColor={type?.type?.name} key={type?.type?.name}
      onClick={() => { navigate(`/type/${type?.type?.name}`) }}>
      {type?.type?.name !== "unknown" &&
        type?.type?.name !== "shadow" && (
          <S.Img
            key={type?.type?.name}
            src={`/images/pokemon-type-images/${type?.type?.name}.svg`}
            alt={type?.type?.name}
            width={20}
            height={20}
          />
        )}
      <S.Span>{language === 'ko' ? ConvertedText[type?.type?.name] : type?.type?.name}</S.Span>
    </S.Button>
  );
}

export default PokemonType