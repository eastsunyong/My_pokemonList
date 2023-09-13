import { useQuery } from "react-query";
import { getPokemonInfoWithId, getPokemonListWithSpecies } from "client/api";
import { IPokemonNameBox } from "interface";

export const useDetailPokemon = (params: string | undefined) => {
    const lang = { lang: "ko" }
    
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
    //포켓몬 이름 filter 이용해서 구하기
    let koreaName: IPokemonNameBox[] = [];
    koreaName = pokemonSpeciesInfo?.names.filter(
        (koreaName: IPokemonNameBox) => koreaName.language.name === lang.lang
    )

    return { pokemonInfo, pokemonSpeciesInfo, koreaName }
}