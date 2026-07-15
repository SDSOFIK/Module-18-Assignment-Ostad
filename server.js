const express = require("express");
require("dotenv").config();
const connectDB = require("./src/config/db");

const app = express();
const PORT = process.env.PORT;


connectDB();
app.get("/",(req, res) =>{
res.json({
    "success": true,
    "message": "Server is rauning "
})
})








app.listen(PORT, ()=>{
    console.log(`Server is Running http://localhost${PORT}`)
})