import { createContext, useState, useContext } from 'react';
import ru from '../lacales/ru.json';
import en from '../lacales/en.json';

const LanguageContext = createContext();

const translations = { ru, en };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru'); // Начальный язык - русский

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);