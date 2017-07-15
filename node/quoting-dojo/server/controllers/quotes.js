var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = {

  create: function(request, response){
    console.log(request.body);
    var quote = new Quote({name: request.body.name, quote: request.body.quote})
    quote.save(function(err){
      if(err){
         response.render('index', {title: 'you have errors!', errors: quote.errors, context: ""})
      }  else {
          response.redirect('/quotes')
      }
    })
  },

  show: function(request, response){
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
  }

}
