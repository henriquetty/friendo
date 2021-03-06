const path = require("path");
const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use("/", routes);

app.listen(3333, () => {
  console.log("Listening on 3333");
});
