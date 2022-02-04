const express = require("express");
const router = express.Router();

const indexController = require("../controller/indexController");
const loginController = require("../controller/loginController");
const registerController = require("../controller/registerController");
const profileController = require("../controller/profileController");

//index
router.get("/", indexController.render);

//login
router.get("/login", loginController.render);
router.post("/login", loginController.login);

//register
router.get("/register", registerController.render);
router.post("/register", registerController.register);

//profile
router.get("/profile", profileController.render);

module.exports = router;
