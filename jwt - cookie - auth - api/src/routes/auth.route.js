const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

// post api route for to register user

router.post("/register", authController.registerUser);

module.exports = router;
