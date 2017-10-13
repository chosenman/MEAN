var path = require('path')
var store = require('../controllers/votes_controller.js');

module.exports = function(app){





// Questions
  app.get('/question/all', (req, res, next)=>{
    store.questionAll(req,res, next)
  });

  app.post('/question/new', (req, res, next)=>{
    store.questionNew(req,res, next)
  });

  app.post('/question/show', (req, res, next)=>{
    store.questionShow(req,res, next)
  });

  app.post('/question/delete', (req, res, next)=>{
    store.questionRemove(req,res, next)
  });

  app.post('/option/vote', (req, res, next)=>{
    store.optionVote(req, res, next)
  });



  app.all("*", (req,res,next) => {
      res.sendfile(path.resolve("./public/dist/index.html"))
  })

}
