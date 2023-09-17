import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getPokemonInfoWithId, getPokemonListWithSpecies } from "client/api";

export const useDetailPokemon = (params: string | undefined) => {  
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 650);
      }, [])

    const { data: pokemonInfo } = useQuery(
        ["pokemons", params],
        () => getPokemonInfoWithId(params),
        { enabled: !!params }
    );
    const { data: pokemonSpeciesInfo } = useQuery(
        ["pokemon-species", params],
        () => getPokemonListWithSpecies(params),
        { enabled: !!params }
    );
    return { pokemonInfo, pokemonSpeciesInfo, isLoading }
}