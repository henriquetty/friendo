require("dotenv").config();

const path = require("path");
const express = require("express");
const routes = require("./routes/routes");
const profileRoutes = require("./routes/profileRoutes");

const session = require("express-session");
const flash = require("express-flash-messages");

const app = express();

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(
    session({
        name: "friendo",
        resave: false,
        saveUninitialized: false,
        secret: process.env.SECRET,
        cookie: {
            maxAge: 60000 * 3,
        },
    })
);

app.use(flash());

app.use("/", routes);
app.use("/api", profileRoutes);

app.listen(process.env.PORT || 3333, () => {
    console.log(`Listening on ${process.env.PORT || 3333}`);
});
