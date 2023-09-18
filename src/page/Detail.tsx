import * as S from './Detail.style'
import { useParams } from 'react-router-dom'
import { useDetailPokemon } from 'hooks/useDetailPokemon'
import { useLanguage } from 'hooks/useLanguage'
import { IPokemonType } from 'interface'
import Header from 'components/common/Header'
import PokemonType from 'components/common/PokemonType'
import PokemonInfo from 'components/detail/PokemonInfo'
import PokemonShape from 'components/detail/PokemonShape'
import Loading from 'components/common/Loading'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Detail = () => {
  const { id } = useParams();
  const { pokemonInfo, pokemonSpeciesInfo, isLoading } = useDetailPokemon(id);
  const { bilingual, flavorText, language } = useLanguage(pokemonSpeciesInfo?.names, pokemonSpeciesInfo?.flavor_text_entries);
  return (
    <>
      <Header address={'detail'}/>
      <S.Wrap>
        <S.Box>
          {isLoading ? <Loading language={language}/> : <>
            <S.HeadBox>
              <LazyLoadImage
                src={
                  pokemonInfo?.sprites?.versions?.["generation-v"]?.["black-white"]
                    ?.animated?.front_default || pokemonInfo?.sprites?.front_default}
                alt='포켓몬 사진'
                width={110}
                height={130}
              />
              <p># {pokemonInfo?.id}</p>
              <p>{pokemonSpeciesInfo?.names === undefined ? '이름 정보를 불러올수 없습니다' : (bilingual && bilingual[0]?.name)}</p>
            </S.HeadBox>
            <S.BodyBox>
              <div>
                {pokemonInfo?.types.map((type: IPokemonType, index: number) => {
                  return <PokemonType key={index} type={type}/>
                })}
              </div>
              <div>
                <h3>{language === 'ko' ? pokemonSpeciesInfo?.genera[1]?.genus : pokemonSpeciesInfo?.genera[7]?.genus}</h3>
              </div>
              <p>{flavorText && flavorText[0]?.flavor_text}</p>
              <PokemonInfo height={pokemonInfo?.height} weight={pokemonInfo?.weight} language={language} />
            </S.BodyBox>
            <PokemonShape PokemonShape={pokemonInfo?.sprites} />
          </>
          }
        </S.Box>
      </S.Wrap>
    </>
  )
}

export default Detail