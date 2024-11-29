const express= require("express");
const app=express();
const bodyparser = require('body-parser')

const cors= require("cors");

const mongoose= require("mongoose");
const stuRoute= require("./routes/studentRoute");
require("dotenv").config();

const Port = process.env.PORT || 8080

mongoose.connect(process.env.DBCONNECTION).then(()=>{
    console.log("DB connected!!!")
})

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());


//Middleware function

app.use((req,res, next)=>{
    console.log("Hello this a Aditya the Middleware function")
    next()
})



app.use("/students", stuRoute);

app.listen(Port, ()=>{
    console.log(`server run on ${Port}`)
})

// (Backend)
//npm i nodemon
// npm i express
//npm i mongoose
//npm i body-parser
//npm i cors


//(Frontend)
//npm create vite@latest
//npm i react-router-dom
//npm i axios
//npm i react-bootstrap bootstrap
