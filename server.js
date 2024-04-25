const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const userroute = require("./routes/routes")
// const bodypareser = require("body-parser");
// const bodyParser = require("body-parser");

const PORT = process.env.PORT || 2000;
app.use(express.json())
// app.use(bodyParser.json(),bodyParser.urlencoded({extended:true}))

// middleware
app.use("/api/users", userroute);

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});