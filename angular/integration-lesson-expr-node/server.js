var express = require('express')
const path = require('path');  // <---- added from our integ. lesson
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
app.use(express.static(path.join(__dirname, './my-lesson/dist')));   // <---- added from our integ. lesson
// app.use(express.static(path.join(__dirname + "/static")));

// app.set('views', path.join(__dirname, './server/views'));
app.use(session({secret: 'S5od42iHngd3jor2JOck8s'}));
app.use(bodyParser.urlencoded({extended: true}));



// store the function in a variable
var routes_setter = require('./server/config/routes.js');
 routes_setter(app);



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
