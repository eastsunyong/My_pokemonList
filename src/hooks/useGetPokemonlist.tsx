import React, { useState, useEffect } from 'react'
import { getPoketmonList } from 'client/api'

export const useGetPokemonlist = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        getPoketmonList(pokemonList).then((res)=> setPokemonList(res.results))
    },[])
    return {pokemonList, setPokemonList}
}