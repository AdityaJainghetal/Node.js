const fs  = require("fs");
fs.rename("raj5.txt" , "Aditya.pdf",(err)=>{
    if(err) throw err;
    console.log("File name change");          //file name change
})