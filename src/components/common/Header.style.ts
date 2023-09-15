import styled  from 'styled-components'

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    height: 5rem;
    background-color: white;
    box-shadow: 0 0.2rem 0.8rem rgba(17, 24, 39, 0.25);
    top: 0;
    z-index: 10;
`

export const Title = styled.h2`
    padding-left: 3rem;
    font-family: "Galmuri14";
    cursor: pointer;
`

export const Languge = styled.p`
    padding-right: 3rem;
`