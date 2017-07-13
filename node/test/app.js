

// / get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // console.log('client request URL: ', request);
    // console.log('client request URL: ', response);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if (request.url === '/dojo.html') {
      fs.readFile('dojo.html', 'utf8', function (errors, contents){
          response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
          response.write(contents);  //  send response body
          response.end(); // finished!
      });
    } else if (request.url === '/pexels-photo.jpg') {
      fs.readFile('pexels-photo.jpg',  function (errors, contents){
          response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
          response.write(contents);  //  send response body
          response.end(); // finished!
      });
    } else if (request.url === '/style.css') {
      fs.readFile('style.css',  function (errors, contents){
          response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
          response.write(contents);  //  send response body
          response.end(); // finished!
      });
    } else if (request.url === '/script.js') {
      fs.readFile('script.js',  function (errors, contents){
          response.writeHead(200, {'Content-Type': 'text/javascript'});  // send data about response
          response.write(contents);  //  send response body
          response.end(); // finished!
      });
    }

    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
