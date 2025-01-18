const express = require("express");
const app=express();
const mongoose= require("mongoose");
const bodyparser = require('body-parser')
const cors= require("cors");
const userRouter= require("./routes/userRoute");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

mongoose.connect("mongodb+srv://adityajainghetal:<kyn3m1kgXutowhoz>@cluster0.idrso.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
  console.log("DB connected!!!");
})

app.use("/books", userRouter);

app.listen(8000, ()=>{
    console.log("server run on 8000 Port!");
})