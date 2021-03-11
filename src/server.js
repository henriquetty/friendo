require("dotenv").config();

const path = require("path");
const express = require("express");
const routes = require("./routes");
const session = require("express-session");

const app = express();

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(
  session({
    name: "friendo",
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 28800000,
    },
  })
);

app.use("/", routes);

app.listen(process.env.PORT || 3333, () => {
  console.log(`Listening on ${process.env.PORT || 3333}`);
});
