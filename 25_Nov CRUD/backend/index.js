const express= require("express");
const app=express();
const bodyparser = require('body-parser')

const cors= require("cors");

const mongoose= require("mongoose");
const stuRoute= require("./routes/studentRoute");

mongoose.connect("mongodb://127.0.0.1:27017/Adityadb").then(()=>{
    console.log("DB connected!!!")
})

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());


app.use("/students", stuRoute);

app.listen(8080, ()=>{
    console.log("server run on 8080")
})

// (Backend)
//npm i nodemon
// npm i express
//npm i mongoose
//npm i body-parser
//npm i cors
//npm i init

//(Frontend)
//npm create vite@latest
//npm i react-router-dom
//npm i axios
//npm i react-bootstrap bootstrap
