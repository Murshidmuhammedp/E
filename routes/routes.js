const express = require("express");
const { getUser, putUsers, getUserid } = require("../controllers/user");
const route = express.Router();

route.get("/allusers", getUser)
route.post("/createusers", putUsers)
route.get("/getuserid/:id", getUserid)

module.exports=route;