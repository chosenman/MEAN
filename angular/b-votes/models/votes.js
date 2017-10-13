var mongoose = require('mongoose');


var Schema = mongoose.Schema;


var QuestionSchema = new mongoose.Schema({
   question: { type: String },
   user_name: { type: String },

   o_1: { type: String },
   o_1_vote: { type: Number },

   o_2: { type: String },
   o_2_vote: { type: Number },

   o_3: { type: String },
   o_3_vote: { type: Number },

   o_4: { type: String },
   o_4_vote: { type: Number },

   date: { type: Date },
   Answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
})


mongoose.model('Question', QuestionSchema);
var Question = mongoose.model('Question');
