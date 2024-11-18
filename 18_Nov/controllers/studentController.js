const stuModel =require("../model/studentModel");
const dataSave = async(req,res)=>{
    const{rollno, name, city, fees}= req.body;
    const Data= await stuModel.create({
        rollno:rollno,
    name:name,
    city:city,
    fees:fees
    })

    res.send("Data is save in mongoos");
}

module.exports={
    dataSave
}