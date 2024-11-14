const http = require("http");
const MyClg= require("./cybrom")

http.createServer((req ,res)=>{
    res.write("<h1>Welcome</h1>");
    res.write(MyClg.Mycollege());
    res.write(MyClg.myFees());
    res.end("<h2>...server end....</h2>");
}).listen(9000);