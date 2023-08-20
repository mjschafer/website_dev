var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // status code 200 means that all is OK
    res.write('Hello World! Response'); //write a response to the client
    res.end(); //end the response
}).listen(8080);

var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8081);

var http = require('http');
