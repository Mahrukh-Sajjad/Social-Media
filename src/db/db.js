const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("connected to db");
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = connectDB;
