const express = require("express");
const { getUser, putUsers, getUserid, updateuser } = require("../controllers/user");
const route = express.Router();

route.get("/allusers", getUser)
route.post("/createusers", putUsers)
route.get("/getuserid/:id", getUserid)
route.put("/updateuser/:id", updateuser)

module.exports=route;