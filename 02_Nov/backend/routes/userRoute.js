const express = require ("express");
const route= express.Router();
const userController = require("../controllers/usercontroller")



route.post("/registration", userController.userSave)



module.exports =route