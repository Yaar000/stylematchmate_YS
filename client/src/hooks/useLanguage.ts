import { useState, useEffect } from 'react';
import { translations } from '../data/translations';

export type Language = 'ko' | 'en' | 'ja' | 'zh';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ko');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const t = translations[currentLanguage];

  return {
    currentLanguage,
    changeLanguage,
    t
  };
};
