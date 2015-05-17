var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World on the web from Chu! \n')
    res.end('this is a test from node.js using VS2013');
}).listen(port);