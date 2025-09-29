const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function registerController(req, res) {
  const { username, password } = req.body;
  const existing = await userModel.findOne({
    username,
  });

  if (existing) {
    return res.status(409).json({
      message: "user already exists",
    });
  }
  const user = await userModel.create({
    username,
    password: await bcrypt.hash(password, 10),
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("token", token);

  return res.status(201).json({
    message: "user successfully created",
  });
}

async function loginController(req, res) {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username,
  });

  if (!user) {
    return res.status(400).json({
      message: "user not found",
    });
  }

  const isvalid = await bcrypt.compare(password, user.password);
  if (!isvalid) {
    res.status(400).json({
      message: "invalid password",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

  res.status(201).json({
    message: "user logged in successfully",
    user,
  });
}

module.exports = {
  registerController,
  loginController,
};
