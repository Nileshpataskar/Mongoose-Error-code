const { userdetails, manyUserDetails } = require("./userData");

const route = require("express").Router();

route.post("/addmany", manyUserDetails);

route.post("/add", userdetails);

module.exports = route;
