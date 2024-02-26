const path = require("path");
const i18next = require("i18next");
const Backend = require("i18next-node-fs-backend");

i18next.use(Backend).init(
  {
    backend: {
      loadPath: path.join(__dirname, "..", "public/locales", "{{lng}}.json"),
    },
    debug: false,
    detection: {
      order: ["querystring", "cookie"],
      caches: ["cookie"],
    },
    saveMissing: true,
    fallbackLng: "de",
    preload: ["de", "en"],
  },
  (err) => {
    if (err) {
      console.error("error init i18next:", err);
    }
  }
);

module.exports = i18next;
