var express = require('express');
//Create our app
var app = express();
const PORT=process.env.PORT || 8000;//for heroku

app.use(function(req,res,next){

	if(req.headers['x-forwarded-proto'] ==='https'){
		res.redirect('http://'+req.hostname+req.url);
		next();
	}else{
		next();

	}
});

app.use(express.static('public'));
app.listen(PORT,function(){
console.log('Express server is up on port 8000'+PORT)
});