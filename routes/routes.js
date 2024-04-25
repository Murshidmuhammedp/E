const express = require("express");
const { getUser, putUsers } = require("../controllers/user");
const route = express.Router();

route.get("/allusers", getUser)
route.post("/createusers", putUsers)

module.exports=route;