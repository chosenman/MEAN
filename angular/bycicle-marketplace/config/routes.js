var path = require('path')
var store = require('../controllers/bike_store_controller.js');

module.exports = function(app){

// Login Reg
app.post('/user/login', (req, res, next)=>{
  store.userLogin(req, res, next)
});

app.post('/user/register', (req, res, next)=>{
  store.userRegister(req, res, next)
});

// Bikes
  app.get('/bikes', (req, res, next)=>{
    store.showBikes(req,res, next)
  });

  app.post('/bikes/new', (req, res, next)=>{
    store.newBike(req, res, next)
  });


  app.all("*", (req,res,next) => {
      res.sendfile(path.resolve("./public/dist/index.html"))
  })

}
