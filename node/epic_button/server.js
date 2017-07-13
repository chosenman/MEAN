var express = require('express')
var path = require('path')

var app = express();

app.use(express.static(path.join(__dirname + "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var counter = 0;

app.get('/',function(req, res){
  res.render('index')
})



var server = app.listen(8000, function(){
  console.log("listening on port 8000");
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  console.log('We are using sockets')
  console.log(socket.id)



    socket.on("page_refresh", function(data) {
      io.emit("update_counter", {counter: counter})
    })

  socket.on("counter_pushed", function(data) {
    counter = counter + 1
    // counter = parseInt(data.counter) + 1
    io.sockets.emit("update_counter", {counter: counter})
    // socket.broadcast.emit("update_counter", {counter: counter})
    // io.emit("update_counter", {counter: counter})
  })

  socket.on("reset_counter", function(data) {
    counter = 0;
    io.emit("update_counter", {counter: counter})
  })



})
