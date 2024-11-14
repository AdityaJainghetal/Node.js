const express = require("express")
const route = express.Router();


route.get("/stuinfo",(req, res)=>{
    res.send("This is student info page")
})

route.post("/studatasave",(req, res)=>{
    res.send("data save")
})

route.get("/name",(req, res)=>{
    res.send("Your name")
})



module.exports=route;