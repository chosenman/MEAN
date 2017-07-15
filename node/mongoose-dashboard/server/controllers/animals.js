var mongoose = require('mongoose');

var Animal = mongoose.model('Animal') // We are retrieving this Schema from our Models, named 'User'


module.exports = {
  show: function(req, res){
    Animal.find({}, function(err, data){
      if(err){
        console.log("Index route Error: " + err);
      } else {
        res.render('index',{context: data})
      }
    })
  },
  getOne: function(req, res) {
    Animal.find({_id: req.params.id}, function(err, data){
      if(err){
        console.log("Index route Error: " + err);
      } else {
        console.log(req.params.id);
        console.log(data);
        res.render('animal',{context: data})
      }
    })
  },
  editAnimal: function(req,res){
    Animal.find({_id: req.params.id}, function(err, data){
      if(err){
        console.log("Index route Error: " + err);
      } else {
        console.log(req.params.id);
        console.log(data);
        res.render('edit',{context: data})
      }
    })
  },
  editAnimalPost: function(req,res){
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
  },
  delete: function(req,res){
    Animal.remove({_id: req.params.id}, function(err, data){
      if(err){
        console.log("Index route Error: " + err);
      } else {

        res.redirect('/')
      }
    })
  },
  create: function(request,response){
    console.log(request.body);
    var animal = new Animal({name: request.body.name, description: request.body.des})
    animal.save(function(err){
      if(err){
         response.render('addnew', {title: 'you have errors!', errors: animal.errors, context: ""})
      }  else {
          response.redirect('/')
      }
    })
  }

}
