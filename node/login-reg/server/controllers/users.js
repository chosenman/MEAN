var mongoose = require('mongoose');

var User = mongoose.model('User')
// Bcrypt Stuff
  var bcrypt = require('bcryptjs');

module.exports = {

  show: function(req, res){
    // DELETE ALL USERS
    // User.remove({},function(err, data){
    //   if(err){ console.log("can't DELETE") }
    // })
    // DELETE ALL USERS
    User.find({}, function(err, data){
      if(err){

      }
      res.render('index',{context: data})
    })
  },

  create: function(req, res){
    if(req.body.password != req.body.confirm_password) {
      res.render('index',{context:"",message:"Password field doesn't match"})
    } else {
      // password and re password match
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
              console.log("***** *************************");
              console.log("Registration has error: " + err);
              console.log("***** *************************");
              if(err.code == 11000) {
                var titleMsg = "Your email is already registered"
              } else {
                var titleMsg = "Error occured!"
              }
              res.render('index', {title: titleMsg, errors: user.errors, context: ""})
            } else {
              res.redirect('/')
            }

          })
          // password and re password match
    }
  },

  login: function(req, res){
    User.find({email: req.body.email}, function(err, data){
      if(err){
          console.log("error occured while querying login");
      } else {
          if(data.length == 0) {
            res.render('index',{context:"",style:"error",message:"NOPE, you are not in our database"})
          } else {

            if( this.passwordCheck(req.body.password, data[0].password) ) {

              res.render('index',{style:"success",message:"Congrats! You are successfully logined!"})
            } else {
              res.render('index',{style:"error",message:"Entered password doesn't match with password in data base"})
            }

          }
      }

    })
    passwordCheck =  function(pwFform, pFdataBase){
      if(bcrypt.compareSync(pwFform, pFdataBase)) {
        return true
      } else {
        return false
      }
    }

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
