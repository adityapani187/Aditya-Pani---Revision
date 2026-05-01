const userModel = require("../model/model");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const isUserExist = await userModel.findOne({ email });

  if (isUserExist) {
    return res.json({
      message: "user exist",
    });
  }
  const user = await userModel.create({
    username,
    email,
    password,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("token", token);
  return res.json({
    message: "successfully created",
    user,
  });
};

module.exports = { registerUser };
