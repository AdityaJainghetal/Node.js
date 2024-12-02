const express= require("express");
const app=express();
const bodyparser = require('body-parser')

const cors= require("cors");


const mongoose= require("mongoose");
const UserRoute = require("./routes/userRoute")

require("dotenv").config();

const Port = process.env.PORT || 8000

mongoose.connect(process.env.DBCONNECTION).then(()=>{
    console.log("DB connected!!!")
})

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());





app.use("/users", UserRoute )


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
