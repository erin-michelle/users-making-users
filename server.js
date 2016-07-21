// // Load the express module
// var express = require("express");
// //invoke var express and store the resulting application in var app
// var app = express();
// var path = require('path');
// app.get('/', function(request, response){
// 	response.send("<h1>Hello World</h1>");

// app.use(express.static(path.join(__dirname, './client')));
// })
// app.set('port', (process.env.PORT || 8357));
// app.listen(app.get('port'), function(){
//  console.log("listening on port ", app.get('port'));
// });
var express  = require( 'express' ),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();


app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));


app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});