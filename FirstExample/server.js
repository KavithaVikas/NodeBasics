let http = require("http");

function onRequest(request, response){
    response.writeHead("200",{"content-Type":"text/palin"});
    response.write("Hello World!");
    response.end();
}

http.createServer(onRequest).listen(8000);