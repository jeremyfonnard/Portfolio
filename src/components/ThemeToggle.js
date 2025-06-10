// src/components/ThemeToggle.js
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <button onClick={toggle}>
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
