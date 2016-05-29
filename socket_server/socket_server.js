var app = require('http').createServer();
var io = require('socket.io')(app);

app.listen(8017);

io.on('connection', function (socket) {
	
  socket.emit('news', { hello: 'world' });
  
  socket.on('my other event', function (data) {
    console.log(data);
  });
  
  socket.on('say hello', function (data) {
    console.log(data);
	socket.emit('respond', { hello: 'client' });
  });
  
  //refresh client time pre second
  setInterval(function(){
	  socket.emit('server time', { time: new Date().toJSON() });
  },1000);
});

