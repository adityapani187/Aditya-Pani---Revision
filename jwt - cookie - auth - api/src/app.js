const express = require("express");
const app = express();
const authRoute = require("./routes/auth.route");
const cookieParser = require("cookie-parser");
const postRouter = require("./routes/post.route");

// middleware
app.use(express.json());
app.use(cookieParser());

//api path

app.use("/api/auth", authRoute);
app.use("/api/auth", postRouter);

module.exports = app;
