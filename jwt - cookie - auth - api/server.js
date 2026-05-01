require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");
const router = require("./src/routes/auth.route");

connectDB();
app.listen(3000, () => {
  console.log("your server is running on port 3000");
});
