const mongoose = require("mongoose");

const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async () => {
  mongoose.connect(process.env.MONGODB_URI);
};

module.exports = connectDB;
