var path = require('path')
var store = require('../controllers/qa_controller.js');

module.exports = function(app){

// Login Reg
app.post('/user/login', (req, res, next)=>{
  store.userEnter(req, res, next)
});



// Questions
  app.get('/questions', (req, res, next)=>{
    store.showQuestions(req,res, next)
  });

  app.post('/answer/like', (req, res, next)=>{
    store.like(req,res, next)
  });
  app.post('/question/show', (req, res, next)=>{
    store.QuestionShow(req,res, next)
  });

  app.post('/question/new', (req, res, next)=>{
    store.newQuestion(req, res, next)
  });

  app.post('/question/answer', (req, res, next)=>{
    store.newAnswer(req, res, next)
  });


  app.all("*", (req,res,next) => {
      res.sendfile(path.resolve("./public/dist/index.html"))
  })

}
