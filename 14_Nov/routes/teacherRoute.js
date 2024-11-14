const express = require("express")
const route = express.Router();


route.get("/teacherinfo",(req, res)=>{
    res.send("This is teacher info page")
})

route.post("/teachersave",(req, res)=>{
    res.send("data save")
})

route.get("/teacher",(req, res)=>{
    res.send("Your salary")
})



module.exports=route;