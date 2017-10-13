var mongoose = require('mongoose');

var Bike = mongoose.model('Bike');
var User = mongoose.model('User')

module.exports = {

  newBike: function(req, res, next){
    console.log(req.body)
    User.findOne({_id: req.body.user_id}, function(err, user){
      if(err) {
          res.json({status: false, message: "user with id ditn't found, step 1"})

      }
      else {
        console.log('just before new bike')
        console.log(user)
           var bike = new Bike({
               img: req.body.img,
               title: req.body.title,
               description: req.body.description,
               price: req.body.price,
               location: req.body.location,
               _User : user._id
           });
           bike.save(function(err){
             if(err) {
               res.json({status: false, message: "bike save error step 2"})
             }
             else {
                   user.save(function(err){
                      if(err){
                        res.json({status: false, message: "bike save error on step 3"})
                      }else {
                        res.json({status: true, message: "bike saved"})
                      }
                   });
             }
           });
      }
     });
  },
showBikes: function(req, res, next){
  Bike.find({}).exec(
    function(err, data){
      console.log("showBikes controller started...");
      if(err){
        console.log("error occured " + err);
      }
      else {
        console.log("here is all data got from DB")
        console.log(data)

          res.json(data)

        // res.json(data)

      }
    })
},
// /////////////////////
// // Login reg //////
// /////////////////////
  userLogin: function(req, res, next){
    User.findOne({email:req.body.email}).exec(
      function(err, data){
        console.log("userLogin controller started...");
        console.log(data);
        if(err){
          console.log("error occured " + err);

        }
        else {
          if(data) {
            console.log("here is all data got from DB")
            console.log(data)
            console.log("here is password from login form")
            console.log(req.body.password)
            if (data.password == req.body.password) {
              res.json({status:"succsess", user: data})
              console.log(data)
            } else {
              res.json({status:false})
            }
            // res.json(data)
          } else {
            res.json({status:false})
          }

        }
      })
  },

  userRegister: function(req, res, next){
    // var user = new User({
    //   text: req.body.text,
    //   date: new Date()
    // })
    // ======
    console.log("entered register controller")
    if(req.body.password != req.body.repassword) {
      res.json({reg:false, message: "password doesn't match"})
    } else {
      // password and re password match
          var user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
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
                var titleMsg = "Error occured! Your first name, last name and password have to be at least 4 characters"
              }
              res.json({reg:false, message: titleMsg})
            } else {
              User.findOne({email: user.email}).exec(
                function(err, data){
                  if(err){
                    console.log("error in reg ID retrieve " + err);
                  }
                  else {
                      if(data) {
                        res.json({reg:true, user: data})
                      } else {
                        res.json({status:false})
                      }
                  }
                })

            }

          })
          // password and re password match
    }
    // ======
  }

}
