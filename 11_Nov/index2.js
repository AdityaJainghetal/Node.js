const fs= require("fs");

fs.writeFile("raj2.txt","Welcome to Bhopal",(err)=>{
    if(err) throw err;
    console.log("File created")
})