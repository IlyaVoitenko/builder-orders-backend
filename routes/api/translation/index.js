const express = require("express");
const { getTranslation } = require("../../../controllers/translations");

const router = express.Router();

// router.get("/:lang", getDataTranslation);

router.get("/locales/:locale", getTranslation);
router.get("/", (req, res) => {
  res.send("hello");
});

module.exports = router;
