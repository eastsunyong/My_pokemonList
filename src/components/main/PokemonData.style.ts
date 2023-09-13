import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  width: 40rem;
  height: 25.5rem;
  border: none;
  padding: 0.4rem;
  margin: 3rem 0;
  background-color: white;
  box-shadow: 0 0.2rem 0.8rem rgba(17, 24, 39, 0.25);
  cursor: pointer;
`;

export const HeadBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-left : 0.4rem;
  p {
    font-size: 1.4rem;
    font-family: "Galmuri14";
  }
`;
export const BodyBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;
export const Span = styled.span`
  padding-left: 0.8rem;
  margin-top: 0.2rem;
  font-size: 0.6rem;
  font-family: "Galmuri14";
`;

export const TypeBox = styled.div`
  display: flex;
  border: none;
  margin-top: 1rem;
  :first-child:nth-last-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10px;
    width: 100%;
    padding: 1.1rem 2px;
  }
`;
