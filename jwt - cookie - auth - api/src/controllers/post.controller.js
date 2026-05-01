const userModel = require("../model/model");
const jwt = require("jsonwebtoken");

const createPost = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    res.json({
      message: " token is invalid ",
    });
  }
  res.json({
    message: "sucessfuly created post",
  });
};

module.exports = createPost;
