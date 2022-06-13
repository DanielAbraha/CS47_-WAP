/**
 * 
 * AdderWebServer.js
 */
let http = require("http");
let url = require("url");
let fs = require("fs");
let addmod = require("./addmod.js");
http.createServer(function(req,res){
    let q = url.parse(req.url,true);
    let filename = "."+ q.pathname;
    if(q.pathname=="/add.js")
    addmod.add(req,res,q.query)
    else
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{"Content-Type" :"text/html"});
            return res.end("404 Not Found");
        }
        res.writeHead(200);
        res.write(data);
        return res.end();
    });

}).listen(8080);
