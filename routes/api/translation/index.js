const express = require("express");
const { getDataTranslation } = require("../../../controllers/translations");

const router = express.Router();

router.get("/:lang", getDataTranslation);

module.exports = router;
