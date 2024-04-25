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

const getUserid = async (req, res) => {
    try {
        const id = req.params.id
        const useriddata = await data.find(data => data.id == id)
        if (!useriddata) {
            res.status(404).json({ message: "user not found" })
        }
        res.status(200).json(useriddata);
    } catch (error) {
        console.log(error);
    }
}

// EDIT USER DETAILS

const updateuser = async (req, res) => {
    try {
        const userid = req.params.id;
        const userdata = await data.find(data => data.id == userid);
        if (!userdata) {
            res.status(200).json({ message: "user not found" });
        }
        const { username, password, age, email } = req.body;

        if (username)
            userdata.username = username
        if (email)
            userdata.email = email
        if (age)
            userdata.age = age
        if (password)
            userdata.password = password
        res.status(201).json({ message: "update successfully" })

    } catch (error) {
        console.log(error);
    }
}

const deleteuser = async (req, res) => {
    try {
        const userid = req.params.id;
        const userdata = data.findIndex(user => user.id == userid);
        // console.log(userdata);
        if (userdata === -1) {
            return res.status(404).json({ message: "No user found" });
        }
        data.splice(userdata, 1);
        res.status(200).json({ message: "user delete successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error deleting user" })

    }
}



module.exports = { getUser, putUsers, getUserid, updateuser, deleteuser }; // Export as an object
