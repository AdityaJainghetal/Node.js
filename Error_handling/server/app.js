const express = require("express");
const app=express();
const mongoose= require("mongoose");
const bodyparser = require('body-parser')
const cors= require("cors");
const userRouter= require("./routes/userRoute");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

mongoose.connect("mongodb://127.0.0.1:27017/jwtAditya").then(()=>{
  console.log("DB connected!!!");
})

app.use("/",(req,res,next)=>{
    throw new Error ("Something went wrong");
    next();
})

app.use((err,req,res,next)=>{
  res.status(500).json({error: err.message})
})


app.use("/user", userRouter);

app.listen(8000, ()=>{
    console.log("server run on 8000 Port!");
})