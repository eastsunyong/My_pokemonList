import React from "react";
import PokemonType from "./PokemonType";
import { IPokemonType } from "interface";
import styled from "styled-components";

const Wrap = styled.nav`
    display: flex;
    flex-wrap: wrap;
    padding: 8rem 0 0 0;
    justify-content: center;
`

const Label = () => {
  const typeList = [
    { slot: 0, type: { name: "normal", url: "" } },
    { slot: 0, type: { name: "fighting", url: "" } },
    { slot: 0, type: { name: "flying", url: "" } },
    { slot: 0, type: { name: "poison", url: "" } },
    { slot: 0, type: { name: "ground", url: "" } },
    { slot: 0, type: { name: "rock", url: "" } },
    { slot: 0, type: { name: "bug", url: "" } },
    { slot: 0, type: { name: "ghost", url: "" } },
    { slot: 0, type: { name: "steel", url: "" } },
    { slot: 0, type: { name: "fire", url: "" } },
    { slot: 0, type: { name: "water", url: "" } },
    { slot: 0, type: { name: "grass", url: "" } },
    { slot: 0, type: { name: "electric", url: "" } },
    { slot: 0, type: { name: "psychic", url: "" } },
    { slot: 0, type: { name: "ice", url: "" } },
    { slot: 0, type: { name: "dragon", url: "" } },
    { slot: 0, type: { name: "dark", url: "" } },
    { slot: 0, type: { name: "fairy", url: "" } },
  ];
  return (
  <Wrap>
    {typeList.map((type: IPokemonType, index: number) => (
      <PokemonType key={index} type={type} />
    ))}
  </Wrap>
  );
};

export default Label;
