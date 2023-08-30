import React from 'react'
import * as S from "./Input.style"

const Input = () => {
  return (
    <S.Wrap>
        <S.Input
            placeholder='포켓몬 이름 또는 아이디를 입력해주세요!' />
    </S.Wrap>
  )
}

export default Input