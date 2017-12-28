let fs = require("fs");
let url = require("url");
let path = require("path");

function renderHtml(fpath, response){
    response.writeHead("200", {"Content-Type":"text/html"});
    fs.readFile(fpath,function(error, data){
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

function handleRequest(request, response){
    let fileUrl = url.parse(request.url).pathname;
    
    switch (fileUrl){
        case "/":
        renderHtml(path.resolve(__dirname,"index.html"), response);
        break;
        case "/login":
        renderHtml(path.resolve(__dirname, "login.html"),response);
        break;
        default:
        response.writeHead("404");
        response.write("Route Not Found!!!");
        response.end()
    }
}

module.exports = {
    handleRequest: handleRequest
}