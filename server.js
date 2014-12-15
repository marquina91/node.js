var net = require('net');
console.log('Servidor Iniciado.');
 
 
net.createServer(function (socket) {
        console.log("New connection");
 
        socket.on('data', function (data) {
                console.log(data.toString("utf-8"));   
                socket.write("97");
        });
 
}).listen(8888, '192.168.1.104');