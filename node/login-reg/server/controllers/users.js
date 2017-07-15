var mongoose = require('mongoose');

var User = mongoose.model('User')


module.exports = {

  show: function(req, res){
    User.remove({})
    User.find({}, function(err, data){
      if(err){

      }
      res.render('index',{context: data})
    })
  },

  create: function(req, res){
    var user = new User({
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: req.body.password,
      birthday: req.body.birthday
    })
    console.log(req.body);
    user.save(function(err){
      if(err){
        console.log("Registration has error: " + err);
         res.render('index', {title: 'you have errors!', errors: user.errors, context: ""})
      }
      res.redirect('/')
    })
  }

// in the mongoose controller
// ...
  // this.create = function(myData){
  //   var newThing = new Thing();
  //   // function(err,thing){} is a callback,
  //   // err is the first parameter, if there is an error with that method.
  //   newThing.save(function(err, thing){
  //     //do stuff with err and thing
  //   });
  //   // ...
  // }


}
