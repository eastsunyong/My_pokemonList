import { IPokemonName, IPokemonType } from 'interface';
import { useAllPokemon } from 'hooks/useAllPokemon';
import PokemonType from './PokemonType';
import * as S from "./PokemonData.style"
import { useNavigate } from 'react-router-dom';

const PokemonData = ({ pokemonName }: IPokemonName) => {
  const { pokemonInfo, koreaName } = useAllPokemon({ pokemonName })
  const navigate = useNavigate();
  
  return (
    <S.Box onClick={()=> {navigate(`/pokemon/${pokemonInfo?.id}`)}}>
      <S.HeadBox>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          alt="포켓볼"
        />
        <p>{koreaName && koreaName[0].name}</p>
      </S.HeadBox>
      <S.Span># {pokemonInfo?.id}</S.Span>

      <S.BodyBox>
        <img
          key={pokemonInfo?.id}
          src={
            pokemonInfo?.sprites?.versions?.["generation-v"]?.["black-white"]
              ?.animated?.front_default || pokemonInfo?.sprites?.front_default
          }
          alt={pokemonInfo?.name}
          width={
            pokemonInfo?.sprites?.versions?.["generation-v"]?.["black-white"]
              ?.animated?.front_default
              ? "80px"
              : "120px"
          }
          height={120}
        />
      </S.BodyBox>
      <S.TypeBox>
      {pokemonInfo?.types?.map((type: IPokemonType, index: number) => (
          <PokemonType key={index} type={type} />
        ))}
      </S.TypeBox>
    </S.Box>
  )
}

export default PokemonData