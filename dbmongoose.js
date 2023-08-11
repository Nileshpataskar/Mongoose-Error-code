const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
const url = "mongodb://localhost:27017";

const connection = async () => {
  try {
    const client = await mongoose.connect(url)
      console.log("connection set with mongoose");
      return client;
    
  } catch (err) {
    console.log(err, "Error while connection");
  }
};

module.exports = connection;
