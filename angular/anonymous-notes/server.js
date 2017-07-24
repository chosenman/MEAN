var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    // session = require('express-session'),
    app = express();

app.use(express.static(path.join(__dirname, './a-notes/dist')));
app.use(bodyParser.json());
// app.use(session({secret: 'S5od42iHngd3jor2JOck8s'}));

require('./config/db.js');
require('./config/routes.js')(app);

 app.listen(8000, function() {
     console.log("listening on port 8000");
 })
