import { useTranslation } from "react-i18next";

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const onSelectLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("lang", language);
  };
  return (
    <>
      <img
        src="https://flagsapi.com/GB/flat/24.png"
        role="button"
        alt="English"
        onClick={() => onSelectLanguage("en")}
      ></img>
      <img
        src="https://flagsapi.com/TR/flat/24.png"
        role="button"
        alt="Turkish"
        onClick={() => onSelectLanguage("tr")}
      ></img>
    </>
  );
}
