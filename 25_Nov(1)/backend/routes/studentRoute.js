const express= require("express");
const route= express.Router();
const stuController= require("../controllers/studentController");

route.post("/datasave", stuController.dataSave);
route.get("/datadisplay", stuController.dataDisplay);
route.post("/datasearch", stuController.dataSearch);
route.get("/deletedisplay", stuController.deleteDataDisplay);
route.post("/recorddelete", stuController.recordDelete);
route.get("/editdisplay", stuController.editDisplay);
route.post("/editsave", stuController.editDataSave);


module.exports=route;