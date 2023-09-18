import React from 'react';
import * as S from './TypeHeader.style';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface PropsData {
  img: string | undefined;
  krName: string;
  type: string | undefined;
}

const TypeHeader = (typeData: PropsData) => {
  return (
    <S.Wrap>
      <S.HeadBox bgColor={typeData?.type}>
        <LazyLoadImage src={`/images/pokemon-type-images/${typeData.type}.svg`} alt={typeData.type} />
        <p>{typeData.krName}</p>
      </S.HeadBox>
    </S.Wrap>
  );
};

export default TypeHeader;
