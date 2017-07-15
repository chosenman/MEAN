var animals = require('../controllers/animals.js');


// =============================================
module.exports = function(app){

  app.get('/',function(req, res){
    animals.show(req,res)
  })

  app.get("/animal/new", function(req, res){
    res.render('addnew')
  })

  app.get("/animal/:id", function(req, res){
    animals.getOne(req, res)
  })

  app.get("/animal/edit/:id", function(req, res){
    animals.editAnimal(req,res)
  })

  app.post("/animal/edit/:id", function(req, res){
    animals.editAnimalPost(req,res)

  })

  app.get("/animal/del/:id", function(req, res){
    animals.delete(req,res)
  })

  app.post("/addnew", function(request, response){
    animals.create(request,response)

  })

}
