import { LanguageContext } from 'App'
import { useContext } from "react";
import { IPokemonLanguage, IPokemonNameBox, IPokemonFlavorText } from "interface";

export const useLanguage = (langArray: [], flavorArray: [] | undefined) => {
    const {language, setLanguage} = useContext(LanguageContext);

    let bilingual: IPokemonNameBox[] = [];
    bilingual = langArray?.filter(
        (countryLang: IPokemonLanguage) => countryLang.language.name === language
    )
    let flavorText: IPokemonFlavorText[] | undefined = [];
    flavorText = flavorArray?.filter(
        (featureText: IPokemonLanguage) => featureText.language.name === language
    )
    return {bilingual, flavorText, language, setLanguage}
}