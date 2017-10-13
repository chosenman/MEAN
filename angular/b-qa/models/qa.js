var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
   name: { type: String, required: true },
   Answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
})
var QuestionSchema = new mongoose.Schema({
   question: { type: String, required: true, minlength: 10},
   details: { type: String },
   Answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
})
var AnswerSchema = new mongoose.Schema({
   _User: {type: Schema.Types.ObjectId, ref: 'User'},
   _Question: {type: Schema.Types.ObjectId, ref: 'User'},
   User: {type:String},
   likes: {type:Number},
   answer: {type: String },
   details: {type: String },

});

mongoose.model('Question', QuestionSchema);
var Question = mongoose.model('Question');

mongoose.model('Answer', AnswerSchema);
var Answer = mongoose.model('Answer');

mongoose.model('User', UserSchema);
var User = mongoose.model('User')
