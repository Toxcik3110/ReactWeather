var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(3001, function() {
	console.log('Express server running on port 3001')
})