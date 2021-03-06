var express = require('express');

//create our app
var app = express();

//get port from env because of heroku
const PORT = process.env.PORT || 3000;

//add middleware to forwart HTTPS requests to HTTP becuse weather api does not support https
app.use(function(req, res, next){
	if(req.headers['x-forwarded-proto'] === 'http' || req.hostname == 'localhost'){
		next();
	}else{
		res.redirect('http://' + req.headers.host + req.url);
	}
});

//define the app root to public
app.use(express.static('public'));

//run the server (port, closure)
app.listen(PORT, function(){
  console.log('express run on port ' + PORT);
});
