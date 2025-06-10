// src/components/LanguageSwitcher.js
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const switchLang = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };
  return <button onClick={switchLang}>{i18n.language}</button>;
}
