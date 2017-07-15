var mongoose = require('mongoose');



// =============================================
var UserSchema = new mongoose.Schema({
 email: { type: String, required: true, minlength: 6},
 first_name: { type: String, required: true, minlength: 2},
 last_name: { type: String, required: true, minlength: 6},
 password: { type: String, required: true, minlength: 6},
 birthday: { type: Date, required: true}
},
{ timestamps: true });

// =============================================
// UserSchema.methods.addJayToString = function(input){
//   return input+"Jay";
// }
//
// UserSchema.pre('save', function(done){
//   this.name = this.addJayToString(this.name);
//   done();
// });

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
