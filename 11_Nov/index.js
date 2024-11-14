const fs= require("fs");

fs.open("raj.txt","w",(err)=>{
    if(err) throw err;
    console.log("File succesfull created");
})