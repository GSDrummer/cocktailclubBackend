const { Router } = require("express");
const { addUser, loginUser, updateUser } = require("./user.controllers");
const { hashPassword } = require("../middleware");
const userRouter = Router();

userRouter.post("/users/signup", hashPassword, addUser);
userRouter.post("/users/login", loginUser);
userRouter.patch("/users", hashPassword, updateUser);

module.exports = {
  userRouter,
};
