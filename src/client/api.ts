import client from "./client";
import { IApi } from "interface";

//메인화면 포켓몬 리스트 가져오는 api
export const getPokemonList = async ({ pageParam = 0 }: IApi) => {
  return await client
    .get("/pokemon", {
      params: { limit: 32, offset: pageParam },
    })
    .then((res) => res.data);
};

//포켓몬 id 통해서 상세정보 요청하는 api
export const getPokemonInfoWithId = async (id: string | undefined) => {
  const data = await client.get(`/pokemon/${id}`).then((res) => res.data);
  return data;
};

//포켓몬 이름 통해서 상세정보 요청하는 api
export const getPokemonInfo = async (url: string) => {
  const data = await client.get(url).then((res) => res.data);
  return data;
};

//포켓몬 타입 통해서 상세정보 요청하는 api
export const getPokemonListWithType = async (typeId: string | undefined) => {
  return await client.get(`/type/${typeId}`).then((res) => res.data);
};

//포케몬 이름 가져오는 api
export const getPokemonListWithSpecies = async (id: string | undefined) => {
  return await client.get(`/pokemon-species/${id}`).then((res) => res.data);
};
