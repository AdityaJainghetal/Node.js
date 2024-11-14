const http= require("http");
    http.createServer((req, res)=>{
        res.write("<h1> welcome to Cybrom</h1>");
        res.end("<h2>server end </h2>");



    }).listen(8000)
2