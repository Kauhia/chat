var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// socket.io
io.on('connection', function(socket){
  socket.emit('message', { message:'hey there' });

  socket.on('client message', function(msg) {
    socket.emit('message', { message:'how are you?' });
  })
});

// express
app.use(express.static(__dirname));
app.get('/', function(req, res){
  res.sendFile('index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
