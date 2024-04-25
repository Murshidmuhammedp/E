const express = require("express");
const { getUser, putUsers, getUserid, updateuser, deleteuser } = require("../controllers/user");
const route = express.Router();

route.get("/allusers", getUser);
route.post("/createusers", putUsers);
route.get("/getuserid/:id", getUserid);
route.put("/updateuser/:id", updateuser);
route.delete("/deleteuser/:id", deleteuser);

module.exports = route;