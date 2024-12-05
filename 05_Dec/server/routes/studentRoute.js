import express from "express";
const route= express.Router();
import stuHome from "../controllers/studentController.js";
import { stuAbout } from "../controllers/studentController.js";
import { stuContact } from "../controllers/studentController.js";
import { stuService } from "../controllers/studentController.js";

route.get("/home", stuHome);
route.get("/about", stuAbout);
route.get("/contact", stuContact);
route.get("/service", stuService);


export default route;