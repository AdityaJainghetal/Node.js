const http = require("http");
const uc = require("uppercase");


http.createServer((req,res)=>{
    res.write("<h1> welcome to cybrom </h1>");
    res.write(uc(" We are MERN stack developer   "));

    res.end()
}).listen(9000)