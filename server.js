var express = require('express');
var app = express.createServer();
 
app.get('/', function(req, res){
  res.send('Hola mundo');
});
 
app.listen(1333);

console.log('Server listen to the port 1333');