var express = require('express')
var session = require('express-session');

var app = express();
app.use(session({secret: 'S5od42iHngd3jor2JOck8s'}));
app.set('view engine', 'ejs')


app.get("/", function(request, response){
    if(!request.session.counter) {
      request.session.counter = 1
    } else {
      request.session.counter++
    }
    response.render("index", {counter: request.session.counter});
})

app.post("/plustwo", function(request, response){
  request.session.counter+=1
  response.redirect('/')
  })

app.post("/reset", function(request, response){
  request.session.counter=0
  response.redirect('/')
  })

// listen
app.listen(8000, function(){
  console.log('listening on 8000: ')
})
