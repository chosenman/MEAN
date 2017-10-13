var mongoose = require('mongoose');

var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
var User = mongoose.model('User')

module.exports = {


  newQuestion: function(req, res, next){
    console.log(req.body)

           var question = new Question({
               question: req.body.q,
               details: req.body.details,

           });
           question.save(function(err){
             if(err) {
               res.json({status: false, message: "qustion save error"})
             }
             else {
                  res.json({status: true, message: "qustion saved"})
             }
           });

  },



QuestionShow: function(req, res, next){
  console.log("questionShow started")
  console.log(req.body)
  Question.findOne({_id: req.body.q_id})
  .populate('Answers')
  .populate('Users')
  .exec(function(err, data) {
    if(err){
      console.log("One Question show error: " + err);
      } else {
        console.log(data);
       res.json({ status: true, question:data })
      }
   });


  },

showQuestions: function(req, res, next){
  Question.find({}).exec(
    function(err, data){
      console.log("showQuestions controller started...");
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

newAnswer: function(req, res, next){
  console.log(req.body)
  var user_id;
  User.findOne({_id: req.body.user_id}, function(err, user){
    if(err){
      console.log("error on finding user")
    } else {
      user_id = user._id
      console.log("user id")
      console.log(user_id)

          Question.findOne({_id: req.body.q_id}, function(err, question){
            if(err) {
                res.json({status: false, message: "user with id ditn't found, step 1"})

            }
            else {
              console.log('just before new answer')
              console.log(question)
                 var answer = new Answer({
                     User: user.name,
                     answer: req.body.answer,
                     details: req.body.details,
                     likes: 0,
                     _User : user_id,
                     _Question : question._id
                 });
                 user.Answers.push(answer);
                 question.Answers.push(answer);
                 answer.save(function(err){
                   if(err) {
                     res.json({status: false, message: "answer save error step 2"})
                   }
                   else {
                    //  user.
                     user.save(function(err){
                        if(err){
                          res.json({status: false, message: "user save error on step 3"})
                        }else {
                          question.save(function(err){
                             if(err){
                               res.json({status: false, message: "user save error on step 3"})
                             }else {

                               res.json({status: true, message: "answer saved"})
                             }
                          });
                        }
                     });
                        // res.json({status: true, message: "answer saved"})

                   }
                 });
            }
           });

 }
});

},


like: function(req, res, next) {
  console.log("in like function comes req.body: ")
  console.log(req.body)
  Answer.findOne({_id:req.body.q_id}).exec(
    function(err, data){
      console.log("entered Enter controller, here is data")
      console.log(data)
      if(err){
        console.log("error occured " + err);
        res.json({status:"false" })
      }
      else {
        console.log("data:")
        console.log(data)
        if(data!=null) {
            console.log("Success, we have this guy")
            console.log("here is all data got from DB")
            console.log(data)

            data.likes++
            data.save(function(err){
              if(err){
                res.json({status:false})
              } else{
                res.json({status:"succsess"})
              }
            })

          // res.json(data)
        } else {
          EnterFirstTime()
          // res.json({status:false})
        }

      }
    })
},
// /////////////////////
// // Login reg //////
// /////////////////////

  userEnter: function(req, res, next){

    User.findOne({name:req.body.name}).exec(
      function(err, data){
        console.log("entered Enter controller, here is data")
        console.log(data)
        if(err){
          console.log("error occured " + err);
          res.json({status:"false" })
        }
        else {
          console.log("data:")
          console.log(data)
          if(data!=null) {
              console.log("Success, we have this guy")
              console.log("here is all data got from DB")
              console.log(data)
              res.json({status:"succsess", user: data})
            // res.json(data)
          } else {
            EnterFirstTime()
            // res.json({status:false})
          }

        }
      })

      function EnterFirstTime() {
        // ======
        var user = new User({
          name: req.body.name
        })
        console.log(req.body);
        user.save(function(err){
          if(err){
            console.log("***** *************************");
            console.log("Enter has error while saving: " + err);
            console.log("***** *************************");
            res.json({status:false })
          } else {
            User.findOne({name: user.name}).exec(
              function(err, data){
                if(err){
                  console.log("error in reg ID retrieve " + err);
                }
                else {
                    if(data) {
                      res.json({status:true, user: data})
                    } else {
                      res.json({status:false})
                    }
                }
              })

          }

        })
        // ======
      }


  }

}
