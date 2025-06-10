// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import ThemeToggle from './components/ThemeToggle';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function App() {
  const { t } = useTranslation();
  return (
    <>
      <nav>
        <Link to="/">{t('nav.home')}</Link>
        <Link to="/about">{t('nav.about')}</Link>
        <Link to="/works">{t('nav.works')}</Link>
        <Link to="/contact">{t('nav.contact')}</Link>
        <ThemeToggle />
        <LanguageSwitcher />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works/*" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}
