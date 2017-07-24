var mongoose = require('mongoose');

var Note = mongoose.model("Note")

module.exports = {

  show: function(req, res, next){
    Note.find({}).sort('-date').exec(
      function(err, data){
        if(err){
          console.log("error occured " + err);
        }
        res.json(data)
        console.log(data)
      })
    // Note.find({}, function(err, data){
    //   if(err){
    //     console.log("error occured " + err);
    //   }
    //   res.json(data)
    //   console.log(data)
    // })
  },

  new: function(req, res, next){
    // console.log("got req");
    // console.log(req.body);
    // console.log(req.body.text + " this is the /notes post route");
    var note = new Note({
      text: req.body.text,
      date: new Date()
    })
    note.save(function(err){
      if(err){
        console.log("***** *************************");
        console.log("Err while creating note: ");
        console.log("***** *************************");

        res.json({status: true})

      } else {
        res.json({status: true})
      }

    })
  },



}
