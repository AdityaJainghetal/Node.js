// const http= require("http");
// const fs= require("fs");
// http.createServer((req, res)=>{
//     fs.readFile("aditya.txt" ,(err, data)=>{
//         res.write(data);
//         res.end();
//     })
// }).listen(8000)



const fs= require("fs");                        //file system module

    fs.appendFile("adi.pdf","hello we are cybrom student" ,(err)=>{
        if(err) throw err;
            console.log("File succesfully created");        
    })
