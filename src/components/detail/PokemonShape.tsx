import React from 'react'
import * as S from './PokemonShape.style'

const PokemonShape = ({ PokemonShape }: any) => {
    const pokemonImg: string[] = [
        "front_default",
        "back_default",
        "front_shiny",
        "back_shiny"
    ];
    return (
        <S.Wrap>
            {pokemonImg.map(
                (imgtype, imgIndex) =>
                    PokemonShape?.[imgtype] && (
                        <div key={imgIndex}>
                            <img
                                src={PokemonShape?.[imgtype]}
                            />
                        </div>
                    )
            )}
        </S.Wrap>
    )
}

export default PokemonShape