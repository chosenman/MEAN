var express = require('express')
var path = require('path')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
var app = express();

app.use(express.static(path.join(__dirname + "/static")));
app.set('views', path.join(__dirname, './views'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
// =============================================
var QuoteSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 2},
 quote: { type: String, required: true, minlength: 6}
})
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'
// =============================================

app.get('/',function(req, res){


  res.render('index')
})

app.post("/quotes", function(request, response){
  console.log(request.body);
  var quote = new Quote({name: request.body.name, quote: request.body.quote})
  quote.save(function(err){
    if(err){
       response.render('index', {title: 'you have errors!', errors: quote.errors, context: ""})
    }  else {
        response.redirect('/quotes')
    }
  })

})

app.get("/quotes", function(request, response){
  Quote.find({}, function(err, data){
    if(err){

    } else {
      console.log(data);
      for (i in data) {
        console.log(data[i].name);
      }

      response.render('quotes',{context: data})
    }
  })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
