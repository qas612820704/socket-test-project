var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('./node_modules'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
})

io.on('connection', function(socket) {
  setInterval(function() {
    socket.emit('data', new Date());
    // show_recordToken(function(err, result) {
    //   socket.emit('data', result);
    // })
  }, 1000);
})


http.listen(3000, console.log('App start at 3000!'));