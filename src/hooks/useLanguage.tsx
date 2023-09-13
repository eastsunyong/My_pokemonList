import { IPokemonLanguage } from "interface";

export const useLanguage = (array: []) => {
    const lang = { lang: "ko" }

    let koreaLanguage: any[] = [];
    koreaLanguage = array?.filter(
        (koreaName: IPokemonLanguage) => koreaName.language.name === lang.lang
    )
    return koreaLanguage
}