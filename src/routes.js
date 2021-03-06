const express = require("express");
const router = express.Router();

const indexController = require("./controller/indexController");
const usersController = require("./controller/usersController");
const registerController = require("./controller/registerController");

router.get("/", indexController.render);
router.get("/users", usersController.render);
router.get("/register", registerController.render);
router.post("/register", registerController.register);

module.exports = router;
