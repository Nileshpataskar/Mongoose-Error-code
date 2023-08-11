const mongoose = require("mongoose");

const user = mongoose.Schema({
  fname: { 
    type: String, 
    required: true },
  lname: { 
    type: String, 
    required: true },
  phone: { 
    type: Number, 
    required: true },
  age: { 
    type: Number, 
    required: true },
});
const collection = mongoose.model("Student", user);

module.exports = collection;
