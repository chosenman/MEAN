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
var Schema = mongoose.Schema;
var PostSchema = new mongoose.Schema({
   name: { type: String, required: true, minlength: 4},
   post: { type: String, required: true, minlength: 6},
   comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})
var CommentSchema = new mongoose.Schema({
   _post: {type: Schema.Types.ObjectId, ref: 'Post'},
   name: {type: String, required: true },
   com_text: {type: String, required: true }
}, {timestamps: true });
// Email validation example
// serSchema.path('email').required(true, 'User email cannot be blank');

  mongoose.model('Comment', CommentSchema);
  var Comment = mongoose.model('Comment');
  mongoose.model('Post', PostSchema);
  var Post = mongoose.model('Post')
// =============================================

app.get('/',function(req, res){
  // Post.find({}, function(err, data){
  //   if(err){
  //     console.log("Index route Error: " + err);
  //   } else {
  //     .populate('comments')
  //     .exec(function(err, post){
  //       res.render('index',{context: data})
  //     })
  //   }
  // })
  Post.find({})
  .populate('comments')
  .exec(function(err, data) {
    if(err){
      console.log("Index route Error: " + err);
      } else {
        console.log(data);
       res.render('index', {context: data});
      }
   });
})


app.post("/newpost", function(req, res){
  console.log(req.body);
  var post = new Post({name: req.body.name, post: req.body.post})
  post.save(function(err){
    if(err){
       res.render('addnew', {title: 'you have errors!', errors: post.errors, context: ""})
    }  else {
        res.redirect('/')
    }
  })

})

app.post('/posts/:id', function (req, res){
  Post.findOne({_id: req.params.id}, function(err, post){
         var comment = new Comment(req.body);
         comment._post = post._id;
         comment.name = req.body.name;
         comment.com_text = req.body.comment;
         post.comments.push(comment);
         comment.save(function(err){
                 post.save(function(err){
                       if(err) { console.log('Error'); }
                       else { res.redirect('/'); }
                 });
         });
   });
 });



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
