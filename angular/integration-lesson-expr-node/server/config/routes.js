var path = require('path');
module.exports = function(app){

  app.get('/products', (req, res, next)=>{
    res.json(true)
  });
  app.get('/products/:id', (req, res, next)=>{
    res.json(true)
  });
  app.post('/products', (req, res, next)=>{
    res.json(true)
  });
  app.put('/products/:id', (req, res, next)=>{
    res.json(true)
  });
  app.delete('/products/:id', (req, res, next)=>{
    res.json(true)
  });

  app.all("*", (req,res,next) => {
      res.sendfile(path.resolve("/../../my-lesson/dist/index.html"))
  });

}
