var path = require('path');
var notes = require('../controllers/notes.js');

module.exports = function(app){

  app.get('/notes', (req, res, next)=>{
    notes.show(req,res, next)
  });

  app.post('/notes', (req, res, next)=>{
    notes.new(req, res, next)
  });

  // app.get('/notes/:id', (req, res, next)=>{
  //   res.json(true)
  // });
  // app.put('/notes/:id', (req, res, next)=>{
  //   res.json(true)
  // });
  // app.delete('/notes/:id', (req, res, next)=>{
  //   res.json(true)
  // });

  app.all("*", (req,res,next) => {
      res.sendFile(path.resolve("./a-notes/dist/index.html"))
  });

}
