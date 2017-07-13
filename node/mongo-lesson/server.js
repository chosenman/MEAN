var express = require('express')
var path = require('path')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
var app = express();

app.use(express.static(path.join(__dirname + "/static")));
app.set('views', path.join(__dirname, './views'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
// =============================================
var UserSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 2},
 email: { type: String, required: true, minlength: 6},
 password: { type: String, required: true, minlength: 6}
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
// =============================================

app.get('/',function(req, res){
  User.find({}, function(err, data){
    if(err){

    } else {
      console.log(data);
      for (i in data) {
        console.log(data[i].name);
      }

      res.render('index',{context: data, title:"", errors:""})
    }
  })
  console.log("GO");

})

app.post("/users", function(request, response){
  console.log(request.body);
  var user = new User({name: request.body.name, email: request.body.email, password: request.body.pw})
  user.save(function(err){
    if(err){
       response.render('index', {title: 'you have errors!', errors: user.errors, context: ""})
    }  else {
        response.redirect('/')
    }
  })

})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
