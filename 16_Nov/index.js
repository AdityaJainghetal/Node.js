const express = require("express");
const app= express();
const mongoose = require("mongoose")
const stuRoutes = require("./routes/stuRoute")



app.use("/students", stuRoutes);
mongoose.connect("mongodb://127.0.0.1:27017/Aditya").then(()=>{
    console.log("Data base Connected! ")
})

app.listen(8000,()=>{
    console.log("service run on 8000")
})