import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tr from "./translations/tr.json"
import en from "./translations/en.json"

const initialLanguage = localStorage.getItem('lang') || navigator.language || 'en';
console.log(initialLanguage)
export const i18nInstance = i18n.use(initReactI18next) // passes i18n down to react-i18next

i18nInstance.init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
        en: {
            translation: en
        },
        tr: {
            translation: tr
        },
    },
    // lng: "tr", // if you're using a language detector, do not define the lng option
    fallbackLng: initialLanguage,

    interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
});
