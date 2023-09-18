import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Galmuri14';
  margin-top: 7rem;
  gap: 4rem;
`;
interface IPropsData {
  language: string;
}

const Error = (language: IPropsData) => {
  return (
    <Wrap>
      <p>{language.language === 'ko' ? '데이터를 불러오는데 실패했습니다' : 'Failed to load data'}</p>
      <LazyLoadImage loading="lazy" src="/images/NaNImg.jpg" alt="에러 이미지" width={480} height={350} />
    </Wrap>
  );
};

export default Error;
