export interface IPokemonList {
  url: string;
  name: string;
}

export interface IPokemonCard {
  pokemonName: string;
  pokemonUrl: string;
}

export interface IPokemonName {
  pokemonName: string;
}

export interface IPokemonType {
  slot: number;
  type: IPokemonList;
}

export interface IPokemonNameBox {
  language: IPokemonList;
  name: string;
}

export interface IApi {
  pageParam: number;
}

export interface IPokemonLanguage {
  language: IPokemonList;
}

export interface IFlavorTextType {
  flavor_text: string | undefined;
  language: IPokemonList;
  version: IPokemonList;
}

export interface IPokemonMap {
  pokemon: IPokemonList;
  slot: number;
}

export interface IPokemonFlavorText {
  flavor_text: string;
  language: IPokemonList;
  version: {
    name: string;
    url: string;
  };
}
