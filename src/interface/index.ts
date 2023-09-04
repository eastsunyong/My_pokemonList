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
  language : IPokemonList;
  name : string
}