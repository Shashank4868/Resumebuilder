const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
