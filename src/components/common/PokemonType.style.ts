import { styled } from 'styled-components';
import { BackgroundColor } from 'hooks/useTypeChange';

interface IPropsButton {
  bgColor: string;
}

export const Button = styled.button<IPropsButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18.4rem;
  border: none;
  border-radius: 1.2rem;
  background-color: ${(props) => BackgroundColor[props.bgColor]};
  margin: 0 0.4rem 1rem 1rem;
  padding: 2px 0;
  font-family: 'Galmuri14';
`;

export const Span = styled.span`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin-left: 0.2rem;
`;
