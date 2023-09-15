import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 700;
    font-family: "Galmuri14";
    margin-top: 7rem;
`

const Loading = () => {
  return (
    <Wrap>
      <p>불러오는 중 ... </p>
    </Wrap>
  )
}

export default Loading