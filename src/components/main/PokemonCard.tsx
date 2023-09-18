import React, { useContext } from 'react';
import { LanguageContext } from 'App';
import styled from 'styled-components';
import PokemonData from './PokemonData';
import { IPokemonList } from 'interface';
import Loading from 'components/common/Loading';
import Error from 'components/common/Error';

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
  const { language } = useContext(LanguageContext)
  return (
    <>
      <Containal>
        {pokemonList.status === "loading" && <Loading language={language} />}
        {pokemonList.status === "error" && <Error language={language} />}

        {pokemonList.status === "success" && <>
          {pokemonList?.pokemons.map((pokemon: IPokemonList) => (
            <PokemonData key={pokemon.url} pokemonName={pokemon.name} />
          ))}
        </>}
      </Containal>

    </>
  )
}

export default PokemonCard