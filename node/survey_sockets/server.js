var express = require('express')
var path  =  require( "path");

var app = express();

app. use(express.static(path. join(__dirname  +  "./static")));

app.set( 'views', path. join(__dirname,  './views'));
app.set('view engine', 'ejs')
// END CONFIG


    app.get( '/', function(req, res) {
     res.render( "index");
    })



// listen
var server  = app.listen(8000, function() {
 console. log( "listening on port 8000");
});

var io  =  require('socket.io').listen(server);

// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets. on( 'connection', function (socket) {
      console. log( "WE ARE USING SOCKETS!");
      console. log(socket.id);

      //all the socket code goes in here!
      socket. on( "posting_form", function (data){
          console. log( 'Someone clicked a button!  Reason: '  + data.reason);

          // making lucky number
          var luckyNum = Math.floor(Math.random()*1000)

          socket. emit( 'updated_message', {
            name:  data.name,
            loc:  data.loc,
            lang:  data.lang,
            comment:  data.comment,
            luckyNum:  luckyNum,
          });
      })
      //  EMIT:
      socket. emit( 'my_emit_event');
      //  BROADCAST:
      socket.broadcast. emit( "my_broadcast_event");
      //  FULL BROADCAST:
      io. emit( "my_full_broadcast_event");

})
