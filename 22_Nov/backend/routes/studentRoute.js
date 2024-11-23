const express= require("express");
const route= express.Router();
const stuController= require("../controllers/studentController");


route.post("/datasave", stuController.dataSave);
route.get("/datadisplay", stuController.dataDisplay);
route.post("/datadisplay", stuController.dataSearch)

module.exports=route;