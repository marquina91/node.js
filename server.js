var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('servidor creado\n');
}).listen(8080);

console.log('Server listen to the port 8080');