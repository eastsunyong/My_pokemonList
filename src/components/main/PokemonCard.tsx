import PokemonData from './PokemonData';
import { IPokemonList } from 'interface';
import styled from 'styled-components';
import Loading from './status/Loading';
import Error from './status/Error';

const Containal = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0 2rem;
`
interface IPropsData {
  pokemons: IPokemonList[];
  status: "idle" | "error" | "loading" | "success";
}

const PokemonCard = (pokemonList: IPropsData) => {
  return (
    <>
      <Containal>
        {pokemonList.status === "success" && <>
          {pokemonList?.pokemons.map((pokemon: IPokemonList) => (
            <PokemonData key={pokemon.url} pokemonName={pokemon.name} />
          ))}
        </>}
      </Containal>

      {pokemonList.status === "loading" && <Loading />}
      {pokemonList.status === "error" && <Error />}
    </>
  )
}

export default PokemonCard