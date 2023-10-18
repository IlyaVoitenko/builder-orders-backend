const i18next = require("i18next");
const backend = require("i18next-node-fs-backend");

i18next.use(backend).init({
  lng: "de", // язык по умолчанию
  fallbackLng: "de", // язык по умолчанию, если перевод не найден
  debug: false, // выводить отладочные сообщения
  backend: {
    loadPath: "locales/{{lng}}/{{ns}}.json", // путь к файлам с переводами
    addPath: "locales/{{lng}}/{{ns}}.missing.json", // путь для сохранения отсутствующих переводов
  },
});
module.exports = i18next;
