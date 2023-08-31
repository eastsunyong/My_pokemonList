import React, { useEffect, useState } from 'react'
import Header from 'components/main/Header'
import Input from 'components/main/Input'
import PokemonCard from 'components/main/PokemonCard'
import * as S from "./Main.style"

const Main = () => {
  return (
    <S.Wrap>
      <Header />
      <Input />
      <PokemonCard />
    </S.Wrap>
  )
}

export default Main