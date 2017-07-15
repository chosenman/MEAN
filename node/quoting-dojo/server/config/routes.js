var quotes = require('../controllers/quotes.js');


module.exports = function(app) {

      app.get('/',function(req, res){
        res.render('index')
      })

      app.post("/quotes", function(request, response){
        quotes.create(request, response)
      })

      app.get("/quotes", function(request, response){
        quotes.show(request, response)
      })
}
