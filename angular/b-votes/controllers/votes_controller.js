var mongoose = require('mongoose');

var Question = mongoose.model('Question');


module.exports = {


  questionAll: function(req, res){
    Question.find({}).exec(
      function(err, data) {
        if(err){
          console.log("All Question show error: " + err);
        } else {
          console.log("successfully got all questions");
          console.log(data);
         res.json({
              status: true,
              question: data
             })
        }
     })
  },

  questionNew: function(req, res){
      console.log(req.body)
      var question = new Question({
        question: req.body.text,
        user_name: req.body.name,
        o_1: req.body.o1,
        o_1_vote: 0,
        o_2: req.body.o2,
        o_2_vote: 0,
        o_3: req.body.o3,
        o_3_vote: 0,
        o_4: req.body.o4,
        o_4_vote: 0,
        date: new Date,
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

  questionShow: function(req, res, next){
    console.log("show one question started")
    // console.log(req.body)
    Question.findOne({_id: req.body.id})
    .exec(function(err, data) {
      if(err){
        console.log("One Question show error: " + err);
        } else {
          // console.log(data);
         res.json({ status: true, question:data })
        }
     });
  },

  optionVote: function(req, res){
     console.log(req.body)
     Question.findOne({_id: req.body.id})
     .exec(function(err, data) {
       if(err){
         console.log(" Vote  error: " + err);
         } else {
           data[req.body.voted_option]++
           data.save(function(err){
             if(err){
               res.json({status:false})
             } else{
               res.json({status:"succsess"})
             }
           })
          //  console.log(data);
          // res.json({ status: true, question:data })
         }
      });
      // res.json({status:"true" })
  },

  questionRemove: function(req, res, next){
    console.log("question remove started")
    console.log(req.body)
    Question.remove({_id: req.body.id})
    .exec(function(err, data) {
      if(err){
        console.log("Remove question error: " + err);
        } else {
          console.log(data);
         res.json({ status: true})
        }
     });
    },

}
