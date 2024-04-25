// Assuming this file is /controllers/user.js

const data = require("../data/data.json");

const getUser = async (req, res) => {
    try {
        const userdata = await data;  // Note: if data is not an async operation, remove `await`
        if (!userdata) {
            return res.status(404).json({ message: "user not found" });
        }
        res.status(200).json(userdata);  // Ensure to send `userdata` instead of `data`
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
    }
}

const putUsers = async (req, res) => {
    try {
        const { username, email, password, age } = req.body;
        if (!username || !email || !age || !password) {
            res.status(401).json({ message: "bad request" });
        }
        const userdata = await data;
        if (!userdata) {
            return res.status(404).json({ message: "user not found" });
        }

        const newdata = {
            id: Math.round(Math.random() * 10),
            username,
            password,
            email,
            age
        }

        userdata.push(newdata)
        res.status(201).json({ message: "user created" })

    } catch (error) {
        console.log(error);
    }
}

// GET USER BY ID






module.exports = { getUser, putUsers }; // Export as an object
