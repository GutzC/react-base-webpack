var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(8080, function() {
	console.log('---> app listening on port 8080');
});
