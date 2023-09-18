import React from 'react';
import * as S from './PokemonShape.style';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PokemonShape = ({ PokemonShape }: any) => {
  const pokemonImg: string[] = ['front_default', 'back_default', 'front_shiny', 'back_shiny'];
  return (
    <S.Wrap>
      {pokemonImg.map(
        (imgtype, imgIndex) =>
          PokemonShape?.[imgtype] && (
            <div key={imgIndex}>
              <LazyLoadImage src={PokemonShape?.[imgtype]} />
            </div>
          ),
      )}
    </S.Wrap>
  );
};

export default PokemonShape;
