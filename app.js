const i18next = require("./i18next");
const cors = require("cors");
const express = require("express");
const logger = require("morgan");
require("dotenv").config();
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const translationRoute = require("./routes/api/translation");

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/translation", translationRoute);

i18next.init((err) => {
  if (err) return console.error(err);
});

app.use((req, res) => {
  res.status(404).json({ message: "not found" });
});
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
