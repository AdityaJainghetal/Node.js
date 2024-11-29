const express =require("express");
const app = express();
const uploadMiddleware =(req, res,next)=>{
    console.log("firstmiddle ware");
    next()
}

module.exports = uploadMiddleware