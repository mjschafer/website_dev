var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('demo_file1.html', function (err, data) { // inflates demo_file1.html 
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);


// Creates new text file and writes "Saved!" to the file 
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// Creates new text file and writes "Saved!" to the file 
fs.appendFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('New file text!');
});

// Replaces the content of the file "mynewfile3.txt"
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});

// Creates new text file and writes "Saved!" to the file 
fs.appendFile('mynewfile2.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Old file!');
});

// Delete "mynewfile2.txt"
fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});


// Rename a file
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});