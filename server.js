var express = require('express');

//create our app
var app = express();

//define the app root to public
app.use(express.static('public'));

//run the server (port, closure)
app.listen(3000, function(){
  console.log('express run on port 3000');
});
