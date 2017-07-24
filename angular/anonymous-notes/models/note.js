var mongoose = require('mongoose');


var NoteSchema = mongoose.Schema({
    text: String,
    date: Date
})

mongoose.model('Note', NoteSchema);
