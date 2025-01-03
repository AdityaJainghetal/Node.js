const express = require("express");
const app=express();
const mongoose= require("mongoose");
const bodyparser = require('body-parser')
const cors= require("cors");
const userRouter= require("./routes/userRoute");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

mongoose.connect("mongodb://127.0.0.1:27017/tanubooksmany").then(()=>{
  console.log("DB connected!!!");
})

app.use("/books", userRouter);

app.listen(8000, ()=>{
    console.log("server run on 8000 Port!");
})