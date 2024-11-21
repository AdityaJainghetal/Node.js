const express = require("express");
const route= express.Router();
const stuController = require("../controllers/studentController");


route.post("/datasave", stuController.dataSave);

// route.post("/datadisplay", stuController.dataDisplay);



module.exports=route;