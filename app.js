const i18nextMiddleware = require("i18next-express-middleware");
const path = require("path");
const i18next = require("./i18next");
const cors = require("cors");
const express = require("express");
const logger = require("morgan");

require("dotenv").config();

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(i18nextMiddleware.handle(i18next));

app.use(express.static(path.join(__dirname, "public")));

app.use((_, res) => {
  res.status(404).json({ message: "not found" });
});

app.use((err, req, res, next) => {
  console.log("err: ", err);
  res.status(500).json({ message: err.message });
});

module.exports = app;
