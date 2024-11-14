// const http=require("http");

// http.createServer((req, res)=>{
//     res.write("<h1>we are Mern developer </h1>")
//     res.end();

// }).listen(8000)


const http=require("http");

http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write("<h1>hello friend </h1>");
    res.end("<h2> this is <br> server ending </h2>");

}).listen(8000)




