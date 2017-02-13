var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// socket.io
io.on('connection', function(socket){
  socket.emit('server message', {
    ch:'',
    sender:'Server',
    text:'Connection secured - use /nick to declare username' });

  socket.on('client message', function(msg) {
    io.emit('server message', msg);
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
