const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const userroute = require("./routes/routes")

const PORT = process.env.PORT || 2000;
app.use(express.json())

// middleware
app.use("/api/users", userroute);

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});