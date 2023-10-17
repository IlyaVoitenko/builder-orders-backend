const i18next = require("./i18next");

console.log("work");

i18next.init((err) => {
  if (err) return console.error(err);
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});
