var express = require('express')
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
app.use(session({secret: 'S5od42iHngd3jor2JOck8s'}));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')


app.get("/", function(request, response){
    response.render("index", {counter: request.session.counter});
})


app.post("/result", function(request, response){
  console.log("POST DATA \n\n", request.body)
  response.render("result", {form: request.body});
})

// listen
app.listen(8000, function(){
  console.log('listening on 8000: ')
})
