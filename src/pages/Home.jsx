import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>{t('home.welcome')}</p>
    </div>
  );
}
