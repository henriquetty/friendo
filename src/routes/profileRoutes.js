const express = require("express");
const router = express.Router();

const updateProfile = require("../controller/api/updateProfile");

const checkAuthentication = require("../middlewares/checkAuthentication");

router.post("/updateProfile", checkAuthentication, updateProfile.update);

module.exports = router;
