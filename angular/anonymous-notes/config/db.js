var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var fs = require('fs');

var promise = mongoose.connect('mongodb://localhost/notesDatabase', {
  useMongoClient: true
});

promise.then(()=> {
  console.log("SUCCESSFULLY CONNECTED TO DATABASE")
})


var models_path = __dirname + "/../models"

// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
});
