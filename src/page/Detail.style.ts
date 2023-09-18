import styled from 'styled-components';

export const Wrap = styled.div`
  background-color: #f2f2f2;
  min-height: 100vh;
  font-family: 'Galmuri14';
  justify-content: center;
  display: flex;
`;

export const Box = styled.div`
  margin-top: 9rem;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 0.2rem 0.8rem rgba(17, 24, 39, 0.25);
  border: none;
  border-radius: 1.4rem;
  width: 53rem;
  height: 70rem;
`;
export const HeadBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  img {
    margin-top: 5.5rem;
  }

  :nth-child(2) {
    color: #99b2b9;
    font-size: 1.8rem;
    margin: 4rem 0 3rem;
    padding-right: 1rem;
  }
  :nth-child(3) {
    font-size: 2.6rem;
    margin-bottom: 3rem;
  }
`;

export const BodyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  :first-child {
    display: flex;
  }
  :nth-child(3) {
    padding: 0 2rem;
  }
  h3 {
    font-size: 2rem;
    margin: 2rem 0;
  }
`;
