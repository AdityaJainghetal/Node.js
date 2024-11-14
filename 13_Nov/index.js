const express = require("express");
const App= express();

App.get("./",(req, res)=>{
    res.send("This is nresponse")
})


App.post("/",(req, res)=>{
    res.send("This is poste");
})

App.get("/save",(req, res)=>{
    res.send("This is save");
})

App.post("/post",(req, res)=>{
    res.send("This is poste");
})

App.listen(8000,()=>{
    console.log("server run on 8000 post")
})



