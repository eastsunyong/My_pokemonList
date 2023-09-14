import { useDetailPokemon } from 'hooks/useDetailPokemon'
import { useParams } from 'react-router-dom'
import { IPokemonType, IFlavorTextType, IPokemonNameBox } from 'interface'
import PokemonType from 'components/common/PokemonType'
import * as S from './Detail.style'
import Header from 'components/common/Header'
import PokemonInfo from 'components/detail/PokemonInfo'
import { useLanguage } from 'hooks/useLanguage'
import PokemonShape from 'components/detail/PokemonShape'

const Detail = () => {
  const { id } = useParams();
  const { pokemonInfo, pokemonSpeciesInfo } = useDetailPokemon(id);
  let krName: IPokemonNameBox[] = useLanguage(pokemonSpeciesInfo?.names)
  let FlavorText: IFlavorTextType[] = useLanguage(pokemonSpeciesInfo?.flavor_text_entries)

  console.log(pokemonSpeciesInfo?.names);
  
  return (
    <>
      <Header />
      <S.Wrap>
        <S.Box>
          <S.HeadBox>
            <img
              src={
                pokemonInfo?.sprites?.versions?.["generation-v"]?.["black-white"]
                  ?.animated?.front_default || pokemonInfo?.sprites?.front_default}
              width={110}
              height={130}
            />
            <p># {pokemonInfo?.id}</p>
            <p>{pokemonSpeciesInfo?.names === undefined ? '이름 정보를 불러올수 없습니다' : (krName && krName[0]?.name)}</p>
          </S.HeadBox>
          <S.BodyBox>
            <div>
              {pokemonInfo?.types.map((type: IPokemonType, index: number) => {
                return <PokemonType key={index} type={type} />
              })}
            </div>
            <div>
            <h3>{pokemonSpeciesInfo?.genera[1]?.genus}</h3>
            </div>
            <p>{FlavorText && FlavorText[0]?.flavor_text}</p>
            <PokemonInfo height={pokemonInfo?.height} weight={pokemonInfo?.weight} />
          </S.BodyBox>
          <PokemonShape PokemonShape={pokemonInfo?.sprites}/>
        </S.Box>
      </S.Wrap>
    </>
  )
}

export default Detail