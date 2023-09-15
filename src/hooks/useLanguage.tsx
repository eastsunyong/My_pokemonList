import { useState } from "react";
import { IPokemonLanguage, IPokemonNameBox, IPokemonFlavorText } from "interface";

export const useLanguage = (langArray: [], flavorArray: [] | undefined) => {
    const [lang, setLang] = useState({ lang: "ko" });

    let language: IPokemonNameBox[] = [];
    language = langArray?.filter(
        (countryLang: IPokemonLanguage) => countryLang.language.name === lang.lang
    )
    let flavorText: IPokemonFlavorText[] | undefined = [];
    flavorText = flavorArray?.filter(
        (featureText: IPokemonLanguage) => featureText.language.name === lang.lang
    )
    return {language, flavorText, lang, setLang}
}