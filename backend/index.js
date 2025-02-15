const app = require("./app");

require("dotenv").config();
const appPort = process.env.PORT || 5000;

app.listen(appPort, () => {
  console.log(`app running on port ${appPort}`);
});
