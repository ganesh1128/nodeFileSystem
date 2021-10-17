var http = require("http")
const fs = require("fs");
// const { Http2ServerRequest } = require("http2");
http.createServer((req,res)=>{
    let date = new Date();
    fs.writeFileSync("currentDateTime.txt",`${date}`)
    const data = fs.readFileSync("currentDateTime.txt")
    res.write(data);
    res.end();
}).listen(3000)
console.log("listening to port 3000");
