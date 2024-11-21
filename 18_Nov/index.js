const express = require("express");
const app= express();
const mongoose = require("mongoose")
const stuRoutes = require("./routes/stuRoute")
const bodyparser = require('body-parser')


mongoose.connect("mongodb://127.0.0.1:27017/students")
// mongoose.connect("mongodb://localhost/students")

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/students",stuRoutes)

app.listen(8000,()=>{
    console.log("Server run on 8000")
})