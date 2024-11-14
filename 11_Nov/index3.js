const fs= require("fs");

fs.unlink("raj.txt_4",(err)=>{                     //delted file
    if(err) throw err;
    console.log("File succesfull created");
})                                               