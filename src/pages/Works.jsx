// src/pages/Works.jsx
import { Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Exercices from './works/Exercices';
import CaseStudy from './works/CaseStudy';
import ConcretCase from './works/ConcretCase';

export default function Works() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('nav.works')}</h1>
      <p>{t('works.welcome')}</p>
      <nav>
        <Link to="exercices">{t('nav.exercices')}</Link>
        <Link to="case-study">{t('nav.caseStudy')}</Link>
        <Link to="concret-case">{t('nav.concretCase')}</Link>
      </nav>
      <Routes>
        <Route path="exercices" element={<Exercices />} />
        <Route path="case-study" element={<CaseStudy />} />
        <Route path="concret-case" element={<ConcretCase />} />
      </Routes>
    </div>
  );
}
