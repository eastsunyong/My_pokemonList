import { useQuery } from "react-query";
import { getPokemonInfoWithId, getPokemonListWithSpecies } from "client/api";

export const useDetailPokemon = (params: string | undefined) => {   
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
    return { pokemonInfo, pokemonSpeciesInfo }
}