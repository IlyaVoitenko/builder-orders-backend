const path = require("path");

const i18next = require("i18next");
const Backend = require("i18next-node-fs-backend");
const i18nextMiddleware = require("i18next-express-middleware");

i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: path.join(__dirname, "public"),
    },
    debug: false,
    detection: {
      order: ["querystring", "cookie"],
      caches: ["cookie"],
    },
    saveMissing: true,
    fallbackLng: "de",
    preload: ["de", "en"],
  });

module.exports = i18next;
