// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) 
  .use(initReactI18next) 
  .init({
    fallbackLng: 'en',
    debug: true, // Set to true to see logs in the browser console
    supportedLngs: ['en', 'zh', 'zh-CN'],

    // Default namespace. Corresponds to the "translation.json" filename.
    ns: ['translation'],
    defaultNS: 'translation',

    interpolation: {
      escapeValue: false,
    },

    backend: {
      // This path is crucial. It tells i18next how to construct the URL.
      // {{lng}} = current language (e.g., "en")
      // {{ns}} = namespace (e.g., "translation")
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;