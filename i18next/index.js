const i18next = require("i18next");
const Backend = require("i18next-node-fs-backend");
const i18nextMiddleware = require("i18next-express-middleware");

i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    preload: ["de", "en"],
    fallbackLng: "de",
  });

module.exports = i18next;
