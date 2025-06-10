import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('nav.contact')}</h1>
      <form>
        <label>
          {t('contact.name')}:
          <input type="text" placeholder={t('contact.namePlaceholder')} />
        </label>
        <label>
          {t('contact.email')}:
          <input type="email" placeholder={t('contact.emailPlaceholder')} />
        </label>
        <label>
          {t('contact.message')}:
          <textarea placeholder={t('contact.messagePlaceholder')} />
        </label>
        <button type="submit">{t('contact.send')}</button>
      </form>
    </div>
  );
}
