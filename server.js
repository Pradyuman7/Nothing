const express = require('express');

var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/', (req,res) => {

	//res.send("<h1>Hello, express!</h1>");

	res.send({
		name: 'Vasu',
		likes: [
		         'coding',
		         'singing'
		       ]
	});

});

app.get('/about', (req,res) => {

	res.send("About Page");

});

app.get('/bad', (req,res) => {

	res.send({
    errorMessage: 'Unable to handle request'
  });

});

app.listen(3000, () => {
	console.log('Listening on 3000');
});

