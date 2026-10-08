import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('upsc_zone_lang');
        if (stored === 'hi' || stored === 'en') return stored;
      } catch (e) {
        // Ignore localStorage error
      }
    }
    return 'en';
  });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      if (lang === 'hi') {
        document.documentElement.classList.add('font-devanagari');
      } else {
        document.documentElement.classList.remove('font-devanagari');
      }
      try {
        localStorage.setItem('upsc_zone_lang', lang);
      } catch (e) {
        // Ignore localStorage error
      }
    }
  }, [lang]);

  const toggleLang = (target) => {
    if (target === 'en' || target === 'hi') {
      setLang(target);
    } else {
      setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
    }
  };

  // Helper t(path) e.g. t('nav.features')
  const t = (path) => {
    const keys = path.split('.');
    let current = translations[lang];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English
        current = undefined;
        break;
      }
    }

    if (current !== undefined) return current;

    // English fallback
    let fallback = translations.en;
    for (const key of keys) {
      if (fallback && fallback[key] !== undefined) {
        fallback = fallback[key];
      } else {
        return path;
      }
    }
    return fallback !== undefined ? fallback : path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
