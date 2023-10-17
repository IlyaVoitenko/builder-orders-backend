const i18next = require("i18next");
const backend = require("i18next-node-fs-backend");

// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: "de",
//     debug: false,
//     detection: {
//       order: ["localStorage", "cookie"],
//       caches: ["localStorage", "cookie"],
//     },
//     interpolation: {
//       escapeValue: false,
//     },
//   });
i18next.use(backend).init({
  lng: "de", // язык по умолчанию
  fallbackLng: "de", // язык по умолчанию, если перевод не найден
  debug: true, // выводить отладочные сообщения
  backend: {
    loadPath: "locales/{{lng}}/{{ns}}.json", // путь к файлам с переводами
    addPath: "locales/{{lng}}/{{ns}}.missing.json", // путь для сохранения отсутствующих переводов
  },
});
module.exports = i18next;
