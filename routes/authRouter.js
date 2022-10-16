const express = require("express");
const router = express.Router();
const { signup, signin, googleAuth } = require("../modules/authModule");

//CREATE A USER
router.post("/signup", signup);

//SIGN IN
router.post("/signin", signin);

//GOOGLE AUTH
router.post("/google", googleAuth);

module.exports = router;
