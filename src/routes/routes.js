const express = require("express");
const router = express.Router();

const indexController = require("../controller/indexController");
const searchController = require("../controller/searchController");
const registerController = require("../controller/registerController");
const loginController = require("../controller/loginController");
const profileController = require("../controller/profileController");

const registerValidation = require("../validations/registerValidations");
const checkAuthentication = require("../middlewares/checkAuthentication");

router.get("/", indexController.render);
router.get("/search", checkAuthentication, searchController.render);
router.get("/register", registerController.render);
router.post("/register", registerValidation.register, registerController.register);
router.get("/login", loginController.render);
router.post("/login", loginController.login);
router.get("/profile", checkAuthentication, profileController.render);

module.exports = router;
