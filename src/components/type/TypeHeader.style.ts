import styled from "styled-components";
import { BackgroundColor } from "hooks/useTypeChange";

interface IPropsButton {
    bgColor: string | undefined;
}

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 8.5rem;
`
export const HeadBox = styled.div<IPropsButton>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 21rem;
    height: 8rem;
    border: none;
    box-shadow: 0 0.2rem 0.8rem rgba(17, 24, 39, 0.25);
    border-radius: 0.8rem;
    background-color: ${((props) => props.bgColor && BackgroundColor[props.bgColor])};
    font-size: 2rem;
    font-weight: bold;
    color: white;
    img {
        width: 5rem;
        height: 5rem;
        margin-right: 0.4rem;
    }
`
