var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var availableChs = ['Cards', 'Macs', 'Kittens', 'Booze'];

// socket.io
io.on('connection', function(socket){
  socket.emit('server message', {
    ch:'',
    sender:'Server',
    text:'Connection secured - use /nick to declare username' });

  //share the messages to everyone
  socket.on('client message', function(msg) {
    io.in(msg.ch).emit('server message', msg);
  });

  //join the user to a channels
  socket.on('join', function(msg) {
    availableChs.indexOf(msg.ch) !== -1 ?
      socket.join(msg.ch) :
      console.log("channel not available: " + msg.ch);
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
