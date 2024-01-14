import React, { useContext } from 'react';
import { LanguageContext } from 'App';
import PokemonData from './PokemonData';
import { IPokemonList } from 'interface';
import Loading from 'components/common/Loading';
import Error from 'components/common/Error';

interface IPropsData {
  pokemons: IPokemonList[];
  status: 'idle' | 'error' | 'loading' | 'success';
}

const PokemonCard = (pokemonList: IPropsData) => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      {pokemonList.status === 'loading' && <Loading language={language} />}
      {pokemonList.status === 'error' && <Error language={language} />}
      {pokemonList.status === 'success' && (
        <>
          {pokemonList?.pokemons.map((pokemon: IPokemonList) => (
            <PokemonData key={pokemon.url} pokemonName={pokemon.name} />
          ))}
        </>
      )}
    </>
  );
};

export default PokemonCard;
