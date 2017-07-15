var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

var app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// =============================================
var PeopleSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 2},
})
mongoose.model('Human', PeopleSchema); // We are setting this Schema in our Models as 'User'
var Human = mongoose.model('Human') // We are retrieving this Schema from our Models, named 'User'
// =============================================

app.get('/', function(req, res){
  Human.find({}, function(err, data){
    if(err){
      console.log("error occured " + err);
    }
    res.json(data)
  })

})

app.get('/new/:name', function(req, res){
  var human = new Human({name:req.params.name})
  human.save(function(err){
    if(err){

    }
    res.redirect("/")
  })
})

app.get('/remove/:name', function(req, res){
  Human.remove({name:req.params.name},function(err){
    if(err){
      console.log("remove error: " + err);
    }
    res.redirect("/")
  })
})

// show document of particular person
app.get('/:name', function(req, res){
  Human.find({name:req.params.name}, function(err, data){
    if(err){
      console.log("error occured " + err);
    }
    res.json(data)
  })
})

app.listen(8000, function () {
  console.log('listening on 8000')
})
