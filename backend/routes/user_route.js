const { userRegistration, userLogin } = require("../controllers/user_controller");
const express = require("express");

const userRouter = express.Router();

userRouter.post("/register", userRegistration);
userRouter.post("/login", userLogin);


module.exports = { userRouter };