const stuModel = require("../models/studentModel");
const dataSave=async(req, res)=>{
   const {rollno,name,city,images}=req.body;
    
   const Data= await stuModel.create({
    rollno:rollno,
    name:name,
    city:city,
    images:images
   })
    res.send(Data)
}


const  dataDisplay=async(req,res)=>{
    const Data = await stuModel.find();
    res.send(Data)
}
module.exports={
    dataSave,
    dataDisplay
  
}