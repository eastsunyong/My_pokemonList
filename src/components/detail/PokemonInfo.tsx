import * as S from './PokemonInfo.style'
interface IPropsInfo {
    height: number;
    weight: number;
}
const PokemonInfo = ({ height, weight }: IPropsInfo) => {
    return (
            <S.Wrap>
                <S.Box>
                    <S.NameBox>신장</S.NameBox>
                    <p>{height / 10} m</p>
                </S.Box>
                <S.Box>
                    <S.NameBox>무게</S.NameBox>
                    <p>{weight / 10} kg</p>
                </S.Box>
            </S.Wrap>
    )
}

export default PokemonInfo