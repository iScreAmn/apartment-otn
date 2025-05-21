import { createContext, useState, useContext } from 'react';
import ru from '../locales/ru.json';
import en from '../locales/en.json';

const LanguageContext = createContext();

const translations = { ru, en };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru'); // Начальный язык - русский

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };
  
  const t = (key) => getNestedValue(translations[language], key) || key;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);