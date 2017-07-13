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
var AnimalSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 2},
 description: { type: String, required: true, minlength: 6}
})
mongoose.model('Animal', AnimalSchema); // We are setting this Schema in our Models as 'User'
var Animal = mongoose.model('Animal') // We are retrieving this Schema from our Models, named 'User'
// =============================================

app.get('/',function(req, res){
  Animal.find({}, function(err, data){
    if(err){
      console.log("Index route Error: " + err);
    } else {
      res.render('index',{context: data})
    }
  })
})

app.get("/animal/new", function(req, res){
  res.render('addnew')
})

app.get("/animal/:id", function(req, res){
  Animal.find({_id: req.params.id}, function(err, data){
    if(err){
      console.log("Index route Error: " + err);
    } else {
      console.log(req.params.id);
      console.log(data);
      res.render('animal',{context: data})
    }
  })
})

app.get("/animal/edit/:id", function(req, res){
  Animal.find({_id: req.params.id}, function(err, data){
    if(err){
      console.log("Index route Error: " + err);
    } else {
      console.log(req.params.id);
      console.log(data);
      res.render('edit',{context: data})
    }
  })
})

app.post("/animal/edit/:id", function(req, res){

  Animal.update({_id: req.params.id}, {name: req.body.name, description: req.body.des}, function(err, data){
    if(err){
      console.log("Index route Error: " + err);
    } else {
      console.log(req.params.id);
      console.log(data);
      var url = "/animal/" + req.params.id;
      res.redirect(url)
    }
  })
})

app.get("/animal/del/:id", function(req, res){
  Animal.remove({_id: req.params.id}, function(err, data){
    if(err){
      console.log("Index route Error: " + err);
    } else {

      res.redirect('/')
    }
  })
})

app.post("/addnew", function(request, response){
  console.log(request.body);
  var animal = new Animal({name: request.body.name, description: request.body.des})
  animal.save(function(err){
    if(err){
       response.render('addnew', {title: 'you have errors!', errors: animal.errors, context: ""})
    }  else {
        response.redirect('/')
    }
  })

})



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
