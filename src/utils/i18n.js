import es from '../i18n/es.json';
import en from '../i18n/en.json';

const translations = {
  es,
  en
};

export const languages = Object.keys(translations);

export const getDefaultLanguage = () => {
    return languages[0];
};

export const getLanguage = () => {
    return languages[0]; // default
};

export const setLanguage = (lang) => {
  localStorage.setItem('language', lang);
};

export const translate = (key, lang) => {
  const language = lang || getDefaultLanguage();
  const keys = key.split('.');
  let current = translations[language];

  for (const k of keys) {
    if (current && current[k]) {
      current = current[k];
    } else {
      console.error(`Translation key not found: ${key} in ${language}`);
      return key;
    }
  }
  return current;
};