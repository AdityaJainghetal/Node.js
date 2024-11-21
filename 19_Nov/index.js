const express = require("express");
const app= express();
const mongoose = require("mongoose")
const stuRoutes = require("./routes/stuRoute")
const bodyparser = require('body-parser')






mongoose.connect("mongodb://127.0.0.1:27017/student").then(()=>{

    console.log("DB connected")
})

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/students",stuRoutes)

app.listen(8000,()=>{
    console.log("Server run on 8000")
})