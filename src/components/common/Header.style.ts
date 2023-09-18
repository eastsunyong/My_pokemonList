import styled from 'styled-components';

interface ILangColor {
  langColor: string;
}

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 6.6rem;
  background-color: white;
  box-shadow: 0 0.2rem 0.8rem rgba(17, 24, 39, 0.25);
  top: 0;
  font-family: 'Galmuri14';
  font-size: 1.4rem;
`;

export const Title = styled.h2`
  padding-left: 3rem;
  cursor: pointer;
`;

export const Box = styled.div<ILangColor>`
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;
  padding-right: 3rem;
  gap: 1.4rem;
  :nth-child(2) {
    opacity: ${(props) => (props.langColor === 'en' ? 0.4 : null)};
  }
  :last-child {
    opacity: ${(props) => (props.langColor === 'ko' ? 0.4 : null)};
  }
  p {
    cursor: pointer;
    margin-top: 0.3rem;
  }
`;
