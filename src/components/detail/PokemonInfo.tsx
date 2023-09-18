import * as S from './PokemonInfo.style';
interface IPropsInfo {
  height: number;
  weight: number;
  language: string;
}
const PokemonInfo = ({ height, weight, language }: IPropsInfo) => {
  return (
    <S.Wrap>
      <S.Box>
        <S.NameBox>{language === 'ko' ? '신장' : 'height'}</S.NameBox>
        <p>{height / 10} m</p>
      </S.Box>
      <S.Box>
        <S.NameBox>{language === 'ko' ? '무게' : 'weight'}</S.NameBox>
        <p>{weight / 10} kg</p>
      </S.Box>
    </S.Wrap>
  );
};

export default PokemonInfo;
