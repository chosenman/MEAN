var mongoose = require('mongoose');

// =============================================
var AnimalSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 2},
 description: { type: String, required: true, minlength: 6}
})
mongoose.model('Animal', AnimalSchema); // We are setting this Schema in our Models as 'User'
