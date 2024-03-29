import { IPokemonName, IPokemonType } from 'interface';
import { useAllPokemon } from 'hooks/useAllPokemon';
import PokemonType from 'components/common/PokemonType';
import * as S from './PokemonData.style';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from 'hooks/useLanguage';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PokemonData = ({ pokemonName }: IPokemonName) => {
  const navigate = useNavigate();
  const { pokemonInfo, pokemonSpeciesInfo } = useAllPokemon(pokemonName);
  const { bilingual } = useLanguage(pokemonSpeciesInfo?.names, undefined);

  return (
    <S.Box
    >
      <S.HeadBox>
        <LazyLoadImage
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          alt="포켓볼"
          width={32}
          height={32}
        />
        <p>{bilingual && bilingual[0].name}</p>
      </S.HeadBox>
      <S.Span># {pokemonInfo?.id}</S.Span>

      <S.BodyBox onClick={() => {
        navigate(`/pokemon/${pokemonInfo?.id}`);
      }}>
        <LazyLoadImage
          loading="lazy"
          effect="blur"
          key={pokemonInfo?.id}
          src={
            pokemonInfo?.sprites?.versions?.['generation-v']?.['black-white']?.animated?.front_default ||
            pokemonInfo?.sprites?.front_default
          }
          alt={pokemonInfo?.name}
          width={
            pokemonInfo?.sprites?.versions?.['generation-v']?.['black-white']?.animated?.front_default
              ? '80px'
              : '120px'
          }
          height={120}
        />
      </S.BodyBox>
      <S.TypeBox>
        {pokemonInfo?.types?.map((type: IPokemonType, index: number) => <PokemonType key={index} type={type} />)}
      </S.TypeBox>
    </S.Box>
  );
};

export default PokemonData;
