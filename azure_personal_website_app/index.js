const http = require('http');
const port = process.env.PORT || 3000;
const url = require('url');
const fs = require('fs');


http.createServer(function (request, response) {
    onRequest(request, response);
}).listen(port);

console.log(`Server running at http://localhost:${port}`);

function createFileResponse(err, data, response) {
    if (err) {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        return response.end("404 Not Found");
    } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        return response.end();
    }
}

function onRequest(request, response) {
    fs.readFile('./index.html', function(err, data) {
        createFileResponse(err, data, response);
    });
}
