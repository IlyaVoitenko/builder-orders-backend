const { ctrlWrappen } = require("../decorators");
const i18next = require("../i18next");

const getDataTranslation = async (req, res) => {
  const lang = req.params.lang || "de";
  await i18next.changeLanguage(lang, (err, t) => {
    if (err)
      return res.status(500).json({ error: "Failed to change language" });

    const translations = t("header.info.HowToOrder");
    res.json(translations);
  });
};

module.exports = {
  getDataTranslation: ctrlWrappen(getDataTranslation),
};
