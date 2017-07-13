var express = require('express')
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
app.use(session({secret: 'S5od42iHngd3jor2JOck8s'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"))
app.set('view engine', 'ejs')
// END CONFIG

    app.get("/", function(request, response){

      response.render("index", {title: "my Express project"});
    })

// Example of POST request
    app.post("/users", function(request, response){
      
      request.session.name = request.body.name
      console.log(request.session.name)

      console.log("POST DATA \n\n", request.body)
      response.redirect('/')
      // for .get hard-coded user data
      // var user_array = [
      //   {name:"Michael", email:'michael@gmail.com'},
      //   {name:"Jay", email:'jay@gmail.com'},
      //   {name:"Brendan", email:'brendan@gmail.com'},
      //   {name:"Andrew", email:'andrew@gmail.com'}
      // ];
      // response.render('users', {users: user_array})
    })

// Example of Get request and reading information
    app.get("/users/:id", function (req, res){
        console.log("The user id requested is:", req.params.id);
        // just to illustrate that req.params is usable here:
        res.send("You requested the user with id: " + req.params.id);
        // code to get user from db goes here, etc...
    });


// listen
app.listen(8000, function(){
  console.log('listening on 8000: ')
})
