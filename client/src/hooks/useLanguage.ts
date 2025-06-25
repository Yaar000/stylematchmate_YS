import { useState, useEffect } from 'react';
import { translations } from '../data/translations';

export type Language = 'ko' | 'en' | 'ja' | 'zh';

// Global state for language
let globalLanguage: Language = 'ko';
let globalListeners: Array<(lang: Language) => void> = [];

// Initialize from localStorage
const initializeLanguage = () => {
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      globalLanguage = savedLanguage;
    }
  }
};

// Initialize once
initializeLanguage();

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(globalLanguage);

  useEffect(() => {
    const listener = (lang: Language) => {
      setCurrentLanguage(lang);
    };
    globalListeners.push(listener);

    return () => {
      globalListeners = globalListeners.filter(l => l !== listener);
    };
  }, []);

  const changeLanguage = (lang: Language) => {
    globalLanguage = lang;
    localStorage.setItem('preferred-language', lang);
    
    // Notify all listeners
    globalListeners.forEach(listener => listener(lang));
  };

  const t = translations[currentLanguage];

  return {
    currentLanguage,
    changeLanguage,
    t
  };
};
