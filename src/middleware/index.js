const bcrypt = require("bcryptjs");
const { User } = require("../models/user.model");
require("dotenv").config();

exports.hashPassword = async (req, res, next) => {
  if ("password" in req.body) {
    req.body.password = await bcrypt.hash(req.body.password, 8);
  }
  next();
};
