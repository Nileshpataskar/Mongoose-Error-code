const express = require("express");
const connection = require("./dbmongoose");
const route = require("./route");
const app = express();

app.use(express.json());

app.use("/api",route)


app.listen(5008,async () => {
  try {
    await connection();
    console.log("server started");
  } catch (err) {
    console.log(err, "error occured while starting");
  }
});
