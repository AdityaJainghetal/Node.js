const express = require("express");
const app = express();


app.get("/",(req ,res)=>{
    res.send("<h1> progream of express framework</h1>");
})

app.listen(8000, ()=>{
    console.log("Server run on 8000")
})