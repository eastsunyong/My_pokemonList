import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Galmuri14';
  margin-top: 7rem;
`;
interface IPropsData {
  language: string;
}

const Loading = (language: IPropsData) => {
  return (
    <Wrap>
      <p>{language.language === 'ko' ? '불러오는 중 ...' : 'loading ...'}</p>
    </Wrap>
  );
};

export default Loading;
