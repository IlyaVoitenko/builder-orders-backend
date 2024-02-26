const { ctrlWrappen } = require("../decorators");
// const i18next = require("../i18next");
const path = require("path");
const fs = require("fs");

// const getDataTranslation = async (req, res) => {
//   console.log("ff");
//   const lang = req.params.lang || "de";
//   await i18next.changeLanguage(lang, (err, t) => {
//     if (err)
//       return res.status(500).json({ error: "Failed to change language" });

//     const translations = t("header.info.HowToOrder");
//     res.json(translations);
//   });
// };
const getTranslation = (req, res) => {
  const { locale } = req.params;
  const filePath = path.join(
    __dirname,
    "..",
    "public",
    "locales",
    `${locale}.json`
  );
  console.log(filePath);
  if (fs.existsSync(filePath)) res.sendFile(filePath);
  else res.status(404).send("File not found");
};
module.exports = {
  // getDataTranslation: ctrlWrappen(getDataTranslation),
  getTranslation: ctrlWrappen(getTranslation),
};
