const app = require("./app");

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`server started on port :${PORT}`);
});
