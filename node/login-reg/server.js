var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname + "/client/static")));
app.set('views', path.join(__dirname, './client/views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');


require('./server/config/mongoose.js');
// Bcrypt Stuff
  // var bcrypt = require('bcryptjs');   // or 'bcrypt' on some versions
  // bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  // bcrypt.compareSync(password, this.password);


  // store the function in a variable
  var routes_setter = require('./server/config/routes.js');
  // invoke the function stored in routes_setter and pass it the "app" variable
  routes_setter(app);


  // Setting our Server to Listen on Port: 8000
  app.listen(8000, function() {
      console.log("listening on port 8000");
  })
