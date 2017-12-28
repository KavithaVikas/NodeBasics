let url =  require("url");
let fs = require("fs");
let path = require("path")

function renderHtml(filPath, response){
    console.log("File Path");
    console.log(filPath);
         fs.readFile(filPath, function(error, data){
             if(error){
                 response.writeHead("404");
                 response.write("File Not Found");

             }
             else{
                 response.writeHead("200");
                 response.write(data);

             }
             response.end();
         })
}

module.exports ={
    handleRequest : function(request, response){
        response.writeHead("200",{"Content-Type":"text/html"});

        let reqUrl = url.parse(request.url).pathname;
        console.log("url from request");
        console.log(reqUrl);
        switch (reqUrl){
            case "/":
            renderHtml(path.resolve(__dirname,"index.html"), response);
            break;
            case "/login":
            renderHtml(path.resolve(__dirname,"login.html"),response);
            break;
            default:
            response.writeHead("404");
            response.write("Route not found");
            response.end();

            
        }

    }
}