const express = require("express");
const app= express();
const stuRoute= require("./routes/studentRoute")
const stuteach =require ("./routes/teacherRoute")

app.use("/students", stuRoute);
app.use("/teacher",stuteach)

app.listen(9000,()=>{
    console.log("service run on 9000")
})