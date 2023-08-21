var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var query = url.parse(req.url, true);
    var filename = "." + query.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);

// http://localhost:8080/summer.html will show website with title "Summer" and "I love the sun!"
// http://localhost:8080/winter.html will show website with title "Winter" and "I love the snow!"
// http://localhost:8080/spring.html will show a "404 Not Found" error