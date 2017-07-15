var mongoose = require('mongoose');


// =============================================
var QuoteSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 2},
 quote: { type: String, required: true, minlength: 6}
})
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
 // We are retrieving this Schema from our Models, named 'User'
