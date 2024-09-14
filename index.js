const app = require("./app");
const PORT = process.env.PORT || 4000;
app.listen(PORT, (e) => {
  if (e) {
    console.log(e);
  } else {
    console.log("App runnig at " + PORT);
  }
});
