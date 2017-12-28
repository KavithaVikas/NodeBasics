let http = require("http");
let fs = require("fs");
let path = require("path");


function onRequest(request, response) {
    response.writeHead("200", { "content-Type": "text/palin" });
    fs.readFile(path.resolve(__dirname, "index.html"), function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write("File not found!!")
       }
        else {
            response.writeHead(200);
            response.write(data);
        }
        response.end();
    });

}

http.createServer(onRequest).listen(8000);