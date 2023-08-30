import React from 'react'
import * as S from "./Header.style"

const Header = () => {
  return (
    <S.Header>
      <S.Title>나만의 포켓몬 도감</S.Title>
      {/* <S.Languge>한국어/영어 언어 선택 기능시 추가 예정</S.Languge> */}
    </S.Header>
  )
}

export default Header