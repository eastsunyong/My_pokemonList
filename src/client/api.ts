import client from "./client";
import { IApi } from "interface";

export const getPokemonList = async ({ pageParam = 0 }: IApi) => {
  return await client.get('/pokemon', {
      params: { limit: 20, offset: pageParam },
    })
    .then((res) => res.data)
};

export const getPokemonInfo = async (url: string) => {
    const data = await client.get(url).then((res) => res.data)
  return data;
};

export const getPokemonListWithType = async (typeId: string | undefined) => {
  return await client.get(`/type/${typeId}`).then((res) => res.data);
};

export const getPokemonListWithSpecies = async (id: string | undefined) => {
  return await client.get(`/pokemon-species/${id}`).then((res) => res.data);
};
