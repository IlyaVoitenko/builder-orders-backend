const { ctrlWrappen } = require("../decorators");
const path = require("path");
const fs = require("fs");

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
  getTranslation: ctrlWrappen(getTranslation),
};
